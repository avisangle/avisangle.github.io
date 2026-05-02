import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "MCP Code Execution Pattern: A Hands-On Claude Code Guide",
  description:
    "Three MCP servers can eat 72% of a 200K context window. The MCP code execution pattern collapses 2,500 endpoints into roughly 1,000 tokens. Here is how.",
  keywords: [
    "mcp code execution pattern",
    "mcp tool token bloat",
    "cloudflare code mode mcp",
    "mcp server search execute",
    "claude code alwaysLoad mcp",
    "mcp dynamic toolsets vs code mode",
    "anthropic code execution mcp",
    "build mcp server code mode",
    "mcp progressive tool loading",
    "mcp tool description token cost",
    "claude code v2.1.121 alwaysLoad",
    "mcp compressor atlassian",
    "model context protocol token reduction",
    "claude code mcp configuration",
    "agent toolbelt token optimization",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "MCP Code Execution Pattern: A Hands-On Claude Code Guide",
    description:
      "Three MCP servers can eat 72% of a 200K context window. The MCP code execution pattern collapses 2,500 endpoints into roughly 1,000 tokens. Here is how.",
    url: "https://avinashsangle.com/blog/mcp-code-execution-pattern",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-05-03T00:00:00.000Z",
    modifiedTime: "2026-05-03T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-mcp-code-execution-pattern.png",
        width: 1200,
        height: 630,
        alt: "MCP Code Execution Pattern: A Hands-On Claude Code Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Code Execution Pattern: A Hands-On Claude Code Guide",
    description:
      "Two tools instead of two thousand. The MCP code execution pattern, side-by-side with dynamic toolsets and Tool Search, with a working Python build.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-mcp-code-execution-pattern.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/mcp-code-execution-pattern",
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
  headline: "MCP Code Execution Pattern: A Hands-On Claude Code Guide",
  description:
    "Three MCP servers can eat 72% of a 200K context window. The MCP code execution pattern collapses 2,500 endpoints into roughly 1,000 tokens. Here is how.",
  image: "https://avinashsangle.com/og-mcp-code-execution-pattern.png",
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
  datePublished: "2026-05-03",
  dateModified: "2026-05-03",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/mcp-code-execution-pattern",
  },
  keywords:
    "mcp code execution pattern, cloudflare code mode mcp, claude code alwaysLoad, mcp dynamic toolsets, mcp tool token bloat, model context protocol token reduction",
  articleSection: "Model Context Protocol",
  wordCount: 3000,
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
      name: "MCP Code Execution Pattern",
      item: "https://avinashsangle.com/blog/mcp-code-execution-pattern",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the MCP code execution pattern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MCP code execution pattern exposes a large API to an agent through two generic tools, search and execute, instead of registering one MCP tool per endpoint. The agent writes small programs that compose tool calls inside a sandboxed runtime. Anthropic and Cloudflare both ship implementations of the same idea.",
      },
    },
    {
      "@type": "Question",
      name: "How much can the MCP code execution pattern reduce token usage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cloudflare Code Mode collapses 2,500+ Cloudflare API endpoints from roughly 1.17 million tokens to about 1,000 tokens, a 99.9% reduction. Anthropic's Salesforce-to-Sheets demo shows 150,000 tokens of tool definitions reduced to 2,000, a 98.7% drop. Real workloads land between 95% and 99%.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between MCP code mode and dynamic toolsets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Code mode runs agent-written code against a typed API surface in a sandbox. Dynamic toolsets, the Speakeasy approach, expose meta tools that emit tool schemas on demand via embeddings, returning around 96% reduction without a sandbox. Code mode wins on the long tail; dynamic toolsets are simpler to operate.",
      },
    },
    {
      "@type": "Question",
      name: "How does Cloudflare's Code Mode MCP server work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cloudflare exposes the entire Cloudflare API through two tools: search filters the OpenAPI spec, execute runs JavaScript against a typed client inside an isolated Dynamic Worker sandbox. Cloudflare reports the pattern reduces a 1.17 million token enumeration to roughly 1,000 tokens of context.",
      },
    },
    {
      "@type": "Question",
      name: "When should I use the code execution pattern vs Tool Search?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use code execution when you control the server, the API has hundreds or thousands of endpoints, and workflows compose multiple calls. Use Tool Search (with alwaysLoad off) for third-party MCP servers you cannot modify. Claude Code triggers Tool Search automatically when tool descriptions cross 10% of context.",
      },
    },
    {
      "@type": "Question",
      name: "What is the alwaysLoad option in Claude Code v2.1.121?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "alwaysLoad is a per-server boolean in your MCP config. Setting it to true makes that server's tools skip Tool Search deferral and stay loaded immediately. Use it for small, high-frequency servers where a search round-trip costs more than the saved tokens. Set it on individual tools via _meta as well.",
      },
    },
    {
      "@type": "Question",
      name: "Can I build a code-mode MCP server in Python?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Use the official mcp Python SDK to register two tools, search and execute. search returns module and signature snippets from a typed api/ folder. execute parses the agent-written code with ast.parse and dispatches it to a real isolated runner like Firecracker, gVisor, or a Deno isolate. Do not run model code in-process.",
      },
    },
    {
      "@type": "Question",
      name: "Is the MCP code execution pattern safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only with real isolation. You are running model-generated code, so treat it the way you would treat user-uploaded code. Production deployments use Firecracker, gVisor, Cloudflare Workers, or Deno isolates with no network egress beyond the API surface. In-process runners are a footgun and have led to sandbox escapes in adjacent ecosystems.",
      },
    },
  ],
})

