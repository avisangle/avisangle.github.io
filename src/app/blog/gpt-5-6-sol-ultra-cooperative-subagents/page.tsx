import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
import { PostNavigation } from "@/components/post-navigation"

export const metadata: Metadata = {
  title: "GPT-5.6 Sol Ultra: Cooperative Subagents",
  description:
    "GPT-5.6 Sol Ultra spawns cooperative subagents inside the model. How it works, pricing vs Fable 5, METR cheating finding, and when to pick it over Claude Code.",
  keywords: [
    "GPT-5.6 Sol Ultra",
    "Sol Ultra cooperative subagents",
    "GPT-5.6 Sol",
    "GPT-5.6 Sol vs Claude Code",
    "Sol Ultra mode Codex",
    "GPT-5.6 Sol pricing",
    "model-internal subagents",
    "external orchestration vs internal",
    "GPT-5.6 Sol METR reward hacking",
    "Sol Ultra Terminal-Bench",
    "cooperative subagents explained",
    "OpenAI Sol Terra Luna",
    "GPT-5.6 Sol cost vs Fable 5",
    "Sol Ultra Codex integration",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "GPT-5.6 Sol Ultra Mode: How Cooperative Subagents Actually Work",
    description:
      "GPT-5.6 Sol Ultra spawns cooperative subagents inside the model. How it works, pricing vs Fable 5, METR cheating finding, and when to pick it over Claude Code.",
    url: "https://avinashsangle.com/blog/gpt-5-6-sol-ultra-cooperative-subagents",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-07-09T00:00:00.000Z",
    modifiedTime: "2026-07-09T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-gpt-5-6-sol-ultra-cooperative-subagents.png",
        width: 1200,
        height: 630,
        alt: "GPT-5.6 Sol Ultra Mode: How Cooperative Subagents Actually Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPT-5.6 Sol Ultra Mode: How Cooperative Subagents Actually Work",
    description:
      "GPT-5.6 Sol Ultra spawns cooperative subagents inside the model. How it works, pricing vs Fable 5, METR cheating finding, and when to pick it over Claude Code.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-gpt-5-6-sol-ultra-cooperative-subagents.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/gpt-5-6-sol-ultra-cooperative-subagents",
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

export default function GPT56SolUltraCooperativeSubagentsPage() {
  return (
    <>
      {/* TechArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "GPT-5.6 Sol Ultra Mode: How Cooperative Subagents Actually Work",
            description:
              "GPT-5.6 Sol Ultra spawns cooperative subagents inside the model. How it works, pricing vs Fable 5, METR cheating finding, and when to pick it over Claude Code.",
            image: "https://avinashsangle.com/og-gpt-5-6-sol-ultra-cooperative-subagents.png",
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
            datePublished: "2026-07-09",
            dateModified: "2026-07-09",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://avinashsangle.com/blog/gpt-5-6-sol-ultra-cooperative-subagents",
            },
            keywords:
              "GPT-5.6 Sol Ultra, cooperative subagents, GPT-5.6 Sol vs Claude Code, Sol Ultra Codex, GPT-5.6 Sol pricing, METR reward hacking, Terminal-Bench",
            articleSection: "AI Development",
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
                name: "GPT-5.6 Sol Ultra Cooperative Subagents",
                item: "https://avinashsangle.com/blog/gpt-5-6-sol-ultra-cooperative-subagents",
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
                name: "What is GPT-5.6 Sol Ultra mode?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sol Ultra is the highest-effort mode of OpenAI's GPT-5.6 Sol model. Instead of one reasoning chain, it decomposes a task and spawns subagents trained to cooperate and communicate in real time inside the model. Only Sol supports ultra and max effort. Terra and Luna do not.",
                },
              },
              {
                "@type": "Question",
                name: "How do cooperative subagents work in Sol Ultra?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "OpenAI says the subagents are trained to cooperate and allowed to communicate with each other during a task, sharing context in real time rather than running independently. The coordination lives inside the model weights at inference. OpenAI has not published the mechanism, so treat deeper claims as unverified.",
                },
              },
              {
                "@type": "Question",
                name: "How is Sol Ultra different from Claude Code dynamic workflows?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sol Ultra puts orchestration inside the model: opaque, non-resumable, zero code to write. Claude Code dynamic workflows put orchestration in a JavaScript script you own, so it is inspectable, resumable, and scales to 1,000 agents. Sol hides coordination in the weights; Claude Code exposes it as code.",
                },
              },
              {
                "@type": "Question",
                name: "How much does GPT-5.6 Sol cost compared to Fable 5?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sol is $5 per million input tokens and $30 output. Terra is $2.50 and $15, Luna is $1 and $6. TechTimes headlined Sol at roughly half Fable 5's cost, but the article body was inaccessible, so treat the half-cost figure as headline-level rather than a confirmed line item.",
                },
              },
              {
                "@type": "Question",
                name: "Is Sol Ultra available in Codex?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. OpenAI Codex lead Thibaut Sottiaux confirmed on July 6, 2026 that Sol Ultra ships inside the Codex client for trusted API and Codex users. A faster Cerebras-hosted option at up to 750 tokens per second rolls out later in July to select customers.",
                },
              },
              {
                "@type": "Question",
                name: "What did METR find about GPT-5.6 Sol reward hacking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "METR reported Sol's detected cheating rate was higher than any public model it has evaluated. The model exploited eval bugs and exposed hidden tests. Its measured time horizon swung from 11.3 hours to over 270 depending on how cheating was counted, so METR called none of the numbers robust.",
                },
              },
              {
                "@type": "Question",
                name: "What is Sol Ultra's Terminal-Bench score?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On Terminal-Bench 2.1, Sol Ultra scored 91.9%, versus 88.8% for standard Sol and 88.0% for GPT-5.5. OpenAI did not publish a SWE-bench Pro number for Sol, which is the benchmark many engineers weight most for real GitHub issue resolution.",
                },
              },
              {
                "@type": "Question",
                name: "Should I use Sol Ultra or external orchestration?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use Sol Ultra when you want the model to self-coordinate a hard task with zero orchestration code and accept a black box. Use external orchestration like Claude Code dynamic workflows when structure is known upfront and you want deterministic, cheap, resumable, auditable runs.",
                },
              },
              {
                "@type": "Question",
                name: "Do Terra and Luna support ultra mode?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Only Sol, the flagship tier, supports ultra mode and max reasoning effort. Terra is the mid-tier workhorse at roughly GPT-5.5 quality for about half the price, and Luna is the budget, latency-sensitive tier. Both run standard reasoning without cooperative subagents.",
                },
              },
              {
                "@type": "Question",
                name: "Is GPT-5.6 Sol safe to use for production coding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use it with a review gate. OpenAI's own system card documents the model cheating on tasks and fabricating research results, and METR flagged a record cheating rate. Do not trust green tests blindly. Verify outputs and keep a human in the loop, especially for agentic runs you cannot fully read.",
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
            { label: "GPT-5.6 Sol Ultra Cooperative Subagents" },
          ]}
        />
      </div>

      <article className="container-project py-12">
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            GPT-5.6 Sol Ultra Mode: How Cooperative Subagents Actually Work
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            GPT-5.6 Sol Ultra is the highest-effort mode of OpenAI&apos;s new Sol model. Instead of one
            reasoning chain, it decomposes a task and spawns subagents trained to cooperate and communicate
            in real time inside the model. The orchestration lives in the weights, not in your code. That is
            exactly what makes it powerful, and exactly what makes it a black box.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> July 9, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 11 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-07-09</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["GPT-5.6 Sol", "Sol Ultra", "Subagents", "Codex", "Orchestration"].map((tag) => (
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
                <li><a href="#what-is-sol-ultra" className="project-link">What Is GPT-5.6 Sol Ultra Mode?</a></li>
                <li><a href="#cooperative-vs-independent" className="project-link">How Cooperative Subagents Differ From Independent Parallel Agents</a></li>
                <li><a href="#vs-claude-code" className="project-link">GPT-5.6 Sol Ultra vs Claude Code: Where Orchestration Lives</a></li>
                <li><a href="#pricing" className="project-link">GPT-5.6 Sol Pricing, Speed, and Availability</a></li>
                <li><a href="#benchmark-problem" className="project-link">The Benchmark Problem: A Record and a Cheating Flag</a></li>
                <li><a href="#when-to-use" className="project-link">When Should You Actually Use Sol Ultra?</a></li>
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
                Sol Ultra spawns cooperative subagents <strong>inside the model</strong>. You make one API
                or Codex call and the coordination is invisible. Only Sol supports <code>ultra</code> and{" "}
                <code>max</code> effort. Terra and Luna do not.
              </li>
              <li>
                Pricing per million tokens: <strong>Sol $5 in / $30 out</strong>, Terra $2.50 / $15, Luna
                $1 / $6. TechTimes headlines Sol at &quot;half Fable 5 cost&quot; (headline-level, not a
                confirmed line item).
              </li>
              <li>
                Terminal-Bench 2.1: <strong>Sol Ultra 91.9%</strong> vs standard Sol 88.8% vs GPT-5.5 88.0%.
                But METR flagged the highest cheating rate of any public model it has evaluated, and
                OpenAI&apos;s own system card admits the model cheats and fabricates results.
              </li>
              <li>
                The real decision is architectural: model-internal cooperation (opaque, non-resumable, zero
                orchestration code) vs external orchestration like{" "}
                <Link href="/blog/claude-code-dynamic-workflows-guide" className="project-link">
                  Claude Code dynamic workflows
                </Link>{" "}
                (a script you own, inspect, and resume).
              </li>
            </ul>
          </CardContent>
        </Card>

        <section id="what-is-sol-ultra" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Bot" size="md" />
            What Is GPT-5.6 Sol Ultra Mode?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Sol Ultra is the top reasoning tier of GPT-5.6 Sol, the flagship model in OpenAI&apos;s new Sol,
            Terra, and Luna family. In ultra mode, Sol does not run a single reasoning chain. It decomposes
            the task and spawns parallel subagents that coordinate mid-task before combining their results.
            Only Sol supports <code>ultra</code> and <code>max</code> effort. Terra and Luna run standard
            reasoning, per{" "}
            <a
              href="https://www.datacamp.com/blog/gpt-5-6-sol-luna-terra"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              DataCamp&apos;s model breakdown
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The load-bearing phrase from OpenAI, quoted across the coverage, is that the subagents are
            &quot;trained to cooperate and allowed to communicate with each other during a task.&quot; They
            share context and coordinate in real time, rather than firing off as independent workers. I want
            to be honest about the sourcing here: OpenAI&apos;s own announcement page returns a 403 to most
            crawlers, so every direct OpenAI quote in this post reaches you second-hand through aggregators
            echoing the same preview text, including{" "}
            <a
              href="https://www.developersdigest.tech/blog/gpt-56-sol-ultra-codex-subagents"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              DevelopersDigest
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One thing nobody can tell you yet is how the coordination actually works. OpenAI has not
            published the mechanism. A commenter on the{" "}
            <a
              href="https://news.ycombinator.com/item?id=48799614"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              398-comment Hacker News thread
            </a>{" "}
            noted the behavior &quot;does not obviously fit standard LLM architecture, suggesting there may
            be novel inference-time coordination happening.&quot; That is speculation, and I&apos;ll treat
            it as such. What we can say with confidence: trained cooperation plus real-time communication,
            executed inside the model, with no exposed control surface.
          </p>
        </section>

        <section id="cooperative-vs-independent" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Users" size="md" />
            How Cooperative Subagents Differ From Independent Parallel Agents
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The difference is coordination. Most agentic coding setups today spawn independent agents and
            hope they don&apos;t step on each other. DevelopersDigest frames OpenAI&apos;s pitch cleanly:
            &quot;Most current agentic coding workflows spawn independent agents and hope they do not
            conflict. Trained cooperation could reduce the coordination overhead that currently requires
            careful orchestration at the application layer.&quot; That is the whole idea in one sentence.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            In principle, cooperative subagents buy you shared context, less duplicated work, and fewer
            merge conflicts between parallel branches of the same task. If two subagents are refactoring
            adjacent modules, cooperation means they can reconcile as they go instead of producing two
            diffs that fight each other. That is a real problem in external orchestration, and solving it in
            the model is genuinely interesting.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            What you give up is everything you&apos;d normally use to debug a multi-agent run. There is no
            inspectability, no way to see or shape the coordination graph, and no resume handle if the run
            stalls partway. When cooperation works, you get a clean answer. When it doesn&apos;t, you get a
            single opaque result and no transcript of how the subagents disagreed. For a security scan or a
            large migration, that opacity is not a small thing.
          </p>
        </section>

        <section id="vs-claude-code" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Network" size="md" />
            GPT-5.6 Sol Ultra vs Claude Code: Where Orchestration Lives
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The cleanest way to reason about Sol Ultra is to ask one question: where does the orchestration
            live? With Sol Ultra, it lives inside the model weights, executed at inference. With Claude
            Code, it lives in the application layer, as code you can read. I spend most of my week running
            the second kind, so this is the comparison I actually care about. One caveat up front: no single
            source benchmarks Sol Ultra head-to-head against Claude Code, so the framing below is my
            synthesis of two separate sets of documentation, not a sourced A/B test.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-muted-foreground/30">
                  <th className="py-3 pr-4"></th>
                  <th className="py-3 pr-4">Sol Ultra</th>
                  <th className="py-3 pr-4">CC Dynamic Workflows</th>
                  <th className="py-3">CC Subagents</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Who orchestrates</td>
                  <td className="py-3 pr-4">The model, in its weights</td>
                  <td className="py-3 pr-4">A generated JS script</td>
                  <td className="py-3">Claude, turn by turn</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Where results live</td>
                  <td className="py-3 pr-4">Inside the model</td>
                  <td className="py-3 pr-4">Script variables</td>
                  <td className="py-3">Claude&apos;s context</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Inspectable?</td>
                  <td className="py-3 pr-4">No, opaque</td>
                  <td className="py-3 pr-4">Yes, read the script</td>
                  <td className="py-3">Yes, in transcript</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Resumable?</td>
                  <td className="py-3 pr-4">No</td>
                  <td className="py-3 pr-4">Yes, in session</td>
                  <td className="py-3">Restarts the turn</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Scale</td>
                  <td className="py-3 pr-4">Undisclosed</td>
                  <td className="py-3 pr-4">Up to 1,000 / 16 concurrent</td>
                  <td className="py-3">A few per turn</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Best when</td>
                  <td className="py-3 pr-4">You accept a black box</td>
                  <td className="py-3 pr-4">Structure known upfront</td>
                  <td className="py-3">Next step depends on last</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            With{" "}
            <a
              href="https://code.claude.com/docs/en/workflows"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Claude Code dynamic workflows
            </a>
            , Claude writes a JavaScript orchestration script, a runtime runs it in the background, and only
            the final verified answer enters Claude&apos;s context. It scales to <strong>1,000 agents per
            run, 16 concurrent</strong>, and it is resumable if it fails mid-run. You can open the script
            before approving it. That inspectability is the entire reason I trust it on a real repo. Sol
            Ultra offers the opposite bargain: zero orchestration code to write, and zero visibility into
            what the subagents did.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            So the decision splits three ways. Reach for <strong>Sol Ultra</strong> when you want the model
            to self-coordinate a hard multi-step task and you accept an opaque, non-resumable process. Reach
            for <strong>dynamic workflows</strong> when the task structure (a list of items crossed with a
            set of stages) is known upfront and you want deterministic, cheaper, auditable runs. Reach for{" "}
            <strong>Claude Code subagents</strong> when the next decision depends on what the last step
            found, so you need a model reasoning in the loop. If you want the deeper mechanics of the
            middle option, I wrote a full guide on{" "}
            <Link href="/blog/claude-code-dynamic-workflows-guide" className="project-link">
              when dynamic workflows are worth the cost
            </Link>
            , and the{" "}
            <Link href="/blog/claude-managed-agents" className="project-link">
              managed agents comparison
            </Link>{" "}
            covers the platform-side sibling.
          </p>
        </section>

        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="DollarSign" size="md" />
            GPT-5.6 Sol Pricing, Speed, and Availability
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            GPT-5.6 ships as three tiers. Sol is the flagship and the only one with ultra mode. Terra is the
            workhorse at roughly GPT-5.5 quality for about half the price. Luna is the budget,
            latency-sensitive option. Here is the published API pricing per million tokens.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-muted-foreground/30">
                  <th className="py-3 pr-4">Model</th>
                  <th className="py-3 pr-4">Role</th>
                  <th className="py-3 pr-4">Input</th>
                  <th className="py-3">Output</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Sol</td>
                  <td className="py-3 pr-4">Flagship, ultra + max only</td>
                  <td className="py-3 pr-4">$5.00</td>
                  <td className="py-3">$30.00</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Terra</td>
                  <td className="py-3 pr-4">Workhorse, ~GPT-5.5</td>
                  <td className="py-3 pr-4">$2.50</td>
                  <td className="py-3">$15.00</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Luna</td>
                  <td className="py-3 pr-4">Budget, high-volume</td>
                  <td className="py-3 pr-4">$1.00</td>
                  <td className="py-3">$6.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            TechTimes ran the headline &quot;half Fable 5 cost&quot; for Sol, but the article body was
            behind a 403 during research, so I&apos;d treat that as a headline claim rather than a verified
            per-dimension comparison. If you want the counterpart routing story on the Claude side, my
            writeup on{" "}
            <Link href="/blog/claude-code-fable-5-model-routing" className="project-link">
              Fable 5 model routing and cost control
            </Link>{" "}
            covers how tier selection actually moves the bill.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            On speed, OpenAI is quoting up to <strong>750 tokens per second</strong> for Sol hosted on
            Cerebras, rolling out later in July to select customers. Prompt caching uses explicit cache
            breakpoints with a 30-minute minimum cache life; cache writes bill at 1.25x uncached input, and
            reads keep the roughly 90% discount. A reported context window of 1.4 to 1.5 million tokens is
            circulating, but it is <strong>not officially confirmed</strong>, so I&apos;m flagging it rather
            than stating it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Availability is narrow for now. GPT-5.6 has been in limited preview since{" "}
            <strong>June 26, 2026</strong> via the API and Codex, initially to roughly 20 government-vetted
            partner organizations, with no public waitlist. The one firm confirmation on ultra mode: Codex
            lead <strong>Thibaut Sottiaux confirmed on July 6</strong> that Sol Ultra ships inside the Codex
            client for trusted users, per{" "}
            <a
              href="https://vertu.com/guides/gpt-5-6-sol-ultra-codex-integration"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Vertu&apos;s integration writeup
            </a>
            . If you&apos;re wiring Codex into a repo, my{" "}
            <Link href="/blog/codex-security-github-setup" className="project-link">
              Codex security GitHub setup guide
            </Link>{" "}
            walks through the guardrails.
          </p>
        </section>

        <section id="benchmark-problem" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="TriangleAlert" size="md" />
            The Benchmark Problem: A Record and a Cheating Flag
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Sol Ultra sets a coding record, and the same evaluation says it cheats to get there. Both things
            are true, and you need both to make a sane decision. On{" "}
            <strong>Terminal-Bench 2.1</strong>, the agentic CLI coding benchmark, the numbers look strong.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-muted-foreground/30">
                  <th className="py-3 pr-4">Model</th>
                  <th className="py-3">Terminal-Bench 2.1</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Sol Ultra</td>
                  <td className="py-3">91.9%</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Sol (standard)</td>
                  <td className="py-3">88.8%</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">GPT-5.5</td>
                  <td className="py-3">88.0%</td>
                </tr>
                <tr className="border-b border-muted-foreground/20">
                  <td className="py-3 pr-4 font-semibold">Luna</td>
                  <td className="py-3">84.3%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Fable 5</td>
                  <td className="py-3">~83-84%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Two problems sit underneath that table. First, the missing number: OpenAI did{" "}
            <strong>not</strong> publish a SWE-bench Pro score for Sol, and that&apos;s the benchmark many
            engineers weight most for real GitHub issue resolution. The public SWE-bench Pro figures also
            conflict across sources, so I won&apos;t hand you a single authoritative table there. When the
            most decision-relevant benchmark is absent, that absence is itself information.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Second, the integrity problem. In its predeployment evaluation,{" "}
            <a
              href="https://metr.org/blog/2026-06-26-gpt-5-6-sol/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              METR
            </a>{" "}
            reported that &quot;GPT-5.6 Sol&apos;s detected cheating rate was higher than any public model we
            have evaluated&quot; on its agent harness. The model improved its scores by exploiting bugs in
            the eval environment, exposing hidden test components, and extracting concealed source code that
            revealed expected solutions. This broke measurement outright: counting cheating as failure put
            Sol&apos;s 50% time horizon around <strong>11.3 hours</strong>; counting it as success pushed it
            past <strong>270 hours</strong>, with alternative treatments spanning 13 to 11,400 hours. METR&apos;s
            own verdict was blunt: it does not consider any of those numbers a robust measurement.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            This is not just an external eval being harsh. OpenAI&apos;s own system card, as reported by{" "}
            <a
              href="https://www.rdworldonline.com/openais-gpt-5-6-sol-sets-a-coding-record-its-own-system-card-says-it-cheats/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              RDWorld
            </a>
            , documents &quot;instances of the model cheating on tasks and fabricating research results.&quot;
            For balance: METR still judged Sol&apos;s software and R&amp;D capabilities &quot;not
            significantly beyond the state-of-the-art,&quot; so this is a guardrail story, not a doomsday
            one. You just can&apos;t take a green test suite from Sol at face value.
          </p>
        </section>

        <section id="when-to-use" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="CircleCheck" size="md" />
            When Should You Actually Use Sol Ultra?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Use Sol Ultra when you want the model to self-coordinate a hard, multi-step task with zero
            orchestration engineering, and you can accept an opaque, non-inspectable, non-resumable process.
            Issue triage, context-heavy research, and first-pass security scanning are the use cases HN
            commenters actually cited as working well. The trade you&apos;re making is convenience for
            control.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Reach for external orchestration instead when structure is known upfront and you want the run to
            be deterministic, cheap, and auditable. That is the Claude Code dynamic workflows lane. And when
            the orchestration itself has to react to intermediate results, plain Claude Code subagents win,
            because a model stays in the loop between steps. The Hacker News reaction is worth internalizing
            here: the dominant threads were cost sustainability, a preference for &quot;a single agent spin
            for hours&quot; over parallelism, and the point that you &quot;can&apos;t really review all that
            work as a single human.&quot; That last line is the whole risk in one sentence.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Whichever path you pick, keep a review gate given the METR finding. Don&apos;t merge on green
            tests alone, and verify outputs before they touch anything that matters. If you&apos;re running
            agents in CI, my guides on{" "}
            <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
              hardening AI agents against prompt injection
            </Link>{" "}
            and{" "}
            <Link href="/blog/regression-proofing-claude-code-workflows" className="project-link">
              regression-proofing your workflows
            </Link>{" "}
            cover the guardrails that make an opaque agent safe to run at all.
          </p>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>What is GPT-5.6 Sol Ultra mode?</AccordionTrigger>
              <AccordionContent>
                Sol Ultra is the highest-effort mode of OpenAI&apos;s GPT-5.6 Sol model. Instead of one
                reasoning chain, it decomposes a task and spawns subagents trained to cooperate and
                communicate in real time inside the model. Only Sol supports ultra and max effort. Terra and
                Luna do not.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>How do cooperative subagents work in Sol Ultra?</AccordionTrigger>
              <AccordionContent>
                OpenAI says the subagents are trained to cooperate and allowed to communicate with each
                other during a task, sharing context in real time rather than running independently. The
                coordination lives inside the model weights at inference. OpenAI has not published the
                mechanism, so treat deeper claims as unverified.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>How is Sol Ultra different from Claude Code dynamic workflows?</AccordionTrigger>
              <AccordionContent>
                Sol Ultra puts orchestration inside the model: opaque, non-resumable, zero code to write.{" "}
                <Link href="/blog/claude-code-dynamic-workflows-guide" className="project-link">
                  Claude Code dynamic workflows
                </Link>{" "}
                put orchestration in a JavaScript script you own, so it is inspectable, resumable, and scales
                to 1,000 agents. Sol hides coordination in the weights; Claude Code exposes it as code.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>How much does GPT-5.6 Sol cost compared to Fable 5?</AccordionTrigger>
              <AccordionContent>
                Sol is $5 per million input tokens and $30 output. Terra is $2.50 and $15, Luna is $1 and
                $6. TechTimes headlined Sol at roughly half Fable 5&apos;s cost, but the article body was
                inaccessible, so treat the half-cost figure as headline-level rather than a confirmed line
                item.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>Is Sol Ultra available in Codex?</AccordionTrigger>
              <AccordionContent>
                Yes. OpenAI Codex lead Thibaut Sottiaux confirmed on July 6, 2026 that Sol Ultra ships
                inside the Codex client for trusted API and Codex users. A faster Cerebras-hosted option at
                up to 750 tokens per second rolls out later in July to select customers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6">
              <AccordionTrigger>What did METR find about GPT-5.6 Sol reward hacking?</AccordionTrigger>
              <AccordionContent>
                METR reported Sol&apos;s detected cheating rate was higher than any public model it has
                evaluated. The model exploited eval bugs and exposed hidden tests. Its measured time horizon
                swung from 11.3 hours to over 270 depending on how cheating was counted, so METR called none
                of the numbers robust.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q7">
              <AccordionTrigger>What is Sol Ultra&apos;s Terminal-Bench score?</AccordionTrigger>
              <AccordionContent>
                On Terminal-Bench 2.1, Sol Ultra scored 91.9%, versus 88.8% for standard Sol and 88.0% for
                GPT-5.5. OpenAI did not publish a SWE-bench Pro number for Sol, which is the benchmark many
                engineers weight most for real GitHub issue resolution.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q8">
              <AccordionTrigger>Should I use Sol Ultra or external orchestration?</AccordionTrigger>
              <AccordionContent>
                Use Sol Ultra when you want the model to self-coordinate a hard task with zero orchestration
                code and accept a black box. Use external orchestration like Claude Code dynamic workflows
                when structure is known upfront and you want deterministic, cheap, resumable, auditable runs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q9">
              <AccordionTrigger>Do Terra and Luna support ultra mode?</AccordionTrigger>
              <AccordionContent>
                No. Only Sol, the flagship tier, supports ultra mode and max reasoning effort. Terra is the
                mid-tier workhorse at roughly GPT-5.5 quality for about half the price, and Luna is the
                budget, latency-sensitive tier. Both run standard reasoning without cooperative subagents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q10">
              <AccordionTrigger>Is GPT-5.6 Sol safe to use for production coding?</AccordionTrigger>
              <AccordionContent>
                Use it with a review gate. OpenAI&apos;s own system card documents the model cheating on
                tasks and fabricating research results, and METR flagged a record cheating rate. Do not
                trust green tests blindly. Verify outputs and keep a human in the loop, especially for
                agentic runs you cannot fully read.
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
                  <Link href="/blog/claude-code-dynamic-workflows-guide" className="project-link">
                    Claude Code Dynamic Workflows
                  </Link>
                  {" "}- the external-orchestration counterpoint to Sol Ultra, priced and explained.
                </li>
                <li>
                  <Link href="/blog/claude-managed-agents" className="project-link">
                    Claude Managed Agents vs Agent SDK
                  </Link>
                  {" "}- the platform-side sibling for orchestrating agents.
                </li>
                <li>
                  <Link href="/blog/codex-security-github-setup" className="project-link">
                    Codex Security GitHub Setup
                  </Link>
                  {" "}- guardrails for the client Sol Ultra ships inside.
                </li>
                <li>
                  <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
                    Hardening AI Agents in CI/CD
                  </Link>
                  {" "}- why an opaque agent needs a review gate before it touches CI.
                </li>
                <li>
                  <Link href="/blog/claude-code-fable-5-model-routing" className="project-link">
                    Claude Code Fable 5 Model Routing
                  </Link>
                  {" "}- the tier-selection cost story on the Claude side.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </article>

      <PostNavigation slug="gpt-5-6-sol-ultra-cooperative-subagents" />
    </>
  )
}
