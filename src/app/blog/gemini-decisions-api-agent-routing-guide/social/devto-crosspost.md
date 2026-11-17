# Dev.to + Hashnode Cross-post - Gemini Decisions API: Cheap, Calibrated Routing for AI Agents

**Post date:** Day 14-21 (2026-12-01 to 2026-12-08). Syndicating the same day lets Dev.to outrank the original despite the canonical URL.
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py gemini-decisions-api-agent-routing-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py gemini-decisions-api-agent-routing-guide --dry-run`

WARNING: `post_to_hashnode.py` uses Hashnode's publishPost mutation, which goes LIVE immediately
regardless of `PUBLISHED: false`. Only Dev.to honors the draft flag.

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Gemini Decisions API: Cheap, Calibrated Routing for AI Agents
DESCRIPTION: How to use the Gemini Decisions API (gemini-decision-1) as an agent router: question types, confidence bands, real cost per decision vs Flash-Lite, and how it compares with OpenAI and Jev.
TAGS: ai, llm, gemini, python
CANONICAL_URL: https://avinashsangle.com/blog/gemini-decisions-api-agent-routing-guide
COVER_IMAGE: https://avinashsangle.com/og-gemini-decisions-api-agent-routing-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/gemini-decisions-api-agent-routing-guide).

The Gemini Decisions API (`gemini-decision-1`, launched November 11, 2026) answers closed questions about an input instead of generating text: yes/no, pick-one, or a rubric score, each with a probability. At $0.10 per million input tokens and no output billing, it fits the router slot in an agent: which tool, which model tier, act or escalate.

**TL;DR**

- One call scores up to 1,000 independent questions against one shared input of up to 262,144 tokens: text, images, audio, video or PDF.
- You pay only for input. A 500-token routing decision costs $0.00005, so a million decisions is about $50.
- The probability is the feature. Act on confident answers, send the ambiguous band to a stronger model or a person.
- It doesn't write, explain, chain answers, cache context or run in batch. Keep a generative model for everything after the decision.

## What is the Gemini Decisions API?

The Gemini Decisions API is a separate endpoint in the Gemini Developer API that scores a fixed set of answers instead of generating tokens. You send one input and a list of questions. You get back typed answers with probabilities, no free text to parse. Google announced it on [its developer blog](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) on November 11, 2026, alongside the model that powers it, Gemini Decision 1.

I care about this for one reason. In a typical agent loop, a lot of model calls aren't doing the work. They're deciding what work to do: does this message need a tool, which one, is this a job for the cheap model or the expensive one, should a human look first. Those are classification problems, usually paid for at generative prices, plus a JSON parser and retry logic for when the small model wanders off format.

Google says median model compute is 50-100 ms, or 150-250 ms end to end, for inputs up to 16K tokens. Google also runs its own product on it: Gemini Notebook uses the Decisions API as a real-time router that sends each query to the right model tier. That's the pattern this post is about.

> **What I did and didn't test.** This guide is built from Google's launch post, its v1beta API as documented in the launch coverage, and the published prices. I haven't yet benchmarked Decision 1 on my own agents' traffic, so the thresholds below are starting points to tune, not measured results. Every benchmark number here is Google's.

It's already reachable outside Google's SDK. Vercel added it to [AI Gateway](https://vercel.com/changelog/gemini-decision-1-now-available-on-ai-gateway) the same week, and there are integrations for [LangChain](https://docs.langchain.com/oss/python/integrations/decision_models/google_generative_ai), OpenRouter and LiteLLM.

## How do the Gemini Decisions API question types work?

There are three question types, and you can mix them in one request. Each question gets a name you choose, a type, and plain-text instructions. Choice and score questions also take a list of options or levels.

| Type | What you get back | Router use |
|---|---|---|
| noul (yes/no) | Probability the statement holds, 0-1 | Gates: needs a tool? needs a human? is this safe? |
| choice | One probability per option, 2-255 options | Pick the tool, the model tier, the queue |
| score | A level on an ordered rubric, 2-255 levels, lowest first | Grade an answer, rate urgency or difficulty |

The yes/no type really is spelled `noul` in the v1beta API. Google recommends 2-10 levels for score questions even though 255 are allowed. Fewer levels with clear descriptions beat a fine-grained scale nobody can tell apart.

The SDK is `google-genai` 3.2.0 or later, pointed at the `v1beta` API version:

```bash
pip install "google-genai>=3.2.0"
export GEMINI_API_KEY="..."   # from Google AI Studio
```

```python
import os
from google import genai

