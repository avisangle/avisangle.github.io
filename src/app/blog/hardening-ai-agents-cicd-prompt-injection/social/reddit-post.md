# Reddit Posts - Harden Claude Code GitHub Actions

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py hardening-ai-agents-cicd-prompt-injection --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: ClaudeAI
TITLE: Hardening claude-code-action after the April 2026 Comment and Control CVE - actual YAML changes
FLAIR: Tutorial
---BODY---
Anthropic's own security.md has this line that most tutorials skip over: **"The action is not designed to be hardened against prompt injection."**

In April 2026, security researcher Aonan Guan proved the point. A single crafted PR title was enough to steal `ANTHROPIC_API_KEY` and `GITHUB_TOKEN` from Claude Code running in GitHub Actions. CVSS 9.4 Critical. Same attack shape hit Gemini CLI and GitHub Copilot Agent.

I read the disclosure, Anthropic's quiet fix (commit 25e460e added `--disallowed-tools 'Bash(ps:*)'`), and all the news recaps. What nobody had written was the assembled hardened workflow. So I wrote it.

The six controls that actually matter:

- **Allowlist tools, don't blocklist them.** Anthropic's fix blocks `ps`. It doesn't block `cat /proc/self/environ`, `printenv`, or `env | base64`. Pass `claude_args: '--allowedTools "Read,Grep,Bash(gh pr view:*)"'` for a review agent. Nothing more.
- **Scope `GITHUB_TOKEN` to read-only.** `permissions: read-all` at the workflow level, elevated only per job. The Copilot leak in Comment and Control dumped a wide-scope token to an attacker-controlled branch.
- **Move secrets to OIDC.** Route Claude through AWS Bedrock or Vertex AI with role assumption. No static `ANTHROPIC_API_KEY` in GitHub secrets means nothing to leak and nothing to rotate.
- **Cap script loops.** `CLAUDE_CODE_SCRIPT_CAPS: '{"edit-issue-labels.sh": 2}'` stops runaway tool calls triggered by an injected prompt.
- **Filter actors.** `include_comments_by_actor` blocks the crafted PR-title vector from unknown accounts. Never use `allowed_bots: '*'` on a public repo.
- **harden-runner in block mode** (not audit) with an `allowed-endpoints` list. If an injection escapes every other control, the shell still can't POST to attacker.com.

The before/after diff is 35 lines. Compared to rotating an exfiltrated key and auditing every downstream service it touched, it's a bargain.

What this still can't fix: prompt injection at its core is context the agent is designed to process. File contents in the diff can still steer the agent. Keep humans in the loop for merges.

Full write-up with the assembled workflow, six starter allowlists for common agent roles (review, triage, test-runner, doc-writer, release-notes, PR-fix), OIDC/Bedrock walkthrough, and the residual-risk honesty section:

https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection

Happy to answer questions about the specific flags or the OIDC setup.
---POST---
SUBREDDIT: devops
TITLE: Defending AI coding agents in CI/CD against prompt injection - a hardened GitHub Actions workflow
FLAIR: Discussion
---BODY---
Sharing a practitioner-level write-up for anyone running Claude Code, Gemini CLI, or Copilot Agent inside GitHub Actions.

Background: on April 15, 2026, researcher Aonan Guan disclosed "Comment and Control," a cross-vendor prompt injection that steals workflow secrets through nothing more than a PR title or a hidden HTML comment. Anthropic rated the Claude Code case CVSS 9.4 Critical. All three vendors patched quietly.

The news coverage (SecurityWeek, The Register, VentureBeat) is thorough on the attack. What I couldn't find anywhere was the practitioner hardening guide. So I wrote one.

The threat model is straightforward: any path from an untrusted input (PR title, issue body, hidden HTML comment, file in the diff) to a valuable output (workflow secrets, `GITHUB_TOKEN`, network egress) is an exploit primitive. Every control below targets one of those three outputs.

Controls that actually moved the needle in my setup:

- **`permissions: read-all`** at workflow level, elevated per job. The Copilot leak showed what happens when the default `GITHUB_TOKEN` scope is wide.
- **Tool allowlist via `--allowedTools`**. Blocklists like Anthropic's April fix (`--disallowed-tools 'Bash(ps:*)'`) are bypassable. Allowlist `Read, Grep, Bash(gh pr view:*)` for a review agent instead of blocking things.
- **OIDC via AWS Bedrock or Vertex AI** so the workflow never touches a static `ANTHROPIC_API_KEY`. Short-lived role-assumed credentials minted per run.
- **`CLAUDE_CODE_SCRIPT_CAPS`** to cap how many times a scripted tool can be invoked per run. Kills injection-driven loops.
- **`step-security/harden-runner@v2` in `block` mode** with an `allowed-endpoints` list (api.anthropic.com:443, github.com:443, registry.npmjs.org:443). StepSecurity's default `audit` mode only logs - block mode actually stops egress.
- Avoid `pull_request_target` and `issue_comment` triggers unless you have approval gates. Both run in base branch context with repo secrets available.

The before/after diff is 35 lines. That's genuinely it.

What it won't fix: prompt injection at its core is context the agent is designed to process. Keep humans in the loop for merges.

Full post with the assembled workflow, threat-model table, six starter allowlists by agent role, and the OIDC/Bedrock walkthrough:

https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection

Curious what other DevOps teams are doing here. Especially around the OIDC-to-Bedrock migration for Claude workflows.
