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

const SLUG = "deepseek-v4-1-flash-multimodal-coding-guide"
const POST_URL = `https://avinashsangle.com/blog/${SLUG}`
const OG_IMAGE = `https://avinashsangle.com/og-${SLUG}.png`
const HEADLINE = "DeepSeek V4.1 Flash in Claude Code: Vision, Routing, Real Costs"
const DESCRIPTION =
  "DeepSeek V4.1 Flash reads screenshots, beats V4 Pro on coding, and costs $0.15/$0.60 per 1M tokens. Claude Code setup, model-mapping traps, and real costs."

export const metadata: Metadata = {
  title: "DeepSeek V4.1 Flash in Claude Code Guide",
  description: DESCRIPTION,
  keywords: [
    "deepseek v4.1 flash",
    "deepseek v4.1 flash claude code",
    "deepseek-flash model",
    "deepseek v4.1 flash vision",
    "deepseek v4.1 flash pricing",
    "deepseek v4 pro vs v4.1 flash",
    "how to use deepseek v4.1 flash with claude code",
    "is deepseek v4 pro being retired",
    "deepseek flash peak hours",
    "deepseek v4.1 flash benchmarks",
    "deepseek v4.1 flash local hardware",
    "deepseek anthropic api image support",
    "causal encoder decoder deepseek",
    "multimodal agentic coding",
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
    publishedTime: "2026-09-30T00:00:00.000Z",
    modifiedTime: "2026-09-30T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "DeepSeek V4.1 Flash in Claude Code - Vision, Routing, Real Costs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HEADLINE,
    description: DESCRIPTION,
    creator: "@avi_sangle",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: POST_URL,
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

const faqs = [
  {
    q: "What is DeepSeek V4.1 Flash?",
    a: "DeepSeek V4.1 Flash is a 552B-parameter open-weight model released September 10, 2026 under the MIT license. It uses a new Causal Encoder-Decoder design with 8B active parameters for input and 16B for output, reads images natively, supports a 1M-token context, and is served on the API as deepseek-flash.",
  },
  {
    q: "How do I use DeepSeek V4.1 Flash with Claude Code?",
    a: "Set ANTHROPIC_BASE_URL to https://api.deepseek.com/anthropic, put your DeepSeek key in ANTHROPIC_AUTH_TOKEN, and set ANTHROPIC_MODEL plus every ANTHROPIC_DEFAULT_*_MODEL variable and CLAUDE_CODE_SUBAGENT_MODEL to deepseek-flash. Set all of them explicitly, because an unset Opus slot maps to deepseek-v4-pro. Then run /status inside Claude Code to confirm the base URL and model before real work.",
  },
  {
    q: "Is DeepSeek V4 Pro being shut down?",
    a: "No. The September 10 release note said deepseek-v4-pro requests would route to V4.1 Flash from September 14. DeepSeek revised that on September 11: V4 Pro service continues with unchanged billing. It is served as V4-Pro-0813, and there is no announced date for a V4.1 Pro.",
  },
  {
    q: "Can DeepSeek V4.1 Flash read screenshots in Claude Code?",
    a: "Yes. DeepSeek's Anthropic-compatible endpoint accepts image blocks as base64 JPEG, PNG, GIF, or WebP, as URLs, or through the Files API. PDFs sent as document blocks are not supported, and neither are MCP tool-use blocks, so test MCP-heavy sessions before switching over.",
  },
  {
    q: "How much does DeepSeek V4.1 Flash cost, and when are peak hours?",
    a: "Off-peak, it costs $0.15 per 1M uncached input tokens, $0.003 per 1M cached input tokens, and $0.60 per 1M output tokens. Peak hours double that and run 01:00-04:00 and 06:00-10:00 UTC on weekdays, which is 06:30-09:30 and 11:30-15:30 in India.",
  },
  {
    q: "How do I track per-session cost when Claude Code points at DeepSeek?",
    a: "Don't rely on the in-session /cost figure, because Claude Code prices tokens with Anthropic's rate table. Read usage from the DeepSeek platform dashboard, or parse token counts from the session JSONL files and apply DeepSeek's peak or off-peak rates based on each request's timestamp.",
  },
  {
    q: "Can I run DeepSeek V4.1 Flash locally?",
    a: "Only on server hardware. The FP8 checkpoint is about 510 GB, and the practical minimum is an 8-GPU node such as 8x H100 80GB, with 8x H200 or B200 being comfortable. V4 Flash fit on two H200s. For a workstation, a smaller open model like GLM-5.2 is the realistic option.",
  },
  {
    q: "Is DeepSeek V4.1 Flash better than Claude Opus 5 for coding?",
    a: "On DeepSeek's own numbers it edges Opus 5 on Terminal-Bench 2.1 (90.6 against 89.1) and DeepSWE (74.2 against 74.0). Those are vendor-reported. It still trails on the harder Terminal-Bench 4.0, and Artificial Analysis ranks it seventh overall, so treat it as close on short tasks, not equal.",
  },
]

// JSON-LD schemas - static trusted content built at compile time via JSON.stringify.
// No user input is interpolated; this is the standard Next.js pattern for structured data.
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
    knowsAbout: [
      "Claude Code",
      "DeepSeek V4.1 Flash",
      "Agentic Coding",
      "Multimodal Models",
      "AI Automation",
      "DevOps",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
  },
  datePublished: "2026-09-30",
  dateModified: "2026-09-30",
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  keywords:
    "DeepSeek V4.1 Flash, deepseek-flash, Claude Code, multimodal coding, vision, open weights, AI cost optimization",
  articleSection: "AI Development",
  wordCount: 3100,
})

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://avinashsangle.com/blog" },
    { "@type": "ListItem", position: 3, name: "DeepSeek V4.1 Flash in Claude Code", item: POST_URL },
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
  name: "How to Run Claude Code on DeepSeek V4.1 Flash",
  description:
    "Point Claude Code at DeepSeek's Anthropic-compatible endpoint and map every model slot to deepseek-flash, the model ID for DeepSeek V4.1 Flash.",
  totalTime: "PT10M",
  tool: [
    { "@type": "HowToTool", name: "Claude Code CLI" },
    { "@type": "HowToTool", name: "A DeepSeek platform API key" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Point Claude Code at the Anthropic-compatible endpoint",
      text: "Export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic and put your DeepSeek key in ANTHROPIC_AUTH_TOKEN.",
      url: `${POST_URL}#claude-code-setup`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map every model slot to deepseek-flash",
      text: "Set ANTHROPIC_MODEL, ANTHROPIC_DEFAULT_OPUS_MODEL, ANTHROPIC_DEFAULT_SONNET_MODEL, ANTHROPIC_DEFAULT_HAIKU_MODEL and CLAUDE_CODE_SUBAGENT_MODEL to deepseek-flash so no slot falls through to deepseek-v4-pro.",
      url: `${POST_URL}#claude-code-setup`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Replace the retired model ID",
      text: "Search your configs for deepseek-v4-flash and replace it with deepseek-flash. The old name is only temporarily aliased.",
      url: `${POST_URL}#claude-code-setup`,
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Verify with /status and a screenshot",
      text: "Launch Claude Code, run /status to confirm the base POST_URL and model, then paste a screenshot to confirm image input works through the endpoint.",
      url: `${POST_URL}#vision`,
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
  ["what-is-v4-1-flash", "What Is DeepSeek V4.1 Flash?"],
  ["benchmarks", "Benchmarks: Where It Wins and Still Loses"],
  ["claude-code-setup", "How to Use DeepSeek V4.1 Flash with Claude Code"],
  ["vision", "Using V4.1 Flash Vision for Coding"],
  ["v4-pro-reversal", "V4 Pro vs V4.1 Flash: The Reroute That Didn't Happen"],
  ["pricing", "Pricing and Peak Hours"],
  ["local", "Can You Run It Locally?"],
  ["limitations", "Limitations and Gotchas"],
  ["faq", "Frequently Asked Questions"],
]

export default function DeepSeekV41FlashMultimodalCodingGuidePage() {
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
            { label: "DeepSeek V4.1 Flash in Claude Code" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">{HEADLINE}</h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            DeepSeek V4.1 Flash, released September 10, 2026, is a 552B open-weight model that
            reads images and scores 74.2 on DeepSWE, ahead of DeepSeek&apos;s own V4 Pro. Its API
            model ID is <code>deepseek-flash</code>, it costs $0.15/$0.60 per 1M tokens off-peak,
            and DeepSeek now recommends it for every Claude Code model slot.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> September 30, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 13 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-09-30</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              "DeepSeek V4.1 Flash",
              "Claude Code",
              "Multimodal",
              "Agentic Coding",
              "Open Weights",
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
                {toc.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="project-link">
                      {label}
                    </a>
                  </li>
                ))}
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
                New architecture: a Causal Encoder-Decoder that runs 8B active parameters on input
                and 16B on output. Agent loops are mostly input, which is where the savings come
                from.
              </li>
              <li>
                DeepSeek flipped its own Claude Code advice. In August it put V4 Pro in the main
                loop. Now <code>deepseek-flash</code> goes in every slot. Set them all explicitly:
                an unset &quot;opus&quot; name maps to <code>deepseek-v4-pro</code>.
              </li>
              <li>
                V4 Pro is not being shut down. The forced reroute announced on September 10 was
                reversed on September 11, and several guides still get this wrong.
              </li>
              <li>
                Screenshots work through the Anthropic endpoint. PDFs and MCP tool blocks
                don&apos;t. Output costs about 2x what V4 Flash 0731 did, and peak hours cover most
                of an Indian working morning.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1 */}
        <section id="what-is-v4-1-flash" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ScanEye" size="md" />
            What Is DeepSeek V4.1 Flash and What Changed from V4 Flash?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            V4.1 Flash is a new model, not another post-training pass. When I wrote the{" "}
            <Link href="/blog/deepseek-v4-flash-agentic-coding-guide" className="project-link">
              V4 Flash 0731 guide
            </Link>{" "}
            in August, the whole story was that DeepSeek squeezed big agent gains out of the same
            284B weights. This time the architecture changed. Per the{" "}
            <Ext href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash">
              Hugging Face model card
            </Ext>
            , V4.1 Flash is a 552B Mixture-of-Experts model built as a Causal Encoder-Decoder
            (CED): a 20-layer encoder and a 20-layer decoder.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The part that matters for coding agents is the split. The encoder reads your prompt
            with 8B active parameters. The decoder writes the answer with 16B. V4 Flash used 13B
            for both. As{" "}
            <Ext href="https://www.baseten.co/blog/deepseek-v41-flash-more-efficient-prefill-for-coding-agents/">
              Baseten put it
            </Ext>
            , &quot;agentic loops generate far more prefill tokens than decode tokens.&quot; Every
            turn of a Claude Code session re-sends the system prompt, tool definitions, file
            contents, and history. Making that reading step cheaper is the right trade for this
            workload.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The cache got smaller too. DeepSeek reports the global KV cache at 890 bytes per token,
            roughly a quarter of V4 Flash, using a second-generation compressed sparse attention
            and FP4 KV storage. The release note sums it up as &quot;1/4 the HBM&quot; and
            &quot;1/8 the SSD storage.&quot; Smaller cache entries mean more of your context stays
            cached between turns, and cached input is where the cheapest tokens live.
          </p>

          <DataTable
            head={["Spec", "V4.1 Flash", "V4 Flash 0731"]}
            rows={[
              ["Total parameters", "552B", "284B"],
              ["Active (input / output)", "8B / 16B", "13B / 13B"],
              ["Architecture", "Causal Encoder-Decoder", "Decoder-only MoE"],
              ["Image input", "Native (DeepSeek-ViT)", "No"],
              ["Context / max output", "1M / 384K", "1M / 384K"],
              ["Reasoning effort", "Continuous, 1-100", "low / high / max"],
              ["API model ID", "deepseek-flash", "deepseek-v4-flash (retired)"],
              ["License", "MIT", "MIT"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            Output is still text only. The vision encoder lets the model look at an image. It
            doesn&apos;t let it draw one.
          </p>
        </section>

        {/* Section 2 */}
        <section id="benchmarks" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ChartBar" size="md" />
            DeepSeek V4.1 Flash Benchmarks: Where It Wins and Where It Still Loses
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            On short and medium coding tasks, V4.1 Flash now matches or beats the frontier models
            DeepSeek chose to compare against. On the long-horizon suite and on knowledge-heavy
            tests, it still trails. Every number in this table is DeepSeek-reported, collected by{" "}
            <Ext href="https://www.yottalabs.ai/post/deepseek-v4-1-flash-pricing-specs-v4-pro-routing-2026">
              Yotta Labs
            </Ext>{" "}
            from the release materials.
          </p>

          <DataTable
            head={["Benchmark", "V4.1 Flash", "V4 Flash", "V4 Pro", "GPT-5.6 Sol", "GLM 5.3"]}
            rows={[
              ["DeepSWE v1.1", "74.2", "54.4", "62.7", "73.0", "66.9"],
              ["Terminal-Bench 2.1", "90.6", "82.7", "87.9", "88.8", "88.2"],
              ["Terminal-Bench 4.0", "31.2", "7.0", "12.4", "39.9", "37.9"],
              ["NL2Repo-Bench", "64.0", "54.2", "61.5", "56.8", "58.0"],
              ["AutomationBench", "54.8", "37.7", "43.2", "45.8", "48.8"],
              ["CyberGym", "88.1", "76.7", "83.3", "84.5", "84.5"],
              ["GPQA Diamond", "90.9", "89.9", "92.4", "94.1", "88.1"],
              ["HLE (no tools)", "36.8", "37.8", "42.7", "44.5", "42.0"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            The DeepSWE jump from 54.4 to 74.2 is the headline. The model card also puts it at 90.6
            on Terminal-Bench 2.1 against 89.1 for Claude Opus 5 and 88.8 for GPT-5.6 Sol. Read
            those with the usual caution: DeepSeek ran them on its own harness.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The row I care about more is Terminal-Bench 4.0. It&apos;s the harder, longer terminal
            suite, and V4.1 Flash scores 31.2 against 39.9 for GPT-5.6 Sol and 37.9 for GLM 5.3. In
            August I summarized V4 Flash as &quot;it executes, it doesn&apos;t plan.&quot; The gap
            has narrowed a lot (V4 Flash scored 7.0 here), but it hasn&apos;t closed. HLE and GPQA
            tell a similar story on knowledge: V4 Pro still wins both.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            For an independent view,{" "}
            <Ext href="https://artificialanalysis.ai/models/deepseek-v4-1-flash">
              Artificial Analysis
            </Ext>{" "}
            scores it 39 on its Intelligence Index, seventh of 117 models, against a median of 18.
            It measured 208.9 tokens per second output and 0.94s to first token. Don&apos;t compare
            that 39 with the 50 V4 Flash got in August: the index was reworked in between and the
            scale moved.
          </p>

          <Card className="card-accent-left mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Bug" size="sm" />
                What a failure actually looks like
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Kingy AI ran{" "}
                <Ext href="https://kingy.ai/blog/deepseek-v4-1-flash-vs-gpt-6-claude-test/">
                  24 small trials
                </Ext>{" "}
                on launch day: V4.1 Flash passed 7 of 8, GPT-6 Astra 8 of 8, Claude Fable 5.1 6 of
                8. Flash&apos;s one miss is instructive. On a paginated ledger tool it sent{" "}
                <code>{`{"cursor":"null"}`}</code>, the string &quot;null&quot; instead of JSON
                null, got an error, repeated the same cursor, then tried an empty string and never
                read a page. That&apos;s a tool-contract mistake, and it&apos;s the kind a strict
                schema on your side catches cheaply. The sample is tiny, but the cost gap
                isn&apos;t: $0.00156 per passing trial against $0.01196 for Astra and $0.03117 for
                Fable 5.1.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section 3 */}
        <section id="claude-code-setup" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Terminal" size="md" />
            How to Use DeepSeek V4.1 Flash with Claude Code
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Claude Code talks to DeepSeek through its Anthropic-compatible endpoint, so the setup
            is environment variables and nothing else. This is the current config from{" "}
            <Ext href="https://api-docs.deepseek.com/guides/coding_agents/">
              DeepSeek&apos;s coding-agents guide
            </Ext>
            .
          </p>

          <CodeBlock
            language="bash"
            filename="~/.zshrc (or export in the shell before launching claude)"
            code={`export ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="YOUR_DEEPSEEK_API_KEY"

# Every slot runs V4.1 Flash
export ANTHROPIC_MODEL="deepseek-flash"
export ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-flash"
export ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-flash"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-flash"
export CLAUDE_CODE_SUBAGENT_MODEL="deepseek-flash"
export CLAUDE_CODE_EFFORT_LEVEL="max"`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Compare that with what the same page said seven weeks ago. DeepSeek changed its mind
            about where its own models belong.
          </p>

          <DataTable
            head={["Claude Code slot", "DeepSeek advice, August 2026", "DeepSeek advice, September 2026"]}
            rows={[
              ["ANTHROPIC_MODEL", "deepseek-v4-pro", "deepseek-flash"],
              ["Opus default", "deepseek-v4-pro", "deepseek-flash"],
              ["Sonnet default", "deepseek-v4-pro", "deepseek-flash"],
              ["Haiku default", "deepseek-v4-flash", "deepseek-flash"],
              ["Subagents", "deepseek-v4-flash", "deepseek-flash"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            In August the vendor was saying Flash is for grep and fan-out while Pro writes the code.
            Now it&apos;s saying the new Flash writes the code too, which lines up with the DeepSWE
            numbers above. If you copied the August config (mine included), your main loop is still
            on V4 Pro.
          </p>

          <h3 className="text-2xl font-semibold mb-4">The model-name mapping trap</h3>

          <p className="text-lg leading-relaxed mb-6">
            This one isn&apos;t in any setup guide I found. The{" "}
            <Ext href="https://api-docs.deepseek.com/guides/anthropic_api/">
              Anthropic API compatibility page
            </Ext>{" "}
            says that when a request arrives with a Claude model name, DeepSeek maps it for you:
          </p>

          <DataTable
            head={["Model name Claude Code sends", "What DeepSeek serves"]}
            rows={[
              ["Any claude-opus variant", "deepseek-v4-pro"],
              ["Any claude-sonnet variant", "deepseek-flash"],
              ["Any claude-haiku variant", "deepseek-flash"],
              ["Anything unmapped", "deepseek-flash"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            So if you set only <code>ANTHROPIC_BASE_URL</code> and the token, then pick Opus in{" "}
            <code>/model</code> because it&apos;s the &quot;best&quot; one, you land on V4 Pro. That
            model is slower, costs 4.4x more on input, and scores 11.5 points lower on DeepSWE. Set
            every slot explicitly and the mapping never kicks in.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two more housekeeping items. The old ID <code>deepseek-v4-flash</code> still works, but
            the{" "}
            <Ext href="https://api-docs.deepseek.com/updates">changelog</Ext> says it&apos;s
            &quot;temporarily routed&quot; to V4.1 Flash, so replace it now instead of finding out
            when the alias disappears. And the endpoint ignores <code>budget_tokens</code> on
            thinking, so control depth with <code>CLAUDE_CODE_EFFORT_LEVEL</code> instead.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# find stale IDs in dotfiles, CI and scripts
grep -rn "deepseek-v4-flash" ~/.zshrc .env* .github/ scripts/ 2>/dev/null

unset ANTHROPIC_API_KEY   # avoid Claude Code picking the wrong credential
claude
# inside the session:
/status                   # base POST_URL should be api.deepseek.com/anthropic, model deepseek-flash`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Does the swap actually hold up inside Claude Code? One developer on the{" "}
            <Ext href="https://news.ycombinator.com/item?id=49624603">420-point HN thread</Ext>{" "}
            wrote that they&apos;d been &quot;using deepseek-v4-flash as a &apos;worker&apos; model
            with Claude Code to implement a tool using Rust/Iroh... and it works fairly nicely.&quot;
            Another reported 300-400 tokens per second on a bulk refactor of Metal kernels to CUDA.
            My own caveat from August still applies: the endpoint translates the wire format, not
            the prompt engineering. Claude Code&apos;s system prompts were tuned on Claude. Run a
            few of your real tasks before you move a team over, and keep your{" "}
            <Link href="/blog/claude-code-fable-5-model-routing" className="project-link">
              model routing
            </Link>{" "}
            setup handy for switching back.
          </p>
        </section>

        {/* Section 4 */}
        <section id="vision" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Image" size="md" />
            Using DeepSeek V4.1 Flash Vision for Coding: Screenshots, Diagrams, UI Bugs
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Image input works through the Anthropic endpoint. The compatibility page lists image
            blocks as supported in three forms: base64 (JPEG, PNG, GIF, WebP), a POST_URL, or a Files
            API reference with the <code>anthropic-beta: files-api-2025-04-14</code> header. In
            practice that means pasting a screenshot into Claude Code, or asking it to read a PNG
            from disk, reaches the model as an image. With V4 Flash, the same request had nowhere to
            go.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            What doesn&apos;t get through matters just as much. The same page marks these content
            types as unsupported:
          </p>

          <ul className="skill-list mb-6">
            <li>
              <strong>Document blocks</strong>, which is how PDFs travel. Export pages to PNG or
              extract the text first.
            </li>
            <li>
              <strong>MCP tool-use and tool-result blocks.</strong> Claude Code runs local MCP
              servers as regular tools, but if your setup relies on server-side MCP connectors, test
              it before switching.
            </li>
            <li>Search result blocks, redacted thinking, code execution results, and container uploads.</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            DeepSeek&apos;s release suite tests vision inside tool use, which is the right place to
            test it for agents: BabyVision with tools scores 89.6 and Chartography with tools 78.9,
            per{" "}
            <Ext href="https://blog.buildfastwithai.com/deepseek-v4-1-flash-review">
              Build Fast with AI&apos;s review
            </Ext>
            . These are the coding jobs where I&apos;d actually reach for it:
          </p>

          <ul className="skill-list mb-6">
            <li>
              Comparing a Playwright screenshot against a design mock and listing the differences
              before touching CSS.
            </li>
            <li>Reading an architecture diagram from a wiki and turning it into a Terraform module outline.</li>
            <li>Pulling numbers out of a Grafana panel screenshot into JSON for an incident note.</li>
            <li>Reading a stack trace someone pasted as an image in a ticket.</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            The most complete public example is{" "}
            <Ext href="https://www.datacamp.com/tutorial/deepseek-v4-1-api-tutorial">
              DataCamp&apos;s visual repair agent
            </Ext>
            . It uses the OpenAI SDK, not Claude Code, but its numbers show what an image-in-the-loop
            session costs: 14 repair turns plus a report came to about $0.0103, with 137,088 of
            156,724 input tokens (87%) served from cache. Screenshots come back as tool output, so
            the model can check its own fix.
          </p>

          <CodeBlock
            language="text"
            filename="Claude Code prompt"
            code={`Take a screenshot of http://localhost:3000/pricing with Playwright,
save it to /tmp/pricing.png, then read that file and compare it with
designs/pricing-mock.png. List layout differences first. Don't edit
any CSS until I confirm the list.`}
          />

          <p className="text-lg leading-relaxed mb-6">
            The &quot;list first, edit later&quot; step is deliberate. Visual models are good at
            spotting that something moved and weaker at saying exactly how many pixels. Making it
            commit to a list gives you a cheap checkpoint before it starts rewriting stylesheets.
          </p>
        </section>

        {/* Section 5 */}
        <section id="v4-pro-reversal" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Undo2" size="md" />
            DeepSeek V4 Pro vs V4.1 Flash: The Reroute That Didn&apos;t Happen
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            V4 Pro is still running, with its own pricing. That&apos;s worth saying plainly because
            the launch announcement said the opposite, and articles that ranked early still repeat
            it. The timeline, from DeepSeek&apos;s{" "}
            <Ext href="https://api-docs.deepseek.com/updates">changelog</Ext> and{" "}
            <Ext href="https://www.popularai.org/p/deepseek-v4-pro-vs-v4-1-flash">
              PopularAI&apos;s write-up
            </Ext>
            :
          </p>

          <DataTable
            head={["Date", "What happened"]}
            rows={[
              ["Aug 13, 2026", "V4 Pro reaches general availability as deepseek-v4-pro (V4-Pro-0813)"],
              ["Aug 16, 2026", "Peak/off-peak pricing starts; off-peak is half the peak rate"],
              ["Sep 10, 2026", "V4.1 Flash ships as deepseek-flash. V4 Flash and V4 Flash Vision Exp retired and aliased. Release note says deepseek-v4-pro will route to V4.1 Flash from Sep 14"],
              ["Sep 11, 2026", "Revision: V4 Pro API service continues after Sep 14 with billing unchanged"],
              ["Sep 14, 2026", "Nothing changed for V4 Pro callers"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            The HN thread shows why people cared. One commenter wrote, &quot;If I&apos;d carefully
            tested and optimized prompts against Pro I wouldn&apos;t be keen on this particular
            news.&quot; DeepSeek listened, at least this time. There&apos;s still no date for a V4.1
            Pro.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            So which one should you call? For coding and tool use, Flash: it wins DeepSWE (74.2
            against 62.7), Terminal-Bench 2.1 (90.6 against 87.9), and AutomationBench, and
            it&apos;s the only one that takes images. Keep V4 Pro for knowledge-heavy answers where
            it leads on GPQA Diamond (92.4) and HLE (42.7), or for a production prompt you&apos;ve
            already validated and don&apos;t want to re-test this quarter.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The broader lesson is about aliases. In seven weeks DeepSeek retired two model names,
            pointed them at a different architecture, announced a third reroute, and withdrew it. A
            model ID from this vendor tells you which endpoint you hit, not which weights answer. If
            behavior matters, pin it with your own eval suite. I covered how in{" "}
            <Link href="/blog/regression-proofing-claude-code-workflows" className="project-link">
              regression-proofing Claude Code workflows
            </Link>
            .
          </p>
        </section>

        {/* Section 6 */}
        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="DollarSign" size="md" />
            DeepSeek V4.1 Flash Pricing and Peak Hours
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            V4.1 Flash is much cheaper than V4 Pro and a bit more expensive than the model it
            replaced. Here are the current rates per 1M tokens from{" "}
            <Ext href="https://api-docs.deepseek.com/quick_start/pricing">
              DeepSeek&apos;s pricing page
            </Ext>
            .
          </p>

          <DataTable
            head={["Model", "Cache hit (off-peak / peak)", "Cache miss (off-peak / peak)", "Output (off-peak / peak)"]}
            rows={[
              ["deepseek-flash (V4.1 Flash)", "$0.003 / $0.006", "$0.15 / $0.30", "$0.60 / $1.20"],
              ["deepseek-v4-pro", "$0.022 / $0.044", "$0.66 / $1.32", "$1.98 / $3.96"],
              ["V4 Flash 0731 (retired, for reference)", "$0.0028", "$0.14", "$0.28"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            The &quot;price drop&quot; people celebrated on HN is relative to V4 Pro: 4.4x cheaper
            on uncached input and 3.3x on output. Against V4 Flash 0731, input is flat and output is
            about 2.1x higher off-peak. If your August cost model assumed $0.28 output, update it.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Peak hours in your time zone</h3>

          <p className="text-lg leading-relaxed mb-6">
            Peak pricing applies 01:00-04:00 and 06:00-10:00 UTC, Monday to Friday, excluding
            Chinese public holidays. Here in Pune that&apos;s 06:30-09:30 and 11:30-15:30 IST, which
            is most of my working morning and early afternoon. For a US team the windows fall in the
            evening and overnight, so they barely notice. If you&apos;re in India or Europe, schedule
            batch jobs (bulk refactors, overnight evals, doc generation) outside those windows and
            they cost half.
          </p>

          <h3 className="text-2xl font-semibold mb-4">The verbosity tax, and why cache wins it back</h3>

          <p className="text-lg leading-relaxed mb-6">
            Artificial Analysis flags V4.1 Flash as very verbose: 250M output tokens across its
            evaluation, against a median of 140M. Output is the expensive side of the bill, so this
            eats into the headline price. Its measured cost was $0.27 per Intelligence Index task.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Cached input at $0.003 per 1M is where it wins that back. A Claude Code session re-sends
            a long, stable prefix on every turn, and that prefix is exactly what gets cached. The
            DataCamp run above served 87% of its input from cache. Cheap encoder-side compute plus
            near-free cache hits is the actual economic argument for this model in an agent loop,
            more than the $0.15 sticker.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One practical warning: Claude Code&apos;s <code>/cost</code> prices tokens with
            Anthropic&apos;s rates, so after you swap the endpoint its number is wrong. Pull usage
            from the DeepSeek dashboard, or parse the session JSONL and apply the right rate per
            timestamp. The{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              Claude Code cost tracking guide
            </Link>{" "}
            shows how to read those files.
          </p>
        </section>

        {/* Section 7 */}
        <section id="local" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Server" size="md" />
            Can You Run DeepSeek V4.1 Flash Locally?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            You can, but not on a workstation anymore. The weights are MIT-licensed on Hugging Face,
            and the FP8 checkpoint is about 510 GB. Yotta Labs puts the practical minimum at an
            8-GPU node: 8x H100 80GB is a tight fit, 8x H200 or 8x B200/B300 is comfortable. V4
            Flash fit on two H200s, and people ran quantized builds on a pair of DGX Sparks. That
            path is closed for V4.1 at full precision.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal (8-GPU node)"
            code={`# vLLM
pip install vllm
vllm serve "deepseek-ai/DeepSeek-V4.1-Flash"

# or SGLang
pip install sglang
python3 -m sglang.launch_server \\
  --model-path "deepseek-ai/DeepSeek-V4.1-Flash" \\
  --host 0.0.0.0 --port 30000`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Two catches from the model card. There&apos;s no Jinja chat template in the repo, so
            generic tooling that expects one will format prompts wrong; use the reference encoder in
            the <code>encoding/</code> folder or DeepSeek&apos;s <code>deepseek-recipe</code>{" "}
            toolkit. And the card recommends <code>temperature 1.0</code>, <code>top_p</code> 0.95
            or 1.0, and a <code>max_tokens</code> of at least 256K, which is a lot of room for a
            verbose model to fill.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I haven&apos;t seen confirmed numbers for a V4.1 Flash quant on consumer hardware yet.
            For V4 Flash, an HN user ran an IQ3_XXS build at 256K context in about 117 GB on a Mac
            Studio, and something similar will probably appear for V4.1. Until it does, self-hosting
            only makes sense for data residency or air-gapped work. If a model that fits under your
            desk is the real requirement, start with{" "}
            <Link href="/blog/glm-5-2-local-coding-guide" className="project-link">
              GLM-5.2 locally
            </Link>
            .
          </p>
        </section>

        {/* Section 8 */}
        <section id="limitations" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="TriangleAlert" size="md" />
            DeepSeek V4.1 Flash Limitations and Gotchas
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Most of these come straight from the sections above. Here they are in one place, the way
            I&apos;d check them before switching a team over.
          </p>

          <ul className="skill-list mb-6">
            <li>
              <strong>Vendor benchmarks.</strong> The frontier comparisons are DeepSeek&apos;s own
              runs. The only independent composite I trust so far is Artificial Analysis (39,
              seventh of 117).
            </li>
            <li>
              <strong>Long-horizon gap.</strong> Terminal-Bench 4.0 at 31.2 against 39.9 for GPT-5.6
              Sol. For multi-hour autonomous runs, keep a stronger model in the loop.
            </li>
            <li>
              <strong>Output price went up</strong> versus V4 Flash, the model is verbose, and peak
              hours double everything.
            </li>
            <li>
              <strong>Unsupported blocks.</strong> No PDFs as documents, no MCP tool blocks, no
              code-execution results through the Anthropic endpoint.
            </li>
            <li>
              <strong>Alias churn.</strong> <code>deepseek-v4-flash</code> is a temporary alias, and
              unmapped Claude names fall through to whatever DeepSeek decides.
            </li>
            <li>
              <strong>Language drift in the web app.</strong> HN users saw replies switch to Chinese
              in the web UI. API users in the same thread reported no problem.
            </li>
            <li>
              <strong>Data location.</strong> Hosted API traffic goes to DeepSeek&apos;s servers in
              China. For code under an NDA, the self-hosted weights are the answer, with the hardware
              bill above.
            </li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            My read after a month of following this model line: V4.1 Flash is the first DeepSeek
            model I&apos;d put in the Claude Code main loop for everyday work, not just the Haiku
            slot. It&apos;s not the model I&apos;d hand an overnight autonomous task, and I&apos;d
            still check the bill after the first week.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="MessageCircleQuestion" size="md" />
            Frequently Asked Questions
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
                <Link href="/blog/deepseek-v4-flash-agentic-coding-guide" className="project-link">
                  DeepSeek V4 Flash for Claude Code
                </Link>{" "}
                - the August guide to the previous model, useful for seeing what changed.
              </li>
              <li>
                <Link href="/blog/claude-code-fable-5-model-routing" className="project-link">
                  Claude Code Model Routing with Fable 5
                </Link>{" "}
                - fallbacks and per-task routing so you can switch back without editing dotfiles.
              </li>
              <li>
                <Link href="/blog/claude-code-cost-tracking" className="project-link">
                  Claude Code Cost Tracking
                </Link>{" "}
                - measure real spend per session before trusting a per-token price.
              </li>
              <li>
                <Link href="/blog/kimi-k3-agentic-coding-guide" className="project-link">
                  Kimi K3 for Agentic Coding
                </Link>{" "}
                - the other open-weight model worth testing against this one.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <RelatedPosts slug={SLUG} />
      <PostNavigation slug={SLUG} />
    </>
  )
}
