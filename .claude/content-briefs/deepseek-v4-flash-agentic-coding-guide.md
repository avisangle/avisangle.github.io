# Content Brief: DeepSeek V4 Flash 0731 for Agentic Coding

**Slug:** `deepseek-v4-flash-agentic-coding-guide`
**Status:** ready to write
**Research date:** 2026-08-04

---

## Phase 1 — Topic Validation

### Search demand

- **Hard news peg (July 31, 2026):** DeepSeek shipped `DeepSeek-V4-Flash-0731`, graduating Flash from preview to public beta and releasing the weights under MIT the same week ([Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731), [MarkTechPost](https://www.marktechpost.com/2026/07/31/deepseek-upgrades-deepseek-v4-flash-0731-with-major-agentic-and-coding-gains/), [The New Stack](https://thenewstack.io/deepseek-v4-flash-open-weights/)).
- **The headline that carries the story:** same 284B MoE architecture, 13B active, no new pretraining. Post-training alone took DeepSWE from 7.3 to 54.4 and Terminal Bench 2.1 from 61.8 to 82.7 — and beat DeepSeek's own V4-Pro-Preview on all nine published agent benchmarks.
- **Two HN front-page threads in three days:**
  - [DeepSeek-V4-Flash Update](https://news.ycombinator.com/item?id=49119559) — **741 points**, Aug 1-2. Benchmark comparisons vs GPT-5.6 Terra, local-hardware math (2x DGX Spark at 60 tok/s, ~€8,200), "this is more exciting than K3."
  - [DeepSeek V4 Flash 0731 Intelligence, Performance and Price Analysis](https://news.ycombinator.com/item?id=49120299) — **589 points**, Aug 3. Cost-per-task math vs OpenAI Luna, the training-opt-out complaint, and the single most useful line for this post: *"I tried Deepseek with Claude Code and it under performed."*
- **Independent verification exists and is public:** Artificial Analysis scores it **50 on the Intelligence Index (#3 of 101)**, 122.7 tok/s output, 1.31s TTFT, and **$72.02 to run the full eval suite** ([Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-flash)). For scale, the same source's Gemini 3.5 Flash run cost $1,551.60.
- **Prior HN sentiment (pre-0731) is already positive:** ["It's a monster at coding. And a fast monster at that"](https://news.ycombinator.com/item?id=48577713) (June 2026), and [an earlier cost-effectiveness thread](https://news.ycombinator.com/item?id=47987685) (May 2026).

### First-party demand (Bing Webmaster Tools, 120 days)

**Thin — 25 total queries in the window.** Only four are even loosely adjacent, but three of them are directly usable as FAQ seeds because they are *observed* natural-language phrasings, not guesses:

| Query | Clicks | Impr. | Position | Why it matters |
|---|---|---|---|---|
| `is it possible to extract the cost of a session from claude?` | 2 | 2 | 4.0 | Question-form, cost-tracking intent. Confirms this audience thinks in per-session cost, not per-token price. |
| `how to monitor token usage cost in claude web` | 2 | 1 | 6.0 | Same intent, different phrasing. |
| `glm5.2 local` | 1 | 8 | **8.0** | **Page-1-but-bottom.** Proves the site already gets impressions on "run a Chinese open-weight model locally" queries. The local-hardware section can target this cluster directly. |
| `jenkins mcp server for ai agents` | 2 | 1 | 2.0 | Adjacent only — agent tooling intent. |

No DeepSeek query has surfaced yet, which is expected for a five-day-old release. Treat the Bing data as **confirmation of adjacent intent** (cost-per-session, local open-weight models), not as keyword validation for the primary term.

### Competition check

| Who | What they published | Gap |
|---|---|---|
| [deepseekv4guide.org](https://deepseekv4guide.org/guides/flash-benchmarks) | Dedicated fan site — benchmark tables + [an OpenCode setup page](https://deepseekv4guide.org/guides/flash-opencode) | Reprints DeepSeek's own numbers uncritically. No Claude Code. |
| [DevTk.AI](https://devtk.ai/en/blog/deepseek-v4-agent-setup-2026/) | Multi-agent setup guide (OpenCode, Codex, Copilot CLI, Cline, Kilo) | Broad and shallow — a config dump per tool, no routing judgment, no cost model. |
| [NxCode](https://www.nxcode.io/resources/news/deepseek-v4-flash-0731-agent-economics-2026) | "Agent economics" news piece | Closest to the cost angle, but news-shaped, no hands-on setup. |
| [MarkTechPost](https://www.marktechpost.com/2026/07/31/deepseek-upgrades-deepseek-v4-flash-0731-with-major-agentic-and-coding-gains/) / [Flowtivity](https://flowtivity.ai/blog/deepseek-v4-flash-agent-benchmarks/) / [benchlm](https://benchlm.ai/blog/posts/deepseek-v4-flash-0731) | Benchmark recaps | Pure repackaging of the model card. |
| [Kilo Code](https://kilo.ai/landing/deepseek-v4) | Vendor landing page | Marketing. |

**Nobody has written:** the Claude Code-specific guide. DeepSeek ships an **Anthropic-compatible endpoint** (`https://api.deepseek.com/anthropic`) with an official `ANTHROPIC_BASE_URL` config, which means a Claude Code user can point their existing harness at V4 Flash in about four environment variables — and nobody has published an honest assessment of whether they should. Nobody has reconciled DeepSeek's self-reported harness numbers against the public Terminal-Bench leaderboard either.

### AI citation potential

**High.** This is a "should I switch / how do I configure X" question — exactly the shape people ask ChatGPT and Claude rather than Google. Three assets make the post citable rather than promotional:

1. A **verified-vs-claimed** benchmark table (DeepSeek's harness vs the public leaderboard vs Artificial Analysis).
2. A **cost-per-task** number, not a cost-per-token number.
3. A **named limitation list** with sources — the thing recap posts never write.

### Freshness

The release is five days old at time of writing. `deepseek-chat` and `deepseek-reasoner` model aliases are **retired**; the correct ID is `deepseek-v4-flash`. Any guide written before July 31 is wrong on both the model ID and the benchmark numbers.

---

## Phase 2 — Keyword Strategy

### Primary keyword
`deepseek v4 flash claude code`

### Secondary keywords
- `deepseek v4 flash agentic coding`
- `deepseek v4 flash benchmarks`
- `deepseek anthropic api base url`
- `deepseek v4 flash pricing`
- `deepseek v4 flash vs claude`

### Long-tail queries
1. how to use deepseek v4 flash with claude code
2. is deepseek v4 flash good for agentic coding
3. deepseek v4 flash vs claude opus 4.8 cost
4. deepseek anthropic compatible endpoint setup
5. deepseek v4 flash 0731 benchmarks verified
6. can i run deepseek v4 flash locally
7. deepseek v4 pro vs flash which to use
8. deepseek v4 flash context window 1m

### FAQ candidates

Marked **[Bing]** = observed demand from the first-party query report; **[PAA/autocomplete]** = external.

1. **[Bing]** Is it possible to extract the cost of a session from Claude Code when routing to DeepSeek? *(verbatim query, reframed for topic)*
2. **[Bing]** How do I monitor token usage cost when Claude Code points at a third-party endpoint?
3. **[Bing]** Can DeepSeek V4 Flash run locally? *(derived from `glm5.2 local`, position 8 — same intent cluster)*
4. **[PAA]** What is DeepSeek V4 Flash 0731 and what changed on July 31, 2026?
5. **[PAA]** How much does DeepSeek V4 Flash cost per 1M tokens?
6. **[PAA]** Is DeepSeek V4 Flash better than DeepSeek V4 Pro?
7. **[PAA]** How do I configure Claude Code to use DeepSeek?
8. **[PAA]** How does DeepSeek V4 Flash compare to Claude and GPT-5.6 on agent benchmarks?
9. **[autocomplete]** Does DeepSeek train on my API data?
10. **[autocomplete]** What is the DeepSeek V4 Flash context window?

---

## Phase 3 — Content Brief

### Article metadata

- **`metadata.title`:** `DeepSeek V4 Flash for Claude Code Users` — **39 chars**. Rendered = 39 + 17 (` | Avinash Sangle`) = **56**. Within the ≤60 budget.
- **OG / Twitter / `TechArticle` headline / visible `<h1>`:** `DeepSeek V4 Flash for Claude Code: Setup, Routing, and Real Costs` — **65 chars**, no template suffix applied.
- **Meta description (146 chars):** `DeepSeek V4 Flash 0731 costs $0.14/$0.28 per 1M tokens and speaks the Anthropic API. How to route Claude Code work to it, and when not to.`
- **Slug:** `deepseek-v4-flash-agentic-coding-guide`
- **Target word count:** 2,800-3,200
- **Estimated read time:** 12 min
- **Category:** AI Development / Developer Tools
- **Lucide icon:** `Route` (the routing playbook is the spine of the post; distinct from `Zap` on the Gemini 3.5 Flash piece). Alternate: `Split`.
- **Publish date:** 2026-08-05
- **Tags:** DeepSeek V4 Flash, Agentic Coding, Claude Code, Open Weights, AI Cost Optimization, Model Routing

### Direct answer (first 40-60 words)

DeepSeek V4 Flash 0731, released July 31, 2026, is a 284B MoE model with 13B active parameters that costs $0.14 input / $0.28 output per 1M tokens. It speaks the Anthropic API, so Claude Code can point at it in four environment variables. It wins on short-horizon tool use and loses on long-horizon agent tasks.

### TL;DR bullets

- **What shipped:** V4-Flash-0731 (July 31, 2026) — public beta, MIT weights, **same architecture as the April preview**. Every gain came from post-training. Terminal Bench 2.1 went 61.8 → 82.7; DeepSWE went 7.3 → 54.4.
- **It beat its own flagship:** Flash outscores V4-Pro-Preview on all nine published agent benchmarks, which is why the release got two HN front pages in three days.
- **The price is real:** $0.14/$0.28 per 1M tokens, $0.0028 cache-hit input. Artificial Analysis ran its full Intelligence Index suite for **$72.02** and scored it **50 (#3 of 101 models)**.
- **Claude Code can use it today:** `ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic` plus three model-mapping variables. DeepSeek documents this officially.
- **But route carefully:** Flash beats GPT-5.6 Terra on Terminal Bench (82.7 vs 78.4) and Toolathlon (70.3 vs 53.1), and loses badly on DeepSWE (54.4 vs 69.6) and Agents' Last Exam (25.2 vs 50.4). Short-horizon tool use, yes. Long-horizon autonomous work, no.
- **The catches nobody lists:** self-reported harness (not on the public Terminal-Bench leaderboard), very verbose output (210M eval tokens vs 100M median), no training opt-out, no multimodal, and 2x peak-hour pricing is coming.

### Content outline

#### H2: What is DeepSeek V4 Flash 0731 and what changed on July 31, 2026

- Direct answer: an updated post-training run on the same 284B-parameter MoE (13B active), released to public beta with MIT weights. No architecture change, no new pretraining.
- The framing that makes this interesting: the gains came from **teaching the model strategy, planning, error-checking, and recovery** — not from scale. That is a different and more transferable result than "we trained a bigger model."
- Note the parameter-count discrepancy honestly: the Hugging Face repo reports **304B** total; that includes the attached **DSpark speculative-decoding draft module**. The model itself is 284B / 13B active. Sources: [HF model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731), [Open Source For You](https://www.opensourceforu.com/2026/08/deepseek-open-sources-v4-flash/).
- Model ID housekeeping: use `deepseek-v4-flash`. The `deepseek-chat` and `deepseek-reasoner` aliases are retired.

#### H2: DeepSeek V4 Flash benchmarks: where Flash beats Pro

- Direct answer paragraph, then the full published table. This is DeepSeek's own reporting — label it as such in the table caption.

| Benchmark | V4-Flash-0731 | V4-Flash Preview | V4-Pro-Preview | GLM-5.2 | Claude Opus 4.8 |
|---|---|---|---|---|---|
| Terminal Bench 2.1 | 82.7 | 61.8 | 72.1 | 81.0 | 85.0 |
| DeepSWE | 54.4 | 7.3 | 12.8 | 46.2 | 58.0 |
| Cybergym | 76.7 | 38.7 | 52.7 | — | 83.1 |
| Toolathlon-Verified | 70.3 | 49.7 | 55.9 | 59.9 | 76.2 |
| NL2Repo | 54.2 | 39.4 | 38.5 | 48.9 | 69.7 |
| DSBench-FullStack | 68.7 | 37.0 | 41.8 | 61.8 | 71.6 |
| DSBench-Hard | 59.6 | 25.8 | 31.1 | 54.5 | 71.7 |
| AutomationBench Public | 25.1 | 10.8 | 12.8 | 12.9 | 27.2 |
| Agents' Last Exam | 25.2 | 15.8 | 16.5 | 23.8 | 25.7 |

Source: [DeepSeek-V4-Flash-0731 model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731).

- **The DeepSWE row is the story.** 7.3 → 54.4 is a ~7x jump on the same weights. Explain what DeepSWE measures and why post-training moves it that far.
- **The honest read of the Opus column:** Flash trails Claude Opus 4.8 on every single benchmark in DeepSeek's own table. It's close on Terminal Bench (82.7 vs 85.0) and Agents' Last Exam (25.2 vs 25.7), and far behind on NL2Repo (54.2 vs 69.7) and DSBench-Hard (59.6 vs 71.7). The pitch is not "as good as Opus." It's "70-90% of Opus on tool-shaped work at ~2% of the price."

#### H2: What the benchmarks don't show: claimed vs verified

**This is the section that makes the post citable. No competitor has written it.**

- **DeepSeek ran its own harness.** The model card states the official V4-Flash "natively supports the Responses API format and is specifically adapted for Codex" — meaning the cross-model comparisons are not same-harness. HN caught this immediately ([thread](https://news.ycombinator.com/item?id=49119559)): *"They do say the official V4-Flash natively supports the Responses API... so at some point someone will make a same-harness comparison."*
- **It is not on the public Terminal-Bench 2.1 leaderboard.** Checked August 4, 2026 — [tbench.ai](https://www.tbench.ai/leaderboard/terminal-bench/2.1) lists Claude Code + Fable 5 at 83.8%, Codex + GPT-5.5 at 83.1%, Claude Code + Opus 4.8 at 78.9%, Codex + GPT-5.6 Terra at 78.4%. DeepSeek V4 Flash 0731 has no entry. A PR to add it exists. Until it lands, 82.7 is a vendor number.
- **Artificial Analysis measured slightly lower** than DeepSeek's reported figures on its own suite. Its composite: **Intelligence Index 50**, ranked #3 of 101, well above the median of 25.
- **Harness quality is now part of the model.** Quote the HN observation worth stealing: *"the future will be paired model-harness releases, not just weight dumps. The performance changes are so big with the right harness that it makes sense to engineer the harness and fine-tune the model to one another."* This is the framing to hand the reader.
- **Practitioner takeaway:** treat vendor benchmark tables as directional and trust the delta-vs-itself rows (Flash-0731 vs Flash-Preview) far more than the cross-vendor rows. Same weights, same harness, same evaluator — that comparison is airtight; the Opus and GPT columns are not.

#### H2: How to use DeepSeek V4 Flash with Claude Code

The actionable core. This is what nobody else has published for this model.

- Direct answer: DeepSeek runs an **Anthropic-compatible endpoint** that translates Anthropic message format, tool calls, and streaming into DeepSeek-native execution. Point `ANTHROPIC_BASE_URL` at it and Claude Code works unchanged.
- The official config, verbatim from [DeepSeek's coding-agents guide](https://api-docs.deepseek.com/guides/coding_agents/):

```bash
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<your DeepSeek API key>
export ANTHROPIC_MODEL=deepseek-v4-pro
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-v4-pro
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-v4-pro
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-v4-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-v4-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
```

- **Read the mapping, because it is the whole argument.** DeepSeek's own recommended config does **not** put Flash in the main loop. Opus and Sonnet slots both get **Pro**; Flash gets the Haiku slot and subagents. DeepSeek is telling you where Flash belongs, and it matches the benchmark shape: Flash for search, grep, title generation, and parallel fan-out; Pro for the code that ships.
- Cite the community cost split reported alongside the setup guides: roughly **85% Pro / 15% Flash** by spend, keeping the expensive model on the work that matters ([DevTk.AI](https://devtk.ai/en/blog/deepseek-v4-agent-setup-2026/)).
- **Key API notes** ([Anthropic API guide](https://api-docs.deepseek.com/guides/anthropic_api/)): OpenAI-compatible base is `https://api.deepseek.com`; Anthropic-compatible is `https://api.deepseek.com/anthropic`. Paste the key raw, no `Bearer` prefix. `max_tokens`, `system`, `stream`, `temperature`, `top_p`, tool definitions, and thinking config are supported in full or in part.
- Recommended sampling from the model card: `temperature 1.0`, `top_p 0.95` for agentic use (`1.0` otherwise). `reasoning_effort` takes `low`, `high`, `max`.
- **Practitioner honesty note — put it right here, not buried in the limitations section.** A commenter on the Aug 3 HN thread reported: *"I tried Deepseek with Claude Code and it under performed"* — while separately praising it inside a product where he controls the prompts ([source](https://news.ycombinator.com/item?id=49120299)). That distinction is the real finding: **the model is strong when you own the prompt and weaker when it has to inherit Claude Code's harness, which was tuned against Anthropic models.** The Anthropic-compatible endpoint makes the swap *possible*, not *free*.

#### H2: DeepSeek V4 Flash pricing: cheap per token, and cheap per task too

- Direct answer with the table. Unlike the Gemini 3.5 Flash story, the per-task math here actually holds up — say so.

| Model | Input ($/1M) | Output ($/1M) | Cached input ($/1M) |
|---|---|---|---|
| DeepSeek V4 Flash | $0.14 | $0.28 | $0.0028 |
| DeepSeek V4 Pro | $0.435 | $0.87 | $0.003625 |
| Claude Haiku 4.5 | $1.00 | $5.00 | — |
| Claude Sonnet 5 | $3.00 | $15.00 | $0.30 |
| Claude Opus 5 / Opus 4.8 | $5.00 | $25.00 | $0.50 |

Sources: [DeepSeek pricing](https://api-docs.deepseek.com/quick_start/pricing), Anthropic pricing (verified 2026-08-04).

- **Do the blended math explicitly and state the assumption.** At a 3:1 input:output token mix, Flash blends to ~$0.175/1M against Opus 4.8's ~$10/1M — roughly **57x cheaper**. State the ratio *with* the mix assumption; a naive 1:1 blend gives ~71x. Don't quote a bare multiple.
- **Cost per task, from an independent source:** Artificial Analysis puts Flash at max effort at **~$0.03/task at index 50**, against OpenAI Luna at **$0.03 (high) / $0.04 (xhigh) / $0.07 (max) for index 46/49/51** ([HN analysis](https://news.ycombinator.com/item?id=49120299)). So: comparable intelligence at 2-3x lower cost, and **2-5x slower inference**. The HN one-liner is the honest summary — *"it's cheaper if you don't value your time."*
- **Cache-hit input at $0.0028/1M is the sleeper number.** That is a 98% discount and ranked #1 across all models by Artificial Analysis. For an agent loop that re-sends a large stable prefix every turn, this is where the real saving lives — not in the headline input price. Link internally to the cost-tracking post here.
- **The verbosity tax.** Artificial Analysis flags Flash as "very verbose": **210M output tokens** during evaluation against a median of 100M. Output is 2x the input price, so a 2x-verbose model on output tokens partially eats its own advantage. Budget for it.
- **A gotcha nobody has written up: peak-hour pricing is coming.** DeepSeek's pricing page states a peak/off-peak policy will apply, with **9:00-12:00 and 14:00-18:00 Beijing Time charged at 2x**, effective date pending announcement. If you're in IST (Beijing minus 2.5h), that's roughly 06:30-09:30 and 11:30-15:30 local — squarely inside a working day. Flag this for anyone building a cost model.
- Concurrency limits worth noting: **2,500 concurrent requests on Flash, 500 on Pro**.

#### H2: When to route to Flash and when not to

The decision section. Build it from the benchmark shape, not from vibes.

- Direct answer: Flash is a **short-horizon tool-use model**. The benchmarks that measure "call tools correctly over a handful of steps" are where it wins; the ones that measure "stay coherent over a long autonomous run" are where it collapses.
- The comparison that proves it, from the HN thread ([source](https://news.ycombinator.com/item?id=49119559)) — both vendors' self-reported numbers, labeled as such:

| Benchmark | V4 Flash 0731 | GPT-5.6 Terra | Shape of task |
|---|---|---|---|
| Terminal Bench 2.1 | 82.7 | 78.4 | Short-horizon terminal tool use — **Flash wins** |
| Toolathlon | 70.3 | 53.1 | Multi-tool orchestration — **Flash wins big** |
| DeepSWE | 54.4 | 69.6 | Real repo software engineering — **Flash loses** |
| Agents' Last Exam | 25.2 | 50.4 | Long-horizon agentic reasoning — **Flash loses badly** |

- Name the pattern in one sentence: **Flash executes; it doesn't plan.** Give it the step, not the goal.
- Routing table:

| Task | Route to | Why |
|---|---|---|
| Search, grep, file discovery, title generation | **V4 Flash** | Pure tool dispatch; 70.3 Toolathlon; $0.14 input |
| Parallel subagent fan-out | **V4 Flash** | 2,500 concurrent request ceiling; per-call cost is negligible |
| Log triage, lint fixes, mechanical refactors | **V4 Flash** | Well-specified, short-horizon, cheap to re-run on failure |
| Multi-file feature work in a real repo | **Claude Code (Sonnet 5 / Opus 5)** | Flash gives up 15 pts on DeepSWE and 15+ on NL2Repo |
| Overnight autonomous runs | **Claude Code (Opus 5)** | Agents' Last Exam 25.2 vs 50.4 — Flash loses coherence |
| Anything where a missed defensive check is expensive | **Claude Code** | Cheap models need more handholding; the HN thread is blunt about it |
| High-volume product features you prompt yourself | **V4 Flash** | The one place HN reports it genuinely shining |

- Close with the meta-point: this is the same conclusion DeepSeek's own Claude Code config encodes. Pro in the Opus and Sonnet slots, Flash in the Haiku slot. The vendor agrees with the benchmarks.

#### H2: Can you run DeepSeek V4 Flash locally?

Targets the `glm5.2 local` intent cluster (already ranking at position 8).

- Direct answer: yes — weights are MIT-licensed on Hugging Face, 284B total / 13B active. That active-parameter count is what makes local viable; you need memory for 284B but compute for only 13B per token.
- Serving stack from the model card: **vLLM** with `--speculative-config` and **SGLang** with `--speculative-algorithm DSPARK`, using the attached DSpark speculative-decoding draft module. A representative SGLang invocation includes `--tp 4 --moe-runner-backend flashinfer_mxfp4 --speculative-algorithm DSPARK`.
- Real hardware numbers reported on HN ([thread](https://news.ycombinator.com/item?id=49119559)):

| Setup | Reported throughput | Approx. cost |
|---|---|---|
| 2x NVIDIA DGX Spark (GB10) | **60 tok/s** at full context | ~€8,200 |
| 2x RTX PRO 6000 workstation | faster | ~$20,000 |
| Mac Studio M3 Ultra 256GB | slower than the Sparks | ~€12,000 |
| Dual Strix Halo | much slower | — |

- **Say the honest thing.** The most useful comment in that thread: *"even for mid level projects API is orders of magnitude cheaper, since you don't need to set it up and maintain it."* At $0.14/$0.28, the API pays for a very long time before €8,200 of hardware breaks even. Local makes sense for **data residency, no-training guarantees, and air-gapped work** — not for cost.
- Quantized GGUF builds exist ([unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)) for people who want to try it on less.

#### H2: Limitations and gotchas

Short, sourced, honest. This is what separates the post from the recap sites.

- **No training opt-out.** Raised directly on HN and unaddressed: *"If only they would let you opt out of training use, it might actually be a viable option."* For client work under NDA this is a hard blocker, not a preference. Self-hosting the MIT weights is the only workaround.
- **No multimodal.** Text only. HN: *"Unfortunately, DeepSeek Flash still doesn't support multimodal; otherwise, it would offer better value than GPT 5.6 SOL."*
- **Vendor-harness benchmarks.** Not yet on the public Terminal-Bench leaderboard. See the claimed-vs-verified section.
- **Very verbose.** 210M output tokens in the Artificial Analysis eval vs a 100M median — and output costs 2x input.
- **Slower than the frontier.** 122.7 tok/s, 1.31s time-to-first-token. Competitive frontier models run 2-5x faster on interactive work.
- **Peak-hour 2x pricing is announced but undated.** Build the multiplier into any cost projection now.
- **Claude Code's harness is tuned for Anthropic models.** The compatibility layer translates the wire format, not the prompt engineering. Expect to re-tune your `CLAUDE.md` and subagent prompts, and expect the first session to feel worse than the benchmarks promise.
- **Region matters for content filtering.** HN notes that the raw API passes through responses and that agent-side filtering varies by endpoint — prefer an open harness and the RoW (Singapore) endpoint over a provider-hosted chat surface if that matters to you.

#### H2: FAQ

10 Q&As, 40-60 words each, mirroring the FAQ candidates above. Lead the Bing-sourced three (session cost extraction, token monitoring, running locally) since those are observed demand.

### Unique angle

1. **Claude Code-first, not DeepSeek-first.** Every competing guide writes for someone starting from DeepSeek. This writes for the practitioner who already lives in Claude Code and wants to know whether four environment variables are worth it.
2. **Claimed vs verified.** The only piece that checks DeepSeek's self-reported numbers against the public Terminal-Bench leaderboard and Artificial Analysis, and explains why same-model deltas (Flash-0731 vs Flash-Preview) are trustworthy while cross-vendor rows are not.
3. **The "Flash executes, it doesn't plan" thesis.** The Terminal Bench-wins / Agents'-Last-Exam-loses split is visible in the data and nobody has named it. It converts a benchmark table into a routing rule.
4. **DeepSeek's own config is the argument.** The official Claude Code mapping puts Pro in the Opus *and* Sonnet slots and Flash only in Haiku/subagents. Reading the vendor's own defaults as evidence is a move no competitor makes.
5. **Cost per task, plus the two costs nobody mentions:** the verbosity tax (210M vs 100M output tokens) and the announced 2x peak-hour pricing.
6. **A real practitioner counterweight.** The HN report that DeepSeek underperformed *inside Claude Code* while performing well *inside a self-prompted product* — and the explanation for why both are true.
7. **Local hardware with actual prices**, and the conclusion that the API wins on cost so local is a compliance decision, not an economic one.

### Internal linking opportunities

- [Gemini 3.5 Flash for Agentic Coding](https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide) — the direct sibling. Strong contrast: Gemini Flash was cheap per token and *expensive per task*; DeepSeek Flash is cheap on both. Link from the pricing section.
- [Claude Code Cost Tracking](https://avinashsangle.com/blog/claude-code-cost-tracking) — anchor the cost-per-session framing and the cache-hit-pricing point. Also serves the two Bing cost queries.
- [GLM 5.2 Local Coding Guide](https://avinashsangle.com/blog/glm-5-2-local-coding-guide) — link from the local-hardware section. GLM-5.2 appears as a column in DeepSeek's own benchmark table, so the comparison is native, and this post already ranks at position 8 for `glm5.2 local`.
- [Kimi K3 Agentic Coding Guide](https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide) — HN explicitly compares the two releases ("This is more exciting than K3, IMO"). Link from the benchmarks section.
- [Claude Code Fable 5 Model Routing](https://avinashsangle.com/blog/claude-code-fable-5-model-routing) — the routing-mechanics prequel; Fable 5 tops the Terminal-Bench leaderboard cited here.
- [Claude MD Guide](https://avinashsangle.com/blog/claude-md-guide) — referenced in the "harness is tuned for Anthropic models" gotcha, where re-tuning `CLAUDE.md` is the fix.
- [Claude Code Dynamic Workflows Guide](https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide) — the parallel-subagent-fan-out routing recommendation points here.

### Future cluster

- "Same-harness benchmark: DeepSeek V4 Flash vs Claude Sonnet 5 on 20 real repo tasks" — the post that closes the vendor-harness gap this article opens.
- "30 days routing Claude Code subagents to DeepSeek V4 Flash: the actual bill"
- "DeepSeek V4 Pro update: does the flagship reclaim the lead?" — DeepSeek has confirmed an updated Pro is coming.
- "Which open-weight coding model should you self-host in 2026: DeepSeek V4 Flash vs GLM 5.2 vs Kimi K3"
- "Reading vendor benchmark tables: which rows to trust and which to ignore"

### Authoritative external links

- [DeepSeek-V4-Flash-0731 model card — Hugging Face (MIT weights)](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)
- [DeepSeek API docs — Integrate with AI tools (Claude Code config)](https://api-docs.deepseek.com/guides/coding_agents/)
- [DeepSeek API docs — Using the Anthropic API](https://api-docs.deepseek.com/guides/anthropic_api/)
- [DeepSeek API docs — Pricing](https://api-docs.deepseek.com/quick_start/pricing)
- [Artificial Analysis — DeepSeek V4 Flash 0731 intelligence, performance and price](https://artificialanalysis.ai/models/deepseek-v4-flash)
- [Terminal-Bench 2.1 public leaderboard](https://www.tbench.ai/leaderboard/terminal-bench/2.1)
- [Hacker News — DeepSeek-V4-Flash Update (741 pts)](https://news.ycombinator.com/item?id=49119559)
- [Hacker News — V4 Flash 0731 intelligence, performance and price analysis (589 pts)](https://news.ycombinator.com/item?id=49120299)
- [MarkTechPost — DeepSeek upgrades V4-Flash-0731 with major agentic and coding gains](https://www.marktechpost.com/2026/07/31/deepseek-upgrades-deepseek-v4-flash-0731-with-major-agentic-and-coding-gains/)
- [The New Stack — DeepSeek's smaller model just outperformed its own flagship](https://thenewstack.io/deepseek-v4-flash-open-weights/)
- [Open Source For You — DeepSeek open-sources production V4-Flash under MIT](https://www.opensourceforu.com/2026/08/deepseek-open-sources-v4-flash/)
- [DevTk.AI — DeepSeek V4 agent setup (OpenCode, Codex, Copilot CLI, Cline, Kilo)](https://devtk.ai/en/blog/deepseek-v4-agent-setup-2026/)

### Writing notes

- **Verify before publishing:** re-check the Terminal-Bench leaderboard for a V4 Flash 0731 entry (a PR was open as of Aug 4) and DeepSeek's pricing page for a peak-hour effective date. Both could change the claimed-vs-verified and pricing sections.
- **Test the Claude Code config yourself** before publishing the env-var block. The value of this post over the competition is that Avinash actually ran it — include one real observation from the session (what felt worse, what felt fine, an approximate cost).
- Anthropic prices in the comparison table were verified against the Claude API docs on 2026-08-04. Sonnet 5 carries an introductory $2/$10 rate through 2026-08-31; the table uses the standard $3/$15. Note the intro rate in a footnote if publishing before Sept 1.
- Style reminders per `.claude/blog-guidelines.md`: no em dashes, no banned words (comprehensive, leverage, streamline, delve, robust, seamlessly, game-changer, unlock, harness as a verb), no emojis, vary sentence length, don't over-list.

---

## Ready to Write?
Run: /write-blogpost deepseek-v4-flash-agentic-coding-guide
