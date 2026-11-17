# LinkedIn Post - Gemini Decisions API: Cheap, Calibrated Routing for AI Agents

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py gemini-decisions-api-agent-routing-guide --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Look at the model calls in any agent loop and you'll find a lot of them aren't doing the work. They're deciding what work to do. Which tool, which model tier, whether a human should look first. We've been paying generative prices for classification and writing JSON parsers for when the small model drifts off format.

Last week Google shipped an endpoint built for exactly that job: the Gemini Decisions API. I wrote a guide on using it as an agent's router. What I found:

- It answers closed questions instead of writing text: yes/no, pick one of up to 255 options, or a rubric score. Each answer comes with a probability.
- One request takes up to 1,000 questions against a shared input of up to 262,144 tokens, including images, audio, video and PDFs.
- $0.10 per million input tokens, nothing for output. A 500-token routing decision costs $0.00005.
- The "50x cheaper than Flash-Lite" figure going around has no source. Google says nearly 5x. My math gives 4-6x for short inputs, and close to 1x when a long prompt is mostly cached on Flash-Lite.
- The probability is the real feature. Act above 0.85, send the middle band to a stronger model, escalate the rest.

Where it doesn't fit: anything that needs written output or an explanation, decisions that depend on each other (questions can't see each other's answers), and workloads that rely on caching or batch pricing. It's also v1beta, and every benchmark so far is Google's own, so I'd run it in shadow mode before it decides anything real.

Full guide with router code and a Gemini vs OpenAI vs Jev comparison:
https://avinashsangle.com/blog/gemini-decisions-api-agent-routing-guide

How are you routing between models in your agents today: rules, a small LLM, or something else?

#AIAgents #LLM #GeminiAPI #AIEngineering #DevOps
