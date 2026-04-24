# Content Brief: Hardening AI Coding Agents in CI/CD Against Prompt Injection

**Slug:** `hardening-ai-agents-cicd-prompt-injection`
**Status:** ready to write
**Research date:** 2026-04-25

---

## Phase 1 — Topic Validation

### Search demand

- **Comment and Control disclosure (Aonan Guan, April 15 2026)** is the news hook: a cross-vendor prompt injection that steals `ANTHROPIC_API_KEY`, `GITHUB_TOKEN`, `GEMINI_API_KEY`, `GITHUB_COPILOT_API_TOKEN` from Claude Code, Gemini CLI, and GitHub Copilot Agent via nothing more than a crafted PR title, issue body, or hidden HTML comment. Anthropic rated it **CVSS 9.4 Critical**.
- Coverage in SecurityWeek, VentureBeat, The Register, CybersecurityNews, and Cryptika drove active reader intent: "how to secure claude code github action", "prevent prompt injection github actions", "claude-code-action `--allowed-tools`".
- r/ClaudeAI and HN threads on the April 2026 MCP design-flaw stories (200k+ exposed servers) primed the audience. Developers want the practitioner guide, not another news recap.
- Google autocomplete (Apr 2026) surfaces: "claude code github action safe", "prompt injection github actions mitigation", "ai agent least privilege".

### Competition analysis (top results)

1. **Researcher disclosure — oddguan.com (April 15 2026)** — attack narrative, PoC, CVSS. Does not walk through *your* workflow diff.
2. **Anthropic's own `claude-code-action/docs/security.md`** — authoritative reference but reads like a spec, not a tutorial. Famous for the admission: *"The action is not designed to be hardened against prompt injection."*
3. **SecurityWeek / VentureBeat / The Register / CybersecurityNews** — news writeups, no YAML.
4. **StepSecurity blog** — pushes harden-runner in *audit* mode; explicitly notes "no allowlist is defined" and "security becomes entirely the responsibility of the implementation team." Leaves the implementation gap wide open.
5. **Steve Kinney course page / Groundy tutorial** — setup tutorials, pre-disclosure, no hardening angle.

