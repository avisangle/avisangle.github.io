# Content Brief: Gemini 3.5 Flash Agentic Coding Guide

**Slug:** `gemini-3-5-flash-agentic-coding-guide`
**Status:** ready to write
**Research date:** 2026-05-24

---

## Phase 1 — Topic Validation

### Search demand

- **Hard news peg (May 19, 2026):** Google announced Gemini 3.5 Flash at Google I/O 2026 and shipped it straight to GA across the Gemini API, AI Studio, Antigravity, the Gemini app, AI Mode in Search, and GitHub Copilot ([Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/), [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/), [GitHub Changelog](https://github.blog/changelog/2026-05-19-gemini-3-5-flash-is-generally-available-for-github-copilot/)). It is the first Flash-tier model to beat the previous Pro tier on real agentic benchmarks.
- **Benchmark headline:** 76.2% Terminal-Bench 2.1, 83.6% MCP Atlas, 1656 Elo on GDPval-AA, 55.1% SWE-Bench Pro. Beats Gemini 3.1 Pro on 11 of 15 published benchmarks ([Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/), [WaveSpeed roundup](https://wavespeed.ai/blog/posts/gemini-3-5-flash-shipped-leads-agent-benchmarks/)).
- **Pricing tension:** $1.50 input / $9.00 output per 1M tokens (cached input $0.15). That is 25% cheaper than Gemini 3.1 Pro but **3x more expensive than the Gemini 3 Flash Preview it replaces and 6x more than Gemini 3.1 Flash-Lite** ([Simon Willison's notes, May 19 2026](https://simonwillison.net/2026/May/19/gemini-35-flash/), [OpenRouter pricing](https://openrouter.ai/google/gemini-3.5-flash)).
- **Hacker News thread (May 19, 2026):** [Gemini 3.5 Flash on HN](https://news.ycombinator.com/item?id=48196570) - top comments hammer the price hike, the disappearance of `temperature/top_k/top_p` tuning, and the new default `thinking_level: medium` quietly producing worse outputs on copy-pasted code from `gemini-3-flash-preview`.
- **Simon Willison call-out:** Artificial Analysis spent $1,551.60 running their benchmark suite on Gemini 3.5 Flash vs $892.28 on Gemini 3.1 Pro — the Flash model can cost more per benchmark run than the model it claims to replace ([Simon Willison's Weblog](https://simonwillison.net/2026/May/19/gemini-35-flash/)). NxCode reports `gemini-3-5-flash` consumed ~9x the cost of `gemini-3-flash` on equivalent eval workloads ($1,552 vs $278) ([NxCode developer guide](https://www.nxcode.io/resources/news/gemini-3-5-flash-developer-guide-agentic-coding-2026)).
- **GitHub Copilot multiplier:** Copilot ships Gemini 3.5 Flash with a 14x premium-request multiplier across Pro, Pro+, Business, and Enterprise plans ([GitHub Changelog, May 19 2026](https://github.blog/changelog/2026-05-19-gemini-3-5-flash-is-generally-available-for-github-copilot/)). For most Copilot users on a quota, this is louder than the headline token price.
- **Active search queries** (Google autocomplete + "People also ask" sample): "gemini 3.5 flash agentic coding", "gemini 3.5 flash mcp agent", "gemini 3.5 flash vs claude code", "gemini 3.5 flash thinking_level", "gemini 3.5 flash price increase", "is gemini 3.5 flash worth it for agents", "gemini 3.5 flash vs sonnet 4.6", "gemini 3.5 flash python tutorial", "how to use gemini 3.5 flash in claude code via openrouter".

### Competition analysis (top results)

1. **[NxCode — Gemini 3.5 Flash Developer Guide: Three API Traps and a Real MCP Agent](https://www.nxcode.io/resources/news/gemini-3-5-flash-developer-guide-agentic-coding-2026)** — the strongest practitioner guide so far. Covers `thinking_level` shift, the GitHub Copilot 14x premium multiplier, thought-preservation token inflation, and a full Python MCP agent example using the GenAI SDK. Cites the 93-parallel-agent / 15,000-request / $1,000 Antigravity demo. ~2,600 words. **Doesn't compare side-by-side with Claude Code workflows, doesn't show routing from a Claude-first stack, and doesn't model cost-per-task for tool-heavy agent loops.**
2. **[Lushbinary — Build Multi-Agent Systems With Gemini 3.5 Flash](https://lushbinary.com/blog/build-multi-agent-systems-gemini-3-5-flash-parallel-subagents/)** and [Developer Guide: Benchmarks & Pricing](https://lushbinary.com/blog/gemini-3-5-flash-developer-guide-benchmarks-pricing-agentic/) — heavy on benchmarks and parallel function-calling theory. Light on real code; no Claude Code or Codex routing angle.
3. **[DataCamp — Gemini 3.5 Flash overview](https://www.datacamp.com/blog/gemini-3-5-flash)** — 8 sections with a clean Opus 4.7 / GPT-5.5 / Flash benchmark table, no code examples, no MCP walkthrough, no Codex comparison.
4. **[AIMadeTools — Gemini 3.5 Flash Complete Guide](https://www.aimadetools.com/blog/gemini-3-5-flash-complete-guide/)** — 9-minute read, one Python example, one thinking-mode snippet, 10-question FAQ, no Claude Code routing.
5. **[Simon Willison's Weblog — Gemini 3.5 Flash: more expensive, but Google plan to use it for everything](https://simonwillison.net/2026/May/19/gemini-35-flash/)** — opinion + cost analysis (Artificial Analysis numbers). Not a how-to.
6. **[WaveSpeed — A Flash-Tier Model Now Leads the Pro Tier on Agent Benchmarks](https://wavespeed.ai/blog/posts/gemini-3-5-flash-shipped-leads-agent-benchmarks/)** — benchmark roundup with 11-of-15 framing. No tutorial content.
7. **[BuildFastWithAI — Gemini 3.5 Flash vs GPT-5.5 vs Claude vs DeepSeek (2026)](https://www.buildfastwithai.com/blogs/gemini-3-5-flash-vs-gpt-5-5-claude-deepseek-2026)** and **[MindStudio comparisons](https://www.mindstudio.ai/blog/gemini-3-5-flash-vs-claude-opus-4-7-agentic-workflows)** — comparison-first posts, low original code, no routing playbook.
8. **News coverage** — [TechCrunch](https://techcrunch.com/2026/05/19/with-gemini-3-5-flash-google-bets-its-next-ai-wave-on-agents-not-chatbots/), [Neowin](https://www.neowin.net/news/google-announces-gemini-35-flash-its-strongest-coding-model-yet/), [CIO Dive](https://www.ciodive.com/news/google-unveils-Gemini-agentic-models/820783/), [MarkTechPost](https://www.marktechpost.com/2026/05/20/google-introduces-gemini-3-5-flash-at-i-o-2026-a-faster-and-cheaper-model-for-a-i-agents-and-coding/). Describe the launch, not what to do.

**Gap we fill:** No post writes from the perspective of a Claude Code practitioner asking "when do I route a task to Gemini 3.5 Flash instead of Sonnet 4.6 or Opus 4.7, and how do I do that without rewriting my agent stack?" Specifically:

- (a) A **routing playbook** with concrete task categories (tool-heavy MCP orchestration, parallel agent fan-out, long-horizon plans with cheap intermediate steps) where Flash beats Sonnet 4.6 on cost and where it does not (production code edits, long-context retrieval beyond 128k).
- (b) **Cost-per-task math** that ties the headline $1.50/$9 to actual agent loops — citing Simon Willison's $1,552 figure and the NxCode 9x eval cost as primary sources.
- (c) The **`thinking_level: medium` default trap** explained with a copy-pasteable diff for code migrating from `gemini-3-flash-preview`.
- (d) **GitHub Copilot's 14x multiplier** modeled against a working developer's monthly quota.
- (e) **How to call Gemini 3.5 Flash from Claude Code workflows** (OpenRouter routing, direct API calls in agent sub-tools, Antigravity CLI's `agy` binary for hybrid teams).
- (f) **An end-to-end MCP agent example in Python** that a Claude Code user can drop into their existing MCP server setup.

### AI citation potential

**Very high.** The topic is in peak search demand for the next 30-60 days (post-launch attention curve). Developers using ChatGPT/Claude/Perplexity to evaluate "should I use Gemini 3.5 Flash" land on three kinds of pages today: marketing posts, benchmark roundups, and Simon Willison's opinion. A cross-vendor practitioner guide with the routing framework and a working MCP example is highly citable — and durable because the routing question outlives the launch news.

### Freshness opportunity

- Gemini 3.5 Flash launched 5 days ago (May 19, 2026). Most training data predates it. Authoritative content here lands before search results consolidate.
- The `thinking_level` default change is a working developer's footgun. The migration story has a clean before/after diff that almost nobody outside NxCode is teaching yet.
- Antigravity CLI (the new `agy` binary, post-Gemini-CLI sunset) defaults to Gemini 3.5 Flash. The blog already covers [Gemini CLI to Antigravity migration](https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide); this post is the natural follow-up: now that you've migrated, how do you actually use the new model well?

---

## Phase 2 — Keyword Strategy

### Primary keyword
`gemini 3.5 flash agentic coding`

### Secondary keywords
- `gemini 3.5 flash vs claude code`
- `gemini 3.5 flash mcp agent`
- `gemini 3.5 flash thinking_level`
- `gemini 3.5 flash pricing`
- `gemini 3.5 flash python tutorial`
- `gemini 3.5 flash agent benchmarks`

### Long-tail queries
1. is gemini 3.5 flash worth using for agentic coding
2. how to migrate from gemini-3-flash-preview to gemini-3.5-flash
3. gemini 3.5 flash vs claude sonnet 4.6 for tool calling
4. how much does gemini 3.5 flash cost per agent task
5. how to build an mcp agent with gemini 3.5 flash
6. why is gemini 3.5 flash 3x more expensive than gemini 3 flash preview
7. github copilot 14x multiplier gemini 3.5 flash
8. when to use gemini 3.5 flash instead of claude code
9. gemini 3.5 flash terminal bench 2.1 score explained
10. how to call gemini 3.5 flash from openrouter in a script

### FAQ candidates (mirror real search queries)
1. What is Gemini 3.5 Flash?
2. How much does Gemini 3.5 Flash cost per 1M tokens?
3. Is Gemini 3.5 Flash better than Gemini 3.1 Pro?
4. How does Gemini 3.5 Flash compare to Claude Code (Sonnet 4.6 and Opus 4.7) for coding?
5. What is the `thinking_level` default in Gemini 3.5 Flash and why does it matter?
6. Can Gemini 3.5 Flash call MCP tools?
7. Why is Gemini 3.5 Flash 3x more expensive than Gemini 3 Flash Preview?
8. What is the GitHub Copilot premium multiplier for Gemini 3.5 Flash?
9. Should I switch from Claude Code to Gemini 3.5 Flash?
10. How do I call Gemini 3.5 Flash from a Python script?

---

## Phase 3 — Content Brief

### Article metadata

- **Title:** `Gemini 3.5 Flash for Agentic Coding: A Claude Coder's Guide` (59 chars)
- **Slug:** `gemini-3-5-flash-agentic-coding-guide`
- **Meta description:** `Gemini 3.5 Flash beats Gemini 3.1 Pro on agent benchmarks at $1.50/$9 per 1M tokens. When to route tasks from Claude Code to it, plus the thinking_level trap.` (158 chars)
- **Target word count:** 2,800-3,200 words
- **Estimated read time:** 12 min
- **Category:** AI Development / Developer Tools
- **Lucide icon:** `Zap` (signals "Flash" model + speed; distinct from `ArrowRightLeft` on the migration post and `Terminal` on ant-cli)
- **Publish date:** 2026-05-25
- **Tags:** Gemini 3.5 Flash, Agentic Coding, MCP, Claude Code, Google AI, AI Cost Optimization, Developer Tools

### Direct answer (first 40-60 words)

Gemini 3.5 Flash is Google's new Flash-tier coding model, generally available since May 19, 2026. It scores 76.2% on Terminal-Bench 2.1 and 83.6% on MCP Atlas, beating Gemini 3.1 Pro on 11 of 15 benchmarks. Pricing is $1.50 input / $9 output per 1M tokens. For Claude Code users, it's the right model for tool-heavy agent loops, not for production code edits.

### TL;DR bullets

- **What it is:** Gemini 3.5 Flash (GA May 19, 2026) is a Flash-tier model that outperforms Gemini 3.1 Pro on agentic benchmarks while costing 25% less per token.
- **Pricing reality:** $1.50/$9 per 1M tokens looks cheap until you notice it's 3x the price of Gemini 3 Flash Preview and roughly 5.5x more expensive per full benchmark run (Artificial Analysis, via Simon Willison).
- **The `thinking_level` trap:** The default dropped from `high` to `medium`. Copy-pasting code from `gemini-3-flash-preview` silently produces dumber outputs unless you set `thinking_level: "high"` or, for agentic coding, `thinking_level: "low"`.
- **Where Flash wins:** MCP tool orchestration (83.6% MCP Atlas, beats Claude Opus 4.7's 79.1%), parallel function calling, fast iterative agent loops.
- **Where Claude Code still wins:** Production codebase editing (Sonnet 4.6 leads SWE-Bench Verified), defensive code, long-context retrieval past 128k tokens.
- **Routing rule:** Keep Claude Code for `Edit`/`Write` tasks; route MCP-heavy planning and tool-fan-out subtasks to Gemini 3.5 Flash via OpenRouter or a thin Python wrapper.

### Content outline

#### H2: What is Gemini 3.5 Flash and what changed on May 19, 2026

- Direct answer: a Flash-tier Gemini model released GA at Google I/O 2026, designed primarily for agentic coding and tool use. Beats Gemini 3.1 Pro on 11 of 15 published benchmarks at $1.50/$9 per 1M tokens.
- Where it ships: Gemini API, AI Studio, Antigravity CLI (the post-Gemini-CLI successor), Vertex AI, GitHub Copilot, and the Gemini app. Source: [Google blog post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/), [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/).
- Why this is unusual: the first time a Flash-tier model has beaten the previous Pro tier on production-style agent benchmarks. Framing it as "the cheap model is now smart enough" understates how that reshapes routing decisions across every coding agent stack.

#### H2: Gemini 3.5 Flash benchmarks: where it beats Gemini 3.1 Pro

- Direct answer paragraph: lead with the four headline scores.
- Numbers table:

| Benchmark | Gemini 3.5 Flash | Gemini 3.1 Pro | Claude Opus 4.7 | GPT-5.5 |
|-----------|------------------|----------------|-----------------|---------|
| Terminal-Bench 2.1 | 76.2% | 70.3% | n/a | 78.2% |
| MCP Atlas | 83.6% | 78.2% | 79.1% | 75.3% |
| GDPval-AA (Elo) | 1656 | 1314 | n/a | 1769 |
| SWE-Bench Pro | 55.1% | n/a | 64.3% | n/a |
| ARC-AGI-2 | 72.1% | ~77% | n/a | 84.6% |
| 128k retrieval | regressed vs 3.1 Pro (-7.6 pts) | baseline | — | — |

Sources: [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/), [WaveSpeed roundup](https://wavespeed.ai/blog/posts/gemini-3-5-flash-shipped-leads-agent-benchmarks/), [BuildFastWithAI comparison](https://www.buildfastwithai.com/blogs/gemini-3-5-flash-vs-gpt-5-5-claude-deepseek-2026).

- Where Flash regresses (this is the honest section nobody else writes well): 128k-token retrieval drops 7.6 points vs Gemini 3.1 Pro, ARC-AGI-2 loses 5 points. Long-context refactors and abstract reasoning tasks still want a Pro-tier model.
- The MCP Atlas score (83.6%) is the most load-bearing number for Claude Code users — it directly predicts how well an agent calls tools across multi-step plans.

#### H2: Gemini 3.5 Flash pricing: cheap per token, expensive per task

- Direct answer: $1.50 input / $9 output per 1M tokens. Cached input is $0.15. But pricing-per-task is the metric that matters for agent loops, and it's worse than the headline suggests.
- Stat to cite: Artificial Analysis spent $1,551.60 running their benchmark suite on Gemini 3.5 Flash vs $892.28 on Gemini 3.1 Pro ([Simon Willison, May 19 2026](https://simonwillison.net/2026/May/19/gemini-35-flash/)). Cheaper per token, more expensive per workload, because thinking tokens persist and agent loops chew more turns.
- Stat to cite: NxCode reports `gemini-3-5-flash` consumed ~9x the cost of `gemini-3-flash` on equivalent eval workloads ($1,552 vs $278) ([NxCode developer guide](https://www.nxcode.io/resources/news/gemini-3-5-flash-developer-guide-agentic-coding-2026)).
- GitHub Copilot adds a **14x premium-request multiplier** ([GitHub Changelog](https://github.blog/changelog/2026-05-19-gemini-3-5-flash-is-generally-available-for-github-copilot/)). A 300-request/month Copilot Pro quota becomes ~21 Gemini 3.5 Flash calls before overage. Calling the raw API at ~$0.015/call is often cheaper than burning Copilot quota.
- Pricing comparison table:

| Model | Input ($/1M) | Output ($/1M) | Cached input ($/1M) |
|-------|--------------|---------------|---------------------|
| Gemini 3.5 Flash | $1.50 | $9.00 | $0.15 |
| Gemini 3.1 Pro | $2.50 | $15.00 | — |
| Gemini 3 Flash Preview (deprecated) | $0.50 | $3.00 | — |
| Claude Sonnet 4.6 | $3.00 | $15.00 | $0.30 |
| Claude Opus 4.7 | $5.00 | $25.00 | $0.50 |
| GPT-5.5 | $1.25 | $10.00 | — |

#### H2: The `thinking_level` default trap that breaks copy-pasted code

- Direct answer: Google changed the thinking parameter from an integer `thinking_budget` to a string enum `thinking_level`, **and silently dropped the default from `high` to `medium`**. Copy-pasted Gemini 3 Flash Preview code runs but produces measurably worse outputs.
- The four values: `"minimal"`, `"low"`, `"medium"` (default), `"high"`. Source: [Google AI Dev — What's new in Gemini 3.5 Flash](https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.5).
- The agentic-coding rule (this is the non-obvious one): Google explicitly retuned `low` for code and tool-calling workflows. For agent loops with MCP tools, `low` is faster, cheaper, and on coding benchmarks roughly equivalent to `medium`. Source: NxCode + Google AI Dev.
- Before/after migration diff:

```python
# Before (gemini-3-flash-preview) - now broken silently
config = types.GenerateContentConfig(
    thinking_config=types.ThinkingConfig(thinking_budget=-1),  # was "dynamic" / high
    temperature=0.2,                                            # ignored by 3.5
    top_p=0.95,                                                 # ignored by 3.5
)

# After (gemini-3.5-flash) - explicit, faster for agents
config = types.GenerateContentConfig(
    thinking_config=types.ThinkingConfig(thinking_level="low"),  # for MCP agent loops
    # for hard reasoning, use thinking_level="high"
    # for pure latency, use thinking_level="minimal"
)
```

- Practitioner footnote: `temperature`, `top_p`, `top_k` are no longer recommended controls. Remove them from your config to avoid stale knobs.

#### H2: Gemini 3.5 Flash vs Claude Code (Sonnet 4.6, Opus 4.7) for coding work

- Direct answer paragraph: Flash wins agent orchestration and MCP tool chains; Claude Code wins repo-level edits and defensive code generation. Pick by task, not by model loyalty.
- Decision matrix:

| Task type | Best model | Reason |
|-----------|-----------|--------|
| MCP tool orchestration, parallel function calling | Gemini 3.5 Flash | 83.6% MCP Atlas, ~289 tok/sec, $1.50 input |
| Multi-file refactor in a real repo | Claude Sonnet 4.6 in Claude Code | 79.6% SWE-Bench Verified; default Claude Code model for this reason |
| Hard reasoning, ARC-AGI-style tasks | Claude Opus 4.7 or GPT-5.5 | Flash gives up 5 pts ARC-AGI-2, 12.5 pts to GPT-5.5 |
| Long-context (>128k tokens) retrieval | Gemini 3.1 Pro or Claude Sonnet 4.6 (1M ctx) | Flash regresses 7.6 pts vs 3.1 Pro on 128k retrieval |
| Cheap intermediate planning steps inside an agent | Gemini 3.5 Flash | Cached input at $0.15/1M is the lowest among frontier models |
| Production code review with defensive patches | Claude Sonnet 4.6 | Anthropic models add error handling more naturally; less "overeager" embellishment |

- Source sentiment: Claude Opus 4.7 "writes more defensively" while Gemini 3.5 Flash produces "more concise" code that "occasionally skips defensive patterns" ([MindStudio comparison](https://www.mindstudio.ai/blog/gemini-3-5-flash-vs-claude-opus-4-7-agentic-workflows), [BuildFastWithAI](https://www.buildfastwithai.com/blogs/gemini-3-5-flash-vs-gpt-5-5-claude-deepseek-2026)).

#### H2: When to route tasks from Claude Code to Gemini 3.5 Flash

The actionable section. Build the routing playbook around Claude Code workflows.

- **Default: keep Claude Code (Sonnet 4.6) for `Edit`, `Write`, and `Glob/Grep` workflows.** This is the production code path. Don't break it.
- **Route to Gemini 3.5 Flash for:**
  - MCP-heavy planning subtasks where the agent fans out 10-100 tool calls to query data, hit APIs, or coordinate with other agents.
  - Long-running background tasks where speed matters and a missed defensive check is acceptable (linting, log triage, doc generation).
  - Cheap intermediate planning steps inside a larger agent where Sonnet 4.6 would be overkill.
  - Parallel subagent fan-out (cf. Antigravity's 93-parallel-agent demo cited by [NxCode](https://www.nxcode.io/resources/news/gemini-3-5-flash-developer-guide-agentic-coding-2026)).
- **Three ways to route:**
  1. **OpenRouter inside Claude Code**: configure `ANTHROPIC_BASE_URL` to point at a routing proxy that dispatches `gemini-3.5-flash` for specific tool calls. Cite [OpenRouter Gemini 3.5 Flash page](https://openrouter.ai/google/gemini-3.5-flash).
  2. **Direct API call from a custom MCP server**: write a thin Python MCP server that wraps `client.models.generate_content` with `gemini-3.5-flash`, then mount it in Claude Code via `~/.claude.json`. Internal link to `mcp-code-execution-pattern` post.
  3. **Antigravity CLI for hybrid teams**: if you've already migrated from Gemini CLI to `agy` (see internal link to `gemini-cli-to-antigravity-cli-guide`), Flash is the default model. Use Antigravity for parallel agents; keep Claude Code as your primary editor.

#### H2: Build an MCP agent with Gemini 3.5 Flash in 40 lines of Python

- Direct answer: the new Google GenAI SDK supports MCP natively. The SDK auto-executes MCP tool calls and feeds responses back, looping until done. Source: [Google AI Dev — Function calling](https://ai.google.dev/gemini-api/docs/function-calling).
- A working example (Avinash should test before publishing):

```python
# requirements: google-genai>=2.0, mcp>=1.4
from google import genai
from google.genai import types
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

async def main():
    server = StdioServerParameters(
        command="python", args=["-m", "your_mcp_server"]
    )
    async with stdio_client(server) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            client = genai.Client()
            response = await client.aio.models.generate_content(
                model="gemini-3.5-flash",
                contents="Triage the 5 most recent open PRs and label each with a risk score.",
                config=types.GenerateContentConfig(
                    thinking_config=types.ThinkingConfig(thinking_level="low"),
                    tools=[session],  # SDK handles MCP tool dispatch in a loop
                ),
            )
            print(response.text)
```

- Explanation per line — the agent loop, why `thinking_level="low"` is the right call for tool-heavy work, and how the SDK matches `FunctionResponse` IDs automatically.
- This is the section that earns the **HowTo schema** in JSON-LD.

#### H2: Gemini 3.5 Flash in Antigravity, GitHub Copilot, and the raw API

- Quick three-way table on how to access Flash:

| Surface | Cost model | Best for |
|--------|-----------|----------|
| Raw Gemini API | $1.50/$9 per 1M (cached $0.15) | Custom agents, MCP servers, routing |
| Antigravity CLI (`agy`) | Free-tier weekly cap; Pro $19.99/mo; Ultra $249.99/mo | Hybrid teams already on Google's stack |
| GitHub Copilot | 14x premium-request multiplier | Existing Copilot users — but check quota math |
| OpenRouter | $1.50/$9 + small markup | Routing inside Claude Code via proxy |

- Sources: [Antigravity pricing](https://antigravity.google/pricing), [GitHub Changelog](https://github.blog/changelog/2026-05-19-gemini-3-5-flash-is-generally-available-for-github-copilot/), [OpenRouter](https://openrouter.ai/google/gemini-3.5-flash).
- Practitioner note: for Claude Code users, raw API + OpenRouter is almost always cheaper than burning Copilot quota at 14x.

#### H2: Limitations and gotchas

A short, honest list. This is what makes the post citable rather than promotional.

- **No Computer Use yet.** Flash doesn't drive the browser. Use a Pro-tier or Claude model for that.
- **Knowledge cutoff January 2025.** Tool-augmented prompting is the workaround for fresh facts.
- **Text-only output.** Multimodal input works; output is text.
- **128k+ retrieval regressed.** If you have million-token contexts, Sonnet 4.6 or Gemini 3.1 Pro are stronger.
- **Thought token inflation.** Thinking tokens now persist across multi-turn conversations, inflating input costs 30-50% on agent loops ([NxCode](https://www.nxcode.io/resources/news/gemini-3-5-flash-developer-guide-agentic-coding-2026)).
- **`thinking_level: medium` is the silent default.** Set it explicitly.
- **TPU capacity hiccups.** Reported 503 errors in the first week ([HN thread](https://news.ycombinator.com/item?id=48196570)).

#### H2: FAQ

10 Q&As, 40-60 words each, mirroring the FAQ candidates above.

### Unique angle

1. **Claude Code-first framing.** Every other guide writes for a Gemini-native developer. This one writes for the practitioner who already uses Claude Code daily and wants the routing rule.
2. **Cost-per-task, not cost-per-token.** Cite the Simon Willison $1,552 vs $892 number and the NxCode 9x eval cost early, so readers don't fall for the "$1.50 input is cheap" framing.
3. **The `thinking_level` trap explained as a migration footgun.** With a before/after diff that's copy-pasteable.
4. **Three concrete routing mechanisms** — OpenRouter, custom MCP server, Antigravity CLI — not abstract "consider routing."
5. **A working 40-line Python MCP agent** with `thinking_level="low"`, tested against a real MCP server.
6. **Honest regressions section.** ARC-AGI-2, 128k retrieval, no Computer Use, knowledge cutoff. Tells readers when not to use Flash.
7. **Tied into existing content cluster.** Builds on the Gemini CLI → Antigravity migration post, the Claude Code cost tracking post, and the MCP code execution pattern post. Future-readers find a complete story across the blog.

### Internal linking opportunities

- [Gemini CLI to Antigravity CLI Migration Guide](https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide) — natural prequel; Antigravity CLI defaults to Gemini 3.5 Flash.
- [Claude Code Cost Tracking](https://avinashsangle.com/blog/claude-code-cost-tracking) — anchor the cost-per-task framing.
- [Claude Managed Agents](https://avinashsangle.com/blog/claude-managed-agents) and [Claude Managed Agents Outcomes](https://avinashsangle.com/blog/claude-managed-agents-outcomes) — the "when do I use managed agents vs route to Flash" framing.
- [MCP Code Execution Pattern](https://avinashsangle.com/blog/mcp-code-execution-pattern) — the agent loop architecture that the Python example plugs into.
- [Ant CLI Getting Started](https://avinashsangle.com/blog/ant-cli-getting-started) — sister piece on Anthropic's CLI; pairs with the cross-vendor routing argument.
- [Gemma 4 Models Guide](https://avinashsangle.com/blog/gemma-4-models-guide) — Google open-weight context for readers exploring the broader Google AI stack.
- [Claude MD Guide](https://avinashsangle.com/blog/claude-md-guide) — wires into the "Claude Code first, route to Flash" workflow.

### Future cluster

- "Building a Claude Code router: dispatching to Sonnet 4.6 and Gemini 3.5 Flash from one agent"
- "Gemini 3.5 Pro vs Flash for coding (June 2026 update)" — pegged to the rumored Pro release
- "MCP server template: serving Gemini 3.5 Flash sub-agents to Claude Code"
- "30 days with Gemini 3.5 Flash inside Antigravity CLI: real cost numbers"
- "Why I removed `temperature` from every Gemini config and what changed"

### Authoritative external links

- [Gemini 3.5 Flash announcement — Google blog, May 19 2026](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
- [Gemini 3.5 Flash model card — Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-5-flash/)
- [What's new in Gemini 3.5 Flash — Google AI Developers](https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.5)
- [Function calling with the Gemini API — Google AI Developers](https://ai.google.dev/gemini-api/docs/function-calling)
- [Gemini 3.5 Flash on OpenRouter — pricing + provider status](https://openrouter.ai/google/gemini-3.5-flash)
- [GitHub Copilot now supports Gemini 3.5 Flash (14x multiplier) — GitHub Changelog](https://github.blog/changelog/2026-05-19-gemini-3-5-flash-is-generally-available-for-github-copilot/)
- [Simon Willison's Weblog — Gemini 3.5 Flash: more expensive, but Google plan to use it for everything](https://simonwillison.net/2026/May/19/gemini-35-flash/)
- [Hacker News — Gemini 3.5 Flash discussion](https://news.ycombinator.com/item?id=48196570)
- [TechCrunch — With Gemini 3.5 Flash, Google bets its next AI wave on agents, not chatbots](https://techcrunch.com/2026/05/19/with-gemini-3-5-flash-google-bets-its-next-ai-wave-on-agents-not-chatbots/)
- [WaveSpeed — Gemini 3.5 Flash Shipped: A Flash-Tier Model Now Leads the Pro Tier on Agent Benchmarks](https://wavespeed.ai/blog/posts/gemini-3-5-flash-shipped-leads-agent-benchmarks/)
- [NxCode — Three API Traps and a Real MCP Agent](https://www.nxcode.io/resources/news/gemini-3-5-flash-developer-guide-agentic-coding-2026)
- [Lushbinary — Build Multi-Agent Systems With Gemini 3.5 Flash](https://lushbinary.com/blog/build-multi-agent-systems-gemini-3-5-flash-parallel-subagents/)
- [BuildFastWithAI — Gemini 3.5 Flash vs GPT-5.5 vs Claude vs DeepSeek (2026)](https://www.buildfastwithai.com/blogs/gemini-3-5-flash-vs-gpt-5-5-claude-deepseek-2026)
- [MindStudio — Gemini 3.5 Flash vs Claude Opus 4.7](https://www.mindstudio.ai/blog/gemini-3-5-flash-vs-claude-opus-4-7-agentic-workflows)
- [DataCamp — Gemini 3.5 Flash overview](https://www.datacamp.com/blog/gemini-3-5-flash)
- [Antigravity pricing](https://antigravity.google/pricing)
- [MarkTechPost — Google Introduces Gemini 3.5 Flash at I/O 2026](https://www.marktechpost.com/2026/05/20/google-introduces-gemini-3-5-flash-at-i-o-2026-a-faster-and-cheaper-model-for-a-i-agents-and-coding/)

---

## Ready to Write?
Run: `/write-blogpost gemini-3-5-flash-agentic-coding-guide`
