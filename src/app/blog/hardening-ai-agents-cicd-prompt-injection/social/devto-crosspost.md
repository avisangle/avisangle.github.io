# Dev.to + Hashnode Cross-post - Harden Claude Code GitHub Actions

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py hardening-ai-agents-cicd-prompt-injection --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py hardening-ai-agents-cicd-prompt-injection --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Harden Claude Code GitHub Actions: Prompt Injection Defense
DESCRIPTION: How to harden Claude Code and AI agents in GitHub Actions against the Comment and Control prompt injection attack: allowlists, OIDC, and script caps.
TAGS: claudecode, security, devops, github
CANONICAL_URL: https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection
COVER_IMAGE: https://avinashsangle.com/og-hardening-ai-agents-cicd-prompt-injection.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection).

Claude Code's GitHub Action is not hardened against prompt injection by default. Anthropic says so in their own docs. To defend a workflow against the April 2026 Comment and Control CVE (CVSS 9.4), allowlist tools with `--allowedTools`, scope `GITHUB_TOKEN` to read-only, cap script invocations, filter comments by actor, and move API keys to OIDC.

## TL;DR

- The April 2026 Comment and Control CVE (CVSS 9.4) leaked `ANTHROPIC_API_KEY`, `GITHUB_TOKEN`, and Copilot tokens from Claude Code, Gemini CLI, and GitHub Copilot Agent via nothing more than a PR title or hidden HTML comment.
- Anthropic's fix added `--disallowed-tools Bash(ps:*)`. Blocklists are whack-a-mole. Allowlist tools with `--allowedTools` instead.
- Scope `GITHUB_TOKEN` to read-only, move secrets to OIDC via Bedrock or Vertex AI, cap script invocations with `CLAUDE_CODE_SCRIPT_CAPS`, and filter who can trigger the agent.
- Layer on `harden-runner` in block mode with an egress allowlist so an injected shell can't phone home even if upstream controls fail.

## What Comment and Control Actually Exploits

On April 15, 2026, security researcher Aonan Guan (with Johns Hopkins collaborators) published [Comment and Control](https://oddguan.com/blog/comment-and-control-prompt-injection-credential-theft-claude-code-gemini-cli-github-copilot/), a cross-vendor prompt injection that hijacks three different AI coding agents running in GitHub Actions. One attack shape, three vendors: Anthropic Claude Code (rated CVSS 9.4 Critical), Google Gemini CLI, and GitHub Copilot Agent.

The attack is embarrassingly simple. For Claude Code, the researcher opened a PR with a title that broke the agent's prompt context and steered it into running `whoami` plus a base64 dump of the environment. For Gemini CLI, an injected *Trusted Content Section* inside an issue comment overrode safety instructions and exposed the API key. For Copilot Agent, a hidden HTML comment carrying `ps auxeww | base64 -w0` got parsed by the agent (invisible in GitHub's rendered view) and dumped the entire environment, including `GITHUB_TOKEN`, `GITHUB_COPILOT_API_TOKEN`, and `GITHUB_PERSONAL_ACCESS_TOKEN`, into a committed file.

