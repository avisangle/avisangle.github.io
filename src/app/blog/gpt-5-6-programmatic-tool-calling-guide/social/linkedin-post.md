# LinkedIn Post - GPT-5.6 Programmatic Tool Calling

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py gpt-5-6-programmatic-tool-calling-guide --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
GPT-5.6 launched with a three-tier model family, and most write-ups stopped there. The feature that actually changes how you build agents got buried: programmatic tool calling.

The idea is simple. Instead of the model emitting one tool call, waiting, then emitting the next, it writes a short JavaScript program that orchestrates your tools inside an isolated V8 sandbox. It loops, calls tools in parallel, filters, and returns only a compact result. OpenAI calls it "code mode."

What stood out after going through the docs:

- You enable it with one hosted tool plus an allowed_callers setting per tool, so adoption is opt-in and incremental
- The runtime is deliberately spartan: top-level await and parallel calls, but no network, filesystem, or persistent state, which is what keeps it ZDR-compatible with no container cost
- OpenAI reports named-customer token reductions of 38% to 63.5%, and one workload matched quality with 24% fewer output tokens and 28% faster
- Existing MCP servers are eligible with no rewrite

It's not a replacement for direct tool calling. Single lookups, adaptive searches that need the model's judgment mid-loop, and anything with side effects or approvals should stay direct calls. Programmatic mode fits bounded, deterministic, tool-heavy work.

The part I found most interesting: this is OpenAI productizing the same pattern Anthropic shipped as code execution with MCP and Cloudflare shipped as Code Mode. Same core idea, now a native API primitive with a documented resumption contract. You no longer assemble the sandbox yourself.

I wrote a hands-on guide with the request, the model-written program, the continuation gotcha, and the honest token math:

https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide

Would you hand tool orchestration to model-written code in a production workflow, or keep it in your own control loop?

#AIEngineering #OpenAI #GPT5 #AIAgents #ModelContextProtocol
