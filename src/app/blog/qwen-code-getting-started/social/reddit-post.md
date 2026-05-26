# Reddit Posts - Qwen Code CLI: Getting Started Guide

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py qwen-code-getting-started --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

Note: r/ChatGPTCoding was last posted to on 2026-05-26 (Gemini 3.5 Flash article).
This is within the 7-day-per-sub guardrail; user opted to proceed anyway because
the topic is materially different (Qwen vs Gemini).

Also: r/ChatGPTCoding requires account-level user flair on the sub before
posting. If posting fails with POST_GUIDANCE_VALIDATION_FAILED, set a user flair
at https://www.reddit.com/r/ChatGPTCoding/ first.

---POST---
SUBREDDIT: LocalLLaMA
TITLE: Switched my Qwen Code setup from OAuth to self-hosted vLLM after the 2026-04-15 free-tier shutdown - notes from six weeks
FLAIR: Tutorial | Guide
---BODY---
TL;DR: Qwen OAuth free tier was discontinued on **2026-04-15**. The CLI itself is still Apache-2.0 and open. I now run it three ways: DashScope API key, OpenRouter, or self-hosted vLLM. Self-host is the cheapest if you already have a GPU sitting around.

**The setup that actually works in May 2026**

The CLI does not care where inference happens. It speaks OpenAI chat completions. So `~/.qwen/settings.json` for a self-host run looks like:

```
{
  "apiKey": "not-needed",
  "baseUrl": "http://localhost:8000/v1",
  "model": "Qwen/Qwen3-Coder-7B-Instruct"
}
```

The 7B variant runs on a single 24GB card. The flagship MoE build needs serious hardware - I tested briefly on a rented H100 cluster but the cost math did not work for my use case.

**The 1M context claim**

Native is 256K. YaRN positional extrapolation stretches it to ~1M, which is what the marketing pages quote. In practice recall starts dropping somewhere past 400K tokens, which matches what I've seen others report. I keep YaRN off for daily coding and only flip it on for whole-repo summarization where I'm dumping a few hundred files into a single prompt anyway.

**Latency**

On qwen3-coder-plus (DashScope hosted) my first real task - refactoring a 380-line Next.js route handler into smaller server actions - finished in ~22 seconds end to end. That is competitive with Claude Sonnet 4.6 for the same prompt. Self-hosted 7B is slower per token but throughput is yours.

**What I run it alongside**

Claude Code for planning-heavy multi-step work, Qwen Code when the open-weights license matters or I'm doing high-volume runs where per-token billing beats a subscription. They are not interchangeable. Gemini CLI gets sunset on 2026-06-18 so that one is on its way out anyway.

Full writeup with the three auth paths, model variant table, a GitHub Actions PR-summary workflow using `qwen -p`, and the common-error fixes: https://avinashsangle.com/blog/qwen-code-getting-started

Happy to answer questions. Curious whether anyone here has tried the 480B MoE build in production - the hardware math is rough.

---POST---
SUBREDDIT: ChatGPTCoding
TITLE: Qwen Code vs Claude Code vs Gemini CLI after six weeks of side-by-side use
FLAIR: Resources And Tips
---BODY---
I've been running all three terminal agents in rotation for about six weeks. Here's the honest breakdown for anyone deciding which to add to their stack in 2026.

**License and pricing**
- Qwen Code: Apache-2.0, BYO key, pay per token (DashScope, OpenRouter, or self-host)
- Claude Code: Proprietary, $20/mo subscription minimum
- Gemini CLI: Apache-2.0 but **deprecating on 2026-06-18** in favor of Antigravity CLI

**Default model + context**
- Qwen Code: Qwen3-Coder-Plus, 256K native (~1M via YaRN, but recall drops past 400K)
- Claude Code: Sonnet 4.6, 200K (1M beta)
- Gemini CLI: Gemini 2.5 Pro, 1M

**Where each wins**
- **Claude Code** still wins on multi-step reasoning, plan-then-execute workflows, and complex refactors. It's the one I reach for when I haven't fully scoped the task.
- **Qwen Code** wins when the open-weights license matters, you need cost control on high-volume runs, or you have on-prem GPUs sitting idle. Self-hosted 7B on a single 24GB card is the sweet spot for many teams.
- **Gemini CLI** has the longest native context but the rate limits got brutal after Q1, and the shutdown date kills it as a serious choice now.

**CI/CD parity**

All three support `-p` for non-interactive runs (`qwen -p`, `claude -p`, `gemini -p`). I wired qwen3-coder-flash into a GitHub Actions PR-summary workflow at ~$0.002 per PR, which is hard to beat. The harden-the-workflow defenses (tool allowlists, egress blocks) port across all three because the failure mode is the same: an injected comment hijacks the agent.

**One gotcha specific to Qwen Code**

The OAuth free tier was discontinued on **2026-04-15**. Every getting-started guide written before that date is now wrong about authentication. If you hit a 401 on first prompt, that's why. Switch to an API key in `~/.qwen/settings.json`.

Full writeup with the install paths (Windows/macOS/Linux), three working auth methods, a comparison table, and the CI/CD recipe: https://avinashsangle.com/blog/qwen-code-getting-started

Happy to answer questions about any of the three CLIs. What's your default in 2026?
