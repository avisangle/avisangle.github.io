# Dev.to + Hashnode Cross-post - GPT-5.6 Programmatic Tool Calling

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py gpt-5-6-programmatic-tool-calling-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py gpt-5-6-programmatic-tool-calling-guide --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: GPT-5.6 Programmatic Tool Calling: A Hands-On Developer Guide
DESCRIPTION: GPT-5.6 can write JavaScript to orchestrate your tools in a V8 sandbox. How programmatic tool calling works, when to use it, and the real token savings.
TAGS: openai, ai, api, tooling
CANONICAL_URL: https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide
COVER_IMAGE: https://avinashsangle.com/og-gpt-5-6-programmatic-tool-calling-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide).

GPT-5.6 programmatic tool calling lets the model write JavaScript that orchestrates your tools inside an isolated V8 runtime, instead of making one tool call per model round trip. It suits bounded, tool-heavy work like filtering, deduping, and fan-out, where the model shouldn't re-read every intermediate result. Here is how it works and when to reach for it.

## TL;DR

- The model writes a short JavaScript program that loops, filters, and aggregates over your tools. Only the compact result returns to context, not every intermediate tool output.
- Enable it with the `programmatic_tool_calling` tool plus `allowed_callers` per tool. Programs run in a fresh V8 with top-level await but no network, filesystem, npm, or console.
- OpenAI reports named-customer token reductions of 38% to 63.5%; one case matched quality with 24% fewer output tokens and 28% faster. Gains depend on the task, so measure.
- It's OpenAI productizing the same code-mode idea Anthropic shipped as code execution with MCP and Cloudflare shipped as Code Mode. Same pattern, now a first-class API primitive.

## What Is GPT-5.6 Programmatic Tool Calling?

