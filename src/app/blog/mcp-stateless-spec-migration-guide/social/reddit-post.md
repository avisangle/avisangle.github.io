# Reddit Posts - MCP Goes Stateless (2026-07-28 Spec)

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py mcp-stateless-spec-migration-guide --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: mcp
TITLE: What actually changes for your server in the stateless 2026-07-28 spec
FLAIR: Tutorial
---BODY---
The 2026-07-28 release candidate locked in May and the final spec ships July 28. I went through it and migrated my own servers, so here's the maintainer's-eye view of what breaks and what you actually have to do.

**The core change: no more session.** SEP-2575 removes the `initialize`/`initialized` handshake, and SEP-2567 deletes the `Mcp-Session-Id` header and protocol-level sessions. Every request is now self-contained, so any server instance can handle any call. No sticky routing, no shared session store, plain round-robin load balancing works.

**Capability negotiation didn't vanish, it moved.** Protocol version and capabilities now travel in per-request `_meta`, and a new `server/discover` method lets clients fetch the server's surface on demand. State that used to hide behind a session ID becomes an explicit tool-argument handle: the server mints something like `basket_id` and the model passes it back on later calls.

**Transport.** Streamable HTTP gets two mandatory headers, `Mcp-Method` and `Mcp-Name` (SEP-2243), so a proxy can route without parsing the body. Servers are required to reject requests where the headers and body disagree. SSE streaming is replaced by Multi Round-Trip Requests (SEP-2322): the server returns `InputRequiredResult` with a `requestState`, the client re-issues echoing it back.

**Deprecations, but calm ones.** Roots, Sampling, and Logging enter a 12-month window (SEP-2577). They keep working in this release and every version for a year. Roots maps to tool params or resource URIs, Sampling to a direct provider call, Logging to stderr or OpenTelemetry.

**Coexistence.** Breaking changes, but version negotiation means new clients fall back to the `initialize` handshake against 2025-11-25 servers. Old and new run side by side, so no big-bang cutover.

The one gotcha the spec calls out by name: if you shipped against the experimental 2025-11-25 Tasks API, you have to migrate to the new task-handle lifecycle (Tasks is now an extension).

Full write-up with before/after request diffs and the migration checklist: https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide

Happy to answer questions, especially if you're staring at a server with a lot of in-memory session state.
---POST---
SUBREDDIT: AI_Agents
TITLE: MCP is going stateless in the 2026-07-28 spec - what it means for agent tooling
FLAIR: Discussion
---BODY---
If your agents talk to MCP servers, the 2026-07-28 spec (final ships July 28) is worth reading before it lands. It's the largest revision in the protocol's history and it removes the session model entirely.

**What changes for the agent side:**

- The `initialize` handshake and `Mcp-Session-Id` header are gone. Every request is self-contained, so any server instance can serve any call.
- Capabilities move to per-request `_meta` plus a new `server/discover` method the client calls on demand.
- Session state becomes an explicit tool-argument handle. The server returns an id, the model passes it back. State lives in the arguments now, which is much easier to log, trace, and replay than a hidden session.

That last point is the interesting one for agent design. Explicit handles mean an agent's tool calls are self-describing: you can see exactly what state a call depends on because it's right there in the arguments. It pairs well with the new W3C Trace Context support (SEP-414) that threads a trace id through `_meta` across a whole tool chain.

The Extensions framework (SEP-2133) also splits the protocol into a small stateless core plus independently-versioned extensions. Long-running work moves to the Tasks extension (task handle + `tasks/get`/`tasks/update`/`tasks/cancel`), and MCP Apps (server-rendered UIs in a sandboxed iframe) become a first-class extension too.

Backward compatibility holds via version negotiation, so old and new servers coexist during the transition.

I wrote a migration guide aimed at server maintainers, with request diffs and a step-by-step checklist: https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide

Curious how others are handling the explicit-handle state pattern in their agent loops. Happy to answer questions.