export default function McpCodeExecutionPatternPage() {
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
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />

      <div className="container-project py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "MCP Code Execution Pattern" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">Model Context Protocol</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            MCP Code Execution Pattern: A Hands-On Claude Code Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            The MCP code execution pattern exposes large APIs to an agent through
            two generic tools, <code>search</code> and <code>execute</code>,
            instead of one tool definition per endpoint. The agent writes code
            that composes calls; the model never sees thousands of tool schemas.
            Cloudflare shipped 2,500+ API endpoints in roughly 1,000 tokens this
            way. Here&apos;s how to apply it to your own servers.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> May 3, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-05-03</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Claude Code", "MCP", "Token Optimization", "Code Execution", "Agent Architecture"].map(
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
                <li><a href="#what-is-the-pattern" className="project-link">What Is the MCP Code Execution Pattern?</a></li>
                <li><a href="#token-bloat" className="project-link">The 143,000-Token Problem</a></li>
                <li><a href="#how-it-works" className="project-link">How the Pattern Works End-to-End</a></li>
                <li><a href="#compare-approaches" className="project-link">Code Mode vs Dynamic Toolsets vs Deferred Loading</a></li>
                <li><a href="#build-server" className="project-link">Build a Minimal Code-Mode MCP Server in Python</a></li>
                <li><a href="#claude-code-config" className="project-link">Configure Claude Code to Consume Code-Mode Servers</a></li>
                <li><a href="#tradeoffs" className="project-link">When the Code Execution Pattern Hurts You</a></li>
                <li><a href="#compose-stack" className="project-link">How This Composes With the Rest of Your MCP Stack</a></li>
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
                Three popular MCP servers can consume 143,000 of a 200,000-token
                context window before the agent reads its first user message,
                72% of working memory eaten by tool descriptions.
              </li>
              <li>
                The code execution pattern replaces one-tool-per-endpoint with
                two generic tools (<code>search</code> and <code>execute</code>)
                and a sandboxed runtime. Cloudflare reports 99.9% reduction;
                Anthropic&apos;s own demo shows 98.7%.
              </li>
              <li>
                Three live approaches: code execution (Anthropic, Cloudflare),
                dynamic toolsets (Speakeasy), deferred loading (Claude Code Tool
                Search plus the new <code>alwaysLoad</code> option in v2.1.121).
                Pick by API size and operational appetite.
              </li>
              <li>
                Production code-mode servers need real isolation. Firecracker,
                gVisor, Cloudflare Workers, or Deno isolates. Running model code
                in-process is unsafe. The Python SDK gives you the surface, not
                the sandbox.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1 */}
        <section id="what-is-the-pattern" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Boxes" size="md" />
            What Is the MCP Code Execution Pattern?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The MCP code execution pattern presents an MCP server as a code API
            on a filesystem. The agent gets a sandboxed runtime and two generic
            tools. The first, <code>search</code>, lets the agent find a
            function signature without loading every schema. The second,{" "}
            <code>execute</code>, runs a small program that calls those
            functions and returns the result. The model never sees thousands of
            tool descriptions, only the few it asked for on the turn it needs
            them.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Compare that with the classic MCP shape. A normal MCP server
            registers, say, 80 tools. Each comes with a JSON Schema, a
            description, and parameter docs. Claude Code or any MCP client loads
            all of that into the system prompt at session start. If you have
            three of those servers connected, you&apos;re paying that cost three
            times before any work happens.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Anthropic&apos;s engineering blog put it cleanly in their{" "}
            <a href="https://www.anthropic.com/engineering/code-execution-with-mcp" target="_blank" rel="noopener noreferrer" className="project-link">code execution with MCP</a>{" "}
            writeup: presenting tools as code on a filesystem allows models to
            read tool definitions on-demand, rather than reading them all
            up-front. Cloudflare&apos;s phrasing in the{" "}
            <a href="https://blog.cloudflare.com/code-mode-mcp/" target="_blank" rel="noopener noreferrer" className="project-link">Code Mode for MCP launch</a>{" "}
            is more direct: give agents an entire API in 1,000 tokens.
          </p>

          <p className="text-lg leading-relaxed">
            There are two roles in the pattern. The <em>server</em> needs to
            expose a discoverable code surface, usually an OpenAPI spec or a
            typed function library. The <em>client</em> needs a sandbox to run
            agent-written code in. Get either wrong and the pattern breaks.
            That&apos;s why most production examples come from companies with
            existing isolation infrastructure (Cloudflare Workers, Anthropic
            internal tooling) rather than from individual developers wiring it
            up the first time.
          </p>
        </section>

        {/* Section 2 */}
        <section id="token-bloat" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="AlertTriangle" size="md" />
            The 143,000-Token Problem
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The pattern exists because MCP tool bloat became the dominant cost
            in agent workflows during early 2026. The number that gets cited
            most: three popular MCP servers (GitHub, Playwright, an IDE bridge)
            can consume <strong>143,000 of a 200,000-token context window</strong>{" "}
            before the agent reads a single user message, per analysis in{" "}
            <a href="https://thenewstack.io/how-to-reduce-mcp-token-bloat/" target="_blank" rel="noopener noreferrer" className="project-link">The New Stack&apos;s 10 strategies to reduce MCP token bloat</a>{" "}
            (April 2026). That&apos;s 72% of working memory gone on tool
            descriptions that mostly never get called.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            A single large MCP server commonly costs 10,000-17,000 tokens in
            descriptions alone, per{" "}
            <a href="https://docs.bswen.com/blog/2026-04-24-mcp-token-overhead/" target="_blank" rel="noopener noreferrer" className="project-link">BSWEN&apos;s tool overhead diagnostic</a>{" "}
            (April 24, 2026). Multiply that by your average MCP client running
            three to seven servers and the math gets ugly fast.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The numbers from the four big writeups in the last two weeks:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Source</th>
                  <th className="py-3 pr-4 font-semibold">Workload</th>
                  <th className="py-3 pr-4 font-semibold">Before</th>
                  <th className="py-3 pr-4 font-semibold">After</th>
                  <th className="py-3 pr-4 font-semibold">Reduction</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">Cloudflare Code Mode</td>
                  <td className="py-3 pr-4">2,500+ API endpoints</td>
                  <td className="py-3 pr-4">~1.17M tokens</td>
                  <td className="py-3 pr-4">~1,000 tokens</td>
                  <td className="py-3 pr-4">99.9%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Anthropic Engineering</td>
                  <td className="py-3 pr-4">Salesforce to Sheets</td>
                  <td className="py-3 pr-4">150,000 tokens</td>
                  <td className="py-3 pr-4">2,000 tokens</td>
                  <td className="py-3 pr-4">98.7%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Speakeasy Dynamic Toolsets</td>
                  <td className="py-3 pr-4">400-tool server</td>
                  <td className="py-3 pr-4">~410,000 tokens</td>
                  <td className="py-3 pr-4">~8,000 tokens</td>
                  <td className="py-3 pr-4">96%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Atlassian mcp-compressor</td>
                  <td className="py-3 pr-4">Schema overhead per tool</td>
                  <td className="py-3 pr-4">Baseline</td>
                  <td className="py-3 pr-4">3-30%</td>
                  <td className="py-3 pr-4">70-97%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Claude Code Tool Search</td>
                  <td className="py-3 pr-4">7+ MCP servers</td>
                  <td className="py-3 pr-4">~51,000 tokens</td>
                  <td className="py-3 pr-4">~8,500 tokens</td>
                  <td className="py-3 pr-4">46.9%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed">
            These numbers measure different things. Tool Search defers loading
            on the client side without changing the server; dynamic toolsets
            replace static schemas with embedding-driven discovery; code mode
            replaces tool-per-endpoint entirely. They aren&apos;t in conflict,
            and the ceiling isn&apos;t the same. Code mode hits 99.9% because
            it eliminates per-tool description cost, not because it compresses
            them. Knowing which problem you&apos;re solving matters before you
            pick a fix.
          </p>
        </section>

        {/* Section 3 */}
        <section id="how-it-works" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Workflow" size="md" />
            How the Pattern Works End-to-End
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            A single agent turn under the code execution pattern looks like
            this. The user asks the agent to perform a multi-step task. The
            agent first calls <code>search(&quot;create r2 bucket&quot;)</code>
            {" "}against the server&apos;s typed surface. The server returns two
            or three candidate signatures plus minimal docs (a few hundred
            tokens). The agent reads those, then calls <code>execute(code)</code>
            {" "}with a short program that composes those signatures. The server
            runs the code in an isolated sandbox and returns the result.
            That&apos;s the whole shape.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The two-tool layout matters. <code>search</code> stays small (it
            returns text snippets, not schemas). <code>execute</code> takes
            arbitrary code as a string. The agent only sees the tool definitions
            it explicitly asked for, and only on the turn it needed them. By
            session end, total token cost on tool definitions usually lands
            under 5,000, regardless of how many endpoints the server actually
            exposes.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The sandbox shapes vary by implementation. Cloudflare uses Dynamic
            Workers (their existing Workers isolate, with no network egress
            outside the API surface). Anthropic&apos;s example treats the API
            as a filesystem of TypeScript files and runs in their internal
            runtime. The community implementation{" "}
            <a href="https://github.com/jx-codes/codemode-mcp" target="_blank" rel="noopener noreferrer" className="project-link">jx-codes/codemode-mcp</a>{" "}
            uses a Deno isolate. They&apos;re the same pattern with different
            sandboxes.
          </p>

          <p className="text-lg leading-relaxed">
            One detail that surprises people: the agent&apos;s code can call
            multiple endpoints in one <code>execute</code>. A typical
            &quot;create a DNS record, then a Worker route, then a R2 bucket&quot;
            workflow is one tool round trip with code mode versus three with
            classic MCP. That latency win is real on long tasks; the trade-off
            is worth knowing about (more on that below).
          </p>
        </section>

        {/* Section 4 */}
        <section id="compare-approaches" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompare" size="md" />
            Code Mode vs Dynamic Toolsets vs Deferred Loading
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Three approaches surfaced in the April 2026 debate. They solve the
            same root problem (tool descriptions are too expensive) at different
            layers of the stack.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Approach</th>
                  <th className="py-3 pr-4 font-semibold">Server-side</th>
                  <th className="py-3 pr-4 font-semibold">Client-side</th>
                  <th className="py-3 pr-4 font-semibold">Reduction</th>
                  <th className="py-3 pr-4 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 align-top"><strong>Code execution / Code Mode</strong></td>
                  <td className="py-3 pr-4 align-top">Sandbox plus <code>search</code> and <code>execute</code> tools.</td>
                  <td className="py-3 pr-4 align-top">Standard MCP client.</td>
                  <td className="py-3 pr-4 align-top">96-99.9%</td>
                  <td className="py-3 pr-4 align-top">Very large APIs (1,000+ endpoints), composable workflows.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 align-top"><strong>Dynamic toolsets</strong></td>
                  <td className="py-3 pr-4 align-top">Meta tools that emit schemas on demand via embeddings.</td>
                  <td className="py-3 pr-4 align-top">Standard MCP client.</td>
                  <td className="py-3 pr-4 align-top">90-96%</td>
                  <td className="py-3 pr-4 align-top">Mid-to-large servers without sandbox infrastructure.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 align-top"><strong>Deferred loading</strong></td>
                  <td className="py-3 pr-4 align-top">No changes required.</td>
                  <td className="py-3 pr-4 align-top">Claude Code defers tool definitions until query time.</td>
                  <td className="py-3 pr-4 align-top">30-50%</td>
                  <td className="py-3 pr-4 align-top">Third-party MCP servers you cannot modify.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Pick code execution when you control the server, the API is huge,
            and workflows compose multiple endpoints. Pick dynamic toolsets when
            your team can&apos;t operate a sandbox but you can index schemas
            with embeddings. Pick deferred loading when you&apos;re consuming
            third-party MCP servers you don&apos;t own. Claude Code does the
            last one for you automatically once tool descriptions cross 10% of
            context, no config required.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Speakeasy&apos;s{" "}
            <a href="https://www.speakeasy.com/blog/how-we-reduced-token-usage-by-100x-dynamic-toolsets-v2" target="_blank" rel="noopener noreferrer" className="project-link">counter-post</a>{" "}
            (&quot;you don&apos;t need code mode&quot;) makes a fair point: most
            servers don&apos;t need a sandbox to recover most of the savings.
            And earezki.com&apos;s{" "}
            <a href="https://earezki.com/ai-news/2026-04-27-code-mode-for-mcp-the-long-tail-escape-hatch-not-the-front-door/" target="_blank" rel="noopener noreferrer" className="project-link">analysis</a>{" "}
            calls code mode &quot;the long-tail escape hatch, not the front
            door,&quot; which I think is right. Reach for code execution when
            the API has thousands of endpoints or your workflows naturally chain
            calls. For mid-size APIs, dynamic toolsets get you 90% of the way
            with a tenth of the operational complexity.
          </p>
        </section>

        {/* Section 5 */}
        <section id="build-server" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Code" size="md" />
            Build a Minimal Code-Mode MCP Server in Python
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Here&apos;s a sketch of a code-mode MCP server using the official{" "}
            <code>mcp</code> Python SDK. This isn&apos;t production code, but
            it&apos;s honest about the security boundary, which is the part most
            tutorials skip. Install the SDK first:
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`pip install mcp`}
          />

          <p className="text-lg leading-relaxed my-6">
            Lay out the project so the typed API surface lives in its own
            folder. Each function in <code>api/</code> is what the agent will
            search against and call from inside <code>execute</code>:
          </p>

          <CodeBlock
            language="text"
            filename="myserver/"
            code={`myserver/
  server.py            # registers search + execute tools
  api/
    __init__.py
    list_users.py
    create_post.py
    update_post.py
  sandbox.py           # delegates to a real isolated runner`}
          />

          <p className="text-lg leading-relaxed my-6">
            A representative <code>api/list_users.py</code>:
          </p>

          <CodeBlock
            language="python"
            filename="myserver/api/list_users.py"
            code={`"""List users in the workspace.

Args:
    limit: Max users to return (1-100).
    role: Optional role filter ("admin", "member", "guest").

Returns: list[dict] with keys id, email, role.
"""
from typing import Optional

def list_users(limit: int = 50, role: Optional[str] = None) -> list[dict]:
    # Real implementation hits your backend here.
    ...`}
          />

          <p className="text-lg leading-relaxed my-6">
            The server registers two tools. <code>search</code> walks the{" "}
            <code>api/</code> folder and returns matching docstrings.{" "}
            <code>execute</code> ships the agent&apos;s source string to the
            sandbox:
          </p>

          <CodeBlock
            language="python"
            filename="myserver/server.py"
            code={`"""Code-mode MCP server: two tools, sandboxed runtime."""
import inspect
import importlib
import pkgutil
from mcp.server.fastmcp import FastMCP

from . import api
from .sandbox import dispatch

mcp = FastMCP("codemode-example")

def _iter_api_modules():
    for _, name, _ in pkgutil.iter_modules(api.__path__):
        yield name, importlib.import_module(f"{api.__name__}.{name}")

@mcp.tool()
def search(query: str, limit: int = 5) -> list[dict]:
    """Find candidate functions in the api/ folder by docstring match."""
    q = query.lower()
    hits = []
    for name, mod in _iter_api_modules():
        for fname, func in inspect.getmembers(mod, inspect.isfunction):
            doc = (func.__doc__ or "").lower()
            if q in fname.lower() or q in doc:
                sig = str(inspect.signature(func))
                hits.append({
                    "module": name,
                    "function": fname,
                    "signature": sig,
                    "doc": (func.__doc__ or "").strip().split("\\n\\n")[0],
                })
    return hits[:limit]

@mcp.tool()
def execute(code: str, timeout_s: int = 30) -> dict:
    """Run a small program against the api/ surface inside an isolated runner.

    The string is delegated to a real sandbox (Firecracker, gVisor, Workers,
    Deno isolate). Do not run it in-process.
    """
    return dispatch(code, allowed_modules=["api"], timeout_s=timeout_s)

if __name__ == "__main__":
    mcp.run()`}
          />

          <p className="text-lg leading-relaxed my-6">
            And the sandbox shim. This deliberately doesn&apos;t run code; it
            forwards the source to whatever isolated runner you operate. The
            comment block is the part you should read three times before
            shipping anything:
          </p>

          <CodeBlock
            language="python"
            filename="myserver/sandbox.py"
            code={`"""Sandbox dispatcher.

DO NOT REPLACE THIS WITH AN IN-PROCESS RUNNER.
You are about to run model-generated code. Treat it the way you would
treat code from an unauthenticated public form.

Production options:
  - Firecracker microVM (Lambda-style isolation)
  - gVisor containers (kernel syscall filtering)
  - Cloudflare Workers (V8 isolates with no host filesystem)
  - Deno isolate with --allow-net=api.example.com only
  - WASM runtime (Wasmtime, Wasmer) with no filesystem access

The dispatcher below is a stub; plug in the runner you actually trust.
"""
import ast

def dispatch(code: str, allowed_modules: list[str], timeout_s: int) -> dict:
    # Parse the source for syntax errors and a basic safety screen,
    # then ship it to your real sandbox over a controlled channel.
    tree = ast.parse(code)
    _reject_obvious_unsafe_imports(tree, allowed_modules)
    # Replace the next line with a call to your actual isolated runner.
    raise NotImplementedError(
        "Wire dispatch() to Firecracker, gVisor, Workers, or Deno."
    )

def _reject_obvious_unsafe_imports(tree: ast.AST, allowed: list[str]) -> None:
    for node in ast.walk(tree):
        if isinstance(node, (ast.Import, ast.ImportFrom)):
            mod = node.module if isinstance(node, ast.ImportFrom) else \\
                  node.names[0].name
            top = mod.split(".")[0] if mod else ""
            if top and top not in allowed:
                raise PermissionError(f"import {top!r} not in allowed list")`}
          />

          <p className="text-lg leading-relaxed my-6">
            That&apos;s the whole shape. Two tools, a typed folder, a sandbox
            stub. The reference implementation in{" "}
            <a href="https://github.com/jx-codes/codemode-mcp" target="_blank" rel="noopener noreferrer" className="project-link">jx-codes/codemode-mcp</a>{" "}
            wires the same idea to a Deno isolate if you want a working
            template. For my own MCP servers I&apos;ve mostly stayed in the
            classic shape so far, like the{" "}
            <Link href="/blog/method-crm-mcp" className="project-link">Method CRM MCP server</Link>
            ; code mode only earns its keep when the API is genuinely large.
          </p>
        </section>

        {/* Section 6 */}
        <section id="claude-code-config" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Settings" size="md" />
            Configure Claude Code to Consume Code-Mode Servers
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Claude Code v2.1.121 (April 28, 2026) shipped two MCP controls that
            matter here. Both go in <code>~/.claude/settings.json</code> or{" "}
            <code>.mcp.json</code>. The first is <code>alwaysLoad</code>, a
            per-server boolean that opts a server out of Tool Search deferral.
            The second is the <code>_meta</code> per-tool override that does the
            same thing tool-by-tool.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            For small MCP servers you call constantly (say, a 6-tool internal
            server with under 5,000 tokens of definitions), Tool Search adds a
            round trip without saving meaningful context. Mark them{" "}
            <code>alwaysLoad</code>:
          </p>

          <CodeBlock
            language="json"
            filename="~/.claude/settings.json"
            code={`{
  "mcpServers": {
    "core-tools": {
      "type": "http",
      "url": "https://mcp.example.com/mcp",
      "alwaysLoad": true
    }
  }
}`}
          />

          <p className="text-lg leading-relaxed my-6">
            For large code-mode servers (the entire Cloudflare API, GitHub&apos;s
            full API, or your own 2,000-endpoint internal platform), leave{" "}
            <code>alwaysLoad</code> unset. The two tools (<code>search</code>{" "}
            and <code>execute</code>) are tiny enough that Tool Search keeps
            them deferred until the agent actually needs to invoke something.
            The combination is what you want: small servers loaded eagerly, big
            servers loaded lazily.
          </p>

          <CodeBlock
            language="json"
            filename="~/.claude/settings.json"
            code={`{
  "mcpServers": {
    "core-tools": {
      "type": "http",
      "url": "https://mcp.example.com/mcp",
      "alwaysLoad": true
    },
    "platform-codemode": {
      "type": "http",
      "url": "https://platform.example.com/mcp"
    }
  }
}`}
          />

          <p className="text-lg leading-relaxed my-6">
            For per-tool granularity, an MCP server can mark individual tools
            always-loaded by including <code>&quot;anthropic/alwaysLoad&quot;: true</code>
            {" "}in the tool&apos;s <code>_meta</code> object on the server side.
            Verify either way with <code>claude mcp list</code> on the CLI or{" "}
            <code>/mcp</code> inside Claude Code. According to{" "}
            <a href="https://medium.com/@joe.njenga/claude-code-just-cut-mcp-context-bloat-by-46-9-51k-tokens-down-to-8-5k-with-new-tool-search-ddf9e905f734" target="_blank" rel="noopener noreferrer" className="project-link">Joe Njenga&apos;s benchmarks</a>{" "}
            on a 7-server setup, Tool Search alone takes the cost from 51,000
            tokens to 8,500 (46.9% reduction) before any code-mode server is
            even in the mix.
          </p>

          <p className="text-lg leading-relaxed">
            Tool Search auto-triggers when MCP tool descriptions cross 10% of
            context. Code-mode servers stay below that line by design. The two
            features compose naturally: code mode keeps your big server&apos;s
            description cost flat, Tool Search defers everything else until
            needed. Pin the Claude Code version using the same approach I
            covered in{" "}
            <Link href="/blog/regression-proofing-claude-code-workflows" className="project-link">Regression-Proof Claude Code Workflows</Link>
            {" "}so a future release doesn&apos;t silently change how{" "}
            <code>alwaysLoad</code> behaves.
          </p>
        </section>

        {/* Section 7 */}
        <section id="tradeoffs" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="AlertCircle" size="md" />
            When the Code Execution Pattern Hurts You
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Honesty section. The numbers are exciting, the operational reality
            isn&apos;t. Five things to plan for before you commit.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Sandbox isolation is a real engineering bill.</strong>{" "}
            You&apos;re running model-generated code. Treat it like
            user-uploaded code from an anonymous form. Production deployments
            need real isolation: Firecracker, gVisor, Workers, Deno isolates,
            or WASM runtimes. In-process runners are a footgun and have led to
            sandbox escapes in adjacent ecosystems. The threat model overlaps
            with prompt injection in CI, which I covered in{" "}
            <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">Hardening Claude Code GitHub Actions</Link>
            .
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Debugging gets opaque.</strong> When a classic tool call
            fails, you see the failed call name and arguments. When code
            execution fails, you get a stack trace from inside a sandbox running
            model-written code. Tracing requires more structured logging on the
            server side, ideally one log line per <code>api</code> call from
            inside <code>execute</code>. Plan for it; don&apos;t ship without
            it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Server complexity goes up.</strong> A classic MCP server is
            a list of functions. A code-mode server is a runtime, a sandbox, an
            OpenAPI ingest, a search index, and a security boundary you have to
            keep patched. The line of code count is small. The operational cost
            is not.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Latency floor.</strong> Two round trips per task (
            <code>search</code> then <code>execute</code>) versus one tool call.
            For long composable workflows the math wins because the agent does
            five things in one <code>execute</code>. For short, single-call
            tasks, it&apos;s slower than the classic shape. Measure your
            workload before deciding.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Auditability is harder.</strong> Code that composes five API
            calls in one <code>execute</code> looks like one tool invocation in
            your agent&apos;s top-level log. If you need granular per-call
            audit (compliance, cost attribution), instrument every{" "}
            <code>api</code> function from inside the sandbox and stream those
            events out separately. The agent log alone won&apos;t tell you what
            actually happened.
          </p>

          <p className="text-lg leading-relaxed">
            Code execution wins on token cost, loses on simplicity. Pick the
            trade based on your API surface area, not the headline percentage.
            For an internal API of 50 endpoints, dynamic toolsets or even just
            Tool Search will get you most of the way there with a fraction of
            the operational weight.
          </p>
        </section>

        {/* Section 8 */}
        <section id="compose-stack" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Layers" size="md" />
            How This Composes With the Rest of Your MCP Stack
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The pattern doesn&apos;t replace your existing MCP setup; it slots
            into it. Three integration points are worth knowing.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            First,{" "}
            <a href="https://www.atlassian.com/blog/developer/mcp-compression-preventing-tool-bloat-in-ai-agents" target="_blank" rel="noopener noreferrer" className="project-link">Atlassian&apos;s mcp-compressor</a>{" "}
            (70-97% schema reduction) sits upstream of any approach. If
            you&apos;re running legacy MCP servers you can&apos;t rewrite, drop
            mcp-compressor in front and it shrinks the descriptions before the
            client sees them. It stacks with code mode on the servers you do
            control.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Second, the MCP spec proposal{" "}
            <a href="https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1576" target="_blank" rel="noopener noreferrer" className="project-link">SEP-1576 (Mitigating Token Bloat in MCP)</a>{" "}
            is in active discussion. The protocol may move toward optional
            code-mode hints in a future major version. Worth tracking if
            you&apos;re building MCP servers today; the patterns you adopt now
            should still hold once the spec catches up.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Third, if you&apos;re running a mixed setup (one code-mode internal
            server plus 2-3 third-party MCP servers), the right Claude Code
            config is small servers <code>alwaysLoad: true</code>, code-mode
            server <code>alwaysLoad</code> unset, and Tool Search handling the
            rest automatically. Cost-track that setup with the JSONL pipeline
            from{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">Claude Code Cost Tracking</Link>
            {" "}so you can verify the savings actually land in your billing.
          </p>

          <p className="text-lg leading-relaxed">
            Code execution is one tool in the kit, not the kit. For my own MCP
            work, I still ship classic-shape servers like the{" "}
            <Link href="/projects/jenkins-mcp" className="project-link">Jenkins MCP</Link>{" "}
            and{" "}
            <Link href="/projects/wp-mcp" className="project-link">WordPress MCP</Link>{" "}
            because those APIs are small and the simplicity wins. I reach for
            code mode when the API surface is genuinely huge or workflows
            naturally chain calls. Pick the pattern your problem actually has.
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
              <AccordionTrigger>What is the MCP code execution pattern?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The MCP code execution pattern exposes a large API to an agent
                  through two generic tools, <code>search</code> and{" "}
                  <code>execute</code>, instead of registering one MCP tool per
                  endpoint. The agent writes small programs that compose tool
                  calls inside a sandboxed runtime. Anthropic and Cloudflare
                  both ship implementations of the same idea.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reduction">
              <AccordionTrigger>How much can the MCP code execution pattern reduce token usage?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Cloudflare Code Mode collapses 2,500+ Cloudflare API endpoints
                  from roughly 1.17 million tokens to about 1,000 tokens, a
                  99.9% reduction. Anthropic&apos;s Salesforce-to-Sheets demo
                  shows 150,000 tokens of tool definitions reduced to 2,000, a
                  98.7% drop. Real workloads typically land between 95% and 99%.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="code-mode-vs-dynamic">
              <AccordionTrigger>What is the difference between MCP code mode and dynamic toolsets?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Code mode runs agent-written code against a typed API surface
                  in a sandbox. Dynamic toolsets, the Speakeasy approach, expose
                  meta tools that emit tool schemas on demand via embeddings,
                  delivering around 96% reduction without a sandbox. Code mode
                  wins on the long tail; dynamic toolsets are simpler to operate.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cloudflare-code-mode">
              <AccordionTrigger>How does Cloudflare&apos;s Code Mode MCP server work?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Cloudflare exposes the entire Cloudflare API through two
                  tools: <code>search()</code> filters the OpenAPI spec, and{" "}
                  <code>execute()</code> runs JavaScript against a typed client
                  inside an isolated Dynamic Worker sandbox. Cloudflare reports
                  the pattern reduces a 1.17 million token enumeration to
                  roughly 1,000 tokens of context.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="when-vs-tool-search">
              <AccordionTrigger>When should I use the code execution pattern vs Tool Search?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Use code execution when you control the server, the API has
                  hundreds or thousands of endpoints, and workflows compose
                  multiple calls. Use Tool Search (with <code>alwaysLoad</code>
                  {" "}off) for third-party MCP servers you cannot modify. Claude
                  Code triggers Tool Search automatically when tool descriptions
                  cross 10% of context.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="alwaysLoad">
              <AccordionTrigger>What is the alwaysLoad option in Claude Code v2.1.121?</AccordionTrigger>
              <AccordionContent>
                <p>
                  <code>alwaysLoad</code> is a per-server boolean in your MCP
                  config. Setting it to <code>true</code> makes that server&apos;s
                  tools skip Tool Search deferral and stay loaded immediately.
                  Use it for small, high-frequency servers where a search round
                  trip costs more than the saved tokens. You can set it on
                  individual tools via <code>_meta</code> as well.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="python-build">
              <AccordionTrigger>Can I build a code-mode MCP server in Python?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. Use the official <code>mcp</code> Python SDK to register
                  two tools, <code>search</code> and <code>execute</code>.{" "}
                  <code>search</code> returns module and signature snippets from
                  a typed <code>api/</code> folder. <code>execute</code> parses
                  the agent-written code with <code>ast.parse</code> and
                  dispatches it to a real isolated runner like Firecracker,
                  gVisor, or a Deno isolate. Do not run model code in-process.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="safety">
              <AccordionTrigger>Is the MCP code execution pattern safe?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Only with real isolation. You are running model-generated
                  code, so treat it the way you would treat user-uploaded code.
                  Production deployments use Firecracker, gVisor, Cloudflare
                  Workers, or Deno isolates with no network egress beyond the
                  API surface. In-process runners are a footgun and have led to
                  sandbox escapes in adjacent ecosystems.
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
                <CategoryIcon icon="Building2" size="md" />
                <CardTitle>Complete Guide to Method CRM MCP Server</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A classic-shape MCP server. Useful contrast against the
                  code-mode pattern, and a working example of when one tool per
                  endpoint is exactly the right call.
                </p>
                <Link href="/blog/method-crm-mcp" className="project-link">
                  Read the guide
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="ShieldHalf" size="md" />
                <CardTitle>Regression-Proof Claude Code Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Pin Claude Code v2.1.121 so a future release doesn&apos;t
                  silently change how <code>alwaysLoad</code> or Tool Search
                  behave. Same playbook, applied to MCP-aware features.
                </p>
                <Link
                  href="/blog/regression-proofing-claude-code-workflows"
                  className="project-link"
                >
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
