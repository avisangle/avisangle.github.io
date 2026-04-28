# Twitter/X Long-form Post - Regression-Proof Claude Code Workflows

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py regression-proofing-claude-code-workflows --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Anthropic's April 23 postmortem confirmed three Claude Code regressions over seven weeks.

The model never changed. The wrapper around it broke.

Here is the practitioner playbook nobody else has assembled.

WHAT WENT WRONG

Three confounding wrapper changes:

- Default reasoning effort downgrade (Mar 4 to Apr 7)
- Thinking-cache bug clearing history every turn (Mar 26 to Apr 10, fixed in v2.1.101)
- System prompt cap forcing 25-word answers between tool calls (Apr 16 to Apr 20, reverted in v2.1.116)

Anthropic's own line: Claude would continue executing, but increasingly without memory of why it had chosen to do what it was doing.

Their evals missed all three.

THEN THE NEXT DAY

April 24 shipped v2.1.119 and v2.1.120 within 24 hours. Eight community-filed regressions in that window:

- claude resume crashed at startup
- Opus 4.7 silently routed to the 1M-context variant (different price, different cache)
- Resize-redraw UI duplication
- Auto-update broke
- mcp menu froze in WSL2
- CLAUDE.md ignored below 1/3 context
- Sandbox network enforcement leaked
- Worktree git merge hung on macOS 26.4

Pin or pay.

THE PLAYBOOK

Five layers, each one a short config change:

1. Pin the CLI to v2.1.117 via npm and add the version line to your user npmrc so auto-upgrade can't move you
2. Lock effortLevel in your user settings.json. The reasoning-effort downgrade was invisible to anyone who never set this
3. Allowlist your model set with availableModels. Add modelOverrides to map Anthropic IDs to specific Bedrock or Vertex inference-profile IDs
4. Wire a Stop hook that runs three to five fixture prompts after every session and pings Slack on drift
5. Keep a five-step rollback runbook so the morning a bad version ships is five minutes of work, not half a day

The full post has the 35-line Stop-hook script, the verified npm and settings syntax, the Bedrock allowlist YAML, and the residual-risk honesty section:

https://avinashsangle.com/blog/regression-proofing-claude-code-workflows

Follow @avi_sangle for more Claude Code deep-dives.
