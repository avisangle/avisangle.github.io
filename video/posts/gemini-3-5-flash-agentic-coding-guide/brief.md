# Topic Brief — Gemini 3.5 Flash for Agentic Coding: A Claude Coder's Guide

**Source:** https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide
**Format suggested:** short
**Slug:** gemini-3-5-flash-agentic-coding-guide

## Hook
Gemini 3.5 Flash is now cheap enough to run production agent loops — and it beats Gemini 3.1 Pro on the benchmarks that matter.

## Key bullets
- MCP tool orchestration: 83.6% beats Claude Opus 4.7
- Costs $1.50 input, $9 output per million tokens
- The thinking_level default trap silently breaks copy-pasted code
- Route tool-heavy planning to Flash, repo edits to Claude Code
- Thinking tokens inflate costs 30 to 50 percent on long loops

## Demoable code
```python
config=types.GenerateContentConfig(
    thinking_config=types.ThinkingConfig(thinking_level="low"),
    tools=[session],  # SDK auto-executes MCP tool calls
)
```

## Numbers to animate
- 83.6% MCP Atlas score (vs 79.1% Claude Opus 4.7; vs 75.3% GPT-5.5)
- 76.2% Terminal-Bench 2.1 (vs 70.3% Gemini 3.1 Pro)
- $1.50 per 1M input tokens / $9.00 per 1M output / $0.15 cached input
- 1656 GDPval-AA Elo (vs 1314 Gemini 3.1 Pro)
- 30–50% cost inflation from persistent thinking tokens on agent loops
- May 19, 2026 GA launch

## Canonical URL
https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide

## SEO seed (refined later by /video-script)
- Working title: Gemini 3.5 Flash beats Pro — when to route from Claude Code
- Tags: gemini 3.5 flash, agentic coding, claude code, mcp, ai coding tools, thinking level, model routing, gemini api, terminal bench, 2026

## News peg

**Release:** Gemini 3.5 Flash GA — 2026-05-19 (Google I/O)
**Source:** https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
**Why it pegs this topic:** The launch IS the subject — Flash went GA 8 days ago at $1.50/$9 per 1M tokens and beat Gemini 3.1 Pro on Terminal-Bench 2.1 (76.2%) and MCP Atlas (83.6%). The episode is a timely "should you route to the model that just shipped?" rather than an evergreen tutorial.
**How to use it in the script:** Lead the hook with the release — "Last week Google shipped a Flash model that beats its own Pro on agent benchmarks" — then pivot to the Claude-coder's question: when is it worth routing a task off Claude Code.

**Supporting pegs (strengthen the routing thesis, mention only if room):**
- Claude Code v2.1.126 (2026-05-01) added **gateway model support** — `/model` lists models from a custom gateway, so routing to Flash from inside Claude Code is now literally a picker option, not a context-switch. Source: https://code.claude.com/docs/en/changelog
- Claude Code v2.1.149 (2026-05-22) added a **`/usage` per-category cost breakdown** — directly reinforces the "thinking tokens inflate cost 30–50% on long loops" bullet; you can now see that inflation per subagent/MCP server. Source: https://code.claude.com/docs/en/changelog
