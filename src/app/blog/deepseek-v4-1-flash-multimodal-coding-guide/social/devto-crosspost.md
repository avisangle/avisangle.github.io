# Dev.to + Hashnode Cross-post - DeepSeek V4.1 Flash in Claude Code

**Post date:** Day 14-21 (2026-10-14 or later). Syndicating same-day lets dev.to outrank the origin post despite the canonical tag, so hold this 2-3 weeks.
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py deepseek-v4-1-flash-multimodal-coding-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py deepseek-v4-1-flash-multimodal-coding-guide --dry-run`

> **Hashnode warning:** `post_to_hashnode.py` publishes LIVE even with `PUBLISHED: false`.
> Only Dev.to honors the draft flag. Run Hashnode only when you actually want it public.

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: DeepSeek V4.1 Flash in Claude Code: Vision, Routing, Real Costs
DESCRIPTION: DeepSeek V4.1 Flash reads screenshots, beats V4 Pro on coding, and costs $0.15/$0.60 per 1M tokens. Claude Code setup, model-mapping traps, and real costs.
TAGS: ai, deepseek, claudecode, llm
CANONICAL_URL: https://avinashsangle.com/blog/deepseek-v4-1-flash-multimodal-coding-guide
COVER_IMAGE: https://avinashsangle.com/og-deepseek-v4-1-flash-multimodal-coding-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/deepseek-v4-1-flash-multimodal-coding-guide).

DeepSeek V4.1 Flash, released September 10, 2026, is a 552B open-weight model that reads images and scores 74.2 on DeepSWE, ahead of DeepSeek's own V4 Pro. Its API model ID is `deepseek-flash`, it costs $0.15/$0.60 per 1M tokens off-peak, and DeepSeek now recommends it for every Claude Code model slot.

## TL;DR

- New architecture: a Causal Encoder-Decoder that runs 8B active parameters on input and 16B on output. Agent loops are mostly input, which is where the savings come from.
- DeepSeek flipped its own Claude Code advice. In August it put V4 Pro in the main loop. Now `deepseek-flash` goes in every slot. Set them all explicitly: an unset "opus" name maps to `deepseek-v4-pro`.
- V4 Pro is not being shut down. The forced reroute announced on September 10 was reversed on September 11, and several guides still get this wrong.
- Screenshots work through the Anthropic endpoint. PDFs and MCP tool blocks don't. Output costs about 2x what V4 Flash 0731 did, and peak hours cover most of an Indian working morning.

## What Is DeepSeek V4.1 Flash and What Changed from V4 Flash?

V4.1 Flash is a new model, not another post-training pass. When I wrote the [V4 Flash 0731 guide](https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide) in August, the whole story was that DeepSeek squeezed big agent gains out of the same 284B weights. This time the architecture changed. Per the [Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash), V4.1 Flash is a 552B Mixture-of-Experts model built as a Causal Encoder-Decoder (CED): a 20-layer encoder and a 20-layer decoder.

The part that matters for coding agents is the split. The encoder reads your prompt with 8B active parameters. The decoder writes the answer with 16B. V4 Flash used 13B for both. As [Baseten put it](https://www.baseten.co/blog/deepseek-v41-flash-more-efficient-prefill-for-coding-agents/), "agentic loops generate far more prefill tokens than decode tokens." Every turn of a Claude Code session re-sends the system prompt, tool definitions, file contents, and history. Making that reading step cheaper is the right trade for this workload.

The cache got smaller too. DeepSeek reports the global KV cache at 890 bytes per token, roughly a quarter of V4 Flash, using a second-generation compressed sparse attention and FP4 KV storage. The release note sums it up as "1/4 the HBM" and "1/8 the SSD storage." Smaller cache entries mean more of your context stays cached between turns, and cached input is where the cheapest tokens live.

| Spec | V4.1 Flash | V4 Flash 0731 |
|---|---|---|
| Total parameters | 552B | 284B |
| Active (input / output) | 8B / 16B | 13B / 13B |
| Architecture | Causal Encoder-Decoder | Decoder-only MoE |
| Image input | Native (DeepSeek-ViT) | No |
| Context / max output | 1M / 384K | 1M / 384K |
| Reasoning effort | Continuous, 1-100 | low / high / max |
| API model ID | deepseek-flash | deepseek-v4-flash (retired) |
| License | MIT | MIT |

Output is still text only. The vision encoder lets the model look at an image. It doesn't let it draw one.

## DeepSeek V4.1 Flash Benchmarks: Where It Wins and Where It Still Loses

On short and medium coding tasks, V4.1 Flash now matches or beats the frontier models DeepSeek chose to compare against. On the long-horizon suite and on knowledge-heavy tests, it still trails. Every number in this table is DeepSeek-reported, collected by [Yotta Labs](https://www.yottalabs.ai/post/deepseek-v4-1-flash-pricing-specs-v4-pro-routing-2026) from the release materials.

| Benchmark | V4.1 Flash | V4 Flash | V4 Pro | GPT-5.6 Sol | GLM 5.3 |
|---|---|---|---|---|---|
| DeepSWE v1.1 | 74.2 | 54.4 | 62.7 | 73.0 | 66.9 |
| Terminal-Bench 2.1 | 90.6 | 82.7 | 87.9 | 88.8 | 88.2 |
| Terminal-Bench 4.0 | 31.2 | 7.0 | 12.4 | 39.9 | 37.9 |
| NL2Repo-Bench | 64.0 | 54.2 | 61.5 | 56.8 | 58.0 |
| AutomationBench | 54.8 | 37.7 | 43.2 | 45.8 | 48.8 |
| CyberGym | 88.1 | 76.7 | 83.3 | 84.5 | 84.5 |
| GPQA Diamond | 90.9 | 89.9 | 92.4 | 94.1 | 88.1 |
| HLE (no tools) | 36.8 | 37.8 | 42.7 | 44.5 | 42.0 |

The DeepSWE jump from 54.4 to 74.2 is the headline. The model card also puts it at 90.6 on Terminal-Bench 2.1 against 89.1 for Claude Opus 5 and 88.8 for GPT-5.6 Sol. Read those with the usual caution: DeepSeek ran them on its own evaluation setup.

The row I care about more is Terminal-Bench 4.0. It's the harder, longer terminal suite, and V4.1 Flash scores 31.2 against 39.9 for GPT-5.6 Sol and 37.9 for GLM 5.3. In August I summarized V4 Flash as "it executes, it doesn't plan." The gap has narrowed a lot (V4 Flash scored 7.0 here), but it hasn't closed. HLE and GPQA tell a similar story on knowledge: V4 Pro still wins both.

For an independent view, [Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash) scores it 39 on its Intelligence Index, seventh of 117 models, against a median of 18. It measured 208.9 tokens per second output and 0.94s to first token. Don't compare that 39 with the 50 V4 Flash got in August: the index was reworked in between and the scale moved.

**What a failure actually looks like.** Kingy AI ran [24 small trials](https://kingy.ai/blog/deepseek-v4-1-flash-vs-gpt-6-claude-test/) on launch day: V4.1 Flash passed 7 of 8, GPT-6 Astra 8 of 8, Claude Fable 5.1 6 of 8. Flash's one miss is instructive. On a paginated ledger tool it sent `{"cursor":"null"}`, the string "null" instead of JSON null, got an error, repeated the same cursor, then tried an empty string and never read a page. That's a tool-contract mistake, and it's the kind a strict schema on your side catches cheaply. The sample is tiny, but the cost gap isn't: $0.00156 per passing trial against $0.01196 for Astra and $0.03117 for Fable 5.1.

## How to Use DeepSeek V4.1 Flash with Claude Code

Claude Code talks to DeepSeek through its Anthropic-compatible endpoint, so the setup is environment variables and nothing else. This is the current config from [DeepSeek's coding-agents guide](https://api-docs.deepseek.com/guides/coding_agents/).

```bash
export ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="YOUR_DEEPSEEK_API_KEY"

