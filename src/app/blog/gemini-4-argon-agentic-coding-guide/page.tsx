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

const SLUG = "gemini-4-argon-agentic-coding-guide"
const POST_URL = `https://avinashsangle.com/blog/${SLUG}`
const OG_IMAGE = `https://avinashsangle.com/og-${SLUG}.png`
const HEADLINE = "Gemini 4 Argon for Agentic Coding: When It Beats Opus 5.5"
const DESCRIPTION =
  "Gemini 4 Argon for agentic coding: $2/$10 until Nov 30, then Opus 5.5 pricing. Where it beats Opus, where it loses, and how to run it from Claude Code."
const PUBLISHED = "2026-10-20"

export const metadata: Metadata = {
  // 39 chars: the layout template adds 17, so the rendered title is 56
  title: "Gemini 4 Argon for Agentic Coding Guide",
  description: DESCRIPTION,
  keywords: [
    "gemini 4 argon coding",
    "gemini 4 argon vs claude opus 5.5",
    "gemini 4 argon pricing",
    "gemini 4 argon thinking_level",
    "gemini 4 argon claude code",
    "gemini 4 argon antigravity",
    "gemini 4 argon litellm",
    "gemini 4 argon agentic coding",
    "gemini-4-argon explicit caching",
    "gemini 4 argon price increase december",
    "claude code non-anthropic model",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: HEADLINE,
    description: DESCRIPTION,
    url: POST_URL,
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-10-20T00:00:00.000Z",
    modifiedTime: "2026-10-20T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: HEADLINE }],
  },
  twitter: {
    card: "summary_large_image",
    title: HEADLINE,
    description: DESCRIPTION,
    creator: "@avi_sangle",
    images: [OG_IMAGE],
  },
  alternates: { canonical: POST_URL },
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

const faqs = [
  {
    q: "Is Gemini 4 Argon better than Claude Opus 5.5 for coding?",
    a: "It depends on the task. Google's model card puts Argon ahead on DeepSWE v1.1 (77.9% vs 74.2%) and long-context reads, and behind on Terminal-Bench 4.0 (57.4% vs 66.4%) and FrontierSWE v2. One independent real-repo test had Argon passing more runs than Opus while costing more per fix.",
  },
  {
    q: "How much does Gemini 4 Argon cost, and what changes on December 1, 2026?",
    a: "Through November 30, 2026 the Gemini API charges $2 per million input tokens and $10 per million output tokens, thinking included. From December 1 it is $4 and $20, which is the same per-token price as Claude Opus 5.5. Cached input is $0.10, rising to $0.20. There is no free tier.",
  },
  {
    q: "What thinking levels does Gemini 4 Argon support?",
    a: "Low, medium and high, with medium as the default. Argon has no minimal level: I sent thinkingLevel minimal and got a 400 saying the level is not supported for this model. The older thinkingBudget field still returned a normal 200 response in my test, but Google recommends thinking_level instead.",
  },
  {
    q: "Can I use Gemini 4 Argon inside Claude Code?",
    a: "Yes, through a gateway that speaks the Anthropic Messages API, such as LiteLLM or OpenRouter. I ran Claude Code 2.1.303 through a local LiteLLM proxy and it fixed a bug in six turns. You must set DISABLE_PROMPT_CACHING=1, or Argon rejects the request because it does not support explicit caching.",
  },
  {
    q: "Does Gemini 4 Argon have an Anthropic-compatible endpoint?",
    a: "I didn't find one from Google. Claude Code needs the Anthropic Messages format, so you put a translating gateway in front of the Gemini API. LiteLLM serves /v1/messages and maps it to Gemini. OpenRouter documents a Claude Code setup using ANTHROPIC_BASE_URL set to https://openrouter.ai/api with an empty ANTHROPIC_API_KEY.",
  },
  {
    q: "Why does Claude Code fail with 'Explicit caching is not supported for models/gemini-4-argon'?",
    a: "Claude Code marks its system prompt and history with Anthropic cache_control breakpoints. LiteLLM translates those into Gemini explicit caching, which Argon rejects. Set DISABLE_PROMPT_CACHING=1 before launching claude. Argon's implicit caching still works: in my run 83,880 input tokens were served from cache without any explicit markers.",
  },
  {
    q: "Who can use Gemini 4 Argon in Google Antigravity?",
    a: "Sources disagree. Google's October 13 launch post lists Antigravity access for AI Ultra subscribers. The Antigravity blog says Pro and Ultra subscribers plus eligible Gemini Enterprise plans. One developer reported a Workspace account being refused. The Gemini API itself is open to any paid-tier key.",
  },
  {
    q: "When should I keep using Claude Opus 5.5 instead of Gemini 4 Argon?",
    a: "Keep Opus for terminal-heavy agent loops, screenshot-to-UI work, and anything latency-sensitive. Opus leads Terminal-Bench 4.0 by nine points, scored higher on screenshot-to-HTML in paddo.dev's test, and finished runs roughly twice as fast. After December 1 Argon also loses its per-token price advantage.",
  },
]

const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: HEADLINE,
  description: DESCRIPTION,
  image: OG_IMAGE,
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
    knowsAbout: ["Claude Code", "AI Automation", "Model Context Protocol", "DevOps", "Generative AI"],
  },
  publisher: { "@type": "Person", name: "Avinash Sangle", url: "https://avinashsangle.com" },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  keywords:
    "Gemini 4 Argon, agentic coding, Claude Opus 5.5, Claude Code, LiteLLM, thinking_level, Gemini API pricing",
  articleSection: "AI Development",
  wordCount: 2800,
})

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://avinashsangle.com/blog" },
    { "@type": "ListItem", position: 3, name: "Gemini 4 Argon for Agentic Coding Guide", item: POST_URL },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to run Gemini 4 Argon inside Claude Code with LiteLLM",
  description:
    "Put a LiteLLM proxy in front of the Gemini API, point Claude Code at it, and turn off Anthropic-style prompt caching so Argon accepts the requests.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Install LiteLLM",
      text: "Install the LiteLLM proxy with pip install 'litellm[proxy]' in a virtual environment.",
      url: `${POST_URL}#claude-code-setup`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Add Argon to the LiteLLM config",
      text: "Create litellm.yaml with a model_list entry named gemini-4-argon that uses model gemini/gemini-4-argon and your GEMINI_API_KEY.",
      url: `${POST_URL}#claude-code-setup`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Start the proxy with a master key",
      text: "Set LITELLM_MASTER_KEY, then run litellm --config litellm.yaml --port 4000. Recent LiteLLM versions refuse to start without a master key.",
      url: `${POST_URL}#claude-code-setup`,
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Point Claude Code at the proxy",
      text: "Export ANTHROPIC_BASE_URL=http://localhost:4000, ANTHROPIC_AUTH_TOKEN set to the master key, an empty ANTHROPIC_API_KEY, and set every model slot to gemini-4-argon.",
      url: `${POST_URL}#claude-code-setup`,
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Disable explicit prompt caching",
      text: "Export DISABLE_PROMPT_CACHING=1 so Claude Code stops sending cache_control markers that Argon rejects, then launch claude.",
      url: `${POST_URL}#claude-code-setup`,
    },
  ],
})

