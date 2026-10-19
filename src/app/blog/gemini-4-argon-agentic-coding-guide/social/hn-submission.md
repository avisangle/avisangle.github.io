# Hacker News Submission - Gemini 4 Argon for Agentic Coding: When It Beats Opus 5.5

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Gemini 4 Argon for agentic coding: benchmarks, thinking levels, and Claude Code

**URL:** https://avinashsangle.com/blog/gemini-4-argon-agentic-coding-guide

---

**First Comment:**

Author here. Argon's $2/$10 intro price becomes $4/$20 on December 1, the same per-token price as Opus 5.5, so I tested what the next six weeks are good for.

Against the API, `minimal` thinking returns a 400 and `thinkingBudget` still works, which contradicts some guides. On one coding task, high thinking cost roughly 7-8x more than low for the same passing code. Running it inside Claude Code through LiteLLM fails on every request until you set DISABLE_PROMPT_CACHING=1, because Argon refuses explicit caching.

My sweep is one task and six runs, so I'd like to hear from anyone with larger real-repo comparisons.
