# LinkedIn Post - Claude Code Security Review GitHub Action

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py claude-code-security-review-github-actions --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Anthropic ships an official GitHub Action that uses Claude to do security review on every PR - and after running it across a few of my own repos, I wrote the practitioner guide I wish had existed when I started.

The action is `anthropics/claude-code-security-review`. 4,300 stars, MIT-licensed, maintained by Anthropic. It scans PR diffs semantically, which means it flags business-logic flaws and auth bypass reasoning that pattern-based SAST tools like Semgrep miss by design.

Four things I learned that the existing tutorials skip:

- Real cost per PR: $0.90 to $1.80 on Opus 4.1 for a 500-line diff, or $0.20 to $0.40 on Sonnet 4.6. It bills tokens to your API key, not a flat fee. The $15-$25/PR figure floating around is a different product (Claude Code Review, Team plan only).

- The `false-positive-filtering-instructions` input takes a Markdown file describing your org's legitimate exceptions. Nobody shows what that file looks like. Mine has four rules - admin routes bound to localhost, test fixtures with replay credentials, debug paths gated by prod flags. Cut false positives from 3-4 per PR to roughly one per week on a Rust project.

- The action is explicitly NOT hardened against prompt injection. A fork PR can embed instructions that subvert the reviewer. The fix is a one-click setting: "Require approval for all external contributors" in Settings > Actions.

- It's not a Semgrep replacement. Layer it. Semgrep blocks on pattern rules, Snyk catches CVEs, Claude runs advisory on top for semantic issues. sanj.dev's 2025 benchmark found any single SAST tool caught under 15% of planted vulnerabilities alone.

The full guide covers all 9 action inputs, the exact false-positive Markdown example, a layered pipeline YAML, and a 5-case troubleshooting section.

https://avinashsangle.com/blog/claude-code-security-review-github-actions

If you're already running this action in production, what's your false-positive tuning looking like?

#ClaudeCode #DevSecOps #GitHubActions #AppSec #Anthropic
