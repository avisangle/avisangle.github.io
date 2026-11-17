# Hacker News Submission - Gemini Decisions API: Cheap, Calibrated Routing for AI Agents

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Using Google's Gemini Decisions API as an agent router, with the cost math

**URL:** https://avinashsangle.com/blog/gemini-decisions-api-agent-routing-guide

---

**First Comment:**

I wrote this after the Decisions API launch to work out whether a decision model actually beats "small LLM as classifier" for routing in an agent loop. For short inputs it's about 4-6x cheaper than Gemini 3.5 Flash-Lite, which matches Google's "nearly 5x", but with a long cached prompt the difference is close to zero because the Decisions API has no context caching. I haven't benchmarked accuracy on my own traffic yet, so all accuracy figures in the post are Google's. I'd like to hear from anyone who has compared it with OpenAI's Decisions API or Jev in practice.
