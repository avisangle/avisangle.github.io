import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Claude Managed Agents vs Agent SDK: Which Should You Use?",
  description:
    "Anthropic launched Claude Managed Agents in beta. Here's how it compares to the Agent SDK, what it costs, and which one to pick for your workload.",
  keywords: [
    "Claude Managed Agents",
    "Claude Managed Agents vs Agent SDK",
    "Claude Managed Agents pricing",
    "Claude Managed Agents tutorial",
    "Claude Managed Agents beta",
    "Anthropic Managed Agents",
    "Claude Agent SDK",
    "Claude agent harness",
    "Claude agent sandbox",
    "how to use Claude Managed Agents",
    "claude managed agents python",
    "claude agent infrastructure",
    "anthropic hosted agents",
    "claude managed agents mcp",
    "claude long-running agents",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Claude Managed Agents vs Agent SDK: Which Should You Use?",
    description:
      "Anthropic launched Claude Managed Agents in beta. Here's how it compares to the Agent SDK, what it costs, and which one to pick for your workload.",
    url: "https://avinashsangle.com/blog/claude-managed-agents",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-04-09T00:00:00.000Z",
    modifiedTime: "2026-04-09T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-claude-managed-agents.png",
        width: 1200,
        height: 630,
        alt: "Claude Managed Agents vs Agent SDK - Which to Pick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Managed Agents vs Agent SDK: Which Should You Use?",
    description:
      "Anthropic launched Claude Managed Agents in beta. Here's how it compares to the Agent SDK and which one to pick for your workload.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-claude-managed-agents.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/claude-managed-agents",
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

// Pre-built JSON-LD schemas - static trusted content built at compile time
const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Claude Managed Agents vs Agent SDK: Which Should You Use?",
  description:
    "Anthropic launched Claude Managed Agents in beta. Here's how it compares to the Agent SDK, what it costs, and which one to pick for your workload.",
  image: "https://avinashsangle.com/og-claude-managed-agents.png",
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
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/claude-managed-agents",
  },
  keywords:
    "Claude Managed Agents, Claude Agent SDK, Anthropic, Claude beta, agent harness, MCP, AI agents",
  articleSection: "AI Development",
  wordCount: 2700,
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
      name: "Claude Managed Agents",
      item: "https://avinashsangle.com/blog/claude-managed-agents",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Claude Managed Agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude Managed Agents is a hosted service Anthropic launched in beta on April 8, 2026. It runs long-horizon Claude agents in Anthropic's infrastructure with built-in sandboxing, tool execution, web browsing, and persistent sessions, so developers don't need to build their own agent loop or runtime.",
      },
    },
    {
      "@type": "Question",
      name: "How much do Claude Managed Agents cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You pay standard Claude API token rates plus $0.08 per session-hour of active runtime. Web searches cost an extra $10 per 1,000 searches. Idle time does not count toward the session-hour charge, so short bursts of activity within a session are affordable.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Claude Managed Agents and the Agent SDK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Managed Agents is a hosted service where Anthropic runs the agent harness, sandbox, and runtime for you. The Claude Agent SDK is a library that exposes the same engine, letting you run agents in your own infrastructure. Managed Agents is for production; the SDK is for custom runtimes.",
      },
    },
    {
      "@type": "Question",
      name: "Is Claude Managed Agents in beta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Claude Managed Agents is currently in beta. All Managed Agents endpoints require the beta header managed-agents-2026-04-01, which the official Anthropic SDKs set automatically when you use the beta namespace. Features like multi-agent orchestration remain in limited research preview.",
      },
    },
    {
      "@type": "Question",
      name: "What tools do Claude Managed Agents have access to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Managed Agents run in secure containers with code execution, file system access, web browsing, and network access to MCP servers. You can connect third-party services through MCP servers, which opens up CRM, ticketing, and custom API integrations without adding tool execution logic yourself.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use MCP servers with Claude Managed Agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Connections to third-party services are handled through MCP servers. This means any MCP server you've built for Claude Desktop or Claude Code can be configured for a Managed Agent session, including custom tools for internal APIs and databases.",
      },
    },
    {
      "@type": "Question",
      name: "How long can a Claude Managed Agent session run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Managed Agent sessions are designed for long-horizon work and can run for multiple hours. Checkpointing lets agents pick up where they left off after an outage. This makes Managed Agents suitable for batch processing, research tasks, and workflows that would exceed single API request limits.",
      },
    },
    {
      "@type": "Question",
      name: "When should I use the Agent SDK instead of Managed Agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the Agent SDK when you need to run agents against local files, on private networks, with custom tool execution, or with predictable runtime costs. It's also the better choice for development and debugging since you control the runtime directly and can inspect everything.",
      },
    },
  ],
})

