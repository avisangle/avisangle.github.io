# LinkedIn Post - Regression-Proof Claude Code Workflows

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py regression-proofing-claude-code-workflows --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Anthropic's April 23 postmortem confirmed three Claude Code regressions over seven weeks. The model never changed. The wrapper around it broke - and their own evals missed all three.

The next day, v2.1.119 and v2.1.120 shipped within 24 hours and triggered eight more community-filed regressions, including a silent Opus-4.7-to-1M-context swap that changed both pricing and cache behaviour without a config change.

After reading the postmortem alongside the v2.1.117 community survival gist, I wrote the practitioner playbook nobody else has assembled.

What actually moves the needle:

- Pin the CLI to a known-good version (v2.1.117 right now). One npm install plus a single line in your user npmrc stops auto-upgrade from breaking your morning.
- Lock effortLevel in your user settings.json. The March reasoning-effort downgrade was invisible to anyone who relied on the default.
- Allowlist your model set with availableModels and pin third-party deployments via modelOverrides (the April 2026 Bedrock and Vertex map most third-party guides haven't covered yet).
- Wire a Stop hook that replays three to five fixture prompts after every session and posts to Slack on drift. Anthropic's evals missed it; yours don't have to.
- Keep a five-step rollback runbook ready. Five minutes is the difference between catching a bad version on day one and losing half a day to it.

What it won't fix: API-side regressions still bite (the thinking-cache bug was server-side), subscription policy changes are out of scope, and pinned versions go stale. Pinning isn't permanence; it's reducing how often the wrapper around the model surprises you.

Full write-up with the workflow, the 35-line Stop-hook script, the Bedrock pinning walkthrough, and the rollback runbook:

https://avinashsangle.com/blog/regression-proofing-claude-code-workflows

If you're running Claude Code in a team workflow today, what's your current rollback time when a release misbehaves?

#ClaudeCode #DevOps #AIReliability #VersionPinning #AIEngineering
