# Hacker News Submission - GPT-5.6 Programmatic Tool Calling

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** GPT-5.6 Programmatic Tool Calling: The Model Writes JS to Call Your Tools

**URL:** https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide

---

**First Comment:**

Author here. GPT-5.6 shipped programmatic tool calling ("code mode") in the Responses API on July 9, and most launch recaps described the concept without showing the mechanics, so I wrote up the request, the model-written program, and the continuation contract that trips people up.

The core idea is the same one behind Anthropic's code-execution-with-MCP and Cloudflare's Code Mode: the model writes code that composes tool calls in a sandbox instead of one call per round trip. What's new is that it's a native API primitive now, with a documented resumption fingerprint and an allowed_callers flag per tool, so you don't assemble the isolation yourself.

I tried to be honest about the token savings (OpenAI cites 38-63.5% on named customers, but the docs themselves say it depends on the task) and about when direct tool calling is still the right call. Feedback welcome, especially from anyone who's measured it against a direct-calling baseline.
