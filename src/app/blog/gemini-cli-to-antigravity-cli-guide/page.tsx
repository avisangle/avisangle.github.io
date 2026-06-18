import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gemini CLI to Antigravity CLI: Migration Guide & Alternatives",
  description:
    "Gemini CLI stops on June 18, 2026. Step-by-step migration to Antigravity CLI, rate-limit math, and when to switch to Claude Code or Codex instead.",
  keywords: [
    "gemini cli to antigravity cli migration",
    "gemini cli shutdown june 18 2026",
    "antigravity cli getting started",
    "antigravity cli vs claude code",
    "gemini cli alternatives",
    "agy install command",
    "is antigravity cli open source",
    "antigravity cli rate limits",
    "google antigravity 2.0",
    "claude code vs antigravity",
    "codex cli vs antigravity",
    "gemini code assist sunset",
    "antigravity migrate from gemini cli",
    "google ai pro antigravity",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Gemini CLI to Antigravity CLI: Migration Guide & Alternatives",
    description:
      "Gemini CLI stops on June 18, 2026. Step-by-step migration to Antigravity CLI, rate-limit math, and when to switch to Claude Code or Codex instead.",
    url: "https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-05-21T00:00:00.000Z",
    modifiedTime: "2026-05-21T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-gemini-cli-to-antigravity-cli-guide.png",
        width: 1200,
        height: 630,
        alt: "Gemini CLI to Antigravity CLI Migration Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemini CLI to Antigravity CLI: Migration Guide & Alternatives",
    description:
      "Gemini CLI stops on June 18, 2026. Step-by-step migration to Antigravity CLI, rate-limit math, and when to switch to Claude Code or Codex instead.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-gemini-cli-to-antigravity-cli-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide",
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
  headline: "Gemini CLI to Antigravity CLI: Migration Guide & Alternatives",
  description:
    "Gemini CLI stops on June 18, 2026. Step-by-step migration to Antigravity CLI, rate-limit math, and when to switch to Claude Code or Codex instead.",
  image: "https://avinashsangle.com/og-gemini-cli-to-antigravity-cli-guide.png",
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
      "Gemini CLI",
      "Antigravity CLI",
      "AI Automation",
      "Model Context Protocol",
      "DevOps",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
  },
  datePublished: "2026-05-21",
  dateModified: "2026-05-21",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide",
  },
  keywords:
    "gemini cli, antigravity cli, agy, gemini cli shutdown, antigravity 2.0, claude code, codex cli, google ai pro, gemini code assist, migration guide",
  articleSection: "Developer Tools",
  wordCount: 2900,
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
      name: "Gemini CLI to Antigravity CLI Migration Guide",
      item: "https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When does Gemini CLI stop working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gemini CLI and the Gemini Code Assist IDE extensions stop serving requests for free users, Google AI Pro, and Google AI Ultra subscribers on June 18, 2026. Organizations on Gemini Code Assist Standard or Enterprise licenses keep their existing access. New installs on GitHub orgs are also blocked on that date.",
      },
    },
    {
      "@type": "Question",
      name: "Who is affected by the June 18, 2026 Gemini CLI shutdown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three groups: free-tier users of Gemini Code Assist for individuals, Google AI Pro subscribers at $19.99/mo, and Google AI Ultra subscribers at $249.99/mo. Enterprise customers on Standard or Enterprise licenses, and Gemini Code Assist for GitHub paid through Google Cloud, keep working without change.",
      },
    },
    {
      "@type": "Question",
      name: "Is Antigravity CLI open source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Antigravity CLI ships as a closed-source Go binary called agy. Gemini CLI was Apache 2.0 with public contributions. The community filed Issue #27304 on the gemini-cli repo asking for source release, and Google has not committed to publishing it. This is one of the loudest complaints in the migration thread.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install Antigravity CLI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On macOS and Linux, run curl -fsSL https://antigravity.google/cli/install.sh | bash. On Windows PowerShell, run irm https://antigravity.google/cli/install.ps1 | iex. The binary lands at ~/.local/bin/agy. Add that path to your shell profile if it is not already on your PATH, then run agy to start the OAuth login flow.",
      },
    },
    {
      "@type": "Question",
      name: "How do I migrate my Gemini CLI plugins, skills, and MCP servers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Run agy plugin import gemini to bring extensions over. Move workspace skills from .gemini/skills/ to .agents/skills/. Migrate MCP configs from inline settings.json into a separate mcp_config.json and rename the url field to serverUrl. GEMINI.md and AGENTS.md both work in Antigravity CLI with no rename required.",
      },
    },
    {
      "@type": "Question",
      name: "Does GEMINI.md still work in Antigravity CLI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Antigravity CLI reads both GEMINI.md and AGENTS.md without modification. You do not need to rename, move, or reformat your existing project context file. This is one of the few migration items that just works. Skills directories, MCP config layout, and plugin paths all changed, but the markdown context file did not.",
      },
    },
    {
      "@type": "Question",
      name: "What are Antigravity CLI's free-tier rate limits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The free tier uses a weekly quota that refreshes every five hours up to a hard weekly cap. Developers in GitHub Discussion #27274 report exhausting the cap in 4-5 chat turns, with a 166-hour reset window. Gemini CLI's old free tier allowed up to 1,000 requests per day, so the drop is steep.",
      },
    },
    {
      "@type": "Question",
      name: "Should I migrate to Antigravity CLI or switch to Claude Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you already pay for Google AI Pro or Ultra, migrate and absorb the rate-limit shock. If you need long-context refactors, scripted CI agents, MCP-heavy workflows, or terminal composability, switch to Claude Code with Opus 4.6. The 1M context window and 77.2% SWE-bench Verified score make it the strongest alternative for terminal-first coding.",
      },
    },
    {
      "@type": "Question",
      name: "Can I keep using Gemini CLI after June 18 with a paid API key?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The open-source Gemini CLI binary keeps working if you point it at a paid Gemini API key issued through AI Studio or Vertex AI, or if your team holds a Gemini Code Assist Standard or Enterprise license. You lose Google's first-party free endpoints but keep the Apache 2.0 toolchain.",
      },
    },
    {
      "@type": "Question",
      name: "What Gemini CLI features don't carry over to Antigravity CLI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom themes embedded in extensions are dropped silently during plugin import. The terminal-level gemini skills command has no equivalent in agy; skills are managed inside the agent via /skills only. Several Gemini CLI flags for temperature, top_k, and system instruction overrides are not exposed in the new CLI surface.",
      },
    },
  ],
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Migrate from Gemini CLI to Antigravity CLI",
  description:
    "Step-by-step migration from Gemini CLI to Antigravity CLI before the June 18, 2026 deadline: install agy, import plugins, move skills, migrate MCP configs, and validate hooks.",
  totalTime: "PT45M",
  tool: [
    { "@type": "HowToTool", name: "Terminal / Command Line" },
    { "@type": "HowToTool", name: "Antigravity CLI (agy)" },
    { "@type": "HowToTool", name: "Existing Gemini CLI install" },
  ],
  supply: [
    { "@type": "HowToSupply", name: "Google account previously used with Gemini CLI" },
    { "@type": "HowToSupply", name: "macOS, Linux, or Windows" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Install Antigravity CLI",
      text: "Run the platform-specific install script. The binary lands at ~/.local/bin/agy. Keep the old gemini binary installed during the transition.",
      url: "https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide#install-antigravity-cli",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Authenticate with your Google account",
      text: "Run agy with no arguments to trigger the browser-based OAuth flow. On SSH boxes, follow the printed authorization URL.",
      url: "https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide#migrate-from-gemini-cli",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Import Gemini CLI plugins",
      text: "Run agy plugin import gemini to scan your Gemini CLI extensions directory and register each as an Antigravity plugin.",
      url: "https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide#migrate-from-gemini-cli",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Move workspace skills",
      text: "Copy .gemini/skills/ to .agents/skills/ per workspace. Global skills directories auto-load from the new path.",
      url: "https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide#migrate-from-gemini-cli",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Migrate MCP server configs",
      text: "Move MCP configs out of settings.json into a new mcp_config.json. Rename the url field on each server entry to serverUrl.",
      url: "https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide#migrate-from-gemini-cli",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Validate hooks and context file",
      text: "Keep GEMINI.md or AGENTS.md unchanged. Re-run a hook-driven workflow to confirm pre-tool-call and stop hooks fire as expected.",
      url: "https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide#migrate-from-gemini-cli",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Run a representative task end-to-end",
      text: "Pick a real workflow you trust and run it through agy. Compare output to a Gemini CLI run before uninstalling the old binary.",
      url: "https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide#migrate-from-gemini-cli",
    },
  ],
})