According to [The Register (April 15, 2026)](https://www.theregister.com/2026/04/15/claude_gemini_copilot_agents_hijacked/), all three vendors patched quietly. Anthropic's fix, commit `25e460e`, added `--disallowed-tools 'Bash(ps:*)'`. Google and GitHub paid bug bounties of $1,337 and $500 respectively.

Here is the part most news coverage buried. Anthropic's own `claude-code-action` [security.md](https://github.com/anthropics/claude-code-action/blob/main/docs/security.md) states plainly: *"The action is not designed to be hardened against prompt injection."* That line is easy to miss if you copy a YAML snippet from a tutorial and ship it. The rest of this post is what you do anyway.

## The Threat Model for AI Agents in CI/CD

Before touching YAML, map the attack surface. An AI agent in GitHub Actions has three kinds of untrusted input and three kinds of valuable output. Any path from an untrusted input to an output is an exploit primitive.

| Untrusted input | Default agent capability | Hardening control |
| --- | --- | --- |
| PR title / body | Read + Bash + write comment | `--allowedTools` allowlist, actor filter |
| Issue body / comment | Same as above | `include_comments_by_actor` |
| File contents in diff | Read + Bash + Edit | Tool allowlist, `CLAUDE_CODE_SCRIPT_CAPS` |
| Hidden HTML comment | Parsed by the agent | Built-in sanitization + review raw content |
| MCP server output | Widens tool set at runtime | Audit MCP server list, pin versions |

The valuable outputs are the ones the attacker wants: repository secrets (`ANTHROPIC_API_KEY`, third-party tokens), the `GITHUB_TOKEN` (which can create branches, push commits, and comment when scoped wide), and network egress (so the shell can exfiltrate whatever it grabs). Every control below targets at least one of those three.

One more framing to keep in mind. Prompt injection is not a bug you can patch out. As the Comment and Control author puts it, injected text is just *context the agent is designed to process*. Hardening means reducing what the agent can *do* with a hostile context, not pretending it will never receive one.

## Allowlist Tools, Never Blocklist

Anthropic's April fix for Comment and Control (commit `25e460e`) added a single line: `--disallowed-tools 'Bash(ps:*)'`. That stops `ps auxeww`. It doesn't stop `cat /proc/self/environ`, `printenv`, `env | base64`, or reading `/etc/*release`. The researcher's own line is the right one to internalise: *"Blocklisting is whack-a-mole."*

Flip the default. Pass `claude_args` with an explicit tool allowlist scoped to the job's real work. A review agent reads and greps. A triage agent reads GitHub metadata. A test-runner runs one test command. Nothing more.

```yaml
# Review agent - reads code, reads PR, never writes bash
- uses: anthropics/claude-code-action@main
  with:
    anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
    claude_args: '--allowedTools "Read,Grep,Glob,Bash(gh pr view:*),Bash(gh pr diff:*)"'
```

For agents that must edit code, scope shell execution to the specific commands you expect. `Bash(npm test:*)` is dramatically safer than `Bash(*)`. The wildcard after the colon is the glob for arguments; the command name in front of the colon is anchored.

```yaml
# PR-fix agent - scoped shell
claude_args: >
  --allowedTools "Read,Edit,Write,
    Bash(npm test:*),
    Bash(npm run lint:*),
    Bash(git add:*),Bash(git commit:*),Bash(git push:*)"
```

A starter set that covers six common agent roles:

- **Review agent:** `Read, Grep, Glob, Bash(gh pr view:*), Bash(gh pr diff:*)`
- **Triage / labeler:** `Read, Bash(gh issue view:*), Bash(gh issue edit:*)`
- **Test runner:** `Read, Bash(npm test:*), Bash(pytest:*)`
- **Doc writer:** `Read, Edit, Write, Bash(git add:*), Bash(git commit:*)`
- **Release notes:** `Read, Bash(git log:*), Bash(gh release create:*)`
- **PR-fix agent:** `Read, Edit, Write, Bash(npm test:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*)`

If your agent's allowlist grows past ten tools, that is a signal the job is doing too much. Split it.

## Scope GITHUB_TOKEN to Read-Only

The Copilot Agent leak in Comment and Control committed a base64 dump of the environment to the attacker's branch. `GITHUB_TOKEN` was in that dump with write scope, because Copilot Agent assumed the default repo permission set. That default is the problem.

Set the workflow-level `permissions` block to `read-all` by default, then elevate only the jobs that actually need to write. Per the [GitHub secure-use reference](https://docs.github.com/en/actions/reference/security/secure-use), every token scope you don't explicitly need is a token scope you've handed to the attacker.

```yaml
name: Claude Review

# Default every job to read-only. Override only where needed.
permissions: read-all

on:
  pull_request:

jobs:
  review:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: read   # The agent reads PR metadata only
      contents: read        # No writes to the repo
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 2
      - uses: anthropics/claude-code-action@main
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          claude_args: '--allowedTools "Read,Grep,Bash(gh pr view:*)"'
```

A separate job gets write access *only* when the agent needs to comment or push. Even then, `pull-requests: write` is enough. `contents: write` and `pull-requests: admin` are almost never justified in an AI-driven workflow.

## Move Secrets to OIDC via Bedrock or Vertex AI

Any secret that sits in GitHub Actions is a secret your agent can leak. If you store `ANTHROPIC_API_KEY` directly, a successful prompt injection reads it through `printenv` (or equivalent) and you're burning a rotation cycle. OIDC removes the static key entirely.

The pattern: GitHub Actions presents an OIDC token, AWS IAM (or Google Cloud) trusts that token for a specific repo/branch/job, and the action assumes a short-lived role. Claude is reached through Amazon Bedrock or Google Vertex AI, both of which have first-class Claude support. Per a [BetterLink walkthrough (April 2026)](https://eastondev.com/blog/en/posts/dev/20260418-github-actions-secrets/), OIDC eliminates the rotation schedule entirely because credentials are minted per run.

```yaml
permissions:
  id-token: write   # Required for OIDC
  contents: read

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 2

      # Assume a short-lived role via OIDC. No static AWS keys.
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789012:role/claude-code-review
          aws-region: us-east-1

      - uses: anthropics/claude-code-action@main
        with:
          use_bedrock: true
          model: anthropic.claude-sonnet-4-6
          claude_args: '--allowedTools "Read,Grep,Bash(gh pr view:*)"'
```

The IAM role's trust policy should pin the repository and branch so no other workflow (or fork) can assume it. Bedrock's Claude availability lags Anthropic direct by a few weeks, which is the main trade-off. Vertex AI is similar for Google Cloud shops.

If OIDC is too much lift for a small repo, the minimum viable alternative is a dedicated API key with usage caps set in the [Anthropic Console](https://console.anthropic.com/settings/keys). A compromised workflow still burns the cap, not your whole org's spend.

## Cap Script Invocations and Filter Triggers

Two defenses that most tutorials skip. Both are short YAML changes with large blast-radius reductions.

### CLAUDE_CODE_SCRIPT_CAPS

An injected prompt loves loops. *"Run this script ten times,"* *"keep labeling until you get through every issue."* The `CLAUDE_CODE_SCRIPT_CAPS` environment variable caps how many times any scripted tool can be invoked per run. Set it for every script the agent can trigger.

```yaml
env:
  # Default-on since April 2026. Verify older workflows.
  CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: 1

  # Hard stop on runaway tool calls.
  CLAUDE_CODE_SCRIPT_CAPS: '{"edit-issue-labels.sh": 2, "dangerous-script.sh": 1}'
```

`CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` has been default-on since the April release. Don't unset it. A separate landmine: setting `ACTIONS_STEP_DEBUG: true` (often done for debugging) auto-enables `show_full_output`, which prints full tool outputs including secrets. Audit your repo secrets and variables for this flag before you ship.

### Filter who can trigger the agent

Content filters fight yesterday's attack. Actor filters don't. `include_comments_by_actor` takes a list of trusted usernames. `exclude_comments_by_actor` blocks specific bots. Both are enforced before Claude ever reads the comment body.

```yaml
- uses: anthropics/claude-code-action@main
  with:
    # Only maintainers can trigger the agent via comment.
    include_comments_by_actor: 'avisangle,core-maintainer-2'

    # Bot PRs are fine but don't auto-invoke the agent.
    exclude_comments_by_actor: 'dependabot[bot],renovate[bot]'

    # Explicit bot allowlist beats wildcards.
    # NEVER use allowed_bots: '*' on a public repo.
    allowed_bots: 'dependabot,renovate'
```

One more rule: avoid `pull_request_target` and `issue_comment` triggers unless you have approval gates in front of them. Both run in the base branch context with repo secrets available, which is exactly what a hostile fork PR needs. Plain `pull_request` runs in the fork's context with `GITHUB_TOKEN` downgraded to read-only by default.

## Add a Network Egress Allowlist with Harden-Runner

Every control so far reduces what the agent can do. This one reduces where the agent can phone home even if everything else fails. [Step Security's harden-runner](https://github.com/step-security/harden-runner) monitors and blocks outbound traffic from the GitHub runner.

Most tutorials show it in `audit` mode, which only logs. That's useful for discovery, but it doesn't stop exfiltration. [StepSecurity's own guide](https://www.stepsecurity.io/blog/anthropics-claude-code-action-security-how-to-secure-claude-code-in-github-actions-with-harden-runner) admits the default config leaves Claude Code with unrestricted network access to `api.anthropic.com`, `registry.npmjs.org`, `github.com`, and `pypi.org`. Switch to block mode and pin the exact endpoints you expect.

```yaml
- uses: step-security/harden-runner@v2
  with:
    egress-policy: block
    allowed-endpoints: >
      api.anthropic.com:443
      github.com:443
      objects.githubusercontent.com:443
      registry.npmjs.org:443
      pypi.org:443
      files.pythonhosted.org:443

- uses: actions/checkout@v4
  with:
    fetch-depth: 2

- uses: anthropics/claude-code-action@main
  with:
    anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
```

The audit-first workflow is: run harden-runner in `audit` mode for a week, collect the domains Claude actually hits (check the Step Security insights tab), then lock the list and flip to `block`. If an injection ever escapes the tool allowlist, it still can't POST to `attacker.com`.

One gotcha: if you use Bedrock, swap `api.anthropic.com:443` for the Bedrock endpoint (for example, `bedrock-runtime.us-east-1.amazonaws.com:443`). Vertex AI uses `*.googleapis.com:443`. Narrow the list based on which path you chose in the OIDC section.

## The Before/After Hardened Workflow

Here is the default workflow most tutorials publish. It will run. It is also the shape that Comment and Control hit.

```yaml
# .github/workflows/claude.yml (before)
name: Claude

on:
  issue_comment:
    types: [created]
  pull_request:
    types: [opened, synchronize]

jobs:
  claude:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@main
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
```

And the hardened version with every control from this article applied:

```yaml
# .github/workflows/claude.yml (after)
name: Claude

# Read-only by default. Elevate per job.
permissions: read-all

on:
  pull_request:        # Avoid pull_request_target; fork context runs read-only
  issues:
    types: [opened]    # No issue_comment; it runs in base context

env:
  # Default-on, but be explicit.
  CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: 1
  # Hard stop on runaway tool loops.
  CLAUDE_CODE_SCRIPT_CAPS: '{"edit-issue-labels.sh": 2}'

jobs:
  review:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write   # Write only to post the review comment
      contents: read
      id-token: write        # For OIDC to AWS Bedrock

    steps:
      # 1. Block network egress to anything not on the allowlist.
      - uses: step-security/harden-runner@v2
        with:
          egress-policy: block
          allowed-endpoints: >
            bedrock-runtime.us-east-1.amazonaws.com:443
            github.com:443
            objects.githubusercontent.com:443
            registry.npmjs.org:443

      # 2. Checkout with enough history for the diff, nothing more.
      - uses: actions/checkout@v4
        with:
          ref: ${{ github.event.pull_request.head.sha || github.sha }}
          fetch-depth: 2

      # 3. OIDC to Bedrock. No static ANTHROPIC_API_KEY in secrets.
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789012:role/claude-code-review
          aws-region: us-east-1

      # 4. Allowlisted tools, explicit bot list, signed commits.
      - uses: anthropics/claude-code-action@main
        with:
          use_bedrock: true
          model: anthropic.claude-sonnet-4-6
          use_commit_signing: true
          allowed_bots: 'dependabot,renovate'
          include_comments_by_actor: 'avisangle'
          claude_args: >
            --allowedTools "Read,Grep,Glob,
              Bash(gh pr view:*),
              Bash(gh pr diff:*)"
```

Each change maps to an attack primitive. `permissions: read-all` neutralises the Copilot-style `GITHUB_TOKEN` exfiltration. `egress-policy: block` stops the shell from POSTing anywhere. OIDC removes the static key. `--allowedTools` narrows what an injected prompt can make the agent do. `CLAUDE_CODE_SCRIPT_CAPS` kills loops. `include_comments_by_actor` blocks the crafted PR-title vector from unknown accounts. `use_commit_signing: true` gives you a forensic trail if anything slips through.

The before/after diff is 35 lines. That is the cost of hardening a workflow. Compared to rotating an exfiltrated `ANTHROPIC_API_KEY` and auditing every downstream service it touches, it is a bargain.

## What Hardening Still Can't Fix

Honesty section. Even a fully hardened workflow has residual risk. Prompt injection at its core is *context the agent is designed to process*, and no amount of YAML changes that.

Three residual risks to plan for. First, file contents in the diff can still steer the agent. Your allowlist stops *most* exfiltration paths, but a clever prompt could still coax the agent into producing a review comment that tells you a real vulnerability is benign. Keep humans in the loop for merge decisions.

Second, MCP servers added at runtime widen the blast radius. If your CLAUDE.md or workflow pulls in an MCP server from a tutorial, audit the server's source and pin the version. The Register reported in April 2026 that [up to 200,000 MCP servers](https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/) were at risk from a design flaw around the same time as Comment and Control.

Third, model behaviour drifts. A Sonnet 4.6 agent and a Sonnet 4.7 agent are not the same system. Test your workflow's safety posture whenever you bump the model. An allowlist you can trust on one model version is a starting point, not a finish line, on the next.

The practical ceiling on AI-in-CI safety is a human approval gate before the agent writes code, merges a PR, or touches a secrets-bearing job. Anthropic ships the required-approval-for-external-contributors switch for exactly this reason.

## Frequently Asked Questions

### What is the Comment and Control prompt injection attack?

Comment and Control is a cross-vendor prompt injection disclosed April 15, 2026 by Aonan Guan. A crafted PR title, issue body, or hidden HTML comment steers Claude Code, Gemini CLI, and GitHub Copilot Agent into leaking secrets. Anthropic rated the Claude Code case CVSS 9.4 Critical.

### Is Claude Code's GitHub Action hardened against prompt injection by default?

No. Anthropic's own security docs state the action is not designed to be hardened against prompt injection. Default sanitization strips HTML comments and invisible characters, but content in the diff can still steer the agent. Hardening is the implementation team's responsibility.

### How do I restrict which tools Claude Code can run in CI?

Pass `claude_args` with an `--allowedTools` allowlist, for example `'Read,Grep,Bash(gh pr view:*)'`. Allowlist only the tools the job actually needs. Blocklists like `--disallowed-tools Bash(ps:*)` are bypassable. A review agent should never see `Bash(*)` or arbitrary shell.

### Can I use OIDC instead of storing ANTHROPIC_API_KEY in GitHub secrets?

Yes. Route Claude through AWS Bedrock or Google Vertex AI and authenticate GitHub Actions via OIDC with role assumption. The workflow gets short-lived credentials per run instead of a static `ANTHROPIC_API_KEY`. Blast radius is bounded by IAM policy, and there is no key to rotate.

### Why is pull_request_target dangerous for AI code review agents?

`pull_request_target` and `issue_comment` run in the base branch context with repo secrets available, even for fork PRs. A prompt injection in a fork PR title can exfiltrate `ANTHROPIC_API_KEY` or `GITHUB_TOKEN`. Use the plain `pull_request` trigger unless you have hardened the job with approval gates.

### What does CLAUDE_CODE_SCRIPT_CAPS do?

`CLAUDE_CODE_SCRIPT_CAPS` is an environment variable that caps how many times a scripted tool can be invoked per run. Setting it to a JSON object like `{"edit-issue-labels.sh": 2}` stops an injected prompt from triggering runaway loops. It complements `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB`, which is on by default since April 2026.

### How do I allowlist network egress for a Claude Code workflow?

Add `step-security/harden-runner@v2` with `egress-policy` set to `block` and an `allowed-endpoints` list covering `api.anthropic.com:443`, `github.com:443`, and your package registries. Default audit mode only logs connections. Block mode stops an injected shell from reaching attacker-controlled domains even if other controls fail.

### Does allowed_bots '*' put my repo at risk?

Yes on public repos. The wildcard lets any external GitHub App trigger the action, which widens the attack surface. Use an explicit list such as `allowed_bots: 'dependabot,renovate'`. Combine with `include_comments_by_actor` to restrict which human accounts can trigger the agent.
