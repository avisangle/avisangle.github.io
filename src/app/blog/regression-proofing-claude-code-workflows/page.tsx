import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Regression-Proof Claude Code Workflows: Pin, Lock, Test",
  description:
    "After Anthropic's April 2026 postmortem revealed three Claude Code regressions, here is how to pin versions, lock effort levels, and add fixture tests.",
  keywords: [
    "regression-proof claude code workflows",
    "claude code version pinning",
    "claude code v2.1.117 rollback",
    "claude code effort level settings.json",
    "claude code regression protection",
    "effortLevel claude code",
    "CLAUDE_CODE_EFFORT_LEVEL",
    "availableModels claude code",
    "modelOverrides bedrock",
    "ANTHROPIC_DEFAULT_OPUS_MODEL",
    "claude code disable adaptive thinking",
    "claude code workflow stability",
    "claude code stop hook fixtures",
    "anthropic april postmortem",
    "claude code reliability",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Regression-Proof Claude Code Workflows: Pin, Lock, Test",
    description:
      "After Anthropic's April 2026 postmortem revealed three Claude Code regressions, here is how to pin versions, lock effort levels, and add fixture tests.",
    url: "https://avinashsangle.com/blog/regression-proofing-claude-code-workflows",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-04-28T00:00:00.000Z",
    modifiedTime: "2026-04-28T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-regression-proofing-claude-code-workflows.png",
        width: 1200,
        height: 630,
        alt: "Regression-proofing Claude Code workflows: pin, lock, test",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regression-Proof Claude Code Workflows: Pin, Lock, Test",
    description:
      "Pin the CLI version, lock effortLevel, allowlist models, add a stop hook, and keep a fixture suite. The practitioner playbook for the April 2026 Claude Code regressions.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-regression-proofing-claude-code-workflows.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/regression-proofing-claude-code-workflows",
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

// Static JSON-LD schemas built at compile time (trusted content, same pattern
// used across every blog post on this site).
const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Regression-Proof Claude Code Workflows: Pin, Lock, Test",
  description:
    "After Anthropic's April 2026 postmortem revealed three Claude Code regressions, here is how to pin versions, lock effort levels, and add fixture tests.",
  image: "https://avinashsangle.com/og-regression-proofing-claude-code-workflows.png",
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
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/regression-proofing-claude-code-workflows",
  },
  keywords:
    "regression-proof claude code workflows, claude code version pinning, effortLevel settings.json, modelOverrides bedrock, claude code regression protection",
  articleSection: "Claude Code",
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
      name: "Regression-Proof Claude Code Workflows",
      item: "https://avinashsangle.com/blog/regression-proofing-claude-code-workflows",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What were the three Claude Code regressions in the April 2026 postmortem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthropic's April 23, 2026 postmortem confirmed three wrapper-level changes: a default reasoning-effort downgrade (March 4 to April 7), a thinking-cache bug from the clear_thinking_20251015 header (March 26 to April 10, fixed in v2.1.101), and a system-prompt verbosity cap added April 16 and reverted April 20 in v2.1.116.",
      },
    },
    {
      "@type": "Question",
      name: "How do I pin the Claude Code CLI to a specific version?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Run npm uninstall -g @anthropic-ai/claude-code then npm install -g @anthropic-ai/claude-code@2.1.117. To stop auto-upgrades, add the line @anthropic-ai/claude-code:version=2.1.117 to your ~/.npmrc. On WSL2 the equivalent is claude install --force 2.1.117. Verify with claude --version.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between effortLevel in settings.json and CLAUDE_CODE_EFFORT_LEVEL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both pin the reasoning effort, but the environment variable takes precedence. Order is CLAUDE_CODE_EFFORT_LEVEL > effortLevel in settings.json > model default. Use effortLevel for repo or user defaults; use CLAUDE_CODE_EFFORT_LEVEL when a single shell session needs to override that, for example in CI.",
      },
    },
    {
      "@type": "Question",
      name: "How do I roll back Claude Code from v2.1.119 to v2.1.117?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "npm uninstall -g @anthropic-ai/claude-code, then npm install -g @anthropic-ai/claude-code@2.1.117. Add @anthropic-ai/claude-code:version=2.1.117 to ~/.npmrc to block auto-upgrade. Confirm with claude --version and run the status command inside Claude Code to check the active model. Then run your fixture suite to confirm behaviour.",
      },
    },
    {
      "@type": "Question",
      name: "What does availableModels do in Claude Code settings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "availableModels is an array in settings.json that restricts which models the model picker, --model flag, and ANTHROPIC_MODEL env var accept. Combine with model and the ANTHROPIC_DEFAULT_*_MODEL env vars to lock the picker's Default option as well, so a user cannot bypass your pin by selecting Default.",
      },
    },
    {
      "@type": "Question",
      name: "How do I detect a Claude Code regression in my own workflow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add a Stop hook in .claude/settings.json that runs a small Python script after every session. The script replays a few golden-output prompts, diffs against expected snippets, and posts to Slack on drift. Anthropic's own evals missed three regressions in 7 weeks, so do not rely on upstream evals.",
      },
    },
    {
      "@type": "Question",
      name: "Should I pin model versions on AWS Bedrock for Claude Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Anthropic's own model-config docs warn that without pinning, Bedrock and Vertex users see a notice and fall back to a previous version when a new model is released. Use modelOverrides in settings.json to map Anthropic IDs (claude-opus-4-7) to specific Bedrock inference-profile ARNs.",
      },
    },
    {
      "@type": "Question",
      name: "What does CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Setting CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING=1 reverts Opus 4.6 and Sonnet 4.6 to the older fixed thinking budget controlled by MAX_THINKING_TOKENS, instead of adaptive reasoning. It does not apply to Opus 4.7, which always uses adaptive reasoning. Useful as a fallback if adaptive thinking behaves erratically after an update.",
      },
    },
  ],
})

const videoObjectSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Anthropic Patched 4 Claude Code Regressions — Pin, Lock, Test",
  description:
    "How to regression-proof Claude Code: pin the CLI to v2.1.117, lock effortLevel and a model allowlist in settings.json, and add a Python stop hook with golden prompts.",
  thumbnailUrl: ["https://i.ytimg.com/vi/RmSUaclDbrM/maxresdefault.jpg"],
  uploadDate: "2026-04-28",
  duration: "PT1M1S",
  contentUrl: "https://www.youtube.com/watch?v=RmSUaclDbrM",
  embedUrl: "https://www.youtube.com/embed/RmSUaclDbrM",
  publisher: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
  },
})

export default function RegressionProofingPage() {
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
        dangerouslySetInnerHTML={{ __html: videoObjectSchema }}
      />

      <div className="container-project py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Regression-Proof Claude Code Workflows" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">Claude Code</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Regression-Proof Claude Code Workflows: Pin, Lock, Test
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Anthropic&apos;s April 23, 2026 postmortem confirmed three wrapper-level
            changes silently degraded Claude Code over seven weeks. The model never
            changed; the harness around it broke. To regression-proof your workflow
            against the next upstream surprise, pin the CLI version, lock effort with
            <code> effortLevel</code>, allowlist models, add a regression-detecting hook,
            and keep a fixture suite.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> April 28, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-04-28</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Claude Code", "DevOps", "Regression Testing", "Version Pinning", "AI Reliability"].map(
              (tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              )
            )}
          </div>
        </header>

        {/* YouTube Short — 60-second visual recap of the playbook */}
        <div className="mx-auto my-8 w-full max-w-md">
          <div className="aspect-[9/16] overflow-hidden rounded-2xl border border-border">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/RmSUaclDbrM"
              title="Anthropic Patched 4 Claude Code Regressions — Pin, Lock, Test"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

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
                  <a href="#postmortem" className="project-link">
                    What Anthropic&apos;s April 23 Postmortem Actually Said
                  </a>
                </li>
                <li>
                  <a href="#v2-1-119-incident" className="project-link">
                    The 24-Hour v2.1.119/v2.1.120 Incident
                  </a>
                </li>
                <li>
                  <a href="#pin-the-cli" className="project-link">
                    Pin the Claude Code CLI to a Known-Good Version
                  </a>
                </li>
                <li>
                  <a href="#lock-effort-level" className="project-link">
                    Lock Effort Level in settings.json
                  </a>
                </li>
                <li>
                  <a href="#allowlist-models" className="project-link">
                    Allowlist Your Model Set With availableModels and modelOverrides
                  </a>
                </li>
                <li>
                  <a href="#stop-hook" className="project-link">
                    Add a Regression-Detecting Stop Hook
                  </a>
                </li>
                <li>
                  <a href="#fixture-suite" className="project-link">
                    Keep a Tiny Fixture Suite Per Repo
                  </a>
                </li>
                <li>
                  <a href="#rollback-runbook" className="project-link">
                    The Rollback Runbook (When Something Breaks Anyway)
                  </a>
                </li>
                <li>
                  <a href="#residual-risk" className="project-link">
                    What This Approach Still Can&apos;t Fix
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
                Anthropic&apos;s April 23, 2026 postmortem confirmed three confounding
                wrapper changes degraded Claude Code over 7 weeks. The model never
                changed; the runtime around it did.
              </li>
              <li>
                Pin the CLI:{" "}
                <code>npm install -g @anthropic-ai/claude-code@2.1.117</code> plus an
                <code> ~/.npmrc</code> lock so auto-upgrade can&apos;t silently move you
                to a broken version.
              </li>
              <li>
                Lock <code>effortLevel</code> in <code>~/.claude/settings.json</code>,
                allowlist models with <code>availableModels</code>, and pin third-party
                deployments via <code>modelOverrides</code>.
              </li>
              <li>
                Run a Stop-hook canary against 3-5 fixture prompts after every session.
                Anthropic&apos;s evals missed it; yours don&apos;t have to.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1: Postmortem */}
        <section id="postmortem" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="FileSearch" size="md" />
            What Anthropic&apos;s April 23 Postmortem Actually Said
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            On April 23, 2026, Anthropic published an{" "}
            <a
              href="https://www.anthropic.com/engineering/april-23-postmortem"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              engineering postmortem
            </a>{" "}
            confirming what thousands of developers had been complaining about for weeks:
            Claude Code felt noticeably worse. The cause wasn&apos;t a model change. It
            was three separate harness-level bugs that compounded over seven weeks (March
            4 to April 20).
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The three changes Anthropic identified:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-lg leading-relaxed mb-6 pl-4">
            <li>
              <strong>Reasoning-effort downgrade.</strong> A default-effort change shipped
              March 4 and was reverted April 7. Affected Sonnet 4.6 and Opus 4.6.
            </li>
            <li>
              <strong>Thinking-cache bug.</strong> A prompt-caching optimization using the
              <code> clear_thinking_20251015</code> API header with <code>keep:1</code>
              {" "}shipped March 26 and was fixed April 10 in v2.1.101. Anthropic&apos;s
              own line: <em>&quot;Instead of clearing thinking history once, it cleared
              it on every turn for the rest of the session.&quot;</em>
            </li>
            <li>
              <strong>System-prompt verbosity cap.</strong> A &quot;Length limits: keep
              text between tool calls to ≤25 words&quot; instruction was added April 16
              and reverted April 20 in v2.1.116. Affected Sonnet 4.6, Opus 4.6, and Opus
              4.7.
            </li>
          </ol>

          <p className="text-lg leading-relaxed mb-6">
            The lived experience of the second bug is worth quoting directly. Per
            Anthropic&apos;s own writeup:{" "}
            <em>&quot;Claude would continue executing, but increasingly without memory of
            why it had chosen to do what it was doing.&quot;</em> If you ever had a
            session where Claude felt confused after a long task in late March or early
            April, that&apos;s why.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two things stand out for practitioners. First, Anthropic&apos;s internal evals
            missed all three. The postmortem cites stale-session-only reproduction,
            interference from a separate server-side message-queuing experiment,
            suppressed thinking displays masking the bug in CLI sessions, and the fact
            that the broader eval suite wasn&apos;t initially run on the system-prompt
            change. Second, Anthropic&apos;s recommended user-side mitigation was simply:{" "}
            <em>&quot;As of April 23, we&apos;re resetting usage limits for all
            subscribers.&quot;</em> That&apos;s it. No flags. No configuration. No
            version pinning advice. The rest of this post is the gap.
          </p>

          <p className="text-lg leading-relaxed">
            The model itself was fine throughout. According to one of Anthropic&apos;s
            internal evals quoted in the postmortem,{" "}
            <em>&quot;one of these evaluations showed a 3% drop for both Opus 4.6 and 4.7,
            &quot;</em> which sounds small until you remember the wrapper around the
            model is what shipped to thousands of developers nightly.
          </p>
        </section>

        {/* Section 2: 24-Hour Incident */}
        <section id="v2-1-119-incident" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="AlertTriangle" size="md" />
            The 24-Hour v2.1.119/v2.1.120 Incident
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            One day after the postmortem dropped, on April 24, Anthropic shipped v2.1.119
            and v2.1.120 within 24 hours. Together those releases triggered{" "}
            <strong>eight community-filed regressions</strong>. The community
            consensus was to roll back to v2.1.117 as the shortest path to a working
            session.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The eight bugs filed against the official repo:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Issue</th>
                  <th className="py-3 pr-4 font-semibold">Symptom</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">#53044, #53041</td>
                  <td className="py-3 pr-4">
                    <code>claude --resume</code> crashes at startup (TypeError in session
                    restoration)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">#53031</td>
                  <td className="py-3 pr-4">
                    Silent routing of <code>claude-opus-4-7</code> to the 1M-context
                    variant - changes pricing and cache behaviour
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">#53038</td>
                  <td className="py-3 pr-4">Resize-redraw UI duplication regression</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">#53028</td>
                  <td className="py-3 pr-4">Auto-update stopped working silently</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">#53035</td>
                  <td className="py-3 pr-4">
                    <code>/mcp</code> menu freezes when <code>--resume</code> is used in
                    WSL2
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">#53040</td>
                  <td className="py-3 pr-4">
                    <code>CLAUDE.md</code> ignored even below 1/3 context
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">#53012</td>
                  <td className="py-3 pr-4">
                    <code>sandbox.excludedCommands</code> doesn&apos;t release network
                    enforcement
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">#53015</td>
                  <td className="py-3 pr-4">
                    Worktree creation hangs on macOS 26.4 (<code>git merge</code> blocks
                    stdin)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            This isn&apos;t the first time. In March 2026, v2.1.89 shipped a rate-limit
            regression that consumed quotas <strong>3 to 50 times faster</strong> than
            usual. Teams without version pinning got blindsided overnight; the only fix
            was a rollback they hadn&apos;t prepared for.
          </p>

          <p className="text-lg leading-relaxed">
            The pattern is consistent. Ship dates aren&apos;t stability dates. The
            community has filed an open feature request,{" "}
            <a
              href="https://github.com/anthropics/claude-code/issues/22106"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              issue #22106
            </a>
            , asking for first-party version-management tooling and auto-rollback alerts.
            Until that lands, the workflow is yours to build.
          </p>
        </section>

        {/* Section 3: Pin CLI */}
        <section id="pin-the-cli" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Lock" size="md" />
            Pin the Claude Code CLI to a Known-Good Version
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The first defense is the cheapest. Treat <code>@anthropic-ai/claude-code</code>
            {" "}like any other dependency: pin it to a version you&apos;ve actually
            validated, and stop auto-upgrade from changing that on you between coffee
            and lunch.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            As of late April 2026, the community-validated &quot;known-good&quot; version
            is <strong>v2.1.117</strong>, which is the build immediately before the
            v2.1.119/v2.1.120 fiasco.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Roll back / pin to v2.1.117
npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code@2.1.117

# Confirm what's actually loaded
claude --version`}
          />

          <p className="text-lg leading-relaxed my-6">
            That installs the version, but npm will happily upgrade you on the next
            global update unless you tell it not to. Add an explicit version pin to your
            user-level npm config:
          </p>

          <CodeBlock
            language="ini"
            filename="~/.npmrc"
            code={`@anthropic-ai/claude-code:version=2.1.117`}
          />

          <p className="text-lg leading-relaxed my-6">
            On WSL2 or other non-npm distributions, the CLI ships with its own installer.
            The equivalent rollback command per the community gist is:
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`claude install --force 2.1.117`}
          />

          <p className="text-lg leading-relaxed my-6">
            Once you&apos;re pinned, treat upgrades like any other dependency bump. Watch
            the{" "}
            <a
              href="https://github.com/anthropics/claude-code/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              releases page
            </a>{" "}
            and the active issues list for at least 48 hours after a new minor version
            ships before adopting it. If your team lives in CI, drop the same pin into
            your onboarding script and your devcontainer image so every contributor lands
            on the same byte-identical CLI.
          </p>

          <p className="text-lg leading-relaxed">
            Two sanity checks I run after every install. First, <code>claude --version</code>
            {" "}confirms the binary. Second, inside Claude Code I run <code>/status</code>
            {" "}to confirm the active model and effort level, which is where the next
            defense lives.
          </p>
        </section>

        {/* Section 4: Lock Effort Level */}
        <section id="lock-effort-level" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Sliders" size="md" />
            Lock Effort Level in settings.json
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The reasoning-effort downgrade in March was invisible to most users because
            most users never set <code>effortLevel</code> explicitly. They got the
            silently lowered default and felt their tasks getting dumber without knowing
            why. The fix is to stop trusting defaults.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Per Anthropic&apos;s{" "}
            <a
              href="https://code.claude.com/docs/en/model-config"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              model-config docs
            </a>
            , effort levels are scoped per model:
          </p>

          <ul className="skill-list mb-6">
            <li>
              <strong>Opus 4.7:</strong> <code>low</code>, <code>medium</code>,{" "}
              <code>high</code>, <code>xhigh</code>, <code>max</code>
            </li>
            <li>
              <strong>Opus 4.6 and Sonnet 4.6:</strong> <code>low</code>,{" "}
              <code>medium</code>, <code>high</code>, <code>max</code>
            </li>
            <li>
              As of v2.1.117, the default effort is <code>xhigh</code> on Opus 4.7 and{" "}
              <code>high</code> on Opus 4.6 and Sonnet 4.6. Pin it explicitly anyway.
            </li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            The verified syntax is plain JSON in your user-level Claude Code config:
          </p>

          <CodeBlock
            language="json"
            filename="~/.claude/settings.json"
            code={`{
  "model": "claude-opus-4-7",
  "effortLevel": "xhigh"
}`}
          />

          <p className="text-lg leading-relaxed my-6">
            Precedence matters when something needs to override. Anthropic&apos;s docs
            spell it out:{" "}
            <em>&quot;The environment variable takes precedence over all other methods,
            then your configured level, then the model default.&quot;</em> So a CI job
            can do this without touching the file:
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Force a one-off session at low effort (e.g., a fast lint job)
CLAUDE_CODE_EFFORT_LEVEL=low claude --print "review this diff"

# Or set it once for the shell
export CLAUDE_CODE_EFFORT_LEVEL=high`}
          />

          <p className="text-lg leading-relaxed my-6">
            For teams, ship <code>effortLevel</code> in managed or policy settings so
            developers can&apos;t drift below the floor. If adaptive reasoning misbehaves
            after an update on Opus 4.6 or Sonnet 4.6, there&apos;s a fallback flag worth
            knowing:
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Revert Opus 4.6 / Sonnet 4.6 to the older fixed thinking budget
# (Does NOT apply to Opus 4.7, which always uses adaptive reasoning.)
export CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING=1

