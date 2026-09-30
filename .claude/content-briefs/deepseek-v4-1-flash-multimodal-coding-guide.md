# Content Brief: DeepSeek V4.1 Flash for Multimodal Agentic Coding

**Slug:** `deepseek-v4-1-flash-multimodal-coding-guide`
**Status:** ready to write
**Research date:** 2026-09-30
**Source suggestion:** PR #75 (merged 2026-09-30)

---

## Phase 1 - Topic Validation

### Why this topic won the selection

Picked from 30+ open topic PRs using live GSC data (2026-08-30 to 2026-09-27): model-guide posts carry the site's impressions. `/blog/deepseek-v4-flash-agentic-coding-guide` is the #6 page by clicks and #3 by impressions (6,515 impressions, position 7.6). V4.1 Flash is the direct successor, so the new post inherits topical authority and gives the old post a natural "updated version" link. GPT-6 Astra (PR #72) has bigger raw demand but is already saturated (DataCamp, codersera, evolink, Medium, chatgptaihub all have Astra tutorials).

### Search demand

- **Release:** V4.1 Flash shipped September 10, 2026. MIT weights on [Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash). New primary model ID `deepseek-flash`.
- **HN:** [DeepSeek launching v4.1 flash cheaper and more capable than v4 pro](https://news.ycombinator.com/item?id=49624603) - **420 points**. Useful quotes:
  - "I've been using deepseek-v4-flash as a 'worker' model with Claude Code to implement a tool using Rust/Iroh for my personal use, and it works fairly nicely."
  - "it did a pretty good job refactoring a bunch of .metal kernels to .cu" at "something like 300-400 tok/s which was just insanity."
  - "If I'd carefully tested and optimized prompts against Pro I wouldn't be keen on this particular news" (about the V4 Pro reroute that was later reversed).
  - "The price drop is probably more interesting than the benchmark improvement."
- Second HN thread [49639090](https://news.ycombinator.com/item?id=49639090) derailed into system-card philosophy; not useful as a source.
- Search results for "DeepSeek V4.1 Flash" are crowded with review/pricing roundups (buildfastwithai, glbgpt, yottalabs, orcarouter, tech-insider, miraflow, neomanex), which confirms volume.

### First-party demand (Bing, 120 days)

Only 25 queries total. None mention DeepSeek. Adjacent intent that fits FAQ seeds:

| Query | Clicks | Impr. | Pos. |
|---|---|---|---|
| `glm5.2 local` | 1 | 11 | 8.4 |
| `how to configure and display ongoing cost for each query in claude while processing in cmd ?` | 1 | 5 | 4.0 |
| `claude code token cost tracking - input and output -` | 1 | 3 | 6.0 |

Same pattern as the V4 Flash brief: local-open-weights and per-session cost intent.

### Competition

| Who | What | Gap |
|---|---|---|
| [DataCamp](https://www.datacamp.com/tutorial/deepseek-v4-1-api-tutorial) | Visual bug-fixing agent with the OpenAI SDK, Playwright screenshots, `apply_patch`. $0.0103 per run, 87% cached input. | Strongest competitor. No Claude Code at all. |
| [Baseten](https://www.baseten.co/blog/deepseek-v41-flash-more-efficient-prefill-for-coding-agents/) | CED architecture explainer, prefill vs decode | Vendor post, no setup. |
| [Kingy AI](https://kingy.ai/blog/deepseek-v4-1-flash-vs-gpt-6-claude-test/) | 24-trial mini test vs GPT-6 Astra and Fable 5.1 | Tiny sample, no Claude Code routing. |
| [Yotta Labs](https://www.yottalabs.ai/post/deepseek-v4-1-flash-pricing-specs-v4-pro-routing-2026), [popularai](https://www.popularai.org/p/deepseek-v4-pro-vs-v4-1-flash), [shattered.io](https://shattered.io/deepseek-v4-1-flash-v4-pro-retirement-2026/) | Pricing, V4 Pro routing | shattered.io and Pandaily still describe the forced reroute that DeepSeek reversed. |
| buildfastwithai, glbgpt, juliangoldie | Review roundups | Recaps; buildfastwithai wrongly claims no downloadable weights. |

**Nobody has written:** the Claude Code guide that reflects DeepSeek's *changed* recommendation (Flash in every slot), the Anthropic model-name mapping trap, what vision does and does not pass through the Anthropic-compatible endpoint, and the V4 Pro reversal.

### AI citation potential

High. "Should I use X in Claude Code / what changed" questions go to answer engines. Citable assets:
1. The before/after table of DeepSeek's own Claude Code config (August vs September).
2. The Anthropic-name-to-DeepSeek-model mapping table (a trap nobody documents).
3. A corrected V4 Pro timeline with dates.
4. Benchmark table labeled vendor-reported, next to the independent Artificial Analysis number.

### Freshness

- Our own V4 Flash post (2026-08-05) is now wrong on model IDs and on the recommended config. `deepseek-v4-flash` is retired and aliased "temporarily" to V4.1 Flash.
- Several ranking articles still say `deepseek-v4-pro` reroutes to Flash on Sept 14. DeepSeek reversed that on Sept 11.

---

## Verified facts (use these, cite sources)

### Model
- 552B total MoE. **Causal Encoder-Decoder (CED)**: 20-layer encoder + 20-layer decoder. **8B active for prefill (input), 16B active for decode (output).** V4 Flash activated 13B for both. ([HF card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash), [Baseten](https://www.baseten.co/blog/deepseek-v41-flash-more-efficient-prefill-for-coding-agents/))
- Baseten's reasoning: "agentic loops generate far more prefill tokens than decode tokens." Cheap prefill = cheap agent loops.
- KV cache: global cache 890 bytes/token, about 1/4 of V4 Flash (CSA2 + FP4 KV). SWA bounded replay cuts persistent KV to about 1/8. Release note: "1/4 the HBM", "1/8 the SSD storage".
- 1 shared + 384 routed experts per layer, 6 routed active. Engram conditional memory (196B params). DSpark speculative decoding.
- Native vision: DeepSeek-ViT encoder. Text output only. Input JPEG/PNG/GIF/WebP.
- Context 1M tokens, max output 384K ([pricing page](https://api-docs.deepseek.com/quick_start/pricing)).
- Reasoning effort continuously controllable 1-100 (HF card).
- Sampling: temperature 1.0, top_p 0.95 or 1.0, max_tokens >= 256K.
- 45T token multimodal pretraining; SFT -> RL -> on-policy distillation.
- MIT license. No Jinja chat template shipped; use reference `encoding/` folder or `deepseek-recipe` toolkit.

### Model IDs and timeline ([changelog](https://api-docs.deepseek.com/updates))
- **Sep 10:** V4.1 Flash released. Primary ID `deepseek-flash`. V4 Flash and V4 Flash Vision Exp retired; names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` "temporarily routed to V4.1 Flash."
- **Sep 10 release note:** "Starting at 04:00 UTC on Sept 14, 2026, all `deepseek-v4-pro` requests will route to V4.1-Flash at V4.1-Flash rates."
- **Sep 11 revision:** DeepSeek will "continue providing API services for DeepSeek V4 Pro after September 14, 2026, with the billing method remaining unchanged." ([popularai](https://www.popularai.org/p/deepseek-v4-pro-vs-v4-1-flash))
- Pricing page lists `deepseek-v4-pro` as DeepSeek-V4-Pro-0813 (GA Aug 13). No V4.1 Pro date.

### Pricing (per 1M tokens, [pricing page](https://api-docs.deepseek.com/quick_start/pricing))

| Model | Cache hit (off/peak) | Cache miss (off/peak) | Output (off/peak) |
|---|---|---|---|
| deepseek-flash (V4.1 Flash) | $0.003 / $0.006 | $0.15 / $0.30 | $0.60 / $1.20 |
| deepseek-v4-pro | $0.022 / $0.044 | $0.66 / $1.32 | $1.98 / $3.96 |

- Peak: **01:00-04:00 and 06:00-10:00 UTC, Mon-Fri**, excluding Chinese public holidays. In IST that is **06:30-09:30 and 11:30-15:30**. Off-peak is 50% of peak (since Aug 16).
- Concurrency: Flash 2,500, V4 Pro 500.
- Honest comparison with our old post: V4 Flash 0731 was $0.14 / $0.28. **V4.1 Flash output is ~2.1x more expensive off-peak** ($0.60 vs $0.28), input roughly flat. The "price drop" people cite is relative to V4 Pro (4.4x cheaper input, 3.3x cheaper output).
- Features on both: JSON output, tool calls, Responses API, Anthropic API, chat prefix completion (beta). Vision on Flash only.

### Anthropic-compatible endpoint ([guide](https://api-docs.deepseek.com/guides/anthropic_api/))
- Base URL `https://api.deepseek.com/anthropic`.
- Supports image blocks (base64 jpeg/png/gif/webp, URL, file source with `anthropic-beta: files-api-2025-04-14`), text, tool_use/tool_result, thinking blocks. `budget_tokens` is ignored.
- **Unsupported:** document blocks (so PDFs do not go through), search result blocks, redacted thinking, code execution tool results, MCP tool use/results blocks, container upload.
- **Model-name mapping:** Claude opus variants -> `deepseek-v4-pro`; sonnet and haiku variants -> `deepseek-flash`; unmapped -> `deepseek-flash`.

### DeepSeek's Claude Code config, now ([coding agents guide](https://api-docs.deepseek.com/guides/coding_agents/))
```bash
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<your DeepSeek API Key>
export ANTHROPIC_MODEL=deepseek-flash
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-flash
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-flash
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
```
August version (from our V4 Flash post): Opus and Sonnet slots -> `deepseek-v4-pro`, Haiku and subagents -> `deepseek-v4-flash`. **DeepSeek flipped its own advice: Flash now runs everything.**
Also: OpenCode `/connect deepseek` then pick DeepSeek-V4.1-Flash; OpenClaw default `deepseek-flash`.

### Benchmarks (DeepSeek-reported, via [Yotta Labs](https://www.yottalabs.ai/post/deepseek-v4-1-flash-pricing-specs-v4-pro-routing-2026) and HF card)

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
| HLE with tools | 63.9 | 51.5 | 60.0 | - | 62.5 |

- HF card: Terminal-Bench 2.1 90.6 vs Opus 5.0 89.1 and GPT-5.6 Sol 88.8. DeepSWE 74.2 vs Opus 5 74.0.
- Vision-with-tools: BabyVision 89.6, Chartography 78.9 ([buildfastwithai](https://blog.buildfastwithai.com/deepseek-v4-1-flash-review)).
- **The read:** big wins on Terminal-Bench 2.1, DeepSWE, NL2Repo, AutomationBench. Still loses on Terminal-Bench 4.0 (31.2 vs Sol 39.9 and GLM 5.3 37.9), the harder long-horizon terminal suite, and on knowledge (HLE, GPQA). The old post's "Flash executes, it doesn't plan" is weaker now but not gone.

### Independent numbers
- [Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash): Intelligence Index **39, #7 of 117** (median 18). **208.9 tok/s**, TTFT **0.94s**. **$0.27 per Intelligence Index task.** Verbosity: **250M output tokens vs 140M median**. AA lists $0.30/$1.20 (the peak price).
- Note: AA's index scale changed since the August post (V4 Flash was 50, #3 of 101), so do not compare the two numbers directly.
- [Kingy AI](https://kingy.ai/blog/deepseek-v4-1-flash-vs-gpt-6-claude-test/) 24-trial test (Sep 10, Vercel AI Gateway): V4.1 Flash 7/8, GPT-6 Astra 8/8, Fable 5.1 6/8. Cost per passing trial $0.00156 vs $0.01196 vs $0.03117. Flash's failure: returned `{"cursor":"null"}` (string, not JSON null) on a pagination tool, repeated it after the error, never recovered in four responses. Fable 5.1 failed both chart-reading + strict JSON runs.
- DataCamp visual repair agent: $0.0103 for 14 turns + report, 137,088 of 156,724 input tokens cached (87%).

### Local
- 8-GPU node minimum. Comfortable 8x H200 or 8x B200/B300; tight on 8x H100 80GB. ~510 GB FP8 checkpoint. V4 Flash fit on 2x H200 (Yotta Labs). The DGX Spark / Mac Studio story from the August post no longer applies at full precision.
- `vllm serve "deepseek-ai/DeepSeek-V4.1-Flash"` or `python3 -m sglang.launch_server --model-path "deepseek-ai/DeepSeek-V4.1-Flash"`.
- HN user ran V4 Flash IQ3_XXS on Mac Studio (256K ctx, ~117 GB); no confirmed V4.1 quant numbers. Say so.

---

## Phase 2 - Keyword Strategy

**Primary:** `deepseek v4.1 flash`

**Secondary:**
- `deepseek v4.1 flash claude code`
- `deepseek-flash model`
- `deepseek v4.1 flash vision`
- `deepseek v4.1 flash pricing`
- `deepseek v4 pro vs v4.1 flash`

**Long-tail:**
1. how to use deepseek v4.1 flash with claude code
2. is deepseek v4 pro being retired
3. deepseek v4.1 flash vs v4 pro which is better for coding
4. can deepseek v4.1 flash read screenshots
5. deepseek flash peak hours pricing
6. deepseek-v4-flash model deprecated what to use
7. deepseek v4.1 flash local hardware requirements
8. deepseek v4.1 flash benchmarks vs claude opus 5

**FAQ candidates** ([Bing] = observed first-party demand, adapted):
1. What is DeepSeek V4.1 Flash?
2. How do I use DeepSeek V4.1 Flash with Claude Code?
3. Is DeepSeek V4 Pro being shut down? (reversal)
4. Can DeepSeek V4.1 Flash read screenshots in Claude Code?
5. How much does DeepSeek V4.1 Flash cost, and when are peak hours?
6. [Bing] How do I track per-session cost when Claude Code points at DeepSeek? (from "claude code token cost tracking")
7. [Bing] Can I run DeepSeek V4.1 Flash locally? (from `glm5.2 local`)
8. Is DeepSeek V4.1 Flash better than Claude Opus 5 for coding?
9. What happened to the deepseek-v4-flash model ID?

---

## Phase 3 - Content Brief

### Article metadata
- **`metadata.title`:** `DeepSeek V4.1 Flash in Claude Code Guide` (40 chars; rendered 57)
- **OG / Twitter / H1 / TechArticle headline:** `DeepSeek V4.1 Flash in Claude Code: Vision, Routing, Real Costs` (63 chars)
- **Meta description:** `DeepSeek V4.1 Flash reads screenshots, runs every Claude Code slot at $0.15/$0.60 per 1M tokens, and beats V4 Pro on coding. Setup, traps, and real costs.` (check 130-160 when writing)
- **Slug:** `deepseek-v4-1-flash-multimodal-coding-guide`
- **Word count:** 2,800-3,200; **read time** ~12 min
- **Category:** AI Development
- **Lucide icon:** `ScanEye` (vision is the new capability). Alternate: `Eye`.
- **Publish date:** 2026-09-30
- **Tags:** DeepSeek V4.1 Flash, Claude Code, Multimodal, Agentic Coding, Open Weights, AI Cost Optimization

### Direct answer (first 40-60 words)
DeepSeek V4.1 Flash, released September 10, 2026, is a 552B open-weight model that reads images and scores 74.2 on DeepSWE, ahead of DeepSeek's own V4 Pro. It uses the model ID `deepseek-flash`, costs $0.15/$0.60 per 1M tokens off-peak, and DeepSeek now recommends it for every Claude Code slot.

### TL;DR
- New architecture: Causal Encoder-Decoder, 8B active on input and 16B on output. Agent loops are input-heavy, so this is where the savings come from.
- DeepSeek flipped its Claude Code advice: Flash now goes in every slot. In August it put V4 Pro in the main loop.
- Trap: if you pass Claude model names through the endpoint, "opus" maps to `deepseek-v4-pro`, which Flash beats on coding benchmarks.
- V4 Pro is not being shut down. DeepSeek announced a forced reroute on Sep 10 and reversed it on Sep 11.
- Vision works through the Anthropic endpoint for images. PDFs (document blocks) and MCP tool blocks do not.
- Output costs 2x what V4 Flash 0731 did, it's very verbose (250M vs 140M median tokens on AA), and peak hours cover most of an IST morning.

### Outline

**H2: What is DeepSeek V4.1 Flash and what changed from V4 Flash?** (`what-is-v4-1-flash`)
- CED explained plainly: encoder reads the prompt with 8B active, decoder writes with 16B. V4 Flash used 13B for both.
- Why this fits agents: re-sending a big repo context every turn is prefill. Quote Baseten.
- KV cache at 1/4, 1M context, 384K output, native vision, reasoning effort 1-100.
- Link back to the V4 Flash post as the predecessor.

**H2: DeepSeek V4.1 Flash benchmarks: where it wins and where it still loses** (`benchmarks`)
- Full table above, labeled vendor-reported.
- Wins: DeepSWE +19.8 over V4 Flash; Terminal-Bench 2.1 90.6 beats Opus 5.0 89.1 per DeepSeek.
- Losses: Terminal-Bench 4.0 31.2 vs 39.9 Sol; HLE and GPQA behind V4 Pro. Long-horizon still the weak spot.
- Independent: Artificial Analysis 39, #7 of 117; note the scale change. Kingy 7/8 with the `"null"` cursor failure as a concrete example of what goes wrong.

**H2: How to use DeepSeek V4.1 Flash with Claude Code** (`claude-code-setup`)
- Official config block. Then the before/after table (August vs September DeepSeek advice).
- The mapping trap table: opus -> v4-pro, sonnet/haiku -> flash, unmapped -> flash. Tell readers to set all `ANTHROPIC_DEFAULT_*` vars explicitly.
- `budget_tokens` ignored; use `CLAUDE_CODE_EFFORT_LEVEL`.
- Replace `deepseek-v4-flash` with `deepseek-flash` now; the alias is "temporary".
- HN quote on using it as a worker model in Claude Code.
- Link: cost tracking post, Fable 5 model routing post.

**H2: Using V4.1 Flash vision for coding: screenshots, diagrams, UI bugs** (`vision`)
- What passes through: image blocks (base64 jpeg/png/gif/webp, URL, files API). So pasting a screenshot in Claude Code or having it read a PNG works.
- What does not: document blocks (PDF), MCP tool use/result blocks, code execution results. Practical effect: convert PDFs to images or text first. Worth testing MCP-heavy setups before switching.
- Use cases: UI regression check against a screenshot, reading an architecture diagram, chart-to-JSON. BabyVision 89.6 / Chartography 78.9 with tools. Output is text only.
- DataCamp's visual repair loop as reference ($0.0103, 87% cached).

**H2: DeepSeek V4 Pro vs V4.1 Flash: the reroute that didn't happen** (`v4-pro-reversal`)
- Timeline table: Aug 13 V4 Pro GA; Sep 10 Flash launch + reroute notice; Sep 11 reversal; Sep 14 nothing changed.
- Why it matters: some guides still tell you your Pro traffic moved. It didn't. No V4.1 Pro date.
- When to keep V4 Pro: knowledge-heavy answers (GPQA 92.4, HLE 42.7), validated prompts. Everything coding: Flash.
- Lesson on aliases: DeepSeek treats names as movable. Pin behavior with your own eval, not the model ID. Link regression-proofing post.

**H2: DeepSeek V4.1 Flash pricing and peak hours** (`pricing`)
- Pricing table incl. peak. IST conversion.
- Honest comparison with V4 Flash 0731 ($0.14/$0.28): output ~2.1x higher.
- Verbosity tax: 250M vs 140M median.
- Cache hit $0.003 is the number that matters for agent loops; combine with CED cheap prefill.
- Independent per-task: $0.27 per AA task; Kingy $0.00156 per passing trial vs $0.03117 Fable 5.1.

**H2: Can you run DeepSeek V4.1 Flash locally?** (`local`)
- Short answer: not on a workstation anymore. 8-GPU node; ~510 GB FP8; V4 Flash fit on 2x H200.
- vLLM and SGLang commands. No Jinja template: use deepseek-recipe.
- Quantized builds: not confirmed yet; say so. Link GLM 5.2 local post for people who want a workstation model.

**H2: Limitations and gotchas** (`limitations`)
- Vendor benchmarks; no independent Terminal-Bench leaderboard entry confirmed.
- Long-horizon (TB 4.0) gap.
- Verbosity, peak pricing, output price up.
- Unsupported Anthropic blocks (PDF, MCP blocks).
- Alias churn.
- Web UI language switching reported on HN (API users said no issue).
- Data: API traffic goes to DeepSeek servers in China; local weights for residency.

**H2: FAQ** (6-8 of the candidates above)

### Unique angle
The only guide written from the Claude Code side that tracks what *changed*: DeepSeek's own config flip, the opus->v4-pro mapping trap, the V4 Pro reversal, and which Anthropic content blocks the endpoint drops. Framed as the sequel to the site's existing V4 Flash post, with honest corrections (output price up, local no longer workstation-sized).

### Internal links
- `/blog/deepseek-v4-flash-agentic-coding-guide` (predecessor; also add an "updated" callout there pointing to the new post, since its config and model IDs are now stale)
- `/blog/claude-code-cost-tracking`
- `/blog/claude-code-fable-5-model-routing`
- `/blog/regression-proofing-claude-code-workflows`
- `/blog/glm-5-2-local-coding-guide`
- `/blog/kimi-k3-agentic-coding-guide`
- Future: GPT-6 Astra guide (PR #72), HydraFusion routing (PR #74/#79)

## Ready to Write?
Run: /write-blogpost deepseek-v4-1-flash-multimodal-coding-guide