# Every slot runs V4.1 Flash
export ANTHROPIC_MODEL="deepseek-flash"
export ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-flash"
export ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-flash"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-flash"
export CLAUDE_CODE_SUBAGENT_MODEL="deepseek-flash"
export CLAUDE_CODE_EFFORT_LEVEL="max"
```

Compare that with what the same page said seven weeks ago. DeepSeek changed its mind about where its own models belong.

| Claude Code slot | DeepSeek advice, August 2026 | DeepSeek advice, September 2026 |
|---|---|---|
| ANTHROPIC_MODEL | deepseek-v4-pro | deepseek-flash |
| Opus default | deepseek-v4-pro | deepseek-flash |
| Sonnet default | deepseek-v4-pro | deepseek-flash |
| Haiku default | deepseek-v4-flash | deepseek-flash |
| Subagents | deepseek-v4-flash | deepseek-flash |

In August the vendor was saying Flash is for grep and fan-out while Pro writes the code. Now it's saying the new Flash writes the code too, which lines up with the DeepSWE numbers above. If you copied the August config (mine included), your main loop is still on V4 Pro.

### The model-name mapping trap

This one isn't in any setup guide I found. The [Anthropic API compatibility page](https://api-docs.deepseek.com/guides/anthropic_api/) says that when a request arrives with a Claude model name, DeepSeek maps it for you:

| Model name Claude Code sends | What DeepSeek serves |
|---|---|
| Any claude-opus variant | deepseek-v4-pro |
| Any claude-sonnet variant | deepseek-flash |
| Any claude-haiku variant | deepseek-flash |
| Anything unmapped | deepseek-flash |

So if you set only `ANTHROPIC_BASE_URL` and the token, then pick Opus in `/model` because it's the "best" one, you land on V4 Pro. That model is slower, costs 4.4x more on input, and scores 11.5 points lower on DeepSWE. Set every slot explicitly and the mapping never kicks in.

Two more housekeeping items. The old ID `deepseek-v4-flash` still works, but the [changelog](https://api-docs.deepseek.com/updates) says it's "temporarily routed" to V4.1 Flash, so replace it now instead of finding out when the alias disappears. And the endpoint ignores `budget_tokens` on thinking, so control depth with `CLAUDE_CODE_EFFORT_LEVEL` instead.

```bash
# find stale IDs in dotfiles, CI and scripts
grep -rn "deepseek-v4-flash" ~/.zshrc .env* .github/ scripts/ 2>/dev/null

