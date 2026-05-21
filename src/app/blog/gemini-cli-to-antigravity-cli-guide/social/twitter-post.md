# Twitter/X Long-form Post - Gemini CLI to Antigravity CLI Migration Guide

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py gemini-cli-to-antigravity-cli-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Gemini CLI dies on June 18, 2026 for free, Google AI Pro, and Google AI Ultra users.

The replacement is Antigravity CLI - a closed-source Go binary named `agy`. Google announced it at I/O 2026.

You have 30 days. Here is what migrating actually looks like.

THE NUMBERS THAT HURT

Old Gemini CLI free tier: up to 1,000 requests per day.
New Antigravity CLI free tier: weekly cap that developers in Discussion #27274 say empties in 4-5 chat turns, with a 166-hour reset.

That is the single biggest behavior change.

WHO IS CUT OFF

- Free (Gemini Code Assist for individuals): cut off
- Google AI Pro ($19.99/mo): cut off from Gemini CLI, moves to Antigravity Pro
- Google AI Ultra ($249.99/mo): cut off from Gemini CLI, moves to Antigravity Ultra
- Gemini Code Assist Standard / Enterprise: unchanged
- Gemini Code Assist for GitHub via GCP: existing installs unchanged, new installs blocked

THE OPEN-SOURCE ANGLE

Gemini CLI was Apache 2.0. Antigravity CLI is closed source. Issue #27304 on the gemini-cli repo asks for source release. No commitment from Google.

If Apache 2.0 portability is non-negotiable, stay on Gemini CLI pointed at a paid API key via AI Studio or Vertex AI. You lose the free first-party endpoints, not the toolchain.

7-STEP MIGRATION (45 MINUTES)

1. Install `agy` without uninstalling `gemini`
2. OAuth with the same Google account
3. `agy plugin import gemini`
4. Move `.gemini/skills/` to `.agents/skills/`
5. Move MCP configs out of settings.json into `mcp_config.json`, rename `url` to `serverUrl`
6. GEMINI.md and AGENTS.md both work unchanged
7. Run a real workflow under `agy` before uninstalling `gemini`

WHAT DOES NOT CARRY OVER

- Custom themes embedded in extensions
- Terminal-level `gemini skills` command
- Per-call temperature, top_k, and system instruction flags

THE THREE REAL ALTERNATIVES

- Claude Code: Opus 4.6, 1M context, 77.2% SWE-bench Verified. Strongest fit for MCP-heavy, scripted CI agents.
- Codex CLI: sandboxed PR-per-task workflow. Pair with Codex Security.
- OpenGravity: alpha-stage BYOK community clone, GPL-3.0. Sidesteps the weekly cap.

THE 30-DAY PLAN

Week 1: decide migrate vs switch vs stay
Week 2: install `agy` in parallel
Week 3: import plugins, diff `.agents/` against `.gemini/`
Week 4: validate hooks and MCP servers end-to-end

Full migration guide with the field-mapping tables, install commands per OS, and a Claude Code vs Antigravity CLI vs Codex CLI comparison:

https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide

Follow @avi_sangle for more Claude Code and AI dev tooling deep-dives.
