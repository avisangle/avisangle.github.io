import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
import { RelatedPosts } from "@/components/related-posts"
import { PostNavigation } from "@/components/post-navigation"

export const metadata: Metadata = {
  title: "Kimi K3 Agentic Coding: Full Setup Guide",
  description:
    "Run Kimi K3 for agentic coding: drop it into Claude Code with one env block, set up the Kimi Code CLI, plus pricing, benchmarks, and an honest verdict.",
  keywords: [
    "kimi k3 agentic coding",
    "kimi k3 claude code",
    "kimi code cli",
    "kimi k3 api pricing",
    "kimi k3 vs claude",
    "kimi k3 coding benchmark",
    "how to use kimi k3 in claude code",
    "kimi k3 anthropic_base_url",
    "kimi k3 cline roo code",
    "kimi k3 open weights",
    "run kimi k3 locally",
    "moonshot kimi k3",
    "kimi k3 setup",
    "kimi k3 moonshot ai",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Kimi K3 for Agentic Coding: Claude Code + CLI Setup Guide",
    description:
      "Run Kimi K3 for agentic coding: drop it into Claude Code with one env block, set up the Kimi Code CLI, plus pricing, benchmarks, and an honest verdict.",
    url: "https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-07-19T00:00:00.000Z",
    modifiedTime: "2026-07-19T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-kimi-k3-agentic-coding-guide.png",
        width: 1200,
        height: 630,
        alt: "Kimi K3 for Agentic Coding - Claude Code + CLI Setup Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimi K3 for Agentic Coding: Claude Code + CLI Setup Guide",
    description:
      "Run Kimi K3 for agentic coding: drop it into Claude Code with one env block, set up the Kimi Code CLI, plus pricing, benchmarks, and an honest verdict.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-kimi-k3-agentic-coding-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide",
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
  headline: "Kimi K3 for Agentic Coding: Claude Code + CLI Setup Guide",
  description:
    "Run Kimi K3 for agentic coding: drop it into Claude Code with one env block, set up the Kimi Code CLI, plus pricing, benchmarks, and an honest verdict.",
  image: "https://avinashsangle.com/og-kimi-k3-agentic-coding-guide.png",
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
      "Kimi K3",
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
  datePublished: "2026-07-19",
  dateModified: "2026-07-19",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide",
  },
  keywords:
    "kimi k3 agentic coding, kimi k3 claude code, kimi code cli, kimi k3 api pricing, kimi k3 vs claude, moonshot ai, open weights, agentic coding",
  articleSection: "AI Development",
  wordCount: 2600,
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
      name: "Kimi K3 for Agentic Coding",
      item: "https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Kimi K3 and when was it released?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kimi K3 is Moonshot AI's 2.8-trillion-parameter open-weight Mixture-of-Experts model, launched July 16, 2026. It uses 896 experts with 16 active per token, KDA hybrid linear attention, native vision, and a 1M-token context. Full open weights are scheduled for July 27, 2026.",
      },
    },
    {
      "@type": "Question",
      name: "How do I use Kimi K3 inside Claude Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Set ANTHROPIC_BASE_URL to https://api.moonshot.ai/anthropic, put your Moonshot key in ANTHROPIC_AUTH_TOKEN, and set ANTHROPIC_MODEL plus the Opus, Sonnet, and Haiku default overrides to kimi-k3. Remove any existing ANTHROPIC_API_KEY to avoid a conflict, then run /status to confirm the base URL and model.",
      },
    },
    {
      "@type": "Question",
      name: "Is Kimi K3 better than Claude for coding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On some benchmarks, yes. Kimi K3 ranked #1 on Frontend Code Arena and led SWE Marathon and Program Bench. Claude Fable 5 still leads the overall Artificial Analysis index and is faster with a more mature harness. K3 is a strong cost lever, not a wholesale replacement.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the Kimi K3 API cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kimi K3 costs $3 per 1M cache-miss input tokens, $0.30 per 1M cached input tokens, and $15 per 1M output tokens, flat at any context length. Web search calls bill separately at $0.004 each. On cache-heavy agent loops the effective input cost drops close to $0.30/M.",
      },
    },
    {
      "@type": "Question",
      name: "What is Kimi Code CLI and how is it different from Claude Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kimi Code CLI is Moonshot's open-source terminal agent, the counterpart to Claude Code and Gemini CLI. It reads and edits code, runs shell commands, and manages subagents and background tasks. Its /init command generates an AGENTS.md file, the equivalent of Claude Code's CLAUDE.md project context file.",
      },
    },
    {
      "@type": "Question",
      name: "Can I run Kimi K3 locally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not on a desktop. At 2.8 trillion parameters the 4-bit weight floor is roughly 1.4TB before KV cache, and Moonshot recommends serving it on supernodes with at least 64 accelerators. Realistic self-hosting means a quantized multi-GPU server, not a laptop, once weights land July 27.",
      },
    },
    {
      "@type": "Question",
      name: "Does Kimi K3 work with Cline and Roo Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. K3 launched API-first through Moonshot's OpenAI-compatible endpoint at https://api.moonshot.ai/v1 with model id kimi-k3. Any OpenAI-shaped client, including Cline, Roo Code, and Codex-style tools, connects by pointing its base URL and API key at that endpoint and selecting the kimi-k3 model.",
      },
    },
    {
      "@type": "Question",
      name: "Why does Kimi K3 sometimes call itself Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In at least one reported conversation, Kimi K3 identified itself as Anthropic's Claude. That kind of slip usually points to training data that includes outputs distilled from another model. It is a credibility caveat worth knowing, though it does not change how the model performs on coding tasks.",
      },
    },
    {
      "@type": "Question",
      name: "Is Kimi K3's cheaper price worth the slower speed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For long-horizon, cache-heavy agent work where most input is cached at $0.30/M, the savings are real, roughly a third of Claude's token price. For interactive, latency-sensitive loops, K3 runs at max reasoning effort and is slow and verbose, so per-task time can climb even at a lower per-token rate.",
      },
    },
  ],
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use Kimi K3 Inside Claude Code",
  description:
    "Step-by-step guide to routing Claude Code to Moonshot AI's Kimi K3 model using Anthropic-compatible environment variables.",
  totalTime: "PT10M",
  tool: [
    { "@type": "HowToTool", name: "Claude Code CLI" },
    { "@type": "HowToTool", name: "A Moonshot AI Open Platform API key" },
  ],
  supply: [
    { "@type": "HowToSupply", name: "Moonshot AI API key (kimi-k3 access)" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Set the Anthropic-compatible base URL",
      text: "Export ANTHROPIC_BASE_URL=https://api.moonshot.ai/anthropic so Claude Code sends requests to Moonshot's endpoint.",
      url: "https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide#use-in-claude-code",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Provide the auth token",
      text: "Set ANTHROPIC_AUTH_TOKEN to your Moonshot API key and remove any existing ANTHROPIC_API_KEY to avoid a conflict.",
      url: "https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide#use-in-claude-code",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Point every model tier at kimi-k3",
      text: "Set ANTHROPIC_MODEL and the Opus, Sonnet, and Haiku default overrides to kimi-k3 so background calls route to Moonshot too.",
      url: "https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide#use-in-claude-code",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Verify with /status",
      text: "Launch Claude Code, run /status, and confirm the base URL shows moonshot and the model shows kimi-k3. Send a test message to confirm the end-to-end setup.",
      url: "https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide#use-in-claude-code",
    },
  ],
})