export default function ClaudeManagedAgentsPage() {
  return (
    <>
      {/* TechArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: techArticleSchema }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Claude Managed Agents" },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="section">
        <div className="container-project">
          <div>
            <p className="text-accent font-semibold mb-4">AI DEVELOPMENT</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Claude Managed Agents vs Agent SDK: Which Should You Use?
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Anthropic launched Claude Managed Agents in beta on April 8, 2026 - a hosted
              service that runs long-horizon Claude agents in their infrastructure. If
              you&apos;re choosing between Managed Agents and the Agent SDK, the short answer
              is: pick Managed Agents for multi-hour production workloads, pick the Agent SDK
              when you need full control over the runtime.
            </p>
            <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-8">
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Calendar" size="sm" /> April 9, 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Clock" size="sm" /> 12 min read
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Tag" size="sm" /> AI, Agents, Anthropic
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Managed Agents</Badge>
              <Badge variant="secondary">Agent SDK</Badge>
              <Badge variant="secondary">Anthropic</Badge>
              <Badge variant="secondary">MCP</Badge>
              <Badge variant="secondary">Beta</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="section-alt py-8">
        <div className="container-project">
          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Zap" size="sm" /> TL;DR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li><strong>Managed Agents</strong> = Anthropic runs the agent harness, sandbox, and runtime for you (hosted, beta)</li>
                <li><strong>Agent SDK</strong> = you run the same engine yourself, with full control over infrastructure</li>
                <li>Pricing: standard token rates + <strong>$0.08 per session-hour</strong> of active runtime + $10 per 1,000 web searches</li>
                <li>Early adopters: Notion, Rakuten, Asana - focused on long-running enterprise workflows</li>
                <li>Beta header required: <code>managed-agents-2026-04-01</code></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="container-project">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="List" size="sm" /> Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-6 space-y-2">
                <li><Link href="#what-are-managed-agents" className="text-accent hover:underline">What Are Claude Managed Agents?</Link></li>
                <li><Link href="#what-is-agent-sdk" className="text-accent hover:underline">What Is the Claude Agent SDK?</Link></li>
                <li><Link href="#decision-framework" className="text-accent hover:underline">Managed Agents vs Agent SDK: Decision Framework</Link></li>
                <li><Link href="#pricing" className="text-accent hover:underline">Claude Managed Agents Pricing Explained</Link></li>
                <li><Link href="#getting-started" className="text-accent hover:underline">Getting Started with Managed Agents</Link></li>
                <li><Link href="#sdk-use-cases" className="text-accent hover:underline">When to Use the Agent SDK Instead</Link></li>
                <li><Link href="#what-it-means" className="text-accent hover:underline">What This Means for AI Agent Infrastructure</Link></li>
                <li><Link href="#faq" className="text-accent hover:underline">Frequently Asked Questions</Link></li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section: What Are Managed Agents */}
      <section id="what-are-managed-agents" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">What Are Claude Managed Agents?</h2>

          <p className="text-lg leading-relaxed mb-6">
            Claude Managed Agents is a hosted service Anthropic launched on April 8, 2026 that
            runs long-horizon Claude agents in their infrastructure. Instead of building your own
            agent loop, tool execution layer, and sandbox, you get a fully managed environment
            where Claude can read files, run commands, browse the web, and execute code securely.
            Anthropic describes it on their{" "}
            <Link href="https://www.anthropic.com/engineering/managed-agents" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              engineering blog
            </Link>{" "}
            as &quot;decoupling the brain from the hands.&quot;
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The service provides secure sandboxed code execution, authentication, checkpointing,
            scoped permissions, and persistent long-running sessions. Agents can run for multiple
            hours on a single task. If a session crashes, checkpointing lets it resume where it
            left off. Connections to third-party services are handled through MCP servers, which
            is the same pattern Claude Code and Claude Desktop already use.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            According to{" "}
            <Link href="https://siliconangle.com/2026/04/08/anthropic-launches-claude-managed-agents-speed-ai-agent-development/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              SiliconANGLE&apos;s launch coverage
            </Link>,
            early adopters include Notion, Rakuten, and Asana. That lineup tells you the target
            audience: companies shipping agents to production, not hobbyists building weekend
            projects. The managed service model makes sense for long-running workflows where
            infrastructure setup would take longer than writing the agent logic.
          </p>

          <Card className="card-accent-left mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Info" size="sm" /> Beta Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Claude Managed Agents is in beta. All endpoints require the beta header{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-sm">managed-agents-2026-04-01</code>,
                which the official Anthropic SDKs set automatically when you use the beta namespace.
                Features like advanced memory tooling, multi-agent orchestration, and self-evaluation
                loops are in limited research preview.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section: What is Agent SDK */}
      <section id="what-is-agent-sdk" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">What Is the Claude Agent SDK?</h2>

          <p className="text-lg leading-relaxed mb-6">
            The Claude Agent SDK is the same engine that powers Managed Agents, exposed as a
            library you can run anywhere. It&apos;s the infrastructure behind Claude Code,
            packaged so you can point it at whatever problem you want. You get the agent loop,
            the built-in tools, context management, and tool execution - basically everything
            you&apos;d otherwise have to build from scratch.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The SDK is available in Python and TypeScript through the{" "}
            <Link href="https://github.com/anthropics/claude-agent-sdk-python" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              anthropics/claude-agent-sdk-python
            </Link>{" "}
            repository and its TypeScript counterpart. Unlike Managed Agents, the SDK runs in your
            infrastructure: your laptop, your VPS, your Kubernetes cluster, wherever. That means
            you control the runtime, the network boundary, and the cost model.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Think of it this way. Managed Agents is like renting a fully-equipped kitchen. The
            Agent SDK is like getting the industrial oven and the fryer delivered to your house -
            same equipment, but you set it up and pay the utility bill. Both cook the same food.
            The question is who handles the overhead.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I&apos;ve been using the SDK for a few smaller experiments and it&apos;s the right
            choice when you want tight feedback loops during development. Point it at a local
            directory, let it use tools, watch exactly what it does. For production workloads
            though, the operational cost of keeping that runtime healthy adds up fast.
          </p>
        </div>
      </section>

      {/* Section: Decision Framework */}
      <section id="decision-framework" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Managed Agents vs Agent SDK: Decision Framework</h2>

          <p className="text-lg leading-relaxed mb-6">
            Here&apos;s the comparison most posts skip. Both options use the same Claude models
            and same MCP pattern, but they solve different problems. Pick based on where the work
            runs and who owns the operational burden.
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 font-semibold">Factor</th>
                      <th className="text-left py-3 pr-4 font-semibold">Managed Agents</th>
                      <th className="text-left py-3 font-semibold">Agent SDK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Who runs it</td>
                      <td className="py-3 pr-4">Anthropic</td>
                      <td className="py-3">You</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Best for</td>
                      <td className="py-3 pr-4">Multi-hour production jobs</td>
                      <td className="py-3">Custom runtimes, local work</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Sandboxing</td>
                      <td className="py-3 pr-4">Built-in (managed)</td>
                      <td className="py-3">Your responsibility</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Checkpointing</td>
                      <td className="py-3 pr-4">Automatic</td>
                      <td className="py-3">DIY</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Pricing model</td>
                      <td className="py-3 pr-4">Tokens + $0.08/session-hour</td>
                      <td className="py-3">Tokens + your infra costs</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Network access</td>
                      <td className="py-3 pr-4">Public internet + MCP</td>
                      <td className="py-3">Whatever your host allows</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Local file access</td>
                      <td className="py-3 pr-4">No (sandboxed)</td>
                      <td className="py-3">Yes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Debugging</td>
                      <td className="py-3 pr-4">Via logs and traces</td>
                      <td className="py-3">Full runtime introspection</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">MCP server support</td>
                      <td className="py-3 pr-4">Yes</td>
                      <td className="py-3">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Pick Managed Agents when:</strong> you&apos;re shipping an agent to production,
            the work runs for more than a few minutes, you don&apos;t want to maintain sandboxing
            or checkpointing infrastructure, and your tools either live on the public internet or
            behind MCP servers you&apos;ve already deployed.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Pick the Agent SDK when:</strong> you need agents to touch local files or
            private networks, cost predictability matters more than operational convenience, you
            want full runtime introspection during development, or your workload doesn&apos;t
            justify the session-hour premium.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Hybrid approach:</strong> prototype with the Agent SDK for fast iteration, then
            ship the stable version through Managed Agents. Same MCP servers work on both, so the
            migration path is mostly configuration and pricing, not rewrites.
          </p>
        </div>
      </section>

      {/* Section: Pricing */}
      <section id="pricing" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Claude Managed Agents Pricing Explained</h2>

          <p className="text-lg leading-relaxed mb-6">
            The pricing model has three components. Standard Claude API token rates cover the
            model inference. On top of that, you pay $0.08 per session-hour of active runtime
            (measured in milliseconds, so idle time doesn&apos;t count). Web searches cost an
            extra $10 per 1,000 queries. Per{" "}
            <Link href="https://thenewstack.io/with-claude-managed-agents-anthropic-wants-to-run-your-ai-agents-for-you/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              The New Stack&apos;s analysis
            </Link>,
            this lines up with how other managed agent services price compute.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Here&apos;s a worked example. Say you run an agent that processes a support ticket
            backlog overnight. It reads 50 tickets, pulls context from your CRM via an MCP server,
            generates responses, and runs for 3 hours total with 30 minutes of idle time.
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 font-semibold">Cost Component</th>
                      <th className="text-left py-3 pr-4 font-semibold">Amount</th>
                      <th className="text-left py-3 font-semibold">Estimated Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Input tokens (context)</td>
                      <td className="py-3 pr-4">~500K tokens</td>
                      <td className="py-3">~$7.50 (Opus 4.6)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Output tokens (responses)</td>
                      <td className="py-3 pr-4">~150K tokens</td>
                      <td className="py-3">~$11.25 (Opus 4.6)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Active runtime</td>
                      <td className="py-3 pr-4">2.5 hours</td>
                      <td className="py-3">$0.20</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Web searches</td>
                      <td className="py-3 pr-4">~20 searches</td>
                      <td className="py-3">$0.20</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold">Total</td>
                      <td className="py-3 pr-4"></td>
                      <td className="py-3 font-semibold">~$19.15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed mb-6">
            The token cost dominates. The session-hour charge at $0.08/hour barely matters unless
            your agent runs idle for very long periods or you&apos;re spinning up hundreds of
            parallel sessions. For most single-task workloads, Managed Agents ends up costing
            roughly the same as calling the API directly, with the infrastructure included free.
            That&apos;s the pitch.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The web search premium ($10 per 1,000) is worth noting. If your agent does a lot of
            research work, it adds up quickly. For comparison, most direct search APIs charge
            $2 to $5 per 1,000 queries. Anthropic is bundling reliability and rate limit
            management into that price, but it&apos;s a line item to watch.
          </p>
        </div>
      </section>

      {/* Section: Getting Started */}
      <section id="getting-started" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Getting Started with Managed Agents</h2>

          <p className="text-lg leading-relaxed mb-6">
            The official Anthropic Python SDK handles the beta header automatically when you use
            the beta namespace. Here&apos;s the basic pattern for creating a Managed Agent session
            using the documented beta header approach. Keep in mind this is a beta API, so exact
            method names and parameters may shift before GA.
          </p>

          <CodeBlock language="bash" filename="terminal" code={`# Install the Anthropic Python SDK
pip install anthropic

# Set your API key
export ANTHROPIC_API_KEY=sk-ant-...`} />

          <p className="text-lg leading-relaxed mb-6 mt-6">
            With the SDK installed, you can call into the beta namespace. The beta header{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">managed-agents-2026-04-01</code>{" "}
            unlocks the Managed Agents endpoints. The exact shape of the session API is documented
            at{" "}
            <Link href="https://platform.claude.com/docs/en/managed-agents/overview" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              platform.claude.com/docs/en/managed-agents/overview
            </Link>.
          </p>

          <CodeBlock language="python" filename="managed_agent_example.py" code={`from anthropic import Anthropic

client = Anthropic()

# Create a managed agent session using the beta header.
# Check the official docs for the current session API shape.
response = client.beta.messages.create(
    model="claude-opus-4-6",
    max_tokens=4096,
    betas=["managed-agents-2026-04-01"],
    messages=[
        {
            "role": "user",
            "content": (
                "Read the support tickets in the CRM, summarize common "
                "issues from the last 7 days, and write a report."
            ),
        }
    ],
)

print(response.content[0].text)`} />

          <p className="text-lg leading-relaxed mb-6 mt-6">
            For MCP server integration, you configure connections at the session level. This is
            the same MCP pattern I use for{" "}
            <Link href="/projects/jenkins-mcp" className="text-accent hover:underline">
              my Jenkins MCP server
            </Link>{" "}
            and{" "}
            <Link href="/projects/method-crm-mcp" className="text-accent hover:underline">
              Method CRM integration
            </Link>{" "}
            with Claude Code. If you&apos;ve already built MCP servers, they plug into Managed
            Agents with minimal changes.
          </p>

          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Lightbulb" size="sm" /> Tip: Start with a Short Session
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                During development, cap the agent&apos;s max runtime and token budget. Beta APIs
                sometimes have edge cases around session cleanup, and a runaway agent in a
                managed sandbox will still cost you tokens even if nothing useful comes out of
                the session. Set limits before you trust the agent with a long-running job.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section: SDK Use Cases */}
      <section id="sdk-use-cases" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">When to Use the Agent SDK Instead</h2>

          <p className="text-lg leading-relaxed mb-6">
            The Agent SDK wins in four specific scenarios. These are the cases where Managed
            Agents either won&apos;t work or doesn&apos;t make economic sense.
          </p>

          <div className="space-y-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <CategoryIcon icon="FolderOpen" size="sm" /> Local file and network access
                </h3>
                <p className="text-muted-foreground">
                  Managed Agents run in sandboxed containers on Anthropic&apos;s infrastructure.
                  If your agent needs to read your local filesystem, hit private network services,
                  or touch a database that isn&apos;t exposed to the public internet, the SDK is
                  the only option. You run it on a machine that already has the access it needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <CategoryIcon icon="DollarSign" size="sm" /> Predictable cost control
                </h3>
                <p className="text-muted-foreground">
                  The session-hour charge is small but real. If you run thousands of agents a day
                  for short tasks, those charges add up. Running the SDK on your own infrastructure
                  means you pay for tokens plus fixed compute costs, which can be cheaper at scale.
                  Do the math on your workload shape before committing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <CategoryIcon icon="Bug" size="sm" /> Development and debugging
                </h3>
                <p className="text-muted-foreground">
                  When you&apos;re iterating on agent behavior, running the SDK locally gives you
                  full visibility. You can step through the tool execution, inspect context state,
                  and print anything. Managed Agents expose logs and traces, but that&apos;s a
                  slower feedback loop than watching your agent run in front of you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <CategoryIcon icon="Settings" size="sm" /> Custom tool execution
                </h3>
                <p className="text-muted-foreground">
                  Managed Agents come with a fixed set of built-in tools (code execution, web
                  search, file ops). If you need tool execution that doesn&apos;t fit that model -
                  custom GPU workloads, specialized runtime environments, or tools with unusual
                  security requirements - the SDK lets you wire in whatever you want.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            One scenario I want to call out specifically: if you&apos;re building on top of{" "}
            <Link href="/blog/claude-md-guide" className="text-accent hover:underline">
              Claude Code
            </Link>{" "}
            workflows where the agent needs to interact with your local development environment,
            the Agent SDK is the natural fit. Managed Agents can&apos;t see your local repo.
          </p>
        </div>
      </section>

      {/* Section: What This Means */}
      <section id="what-it-means" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">What This Means for AI Agent Infrastructure</h2>

          <p className="text-lg leading-relaxed mb-6">
            Managed Agents is Anthropic moving up the stack. Until now, if you wanted to ship a
            Claude-powered agent to production, you had to build a lot of plumbing: the agent
            loop, sandboxing, tool execution, checkpointing, failure recovery, scoped permissions.
            That&apos;s a few weeks of work even with the Agent SDK doing the heavy lifting.
            Managed Agents takes all of it off your plate.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            This is the same pattern as AWS Lambda versus running your own Node.js server. The
            managed version is a markup on raw compute, but it saves you from thinking about the
            parts that aren&apos;t your business. For most companies shipping agents, that tradeoff
            makes sense. Your differentiation is in the prompts, the tools, and the domain
            expertise, not in how you bolt together a sandbox.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The MCP integration story matters a lot here. If you&apos;ve already built MCP servers
            for Claude Code or Claude Desktop - like my{" "}
            <Link href="/projects/calculator-server" className="text-accent hover:underline">
              basic MCP server
            </Link>{" "}
            or{" "}
            <Link href="/projects/jenkins-mcp" className="text-accent hover:underline">
              Jenkins MCP
            </Link>{" "}
            - those plug into Managed Agents with almost no changes. The protocol stays the same,
            you just point the agent config at the MCP endpoint. That&apos;s the network effect
            Anthropic has been building toward with MCP from day one.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            What I&apos;m watching over the next few months: how the beta pricing evolves, whether
            multi-agent orchestration graduates from research preview, and how the session API
            stabilizes. Beta APIs change, and the current shape will almost certainly shift before
            GA. But the direction is clear. Agent infrastructure is becoming a commodity, and
            Anthropic wants to be the provider.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>What are Claude Managed Agents?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Claude Managed Agents is a hosted service Anthropic launched in beta on April
                  8, 2026. It runs long-horizon Claude agents in Anthropic&apos;s infrastructure
                  with built-in sandboxing, tool execution, web browsing, and persistent
                  sessions, so developers don&apos;t need to build their own agent loop or runtime.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger>How much do Claude Managed Agents cost?</AccordionTrigger>
              <AccordionContent>
                <p>
                  You pay standard Claude API token rates plus $0.08 per session-hour of active
                  runtime. Web searches cost an extra $10 per 1,000 searches. Idle time does not
                  count toward the session-hour charge, so short bursts of activity within a
                  session are affordable.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>What is the difference between Claude Managed Agents and the Agent SDK?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Managed Agents is a hosted service where Anthropic runs the agent harness,
                  sandbox, and runtime for you. The Claude Agent SDK is a library that exposes
                  the same engine, letting you run agents in your own infrastructure. Managed
                  Agents is for production; the SDK is for custom runtimes.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>Is Claude Managed Agents in beta?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, Claude Managed Agents is currently in beta. All Managed Agents endpoints
                  require the beta header <code className="bg-muted px-1 py-0.5 rounded text-sm">managed-agents-2026-04-01</code>,
                  which the official Anthropic SDKs set automatically when you use the beta
                  namespace. Features like multi-agent orchestration remain in limited research
                  preview.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger>What tools do Claude Managed Agents have access to?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Managed Agents run in secure containers with code execution, file system access,
                  web browsing, and network access to MCP servers. You can connect third-party
                  services through MCP servers, which opens up CRM, ticketing, and custom API
                  integrations without adding tool execution logic yourself.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6">
              <AccordionTrigger>Can I use MCP servers with Claude Managed Agents?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. Connections to third-party services are handled through MCP servers. This
                  means any MCP server you&apos;ve built for Claude Desktop or Claude Code can be
                  configured for a Managed Agent session, including custom tools for internal
                  APIs and databases.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7">
              <AccordionTrigger>How long can a Claude Managed Agent session run?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Managed Agent sessions are designed for long-horizon work and can run for
                  multiple hours. Checkpointing lets agents pick up where they left off after an
                  outage. This makes Managed Agents suitable for batch processing, research
                  tasks, and workflows that would exceed single API request limits.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8">
              <AccordionTrigger>When should I use the Agent SDK instead of Managed Agents?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Use the Agent SDK when you need to run agents against local files, on private
                  networks, with custom tool execution, or with predictable runtime costs.
                  It&apos;s also the better choice for development and debugging since you
                  control the runtime directly and can inspect everything.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section">
        <div className="container-project text-center">
          <h2 className="text-2xl font-bold mb-4">Build Your First Managed Agent</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start with the official docs and an MCP server you&apos;ve already built. If
            you&apos;re new to MCP, check out my calculator server project for the basic pattern.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="https://platform.claude.com/docs/en/managed-agents/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              <CategoryIcon icon="ExternalLink" size="sm" /> Official Docs
            </Link>
            <Link
              href="/projects/calculator-server"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors"
            >
              <CategoryIcon icon="Wrench" size="sm" /> MCP Server Example
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
