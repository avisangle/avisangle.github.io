# Dev.to + Hashnode Cross-post - MCP Goes Stateless (2026-07-28 Spec)

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py mcp-stateless-spec-migration-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py mcp-stateless-spec-migration-guide --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: MCP Goes Stateless: Migrating Your Servers to the 2026 Spec
DESCRIPTION: The 2026-07-28 MCP spec removes the initialize handshake and session IDs. A maintainer's guide to migrating servers: request diffs, new headers, deprecations, and OAuth 2.1.
TAGS: mcp, ai, devops, api
CANONICAL_URL: https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide
COVER_IMAGE: https://avinashsangle.com/og-mcp-stateless-spec-migration-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide).

The 2026-07-28 MCP spec makes the protocol stateless: it removes the `initialize`/`initialized` handshake and the `Mcp-Session-Id` header, so any server instance can handle any request. Existing servers keep working during a 12-month window, but transport, auth, and deprecated features all need attention.

## TL;DR

- Stateless core: no handshake, no session ID. Capabilities move to per-request `_meta` plus a new `server/discover` method (SEP-2575, SEP-2567).
- Streamable HTTP gains mandatory `Mcp-Method` and `Mcp-Name` headers so a plain load balancer can route. SSE streaming is replaced by Multi Round-Trip Requests (SEP-2243, SEP-2322).
- Roots, Sampling, and Logging enter a 12-month deprecation window. They still work today, so plan replacements rather than scramble (SEP-2577).
- Six authorization SEPs make MCP an OAuth 2.1 resource server. The v2 SDKs (Python 2.x, new TypeScript packages) ship betas now, and old servers coexist through version negotiation.

## What "MCP Goes Stateless" Actually Means

The short version: a Model Context Protocol server no longer holds a session for each client. In the old model, a client sent an `initialize` request, the server replied with an `Mcp-Session-Id`, and every subsequent request had to carry that ID, pinning the client to whichever instance issued it. That is gone. The [official release candidate post](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) puts it plainly: in `2026-07-28`, the same call is a single self-contained request that any server instance can handle.

Two SEPs (Specification Enhancement Proposals) do the work. **SEP-2575** removes the `initialize`/`initialized` handshake, and **SEP-2567** deletes protocol-level sessions and the `Mcp-Session-Id` header. The practical payoff is deployment. With no session store and no sticky routing to maintain, you can put a fleet of identical server instances behind a plain round-robin load balancer and stop worrying about which instance a client last talked to.

This is the largest revision in the protocol's history. The RC locked on May 21, 2026, with the final specification shipping July 28 after a 10-week validation window. MCP co-creator David Soria Parra summed the change up on X: the protocol is now stateless, with no handshake, no session id, and any request able to hit any server instance.

Scale is why this matters beyond a handful of servers. MCP crossed roughly 97 million monthly SDK downloads as of March 2026 (secondary reporting from developer outlets, not the spec post itself), and Anthropic cited more than 10,000 public servers in production around the December 2025 Linux Foundation donation. An independent Nerq census in Q1 2026 indexed 17,468 servers across registries. A lot of code assumes the stateful contract, which is exactly why the spec ships a formal deprecation policy alongside the breaking changes.

## Before and After: A Stateless Request Diff

The clearest way to see the change is to look at the wire. In the 2025-11-25 flow, a client made two round trips before it could call a tool: one to `initialize`, then the real request carrying the session header the server handed back.

```http
# 1) Handshake first
POST /mcp HTTP/1.1
Content-Type: application/json

{"jsonrpc":"2.0","id":1,"method":"initialize",
 "params":{"protocolVersion":"2025-11-25","capabilities":{}}}

# Server replies with a session id you must now pin to
HTTP/1.1 200 OK
Mcp-Session-Id: 7f3c9a1e-...

# 2) Every later call carries the session id
POST /mcp HTTP/1.1
Mcp-Session-Id: 7f3c9a1e-...
Content-Type: application/json

{"jsonrpc":"2.0","id":2,"method":"tools/call",
 "params":{"name":"get_invoice","arguments":{"id":"INV-42"}}}
```

In `2026-07-28`, that collapses into one self-contained request. Protocol version, client info, and capabilities ride in `_meta`, and two new HTTP headers let a proxy route the call without parsing the JSON body.

