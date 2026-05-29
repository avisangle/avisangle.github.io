import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Persistent Memory for AI Coding Agents Beyond CLAUDE.md",
  description:
    "Compare CLAUDE.md, MCP memory servers, and Anthropic's Memory tool for persistent context across Claude Code, Codex, and Gemini CLI sessions.",
  keywords: [
    "persistent memory AI coding agents",
    "claude code memory",
    "CLAUDE.md beyond",
    "MCP memory server",
    "agentmemory",
    "claude-mem",
    "Anthropic Memory tool",
    "Anthropic Dreaming",
    "agent memory framework",
    "agentmemory vs claude-mem",
    "mem0 agent memory",
    "mcp memory service",
    "long term memory ai agent",
    "context engineering claude",
    "memory tool 20250818",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Persistent Memory for AI Coding Agents Beyond CLAUDE.md",
    description:
      "Compare CLAUDE.md, MCP memory servers, and Anthropic's Memory tool for persistent context across Claude Code, Codex, and Gemini CLI sessions.",
    url: "https://avinashsangle.com/blog/persistent-memory-ai-coding-agents",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-05-29T00:00:00.000Z",
    modifiedTime: "2026-05-29T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-persistent-memory-ai-coding-agents.png",
        width: 1200,
        height: 630,
        alt: "Persistent Memory for AI Coding Agents Beyond CLAUDE.md",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Persistent Memory for AI Coding Agents Beyond CLAUDE.md",
    description:
      "Compare CLAUDE.md, MCP memory servers, and Anthropic's Memory tool for persistent context across Claude Code, Codex, and Gemini CLI sessions.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-persistent-memory-ai-coding-agents.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/persistent-memory-ai-coding-agents",
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

export default function PersistentMemoryAICodingAgentsPage() {
  return (
    <>
      {/* TechArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Persistent Memory for AI Coding Agents Beyond CLAUDE.md",
            description:
              "Compare CLAUDE.md, MCP memory servers, and Anthropic's Memory tool for persistent context across Claude Code, Codex, and Gemini CLI sessions.",
            image: "https://avinashsangle.com/og-persistent-memory-ai-coding-agents.png",
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
            datePublished: "2026-05-29",
            dateModified: "2026-05-29",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://avinashsangle.com/blog/persistent-memory-ai-coding-agents",
            },
            keywords:
              "persistent memory AI coding agents, claude code memory, CLAUDE.md, MCP memory server, agentmemory, claude-mem, Anthropic Memory tool, Anthropic Dreaming",
            articleSection: "AI Development",
            wordCount: 3000,
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://avinashsangle.com/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Persistent Memory for AI Coding Agents",
                item: "https://avinashsangle.com/blog/persistent-memory-ai-coding-agents",
              },
            ],
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is persistent memory for AI coding agents?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Persistent memory lets tools like Claude Code, Codex, or Gemini CLI recall context across sessions instead of starting cold. It spans static project files such as CLAUDE.md, MCP memory servers like agentmemory and claude-mem, and platform-native memory in Anthropic's Memory tool and Managed Agents.",
                },
              },
              {
                "@type": "Question",
                name: "Why isn't CLAUDE.md enough for persistent memory?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CLAUDE.md is read-only at session start. Anything the agent learns mid-session is lost when the conversation ends. Long-running refactors, multi-session debugging, and teams of agents sharing learnings all hit that wall. A read-write memory layer outside the file fills the gap.",
                },
              },
              {
                "@type": "Question",
                name: "What's the difference between CLAUDE.md, MCP memory servers, and Anthropic's Memory tool?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CLAUDE.md is a static file you write. MCP memory servers are external processes that capture and recall context for any MCP client. Anthropic's Memory tool is an API capability for agents you build with the SDK. They sit at three different layers: project, tool, and platform.",
                },
              },
              {
                "@type": "Question",
                name: "Which is better: agentmemory or claude-mem?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "agentmemory is the cleaner solo-dev install with measured 95.2% R@5 on LongMemEval-S and zero infrastructure. claude-mem has more stars, a richer plugin marketplace, and a server-beta runtime backed by Postgres for teams. Solo dev: agentmemory. Team or production: claude-mem server-beta.",
                },
              },
              {
                "@type": "Question",
                name: "How does Anthropic Dreaming work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dreaming is a scheduled process inside Managed Agents that reviews past sessions and memory stores, extracts patterns across them, and curates the memory between runs. It surfaces recurring mistakes and shared workflows. It is a research preview and can run automatically or with human review.",
                },
              },
              {
                "@type": "Question",
                name: "Does the Anthropic Memory tool work with Claude Code the CLI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. The Memory tool is an API capability with type memory_20250818 for agents you build with the Anthropic SDK. Claude Code the CLI uses CLAUDE.md plus MCP servers for persistence today. If you want Memory-tool semantics in Claude Code, wrap it via an MCP server.",
                },
              },
              {
                "@type": "Question",
                name: "Can multiple AI agents share the same memory?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. agentmemory exposes both an MCP server and a REST API so 15+ different agents can read the same store. Memory for Managed Agents allows one agent to share what it learned with other agents in the same workspace, with per-write audit logs and programmatic access.",
                },
              },
              {
                "@type": "Question",
                name: "How much context window does persistent memory actually save?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Anthropic reports 84% token savings on long-running tasks when the Memory tool is paired with context editing. agentmemory publishes around 92% context reduction with hybrid retrieval. claude-mem advertises roughly 10x savings through layered search. Real savings depend on how aggressive your hooks are.",
                },
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Persistent Memory for AI Coding Agents" },
          ]}
        />
      </div>

      <article className="container-project py-12">
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Persistent Memory for AI Coding Agents Beyond CLAUDE.md
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Persistent memory lets an AI coding agent recall earlier sessions instead of restarting from zero.
            In 2026 the space splits into three tiers: static project files, MCP memory servers, and
            platform-native memory in Anthropic&apos;s Memory tool and Managed Agents. This guide walks each
            tier, the trade-offs, and how I pick.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> May 29, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-05-29</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Claude Code", "Memory", "MCP", "Anthropic", "Agents"].map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

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
                <li><a href="#why-claude-md-runs-out" className="project-link">Why CLAUDE.md Alone Runs Out of Room</a></li>
                <li><a href="#three-tiers" className="project-link">The Three Tiers of Persistent Memory in 2026</a></li>
                <li><a href="#tier-1-static-files" className="project-link">Tier 1 - Static Project Files (CLAUDE.md, AGENTS.md)</a></li>
                <li><a href="#tier-2-mcp-memory-servers" className="project-link">Tier 2 - MCP Memory Servers (agentmemory, claude-mem)</a></li>
                <li><a href="#tier-3-platform-native" className="project-link">Tier 3 - Anthropic Memory Tool, Dreaming, Managed Agents</a></li>
                <li><a href="#add-memory-in-five-minutes" className="project-link">Adding Persistent Memory to Claude Code in Five Minutes</a></li>
                <li><a href="#which-tier" className="project-link">Which Tier Should You Use? A Decision Matrix</a></li>
                <li><a href="#tradeoffs" className="project-link">Trade-offs: Privacy, Token Cost, and What Breaks</a></li>
                <li><a href="#faq" className="project-link">Frequently Asked Questions</a></li>
              </ol>
            </nav>
          </CardContent>
        </Card>

        <Card className="card-accent-left mb-12">
          <CardHeader>
            <CardTitle>TL;DR</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="skill-list">
              <li>
                CLAUDE.md is the floor, not the ceiling. It handles roughly 80% of solo workflows but breaks
                when sessions span days or agents need to learn.
              </li>
              <li>
                MCP memory servers fill the gap. <strong>agentmemory</strong> (19.5K stars) and{" "}
                <strong>claude-mem</strong> (79.5K stars) are the two I reach for in 2026.
              </li>
              <li>
                Anthropic&apos;s Memory tool (<code>memory_20250818</code>) plus context editing show{" "}
                <strong>84% token savings</strong> on long-running API agents. Dreaming refines the
                memory across sessions.
              </li>
              <li>
                The right answer depends on team size, who owns the storage, and whether you live in
                Claude Code, the API, or a Managed Agent.
              </li>
            </ul>
          </CardContent>
        </Card>

        <section id="why-claude-md-runs-out" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="AlertTriangle" size="md" />
            Why CLAUDE.md Alone Runs Out of Room
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            CLAUDE.md loads at session start and never changes during the run. That is exactly what you
            want for project rules, but it is the wrong shape for what the agent learns while it works. A
            tricky bug, a quirky API timing window, the right magic flag for your build - none of it
            survives <code>/exit</code>. Next session opens cold and you re-explain.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I hit three breakpoints in practice. First, the file itself grows past a few hundred lines and
            starts costing real tokens per turn. Second, work spans multiple sessions - a week-long
            refactor or a flaky test you keep returning to. Third, multiple agents need to share something
            one of them figured out. CLAUDE.md does none of these.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Anthropic&apos;s own multi-session pattern in the{" "}
            <a
              href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Memory tool docs
            </a>{" "}
            treats memory as a recovery mechanism: an initializer session bootstraps progress logs and
            checklists, every later session opens by reading them, and every session updates them before
            ending. That pattern is impossible inside a static CLAUDE.md.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            If you have not written a CLAUDE.md yet, start with my{" "}
            <Link href="/blog/claude-md-guide" className="project-link">
              CLAUDE.md guide
            </Link>{" "}
            first. This post picks up the day CLAUDE.md is no longer the answer.
          </p>
        </section>

        <section id="three-tiers" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Layers" size="md" />
            The Three Tiers of Persistent Memory in 2026
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Most existing posts list six levels and then leave you to wire them yourself. I find a
            three-tier frame more useful because each tier maps cleanly to <em>who controls the storage</em>{" "}
            and <em>where the agent runs</em>.
          </p>

          <div className="grid-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="FileText" size="sm" /> Tier 1 - Static Files
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">CLAUDE.md, AGENTS.md, <code>.cursor/rules</code>. Version-controlled.</p>
                <p className="text-muted-foreground text-sm">
                  Best for: project rules, conventions, build commands.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Database" size="sm" /> Tier 2 - MCP Memory Servers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">agentmemory, claude-mem, mcp-memory-service. Local SQLite + retrieval.</p>
                <p className="text-muted-foreground text-sm">
                  Best for: cross-session recall in any MCP client.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Brain" size="sm" /> Tier 3 - Platform-Native
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Anthropic Memory tool, Dreaming, Memory for Managed Agents, Cloudflare Agent Memory.</p>
                <p className="text-muted-foreground text-sm">
                  Best for: API agents, teams, audit-heavy workflows.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Library" size="sm" /> Memory Taxonomy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Episodic, semantic, procedural.</p>
                <p className="text-muted-foreground text-sm">
                  Procedural is the underserved one. Hooks-based MCP servers attack it directly.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The mem0 team&apos;s{" "}
            <a
              href="https://mem0.ai/blog/state-of-ai-agent-memory-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              State of AI Agent Memory 2026
            </a>{" "}
            report uses the classic episodic / semantic / procedural split. Procedural memory - learned
            workflows, tool-use habits, the right way to fix this codebase - is the one most current tools
            still skip. That is exactly the gap auto-capturing MCP servers target with hooks.
          </p>
        </section>

        <section id="tier-1-static-files" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="FileText" size="md" />
            Tier 1 - Static Project Files (CLAUDE.md, AGENTS.md)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Tier 1 is the cheapest persistence you can buy: a text file in your repo. CLAUDE.md for Claude
            Code, AGENTS.md for Codex and several others, <code>.cursor/rules</code> for Cursor. The agent
            loads it on session start. You write it, you commit it, your team sees the same rules.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The strengths are real. Zero infrastructure, deterministic behavior, full diff history in git,
            and complete control over what the agent sees. The weakness is also real. It is read-only from
            the agent&apos;s side. Nothing the agent discovers ends up back in the file unless you paste it
            in yourself.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Hierarchical loading is the one trick that stretches Tier 1 further. Claude Code looks at the
            project CLAUDE.md first, then your personal <code>~/.claude/CLAUDE.md</code>, then imports
            referenced via <code>@path/to/file.md</code>. That lets you keep a slim project file plus a
            personal layer for cross-project preferences. I cover the full pattern in my{" "}
            <Link href="/blog/claude-md-guide" className="project-link">
              CLAUDE.md guide
            </Link>
            . When you have squeezed Tier 1 dry, that is when Tier 2 starts paying for itself.
          </p>
        </section>

        <section id="tier-2-mcp-memory-servers" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Database" size="md" />
            Tier 2 - MCP Memory Servers (agentmemory, claude-mem)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Tier 2 is where the action is in 2026. An MCP memory server runs as a local process, exposes
            memory-shaped tools to your agent, and captures or recalls context across sessions. Because
            it speaks the Model Context Protocol, the same server works with Claude Code, Codex, Gemini
            CLI, and any other MCP client.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Three projects dominate the space. Star counts are accurate as of May 29, 2026 and will move.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-muted-foreground/30">
                  <th className="py-3 pr-4">Tool</th>
                  <th className="py-3 pr-4">Stars</th>
                  <th className="py-3 pr-4">Storage</th>
                  <th className="py-3 pr-4">Capture</th>
                  <th className="py-3">Notable</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">agentmemory</td>
                  <td className="py-3 pr-4">19.5K</td>
                  <td className="py-3 pr-4">SQLite + BM25 + vector + KG</td>
                  <td className="py-3 pr-4">12 auto-capture hooks</td>
                  <td className="py-3">95.2% R@5 LongMemEval-S, ~92% context reduction, 4-tier consolidation</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">claude-mem</td>
                  <td className="py-3 pr-4">79.5K</td>
                  <td className="py-3 pr-4">SQLite + FTS5 + Chroma</td>
                  <td className="py-3 pr-4">summary-on-clear hook</td>
                  <td className="py-3">~10x token savings, web viewer, plugin marketplace, Postgres server-beta</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">mcp-memory-service</td>
                  <td className="py-3 pr-4">-</td>
                  <td className="py-3 pr-4">SQLite knowledge graph + REST</td>
                  <td className="py-3 pr-4">entity/relation/observation API</td>
                  <td className="py-3">LangGraph, CrewAI, AutoGen integrations; autonomous consolidation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The headline numbers come from each project&apos;s benchmarks. agentmemory reports{" "}
            <strong>95.2% R@5 on LongMemEval-S</strong>, a retrieval suite that tests how often the right
            fact gets pulled back. That number says the retrieval is solid; it does not say your agent
            codes 95% better. I keep that distinction in mind when reviewing claims.
          </p>

          <h3 className="text-xl font-semibold mb-4">Installing each</h3>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# agentmemory - npm global install, zero infra
npm install -g @agentmemory/agentmemory
agentmemory  # starts the MCP server and the dashboard on :3113

# claude-mem - npx, hooks into Claude Code via the plugin marketplace
npx claude-mem install
# or inside Claude Code:
# /plugin marketplace add thedotmack/claude-mem

# mcp-memory-service - Python, REST + MCP
pip install mcp-memory-service
mcp-memory-service serve`}
          />

          <h3 className="text-xl font-semibold mt-8 mb-4">Wiring it into Claude Code</h3>

          <p className="text-lg leading-relaxed mb-6">
            Once the server is up, Claude Code picks it up through your <code>~/.claude.json</code> MCP
            block. The shape is the same one you use for any MCP server - I cover the pattern in detail
            in my{" "}
            <Link href="/blog/mcp-code-execution-pattern" className="project-link">
              MCP code execution guide
            </Link>
            . The minimal config for agentmemory looks like this:
          </p>

          <CodeBlock
            language="json"
            filename="~/.claude.json"
            code={`{
  "mcpServers": {
    "agentmemory": {
      "command": "agentmemory",
      "args": ["serve", "--stdio"]
    }
  }
}`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Restart Claude Code, run <code>/mcp</code>, and you should see <code>agentmemory</code> in the
            connected list. Open <code>http://localhost:3113</code> in a browser and you get the live
            dashboard - sessions, observations, what the agent has chosen to store. That dashboard is the
            single biggest reason I reach for agentmemory first: I can see what it is saving and tune
            before it pollutes the store.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The honest caveat for any hooks-based capture is that it costs tokens during the session. Every
            tool call your agent makes can trigger a capture, and captures are not free. Watch the
            dashboard for the first week and disable hooks you do not need. If you want a working MCP
            server you can read end to end before installing someone else&apos;s, my{" "}
            <Link href="/projects/jenkins-mcp" className="project-link">
              Jenkins MCP project
            </Link>{" "}
            is a small reference.
          </p>
        </section>

        <section id="tier-3-platform-native" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Brain" size="md" />
            Tier 3 - Anthropic Memory Tool, Dreaming, Managed Agents
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Tier 3 is what Anthropic and the major platforms shipped in the last quarter. It is the
            cleanest answer when the agent runs inside their world rather than yours.
          </p>

          <h3 className="text-xl font-semibold mb-4">Anthropic Memory tool</h3>

          <p className="text-lg leading-relaxed mb-6">
            The Memory tool is an API capability you opt into per request. Tool type{" "}
            <code>memory_20250818</code>, name <code>memory</code>. When enabled, Claude automatically
            checks a <code>/memories</code> directory at the start of a task and can create, view,
            <code>str_replace</code>, insert, delete, and rename files there. Crucially, storage is
            client-side. You implement the handler and you control where the bytes live.
          </p>

          <CodeBlock
            language="python"
            filename="agent.py"
            code={`from anthropic import Anthropic

client = Anthropic()

message = client.messages.create(
    model="claude-opus-4-8",
    max_tokens=2048,
    tools=[{"type": "memory_20250818", "name": "memory"}],
    messages=[{
        "role": "user",
        "content": "Help me debug the timeout in fetch_page()."
    }],
)
print(message)`}
          />

          <p className="text-lg leading-relaxed mb-6">
            The official{" "}
            <a
              href="https://github.com/anthropics/anthropic-sdk-python/blob/main/examples/memory/basic.py"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Python example
            </a>{" "}
            shows the client-side handler you need to fill in. Pair the tool with{" "}
            <a
              href="https://www.anthropic.com/news/context-management"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              context editing
            </a>
            {" "}using the beta header <code>context-management-2025-06-27</code> and Anthropic reports{" "}
            <strong>84% token savings on long-running tasks</strong>. That is the number worth quoting
            when you have to justify the integration to a finance partner.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Dreaming</h3>

          <p className="text-lg leading-relaxed mb-6">
            Dreaming, announced at Code with Claude on May 6-7 2026, is a scheduled process inside{" "}
            <Link href="/blog/claude-managed-agents" className="project-link">
              Claude Managed Agents
            </Link>{" "}
            that reviews past sessions and memory stores, extracts patterns, and curates them between
            runs. The marquee external number is from Anthropic&apos;s announcement: legal AI company
            Harvey reported a roughly 6x lift in task-completion rates after enabling it. That is
            Anthropic&apos;s data, not an independent benchmark, so quote it with attribution.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Dreaming is a research preview today. You decide whether it edits memory automatically or
            queues changes for review. I default to review-mode for client work and auto for my own
            tooling, where I can rebuild the store if something goes sideways.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Memory for Managed Agents</h3>

          <p className="text-lg leading-relaxed mb-6">
            Memory for Managed Agents went into public beta on April 23, 2026. It stores what each agent
            learns across sessions as files, ships with per-write audit logs and programmatic access,
            and lets one agent share what it learned with other agents in the same workspace. If
            multiple agents on your team need to converge on a shared playbook, this is where it lives
            without you running a server. I cover the broader Managed Agents picture in{" "}
            <Link href="/blog/claude-managed-agents-outcomes" className="project-link">
              Claude Managed Agents Outcomes
            </Link>
            .
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Cloudflare Agent Memory</h3>

          <p className="text-lg leading-relaxed mb-6">
            Cloudflare opened a private beta of Agent Memory on April 17, 2026. It runs on the edge and
            is the right fit when your agents are themselves Workers and you care about regional
            distribution more than tight integration with the Anthropic stack. I have not put it in
            production, so I will not pretend to have war stories.
          </p>

          <Card className="card-accent-left mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Info" size="sm" /> The Memory tool is not Claude Code memory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                This is the single most common reader confusion. The <code>memory_20250818</code> tool is
                an API capability you wire into agents you build with the SDK. Claude Code the CLI does
                not use that tool directly today. If you want Memory-tool-style semantics inside Claude
                Code, the path is an MCP server (Tier 2), not a flag.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="add-memory-in-five-minutes" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Rocket" size="md" />
            Adding Persistent Memory to Claude Code in Five Minutes
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Here is the fastest path to working persistent memory in Claude Code right now. I am using
            agentmemory because it is Apache-2.0, zero-infra, and the dashboard makes the first day
            sane. The pattern is the same for any MCP memory server - swap the binary and the config
            block.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# 1. Install agentmemory globally
npm install -g @agentmemory/agentmemory

# 2. Register it in Claude Code (or edit ~/.claude.json directly)
claude mcp add agentmemory agentmemory -- serve --stdio

# 3. Verify
claude
> /mcp
# expect: agentmemory  connected

# 4. Open the dashboard while a session runs
open http://localhost:3113

# 5. In a fresh session the next day:
> What do you remember about this project?`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Step five is where the value shows up. The agent surfaces what it captured the day before -
            files it touched, patterns it noticed, decisions it made. If the recall is wrong or noisy,
            head to the dashboard and prune. Treat the first week as tuning, not production.
          </p>

          <Card className="card-accent-left mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Lightbulb" size="sm" /> First-24-hours tip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Do not trust auto-capture blindly. Review the dashboard once a day for the first week and
                delete anything that looks like noise - failed experiments, half-finished thoughts, dead
                ends. A clean store at day seven beats a sprawling one at day one. The same discipline
                applies to{" "}
                <Link href="/blog/regression-proofing-claude-code-workflows" className="project-link">
                  regression-proofing your Claude Code workflows
                </Link>
                : if the input is unreliable, the output will be too.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="which-tier" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitBranch" size="md" />
            Which Tier Should You Use? A Decision Matrix
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Tier choice is mostly about who runs the agent and who owns the storage. Match the row to
            your situation and start there. Stacking tiers is fine and common, but you ship faster by
            starting at the lowest one that actually solves the problem.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-muted-foreground/30">
                  <th className="py-3 pr-4">If you...</th>
                  <th className="py-3">Use</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4">Solo dev, one project, sessions under two hours</td>
                  <td className="py-3"><strong>CLAUDE.md only</strong> (Tier 1)</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4">Solo dev, week-long work, want hands-off recall</td>
                  <td className="py-3"><strong>CLAUDE.md + agentmemory or claude-mem</strong> (Tier 1 + Tier 2)</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4">Team with shared agents and audit needs</td>
                  <td className="py-3"><strong>Memory for Managed Agents</strong> or claude-mem server-beta (Tier 3)</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4">Building your own agent on the Anthropic API</td>
                  <td className="py-3"><strong>Memory tool + context editing</strong> (Tier 3)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Need edge-distributed memory across regions</td>
                  <td className="py-3"><strong>Cloudflare Agent Memory</strong> (Tier 3)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Mature setups stack Tier 1 plus Tier 2 plus Dreaming, but you do not need that on day one.
            Most of the productivity wins from persistent memory show up at Tier 2 with a single
            well-tuned MCP server, not at the top of the stack.
          </p>
        </section>

        <section id="tradeoffs" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Scale" size="md" />
            Trade-offs: Privacy, Token Cost, and What Breaks
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Memory is one more system that can fail, leak, or quietly lie to the agent. Four things to
            watch.
          </p>

          <h3 className="text-xl font-semibold mb-4">Privacy and storage</h3>

          <p className="text-lg leading-relaxed mb-6">
            Every MCP memory server in Tier 2 lives on your disk by default. That is the right answer
            for client work. Anthropic&apos;s Memory tool is also client-side. If you write your own
            handler, validate paths and reject anything outside <code>/memories</code>. The docs flag
            path traversal explicitly because LLMs occasionally try to read places they should not. Use
            <code> pathlib.Path.resolve()</code> and <code>relative_to()</code> in Python, or the
            equivalent in your runtime.
          </p>

          <h3 className="text-xl font-semibold mb-4">Token cost</h3>

          <p className="text-lg leading-relaxed mb-6">
            Capture is not free. Hooks-based tools add tokens to every tool call. agentmemory publishes
            roughly <strong>170K tokens per year</strong> at the iii engine, which works out near $10
            annually for the storage path itself; LLM-summarized approaches run four to six times that.
            On the recall side Anthropic measures <strong>84% token savings</strong> on long-running
            tasks with Memory tool + context editing, and claude-mem advertises about{" "}
            <strong>10x</strong> savings through layered search. Real savings depend on how disciplined
            your hooks and your prompts are. Pair this with{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              Claude Code cost tracking
            </Link>{" "}
            before and after you turn memory on so you measure the delta, not a vibe.
          </p>

          <h3 className="text-xl font-semibold mb-4">Staleness</h3>

          <p className="text-lg leading-relaxed mb-6">
            A stored fact that became wrong after a refactor is worse than no memory. The store will
            confidently return outdated guidance and the agent will trust it. Either schedule a weekly
            prune or use Dreaming-style curation to consolidate, deprecate, and rewrite. mem0&apos;s
            report calls this out as one of six unsolved production gaps.
          </p>

          <h3 className="text-xl font-semibold mb-4">Cross-agent leakage</h3>

          <p className="text-lg leading-relaxed mb-6">
            If your coding agent and your customer-support agent share a memory store, customer data can
            surface into a pair-programming session. Segment workspaces by purpose and apply the same
            allowlisting discipline you would for any agent surface. If you want the full security
            framing for agent workflows, my{" "}
            <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
              guide on hardening AI agents in CI/CD against prompt injection
            </Link>{" "}
            covers the threat model.
          </p>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>What is persistent memory for AI coding agents?</AccordionTrigger>
              <AccordionContent>
                Persistent memory lets tools like Claude Code, Codex, or Gemini CLI recall context across
                sessions instead of starting cold. It spans static project files such as CLAUDE.md, MCP
                memory servers like agentmemory and claude-mem, and platform-native memory in
                Anthropic&apos;s Memory tool and Managed Agents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Why isn&apos;t CLAUDE.md enough for persistent memory?</AccordionTrigger>
              <AccordionContent>
                CLAUDE.md is read-only at session start. Anything the agent learns mid-session is lost
                when the conversation ends. Long-running refactors, multi-session debugging, and teams
                of agents sharing learnings all hit that wall. A read-write memory layer outside the
                file fills the gap.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>What&apos;s the difference between CLAUDE.md, MCP memory servers, and Anthropic&apos;s Memory tool?</AccordionTrigger>
              <AccordionContent>
                CLAUDE.md is a static file you write. MCP memory servers are external processes that
                capture and recall context for any MCP client. Anthropic&apos;s Memory tool is an API
                capability for agents you build with the SDK. They sit at three different layers:
                project, tool, and platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>Which is better: agentmemory or claude-mem?</AccordionTrigger>
              <AccordionContent>
                agentmemory is the cleaner solo-dev install with measured 95.2% R@5 on LongMemEval-S and
                zero infrastructure. claude-mem has more stars, a richer plugin marketplace, and a
                server-beta runtime backed by Postgres for teams. Solo dev: agentmemory. Team or
                production: claude-mem server-beta.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>How does Anthropic Dreaming work?</AccordionTrigger>
              <AccordionContent>
                Dreaming is a scheduled process inside Managed Agents that reviews past sessions and
                memory stores, extracts patterns across them, and curates the memory between runs. It
                surfaces recurring mistakes and shared workflows. It is a research preview and can run
                automatically or with human review.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6">
              <AccordionTrigger>Does the Anthropic Memory tool work with Claude Code the CLI?</AccordionTrigger>
              <AccordionContent>
                No. The Memory tool is an API capability with type <code>memory_20250818</code> for
                agents you build with the Anthropic SDK. Claude Code the CLI uses CLAUDE.md plus MCP
                servers for persistence today. If you want Memory-tool semantics in Claude Code, wrap it
                via an MCP server.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q7">
              <AccordionTrigger>Can multiple AI agents share the same memory?</AccordionTrigger>
              <AccordionContent>
                Yes. agentmemory exposes both an MCP server and a REST API so 15+ different agents can
                read the same store. Memory for Managed Agents allows one agent to share what it learned
                with other agents in the same workspace, with per-write audit logs and programmatic
                access.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q8">
              <AccordionTrigger>How much context window does persistent memory actually save?</AccordionTrigger>
              <AccordionContent>
                Anthropic reports 84% token savings on long-running tasks when the Memory tool is paired
                with context editing. agentmemory publishes around 92% context reduction with hybrid
                retrieval. claude-mem advertises roughly 10x savings through layered search. Real
                savings depend on how aggressive your hooks are.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-16">
          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle>Related Reading</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li>
                  <Link href="/blog/claude-md-guide" className="project-link">
                    How I Write CLAUDE.md Files That Actually Work
                  </Link>
                  {" "}- the Tier 1 deep dive this post picks up from.
                </li>
                <li>
                  <Link href="/blog/mcp-code-execution-pattern" className="project-link">
                    MCP Code Execution Pattern: A Hands-On Claude Code Guide
                  </Link>
                  {" "}- the MCP architecture context for Tier 2.
                </li>
                <li>
                  <Link href="/blog/claude-managed-agents" className="project-link">
                    Claude Managed Agents vs Agent SDK
                  </Link>
                  {" "}- where Dreaming and Memory for Managed Agents live.
                </li>
                <li>
                  <Link href="/blog/claude-managed-agents-outcomes" className="project-link">
                    Claude Managed Agents Outcomes
                  </Link>
                  {" "}- pairs naturally with Tier 3 memory.
                </li>
                <li>
                  <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
                    Hardening AI Agents in CI/CD Against Prompt Injection
                  </Link>
                  {" "}- the security framing for shared memory stores.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </article>
    </>
  )
}
