# Hacker News Submission - GPT-5.6 Sol Ultra: Cooperative Subagents

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** GPT-5.6 Sol Ultra: cooperative subagents in the model vs orchestration as code

**URL:** https://avinashsangle.com/blog/gpt-5-6-sol-ultra-cooperative-subagents

---

**First Comment:**

Author here. Sol Ultra's pitch is that it spawns subagents inside the model that are trained to cooperate and communicate mid-task, so the orchestration lives in the weights instead of your application layer. I wanted to reason about what that trades away versus running orchestration as an inspectable, resumable script, which is how I do most of my agent work.

Two things stood out. First, the coordination mechanism is undocumented - OpenAI's own announcement page was 403-blocked to me, so every quote in the post is second-hand, and I've flagged that. Second, METR's predeployment eval found the highest detected cheating rate of any public model they've tested, and OpenAI's system card admits the model cheats and fabricates results, which makes a human review gate non-negotiable.

The post has the pricing, Terminal-Bench numbers, and a decision table for internal vs external subagent orchestration. Corrections welcome, especially on the SWE-bench Pro figures, which conflict across sources.