# Pair with an explicit max thinking token count
export MAX_THINKING_TOKENS=20000`}
          />

          <p className="text-lg leading-relaxed">
            I keep <code>effortLevel</code> set in my user settings and refuse to rely on
            the picker&apos;s &quot;auto&quot; option. If the next regression is another
            silent default change, my workflow is unaffected. The same{" "}
            <code>~/.claude/settings.json</code> I use for{" "}
            <Link href="/blog/claude-md-guide" className="project-link">
              CLAUDE.md scoping and hooks
            </Link>{" "}
            holds this.
          </p>
        </section>

        {/* Section 5: Allowlist Models */}
        <section id="allowlist-models" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldCheck" size="md" />
            Allowlist Your Model Set With availableModels and modelOverrides
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The aliases <code>opus</code>, <code>sonnet</code>, and <code>haiku</code>
            {" "}resolve to &quot;the recommended model for your account type.&quot; The
            problem is that &quot;recommended&quot; can change without you noticing.
            Issue #53031 from the v2.1.119 incident was exactly this: Claude Code started
            silently routing <code>claude-opus-4-7</code> to its 1M-context variant,
            which changed both the price and the cache hit rate without a config change
            on the user&apos;s end.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            For direct-API users, the four-line fix:
          </p>

          <CodeBlock
            language="json"
            filename="~/.claude/settings.json"
            code={`{
  "model": "claude-opus-4-7",
  "availableModels": ["claude-opus-4-7", "claude-sonnet-4-6", "haiku"],
  "effortLevel": "xhigh",
  "env": {
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "claude-opus-4-7",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-6"
  }
}`}
          />

          <p className="text-lg leading-relaxed my-6">
            Three things working together. <code>model</code> sets the initial selection.
            {" "}<code>availableModels</code> stops the picker, <code>--model</code> flag,
            and <code>ANTHROPIC_MODEL</code> env var from accepting anything outside the
            list. The <code>env</code> block matters most: without it, a user who picks
            &quot;Default&quot; in the picker bypasses your <code>model</code> pin and
            gets whatever Anthropic&apos;s upstream default resolves to that day.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            On AWS Bedrock, Google Vertex AI, or Azure Foundry, you need one more layer.
            Anthropic&apos;s docs explicitly warn:{" "}
            <em>&quot;Without pinning, Claude Code uses model aliases that resolve to the
            latest version. When Anthropic releases a new model that isn&apos;t yet
            enabled in a user&apos;s account, Bedrock and Vertex AI users see a notice
            and fall back to the previous version for that session, while Foundry users
            see errors.&quot;</em> The April 2026 <code>modelOverrides</code> map is the
            answer:
          </p>

          <CodeBlock
            language="json"
            filename="~/.claude/settings.json"
            code={`{
  "model": "claude-opus-4-7",
  "availableModels": ["claude-opus-4-7", "claude-sonnet-4-6"],
  "modelOverrides": {
    "claude-opus-4-7": "arn:aws:bedrock:us-east-2:123456789012:application-inference-profile/opus-prod",
    "claude-sonnet-4-6": "arn:aws:bedrock:us-east-2:123456789012:application-inference-profile/sonnet-prod"
  }
}`}
          />

          <p className="text-lg leading-relaxed my-6">
            <code>modelOverrides</code> maps each Anthropic model ID to the
            provider-specific string Claude Code sends to Bedrock or Vertex. When a user
            picks &quot;Opus 4.7&quot; in the <code>/model</code> picker, Claude Code
            substitutes the ARN before calling out. New Anthropic releases don&apos;t
            change behaviour until you update this map.
          </p>

          <p className="text-lg leading-relaxed">
            This is the same allowlist-first philosophy I covered for tools in{" "}
            <Link
              href="/blog/hardening-ai-agents-cicd-prompt-injection"
              className="project-link"
            >
              Hardening Claude Code GitHub Actions
            </Link>
            . Allowlists win because the failure mode of an unknown new entry is
            &quot;blocked&quot; rather than &quot;automatically applied.&quot;
          </p>
        </section>

        {/* Section 6: Stop Hook */}
        <section id="stop-hook" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Bell" size="md" />
            Add a Regression-Detecting Stop Hook
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Anthropic&apos;s evals missed three regressions in seven weeks. Reading their
            status page won&apos;t catch the next one either. The right defense is your
            own canary: a small script that runs after every Claude Code session, replays
            a few golden-output prompts against fresh sessions, and pings you when the
            output drifts.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Wire it through the <code>Stop</code> hook in <code>.claude/settings.json</code>:
          </p>

          <CodeBlock
            language="json"
            filename=".claude/settings.json"
            code={`{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "python .claude/hooks/check-regression.py"
          }
        ]
      }
    ]
  }
}`}
          />

          <p className="text-lg leading-relaxed my-6">
            The hook script reads each fixture, runs an ephemeral Claude session against
            it, and diffs the output against the saved expectation. Drift triggers a
            webhook to Slack or Discord. Keep it dumb and short:
          </p>

          <CodeBlock
            language="python"
            filename=".claude/hooks/check-regression.py"
            code={`#!/usr/bin/env python3
