# Reddit Posts - Regression-Proof Claude Code Workflows

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py regression-proofing-claude-code-workflows --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: ClaudeAI
TITLE: Regression-proofing Claude Code after the April 23 postmortem - the practitioner playbook
FLAIR: Claude Code
---BODY---
Anthropic's April 23 postmortem confirmed three Claude Code regressions over seven weeks. The model never changed. The wrapper around it broke. Their own evals missed all three.

Then on April 24, v2.1.119 and v2.1.120 shipped within 24 hours and the community filed eight more bugs against them, including a silent Opus-4.7-to-1M-context swap (#53031) that changed both pricing and cache behaviour without a config change.

Anthropic's recommended user-side mitigation in the postmortem was: **"As of April 23, we're resetting usage limits for all subscribers."** That's it. No flags. No version pinning advice. So I wrote the practitioner playbook.

The five layers that actually matter:

- **Pin the CLI.** `npm install -g @anthropic-ai/claude-code@2.1.117`, then add `@anthropic-ai/claude-code:version=2.1.117` to your `~/.npmrc` so auto-upgrade can't silently move you.
- **Lock `effortLevel`.** The March reasoning-effort downgrade was invisible to anyone who relied on the default. Pin it explicitly in `~/.claude/settings.json`. Precedence: `CLAUDE_CODE_EFFORT_LEVEL` > `effortLevel` > model default.
- **Allowlist models.** `availableModels` restricts the picker, `--model` flag, and `ANTHROPIC_MODEL` env var. Pair with `ANTHROPIC_DEFAULT_OPUS_MODEL` so the picker's "Default" option can't bypass your pin. On Bedrock or Vertex, `modelOverrides` maps Anthropic IDs to specific inference-profile ARNs.
- **Stop-hook canary.** A 35-line Python script replays three to five fixture prompts after every session, diffs against expected substrings, and posts to Slack on drift. Anthropic's evals missed three regressions in seven weeks; yours don't have to.
- **Rollback runbook.** Five steps so the morning a bad version ships is five minutes of work, not half a day.

What this doesn't fix: API-side regressions (the thinking-cache bug was server-side), subscription policy changes, and the eventual feature-gap as v2.1.117 ages. Pinning isn't permanence; it's reducing how often the wrapper surprises you.

Full write-up with the verified syntax for `effortLevel`, `availableModels`, `modelOverrides`, the Stop-hook script, and the rollback runbook:

https://avinashsangle.com/blog/regression-proofing-claude-code-workflows

Happy to answer questions about the Stop-hook script or the Bedrock pinning setup.
---POST---
SUBREDDIT: devops
TITLE: AI tooling reliability - the practitioner playbook for pinning Claude Code after the April 2026 regressions
FLAIR: Discussion
---BODY---
Cross-posting because the framing is straight DevOps even if the tool is AI-flavoured. Sharing for anyone running Claude Code in a team workflow.

Background: Anthropic's April 23 postmortem confirmed three wrapper-level regressions degraded Claude Code over seven weeks. The model never changed. The harness around it shipped three confounding changes that compounded. Their own internal evals missed all three. The day after the postmortem, v2.1.119 and v2.1.120 shipped within 24 hours and the community filed eight more bugs against them.

The pattern is familiar to anyone who's run a fast-moving CLI dependency in production: ship dates are not stability dates. The fix is the same set of practices we'd apply to any other moving target.

What actually works:

- **Version pinning.** Treat `@anthropic-ai/claude-code` like any other npm dep. Pin to v2.1.117 (current known-good), add the version line to `~/.npmrc`, lock auto-upgrade. Drop the same pin into your devcontainer image and onboarding script so every contributor lands on the same byte-identical CLI.
- **Configuration as code.** `~/.claude/settings.json` is the right home for `effortLevel`, `model`, `availableModels`, and `modelOverrides`. The `modelOverrides` map (April 2026 release) lets you pin Bedrock inference-profile ARNs or Vertex deployment names directly. Without it, aliases resolve to whatever Anthropic flips "recommended" to that day.
- **Canary monitoring.** A small Stop hook (35 lines of Python) replays a fixture suite after every session, diffs against golden outputs, posts to a webhook on drift. The fixtures are committed to the repo. Six things to test: refactor, test-gen, plan-mode, long-horizon. Total runtime under a minute.
- **Runbook.** Five-step rollback playbook bookmarked. Confirm version, cross-check upstream signal, roll back and lock, run fixture suite, file regression issue. Total time when followed: under five minutes.

The full post covers the verified npm and settings syntax, the Bedrock walkthrough, the Stop-hook script in full, and the residual-risk honesty section:

https://avinashsangle.com/blog/regression-proofing-claude-code-workflows

Curious how other teams are handling this. Specifically: are you running canaries against AI-generated output anywhere yet, or is this still uncharted for most people?
