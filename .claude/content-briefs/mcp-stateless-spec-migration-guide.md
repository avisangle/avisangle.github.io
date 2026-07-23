# Content Brief: MCP Stateless Spec Migration Guide

**Status:** Ready to write
**Researched:** 2026-07-23
**Slug:** `mcp-stateless-spec-migration-guide`

---

## Phase 1 — Topic Validation Summary

### Verdict: WRITE IT. Time-sensitive, high-differentiation, low practical competition.

The MCP `2026-07-28` specification release candidate locked (RC published **May 21, 2026**; final spec ships **July 28, 2026**). This is the largest revision in the protocol's history: a **stateless protocol core** (no `initialize` handshake, no session IDs), a first-class **Extensions framework** (MCP Apps + Tasks), **six OAuth 2.1 authorization SEPs**, and a **formal deprecation policy** retiring Roots, Sampling, and Logging.

Publishing window is tight and valuable: the final spec ships **five days after** this brief's research date. A migration guide out *before or at* the July 28 ship date captures the "what do I actually change?" search wave that the news-explainer articles are not answering.

### Competition analysis

| Source | What it covers | Gaps |
|---|---|---|
| [Official MCP RC blog](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) | Authoritative spec summary, SEP numbers | Not a migration walkthrough; no before/after code |
| [Agora Intelligence](https://agora-intelligence.com/en/blog/leon-mcp-stateless-spec-2026/) | Stateless transition analysis (AI-authored byline) | No adoption stats, no OAuth/OIDC detail, no NSA guidance |
| [ByteIota](https://byteiota.com/mcp-goes-stateless-2026-release-candidate/) | Explainer + adoption stats | Zero on the six security SEPs, no SDK migration steps |

**Nobody** publishes a practical developer migration guide with: a real **before/after JSON-RPC request diff**, the **`Mcp-Method`/`Mcp-Name` proxy config**, the **SSE → Multi Round-Trip** rewrite, the **explicit-handle state pattern**, the **six SEPs mapped to what each fixes**, and **step-by-step SDK migration** (package renames, conformance caveats). That is the wedge.

### AI citation potential: HIGH

This is exactly the "how do I migrate X to the new spec" question developers ask ChatGPT/Claude/Perplexity in the weeks after a breaking release. Authoritative content is thin (the official post is a spec summary, not a how-to). A structured, SEP-mapped guide with code diffs is prime citation material.

### First-party advantage (the unique angle)

Avinash has **built and shipped three production MCP servers** on this site: [jenkins-mcp](https://avinashsangle.com/projects/jenkins-mcp), [method-crm-mcp](https://avinashsangle.com/projects/method-crm-mcp), and [wp-mcp](https://avinashsangle.com/projects/wp-mcp). Frame the guide as *"what migrating my own servers to the stateless core actually looks like"* — a maintainer's checklist, not a news recap. This is the primary-source edge no competitor has.

### Bing/first-party demand (observed)

Bing query export (120 days) shows **no MCP-spec-specific queries yet** (the spec is brand new), but sustained MCP interest: `jenkins mcp server for ai agents`, `method crm mcp server`, `can claude help setting functions on method crm?`. Demand for the migration query is expected to spike post-July 28 — this post targets it pre-emptively. *(Bing demand for the exact topic: not yet present; expected imminent.)*

---

## Phase 2 — Keyword Strategy

### Primary keyword
**MCP stateless migration** (also: "MCP stateless spec")

### Secondary keywords
- MCP 2026-07-28 spec
- MCP breaking changes
- MCP Extensions framework
- MCP OAuth 2.1 authorization
- MCP session ID removed

### Long-tail queries
- how to migrate an MCP server to the stateless spec
- what changed in the MCP 2026-07-28 specification
- MCP initialize handshake removed
- MCP Mcp-Session-Id header deprecated
- MCP Roots Sampling Logging deprecation replacement
- MCP Apps and Tasks extensions explained
- MCP OAuth 2.1 resource server setup
- do I need to rewrite my MCP server for 2026-07-28

### FAQ candidates (8-10)
Marked `[Bing]` = observed demand, `[PAA/derived]` = People Also Ask / derived from research.

1. What does "MCP goes stateless" actually mean? `[PAA/derived]`
2. Do I have to migrate my MCP server before July 28, 2026? `[PAA/derived]`
3. Is the `initialize` handshake really gone? `[PAA/derived]`
4. What replaces the `Mcp-Session-Id` header? `[PAA/derived]`
5. Are Roots, Sampling, and Logging removed immediately? `[PAA/derived]`
6. Can stateful (old) and stateless (new) MCP servers coexist? `[PAA/derived]`
7. Which MCP SDK versions support the 2026-07-28 spec? `[PAA/derived]`
8. What are MCP Apps and Tasks in the Extensions framework? `[PAA/derived]`
9. What do the six security SEPs change for OAuth flows? `[PAA/derived]`
10. Did NSA or CISA issue MCP security guidance? `[PAA/derived]`

---

## Phase 3 — Content Brief

### Article Metadata

- **`metadata.title`** (38-43 chars): `MCP Stateless Migration: 2026 Spec Guide` (40 chars → rendered 57 with suffix, ✓ ≤60)
- **Fuller OG/Twitter/H1 title** (55-65 chars): `MCP Goes Stateless: Migrating Your Servers to the 2026 Spec` (58 chars)
- **Slug:** `mcp-stateless-spec-migration-guide`
- **Meta description** (130-160): `The July 2026 MCP spec drops session handshakes entirely. Migrate your servers to the stateless core, new routing headers, and OAuth 2.1 auth.` (141 chars)
- **Target word count:** 2600-3000
- **Estimated read time:** ~11-12 min
- **Category:** AI Development (articleSection) — tag as "Model Context Protocol"
- **Suggested Lucide icon:** `Network` (or `Server` / `RefreshCw` as alternates)
- **Last updated:** 2026-07-23 (set datePublished on publish day)

### Content Outline

> **Opening (first 40-60 words = direct answer):** The MCP `2026-07-28` spec makes the protocol stateless: it removes the `initialize`/`initialized` handshake and the `Mcp-Session-Id` header, so any server instance can handle any request. Existing servers keep working during a 12-month window, but transport, auth, and deprecated features (Roots, Sampling, Logging) all need attention.

**TL;DR box (3-4 bullets):**
- Stateless core: no handshake, no session ID — capabilities move to `_meta` + a new `server/discover` method (SEP-2575, SEP-2567).
- Streamable HTTP gains mandatory `Mcp-Method` / `Mcp-Name` headers; SSE is replaced by Multi Round-Trip Requests (SEP-2243, SEP-2322).
- Roots, Sampling, Logging enter a 12-month deprecation window — still work today, plan replacements (SEP-2577).
- Six authorization SEPs make MCP an OAuth 2.1 resource server; SDKs (Python v2, new TS packages) ship betas now.

---

#### H2: What "MCP Goes Stateless" Actually Means
- Direct answer first. Old model: server issued `Mcp-Session-Id`, every later request carried it, pinning the client to one instance (sticky routing / shared session store).
- New model: *"the same call is a single self-contained request that any server instance can handle"* (official quote). Result: plain round-robin load balancing, no session store.
- Cite: RC published May 21, 2026; final spec July 28, 2026. SEP-2575 (handshake removed), SEP-2567 (session header removed).
- Quote @dsp_ (MCP co-creator): *"The protocol is now stateless: no handshake, no session id, any request can hit any server instance."*

#### H2: Before and After: A Stateless Request Diff
- **Highest-value section — no competitor has this.** Show a side-by-side.
- BEFORE (2025-11-25): POST `initialize` → server returns `Mcp-Session-Id` → subsequent `tools/call` carries the session header.
- AFTER (2026-07-28): single self-contained `tools/call` with protocol version + client info + capabilities in `_meta`; routing headers `Mcp-Method: tools/call` and `Mcp-Name`.
- Note the rule: *"Servers are required to reject requests where the headers and body disagree."* (SEP-2243)
- Code blocks: two JSON-RPC payloads + HTTP headers, clearly labeled `// BEFORE` / `// AFTER`.

#### H2: How Clients Discover Capabilities Without `initialize`
- Capability negotiation isn't gone — it moved. Per-request `_meta` carries protocol version + capabilities; new `server/discover` method fetches server surface on demand.
- Explain the **explicit state-handle pattern**: servers mint identifiers (e.g., `basket_id`) that the model passes as arguments to later calls. State becomes visible in tool arguments instead of hidden in transport metadata.
- Why this matters for tool design (idempotency, replayability).

#### H2: Transport Changes: Streamable HTTP and the End of SSE
- `Mcp-Method` + `Mcp-Name` headers enable routing without body inspection (SEP-2243) — include the proxy/load-balancer config note (forward these headers).
- SSE streams replaced by **Multi Round-Trip Requests** (SEP-2322): server returns `InputRequiredResult` with `inputRequests` + `requestState`; client re-issues with `inputResponses` echoing `requestState`. Server-initiated requests only allowed while processing a client request (SEP-2260).
- stdio transport: session-header changes don't apply; but Logging deprecation steers stdio servers to stderr.
- Mention `ttlMs` + `cacheScope` on list/read results (SEP-2549) and W3C Trace Context in `_meta` (SEP-414).

#### H2: The Extensions Framework: MCP Apps and Tasks
- Extensions are now first-class (SEP-2133): reverse-DNS identifiers, negotiated via an extensions map, versioned independently in `ext-*` repos.
- **MCP Apps (SEP-1865):** server-rendered interactive HTML in a sandboxed iframe; tools declare UI templates ahead of time so hosts can prefetch/cache/security-review; UI talks back over the same JSON-RPC base protocol.
- **Tasks (SEP-2663):** long-running ops. Was experimental in 2025-11-25, now redesigned as an extension. Server answers `tools/call` with a task handle; client drives via `tasks/get` / `tasks/update` / `tasks/cancel`. `tasks/list` removed (session-free design). **Migration flag:** anyone who shipped against the 2025-11-25 experimental Tasks API must migrate to the new lifecycle (only explicit migration step the official post names).

#### H2: Deprecations: Roots, Sampling, and Logging (12-Month Window)
- These enter a 12-month deprecation window (SEP-2577) — **annotation-only, nothing breaks in this release.** Quote: *"The methods, types, and capability flags continue to work in this release and in every specification version published within a year of it."*
- Replacement table:
  - Roots → tool parameters, resource URIs, or server config
  - Sampling → call your LLM provider's API directly
  - Logging → stderr (stdio) / OpenTelemetry (structured observability)
- Lifecycle: Active → Deprecated → Removed, min 12 months between stages; removal needs a separate SEP. Practical effect: safe until ~mid-2027 at the earliest.

#### H2: Authorization Hardening: Six SEPs and OAuth 2.1
- MCP is now formally an OAuth 2.1 resource server. Map the six SEPs:
  - SEP-2468 — validate `iss` per RFC 9207 (mix-up attack mitigation)
  - SEP-837 — OIDC `application_type` in Dynamic Client Registration
  - SEP-2352 — credentials bound to issuer; re-register on resource migration
  - SEP-2207 — refresh-token requests from OIDC servers
  - SEP-2350 — scope accumulation during step-up auth
  - SEP-2351 — `.well-known` discovery suffix
- Note NSA guidance (attribute to **NSA, not CISA**): *"Model Context Protocol (MCP): Security Design Considerations for AI-Driven Automation,"* published May 20, 2026 — flags prompt/command injection, uncontrolled automated actions, DoS; recommends egress proxies, DLP, sandboxing, output filtering. Link to the [NSA press release](https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/).

#### H2: Your Migration Checklist (Step by Step)
- Numbered, actionable. Frame with Avinash's first-party servers.
  1. Upgrade the SDK: Python v2 (`mcp` 2.x, currently alpha/beta; stable targeted 2026-07-27), TypeScript new packages `@modelcontextprotocol/server` + `@modelcontextprotocol/client`. (Go/C# betas exist too.)
  2. Remove `Mcp-Session-Id` reliance; move session state into explicit tool-argument handles.
  3. Update proxy/load-balancer to forward `Mcp-Method` / `Mcp-Name` headers; drop sticky routing.
  4. Rewrite any SSE streaming to the Multi Round-Trip pattern.
  5. Migrate experimental Tasks usage to the new lifecycle.
  6. Plan Roots/Sampling/Logging replacements (optional within 12 months).
  7. Adopt the OAuth 2.1 resource-server posture if you expose HTTP auth.
- **Backward compatibility:** this release has breaking changes, but stateful and stateless servers coexist via version negotiation — new clients fall back to the `initialize` handshake against 2025-11-25-or-earlier servers. Caveat: Python v2 passes the conformance suite except the tasks suite (tasks is now an extension).

#### H2: FAQ
- Render the 8-10 FAQ candidates above as an Accordion + FAQPage schema (40-60 words each).

---

### Unique Angle (restate for the writer)
1. **Maintainer's-eye migration guide**, not a news recap — anchored to Avinash's three shipped MCP servers.
2. **The only guide with a concrete before/after request diff**, proxy header config, and SSE→Multi-Round-Trip rewrite.
3. **All six security SEPs mapped to what each fixes** — no competitor does this.

### Accuracy guardrails (MUST follow — from verified research)
- Attribute security guidance to **NSA only**, not "NSA/CISA" (no joint doc found).
- **Do not cite a Fortune 500 adoption percentage** — sources conflict 28% vs 80%.
- Present stats as dated secondary figures, not spec-post claims: **97M monthly SDK downloads (March 2026)**, **10,000+ public servers (Anthropic, Dec 2025)**, independent **Nerq census 17,468 servers (Q1 2026)**, **12.9% high-trust**.
- SDK exact version strings beyond Python `2.0.0a1` and the TS package renames are **partially unverified** — describe as "v2 betas" rather than pinning Go/C# version numbers.
- RC = May 21, 2026; final spec = July 28, 2026. Keep these dates exact.

### Internal Linking Opportunities
- [MCP Code Execution Pattern](https://avinashsangle.com/blog/mcp-code-execution-pattern) — MCP usage pattern (related MCP content)
- [LiteLLM CVE-2026-42271 exploit response](https://avinashsangle.com/blog/litellm-mcp-exploit-response-guide) — MCP security angle (pairs with the OAuth/NSA section)
- Projects (first-party proof): [jenkins-mcp](https://avinashsangle.com/projects/jenkins-mcp), [method-crm-mcp](https://avinashsangle.com/projects/method-crm-mcp), [wp-mcp](https://avinashsangle.com/projects/wp-mcp)
- Future cluster: an "MCP Apps deep-dive" and an "MCP OAuth 2.1 resource server setup" post can both link back here.

### Authoritative sources to cite in-article
- Official RC post: https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/
- Official SDK betas post: https://blog.modelcontextprotocol.io/posts/sdk-betas-2026-07-28/
- SEP-2577 (deprecations): https://modelcontextprotocol.io/seps/2577-deprecate-roots-sampling-and-logging
- NSA CSI press release: https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/
- Python SDK v2 alpha on PyPI: https://pypi.org/project/mcp/2.0.0a1/

---

## Ready to Write?
Run: /write-blogpost mcp-stateless-spec-migration-guide
