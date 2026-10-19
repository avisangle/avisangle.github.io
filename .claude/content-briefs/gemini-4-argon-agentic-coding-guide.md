# Content Brief: Gemini 4 Argon Agentic Coding Guide

**Slug:** `gemini-4-argon-agentic-coding-guide`
**Status:** ready to write
**Research date:** 2026-10-20

---

## Corrections to the topic suggestion (read before writing)

The 2026-10-19 entry in `.claude/topic-suggestions.md` has several claims that primary sources contradict or do not support. Use the verified versions below.

| Suggestion said | Verified | Source |
|---|---|---|
| Argon is "2.5x cheaper than Claude Opus" | **2x cheaper** during the intro window. Opus 5.5 is $4/$20; Argon intro is $2/$10. From Dec 1, Argon is $4/$20, **the same per-token price as Opus 5.5** | [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing), [Claude pricing](https://claude.com/pricing) |
| 5x cheaper than GPT-6 Astra or Fable 5 | Correct at intro rates: Astra and Fable 5/5.1 are $10/$50 | [Claude pricing](https://claude.com/pricing), [eesel GPT-6 Astra pricing](https://www.eesel.ai/blog/gpt-6-astra-pricing) (OpenAI page not fetched directly) |
| Antigravity access for "all Pro and Ultra subscribers" | **Conflicting.** Google's launch post says Antigravity is AI Ultra only. The Antigravity blog says Pro and Ultra. Paddo.dev reports a Workspace account was refused | [Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/), [Antigravity blog](https://antigravity.google/blog/gemini-4-argon-in-google-antigravity) |
| HN thread 1,461 points / 1,040 comments | 1,705 points / 1,199 comments as of 2026-10-20 (growing) | [HN](https://news.ycombinator.com/item?id=49913571) |
| HN users flagged "infinite reasoning loops" | **Not found** in the first 100k chars of the thread. The documented equivalent: on hard tasks a request can spend its whole budget thinking and return empty text with a `continuation_token` | [Gemini API latest-model docs](https://ai.google.dev/gemini-api/docs/generate-content/latest-model) |
| `thinking_budget` returns HTTP 400 (groundy.com, apiyi) | **Conflicting.** Google's ai.google.dev page says `thinking_budget` still works, maps to the nearest level, and returns a warning. Use `thinking_level` and do not claim a 400 | [Gemini API latest-model docs](https://ai.google.dev/gemini-api/docs/generate-content/latest-model) |

Say "conflicting sources" in the post wherever a row above is marked that way. Do not pick a side without a primary source.

---

## Phase 1 - Topic Validation

### Search demand

- **News peg:** Gemini 4 Argon went GA on 2026-10-13 across the Gemini API, AI Studio, Antigravity (desktop + CLI), the Gemini app, and Gemini Enterprise ([Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)).
- **Deadline peg:** introductory pricing ends 2026-11-30. Publishing this week gives readers about six weeks to evaluate.
- **HN launch thread:** 1,705 points, 1,199 comments. The visible discussion is more about the Antigravity harness (`agy`) than Argon's code quality: missing skills/subagents, weak permission controls, forced auto-compaction near 250k tokens, account-ban fears when using Google accounts in third-party tools, and a general ranking of "above GPT, below Opus 5.5 for coding" ([HN](https://news.ycombinator.com/item?id=49913571)).
- **Comparison-query density:** the SERP for "gemini 4 argon vs claude opus 5.5" has 7+ dedicated pages (DataCamp, MindStudio x2, emergent.sh, aiidelist, kie.ai, aihustleguy, The New Stack, paddo.dev). The vs-Opus query is where the demand is.
- **Tooling demand:** Cursor ([docs](https://cursor.com/docs/models/gemini-4-argon)), OpenRouter (`google/gemini-4-argon`), Vercel AI Gateway, and Box all shipped Argon pages within a week. Readers want to know how to run Argon inside the harness they already use.

### Competition analysis

1. **[paddo.dev - Cheaper Per Token, Dearer Per Fix](https://paddo.dev/blog/gemini-4-argon/)**: the strongest piece and the one to beat. Six real monorepo changes, 20 runs per model, Argon run **inside Claude Code via OpenRouter**. Findings: Argon passed every test in 16/20 runs vs Opus 5.5 13/20, broke no previously passing tests, but wrote 1.37M output tokens vs Opus 495k (2.8x), so it cost **$57.68 vs $45.81 at intro pricing** and an estimated ~$115 (about 2.5x Opus) after Dec 1. Also found the **OpenRouter prefix-cache bug** (one run $17.60 with 59k of 8.4M input tokens cached; a local proxy fixed it, $2.62 with 94% cache hits). Argon was ~2.2x slower than Opus in Claude Code (991s vs 455s on change B). Gaps: one codebase, no `thinking_level` sweep, no setup instructions, no routing guidance.
2. **[groundy.com - Running Gemini 4 Argon in Claude Code](https://groundy.com/articles/running-gemini-4-argon-in-claude-code-thinking-levels-replace-budgets/)**: about 2,800 words, routes through Vercel AI Gateway. Documents the three thinking levels and parameter mapping across APIs. Admits the Claude Code reasoning-to-thinking_level mapping is undocumented. No original runs, no cost math. Its `thinking_budget` 400 claim conflicts with Google's ai.google.dev page.
3. **[DEV - Argon Wins 12 of 18 Benchmarks. Code Isn't One.](https://dev.to/max_quimby/gemini-4-argon-wins-12-of-18-benchmarks-code-isnt-one-2h70)**: aggregation, no original testing. Useful numbers: about 62k average output tokens per task vs Astra's 27k, Code Arena WebDev rank 8, Artificial Analysis Intelligence Index 53 vs Opus 58.
4. **[DataCamp](https://www.datacamp.com/blog/gemini-4-argon-vs-claude-opus-5-5)**, **[MindStudio](https://www.mindstudio.ai/blog/gemini-4-argon-vs-opus-5-5)**, **[emergent.sh](https://emergent.sh/learn/gemini-4-argon-vs-claude-opus-5-5)**, **[aiidelist](https://aiidelist.com/blog/gemini-4-argon-vs-claude-opus-5-5)**: benchmark tables copied from the model card plus one-off demos. No workflow or cost-per-task guidance.
5. **[The New Stack - "Half the price and about half as accurate"](https://thenewstack.io/gemini-argon-claude-opus/)**: the body didn't load, so the claim couldn't be verified. Don't cite its numbers.

**Gap we fill:** nobody combines (a) the **December 1 price cliff**, where Argon reaches Opus 5.5's per-token price while using 2-3x the output tokens, with (b) **`thinking_level` as the cost lever** that controls those output tokens, (c) **a working Claude Code setup** that avoids the OpenRouter cache bug, and (d) a **routing table** built from the benchmark split (long-context and long-horizon favor Argon, terminal-heavy work favors Opus).

### AI citation potential

High. "Is Gemini 4 Argon better than Claude for coding" and "how much does Argon cost" are typical AI-assistant questions, and the existing answers are either vendor tables or one-off tests. A page that states the per-task math and the Dec 1 change in plain sentences is easy to extract. The price-cliff framing stays citable after Dec 1 (it becomes "Argon now costs the same as Opus 5.5 per token").

### Freshness opportunity

- GA was 7 days ago. The knowledge cutoff of most assistants predates it.
- Google's [latest-model page](https://ai.google.dev/gemini-api/docs/generate-content/latest-model) has migration gotchas almost no third-party post mentions: explicit caching **errors** on Argon, sampling params are silently ignored, a 20-minute HTTP timeout is recommended, and the 32,768 (non-streaming) / 65,536 (streaming) per-request output caps come with `continuation_token` long decode.
- Context7 (Gemini API docs) had no Argon-specific page indexed yet. It only returned Gemini 3.x / 3.5 `thinking_level` docs, which list `minimal` as a level. **Argon supports only `low`/`medium`/`high`** per ai.google.dev, and groundy reports `minimal` is rejected. Readers copying 3.5 Flash code will hit this.
- Claude Code gateway docs (Context7, code.claude.com `llm-gateway-rollout` + `model-config`) confirm the env vars to use: `ANTHROPIC_BASE_URL`, `ANTHROPIC_AUTH_TOKEN`, `ANTHROPIC_MODEL`, `ANTHROPIC_DEFAULT_HAIKU_MODEL`, `ANTHROPIC_CUSTOM_MODEL_OPTION` (+ `_NAME`, `_DESCRIPTION`), `CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY`. Background sub-calls can request built-in Claude model IDs regardless of the override, so the gateway has to route those too.

### First-party demand (Bing)

No Argon or Gemini 4 queries in the last 120 days (25 queries total, the post is new). The closest observed demand is routing-shaped: `which endpoint does k3 expose — anthropic-compatible (→ route a) or openai-compatible only (→ route b)?` (position 3.0, from the Kimi K3 post). That is the same question for Argon, so it seeds FAQ #6 below. Related cost-tracking queries (`claude code token cost tracking - input and output`, `is there a way to see total cost over time on claude code tokens`) support linking to `claude-code-cost-tracking`.

---

## Phase 2 - Keyword Strategy

### Primary keyword
`gemini 4 argon coding`

### Secondary keywords
- `gemini 4 argon vs claude opus 5.5`
- `gemini 4 argon pricing`
- `gemini 4 argon thinking_level`
- `gemini 4 argon claude code`
- `gemini 4 argon antigravity`

### Long-tail queries
1. is gemini 4 argon better than claude opus 5.5 for coding
2. how much does gemini 4 argon cost after november 30
3. how to use gemini 4 argon in claude code
4. gemini 4 argon thinking level low vs medium vs high
5. gemini 4 argon openrouter caching cost
6. gemini 4 argon terminal bench vs deepswe
7. does gemini 4 argon support explicit context caching
8. gemini 4 argon max output tokens continuation token

### FAQ candidates
1. Is Gemini 4 Argon better than Claude Opus 5.5 for coding?
2. How much does Gemini 4 Argon cost per million tokens, and what changes on December 1, 2026?
3. What thinking levels does Gemini 4 Argon support? (note: no `minimal`)
4. Can I use Gemini 4 Argon inside Claude Code?
5. Why did my Gemini 4 Argon bill spike through OpenRouter? (cache prefix issue)
6. Does Gemini 4 Argon expose an Anthropic-compatible endpoint, or only OpenAI-compatible? *(adapted from observed Bing query on K3)*
7. Who can use Gemini 4 Argon in Antigravity?
8. Why does Gemini 4 Argon return empty text with a continuation token?
9. Is Gemini 4 Argon available on the free tier? (no)
10. When should I keep using Claude Opus 5.5 instead of Argon?

---

## Phase 3 - Content Brief

### Article metadata

- **metadata.title:** `Gemini 4 Argon for Agentic Coding Guide` (39 chars, rendered 56)
- **OG / Twitter / H1 / TechArticle headline:** `Gemini 4 Argon for Agentic Coding: When It Beats Opus 5.5` (57 chars)
- **Slug:** `gemini-4-argon-agentic-coding-guide`
- **Meta description:** `Gemini 4 Argon for agentic coding: $2/$10 until Nov 30, then Opus 5.5 pricing. Where it beats Opus, where it loses, and how to run it from Claude Code.` (151 chars)
- **Target word count:** 2,800-3,200
- **Estimated read time:** 12 min
- **Category:** AI Development
- **Lucide icon:** `Scale` (cost/benefit weighing vs Opus; distinct from `Zap` on the 3.5 Flash post and `ArrowRightLeft` on the Antigravity migration post)
- **Publish date:** 2026-10-21 (or whenever written; the Nov 30 deadline is the hook)
- **Tags:** Gemini 4 Argon, Agentic Coding, Claude Code, Claude Opus 5.5, AI Cost Optimization, Antigravity, LLM Routing

### Direct answer (first 40-60 words, zero em dashes)

> Gemini 4 Argon is Google's frontier model, generally available since October 13, 2026. For agentic coding it leads on long-horizon tasks (77.9% DeepSWE v1.1) but trails Claude Opus 5.5 on terminal work (57.4% vs 66.4% Terminal-Bench 4.0). It costs $2/$10 per million tokens until November 30, then $4/$20, which matches Opus 5.5.

### TL;DR bullets (no bolded "Term:" lead-ins)

- Argon is half Opus 5.5's per-token price until November 30. From December 1 it costs exactly the same.
- It writes far more output tokens. In paddo.dev's 20-run test it produced 2.8x Opus's output and cost 1.26x more even at intro pricing, while passing more runs (16 vs 13).
- `thinking_level` (low, medium, high; default medium) is the main cost lever. There is no `minimal` level on Argon.
- Route long-context and multi-file work to Argon. Keep terminal-heavy agent loops on Opus 5.5.
- Running it in Claude Code through OpenRouter can break prompt caching. Check cache hit rate before trusting your bill.

### Content outline

#### H2: What is Gemini 4 Argon and what shipped on October 13, 2026
- Direct answer: GA date, model ID `gemini-4-argon`, surfaces (API, AI Studio, Antigravity desktop + CLI, Gemini app, Enterprise).
- Specs: 1,048,576-token unified input+output window; per-request output cap 32,768 non-streaming / 65,536 streaming, with long decode continuing past it; inputs text/image/video/audio/PDF; output text only; knowledge cutoff March 2026; computer use in preview ([model page](https://ai.google.dev/gemini-api/docs/models/gemini-4-argon), [model card](https://deepmind.google/models/model-cards/gemini-4-argon/)).
- Google's own coding claims, attributed: Chrome team refactor across hundreds of files, "shortcut attempts dropped to just 2%", Antigravity agentic code submissions up 35% ([Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)). Label these as vendor claims.

#### H2: Gemini 4 Argon coding benchmarks vs Claude Opus 5.5
- Direct answer: Argon wins long-horizon and long-context, Opus wins terminal work and hard SWE.
- Table (all from the [DeepMind model card](https://deepmind.google/models/model-cards/gemini-4-argon/), Google-reported):

| Benchmark | Gemini 4 Argon | Claude Opus 5.5 | GPT-6 Astra | Claude Fable 5.1 |
|---|---|---|---|---|
| DeepSWE v1.1 | 77.9% | 74.2% | 74.1% | 67.4% |
| FrontierSWE v2 | 55.0% | 62.3% | 65.5% | 56.3% |
| Terminal-Bench 4.0 | 57.4% | 66.4% | 58.2% | 57.9% |
| Vibe Code Bench | 91.9% | 90.3% | 89.6% | 90.3% |
| CWE-bench v1 | 68.0% | 67.0% | 68.0% | 58.0% |
| GraphWalks 256k-1M (F1) | 84.2% | 66.8% | 71.8% | 65.0% |

- Independent signals: Artificial Analysis Intelligence Index 53 (Argon) vs 58 (Opus 5.5), Code Arena WebDev rank 8 ([DEV aggregation](https://dev.to/max_quimby/gemini-4-argon-wins-12-of-18-benchmarks-code-isnt-one-2h70)). Note the DEV post's Terminal-Bench Astra number (62.1%) differs from the model card (58.2%); use the model card.
- Real-repo counterpoint: paddo.dev's six-change test reversed the coding ranking (Argon 16/20 full passes vs Opus 13/20). Present it as one codebase, small samples.

#### H2: Gemini 4 Argon pricing: the November 30 price cliff
- Direct answer with the price table (intro vs from Dec 1, standard + batch + cache) from [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing). No free tier. Implicit caching only (95% discount on hits, prompts of 4,096+ tokens).
- Comparison row: Opus 5.5 $4/$20, Sonnet 5.5 $2/$10, Fable 5.1 $10/$50, GPT-6 Astra $10/$50 (Astra from secondary sources; flag it).
- The point the post owns: per-token parity with Opus from Dec 1 + 2-3x output tokens = more expensive per task. Use paddo's numbers ($57.68 vs $45.81 now, about $115 vs $45.81 after) and the DEV aggregation's 62k vs 27k average output tokens per task.
- **Original data slot (Avinash):** a small cost-per-task run: 3 tasks from this repo (e.g. add a blog post from a brief, fix a lint/type error across files, write a sitemap test) on Argon at low/medium/high and on Opus 5.5, logging input, output, and cached tokens plus dollars. If not run, drop the slot and attribute everything to paddo/DEV. **Do not invent numbers.**

#### H2: How to set Gemini 4 Argon thinking_level for coding
- Direct answer: three levels, default medium; thinking tokens count toward `max_output_tokens` and are billed as output.
- Google's own recommendation: eval at all three with a high `max_output_tokens`, then pick the lowest level that clears your bar ([latest-model docs](https://ai.google.dev/gemini-api/docs/generate-content/latest-model)).
- Python snippet (`google-genai>=2.30.1`, `model="gemini-4-argon"`, `max_output_tokens=65536`, `ThinkingConfig(thinking_level="medium")`). Write it from the docs' described shape; don't add unused params.
- Gotchas: no `minimal` (copied 3.5 Flash code fails); `thinking_budget` maps to the nearest level with a warning (sources conflict, see corrections table); temperature/top_p/top_k/candidate_count are silently ignored.

#### H2: Migrating Gemini 3.x code to Gemini 4 Argon
- Numbered checklist from the docs: change model ID; set `max_output_tokens` explicitly (raise anything under 32,768); swap `thinking_budget` for `thinking_level`; **remove explicit caching** (`caches.create` / `cached_content` error on Argon); remove sampling params; set HTTP timeouts to at least 20 minutes; pass full history including thought signatures in function-calling loops.
- Long decode: `finish_reason: "MAX_TOKENS"` + `continuation_token`; SDKs 2.30.1+ (Python) / 2.29.1+ (JS) auto-continue; resuming without raising `max_output_tokens` returns `400 INVALID_ARGUMENT`. Hard tasks can return empty text with a continuation token, which the docs call normal. This is the documented form of the "it thinks forever" complaint.

#### H2: How to run Gemini 4 Argon inside Claude Code
- Direct answer: Claude Code speaks the Anthropic Messages API, so Argon needs a gateway that translates (OpenRouter, LiteLLM, Vercel AI Gateway, Claude Code Router).
- Env vars from Claude Code docs (Context7-verified): `ANTHROPIC_BASE_URL`, `ANTHROPIC_AUTH_TOKEN`, `ANTHROPIC_MODEL`, `ANTHROPIC_DEFAULT_HAIKU_MODEL`, and `ANTHROPIC_CUSTOM_MODEL_OPTION` to add Argon to `/model` without replacing defaults ([model-config](https://code.claude.com/docs/en/model-config), [llm-gateway-rollout](https://code.claude.com/docs/en/llm-gateway-rollout)). Some background sub-calls request built-in Claude IDs regardless of overrides, so map those at the gateway too.
- **Cache warning:** paddo.dev's OpenRouter run cached 59k of 8.4M input tokens ($17.60) until a local proxy kept the system prompt as a stable prefix ($2.62, 94% hits). Tell readers to check cached-token counts on the first run.
- Unknown worth stating plainly: how Claude Code's effort setting maps to Argon's `thinking_level` through a gateway is undocumented (groundy). Set it at the gateway.
- Do not publish an unverified OpenRouter-to-Claude-Code config as tested. Either test it (preferred) or label it "untested sketch".

#### H2: Gemini 4 Argon in Antigravity vs Claude Code
- Access is conflicting (Ultra-only per Google's blog; Pro + Ultra per the Antigravity blog; Workspace refused per paddo). State the conflict.
- HN harness complaints (no skills/subagents, permission controls, compaction near 250k tokens, hanging tool calls) and paddo's measurement that Antigravity ran 1.75x slower than Claude Code on the same task. Link the existing Antigravity migration post instead of re-explaining `agy`.

#### H2: When to route coding work to Argon vs Opus 5.5
- Routing table: long-context reads over 256k (GraphWalks gap), multi-file refactors and long-horizon tasks (DeepSWE), vision-light backend work → Argon; terminal-heavy agent loops, screenshot-to-HTML/UI work (paddo: 0.754 vs 0.831), latency-sensitive work (Argon about 2x slower) → Opus 5.5; cheap bulk work → Sonnet 5.5 (same per-token price as Argon intro, about 5.5x fewer output tokens than Argon in paddo's aggregate).
- Decision rule tied to the date: before Nov 30, Argon is worth a trial on long-context tasks; after Dec 1, only use it where it wins on pass rate, because it no longer wins on price.
- Link the Fable 5 routing post for the Claude-side routing setup.

#### H2: FAQ (6-8 items from the candidates above, 40-60 words each)

### Unique angle

The December 1 price cliff, worked out per task. Every competitor reports "$2/$10, half of Opus" as the headline. In six weeks that statement is false: per-token pricing matches Opus 5.5, and Argon's output-token volume makes it more expensive per fix in the only real-repo test published. The post explains `thinking_level` as the lever that controls that volume, gives a Claude Code setup that warns about the caching bug, and ends with a routing table that still holds after Dec 1. Avinash's original contribution is the cost-per-task run on this site's own repo (see the data slot) plus the existing cluster of Gemini, Kimi, DeepSeek and Fable routing posts that already follow this format.

### Internal linking

- `/blog/gemini-3-5-flash-agentic-coding-guide`: previous Gemini model; `thinking_level` default change story
- `/blog/gemini-cli-to-antigravity-cli-guide`: Antigravity / `agy` setup
- `/blog/claude-code-fable-5-model-routing`: Claude-side model routing
- `/blog/claude-code-cost-tracking`: measuring per-task cost (matches observed Bing cost queries)
- `/blog/kimi-k3-agentic-coding-guide` and `/blog/deepseek-v4-flash-agentic-coding-guide`: same "run a non-Anthropic model in Claude Code" pattern
- Future: "Gemini 3.8 Flash for agentic coding" (HN users rank it highly for speed/cost; no post yet), "Running non-Anthropic models in Claude Code through a gateway" (consolidated how-to)

---

## Ready to Write?
Run: /write-blogpost gemini-4-argon-agentic-coding-guide