unset ANTHROPIC_API_KEY   # avoid Claude Code picking the wrong credential
claude
# inside the session:
/status                   # base URL should be api.deepseek.com/anthropic, model deepseek-flash
```

Does the swap actually hold up inside Claude Code? One developer on the [420-point HN thread](https://news.ycombinator.com/item?id=49624603) wrote that they'd been "using deepseek-v4-flash as a 'worker' model with Claude Code to implement a tool using Rust/Iroh... and it works fairly nicely." Another reported 300-400 tokens per second on a bulk refactor of Metal kernels to CUDA. My own caveat from August still applies: the endpoint translates the wire format, not the prompt engineering. Claude Code's system prompts were tuned on Claude. Run a few of your real tasks before you move a team over, and keep your [model routing](https://avinashsangle.com/blog/claude-code-fable-5-model-routing) setup handy for switching back.

## Using DeepSeek V4.1 Flash Vision for Coding: Screenshots, Diagrams, UI Bugs

Image input works through the Anthropic endpoint. The compatibility page lists image blocks as supported in three forms: base64 (JPEG, PNG, GIF, WebP), a URL, or a Files API reference with the `anthropic-beta: files-api-2025-04-14` header. In practice that means pasting a screenshot into Claude Code, or asking it to read a PNG from disk, reaches the model as an image. With V4 Flash, the same request had nowhere to go.

What doesn't get through matters just as much. The same page marks these content types as unsupported:

- **Document blocks**, which is how PDFs travel. Export pages to PNG or extract the text first.
- **MCP tool-use and tool-result blocks.** Claude Code runs local MCP servers as regular tools, but if your setup relies on server-side MCP connectors, test it before switching.
- Search result blocks, redacted thinking, code execution results, and container uploads.

DeepSeek's release suite tests vision inside tool use, which is the right place to test it for agents: BabyVision with tools scores 89.6 and Chartography with tools 78.9, per [Build Fast with AI's review](https://blog.buildfastwithai.com/deepseek-v4-1-flash-review). These are the coding jobs where I'd actually reach for it:

- Comparing a Playwright screenshot against a design mock and listing the differences before touching CSS.
- Reading an architecture diagram from a wiki and turning it into a Terraform module outline.
- Pulling numbers out of a Grafana panel screenshot into JSON for an incident note.
- Reading a stack trace someone pasted as an image in a ticket.

The most complete public example is [DataCamp's visual repair agent](https://www.datacamp.com/tutorial/deepseek-v4-1-api-tutorial). It uses the OpenAI SDK, not Claude Code, but its numbers show what an image-in-the-loop session costs: 14 repair turns plus a report came to about $0.0103, with 137,088 of 156,724 input tokens (87%) served from cache. Screenshots come back as tool output, so the model can check its own fix.

```text
Take a screenshot of http://localhost:3000/pricing with Playwright,
save it to /tmp/pricing.png, then read that file and compare it with
designs/pricing-mock.png. List layout differences first. Don't edit
any CSS until I confirm the list.
```

The "list first, edit later" step is deliberate. Visual models are good at spotting that something moved and weaker at saying exactly how many pixels. Making it commit to a list gives you a cheap checkpoint before it starts rewriting stylesheets.

## DeepSeek V4 Pro vs V4.1 Flash: The Reroute That Didn't Happen

V4 Pro is still running, with its own pricing. That's worth saying plainly because the launch announcement said the opposite, and articles that ranked early still repeat it. The timeline, from DeepSeek's [changelog](https://api-docs.deepseek.com/updates) and [PopularAI's write-up](https://www.popularai.org/p/deepseek-v4-pro-vs-v4-1-flash):

| Date | What happened |
|---|---|
| Aug 13, 2026 | V4 Pro reaches general availability as deepseek-v4-pro (V4-Pro-0813) |
| Aug 16, 2026 | Peak/off-peak pricing starts; off-peak is half the peak rate |
| Sep 10, 2026 | V4.1 Flash ships as deepseek-flash. V4 Flash and V4 Flash Vision Exp retired and aliased. Release note says deepseek-v4-pro will route to V4.1 Flash from Sep 14 |
| Sep 11, 2026 | Revision: V4 Pro API service continues after Sep 14 with billing unchanged |
| Sep 14, 2026 | Nothing changed for V4 Pro callers |

The HN thread shows why people cared. One commenter wrote, "If I'd carefully tested and optimized prompts against Pro I wouldn't be keen on this particular news." DeepSeek listened, at least this time. There's still no date for a V4.1 Pro.

So which one should you call? For coding and tool use, Flash: it wins DeepSWE (74.2 against 62.7), Terminal-Bench 2.1 (90.6 against 87.9), and AutomationBench, and it's the only one that takes images. Keep V4 Pro for knowledge-heavy answers where it leads on GPQA Diamond (92.4) and HLE (42.7), or for a production prompt you've already validated and don't want to re-test this quarter.

The broader lesson is about aliases. In seven weeks DeepSeek retired two model names, pointed them at a different architecture, announced a third reroute, and withdrew it. A model ID from this vendor tells you which endpoint you hit, not which weights answer. If behavior matters, pin it with your own eval suite. I covered how in [regression-proofing Claude Code workflows](https://avinashsangle.com/blog/regression-proofing-claude-code-workflows).

## DeepSeek V4.1 Flash Pricing and Peak Hours

V4.1 Flash is much cheaper than V4 Pro and a bit more expensive than the model it replaced. Here are the current rates per 1M tokens from [DeepSeek's pricing page](https://api-docs.deepseek.com/quick_start/pricing).

| Model | Cache hit (off-peak / peak) | Cache miss (off-peak / peak) | Output (off-peak / peak) |
|---|---|---|---|
| deepseek-flash (V4.1 Flash) | $0.003 / $0.006 | $0.15 / $0.30 | $0.60 / $1.20 |
| deepseek-v4-pro | $0.022 / $0.044 | $0.66 / $1.32 | $1.98 / $3.96 |
| V4 Flash 0731 (retired, for reference) | $0.0028 | $0.14 | $0.28 |

The "price drop" people celebrated on HN is relative to V4 Pro: 4.4x cheaper on uncached input and 3.3x on output. Against V4 Flash 0731, input is flat and output is about 2.1x higher off-peak. If your August cost model assumed $0.28 output, update it.

### Peak hours in your time zone

Peak pricing applies 01:00-04:00 and 06:00-10:00 UTC, Monday to Friday, excluding Chinese public holidays. Here in Pune that's 06:30-09:30 and 11:30-15:30 IST, which is most of my working morning and early afternoon. For a US team the windows fall in the evening and overnight, so they barely notice. If you're in India or Europe, schedule batch jobs (bulk refactors, overnight evals, doc generation) outside those windows and they cost half.

### The verbosity tax, and why cache wins it back

Artificial Analysis flags V4.1 Flash as very verbose: 250M output tokens across its evaluation, against a median of 140M. Output is the expensive side of the bill, so this eats into the headline price. Its measured cost was $0.27 per Intelligence Index task.

Cached input at $0.003 per 1M is where it wins that back. A Claude Code session re-sends a long, stable prefix on every turn, and that prefix is exactly what gets cached. The DataCamp run above served 87% of its input from cache. Cheap encoder-side compute plus near-free cache hits is the actual economic argument for this model in an agent loop, more than the $0.15 sticker.

One practical warning: Claude Code's `/cost` prices tokens with Anthropic's rates, so after you swap the endpoint its number is wrong. Pull usage from the DeepSeek dashboard, or parse the session JSONL and apply the right rate per timestamp. The [Claude Code cost tracking guide](https://avinashsangle.com/blog/claude-code-cost-tracking) shows how to read those files.

## Can You Run DeepSeek V4.1 Flash Locally?

You can, but not on a workstation anymore. The weights are MIT-licensed on Hugging Face, and the FP8 checkpoint is about 510 GB. Yotta Labs puts the practical minimum at an 8-GPU node: 8x H100 80GB is a tight fit, 8x H200 or 8x B200/B300 is comfortable. V4 Flash fit on two H200s, and people ran quantized builds on a pair of DGX Sparks. That path is closed for V4.1 at full precision.

```bash
# vLLM
pip install vllm
vllm serve "deepseek-ai/DeepSeek-V4.1-Flash"

