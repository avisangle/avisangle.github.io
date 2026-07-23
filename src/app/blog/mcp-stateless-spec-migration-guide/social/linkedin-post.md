# LinkedIn Post - MCP Goes Stateless (2026-07-28 Spec)

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py mcp-stateless-spec-migration-guide --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
The Model Context Protocol just shipped its biggest revision yet, and it breaks the assumption baked into almost every MCP server: the session.

In the 2026-07-28 spec, MCP goes stateless. The `initialize` handshake is gone. The `Mcp-Session-Id` header is gone. Every request is now self-contained, so any server instance can handle any call. If you run a fleet of servers, that means you can drop the session store and the sticky routing and put a plain load balancer in front.

Here's what stood out after going through the release candidate and migrating my own servers:

- Capability negotiation moved from a front-loaded handshake to per-request metadata plus a new server/discover method
- Session state becomes an explicit tool-argument handle, so it's visible in arguments instead of hidden in the transport
- Streamable HTTP gains two routing headers so a proxy can dispatch without parsing the body
- Six authorization SEPs make MCP a formal OAuth 2.1 resource server

It's a breaking change, but not a fire drill. Roots, Sampling, and Logging get a 12-month deprecation window, and old and new servers coexist through version negotiation, so there's no coordinated big-bang cutover.

The interesting part for me: the servers that were already stateless in spirit, one tool call equals one action against an external API, were nearly free to migrate. The ones that stashed per-connection state in memory are where the real work is.

I wrote a maintainer's migration guide with before/after request diffs, the new headers, the deprecation replacements, and the OAuth 2.1 checklist:

https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide

If you maintain an MCP server, how much hidden session state is your current design carrying?

#ModelContextProtocol #MCP #AIEngineering #DevOps #OAuth
