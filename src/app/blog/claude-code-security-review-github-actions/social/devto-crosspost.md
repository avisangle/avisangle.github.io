# Dev.to + Hashnode Cross-post - Claude Code Security Review GitHub Action

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py claude-code-security-review-github-actions --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py claude-code-security-review-github-actions --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Claude Code Security Review GitHub Action: 2026 Setup Guide
DESCRIPTION: Set up Anthropic's Claude Code Security Review GitHub Action: workflow YAML, false positive tuning, cost math, and comparison with Semgrep and Snyk.
TAGS: claudecode, devsecops, githubactions, ai
CANONICAL_URL: https://avinashsangle.com/blog/claude-code-security-review-github-actions
COVER_IMAGE: https://avinashsangle.com/og-claude-code-security-review-github-actions.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/claude-code-security-review-github-actions).

The Claude Code Security Review GitHub Action (`anthropics/claude-code-security-review`) uses Claude to scan pull request diffs for vulnerabilities and post findings as PR comments. Add it as a workflow, supply a Claude API key enabled for Claude Code, and you get context-aware SAST on every PR in under 20 minutes.

## TL;DR

- Official action at `anthropics/claude-code-security-review@main` - 4,300 stars, MIT, Python-based, maintained by Anthropic.
- Requires `CLAUDE_API_KEY` enabled for both Claude API and Claude Code usage. Store it as a repo secret.
- Default model is `claude-opus-4-1-20250805`, switchable through the `claude-model` input. Nine total inputs cover scope, timeout, and custom instructions.
- Not hardened against prompt injection. Turn on "Require approval for all external contributors" before accepting fork PRs.

## What Is the Claude Code Security Review GitHub Action?