# or SGLang
pip install sglang
python3 -m sglang.launch_server \
  --model-path "deepseek-ai/DeepSeek-V4.1-Flash" \
  --host 0.0.0.0 --port 30000
```

Two catches from the model card. There's no Jinja chat template in the repo, so generic tooling that expects one will format prompts wrong; use the reference encoder in the `encoding/` folder or DeepSeek's `deepseek-recipe` toolkit. And the card recommends `temperature 1.0`, `top_p` 0.95 or 1.0, and a `max_tokens` of at least 256K, which is a lot of room for a verbose model to fill.

I haven't seen confirmed numbers for a V4.1 Flash quant on consumer hardware yet. For V4 Flash, an HN user ran an IQ3_XXS build at 256K context in about 117 GB on a Mac Studio, and something similar will probably appear for V4.1. Until it does, self-hosting only makes sense for data residency or air-gapped work. If a model that fits under your desk is the real requirement, start with [GLM-5.2 locally](https://avinashsangle.com/blog/glm-5-2-local-coding-guide).

## DeepSeek V4.1 Flash Limitations and Gotchas

Most of these come straight from the sections above. Here they are in one place, the way I'd check them before switching a team over.

- **Vendor benchmarks.** The frontier comparisons are DeepSeek's own runs. The only independent composite I trust so far is Artificial Analysis (39, seventh of 117).
- **Long-horizon gap.** Terminal-Bench 4.0 at 31.2 against 39.9 for GPT-5.6 Sol. For multi-hour autonomous runs, keep a stronger model in the loop.
- **Output price went up** versus V4 Flash, the model is verbose, and peak hours double everything.
- **Unsupported blocks.** No PDFs as documents, no MCP tool blocks, no code-execution results through the Anthropic endpoint.
- **Alias churn.** `deepseek-v4-flash` is a temporary alias, and unmapped Claude names fall through to whatever DeepSeek decides.
- **Language drift in the web app.** HN users saw replies switch to Chinese in the web UI. API users in the same thread reported no problem.
- **Data location.** Hosted API traffic goes to DeepSeek's servers in China. For code under an NDA, the self-hosted weights are the answer, with the hardware bill above.

My read after a month of following this model line: V4.1 Flash is the first DeepSeek model I'd put in the Claude Code main loop for everyday work, not just the Haiku slot. It's not the model I'd hand an overnight autonomous task, and I'd still check the bill after the first week.

## Frequently Asked Questions

### What is DeepSeek V4.1 Flash?

DeepSeek V4.1 Flash is a 552B-parameter open-weight model released September 10, 2026 under the MIT license. It uses a new Causal Encoder-Decoder design with 8B active parameters for input and 16B for output, reads images natively, supports a 1M-token context, and is served on the API as deepseek-flash.

### How do I use DeepSeek V4.1 Flash with Claude Code?

Set ANTHROPIC_BASE_URL to https://api.deepseek.com/anthropic, put your DeepSeek key in ANTHROPIC_AUTH_TOKEN, and set ANTHROPIC_MODEL plus every ANTHROPIC_DEFAULT_*_MODEL variable and CLAUDE_CODE_SUBAGENT_MODEL to deepseek-flash. Set all of them explicitly, because an unset Opus slot maps to deepseek-v4-pro. Then run /status inside Claude Code to confirm the base URL and model before real work.

### Is DeepSeek V4 Pro being shut down?

No. The September 10 release note said deepseek-v4-pro requests would route to V4.1 Flash from September 14. DeepSeek revised that on September 11: V4 Pro service continues with unchanged billing. It is served as V4-Pro-0813, and there is no announced date for a V4.1 Pro.

### Can DeepSeek V4.1 Flash read screenshots in Claude Code?

Yes. DeepSeek's Anthropic-compatible endpoint accepts image blocks as base64 JPEG, PNG, GIF, or WebP, as URLs, or through the Files API. PDFs sent as document blocks are not supported, and neither are MCP tool-use blocks, so test MCP-heavy sessions before switching over.

### How much does DeepSeek V4.1 Flash cost, and when are peak hours?

Off-peak, it costs $0.15 per 1M uncached input tokens, $0.003 per 1M cached input tokens, and $0.60 per 1M output tokens. Peak hours double that and run 01:00-04:00 and 06:00-10:00 UTC on weekdays, which is 06:30-09:30 and 11:30-15:30 in India.

### How do I track per-session cost when Claude Code points at DeepSeek?

Don't rely on the in-session /cost figure, because Claude Code prices tokens with Anthropic's rate table. Read usage from the DeepSeek platform dashboard, or parse token counts from the session JSONL files and apply DeepSeek's peak or off-peak rates based on each request's timestamp.

### Can I run DeepSeek V4.1 Flash locally?

Only on server hardware. The FP8 checkpoint is about 510 GB, and the practical minimum is an 8-GPU node such as 8x H100 80GB, with 8x H200 or B200 being comfortable. V4 Flash fit on two H200s. For a workstation, a smaller open model like GLM-5.2 is the realistic option.

### Is DeepSeek V4.1 Flash better than Claude Opus 5 for coding?

On DeepSeek's own numbers it edges Opus 5 on Terminal-Bench 2.1 (90.6 against 89.1) and DeepSWE (74.2 against 74.0). Those are vendor-reported. It still trails on the harder Terminal-Bench 4.0, and Artificial Analysis ranks it seventh overall, so treat it as close on short tasks, not equal.
