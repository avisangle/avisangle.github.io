# Twitter/X Long-form Post - GPT-5.6 Programmatic Tool Calling

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py gpt-5-6-programmatic-tool-calling-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
GPT-5.6 shipped a feature most launch recaps skimmed: programmatic tool calling.

Instead of one tool call per model round trip, the model writes a JavaScript program that orchestrates your tools in a sandbox. OpenAI calls it "code mode."

Here's what it actually does:

THE PROBLEM

Classic function calling: result A goes back to the model, then B, then C. Late iterations re-process everything the early ones produced. Run a lookup over 12 items and you pay for the growing transcript on every turn.

THE FIX

The model writes ONE program. It fans the 12 calls out in parallel, filters, and hands back a compact result. The model never had to read all 12 raw payloads.

HOW YOU TURN IT ON

Add the `programmatic_tool_calling` tool to your Responses API request, then set `allowed_callers` per tool:
- ["direct"] = direct-only (default)
- ["programmatic"] = only generated code calls it
- ["direct", "programmatic"] = both

THE RUNTIME

Each program runs in a fresh, isolated V8. Top-level await, loops, parallel calls, yes. Node.js, network, filesystem, npm, console, persistent state, no. That isolation is why it's ZDR-compatible with no per-call container cost.

THE ONE GOTCHA

Each program-issued call carries a `caller` field. On continuation you must copy it back unmodified or the runtime can't resume the program. This is the #1 integration trip-up.

THE NUMBERS (measure, don't assume)

- Named-customer token reductions: 38% to 63.5%
- One workload: 24% fewer output tokens, 28% faster, matched quality
- Docs are explicit: "the effect depends on the task"

For a single lookup, direct calling is simpler and just as cheap. The gains are on fan-out and heavy filtering.

THE PART NOBODY SAID

This is OpenAI productizing the same "code mode" idea Anthropic shipped as code execution with MCP and Cloudflare shipped as Code Mode. Same pattern, now a first-class API primitive. You don't bring your own sandbox anymore.

Full guide with the request, the model-written program, and the continuation contract:

https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide

Follow @avi_sangle for more Claude Code and AI agent deep-dives.