The Claude Code Security Review GitHub Action is an AI-powered SAST (static application security testing) tool built by Anthropic. You install it as a GitHub Action, configure a Claude API key, and on every pull request it reads the diff, reasons about the code semantically, and posts vulnerability findings as PR comments. The [official repository](https://github.com/anthropics/claude-code-security-review) has 4,300 stars and 388 forks as of April 2026.

The big difference between this and a classic SAST tool is that Claude doesn't run pattern rules. It reads your code the way a human reviewer would, follows data flow across files, and flags issues that need context to understand: broken access control, business-logic flaws, insecure deserialization, auth bypass through an unusual state machine.

A common point of confusion: this action is a different product from Anthropic's Claude Code Review service (announced March 2026). Claude Code Review is a managed service that runs inside claude.ai, costs roughly $15 to $25 per PR, and is restricted to Team plan customers. The GitHub Action covered here runs in your own repo, bills tokens to your API key, and works on any plan that can enable Claude Code.

I've been running this action on my portfolio site and a few side projects since early April. The findings have been mostly useful, with occasional over-eager flags on test fixtures. The tuning knobs are solid once you know where to look.

## How to Set Up Claude Code Security Review on GitHub

Setup takes about ten minutes if you already have a Claude API key. If you don't, you'll need to create one first and enable it for Claude Code in the Anthropic Console.

### Step 1: Generate and enable a Claude API key

Log into the [Anthropic Console](https://console.anthropic.com/settings/keys), create an API key, and make sure it is enabled for both the Claude API and Claude Code. The action fails with an unauthorized error if Claude Code isn't toggled on, and the error message doesn't tell you which toggle is missing.

### Step 2: Add the key as a repo secret

In your GitHub repo, go to **Settings > Secrets and variables > Actions**, click **New repository secret**, and paste the key with the name `CLAUDE_API_KEY`. Don't put it in a workflow file literal, even briefly.

### Step 3: Create the workflow file

Drop the following into `.github/workflows/security-review.yml`:

```yaml
name: Claude Security Review

permissions:
  pull-requests: write
  contents: read

on:
  pull_request:

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          ref: ${{ github.event.pull_request.head.sha || github.sha }}
          fetch-depth: 2

      - uses: anthropics/claude-code-security-review@main
        with:
          comment-pr: true
          claude-api-key: ${{ secrets.CLAUDE_API_KEY }}
```

Two bits are easy to miss. `fetch-depth: 2` is required so that the checkout step pulls both the base and head commits. Skip it and every file looks "new" to the scanner, which wastes tokens and distorts findings. The explicit `permissions` block matters because modern GitHub repos default to restricted permissions on the `GITHUB_TOKEN`, and the action can't post a comment without `pull-requests: write`.

### Step 4: Lock down fork PRs

Before merging the workflow, go to **Settings > Actions > General** and enable **Require approval for all external contributors**. Skip this step and a random fork PR can try to prompt-inject the reviewer into dismissing real findings.

### Step 5: Open a test PR

On a first run against a 200-line Python diff, my scan finished in roughly 3 minutes and came back with two findings (both legit). That output pattern is typical for small PRs on Sonnet 4.6. Larger PRs on Opus can take 10 to 15 minutes.

## All Nine Action Inputs Explained

The action exposes nine inputs. Most people only need to set two or three.

| Input | Default | When to change |
|-------|---------|----------------|
| `claude-api-key` | Required | Always pass from secrets, never literal |
| `comment-pr` | `true` | Set false for silent runs that only produce artifacts |
| `upload-results` | `true` | Keep true for audit trails and SARIF workflows |
| `exclude-directories` | None | Skip generated code, vendor, node_modules, test fixtures |
| `claude-model` | `claude-opus-4-1-20250805` | Switch to Sonnet or Haiku to cut cost |
| `claudecode-timeout` | `20` (minutes) | Raise for large PRs or monorepos |
| `run-every-commit` | `false` | Leave false - enabling multiplies cost and noise |
| `false-positive-filtering-instructions` | None | Point at an org-specific FP markdown file |
| `custom-security-scan-instructions` | None | Point at a custom rules markdown file |

The action also emits two outputs: `findings-count` (an integer) and `results-file` (a path to the JSON report). A pattern I use in stricter repos is to fail the job when `findings-count` exceeds zero:

```yaml
- uses: anthropics/claude-code-security-review@main
  id: review
  with:
    claude-api-key: ${{ secrets.CLAUDE_API_KEY }}

- name: Fail on any finding
  if: steps.review.outputs.findings-count != '0'
  run: |
    echo "Security review flagged ${{ steps.review.outputs.findings-count }} issue(s)."
    exit 1
```

## How to Reduce False Positives

The action already does a lot of filtering. Every flagged vulnerability passes through a verification sub-task that re-analyzes the finding against actual code behavior. Anything with a confidence score below 8 is dropped. Entire categories are auto-excluded: denial of service, rate limiting, memory/CPU exhaustion, input validation without proven impact, most open-redirect findings.

The remaining noise comes from code that looks suspicious in isolation but is safe in context.

### Write a false-positive filtering file

This is the input almost nobody shows an example of. Put a Markdown file in the repo describing org-specific patterns the scanner should skip, then point the action at it:

```markdown
# Organization-specific false positive filters

## Admin routes bound to localhost
Any handler under `/internal/*` is served on 127.0.0.1 only. These routes
intentionally skip authentication because the bind address provides the
boundary. Do not flag missing auth on these routes.

## Test fixtures with sample credentials
Files under `tests/fixtures/` may contain hardcoded tokens and passwords
used for replay and snapshot tests. These are not real credentials. Do not
flag hardcoded-secret findings in this path.

## Debug endpoints disabled in production
Any file importing from `app/debug/` is gated by the `DEBUG` environment
flag, which is always false in production. Do not flag eval or exec calls
in these files.

## Allowed shell-out patterns
`subprocess.run` calls in `scripts/release/` run against repo-controlled
input only. The commit history enforces review. Do not flag command
injection in these scripts.
```

Then reference it:

```yaml
- uses: anthropics/claude-code-security-review@main
  with:
    claude-api-key: ${{ secrets.CLAUDE_API_KEY }}
    false-positive-filtering-instructions: ./.security/false-positives.md
```

On a small Rust project where I was getting three or four false positives per PR, adding a similar filter file cut them to roughly one per week. HN poster Lynch reported a false positive rate under 20% with Opus 4.6 on kernel vulnerability work, which tracks with what I see on application code after tuning.

## How Much Does Claude Code Security Review Cost Per PR?

The action bills tokens against your Anthropic API key directly. There is no flat per-PR fee. Your cost depends on three variables: model choice, diff size, and verification sub-tasks.

### Rough token math

A 500-line PR diff with 10 files touched typically consumes 30,000 to 60,000 input tokens plus 3,000 to 6,000 output tokens on Opus 4.1. At published Opus pricing, that is roughly **$0.90 to $1.80 per scan**. Switch `claude-model` to Sonnet 4.6 and the same diff runs closer to **$0.20 to $0.40**. Haiku drops another two to three times, but misses more subtle flaws.

### Three knobs to lower cost

1. **Switch models:** `claude-model: claude-sonnet-4-6` gives three to five times lower cost with minor accuracy tradeoff.
2. **Trim scope:** `exclude-directories: "node_modules,vendor,dist,tests/snapshots"` skips paths the reviewer has no business reading.
3. **Leave `run-every-commit: false`:** Enabling it triggers a rescan on every push, which can 5x your monthly bill on active PRs.

A repo I manage processes roughly 30 PRs per week. On Sonnet 4.6 with scoped exclusions, the security-review line item runs around $25 to $35 per month. On Opus it is closer to $120 to $160.

## Claude Code Security Review vs Semgrep, Snyk, and SonarQube

Short version: this is not a replacement for pattern-based SAST, dependency scanning, or code-quality tools. It complements them. A 2025 comparison by sanj.dev tested four tools and found Snyk Code detected just 11.2% of planted vulnerabilities on its own. All four tools combined still only reached 38.8%. Layered scanning beats any single tool.

| Tool | Strength | Weakness | Cost model |
|------|----------|----------|------------|
| Semgrep | Fast pattern rules, YAML-customizable | Misses semantic and logic flaws | Free OSS / paid cloud |
| Snyk | Dependency CVEs, SCA, IaC | Lower SAST detection rate in tests | Per-developer subscription |
| SonarQube | Code quality + some security | Quality-first, not security-first | Self-host / licensed |
| Claude Code Security Review | Semantic reasoning, business-logic flaws | Token cost, non-deterministic output | Token-based API billing |

### Recommended layered pipeline

Semgrep runs first as the blocking gate. Snyk or Dependabot handles dependency CVEs. Claude runs last as an advisory commenter. Keeping Claude advisory avoids cost blowouts when someone opens a draft PR with incomplete code.

```yaml
name: Security Pipeline

on: [pull_request]

jobs:
  semgrep:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: returntocorp/semgrep-action@v1
        with:
          config: auto

  dependencies:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

  ai-review:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write
      contents: read
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 2
      - uses: anthropics/claude-code-security-review@main
        with:
          claude-api-key: ${{ secrets.CLAUDE_API_KEY }}
          claude-model: claude-sonnet-4-6
```

## Security Considerations and Prompt Injection Risk

The action's README is explicit: it is not hardened against prompt injection. A malicious contributor can embed instructions in code comments, string literals, or file names that subvert the reviewer. The broader AI supply chain conversation is hot right now - The Register reported on April 16, 2026 that an [MCP design flaw put up to 200,000 MCP servers at risk of takeover](https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/).

### Three mitigations I actually apply

1. **Require approval for fork PRs.** In Settings > Actions > General, enable "Require approval for all external contributors". The action then runs only after a maintainer clicks approve, which lets you eyeball the diff for obvious prompt injection first.
2. **Minimum permissions.** Grant `pull-requests: write` and `contents: read`. Never grant `contents: write` or `pull-requests: admin`.
3. **Restrict key scope.** Use a dedicated API key for this action with usage caps set in the Anthropic Console.

I treat Claude Code Security Review as advisory input, not a security gate. The human reviewer still has to care.

## Troubleshooting Common Failures

- **Timeout after 20 minutes:** Raise `claudecode-timeout: 40` or narrow `exclude-directories`.
- **"CLAUDE_API_KEY not enabled for Claude Code":** Open the key settings in the Anthropic Console and enable Claude Code alongside Claude API.
- **Duplicate comments on re-runs:** Check that `permissions` is set at the workflow level, not just the job level.
- **Findings missing on large PRs:** Trim scope with `exclude-directories`, split the PR, or switch to a model with a larger context window.
- **External PR workflow never runs:** Expected behavior when "Require approval" is on. Approve from the PR page.

## Frequently Asked Questions

### What is the Claude Code Security Review GitHub Action?

It is an official Anthropic GitHub Action (`anthropics/claude-code-security-review`) that uses Claude to scan pull request diffs for security vulnerabilities and post findings as PR comments. It covers injection, auth bypass, data exposure, crypto issues, and business-logic flaws across any language.

### How much does Claude Code Security Review cost per PR?

Cost is token-based against your Anthropic API key. A typical 500-line PR diff with Opus runs roughly $0.90 to $1.80. Switching the `claude-model` input to Sonnet 4.6 drops that by three to five times. Unlike the separate Claude Code Review service, there is no flat per-PR fee.

### How do I reduce false positives?

Pass a Markdown file to the `false-positive-filtering-instructions` input describing org-specific patterns the scanner should skip, for example admin-only routes bound to localhost. Built-in filters already drop findings with a confidence score below 8 and exclude DoS, rate-limit, and generic input-validation flags by default.

### Does Claude Code Security Review replace Semgrep or Snyk?

No. It complements them. Claude is strong at semantic and business-logic flaws that pattern-matching SAST tools miss. Semgrep and Snyk remain best for deterministic rules, dependency CVEs, and license checks. A layered pipeline produces higher detection rates than any single tool.

### What permissions does the action need?

The action needs `pull-requests: write` to post comments and `contents: read` to read the diff. Do not grant `contents: write` or `pull-requests: admin`. The API key must be stored as a repository secret and enabled for both Claude API and Claude Code usage in your Anthropic Console.

### Is it safe to run on external contributor PRs?

Not by default. The action is explicitly not hardened against prompt injection. Turn on "Require approval for all external contributors" in Actions settings so workflows only run after maintainer review.

### What happens when the action times out?

The default timeout is 20 minutes. Large PRs with many files can exceed it and fail mid-scan. Raise it via the `claudecode-timeout` input or narrow scope with `exclude-directories` to skip generated code, vendor folders, and test fixtures.

---

**Read the full guide** with table of contents, troubleshooting card grid, and additional context on the original post: [Claude Code Security Review GitHub Action: 2026 Setup Guide on avinashsangle.com](https://avinashsangle.com/blog/claude-code-security-review-github-actions).
