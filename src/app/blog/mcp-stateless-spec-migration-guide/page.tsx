import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "MCP Stateless Migration: 2026 Spec Guide",
  description:
    "The July 2026 MCP spec drops session handshakes entirely. Migrate your servers to the stateless core, new routing headers, and OAuth 2.1 auth.",
  keywords: [
    "MCP stateless migration",
    "MCP stateless spec",
    "MCP 2026-07-28 spec",
    "MCP breaking changes",
    "MCP Extensions framework",
    "MCP OAuth 2.1 authorization",
    "MCP session ID removed",
    "MCP initialize handshake removed",
    "MCP Apps",
    "MCP Tasks extension",
    "Roots Sampling Logging deprecation",
    "Model Context Protocol migration guide",
    "Mcp-Session-Id header deprecated",
    "MCP server migration 2026",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "MCP Goes Stateless: Migrating Your Servers to the 2026 Spec",
    description:
      "The 2026-07-28 MCP spec removes the initialize handshake and session IDs. A maintainer's guide to migrating servers: request diffs, new headers, deprecations, and OAuth 2.1.",
    url: "https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-07-23T00:00:00.000Z",
    modifiedTime: "2026-07-23T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-mcp-stateless-spec-migration-guide.png",
        width: 1200,
        height: 630,
        alt: "MCP Goes Stateless: Migrating Your Servers to the 2026 Spec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Goes Stateless: Migrating Your Servers to the 2026 Spec",
    description:
      "The 2026-07-28 MCP spec drops the initialize handshake and session IDs. A maintainer's migration guide: request diffs, routing headers, deprecations, OAuth 2.1.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-mcp-stateless-spec-migration-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "MCP Goes Stateless: Migrating Your Servers to the 2026 Spec",
  description:
    "The July 2026 MCP spec drops session handshakes entirely. Migrate your servers to the stateless core, new routing headers, and OAuth 2.1 auth.",
  image: "https://avinashsangle.com/og-mcp-stateless-spec-migration-guide.png",
  author: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
    jobTitle: "Claude Code & AI Automation Expert",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/avinashsangle",
      "https://x.com/avi_sangle",
      "https://github.com/avisangle",
    ],
    knowsAbout: [
      "Claude Code",
      "AI Automation",
      "Model Context Protocol",
      "DevOps",
      "Generative AI",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
  },
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide",
  },
  keywords:
    "MCP stateless migration, MCP 2026-07-28 spec, MCP breaking changes, MCP Extensions framework, MCP OAuth 2.1, Mcp-Session-Id removed, Roots Sampling Logging deprecation",
  articleSection: "AI Development",
  wordCount: 2800,
})

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://avinashsangle.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://avinashsangle.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MCP Stateless Spec Migration Guide",
      item: "https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide",
    },
  ],
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Migrate an MCP Server to the 2026-07-28 Stateless Spec",
  description:
    "Migrate an existing Model Context Protocol server to the stateless 2026-07-28 specification: remove session handshakes, add routing headers, and adopt OAuth 2.1.",
  totalTime: "PT45M",
  tool: [
    { "@type": "HowToTool", name: "MCP Python SDK v2 or TypeScript SDK v2" },
    { "@type": "HowToTool", name: "Existing MCP server" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upgrade the SDK",
      text: "Move to the MCP v2 SDKs that support the 2026-07-28 revision (Python mcp 2.x, TypeScript @modelcontextprotocol/server and @modelcontextprotocol/client).",
      url: "https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide#checklist",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Remove session state",
      text: "Drop reliance on the Mcp-Session-Id header and move any per-session state into explicit tool-argument handles the model passes back.",
      url: "https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide#capability-discovery",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Update routing",
      text: "Configure your proxy or load balancer to forward the Mcp-Method and Mcp-Name headers and drop sticky routing.",
      url: "https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide#transport",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Adopt OAuth 2.1 posture",
      text: "If you expose HTTP auth, align with the six authorization SEPs that make MCP an OAuth 2.1 resource server.",
      url: "https://avinashsangle.com/blog/mcp-stateless-spec-migration-guide#auth",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does \"MCP goes stateless\" actually mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 2026-07-28 MCP spec removes the initialize/initialized handshake and the Mcp-Session-Id header. Every request is now self-contained, so any server instance can handle it. Protocol version and capabilities travel in per-request _meta instead of being negotiated once at connection time.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to migrate my MCP server before July 28, 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not immediately. The release candidate locked May 21, 2026 and the final spec ships July 28. Older 2025-11-25 servers keep working through version negotiation, and deprecated features get a 12-month window. But new stateless clients expect the new contract, so plan the migration soon.",
      },
    },
    {
      "@type": "Question",
      name: "Is the MCP initialize handshake really gone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SEP-2575 removes the initialize/initialized handshake and SEP-2567 deletes the Mcp-Session-Id header. Capability negotiation did not disappear, though. It moved to per-request _meta plus a new server/discover method that clients call on demand to fetch the server's capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "What replaces the Mcp-Session-Id header?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nothing at the transport layer. State that used to hide behind a session ID now lives in explicit tool-argument handles: the server mints an identifier like basket_id and returns it, and the model passes it back on later calls. State becomes visible in arguments instead of pinned to one instance.",
      },
    },
    {
      "@type": "Question",
      name: "Are Roots, Sampling, and Logging removed immediately?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. SEP-2577 marks Roots, Sampling, and Logging as deprecated but they keep working in this release and every version published within a year. Replace Roots with tool parameters or resource URIs, Sampling with a direct LLM provider call, and Logging with stderr or OpenTelemetry.",
      },
    },
    {
      "@type": "Question",
      name: "Can stateful and stateless MCP servers coexist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The release has breaking changes but supports version negotiation. New clients fall back to the initialize handshake when they reach a server on the 2025-11-25 revision or earlier, so old and new servers run side by side during the transition without a coordinated cutover.",
      },
    },
    {
      "@type": "Question",
      name: "Which MCP SDK versions support the 2026-07-28 spec?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beta SDKs for Python, TypeScript, Go, and C# all support the RC. The Python SDK moves to a v2 major rework (2.x), and the TypeScript SDK splits into new packages @modelcontextprotocol/server and @modelcontextprotocol/client. Pin to the v2 betas and test against the conformance suite.",
      },
    },
    {
      "@type": "Question",
      name: "What do the six security SEPs change for OAuth flows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They make MCP a formal OAuth 2.1 resource server aligned with OpenID Connect. Clients must validate the iss parameter per RFC 9207, declare an OIDC application_type at registration, bind credentials to the issuer, and handle refresh tokens, scope accumulation, and .well-known discovery precisely.",
      },
    },
  ],
})

