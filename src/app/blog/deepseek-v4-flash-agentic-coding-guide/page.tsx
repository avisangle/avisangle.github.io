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
  title: "DeepSeek V4 Flash for Claude Code Users",
  description:
    "DeepSeek V4 Flash 0731 costs $0.14/$0.28 per 1M tokens and speaks the Anthropic API. How to route Claude Code work to it, and when not to.",
  keywords: [
    "deepseek v4 flash claude code",
    "deepseek v4 flash agentic coding",
    "deepseek v4 flash benchmarks",
    "deepseek anthropic api base url",
    "deepseek v4 flash pricing",
    "deepseek v4 flash vs claude",
    "deepseek v4 flash 0731",
    "how to use deepseek v4 flash with claude code",
    "deepseek v4 pro vs flash",
    "run deepseek v4 flash locally",
    "deepseek v4 flash context window",
    "deepseek open weights mit",
    "deepseek terminal bench",
    "cheap agentic coding model",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "DeepSeek V4 Flash for Claude Code: Setup, Routing, and Real Costs",
    description:
      "DeepSeek V4 Flash 0731 costs $0.14/$0.28 per 1M tokens and speaks the Anthropic API. How to route Claude Code work to it, and when not to.",
    url: "https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-08-04T00:00:00.000Z",
    modifiedTime: "2026-08-04T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-deepseek-v4-flash-agentic-coding-guide.png",
        width: 1200,
        height: 630,
        alt: "DeepSeek V4 Flash for Claude Code - Setup, Routing, and Real Costs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepSeek V4 Flash for Claude Code: Setup, Routing, and Real Costs",
    description:
      "DeepSeek V4 Flash 0731 costs $0.14/$0.28 per 1M tokens and speaks the Anthropic API. How to route Claude Code work to it, and when not to.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-deepseek-v4-flash-agentic-coding-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide",
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
  headline: "DeepSeek V4 Flash for Claude Code: Setup, Routing, and Real Costs",
  description:
    "DeepSeek V4 Flash 0731 costs $0.14/$0.28 per 1M tokens and speaks the Anthropic API. How to route Claude Code work to it, and when not to.",
  image: "https://avinashsangle.com/og-deepseek-v4-flash-agentic-coding-guide.png",
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
      "DeepSeek V4 Flash",
      "Agentic Coding",
      "Model Context Protocol",
      "AI Automation",
      "DevOps",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
  },
  datePublished: "2026-08-04",
  dateModified: "2026-08-04",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide",
  },
  keywords:
    "DeepSeek V4 Flash, agentic coding, Claude Code, model routing, open weights, AI cost optimization, Terminal Bench",
  articleSection: "AI Development",
  wordCount: 2950,
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
      name: "DeepSeek V4 Flash for Claude Code",
      item: "https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does DeepSeek V4 Flash cost per 1M tokens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DeepSeek charges $0.14 per 1M input tokens on a cache miss, $0.0028 on a cache hit, and $0.28 per 1M output tokens. V4 Pro costs roughly three times more at $0.435 input and $0.87 output. A peak-hour policy charging 2x has been announced but has no effective date yet.",
      },
    },
    {
      "@type": "Question",
      name: "How do I configure Claude Code to use DeepSeek V4 Flash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Set ANTHROPIC_BASE_URL to https://api.deepseek.com/anthropic, put your DeepSeek key in ANTHROPIC_AUTH_TOKEN, then map the model tiers. DeepSeek's own documented config puts deepseek-v4-pro in the Opus and Sonnet slots and deepseek-v4-flash in the Haiku slot and subagents.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to track the cost of a Claude Code session on DeepSeek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not through Claude Code's own /cost command, which prices tokens against Anthropic's rates and will report numbers that are wrong by roughly two orders of magnitude. Read usage from the DeepSeek platform dashboard instead, or parse token counts from the session JSONL and apply DeepSeek's rates yourself.",
      },
    },
    {
      "@type": "Question",
      name: "Can DeepSeek V4 Flash run locally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The weights are MIT-licensed on Hugging Face at 284B total parameters with 13B active per token. Two NVIDIA DGX Sparks run it at a reported 60 tokens per second for around 8,200 euros. At $0.14 per 1M input tokens, the API stays cheaper for a very long time.",
      },
    },
    {
      "@type": "Question",
      name: "Is DeepSeek V4 Flash better than DeepSeek V4 Pro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On agent benchmarks, yes. The 0731 build beats V4-Pro-Preview on all nine published agent benchmarks, including 82.7 against 72.1 on Terminal Bench 2.1 and 54.4 against 12.8 on DeepSWE. DeepSeek has said an updated Pro is coming, which will likely reverse this.",
      },
    },
    {
      "@type": "Question",
      name: "How does DeepSeek V4 Flash compare to Claude on agent benchmarks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It trails Claude Opus 4.8 on every benchmark in DeepSeek's own table. The gap is narrow on Terminal Bench (82.7 against 85.0) and wide on NL2Repo (54.2 against 69.7). The pitch is not parity, it is most of the capability on tool-shaped work at a fraction of the price.",
      },
    },
    {
      "@type": "Question",
      name: "Does DeepSeek train on my API data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no opt-out for training use on the hosted API, and this came up repeatedly in the launch discussion without a vendor response. For work under an NDA that is a blocker rather than a preference. Self-hosting the MIT-licensed weights is the only workaround today.",
      },
    },
    {
      "@type": "Question",
      name: "What is the DeepSeek V4 Flash context window?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One million tokens, with a maximum output length of 384,000 tokens. The API supports 2,500 concurrent requests on Flash against 500 on Pro, which matters if you plan to fan out parallel subagents rather than run one long session.",
      },
    },
  ],
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Route Claude Code to DeepSeek V4 Flash",
  description:
    "Configure Claude Code to use DeepSeek V4 Flash and V4 Pro through DeepSeek's Anthropic-compatible endpoint, using the vendor's recommended tier mapping.",
  totalTime: "PT10M",
  tool: [
    { "@type": "HowToTool", name: "Claude Code CLI" },
    { "@type": "HowToTool", name: "A DeepSeek platform API key" },
  ],
  supply: [{ "@type": "HowToSupply", name: "DeepSeek API key from platform.deepseek.com" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Point Claude Code at the Anthropic-compatible endpoint",
      text: "Export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic so Claude Code sends Anthropic-shaped requests to DeepSeek.",
      url: "https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide#claude-code-setup",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Supply the DeepSeek key",
      text: "Set ANTHROPIC_AUTH_TOKEN to your DeepSeek API key, pasted raw with no Bearer prefix, and unset ANTHROPIC_API_KEY to avoid a credential conflict.",
      url: "https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide#claude-code-setup",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Map the model tiers",
      text: "Point the Opus and Sonnet defaults at deepseek-v4-pro, and the Haiku default plus CLAUDE_CODE_SUBAGENT_MODEL at deepseek-v4-flash.",
      url: "https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide#claude-code-setup",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Verify with /status",
      text: "Launch Claude Code, run /status, and confirm the base URL shows deepseek and the model shows deepseek-v4-pro before sending real work.",
      url: "https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide#claude-code-setup",
    },
  ],
})

