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

const SLUG = "gemini-decisions-api-agent-routing-guide"
const POST_URL = `https://avinashsangle.com/blog/${SLUG}`
const OG_IMAGE = `https://avinashsangle.com/og-${SLUG}.png`
const HEADLINE = "Gemini Decisions API: Cheap, Calibrated Routing for AI Agents"
const DESCRIPTION =
  "Use the Gemini Decisions API as your agent's router: question types, confidence thresholds, cost per decision, OpenAI and Jev comparison, and its limits."
const PUBLISHED = "2026-11-17"
const GOOGLE_BLOG =
  "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/"

export const metadata: Metadata = {
  // 41 chars: the layout template adds 17, so the rendered title is 58
  title: "Gemini Decisions API: Agent Routing Guide",
  description: DESCRIPTION,
  keywords: [
    "Gemini Decisions API",
    "Gemini Decision 1",
    "gemini-decision-1",
    "gemini-decision-1 agent routing",
    "LLM model routing classifier",
    "decision model API",
    "Gemini Decisions API pricing",
    "Gemini Decisions API vs OpenAI Decisions API",
    "Gemini Decisions API Python example",
    "LLM tool selection without generating text",
    "agent router confidence threshold",
    "Jev decision model",
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
    publishedTime: "2026-11-17T00:00:00.000Z",
    modifiedTime: "2026-11-17T00:00:00.000Z",
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
    q: "What is the Gemini Decisions API?",
    a: "It's a Google endpoint, launched November 11, 2026, that answers closed questions about an input instead of writing text. The model, gemini-decision-1, returns a probability for yes/no checks, a probability per option for multiple choice, and a level for rubric scores. It takes text, images, audio, video and PDFs.",
  },
  {
    q: "How much does Gemini Decision 1 cost?",
    a: "Google lists $0.10 per million input tokens and does not bill output tokens. A 500-token routing decision costs $0.00005, so a million of them costs about $50. Questions in the same request share one input, so asking ten questions instead of one adds only the tokens of the extra question text.",
  },
  {
    q: "Is the Gemini Decisions API cheaper than Gemini Flash-Lite for classification?",
    a: "Usually. Google says it's nearly 5x cheaper than Gemini 3.5 Flash-Lite across its own benchmark suite, and my per-call math lands at 4-6x for short inputs. With a long, repeated context the gap closes, because Flash-Lite discounts cached input and the Decisions API doesn't support context caching.",
  },
  {
    q: "What question types does the Gemini Decisions API support?",
    a: "Three. A yes/no question returns the probability the statement holds. A choice question picks from 2 to 255 options and returns a probability for each. A score question rates the input on an ordered rubric of 2 to 255 levels, lowest first. Every request can mix all three types.",
  },
  {
    q: "How many questions can I send in one Gemini Decisions API request?",
    a: "Up to 1,000, all evaluated against one shared input that, together with the questions, must fit in 262,144 tokens. The questions are independent: one can't read another's answer. That makes a flat set of questions cheap, but you can't build a chained decision tree inside a single call.",
  },
  {
    q: "Gemini Decisions API vs OpenAI Decisions API: which should I use?",
    a: "Both list $0.10 per million input tokens with free output. Gemini takes up to 1,000 questions and audio, video and PDF input. OpenAI's is generally available, reportedly caps a request at 400 questions, and discounts cached prefixes. If your router sees long repeated context, OpenAI's caching can matter more than the question cap.",
  },
  {
    q: "Can the Gemini Decisions API pick which tool an agent should call?",
    a: "Yes, that's one of the uses Google names. Put tool names as the options of a choice question, describe each in the instructions, and read the probabilities. The API picks a tool but doesn't fill in its arguments, so a generative model still writes the actual call after the decision.",
  },
  {
    q: "When should I not use a decision model?",
    a: "Skip it when you need written output, an explanation of the decision, or steps where one answer depends on another. It also doesn't fit workloads that rely on Batch API pricing or context caching, and as a v1beta API on the Gemini Developer API only, field names can still change.",
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
    "Gemini Decisions API, Gemini Decision 1, gemini-decision-1, agent routing, model routing, decision model, OpenAI Decisions API, Jev",
  articleSection: "AI Development",
  wordCount: 2700,
})

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://avinashsangle.com/blog" },
    { "@type": "ListItem", position: 3, name: "Gemini Decisions API Agent Routing Guide", item: POST_URL },
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
  name: "How to add the Gemini Decisions API as an agent router",
  description:
    "Install the SDK, write routing questions, run the router in shadow mode next to your current one, then switch over with confidence bands and a fallback.",
  totalTime: "PT2H",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Install the SDK and get a key",
      text: "Create a Gemini API key in Google AI Studio and install google-genai 3.2.0 or later. Create the client with api_version v1beta.",
      url: `${POST_URL}#getting-started`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Write the routing questions",
      text: "Write three to five yes/no and choice questions that cover the decisions your agent makes before each step, such as whether a tool is needed, which tool, and which model tier.",
      url: `${POST_URL}#agent-router`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Run in shadow mode",
      text: "Call the Decisions API next to your existing router for a week and log both decisions with their probabilities, without acting on the new one.",
      url: `${POST_URL}#getting-started`,
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Set confidence bands and switch over",
      text: "Pick act and fallback thresholds from the logged disagreements, route the ambiguous band to a stronger model or a human, and switch traffic over.",
      url: `${POST_URL}#thresholds`,
    },
  ],
})

