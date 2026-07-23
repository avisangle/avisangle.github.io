# Topic Brief — Regression-Proof Claude Code Workflows: Pin, Lock, Test

**Source:** https://avinashsangle.com/blog/regression-proofing-claude-code-workflows
**Format suggested:** short
**Slug:** regression-proofing-claude-code-workflows

## Hook
Claude Code degraded for seven weeks and Anthropic's evals never caught it.

## Key bullets
- Pin CLI to v2.1.117, lock it in ~/.npmrc forever.
- Set effortLevel in settings.json, block silent defaults.
- Allowlist models with availableModels and modelOverrides.
- Run a Python stop hook that replays fixtures every session.
- Keep 3-5 golden prompts with expected outputs committed.

## Demoable code
```bash
# Pin to v2.1.117
npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code@2.1.117

# Lock forever in ~/.npmrc
@anthropic-ai/claude-code:version=2.1.117
```

## Numbers to animate
- 3 regressions compounded over 7 weeks (March 4 → April 20, 2026)
- 8 bugs filed against v2.1.119 and v2.1.120 within 24 hours
- 3% model eval drop — but the wrapper was the real culprit
- v2.1.89 consumed quotas 3–50x faster than baseline
- Under 5 minutes to roll back once you have the playbook

## Canonical URL
https://avinashsangle.com/blog/regression-proofing-claude-code-workflows

## SEO seed (refined later by /video-script)
- Working title: Regression-Proof Claude Code: Pin, Lock, Test
- Tags: claude code, anthropic, regression, version pinning, settings.json, hooks, ai workflows, postmortem

## News peg

**Release:** Claude Code v2.1.121 — 2026-04-28 (today)
**Source:** https://code.claude.com/docs/en/changelog
**Why it pegs this topic:** v2.1.121 ships four regression fixes on the same day this episode is being made — `/usage` memory leak (2GB+ on large histories), Bash tool crashes when start directory is deleted, `--resume` corruption on unclean shutdowns, and unbounded image-processing memory growth. The episode argues regressions slip through Anthropic's evals; today's release is live evidence that the playbook (pin, lock, test) is still load-bearing.
**How to use it in the script:** Open the hook on today's release — "Anthropic just shipped four regression fixes — and that's exactly why you pin." Then move into the pin/lock/test playbook. The news peg justifies the urgency without the script having to argue for it.

**Secondary pegs available** (use only if the v2.1.121 angle gets stale before recording):
- 2026-04-13 Week 16 — new `xhigh` effort level + `/effort` slider, reinforces the "lock effortLevel" bullet
- 2026-04-23 — `/config` now persists to `~/.claude/settings.json` with override precedence, reinforces the "lock settings" bullet

