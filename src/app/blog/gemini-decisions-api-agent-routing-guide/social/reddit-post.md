# Reddit Posts - Gemini Decisions API: Cheap, Calibrated Routing for AI Agents

**Post date:** Day 1
**Best time:** 2:00 PM IST (stagger the two subs by at least 30 minutes)
**Post via:** `python scripts/post_to_reddit.py gemini-decisions-api-agent-routing-guide --dry-run`

Flair note: `list_reddit_flairs.py` could not run when this was drafted (no praw/credentials
in that environment), so FLAIR uses the name "Discussion", which earlier posts to both subs
used. If posting fails on flair validation, run `python scripts/list_reddit_flairs.py <sub>`
and switch to `FLAIR_ID:`.

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: LLMDevs
TITLE: Gemini Decisions API as an agent router: the cost math, and where it stops being cheaper
FLAIR: Discussion
---BODY---
Google's new Decisions API (gemini-decision-1) scores closed questions instead of generating text: yes/no, choice over 2-255 options, or a rubric score, each with a probability. $0.10 per 1M input tokens, output not billed. I worked through what it would cost as the routing layer of an agent versus the usual "small LLM as classifier" setup.

**Cost per decision vs Gemini 3.5 Flash-Lite** (Flash-Lite at $0.30 in / $2.50 out / $0.03 cached input):

| Scenario | Decision 1 | Flash-Lite | Ratio |
|---|---|---|---|
| 500-token input, 1 question | $0.00005 | $0.00020 | 4x |
| 500-token input, 3 questions | $0.00005 | $0.00030 | 6x |
| 4,000-token input, uncached | $0.00040 | $0.00135 | 3.4x |
| 4,000-token input, 3,500 cached | $0.00040 | $0.00041 | ~1x |

So **Google's "nearly 5x" claim holds for short inputs**. The "50x" number some write-ups repeat doesn't come from anywhere I could find. And **the advantage disappears if your router input is mostly a cached system prompt**, because the Decisions API doesn't support context caching. Trim the router input to the request plus short option descriptions.

**Design constraint that matters:** up to 1,000 questions per call share one input, but they're independent. No question can read another's answer, so you can't build a chained decision tree in one call. I ask everything flat (needs_tool, which_tool, model_tier) and ignore unused answers, since extra questions only cost their own text.

**Thresholds:** I'd act when the top option is >= 0.85 and beats the runner-up by 0.25, send 0.5-0.85 to a stronger model, and escalate below that. These are starting points. Google claims the lowest calibration error in its suite, but nobody has tested that independently yet, so log every decision and tune from the misroutes.

Caveats: v1beta, Gemini Developer API only, no Batch API. I haven't benchmarked it on my own traffic yet; all accuracy numbers are Google's.

Full write-up with the router code and a Gemini vs OpenAI Decisions vs Jev table: https://avinashsangle.com/blog/gemini-decisions-api-agent-routing-guide

Curious whether anyone has run it against their existing router. Happy to answer questions.

---POST---
SUBREDDIT: GeminiAI
TITLE: Gemini Decisions API: a practical guide to using gemini-decision-1 for agent routing
FLAIR: Discussion
---BODY---
I spent some time going through the new Gemini Decisions API to see how it fits as the routing step in an agent. Short version: it's a good fit for "which tool / which model / does a human need to see this", as long as you work within a couple of constraints.

**What it does:** you send one input (text, images, audio, video or PDF, up to 262,144 tokens) and up to 1,000 questions. Three types:

- **noul** (yes, that's the real name for yes/no): probability the statement holds
- **choice**: 2-255 options, probability for each
- **score**: an ordered rubric, 2-255 levels (Google recommends 2-10)

**Price:** $0.10 per 1M input tokens, no output billing. Google quotes 150-250 ms end to end for inputs up to 16K tokens.

**How I'd wire it:** one call per turn asking needs_tool, which_tool and model_tier together, then only call a generative model on the chosen branch. The option labels are all the model sees in `options`, so put a one-line description of each option in the question instructions. That's where most of the routing quality comes from.

**Things to know before using it:**

- **Questions are independent.** One can't see another's answer, so no "if yes, then ask..." inside a single call.
- **No context caching or Batch API.** With a long repeated system prompt, Flash-Lite with caching can cost about the same.
- **It picks a tool but doesn't write the arguments.** A generative model still makes the actual call.
- **v1beta**, and not on Vertex AI at launch. Field names may change, so keep response parsing in one place.

I also compared it with OpenAI's Decisions API and Jev: same $0.10/M price as OpenAI, but Gemini takes more questions per call and more input types, while OpenAI has prefix caching and is GA.

Full guide with Python router code and the comparison table: https://avinashsangle.com/blog/gemini-decisions-api-agent-routing-guide

Happy to answer questions, and interested to hear if anyone's using it in production yet.