const toc = [
  ["what-is-it", "What is the Gemini Decisions API?"],
  ["question-types", "How do the question types work?"],
  ["agent-router", "How to use the Gemini Decisions API as an agent router"],
  ["thresholds", "How to set confidence thresholds"],
  ["cost", "What does a routing decision actually cost?"],
  ["vs-openai-jev", "Gemini Decisions API vs OpenAI Decisions API vs Jev"],
  ["other-uses", "Other agent uses: policy gates, RAG filtering, grading"],
  ["limits", "Limits, and when not to use it"],
  ["getting-started", "Getting started in four steps"],
  ["faq", "FAQ"],
]

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

const installCode = `pip install "google-genai>=3.2.0"
export GEMINI_API_KEY="..."   # from Google AI Studio`

const minimalCode = `import os
from google import genai

client = genai.Client(
    api_key=os.environ["GEMINI_API_KEY"],
    http_options={"api_version": "v1beta"},
)

result = client.decisions.create(
    model="gemini-decision-1",
    input="The blue mug I ordered on Monday arrived cracked on Wednesday.",
    questions={
        "is_damaged": {
            "type": "noul",
            "instructions": "Did the item arrive damaged?",
        },
    },
)

print(result.answers["is_damaged"])`

const routerCode = `import os
from dataclasses import dataclass
from google import genai

client = genai.Client(
    api_key=os.environ["GEMINI_API_KEY"],
    http_options={"api_version": "v1beta"},
)

TOOLS = ["search_docs", "run_sql", "create_ticket", "none"]
TIERS = ["small", "medium", "large"]  # e.g. Haiku / Sonnet / Opus, or Flash-Lite / Flash / Pro

QUESTIONS = {
    "needs_tool": {
        "type": "noul",
        "instructions": "Does answering this request require calling an external tool?",
    },
    "which_tool": {
        "type": "choice",
        "instructions": (
            "Which tool fits best? search_docs: product documentation. "
            "run_sql: questions about our own usage data. "
            "create_ticket: the user reports a bug or asks for a change. "
            "none: no tool fits."
        ),
        "options": TOOLS,
    },
    "model_tier": {
        "type": "choice",
        "instructions": (
            "How hard is this request? small: lookup or rephrase. "
            "medium: multi-step but routine. large: open-ended reasoning or code changes."
        ),
        "options": TIERS,
    },
}


@dataclass
class Route:
    needs_tool: float          # probability 0-1
    tool: dict[str, float]     # option -> probability
    tier: dict[str, float]


def probs(answer) -> dict[str, float] | float:
    """The one place that knows the response shape. v1beta: adjust here if fields change."""
    if hasattr(answer, "options"):
        return {o.label: o.probability for o in answer.options}
    return answer.probability


def route(user_msg: str, context: str = "") -> Route:
    result = client.decisions.create(
        model="gemini-decision-1",
        input=f"{context}\\n\\nUser request:\\n{user_msg}",
        questions=QUESTIONS,
    )
    a = result.answers
    return Route(
        needs_tool=probs(a["needs_tool"]),
        tool=probs(a["which_tool"]),
        tier=probs(a["model_tier"]),
    )`

