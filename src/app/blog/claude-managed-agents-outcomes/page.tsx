import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Claude Managed Agents Outcomes: Auto-Grading Agent Work",
  description:
    "Claude Managed Agents Outcomes auto-grades agent output against a rubric and re-runs until it passes. Rubric format, max_iterations, grader events explained.",
  keywords: [
    "claude managed agents outcomes",
    "claude outcomes rubric",
    "claude agent grader",
    "claude managed agents max_iterations",
    "auto grade ai agent output",
    "claude user define_outcome",
    "rubric llm as judge",
    "anthropic outcomes beta",
    "claude outcome_evaluation_end",
    "claude managed agents 2026",
    "how to write a rubric for claude agents",
    "claude outcomes vs codex goal",
    "claude grader feedback loop",
    "managed-agents-2026-04-01 beta header",
    "claude agent verify own work",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Claude Managed Agents Outcomes: Auto-Grading Agent Work",
    description:
      "Claude Managed Agents Outcomes auto-grades agent output against a rubric and re-runs until it passes. Rubric format, max_iterations, grader events explained.",
    url: "https://avinashsangle.com/blog/claude-managed-agents-outcomes",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-05-12T00:00:00.000Z",
    modifiedTime: "2026-05-12T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-claude-managed-agents-outcomes.png",
        width: 1200,
        height: 630,
        alt: "Claude Managed Agents Outcomes: rubric-graded auto-iteration explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Managed Agents Outcomes: Auto-Grading Agent Work",
    description:
      "Outcomes hands a rubric to a separate grader, which re-runs the writer until the artifact passes. Rubric format, max_iterations, and grader events.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-claude-managed-agents-outcomes.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/claude-managed-agents-outcomes",
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

// Static JSON-LD schemas built at compile time from trusted hardcoded data.
// Same pattern used across every blog post on this site - no user input flows
// into these strings, content is JSON.stringify of literal objects.
const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Claude Managed Agents Outcomes: Auto-Grading Agent Work",
  description:
    "Claude Managed Agents Outcomes auto-grades agent output against a rubric and re-runs until it passes. Rubric format, max_iterations, grader events explained.",
  image: "https://avinashsangle.com/og-claude-managed-agents-outcomes.png",
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
  datePublished: "2026-05-12",
  dateModified: "2026-05-12",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/claude-managed-agents-outcomes",
  },
  keywords:
    "claude managed agents outcomes, claude outcomes rubric, claude agent grader, claude managed agents max_iterations, claude user define_outcome, anthropic outcomes beta",
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
      name: "Claude Managed Agents Outcomes",
      item: "https://avinashsangle.com/blog/claude-managed-agents-outcomes",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Claude Managed Agents Outcomes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Outcomes is a public-beta Managed Agents feature launched May 6, 2026. You attach a markdown rubric to a session via a user.define_outcome event, and a separate grader model evaluates each draft in its own context window. If the grader returns needs_revision, the feedback goes back to the writer for another iteration.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Claude outcome grader work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The grader runs in a fresh context window using the same model and tools as the writer agent. It reads only the rubric, inspects the artifact, and returns a per-criterion verdict on every iteration. Its reasoning is opaque, but its explanation field carries the gaps that the writer must close on the next pass.",
      },
    },
    {
      "@type": "Question",
      name: "How do I write a good rubric for Claude Outcomes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use explicit, gradeable criteria like \"the CSV has a numeric price column,\" not vibes like \"the data looks good.\" Anchor the rubric in verifiable structure and completeness, anticipate shortcuts the writer might take, mandate a feedback format, and tell the grader what to ignore so it does not thrash on style nits.",
      },
    },
    {
      "@type": "Question",
      name: "What is the default value of max_iterations in Claude Outcomes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The max_iterations field defaults to 3 and accepts values up to 20. For strict rubrics, the Anthropic cookbook recommends starting at 5. If the loop hits the cap with the same failures every iteration, the rubric is wrong; if it hits the cap with failures that converge, raise the cap instead of rewriting.",
      },
    },
    {
      "@type": "Question",
      name: "What are the result states of a Claude outcome evaluation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Five values appear on span.outcome_evaluation_end.result: satisfied (criteria met, session goes idle), needs_revision (writer starts another pass), max_iterations_reached (one final revision allowed before idle), failed (rubric contradicts the task description), and interrupted (a user.interrupt event landed mid-evaluation).",
      },
    },
    {
      "@type": "Question",
      name: "How much do Claude Outcomes cost on top of session-hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Outcomes has no separate per-outcome fee. The real cost driver is iterations: each revision adds writer tokens plus grader tokens and keeps the $0.08-per-session-hour clock running. A 20-minute session that iterates twice still bills around $0.027 in session-hours, plus the writer-and-grader tokens for both rounds.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Claude Outcomes with the Agent SDK or only Managed Agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Outcomes is a Managed Agents feature. The grader, the iteration loop, and the span.outcome_evaluation_* events all live in the hosted harness. If you run the Agent SDK locally, you can still build an LLM-as-judge yourself with a separate Anthropic API call, but the wiring back to the writer is on you.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Claude Outcomes and Codex /goal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both attach a success target to an autonomous agent run. Outcomes uses a rubric plus a separate grader and feeds the gaps back as natural-language revision notes. OpenAI's Codex /goal favors verifier scripts and structured pass-fail signals. Outcomes leans qualitative, /goal leans test-driven, and the runtime substrates differ.",
      },
    },
  ],
})

