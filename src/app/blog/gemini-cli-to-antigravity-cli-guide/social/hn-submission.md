# Hacker News Submission - Gemini CLI to Antigravity CLI Migration Guide

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Gemini CLI to Antigravity CLI: Migration Guide and Alternatives

**URL:** https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide

---

**First Comment:**

Author here. Google announced at I/O 2026 that Gemini CLI stops serving free, Google AI Pro, and Google AI Ultra users on June 18, 2026. The replacement is Antigravity CLI (`agy`), a closed-source Go binary. Gemini CLI was Apache 2.0.

I went through the official transition post, GitHub Discussion #27274, and the early-adopter writeups, and pulled out the practitioner-relevant parts: the 7-step migration (plugin import, `.gemini/skills/` to `.agents/skills/`, MCP `url` to `serverUrl`), the rate-limit drop (1,000 free requests/day on Gemini CLI to a weekly cap that developers report empties in 4-5 turns on Antigravity), and where Claude Code or a paid Gemini API key is the cleaner answer.

The part I would push back on most: the 30-day deadline. For teams with Gemini CLI inside production tooling, that is short. Feedback welcome - especially from anyone who has already started the migration or stayed on a paid key.