export default function GeminiCliToAntigravityCliPage() {
  return (
    <>
      {/* JSON-LD Schemas - static trusted content built at compile time */}
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
            { label: "Gemini CLI to Antigravity CLI Migration Guide" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">Developer Tools</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Gemini CLI to Antigravity CLI: Migration Guide & Alternatives
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Gemini CLI stops serving free, Google AI Pro, and Google AI Ultra
            users on June 18, 2026. The replacement is Antigravity CLI, a
            closed-source Go binary called <code>agy</code> that ships with
            Antigravity 2.0. You have thirty days to migrate, swap to{" "}
            <Link href="/blog/ant-cli-getting-started" className="project-link">
              Claude Code
            </Link>{" "}
            or Codex CLI, or stay on paid Gemini API keys.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> May 21, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 11 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-05-21 (June 18 deadline)</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              "Gemini CLI",
              "Antigravity CLI",
              "AI Coding Agents",
              "Claude Code",
              "Codex CLI",
              "Migration",
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
                  <a href="#whats-changing" className="project-link">
                    What&apos;s Changing for Gemini CLI Users on June 18, 2026
                  </a>
                </li>
                <li>
                  <a href="#open-source-to-closed-source" className="project-link">
                    Why This Matters: Open-Source to Closed-Source in 30 Days
                  </a>
                </li>
                <li>
                  <a href="#keep-using-gemini-cli" className="project-link">
                    Who Can Keep Using Gemini CLI After June 18, 2026
                  </a>
                </li>
                <li>
                  <a href="#install-antigravity-cli" className="project-link">
                    How to Install Antigravity CLI (agy)
                  </a>
                </li>
                <li>
                  <a href="#migrate-from-gemini-cli" className="project-link">
                    How to Migrate from Gemini CLI to Antigravity CLI
                  </a>
                </li>
                <li>
                  <a href="#rate-limits-and-pricing" className="project-link">
                    Antigravity CLI Rate Limits and Pricing: What to Expect
                  </a>
                </li>
                <li>
                  <a href="#antigravity-vs-claude-code-vs-codex" className="project-link">
                    Antigravity CLI vs Claude Code vs Codex CLI: Pick by Workload
                  </a>
                </li>
                <li>
                  <a href="#countdown-plan" className="project-link">
                    A 30-Day Countdown Plan to June 18
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
                <strong>Deadline:</strong> June 18, 2026 for free-tier, Google
                AI Pro, and Google AI Ultra users. Gemini Code Assist Standard
                and Enterprise licenses keep working.
              </li>
              <li>
                <strong>Antigravity CLI</strong> (<code>agy</code>) is a
                Go-based, OAuth-authenticated binary. It is not open source -
                a sharp break from Gemini CLI&apos;s Apache 2.0 codebase.
              </li>
              <li>
                <strong>Migration cheat:</strong>{" "}
                <code>agy plugin import gemini</code> brings extensions over.
                Skills move from <code>.gemini/skills/</code> to{" "}
                <code>.agents/skills/</code>. <code>GEMINI.md</code> and{" "}
                <code>AGENTS.md</code> both work unchanged. MCP configs move
                into <code>mcp_config.json</code> with <code>url</code> renamed
                to <code>serverUrl</code>.
              </li>
              <li>
                <strong>Free-tier shock:</strong> developers report the weekly
                cap empties in 4-5 turns with a 166-hour reset. Gemini CLI&apos;s
                old free tier allowed up to 1,000 requests per day.
              </li>
              <li>
                <strong>Real alternatives:</strong>{" "}
                <Link href="/blog/ant-cli-getting-started" className="project-link">
                  Claude Code
                </Link>{" "}
                with Opus 4.6 (77.2% SWE-bench Verified, 1M context), Codex CLI
                with sandboxed PR-per-task, paid Gemini API on a Standard
                license, or the community BYOK clone OpenGravity.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1: What's changing */}
        <section id="whats-changing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Calendar" size="md" />
            What&apos;s Changing for Gemini CLI Users on June 18, 2026
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            On May 19, 2026 at Google I/O, Google announced that Gemini CLI and
            the Gemini Code Assist IDE extensions will stop serving requests
            for free, Google AI Pro, and Google AI Ultra accounts on June 18,
            2026. Antigravity CLI takes its place across the Antigravity 2.0
            platform. The official notice lives on the{" "}
            <a
              href="https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Google Developers Blog
            </a>
            , and the community reaction is unfolding in real time on{" "}
            <a
              href="https://github.com/google-gemini/gemini-cli/discussions/27274"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub Discussion #27274
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Here is the affected matrix in one read.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Tier</th>
                  <th className="py-3 pr-4">Status on June 18, 2026</th>
                  <th className="py-3">What you should do</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Free (Gemini Code Assist for individuals)</td>
                  <td className="py-3 pr-4">Cut off</td>
                  <td className="py-3">Migrate to Antigravity CLI or switch tool entirely</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Google AI Pro ($19.99/mo)</td>
                  <td className="py-3 pr-4">Cut off from Gemini CLI</td>
                  <td className="py-3">Antigravity Pro tier auto-applies; check new rate limits</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Google AI Ultra ($249.99/mo)</td>
                  <td className="py-3 pr-4">Cut off from Gemini CLI</td>
                  <td className="py-3">Antigravity Ultra tier auto-applies; no weekly cap</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Gemini Code Assist Standard / Enterprise</td>
                  <td className="py-3 pr-4">Unchanged</td>
                  <td className="py-3">Gemini CLI keeps working; Antigravity CLI is optional</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-foreground">Gemini Code Assist for GitHub (paid via GCP)</td>
                  <td className="py-3 pr-4">Existing installs unchanged; new installs blocked</td>
                  <td className="py-3">Plan a migration path before the next renewal cycle</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The community response landed fast. Within 24 hours of the May 19
            announcement, the official transition thread on GitHub collected
            roughly 143 thumbs-down reactions versus 4 cheers (
            <a
              href="https://github.com/google-gemini/gemini-cli/discussions/27274"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Discussion #27274, May 2026
            </a>
            ). The top concerns surface again later in this guide: closed-source
            successor, tight free-tier rate limits, dropped configuration knobs,
            and a 30-day deadline that many developers feel is too short for
            internal tooling rewrites.
          </p>
        </section>

        {/* Section 2: Why this matters */}
        <section id="open-source-to-closed-source" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitFork" size="md" />
            Why This Matters: Open-Source to Closed-Source in 30 Days
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Gemini CLI shipped under Apache 2.0 with an open contributor model.
            You could fork it, audit it, run it against a paid API key on your
            own terms, and submit pull requests upstream. Antigravity CLI does
            not preserve that pattern. The binary is closed source at launch
            and the source repo has not been opened on GitHub. Issue{" "}
            <a
              href="https://github.com/google-gemini/gemini-cli/issues/27304"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              #27304
            </a>{" "}
            on the gemini-cli repo asks the question directly. Google has not
            committed to publishing it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The Register framed the move plainly in its{" "}
            <a
              href="https://www.theregister.com/ai-ml/2026/05/20/bye-bye-gemini-cli-google-nudges-devs-toward-antigravity/5243605"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              May 20, 2026 piece
            </a>
            : open-source Gemini CLI is being replaced by a closed-source
            successor in 30 days. That headline reflects what a meaningful
            chunk of the contributor community is feeling. In Discussion
            #27274, one of the most-upvoted concerns is that volunteer work on
            the Apache 2.0 codebase now flows into a proprietary product whose
            free tier is far thinner than what it replaces.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            That is a real decision input, not a complaint to wave away. If
            your reason for picking Gemini CLI was Apache 2.0 portability,
            local forking, or vendor-neutral plumbing inside a regulated
            environment, Antigravity CLI does not give you back those
            properties. Two paths preserve them: stay on a paid Gemini API
            key with the open-source Gemini CLI fork, or switch tool. The
            decision sections later walk through both.
          </p>
        </section>

        {/* Section 3: Who can keep using Gemini CLI */}
        <section id="keep-using-gemini-cli" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="KeyRound" size="md" />
            Who Can Keep Using Gemini CLI After June 18, 2026
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The enterprise carveout is the short answer. Per the{" "}
            <a
              href="https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              official transition post
            </a>
            , three paths keep Gemini CLI serving requests after the deadline.
          </p>

          <ol className="space-y-3 mb-6 text-lg leading-relaxed list-decimal pl-6">
            <li>
              <strong>Gemini Code Assist Standard or Enterprise.</strong> Per-seat
              license sold through Google Cloud. The CLI and the IDE extensions
              both keep working. This is the path most large teams already use.
            </li>
            <li>
              <strong>Paid Gemini API key.</strong> Issue a key through{" "}
              <a
                href="https://aistudio.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                AI Studio
              </a>{" "}
              or Vertex AI and wire it into the open-source Gemini CLI binary.
              The first-party free endpoints stop, but the Apache 2.0 toolchain
              and your existing skills, hooks, and MCP configs do not need to
              change.
            </li>
            <li>
              <strong>Gemini Code Assist for GitHub via GCP.</strong> Existing
              paid installs keep working on June 18. New installs on GitHub
              orgs are blocked on that date.
            </li>
          </ol>

          <p className="text-lg leading-relaxed mb-6">
            One practitioner note. If your internal tooling depends on Gemini
            CLI inside CI/CD or an LLM gateway, the paid-API-key path is often
            cheaper than upgrading every dev seat to Antigravity Ultra. You
            also keep the open-source surface, which matters for audit and
            reproducibility.
          </p>
        </section>

        {/* Section 4: Install */}
        <section id="install-antigravity-cli" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Download" size="md" />
            How to Install Antigravity CLI (agy)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Antigravity CLI installs through a single platform-specific script.
            The binary is named <code>agy</code> and lands at{" "}
            <code>~/.local/bin/agy</code> on macOS and Linux. The official{" "}
            <a
              href="https://www.antigravity.google/docs/cli-using"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Using AGY CLI docs
            </a>{" "}
            lists the install commands, and Google&apos;s Cloud Community has a
            walkthrough on{" "}
            <a
              href="https://xbill999.medium.com/getting-started-with-antigravity-cli-26c5da90951f"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Medium
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold mb-4">macOS and Linux</h3>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`curl -fsSL https://antigravity.google/cli/install.sh | bash`}
          />

          <h3 className="text-xl font-semibold mt-8 mb-4">Windows PowerShell</h3>

          <CodeBlock
            language="powershell"
            filename="PowerShell"
            code={`irm https://antigravity.google/cli/install.ps1 | iex`}
          />

          <h3 className="text-xl font-semibold mt-8 mb-4">Windows CMD</h3>

          <CodeBlock
            language="bash"
            filename="cmd"
            code={`curl -fsSL https://antigravity.google/cli/install.cmd -o install.cmd && install.cmd && del install.cmd`}
          />

          <h3 className="text-xl font-semibold mt-8 mb-4">Add to PATH</h3>

          <p className="text-lg leading-relaxed mb-6">
            On macOS and Linux, the installer drops the binary into{" "}
            <code>~/.local/bin/</code>. If that directory is not on your{" "}
            <code>PATH</code>, add it:
          </p>

          <CodeBlock
            language="bash"
            filename="~/.zshrc or ~/.bashrc"
            code={`echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc`}
          />

          <h3 className="text-xl font-semibold mt-8 mb-4">First Run and OAuth</h3>

          <p className="text-lg leading-relaxed mb-6">
            Run <code>agy</code> with no arguments. The CLI opens your default
            browser and walks you through Google OAuth. Sign in with the same
            account you used for Gemini CLI so plugin imports pick up the right
            workspace. On a remote SSH box, <code>agy</code> detects the
            session and prints an authorization URL you open locally - this is
            a small UX improvement over Gemini CLI&apos;s old flow.
          </p>
        </section>

        {/* Section 5: Migrate */}
        <section id="migrate-from-gemini-cli" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ArrowRightLeft" size="md" />
            How to Migrate from Gemini CLI to Antigravity CLI
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            This is a seven-step migration. Plan for 30-60 minutes on a
            workspace with custom skills, hooks, and MCP servers. The field
            mappings below are sourced from the{" "}
            <a
              href="https://agentpedia.codes/blog/gemini-cli-to-antigravity-cli-migration"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              agentpedia migration guide
            </a>{" "}
            and the official{" "}
            <a
              href="https://www.antigravity.google/docs/gcli-migration"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Migrating from Gemini CLI docs
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 1 - Install agy without uninstalling gemini</h3>

          <p className="text-lg leading-relaxed mb-6">
            Keep both binaries during the transition. You will want to run a
            workflow through Gemini CLI and again through Antigravity CLI to
            confirm parity before cutting over.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 2 - Authenticate</h3>

          <p className="text-lg leading-relaxed mb-6">
            Sign in with the same Google account as your old Gemini CLI
            install. The plugin import step in the next section walks the same
            workspace.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 3 - Import Gemini CLI plugins</h3>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`agy plugin import gemini`}
          />

          <p className="text-lg leading-relaxed my-6">
            The command scans <code>~/.gemini/extensions/</code> and registers
            each entry as an Antigravity plugin. Extensions that depend on
            Node.js-only APIs trigger a warning during import - you will need
            the plugin author to ship an Antigravity-compatible build.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 4 - Move workspace skills</h3>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Per workspace
cp -r .gemini/skills/ .agents/skills/

# Confirm Antigravity finds them
agy skills list`}
          />

          <p className="text-lg leading-relaxed my-6">
            Global skills under <code>~/.config/gemini/skills/</code> auto-load
            from the new path. Workspace-local skills are the ones you need to
            copy by hand.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 5 - Migrate MCP server configs</h3>

          <p className="text-lg leading-relaxed mb-6">
            Gemini CLI stored MCP configs inline inside <code>settings.json</code>.
            Antigravity CLI expects a separate <code>mcp_config.json</code>,
            and the <code>url</code> field on each server is renamed to{" "}
            <code>serverUrl</code>.
          </p>

          <CodeBlock
            language="json"
            filename="Before - .gemini/settings.json"
            code={`{
  "mcpServers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/",
      "auth": "oauth"
    }
  }
}`}
          />

          <CodeBlock
            language="json"
            filename="After - .agents/mcp_config.json"
            code={`{
  "servers": {
    "github": {
      "serverUrl": "https://api.githubcopilot.com/mcp/",
      "auth": "oauth"
    }
  }
}`}
          />

          <h3 className="text-xl font-semibold mt-8 mb-4">Step 6 - Keep your context file unchanged</h3>

          <p className="text-lg leading-relaxed mb-6">
            Both <code>GEMINI.md</code> and <code>AGENTS.md</code> are read by
            Antigravity CLI without modification. No rename, no reformat. If
            your team already standardized on <code>AGENTS.md</code> for
            cross-tool portability with Claude Code, you are already done with
            this step.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 7 - Validate hooks end-to-end</h3>

          <p className="text-lg leading-relaxed mb-6">
            Pre-tool-call hooks, stop hooks, and JSON event hooks fire the same
            way under Antigravity CLI. Custom themes embedded in extensions are
            dropped silently during plugin import - if any of your hooks
            depended on theme metadata, that link breaks. Run a representative
            workflow before you trust the migration.
          </p>

          <h3 className="text-xl font-semibold mb-4">What does NOT carry over</h3>

          <ul className="skill-list mb-6">
            <li>
              <strong>Custom themes</strong> embedded inside extensions are
              dropped on import. Re-author them as Antigravity plugins if you
              need them back.
            </li>
            <li>
              <strong>Terminal-level <code>gemini skills</code> command.</strong>{" "}
              Antigravity CLI does not expose an equivalent. Skill management
              moved inside the agent via <code>/skills</code>.
            </li>
            <li>
              <strong>Per-call temperature, top_k, and system instruction
              overrides.</strong> Gemini CLI flags for these are gone. Multiple
              comments on Discussion #27274 flag this as a workflow regression
              for fine-tuned prompts.
            </li>
          </ul>
        </section>

        {/* Section 6: Rate limits */}
        <section id="rate-limits-and-pricing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Gauge" size="md" />
            Antigravity CLI Rate Limits and Pricing: What to Expect
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The free-tier rate limit is the headline. Developers on
            Discussion #27274 report hitting the weekly cap within 4-5 chat
            turns, with reset windows around 166 hours.{" "}
            <a
              href="https://www.xda-developers.com/tried-googles-antigravity-limitation-made-close-it-good/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              XDA Developers
            </a>{" "}
            documented the same pattern after a week of real use. Gemini CLI&apos;s
            old free tier allowed up to 1,000 requests per day. The drop is
            steep, and it is the single largest behavior change for
            individual developers.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Tier</th>
                  <th className="py-3 pr-4">Monthly cost</th>
                  <th className="py-3 pr-4">Weekly cap</th>
                  <th className="py-3 pr-4">Refresh</th>
                  <th className="py-3">Best for</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Free</td>
                  <td className="py-3 pr-4">$0</td>
                  <td className="py-3 pr-4">Yes (tight)</td>
                  <td className="py-3 pr-4">~5h to cap</td>
                  <td className="py-3">Curious devs only</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Google AI Pro</td>
                  <td className="py-3 pr-4">$19.99</td>
                  <td className="py-3 pr-4">Yes</td>
                  <td className="py-3 pr-4">5h then cap</td>
                  <td className="py-3">Solo devs, side projects</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Google AI Ultra</td>
                  <td className="py-3 pr-4">$249.99</td>
                  <td className="py-3 pr-4">No</td>
                  <td className="py-3 pr-4">5h refresh</td>
                  <td className="py-3">Heavy daily use, agent swarms</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-foreground">Gemini Code Assist Standard</td>
                  <td className="py-3 pr-4">Per seat</td>
                  <td className="py-3 pr-4">n/a</td>
                  <td className="py-3 pr-4">n/a</td>
                  <td className="py-3">Teams keeping Gemini CLI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Pricing detail per the{" "}
            <a
              href="https://antigravity.google/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Antigravity pricing page
            </a>
            : Pro includes 1,000 credits per month, Ultra includes 25,000
            credits per month, credits cost $0.01 each, and bulk packs run
            $199 per 20,000. The single biggest functional difference between
            Pro and Ultra is the weekly cap. Ultra has none. Pro has one, and
            the cap on premium models bites under sustained agent workloads
            (multi-file refactors, long context loops, background subagents).
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The honest read: &quot;AI Pro&quot; branding implies room to work,
            but Pro&apos;s weekly cap on premium models is the wall most paying
            developers will hit by midweek. If your workload depends on heavy
            terminal use, budget Ultra or eat the Pro overage at $0.01 per
            credit.
          </p>
        </section>

        {/* Section 7: vs Claude Code vs Codex */}
        <section id="antigravity-vs-claude-code-vs-codex" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompare" size="md" />
            Antigravity CLI vs Claude Code vs Codex CLI: Pick by Workload
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Three terminal-first agent CLIs now compete for the developer who
            used to type <code>gemini</code>. The right answer is workload-
            specific. The table below pulls from{" "}
            <a
              href="https://www.datacamp.com/blog/claude-code-vs-antigravity"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              DataCamp&apos;s side-by-side
            </a>
            ,{" "}
            <a
              href="https://www.xda-developers.com/used-claude-code-google-antigravity-codex-for-month-have-clear-winner/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              XDA&apos;s one-month review
            </a>
            , and the{" "}
            <a
              href="https://lushbinary.com/blog/ai-coding-agents-comparison-cursor-windsurf-claude-copilot-kiro-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Lushbinary 2026 roundup
            </a>
            .
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Dimension</th>
                  <th className="py-3 pr-4">Antigravity CLI</th>
                  <th className="py-3 pr-4">Claude Code</th>
                  <th className="py-3">Codex CLI</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Default model</td>
                  <td className="py-3 pr-4">Gemini 3.1 Pro (+ Claude Opus/Sonnet 4.6, GPT-OSS 120B)</td>
                  <td className="py-3 pr-4">Claude Opus 4.6, 1M context</td>
                  <td className="py-3">GPT-5.5 family</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">SWE-bench Verified</td>
                  <td className="py-3 pr-4">mid-70s (Gemini 3.1 Pro)</td>
                  <td className="py-3 pr-4">77.2% (Opus 4.6)</td>
                  <td className="py-3">Competitive</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Source model</td>
                  <td className="py-3 pr-4">Closed-source Go binary</td>
                  <td className="py-3 pr-4">Closed-source TypeScript binary</td>
                  <td className="py-3">Closed-source binary + sandbox</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Workflow</td>
                  <td className="py-3 pr-4">Multi-agent, async background</td>
                  <td className="py-3 pr-4">Terminal-native, scriptable</td>
                  <td className="py-3">Sandboxed PR per task</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Free tier</td>
                  <td className="py-3 pr-4">Tight weekly cap</td>
                  <td className="py-3 pr-4">None (API or Pro/Max)</td>
                  <td className="py-3">None (API or ChatGPT Plus)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-foreground">Best for</td>
                  <td className="py-3 pr-4">Devs in Google&apos;s ecosystem</td>
                  <td className="py-3 pr-4">MCP-heavy, scripted CI agents</td>
                  <td className="py-3">PR-per-task, sandboxed runs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-4">Decision rules I follow</h3>

          <ul className="skill-list mb-6">
            <li>
              Already paying for Google AI Pro or Ultra for other reasons -
              migrate to Antigravity CLI and absorb the rate-limit shock.
            </li>
            <li>
              Need long-context refactors, MCP servers, hooks, and scripted
              CI agents - switch to{" "}
              <Link href="/blog/ant-cli-getting-started" className="project-link">
                Claude Code
              </Link>
              . The 1M context window plus Opus 4.6 is the strongest fit for
              terminal-first agentic coding.
            </li>
            <li>
              Want sandboxed PR-per-task with light terminal footprint - use
              Codex CLI. Pair with{" "}
              <Link href="/blog/codex-security-github-setup" className="project-link">
                Codex Security
              </Link>{" "}
              if you also need the AppSec scan loop.
            </li>
            <li>
              Apache 2.0 portability is non-negotiable - keep Gemini CLI on a
              paid Gemini API key issued through AI Studio or Vertex AI. You
              lose the free first-party endpoints, not the toolchain.
            </li>
            <li>
              Want to play without Google&apos;s rate limits at all - look at{" "}
              <a
                href="https://github.com/ab-613/OpenGravity"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                OpenGravity
              </a>
              , a community BYOK clone of the Antigravity UI. It is alpha,
              GPL-3.0, and does not pretend to match Antigravity CLI on
              capability - but it does sidestep the weekly cap.
            </li>
          </ul>
        </section>

        {/* Section 8: 30-day countdown */}
        <section id="countdown-plan" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ListChecks" size="md" />
            A 30-Day Countdown Plan to June 18
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            One screen. Print it, pin it, or paste it into your team&apos;s
            wiki. The goal is to finish the migration with a week to spare so
            June 18 is uneventful.
          </p>

          <ol className="space-y-3 mb-6 text-lg leading-relaxed list-decimal pl-6">
            <li>
              <strong>This week (May 21-27):</strong> decide migrate vs switch
              vs stay using the decision rules above. Make the call as a team,
              not per developer.
            </li>
            <li>
              <strong>Next 7 days (May 28-June 3):</strong> install <code>agy</code>{" "}
              in parallel with <code>gemini</code> on every workstation.
              Nobody uninstalls anything yet.
            </li>
            <li>
              <strong>Next 14 days (June 4-10):</strong> run{" "}
              <code>agy plugin import gemini</code> on each workspace. Diff
              <code> .agents/</code> against <code>.gemini/</code> and re-run
              failing skills. File migration bugs on Discussion #27274 while
              the thread is still active.
            </li>
            <li>
              <strong>Days 15-25 (June 11-15):</strong> validate hooks and MCP
              servers end-to-end. Run a real workflow under <code>agy</code>{" "}
              and compare output to a Gemini CLI run.
            </li>
            <li>
              <strong>Days 25-30 (June 16-17):</strong> archive any custom
              themes you depended on. Document what got dropped. Update your
              team&apos;s internal runbooks.
            </li>
            <li>
              <strong>Day 30 (June 18):</strong> Gemini CLI free, Pro, and
              Ultra requests stop. You should already be on <code>agy</code>{" "}
              or your chosen alternative. Do not be the team that finds out at
              9:01 AM.
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>When does Gemini CLI stop working?</AccordionTrigger>
              <AccordionContent>
                Gemini CLI and the Gemini Code Assist IDE extensions stop
                serving requests for free users, Google AI Pro, and Google AI
                Ultra subscribers on June 18, 2026. Organizations on Gemini
                Code Assist Standard or Enterprise licenses keep their
                existing access. New installs on GitHub orgs are also blocked
                on that date.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>Who is affected by the June 18, 2026 Gemini CLI shutdown?</AccordionTrigger>
              <AccordionContent>
                Three groups: free-tier users of Gemini Code Assist for
                individuals, Google AI Pro subscribers at $19.99/mo, and
                Google AI Ultra subscribers at $249.99/mo. Enterprise customers
                on Standard or Enterprise licenses, and Gemini Code Assist for
                GitHub paid through Google Cloud, keep working without change.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>Is Antigravity CLI open source?</AccordionTrigger>
              <AccordionContent>
                No. Antigravity CLI ships as a closed-source Go binary called
                agy. Gemini CLI was Apache 2.0 with public contributions. The
                community filed Issue #27304 on the gemini-cli repo asking for
                source release, and Google has not committed to publishing it.
                This is one of the loudest complaints in the migration thread.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>How do I install Antigravity CLI?</AccordionTrigger>
              <AccordionContent>
                On macOS and Linux, run <code>curl -fsSL https://antigravity.google/cli/install.sh | bash</code>.
                On Windows PowerShell, run <code>irm https://antigravity.google/cli/install.ps1 | iex</code>.
                The binary lands at <code>~/.local/bin/agy</code>. Add that
                path to your shell profile if it is not already on your PATH,
                then run <code>agy</code> to start the OAuth login flow.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>How do I migrate my Gemini CLI plugins, skills, and MCP servers?</AccordionTrigger>
              <AccordionContent>
                Run <code>agy plugin import gemini</code> to bring extensions
                over. Move workspace skills from <code>.gemini/skills/</code>{" "}
                to <code>.agents/skills/</code>. Migrate MCP configs from
                inline <code>settings.json</code> into a separate{" "}
                <code>mcp_config.json</code> and rename the <code>url</code>{" "}
                field to <code>serverUrl</code>. <code>GEMINI.md</code> and{" "}
                <code>AGENTS.md</code> both work with no rename required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>Does GEMINI.md still work in Antigravity CLI?</AccordionTrigger>
              <AccordionContent>
                Yes. Antigravity CLI reads both <code>GEMINI.md</code> and{" "}
                <code>AGENTS.md</code> without modification. You do not need
                to rename, move, or reformat your existing project context
                file. This is one of the few migration items that just works.
                Skills directories, MCP config layout, and plugin paths all
                changed, but the markdown context file did not.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>What are Antigravity CLI&apos;s free-tier rate limits?</AccordionTrigger>
              <AccordionContent>
                The free tier uses a weekly quota that refreshes every five
                hours up to a hard weekly cap. Developers in GitHub
                Discussion #27274 report exhausting the cap in 4-5 chat
                turns, with a 166-hour reset window. Gemini CLI&apos;s old
                free tier allowed up to 1,000 requests per day, so the drop
                is steep.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>Should I migrate to Antigravity CLI or switch to Claude Code?</AccordionTrigger>
              <AccordionContent>
                If you already pay for Google AI Pro or Ultra, migrate and
                absorb the rate-limit shock. If you need long-context
                refactors, scripted CI agents, MCP-heavy workflows, or
                terminal composability, switch to Claude Code with Opus 4.6.
                The 1M context window and 77.2% SWE-bench Verified score make
                it the strongest alternative for terminal-first coding.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9">
              <AccordionTrigger>Can I keep using Gemini CLI after June 18 with a paid API key?</AccordionTrigger>
              <AccordionContent>
                Yes. The open-source Gemini CLI binary keeps working if you
                point it at a paid Gemini API key issued through AI Studio or
                Vertex AI, or if your team holds a Gemini Code Assist Standard
                or Enterprise license. You lose Google&apos;s first-party free
                endpoints but keep the Apache 2.0 toolchain.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10">
              <AccordionTrigger>What Gemini CLI features don&apos;t carry over to Antigravity CLI?</AccordionTrigger>
              <AccordionContent>
                Custom themes embedded in extensions are dropped silently
                during plugin import. The terminal-level{" "}
                <code>gemini skills</code> command has no equivalent in agy;
                skills are managed inside the agent via <code>/skills</code>{" "}
                only. Several Gemini CLI flags for temperature, top_k, and
                system instruction overrides are not exposed in the new CLI
                surface.
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
                <Link href="/blog/ant-cli-getting-started" className="project-link">
                  Getting Started with the ant CLI: Deploy Claude Agents
                </Link>{" "}
                - the Claude side of the terminal-first agent CLI story.
              </li>
              <li>
                <Link href="/blog/codex-security-github-setup" className="project-link">
                  OpenAI Codex Security GitHub Setup Guide
                </Link>{" "}
                - if you are evaluating Codex CLI, the security scanner is the
                companion piece.
              </li>
              <li>
                <Link href="/blog/claude-managed-agents-outcomes" className="project-link">
                  Claude Managed Agents Outcomes
                </Link>{" "}
                - what multi-agent workflows look like when an evaluator agent
                grades each draft.
              </li>
              <li>
                <Link href="/blog/claude-code-cost-tracking" className="project-link">
                  Claude Code Cost Tracking
                </Link>{" "}
                - cost-discipline patterns that transfer cleanly to Antigravity
                Pro and Ultra credit math.
              </li>
              <li>
                <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
                  Hardening AI Agents in CI/CD Against Prompt Injection
                </Link>{" "}
                - adjacent risk surface for teams migrating prompt-injection-
                sensitive workflows.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