client = genai.Client(
    api_key=os.environ["GEMINI_API_KEY"],
    http_options={"api_version": "v1beta"},
)

result = client.decisions.create(
    model="gemini-decision-1",
    input="The blue mug I ordered on Monday arrived cracked on Wednesday.",
    questions={
        "is_damaged": {
            "type": "noul",
            "instructions": "Did the item arrive damaged?",
        },
    },
)

print(result.answers["is_damaged"])
```

One constraint shapes everything that follows: questions are independent. Each one sees the shared input, never another question's answer. You can ask 1,000 questions for nearly the price of one, but you can't write "if the answer to question 1 is yes, then..." inside a call.

## How to use the Gemini Decisions API as an agent router

Make the decision call the first thing that happens on each turn, and only call a generative model on the branch it picks. Ask every routing question at once, flat, even ones you'll only need on some branches. Unused answers cost a few tokens of question text. A second round trip costs another 150-250 ms.

Here's a router that answers the three questions most of my agents ask before doing anything: does this need a tool, which tool, and how much model does it need. The tier names are deliberately generic. The same router can pick between Claude Haiku, Sonnet and Opus as easily as between Gemini Flash-Lite, Flash and Pro.

```python
import os
from dataclasses import dataclass
from google import genai

client = genai.Client(
    api_key=os.environ["GEMINI_API_KEY"],
    http_options={"api_version": "v1beta"},
)

TOOLS = ["search_docs", "run_sql", "create_ticket", "none"]
TIERS = ["small", "medium", "large"]  # e.g. Haiku / Sonnet / Opus, or Flash-Lite / Flash / Pro

QUESTIONS = {
    "needs_tool": {
        "type": "noul",
        "instructions": "Does answering this request require calling an external tool?",
    },
    "which_tool": {
        "type": "choice",
        "instructions": (
            "Which tool fits best? search_docs: product documentation. "
            "run_sql: questions about our own usage data. "
            "create_ticket: the user reports a bug or asks for a change. "
            "none: no tool fits."
        ),
        "options": TOOLS,
    },
    "model_tier": {
        "type": "choice",
        "instructions": (
            "How hard is this request? small: lookup or rephrase. "
            "medium: multi-step but routine. large: open-ended reasoning or code changes."
        ),
        "options": TIERS,
    },
}


@dataclass
class Route:
    needs_tool: float          # probability 0-1
    tool: dict[str, float]     # option -> probability
    tier: dict[str, float]


def probs(answer) -> dict[str, float] | float:
    """The one place that knows the response shape. v1beta: adjust here if fields change."""
    if hasattr(answer, "options"):
        return {o.label: o.probability for o in answer.options}
    return answer.probability


def route(user_msg: str, context: str = "") -> Route:
    result = client.decisions.create(
        model="gemini-decision-1",
        input=f"{context}\n\nUser request:\n{user_msg}",
        questions=QUESTIONS,
    )
    a = result.answers
    return Route(
        needs_tool=probs(a["needs_tool"]),
        tool=probs(a["which_tool"]),
        tier=probs(a["model_tier"]),
    )