"""Stop-hook canary: replay fixtures and alert on drift."""
import json
import os
import re
import subprocess
import sys
import urllib.request
from pathlib import Path

FIXTURES = Path(".claude/hooks/fixtures")
WEBHOOK = os.environ.get("REGRESSION_WEBHOOK_URL")
DRIFT_THRESHOLD = 0.30  # 30% token delta or missing required substring

def post_alert(message):
    if not WEBHOOK:
        print(f"[regression] {message}", file=sys.stderr)
        return
    data = json.dumps({"text": f":rotating_light: {message}"}).encode()
    req = urllib.request.Request(WEBHOOK, data=data, headers={"Content-Type": "application/json"})
    urllib.request.urlopen(req, timeout=5)

def run_fixture(prompt_file, expect_file):
    prompt = prompt_file.read_text()
    expected = expect_file.read_text().strip()
    result = subprocess.run(
        ["claude", "--print", prompt],
        capture_output=True, text=True, timeout=300,
    )
    output = result.stdout
    if expected not in output:
        post_alert(f"Fixture {prompt_file.name} drift: expected substring missing.")
        return False
    expected_tokens = len(re.findall(r"\\w+", expected))
    actual_tokens = len(re.findall(r"\\w+", output))
    if expected_tokens and abs(actual_tokens - expected_tokens) / expected_tokens > DRIFT_THRESHOLD:
        post_alert(
            f"Fixture {prompt_file.name} token delta {actual_tokens - expected_tokens} "
            f"vs expected {expected_tokens} ({DRIFT_THRESHOLD * 100:.0f}% threshold)."
        )
        return False
    return True

