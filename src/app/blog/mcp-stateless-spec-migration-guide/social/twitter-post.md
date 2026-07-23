# Twitter/X Long-form Post - MCP Goes Stateless (2026-07-28 Spec)

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py mcp-stateless-spec-migration-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
MCP just went stateless.

The 2026-07-28 spec is the biggest revision in the protocol's history, and it breaks the one thing every server assumed: the session. If you maintain an MCP server, here's what actually changes.

THE CORE CHANGE

No more `initialize` handshake. No more `Mcp-Session-Id` header. Every request is now self-contained, so any server instance can handle any call. That means plain round-robin load balancing, no session store, no sticky routing.

Two SEPs do it: SEP-2575 removes the handshake, SEP-2567 deletes the session header.

WHERE DID CAPABILITY NEGOTIATION GO

It didn't disappear. It moved. Protocol version and capabilities now ride in per-request `_meta`, and a new `server/discover` method fetches the server's surface on demand. Session state becomes an explicit tool-argument handle (the server mints a `basket_id`, the model passes it back). State is visible in arguments now, not hidden in transport.

TRANSPORT

Streamable HTTP gains two mandatory headers, `Mcp-Method` and `Mcp-Name`, so a proxy routes without parsing the body. Servers MUST reject requests where headers and body disagree. SSE streaming is gone, replaced by Multi Round-Trip Requests.

DEPRECATIONS (don't panic)

Roots, Sampling, and Logging enter a 12-month deprecation window. They still work in this release and every version for a year. Roots -> tool params. Sampling -> call your LLM provider directly. Logging -> stderr or OpenTelemetry.

SECURITY

Six authorization SEPs make MCP a formal OAuth 2.1 resource server. The NSA also published a 17-page security sheet in May flagging prompt injection and uncontrolled actions.

The good news: old and new servers coexist via version negotiation. No big-bang cutover. I'm running this across my own three MCP servers and the mostly-stateless ones are nearly free to move.

Full migration guide with before/after request diffs, the new headers, and the OAuth checklist:

https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide

Follow @avi_sangle for more MCP and Claude Code deep-dives.
