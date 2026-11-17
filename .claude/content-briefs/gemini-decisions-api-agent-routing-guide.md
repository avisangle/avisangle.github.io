# Content Brief: Gemini Decisions API Agent Routing Guide

**Slug:** `gemini-decisions-api-agent-routing-guide`
**Research date:** 2026-11-17
**Status:** ready to write (verify the facts flagged in "Fact-check before writing" first)
**Topic source:** Topic suggestion PR #103 (merged 2026-11-17)

---

## Phase 1 - Topic Validation

### Search demand (fresh, high)
Google launched the Gemini Decisions API on November 11, 2026, powered by a new model, `gemini-decision-1`. It does not generate text. It scores a shared input (text, images, audio, video, PDF) against up to 1,000 closed-set questions in a single pass and returns typed answers with probabilities. Pricing is $0.10 per 1M input tokens with output not billed.

Demand signals (six days after launch):
- [Google blog announcement](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) and [Google on X](https://x.com/Google/status/2120583966272983331)
- [Simon Willison link post](https://simonwillison.net/2026/Nov/11/gemini-decisions-api/), which frames it as Google joining Jev and OpenAI in the "decision model" category
- News: [SiliconANGLE](https://siliconangle.com/2026/11/11/google-enters-the-decision-model-market-with-gemini-decisions-api/), [MarkTechPost](https://www.marktechpost.com/2026/11/11/google-gemini-decisions-api-gemini-decision-1/), [Interesting Engineering](https://interestingengineering.com/ai-robotics/google-gemini-decisions-api-fast-ai-agents), [The New Stack](https://thenewstack.io/?p=22843512), [ITdaily](https://itdaily.com/news/software/gemini-decisions-api-multiple-choice-decisions/)
- Ecosystem integrations already shipped: [Vercel AI Gateway](https://vercel.com/changelog/gemini-decision-1-now-available-on-ai-gateway), [LangChain decision_models integration](https://docs.langchain.com/oss/python/integrations/decision_models/google_generative_ai), OpenRouter, LiteLLM
- A heavy wave of tutorials on dev.to, Medium, apidog, DataCamp: people are actively searching "how to use", "pricing", "vs OpenAI Decisions API"
- HN: discussion exists; one recurring criticism is price relative to Jev (reported at $0.042/M)

Reddit: no threads surfaced in search.

### Competition analysis (crowded on basics, open on agent integration)
This is more crowded than PR #103 suggested. Since the PR was written, at least 15 explainer/tutorial pages have appeared. What ranks:

1. [Google blog](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) - canonical. Launch post with a Python snippet (`client.decisions.create(model="gemini-decision-1", ...)`, `api_version="v1beta"`), the Gemini Notebook router use case, Google-run benchmarks.
2. [DataCamp tutorial](https://www.datacamp.com/tutorial/gemini-decisions-api) + [DataCamp blog](https://www.datacamp.com/blog/gemini-decision-1) - the strongest third-party content. Tests the API, covers benchmarks, pricing, access.
3. [Medium / Google Cloud community: Getting Started in Python](https://medium.com/google-cloud/getting-started-with-the-gemini-decisions-api-in-python-d2b40093034f) - setup walkthrough.
4. [eesel.ai](https://www.eesel.ai/blog/gemini-decisions-api), [munderdiffl.in](https://munderdiffl.in/blog/gemini-decisions-api-vs-openai-decisions-api/), [iMasters](https://imasters.com/inteligencia-artificial/gemini-decisions-api-enters-the-decision-model-race-with-jev-and-openai) - "vs OpenAI vs Jev" comparisons. eesel's body is thin.
5. [Flavio Copes](https://flaviocopes.com/gemini-decisions-api/), [Raymond Camden](https://www.raymondcamden.com/2026/11/14/a-quick-demo-of-geminis-decisions-api), [apidog](https://apidog.com/blog/how-to-use-gemini-decisions-api/), dev.to posts ([lead/ticket sorting](https://dev.to/useaifix/gemini-decisions-api-how-small-teams-can-use-it-to-sort-leads-and-tickets-p5), [control plane framing](https://dev.to/siftsignal/googles-decisions-api-turns-gemini-into-a-control-plane-not-a-chatbot-396f)) - hello-world calls and business-sorting demos.
6. Many thin aggregator pages (lindy, cellcog, apimaster, explainx, datastudios, beri.net). Several look machine-written and disagree on details.

**What nobody covers (the gap):**
- Wiring it into a real agent loop as the router: tool selection, model-tier selection, and "does this step need a human?" gates, with the generative model only called after the decision.
- Using the probability as a control signal: thresholds, an "ambiguous band" that falls back to a stronger model or a human, and how to tune that band from logs.
- Batching many router questions into one call (one input, N questions) and the constraint that questions are independent (one question cannot read another's answer), which shapes how you design the routing tree.
- Cost math per decision against the "small generative model as classifier" pattern, done honestly, with Google's own claim (~5x cheaper than Flash-Lite across its suite) instead of the inflated numbers floating around.
- When not to use it (open-ended tasks, chained reasoning, anything needing caching or Batch API).

**Verdict:** "What is it / how to call it" is saturated already. "How to use it as the routing layer of an agent" is open. Pitch the post at that.

### AI citation potential (high)
Questions people are putting to AI assistants right now: "what is the Gemini Decisions API", "how much does Gemini Decision 1 cost", "Gemini Decisions API vs OpenAI Decisions API", "how to route between models cheaply", "can I use an LLM for classification without output tokens". Google's blog is authoritative but promotional. A practitioner page with a decision table, threshold code, and a clear when-not-to-use section is very citable. The cross-vendor comparison (Gemini vs OpenAI vs Jev) is a strong extraction target as a table.

### Freshness opportunity
Six days old, `v1beta`. Most content is launch-day paraphrase. Existing comparison tables will go stale as OpenAI and Jev change prices, so date-stamp the comparison and plan an update.

### First-party demand (Bing/ChatGPT)
**Bing demand data unavailable.** This environment has no `venv` and no `scripts/credentials/` directory, so `scripts/bing_report.py` could not run. Run it locally before writing if you want observed queries. FAQ seeds below come from search coverage and People-Also-Ask-style phrasing, not Bing data. Expect no first-party demand anyway: the topic is net new for the site.

### Fact-check before writing
Page fetches were blocked in the research environment (blog.google, datacamp.com, ai.google.dev and others were not on the network allowlist), so the facts below come from search-result summaries across multiple sources. Confirm them against the [Google blog](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) and the official Gemini API docs (linked from the blog) before publishing:

| Claim | Confidence | Note |
|---|---|---|
| $0.10/1M input, output not billed | High | Consistent across Google and all coverage |
| Up to 1,000 questions per request | High | Google |
| 256K token shared input (262,144) | High | Google |
| Median 50-100 ms model compute, 150-250 ms end-to-end | Medium | Latency figures reportedly apply to inputs up to 16K tokens |
| ~5x cheaper than Gemini 3.5 Flash-Lite (Interactions API) across Google's benchmark suite | Medium-high | Google's claim. **PR #103 said "roughly 50x". Do not use 50x.** |
| Question types: `noul` (yes/no probability), `choice` (2-255 options, probability per option), `score` (ordered rubric) | Medium | Multiple tutorials agree, "noul" spelling is unusual: check the docs |
| Every answer carries a 0-1 confidence | Medium | |
| Questions are independent; one can't read another's answer | Medium | Important for design; confirm |
| Python SDK: `google-genai` >= 3.2, `client.decisions.create(...)`, `api_version="v1beta"`, `result.answers[...]` | Medium | Confirm exact field names |
| Batch API, context caching, Flex/Priority inference not supported | Medium | Reported from Google docs via one comparison article |
| Not on Vertex AI yet (Gemini Developer API only) | Medium | |
| Calibration error 0.0250 vs 0.2104 for Flash-Lite | Low | One secondary write-up; skip unless confirmed |
| JevBench: Decision 1 92.2%, GPT-6 Luna 90.9%, Jev 1.14 90.0% | Low-medium | Google-published, no independent test |
| OpenAI Decisions API: $0.10/M input, free output, GA Oct 22 2026, 400 questions/request cap, text+image | Medium | OpenAI pricing page not reached |
| Jev 1.14: $0.042/M input, text+JSON | Low-medium | Single-source price |
| Free tier 200 RPM / 50K TPM / 10K RPD | Low | Sources conflict; omit unless confirmed |

---

## Phase 2 - Keyword Strategy

### Primary keyword
`Gemini Decisions API`

### Secondary keywords
- Gemini Decision 1
- gemini-decision-1 agent routing
- LLM model routing classifier
- decision model API
- Gemini Decisions API pricing

### Long-tail queries
1. how to use Gemini Decisions API for agent routing
2. Gemini Decisions API vs OpenAI Decisions API
3. how much does Gemini Decision 1 cost per request
4. route queries between cheap and expensive models with Gemini
5. LLM tool selection without generating text
6. Gemini Decisions API confidence threshold
7. Gemini Decisions API limits 1000 questions 256K
8. Gemini Decisions API Python example

### FAQ candidates
(None from observed Bing demand: data unavailable. All from coverage / PAA-style phrasing.)
1. What is the Gemini Decisions API?
2. How much does Gemini Decision 1 cost?
3. Is the Gemini Decisions API cheaper than using Gemini Flash-Lite for classification?
4. What question types does the Gemini Decisions API support?
5. How many questions can I send in one Gemini Decisions API request?
6. Gemini Decisions API vs OpenAI Decisions API: which should I use?
7. Can the Gemini Decisions API pick which tool an agent should call?
8. Does the Gemini Decisions API support images, audio, and PDFs?
9. Is the Gemini Decisions API available on Vertex AI?
10. When should I not use a decision model?

---

## Phase 3 - Content Brief

### Article Metadata
- **`metadata.title`:** `Gemini Decisions API: Agent Routing Guide` (41 chars, renders at 58)
- **OG / Twitter / H1 / TechArticle headline:** `Gemini Decisions API: Cheap, Calibrated Routing for AI Agents` (61 chars)
- **Slug:** `gemini-decisions-api-agent-routing-guide`
- **Meta description:** `Use the Gemini Decisions API as your agent's router: question types, confidence thresholds, cost per decision, OpenAI and Jev comparison, and its limits.` (153 chars)
- **Target word count:** 2,600-3,000
- **Estimated read time:** 11-12 min
- **Category:** AI Development
- **Lucide icon:** `GitFork` (routing/branching). Alternative: `Split`.

### Content Outline

**Intro (direct answer, first 40-60 words)**
The Gemini Decisions API (`gemini-decision-1`, launched Nov 11, 2026) answers closed questions about an input instead of generating text: yes/no, pick-one, or rubric score, each with a probability. At $0.10 per 1M input tokens and no output billing, it fits the router slot in an agent: which tool, which model tier, escalate or not.

**TL;DR (4 bullets)**
- One call scores up to 1,000 independent questions against a shared input of up to 256K tokens, multimodal.
- You pay only for input: a 500-token routing decision costs $0.00005, so 1M decisions is about $50.
- The probability is the feature. Route on high confidence, fall back to a bigger model or a human in the ambiguous band.
- Don't use it for anything that needs generated output, chained reasoning, caching, or batch pricing.

**H2: What Is the Gemini Decisions API?**
- Closed-set scoring vs generation; why that removes output tokens and parsing.
- Model ID, `v1beta`, Gemini Developer API / AI Studio, integrations (Vercel AI Gateway, OpenRouter, LangChain, LiteLLM).
- Google's own use case: Gemini Notebook routes queries to model tiers with it.
- Source: Google blog.

**H2: How Do the Question Types Work? (yes/no, choice, score)**
- Table: type, what it returns, routing use (gate, tool/model pick, quality grade).
- Shared input + N independent questions; the "questions can't see each other" constraint.
- Minimal Python call (`google-genai`, `client.decisions.create`), reading `result.answers`. Filename `decide.py`.

**H2: How to Use the Gemini Decisions API as an Agent Router**
- The pattern: decision call first, generative model only on the chosen branch.
- Three router questions in one request: `needs_tool` (yes/no), `which_tool` (choice over tool names), `model_tier` (choice: flash-lite / flash / pro, or Haiku / Sonnet / Opus for a Claude stack).
- Code: `router.py` with a `route(user_msg, context)` function returning a typed decision. Mention that the same pattern drops into a Claude Code or Managed Agents workflow as a pre-step.
- Design the routing tree flat, not chained, because of question independence.

**H2: How to Set Confidence Thresholds**
- Three bands: act (>= 0.85), fallback (0.5-0.85, call a stronger model to decide), escalate (< 0.5 or top-2 options close).
- For `choice`: use the margin between top-1 and top-2, not just top-1.
- Log every decision with probabilities; tune bands weekly from misroutes. Code snippet for the band logic.
- Thresholds are starting points to tune, say so plainly.

**H2: What Does a Routing Decision Actually Cost?**
- Worked math: 500-token input, 1 vs 10 questions per call (cost is input-only, so extra questions in the same call are close to free).
- Compare with using a small generative model as the classifier: input + output tokens, plus a parsing step. Use current Flash-Lite and Haiku prices (check pricing pages on the day of writing).
- Cite Google's ~5x claim as Google's, across its benchmark suite. Note the absence of caching discounts, which matters for long repeated system context.
- **Original data:** run your own benchmark of 100-200 real routing prompts from one of your agents (e.g. the trending-repo-scout or lead-scoring-agent project) through Decision 1 vs a Flash-Lite/Haiku classifier: accuracy, p50/p95 latency, cost. This is the primary-source advantage nobody else has.

**H2: Gemini Decisions API vs OpenAI Decisions API vs Jev**
- Table (date-stamped "as of 2026-11-17"): price, max questions/request, modalities, output (probability vs binary), caching, GA vs beta, Google's JevBench numbers labelled as vendor-reported.
- Short recommendation: multimodal or big question fan-out -> Gemini; already on OpenAI with cacheable prefixes -> OpenAI; text-only, price-sensitive -> Jev.

**H2: Other Agent Uses: Policy Checks, RAG Relevance, Output Grading**
- Policy/safety gate before a side-effecting tool call (ties to prompt-injection hardening).
- RAG chunk relevance filtering: one call, one question per chunk, up to 1,000.
- Grading a generated answer with `score` rubrics as a cheap eval step.

**H2: Limits and When Not to Use It**
- 256K shared input, 1,000 questions, `v1beta`, no Vertex AI (verify), no Batch/caching/Flex (verify).
- Latency figures assume small contexts.
- Not for open-ended output, multi-step reasoning where answers depend on each other, or anywhere you need an explanation for the decision.
- All benchmark numbers are Google's; no independent evaluation yet.

**H2: Getting Started (numbered steps, HowTo schema)**
1. Get an AI Studio key; install `google-genai` >= 3.2.
2. Write 3-5 routing questions against real traffic.
3. Shadow mode: log decisions next to your current router for a week.
4. Set thresholds from the logs; switch over with the fallback band in place.

**FAQ (Accordion, 8 Q&As from Phase 2)**

### Unique Angle
1. **Router-first framing.** Everyone else demos a single classification call. This post treats the API as the control plane of an agent and shows the fan-out, the threshold bands, and the fallback.
2. **Honest numbers.** Corrects the inflated "50x" claim to Google's actual ~5x, labels every benchmark as vendor-reported, and adds Avinash's own small benchmark on real routing prompts.
3. **Cross-stack.** Shows the router choosing between Claude tiers as well as Gemini tiers, which connects to the site's Claude Code audience and the existing Fable 5 routing post.
4. **When-not-to-use section** that most launch coverage skips.

### Internal Linking Opportunities
- `claude-code-fable-5-model-routing` - primary link; same problem (which model handles which step) solved inside Claude Code.
- `claude-code-cost-tracking` - cost-per-decision section.
- `gemini-3-5-flash-agentic-coding-guide` - the Flash-Lite/Flash tier the router picks between.
- `gpt-5-6-programmatic-tool-calling-guide` - another "cut tokens in agent loops" API primitive.
- `hardening-ai-agents-cicd-prompt-injection` - policy-gate section.
- `regression-proofing-claude-code-workflows` - logging and tuning decisions over time.
- Projects: `lead-scoring-agent` (natural fit for `score`/`choice`), `trending-repo-scout`.
- Future cluster: "decision models compared" update post once OpenAI/Jev prices move; a hands-on OpenAI Decisions API guide.

---

## Ready to Write?
Run: /write-blogpost gemini-decisions-api-agent-routing-guide