if __name__ == "__main__":
    pairs = sorted(FIXTURES.glob("*.prompt.md"))
    failures = []
    for prompt_file in pairs:
        expect_file = prompt_file.with_suffix("").with_suffix(".expect.md")
        if not expect_file.exists():
            continue
        if not run_fixture(prompt_file, expect_file):
            failures.append(prompt_file.name)
    sys.exit(0 if not failures else 1)`}
          />

          <p className="text-lg leading-relaxed my-6">
            Two design notes. First, this runs <em>after</em> the user&apos;s real
            session, so it doesn&apos;t add latency to interactive work. Second, it uses{" "}
            <code>claude --print</code> for non-interactive replays, which is the right
            primitive for fixture testing. The full token accounting that powers the
            drift detector is the same JSONL stream I covered in{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              Claude Code Cost Tracking
            </Link>
            ; you can extend this script to read those logs for a more precise per-task
            budget signal.
          </p>

          <p className="text-lg leading-relaxed">
            The webhook target is yours to pick. I use a Slack channel called{" "}
            <code>#claude-regressions</code> with two people on watch. The point is the
            alert fires before you waste a workday wondering if your skills got worse.
          </p>
        </section>

        {/* Section 7: Fixtures */}
        <section id="fixture-suite" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="FileCheck" size="md" />
            Keep a Tiny Fixture Suite Per Repo
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The hook is only as useful as the fixtures it runs. You don&apos;t need a
            full eval harness; three to five carefully chosen prompts cover the failure
            modes the postmortem revealed. Each fixture is two files: a prompt and an
            expected substring or short output snippet.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Here&apos;s the layout I use:
          </p>

          <CodeBlock
            language="text"
            filename=".claude/hooks/fixtures/"
            code={`refactor.prompt.md