type Row = string[]

function DataTable({ head, rows }: { head: string[]; rows: Row[] }) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border">
            {head.map((h) => (
              <th key={h} className="py-3 pr-4">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          {rows.map((r) => (
            <tr key={r[0]} className="border-b border-border">
              {r.map((cell, i) => (
                <td
                  key={i}
                  className={i === 0 ? "py-3 pr-4 font-semibold text-foreground" : "py-3 pr-4"}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="project-link">
      {children}
    </a>
  )
}

const toc = [
  ["what-is-argon", "What is Gemini 4 Argon?"],
  ["benchmarks", "Gemini 4 Argon coding benchmarks vs Claude Opus 5.5"],
  ["pricing", "Gemini 4 Argon pricing and the November 30 price cliff"],
  ["thinking-level", "How to set thinking_level for coding"],
  ["claude-code-setup", "How to run Gemini 4 Argon inside Claude Code"],
  ["antigravity", "Argon in Antigravity vs Claude Code"],
  ["routing", "When to route coding work to Argon vs Opus 5.5"],
  ["faq", "FAQ"],
]

const probeCode = `curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-argon:generateContent" \\
  -H "x-goog-api-key: $GEMINI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "contents": [{"role": "user", "parts": [{"text": "Reply with the word ok."}]}],
    "generationConfig": {
      "maxOutputTokens": 256,
      "thinkingConfig": {"thinkingLevel": "minimal"}
    }
  }'`

const probeOutput = `{
  "error": {
    "code": 400,
    "message": "Thinking level MINIMAL is not supported for this model. Please retry with other thinking level.",
    "status": "INVALID_ARGUMENT"
  }
}`

const sdkCode = `# pip install -U "google-genai>=2.30.1"
from google import genai
from google.genai import types

client = genai.Client()  # reads GEMINI_API_KEY

response = client.models.generate_content(
    model="gemini-4-argon",
    contents="Refactor this function to remove the N+1 query: ...",
    config=types.GenerateContentConfig(
        max_output_tokens=65536,
        thinking_config=types.ThinkingConfig(thinking_level="low"),
    ),
)

print(response.text)
print(response.usage_metadata)  # check thoughts_token_count before raising the level`

const litellmYaml = `model_list:
  - model_name: gemini-4-argon
    litellm_params:
      model: gemini/gemini-4-argon
      api_key: os.environ/GEMINI_API_KEY`

const litellmStart = `python3 -m venv .venv && source .venv/bin/activate
pip install 'litellm[proxy]'

export GEMINI_API_KEY="your-gemini-key"
export LITELLM_MASTER_KEY="sk-$(openssl rand -hex 16)"
litellm --config litellm.yaml --port 4000`

const claudeEnv = `export ANTHROPIC_BASE_URL="http://localhost:4000"
export ANTHROPIC_AUTH_TOKEN="$LITELLM_MASTER_KEY"
export ANTHROPIC_API_KEY=""

# Every slot, including background calls, goes to Argon
export ANTHROPIC_MODEL="gemini-4-argon"
export ANTHROPIC_DEFAULT_OPUS_MODEL="gemini-4-argon"
export ANTHROPIC_DEFAULT_SONNET_MODEL="gemini-4-argon"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="gemini-4-argon"
export CLAUDE_CODE_SUBAGENT_MODEL="gemini-4-argon"

# Without this, Argon rejects every request (see below)
export DISABLE_PROMPT_CACHING=1

claude`

const cachingError = `API Error: 400 litellm.BadRequestError: GeminiException BadRequestError - {
  "error": {
    "code": 400,
    "message": "Explicit caching is not supported for models/gemini-4-argon.",
    "status": "INVALID_ARGUMENT"
  }
}`

export default function Gemini4ArgonAgenticCodingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: techArticleSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: howToSchema }} />

      <div className="container-project py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Gemini 4 Argon for Agentic Coding Guide" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">{HEADLINE}</h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Google&apos;s new frontier model is half the price of Claude Opus 5.5 for six more
            weeks. I ran it through the Gemini API and through Claude Code to see what that price
            buys, where it breaks, and what changes on December 1.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> October 20, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 11 min read
            </span>
            <span>-</span>
            <span>Last updated: {PUBLISHED}</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Gemini 4 Argon", "Agentic Coding", "Claude Code", "Claude Opus 5.5", "LiteLLM", "AI Cost"].map(
              (tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              )
            )}
          </div>
        </header>

        {/* Direct answer + TL;DR */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            Gemini 4 Argon is Google&apos;s frontier model, generally available since October 13,
            2026. For agentic coding it leads on long-horizon tasks (77.9% DeepSWE v1.1) but trails
            Claude Opus 5.5 on terminal work (57.4% vs 66.4% Terminal-Bench 4.0). It costs $2/$10
            per million tokens until November 30, then $4/$20, which matches Opus 5.5.
          </p>

          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="ListChecks" size="sm" />
                TL;DR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list text-lg leading-relaxed">
                <li>
                  Argon is half Opus 5.5&apos;s per-token price until November 30. From December 1
                  it costs exactly the same.
                </li>
                <li>
                  It writes a lot more output. In the one public real-repo test, Argon produced
                  2.8x Opus&apos;s output tokens and cost 1.26x more even at the intro price, while
                  passing more runs (16 of 20 vs 13).
                </li>
                <li>
                  <code>thinking_level</code> is the cost lever: low, medium or high, default medium,
                  and no <code>minimal</code>. On my test task, high cost roughly 7-8x more than low
                  for the same passing result.
                </li>
                <li>
                  It runs inside Claude Code through LiteLLM, but only with{" "}
                  <code>DISABLE_PROMPT_CACHING=1</code>. Without it every request fails with a 400.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Table of Contents */}
        <nav aria-label="Table of contents" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="List" size="sm" />
                Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-6 space-y-2">
                {toc.map(([id, label]) => (
                  <li key={id}>
                    <Link href={`#${id}`} className="text-accent hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </nav>

        {/* Section 1 */}
        <section id="what-is-argon" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Sparkles" size="md" />
            What is Gemini 4 Argon?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Gemini 4 Argon is Google DeepMind&apos;s top model, with the API ID{" "}
            <code>gemini-4-argon</code>. Google moved it from limited preview to general
            availability on October 13, 2026, across the Gemini API, AI Studio, the Antigravity
            desktop app and CLI, the Gemini app, and Gemini Enterprise (
            <Ext href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/">
              Google&apos;s launch post
            </Ext>
            ).
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The context window is 1,048,576 tokens, shared between input and output. That shared
            part matters. Thinking tokens, function calls and the answer all come out of the same
            pool. A single request caps output at 32,768 tokens without streaming and 65,536 with
            it, and a feature Google calls long decode hands back a <code>continuation_token</code>{" "}
            so the SDK can keep going past that cap (
            <Ext href="https://ai.google.dev/gemini-api/docs/generate-content/latest-model">
              Gemini API docs
            </Ext>
            ). The{" "}
            <Ext href="https://deepmind.google/models/model-cards/gemini-4-argon/">model card</Ext>{" "}
            gives a knowledge cutoff of March 2026. Inputs can be text, images, video, audio or
            PDF. Output is text only.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Google&apos;s own coding claims are big, and they&apos;re Google&apos;s: a Chrome
            refactor across hundreds of files finished in weeks instead of months, agentic code
            submissions in Antigravity up more than 35%, and &quot;shortcut attempts&quot; down to
            2%. Nobody outside Google can check those. The benchmarks below are at least on a
            shared scoreboard.
          </p>
        </section>

        {/* Section 2 */}
        <section id="benchmarks" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ChartColumn" size="md" />
            Gemini 4 Argon coding benchmarks vs Claude Opus 5.5
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Argon wins the long-horizon and long-context rows. Opus 5.5 wins terminal work and the
            harder software-engineering set. These numbers are all from Google&apos;s{" "}
            <Ext href="https://deepmind.google/models/model-cards/gemini-4-argon/">model card</Ext>,
            so read them as vendor-reported:
          </p>

          <DataTable
            head={["Benchmark", "Gemini 4 Argon", "Claude Opus 5.5", "GPT-6 Astra", "Claude Fable 5.1"]}
            rows={[
              ["DeepSWE v1.1", "77.9%", "74.2%", "74.1%", "67.4%"],
              ["FrontierSWE v2", "55.0%", "62.3%", "65.5%", "56.3%"],
              ["Terminal-Bench 4.0", "57.4%", "66.4%", "58.2%", "57.9%"],
              ["Vibe Code Bench", "91.9%", "90.3%", "89.6%", "90.3%"],
              ["CWE-bench v1", "68.0%", "67.0%", "68.0%", "58.0%"],
              ["GraphWalks 256k-1M (F1)", "84.2%", "66.8%", "71.8%", "65.0%"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            The nine-point Terminal-Bench gap is the one I&apos;d weigh most. That benchmark is
            closest to what Claude Code does all day: run a command, read the output, decide the
            next command. Argon is effectively tied with Fable 5.1 there. The GraphWalks gap
            points the other way. At 256k to 1M tokens, Argon keeps its footing (84.2%) while Opus
            drops to 66.8%, so for &quot;read this whole service and tell me where X happens&quot;
            Argon has a real edge.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Independent scores are less flattering. Artificial Analysis puts Argon at 53 on its
            Intelligence Index against 58 for Opus 5.5, and Argon sits 8th on Code Arena WebDev,
            according to a{" "}
            <Ext href="https://dev.to/max_quimby/gemini-4-argon-wins-12-of-18-benchmarks-code-isnt-one-2h70">
              DEV roundup
            </Ext>
            . That same roundup quotes a different Astra Terminal-Bench number (62.1%) from the
            model card, so I&apos;ve kept the model card&apos;s figures in the table.
          </p>

          <h3 className="text-2xl font-semibold mb-4">The one real-repo test so far</h3>

          <p className="text-lg leading-relaxed mb-6">
            The most useful data point isn&apos;t a benchmark.{" "}
            <Ext href="https://paddo.dev/blog/gemini-4-argon/">paddo.dev</Ext> replayed six merged
            changes from a production monorepo (11 to 26 files each) against Argon, Opus 5.5,
            Sonnet 5.5 and GPT-6.1 Sol, 20 runs per model, graded by the tests that shipped with
            the original fix. Argon ran inside Claude Code via OpenRouter.
          </p>

          <DataTable
            head={["20 runs each", "Argon", "Opus 5.5", "Sonnet 5.5", "GPT-6.1 Sol"]}
            rows={[
              ["Runs passing every test", "16", "13", "11", "11"],
              ["Runs breaking a passing test", "0", "0", "0", "5"],
              ["Output tokens", "1.37M", "495k", "247k", "167k"],
              ["Cost at list price", "$57.68", "$45.81", "$11.76", "$6.73"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            So on real code, the vendor ranking reversed: Argon passed more runs than Opus. It also
            took about 2.2x as long on the change both were timed on (991 seconds per run vs 455).
            One codebase and small samples, as the author says. Still, &quot;more accurate, slower
            and wordier&quot; is a more useful summary than any table above.
          </p>
        </section>

        {/* Section 3 */}
        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="CalendarClock" size="md" />
            Gemini 4 Argon pricing and the November 30 price cliff
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Argon costs $2 per million input tokens and $10 per million output tokens through
            November 30, 2026, then doubles. Output includes thinking tokens. There is no free tier
            and no explicit caching, only implicit caching on prompts of 4,096 tokens or more (
            <Ext href="https://ai.google.dev/gemini-api/docs/pricing">Gemini API pricing</Ext>).
          </p>

          <DataTable
            head={["Per 1M tokens", "Through Nov 30", "From Dec 1"]}
            rows={[
              ["Input", "$2.00", "$4.00"],
              ["Output (incl. thinking)", "$10.00", "$20.00"],
              ["Cached input (implicit)", "$0.10", "$0.20"],
              ["Batch input / output", "$1.00 / $5.00", "$2.00 / $10.00"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            Now put the Anthropic list next to it (
            <Ext href="https://claude.com/pricing">Claude pricing</Ext>). Opus 5.5 is $4/$20.
            Sonnet 5.5 is $2/$10. Fable 5.1 is $10/$50, and third-party trackers list GPT-6 Astra
            at the same $10/$50 (I couldn&apos;t load OpenAI&apos;s own page to confirm). Most
            launch coverage repeats &quot;half the price of Opus.&quot; That&apos;s true for six
            weeks. On December 1 Argon lands at exactly Opus 5.5&apos;s per-token price, and
            during the intro window it costs the same as Sonnet 5.5.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The per-token price was never the whole story anyway, because Argon writes more. In
            the paddo.dev runs above, Argon cost 1.26x Opus at the intro price, and the author
            estimates about $115 for the same 20 runs after the increase, roughly 2.5x Opus. The
            DEV roundup cites around 62,000 output tokens per task for Argon against 27,000 for
            Astra. If output volume drives your bill, the cliff makes Argon more expensive per fix
            than Opus, not equal.
          </p>

          <Card className="card-accent-left mb-6">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                What I&apos;d do with the six weeks: run your own tasks on Argon now while
                they&apos;re cheap, record pass rate and output tokens per task, and multiply the
                output by $20/M. If it still beats Opus on pass rate for a task type, keep routing
                that type to Argon in December. If it only won on price, it stops winning on
                December 1.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section 4 */}
        <section id="thinking-level" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Brain" size="md" />
            How to set thinking_level for coding
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Argon takes <code>thinking_level</code> set to <code>low</code>, <code>medium</code>{" "}
            or <code>high</code>, and the default is medium. Google&apos;s advice is to evaluate
            all three with a high <code>max_output_tokens</code> and pick the lowest level that
            clears your quality bar. Since thinking is billed as output, that choice is most of
            your cost control.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two details trip people coming from Gemini 3.5 Flash. First, Argon has no{" "}
            <code>minimal</code> level. I sent one straight to the API to check:
          </p>

          <CodeBlock language="bash" filename="terminal" code={probeCode} />
          <CodeBlock language="json" filename="response (HTTP 400)" code={probeOutput} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            Second, the old numeric <code>thinkingBudget</code> still works. A couple of
            third-party guides say it returns HTTP 400 on Argon. It didn&apos;t for me:{" "}
            <code>{`{"thinkingBudget": 1024}`}</code> came back 200 with a normal answer and no
            warning header over REST. Google&apos;s docs say it maps to the nearest level with a
            warning, which the SDK may surface. Either way, switch to <code>thinking_level</code>,
            which is what Google&apos;s docs now recommend. Here&apos;s the shape
            from Google&apos;s quickstart, with low as my starting point for coding:
          </p>

          <CodeBlock language="python" filename="argon_call.py" code={sdkCode} />

          <h3 className="text-2xl font-semibold mt-8 mb-4">What I measured across the three levels</h3>

          <p className="text-lg leading-relaxed mb-6">
            I gave Argon one coding task six times, twice per level: write a{" "}
            <code>compare(a, b)</code> function that follows Semantic Versioning 2.0.0 precedence,
            including pre-release ordering and rejecting invalid versions. A 13-case pytest suite
            I wrote separately graded each answer. Same 204-token prompt every time, via the REST
            API on October 20:
          </p>

          <DataTable
            head={["Level", "Tests passed", "Thinking tokens", "Answer tokens", "Cost per call", "Wall time"]}
            rows={[
              ["low (run 1)", "13/13", "0", "544", "$0.006", "25.7 s"],
              ["low (run 2)", "13/13", "0", "554", "$0.006", "6.1 s"],
              ["medium (run 1)", "13/13", "0", "533", "$0.006", "7.6 s"],
              ["medium (run 2)", "13/13", "0", "759", "$0.008", "10.7 s"],
              ["high (run 1)", "13/13", "4,272", "610", "$0.049", "56.1 s"],
              ["high (run 2)", "13/13", "3,472", "448", "$0.040", "101.8 s"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            Every run passed. Low and medium reported no thinking tokens at all on this task, so
            the model decided it didn&apos;t need to think. High spent 3,472 to 4,272 thinking
            tokens, cost roughly 7-8x as much as low, took several times longer, and produced the same passing
            code. Costs are at the intro price. One task with six runs proves nothing about hard
            refactors, but it does show the thing worth checking on your own work: read{" "}
            <code>thoughts_token_count</code> in the usage metadata before you reach for high.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Latency was noisy in launch week. A one-word &quot;ok&quot; reply took 37 seconds at
            one point and 137 seconds at another. Google&apos;s own migration notes tell you to
            set HTTP timeouts to at least 20 minutes, and they also list the other changes from
            Gemini 3.x: sampling parameters like <code>temperature</code> are ignored, explicit
            caching calls error, and function-calling loops must send back the thought signatures
            from earlier turns. On hard tasks a request can spend its whole budget thinking and
            return empty text with a <code>continuation_token</code>. Google calls that normal.
            The current SDKs (Python 2.30.1+, JavaScript 2.29.1+) continue automatically.
          </p>
        </section>

        {/* Section 5 */}
        <section id="claude-code-setup" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Terminal" size="md" />
            How to run Gemini 4 Argon inside Claude Code
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Claude Code only speaks the Anthropic Messages API, and I didn&apos;t find an
            Anthropic-compatible endpoint from Google. So Argon needs a gateway in front of it that
            translates. I used{" "}
            <Ext href="https://docs.litellm.ai/docs/tutorials/claude_non_anthropic_models">
              LiteLLM
            </Ext>{" "}
            (version 1.106.0) running locally with Claude Code 2.1.303. This is the config I
            tested, not a sketch.
          </p>

          <CodeBlock language="yaml" filename="litellm.yaml" code={litellmYaml} />
          <CodeBlock language="bash" filename="terminal 1: start the proxy" code={litellmStart} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            The master key isn&apos;t optional anymore. Without it, LiteLLM 1.106 prints
            &quot;proxy refused to start: no master key is set&quot; and exits. Then point Claude
            Code at the proxy. The variable names come from Anthropic&apos;s{" "}
            <Ext href="https://code.claude.com/docs/en/llm-gateway-rollout">LLM gateway docs</Ext>
            , which also warn that some background sub-calls ask for built-in Claude model IDs
            regardless of your override. Setting every slot covers that.
          </p>

          <CodeBlock language="bash" filename="terminal 2: launch Claude Code" code={claudeEnv} />

          <h3 className="text-2xl font-semibold mt-8 mb-4">The caching error you&apos;ll hit first</h3>

          <p className="text-lg leading-relaxed mb-6">
            My first run didn&apos;t include <code>DISABLE_PROMPT_CACHING</code>. It failed on
            the first request:
          </p>

          <CodeBlock language="text" filename="claude -p output" code={cachingError} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            Here&apos;s the chain. Claude Code tags its system prompt and conversation with
            Anthropic <code>cache_control</code> breakpoints. LiteLLM translates those into Gemini
            explicit caching. Argon doesn&apos;t support explicit caching, so it rejects the whole
            request. <code>DISABLE_PROMPT_CACHING=1</code> stops Claude Code
            sending the markers. You don&apos;t lose caching: Gemini&apos;s implicit cache still
            kicks in on its own.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            With that set, I gave headless Claude Code a small job in a scratch folder: fix a
            broken <code>add()</code> in <code>calc.py</code> and report the Next.js version in{" "}
            <code>package.json</code>. It finished in 6 turns and 75 seconds, made the right
            one-line edit, and answered correctly. The usage report showed 36,391 uncached input
            tokens, 83,880 cached input tokens and 2,465 output tokens. At the intro price
            that&apos;s about $0.11.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two things in that report are wrong, and you should know which. Claude Code put the
            cost at $0.29, because it doesn&apos;t know Argon&apos;s prices (the model entry says{" "}
            <code>costBasis: &quot;unknown&quot;</code>). Use your gateway&apos;s spend log or the
            Google Cloud billing page instead, as I covered in{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              Claude Code cost tracking
            </Link>
            . It also listed the context window as 200,000 tokens, so Claude Code will compact
            long sessions long before Argon&apos;s 1M limit. OpenRouter&apos;s{" "}
            <Ext href="https://openrouter.ai/docs/guides/guides/claude-code-integration">
              Claude Code guide
            </Ext>{" "}
            says a <code>[1m]</code> suffix on the model name lifts that assumption. I haven&apos;t
            tested that with LiteLLM.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            If you&apos;d rather use OpenRouter, the same guide sets{" "}
            <code>ANTHROPIC_BASE_URL=https://openrouter.ai/api</code>, your OpenRouter key in{" "}
            <code>ANTHROPIC_AUTH_TOKEN</code>, and an explicitly empty{" "}
            <code>ANTHROPIC_API_KEY</code>, with <code>google/gemini-4-argon</code> as the model.
            Watch the cache on the first run. paddo.dev saw one OpenRouter run cache only 59k of
            8.4M input tokens ($17.60), because the way system messages were moved into
            Gemini&apos;s prompt broke the prefix match. A local proxy fixed it: same run, $2.62,
            94% cache hits. In my LiteLLM run, 70% of input came from cache.
          </p>
        </section>

        {/* Section 6 */}
        <section id="antigravity" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Rocket" size="md" />
            Argon in Antigravity vs Claude Code
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Antigravity is Google&apos;s own agent harness and the zero-setup way to use Argon, if
            your account qualifies. That part is unclear. Google&apos;s launch post lists
            Antigravity access for AI Ultra subscribers. The{" "}
            <Ext href="https://antigravity.google/blog/gemini-4-argon-in-google-antigravity">
              Antigravity blog
            </Ext>{" "}
            says Pro and Ultra, plus eligible Gemini Enterprise plans. paddo.dev reports a
            Workspace account being refused. Check your own account before planning around it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The harness itself drew most of the complaints in the{" "}
            <Ext href="https://news.ycombinator.com/item?id=49913571">Hacker News launch thread</Ext>{" "}
            (1,705 points and 1,199 comments when I checked): no skills or subagents, weak
            permission controls, tool calls that hang, and forced compaction around 250k tokens.
            paddo.dev timed the same task at 1.75x slower in Antigravity than in Claude Code, with
            the same pass result in both. If you already live in Claude Code, the gateway route
            above keeps your hooks, skills and CLAUDE.md. My{" "}
            <Link href="/blog/gemini-cli-to-antigravity-cli-guide" className="project-link">
              Gemini CLI to Antigravity CLI guide
            </Link>{" "}
            covers the <code>agy</code> side if you want both.
          </p>
        </section>

        {/* Section 7 */}
        <section id="routing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Split" size="md" />
            When to route coding work to Argon vs Opus 5.5
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Send Argon the work where its benchmark lead is large and the task tolerates a slow,
            wordy model. Keep Opus 5.5 on the tight loop. This is how I&apos;d split it today:
          </p>

          <DataTable
            head={["Task", "Route to", "Why"]}
            rows={[
              ["Reading a large codebase (256k+ tokens)", "Argon", "GraphWalks 256k-1M: 84.2% vs 66.8%"],
              ["Long multi-file changes with a test suite", "Argon (trial)", "DeepSWE lead; 16 vs 13 full passes on paddo.dev"],
              ["Terminal-heavy agent loops", "Opus 5.5", "Terminal-Bench 4.0: 66.4% vs 57.4%"],
              ["Screenshot-to-UI and layout work", "Opus 5.5", "0.831 vs 0.754 on paddo.dev's screenshot-to-HTML"],
              ["Interactive, latency-sensitive sessions", "Opus 5.5", "About 2x faster on the one change timed"],
              ["Cheap bulk edits and subagent fan-out", "Sonnet 5.5", "Same $2/$10 as Argon now, 5.5x fewer output tokens"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            The date changes the math. Until November 30, Argon is worth a trial on any task in
            the first two rows, because it&apos;s cheap to be wrong. After December 1 it only earns
            a place where it beats Opus on pass rate, since it no longer beats it on price. For the
            Claude side of the routing setup, see{" "}
            <Link href="/blog/claude-code-fable-5-model-routing" className="project-link">
              Claude Code model routing with Fable 5
            </Link>
            . If you&apos;re comparing Google&apos;s cheaper tier, I measured the trade-offs in{" "}
            <Link href="/blog/gemini-3-5-flash-agentic-coding-guide" className="project-link">
              Gemini 3.5 Flash for agentic coding
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="MessageCircleQuestion" size="md" />
            FAQ
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i + 1}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Closing CTA */}
        <section id="more-reading" className="mb-8">
          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="BookOpen" size="sm" />
                Keep going
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed mb-4">
                The same gateway pattern works for other non-Anthropic models. I set it up for{" "}
                <Link href="/blog/kimi-k3-agentic-coding-guide" className="project-link">
                  Kimi K3
                </Link>{" "}
                and{" "}
                <Link href="/blog/deepseek-v4-1-flash-multimodal-coding-guide" className="project-link">
                  DeepSeek V4.1 Flash
                </Link>
                , both of which ship their own Anthropic-compatible endpoints. More posts are on
                the{" "}
                <Link href="/blog" className="project-link">
                  blog index
                </Link>
                .
              </p>
              <p className="text-muted-foreground">
                Sources:{" "}
                <Ext href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/">
                  Google
                </Ext>
                ,{" "}
                <Ext href="https://deepmind.google/models/model-cards/gemini-4-argon/">
                  DeepMind model card
                </Ext>
                ,{" "}
                <Ext href="https://ai.google.dev/gemini-api/docs/pricing">Gemini API pricing</Ext>,{" "}
                <Ext href="https://ai.google.dev/gemini-api/docs/generate-content/latest-model">
                  Gemini API latest-model guide
                </Ext>
                , <Ext href="https://claude.com/pricing">Claude pricing</Ext>,{" "}
                <Ext href="https://paddo.dev/blog/gemini-4-argon/">paddo.dev</Ext>,{" "}
                <Ext href="https://dev.to/max_quimby/gemini-4-argon-wins-12-of-18-benchmarks-code-isnt-one-2h70">
                  DEV
                </Ext>
                ,{" "}
                <Ext href="https://code.claude.com/docs/en/llm-gateway-rollout">
                  Claude Code gateway docs
                </Ext>
                ,{" "}
                <Ext href="https://docs.litellm.ai/docs/tutorials/claude_non_anthropic_models">
                  LiteLLM
                </Ext>
                .
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <RelatedPosts slug={SLUG} />
      <PostNavigation slug={SLUG} />
    </>
  )
}
