# Twitter/X Long-form Post - Gemini Decisions API: Cheap, Calibrated Routing for AI Agents

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py gemini-decisions-api-agent-routing-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
A lot of model calls in an agent loop don't do the work. They decide what work to do: does this need a tool, which one, cheap model or expensive one, should a human look first.

Google just shipped an API for exactly that, and it doesn't generate a single token.

WHAT IT IS

The Gemini Decisions API (gemini-decision-1, launched Nov 11). You send one input and up to 1,000 questions. You get back typed answers with probabilities. Three question types: yes/no, choice (2-255 options), and rubric score.

Input can be text, images, audio, video or PDF, up to 262,144 tokens shared across all questions.

THE PRICE

$0.10 per 1M input tokens. Output isn't billed.

A 500-token routing decision costs $0.00005. A million of them is about $50.

THE "50x CHEAPER" CLAIM IS WRONG

Google's own number is "nearly 5x" cheaper than Gemini 3.5 Flash-Lite. My math lands at 4x for one question and 6x for three questions in the same call.

And with a long, repeated context the gap is roughly zero: Flash-Lite discounts cached input, the Decisions API doesn't support caching.

HOW I'D USE IT

One flat call per turn: needs_tool (yes/no), which_tool (choice), model_tier (choice). Then three bands:

- act: top answer >= 0.85 and beats the runner-up by 0.25
- fallback: 0.5-0.85, let a stronger model confirm
- escalate: below 0.5, ask a human or the user

The probability is the whole point. A small generative model says "run_sql" with the same confidence whether it's 95% or 40% sure.

THE CATCH

Questions are independent: one can't see another's answer, so no decision trees inside a call. It's v1beta, Gemini Developer API only. No Batch API, no caching. Every benchmark so far is Google's.

The full guide has the router code, a Gemini vs OpenAI vs Jev comparison, and the cost table:

https://avinashsangle.com/blog/gemini-decisions-api-agent-routing-guide

Follow @avi_sangle for more on AI agents and Claude Code.