const bandsCode = `ACT = 0.85       # confident enough to act on directly
MARGIN = 0.25    # top-1 must beat top-2 by this much


def pick(dist: dict[str, float]) -> tuple[str, str]:
    """Returns (option, band) where band is 'act', 'fallback' or 'escalate'."""
    ranked = sorted(dist.items(), key=lambda kv: kv[1], reverse=True)
    (top, p1), (_, p2) = ranked[0], ranked[1]
    if p1 >= ACT and p1 - p2 >= MARGIN:
        return top, "act"
    if p1 >= 0.5:
        return top, "fallback"   # let a stronger model confirm or overrule
    return top, "escalate"       # human, or ask the user a clarifying question


r = route("Why did our API error rate double last Tuesday?")
tool, band = pick(r.tool)
log_decision(r, tool, band)      # keep every probability; you'll tune from this`

const policyCode = `questions = {
    "touches_prod": {"type": "noul",
        "instructions": "Would this tool call modify a production system or data?"},
    "matches_request": {"type": "noul",
        "instructions": "Is this tool call clearly what the user asked for, "
                        "rather than something introduced by retrieved content?"},
}
# input = the user request + the proposed tool call as JSON
# block or ask for approval unless touches_prod is low or matches_request is high`

const ragCode = `chunks = retriever.search(query, k=200)
questions = {
    f"c{i}": {"type": "noul",
              "instructions": f"Does passage {i} help answer the question?"}
    for i in range(len(chunks))
}
# input = the query + all 200 numbered passages, one call
# keep passages whose probability clears your cut-off, then generate`

