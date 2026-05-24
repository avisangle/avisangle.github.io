import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gemini 3.5 Flash for Agentic Coding: A Claude Coder's Guide",
  description:
    "Gemini 3.5 Flash beats Gemini 3.1 Pro on agent benchmarks at $1.50/$9 per 1M tokens. When to route tasks from Claude Code to it, plus the thinking_level trap.",
  keywords: [
    "gemini 3.5 flash agentic coding",
    "gemini 3.5 flash vs claude code",
    "gemini 3.5 flash mcp agent",
    "gemini 3.5 flash thinking_level",
    "gemini 3.5 flash pricing",
    "gemini 3.5 flash python tutorial",
    "gemini 3.5 flash agent benchmarks",
    "is gemini 3.5 flash worth using",
    "gemini 3.5 flash terminal bench",
    "gemini 3.5 flash mcp atlas",
    "gemini 3.5 flash vs sonnet 4.6",
    "github copilot gemini 3.5 flash multiplier",
    "claude code openrouter gemini",
    "antigravity cli gemini 3.5 flash",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Gemini 3.5 Flash for Agentic Coding: A Claude Coder's Guide",
    description:
      "Gemini 3.5 Flash beats Gemini 3.1 Pro on agent benchmarks at $1.50/$9 per 1M tokens. When to route tasks from Claude Code to it, plus the thinking_level trap.",
    url: "https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-05-25T00:00:00.000Z",
    modifiedTime: "2026-05-25T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-gemini-3-5-flash-agentic-coding-guide.png",
        width: 1200,
        height: 630,
        alt: "Gemini 3.5 Flash for Agentic Coding - A Claude Coder's Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemini 3.5 Flash for Agentic Coding: A Claude Coder's Guide",
    description:
      "Gemini 3.5 Flash beats Gemini 3.1 Pro on agent benchmarks at $1.50/$9 per 1M tokens. When to route tasks from Claude Code to it, plus the thinking_level trap.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-gemini-3-5-flash-agentic-coding-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide",
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

// JSON-LD schemas - static trusted content built at compile time via JSON.stringify.
// No user input is interpolated; this is the standard Next.js pattern for structured data.
const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Gemini 3.5 Flash for Agentic Coding: A Claude Coder's Guide",
  description:
    "Gemini 3.5 Flash beats Gemini 3.1 Pro on agent benchmarks at $1.50/$9 per 1M tokens. When to route tasks from Claude Code to it, plus the thinking_level trap.",
  image: "https://avinashsangle.com/og-gemini-3-5-flash-agentic-coding-guide.png",
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
      "Gemini 3.5 Flash",
      "Model Context Protocol",
      "AI Automation",
      "DevOps",
      "Generative AI",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
  },
  datePublished: "2026-05-25",
  dateModified: "2026-05-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide",
  },
  keywords:
    "gemini 3.5 flash, agentic coding, mcp agent, claude code, thinking_level, gemini pricing, function calling, openrouter, antigravity, google ai",
  articleSection: "AI Development",
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
      name: "Gemini 3.5 Flash for Agentic Coding",
      item: "https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Gemini 3.5 Flash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gemini 3.5 Flash is Google's Flash-tier coding and agent model, generally available since May 19, 2026. It ships across the Gemini API, AI Studio, Antigravity CLI, Vertex AI, GitHub Copilot, and the Gemini app. It beats Gemini 3.1 Pro on 11 of 15 published agent benchmarks while pricing at $1.50 input and $9 output per 1M tokens.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Gemini 3.5 Flash cost per 1M tokens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gemini 3.5 Flash costs $1.50 per 1M input tokens, $9 per 1M output tokens, and $0.15 per 1M cached input tokens. That is 25 percent cheaper than Gemini 3.1 Pro, but 3x the price of the Gemini 3 Flash Preview it replaces and 6x the price of Gemini 3.1 Flash-Lite.",
      },
    },
    {
      "@type": "Question",
      name: "Is Gemini 3.5 Flash better than Gemini 3.1 Pro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On agent benchmarks, yes. Gemini 3.5 Flash beats Gemini 3.1 Pro on Terminal-Bench 2.1 (76.2 vs 70.3), MCP Atlas (83.6 vs 78.2), and GDPval-AA Elo (1656 vs 1314). It regresses on 128k-token retrieval by 7.6 points and ARC-AGI-2 by 5 points, so long-context or pure reasoning work still wants Pro.",
      },
    },
    {
      "@type": "Question",
      name: "How does Gemini 3.5 Flash compare to Claude Code for coding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flash leads MCP tool orchestration at 83.6 percent MCP Atlas, beating Claude Opus 4.7 by 4.5 points. Claude Sonnet 4.6 still leads production code editing on SWE-Bench Verified and is the default model in Claude Code. The practical answer is to route: Claude Code for repository edits, Gemini 3.5 Flash for tool-heavy agent loops.",
      },
    },
    {
      "@type": "Question",
      name: "What is the thinking_level default in Gemini 3.5 Flash and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google replaced the integer thinking_budget with a string enum thinking_level and dropped the default from high to medium. Copy-pasting code from gemini-3-flash-preview silently produces worse outputs. For agentic coding with MCP tools, set thinking_level to low. For hard reasoning, set it to high. The four values are minimal, low, medium, and high.",
      },
    },
    {
      "@type": "Question",
      name: "Can Gemini 3.5 Flash call MCP tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Google GenAI SDK has built-in MCP support that auto-executes tool calls and feeds responses back in a loop until the agent finishes. Gemini 3.5 Flash scored 83.6 percent on MCP Atlas, the benchmark that measures multi-step tool-call reliability. It is currently the strongest published score among major frontier models on that benchmark.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Gemini 3.5 Flash 3x more expensive than Gemini 3 Flash Preview?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google retuned Flash to handle frontier-grade agent loops and is pricing it accordingly. Simon Willison observed all three major labs probing API price tolerance at the same time. Artificial Analysis reported their benchmark suite cost $1,551.60 on Gemini 3.5 Flash versus $892.28 on Gemini 3.1 Pro. Cheaper per token, more expensive per workload.",
      },
    },
    {
      "@type": "Question",
      name: "What is the GitHub Copilot premium multiplier for Gemini 3.5 Flash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GitHub Copilot launched Gemini 3.5 Flash with a 14x premium-request multiplier across Copilot Pro, Pro Plus, Business, and Enterprise plans. A 300-request monthly quota becomes about 21 Gemini 3.5 Flash calls before overage. For most Claude Code users, calling the raw API through OpenRouter or AI Studio is cheaper than burning Copilot quota.",
      },
    },
    {
      "@type": "Question",
      name: "Should I switch from Claude Code to Gemini 3.5 Flash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not as a wholesale swap. Claude Code with Sonnet 4.6 is still the strongest tool for production repository edits and long-context refactors. Gemini 3.5 Flash is the right routing target for MCP-heavy agent loops, parallel sub-agent fan-out, and cheap intermediate planning steps. The high-leverage move is a hybrid stack, not a switch.",
      },
    },
    {
      "@type": "Question",
      name: "How do I call Gemini 3.5 Flash from a Python script?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Install the google-genai SDK, set GEMINI_API_KEY, and call client.models.generate_content with model gemini-3.5-flash. Set thinking_level explicitly via ThinkingConfig. Drop temperature, top_p, and top_k from your config, since they are no longer recommended controls. For MCP, pass the session object into the tools list and the SDK loops automatically.",
      },
    },
  ],
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Build an MCP Agent with Gemini 3.5 Flash",
  description:
    "Step-by-step guide to building a working MCP agent in Python using Gemini 3.5 Flash. Covers SDK install, thinking_level configuration, tool registration, and the auto-executed agent loop.",
  totalTime: "PT20M",
  tool: [
    { "@type": "HowToTool", name: "Python 3.10+" },
    { "@type": "HowToTool", name: "google-genai SDK" },
    { "@type": "HowToTool", name: "MCP Python SDK" },
  ],
  supply: [
    { "@type": "HowToSupply", name: "Gemini API key from AI Studio" },
    { "@type": "HowToSupply", name: "An MCP server (local or stdio)" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Install the SDKs",
      text: "Install google-genai and the MCP Python SDK with pip. Export GEMINI_API_KEY in your shell.",
      url: "https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide#build-an-mcp-agent",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Connect to an MCP server",
      text: "Use stdio_client to launch your MCP server process and create a ClientSession. Call session.initialize() to handshake.",
      url: "https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide#build-an-mcp-agent",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Configure thinking_level explicitly",
      text: "Set thinking_level to low for agent loops. This matches Google's retuned profile for tool-calling workloads.",
      url: "https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide#thinking-level-trap",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Pass the MCP session into tools",
      text: "Hand the ClientSession to GenerateContentConfig.tools. The SDK auto-executes each MCP tool call and continues the agent loop until done.",
      url: "https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide#build-an-mcp-agent",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Run and inspect token usage",
      text: "Inspect response.usage_metadata for ThoughtsTokenCount. Thinking tokens persist across turns and can inflate input costs 30-50 percent on long agent loops.",
      url: "https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide#build-an-mcp-agent",
    },
  ],
})

export default function Gemini35FlashAgenticCodingGuidePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: howToSchema }}
      />

      <div className="container-project py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Gemini 3.5 Flash for Agentic Coding" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Gemini 3.5 Flash for Agentic Coding: A Claude Coder&apos;s Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Gemini 3.5 Flash is Google&apos;s new Flash-tier coding model,
            generally available since May 19, 2026. It scores 76.2% on
            Terminal-Bench 2.1 and 83.6% on MCP Atlas, beating Gemini 3.1 Pro
            on 11 of 15 benchmarks. Pricing is $1.50 input and $9 output per 1M
            tokens. For{" "}
            <Link href="/blog/claude-md-guide" className="project-link">
              Claude Code
            </Link>{" "}
            users, it&apos;s the right model for tool-heavy agent loops, not a
            replacement for production code edits.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> May 25, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-05-25</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              "Gemini 3.5 Flash",
              "Agentic Coding",
              "MCP",
              "Claude Code",
              "Google AI",
              "Cost Optimization",
            ].map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
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
                <li>
                  <a href="#what-is-gemini-35-flash" className="project-link">
                    What is Gemini 3.5 Flash and What Changed on May 19, 2026
                  </a>
                </li>
                <li>
                  <a href="#benchmarks" className="project-link">
                    Gemini 3.5 Flash Benchmarks: Where It Beats Gemini 3.1 Pro
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="project-link">
                    Gemini 3.5 Flash Pricing: Cheap per Token, Expensive per Task
                  </a>
                </li>
                <li>
                  <a href="#thinking-level-trap" className="project-link">
                    The thinking_level Default Trap That Breaks Copy-Pasted Code
                  </a>
                </li>
                <li>
                  <a href="#vs-claude-code" className="project-link">
                    Gemini 3.5 Flash vs Claude Code (Sonnet 4.6, Opus 4.7) for Coding
                  </a>
                </li>
                <li>
                  <a href="#routing-playbook" className="project-link">
                    When to Route Tasks from Claude Code to Gemini 3.5 Flash
                  </a>
                </li>
                <li>
                  <a href="#build-an-mcp-agent" className="project-link">
                    Build an MCP Agent with Gemini 3.5 Flash in 40 Lines of Python
                  </a>
                </li>
                <li>
                  <a href="#surfaces" className="project-link">
                    Gemini 3.5 Flash in Antigravity, GitHub Copilot, and the Raw API
                  </a>
                </li>
                <li>
                  <a href="#limitations" className="project-link">
                    Limitations and Gotchas
                  </a>
                </li>
                <li>
                  <a href="#faq" className="project-link">
                    Frequently Asked Questions
                  </a>
                </li>
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
                <strong>What it is:</strong> Gemini 3.5 Flash (GA May 19, 2026)
                is a Flash-tier model that outperforms Gemini 3.1 Pro on
                agentic benchmarks while costing 25% less per token than the
                Pro tier.
              </li>
              <li>
                <strong>Pricing reality:</strong> $1.50/$9 per 1M tokens looks
                cheap, but it&apos;s 3x the price of Gemini 3 Flash Preview
                and runs about 5.5x more expensive per full benchmark suite
                according to Artificial Analysis.
              </li>
              <li>
                <strong>The thinking_level trap:</strong> the default dropped
                from <code>high</code> to <code>medium</code>. Copy-pasted
                code from <code>gemini-3-flash-preview</code> silently
                produces dumber outputs. For agentic coding, set{" "}
                <code>thinking_level: &quot;low&quot;</code> explicitly.
              </li>
              <li>
                <strong>Where Flash wins:</strong> MCP tool orchestration
                (83.6% MCP Atlas, beats Claude Opus 4.7 by 4.5 points),
                parallel function calling, fast iterative agent loops.
              </li>
              <li>
                <strong>Where Claude Code still wins:</strong> production
                codebase editing (Sonnet 4.6 leads SWE-Bench Verified),
                defensive code, long-context retrieval past 128k tokens.
              </li>
              <li>
                <strong>Routing rule:</strong> keep Claude Code for{" "}
                <code>Edit</code> and <code>Write</code> tasks; route
                MCP-heavy planning and tool fan-out to Gemini 3.5 Flash via
                OpenRouter or a thin custom MCP server.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1: What is it */}
        <section id="what-is-gemini-35-flash" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Zap" size="md" />
            What is Gemini 3.5 Flash and What Changed on May 19, 2026
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Gemini 3.5 Flash is a Flash-tier Gemini model that Google
            announced at I/O 2026 and shipped straight to GA on the same day.
            It is the first Flash-tier model to outperform the previous Pro
            tier on real agentic coding benchmarks. The launch lives on the{" "}
            <a
              href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              official Google blog
            </a>{" "}
            and the technical details on the{" "}
            <a
              href="https://deepmind.google/models/model-cards/gemini-3-5-flash/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Google DeepMind model card
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The model is available on the Gemini API, AI Studio, Antigravity
            CLI (the successor to Gemini CLI), Vertex AI, the Gemini app, AI
            Mode in Search, and now GitHub Copilot per the{" "}
            <a
              href="https://github.blog/changelog/2026-05-19-gemini-3-5-flash-is-generally-available-for-github-copilot/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              May 19 changelog
            </a>
            . The context window is 1,048,576 input tokens with a 65,536
            output cap.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Why this matters for a Claude Code user: the cheap model is now
            smart enough to handle production agent loops. That changes
            routing math, not loyalty. If you already run Sonnet 4.6 or Opus
            4.7 inside Claude Code, you don&apos;t throw the stack away. You
            ask which subtasks now belong on a cheaper, faster Gemini call.
            The rest of this guide walks through how to make that call with
            real numbers.
          </p>
        </section>

        {/* Section 2: Benchmarks */}
        <section id="benchmarks" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="BarChart3" size="md" />
            Gemini 3.5 Flash Benchmarks: Where It Beats Gemini 3.1 Pro
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Gemini 3.5 Flash wins 11 of 15 published benchmarks against
            Gemini 3.1 Pro, including the ones that matter most for agentic
            coding. The headline numbers from the{" "}
            <a
              href="https://deepmind.google/models/model-cards/gemini-3-5-flash/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Google DeepMind model card
            </a>{" "}
            and the{" "}
            <a
              href="https://wavespeed.ai/blog/posts/gemini-3-5-flash-shipped-leads-agent-benchmarks/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              WaveSpeed roundup
            </a>{" "}
            are below.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Benchmark</th>
                  <th className="py-3 pr-4">Gemini 3.5 Flash</th>
                  <th className="py-3 pr-4">Gemini 3.1 Pro</th>
                  <th className="py-3 pr-4">Claude Opus 4.7</th>
                  <th className="py-3">GPT-5.5</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Terminal-Bench 2.1</td>
                  <td className="py-3 pr-4">76.2%</td>
                  <td className="py-3 pr-4">70.3%</td>
                  <td className="py-3 pr-4">n/a</td>
                  <td className="py-3">78.2%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">MCP Atlas</td>
                  <td className="py-3 pr-4">83.6%</td>
                  <td className="py-3 pr-4">78.2%</td>
                  <td className="py-3 pr-4">79.1%</td>
                  <td className="py-3">75.3%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">GDPval-AA (Elo)</td>
                  <td className="py-3 pr-4">1656</td>
                  <td className="py-3 pr-4">1314</td>
                  <td className="py-3 pr-4">n/a</td>
                  <td className="py-3">1769</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">SWE-Bench Pro</td>
                  <td className="py-3 pr-4">55.1%</td>
                  <td className="py-3 pr-4">n/a</td>
                  <td className="py-3 pr-4">64.3%</td>
                  <td className="py-3">n/a</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">ARC-AGI-2</td>
                  <td className="py-3 pr-4">72.1%</td>
                  <td className="py-3 pr-4">~77%</td>
                  <td className="py-3 pr-4">n/a</td>
                  <td className="py-3">84.6%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-foreground">128k retrieval</td>
                  <td className="py-3 pr-4">regressed (-7.6 pts vs 3.1 Pro)</td>
                  <td className="py-3 pr-4">baseline</td>
                  <td className="py-3 pr-4">strong</td>
                  <td className="py-3">strong</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The single most important number on that table for Claude Code
            users is the 83.6% MCP Atlas score. MCP Atlas measures how
            reliably a model chains multi-step tool calls without stalling on
            a malformed or out-of-order call. For anyone running an MCP-heavy
            stack, that score predicts task-completion rate more directly
            than SWE-bench does. The current Flash score beats Claude Opus
            4.7 by 4.5 points and GPT-5.5 by 8.3 points.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The honest other side: Gemini 3.5 Flash regresses 7.6 points on
            128k-token retrieval versus Gemini 3.1 Pro, and gives up 5 points
            on ARC-AGI-2 versus the prior Pro tier (12.5 points to GPT-5.5).
            If you have a million-token context refactor, or a problem that
            looks like ARC-style abstract reasoning, Flash is the wrong
            answer.{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              Claude Code with Sonnet 4.6
            </Link>{" "}
            or Gemini 3.1 Pro is a better fit for those workloads today.
          </p>
        </section>

        {/* Section 3: Pricing */}
        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="DollarSign" size="md" />
            Gemini 3.5 Flash Pricing: Cheap per Token, Expensive per Task
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Gemini 3.5 Flash is $1.50 per 1M input tokens, $9 per 1M output
            tokens, and $0.15 per 1M cached input tokens (see{" "}
            <a
              href="https://openrouter.ai/google/gemini-3.5-flash"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              OpenRouter
            </a>{" "}
            for live pricing). On its face the Flash tier looks cheap. Per
            task it is not.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Simon Willison&apos;s{" "}
            <a
              href="https://simonwillison.net/2026/May/19/gemini-35-flash/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              May 19, 2026 analysis
            </a>{" "}
            cites Artificial Analysis benchmark-suite costs: running their
            full evaluation cost $1,551.60 on Gemini 3.5 Flash versus $892.28
            on Gemini 3.1 Pro. Cheaper per token, more expensive per
            workload, because thinking tokens persist across turns and agent
            loops chew more output tokens. NxCode reports a similar
            multiplier on their own eval workload:{" "}
            <a
              href="https://www.nxcode.io/resources/news/gemini-3-5-flash-developer-guide-agentic-coding-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              roughly 9x the cost of gemini-3-flash on equivalent jobs ($1,552 vs $278)
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The pricing comparison that matters for routing:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Model</th>
                  <th className="py-3 pr-4">Input ($/1M)</th>
                  <th className="py-3 pr-4">Output ($/1M)</th>
                  <th className="py-3">Cached input ($/1M)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Gemini 3.5 Flash</td>
                  <td className="py-3 pr-4">$1.50</td>
                  <td className="py-3 pr-4">$9.00</td>
                  <td className="py-3">$0.15</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Gemini 3.1 Pro</td>
                  <td className="py-3 pr-4">$2.50</td>
                  <td className="py-3 pr-4">$15.00</td>
                  <td className="py-3">-</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Gemini 3 Flash Preview (deprecated)</td>
                  <td className="py-3 pr-4">$0.50</td>
                  <td className="py-3 pr-4">$3.00</td>
                  <td className="py-3">-</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Claude Sonnet 4.6</td>
                  <td className="py-3 pr-4">$3.00</td>
                  <td className="py-3 pr-4">$15.00</td>
                  <td className="py-3">$0.30</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Claude Opus 4.7</td>
                  <td className="py-3 pr-4">$5.00</td>
                  <td className="py-3 pr-4">$25.00</td>
                  <td className="py-3">$0.50</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-foreground">GPT-5.5</td>
                  <td className="py-3 pr-4">$1.25</td>
                  <td className="py-3 pr-4">$10.00</td>
                  <td className="py-3">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            One trap to call out before the next section. GitHub Copilot
            launched Gemini 3.5 Flash with a 14x premium-request multiplier (
            <a
              href="https://github.blog/changelog/2026-05-19-gemini-3-5-flash-is-generally-available-for-github-copilot/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub Changelog, May 19 2026
            </a>
            ). A 300-request Copilot Pro quota becomes about 21 Flash calls
            before overage. If you already have Claude Code and an
            OpenRouter or AI Studio API key, calling Flash directly at
            roughly $0.015 per call is almost always cheaper than burning
            Copilot quota.
          </p>
        </section>

        {/* Section 4: thinking_level trap */}
        <section id="thinking-level-trap" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="AlertTriangle" size="md" />
            The thinking_level Default Trap That Breaks Copy-Pasted Code
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Google replaced the integer <code>thinking_budget</code>{" "}
            parameter with a string enum <code>thinking_level</code> and
            quietly dropped the default from <code>high</code> to{" "}
            <code>medium</code>. Code copy-pasted from{" "}
            <code>gemini-3-flash-preview</code> still runs, but it produces
            measurably worse outputs unless you set the new field. The
            official notes live on{" "}
            <a
              href="https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.5"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Google AI Developers - What&apos;s new in Gemini 3.5
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The four values are <code>minimal</code>, <code>low</code>,{" "}
            <code>medium</code> (new default), and <code>high</code>. Google
            retuned <code>low</code> specifically for coding and tool-calling
            workloads. For agent loops with MCP tools,{" "}
            <code>thinking_level: &quot;low&quot;</code> is faster, cheaper,
            and on coding benchmarks roughly equivalent to{" "}
            <code>medium</code>. For hard reasoning, set <code>high</code>.
          </p>

          <h3 className="text-xl font-semibold mb-4">Before and after diff</h3>

          <CodeBlock
            language="python"
            filename="agent.py (broken silently after migration)"
            code={`# Before - gemini-3-flash-preview
from google import genai
from google.genai import types

config = types.GenerateContentConfig(
    thinking_config=types.ThinkingConfig(thinking_budget=-1),  # was "dynamic" / high
    temperature=0.2,                                            # ignored by 3.5
    top_p=0.95,                                                 # ignored by 3.5
)`}
          />

          <CodeBlock
            language="python"
            filename="agent.py (correct for gemini-3.5-flash)"
            code={`# After - gemini-3.5-flash, explicit and tuned for agent loops
from google import genai
from google.genai import types

config = types.GenerateContentConfig(
    thinking_config=types.ThinkingConfig(thinking_level="low"),  # for MCP agent loops
    # for hard reasoning tasks, use thinking_level="high"
    # for latency-sensitive work, use thinking_level="minimal"
)`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Two cleanup notes from the migration. <code>temperature</code>,{" "}
            <code>top_p</code>, and <code>top_k</code> are no longer
            recommended controls in the new SDK profile. Leaving them in your
            config is not an error, but they are silently ignored - delete
            them so the next reader of your code doesn&apos;t assume they
            still work. And inspect <code>response.usage_metadata</code> on
            your first run: thinking tokens now persist across multi-turn
            conversations, and the per-task token count for an agent loop
            can climb 30 to 50 percent versus the preview model.
          </p>
        </section>

        {/* Section 5: vs Claude Code */}
        <section id="vs-claude-code" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompare" size="md" />
            Gemini 3.5 Flash vs Claude Code (Sonnet 4.6, Opus 4.7) for Coding
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The short version: Flash wins agent orchestration and MCP tool
            chains. Claude Code wins repo-level edits and defensive code
            generation. Pick by task, not by model loyalty.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Task type</th>
                  <th className="py-3 pr-4">Best model</th>
                  <th className="py-3">Reason</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">MCP tool orchestration, parallel function calling</td>
                  <td className="py-3 pr-4">Gemini 3.5 Flash</td>
                  <td className="py-3">83.6% MCP Atlas, ~289 tok/sec, $1.50 input</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Multi-file refactor in a real repo</td>
                  <td className="py-3 pr-4">Claude Sonnet 4.6 in Claude Code</td>
                  <td className="py-3">Default Claude Code model; strong SWE-Bench Verified</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">ARC-style abstract reasoning</td>
                  <td className="py-3 pr-4">Claude Opus 4.7 or GPT-5.5</td>
                  <td className="py-3">Flash gives up 5 pts ARC-AGI-2 vs prior Pro</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Long-context retrieval beyond 128k</td>
                  <td className="py-3 pr-4">Gemini 3.1 Pro or Sonnet 4.6 (1M ctx)</td>
                  <td className="py-3">Flash regresses 7.6 pts on 128k retrieval</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Cheap intermediate planning inside an agent</td>
                  <td className="py-3 pr-4">Gemini 3.5 Flash</td>
                  <td className="py-3">Cached input at $0.15/1M is the lowest among frontier models</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-foreground">Production code review with defensive patches</td>
                  <td className="py-3 pr-4">Claude Sonnet 4.6</td>
                  <td className="py-3">Anthropic models add error handling more naturally</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The defensive-code observation isn&apos;t hand-wavy. Multiple
            head-to-head reviews this month converge on the same pattern.{" "}
            <a
              href="https://www.mindstudio.ai/blog/gemini-3-5-flash-vs-claude-opus-4-7-agentic-workflows"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              MindStudio
            </a>{" "}
            and{" "}
            <a
              href="https://www.buildfastwithai.com/blogs/gemini-3-5-flash-vs-gpt-5-5-claude-deepseek-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              BuildFastWithAI
            </a>{" "}
            both report that Claude Opus 4.7 anticipates edge cases and adds
            error handling more naturally, while Gemini 3.5 Flash produces
            more concise code that occasionally skips defensive patterns.
            That maps to my own experience: I trust Sonnet 4.6 to write
            production patches; I lean on Flash to coordinate the 30 tool
            calls that fetch the inputs.
          </p>
        </section>

        {/* Section 6: Routing playbook */}
        <section id="routing-playbook" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Route" size="md" />
            When to Route Tasks from Claude Code to Gemini 3.5 Flash
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            My default: I keep Claude Code with Sonnet 4.6 as the editor for
            anything that touches the repo. The{" "}
            <code>Edit</code>, <code>Write</code>, <code>Glob</code>, and{" "}
            <code>Grep</code> tools stay where they are. That is the
            production path and it doesn&apos;t need a different model
            today.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Where I route to Gemini 3.5 Flash is the supporting cast of
            tasks around the editor:
          </p>

          <ul className="skill-list mb-6">
            <li>
              <strong>MCP-heavy planning subtasks</strong> where an agent
              fans out 10 to 100 tool calls to query an API, hit a database,
              or coordinate with another agent. The 83.6% MCP Atlas score
              shows up here as fewer retries and fewer stalled tool calls.
            </li>
            <li>
              <strong>Long-running background tasks</strong> where speed
              beats defensive depth: linting summaries, log triage, doc
              generation, scheduled cron-style agents. Flash&apos;s ~289
              tok/sec output throughput is roughly 4x what Opus 4.7
              delivers.
            </li>
            <li>
              <strong>Cheap intermediate planning steps</strong> inside a
              larger agent loop where Sonnet 4.6 is overkill. Use Flash to
              pick which tool to call next, then hand control back to Sonnet
              for the actual code change.
            </li>
            <li>
              <strong>Parallel sub-agent fan-out</strong> like the 93
              parallel agents in Antigravity&apos;s demo described in the{" "}
              <a
                href="https://www.nxcode.io/resources/news/gemini-3-5-flash-developer-guide-agentic-coding-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                NxCode developer guide
              </a>
              . Cached input pricing at $0.15/1M makes the fan-out
              economically viable.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Three ways I actually route</h3>

          <p className="text-lg leading-relaxed mb-6">
            The mechanics matter. These are the three patterns I use, in
            order of how often I reach for them.
          </p>

          <ol className="space-y-3 mb-6 text-lg leading-relaxed list-decimal pl-6">
            <li>
              <strong>OpenRouter as a routing proxy.</strong> Configure
              Claude Code or any Claude SDK call to dispatch specific tool
              calls to <code>google/gemini-3.5-flash</code> on OpenRouter.
              You keep one API key, one billing surface, and you can swap
              models without code changes. The{" "}
              <a
                href="https://openrouter.ai/google/gemini-3.5-flash"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                OpenRouter provider page
              </a>{" "}
              lists current pricing and provider status.
            </li>
            <li>
              <strong>A thin custom MCP server</strong> that wraps{" "}
              <code>client.models.generate_content</code> with{" "}
              <code>gemini-3.5-flash</code> as an exposed tool, then
              mount it inside Claude Code via <code>~/.claude.json</code>.
              The{" "}
              <Link href="/blog/mcp-code-execution-pattern" className="project-link">
                MCP code execution pattern
              </Link>{" "}
              post covers how that wiring works in practice.
            </li>
            <li>
              <strong>Antigravity CLI for hybrid teams.</strong> If your
              team already migrated from Gemini CLI per the{" "}
              <Link href="/blog/gemini-cli-to-antigravity-cli-guide" className="project-link">
                Antigravity migration guide
              </Link>
              , Flash is the default model behind <code>agy</code>. Use
              Antigravity for parallel agents and keep Claude Code as your
              primary editor.
            </li>
          </ol>
        </section>

        {/* Section 7: MCP Agent build */}
        <section id="build-an-mcp-agent" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Code" size="md" />
            Build an MCP Agent with Gemini 3.5 Flash in 40 Lines of Python
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The Google GenAI SDK has native MCP support. You hand the SDK a
            connected MCP <code>ClientSession</code>, and it auto-executes
            tool calls and feeds the responses back to the model in a loop
            until the agent finishes. The official reference lives on{" "}
            <a
              href="https://ai.google.dev/gemini-api/docs/function-calling"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Google AI Developers - Function calling
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold mb-4">Install the SDKs</h3>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`pip install "google-genai>=2.0" "mcp>=1.4"
export GEMINI_API_KEY="your-key-from-aistudio"`}
          />

          <h3 className="text-xl font-semibold mt-8 mb-4">Working agent example</h3>

          <p className="text-lg leading-relaxed mb-6">
            The script below connects to an MCP server, hands the session to
            Gemini 3.5 Flash with <code>thinking_level=&quot;low&quot;</code>
            , and runs a real triage prompt. Replace{" "}
            <code>your_mcp_server</code> with the module path to whatever
            MCP server you already run.
          </p>

          <CodeBlock
            language="python"
            filename="mcp_agent.py"
            code={`import asyncio
from google import genai
from google.genai import types
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client


async def main() -> None:
    server = StdioServerParameters(
        command="python",
        args=["-m", "your_mcp_server"],
    )

    async with stdio_client(server) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            client = genai.Client()
            response = await client.aio.models.generate_content(
                model="gemini-3.5-flash",
                contents=(
                    "Triage the 5 most recent open PRs in this repo. "
                    "For each, return: PR number, risk score (low/med/high), "
                    "and a one-line reason. Use the tools available."
                ),
                config=types.GenerateContentConfig(
                    thinking_config=types.ThinkingConfig(thinking_level="low"),
                    tools=[session],  # SDK auto-executes MCP tool calls
                ),
            )

            print(response.text)
            print(response.usage_metadata)


if __name__ == "__main__":
    asyncio.run(main())`}
          />

          <h3 className="text-xl font-semibold mt-8 mb-4">Why every choice is what it is</h3>

          <ul className="skill-list mb-6">
            <li>
              <code>thinking_level=&quot;low&quot;</code>: Google retuned
              <code>low</code> for code and tool-calling. It is faster,
              cheaper, and on coding benchmarks comparable to{" "}
              <code>medium</code>. The default <code>medium</code> would
              quietly inflate cost without improving the tool-call sequence.
            </li>
            <li>
              <code>tools=[session]</code>: the SDK accepts an MCP{" "}
              <code>ClientSession</code> directly. It introspects the
              server&apos;s tool list, calls each tool when the model
              requests it, matches the <code>FunctionResponse</code> by id
              and name, and continues the loop until the model stops asking
              for tool calls.
            </li>
            <li>
              <code>response.usage_metadata</code>: log this on every run.
              Inspect <code>ThoughtsTokenCount</code>. Thinking tokens
              persist across turns and can inflate input costs 30 to 50
              percent on long agent loops, per the{" "}
              <a
                href="https://www.nxcode.io/resources/news/gemini-3-5-flash-developer-guide-agentic-coding-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                NxCode developer guide
              </a>
              .
            </li>
            <li>
              No <code>temperature</code>, no <code>top_p</code>: these
              parameters are silently ignored in Gemini 3.5. Leaving them in
              your config will confuse the next person to read it.
            </li>
          </ul>
        </section>

        {/* Section 8: Surfaces */}
        <section id="surfaces" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Layers" size="md" />
            Gemini 3.5 Flash in Antigravity, GitHub Copilot, and the Raw API
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Flash ships across four meaningful surfaces. The right one
            depends on what you already pay for and how you build.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Surface</th>
                  <th className="py-3 pr-4">Cost model</th>
                  <th className="py-3">Best for</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Raw Gemini API</td>
                  <td className="py-3 pr-4">$1.50 / $9 per 1M (cached $0.15)</td>
                  <td className="py-3">Custom agents, MCP servers, routing layers</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Antigravity CLI (agy)</td>
                  <td className="py-3 pr-4">Free weekly cap, Pro $19.99/mo, Ultra $249.99/mo</td>
                  <td className="py-3">Hybrid teams on Google&apos;s stack</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">GitHub Copilot</td>
                  <td className="py-3 pr-4">14x premium-request multiplier</td>
                  <td className="py-3">Existing Copilot users with light volume</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-foreground">OpenRouter</td>
                  <td className="py-3 pr-4">$1.50 / $9 per 1M + small markup</td>
                  <td className="py-3">Routing inside Claude Code or multi-model proxies</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Sources for the table: the{" "}
            <a
              href="https://antigravity.google/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Antigravity pricing page
            </a>
            , the{" "}
            <a
              href="https://github.blog/changelog/2026-05-19-gemini-3-5-flash-is-generally-available-for-github-copilot/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub Copilot changelog
            </a>
            , and the{" "}
            <a
              href="https://openrouter.ai/google/gemini-3.5-flash"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              OpenRouter provider page
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One opinionated note: for a Claude Code user with even one
            active OpenRouter or AI Studio key, raw API plus OpenRouter is
            almost always cheaper than burning Copilot quota at the 14x
            multiplier. If you don&apos;t already pay for Copilot, the
            decision is easy. If you do, do the math once on your own
            workload before changing anything.
          </p>
        </section>

        {/* Section 9: Limitations */}
        <section id="limitations" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldAlert" size="md" />
            Limitations and Gotchas
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The honest list. None of these are deal-breakers, but each one
            is worth knowing before you swap an existing agent over.
          </p>

          <ul className="skill-list mb-6">
            <li>
              <strong>No Computer Use yet.</strong> Flash doesn&apos;t drive a
              browser. For browser-driving agents, use a Pro-tier Gemini or
              Claude with Computer Use.
            </li>
            <li>
              <strong>Knowledge cutoff January 2025.</strong> Tool-augmented
              prompts and web search are the standard workarounds for fresh
              facts.
            </li>
            <li>
              <strong>Text-only output.</strong> Multimodal input works.
              Output is text only - no image or audio generation.
            </li>
            <li>
              <strong>128k retrieval regressed.</strong> If you have
              million-token contexts and need exact-recall retrieval at
              scale, Sonnet 4.6 with its 1M context or Gemini 3.1 Pro are
              stronger picks.
            </li>
            <li>
              <strong>Thought-token inflation.</strong> Thinking tokens
              persist across multi-turn conversations and can inflate input
              costs 30 to 50 percent on agent loops. Track{" "}
              <code>ThoughtsTokenCount</code> from{" "}
              <code>response.usage_metadata</code>.
            </li>
            <li>
              <strong>thinking_level: medium is the silent default.</strong>{" "}
              Set it explicitly in every config. The previous{" "}
              <code>high</code> default is gone.
            </li>
            <li>
              <strong>TPU capacity hiccups.</strong> Multiple developers
              reported 503 errors during the first week, with one comment
              on the{" "}
              <a
                href="https://news.ycombinator.com/item?id=48196570"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Hacker News launch thread
              </a>{" "}
              flagging frequent stalls. Build retry-with-backoff into any
              production caller.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>What is Gemini 3.5 Flash?</AccordionTrigger>
              <AccordionContent>
                Gemini 3.5 Flash is Google&apos;s Flash-tier coding and agent
                model, generally available since May 19, 2026. It ships
                across the Gemini API, AI Studio, Antigravity CLI, Vertex
                AI, GitHub Copilot, and the Gemini app. It beats Gemini 3.1
                Pro on 11 of 15 published agent benchmarks while pricing at
                $1.50 input and $9 output per 1M tokens.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>How much does Gemini 3.5 Flash cost per 1M tokens?</AccordionTrigger>
              <AccordionContent>
                Gemini 3.5 Flash costs $1.50 per 1M input tokens, $9 per 1M
                output tokens, and $0.15 per 1M cached input tokens. That is
                25 percent cheaper than Gemini 3.1 Pro, but 3x the price of
                the Gemini 3 Flash Preview it replaces and 6x the price of
                Gemini 3.1 Flash-Lite.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>Is Gemini 3.5 Flash better than Gemini 3.1 Pro?</AccordionTrigger>
              <AccordionContent>
                On agent benchmarks, yes. Gemini 3.5 Flash beats Gemini 3.1
                Pro on Terminal-Bench 2.1 (76.2 vs 70.3), MCP Atlas (83.6
                vs 78.2), and GDPval-AA Elo (1656 vs 1314). It regresses on
                128k-token retrieval by 7.6 points and ARC-AGI-2 by 5
                points, so long-context or pure reasoning work still wants
                Pro.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>How does Gemini 3.5 Flash compare to Claude Code for coding?</AccordionTrigger>
              <AccordionContent>
                Flash leads MCP tool orchestration at 83.6 percent MCP
                Atlas, beating Claude Opus 4.7 by 4.5 points. Claude Sonnet
                4.6 still leads production code editing on SWE-Bench
                Verified and is the default model in Claude Code. The
                practical answer is to route: Claude Code for repository
                edits, Gemini 3.5 Flash for tool-heavy agent loops.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>What is the thinking_level default in Gemini 3.5 Flash and why does it matter?</AccordionTrigger>
              <AccordionContent>
                Google replaced the integer <code>thinking_budget</code>{" "}
                with a string enum <code>thinking_level</code> and dropped
                the default from <code>high</code> to <code>medium</code>.
                Copy-pasting code from <code>gemini-3-flash-preview</code>{" "}
                silently produces worse outputs. For agentic coding with
                MCP tools, set <code>thinking_level: &quot;low&quot;</code>.
                For hard reasoning, set <code>high</code>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>Can Gemini 3.5 Flash call MCP tools?</AccordionTrigger>
              <AccordionContent>
                Yes. The Google GenAI SDK has built-in MCP support that
                auto-executes tool calls and feeds responses back in a loop
                until the agent finishes. Gemini 3.5 Flash scored 83.6
                percent on MCP Atlas, the benchmark that measures
                multi-step tool-call reliability. It is currently the
                strongest published score on that benchmark among major
                frontier models.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>Why is Gemini 3.5 Flash 3x more expensive than Gemini 3 Flash Preview?</AccordionTrigger>
              <AccordionContent>
                Google retuned Flash to handle frontier-grade agent loops
                and is pricing it accordingly. Simon Willison observed all
                three major labs probing API price tolerance at the same
                time. Artificial Analysis reported their benchmark suite
                cost $1,551.60 on Gemini 3.5 Flash versus $892.28 on Gemini
                3.1 Pro. Cheaper per token, more expensive per workload.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>What is the GitHub Copilot premium multiplier for Gemini 3.5 Flash?</AccordionTrigger>
              <AccordionContent>
                GitHub Copilot launched Gemini 3.5 Flash with a 14x
                premium-request multiplier across Copilot Pro, Pro Plus,
                Business, and Enterprise plans. A 300-request monthly quota
                becomes about 21 Gemini 3.5 Flash calls before overage. For
                most Claude Code users, calling the raw API through
                OpenRouter or AI Studio is cheaper than burning Copilot
                quota.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9">
              <AccordionTrigger>Should I switch from Claude Code to Gemini 3.5 Flash?</AccordionTrigger>
              <AccordionContent>
                Not as a wholesale swap. Claude Code with Sonnet 4.6 is
                still the strongest tool for production repository edits
                and long-context refactors. Gemini 3.5 Flash is the right
                routing target for MCP-heavy agent loops, parallel
                sub-agent fan-out, and cheap intermediate planning steps.
                The high-leverage move is a hybrid stack, not a switch.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10">
              <AccordionTrigger>How do I call Gemini 3.5 Flash from a Python script?</AccordionTrigger>
              <AccordionContent>
                Install the <code>google-genai</code> SDK, set{" "}
                <code>GEMINI_API_KEY</code>, and call{" "}
                <code>client.models.generate_content</code> with model{" "}
                <code>gemini-3.5-flash</code>. Set <code>thinking_level</code>{" "}
                explicitly via <code>ThinkingConfig</code>. Drop{" "}
                <code>temperature</code>, <code>top_p</code>, and{" "}
                <code>top_k</code> from your config. For MCP, pass the
                session object into the <code>tools</code> list.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Closing CTA */}
        <Card className="card-accent-left">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CategoryIcon icon="ArrowRight" size="sm" />
              Related Reading
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="skill-list">
              <li>
                <Link href="/blog/gemini-cli-to-antigravity-cli-guide" className="project-link">
                  Gemini CLI to Antigravity CLI: Migration Guide & Alternatives
                </Link>{" "}
                - the natural prequel. Antigravity CLI defaults to Gemini
                3.5 Flash post-migration.
              </li>
              <li>
                <Link href="/blog/claude-code-cost-tracking" className="project-link">
                  Claude Code Cost Tracking
                </Link>{" "}
                - the cost-discipline patterns that anchor the per-task
                math in this guide.
              </li>
              <li>
                <Link href="/blog/mcp-code-execution-pattern" className="project-link">
                  MCP Code Execution Pattern
                </Link>{" "}
                - how the Python agent example plugs into a broader Claude
                Code MCP stack.
              </li>
              <li>
                <Link href="/blog/claude-managed-agents-outcomes" className="project-link">
                  Claude Managed Agents Outcomes
                </Link>{" "}
                - rubric-driven auto-grading when you want the writer
                model and the grader model to live on different vendors.
              </li>
              <li>
                <Link href="/blog/ant-cli-getting-started" className="project-link">
                  Getting Started with the ant CLI
                </Link>{" "}
                - the Anthropic side of the cross-vendor agent CLI story.
              </li>
              <li>
                <Link href="/blog/gemma-4-models-guide" className="project-link">
                  Gemma 4 Models Guide
                </Link>{" "}
                - the open-weight Google AI context for readers exploring
                local routing options.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
