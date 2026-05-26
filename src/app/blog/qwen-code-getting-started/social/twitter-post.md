# Twitter/X Long-form Post - Qwen Code CLI: Getting Started Guide

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py qwen-code-getting-started --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Spent the last six weeks running Qwen Code alongside Claude Code and Gemini CLI.

Every 2026 guide I read still tells you to "log in with your browser." That has been wrong since 2026-04-15.

Here is what actually works now.

THE OAUTH SHUTDOWN

The Qwen OAuth free tier was discontinued on 2026-04-15. If you copy-paste an old install script you will hit a 401 on first prompt and assume the CLI is broken. It is not. You just need an API key.

THREE PATHS THAT WORK TODAY

1. DashScope (Alibaba Cloud Model Studio) - the official path. Generate a key, drop it in ~/.qwen/settings.json with baseUrl pointing at dashscope-intl.

2. OpenAI-compatible provider (OpenRouter, Together, Fireworks). Same settings.json, baseUrl is the provider URL, model is qwen/qwen3-coder or equivalent. This is how teams that can't egress to Alibaba Cloud stay on Qwen.

3. Self-host Qwen3-Coder with vLLM or Ollama. Weights are Apache-2.0. The 7B variant fits on a single 24GB card. apiKey can be "not-needed"; the CLI just wants the header present.

THE 1M CONTEXT REALITY CHECK

Native context is 256K. YaRN extrapolation stretches it to ~1M, which is what the marketing pages quote. In practice recall starts dropping somewhere past 400K tokens. Keep YaRN off for normal coding. Only flip it on for whole-repo summarization runs.

QWEN CODE VS CLAUDE CODE VS GEMINI CLI

After six weeks of side-by-side use:
- Claude Code still wins on multi-step reasoning and complex refactors.
- Qwen Code wins when you need open weights, cost control, or on-prem self-host.
- Gemini CLI gets sunset on 2026-06-18. Migrate to Antigravity or pick one of the above.

CI/CD IS THE UNDERRATED WIN

qwen -p runs headless inside GitHub Actions. I wired it into a PR-summary workflow that costs ~$0.002 per PR on qwen3-coder-flash. Full YAML in the post.

The whole walkthrough (install, three auth paths, model config, CI/CD recipe, comparison table, common errors) is here:

https://avinashsangle.com/blog/qwen-code-getting-started

Follow @avi_sangle for more Claude Code + multi-CLI workflow notes from Pune.
