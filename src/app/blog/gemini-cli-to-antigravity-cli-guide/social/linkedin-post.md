# LinkedIn Post - Gemini CLI to Antigravity CLI Migration Guide

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py gemini-cli-to-antigravity-cli-guide --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Google announced at I/O 2026 that Gemini CLI stops serving free, Google AI Pro, and Google AI Ultra users on June 18, 2026.

The replacement is Antigravity CLI, a closed-source Go binary called `agy`. Apache 2.0 to closed source, in 30 days.

I dug through the official docs, the GitHub discussion, and the early-adopter writeups. A few things stand out:

- Old Gemini CLI free tier allowed up to 1,000 requests per day. Developers in Discussion #27274 report the new Antigravity free tier empties in 4-5 chat turns, with a ~166-hour reset window.
- Enterprise carveout is real. Gemini Code Assist Standard and Enterprise licenses keep working, and a paid Gemini API key on the open-source Gemini CLI fork is still a valid escape hatch.
- Migration itself is mechanical: `agy plugin import gemini`, move `.gemini/skills/` to `.agents/skills/`, move MCP configs into `mcp_config.json` and rename `url` to `serverUrl`. GEMINI.md and AGENTS.md both keep working.
- Three real alternatives exist depending on workload: Claude Code (Opus 4.6, 1M context, 77.2% SWE-bench Verified), Codex CLI (sandboxed PR-per-task), or staying on Gemini CLI via a paid API key.

The honest part nobody is writing: the decision is not "Antigravity CLI vs nothing." If you used Gemini CLI for the Apache 2.0 portability or the generous free tier, neither property is preserved. That changes the calculus for teams who picked it specifically because it was open and free.

I wrote a full migration guide with the field-mapping tables, install commands for every OS, a side-by-side vs Claude Code and Codex CLI, and a 30-day countdown plan:

https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide

If you have Gemini CLI in production tooling, which path are you taking - migrate, switch, or stay on a paid key?

#GeminiCLI #AntigravityCLI #ClaudeCode #AIEngineering #DeveloperTools