**Gap we fill:** a single practitioner guide that:
- Shows a **before/after YAML diff** of a real workflow, hardened against Comment and Control.
- Maps each fix to the CVSS 9.4 attack primitive it neutralises (prompt break-out, hidden HTML comment, secret exfiltration, `ps` leak).
- Includes the **six configuration lines** nobody else puts together in one place: `allowed_bots`, `allowedTools` allowlist, `CLAUDE_CODE_SCRIPT_CAPS`, `include_comments_by_actor`, `use_commit_signing`, and Harden-Runner in `block` mode with a domain allowlist.
- Covers **OIDC via Bedrock / Vertex AI** so teams can retire `ANTHROPIC_API_KEY` from the repo entirely.
- States honestly what hardening *cannot* fix (Anthropic's own position) and where human-in-the-loop is still required.

### AI citation potential

**Very high.** Developers ask ChatGPT, Claude, and Perplexity "how do I secure my Claude Code GitHub Action after the CVE?" and "is `pull_request_target` safe with AI agents?" right now. The field is dominated by news articles and one reference doc — a practitioner post with copy-pasteable YAML and a clear allowlist-first philosophy is directly citable and short on competition.

### Freshness opportunity

- Anthropic's fix in commit `25e460e` added `--disallowed-tools 'Bash(ps:*)'`. Researchers already point out blocklists are bypassable — we'll show the allowlist alternative.
- `claude-code-action` ships newer knobs (`CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` default-on, `CLAUDE_CODE_SCRIPT_CAPS`) that most tutorials haven't picked up yet.
- Context7 / Anthropic docs for GitHub Actions were updated post-disclosure; cite current flags, not pre-April defaults.

---

## Phase 2 — Keyword Strategy

### Primary keyword
`harden claude code github actions prompt injection`

### Secondary keywords
- `ai agent prompt injection defense ci cd`
- `claude-code-action allowed tools`
- `comment and control vulnerability fix`
- `github actions ai agent least privilege`
- `prompt injection github actions mitigation`

### Long-tail queries
1. how to prevent prompt injection in github actions claude code
2. claude code action `--allowedTools` example
3. how to disable ps command in claude code action
4. what is CLAUDE_CODE_SCRIPT_CAPS
5. secure claude-code-action against external contributors
6. OIDC claude code anthropic api key github actions
7. pull_request_target claude code safe
8. harden-runner claude code egress allowlist

### FAQ candidates (mirror real search queries)
1. What is the Comment and Control prompt injection attack?
2. Is Claude Code's GitHub Action hardened against prompt injection by default?
3. How do I restrict which tools Claude Code can run in CI?
4. Can I use OIDC instead of storing `ANTHROPIC_API_KEY` in GitHub secrets?
5. Why is `pull_request_target` dangerous for AI code review agents?
6. What does `CLAUDE_CODE_SCRIPT_CAPS` do?
7. How do I allowlist network egress for a Claude Code workflow?
8. Should I allow external contributors' PRs to trigger Claude Code?
9. Does `allowed_bots: '*'` put my repo at risk?
10. Can `--disallowed-tools` alone stop credential theft?

---

## Phase 3 — Content Brief

### Article metadata

- **Title:** `Harden Claude Code GitHub Actions: Prompt Injection Defense` (59 chars)
- **Slug:** `hardening-ai-agents-cicd-prompt-injection`
- **Meta description:** `How to harden Claude Code and AI agents in GitHub Actions against the Comment and Control prompt injection attack: allowlists, OIDC, script caps.` (146 chars)
- **Target word count:** 2,800 - 3,200 words
- **Estimated read time:** 12 min
- **Category:** DevSecOps / Claude Code
- **Lucide icon:** `ShieldAlert`
- **Publish date:** 2026-04-25
- **Tags:** Claude Code, GitHub Actions, Security, Prompt Injection, DevSecOps

### Unique angle

The existing `claude-code-security-review-github-actions` post on this site teaches readers to *install* Anthropic's security-review action. This post teaches them to *defend* it (and any `claude-code-action` workflow) against the April 2026 Comment and Control CVE. It's the defensive companion piece: attack primitives → specific YAML fix → residual risk. Original contribution is the assembled hardened workflow (nobody else has one published), the allowlist-vs-blocklist reasoning, and the OIDC / Bedrock migration walkthrough.

### Opening (first 40-60 words must answer the title)

> Claude Code's GitHub Action is not hardened against prompt injection by default - Anthropic says so in their own docs. To defend a workflow against the April 2026 Comment and Control CVE (CVSS 9.4), allowlist tools with `--allowedTools`, scope `GITHUB_TOKEN` to read-only, cap script invocations, filter comments by actor, and move API keys to OIDC.

### Content outline

#### H2: What Comment and Control Actually Exploits

- One-paragraph recap: crafted PR title, hidden HTML comment, or fake "Trusted Content Section" breaks the agent's prompt. Agent already holds `ANTHROPIC_API_KEY` + `GITHUB_TOKEN` and has `Bash` tool access.
- Three attack flavours (Claude Code break-out, Gemini CLI fake trusted section, Copilot `ps auxeww | base64` HTML comment).
- Quote Anthropic: "The action is not designed to be hardened against prompt injection." Frame as "this post is what you do anyway."
- Link: researcher disclosure, Anthropic commit `25e460e`.

#### H2: The Threat Model for AI Agents in CI/CD

- Three untrusted inputs: PR title/body, issue body/comments, file contents in the diff.
- Three valuable outputs: workflow secrets, `GITHUB_TOKEN`, network egress.
- Principle: *any path* from untrusted input to either tool execution or secret reference is an attack surface.
- Table: "Untrusted Input → Default Agent Capability → Hardening Control."

#### H2: Allowlist Tools, Never Blocklist

- Why `--disallowed-tools 'Bash(ps:*)'` (Anthropic's own April fix) is insufficient - `/proc/self/environ`, `cat /etc/*release`, `printenv` all still work. Quote the researcher: *"Blocklisting is whack-a-mole."*
- Show correct `claude_args: '--allowedTools "Read,Grep,Bash(gh pr view:*),Bash(gh pr diff:*)"'` for a review agent that never needs write bash.
- For write-capable agents, scope shell tools to specific commands: `Bash(npm test:*)`, not `Bash(*)`.
- Include a bullet list of six recommended starter allowlists by agent role (review, triage, test-runner, doc-writer, release-notes, PR-fix).

#### H2: Scope `GITHUB_TOKEN` to Read-Only (Unless You Really Need Write)

- The `permissions:` block beats `GITHUB_TOKEN` environment tricks every time.
- Default `permissions: read-all` at the workflow level, then override per job.
- Example: review agent gets `pull-requests: read`, `contents: read`; never `contents: write`.
- Call out the Copilot leak: `GITHUB_TOKEN` with write scope was committed to the attacker's branch in base64.

#### H2: Move Secrets to OIDC via Bedrock or Vertex AI

- `anthropic_api_key` in GitHub secrets = blast radius of every agent run. OIDC swaps static keys for short-lived role assumption.
- Show YAML: `aws-actions/configure-aws-credentials@v4` + `role-to-assume`, then route Claude through Bedrock.
- Pros: no key to rotate, auditable, blast radius bounded by IAM policy.
- Cons: Bedrock's model availability lags Anthropic direct by a few weeks.
- Link: Anthropic docs + `eastondev.com` OIDC guide.

#### H2: Cap Script Invocations and Scrub Subprocess Env

- `CLAUDE_CODE_SCRIPT_CAPS: '{"edit-issue-labels.sh": 2}'` - limits how many times a scripted tool can be invoked per run (kills automated exfiltration loops).
- `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: 1` - default since April 2026 but verify it isn't unset in older workflows.
- `ACTIONS_STEP_DEBUG: true` auto-enables `show_full_output` = secret printout. Audit your repo secrets and vars for this flag.

#### H2: Filter Who Can Trigger the Agent

- `include_comments_by_actor: 'maintainer1,maintainer2'` beats any content filter.
- `exclude_comments_by_actor: 'dependabot[bot]'` - bot PRs run Claude too unless you block them.
- `allowed_bots: 'dependabot,renovate'` - never `'*'`.
- Avoid `pull_request_target` and `issue_comment` triggers unless you are ready to treat every fork PR as hostile.

#### H2: Add a Network Egress Allowlist with Harden-Runner

- Step-Security's `harden-runner@v2` in `block` mode, not `audit`.
- Sample `allowed-endpoints` covering `api.anthropic.com:443`, `github.com:443`, `registry.npmjs.org:443`, `pypi.org:443` - explicit, no wildcards.
- Why: even if an injection gets Bash, egress to `attacker.com` is blocked at the socket.
- StepSecurity's own blog admits default config is audit-only; we show the block-mode upgrade.

#### H2: Sign Commits So You Know What the Agent Did

- `use_commit_signing: true` for simple cases, `ssh_signing_key` for complex git ops.
- Bot-authored unsigned commits blend with compromised commits. Signatures give you a forensic trail.

#### H2: The Before/After Hardened Workflow

- Left column: the default `claude-code-action` workflow a developer copy-pastes from a tutorial.
- Right column: the hardened version with every control above applied.
- Annotated diff (15-20 lines of comments mapping each change to an attack primitive).
- This is the section that gets screenshotted on Twitter.

#### H2: What Hardening Still Can't Fix

- Honesty section. Prompt injection is, at its core, "context the agent is designed to process."
- Residual risks: diff contents can still contain malicious instructions; MCP servers added at runtime can widen blast radius; model updates can change behaviour.
- Human-in-the-loop checkpoints: require approval before the agent writes, merges, or runs secrets-bearing jobs.
- Reference Anthropic's own caveat verbatim.

#### H2: Hardening Checklist (Copy This Into Your PR)

- 15-item checklist covering every control in the article.
- Formatted so it reads on mobile and extracts cleanly for AI answer panels.

### Required FAQ section (mirror FAQ candidates above, 40-60 words per answer)

Use the 10 FAQ questions from Phase 2. Each answer must cite a specific flag, commit, or Anthropic/GitHub doc URL.

### Code examples to include

1. Insecure baseline workflow (10-15 lines).
2. Hardened workflow (35-50 lines) - the pull quote.
3. Tool allowlist by agent role (5 short snippets).
4. OIDC via Bedrock configuration.
5. `harden-runner` block-mode with endpoint allowlist.
6. `CLAUDE_CODE_SCRIPT_CAPS` JSON example.

### Authoritative sources to cite

- Aonan Guan, "Comment and Control" disclosure: https://oddguan.com/blog/comment-and-control-prompt-injection-credential-theft-claude-code-gemini-cli-github-copilot/
- Anthropic `claude-code-action/docs/security.md`: https://github.com/anthropics/claude-code-action/blob/main/docs/security.md
- Claude Code GitHub Actions docs: https://code.claude.com/docs/en/github-actions
- The Register (CVSS 9.4 coverage): https://www.theregister.com/2026/04/15/claude_gemini_copilot_agents_hijacked/
- SecurityWeek: https://www.securityweek.com/claude-code-gemini-cli-github-copilot-agents-vulnerable-to-prompt-injection-via-comments/
- VentureBeat system card piece: https://venturebeat.com/security/ai-agent-runtime-security-system-card-audit-comment-and-control-2026
- StepSecurity harden-runner post: https://www.stepsecurity.io/blog/anthropics-claude-code-action-security-how-to-secure-claude-code-in-github-actions-with-harden-runner
- GitHub Actions secure-use reference: https://docs.github.com/en/actions/reference/security/secure-use

### Internal linking opportunities

- `/blog/claude-code-security-review-github-actions` — setup companion, link from intro and conclusion ("the setup guide assumed you didn't need this - now you do")
- `/blog/claude-md-guide` — mention `CLAUDE.md` as the *other* prompt surface worth threat-modelling
- `/blog/claude-managed-agents` — link in the "human-in-the-loop" section (managed agents vs self-hosted actions)
- `/blog/claude-code-cost-tracking` — brief mention that hardened workflows also cost less (fewer runaway tool calls)
- `/projects/jenkins-mcp` and `/projects/jenkins-chatbot` — natural "here's another CI/CD context where this applies" callouts

### Future content cluster

- "OIDC for Claude Code: retire your API keys"
- "Writing a safe CLAUDE.md for shared repos"
- "When to use managed agents vs self-hosted GitHub Actions for Claude"
- "MCP server threat model: what to audit before you add one"

---

## Ready to Write?
Run: `/write-blogpost hardening-ai-agents-cicd-prompt-injection`