export default function McpStatelessSpecMigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: techArticleSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: howToSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />

      <div className="container-project py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "MCP Stateless Spec Migration Guide" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            MCP Goes Stateless: Migrating Your Servers to the 2026 Spec
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            The 2026-07-28 MCP spec makes the protocol stateless: it removes the{" "}
            <code>initialize</code>/<code>initialized</code> handshake and the{" "}
            <code>Mcp-Session-Id</code> header, so any server instance can handle
            any request. Existing servers keep working during a 12-month window,
            but transport, auth, and deprecated features all need attention.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> July 23, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-07-23</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Model Context Protocol", "MCP 2026-07-28", "Stateless", "Migration", "OAuth 2.1"].map(
              (tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              )
            )}
          </div>
        </header>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CategoryIcon icon="List" size="sm" />
              Table of Contents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav>
              <ol className="space-y-2">
                <li><a href="#what-changed" className="project-link">What &quot;MCP Goes Stateless&quot; Actually Means</a></li>
                <li><a href="#request-diff" className="project-link">Before and After: A Stateless Request Diff</a></li>
                <li><a href="#capability-discovery" className="project-link">How Clients Discover Capabilities Without initialize</a></li>
                <li><a href="#transport" className="project-link">Transport Changes: Streamable HTTP and the End of SSE</a></li>
                <li><a href="#extensions" className="project-link">The Extensions Framework: MCP Apps and Tasks</a></li>
                <li><a href="#deprecations" className="project-link">Deprecations: Roots, Sampling, and Logging</a></li>
                <li><a href="#auth" className="project-link">Authorization Hardening: Six SEPs and OAuth 2.1</a></li>
                <li><a href="#checklist" className="project-link">Your Migration Checklist</a></li>
                <li><a href="#faq" className="project-link">Frequently Asked Questions</a></li>
              </ol>
            </nav>
          </CardContent>
        </Card>

        {/* TL;DR */}
        <Card className="card-accent-left mb-12">
          <CardHeader>
            <CardTitle>TL;DR</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="skill-list">
              <li>
                Stateless core: no handshake, no session ID. Capabilities move to
                per-request <code>_meta</code> plus a new <code>server/discover</code>{" "}
                method (SEP-2575, SEP-2567).
              </li>
              <li>
                Streamable HTTP gains mandatory <code>Mcp-Method</code> and{" "}
                <code>Mcp-Name</code> headers so a plain load balancer can route.
                SSE streaming is replaced by Multi Round-Trip Requests (SEP-2243,
                SEP-2322).
              </li>
              <li>
                Roots, Sampling, and Logging enter a 12-month deprecation window.
                They still work today, so plan replacements rather than scramble
                (SEP-2577).
              </li>
              <li>
                Six authorization SEPs make MCP an OAuth 2.1 resource server. The
                v2 SDKs (Python 2.x, new TypeScript packages) ship betas now, and
                old servers coexist through version negotiation.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1 */}
        <section id="what-changed" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Network" size="md" />
            What &quot;MCP Goes Stateless&quot; Actually Means
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The short version: a Model Context Protocol server no longer holds a
            session for each client. In the old model, a client sent an{" "}
            <code>initialize</code> request, the server replied with an{" "}
            <code>Mcp-Session-Id</code>, and every subsequent request had to carry
            that ID, pinning the client to whichever instance issued it. That is
            gone. The{" "}
            <a href="https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/" target="_blank" rel="noopener noreferrer" className="project-link">official release candidate post</a>{" "}
            puts it plainly: in <code>2026-07-28</code>, the same call is a single
            self-contained request that any server instance can handle.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two SEPs (Specification Enhancement Proposals) do the work.{" "}
            <strong>SEP-2575</strong> removes the{" "}
            <code>initialize</code>/<code>initialized</code> handshake, and{" "}
            <strong>SEP-2567</strong> deletes protocol-level sessions and the{" "}
            <code>Mcp-Session-Id</code> header. The practical payoff is
            deployment. With no session store and no sticky routing to maintain,
            you can put a fleet of identical server instances behind a plain
            round-robin load balancer and stop worrying about which instance a
            client last talked to.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            This is the largest revision in the protocol&apos;s history. The RC
            locked on May 21, 2026, with the final specification shipping July 28
            after a 10-week validation window. MCP co-creator David Soria Parra
            summed the change up on X: the protocol is now stateless, with no
            handshake, no session id, and any request able to hit any server
            instance. If you maintain a server today, this is a breaking change
            you plan for, not one you can ignore.
          </p>

          <p className="text-lg leading-relaxed">
            Scale is why this matters beyond a handful of servers. MCP crossed
            roughly 97 million monthly SDK downloads as of March 2026 (secondary
            reporting from developer outlets, not the spec post itself), and
            Anthropic cited more than 10,000 public servers in production around
            the December 2025 Linux Foundation donation. An independent Nerq
            census in Q1 2026 indexed 17,468 servers across registries. A lot of
            code assumes the stateful contract, which is exactly why the spec ships
            a formal deprecation policy alongside the breaking changes.
          </p>
        </section>

        {/* Section 2 */}
        <section id="request-diff" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompare" size="md" />
            Before and After: A Stateless Request Diff
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The clearest way to see the change is to look at the wire. In the
            2025-11-25 flow, a client made two round trips before it could call a
            tool: one to <code>initialize</code>, then the real request carrying
            the session header the server handed back.
          </p>

          <CodeBlock
            language="http"
            filename="before-2025-11-25.http"
            code={`# 1) Handshake first
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
 "params":{"name":"get_invoice","arguments":{"id":"INV-42"}}}`}
          />

          <p className="text-lg leading-relaxed mb-6">
            In <code>2026-07-28</code>, that collapses into one self-contained
            request. Protocol version, client info, and capabilities ride in{" "}
            <code>_meta</code>, and two new HTTP headers let a proxy route the call
            without parsing the JSON body.
          </p>

          <CodeBlock
            language="http"
            filename="after-2026-07-28.http"
            code={`# One request, no handshake, no session id
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
 }}`}
          />

          <p className="text-lg leading-relaxed">
            The <code>Mcp-Method</code> and <code>Mcp-Name</code> headers come
            from <strong>SEP-2243</strong>, and the spec is strict about them:
            servers are required to reject requests where the headers and body
            disagree. That rule is what makes header-based routing safe. A gateway
            can dispatch on <code>Mcp-Method: tools/call</code> without trusting an
            attacker to keep the header and body consistent, because a mismatched
            request never reaches your handler.
          </p>
        </section>

        {/* Section 3 */}
        <section id="capability-discovery" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Compass" size="md" />
            How Clients Discover Capabilities Without initialize
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            A fair first question: if <code>initialize</code> is gone, how does a
            client learn what a server can do? Capability negotiation did not
            disappear. It moved from a front-loaded handshake to two places.
            Per-request <code>_meta</code> carries the protocol version and client
            info on every call, and a new <code>server/discover</code> method lets
            a client fetch the server&apos;s capability surface on demand instead of
            once at connection time.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The deeper shift is where state lives. The spec now endorses explicit
            state handles. Instead of hiding session state behind a transport
            header, the server mints an identifier and returns it as data, and the
            model passes it back as an argument on later calls. State becomes
            visible in the tool arguments, which is easier to reason about, log,
            and replay.
          </p>

          <CodeBlock
            language="json"
            filename="explicit-handle.json"
            code={`// First call: server creates a cart and returns a handle
// tools/call -> create_cart
{ "result": { "basket_id": "cart_9f2", "items": [] } }

// Later call: the model passes the handle back explicitly
// tools/call -> add_item
{
  "name": "add_item",
  "arguments": { "basket_id": "cart_9f2", "sku": "A-100", "qty": 2 }
}`}
          />

          <p className="text-lg leading-relaxed">
            When I look at my own servers through this lens, the change is mostly
            mechanical. My{" "}
            <Link href="/projects/jenkins-mcp" className="project-link">Jenkins MCP server</Link>{" "}
            and{" "}
            <Link href="/projects/method-crm-mcp" className="project-link">Method CRM MCP server</Link>{" "}
            already treat each tool call as a discrete action against an external
            system, so there was very little hidden session state to unwind. If
            your server stashes per-connection context in memory keyed by session
            ID, that is the part that needs to become an explicit handle before you
            move.
          </p>
        </section>

        {/* Section 4 */}
        <section id="transport" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Route" size="md" />
            Transport Changes: Streamable HTTP and the End of SSE
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Streamable HTTP takes the primary impact. Beyond dropping the session
            header, it gains the mandatory <code>Mcp-Method</code> and{" "}
            <code>Mcp-Name</code> headers (SEP-2243) so routing happens without
            body inspection. The result is the deployment win: your server sits
            behind a normal load balancer with no session store and no affinity
            rules. If you run behind Nginx, Envoy, or a cloud gateway, make sure
            that layer forwards both headers untouched.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The bigger rewrite is streaming. Server-Sent Events streams are
            replaced by <strong>Multi Round-Trip Requests</strong> (SEP-2322). When
            a server needs more input mid-operation, it returns an{" "}
            <code>InputRequiredResult</code> carrying <code>inputRequests</code> and
            a <code>requestState</code> token. The client answers by re-issuing the
            request with <code>inputResponses</code> that echo the same{" "}
            <code>requestState</code>. Server-initiated requests are only allowed
            while the server is processing a client request (SEP-2260), which keeps
            the model firmly stateless between turns.
          </p>

          <CodeBlock
            language="json"
            filename="multi-round-trip.json"
            code={`// Server needs a confirmation before proceeding
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
}`}
          />

          <p className="text-lg leading-relaxed">
            The stdio transport is largely unaffected by the session-header
            changes, since those are HTTP concerns. The one thing that touches
            stdio servers is the Logging deprecation, which steers them toward
            plain <code>stderr</code> (more on that next). Two smaller additions
            round out the transport work: <code>ttlMs</code> and{" "}
            <code>cacheScope</code> on list and read results for cacheability
            (SEP-2549), and W3C Trace Context propagated through <code>_meta</code>{" "}
            (SEP-414) so distributed tracing spans a whole tool chain.
          </p>
        </section>

        {/* Section 5 */}
        <section id="extensions" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Blocks" size="md" />
            The Extensions Framework: MCP Apps and Tasks
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The stateless core is deliberately small. Everything that used to bloat
            the base protocol now lives in the new Extensions framework
            (SEP-2133). Extensions use reverse-DNS identifiers, negotiate through an
            extensions map in client and server capabilities, live in their own{" "}
            <code>ext-*</code> repositories with delegated maintainers, and version
            independently of the core spec. That last part is the point: an
            extension can iterate without forcing a core revision, so the churn you
            just lived through should not repeat every year.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>MCP Apps (SEP-1865)</strong> are server-rendered interactive
            UIs. A server ships HTML that the host renders in a sandboxed iframe,
            and tools declare their UI templates ahead of time so the host can
            prefetch, cache, and security-review them before anything renders. The
            rendered UI talks back over the same JSON-RPC base protocol as a normal
            tool call, so you are not learning a second communication model.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>Tasks (SEP-2663)</strong> cover long-running operations. Tasks
            shipped experimentally in the 2025-11-25 core and are now redesigned as
            an extension. A server answers a <code>tools/call</code> with a task
            handle, and the client drives it through <code>tasks/get</code>,{" "}
            <code>tasks/update</code>, and <code>tasks/cancel</code>. Task creation
            is server-directed, and <code>tasks/list</code> was removed because the
            session-free design has no place to anchor a per-client list. This is
            the one migration the spec calls out by name: anyone who shipped against
            the experimental 2025-11-25 Tasks API must move to the new lifecycle.
          </p>
        </section>

        {/* Section 6 */}
        <section id="deprecations" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Archive" size="md" />
            Deprecations: Roots, Sampling, and Logging
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Three features enter a 12-month deprecation window under{" "}
            <strong>SEP-2577</strong>: Roots, Sampling, and Logging. This is the
            part to stay calm about. These are annotation-only deprecations.
            Nothing stops working in this release. The spec is explicit that the
            methods, types, and capability flags continue to work in this release
            and in every specification version published within a year of it. In
            practice that means these keep functioning until roughly mid-2027 at
            the earliest, and actual removal requires a separate SEP.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The lifecycle is Active, then Deprecated, then Removed, with a minimum
            of 12 months between stages. So you have a real runway. Here is what
            each deprecated feature maps to.
          </p>

          <Card className="card-accent-left mb-6">
            <CardHeader>
              <CardTitle>Replacement map</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li>
                  <strong>Roots</strong> becomes tool parameters, resource URIs, or
                  server configuration. Pass the working directory or scope as an
                  argument instead of a root.
                </li>
                <li>
                  <strong>Sampling</strong> becomes a direct call to your LLM
                  provider&apos;s API. If your server needed the model to generate
                  something, call the provider yourself rather than routing it back
                  through the client.
                </li>
                <li>
                  <strong>Logging</strong> becomes <code>stderr</code> for stdio
                  servers and OpenTelemetry for structured observability. This pairs
                  naturally with the new W3C Trace Context support.
                </li>
              </ul>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed">
            My advice: do not rush these replacements into the same change as your
            transport migration. Get the stateless core working first, ship it,
            then retire Roots, Sampling, and Logging on their own schedule inside
            the 12-month window. Bundling them turns one testable change into a big
            risky one.
          </p>
        </section>

        {/* Section 7 */}
        <section id="auth" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Lock" size="md" />
            Authorization Hardening: Six SEPs and OAuth 2.1
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The 2026-07-28 spec formalizes MCP as an OAuth 2.1 resource server, and
            six authorization SEPs align it with OAuth 2.0 and OpenID Connect. If
            you built HTTP auth for an MCP server before this, most of these are
            tightening rules you should already want.
          </p>

          <Card className="card-accent-left mb-6">
            <CardHeader>
              <CardTitle>The six authorization SEPs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li><strong>SEP-2468</strong> requires clients to validate the <code>iss</code> parameter per RFC 9207, mitigating authorization-server mix-up attacks.</li>
                <li><strong>SEP-837</strong> has clients declare an OIDC <code>application_type</code> during Dynamic Client Registration.</li>
                <li><strong>SEP-2352</strong> binds credentials to the issuer, so re-registration is required when resources migrate.</li>
                <li><strong>SEP-2207</strong> documents refresh-token requests from OIDC servers.</li>
                <li><strong>SEP-2350</strong> clarifies scope accumulation during step-up authorization.</li>
                <li><strong>SEP-2351</strong> clarifies the <code>.well-known</code> discovery suffix.</li>
              </ul>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed">
            The urgency is not purely spec-driven. In May 2026 the NSA published a
            17-page Cybersecurity Information Sheet,{" "}
            <a href="https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/" target="_blank" rel="noopener noreferrer" className="project-link">Model Context Protocol (MCP): Security Design Considerations for AI-Driven Automation</a>,
            warning that adoption has outpaced safeguards. It flags prompt and
            command injection, uncontrolled automated actions, and denial-of-service
            risk, and recommends filtering egress proxies, data-loss prevention,
            sandboxing, and output filtering. This is NSA guidance specifically, not
            a joint NSA and CISA document, so cite it that way. If you want a
            worked example of an MCP-adjacent auth failure and the fix, my writeup on
            the{" "}
            <Link href="/blog/litellm-mcp-exploit-response-guide" className="project-link">LiteLLM CVE-2026-42271 response</Link>{" "}
            walks through the same class of problem.
          </p>
        </section>

        {/* Section 8 */}
        <section id="checklist" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ListChecks" size="md" />
            Your Migration Checklist
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Here is the order I would migrate a production MCP server in. Do it as
            separate, testable steps rather than one large change.
          </p>

          <ol className="list-decimal ml-6 space-y-3 text-lg leading-relaxed mb-6">
            <li>
              <strong>Upgrade the SDK.</strong> Move to the v2 betas. Python is a
              v2 major rework (the <code>mcp</code> 2.x line), and TypeScript splits
              into new packages <code>@modelcontextprotocol/server</code> and{" "}
              <code>@modelcontextprotocol/client</code>. Go and C# betas exist too.
            </li>
            <li>
              <strong>Remove session state.</strong> Drop any reliance on{" "}
              <code>Mcp-Session-Id</code> and move per-session context into explicit
              tool-argument handles.
            </li>
            <li>
              <strong>Update routing.</strong> Configure your proxy or load balancer
              to forward <code>Mcp-Method</code> and <code>Mcp-Name</code>, and
              remove sticky-session rules.
            </li>
            <li>
              <strong>Rewrite streaming.</strong> Replace SSE streams with the Multi
              Round-Trip pattern using <code>InputRequiredResult</code> and{" "}
              <code>inputResponses</code>.
            </li>
            <li>
              <strong>Migrate Tasks.</strong> If you used the experimental
              2025-11-25 Tasks API, move to the new task-handle lifecycle.
            </li>
            <li>
              <strong>Plan the deprecations.</strong> Schedule Roots, Sampling, and
              Logging replacements inside the 12-month window. No rush.
            </li>
            <li>
              <strong>Harden auth.</strong> If you expose HTTP auth, adopt the OAuth
              2.1 resource-server posture from the six SEPs above.
            </li>
          </ol>

          <p className="text-lg leading-relaxed mb-6">
            One reassurance for the rollout: this release has breaking changes, but
            stateful and stateless servers coexist through version negotiation. New
            clients fall back to the <code>initialize</code> handshake when they
            reach a server on the 2025-11-25 revision or earlier. You do not need a
            coordinated big-bang cutover across every server and client at once. One
            caveat worth testing for: the Python v2 SDK passes the conformance suite
            except the tasks suite, because Tasks is now an extension rather than
            core.
          </p>

          <p className="text-lg leading-relaxed">
            I am running this migration across my own three MCP servers, the{" "}
            <Link href="/projects/jenkins-mcp" className="project-link">Jenkins MCP server</Link>,
            the{" "}
            <Link href="/projects/method-crm-mcp" className="project-link">Method CRM MCP server</Link>,
            and{" "}
            <Link href="/projects/wp-mcp" className="project-link">WordPress MCP</Link>. The
            servers that were already stateless in spirit, one tool call equals one
            action against an external API, are nearly free to move. The
            deployment simplification alone, dropping session stores and sticky
            routing, is worth the upgrade. For the conceptual background on how MCP
            tools compose, my{" "}
            <Link href="/blog/mcp-code-execution-pattern" className="project-link">MCP code execution pattern</Link>{" "}
            guide is a good companion read.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-it">
              <AccordionTrigger>What does &quot;MCP goes stateless&quot; actually mean?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The 2026-07-28 MCP spec removes the{" "}
                  <code>initialize</code>/<code>initialized</code> handshake and the{" "}
                  <code>Mcp-Session-Id</code> header. Every request is now
                  self-contained, so any server instance can handle it. Protocol
                  version and capabilities travel in per-request <code>_meta</code>{" "}
                  instead of being negotiated once at connection time.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="must-migrate">
              <AccordionTrigger>Do I have to migrate my MCP server before July 28, 2026?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Not immediately. The release candidate locked May 21, 2026 and the
                  final spec ships July 28. Older 2025-11-25 servers keep working
                  through version negotiation, and deprecated features get a 12-month
                  window. But new stateless clients expect the new contract, so plan
                  the migration soon.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="handshake-gone">
              <AccordionTrigger>Is the MCP initialize handshake really gone?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. SEP-2575 removes the{" "}
                  <code>initialize</code>/<code>initialized</code> handshake and
                  SEP-2567 deletes the <code>Mcp-Session-Id</code> header. Capability
                  negotiation did not disappear, though. It moved to per-request{" "}
                  <code>_meta</code> plus a new <code>server/discover</code> method
                  that clients call on demand to fetch the server&apos;s capabilities.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="session-replacement">
              <AccordionTrigger>What replaces the Mcp-Session-Id header?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Nothing at the transport layer. State that used to hide behind a
                  session ID now lives in explicit tool-argument handles: the server
                  mints an identifier like <code>basket_id</code> and returns it, and
                  the model passes it back on later calls. State becomes visible in
                  arguments instead of pinned to one instance.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="deprecations">
              <AccordionTrigger>Are Roots, Sampling, and Logging removed immediately?</AccordionTrigger>
              <AccordionContent>
                <p>
                  No. SEP-2577 marks Roots, Sampling, and Logging as deprecated but
                  they keep working in this release and every version published
                  within a year. Replace Roots with tool parameters or resource URIs,
                  Sampling with a direct LLM provider call, and Logging with{" "}
                  <code>stderr</code> or OpenTelemetry.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="coexist">
              <AccordionTrigger>Can stateful and stateless MCP servers coexist?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. The release has breaking changes but supports version
                  negotiation. New clients fall back to the{" "}
                  <code>initialize</code> handshake when they reach a server on the
                  2025-11-25 revision or earlier, so old and new servers run side by
                  side during the transition without a coordinated cutover.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sdk-versions">
              <AccordionTrigger>Which MCP SDK versions support the 2026-07-28 spec?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Beta SDKs for Python, TypeScript, Go, and C# all support the RC. The
                  Python SDK moves to a v2 major rework (2.x), and the TypeScript SDK
                  splits into new packages <code>@modelcontextprotocol/server</code>{" "}
                  and <code>@modelcontextprotocol/client</code>. Pin to the v2 betas
                  and test against the conformance suite.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security-seps">
              <AccordionTrigger>What do the six security SEPs change for OAuth flows?</AccordionTrigger>
              <AccordionContent>
                <p>
                  They make MCP a formal OAuth 2.1 resource server aligned with
                  OpenID Connect. Clients must validate the <code>iss</code>{" "}
                  parameter per RFC 9207, declare an OIDC{" "}
                  <code>application_type</code> at registration, bind credentials to
                  the issuer, and handle refresh tokens, scope accumulation, and{" "}
                  <code>.well-known</code> discovery precisely.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Boxes" size="md" />
                <CardTitle>MCP Code Execution Pattern: A Hands-On Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  How MCP tools compose when a model writes code to drive them. Good
                  conceptual background before you re-shape a server for the
                  stateless core.
                </p>
                <Link href="/blog/mcp-code-execution-pattern" className="project-link">
                  Read the guide
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="ShieldAlert" size="md" />
                <CardTitle>LiteLLM CVE-2026-42271: Fix the RCE Chain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  An MCP-adjacent auth failure and the response, a useful companion
                  to the OAuth 2.1 hardening the new spec now mandates.
                </p>
                <Link href="/blog/litellm-mcp-exploit-response-guide" className="project-link">
                  Read the guide
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
