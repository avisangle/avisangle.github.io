# Reddit Posts - DeepSeek V4.1 Flash in Claude Code

**Post date:** Day 1 (stagger the three subs by at least 30 minutes)
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py deepseek-v4-1-flash-multimodal-coding-guide --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

> **Flair warning:** `list_reddit_flairs.py` returned HTTP 401 for all three subs
> on 2026-09-30, so these are flair names, not verified IDs. `Claude Code` is
> the flair r/ClaudeAI accepted on 2026-04-26 (`Tutorial` was rejected). The
> r/LLMDevs and r/vibecoding values come from the registry. Refresh the Reddit
> credentials and re-run `python scripts/list_reddit_flairs.py <sub>` before
> posting, or expect a flair validation error.

---POST---
SUBREDDIT: ClaudeAI
TITLE: DeepSeek changed its Claude Code config for V4.1 Flash, and there's a model-name trap in the endpoint
FLAIR: Claude Code
---BODY---
If you followed DeepSeek's Claude Code setup in August, your main loop is on V4 Pro. Their docs now say something different.

**August config:** Opus and Sonnet slots -> `deepseek-v4-pro`, Haiku and subagents -> `deepseek-v4-flash`.

**September config (after V4.1 Flash shipped on Sep 10):** every slot -> `deepseek-flash`.

```
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<deepseek key>
export ANTHROPIC_MODEL=deepseek-flash
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-flash
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-flash
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-flash
```

**The trap:** DeepSeek's Anthropic-compatible endpoint maps Claude model names on its own. Any `claude-opus` name goes to `deepseek-v4-pro`. Sonnet, Haiku and anything unmapped go to `deepseek-flash`. So if you only set the base URL and pick Opus in `/model`, you land on V4 Pro, which is slower, costs 4.4x more per input token, and scores 62.7 on DeepSWE against Flash's 74.2. Set every slot explicitly.

A few other things I found going through the docs:

- **Screenshots work** through the endpoint (base64 jpeg/png/gif/webp, URL, or Files API). **PDFs don't**: document blocks are unsupported, and so are MCP tool-use blocks.
- `budget_tokens` on thinking is ignored. Use `CLAUDE_CODE_EFFORT_LEVEL`.
- `deepseek-v4-flash` still resolves, but DeepSeek calls it "temporarily routed". Replace it with `deepseek-flash` now.
- `/cost` still prices tokens with Anthropic's rates, so it's wrong after the swap. Use the DeepSeek dashboard.

Honest caveat: these are DeepSeek's benchmark numbers, and it still trails on Terminal-Bench 4.0 (31.2 vs 39.9 for GPT-5.6 Sol), the long-horizon suite. I wouldn't give it an overnight autonomous task yet.

Full write-up with the before/after table, vision limits and pricing: https://avinashsangle.com/blog/deepseek-v4-1-flash-multimodal-coding-guide

Happy to answer questions, and I'd like to hear from anyone running it as the main model day to day.

---POST---
SUBREDDIT: LLMDevs
TITLE: DeepSeek V4.1 Flash: encoder-decoder split, a silent model-name remap, and a reroute that got reversed
FLAIR: Discussion
---BODY---
I spent some time going through the V4.1 Flash release docs for a write-up, and three things matter more to anyone building on the API than the benchmark headline.

**1. The architecture is built around agent-loop economics.** It's a 552B MoE set up as a Causal Encoder-Decoder: **8B active parameters for prefill, 16B for decode**. V4 Flash used 13B for both. Agent loops re-send large, stable prefixes every turn, so prefill dominates. Combine that with a KV cache DeepSeek says is about a quarter of V4 Flash's (890 bytes/token) and cache hits at **$0.003 per 1M**, and the per-turn cost of a long agent session drops a lot. DataCamp's visual repair agent served 87% of its input from cache and cost about $0.01 for 14 turns.

**2. Model IDs are not stable.** In seven weeks: `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` were retired and aliased to a different architecture. The Sep 10 release note said `deepseek-v4-pro` would reroute to Flash on Sep 14. On Sep 11 they **reversed** it. V4 Pro continues with unchanged billing. If behavior matters to you, pin it with your own eval suite, not the model string.

**3. The Anthropic-compatible endpoint remaps names.** `claude-opus*` -> `deepseek-v4-pro`, `claude-sonnet*` / `claude-haiku*` / anything unmapped -> `deepseek-flash`. Unsupported content types include document blocks (PDFs), MCP tool blocks, code execution results and redacted thinking. `budget_tokens` is ignored.

Numbers, with sources in the post:

- DeepSWE v1.1 74.2, Terminal-Bench 2.1 90.6, **Terminal-Bench 4.0 31.2** (GPT-5.6 Sol 39.9). DeepSeek-reported.
- Artificial Analysis: Intelligence Index 39 (#7/117), 208.9 tok/s, TTFT 0.94s, **250M output tokens vs 140M median** (verbose).
- Pricing: $0.15 in / $0.60 out off-peak, 2x at peak (01:00-04:00, 06:00-10:00 UTC weekdays). Output is ~2.1x V4 Flash 0731.
- Self-hosting: ~510 GB FP8, 8-GPU node minimum, and no Jinja chat template in the repo (use their reference encoder or deepseek-recipe).

Full post: https://avinashsangle.com/blog/deepseek-v4-1-flash-multimodal-coding-guide

Curious whether anyone has independent Terminal-Bench numbers for it yet, or has measured cost per task on a real workload.

---POST---
SUBREDDIT: vibecoding
TITLE: DeepSeek V4.1 Flash can read screenshots now. Here's what works with Claude Code and what doesn't
FLAIR: Discussion
---BODY---
DeepSeek V4.1 Flash came out on Sep 10, and it's the first DeepSeek model in the Flash line that reads images natively. It also runs inside Claude Code through DeepSeek's Anthropic-compatible endpoint, so I looked at how much of the vision side survives that route.

**What works:** pasting a screenshot into Claude Code, or asking it to read a PNG from disk. The endpoint accepts images as base64 (jpeg, png, gif, webp), URLs, or Files API references.

**What doesn't:** PDFs. They travel as "document" blocks, which the endpoint doesn't support. Export pages to PNG or pull the text out first. MCP tool-use blocks are also unsupported, so test any MCP-heavy setup before switching.

Where I'd actually use it:

- Screenshot your page with Playwright, compare it to the design mock, and have it **list the differences before touching any CSS**. Vision models are good at noticing that something moved and worse at saying by how many pixels, so making it commit to a list first is a cheap checkpoint.
- Turning an architecture diagram into a Terraform or module outline.
- Reading a stack trace someone pasted as an image in a ticket.

The cost side: **$0.15 input / $0.60 output per 1M tokens** off-peak, and cached input is $0.003. DataCamp ran a 14-turn screenshot-based repair agent for about **one cent**. Peak hours double the price (01:00-04:00 and 06:00-10:00 UTC on weekdays).

One setup gotcha: if you pick "Opus" in Claude Code's model menu, DeepSeek quietly serves V4 Pro instead of Flash. V4 Pro has no vision support. Set every model slot to `deepseek-flash`.

Setup block and the rest of the details here: https://avinashsangle.com/blog/deepseek-v4-1-flash-multimodal-coding-guide

Happy to answer questions.
