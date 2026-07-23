---
name: ant-cli-getting-started brief
description: Topic brief for the ant CLI getting-started Short — hands-on deploy of a Claude managed agent in <10 min.
type: project
---

# Topic Brief — Getting Started with the ant CLI

**Source:** https://avinashsangle.com/blog/ant-cli-getting-started
**Format suggested:** short
**Slug:** ant-cli-getting-started

## Hook
Build and deploy a Claude agent from the terminal in under 10 minutes — no app code.

## Key bullets
- Install ant CLI with one brew command on macOS
- Define agents as YAML files, check into Git
- Sessions cost $0.08 per hour, billed per millisecond
- Resource-based CLI like kubectl, but for agents
- MCP servers unlock custom tools for the agent

## Demoable code
```bash
ant beta:agents create \
  --name "Code Reviewer" \
  --model claude-sonnet-4-6 \
  --system "You are a senior code reviewer. Read the code carefully, check for bugs, security issues, and style problems." \
  --tool '{"type": "agent_toolset_20260401"}'
```

## Numbers to animate
- $0.08 / session-hour
- $0.70 total for a 1-hour Opus coding session (tokens + runtime)
- 300+ GitHub stars in first 10 days
- April 8, 2026 (launch date)
- 10 minutes (time to first deployed agent)
- v1.2.1 (current CLI version)

## Canonical URL
https://avinashsangle.com/blog/ant-cli-getting-started

## SEO seed (refined later by /video-script)
- Working title: Deploy a Claude Agent in 10 Minutes With the ant CLI
- Tags: ant cli, anthropic ant, claude managed agents, claude agent sdk, claude cli, ant beta agents, anthropic cli, ai agents, claude code, anthropic, agent deployment, mcp, yaml agents

## News peg

*No strong peg found in the last 30 days. The ant CLI launch itself (April 8, 2026 — ~24 days old, inside the 30-day window) is the only direct hook, but it's now stale launch news rather than fresh release news. Frame the hook on a contrarian or first-person angle instead — e.g., "the ant CLI shipped a month ago and most devs still haven't tried it" or open mid-action with the YAML file getting deployed.*

**Soft peg available (use only if the hook needs an anchor):**
- ant CLI public launch — 2026-04-08 (24 days ago)
- 300+ GitHub stars in first 10 days
- Now at v1.2.1

**Releases checked but rejected as not directly relevant:**
- Opus 4.7 xhigh + auto mode (2026-04-16) — about Claude Code defaults, not ant
- /ultrareview cloud code review (2026-04-16) — separate product surface
- /team-onboarding (2026-04-15, 2026-04-10) — Claude Code, not ant
- PreCompact hooks + worktree path param (2026-04-13) — Claude Code internals
- Vertex AI / Bedrock setup wizards (2026-04-09, 2026-04-07, 2026-04-04) — auth surfaces
- Status line agent indicator (2026-04-08) — Claude Code UI
- MCP result persistence + plugin PATH (2026-04-02) — Claude Code MCP, not ant agents
- Claude for Creative Work (2026-04-28) — unrelated product
- Claude Design / Anthropic Labs (2026-04-17) — unrelated product

**How to use it in the script:** Lean on the contrarian/first-person angle per `feedback_video_voice_authentic.md`. The hook should be a specific moment — the first `ant beta:agents create` that worked, the surprise when the YAML deployed, or the $0.08/hr line item showing up. Don't lead with "the ant CLI launched" — that hype window is closed.
