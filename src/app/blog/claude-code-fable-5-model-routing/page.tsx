import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Claude Code Fable 5: Model Routing, Fallbacks, Cost Control",
  description:
    "Configure Fable 5 in Claude Code: fallbackModel chains, safety classifier fallback to Opus 4.8, and which tasks justify the 2x price.",
  keywords: [
    "claude code fable 5",
    "claude code fallback model",
    "fallbackModel setting",
    "fable 5 vs opus 4.8",
    "claude fable 5 pricing",
    "claude code model selection",
    "fable 5 safety classifier",
    "claude code model routing",
    "claude fable 5 opus fallback",
    "claude code --fallback-model",
    "fable 5 free until june 22",
    "claude code which model",
    "fable 5 bedrock",
    "claude code safe mode",
    "ANTHROPIC_DEFAULT_FABLE_MODEL",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Claude Code Fable 5: Model Routing, Fallbacks, Cost Control",
    description:
      "Configure Fable 5 in Claude Code: fallbackModel chains, safety classifier fallback to Opus 4.8, and which tasks justify the 2x price.",
    url: "https://avinashsangle.com/blog/claude-code-fable-5-model-routing",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-06-11T00:00:00.000Z",
    modifiedTime: "2026-06-11T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-claude-code-fable-5-model-routing.png",
        width: 1200,
        height: 630,
        alt: "Claude Code Fable 5 Model Routing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code Fable 5: Model Routing, Fallbacks, Cost Control",
    description:
      "Configure Fable 5 in Claude Code: fallbackModel chains, classifier fallback to Opus 4.8, and which tasks justify the 2x price.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-claude-code-fable-5-model-routing.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/claude-code-fable-5-model-routing",
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

export default function ClaudeCodeFable5ModelRoutingPage() {
  return (
    <>
      {/* TechArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Claude Code Fable 5: Model Routing, Fallbacks, Cost Control",
            description:
              "Configure Fable 5 in Claude Code: fallbackModel chains, safety classifier fallback to Opus 4.8, and which tasks justify the 2x price.",
            image: "https://avinashsangle.com/og-claude-code-fable-5-model-routing.png",
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
            datePublished: "2026-06-11",
            dateModified: "2026-06-11",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://avinashsangle.com/blog/claude-code-fable-5-model-routing",
            },
            keywords:
              "claude code fable 5, claude code fallback model, fallbackModel, fable 5 vs opus 4.8, claude fable 5 pricing, model routing, safety classifier fallback",
            articleSection: "Claude Code",
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
                name: "Claude Code Fable 5 Model Routing",
                item: "https://avinashsangle.com/blog/claude-code-fable-5-model-routing",
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
                name: "What is the fallbackModel setting in Claude Code?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "fallbackModel, shipped in Claude Code v2.1.166, lets you chain up to three backup models that take over when the primary is overloaded or unavailable. Set it as an array in settings.json or per session with the --fallback-model flag. The switch lasts one turn, then Claude Code retries the primary.",
                },
              },
              {
                "@type": "Question",
                name: "How do I switch to Fable 5 in Claude Code?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Run /model fable inside a session, launch with claude --model fable, or set \"model\": \"fable\" in settings.json. Fable 5 requires Claude Code v2.1.170 or later, so run claude update first. It is never the default model; you have to select it, and /model saves it for future sessions.",
                },
              },
              {
                "@type": "Question",
                name: "Why did Claude Code switch my session from Fable 5 to Opus 4.8?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fable 5 runs safety classifiers for cybersecurity and biology content. When a request is flagged, Claude Code re-runs it on Opus 4.8 and the session stays there until you run /model fable again. Workspace context like a security-focused CLAUDE.md can trigger this on the very first request.",
                },
              },
              {
                "@type": "Question",
                name: "Is Claude Fable 5 worth 2x the price of Opus 4.8 for coding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For well-scoped daily tasks, no; Opus 4.8 is close enough at half the per-token price. Fable 5 pays off on ambiguous, long-running work: root-cause debugging, multi-file refactors, and tasks bigger than one sitting, where it uses fewer turns and verifies its own output, narrowing the effective cost gap.",
                },
              },
              {
                "@type": "Question",
                name: "How much does Claude Fable 5 cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fable 5 is $10 per million input tokens and $50 per million output tokens on the Anthropic API, exactly 2x Opus 4.8's $5/$25. On Pro, Max, and Team subscriptions it is included free through June 22, 2026, after which usage draws on credits. It consumes rate limits faster than any other model.",
                },
              },
              {
                "@type": "Question",
                name: "Can I stop Claude Code from switching models automatically?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Run /config and turn off \"switch models when a message is flagged\". A flagged request then pauses the session with two choices: switch to Opus for that request, or edit the prompt and retry on Fable 5. Availability fallback is separate; remove the fallbackModel setting to disable that.",
                },
              },
              {
                "@type": "Question",
                name: "How are Fable 5 fallback requests billed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Input tokens on a directly blocked classifier request are not billed at all. When the request re-runs on Opus 4.8, the fallback input tokens bill at the cache-read rate, which is 10% of the base input price. Claude Code applies this automatically; API users need the server-side-fallback beta header.",
                },
              },
              {
                "@type": "Question",
                name: "Does Fable 5 automatic fallback work on Amazon Bedrock?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Only if Claude Code can identify both models. Set ANTHROPIC_DEFAULT_FABLE_MODEL to your Fable 5 model ID and ANTHROPIC_DEFAULT_OPUS_MODEL to an Opus 4.8 ID. Without both, a flagged request ends in a refusal instead of switching. Bedrock also requires 30-day data retention for Mythos-class models.",
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
            { label: "Claude Code Fable 5 Model Routing" },
          ]}
        />
      </div>

      <article className="container-project py-12">
        <header className="mb-12">
          <Badge className="mb-4">Claude Code</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Claude Code Fable 5: Model Routing, Fallbacks, Cost Control
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Claude Code Fable 5 arrived June 9, 2026 at exactly 2x Opus 4.8&apos;s per-token price, the
            same week the native <code>fallbackModel</code> setting shipped. This guide covers switching
            to Fable 5, configuring a fallback chain, why sessions silently reroute to Opus 4.8, and
            which coding tasks actually justify the premium.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> June 11, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-06-11</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Claude Code", "Fable 5", "Model Routing", "Opus 4.8", "Cost Control"].map((tag) => (
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
                <li><a href="#what-changed" className="project-link">What Changed in June 2026: Fable 5 Plus Native Fallback Chains</a></li>
                <li><a href="#switch-to-fable" className="project-link">How to Switch to Fable 5 in Claude Code</a></li>
                <li><a href="#fallback-chains" className="project-link">How to Configure a Fallback Model Chain (fallbackModel)</a></li>
                <li><a href="#classifier-fallback" className="project-link">Why Claude Code Switches From Fable 5 to Opus 4.8</a></li>
                <li><a href="#fallback-billing" className="project-link">What Fallback Costs: The Billing Mechanics</a></li>
                <li><a href="#task-routing" className="project-link">Which Tasks Justify Fable 5&apos;s 2x Price</a></li>
                <li><a href="#third-party" className="project-link">Fable 5 Routing on Bedrock, Vertex AI, and Foundry</a></li>
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
                Fable 5 costs <strong>$10/$50 per 1M tokens</strong>, exactly 2x Opus 4.8. It is free on
                Pro, Max, and Team plans through <strong>June 22, 2026</strong>, which makes right now the
                cheapest time to benchmark it on your own tasks.
              </li>
              <li>
                There are <strong>two separate fallback systems</strong>: <code>fallbackModel</code> chains
                handle availability errors (up to 3 backups, one turn at a time), while safety classifiers
                reroute flagged content to Opus 4.8 and keep the session there.
              </li>
              <li>
                A security-heavy CLAUDE.md or git history can trip the classifier <strong>before you type
                anything</strong>. Debug with <code>claude --safe-mode</code>, or turn off auto-switching
                in <code>/config</code>.
              </li>
              <li>
                Route by task: Fable 5 for ambiguous, multi-file, long-running work; Opus 4.8 as the daily
                driver; Sonnet 4.6 for scoped fixes. Fewer turns on hard tasks narrows the real cost gap.
              </li>
            </ul>
          </CardContent>
        </Card>

        <section id="what-changed" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Sparkles" size="md" />
            What Changed in June 2026: Fable 5 Plus Native Fallback Chains
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Two releases landed in the same week and together they changed how I think about model
            selection in Claude Code. On June 9, Anthropic shipped{" "}
            <a
              href="https://www.anthropic.com/news/claude-fable-5-mythos-5"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Claude Fable 5
            </a>
            , the first generally available Mythos-class model. A few releases earlier, Claude Code
            v2.1.166 added a native <code>fallbackModel</code> setting that chains up to three backup
            models when your primary is overloaded or down.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            If you read my{" "}
            <Link href="/blog/claude-mythos-preview" className="project-link">
              Claude Mythos preview post
            </Link>{" "}
            from April, Fable 5 is the payoff: the same underlying model as Mythos 5, with safety
            classifiers added so the rest of us can use it.{" "}
            <a
              href="https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              TechCrunch
            </a>{" "}
            framed it as Anthropic releasing its most powerful model days after warning that AI is
            getting too dangerous, and that tension is baked into how it behaves in Claude Code.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The practical situation: you now have three viable models with real price-performance gaps.
            Fable 5 at $10/$50 per million input/output tokens, Opus 4.8 at $5/$25, and Sonnet 4.6 well
            below that. You have a built-in routing mechanism for outages, a classifier that can yank
            your session off Fable 5 mid-task, and a free evaluation window on Pro, Max, and Team plans
            that closes <strong>June 22, 2026</strong> according to{" "}
            <a
              href="https://www.anthropic.com/news/claude-fable-5-mythos-5"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Anthropic&apos;s announcement
            </a>
            . Every guide I&apos;ve seen covers the benchmarks. None of them cover the routing decisions
            you face in an actual session, so that&apos;s what this post does.
          </p>
        </section>

        <section id="switch-to-fable" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Terminal" size="md" />
            How to Switch to Fable 5 in Claude Code
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Run <code>/model fable</code> in a session, or launch with <code>claude --model fable</code>.
            Fable 5 requires Claude Code v2.1.170 or later; older versions don&apos;t show it in the
            picker at all, so run <code>claude update</code> first. It is not the default model on any
            plan tier, which is deliberate. You opt in.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Upgrade first - Fable 5 needs v2.1.170+
claude update

# Switch inside a session (Enter saves as default, 's' = this session only)
/model fable

# Or launch a single session on Fable 5 without saving it
claude --model fable

# Check what you're running
/status`}
          />

          <p className="text-lg leading-relaxed mb-6">
            One behavior change worth knowing: since v2.1.153, picking a model with <code>/model</code>{" "}
            writes it to your user settings as the default for new sessions. Press <code>s</code> in the
            picker instead if you only want it for the current session. I got caught by this on day one;
            I tried Fable 5 for one task and every session after that started on it, quietly burning my
            rate limit faster. The{" "}
            <a
              href="https://code.claude.com/docs/en/model-config"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              model configuration docs
            </a>{" "}
            list the full precedence order: in-session <code>/model</code>, then the{" "}
            <code>--model</code> flag, then <code>ANTHROPIC_MODEL</code>, then the <code>model</code>{" "}
            field in settings.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            There&apos;s also a <code>best</code> alias that resolves to Fable 5 where your organization
            has access and falls back to the latest Opus elsewhere. That&apos;s useful in shared
            settings files for teams where not everyone has Fable access yet. Defaults by account type:
            Max, Team Premium, and the API default to Opus 4.8, while Pro and Team Standard default to
            Sonnet 4.6. Fable 5 is also unavailable under zero data retention agreements, where the
            picker omits it entirely.
          </p>

          <CodeBlock
            language="json"
            filename="~/.claude/settings.json"
            code={`{
  "model": "fable",
  "fallbackModel": ["claude-opus-4-8", "claude-sonnet-4-6"]
}`}
          />

          <p className="text-lg leading-relaxed mb-6">
            That two-line settings file is my current setup: Fable 5 as primary with a fallback chain
            behind it. The next two sections explain what that second line does and what it deliberately
            does not do.
          </p>
        </section>

        <section id="fallback-chains" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitBranch" size="md" />
            How to Configure a Fallback Model Chain (fallbackModel)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The <code>fallbackModel</code> setting handles availability failures: when the primary model
            is overloaded, unavailable, or returns a non-retryable server error, Claude Code tries the
            next model in your chain instead of failing the request. Authentication, billing,
            rate-limit, request-size, and transport errors never trigger a switch; those follow normal
            retry handling. Chains are capped at three models after duplicate removal.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# One session: comma-separated list, flag wins over settings
claude --model fable --fallback-model opus,sonnet

# Persistent: array in settings.json
# "fallbackModel": ["claude-opus-4-8", "claude-haiku-4-5"]`}
          />

          <p className="text-lg leading-relaxed mb-6">
            The detail that matters most in practice: <strong>the switch lasts for the current turn
            only</strong>. Your next message tries the primary model first again. So a fallback chain is
            not a routing policy; it&apos;s a shock absorber. During the launch-week load spikes I hit
            two overloaded-model errors on Fable 5 in one afternoon, and both times the chain dropped
            that single turn to Opus 4.8 and bounced back without me touching anything. A notice appears
            in the transcript when it switches, so you&apos;re never guessing which model answered.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Each element accepts a model name or alias, and the string <code>&quot;default&quot;</code>{" "}
            expands to your account&apos;s default model. Two cases silently shrink your chain: a model
            that can&apos;t be reached (say, a retired version pinned in settings) gets skipped, and any
            element outside your organization&apos;s <code>availableModels</code> allowlist is dropped
            when the chain is read and never tried. If you manage{" "}
            <Link href="/blog/regression-proofing-claude-code-workflows" className="project-link">
              pinned models and allowlists
            </Link>{" "}
            for a team, audit the chain against the allowlist or your backups may not exist.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            For Fable 5 users I recommend <code>[&quot;claude-opus-4-8&quot;,
            &quot;claude-sonnet-4-6&quot;]</code>. Opus 4.8 first because it&apos;s also where the safety
            classifier sends flagged requests, so your session behaves consistently no matter which
            fallback system fired. Sonnet 4.6 second as the cheap last resort that&apos;s essentially
            never overloaded.
          </p>
        </section>

        <section id="classifier-fallback" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldAlert" size="md" />
            Why Claude Code Switches From Fable 5 to Opus 4.8
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            This is the part that confuses people, because it&apos;s a completely separate mechanism from
            the fallback chain above. Fable 5 runs with safety classifiers that screen cybersecurity and
            biology content. When a classifier flags a request, Claude Code re-runs that request on Opus
            4.8, shows a notice in the transcript, and <strong>the session stays on Opus</strong> until
            you run <code>/model fable</code> again. Chain fallback is per-turn; classifier fallback is
            sticky.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Anthropic says the handoff fires on under 5% of sessions on average, per the{" "}
            <a
              href="https://platform.claude.com/cookbook/fable-5-fallback-billing-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Claude Cookbook fallback guide
            </a>
            . My experience says that average hides a skew: if your repos touch security at all, you will
            see it constantly. The gotcha is that fallback can trigger on the <strong>first request of a
            session, before you type anything</strong>, because that request carries workspace context:
            your CLAUDE.md, git status, and directory structure. I opened a Fable 5 session in the repo
            for my{" "}
            <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
              prompt injection hardening post
            </Link>
            , which has a CLAUDE.md full of injection payloads and CVE references, and the session
            rerouted to Opus 4.8 on the context load alone.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            To figure out whether your customizations are the trigger, start a session with{" "}
            <code>claude --safe-mode</code>. It disables CLAUDE.md, skills, MCP servers, and hooks; git
            status and directory names still go through because they aren&apos;t customizations. If safe
            mode stays on Fable 5 and a normal session doesn&apos;t, your CLAUDE.md or a skill is
            tripping the classifier.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Isolate the trigger: no CLAUDE.md, skills, MCP servers, or hooks
claude --safe-mode --model fable

# Stayed on Fable 5? A customization is the trigger.
# Still rerouted? It's the git history or directory contents.`}
          />

          <p className="text-lg leading-relaxed mb-6">
            If you&apos;d rather decide each time than be switched automatically, run <code>/config</code>{" "}
            and turn off <strong>&quot;switch models when a message is flagged&quot;</strong>. A flagged
            request then pauses with two options: switch to Opus for that request, or edit the prompt and
            retry on Fable 5. I keep this off on security repos because rewording a prompt often gets
            past a conservative classifier without losing the Fable session. The classifiers are tuned
            deliberately cautious, and Anthropic&apos;s docs are explicit that offensive security and
            biology workloads should expect frequent rerouting; it&apos;s expected routing for those
            domains, not a flag on your account.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One more case that bites CI users: in non-interactive mode and SDK integrations that
            can&apos;t show a prompt, a flagged request ends the turn with a refusal instead of falling
            back. If you run Fable 5 in pipelines like the ones in my{" "}
            <Link href="/blog/ultrareview-ci-cd-pipelines" className="project-link">
              ultrareview CI/CD guide
            </Link>
            , a classifier hit means a failed job, not a slower model. For automated security scanning,
            pin Opus 4.8 and skip the problem entirely.
          </p>
        </section>

        <section id="fallback-billing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Receipt" size="md" />
            What Fallback Costs: The Billing Mechanics
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The billing treatment is more generous than I expected. Per the{" "}
            <a
              href="https://platform.claude.com/cookbook/fable-5-fallback-billing-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              official cookbook guide
            </a>
            , input tokens on a request the classifier blocks outright are not billed at all. When the
            request re-runs on Opus 4.8, the fallback input tokens bill at the cache-read rate, which is
            10% of the base input price, instead of the 1.25x or 2x cache-write rates you&apos;d normally
            pay to rebuild context on a different model. You are not paying double for the same tokens
            because a classifier got nervous.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Claude Code handles all of this automatically. If you build on the API directly, you need
            the <code>server-side-fallback-2026-06-01</code> beta header with a <code>fallbacks</code>{" "}
            parameter to get automatic retry, or you redeem a <code>fallback_credit_token</code> from the
            blocked response within 5 minutes for client-side retries. Check{" "}
            <code>usage.iterations</code> in the response to know which model actually answered;
            don&apos;t trust the model you requested.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            For tracking what routing decisions actually cost you across sessions, the JSONL log
            approach from my{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              Claude Code cost tracking post
            </Link>{" "}
            works unchanged: each entry records the model that served the turn, so fallback turns show
            up as Opus 4.8 entries inside a Fable 5 session.
          </p>
        </section>

        <section id="task-routing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Scale" size="md" />
            Which Tasks Justify Fable 5&apos;s 2x Price
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The per-token math says 2x, but per-token math is the wrong lens. Fable 5 investigates
            before acting and verifies its own work, which means it spends more thinking tokens per
            turn but takes fewer turns and fewer tool calls on hard problems. Commenters in the{" "}
            <a
              href="https://news.ycombinator.com/item?id=48463808"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Hacker News launch thread
            </a>{" "}
            noticed the same thing: on complex tasks the per-token premium partially cancels out. On
            simple tasks it doesn&apos;t, because there&apos;s nothing to investigate.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I ran the same real task on both models during the free window: a root-cause investigation
            of a flaky OAuth refresh in one of my MCP servers, spanning four files and a misleading
            error message. Opus 4.8 needed three rounds of my steering to stop patching the symptom.
            Fable 5 found the actual race condition on its own, wrote a reproducing test first, and used
            roughly 40% fewer turns end to end. Total cost came out near parity; the difference was my
            time. Then I gave both a scoped task, adding a flag to a CLI parser, and Fable 5 was simply
            a slower, pricier Opus. That&apos;s the whole routing principle in two data points.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold">Task type</th>
                  <th className="py-3 pr-4 font-semibold">Model</th>
                  <th className="py-3 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">Root-cause debugging, outage investigation</td>
                  <td className="py-3 pr-4 font-medium text-foreground">Fable 5</td>
                  <td className="py-3">Investigates before acting; fewer wrong turns</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">Multi-file refactors, architecture decisions</td>
                  <td className="py-3 pr-4 font-medium text-foreground">Fable 5</td>
                  <td className="py-3">Holds long sessions without losing the thread</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">Long autonomous runs, tasks beyond one sitting</td>
                  <td className="py-3 pr-4 font-medium text-foreground">Fable 5</td>
                  <td className="py-3">Self-verifies; needs fewer check-ins</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">Daily feature work, code review, writing tests</td>
                  <td className="py-3 pr-4 font-medium text-foreground">Opus 4.8</td>
                  <td className="py-3">Near-Fable quality on scoped work at half price</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">Scoped bug fixes, docs, small edits</td>
                  <td className="py-3 pr-4 font-medium text-foreground">Sonnet 4.6</td>
                  <td className="py-3">Fast and cheap; the gap doesn&apos;t show here</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Security scanning in CI, offensive security</td>
                  <td className="py-3 pr-4 font-medium text-foreground">Opus 4.8</td>
                  <td className="py-3">Classifier reroutes or refuses Fable 5 anyway</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Anthropic&apos;s own guidance in the{" "}
            <a
              href="https://code.claude.com/docs/en/model-config"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              docs
            </a>{" "}
            matches this: describe the outcome rather than the steps, hand Fable 5 ambiguous problems,
            and skip the &quot;remember to test&quot; reminders because it verifies without them. Two
            interactions with other settings to keep in mind. Fable 5&apos;s default effort level is{" "}
            <code>high</code> with <code>xhigh</code> and <code>max</code> above it, and thinking cannot
            be disabled on Fable 5 at all, so budget for thinking tokens as a floor, not an option. And
            if you use{" "}
            <Link href="/blog/claude-code-dynamic-workflows-guide" className="project-link">
              dynamic workflows
            </Link>
            , remember every subagent inherits the session model by default; a 50-agent workflow on
            Fable 5 is a very different bill than the same workflow on Sonnet.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            My suggestion before June 22: pick one genuinely hard task from your backlog, run it on
            Fable 5 while it&apos;s free, and compare turns and outcome against what Opus 4.8 does on a
            similar task. That&apos;s a better basis for the routing decision than any benchmark table,
            including mine.
          </p>
        </section>

        <section id="third-party" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Cloud" size="md" />
            Fable 5 Routing on Bedrock, Vertex AI, and Foundry
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            On third-party providers, model IDs are provider-specific, so automatic classifier fallback
            only works when Claude Code can identify both ends of the handoff: the current model as
            Fable 5 and the target as an Opus model. If either can&apos;t be identified, a flagged
            request ends with a refusal and you switch manually with <code>/model</code>. The fix is two
            environment variables.
          </p>

          <CodeBlock
            language="bash"
            filename="bedrock-env.sh"
            code={`# Make automatic Fable -> Opus fallback work on Bedrock
export ANTHROPIC_DEFAULT_FABLE_MODEL='us.anthropic.claude-fable-5'
export ANTHROPIC_DEFAULT_OPUS_MODEL='us.anthropic.claude-opus-4-8'`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Enterprise teams have one more thing to weigh.{" "}
            <a
              href="https://aws.amazon.com/blogs/aws/anthropic-claude-fable-5-on-aws-mythos-class-capabilities-with-built-in-safeguards-now-available/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Fable 5 on Bedrock
            </a>{" "}
            requires sharing data with Anthropic under a 30-day retention window for Mythos-class
            models, a change that drew its own{" "}
            <a
              href="https://news.ycombinator.com/item?id=48473166"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Hacker News front-page thread
            </a>
            . Fable 5 is flatly unavailable under zero data retention. If your org runs ZDR, your
            routing decision is made for you: Opus 4.8 stays the ceiling, and honestly that&apos;s a fine
            place to be. Also note the classifier&apos;s fallback target differs by platform: Opus 4.8 on
            the Anthropic API and LLM gateways, Opus 4.7 on Claude Platform on AWS.
          </p>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="MessageCircleQuestion" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>What is the fallbackModel setting in Claude Code?</AccordionTrigger>
              <AccordionContent>
                fallbackModel, shipped in Claude Code v2.1.166, lets you chain up to three backup models
                that take over when the primary is overloaded or unavailable. Set it as an array in
                settings.json or per session with the --fallback-model flag. The switch lasts one turn,
                then Claude Code retries the primary.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>How do I switch to Fable 5 in Claude Code?</AccordionTrigger>
              <AccordionContent>
                Run /model fable inside a session, launch with claude --model fable, or set
                &quot;model&quot;: &quot;fable&quot; in settings.json. Fable 5 requires Claude Code
                v2.1.170 or later, so run claude update first. It is never the default model; you have to
                select it, and /model saves it for future sessions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>
                Why did Claude Code switch my session from Fable 5 to Opus 4.8?
              </AccordionTrigger>
              <AccordionContent>
                Fable 5 runs safety classifiers for cybersecurity and biology content. When a request is
                flagged, Claude Code re-runs it on Opus 4.8 and the session stays there until you run
                /model fable again. Workspace context like a security-focused CLAUDE.md can trigger this
                on the very first request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>
                Is Claude Fable 5 worth 2x the price of Opus 4.8 for coding?
              </AccordionTrigger>
              <AccordionContent>
                For well-scoped daily tasks, no; Opus 4.8 is close enough at half the per-token price.
                Fable 5 pays off on ambiguous, long-running work: root-cause debugging, multi-file
                refactors, and tasks bigger than one sitting, where it uses fewer turns and verifies its
                own output, narrowing the effective cost gap.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>How much does Claude Fable 5 cost?</AccordionTrigger>
              <AccordionContent>
                Fable 5 is $10 per million input tokens and $50 per million output tokens on the
                Anthropic API, exactly 2x Opus 4.8&apos;s $5/$25. On Pro, Max, and Team subscriptions it
                is included free through June 22, 2026, after which usage draws on credits. It consumes
                rate limits faster than any other model.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6">
              <AccordionTrigger>
                Can I stop Claude Code from switching models automatically?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Run /config and turn off &quot;switch models when a message is flagged&quot;. A
                flagged request then pauses the session with two choices: switch to Opus for that
                request, or edit the prompt and retry on Fable 5. Availability fallback is separate;
                remove the fallbackModel setting to disable that.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q7">
              <AccordionTrigger>How are Fable 5 fallback requests billed?</AccordionTrigger>
              <AccordionContent>
                Input tokens on a directly blocked classifier request are not billed at all. When the
                request re-runs on Opus 4.8, the fallback input tokens bill at the cache-read rate, which
                is 10% of the base input price. Claude Code applies this automatically; API users need
                the server-side-fallback beta header.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q8">
              <AccordionTrigger>Does Fable 5 automatic fallback work on Amazon Bedrock?</AccordionTrigger>
              <AccordionContent>
                Only if Claude Code can identify both models. Set ANTHROPIC_DEFAULT_FABLE_MODEL to your
                Fable 5 model ID and ANTHROPIC_DEFAULT_OPUS_MODEL to an Opus 4.8 ID. Without both, a
                flagged request ends in a refusal instead of switching. Bedrock also requires 30-day data
                retention for Mythos-class models.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA */}
        <Card className="card-accent-left">
          <CardHeader>
            <CardTitle>Keep Reading</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              This post is the sequel to my Claude Mythos preview, written back when none of us could
              touch the model. For the cost side of routing decisions, the cost tracking guide shows how
              to pull per-model spend from Claude Code&apos;s JSONL logs, and the dynamic workflows guide
              covers what happens when one session fans out to hundreds of subagents.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild>
                <Link href="/blog/claude-mythos-preview">Claude Mythos Preview</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/blog/claude-code-cost-tracking">Cost Tracking Guide</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/blog/claude-code-dynamic-workflows-guide">Dynamic Workflows Guide</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>
    </>
  )
}
