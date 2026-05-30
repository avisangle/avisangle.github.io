import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Claude Code Dynamic Workflows: When They're Worth the Cost",
  description:
    "Claude Code dynamic workflows orchestrate up to 1,000 subagents from one prompt. Learn which tasks justify the token cost and when a single session wins.",
  keywords: [
    "Claude Code dynamic workflows",
    "Claude Code dynamic workflows cost",
    "Claude Code subagent orchestration",
    "when to use Claude Code workflows",
    "Claude Code ultracode",
    "Claude Code Workflow tool",
    "Claude Code workflow vs subagent",
    "dynamic workflows Opus 4.8",
    "Claude Code deep-research",
    "Claude Code parallel agents",
    "Claude Code workflow tutorial",
    "how much do Claude Code workflows cost",
    "Claude Code 1000 subagents",
    "Claude Code orchestration script",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Claude Code Dynamic Workflows: When They're Worth the Cost",
    description:
      "Claude Code dynamic workflows orchestrate up to 1,000 subagents from one prompt. Learn which tasks justify the token cost and when a single session wins.",
    url: "https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-05-30T00:00:00.000Z",
    modifiedTime: "2026-05-30T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-claude-code-dynamic-workflows-guide.png",
        width: 1200,
        height: 630,
        alt: "Claude Code Dynamic Workflows: When They're Worth the Cost",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code Dynamic Workflows: When They're Worth the Cost",
    description:
      "Claude Code dynamic workflows orchestrate up to 1,000 subagents from one prompt. Learn which tasks justify the token cost and when a single session wins.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-claude-code-dynamic-workflows-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide",
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

export default function ClaudeCodeDynamicWorkflowsGuidePage() {
  return (
    <>
      {/* TechArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Claude Code Dynamic Workflows: When They're Worth the Cost",
            description:
              "Claude Code dynamic workflows orchestrate up to 1,000 subagents from one prompt. Learn which tasks justify the token cost and when a single session wins.",
            image: "https://avinashsangle.com/og-claude-code-dynamic-workflows-guide.png",
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
            datePublished: "2026-05-30",
            dateModified: "2026-05-30",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide",
            },
            keywords:
              "Claude Code dynamic workflows, Claude Code dynamic workflows cost, subagent orchestration, when to use Claude Code workflows, ultracode, Workflow tool, Opus 4.8",
            articleSection: "Claude Code",
            wordCount: 2600,
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
                name: "Claude Code Dynamic Workflows",
                item: "https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide",
              },
            ],
          }),
        }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Run Your First Claude Code Dynamic Workflow",
            description:
              "Step-by-step guide to enabling and running a dynamic workflow in Claude Code, from the bundled /deep-research command to triggering one on your own codebase.",
            totalTime: "PT10M",
            tool: [
              { "@type": "HowToTool", name: "Claude Code v2.1.154 or later" },
              { "@type": "HowToTool", name: "A paid Claude plan (Pro, Max, Team, or Enterprise)" },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Enable dynamic workflows",
                text: "Confirm you are on Claude Code v2.1.154+. On Pro, switch on the Dynamic workflows row in /config. Max, Team, and Enterprise have them on by default.",
                url: "https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide#first-workflow",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Run the bundled workflow",
                text: "Run /deep-research with a question to see a workflow fan out web searches, cross-check sources, and return one cited report.",
                url: "https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide#first-workflow",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Trigger one on your own task",
                text: "Include the word workflow in your prompt. Claude writes an orchestration script for the task instead of working through it turn by turn.",
                url: "https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide#first-workflow",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Approve the plan",
                text: "Review the planned phases and token caution, press Ctrl+G to read the raw script if you want, then select Yes to start the run.",
                url: "https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide#first-workflow",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Watch and manage the run",
                text: "Run /workflows to open the progress view. It shows each phase with agent count, token total, and elapsed time. Pause, stop, or save the script from here.",
                url: "https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide#monitoring",
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
                name: "What are dynamic workflows in Claude Code?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A dynamic workflow is a JavaScript script Claude writes to orchestrate subagents at scale. A runtime runs it in the background while your session stays responsive. Intermediate results live in script variables, so only the final answer reaches Claude's context. They shipped May 28, 2026 with Opus 4.8.",
                },
              },
              {
                "@type": "Question",
                name: "How much do Claude Code dynamic workflows cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Anthropic publishes no fixed rate. Each agent pays its own context overhead at the session model's standard token rate, so a large fan-out multiplies usage. A 500-agent audit can shift the bill by an order of magnitude versus a single session. Scope a small run first to calibrate.",
                },
              },
              {
                "@type": "Question",
                name: "When should I use a workflow instead of a single Claude Code session?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use a workflow only when a task is too big for one context window: a codebase-wide audit, a 500-file migration, or research cross-checked across many sources. For a single bug fix or a feature in a few files, a normal session is cheaper and faster.",
                },
              },
              {
                "@type": "Question",
                name: "How many subagents can a dynamic workflow run?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Up to 16 agents run concurrently, fewer on machines with limited CPU cores, and a single run is capped at 1,000 agents total. The 1,000 limit is a runaway backstop, not a budget. You still pay for every agent that runs under it.",
                },
              },
              {
                "@type": "Question",
                name: "How do I control how many agents a workflow spawns?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The lever is prompt scope, not a flag. Name explicit paths like src/routes/ instead of the whole repo, set a target count in your prompt, and read the raw script before approving. Run a scoped pilot first to see the agent count, then widen.",
                },
              },
              {
                "@type": "Question",
                name: "What is ultracode in Claude Code?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ultracode combines xhigh reasoning effort with automatic workflow orchestration. With it on, Claude plans a workflow for every substantive task instead of waiting for you to ask, so one request can spawn several workflows. It lasts for the session and resets when you start a new one.",
                },
              },
              {
                "@type": "Question",
                name: "What's the difference between a workflow, a subagent, and a skill?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The difference is who holds the plan. With subagents and skills, Claude orchestrates turn by turn and every result lands in its context. A workflow moves the plan into a script: the loop, branching, and intermediate results live in code, so it scales to hundreds of agents.",
                },
              },
              {
                "@type": "Question",
                name: "Can I pause, resume, or stop a running workflow?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. From the /workflows view, press p to pause or resume and x to stop. Completed agents return cached results on resume, so you keep finished work. Resume only works within the same session. If you exit Claude Code mid-run, the next session starts the workflow fresh.",
                },
              },
              {
                "@type": "Question",
                name: "Which plans support dynamic workflows?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dynamic workflows are in research preview on all paid plans (Pro, Max, Team, Enterprise) and require Claude Code v2.1.154 or later. On Pro you switch them on in /config. They also work on the Anthropic API, Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry.",
                },
              },
              {
                "@type": "Question",
                name: "How do dynamic workflows compare to /ultrareview for code audits?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "/ultrareview is a turnkey, cloud-run review over a branch or PR. A workflow is a script you or Claude author and can read, rerun, and save. Reach for /ultrareview when you want a packaged branch review, and a workflow when you want a custom adversarial-verify pattern you control.",
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
            { label: "Claude Code Dynamic Workflows" },
          ]}
        />
      </div>

      <article className="container-project py-12">
        <header className="mb-12">
          <Badge className="mb-4">Claude Code</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Claude Code Dynamic Workflows: When They&apos;re Worth the Cost
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Claude Code dynamic workflows let Claude write a JavaScript orchestration script that fans a
            task out across up to 1,000 subagents, 16 running at once. They earn their keep on
            codebase-wide audits, large migrations, and cross-checked research. For anything a single
            session can hold, they just burn tokens. This guide covers which is which.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> May 30, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 11 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-05-30</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Claude Code", "Workflows", "Opus 4.8", "Subagents", "Cost"].map((tag) => (
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
                <li><a href="#what-are-dynamic-workflows" className="project-link">What Are Dynamic Workflows in Claude Code?</a></li>
                <li><a href="#when-to-use" className="project-link">When to Use a Workflow vs a Single Session</a></li>
                <li><a href="#cost" className="project-link">How Much Do Dynamic Workflows Cost?</a></li>
                <li><a href="#first-workflow" className="project-link">How to Run Your First Workflow (Step by Step)</a></li>
                <li><a href="#bound-subagent-count" className="project-link">How to Bound Subagent Count and Keep Cost Predictable</a></li>
                <li><a href="#ultracode" className="project-link">ultracode and Effort Levels: What They Cost You</a></li>
                <li><a href="#vs-ultrareview" className="project-link">Dynamic Workflows vs /ultrareview for Code Audits</a></li>
                <li><a href="#monitoring" className="project-link">Monitoring, Pausing, and Resuming a Long Run</a></li>
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
                A dynamic workflow is a script Claude writes that runs dozens to hundreds of subagents in
                the background. Your session stays free and only the final answer hits Claude&apos;s context.
              </li>
              <li>
                Hard caps: <strong>16 concurrent agents, 1,000 total per run</strong>. Research preview,
                needs <strong>Claude Code v2.1.154+</strong>, on by default for Max, Team, and Enterprise,
                opt-in via <code>/config</code> on Pro.
              </li>
              <li>
                Cost can jump by an order of magnitude versus a normal session because each agent pays its
                own context overhead. Scope a small task first to calibrate.
              </li>
              <li>
                Reach for a workflow only when a task is too big for one context window. Otherwise a single
                session is cheaper, faster, and easier to steer.
              </li>
            </ul>
          </CardContent>
        </Card>

        <section id="what-are-dynamic-workflows" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Workflow" size="md" />
            What Are Dynamic Workflows in Claude Code?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            A dynamic workflow is a JavaScript script that orchestrates{" "}
            <a
              href="https://code.claude.com/docs/en/sub-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              subagents
            </a>{" "}
            at scale. You describe a task, Claude writes the script, and a runtime runs it in the background
            while your session stays responsive. Anthropic shipped the feature on{" "}
            <strong>May 28, 2026</strong> alongside the{" "}
            <a
              href="https://www.anthropic.com/news/claude-opus-4-8"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Opus 4.8 release
            </a>
            , and it is in research preview today.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The thing that makes it different from spawning a few subagents by hand is where the plan lives.
            With subagents and skills, Claude is the orchestrator: it decides turn by turn what to spawn
            next, and every result lands back in its context window. A workflow moves the loop, the
            branching, and the intermediate results into the script itself. Claude&apos;s context only holds
            the final answer. That is what lets a single run coordinate hundreds of agents without drowning
            in its own transcript.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The script is plain JavaScript with no imports and no filesystem access. Inputs arrive through{" "}
            <code>args</code>, results come back through <code>return</code>, and a handful of helpers do the
            orchestration: <code>agent()</code> spawns a subagent, <code>parallel()</code> runs a batch and
            waits for all of them, <code>pipeline()</code> streams each item through a set of stages without
            a barrier, and <code>phase()</code> groups the progress view. You rarely write this by hand.
            Claude does, and you read it before approving.
          </p>

          <CodeBlock
            language="javascript"
            filename="audit-auth.workflow.js (Claude-generated)"
            code={`export const meta = {
  name: 'audit-auth',
  description: 'Audit every route for missing auth checks',
  phases: [{ title: 'Find' }, { title: 'Verify' }],
}

// args is the list of route files passed in
const results = await pipeline(
  args,
  file => agent(\`Check \${file} for missing auth guards.\`,
    { phase: 'Find', schema: GAPS }),
  review => parallel(review.gaps.map(gap => () =>
    agent(\`Adversarially verify this gap is real: \${gap.detail}\`,
      { phase: 'Verify', schema: VERDICT })))
)

return results.flat().filter(Boolean)`}
          />

          <p className="text-lg leading-relaxed mb-6">
            That nine-line script is the whole point. It finds gaps and then has independent agents try to
            refute each one before it reports back. A single pass does not do that. The{" "}
            <a
              href="https://code.claude.com/docs/en/workflows"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              official workflows docs
            </a>{" "}
            call this a repeatable quality pattern, and it is the real reason to reach for a workflow over
            just running more agents.
          </p>
        </section>

        <section id="when-to-use" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitBranch" size="md" />
            When to Use a Workflow vs a Single Session
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Use a workflow only when the work is too big for one context window. That is the entire decision
            rule. A codebase-wide bug sweep, a migration that touches 500 files, a research question that
            needs sources cross-checked against each other, a hard plan you want drafted from several
            independent angles before you commit. Those are workflow shaped. A single bug fix, a feature
            that spans three files, anything you would finish in one conversation? That is a normal session,
            and a workflow would only make it slower and pricier.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Anthropic frames the choice as who holds the plan. Here is how the three primitives line up.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-muted-foreground/30">
                  <th className="py-3 pr-4"></th>
                  <th className="py-3 pr-4">Subagents</th>
                  <th className="py-3 pr-4">Skills</th>
                  <th className="py-3">Workflows</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Who decides next</td>
                  <td className="py-3 pr-4">Claude, turn by turn</td>
                  <td className="py-3 pr-4">Claude, per the prompt</td>
                  <td className="py-3">The script</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Where results live</td>
                  <td className="py-3 pr-4">Claude&apos;s context</td>
                  <td className="py-3 pr-4">Claude&apos;s context</td>
                  <td className="py-3">Script variables</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Scale</td>
                  <td className="py-3 pr-4">A few per turn</td>
                  <td className="py-3 pr-4">Same as subagents</td>
                  <td className="py-3">Dozens to hundreds</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Interruption</td>
                  <td className="py-3 pr-4">Restarts the turn</td>
                  <td className="py-3 pr-4">Restarts the turn</td>
                  <td className="py-3">Resumable in session</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The proof point everyone cites is Jarred Sumner using a workflow to port Bun from Zig to Rust:{" "}
            <strong>750,000 lines</strong> of Rust, <strong>11 days</strong> from first commit to merge,
            with <strong>99.8%</strong> of the existing test suite passing, per Anthropic&apos;s{" "}
            <a
              href="https://claude.com/blog/introducing-dynamic-workflows-in-claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              launch post
            </a>
            . That makes the capability real. It also makes the cost question urgent, because work at that
            scale is not what your routine session bill looks like. If you want your session to stay
            resilient across the kind of upstream changes that ship with releases like this, my guide on{" "}
            <Link href="/blog/regression-proofing-claude-code-workflows" className="project-link">
              regression-proofing Claude Code workflows
            </Link>{" "}
            pairs well here.
          </p>
        </section>

        <section id="cost" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="DollarSign" size="md" />
            How Much Do Dynamic Workflows Cost?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Anthropic does not publish a fixed token rate for workflow runs, and that is not evasion, it is
            honest. Cost depends on the task scope, the agent count, and the model active in your session.
            Every agent in a workflow pays its own context overhead against the session model&apos;s standard
            rate. Fan a task across 40 agents and you pay 40 context setups, not one. The official docs only
            warn that a run can use &quot;substantially more tokens&quot; than the same task in conversation,
            and{" "}
            <a
              href="https://www.techtimes.com/articles/317363/20260529/claude-code-dynamic-workflows-scripts-replace-context-windows-ultracode-automates-orchestration.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              TechTimes
            </a>{" "}
            puts it more bluntly: a 500-agent audit can shift the session bill by an order of magnitude.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Vague warnings do not help you budget, so here is how I model a run before I start one. Take an
            agent count, estimate the context each agent reads, add what it returns, and multiply. The
            numbers below are a planning model, not a measured invoice. Your real figures come off the token
            totals in the <code>/workflows</code> view once the run is going.
          </p>

          <CodeBlock
            language="text"
            filename="cost model (illustrative)"
            code={`Scenario: audit 40 route files for missing auth checks
  Find phase:    40 agents x ~12K input + ~2K output  = ~560K tokens
  Verify phase:  ~25 findings x ~6K input + ~1K output = ~175K tokens
  Orchestration + overhead (rough)                     = ~15%

  Estimated total: ~850K tokens for the run

Same task in one session, reading files serially:
  ~120K-180K tokens before the context window forces a compaction

Takeaway: the workflow costs roughly 5-7x here, and buys you
parallel coverage + adversarial verification you can't get in one pass.`}
          />

          <p className="text-lg leading-relaxed mb-6">
            That ratio is the whole tradeoff. You are paying several times the tokens to get coverage and a
            verification pass a single session physically cannot do once it runs out of context. On a
            security audit before a release, that is money well spent. On a task you could have one-shot,
            it is waste. To control the model side, check <code>/model</code> before a large run if you
            normally drop to a smaller model for routine work, and when you describe the task you can ask
            Claude to route the cheap stages, the find-and-summarize work, to a smaller model while the
            judgment stages stay on the strong one. Measure the delta the same way I do for everything else,
            with{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              Claude Code cost tracking
            </Link>
            , so you are deciding on numbers and not on a vibe.
          </p>
        </section>

        <section id="first-workflow" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Rocket" size="md" />
            How to Run Your First Workflow (Step by Step)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The fastest way to feel what a workflow does is to run the one Claude Code ships with. You do not
            write any script. Confirm you are on v2.1.154 or later first, and on Pro switch on the Dynamic
            workflows row in <code>/config</code>. Max, Team, and Enterprise have them on by default.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# 1. The bundled workflow: research a question across many sources
/deep-research What changed in the Node.js permission model between v20 and v22?

# It fans out web searches, cross-checks the sources it finds,
# votes on each claim, and returns ONE cited report at the end.

# 2. Trigger a workflow for your own task: include the word "workflow"
Run a workflow to audit every API endpoint under src/routes/ for missing auth checks

# Claude highlights the keyword and writes an orchestration script
# instead of working through the task turn by turn.`}
          />

          <p className="text-lg leading-relaxed mb-6">
            When you trigger one, Claude Code shows an approval prompt with the planned phases and a
            token-usage caution before anything runs. Your options are to run it, run it and stop asking for
            this workflow in this project, view the raw script, or cancel. Press <code>Ctrl+G</code> to open
            the script in your editor, or <code>Tab</code> to adjust the prompt before it starts. I read the
            raw script on the first run of anything that touches a real codebase. It takes thirty seconds and
            tells you exactly how many agents are about to spawn.
          </p>

          <Card className="card-accent-left mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Info" size="sm" /> A permissions detail worth knowing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The subagents a workflow spawns always run in <code>acceptEdits</code> mode and inherit your
                tool allowlist, no matter what permission mode your session is in. File edits are
                auto-approved. Shell commands, web fetches, and MCP tools that are not on your allowlist can
                still pause the run to prompt you. Before a long run, add the commands the agents will need
                to your allowlist so it does not stall an hour in waiting on a confirmation.
              </p>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed mb-6">
            Once a run does what you wanted, you can keep it. In the <code>/workflows</code> view, select the
            run and press <code>s</code> to save its script as a command in either{" "}
            <code>.claude/workflows/</code> (shared with the repo) or <code>~/.claude/workflows/</code>{" "}
            (personal, every project). It then runs as <code>/your-name</code> in future sessions, the same
            way <code>/deep-research</code> does.
          </p>
        </section>

        <section id="bound-subagent-count" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="SlidersHorizontal" size="md" />
            How to Bound Subagent Count and Keep Cost Predictable
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The lever that controls cost is the scope of your prompt, not a flag. A narrow task produces a
            small fan-out. &quot;Audit <code>src/routes/</code> for missing auth checks&quot; spawns one
            agent per route file. &quot;Audit the whole codebase&quot; can march toward the 1,000-agent cap.
            The runtime allows up to 16 agents concurrently, fewer on machines with limited CPU cores, and
            caps a single run at 1,000 agents total. Read that 1,000 as a runaway backstop, not a budget.
            You pay for every agent that runs under it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Four habits keep my runs predictable. Name explicit paths and directories instead of pointing at
            the repo root. Put a target count in the prompt when you have one, like &quot;sample 30
            representative files, not all of them.&quot; Use View raw script at the approval prompt to see
            the real agent count before you commit. And run a scoped pilot first, watch what one phase
            actually costs in the <code>/workflows</code> token totals, then widen the scope once the number
            is in front of you.
          </p>

          <CodeBlock
            language="text"
            filename="scoping the same task"
            code={`Loose  ->  "Run a workflow to find every bug in this project"
           Unbounded fan-out. Could approach the 1,000-agent cap.

Tight  ->  "Run a workflow to audit the 40 files under src/routes/
            for missing auth checks. One agent per file, then verify
            each finding once."
           ~40 + ~25 agents. Predictable, readable, cheap to rerun.`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Same intent, very different bill. The tight version is also easier to trust, because you can
            reason about what it did. If you have used the cloud review tools, this is the same instinct as
            scoping a diff before you ask for a review rather than throwing the whole branch at it.
          </p>
        </section>

        <section id="ultracode" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Zap" size="md" />
            ultracode and Effort Levels: What They Cost You
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Ultracode is the setting that turns workflows from opt-in into automatic. It combines{" "}
            <code>xhigh</code> reasoning effort with automatic workflow orchestration, so Claude plans a
            workflow for every substantive task instead of waiting for you to type the keyword. A single
            request can become several workflows in a row, one to understand the code, one to make the
            change, one to verify it. It is the fastest way I know to 10x a token bill without noticing.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Let Claude decide when a task warrants a workflow
/effort ultracode

# Lasts for the current session, resets when you start a new one.
# Drop back to normal high effort for routine work:
/effort high`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Use it deliberately. Ultracode earns its cost on hard, high-value work where you want maximum
            thoroughness and you have decided the budget is worth it: a gnarly migration, a security audit,
            a design you want attacked from every angle. For editing a config file or fixing one test, turn
            it off. There is also an approval wrinkle to know before you flip it: in Auto permission mode the
            per-run launch prompt is skipped entirely when ultracode is on, so workflows start without
            pausing to ask. That is convenient and also exactly why the bill can climb quietly. It is only
            offered on models that support <code>xhigh</code> effort, so on other models the{" "}
            <code>/effort</code> menu will not show it.
          </p>
        </section>

        <section id="vs-ultrareview" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Scale" size="md" />
            Dynamic Workflows vs /ultrareview for Code Audits
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Both fan a job out across many agents, so the overlap is real, but they solve different problems.{" "}
            <code>/ultrareview</code> is a packaged, cloud-run review over a branch or PR. You point it at
            changes and it returns findings. A dynamic workflow is a script you or Claude author, run
            locally in the background, and can read, rerun, and save. One is a product; the other is a
            primitive you compose.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            My rule is simple. When I want a turnkey review of a branch with no setup, I reach for{" "}
            <code>/ultrareview</code>, and I have written up{" "}
            <Link href="/blog/ultrareview-ci-cd-pipelines" className="project-link">
              running it in CI/CD pipelines
            </Link>{" "}
            for exactly that. When I want a custom pattern, say find issues, dedupe them, then have three
            independent agents try to refute each one before it counts, or a repeatable orchestration I save
            as a command and run on every release, I reach for a workflow. The workflow gives you control
            over the orchestration logic. <code>/ultrareview</code> gives you a result without you owning the
            machinery.
          </p>
        </section>

        <section id="monitoring" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Activity" size="md" />
            Monitoring, Pausing, and Resuming a Long Run
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <code>/workflows</code> is mission control. It lists running and completed runs, and drilling
            into one shows each phase with its agent count, token total, and elapsed time. Go deeper and you
            can read an individual agent&apos;s prompt, its recent tool calls, and what it found. The footer
            keys do the work: <code>p</code> pauses or resumes, <code>x</code> stops the selected agent or
            the whole run, <code>r</code> restarts a running agent, and <code>s</code> saves the script.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Resume is genuinely useful and has one sharp edge. If you stop a run and resume it, the agents
            that already finished return their cached results and only the rest run live, so you do not pay
            twice for completed work. But resume only works <strong>within the same Claude Code session</strong>.
            Exit Claude Code while a workflow is running and the next session starts it fresh, from zero. On
            a multi-hour run, that is the gotcha that bites. Keep the session open, or stop and resume
            rather than quitting.
          </p>

          <Card className="card-accent-left mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="AlertTriangle" size="sm" /> No mid-run corrections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A workflow takes no user input once it starts. Only agent permission prompts can pause it.
                You cannot nudge it halfway through with a &quot;wait, also check X.&quot; If you need sign-off
                between stages, the documented pattern is to run each stage as its own workflow so you get a
                checkpoint to inspect results before the next stage spends tokens. Plan the phases up front,
                because you are committing to them when you approve the run.
              </p>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed mb-6">
            If you ever want them gone, workflows turn off three ways: the Dynamic workflows toggle in{" "}
            <code>/config</code>, <code>&quot;disableWorkflows&quot;: true</code> in{" "}
            <code>~/.claude/settings.json</code>, or the <code>CLAUDE_CODE_DISABLE_WORKFLOWS=1</code>{" "}
            environment variable. Organizations can disable them in managed settings. When off, the bundled
            commands disappear, the keyword stops triggering, and <code>ultracode</code> drops out of the{" "}
            <code>/effort</code> menu.
          </p>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>What are dynamic workflows in Claude Code?</AccordionTrigger>
              <AccordionContent>
                A dynamic workflow is a JavaScript script Claude writes to orchestrate subagents at scale. A
                runtime runs it in the background while your session stays responsive. Intermediate results
                live in script variables, so only the final answer reaches Claude&apos;s context. They
                shipped May 28, 2026 with Opus 4.8.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>How much do Claude Code dynamic workflows cost?</AccordionTrigger>
              <AccordionContent>
                Anthropic publishes no fixed rate. Each agent pays its own context overhead at the session
                model&apos;s standard token rate, so a large fan-out multiplies usage. A 500-agent audit can
                shift the bill by an order of magnitude versus a single session. Scope a small run first to
                calibrate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>When should I use a workflow instead of a single Claude Code session?</AccordionTrigger>
              <AccordionContent>
                Use a workflow only when a task is too big for one context window: a codebase-wide audit, a
                500-file migration, or research cross-checked across many sources. For a single bug fix or a
                feature in a few files, a normal session is cheaper and faster.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>How many subagents can a dynamic workflow run?</AccordionTrigger>
              <AccordionContent>
                Up to 16 agents run concurrently, fewer on machines with limited CPU cores, and a single run
                is capped at 1,000 agents total. The 1,000 limit is a runaway backstop, not a budget. You
                still pay for every agent that runs under it.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>How do I control how many agents a workflow spawns?</AccordionTrigger>
              <AccordionContent>
                The lever is prompt scope, not a flag. Name explicit paths like <code>src/routes/</code>{" "}
                instead of the whole repo, set a target count in your prompt, and read the raw script before
                approving. Run a scoped pilot first to see the agent count, then widen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6">
              <AccordionTrigger>What is ultracode in Claude Code?</AccordionTrigger>
              <AccordionContent>
                Ultracode combines <code>xhigh</code> reasoning effort with automatic workflow
                orchestration. With it on, Claude plans a workflow for every substantive task instead of
                waiting for you to ask, so one request can spawn several workflows. It lasts for the session
                and resets when you start a new one.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q7">
              <AccordionTrigger>What&apos;s the difference between a workflow, a subagent, and a skill?</AccordionTrigger>
              <AccordionContent>
                The difference is who holds the plan. With subagents and skills, Claude orchestrates turn by
                turn and every result lands in its context. A workflow moves the plan into a script: the
                loop, branching, and intermediate results live in code, so it scales to hundreds of agents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q8">
              <AccordionTrigger>Can I pause, resume, or stop a running workflow?</AccordionTrigger>
              <AccordionContent>
                Yes. From the <code>/workflows</code> view, press <code>p</code> to pause or resume and{" "}
                <code>x</code> to stop. Completed agents return cached results on resume, so you keep
                finished work. Resume only works within the same session. Exit Claude Code mid-run and the
                next session starts the workflow fresh.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q9">
              <AccordionTrigger>Which plans support dynamic workflows?</AccordionTrigger>
              <AccordionContent>
                Dynamic workflows are in research preview on all paid plans (Pro, Max, Team, Enterprise) and
                require Claude Code v2.1.154 or later. On Pro you switch them on in <code>/config</code>.
                They also work on the Anthropic API, Amazon Bedrock, Google Cloud Vertex AI, and Microsoft
                Foundry.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q10">
              <AccordionTrigger>How do dynamic workflows compare to /ultrareview for code audits?</AccordionTrigger>
              <AccordionContent>
                <code>/ultrareview</code> is a turnkey, cloud-run review over a branch or PR. A workflow is a
                script you or Claude author and can read, rerun, and save. Reach for <code>/ultrareview</code>{" "}
                when you want a packaged branch review, and a workflow when you want a custom
                adversarial-verify pattern you control.
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
                  <Link href="/blog/claude-code-cost-tracking" className="project-link">
                    Claude Code Cost Tracking
                  </Link>
                  {" "}- measure the token delta before and after you turn a workflow on.
                </li>
                <li>
                  <Link href="/blog/ultrareview-ci-cd-pipelines" className="project-link">
                    Running claude ultrareview in CI/CD
                  </Link>
                  {" "}- the turnkey review tool a workflow competes with for audits.
                </li>
                <li>
                  <Link href="/blog/regression-proofing-claude-code-workflows" className="project-link">
                    Regression-Proof Claude Code Workflows
                  </Link>
                  {" "}- keep your setup stable across releases like Opus 4.8.
                </li>
                <li>
                  <Link href="/blog/persistent-memory-ai-coding-agents" className="project-link">
                    Persistent Memory for AI Coding Agents
                  </Link>
                  {" "}- why moving the plan out of the context window matters.
                </li>
                <li>
                  <Link href="/blog/claude-managed-agents" className="project-link">
                    Claude Managed Agents vs Agent SDK
                  </Link>
                  {" "}- the orchestration sibling on the platform side.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </article>
    </>
  )
}
