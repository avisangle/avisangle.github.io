# Reddit Posts - Claude Code Security Review GitHub Action

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py claude-code-security-review-github-actions --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: ClaudeAI
TITLE: Practitioner guide to the claude-code-security-review GitHub Action (cost math, false-positive tuning, prompt injection gotchas)
FLAIR: Coding
---BODY---
I've been running Anthropic's `anthropics/claude-code-security-review` Action on a few repos for a couple of weeks and wrote up the parts the existing guides skip.

Quick recap for anyone who hasn't seen it: it's an official GitHub Action that uses Claude to scan PR diffs semantically and post findings as PR comments. 4.3k stars, MIT, maintained by Anthropic. The default model is `claude-opus-4-1-20250805` but you can swap via the `claude-model` input.

**Cost is token-based, not flat per-PR.** A lot of posts confuse this with the separate Claude Code Review service ($15-$25/PR, Team plan only). This Action bills tokens to your API key. Real numbers on a 500-line diff:

- Opus 4.1: **$0.90 to $1.80**
- Sonnet 4.6: **$0.20 to $0.40**
- Haiku: cheaper still but misses subtle flaws

**The `false-positive-filtering-instructions` input is the big win** and nobody shows what the file actually contains. It's a Markdown file describing org-specific exceptions the scanner should skip. Example rules I'm using:

- Admin routes under `/internal/*` bind to localhost, so missing auth is intentional
- Test fixtures under `tests/fixtures/` contain replay credentials, not real secrets
- Debug endpoints gated by a `DEBUG` env flag that's always false in prod

On a Rust project where I was getting 3-4 false positives per PR, this cut them to about one per week. HN poster Lynch reported <20% FP rate with Opus 4.6 on kernel vulnerability work, which tracks with my numbers on application code.

**Prompt injection is an open gap.** The README says it explicitly - the action is not hardened against it. A malicious fork PR can embed instructions in code comments that subvert the reviewer. The fix is a one-click setting in Settings > Actions: "Require approval for all external contributors". And keep permissions minimal: `pull-requests: write` + `contents: read`, never more.

**It does not replace Semgrep or Snyk.** Layer it. Semgrep handles pattern rules (fast, deterministic, blocking), Snyk/Dependabot handle CVEs, Claude runs advisory at the end for semantic and business-logic flaws that pattern tools miss.

Full guide covers all 9 action inputs, the exact false-positive Markdown example, layered pipeline YAML, and a 5-case troubleshooting section (timeouts, duplicate comments, missing findings on large PRs): https://avinashsangle.com/blog/claude-code-security-review-github-actions

Happy to answer questions if anyone's evaluating this or already running it.
---POST---
SUBREDDIT: devops
TITLE: Layering AI security review into an existing Semgrep + Snyk pipeline (Claude Code Security Review Action, cost and tuning notes)
FLAIR: Discussion
---BODY---
For anyone adding AI-assisted security scanning to an existing CI/CD pipeline, sharing what's worked for me with Anthropic's `claude-code-security-review` GitHub Action alongside traditional SAST.

**The layered pipeline, in order of what runs first:**

1. **Semgrep** - fast pattern rules, deterministic, the blocking gate
2. **Snyk or Dependabot** - dependency CVEs and SBOM
3. **Claude Code Security Review** - advisory commenter for semantic flaws

Keeping Claude advisory (not blocking) avoids cost blowouts when someone opens a draft PR with incomplete code. Semgrep stays the primary gate.

**Why layer at all?** sanj.dev's 2025 tool comparison found Snyk Code alone caught 11.2% of planted vulnerabilities. All four tools tested combined only hit 38.8%. No single tool is enough.

**Cost on a repo doing ~30 PRs/week:**

- Sonnet 4.6 with scoped `exclude-directories`: **$25-$35/month**
- Opus 4.1 same scope: **$120-$160/month**

Knobs to keep cost sane: `claude-model: claude-sonnet-4-6` drops per-token cost 3-5x with minimal accuracy loss on application code. `exclude-directories: "node_modules,vendor,dist,tests/snapshots"` keeps the reviewer from reading stuff it has no business reading. Leave `run-every-commit: false` - enabling it 5x's your bill on active PRs.

**Prompt injection is real.** The Action is not hardened against it. A malicious fork PR can embed instructions in code comments. Turn on "Require approval for all external contributors" in repo settings before accepting any external PRs. Minimum permissions: `pull-requests: write` and `contents: read`, nothing else.

The `false-positive-filtering-instructions` input takes a Markdown file where you describe legitimate exceptions (admin routes bound to localhost, test fixtures with replay credentials, debug paths gated by prod flags). Cut my FP rate on a Rust project from 3-4 per PR to about one per week.

Full writeup with the exact YAML, FP markdown example, troubleshooting for timeouts and duplicate comments, and a model/cost comparison table: https://avinashsangle.com/blog/claude-code-security-review-github-actions

Happy to compare notes if anyone's running a similar setup.
