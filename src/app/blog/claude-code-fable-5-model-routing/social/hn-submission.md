# Hacker News Submission - Claude Code Fable 5: Model Routing, Fallbacks, Cost Control

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Claude Code's two fallback systems: routing Fable 5, Opus and Sonnet by task

**URL:** https://avinashsangle.com/blog/claude-code-fable-5-model-routing

---

**First Comment:**

Author here. I wrote this after my Fable 5 session switched to Opus 4.8 before I'd typed anything - the first request carries workspace context, and a CLAUDE.md with security content is enough to trip the safety classifier. The post separates the two fallback mechanisms Claude Code now has (per-turn availability chains vs sticky classifier rerouting), documents the billing treatment (blocked input is free, fallback input bills at 10% cache-read rate), and includes a same-task cost comparison between Fable 5 and Opus 4.8. Corrections welcome, especially from anyone running Fable 5 on Bedrock under the new retention terms.