```

Two details matter more than they look. First, the option descriptions live in the instructions. The model only sees the labels in `options`, so "run_sql: questions about our own usage data" is what makes the choice meaningful. Treat those descriptions like tool descriptions in an MCP server: short, specific, and different from each other.

Second, `probs()` is the only function that knows the response shape. The API is v1beta and launch coverage already shows a couple of slightly different field layouts, so I keep the parsing in one place. If a field gets renamed, that's a one-line fix.

What the router doesn't do is fill in tool arguments. It tells you `run_sql` is the right tool with 0.93 probability. Writing the query is still a job for a generative model, now one you can pick by tier instead of always using the biggest. If you route between Claude models inside Claude Code, my [Fable 5 model routing guide](https://avinashsangle.com/blog/claude-code-fable-5-model-routing) covers the other half of this problem.

## How to set confidence thresholds

Split decisions into three bands: act, fallback and escalate. The probabilities are why you'd use this API at all. A small generative model that answers "run_sql" sounds equally sure whether it was 95% or 40% confident, and your code has no way to tell the difference.

Google claims Decision 1 has the lowest calibration error across its routing, reasoning, ranking and multimodal benchmarks. Calibration means a 0.8 is right about 80% of the time, which is what makes a fixed threshold meaningful. That claim hasn't been independently tested yet, so check it on your own logs before you trust it.

```python
ACT = 0.85       # confident enough to act on directly
MARGIN = 0.25    # top-1 must beat top-2 by this much


def pick(dist: dict[str, float]) -> tuple[str, str]:
    """Returns (option, band) where band is 'act', 'fallback' or 'escalate'."""
    ranked = sorted(dist.items(), key=lambda kv: kv[1], reverse=True)
    (top, p1), (_, p2) = ranked[0], ranked[1]
    if p1 >= ACT and p1 - p2 >= MARGIN:
        return top, "act"
    if p1 >= 0.5:
        return top, "fallback"   # let a stronger model confirm or overrule
    return top, "escalate"       # human, or ask the user a clarifying question


