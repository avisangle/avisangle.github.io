# Reddit Posts - Gemini CLI to Antigravity CLI Migration Guide

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py gemini-cli-to-antigravity-cli-guide --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: ClaudeAI
TITLE: Gemini CLI shuts down June 18 - migration steps, rate-limit math, and when Claude Code is the better answer
FLAIR: Comparison
---BODY---
Google announced at I/O 2026 that Gemini CLI stops serving free, Google AI Pro, and Google AI Ultra users on June 18, 2026. Replacement is Antigravity CLI - a closed-source Go binary called `agy`. Gemini CLI was Apache 2.0.

I spent yesterday going through the official transition post, the GitHub discussion (#27274, 143 thumbs-down vs 4 cheers in 24 hours), the early-adopter writeups, and the agentpedia migration guide. Pulled out the parts that actually matter for someone deciding what to do this week.

**Who is cut off**

- Free (Gemini Code Assist for individuals): cut off
- Google AI Pro at $19.99/mo: cut off from Gemini CLI, moves to Antigravity Pro
- Google AI Ultra at $249.99/mo: cut off, moves to Antigravity Ultra
- Gemini Code Assist Standard / Enterprise: unchanged
- Gemini Code Assist for GitHub via GCP: existing installs unchanged, new installs blocked

**The rate-limit reality**

Old Gemini CLI free tier: up to 1,000 requests per day. New Antigravity CLI free tier: developers report the weekly cap empties in 4-5 chat turns with a ~166-hour reset. That is the single largest behavior change.

**The 7-step migration**

1. Install `agy` without uninstalling `gemini` (run both during cutover)
2. OAuth with the same Google account
3. `agy plugin import gemini` brings extensions over
4. Move `.gemini/skills/` to `.agents/skills/` per workspace
5. Move MCP configs out of `settings.json` into `mcp_config.json`, rename `url` to `serverUrl`
6. GEMINI.md and AGENTS.md both work unchanged
7. Run a real workflow under `agy` before uninstalling `gemini`

**What does not carry over**

- Custom themes embedded in extensions are dropped silently on import
- Terminal-level `gemini skills` command has no equivalent in agy
- Per-call temperature, top_k, system instruction overrides are gone

**When Claude Code is the better answer**

If you need long-context refactors, scripted CI agents, MCP-heavy workflows, or terminal composability, switching to Claude Code is the cleaner call. Opus 4.6 at 77.2% SWE-bench Verified with a 1M context window is the strongest fit for terminal-first agentic coding right now. The free-tier shock on Antigravity makes the math even simpler if you were already considering it.

**For Apache 2.0 holdouts**

Paid Gemini API key issued through AI Studio or Vertex AI wired into the open-source Gemini CLI fork. You lose the free first-party endpoints, not the toolchain.

Full guide with the field-mapping tables, install commands per OS, a Claude Code vs Antigravity CLI vs Codex CLI table, and a 30-day countdown plan: https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide

Happy to answer questions if you are mid-migration or weighing the alternatives.
---POST---
SUBREDDIT: AI_Agents
TITLE: Migrating agent CLI tooling off Gemini before June 18 - what actually transfers and what doesn't
FLAIR: Discussion
---BODY---
For anyone running agent CLIs in their stack, Google announced at I/O 2026 that Gemini CLI stops serving free, Google AI Pro, and Google AI Ultra requests on June 18, 2026. Replacement is Antigravity CLI (`agy`). Worth a closer look if you have agent tooling built around Gemini CLI hooks, plugins, or MCP servers.

**What transfers cleanly**

- Plugins via `agy plugin import gemini`
- Hooks fire the same way (pre-tool-call, stop, JSON event)
- GEMINI.md and AGENTS.md both read without modification
- MCP servers, with two changes: configs move out of `settings.json` into `mcp_config.json`, and the `url` field is renamed to `serverUrl`

**What doesn't**

- Custom themes embedded in extensions are dropped silently
- Terminal-level `gemini skills` command has no equivalent (skills move inside the agent via `/skills`)
- Per-call temperature, top_k, and system instruction flags are gone - several Discussion #27274 comments flag this as a real regression for fine-tuned prompts

**The architecture shift**

Antigravity CLI ships as a closed-source Go binary. Gemini CLI was Apache 2.0. Issue #27304 on the gemini-cli repo asks about source release; no Google response yet. If you built tooling on the assumption of an open codebase you could fork and audit, that property does not survive.

**For multi-agent setups**

Antigravity CLI advertises multi-agent orchestration with async background tasks. Whether that justifies migrating a working agent setup is another question. Claude Code with Opus 4.6 (1M context, 77.2% SWE-bench Verified) is the strongest workload-matched alternative if your design needs long context and scripted composability.

Full migration guide with field-mapping tables, install commands, and a side-by-side comparison: https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide

Curious what others are doing - migrate, switch tools, or stay on a paid Gemini API key?