```http
# One request, no handshake, no session id
POST /mcp HTTP/1.1
Mcp-Method: tools/call
Mcp-Name: get_invoice
Content-Type: application/json

{"jsonrpc":"2.0","id":1,"method":"tools/call",
 "params":{
   "name":"get_invoice",
   "arguments":{"id":"INV-42"},
   "_meta":{
     "protocolVersion":"2026-07-28",
     "client":{"name":"my-agent","version":"1.0"}
   }
 }}
```

The `Mcp-Method` and `Mcp-Name` headers come from **SEP-2243**, and the spec is strict about them: servers are required to reject requests where the headers and body disagree. That rule is what makes header-based routing safe. A gateway can dispatch on `Mcp-Method: tools/call` without trusting an attacker to keep the header and body consistent, because a mismatched request never reaches your handler.

## How Clients Discover Capabilities Without initialize

A fair first question: if `initialize` is gone, how does a client learn what a server can do? Capability negotiation did not disappear. It moved from a front-loaded handshake to two places. Per-request `_meta` carries the protocol version and client info on every call, and a new `server/discover` method lets a client fetch the server's capability surface on demand instead of once at connection time.

The deeper shift is where state lives. The spec now endorses explicit state handles. Instead of hiding session state behind a transport header, the server mints an identifier and returns it as data, and the model passes it back as an argument on later calls. State becomes visible in the tool arguments, which is easier to reason about, log, and replay.

```json
// First call: server creates a cart and returns a handle
// tools/call -> create_cart
{ "result": { "basket_id": "cart_9f2", "items": [] } }

// Later call: the model passes the handle back explicitly
// tools/call -> add_item
{
  "name": "add_item",
  "arguments": { "basket_id": "cart_9f2", "sku": "A-100", "qty": 2 }
}
```