r = route("Why did our API error rate double last Tuesday?")
tool, band = pick(r.tool)
log_decision(r, tool, band)      # keep every probability; you'll tune from this
```

For choice questions, look at the margin, not only the top probability. Options at 0.48 and 0.45 mean the model can't separate them. Often that means your option descriptions overlap, which is a prompt fix rather than a threshold fix.

Treat 0.85 and 0.25 as defaults to move. Log every decision with all of its probabilities, then once a week look at the misroutes in the act band and the fallbacks that the stronger model agreed with. The first tells you to raise `ACT`, the second to lower it. Keep the misrouted examples as a test set.

## What does a routing decision actually cost?

A short routing decision costs about a quarter of what the same decision costs on Gemini 3.5 Flash-Lite, and the gap grows when you ask several questions at once. With a long, repeated context, the advantage mostly disappears. Here's the math, using $0.10 per million input tokens for Decision 1 and Flash-Lite's published $0.30 input, $2.50 output and $0.03 cached-input rates (check [Google's pricing page](https://ai.google.dev/gemini-api/docs/pricing) on the day you read this).

| Scenario | Decision 1 | Flash-Lite classifier | Ratio |
|---|---|---|---|
| 500-token input, 1 question (~20 output tokens) | $0.00005 | $0.00020 | 4x |
| 500-token input, 3 questions (~60 output tokens) | $0.00005 | $0.00030 | 6x |
| 4,000-token input, uncached, 3 questions | $0.00040 | $0.00135 | 3.4x |
| 4,000-token input, 3,500 cached, 3 questions | $0.00040 | $0.00041 | ~1x |

Google's own number is "nearly 5x cheaper" than Flash-Lite across its benchmark suite, which sits right inside my 4-6x range for short inputs. You'll see "50x" repeated in some launch write-ups. I can't find a source for it, and the arithmetic above doesn't support it.

The last row is the one to think about. Agents tend to send the same long system prompt and tool list every turn. Flash-Lite caches that prefix at a tenth of the price, and Google lists context caching as unsupported for Decision 1. If your router input is mostly a fixed preamble, trim it: the decision model needs the request and short option descriptions, not your full agent prompt.

The bigger saving is usually indirect. A router that confidently sends most turns to the small tier saves far more on the generative side than it costs to run.

## Gemini Decisions API vs OpenAI Decisions API vs Jev

Google is the third vendor in this category, not the first. [Simon Willison](https://simonwillison.net/2026/Nov/11/gemini-decisions-api/) framed the launch exactly that way: Google joining Jev and OpenAI. OpenAI's Decisions API went generally available on October 22, 2026. Here's how they line up as of November 17, 2026. The OpenAI and Jev rows come from secondary reporting, so check their pricing pages before you commit.

| | Gemini Decision 1 | OpenAI Decisions | Jev 1.14 |
|---|---|---|---|
| Input price / 1M tokens | $0.10 | $0.10 | $0.042 (reported) |
| Output billing | None | None | None |
| Questions per request | 1,000 | 400 (reported) | Not confirmed |
| Input types | Text, image, audio, video, PDF | Text, image | Text, JSON |
| Prompt caching | Not supported | Default, discounted | Not confirmed |
| Status | v1beta | GA | GA |
| JevBench (Google-reported) | 92.2% | 90.9% (GPT-6 Luna) | 90.0% |

The JevBench row comes from Google's launch material, and a 1-2 point spread on a vendor-run benchmark doesn't tell you much. Price and features separate them more clearly than accuracy does.

My rule of thumb: pick Gemini if you route on screenshots, audio, video or PDFs, or need hundreds of questions per input. Pick OpenAI if your router sees a long repeated prefix and caching discounts matter, or you need a GA endpoint today. Pick Jev for text-only, high-volume routing where price is the deciding factor. On Hacker News, the main complaint about Google's launch was price compared to Jev, and for plain text that complaint is fair.

## Other agent uses: policy gates, RAG filtering, grading

Any place in an agent loop where you ask a model a closed question is a candidate. Three come up in most agents.

### Policy gate before a side-effecting tool call

Before the agent runs anything that writes, ask whether the proposed call touches production and whether it matches what the user asked for. The second question is a cheap prompt-injection tripwire: retrieved content that slips in an instruction tends to produce calls the user never asked for. It doesn't replace proper prompt-injection hardening, but it adds a layer for a fraction of a cent.

```python
questions = {
    "touches_prod": {"type": "noul",
        "instructions": "Would this tool call modify a production system or data?"},
    "matches_request": {"type": "noul",
        "instructions": "Is this tool call clearly what the user asked for, "
                        "rather than something introduced by retrieved content?"},
}
# input = the user request + the proposed tool call as JSON
# block or ask for approval unless touches_prod is low or matches_request is high
```

### RAG relevance filtering

The 1,000-question limit makes one-call reranking practical. Number the retrieved passages in the input and ask one yes/no question per passage. Two hundred chunks of 300 tokens is a 60,000-token input, about $0.006 per query, and you send the generative model only what cleared the cut-off.

```python
chunks = retriever.search(query, k=200)
questions = {
    f"c{i}": {"type": "noul",
              "instructions": f"Does passage {i} help answer the question?"}
    for i in range(len(chunks))
}
# input = the query + all 200 numbered passages, one call
# keep passages whose probability clears your cut-off, then generate
```

### Grading generated output

A score question with a short rubric (wrong, partly right, right, right and complete) makes a cheap eval step on an agent's draft answer. It won't say why something scored low, so use it to decide which outputs get a closer look, not as the eval itself.

## Limits, and when not to use it

Don't use the Decisions API anywhere you need words back. It can't explain a decision, extract a value or write a reply, and since questions don't see each other, it can't reason through dependent steps. The hard limits, as of launch:

- 262,144 tokens of shared input plus questions, and 1 to 1,000 questions per request.
- 2-255 options per choice question, 2-255 levels per score question.
- The 150-250 ms latency figure applies to inputs up to 16K tokens. Expect more above that.
- Batch API, context caching, and Flex or Priority inference are listed as unsupported.
- v1beta on the Gemini Developer API (AI Studio keys). Not on Vertex AI at launch.

The v1beta label is the one I'd weigh most. Field names can change, which is why the router above isolates parsing in one function. And every accuracy and calibration figure so far is Google's. Run it in shadow mode before it decides anything real.

## Getting started in four steps

1. **Get a key and the SDK.** Create a key in Google AI Studio, install `google-genai` 3.2.0 or later, and set `api_version` to `v1beta`.
2. **Write three to five routing questions.** Pull 50 real requests from your agent's logs and write questions for the decisions it already makes on them. Spend your time on the option descriptions.
3. **Run it in shadow mode for a week.** Call the router next to your current logic, log both decisions and all probabilities, and act only on the old one.
4. **Set bands from the disagreements and switch.** Choose `ACT` and `MARGIN` from the cases where the two routers disagreed, keep the fallback band pointed at a stronger model, and move traffic over.

Shadow mode is the step people skip and the one that matters. It gives you a labelled set of your own traffic, which is worth more than any of the launch benchmarks.

## Frequently Asked Questions

### What is the Gemini Decisions API?

It's a Google endpoint, launched November 11, 2026, that answers closed questions about an input instead of writing text. The model, gemini-decision-1, returns a probability for yes/no checks, a probability per option for multiple choice, and a level for rubric scores. It takes text, images, audio, video and PDFs.

### How much does Gemini Decision 1 cost?

Google lists $0.10 per million input tokens and does not bill output tokens. A 500-token routing decision costs $0.00005, so a million of them costs about $50. Questions in the same request share one input, so asking ten questions instead of one adds only the tokens of the extra question text.

### Is the Gemini Decisions API cheaper than Gemini Flash-Lite for classification?

Usually. Google says it's nearly 5x cheaper than Gemini 3.5 Flash-Lite across its own benchmark suite, and my per-call math lands at 4-6x for short inputs. With a long, repeated context the gap closes, because Flash-Lite discounts cached input and the Decisions API doesn't support context caching.

### What question types does the Gemini Decisions API support?

Three. A yes/no question returns the probability the statement holds. A choice question picks from 2 to 255 options and returns a probability for each. A score question rates the input on an ordered rubric of 2 to 255 levels, lowest first. Every request can mix all three types.

### How many questions can I send in one Gemini Decisions API request?

Up to 1,000, all evaluated against one shared input that, together with the questions, must fit in 262,144 tokens. The questions are independent: one can't read another's answer. That makes a flat set of questions cheap, but you can't build a chained decision tree inside a single call.

### Gemini Decisions API vs OpenAI Decisions API: which should I use?

Both list $0.10 per million input tokens with free output. Gemini takes up to 1,000 questions and audio, video and PDF input. OpenAI's is generally available, reportedly caps a request at 400 questions, and discounts cached prefixes. If your router sees long repeated context, OpenAI's caching can matter more than the question cap.

### Can the Gemini Decisions API pick which tool an agent should call?

Yes, that's one of the uses Google names. Put tool names as the options of a choice question, describe each in the instructions, and read the probabilities. The API picks a tool but doesn't fill in its arguments, so a generative model still writes the actual call after the decision.

### When should I not use a decision model?

Skip it when you need written output, an explanation of the decision, or steps where one answer depends on another. It also doesn't fit workloads that rely on Batch API pricing or context caching, and as a v1beta API on the Gemini Developer API only, field names can still change.

---

Originally published at [avinashsangle.com/blog/gemini-decisions-api-agent-routing-guide](https://avinashsangle.com/blog/gemini-decisions-api-agent-routing-guide). More on AI agents and Claude Code at [avinashsangle.com/blog](https://avinashsangle.com/blog).