export default function KimiK3AgenticCodingGuidePage() {
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
            { label: "Kimi K3 for Agentic Coding" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Kimi K3 for Agentic Coding: Claude Code + CLI Setup Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Kimi K3 is Moonshot AI&apos;s 2.8-trillion-parameter open-weight
            model, launched July 16, 2026. You can use it for agentic coding two
            ways: drop it into{" "}
            <Link href="/blog/claude-md-guide" className="project-link">
              Claude Code
            </Link>{" "}
            by pointing one environment variable at Moonshot&apos;s endpoint, or
            run Moonshot&apos;s own Kimi Code CLI. It ranked #1 on Frontend Code
            Arena at roughly a third of Claude&apos;s token price.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> July 19, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 11 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-07-19</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              "Kimi K3",
              "Agentic Coding",
              "Claude Code",
              "Kimi Code CLI",
              "Moonshot AI",
              "Open Weights",
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
                  <a href="#what-is-kimi-k3" className="project-link">
                    What Is Kimi K3? The 60-Second Version
                  </a>
                </li>
                <li>
                  <a href="#use-in-claude-code" className="project-link">
                    How to Use Kimi K3 in Claude Code
                  </a>
                </li>
                <li>
                  <a href="#kimi-code-cli" className="project-link">
                    Setting Up the Kimi Code CLI
                  </a>
                </li>
                <li>
                  <a href="#other-agents" className="project-link">
                    Kimi K3 with Cline, Roo Code, and Other Agents
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="project-link">
                    Kimi K3 Pricing vs Claude: The Real Math
                  </a>
                </li>
                <li>
                  <a href="#vs-claude" className="project-link">
                    Is Kimi K3 Better Than Claude for Coding?
                  </a>
                </li>
                <li>
                  <a href="#run-locally" className="project-link">
                    Can You Run Kimi K3 Locally?
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
                <strong>What it is:</strong> Kimi K3 (launched July 16, 2026) is
                Moonshot AI&apos;s 2.8T-parameter open-weight MoE model with a 1M
                context and native vision. It debuted #3 on Artificial Analysis
                and #1 on Frontend Code Arena.
              </li>
              <li>
                <strong>Two ways to use it agentically:</strong> route Claude
                Code to it with one <code>ANTHROPIC_BASE_URL</code> change, or
                install Moonshot&apos;s native Kimi Code CLI. It also works in
                Cline and Roo via the OpenAI-compatible endpoint.
              </li>
              <li>
                <strong>Pricing edge:</strong> $3/$15 per 1M tokens, dropping to
                $0.30/M on cached input. On cache-heavy agent loops that lands
                near a third of Claude&apos;s token price.
              </li>
              <li>
                <strong>The tradeoff:</strong> K3 runs at max reasoning effort by
                default, so it&apos;s slow and verbose. Per-task latency can
                climb even at a lower per-token rate.
              </li>
              <li>
                <strong>My take:</strong> use K3 as a cost lever inside Claude
                Code for bulk and long-horizon work; keep Claude for
                latency-sensitive interactive loops. A hybrid stack beats a
                switch.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1: What is Kimi K3 */}
        <section id="what-is-kimi-k3" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Sparkles" size="md" />
            What Is Kimi K3? The 60-Second Version
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Kimi K3 is a 2.8-trillion-parameter Mixture-of-Experts model from
            Moonshot AI, released July 16, 2026. It activates 16 of 896 experts
            per token, uses KDA hybrid linear attention, has native vision, and
            handles up to a 1M-token context. Moonshot calls it the largest
            open-weight model ever announced, and the full weights are scheduled
            for July 27, 2026 per the{" "}
            <a
              href="https://www.kimi.com/blog/kimi-k3"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              official Kimi K3 tech blog
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed mb-6">
            On the benchmark board it landed hard. Kimi K3 debuted at #3 on the{" "}
            <a
              href="https://venturebeat.com/technology/chinas-moonshot-ai-releases-kimi-k3-the-largest-open-source-model-ever-rivaling-top-u-s-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Artificial Analysis leaderboard
            </a>
            , behind Claude Fable 5 and GPT-5, and took #1 on Frontend Code Arena
            with 1679 points, ahead of both Fable 5 and GPT-5.6 Sol per{" "}
            <a
              href="https://www.tomshardware.com/tech-industry/artificial-intelligence/moonshot-releases-2-8-trillion-parameter-kimi-k3"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Tom&apos;s Hardware
            </a>
            . Across six coding benchmarks it placed top-three every time,
            leading SWE Marathon and Program Bench and trailing GPT-5.6 Sol on
            Terminal Bench 2.1 by half a point.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Why this matters for a Claude Code user: an open-weight model that
            competes at the frontier, at a third of the token price, changes your
            routing math. You don&apos;t throw away your stack. You ask which
            subtasks now belong on a cheaper model. Alongside K3, Moonshot shipped
            the open-source Kimi Code CLI, a direct competitor to Claude Code and
            Gemini CLI, and pushed two updates (v0.25.0 and v0.26.0) on launch
            day.
          </p>
        </section>

        {/* Section 2: Use in Claude Code */}
        <section id="use-in-claude-code" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Terminal" size="md" />
            How to Use Kimi K3 in Claude Code
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The fastest way to try Kimi K3 for agentic coding is to keep the
            Claude Code CLI you already use and repoint it at Moonshot&apos;s
            Anthropic-compatible endpoint. Moonshot exposes an{" "}
            <code>/anthropic</code> base path specifically so Claude Code works
            without a wrapper. Set four environment variables and you&apos;re
            done. The official steps live on the{" "}
            <a
              href="https://platform.kimi.ai/docs/guide/claude-code-kimi"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Kimi API platform docs
            </a>
            .
          </p>

          <CodeBlock
            language="bash"
            filename="~/.zshrc (or per-shell before launching claude)"
            code={`# Point Claude Code at Moonshot's Anthropic-compatible endpoint
export ANTHROPIC_BASE_URL="https://api.moonshot.ai/anthropic"
export ANTHROPIC_AUTH_TOKEN="YOUR_MOONSHOT_API_KEY"

# Route every model tier Claude Code asks for to Kimi K3
export ANTHROPIC_MODEL="kimi-k3"
export ANTHROPIC_DEFAULT_OPUS_MODEL="kimi-k3"
export ANTHROPIC_DEFAULT_SONNET_MODEL="kimi-k3"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="kimi-k3"`}
          />

          <p className="text-lg leading-relaxed mb-6">
            The Haiku override is the one most guides skip. Claude Code uses a
            small, fast model for background jobs like title generation and file
            summaries. If you leave <code>ANTHROPIC_DEFAULT_HAIKU_MODEL</code>{" "}
            unset, those calls still try to reach the real Anthropic endpoint and
            fail without an Anthropic key. Pointing it at <code>kimi-k3</code>{" "}
            keeps the whole session on Moonshot.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One conflict to clear before you launch. If you previously set{" "}
            <code>ANTHROPIC_API_KEY</code>, remove it. When both{" "}
            <code>ANTHROPIC_API_KEY</code> and <code>ANTHROPIC_AUTH_TOKEN</code>{" "}
            are present, Claude Code can pick the wrong credential and you&apos;ll
            get auth errors that look like a bad key.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`unset ANTHROPIC_API_KEY   # avoid a credential conflict
claude                    # launch Claude Code
# then inside the session:
/status                   # base URL should show moonshot, model should show kimi-k3`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Run <code>/status</code> and confirm the base URL points at moonshot
            and the model reads <code>kimi-k3</code>. Send a quick{" "}
            <code>hi</code> to confirm the round trip. Kimi K3 thinks by default,
            so the first response may take longer than you&apos;re used to with
            Claude - that&apos;s the max-effort reasoning, not a hung request.
          </p>
        </section>

        {/* Section 3: Kimi Code CLI */}
        <section id="kimi-code-cli" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="SquareTerminal" size="md" />
            Setting Up the Kimi Code CLI
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            If you&apos;d rather run Moonshot&apos;s native agent, Kimi Code CLI
            is the open-source terminal tool that ships alongside K3. It reads and
            edits code, runs shell commands, searches files, fetches web pages,
            and picks its next step from the feedback it gets - the same agentic
            loop you know from Claude Code. The official install script needs no
            pre-installed Node. The source lives on the{" "}
            <a
              href="https://github.com/MoonshotAI/kimi-code"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              MoonshotAI/kimi-code GitHub repo
            </a>
            .
          </p>

          <CodeBlock
            language="bash"
            filename="terminal (macOS / Linux)"
            code={`# Recommended: official install script, no Node required
curl -fsSL https://install.kimi.com/cli | bash

# Alternative: global npm install
npm install -g kimi

kimi --version   # verify the install`}
          />

          <p className="text-lg leading-relaxed mb-6">
            On Windows, install Git for Windows first. Kimi Code CLI uses the
            bundled Git Bash as its shell environment, so a first launch without
            it will fail. Once installed, the first-run flow is two commands
            inside the tool.
          </p>

          <CodeBlock
            language="bash"
            filename="inside kimi"
            code={`/login   # choose Kimi Code OAuth or a Moonshot Open Platform API key
/init    # scan the project and generate AGENTS.md`}
          />

          <p className="text-lg leading-relaxed mb-6">
            That <code>AGENTS.md</code> file is the part Claude Code users will
            recognize instantly: it&apos;s the direct analog of{" "}
            <Link href="/blog/claude-md-guide" className="project-link">
              CLAUDE.md
            </Link>
            . The <code>/init</code> command scans your project structure and
            writes build steps, code conventions, and background context so the
            agent understands the repo before it touches anything. Everything I
            wrote about keeping a CLAUDE.md tight and specific applies here.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Kimi Code CLI also speaks the Agent Client Protocol, so ACP-capable
            editors like Zed and JetBrains can drive a session over stdio. Log in
            once, point the editor at the <code>kimi acp</code> subcommand, and
            you get IDE integration without a second login. It advertises a 256K
            context window and 180 to 260 tokens per second output.
          </p>
        </section>

        {/* Section 4: Other agents */}
        <section id="other-agents" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Boxes" size="md" />
            Kimi K3 with Cline, Roo Code, and Other Agents
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Kimi K3 launched API-first through Moonshot&apos;s OpenAI-compatible
            endpoint, which means any OpenAI-shaped client connects with two
            settings: the base URL and the model id. Cline, Roo Code, and
            Codex-style tools all work this way. Moonshot explicitly positions K3
            for programming-agent scenarios including Codex, Claude Code, Cline,
            and RooCode.
          </p>

          <CodeBlock
            language="bash"
            filename="OpenAI-compatible client settings"
            code={`# Base URL for any OpenAI-shaped tool (Cline, Roo Code, Continue, Aider)
Base URL:  https://api.moonshot.ai/v1
API key:   YOUR_MOONSHOT_API_KEY
Model:     kimi-k3`}
          />

          <p className="text-lg leading-relaxed mb-6">
            In Cline or Roo Code, choose the OpenAI Compatible provider, paste
            the base URL and key, and type <code>kimi-k3</code> as the model. The
            same endpoint powers the Anthropic path for Claude Code (
            <code>/anthropic</code>) and the OpenAI path for everything else (
            <code>/v1</code>), so you can run K3 across your whole toolchain on a
            single Moonshot key. For a broader look at wiring open models into
            different agent frontends, my{" "}
            <Link href="/blog/qwen-code-getting-started" className="project-link">
              Qwen Code guide
            </Link>{" "}
            and{" "}
            <Link href="/blog/glm-5-2-local-coding-guide" className="project-link">
              GLM-5.2 local coding guide
            </Link>{" "}
            cover the same OpenAI-compatible pattern for other models.
          </p>
        </section>

        {/* Section 5: Pricing */}
        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="DollarSign" size="md" />
            Kimi K3 Pricing vs Claude: The Real Math
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Kimi K3 is $3 per 1M cache-miss input tokens, $0.30 per 1M cached
            input tokens, and $15 per 1M output tokens. Unlike the consumer app,
            the API price is flat at any context length, and web search calls
            bill separately at $0.004 each. The headline comparison: that&apos;s
            the same output price as Claude Sonnet-tier models but a much cheaper
            cached-input rate, per{" "}
            <a
              href="https://www.eesel.ai/blog/kimi-k3-pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              eesel&apos;s pricing breakdown
            </a>
            .
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
                  <td className="py-3 pr-4 font-semibold text-foreground">Kimi K3</td>
                  <td className="py-3 pr-4">$3.00</td>
                  <td className="py-3 pr-4">$15.00</td>
                  <td className="py-3">$0.30</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Claude Sonnet 5</td>
                  <td className="py-3 pr-4">$3.00</td>
                  <td className="py-3 pr-4">$15.00</td>
                  <td className="py-3">$0.30</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-foreground">Claude Opus 4.8</td>
                  <td className="py-3 pr-4">$5.00</td>
                  <td className="py-3 pr-4">$25.00</td>
                  <td className="py-3">$0.50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The cached rate is where K3 gets interesting for agent work. Long
            agent loops re-send a large, stable context on every turn - the
            system prompt, the file tree, the conversation so far. Once that
            context is cached, most of your input bills at $0.30/M instead of
            $3/M. A turn with 100K cached tokens and only 2K of new input, plus a
            normal output, works out to roughly $0.08, about 77% cheaper than the
            same turn uncached, per{" "}
            <a
              href="https://www.morphllm.com/kimi-k3-vs-claude"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Morph&apos;s K3 vs Claude analysis
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The honest caveat: K3 is slow and verbose and runs only at max
            reasoning effort, so it emits more output tokens per task and takes
            longer. Cheaper per token does not always mean cheaper per finished
            task. If you track spend carefully - and my{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              Claude Code cost tracking guide
            </Link>{" "}
            shows how I do - measure a few real tasks on your own workload before
            you assume the savings.
          </p>
        </section>

        {/* Section 6: vs Claude */}
        <section id="vs-claude" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompare" size="md" />
            Is Kimi K3 Better Than Claude for Coding?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            On specific benchmarks, K3 wins. On overall usability today, Claude
            still leads. Pick by task, not by headline. K3 took #1 on Frontend
            Code Arena, led SWE Marathon and Program Bench, and scored 67.5 on
            SWE-bench with its own KimiCode harness. Claude Fable 5 holds the top
            of the overall Artificial Analysis index, and Claude Code is faster
            with a more mature tool harness.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Task type</th>
                  <th className="py-3 pr-4">Better pick</th>
                  <th className="py-3">Reason</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Frontend / UI code generation</td>
                  <td className="py-3 pr-4">Kimi K3</td>
                  <td className="py-3">#1 Frontend Code Arena (1679), ahead of Fable 5</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Long-horizon, cache-heavy agent loops</td>
                  <td className="py-3 pr-4">Kimi K3</td>
                  <td className="py-3">$0.30/M cached input, roughly a third of Claude&apos;s cost</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Interactive, latency-sensitive edits</td>
                  <td className="py-3 pr-4">Claude Code</td>
                  <td className="py-3">K3 runs max-effort by default; slower per turn</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Overall reasoning breadth</td>
                  <td className="py-3 pr-4">Claude Fable 5 / GPT-5</td>
                  <td className="py-3">K3 debuted #3 on the overall Artificial Analysis index</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-foreground">Self-hosting / open weights</td>
                  <td className="py-3 pr-4">Kimi K3</td>
                  <td className="py-3">Weights release July 27; Claude is closed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            There is one credibility wrinkle worth naming. In at least one
            reported conversation, K3 identified itself as Anthropic&apos;s
            Claude, which{" "}
            <a
              href="https://wccftech.com/chinas-kimi-k3-identifies-itself-as-anthropics-claude-in-at-least-one-conversation-betraying-its-distilled-origins/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              WCCFTech read as a sign of distilled training origins
            </a>
            . It doesn&apos;t change coding performance, but if provenance
            matters for your use case, factor it in. My practical stance: I keep
            Claude Code as the default editor for interactive work and route bulk,
            frontend-heavy, or long-running jobs to K3 where the cost and Arena
            score earn their place.
          </p>
        </section>

        {/* Section 7: Run locally */}
        <section id="run-locally" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Server" size="md" />
            Can You Run Kimi K3 Locally?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Not on a desktop, and not on a single high-end GPU. At 2.8 trillion
            parameters, the weight-only 4-bit planning floor is near 1.4TB before
            you add any runtime overhead or long-context KV cache. Moonshot
            recommends serving K3 on supernodes with at least 64 accelerators, so
            realistic self-hosting means a multi-GPU server or a heavily quantized
            build on datacenter-class hardware, per the{" "}
            <a
              href="https://glows.ai/article/run_kimi_k3_hardware_cost_guide_en"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Glows.ai hardware guide
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The open weights land July 27, 2026. Because KDA hybrid linear
            attention breaks conventional prefix caching, Moonshot contributed a
            vLLM implementation to be released alongside the weights, so serving
            frameworks will support K3 from day one. Until then, K3 is API and
            consumer-app only. If your goal is genuinely local, laptop-class
            inference, a smaller open-weight model is the honest answer - my{" "}
            <Link href="/blog/glm-5-2-local-coding-guide" className="project-link">
              GLM-5.2 local coding guide
            </Link>{" "}
            and{" "}
            <Link href="/blog/apple-core-ai-on-device-inference-guide" className="project-link">
              Apple Core AI on-device guide
            </Link>{" "}
            cover models that actually fit on hardware you own.
          </p>
        </section>

        {/* Section 8: Limitations */}
        <section id="limitations" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldAlert" size="md" />
            Limitations and Gotchas
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The honest list before you swap an existing agent over to K3.
          </p>

          <ul className="skill-list mb-6">
            <li>
              <strong>Slow and verbose by default.</strong> K3 runs at max
              reasoning effort. Expect longer first-token latency and more output
              tokens than a comparable Claude call.
            </li>
            <li>
              <strong>Weights aren&apos;t out yet.</strong> Open weights are
              scheduled for July 27, 2026. Before that, self-hosting isn&apos;t an
              option and you depend on Moonshot&apos;s API uptime.
            </li>
            <li>
              <strong>No desktop self-hosting.</strong> The 2.8T parameter count
              puts local inference on multi-GPU servers only, roughly a 1.4TB
              4-bit floor.
            </li>
            <li>
              <strong>Clear the Haiku override.</strong> In Claude Code, unset{" "}
              <code>ANTHROPIC_DEFAULT_HAIKU_MODEL</code> means background jobs try
              to reach Anthropic and fail. Point every tier at{" "}
              <code>kimi-k3</code>.
            </li>
            <li>
              <strong>Remove ANTHROPIC_API_KEY.</strong> A leftover{" "}
              <code>ANTHROPIC_API_KEY</code> conflicts with{" "}
              <code>ANTHROPIC_AUTH_TOKEN</code> and produces confusing auth
              errors.
            </li>
            <li>
              <strong>Identity slip.</strong> K3 has been observed calling itself
              Claude, a distillation smell worth knowing if provenance matters to
              you.
            </li>
            <li>
              <strong>Web search bills separately.</strong> Search calls cost
              $0.004 each on top of token pricing, so a search-heavy agent adds a
              line item the token math misses.
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
              <AccordionTrigger>What is Kimi K3 and when was it released?</AccordionTrigger>
              <AccordionContent>
                Kimi K3 is Moonshot AI&apos;s 2.8-trillion-parameter open-weight
                Mixture-of-Experts model, launched July 16, 2026. It uses 896
                experts with 16 active per token, KDA hybrid linear attention,
                native vision, and a 1M-token context. Full open weights are
                scheduled for July 27, 2026.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>How do I use Kimi K3 inside Claude Code?</AccordionTrigger>
              <AccordionContent>
                Set <code>ANTHROPIC_BASE_URL</code> to{" "}
                <code>https://api.moonshot.ai/anthropic</code>, put your Moonshot
                key in <code>ANTHROPIC_AUTH_TOKEN</code>, and set{" "}
                <code>ANTHROPIC_MODEL</code> plus the Opus, Sonnet, and Haiku
                default overrides to <code>kimi-k3</code>. Remove any existing{" "}
                <code>ANTHROPIC_API_KEY</code> to avoid a conflict, then run{" "}
                <code>/status</code> to confirm the base URL and model.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>Is Kimi K3 better than Claude for coding?</AccordionTrigger>
              <AccordionContent>
                On some benchmarks, yes. Kimi K3 ranked #1 on Frontend Code Arena
                and led SWE Marathon and Program Bench. Claude Fable 5 still leads
                the overall Artificial Analysis index and is faster with a more
                mature harness. K3 is a strong cost lever, not a wholesale
                replacement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>How much does the Kimi K3 API cost?</AccordionTrigger>
              <AccordionContent>
                Kimi K3 costs $3 per 1M cache-miss input tokens, $0.30 per 1M
                cached input tokens, and $15 per 1M output tokens, flat at any
                context length. Web search calls bill separately at $0.004 each.
                On cache-heavy agent loops the effective input cost drops close to
                $0.30/M.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>What is Kimi Code CLI and how is it different from Claude Code?</AccordionTrigger>
              <AccordionContent>
                Kimi Code CLI is Moonshot&apos;s open-source terminal agent, the
                counterpart to Claude Code and Gemini CLI. It reads and edits
                code, runs shell commands, and manages subagents and background
                tasks. Its <code>/init</code> command generates an{" "}
                <code>AGENTS.md</code> file, the equivalent of Claude Code&apos;s{" "}
                <code>CLAUDE.md</code> project context file.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>Can I run Kimi K3 locally?</AccordionTrigger>
              <AccordionContent>
                Not on a desktop. At 2.8 trillion parameters the 4-bit weight
                floor is roughly 1.4TB before KV cache, and Moonshot recommends
                serving it on supernodes with at least 64 accelerators. Realistic
                self-hosting means a quantized multi-GPU server, not a laptop,
                once weights land July 27.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>Does Kimi K3 work with Cline and Roo Code?</AccordionTrigger>
              <AccordionContent>
                Yes. K3 launched API-first through Moonshot&apos;s
                OpenAI-compatible endpoint at{" "}
                <code>https://api.moonshot.ai/v1</code> with model id{" "}
                <code>kimi-k3</code>. Any OpenAI-shaped client, including Cline,
                Roo Code, and Codex-style tools, connects by pointing its base URL
                and API key at that endpoint and selecting the model.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>Is Kimi K3&apos;s cheaper price worth the slower speed?</AccordionTrigger>
              <AccordionContent>
                For long-horizon, cache-heavy agent work where most input is
                cached at $0.30/M, the savings are real, roughly a third of
                Claude&apos;s token price. For interactive, latency-sensitive
                loops, K3 runs at max reasoning effort and is slow and verbose, so
                per-task time can climb even at a lower per-token rate.
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
                <Link href="/blog/gemini-3-5-flash-agentic-coding-guide" className="project-link">
                  Gemini 3.5 Flash for Agentic Coding
                </Link>{" "}
                - the routing playbook for mixing a cheaper model into a Claude
                Code stack, same idea, different vendor.
              </li>
              <li>
                <Link href="/blog/qwen-code-getting-started" className="project-link">
                  Qwen Code CLI: Getting Started
                </Link>{" "}
                - another open-model coding CLI with the same
                OpenAI-compatible wiring.
              </li>
              <li>
                <Link href="/blog/glm-5-2-local-coding-guide" className="project-link">
                  How to Run GLM-5.2 Locally for AI Coding
                </Link>{" "}
                - if self-hosting is the goal, this is a model that actually
                fits on hardware you own.
              </li>
              <li>
                <Link href="/blog/claude-md-guide" className="project-link">
                  The CLAUDE.md Guide
                </Link>{" "}
                - everything that applies to Kimi Code CLI&apos;s AGENTS.md
                context file.
              </li>
              <li>
                <Link href="/blog/claude-code-cost-tracking" className="project-link">
                  Claude Code Cost Tracking
                </Link>{" "}
                - measure real per-task spend before you trust a cheaper
                per-token rate.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <RelatedPosts slug="kimi-k3-agentic-coding-guide" />
      <PostNavigation slug="kimi-k3-agentic-coding-guide" />
    </>
  )
}