When I look at my own servers through this lens, the change is mostly mechanical. My [Jenkins MCP server](https://avinashsangle.com/projects/jenkins-mcp) and [Method CRM MCP server](https://avinashsangle.com/projects/method-crm-mcp) already treat each tool call as a discrete action against an external system, so there was very little hidden session state to unwind. If your server stashes per-connection context in memory keyed by session ID, that is the part that needs to become an explicit handle before you move.

## Transport Changes: Streamable HTTP and the End of SSE

Streamable HTTP takes the primary impact. Beyond dropping the session header, it gains the mandatory `Mcp-Method` and `Mcp-Name` headers (SEP-2243) so routing happens without body inspection. The result is the deployment win: your server sits behind a normal load balancer with no session store and no affinity rules. If you run behind Nginx, Envoy, or a cloud gateway, make sure that layer forwards both headers untouched.

The bigger rewrite is streaming. Server-Sent Events streams are replaced by **Multi Round-Trip Requests** (SEP-2322). When a server needs more input mid-operation, it returns an `InputRequiredResult` carrying `inputRequests` and a `requestState` token. The client answers by re-issuing the request with `inputResponses` that echo the same `requestState`. Server-initiated requests are only allowed while the server is processing a client request (SEP-2260), which keeps the model firmly stateless between turns.

```json
// Server needs a confirmation before proceeding
{
  "result": {
    "type": "InputRequiredResult",
    "requestState": "st_7a1",
    "inputRequests": [
      { "name": "confirm", "prompt": "Delete build #482?" }
    ]
  }
}

// Client re-issues, echoing requestState
{
  "method": "tools/call",
  "params": {
    "name": "delete_build",
    "requestState": "st_7a1",
    "inputResponses": [ { "name": "confirm", "value": "yes" } ]
  }
}
```

The stdio transport is largely unaffected by the session-header changes, since those are HTTP concerns. The one thing that touches stdio servers is the Logging deprecation, which steers them toward plain `stderr` (more on that next). Two smaller additions round out the transport work: `ttlMs` and `cacheScope` on list and read results for cacheability (SEP-2549), and W3C Trace Context propagated through `_meta` (SEP-414) so distributed tracing spans a whole tool chain.

## The Extensions Framework: MCP Apps and Tasks

The stateless core is deliberately small. Everything that used to bloat the base protocol now lives in the new Extensions framework (SEP-2133). Extensions use reverse-DNS identifiers, negotiate through an extensions map in client and server capabilities, live in their own `ext-*` repositories with delegated maintainers, and version independently of the core spec. That last part is the point: an extension can iterate without forcing a core revision, so the churn you just lived through should not repeat every year.

**MCP Apps (SEP-1865)** are server-rendered interactive UIs. A server ships HTML that the host renders in a sandboxed iframe, and tools declare their UI templates ahead of time so the host can prefetch, cache, and security-review them before anything renders. The rendered UI talks back over the same JSON-RPC base protocol as a normal tool call, so you are not learning a second communication model.

**Tasks (SEP-2663)** cover long-running operations. Tasks shipped experimentally in the 2025-11-25 core and are now redesigned as an extension. A server answers a `tools/call` with a task handle, and the client drives it through `tasks/get`, `tasks/update`, and `tasks/cancel`. Task creation is server-directed, and `tasks/list` was removed because the session-free design has no place to anchor a per-client list. This is the one migration the spec calls out by name: anyone who shipped against the experimental 2025-11-25 Tasks API must move to the new lifecycle.

## Deprecations: Roots, Sampling, and Logging

Three features enter a 12-month deprecation window under **SEP-2577**: Roots, Sampling, and Logging. This is the part to stay calm about. These are annotation-only deprecations. Nothing stops working in this release. The spec is explicit that the methods, types, and capability flags continue to work in this release and in every specification version published within a year of it. In practice that means these keep functioning until roughly mid-2027 at the earliest, and actual removal requires a separate SEP.

The lifecycle is Active, then Deprecated, then Removed, with a minimum of 12 months between stages. So you have a real runway. Here is what each deprecated feature maps to.

- **Roots** becomes tool parameters, resource URIs, or server configuration. Pass the working directory or scope as an argument instead of a root.
- **Sampling** becomes a direct call to your LLM provider's API. If your server needed the model to generate something, call the provider yourself rather than routing it back through the client.
- **Logging** becomes `stderr` for stdio servers and OpenTelemetry for structured observability. This pairs naturally with the new W3C Trace Context support.

My advice: do not rush these replacements into the same change as your transport migration. Get the stateless core working first, ship it, then retire Roots, Sampling, and Logging on their own schedule inside the 12-month window. Bundling them turns one testable change into a big risky one.

## Authorization Hardening: Six SEPs and OAuth 2.1

The 2026-07-28 spec formalizes MCP as an OAuth 2.1 resource server, and six authorization SEPs align it with OAuth 2.0 and OpenID Connect. If you built HTTP auth for an MCP server before this, most of these are tightening rules you should already want.

- **SEP-2468** requires clients to validate the `iss` parameter per RFC 9207, mitigating authorization-server mix-up attacks.
- **SEP-837** has clients declare an OIDC `application_type` during Dynamic Client Registration.
- **SEP-2352** binds credentials to the issuer, so re-registration is required when resources migrate.
- **SEP-2207** documents refresh-token requests from OIDC servers.
- **SEP-2350** clarifies scope accumulation during step-up authorization.
- **SEP-2351** clarifies the `.well-known` discovery suffix.

The urgency is not purely spec-driven. In May 2026 the NSA published a 17-page Cybersecurity Information Sheet, [Model Context Protocol (MCP): Security Design Considerations for AI-Driven Automation](https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/), warning that adoption has outpaced safeguards. It flags prompt and command injection, uncontrolled automated actions, and denial-of-service risk, and recommends filtering egress proxies, data-loss prevention, sandboxing, and output filtering. This is NSA guidance specifically, not a joint NSA and CISA document, so cite it that way. If you want a worked example of an MCP-adjacent auth failure and the fix, my writeup on the [LiteLLM CVE-2026-42271 response](https://avinashsangle.com/blog/litellm-mcp-exploit-response-guide) walks through the same class of problem.

## Your Migration Checklist

Here is the order I would migrate a production MCP server in. Do it as separate, testable steps rather than one large change.

1. **Upgrade the SDK.** Move to the v2 betas. Python is a v2 major rework (the `mcp` 2.x line), and TypeScript splits into new packages `@modelcontextprotocol/server` and `@modelcontextprotocol/client`. Go and C# betas exist too.
2. **Remove session state.** Drop any reliance on `Mcp-Session-Id` and move per-session context into explicit tool-argument handles.
3. **Update routing.** Configure your proxy or load balancer to forward `Mcp-Method` and `Mcp-Name`, and remove sticky-session rules.
4. **Rewrite streaming.** Replace SSE streams with the Multi Round-Trip pattern using `InputRequiredResult` and `inputResponses`.
5. **Migrate Tasks.** If you used the experimental 2025-11-25 Tasks API, move to the new task-handle lifecycle.
6. **Plan the deprecations.** Schedule Roots, Sampling, and Logging replacements inside the 12-month window. No rush.
7. **Harden auth.** If you expose HTTP auth, adopt the OAuth 2.1 resource-server posture from the six SEPs above.

One reassurance for the rollout: this release has breaking changes, but stateful and stateless servers coexist through version negotiation. New clients fall back to the `initialize` handshake when they reach a server on the 2025-11-25 revision or earlier. You do not need a coordinated big-bang cutover across every server and client at once. One caveat worth testing for: the Python v2 SDK passes the conformance suite except the tasks suite, because Tasks is now an extension rather than core.

I am running this migration across my own three MCP servers, the [Jenkins MCP server](https://avinashsangle.com/projects/jenkins-mcp), the [Method CRM MCP server](https://avinashsangle.com/projects/method-crm-mcp), and [WordPress MCP](https://avinashsangle.com/projects/wp-mcp). The servers that were already stateless in spirit, one tool call equals one action against an external API, are nearly free to move. The deployment simplification alone, dropping session stores and sticky routing, is worth the upgrade. For the conceptual background on how MCP tools compose, my [MCP code execution pattern](https://avinashsangle.com/blog/mcp-code-execution-pattern) guide is a good companion read.

## Frequently Asked Questions

### What does "MCP goes stateless" actually mean?

The 2026-07-28 MCP spec removes the `initialize`/`initialized` handshake and the `Mcp-Session-Id` header. Every request is now self-contained, so any server instance can handle it. Protocol version and capabilities travel in per-request `_meta` instead of being negotiated once at connection time.

### Do I have to migrate my MCP server before July 28, 2026?

Not immediately. The release candidate locked May 21, 2026 and the final spec ships July 28. Older 2025-11-25 servers keep working through version negotiation, and deprecated features get a 12-month window. But new stateless clients expect the new contract, so plan the migration soon.

### Is the MCP initialize handshake really gone?

Yes. SEP-2575 removes the `initialize`/`initialized` handshake and SEP-2567 deletes the `Mcp-Session-Id` header. Capability negotiation did not disappear, though. It moved to per-request `_meta` plus a new `server/discover` method that clients call on demand to fetch the server's capabilities.

### What replaces the Mcp-Session-Id header?

Nothing at the transport layer. State that used to hide behind a session ID now lives in explicit tool-argument handles: the server mints an identifier like `basket_id` and returns it, and the model passes it back on later calls. State becomes visible in arguments instead of pinned to one instance.

### Are Roots, Sampling, and Logging removed immediately?

No. SEP-2577 marks Roots, Sampling, and Logging as deprecated but they keep working in this release and every version published within a year. Replace Roots with tool parameters or resource URIs, Sampling with a direct LLM provider call, and Logging with `stderr` or OpenTelemetry.

### Can stateful and stateless MCP servers coexist?

Yes. The release has breaking changes but supports version negotiation. New clients fall back to the `initialize` handshake when they reach a server on the 2025-11-25 revision or earlier, so old and new servers run side by side during the transition without a coordinated cutover.

### Which MCP SDK versions support the 2026-07-28 spec?

Beta SDKs for Python, TypeScript, Go, and C# all support the RC. The Python SDK moves to a v2 major rework (2.x), and the TypeScript SDK splits into new packages `@modelcontextprotocol/server` and `@modelcontextprotocol/client`. Pin to the v2 betas and test against the conformance suite.

### What do the six security SEPs change for OAuth flows?

They make MCP a formal OAuth 2.1 resource server aligned with OpenID Connect. Clients must validate the `iss` parameter per RFC 9207, declare an OIDC `application_type` at registration, bind credentials to the issuer, and handle refresh tokens, scope accumulation, and `.well-known` discovery precisely.
