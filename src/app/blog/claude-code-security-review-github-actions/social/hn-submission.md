# Hacker News Submission - Claude Code Security Review GitHub Action

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Practitioner Guide to the Claude Code Security Review GitHub Action

**URL:** https://avinashsangle.com/blog/claude-code-security-review-github-actions

---

**First Comment:**

Author here. I've been running Anthropic's `claude-code-security-review` Action on a few repos and wrote up the parts the existing guides skip: real per-PR token cost math, an actual example of the `false-positive-filtering-instructions` Markdown file, and how I layer this with Semgrep and Snyk instead of treating it as a replacement.

Two things that surprised me. The cost is token-based against your API key, not a flat per-PR fee (the $15-$25/PR figure floating around is a different Anthropic product). And the Action is explicitly not hardened against prompt injection - a fork PR can embed instructions in code comments that subvert the reviewer, so "Require approval for all external contributors" is a non-optional setting.

Interested in feedback from anyone running this in production, especially on false-positive tuning and monorepo scaling.
