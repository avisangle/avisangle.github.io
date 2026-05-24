# Hacker News Submission - Gemini 3.5 Flash for Agentic Coding

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Gemini 3.5 Flash for Agentic Coding: A Claude Coder's Guide

**URL:** https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide

---

**First Comment:**

Author here. Gemini 3.5 Flash shipped at I/O on May 19. The headline is that a Flash-tier model now beats the previous Pro tier on 11 of 15 agent benchmarks while pricing at $1.50/$9 per 1M tokens. The post is written for Claude Code users like me trying to figure out when to route subtasks across vendors rather than switch wholesale.

Two things in there I haven't seen written up well elsewhere. First, the cost-per-task truth: Simon Willison cites Artificial Analysis at $1,551 vs $892 on Gemini 3.1 Pro for the same benchmark suite, because thinking tokens persist across turns and agent loops chew more output. Second, the `thinking_level` default silently dropped from `high` to `medium` and copy-pasted code from `gemini-3-flash-preview` produces measurably worse outputs unless you set `low` for tool-calling explicitly.

Article includes the benchmark table, a before/after Python migration diff, a working 40-line MCP agent example, and seven honest limitations (no Computer Use yet, knowledge cutoff January 2025, 128k retrieval regressed, GitHub Copilot 14x premium multiplier). Feedback welcome, especially from anyone running Flash in a production agent loop.