export default function DeepSeekV4FlashAgenticCodingGuidePage() {
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
            { label: "DeepSeek V4 Flash for Claude Code" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            DeepSeek V4 Flash for Claude Code: Setup, Routing, and Real Costs
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            DeepSeek V4 Flash 0731, released July 31, 2026, is a 284B
            Mixture-of-Experts model with 13B active parameters that costs $0.14
            input and $0.28 output per 1M tokens. It speaks the Anthropic API, so{" "}
            <Link href="/blog/claude-md-guide" className="project-link">
              Claude Code
            </Link>{" "}
            can point at it with four environment variables. It wins on
            short-horizon tool use and loses on long-horizon agent work.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> August 4, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-08-04</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              "DeepSeek V4 Flash",
              "Agentic Coding",
              "Claude Code",
              "Open Weights",
              "Model Routing",
              "AI Cost Optimization",
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
                  <a href="#what-is-v4-flash" className="project-link">
                    What Changed on July 31, 2026
                  </a>
                </li>
                <li>
                  <a href="#benchmarks" className="project-link">
                    The Benchmarks: Where Flash Beats Pro
                  </a>
                </li>
                <li>
                  <a href="#claimed-vs-verified" className="project-link">
                    What the Benchmarks Don&apos;t Show
                  </a>
                </li>
                <li>
                  <a href="#claude-code-setup" className="project-link">
                    How to Use DeepSeek V4 Flash in Claude Code
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="project-link">
                    Pricing: Cheap Per Token, Cheap Per Task
                  </a>
                </li>
                <li>
                  <a href="#routing" className="project-link">
                    When to Route to Flash and When Not To
                  </a>
                </li>
                <li>
                  <a href="#local" className="project-link">
                    Can You Run DeepSeek V4 Flash Locally?
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
        <Card className="card-accent-left mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CategoryIcon icon="Zap" size="sm" />
              TL;DR
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="skill-list">
              <li>
                <strong>Post-training only:</strong> same 284B architecture as
                the April preview, no new pretraining. DeepSWE went from 7.3 to
                54.4 and Terminal Bench 2.1 from 61.8 to 82.7 on identical
                weights.
              </li>
              <li>
                <strong>It beat its own flagship:</strong> Flash outscores
                V4-Pro-Preview on all nine published agent benchmarks, which is
                why the release took two Hacker News front pages in three days.
              </li>
              <li>
                <strong>The price is real:</strong> $0.14/$0.28 per 1M tokens,
                and $0.0028 on cache hits. Artificial Analysis ran its full
                Intelligence Index suite for $72.02 and scored it 50, third of
                101 models.
              </li>
              <li>
                <strong>Route carefully:</strong> Flash beats GPT-5.6 Terra on
                Terminal Bench and Toolathlon, then loses Agents&apos; Last Exam
                25.2 to 50.4. It executes well. It doesn&apos;t plan.
              </li>
              <li>
                <strong>My take:</strong> put it on search, grep, and subagent
                fan-out inside a stack you already trust. Keep Claude on the code
                that ships.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1 */}
        <section id="what-is-v4-flash" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Sparkles" size="md" />
            What Changed on July 31, 2026
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            DeepSeek shipped <code>DeepSeek-V4-Flash-0731</code> on July 31,
            2026, graduating Flash from preview to public beta and releasing the
            weights under the MIT license the same week. The interesting part
            isn&apos;t the release itself. It&apos;s that nothing about the model
            got bigger. Same 284B-parameter Mixture-of-Experts architecture, same
            13B active parameters per token, same 1M-token context. Every gain
            came from a new post-training run.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            That distinction matters more than the headline numbers. Post-training
            is the step that teaches a model strategy, planning, error-checking,
            and recovery - the behaviours an agent needs when a tool call fails
            and it has to decide what to do next. DeepSeek moved DeepSWE from 7.3
            to 54.4 without touching the weights&apos; capacity, which is a
            different and more transferable result than &quot;we trained something
            larger.&quot;
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One number needs clearing up before the tables make sense. The{" "}
            <a
              href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Hugging Face repo
            </a>{" "}
            reports 304B total parameters while every write-up says 284B. Both are
            right. The repo total includes the attached DSpark speculative-decoding
            draft module; the model itself is 284B with 13B active. If you&apos;re
            sizing hardware, 284B is the number that matters.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Housekeeping before you write any config: the model ID is{" "}
            <code>deepseek-v4-flash</code>. The older <code>deepseek-chat</code>{" "}
            and <code>deepseek-reasoner</code> aliases are retired, so any guide
            published before July 31 will hand you a dead model name alongside
            stale benchmark numbers.
          </p>
        </section>

        {/* Section 2 */}
        <section id="benchmarks" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="BarChart3" size="md" />
            The Benchmarks: Where Flash Beats Pro
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The story that carried this release is that the cheap model beat the
            expensive one. Flash-0731 outscores DeepSeek&apos;s own
            V4-Pro-Preview on all nine published agent benchmarks. Here is the
            full table from the model card, with DeepSeek&apos;s own comparison
            columns intact.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Benchmark</th>
                  <th className="py-3 pr-4">Flash 0731</th>
                  <th className="py-3 pr-4">Flash Preview</th>
                  <th className="py-3 pr-4">V4-Pro-Preview</th>
                  <th className="py-3 pr-4">GLM-5.2</th>
                  <th className="py-3">Claude Opus 4.8</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Terminal Bench 2.1</td>
                  <td className="py-3 pr-4">82.7</td>
                  <td className="py-3 pr-4">61.8</td>
                  <td className="py-3 pr-4">72.1</td>
                  <td className="py-3 pr-4">81.0</td>
                  <td className="py-3">85.0</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">DeepSWE</td>
                  <td className="py-3 pr-4">54.4</td>
                  <td className="py-3 pr-4">7.3</td>
                  <td className="py-3 pr-4">12.8</td>
                  <td className="py-3 pr-4">46.2</td>
                  <td className="py-3">58.0</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Cybergym</td>
                  <td className="py-3 pr-4">76.7</td>
                  <td className="py-3 pr-4">38.7</td>
                  <td className="py-3 pr-4">52.7</td>
                  <td className="py-3 pr-4">n/a</td>
                  <td className="py-3">83.1</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Toolathlon-Verified</td>
                  <td className="py-3 pr-4">70.3</td>
                  <td className="py-3 pr-4">49.7</td>
                  <td className="py-3 pr-4">55.9</td>
                  <td className="py-3 pr-4">59.9</td>
                  <td className="py-3">76.2</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">NL2Repo</td>
                  <td className="py-3 pr-4">54.2</td>
                  <td className="py-3 pr-4">39.4</td>
                  <td className="py-3 pr-4">38.5</td>
                  <td className="py-3 pr-4">48.9</td>
                  <td className="py-3">69.7</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">DSBench-FullStack</td>
                  <td className="py-3 pr-4">68.7</td>
                  <td className="py-3 pr-4">37.0</td>
                  <td className="py-3 pr-4">41.8</td>
                  <td className="py-3 pr-4">61.8</td>
                  <td className="py-3">71.6</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">DSBench-Hard</td>
                  <td className="py-3 pr-4">59.6</td>
                  <td className="py-3 pr-4">25.8</td>
                  <td className="py-3 pr-4">31.1</td>
                  <td className="py-3 pr-4">54.5</td>
                  <td className="py-3">71.7</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">AutomationBench</td>
                  <td className="py-3 pr-4">25.1</td>
                  <td className="py-3 pr-4">10.8</td>
                  <td className="py-3 pr-4">12.8</td>
                  <td className="py-3 pr-4">12.9</td>
                  <td className="py-3">27.2</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Agents&apos; Last Exam</td>
                  <td className="py-3 pr-4">25.2</td>
                  <td className="py-3 pr-4">15.8</td>
                  <td className="py-3 pr-4">16.5</td>
                  <td className="py-3 pr-4">23.8</td>
                  <td className="py-3">25.7</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The DeepSWE row is the one worth staring at. A jump from 7.3 to 54.4
            on the same weights is roughly sevenfold, and DeepSWE measures
            end-to-end software engineering against real repositories. A preview
            model scoring 7.3 was effectively unusable for that work. At 54.4 it
            is in the conversation.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Now read the Opus column honestly, because most coverage skipped it.
            Flash trails Claude Opus 4.8 on every single benchmark in
            DeepSeek&apos;s own table. It&apos;s close on Terminal Bench (82.7
            against 85.0) and near-identical on Agents&apos; Last Exam (25.2
            against 25.7). It&apos;s 15 points behind on NL2Repo and 12 behind on
            DSBench-Hard. So the pitch was never &quot;as good as Opus.&quot; The
            pitch is 70 to 90 percent of Opus on tool-shaped work at roughly two
            percent of the price, and that ratio is interesting enough without
            inflating it.
          </p>
        </section>

        {/* Section 3 */}
        <section id="claimed-vs-verified" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="SearchCheck" size="md" />
            What the Benchmarks Don&apos;t Show
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Everything in the table above is DeepSeek reporting on DeepSeek. That
            doesn&apos;t make it wrong, but it changes which rows you can lean on.
            Three caveats are worth carrying into any decision.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>DeepSeek ran its own harness.</strong> The model card notes
            that the official V4-Flash &quot;natively supports the Responses API
            format and is specifically adapted for Codex,&quot; which means the
            cross-vendor comparisons aren&apos;t same-harness. Commenters on the{" "}
            <a
              href="https://news.ycombinator.com/item?id=49119559"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              launch thread
            </a>{" "}
            caught this within hours and flagged that somebody will eventually
            produce a same-harness run.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>It is not on the public leaderboard.</strong> I checked the{" "}
            <a
              href="https://www.tbench.ai/leaderboard/terminal-bench/2.1"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Terminal-Bench 2.1 leaderboard
            </a>{" "}
            on August 4 and there is no DeepSeek entry at all. The board is led by
            Claude Code with Fable 5 at 83.8 percent, Codex with GPT-5.5 at 83.1,
            Claude Code with Opus 4.8 at 78.9, and Codex with GPT-5.6 Terra at
            78.4. Until a submission lands, 82.7 is a vendor number sitting next
            to a set of independently reproduced ones.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Independent scoring exists and is slightly lower.</strong>{" "}
            <a
              href="https://artificialanalysis.ai/models/deepseek-v4-flash"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Artificial Analysis
            </a>{" "}
            measured somewhat below DeepSeek&apos;s reported figures on its own
            suite, and still put the model at 50 on its Intelligence Index,
            ranking third out of 101 models against a median of 25. That is a
            strong independent result, and it is not the same as the vendor
            table.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The practical rule I&apos;d take from this: trust the
            model-against-itself rows completely and treat the cross-vendor rows
            as directional. Flash-0731 against Flash-Preview is airtight - same
            weights, same harness, same evaluator, one variable changed. The Opus
            and GPT columns are two different harnesses being compared through a
            single lab&apos;s reporting. A useful framing surfaced in that HN
            thread is that harness quality is now part of the model, and the
            future is paired model-and-harness releases rather than plain weight
            dumps.
          </p>
        </section>

        {/* Section 4 */}
        <section id="claude-code-setup" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Terminal" size="md" />
            How to Use DeepSeek V4 Flash in Claude Code
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            DeepSeek runs an Anthropic-compatible endpoint that translates
            Anthropic message format, tool calls, and streaming into
            DeepSeek-native execution. You keep the Claude Code CLI you already
            use and repoint it. The official config lives in{" "}
            <a
              href="https://api-docs.deepseek.com/guides/coding_agents/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              DeepSeek&apos;s coding-agents guide
            </a>
            , and it looks like this.
          </p>

          <CodeBlock
            language="bash"
            filename="~/.zshrc (or per-shell before launching claude)"
            code={`# Point Claude Code at DeepSeek's Anthropic-compatible endpoint
export ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="YOUR_DEEPSEEK_API_KEY"

# The main loop runs on Pro
export ANTHROPIC_MODEL="deepseek-v4-pro"
export ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-v4-pro"
export ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-pro"

# Flash takes the cheap tier: background jobs and subagents
export ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_SUBAGENT_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_EFFORT_LEVEL="max"`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Read that mapping again, because it is the whole argument of this
            post. DeepSeek&apos;s own recommended configuration does not put Flash
            in the main loop. Opus and Sonnet slots both get <strong>Pro</strong>.
            Flash gets the Haiku slot and the subagents. The vendor is telling you
            where its own model belongs, and it lines up exactly with the
            benchmark shape: Flash for file search, grep, title generation, and
            parallel fan-out; Pro for the code that ships. Community reports
            around the setup guides put the resulting spend split near 85 percent
            Pro and 15 percent Flash.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two details that will bite you. Paste the DeepSeek key raw, with no{" "}
            <code>Bearer</code> prefix. And clear{" "}
            <code>ANTHROPIC_API_KEY</code> before launching, because when both it
            and <code>ANTHROPIC_AUTH_TOKEN</code> are set, Claude Code can pick
            the wrong credential and hand you an auth error that reads like a bad
            key.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`unset ANTHROPIC_API_KEY   # avoid a credential conflict
claude                    # launch Claude Code
# then inside the session:
/status                   # base URL should show deepseek, model deepseek-v4-pro`}
          />

          <p className="text-lg leading-relaxed mb-6">
            If you want the OpenAI-shaped path instead - for Cline, Roo Code,
            OpenCode, or your own script - the base URL is{" "}
            <code>https://api.deepseek.com</code> with the same model IDs. The{" "}
            <a
              href="https://api-docs.deepseek.com/guides/anthropic_api/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Anthropic API compatibility page
            </a>{" "}
            documents full or partial support for <code>max_tokens</code>,{" "}
            <code>system</code>, <code>stream</code>, <code>temperature</code>,{" "}
            <code>top_p</code>, tool definitions, and thinking config. The model
            card recommends <code>temperature 1.0</code> with{" "}
            <code>top_p 0.95</code> for agentic work, and{" "}
            <code>reasoning_effort</code> accepts <code>low</code>,{" "}
            <code>high</code>, or <code>max</code>.
          </p>

          <Card className="card-accent-left mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="TriangleAlert" size="sm" />
                The honest caveat, up front
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                A developer on the{" "}
                <a
                  href="https://news.ycombinator.com/item?id=49120299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  August 3 analysis thread
                </a>{" "}
                reported plainly that he tried DeepSeek with Claude Code and it
                underperformed - while separately praising the same model inside a
                product where he writes the prompts himself. Both can be true, and
                the gap between them is the actual finding. The compatibility
                layer translates the wire format, not the prompt engineering.
                Claude Code&apos;s harness, its system prompts, and its tool
                descriptions were all tuned against Anthropic models. Swapping the
                endpoint is possible. It isn&apos;t free.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section 5 */}
        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="DollarSign" size="md" />
            Pricing: Cheap Per Token, Cheap Per Task
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            I&apos;ve written before about cheap models that are only cheap per
            token and turn expensive per task. This one holds up on both, which is
            rare enough to say plainly.
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
                  <td className="py-3 pr-4 font-semibold text-foreground">DeepSeek V4 Flash</td>
                  <td className="py-3 pr-4">$0.14</td>
                  <td className="py-3 pr-4">$0.28</td>
                  <td className="py-3">$0.0028</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">DeepSeek V4 Pro</td>
                  <td className="py-3 pr-4">$0.435</td>
                  <td className="py-3 pr-4">$0.87</td>
                  <td className="py-3">$0.0036</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Claude Haiku 4.5</td>
                  <td className="py-3 pr-4">$1.00</td>
                  <td className="py-3 pr-4">$5.00</td>
                  <td className="py-3">-</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Claude Sonnet 5</td>
                  <td className="py-3 pr-4">$3.00</td>
                  <td className="py-3 pr-4">$15.00</td>
                  <td className="py-3">$0.30</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Claude Opus 5 / 4.8</td>
                  <td className="py-3 pr-4">$5.00</td>
                  <td className="py-3 pr-4">$25.00</td>
                  <td className="py-3">$0.50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Blend those at a three-to-one input-to-output mix, which is roughly
            what an agent loop looks like, and Flash lands near $0.175 per 1M
            against Opus 4.8&apos;s $10. Call it 57 times cheaper, with the mix
            stated so you can redo the math for your own workload. A naive
            one-to-one blend gives you 71 times, which is why bare multiples in
            launch coverage are worth ignoring.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Cost per task is the number that actually decides routing, and there
            is an independent one. Artificial Analysis puts Flash at max effort
            around $0.03 per task at index 50, against OpenAI Luna at $0.03, $0.04
            and $0.07 for index 46, 49 and 51. Comparable intelligence at two to
            three times lower cost, and two to five times slower inference. The
            blunt summary from the thread is the right one: it&apos;s cheaper if
            you don&apos;t value your time.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The sleeper number is cache-hit input at $0.0028 per 1M, a 98 percent
            discount that Artificial Analysis ranks first across all models. If
            you&apos;re running an agent loop that resends a large stable prefix
            every turn, that&apos;s where your real saving lives, not in the
            headline input price. Worth pairing with actual measurement - see my{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              Claude Code cost tracking guide
            </Link>{" "}
            for getting per-session numbers you can trust.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two costs nobody is writing about. First, verbosity: Artificial
            Analysis flags Flash as very verbose, burning 210M output tokens
            during evaluation against a 100M median. Output costs double the
            input rate, so a model that talks twice as much eats part of its own
            advantage. Second, and more consequential,{" "}
            <a
              href="https://api-docs.deepseek.com/quick_start/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              DeepSeek&apos;s pricing page
            </a>{" "}
            announces a peak/off-peak policy charging <strong>2x</strong> during
            09:00-12:00 and 14:00-18:00 Beijing Time, with the effective date
            still pending. From India that&apos;s roughly 06:30-09:30 and
            11:30-15:30 IST, squarely inside a working day. Build the multiplier
            into any projection now rather than discovering it in a bill.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One more spec that matters for routing: Flash allows 2,500 concurrent
            requests against Pro&apos;s 500. If your plan involves fanning out
            parallel subagents rather than running one long session, that ceiling
            is the reason Flash belongs in the subagent slot.
          </p>
        </section>

        {/* Section 6 */}
        <section id="routing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Route" size="md" />
            When to Route to Flash and When Not To
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The benchmark table has a shape, and once you see it the routing
            decision writes itself. Benchmarks that measure &quot;call tools
            correctly across a handful of steps&quot; are where Flash wins.
            Benchmarks that measure &quot;stay coherent across a long autonomous
            run&quot; are where it falls apart. Here are both vendors&apos;
            self-reported numbers side by side.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Benchmark</th>
                  <th className="py-3 pr-4">V4 Flash 0731</th>
                  <th className="py-3 pr-4">GPT-5.6 Terra</th>
                  <th className="py-3">What it measures</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Terminal Bench 2.1</td>
                  <td className="py-3 pr-4">82.7</td>
                  <td className="py-3 pr-4">78.4</td>
                  <td className="py-3">Short-horizon terminal tool use</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Toolathlon</td>
                  <td className="py-3 pr-4">70.3</td>
                  <td className="py-3 pr-4">53.1</td>
                  <td className="py-3">Multi-tool orchestration</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">DeepSWE</td>
                  <td className="py-3 pr-4">54.4</td>
                  <td className="py-3 pr-4">69.6</td>
                  <td className="py-3">Real repository engineering</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Agents&apos; Last Exam</td>
                  <td className="py-3 pr-4">25.2</td>
                  <td className="py-3 pr-4">50.4</td>
                  <td className="py-3">Long-horizon agentic reasoning</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Flash executes. It doesn&apos;t plan. Give it the step, not the goal.
            That single sentence turns the table into a routing rule, and every
            recommendation below follows from it.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Task</th>
                  <th className="py-3 pr-4">Route to</th>
                  <th className="py-3">Why</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Search, grep, file discovery, title generation</td>
                  <td className="py-3 pr-4">V4 Flash</td>
                  <td className="py-3">Pure tool dispatch, 70.3 Toolathlon, $0.14 input</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Parallel subagent fan-out</td>
                  <td className="py-3 pr-4">V4 Flash</td>
                  <td className="py-3">2,500 concurrent ceiling, negligible per-call cost</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Log triage, lint fixes, mechanical refactors</td>
                  <td className="py-3 pr-4">V4 Flash</td>
                  <td className="py-3">Well-specified and short; cheap to re-run on failure</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Multi-file feature work in a real repo</td>
                  <td className="py-3 pr-4">Claude Code</td>
                  <td className="py-3">Flash gives up 15 points on both DeepSWE and NL2Repo</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Overnight autonomous runs</td>
                  <td className="py-3 pr-4">Claude Code</td>
                  <td className="py-3">Agents&apos; Last Exam 25.2 against 50.4; coherence drops</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Anything where a missed defensive check is expensive</td>
                  <td className="py-3 pr-4">Claude Code</td>
                  <td className="py-3">Cheaper models need more correcting, and that time is real</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">High-volume product features you prompt yourself</td>
                  <td className="py-3 pr-4">V4 Flash</td>
                  <td className="py-3">The one place practitioners consistently report it shining</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Notice that this is the same conclusion DeepSeek&apos;s own Claude
            Code config already encodes. Pro in the Opus and Sonnet slots, Flash
            in Haiku and subagents. When the vendor&apos;s defaults agree with the
            benchmark shape and with independent measurement, that&apos;s about as
            much corroboration as you get before running it yourself. If
            you&apos;re building the fan-out side of this, my{" "}
            <Link href="/blog/claude-code-dynamic-workflows-guide" className="project-link">
              dynamic workflows guide
            </Link>{" "}
            covers the orchestration mechanics.
          </p>
        </section>

        {/* Section 7 */}
        <section id="local" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Cpu" size="md" />
            Can You Run DeepSeek V4 Flash Locally?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Yes, and the active-parameter count is why. You need memory for 284B
            parameters but compute for only the 13B active per token, which is a
            very different hardware problem from a dense model of the same size.
            The weights are MIT-licensed and downloadable, so there&apos;s no
            license friction for commercial use either.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The model card documents vLLM with <code>--speculative-config</code>{" "}
            and SGLang with <code>--speculative-algorithm DSPARK</code>, using the
            DSpark draft module that ships attached to the weights. A
            representative SGLang launch looks like this.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal (SGLang, multi-GPU)"
            code={`python -m sglang.launch_server \\
  --model-path deepseek-ai/DeepSeek-V4-Flash-0731 \\
  --tp 4 \\
  --moe-runner-backend flashinfer_mxfp4 \\
  --speculative-algorithm DSPARK`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Real numbers reported by people who actually did it: two NVIDIA DGX
            Sparks run it at roughly 60 tokens per second at full context for
            around 8,200 euros. Two RTX PRO 6000s in a workstation get you faster
            for about $20,000. A Mac Studio M3 Ultra with 256GB is both slower and
            more expensive at around 12,000 euros. Quantized GGUF builds exist for
            people who want to try it on less.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The honest conclusion is the one from that same thread: even for
            mid-level projects the API is orders of magnitude cheaper, because you
            skip the setup and the maintenance. At $0.14 per 1M input tokens you
            can burn an enormous amount of inference before 8,200 euros of
            hardware breaks even. Local makes sense for data residency, for a
            hard no-training guarantee, and for air-gapped work. It doesn&apos;t
            make sense as a cost optimization. If self-hosting is your real goal,
            my{" "}
            <Link href="/blog/glm-5-2-local-coding-guide" className="project-link">
              GLM-5.2 local guide
            </Link>{" "}
            covers a model that fits on hardware you more likely already own.
          </p>
        </section>

        {/* Section 8 */}
        <section id="limitations" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="TriangleAlert" size="md" />
            Limitations and Gotchas
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Every recap I read skipped this section, so here it is with sources
            attached.
          </p>

          <Card className="card-accent-left mb-6">
            <CardContent className="pt-6">
              <ul className="skill-list">
                <li>
                  <strong>No training opt-out.</strong> Raised directly in the
                  launch discussion and unanswered. For client work under an NDA
                  that&apos;s a blocker, not a preference. Self-hosting the MIT
                  weights is the only workaround.
                </li>
                <li>
                  <strong>No multimodal.</strong> Text only, which rules it out
                  for screenshot-driven or document-heavy agent work.
                </li>
                <li>
                  <strong>Vendor-harness benchmarks.</strong> Still absent from
                  the public Terminal-Bench leaderboard as of August 4.
                </li>
                <li>
                  <strong>Very verbose.</strong> 210M output tokens in the
                  Artificial Analysis eval against a 100M median, on a model where
                  output costs double the input rate.
                </li>
                <li>
                  <strong>Slower than the frontier.</strong> 122.7 tokens per
                  second and 1.31 seconds to first token. Fine for background
                  work, noticeable in an interactive loop.
                </li>
                <li>
                  <strong>Peak-hour 2x pricing is announced but undated.</strong>{" "}
                  Plan for it before it lands.
                </li>
                <li>
                  <strong>The harness is tuned for Anthropic models.</strong>{" "}
                  Expect to re-tune your{" "}
                  <Link href="/blog/claude-md-guide" className="project-link">
                    CLAUDE.md
                  </Link>{" "}
                  and subagent prompts, and expect the first session to feel worse
                  than the benchmarks promised.
                </li>
              </ul>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed mb-6">
            One more thing about cost visibility. Claude Code&apos;s{" "}
            <code>/cost</code> command prices tokens against Anthropic&apos;s
            rates, so pointed at DeepSeek it will report numbers that are wrong by
            roughly two orders of magnitude. Read usage from the DeepSeek platform
            dashboard, or pull token counts out of the session JSONL and apply
            DeepSeek&apos;s rates yourself. Don&apos;t trust the in-session figure
            after you&apos;ve swapped the endpoint.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="MessageCircleQuestion" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How much does DeepSeek V4 Flash cost per 1M tokens?
              </AccordionTrigger>
              <AccordionContent>
                DeepSeek charges $0.14 per 1M input tokens on a cache miss,
                $0.0028 on a cache hit, and $0.28 per 1M output tokens. V4 Pro
                costs roughly three times more at $0.435 input and $0.87 output. A
                peak-hour policy charging 2x has been announced but has no
                effective date yet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do I configure Claude Code to use DeepSeek V4 Flash?
              </AccordionTrigger>
              <AccordionContent>
                Set <code>ANTHROPIC_BASE_URL</code> to{" "}
                <code>https://api.deepseek.com/anthropic</code>, put your DeepSeek
                key in <code>ANTHROPIC_AUTH_TOKEN</code>, then map the model
                tiers. DeepSeek&apos;s own documented config puts{" "}
                <code>deepseek-v4-pro</code> in the Opus and Sonnet slots and{" "}
                <code>deepseek-v4-flash</code> in the Haiku slot and subagents.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is it possible to track the cost of a Claude Code session on
                DeepSeek?
              </AccordionTrigger>
              <AccordionContent>
                Not through Claude Code&apos;s own <code>/cost</code> command,
                which prices tokens against Anthropic&apos;s rates and will report
                numbers that are wrong by roughly two orders of magnitude. Read
                usage from the DeepSeek platform dashboard instead, or parse token
                counts from the session JSONL and apply DeepSeek&apos;s rates
                yourself.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can DeepSeek V4 Flash run locally?
              </AccordionTrigger>
              <AccordionContent>
                Yes. The weights are MIT-licensed on Hugging Face at 284B total
                parameters with 13B active per token. Two NVIDIA DGX Sparks run it
                at a reported 60 tokens per second for around 8,200 euros. At
                $0.14 per 1M input tokens, the API stays cheaper for a very long
                time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Is DeepSeek V4 Flash better than DeepSeek V4 Pro?
              </AccordionTrigger>
              <AccordionContent>
                On agent benchmarks, yes. The 0731 build beats V4-Pro-Preview on
                all nine published agent benchmarks, including 82.7 against 72.1
                on Terminal Bench 2.1 and 54.4 against 12.8 on DeepSWE. DeepSeek
                has said an updated Pro is coming, which will likely reverse this.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                How does DeepSeek V4 Flash compare to Claude on agent benchmarks?
              </AccordionTrigger>
              <AccordionContent>
                It trails Claude Opus 4.8 on every benchmark in DeepSeek&apos;s
                own table. The gap is narrow on Terminal Bench (82.7 against 85.0)
                and wide on NL2Repo (54.2 against 69.7). The pitch is not parity,
                it is most of the capability on tool-shaped work at a fraction of
                the price.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Does DeepSeek train on my API data?</AccordionTrigger>
              <AccordionContent>
                There is no opt-out for training use on the hosted API, and this
                came up repeatedly in the launch discussion without a vendor
                response. For work under an NDA that is a blocker rather than a
                preference. Self-hosting the MIT-licensed weights is the only
                workaround today.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>
                What is the DeepSeek V4 Flash context window?
              </AccordionTrigger>
              <AccordionContent>
                One million tokens, with a maximum output length of 384,000
                tokens. The API supports 2,500 concurrent requests on Flash
                against 500 on Pro, which matters if you plan to fan out parallel
                subagents rather than run one long session.
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
                <Link href="/blog/kimi-k3-agentic-coding-guide" className="project-link">
                  Kimi K3 for Agentic Coding
                </Link>{" "}
                - the other big open-weight release this quarter, and the one
                practitioners keep comparing this launch against.
              </li>
              <li>
                <Link href="/blog/gemini-3-5-flash-agentic-coding-guide" className="project-link">
                  Gemini 3.5 Flash for Agentic Coding
                </Link>{" "}
                - the counter-example: cheap per token, expensive per task. Worth
                reading next to this one.
              </li>
              <li>
                <Link href="/blog/claude-code-cost-tracking" className="project-link">
                  Claude Code Cost Tracking
                </Link>{" "}
                - measure real per-session spend before you trust any cheaper
                per-token rate.
              </li>
              <li>
                <Link href="/blog/glm-5-2-local-coding-guide" className="project-link">
                  How to Run GLM-5.2 Locally
                </Link>{" "}
                - if self-hosting is the actual goal, start with a model that fits
                your hardware.
              </li>
              <li>
                <Link href="/blog/claude-code-fable-5-model-routing" className="project-link">
                  Claude Code Model Routing with Fable 5
                </Link>{" "}
                - the routing mechanics this post assumes you already have in
                place.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <RelatedPosts slug="deepseek-v4-flash-agentic-coding-guide" />
      <PostNavigation slug="deepseek-v4-flash-agentic-coding-guide" />
    </>
  )
}
