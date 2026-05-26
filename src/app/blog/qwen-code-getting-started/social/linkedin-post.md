# LinkedIn Post - Qwen Code CLI: Getting Started Guide

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py qwen-code-getting-started --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
I installed Qwen Code six weeks ago and immediately got a 401 on my first prompt.

Every getting-started guide I had read told me to "log in with your browser." Turns out that OAuth free tier was discontinued on 2026-04-15, and almost no public guide has been updated since. So I wrote the one I wish I had.

A few takeaways from running Qwen Code (Alibaba's open-source terminal AI agent built on Qwen3-Coder) alongside Claude Code and Gemini CLI in production work:

- Authentication has three paths now: DashScope keys, any OpenAI-compatible provider like OpenRouter, or a self-hosted vLLM endpoint. Drop apiKey + baseUrl + model into ~/.qwen/settings.json and you are running.

- The 1M context window is a YaRN extrapolation trick. Native is 256K, and recall starts dropping past 400K. Keep it at 256K for normal coding, save 1M for whole-repo summarization.

- qwen -p makes it pipeline-ready. I wired up a GitHub Actions PR-summary workflow that costs roughly $0.002 per PR using qwen3-coder-flash. Same -p pattern as claude -p and codex -p, so CI scaffolding ports cleanly.

- After six weeks side-by-side, Claude Code still wins on multi-step reasoning and complex refactors. Qwen Code wins when you need open weights, cost control, or on-prem self-host.

What this is NOT: a Claude Code replacement. It's a second tool in the rotation. I still default to Claude Code for planning-heavy work and reach for Qwen Code when the open-weights license or per-token billing matters.

Full walkthrough (install on macOS/Linux/Windows, three auth paths, settings.json config blocks, CI/CD recipe, side-by-side comparison, common errors):

https://avinashsangle.com/blog/qwen-code-getting-started

If you're running multi-CLI rotations in production, which model is doing the most work for you in 2026?

#ClaudeCode #QwenCode #AIEngineering #DevOps #OpenSource
