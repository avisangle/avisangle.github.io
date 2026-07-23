# Hacker News Submission - MCP Goes Stateless (2026-07-28 Spec)

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** MCP goes stateless: migrating your servers to the 2026-07-28 spec

**URL:** https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide

---

**First Comment:**

Author here. The 2026-07-28 MCP release candidate removes the `initialize` handshake and the `Mcp-Session-Id` header, so a server is now stateless and any instance can serve any request. I migrated my own servers and wrote this as a maintainer's checklist rather than a spec recap.

The parts I found most consequential: capability negotiation moves to per-request `_meta` plus a `server/discover` method, session state becomes an explicit tool-argument handle instead of a hidden session, and Streamable HTTP gains `Mcp-Method`/`Mcp-Name` routing headers so a plain load balancer works. Roots, Sampling, and Logging get a 12-month deprecation window, and old servers coexist via version negotiation, so it's a breaking change but not a fire drill.

The article has before/after request diffs and the OAuth 2.1 checklist. Feedback welcome, especially from anyone maintaining a server with a lot of in-memory session state.