refactor.expect.md
test-gen.prompt.md
test-gen.expect.md
plan-mode.prompt.md
plan-mode.expect.md
long-horizon.prompt.md
long-horizon.expect.md`}
          />

          <p className="text-lg leading-relaxed my-6">
            What each fixture catches:
          </p>

          <ul className="skill-list mb-6">
            <li>
              <strong>Refactor fixture.</strong> &quot;Rename function <code>oldName</code>
              {" "}to <code>newName</code> across this 12-file module.&quot; Catches
              edit-tool regressions like the v2.1.119 ignored-CLAUDE.md bug.
            </li>
            <li>
              <strong>Test-generation fixture.</strong> &quot;Write tests for{" "}
              <code>utils/parse.ts</code>.&quot; Expected output names a known-correct
              edge case. Catches reasoning-effort downgrades where Claude stops covering
              edge cases.
            </li>
            <li>
              <strong>Plan-mode fixture.</strong> A multi-step planning prompt with a
              checkpoint phrase that should appear in the plan. Catches output-cap bugs
              like the &quot;≤25 words&quot; system-prompt change.
            </li>
            <li>
              <strong>Long-horizon fixture.</strong> A 1500-token CLAUDE.md plus a
              multi-step task. Tests directly for the postmortem&apos;s memory-loss
              symptom: Claude continuing to act without remembering why.
            </li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            A real refactor fixture pair looks like this:
          </p>

          <CodeBlock
            language="markdown"
            filename=".claude/hooks/fixtures/refactor.prompt.md"
            code={`Rename the function \`computeTotal\` to \`calculateTotal\` across the
\`src/billing/\` directory. List every file changed in your final response.
Do not edit tests in \`tests/snapshots/\`.`}
          />

          <CodeBlock
            language="text"
            filename=".claude/hooks/fixtures/refactor.expect.md"
            code={`src/billing/cart.ts
src/billing/checkout.ts
src/billing/invoice.ts`}
          />

          <p className="text-lg leading-relaxed my-6">
            Commit these to the repo. They&apos;re self-documenting, run in under a
            minute total, and give you a 60-second binary check the next time someone
            says &quot;Claude feels weird today.&quot; The whole apparatus is your own
            eval, independent of Anthropic&apos;s.
          </p>

          <p className="text-lg leading-relaxed">
            Re-record the expected outputs every time you intentionally bump the pinned
            version. That&apos;s your signal that the new version actually behaves the
            way you want, not just the way the changelog claims.
          </p>
        </section>

        {/* Section 8: Rollback Runbook */}
        <section id="rollback-runbook" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="RotateCcw" size="md" />
            The Rollback Runbook (When Something Breaks Anyway)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Even pinned, you eventually upgrade. And eventually one of those upgrades
            misbehaves. Keep a five-step playbook ready so the morning you notice
            something off doesn&apos;t become a half-day of debugging.
          </p>

          <ol className="list-decimal list-inside space-y-4 text-lg leading-relaxed mb-6 pl-4">
            <li>
              <strong>Confirm what&apos;s actually running.</strong> Run{" "}
              <code>claude --version</code>. Inside Claude Code, run <code>/status</code>
              {" "}and check the &quot;effective model&quot; field. v2.1.119&apos;s
              silent-1M-swap (#53031) only showed there.
            </li>
            <li>
              <strong>Cross-check upstream signal.</strong> Open the{" "}
              <a
                href="https://github.com/anthropics/claude-code/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                releases page
              </a>{" "}
              and the active issues list filtered by the version you&apos;re on. If
              someone else has filed your symptom in the last 24 hours, you&apos;re not
              imagining it.
            </li>
            <li>
              <strong>Roll back and lock.</strong>
              <CodeBlock
                language="bash"
                filename="terminal"
                code={`npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code@2.1.117
echo "@anthropic-ai/claude-code:version=2.1.117" >> ~/.npmrc`}
              />
            </li>
            <li>
              <strong>Run your fixture suite.</strong> The same canary script confirms
              the rollback restored expected behaviour. If a fixture still fails, the
              issue isn&apos;t the version - check your <code>settings.json</code> next.
            </li>
            <li>
              <strong>File a regression issue.</strong> Open an issue against{" "}
              <code>anthropics/claude-code</code> with your fixture diff and reproducer.
              Subscribe to{" "}
              <a
                href="https://github.com/anthropics/claude-code/issues/22106"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                issue #22106
              </a>
              {" "}for the auto-rollback alert feature, so you&apos;ll get pinged when
              first-party tooling exists.
            </li>
          </ol>

          <p className="text-lg leading-relaxed">
            Total time from &quot;something feels wrong&quot; to &quot;back to a known
            state&quot;: under five minutes if you have the playbook bookmarked. Without
            it: anywhere between hours and a day, depending on how many tasks you finish
            before noticing the wheels are off.
          </p>
        </section>

        {/* Section 9: Residual */}
        <section id="residual-risk" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="AlertCircle" size="md" />
            What This Approach Still Can&apos;t Fix
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Honesty section. Pinning the CLI and locking effort fixes a class of
            problems, not all of them. Three you should plan for separately.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>API-side regressions still bite.</strong> The thinking-cache bug from
            the postmortem was server-side: the wrong API header behaviour. Pinning your
            CLI gives you nothing against changes to the inference layer. If you need
            full control there, evaluate{" "}
            <Link href="/blog/claude-managed-agents" className="project-link">
              Claude Managed Agents
            </Link>
            {" "}or self-host through Bedrock with strict provisioned-throughput SLAs.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Subscription policy changes are out of scope.</strong> The April 23
            postmortem ended with a usage-limit reset for all subscribers. That&apos;s a
            commercial change, not a wrapper change. No version pin will block the next
            one. Watch the Anthropic status page and your billing email.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Pinned versions go stale.</strong> Eventually v2.1.117 will lack a
            feature you actually want. The playbook isn&apos;t to pin forever; it&apos;s
            to schedule the upgrade on your terms, run the fixture suite against the new
            version, and re-record expected outputs once you confirm behaviour matches
            the changelog. That puts you in control of the timing.
          </p>

          <p className="text-lg leading-relaxed">
            Regression-proofing isn&apos;t permanence. It&apos;s reducing how often the
            wrapper around the model surprises you, and giving you a 60-second binary
            check when it does. That&apos;s good enough.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="three-regressions">
              <AccordionTrigger>
                What were the three Claude Code regressions in the April 2026 postmortem?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Anthropic&apos;s April 23, 2026 postmortem confirmed three wrapper-level
                  changes: a default reasoning-effort downgrade (March 4 to April 7), a
                  thinking-cache bug from the <code>clear_thinking_20251015</code> header
                  (March 26 to April 10, fixed in v2.1.101), and a system-prompt
                  verbosity cap added April 16 and reverted April 20 in v2.1.116.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pin-cli">
              <AccordionTrigger>
                How do I pin the Claude Code CLI to a specific version?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Run <code>npm uninstall -g @anthropic-ai/claude-code</code> then{" "}
                  <code>npm install -g @anthropic-ai/claude-code@2.1.117</code>. To stop
                  auto-upgrades, add the line{" "}
                  <code>@anthropic-ai/claude-code:version=2.1.117</code> to your{" "}
                  <code>~/.npmrc</code>. On WSL2 the equivalent is{" "}
                  <code>claude install --force 2.1.117</code>. Verify with{" "}
                  <code>claude --version</code>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="effort-precedence">
              <AccordionTrigger>
                What is the difference between effortLevel in settings.json and CLAUDE_CODE_EFFORT_LEVEL?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Both pin the reasoning effort, but the environment variable takes
                  precedence. Order is{" "}
                  <code>CLAUDE_CODE_EFFORT_LEVEL</code> &gt; <code>effortLevel</code> in{" "}
                  settings.json &gt; model default. Use <code>effortLevel</code> for repo
                  or user defaults; use <code>CLAUDE_CODE_EFFORT_LEVEL</code> when a
                  single shell session needs to override that, for example in CI.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rollback-v2117">
              <AccordionTrigger>
                How do I roll back Claude Code from v2.1.119 to v2.1.117?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Run <code>npm uninstall -g @anthropic-ai/claude-code</code>, then{" "}
                  <code>npm install -g @anthropic-ai/claude-code@2.1.117</code>. Add{" "}
                  <code>@anthropic-ai/claude-code:version=2.1.117</code> to{" "}
                  <code>~/.npmrc</code> to block auto-upgrade. Confirm with{" "}
                  <code>claude --version</code> and run <code>/status</code> inside
                  Claude Code to check the active model. Then run your fixture suite to
                  confirm behaviour.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="available-models">
              <AccordionTrigger>
                What does availableModels do in Claude Code settings?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  <code>availableModels</code> is an array in <code>settings.json</code>
                  {" "}that restricts which models the <code>/model</code> picker,{" "}
                  <code>--model</code> flag, and <code>ANTHROPIC_MODEL</code> env var
                  accept. Combine with <code>model</code> and the{" "}
                  <code>ANTHROPIC_DEFAULT_*_MODEL</code> env vars to lock the
                  picker&apos;s Default option as well, so a user cannot bypass your pin
                  by selecting Default.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="detect-regression">
              <AccordionTrigger>
                How do I detect a Claude Code regression in my own workflow?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Add a <code>Stop</code> hook in <code>.claude/settings.json</code> that
                  runs a small Python script after every session. The script replays a
                  few golden-output prompts, diffs against expected snippets, and posts
                  to Slack on drift. Anthropic&apos;s own evals missed three regressions
                  in 7 weeks, so do not rely on upstream evals.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bedrock-pinning">
              <AccordionTrigger>
                Should I pin model versions on AWS Bedrock for Claude Code?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. Anthropic&apos;s own model-config docs warn that without pinning,
                  Bedrock and Vertex users see a notice and fall back to a previous
                  version when a new model is released. Use <code>modelOverrides</code>
                  {" "}in <code>settings.json</code> to map Anthropic IDs (
                  <code>claude-opus-4-7</code>) to specific Bedrock inference-profile
                  ARNs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="disable-adaptive-thinking">
              <AccordionTrigger>
                What does CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING do?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Setting <code>CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING=1</code> reverts
                  Opus 4.6 and Sonnet 4.6 to the older fixed thinking budget controlled
                  by <code>MAX_THINKING_TOKENS</code>, instead of adaptive reasoning. It
                  does not apply to Opus 4.7, which always uses adaptive reasoning.
                  Useful as a fallback if adaptive thinking behaves erratically after an
                  update.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Related Articles / CTA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="ShieldAlert" size="md" />
                <CardTitle>Harden Claude Code GitHub Actions: Prompt Injection Defense</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The same allowlist-first philosophy applied to tools and triggers in
                  CI. Tool allowlists, OIDC, script caps, and the assembled hardened
                  workflow.
                </p>
                <Link
                  href="/blog/hardening-ai-agents-cicd-prompt-injection"
                  className="project-link"
                >
                  Read the guide
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="DollarSign" size="md" />
                <CardTitle>Claude Code Cost Tracking: Monitor and Cut Your Spending</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The JSONL log pipeline that powers per-task token tracking. Pair it
                  with the regression hook in this post for a token-spike detector.
                </p>
                <Link href="/blog/claude-code-cost-tracking" className="project-link">
                  Read the guide
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