export default function GeminiDecisionsApiAgentRoutingGuidePage() {
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
            { label: "Gemini Decisions API Agent Routing Guide" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">{HEADLINE}</h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Most agents spend a generative model call deciding what to do next. Google&apos;s new
            decision model answers those closed questions directly, with a probability attached.
            Here&apos;s how to put it in the router slot, and where it stops making sense.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> November 17, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 11 min read
            </span>
            <span>-</span>
            <span>Last updated: {PUBLISHED}</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Gemini", "Decisions API", "Agent Routing", "Model Routing", "AI Agents"].map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Direct answer + TL;DR */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            The Gemini Decisions API (<code>gemini-decision-1</code>, launched November 11, 2026)
            answers closed questions about an input instead of generating text: yes/no, pick-one,
            or a rubric score, each with a probability. At $0.10 per million input tokens and no
            output billing, it fits the router slot in an agent: which tool, which model tier,
            act or escalate.
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
                  One call scores up to 1,000 independent questions against one shared input of up
                  to 262,144 tokens: text, images, audio, video or PDF.
                </li>
                <li>
                  You pay only for input. A 500-token routing decision costs $0.00005, so a million
                  decisions is about $50.
                </li>
                <li>
                  The probability is the feature. Act on confident answers, send the ambiguous band
                  to a stronger model or a person.
                </li>
                <li>
                  It doesn&apos;t write, explain, chain answers, cache context or run in batch. Keep
                  a generative model for everything after the decision.
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
        <section id="what-is-it" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitFork" size="md" />
            What is the Gemini Decisions API?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The Gemini Decisions API is a separate endpoint in the Gemini Developer API that scores
            a fixed set of answers instead of generating tokens. You send one input and a list of
            questions. You get back typed answers with probabilities, no free text to parse.
            Google announced it on{" "}
            <a href={GOOGLE_BLOG} className="project-link">
              its developer blog
            </a>{" "}
            on November 11, 2026, alongside the model that powers it, Gemini Decision 1.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I care about this for one reason. In a typical agent loop, a lot of model calls
            aren&apos;t doing the work. They&apos;re deciding what work to do: does this message
            need a tool, which one, is this a job for the cheap model or the expensive one, should a
            human look first. Those are classification problems, usually paid for at generative
            prices, plus a JSON parser and retry logic for when the small model wanders off
            format.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Google says median model compute is 50-100 ms, or 150-250 ms end to end, for inputs up
            to 16K tokens. Google also runs its own product on it: Gemini Notebook uses the
            Decisions API as a real-time router that sends each query to the right model tier.
            That&apos;s the pattern this post is about.
          </p>

          <Card className="card-accent-left mb-6">
            <CardContent className="pt-6">
              <p className="leading-relaxed">
                <strong>What I did and didn&apos;t test.</strong> This guide is built from
                Google&apos;s launch post, its v1beta API as documented in the launch coverage, and
                the published prices. I haven&apos;t yet benchmarked Decision 1 on my own agents&apos;
                traffic, so the thresholds below are starting points to tune, not measured
                results. Every benchmark number here is Google&apos;s.
              </p>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed">
            It&apos;s already reachable outside Google&apos;s SDK. Vercel added it to{" "}
            <a
              href="https://vercel.com/changelog/gemini-decision-1-now-available-on-ai-gateway"
              className="project-link"
            >
              AI Gateway
            </a>{" "}
            the same week, and there are integrations for{" "}
            <a
              href="https://docs.langchain.com/oss/python/integrations/decision_models/google_generative_ai"
              className="project-link"
            >
              LangChain
            </a>
            , OpenRouter and LiteLLM.
          </p>
        </section>

        {/* Section 2 */}
        <section id="question-types" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ListTodo" size="md" />
            How do the Gemini Decisions API question types work?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            There are three question types, and you can mix them in one request. Each question
            gets a name you choose, a type, and plain-text instructions. Choice and score
            questions also take a list of options or levels.
          </p>

          <DataTable
            head={["Type", "What you get back", "Router use"]}
            rows={[
              ["noul (yes/no)", "Probability the statement holds, 0-1", "Gates: needs a tool? needs a human? is this safe?"],
              ["choice", "One probability per option, 2-255 options", "Pick the tool, the model tier, the queue"],
              ["score", "A level on an ordered rubric, 2-255 levels, lowest first", "Grade an answer, rate urgency or difficulty"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            The yes/no type really is spelled <code>noul</code> in the v1beta API. Google
            recommends 2-10 levels for score questions even though 255 are allowed. Fewer levels
            with clear descriptions beat a fine-grained scale nobody can tell apart.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The SDK is <code>google-genai</code> 3.2.0 or later, pointed at the{" "}
            <code>v1beta</code> API version:
          </p>

          <CodeBlock language="bash" filename="terminal" code={installCode} />
          <CodeBlock language="python" filename="decide.py" code={minimalCode} />

          <p className="text-lg leading-relaxed">
            One constraint shapes everything that follows: questions are independent. Each one
            sees the shared input, never another question&apos;s answer. You can ask 1,000
            questions for nearly the price of one, but you can&apos;t write &quot;if the answer to
            question 1 is yes, then...&quot; inside a call.
          </p>
        </section>

        {/* Section 3 */}
        <section id="agent-router" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Route" size="md" />
            How to use the Gemini Decisions API as an agent router
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Make the decision call the first thing that happens on each turn, and only call a
            generative model on the branch it picks. Ask every routing question at once, flat,
            even ones you&apos;ll only need on some branches. Unused answers cost a few tokens of
            question text. A second round trip costs another 150-250 ms.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Here&apos;s a router that answers the three questions most of my agents ask before
            doing anything: does this need a tool, which tool, and how much model does it need.
            The tier names are deliberately generic. The same router can pick between Claude Haiku,
            Sonnet and Opus as easily as between Gemini Flash-Lite, Flash and Pro.
          </p>

          <CodeBlock language="python" filename="router.py" code={routerCode} />

          <p className="text-lg leading-relaxed mb-6">
            Two details matter more than they look. First, the option descriptions live in the
            instructions. The model only sees the labels in <code>options</code>, so &quot;run_sql:
            questions about our own usage data&quot; is what makes the choice meaningful. Treat
            those descriptions like tool descriptions in an MCP server: short, specific, and
            different from each other.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Second, <code>probs()</code> is the only function that knows the response shape. The
            API is v1beta and launch coverage already shows a couple of slightly different field
            layouts, so I keep the parsing in one place. If a field gets renamed, that&apos;s a
            one-line fix.
          </p>

          <p className="text-lg leading-relaxed">
            What the router doesn&apos;t do is fill in tool arguments. It tells you{" "}
            <code>run_sql</code> is the right tool with 0.93 probability. Writing the query is still
            a job for a generative model, now one you can pick by tier instead of always using the
            biggest. If you route between Claude models inside Claude Code, my{" "}
            <Link href="/blog/claude-code-fable-5-model-routing" className="project-link">
              Fable 5 model routing guide
            </Link>{" "}
            covers the other half of this problem.
          </p>
        </section>

        {/* Section 4 */}
        <section id="thresholds" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Gauge" size="md" />
            How to set confidence thresholds
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Split decisions into three bands: act, fallback and escalate. The probabilities are why
            you&apos;d use this API at all. A small generative model that answers &quot;run_sql&quot;
            sounds equally sure whether it was 95% or 40% confident, and your code has no way to
            tell the difference.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Google claims Decision 1 has the lowest calibration error across its routing,
            reasoning, ranking and multimodal benchmarks. Calibration means a 0.8 is right about
            80% of the time, which is what makes a fixed threshold meaningful. That claim
            hasn&apos;t been independently tested yet, so check it on your own logs before you
            trust it.
          </p>

          <CodeBlock language="python" filename="bands.py" code={bandsCode} />

          <p className="text-lg leading-relaxed mb-6">
            For choice questions, look at the margin, not only the top probability. Options at
            0.48 and 0.45 mean the model can&apos;t separate them. Often that means your option
            descriptions overlap, which is a prompt fix rather than a threshold fix.
          </p>

          <p className="text-lg leading-relaxed">
            Treat 0.85 and 0.25 as defaults to move. Log every decision with all of its
            probabilities, then once a week look at the misroutes in the act band and the
            fallbacks that the stronger model agreed with. The first tells you to raise{" "}
            <code>ACT</code>, the second to lower it. The same regression mindset from my{" "}
            <Link href="/blog/regression-proofing-claude-code-workflows" className="project-link">
              regression-proofing guide
            </Link>{" "}
            applies: keep the misrouted examples as a test set.
          </p>
        </section>

        {/* Section 5 */}
        <section id="cost" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Calculator" size="md" />
            What does a routing decision actually cost?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            A short routing decision costs about a quarter of what the same decision costs on
            Gemini 3.5 Flash-Lite, and the gap grows when you ask several questions at once. With a
            long, repeated context, the advantage mostly disappears. Here&apos;s the math, using
            $0.10 per million input tokens for Decision 1 and Flash-Lite&apos;s published $0.30
            input, $2.50 output and $0.03 cached-input rates (check{" "}
            <a href="https://ai.google.dev/gemini-api/docs/pricing" className="project-link">
              Google&apos;s pricing page
            </a>{" "}
            on the day you read this).
          </p>

          <DataTable
            head={["Scenario", "Decision 1", "Flash-Lite classifier", "Ratio"]}
            rows={[
              ["500-token input, 1 question (~20 output tokens)", "$0.00005", "$0.00020", "4x"],
              ["500-token input, 3 questions (~60 output tokens)", "$0.00005", "$0.00030", "6x"],
              ["4,000-token input, uncached, 3 questions", "$0.00040", "$0.00135", "3.4x"],
              ["4,000-token input, 3,500 cached, 3 questions", "$0.00040", "$0.00041", "~1x"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            Google&apos;s own number is &quot;nearly 5x cheaper&quot; than Flash-Lite across its
            benchmark suite, which sits right inside my 4-6x range for short inputs. You&apos;ll see
            &quot;50x&quot; repeated in some launch write-ups. I can&apos;t find a source for it, and
            the arithmetic above doesn&apos;t support it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The last row is the one to think about. Agents tend to send the same long system prompt
            and tool list every turn. Flash-Lite caches that prefix at a tenth of the price, and
            Google lists context caching as unsupported for Decision 1. If your router input is
            mostly a fixed preamble, trim it: the decision model needs the request and short option
            descriptions, not your full agent prompt.
          </p>

          <p className="text-lg leading-relaxed">
            The bigger saving is usually indirect. A router that confidently sends most turns to
            the small tier saves far more on the generative side than it costs to run. To see where
            your money goes today, start with{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              cost tracking
            </Link>{" "}
            before you change anything.
          </p>
        </section>

        {/* Section 6 */}
        <section id="vs-openai-jev" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Scale" size="md" />
            Gemini Decisions API vs OpenAI Decisions API vs Jev
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Google is the third vendor in this category, not the first.{" "}
            <a href="https://simonwillison.net/2026/Nov/11/gemini-decisions-api/" className="project-link">
              Simon Willison
            </a>{" "}
            framed the launch exactly that way: Google joining Jev and OpenAI. OpenAI&apos;s
            Decisions API went generally available on October 22, 2026. Here&apos;s how they line
            up as of November 17, 2026. The OpenAI and Jev rows come from secondary reporting, so
            check their pricing pages before you commit.
          </p>

          <DataTable
            head={["", "Gemini Decision 1", "OpenAI Decisions", "Jev 1.14"]}
            rows={[
              ["Input price / 1M tokens", "$0.10", "$0.10", "$0.042 (reported)"],
              ["Output billing", "None", "None", "None"],
              ["Questions per request", "1,000", "400 (reported)", "Not confirmed"],
              ["Input types", "Text, image, audio, video, PDF", "Text, image", "Text, JSON"],
              ["Prompt caching", "Not supported", "Default, discounted", "Not confirmed"],
              ["Status", "v1beta", "GA", "GA"],
              ["JevBench (Google-reported)", "92.2%", "90.9% (GPT-6 Luna)", "90.0%"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            The JevBench row comes from Google&apos;s launch material, and a 1-2 point spread on a
            vendor-run benchmark doesn&apos;t tell you much. Price and features separate them more
            clearly than accuracy does.
          </p>

          <p className="text-lg leading-relaxed">
            My rule of thumb: pick Gemini if you route on screenshots, audio, video or PDFs, or need
            hundreds of questions per input. Pick OpenAI if your router sees a long repeated prefix
            and caching discounts matter, or you need a GA endpoint today. Pick Jev for text-only,
            high-volume routing where price is the deciding factor. On Hacker News, the main complaint about Google&apos;s launch was price compared to Jev, and for plain
            text that complaint is fair.
          </p>
        </section>

        {/* Section 7 */}
        <section id="other-uses" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldCheck" size="md" />
            Other agent uses: policy gates, RAG filtering, grading
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Any place in an agent loop where you ask a model a closed question is a candidate.
            Three come up in most agents.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Policy gate before a side-effecting tool call</h3>
          <p className="text-lg leading-relaxed mb-6">
            Before the agent runs anything that writes, ask whether the proposed call touches
            production and whether it matches what the user asked for. The second question is a
            cheap prompt-injection tripwire: retrieved content that slips in an instruction tends
            to produce calls the user never asked for. It doesn&apos;t replace the controls in my{" "}
            <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
              prompt injection hardening guide
            </Link>
            , but it adds a layer for a fraction of a cent.
          </p>
          <CodeBlock language="python" filename="policy_gate.py" code={policyCode} />

          <h3 className="text-2xl font-semibold mb-4">RAG relevance filtering</h3>
          <p className="text-lg leading-relaxed mb-6">
            The 1,000-question limit makes one-call reranking practical. Number the retrieved
            passages in the input and ask one yes/no question per passage. Two hundred chunks of
            300 tokens is a 60,000-token input, about $0.006 per query, and you send the generative
            model only what cleared the cut-off.
          </p>
          <CodeBlock language="python" filename="rag_filter.py" code={ragCode} />

          <h3 className="text-2xl font-semibold mb-4">Grading generated output</h3>
          <p className="text-lg leading-relaxed">
            A score question with a short rubric (wrong, partly right, right, right and complete)
            makes a cheap eval step on an agent&apos;s draft answer. It won&apos;t say why something
            scored low, so use it to decide which outputs get a closer look, not as the eval itself.
          </p>
        </section>

        {/* Section 8 */}
        <section id="limits" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="TriangleAlert" size="md" />
            Limits, and when not to use it
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Don&apos;t use the Decisions API anywhere you need words back. It can&apos;t explain a
            decision, extract a value or write a reply, and since questions don&apos;t see each
            other, it can&apos;t reason through dependent steps. The hard limits, as of launch:
          </p>

          <ul className="skill-list text-lg leading-relaxed mb-6">
            <li>262,144 tokens of shared input plus questions, and 1 to 1,000 questions per request.</li>
            <li>2-255 options per choice question, 2-255 levels per score question.</li>
            <li>The 150-250 ms latency figure applies to inputs up to 16K tokens. Expect more above that.</li>
            <li>Batch API, context caching, and Flex or Priority inference are listed as unsupported.</li>
            <li>v1beta on the Gemini Developer API (AI Studio keys). Not on Vertex AI at launch.</li>
          </ul>

          <p className="text-lg leading-relaxed">
            The v1beta label is the one I&apos;d weigh most. Field names can change, which is why the
            router above isolates parsing in one function. And every accuracy and calibration
            figure so far is Google&apos;s. Run it in shadow mode before it decides anything real.
          </p>
        </section>

        {/* Section 9 */}
        <section id="getting-started" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Rocket" size="md" />
            Getting started in four steps
          </h2>

          <ol className="list-decimal ml-6 space-y-4 text-lg leading-relaxed mb-6">
            <li>
              <strong>Get a key and the SDK.</strong> Create a key in Google AI Studio, install{" "}
              <code>google-genai</code> 3.2.0 or later, and set <code>api_version</code> to{" "}
              <code>v1beta</code>.
            </li>
            <li>
              <strong>Write three to five routing questions.</strong> Pull 50 real requests from your
              agent&apos;s logs and write questions for the decisions it already makes on them.
              Spend your time on the option descriptions.
            </li>
            <li>
              <strong>Run it in shadow mode for a week.</strong> Call the router next to your current
              logic, log both decisions and all probabilities, and act only on the old one.
            </li>
            <li>
              <strong>Set bands from the disagreements and switch.</strong> Choose <code>ACT</code>{" "}
              and <code>MARGIN</code> from the cases where the two routers disagreed, keep the
              fallback band pointed at a stronger model, and move traffic over.
            </li>
          </ol>

          <p className="text-lg leading-relaxed">
            Shadow mode is the step people skip and the one that matters. It gives you a labelled
            set of your own traffic, which is worth more than any of the launch benchmarks.
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
                For the models on the other side of the router, see{" "}
                <Link href="/blog/gemini-3-5-flash-agentic-coding-guide" className="project-link">
                  Gemini 3.5 Flash for agentic coding
                </Link>{" "}
                and{" "}
                <Link href="/blog/claude-code-fable-5-model-routing" className="project-link">
                  Claude Code Fable 5 model routing
                </Link>
                . For another API feature that cuts tokens in agent loops, read{" "}
                <Link href="/blog/gpt-5-6-programmatic-tool-calling-guide" className="project-link">
                  GPT-5.6 programmatic tool calling
                </Link>
                . If you&apos;re building something that scores or sorts inputs, the{" "}
                <Link href="/projects/lead-scoring-agent" className="project-link">
                  lead scoring agent
                </Link>{" "}
                project is the kind of workload a decision model fits. Everything else is on the{" "}
                <Link href="/blog" className="project-link">
                  blog index
                </Link>
                .
              </p>
              <p className="text-muted-foreground">
                Sources:{" "}
                <a href={GOOGLE_BLOG} className="project-link">
                  Google: Gemini Decisions API launch
                </a>
                ,{" "}
                <a href="https://www.datacamp.com/tutorial/gemini-decisions-api" className="project-link">
                  DataCamp tutorial
                </a>
                ,{" "}
                <a
                  href="https://vercel.com/changelog/gemini-decision-1-now-available-on-ai-gateway"
                  className="project-link"
                >
                  Vercel AI Gateway
                </a>
                ,{" "}
                <a
                  href="https://siliconangle.com/2026/11/11/google-enters-the-decision-model-market-with-gemini-decisions-api/"
                  className="project-link"
                >
                  SiliconANGLE
                </a>
                ,{" "}
                <a
                  href="https://cryptobriefing.com/openai-decisions-api-generally-available/"
                  className="project-link"
                >
                  OpenAI Decisions API GA
                </a>
                ,{" "}
                <a
                  href="https://munderdiffl.in/blog/gemini-decisions-api-vs-openai-decisions-api/"
                  className="project-link"
                >
                  Gemini vs OpenAI Decisions comparison
                </a>
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