Programmatic tool calling lets GPT-5.6 write and run JavaScript that coordinates the tools in a Responses API request. Instead of the model emitting one function call, waiting for the result, then emitting the next, it writes a small program that composes loops, conditionals, and parallel calls over your tools. OpenAI introduced it with the [GPT-5.6 model family](https://openai.com/index/gpt-5-6/) (Sol, Terra, and Luna) on July 9, 2026, and it ships through the Responses API as a hosted tool.

The problem it solves is context growth. In classic function calling, tool result A goes back into the model, then tool result B, then C. Late iterations re-process everything the early ones produced. Run a lookup over a dozen items and you pay for the growing transcript on every turn. Programmatic tool calling moves that fan-out into a sandbox: the program calls all twelve tools, filters the results, and hands back a compact summary the model never had to read line-by-line.

OpenAI's own framing calls this "code mode." Nikunj Handa, who works on the API, put it plainly on launch day: programmatic tool calling "is here for OpenAI models via the Responses API," with "significant gains in token efficiency (lower cost and latency)" because it runs in in-memory V8s and is ZDR-compatible with no additional container cost. The key word is *bounded*. This is for tool-heavy workflows that don't need fresh model judgment between each step.

## How Code Mode Works in the Responses API

You turn it on by adding two things to your request: the hosted `programmatic_tool_calling` tool, and an `allowed_callers` setting on each tool you want a program to reach. Here is a minimal request in the Python SDK, giving GPT-5.6 a flight-status tool that only a program can call.

```python
from openai import OpenAI

client = OpenAI()

response = client.responses.create(
    model="gpt-5.6",
    input="For these 12 flight numbers, look up each status and tell me which are delayed.",
    tools=[
        # Hosted tool that lets the model write and run a program
        {"type": "programmatic_tool_calling"},
        {
            "type": "function",
            "name": "get_flight_status",
            "description": "Look up the current status of a single flight by number.",
            "parameters": {
                "type": "object",
                "properties": {"flight_number": {"type": "string"}},
                "required": ["flight_number"],
            },
            # Only a generated program may call this, not a direct tool call
            "allowed_callers": ["programmatic"],
        },
    ],
)
```

Given that request, GPT-5.6 doesn't emit twelve function calls. It writes one program. The generated JavaScript runs in the hosted runtime, fans the calls out in parallel, filters, and returns only what matters. A realistic version of what the model writes looks like this.

```javascript
// The model writes this. It runs in an isolated V8 runtime.
const flights = ["AA100", "UA202", "DL303", "WN404", "B6505", "AS606",
                 "NK707", "F9808", "HA909", "G4010", "SY111", "MX212"];

// Parallel fan-out: one round trip's worth of orchestration, not twelve
const results = await Promise.all(
  flights.map((flight_number) => get_flight_status({ flight_number }))
);

const delayed = results
  .filter((r) => r.status === "delayed")
  .map((r) => r.flight_number);

// Return a compact result, not all twelve raw payloads
text(JSON.stringify({ delayed_count: delayed.length, delayed }));
```

On the wire, `response.output` now carries three item types you need to handle. A `program` item holds the generated code, a `call_id`, and an opaque `fingerprint` used to resume the run. Each `function_call` the program issues carries a `caller` field whose `caller_id` matches the program's `call_id`. When the program finishes, a `program_output` item returns with a `status` and a JSON `result` string.

The one integration detail that trips people up is continuation. When you return a tool result, you must copy the original `caller` back **unmodified** so the runtime can resume the correct program. Drop it or rewrite it and the run can't continue.

```python
# Execute the program-issued call in YOUR backend, then return the result
# with its caller preserved so the runtime resumes the right program.
followup = client.responses.create(
    model="gpt-5.6",
    previous_response_id=response.id,
    input=[
        {
            "type": "function_call_output",
            "call_id": "call_1",
            "caller": {"caller_id": "prog_abc123"},  # copy back untouched
            "output": '{"flight_number": "AA100", "status": "delayed"}',
        }
    ],
)
```

Field shapes are new and worth confirming against the primary source before you ship. OpenAI's [Programmatic Tool Calling guide](https://developers.openai.com/api/docs/guides/tools-programmatic-tool-calling) is the canonical reference for the request and continuation contract.

## What the V8 Runtime Can and Can't Do

OpenAI runs each generated program in a fresh, isolated V8 runtime. That isolation is the whole reason the feature is safe to offer, and it is also why the runtime is deliberately spartan. The program can do computation and call your opted-in tools. It cannot touch the outside world by any other path.

**Supported:**

- JavaScript with top-level `await`
- Loops, conditionals, and normal control flow
- Parallel tool calls via `Promise.all`
- Passing results between calls in memory
- Returning output via `text()` or `image()`

**Not available:**

- Node.js APIs or package installation
- Direct network access (fetch, sockets)
- A general-purpose filesystem
- Subprocesses or a shell
- A `console`, or state that persists between runs

The absence of persistent state matters for how you design programs. Each execution starts clean, so anything the model needs across program boundaries has to flow through tool results or the final output. This is a feature, not a limitation: a stateless, network-free sandbox is what makes the runtime ZDR-compatible and cheap to spin up, since there is no container to provision per call.

## Programmatic vs Direct Tool Calling: When to Use Which

Programmatic tool calling is not a replacement for direct tool calling. It's a second mode you reach for when the shape of the work fits. The rule of thumb: if the control flow is predictable and the steps are deterministic, let a program run them. If a step needs the model's judgment, an approval, or a citation, keep it a direct call.

| Use programmatic when... | Use direct when... |
|---|---|
| Many related calls with predictable control flow | A single tool call answers the question |
| Results need filtering, dedupe, aggregation, or validation | An adaptive search needs the model's judgment mid-loop |
| Arguments are derivable from earlier results | The action has side effects or needs an approval |
| Fan-out over tens or hundreds of items | You need to preserve citations or a final validation step |

There is a governance angle worth calling out. Because `allowed_callers` is per tool, it doubles as a blast-radius control. Expose read-only tools to programs first with `["programmatic"]`, and keep anything that writes data, spends money, or triggers a side effect as `["direct"]` only, so the model has to surface that action explicitly rather than burying it inside generated code. I treat this the same way I treat any agent running in an automated pipeline: the model gets to read freely and act narrowly.

## The Real Token Savings (and the Honest Caveat)

The headline reason to use code mode is efficiency, and the numbers OpenAI published are real but bounded. On the model itself, Sam Altman said GPT-5.6 is roughly [54% more token-efficient on agentic coding](https://news.ycombinator.com/item?id=48846407) than its predecessor. That is a model-level gain, separate from code mode, but it stacks with it.

| Metric | Reported result |
|---|---|
| Named-customer token reductions | 38% to 63.5% |
| Output tokens on one measured workload | 24% fewer, at matched quality |
| Task completion time on that workload | 28% faster |
| Container cost for the runtime | None (in-memory V8, ZDR-compatible) |

Now the caveat, straight from OpenAI's docs: programmatic tool calling "can reduce the amount of intermediate tool output added to model context, but the effect depends on the task and tool responses." For a single lookup, direct calling is simpler and just as cheap. The gains show up on fan-out and heavy filtering. Don't assume a universal win. Measure token use, latency, tool-call count, and correctness against a direct-calling baseline before you make it the default for a workflow.

## It's the Same Pattern as Code Execution with MCP

If this feels familiar, that's because it is. Programmatic tool calling is OpenAI productizing an idea that was already circulating under the name "code mode." Anthropic described it in their [code execution with MCP](https://www.anthropic.com/engineering/code-execution-with-mcp) writeup, and Cloudflare shipped it as Code Mode for MCP. All three share the same shape: present tools as a callable API, give the model a sandbox, and let it write the glue code instead of calling tools one at a time.

I walked through building this pattern by hand in [the MCP code execution pattern guide](https://avinashsangle.com/blog/mcp-code-execution-pattern), where you wire up a `search` and `execute` pair and bring your own sandbox (Firecracker, a Deno isolate, or Cloudflare Workers). The catch there was that production code mode needs real isolation infrastructure, which is why most working examples came from companies that already had it.

What OpenAI genuinely adds is that you no longer assemble any of it. The sandbox, the resumption contract, and the tool-eligibility model are a native Responses API primitive. You don't provision a runner or manage isolation; you flip `allowed_callers` on a tool. It's worth separating this from GPT-5.6's other agent feature, Sol's `ultra` mode, which spawns [cooperative subagents inside the model](https://avinashsangle.com/blog/gpt-5-6-sol-ultra-cooperative-subagents). That's model-internal orchestration you can't inspect; programmatic tool calling is orchestration you can read, because the program comes back in the response.

## Getting Started: A Minimal Setup

You can adopt programmatic tool calling incrementally without rewriting your existing tools. The setup is five steps, and the whole thing is opt-in per tool, so you can start with a single read-only function and watch what the model does before widening access.

1. Add `{ "type": "programmatic_tool_calling" }` to the `tools` array of your Responses API request.
2. Opt a tool in with `allowed_callers: ["programmatic"]` for program-only, or `["direct", "programmatic"]` for both paths. Start with read-only tools.
3. Handle the three item types in `response.output`: `program`, program-issued `function_call`, and `program_output`.
4. On continuation, return each function result with its `caller` copied back unmodified so the runtime resumes the right program.
5. Log the generated program and its inputs and outputs for observability, subject to your data policy, then compare token use against your direct-calling baseline.

One nice property: MCP tools are eligible too. Function, custom, MCP, `apply_patch`, shell, and `code_interpreter` tools all accept `allowed_callers: ["programmatic"]`, so an existing MCP server can be driven from inside a generated program with no server-side change. That is the cleanest on-ramp if you already run MCP servers today.

## Frequently Asked Questions

### What is GPT-5.6 programmatic tool calling?

Programmatic tool calling lets GPT-5.6 write JavaScript that coordinates the tools in a Responses API request. The program runs in an isolated V8 runtime, can loop and call tools in parallel, and returns only a compact result to the model instead of every intermediate tool output.

### How is programmatic tool calling different from direct tool calling?

Direct tool calling makes one function call per model round trip, and every result piles back into context. Programmatic tool calling has the model write one program that composes many calls in a sandbox, so only the final result returns. Use direct calls for semantic, adaptive, or approval-sensitive steps.

### How much does programmatic tool calling reduce token usage?

OpenAI reports named-customer reductions of 38% to 63.5%, and one workload matched quality while using 24% fewer output tokens and finishing 28% faster. The docs are explicit that the effect depends on the task, so measure against a direct-calling baseline rather than assuming universal savings.

### When should I not use programmatic tool calling?

Skip it for single tool calls, adaptive searches that need the model's judgment between steps, and approval-sensitive or side-effecting actions. Those belong in direct tool calls where the model sees each result and you keep an explicit approval boundary. Programmatic mode fits bounded, deterministic, tool-heavy work.

### What can and can't the V8 runtime do?

The runtime supports JavaScript with top-level await, loops, conditionals, and parallel tool calls. It has no Node.js, no package installation, no network access, no general filesystem, no subprocesses, no console, and no persistent state between runs. Programs return output through `text()` or `image()`.

### How do I control which tools a program can call?

Set `allowed_callers` on each tool. Omitting it or using `["direct"]` keeps a tool direct-only, `["programmatic"]` lets only generated code call it, and `["direct", "programmatic"]` allows both. Expose read-only tools to programs first and keep side-effecting tools direct-only as a blast-radius control.

### Is programmatic tool calling the same as Anthropic's code execution with MCP?

It is the same core idea, now shipped as a first-class API primitive. Anthropic's code execution with MCP and Cloudflare's Code Mode both let a model write code that composes tools in a sandbox. OpenAI's version adds a documented Responses API contract with program items and a resumption fingerprint.

### Does programmatic tool calling work with MCP servers?

Yes. Function, custom, MCP, `apply_patch`, shell, and `code_interpreter` tools all support `allowed_callers: ["programmatic"]`. That means an MCP tool can be invoked from inside a generated program the same way a plain function is, so existing MCP servers benefit without a rewrite.