export default function ClaudeManagedAgentsOutcomesPage() {
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
            { label: "Claude Managed Agents Outcomes" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Claude Managed Agents Outcomes: Auto-Grading Agent Work
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Claude Managed Agents Outcomes is a public-beta feature, launched on
            May 6, 2026, that lets you hand the agent a rubric and have a
            separate grader model check every draft against it. If the grader
            returns <code>needs_revision</code>, the gaps flow back to the
            writer for another pass, up to <code>max_iterations</code>{" "}
            (default 3, max 20). Same hosted harness, no human in the loop.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> May 12, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 13 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-05-12</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              "Claude Managed Agents",
              "Outcomes",
              "Rubric",
              "LLM as Judge",
              "AI Agents",
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
                  <a href="#what-is-it" className="project-link">
                    What Are Claude Managed Agents Outcomes?
                  </a>
                </li>
                <li>
                  <a href="#how-grader-works" className="project-link">
                    How the Outcome Grader Works
                  </a>
                </li>
                <li>
                  <a href="#writing-rubrics" className="project-link">
                    Writing a Rubric the Grader Will Actually Enforce
                  </a>
                </li>
                <li>
                  <a href="#code-walkthrough" className="project-link">
                    Define an Outcome: Python Code Walkthrough
                  </a>
                </li>
                <li>
                  <a href="#result-states" className="project-link">
                    Grader Feedback: The Five Result States
                  </a>
                </li>
                <li>
                  <a href="#max-iterations" className="project-link">
                    Tuning max_iterations vs Fixing the Rubric
                  </a>
                </li>
                <li>
                  <a href="#cost-math" className="project-link">
                    What Outcomes Actually Cost
                  </a>
                </li>
                <li>
                  <a href="#vs-others" className="project-link">
                    Outcomes vs LLM-as-Judge vs Codex /goal
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
                Outcomes is a rubric-graded iteration loop built into the
                Managed Agents harness. You send one event,{" "}
                <code>user.define_outcome</code>, and the agent works until the
                grader says <code>satisfied</code> or hits{" "}
                <code>max_iterations</code>.
              </li>
              <li>
                A separate grader (same model and tools as the writer, fresh
                context window) evaluates every draft. Its feedback is the only
                signal the writer gets back on each revision.
              </li>
              <li>
                Anthropic&apos;s internal benchmarks report up to +10 points
                overall task success, +10.1% on <code>.pptx</code> generation,
                and +8.4% on <code>.docx</code> (
                <a
                  href="https://claude.com/blog/new-in-claude-managed-agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Anthropic, May 2026
                </a>
                ).
              </li>
              <li>
                The cost trap is the iteration count, not a per-outcome fee.
                Each revision multiplies writer plus grader tokens against the
                same $0.08-per-session-hour line item from the underlying
                Managed Agents pricing.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1 */}
        <section id="what-is-it" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ClipboardCheck" size="md" />
            What Are Claude Managed Agents Outcomes?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Outcomes is the part of{" "}
            <Link href="/blog/claude-managed-agents" className="project-link">
              Claude Managed Agents
            </Link>{" "}
            that lets the agent verify its own work. Instead of running until
            it self-assesses as done, the session runs against a markdown
            rubric, and a second Claude (the grader) inspects each artifact
            with no access to the writer&apos;s reasoning. Anthropic launched
            Outcomes in public beta on May 6, 2026, alongside two sibling
            features: dreaming (research preview) and multiagent orchestration
            (public beta).
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The framing matters. Anthropic describes it as{" "}
            <em>
              &quot;agents do their best work when they know what
              &lsquo;good&rsquo; looks like - a structural framework, a
              presentation standard, or a set of requirements&quot;
            </em>{" "}
            (
            <a
              href="https://claude.com/blog/new-in-claude-managed-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Anthropic blog, May 6 2026
            </a>
            ). The earlier Managed Agents flow asked you to write transcripts
            and review output yourself. Outcomes replaces that loop with a
            grader process and a rubric, so the agent keeps iterating without
            paging a human.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            On the launch list, three companies were explicitly named as
            production users of Outcomes:{" "}
            <strong>Harvey</strong> (legal document drafting),{" "}
            <strong>Spiral by Every</strong> (writing quality against editorial
            principles), and <strong>Wisedocs</strong> (document quality checks
            against internal guidelines). Per Anthropic&apos;s internal
            benchmarks, the loop lifts task success rates by up to{" "}
            <strong>10 percentage points</strong> over a standard prompting
            loop, with the largest gains on the hardest tasks (
            <a
              href="https://www.mindstudio.ai/blog/claude-outcomes-feature-rubric-grading-agent-powerpoint-quality"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              MindStudio, 2026
            </a>
            ).
          </p>

          <p className="text-lg leading-relaxed">
            The beta header is{" "}
            <code>managed-agents-2026-04-01</code>. Every Managed Agents API
            call carries it, and the official SDKs set it for you when you pass
            <code>betas=BETAS</code>. If you forget the header on a raw HTTP
            call, the session API returns 400 before you even get to the
            outcome event.
          </p>
        </section>

        {/* Section 2 */}
        <section id="how-grader-works" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Workflow" size="md" />
            How the Outcome Grader Works
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The flow is small and predictable. You create an environment and a
            writer agent. You start a session and send one event,{" "}
            <code>user.define_outcome</code>, carrying the task description and
            the rubric. The writer drafts. After each writer turn, the harness
            emits <code>span.outcome_evaluation_start</code> and spins up a
            grader in a fresh context window. The grader reads only the rubric,
            inspects the artifact (it has the same model and tools as the
            writer), and emits <code>span.outcome_evaluation_end</code> with a
            verdict. If the verdict is <code>needs_revision</code>, the
            explanation flows back into the writer&apos;s next turn.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two design choices make this useful rather than gimmicky. First,
            the grader runs with no visibility into the writer&apos;s internal
            reasoning, so it cannot be talked into approving an artifact that
            does not meet the rubric. Second, the grader re-checks the full
            artifact on every iteration, not the diff, so a fix that breaks a
            previously-passing criterion gets caught on the next round. The{" "}
            <a
              href="https://platform.claude.com/docs/en/managed-agents/define-outcomes"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              official define-outcomes reference
            </a>{" "}
            states this plainly: the grader uses a separate context window to
            avoid being influenced by the main agent&apos;s implementation
            choices.
          </p>

          <p className="text-lg leading-relaxed">
            The benchmark numbers are useful context. On Anthropic&apos;s
            internal eval set, file generation specifically saw{" "}
            <strong>+8.4% on .docx outputs</strong> and{" "}
            <strong>+10.1% on .pptx outputs</strong> over a standard prompting
            loop (
            <a
              href="https://claude.com/blog/new-in-claude-managed-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Anthropic, May 2026
            </a>
            ). Those are not headline-chart numbers; they are the difference
            between a slide deck that ships and one that doesn&apos;t. The gain
            is largest on the hardest tasks, which fits the pattern: easy work
            looks fine on the first pass anyway.
          </p>
        </section>

        {/* Section 3 */}
        <section id="writing-rubrics" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ScrollText" size="md" />
            Writing a Rubric the Grader Will Actually Enforce
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The rubric is the only lever you have on the grader. The default
            failure mode is a grader that approves everything, and the reason
            is almost always vague criteria. The Anthropic docs are blunt
            about it: structure the rubric as explicit, gradeable criteria,
            such as <em>the CSV contains a price column with numeric
            values</em> rather than <em>the data looks good</em>. The grader
            scores each criterion independently, so vague criteria produce
            noisy evaluations (
            <a
              href="https://platform.claude.com/docs/en/managed-agents/define-outcomes"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Define outcomes, Anthropic
            </a>
            ).
          </p>

          <p className="text-lg leading-relaxed mb-6">
            A working rubric has five properties. Each criterion is{" "}
            <strong>checkable</strong> by the grader using its tools. The
            target is the artifact&apos;s <strong>structure and
            completeness</strong>, not a fact the grader cannot independently
            confirm. The rubric{" "}
            <strong>anticipates shortcuts</strong> (for example, blocks
            corroboration via search snippets and mirrors when you want a
            primary source). It <strong>mandates a feedback format</strong> so
            you can parse the explanation downstream. And it{" "}
            <strong>tells the grader what to ignore</strong>, so you do not
            burn iterations on style nits.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Anthropic ships a working DCF model rubric on the docs page. It is
            worth reading because it shows what &quot;explicit and
            gradeable&quot; looks like in practice:
          </p>

          <CodeBlock
            language="markdown"
            filename="dcf-rubric.md"
            code={`# DCF Model Rubric

## Revenue Projections
- Uses historical revenue data from the last 5 fiscal years
- Projects revenue for at least 5 years forward
- Growth rate assumptions are explicitly stated and reasonable

## Cost Structure
- COGS and operating expenses are modeled separately
- Margins are consistent with historical trends or deviations are justified

## Discount Rate
- WACC is calculated with stated assumptions for cost of equity and cost of debt
- Beta, risk-free rate, and equity risk premium are sourced or justified

## Terminal Value
- Uses either perpetuity growth or exit multiple method (stated which)
- Terminal growth rate does not exceed long-term GDP growth

## Output Quality
- All figures are in a single .xlsx file with clearly labeled sheets
- Key assumptions are on a separate "Assumptions" sheet
- Sensitivity analysis on WACC and terminal growth rate is included`}
          />

          <p className="text-lg leading-relaxed my-6">
            Notice what the rubric does not say. It never asks the grader to
            verify that the input revenue figures are factually accurate. The
            grader has no way to confirm that a 2023 revenue number is real
            without going off and looking it up, and even if it did, you
            cannot easily test that part of the work. The rubric checks{" "}
            <em>that history was used</em>, not that the numbers are true.
            That is the right line.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            If you do not have a rubric and you are starting from scratch, the
            docs offer a bootstrap trick worth stealing: hand Claude a
            known-good artifact and ask it to write the rubric. The output is
            usually better than the rubric you would have written from a blank
            page, because it can name what makes the good artifact good. I run
            this once per document type and keep the rubric in a markdown file
            uploaded via the Files API with the{" "}
            <code>files-api-2025-04-14</code> beta. That way you can pass{" "}
            <code>rubric: &#123;type: &quot;file&quot;, file_id: ...&#125;</code>{" "}
            and reuse it across sessions.
          </p>
        </section>

        {/* Section 4 */}
        <section id="code-walkthrough" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Code" size="md" />
            Define an Outcome: Python Code Walkthrough
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The setup is three calls plus one event. Create the environment.
            Create the writer agent with whatever tools the task needs. Create
            the session. Send a single <code>user.define_outcome</code> event
            carrying a description string and the rubric, and the writer starts
            on receipt. No separate <code>user.message</code> event is needed
            to kick it off.
          </p>

          <CodeBlock
            language="python"
            filename="outcomes_quickstart.py"
            code={`import anthropic
from pathlib import Path

BETAS = ["managed-agents-2026-04-01", "files-api-2025-04-14"]
MODEL = "claude-opus-4-7"

client = anthropic.Anthropic()

# 1. Environment - the sandbox the agent runs in
env = client.beta.environments.create(
    name="research-brief",
    config={"type": "anthropic_cloud", "networking": {"type": "unrestricted"}},
    betas=BETAS,
)

# 2. Writer agent - same model and tools the grader will use
writer = client.beta.agents.create(
    name="Research Analyst",
    model=MODEL,
    system=(
        "You are a research analyst. You write one-page business briefs. "
        "Cite every factual claim with an inline footnote [n]."
    ),
    tools=[
        {
            "type": "agent_toolset_20260401",
            "configs": [
                {"name": "web_search"},
                {"name": "web_fetch"},
                {"name": "read"},
                {"name": "write"},
            ],
        }
    ],
    betas=BETAS,
)

# 3. Upload the rubric once, reuse across sessions
rubric = client.beta.files.upload(file=Path("dcf-rubric.md"), betas=BETAS)
print(f"Uploaded rubric: {rubric.id}")

# 4. Session + the one event that starts everything
session = client.beta.sessions.create(
    agent={"type": "agent", "id": writer.id, "version": writer.version},
    environment_id=env.id,
    title="Brief: EV fast-charging unit economics",
    betas=BETAS,
)

client.beta.sessions.events.send(
    session.id,
    betas=BETAS,
    events=[
        {
            "type": "user.define_outcome",
            "description": "Build a one-page business brief on EV fast-charging unit economics in .docx",
            "rubric": {"type": "file", "file_id": rubric.id},
            # or inline: {"type": "text", "content": RUBRIC_MD},
            "max_iterations": 5,  # optional, default 3, max 20
        }
    ],
)`}
          />

          <p className="text-lg leading-relaxed my-6">
            The rubric field accepts either inline text or a file reference.
            For one-off notebook work I keep the rubric inline as a long
            string, because the round-trip is faster and the rubric is right
            there in the source. For anything I run more than once I upload it
            once and pass the <code>file_id</code>, so updates to the rubric do
            not require re-pasting it everywhere.
          </p>

          <p className="text-lg leading-relaxed">
            Two notes on the agent definition that bite people. The grader uses
            the same model and the same tools as the writer agent. If the
            writer has <code>read</code> and <code>write</code>, so does the
            grader, and the grader can open every file the writer produced. If
            you scope the writer too tightly (no <code>read</code>, for
            example) the grader will not be able to verify the artifact and
            you will get noisy verdicts. Give the grader the tools it needs to
            confirm what the rubric demands.
          </p>
        </section>

        {/* Section 5 */}
        <section id="result-states" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Gauge" size="md" />
            Grader Feedback: The Five Result States
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Every grader pass ends with a{" "}
            <code>span.outcome_evaluation_end</code> event. The{" "}
            <code>result</code> field on that event takes one of five values
            and tells you exactly what the harness will do next. Memorize this
            table once and you will save yourself a lot of stream-parsing.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4">result</th>
                  <th className="py-2 pr-4">What happens next</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-4">
                    <code>satisfied</code>
                  </td>
                  <td className="py-2 pr-4">
                    All criteria met. Session transitions to <code>idle</code>.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">
                    <code>needs_revision</code>
                  </td>
                  <td className="py-2 pr-4">
                    Writer starts another iteration with the grader&apos;s
                    explanation as feedback.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">
                    <code>max_iterations_reached</code>
                  </td>
                  <td className="py-2 pr-4">
                    No further evaluation. Writer may run one final revision
                    before the session goes idle.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">
                    <code>failed</code>
                  </td>
                  <td className="py-2 pr-4">
                    Rubric fundamentally does not match the task. Session goes
                    idle.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code>interrupted</code>
                  </td>
                  <td className="py-2 pr-4">
                    A <code>user.interrupt</code> event landed mid-evaluation.
                    You can start a new outcome.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            In practice you watch the stream and react to two events:{" "}
            <code>span.outcome_evaluation_start</code> tells you the writer
            finished a draft, and <code>span.outcome_evaluation_end</code>{" "}
            carries the verdict. A heartbeat event,{" "}
            <code>span.outcome_evaluation_ongoing</code>, fires while the
            grader works, but the grader&apos;s internal reasoning is opaque -
            you see that it is working, not what it is thinking.
          </p>

          <CodeBlock
            language="python"
            filename="stream_outcome.py"
            code={`TERMINAL = {"satisfied", "max_iterations_reached", "failed", "interrupted"}

with client.beta.sessions.events.stream(session.id, betas=BETAS) as stream:
    for ev in stream:
        if ev.type == "span.outcome_evaluation_start":
            print(f"[iter {ev.iteration}] grader evaluating draft...")
        elif ev.type == "span.outcome_evaluation_end":
            print(f"[iter {ev.iteration}] result: {ev.result}")
            print(ev.explanation)  # per-criterion feedback
            if ev.result in TERMINAL:
                break

# After the loop, fetch deliverables from /mnt/session/outputs/
files = client.beta.files.list(scope_id=session.id, betas=BETAS)
for f in files.data:
    client.beta.files.download(f.id, betas=BETAS).write_to_file(f.filename)`}
          />

          <p className="text-lg leading-relaxed mt-6">
            Output files live at <code>/mnt/session/outputs/</code> inside the
            container and you fetch them via the Files API with{" "}
            <code>scope_id=session.id</code>. The grader&apos;s{" "}
            <code>explanation</code> field is the part you actually want to log
            for postmortems - it&apos;s the verbatim feedback the writer used
            for the next pass, so if a session looped to{" "}
            <code>max_iterations_reached</code>, that field tells you what the
            grader kept catching.
          </p>
        </section>

        {/* Section 6 */}
        <section id="max-iterations" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="RefreshCw" size="md" />
            Tuning max_iterations vs Fixing the Rubric
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <code>max_iterations</code> defaults to 3 and the cap is 20. The
            cookbook recommends starting at 5 for strict rubrics. The mistake I
            see most is people raising the cap when they should be rewriting
            the rubric. There&apos;s a simple decision rule that catches the
            difference.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Log every iteration&apos;s <code>explanation</code> field and look
            at the failures across passes. If the grader is flagging{" "}
            <strong>the same criterion every time</strong> and the writer is
            not closing it, the rubric is the problem - either the criterion
            is unverifiable, or the grader and writer are interpreting it
            differently. Raise the cap and you just pay for more iterations of
            the same loop. If the grader is flagging{" "}
            <strong>different criteria each pass</strong>, with the failures
            converging on the last unsolved item, the rubric is fine and you
            need a higher cap. That is real progress and another iteration
            will close it out.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The other anti-patterns are easier to spot once you know what to
            look for. A rubric that prescribes specific steps instead of
            describing the goal will over-constrain the writer, and the grader
            will mark novel approaches as failed. A description and rubric
            that contradict each other returns <code>result: failed</code> on
            the first pass, before any work is done - check the explanation,
            it is usually unambiguous about which one is wrong. A single
            criterion that packs four ideas together produces noisy
            per-criterion verdicts because the grader cannot tell which of the
            four is failing on a given draft.
          </p>

          <p className="text-lg leading-relaxed">
            Treat <code>max_iterations</code> as a circuit breaker, not a
            knob. Set it once based on how strict your rubric is, and let
            repeated <code>max_iterations_reached</code> events tell you when
            the rubric needs work. Raising the cap from 5 to 20 to mask a bad
            rubric doubles your token spend and surfaces nothing useful.
          </p>
        </section>

        {/* Section 7 */}
        <section id="cost-math" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="DollarSign" size="md" />
            What Outcomes Actually Cost
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Outcomes does not add a separate per-outcome fee. The cost driver
            is iteration count: every revision adds writer tokens plus grader
            tokens and keeps the same Managed Agents{" "}
            <strong>$0.08-per-session-hour</strong> clock running. There is no
            standalone grader bill or rubric bill. There is just more of the
            same line items.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Worked example for a research brief task. The writer takes about
            ten minutes per draft. The grader takes about a minute per
            evaluation. A session that goes two iterations to{" "}
            <code>satisfied</code> runs roughly 22 minutes of wall-clock
            session time. At $0.08 per hour, that is about $0.029 in
            session-hours. The token spend is whatever the writer and grader
            cost across two passes (typically the dominant line in this kind
            of work). For comparison, a manual human review of the same brief
            at, say, $25 per round, blows past the entire outcome-driven
            session cost on the first review.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two cost levers actually move the bill. First,{" "}
            <code>max_iterations</code>. A run that loops six times when three
            would have done it doubles the writer plus grader tokens. Track
            the average iteration count per task type and tune accordingly.
            Second, the grader&apos;s tools. The grader uses whatever the
            writer agent was created with - if you gave the writer{" "}
            <code>web_search</code> and the rubric does not require
            cross-checking, you are paying for grader web searches it does not
            need. Strip unused tools from the writer config and the grader
            stops calling them.
          </p>

          <p className="text-lg leading-relaxed">
            For broader cost-tracking patterns across Claude Code and Managed
            Agents work, my{" "}
            <Link
              href="/blog/claude-code-cost-tracking"
              className="project-link"
            >
              Claude Code cost tracking
            </Link>{" "}
            post covers the JSONL logs and ccusage workflow I run weekly. The
            same approach works for Managed Agents sessions: dump the events
            stream to a file per session and roll up iteration counts and
            token usage from the <code>usage</code> field on{" "}
            <code>span.outcome_evaluation_end</code>.
          </p>
        </section>

        {/* Section 8 */}
        <section id="vs-others" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Scale" size="md" />
            Outcomes vs LLM-as-Judge vs Codex /goal
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            LLM-as-judge is a category in 2026, not a single product. Tools
            like Galileo, DeepEval, Langfuse, and G-Eval all let you score
            agent or model output against a rubric using an LLM, and they do
            it well. Strong LLM judges in current research achieve roughly{" "}
            <strong>80% agreement with human evaluators</strong>, matching
            human-to-human consistency on many quality dimensions (
            <a
              href="https://galileo.ai/blog/agent-evaluation-framework-metrics-rubrics-benchmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Galileo, 2026
            </a>
            ). What you get from those tools is the score. What you do with it
            is up to you.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            What Outcomes adds is the wiring. The grader runs inside the
            harness, the explanation flows back into the writer&apos;s next
            turn without any code on your side, and the iteration loop stops
            when the grader is satisfied. With a standalone judge, you build
            that loop yourself: capture the score, decide if it is good
            enough, format the gaps as a prompt, and restart the agent. That
            wiring is the difference between a one-off evaluation script and a
            self-correcting agent in production.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            On the OpenAI side, Codex <code>/goal</code> is the closest
            analogue. Both attach a success target to an autonomous run. The
            difference is the verdict shape. Outcomes leans on a markdown
            rubric and natural-language gap explanations. Codex{" "}
            <code>/goal</code> leans on verifier scripts and structured
            pass-fail signals, which works well for code where you can run
            tests. Practitioners comparing them note that{" "}
            <code>/goal</code> fits programmatic tasks better, while Outcomes
            fits qualitative artifacts (documents, decks, prose) better (
            <a
              href="https://www.developersdigest.tech/blog/codex-goal-vs-claude-managed-outcomes-practical-differences"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Developers Digest, 2026
            </a>
            ). They are not interchangeable, they target different shapes of
            work.
          </p>

          <p className="text-lg leading-relaxed">
            Pick Outcomes if you live in the Managed Agents harness already
            and your artifacts are document-like. Pick a standalone judge if
            you want to evaluate offline across a corpus, or you need
            cross-provider scoring. Pick Codex <code>/goal</code> if your
            success criterion is &quot;does the test suite pass&quot; and you
            are already on OpenAI.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>
                What are Claude Managed Agents Outcomes?
              </AccordionTrigger>
              <AccordionContent>
                Outcomes is a public-beta Managed Agents feature launched May
                6, 2026. You attach a markdown rubric to a session via a{" "}
                <code>user.define_outcome</code> event, and a separate grader
                model evaluates each draft in its own context window. If the
                grader returns <code>needs_revision</code>, the feedback goes
                back to the writer for another iteration.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>
                How does the Claude outcome grader work?
              </AccordionTrigger>
              <AccordionContent>
                The grader runs in a fresh context window using the same model
                and tools as the writer agent. It reads only the rubric,
                inspects the artifact, and returns a per-criterion verdict on
                every iteration. Its reasoning is opaque, but its{" "}
                <code>explanation</code> field carries the gaps that the
                writer must close on the next pass.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>
                How do I write a good rubric for Claude Outcomes?
              </AccordionTrigger>
              <AccordionContent>
                Use explicit, gradeable criteria like &quot;the CSV has a
                numeric price column,&quot; not vibes like &quot;the data
                looks good.&quot; Anchor the rubric in verifiable structure
                and completeness, anticipate shortcuts the writer might take,
                mandate a feedback format, and tell the grader what to ignore
                so it does not thrash on style nits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>
                What is the default value of max_iterations in Claude Outcomes?
              </AccordionTrigger>
              <AccordionContent>
                The <code>max_iterations</code> field defaults to 3 and
                accepts values up to 20. For strict rubrics, the Anthropic
                cookbook recommends starting at 5. If the loop hits the cap
                with the same failures every iteration, the rubric is wrong;
                if it hits the cap with failures that converge, raise the cap
                instead of rewriting.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>
                What are the result states of a Claude outcome evaluation?
              </AccordionTrigger>
              <AccordionContent>
                Five values appear on{" "}
                <code>span.outcome_evaluation_end.result</code>:{" "}
                <code>satisfied</code> (criteria met, session goes idle),{" "}
                <code>needs_revision</code> (writer starts another pass),{" "}
                <code>max_iterations_reached</code> (one final revision
                allowed before idle), <code>failed</code> (rubric contradicts
                the task description), and <code>interrupted</code> (a{" "}
                <code>user.interrupt</code> event landed mid-evaluation).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>
                How much do Claude Outcomes cost on top of session-hours?
              </AccordionTrigger>
              <AccordionContent>
                Outcomes has no separate per-outcome fee. The real cost driver
                is iterations: each revision adds writer tokens plus grader
                tokens and keeps the $0.08-per-session-hour clock running. A
                20-minute session that iterates twice still bills around
                $0.027 in session-hours, plus the writer-and-grader tokens for
                both rounds.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>
                Can I use Claude Outcomes with the Agent SDK or only Managed
                Agents?
              </AccordionTrigger>
              <AccordionContent>
                Outcomes is a Managed Agents feature. The grader, the
                iteration loop, and the <code>span.outcome_evaluation_*</code>{" "}
                events all live in the hosted harness. If you run the Agent
                SDK locally, you can still build an LLM-as-judge yourself with
                a separate Anthropic API call, but the wiring back to the
                writer is on you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>
                What is the difference between Claude Outcomes and Codex
                /goal?
              </AccordionTrigger>
              <AccordionContent>
                Both attach a success target to an autonomous agent run.
                Outcomes uses a rubric plus a separate grader and feeds the
                gaps back as natural-language revision notes. OpenAI&apos;s
                Codex <code>/goal</code> favors verifier scripts and
                structured pass-fail signals. Outcomes leans qualitative,{" "}
                <code>/goal</code> leans test-driven, and the runtime
                substrates differ.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA */}
        <Card className="card-accent-left">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CategoryIcon icon="BookOpen" size="sm" />
              Related Reading
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed mb-4">
              If you are still deciding between Managed Agents and the Agent
              SDK, start with{" "}
              <Link href="/blog/claude-managed-agents" className="project-link">
                Claude Managed Agents vs Agent SDK
              </Link>
              . For the cost-tracking patterns referenced above, see{" "}
              <Link
                href="/blog/claude-code-cost-tracking"
                className="project-link"
              >
                Claude Code cost tracking
              </Link>
              . And if you are running agents in CI, my hardening guide on{" "}
              <Link
                href="/blog/hardening-ai-agents-cicd-prompt-injection"
                className="project-link"
              >
                prompt-injection defense in GitHub Actions
              </Link>{" "}
              applies to outcome-driven sessions too.
            </p>
            <p className="text-lg leading-relaxed">
              Have a rubric pattern that worked (or did not)? Ping me on{" "}
              <a
                href="https://x.com/avi_sangle"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                X
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/avinashsangle"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                LinkedIn
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
