# Twitter/X Long-form Post - Claude Code Security Review GitHub Action

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py claude-code-security-review-github-actions --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Anthropic ships an official GitHub Action that uses Claude to do security code review on every PR.

4,300 stars, MIT-licensed, and almost nobody has written a proper setup guide. So I did.

THE ACTION

`anthropics/claude-code-security-review` scans PR diffs semantically. Not pattern rules - actual reasoning about the code. Broken access control, business-logic flaws, insecure deserialization, auth bypass through weird state machines. The stuff Semgrep misses.

Default model is Opus 4.1. Runtime cap 20 minutes. Nine config inputs.

COST

Bills tokens to your API key. There is NO flat per-PR fee (that's the separate Claude Code Review service at $15-$25 per PR, Team plan only).

Real math on a 500-line diff:
- Opus: $0.90 to $1.80 per scan
- Sonnet 4.6: $0.20 to $0.40
- Haiku: cheaper still, but misses subtle flaws

On a repo I run with ~30 PRs/week on Sonnet 4.6, the line item is $25-$35/month. On Opus it's $120-$160.

FALSE POSITIVES

Every guide mentions the `false-positive-filtering-instructions` input. Nobody shows what the file actually contains.

It's a Markdown file where you describe org-specific patterns the scanner should skip. Admin routes bound to localhost. Test fixtures with replay credentials. Debug paths gated by prod flags.

On a Rust project I maintain, adding this file cut false positives from 3-4 per PR to roughly one per week. HN poster Lynch reported <20% FP rate with Opus 4.6 on kernel work - my numbers on app code track.

THE PROMPT INJECTION GAP

The action is EXPLICITLY not hardened against prompt injection. A malicious fork PR can embed instructions in code comments that manipulate the reviewer.

Mitigations I actually apply:
- Settings > Actions > "Require approval for all external contributors"
- Minimum permissions: pull-requests: write + contents: read, nothing else
- Dedicated API key with monthly cap

DOES IT REPLACE SEMGREP?

No. Complement.

sanj.dev tested four tools: Snyk Code alone caught 11.2% of planted vulns. All four combined only hit 38.8%. Layered scanning beats any single tool.

My pipeline: Semgrep as the blocking gate (fast, deterministic), Dependabot/Snyk for CVEs, Claude Code Security Review advisory at the end for semantic flaws.

THE FULL GUIDE

Covers all 9 inputs, the exact false-positive Markdown example, cost math, layered pipeline YAML, prompt-injection mitigations, and a 5-case troubleshooting section (timeouts, duplicate comments, missing findings on large PRs).

https://avinashsangle.com/blog/claude-code-security-review-github-actions

Follow @avi_sangle for more Claude Code deep-dives.
