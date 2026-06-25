import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Claude Tag Setup for Engineering Teams",
  description:
    "Set up Claude Tag, Anthropic's AI Slack teammate, for your engineering team: connect tools and MCP servers, scope channel access, use ambient mode, cap costs.",
  keywords: [
    "Claude Tag",
    "Claude Tag setup",
    "Claude Tag engineering teams",
    "Claude Tag Slack",
    "Claude Tag MCP servers",
    "Claude Tag ambient mode",
    "Claude AI teammate Slack",
    "Claude Tag vs Claude in Slack",
    "Claude Tag token spend limits",
    "Claude Tag vs Microsoft Copilot Teams",
    "Anthropic Claude Tag",
    "Claude in Slack engineering",
    "Claude Tag admin settings",
    "Claude Tag channel access",
    "Claude Tag cost control",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Claude Tag for Engineering Teams: A Practical Setup Guide",
    description:
      "Set up Claude Tag, Anthropic's AI Slack teammate, for your engineering team: connect tools and MCP servers, scope channel access, use ambient mode, cap costs.",
    url: "https://avinashsangle.com/blog/claude-tag-engineering-teams-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-06-25T00:00:00.000Z",
    modifiedTime: "2026-06-25T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-claude-tag-engineering-teams-guide.png",
        width: 1200,
        height: 630,
        alt: "Claude Tag for Engineering Teams Setup Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Tag for Engineering Teams: A Practical Setup Guide",
    description:
      "Set up Claude Tag, Anthropic's AI Slack teammate, for engineering: connect MCP tools, scope channel access, use ambient mode, and cap token costs.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-claude-tag-engineering-teams-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/claude-tag-engineering-teams-guide",
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

export default function ClaudeTagEngineeringTeamsGuidePage() {
  return (
    <>
      {/* TechArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Claude Tag for Engineering Teams: A Practical Setup Guide",
            description:
              "Set up Claude Tag, Anthropic's AI Slack teammate, for your engineering team: connect tools and MCP servers, scope channel access, use ambient mode, cap costs.",
            image: "https://avinashsangle.com/og-claude-tag-engineering-teams-guide.png",
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
                "Claude Tag",
                "Claude Code",
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
            datePublished: "2026-06-25",
            dateModified: "2026-06-25",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://avinashsangle.com/blog/claude-tag-engineering-teams-guide",
            },
            keywords:
              "Claude Tag, Claude Tag setup, Claude Tag engineering teams, Claude Tag MCP servers, Claude Tag ambient mode, Claude AI teammate Slack",
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
                name: "Claude Tag for Engineering Teams",
                item: "https://avinashsangle.com/blog/claude-tag-engineering-teams-guide",
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
            name: "How to Set Up Claude Tag for an Engineering Team",
            description:
              "Provision Claude Tag as a shared Slack teammate for engineering: create its identity, attach an access bundle, scope it to channels, and test it.",
            totalTime: "PT30M",
            tool: [
              { "@type": "HowToTool", name: "Claude Enterprise or Team plan (Owner role)" },
              { "@type": "HowToTool", name: "Slack workspace with the Claude app installed" },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Create the Claude Tag identity",
                text: "An Owner opens claude.ai/admin-settings/claude-tag and provisions a shared @Claude identity for the organization.",
                url: "https://avinashsangle.com/blog/claude-tag-engineering-teams-guide#setup",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Attach an access bundle",
                text: "Attach credentials, repositories, and tool connections as an access bundle, scoped to a channel, workspace, or the whole organization.",
                url: "https://avinashsangle.com/blog/claude-tag-engineering-teams-guide#setup",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Scope it to engineering channels",
                text: "Invite Claude into specific channels with /invite @Claude so access follows the channel, not the individual user.",
                url: "https://avinashsangle.com/blog/claude-tag-engineering-teams-guide#setup",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Set a spend cap and test",
                text: "Set a hard token spend cap, then test in a private channel by tagging @Claude with a small delegated task before rolling it out.",
                url: "https://avinashsangle.com/blog/claude-tag-engineering-teams-guide#setup",
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
                name: "What is Claude Tag and how is it different from the old Claude Slack app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Claude Tag is Anthropic's persistent AI teammate in Slack, launched June 23, 2026. Unlike the old request-response Claude Slack app, it runs as one shared @Claude identity per channel with admin-configured access, persistent channel-scoped memory, and an ambient mode. It runs on Opus 4.8 under the same Slack app, so there is nothing to reinstall.",
                },
              },
              {
                "@type": "Question",
                name: "Which plans include Claude Tag?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Claude Tag is in beta for Claude Enterprise and Claude Team customers on Slack. An organization Owner provisions it from claude.ai/admin-settings/claude-tag. Anthropic is offering an introductory usage credit through September 1, 2026 for eligible organizations to test it before the consumption-based billing applies in full.",
                },
              },
              {
                "@type": "Question",
                name: "How do I connect Claude Tag to GitHub, Sentry, or other developer tools?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Admins attach credentials, repositories, and tool connections as an access bundle, scoped per channel. Claude Code's MCP ecosystem covers 300+ integrations including GitHub, Sentry, and Linear, plus custom internal servers. Keep each channel's bundle minimal so an incident channel cannot reach a planning channel's tools.",
                },
              },
              {
                "@type": "Question",
                name: "What is ambient mode in Claude Tag, and is it safe to enable?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ambient mode lets Claude proactively monitor a channel and surface information it thinks the team needs, without being tagged. It reads channel messages to do this, so enable it on ops and incident channels where that helps, and keep it off on channels that mix customer data, secrets, or sensitive threads.",
                },
              },
              {
                "@type": "Question",
                name: "How do I control Claude Tag's token costs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Billing is consumption-based, metered as model usage. An Owner sets a hard spend cap on Claude's draw from the organization's usage balance, and can review per-channel consumption at claude.ai/admin-settings/usage/claude-in-slack. Start low, watch the per-channel breakdown, and raise caps only where the value is proven.",
                },
              },
              {
                "@type": "Question",
                name: "Can I limit which channels and data Claude Tag can access?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Access follows the channel, not the user, and individual users cannot override it. Admins create separate Claude identities for different uses, so an engineering setup will not pass memory or tools to a sales one. Claude only responds where it has been invited with /invite @Claude.",
                },
              },
              {
                "@type": "Question",
                name: "Does Claude Tag replace running Claude Code in the terminal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Claude Tag is the async coordination layer in Slack, where you delegate a task and get a pull request or summary back. Terminal Claude Code remains the deep-work layer for real-time, interactive sessions. Most teams use both: Slack for hand-offs and incidents, the terminal for focused building.",
                },
              },
              {
                "@type": "Question",
                name: "How does Claude Tag compare to Microsoft Copilot in Teams?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Both make team chat the control surface for an AI agent. Claude Tag lives in Slack, participates in Git workflows, and proposes changes as pull requests through Claude Code. Copilot in Teams centers on the GitHub platform with Actions and org policy. Pick the one that matches where your engineers already work.",
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
            { label: "Claude Tag for Engineering Teams" },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="section">
        <div className="container-project">
          <div>
            <p className="text-accent font-semibold mb-4">CLAUDE CODE</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Claude Tag for Engineering Teams: A Practical Setup Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Claude Tag is Anthropic&apos;s persistent AI teammate inside Slack. You tag it, hand off a
              task, and it works asynchronously across a channel&apos;s shared context using the tools an
              admin connected. This guide is the part the launch coverage skipped: wiring it into an
              engineering team without leaking data or blowing the budget.
            </p>
            <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-8">
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Calendar" size="sm" /> June 25, 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Clock" size="sm" /> 11 min read
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Tag" size="sm" /> Claude Tag, Slack, MCP
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="section-alt py-8">
        <div className="container-project">
          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Zap" size="sm" /> TL;DR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li>
                  <strong>What it is:</strong> Claude Tag, launched June 23, 2026, is a shared{" "}
                  <code className="bg-muted px-1 rounded">@Claude</code> teammate in Slack that runs on
                  Opus 4.8. It replaces the old Claude in Slack app under the same Slack app, so there is
                  nothing to reinstall.
                </li>
                <li>
                  <strong>Setup is admin-led:</strong> an organization Owner provisions it at{" "}
                  <code className="bg-muted px-1 rounded">claude.ai/admin-settings/claude-tag</code> in
                  four steps - create the identity, attach an access bundle, scope it to channels, then
                  test.
                </li>
                <li>
                  <strong>Two decisions matter most:</strong> which tools each channel&apos;s access
                  bundle includes, and whether ambient mode is on. Access follows the channel, not the
                  user.
                </li>
                <li>
                  <strong>Cost is governed, not guessed:</strong> billing is consumption-based, and an
                  Owner sets a hard spend cap with a per-channel breakdown. Anthropic is giving a usage
                  credit through September 1, 2026.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section py-8">
        <div className="container-project">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="List" size="sm" /> Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-6 space-y-2">
                <li>
                  <Link href="#what-is" className="text-accent hover:underline">
                    What Is Claude Tag? (How It Differs from Claude in Slack)
                  </Link>
                </li>
                <li>
                  <Link href="#setup" className="text-accent hover:underline">
                    How to Set Up Claude Tag for an Engineering Team
                  </Link>
                </li>
                <li>
                  <Link href="#mcp" className="text-accent hover:underline">
                    Connecting Claude Tag to Developer Tools and MCP Servers
                  </Link>
                </li>
                <li>
                  <Link href="#ambient" className="text-accent hover:underline">
                    Ambient Mode: What It Reads and When to Enable It
                  </Link>
                </li>
                <li>
                  <Link href="#costs" className="text-accent hover:underline">
                    Controlling Claude Tag&apos;s Token Costs
                  </Link>
                </li>
                <li>
                  <Link href="#compare" className="text-accent hover:underline">
                    Claude Tag vs Copilot in Teams vs Terminal Claude Code
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-accent hover:underline">
                    Frequently Asked Questions
                  </Link>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 1 */}
      <section id="what-is" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            What Is Claude Tag? (How It Differs from Claude in Slack)
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            <strong>Claude Tag</strong> is a persistent AI teammate that lives in your Slack channels.
            You tag it with <code className="bg-muted px-1 rounded">@Claude</code>, describe a task in
            plain language, and it breaks the work into stages, runs through them using the tools it
            has access to, and posts the result back in the thread. Anthropic announced it on June 23,
            2026 (
            <Link
              href="https://www.anthropic.com/news/introducing-claude-tag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Introducing Claude Tag
            </Link>
            ), and it runs on Opus 4.8.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The old Claude in Slack app was a per-user assistant. You mentioned it, it answered you, and
            the context died with the thread. Claude Tag is a different shape. There is one shared{" "}
            <code className="bg-muted px-1 rounded">@Claude</code> identity per channel that every member
            can see and pick up from where the last person left off. It builds memory from channel
            history and connected data sources, so the team stops re-explaining the same context. With
            ambient mode on, it can act without being tagged. And it works asynchronously, scheduling
            tasks for itself and pursuing a project over hours or days.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The numbers Anthropic shared make the intent clear: 65% of its own product team&apos;s code
            is now created by their internal version of Claude Tag (
            <Link
              href="https://www.anthropic.com/news/introducing-claude-tag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Anthropic, 2026
            </Link>
            ). The transition is friction-free on the install side. The same Slack app powers it, so
            existing setups keep working while you switch a workspace over (
            <Link
              href="https://code.claude.com/docs/en/slack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Claude Code in Slack docs
            </Link>
            ).
          </p>
          <Card className="card-accent-left mb-6">
            <CardContent className="pt-6">
              <p className="leading-relaxed">
                <strong>The mental model that helped me:</strong> the old app was a tool you called.
                Claude Tag is a teammate you onboard. That single shift is why the setup work is about
                access scoping and cost limits, not installation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2 */}
      <section id="setup" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            How to Set Up Claude Tag for an Engineering Team
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Setup is admin-led, not self-serve. An organization Owner provisions Claude Tag from{" "}
            <code className="bg-muted px-1 rounded">claude.ai/admin-settings/claude-tag</code> on a
            Claude Enterprise or Team plan, then scopes it channel by channel. The flow has four
            provisioning steps: create the identity, attach an access bundle of credentials and repos,
            choose which channels and workspaces it applies to, and test it. This is the documented
            order in Anthropic&apos;s admin settings.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The one detail that changes how you think about security: access follows the channel, not
            the user. Admins configure credentials per scope - a channel, a workspace, or the whole
            organization - and individual users cannot override what a channel is allowed to do. So the
            unit of permission is the channel, and your job is to keep each channel&apos;s bundle as
            small as the work demands.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            For an engineering rollout, I would not start broad. Spin up a single private channel, give
            it a narrow bundle, and prove the loop before inviting Claude anywhere people actually work.
            Inviting it to a channel is a normal Slack command:
          </p>
          <CodeBlock
            language="bash"
            filename="slack-channel"
            code={`# 1. Create a private test channel for the rollout
/create #claude-eng-test

# 2. Invite the shared Claude identity into it
/invite @Claude

# Claude only responds in channels it has been invited to.
# Channel membership is itself an access-control layer.`}
          />
          <p className="text-lg leading-relaxed mb-6">
            With the channel scoped and a tool bundle attached, hand Claude a small, verifiable task.
            The point of the test is not to be impressed; it is to confirm the access bundle resolves to
            the right repo and that the result comes back as a reviewable artifact, not a wall of text.
          </p>
          <CodeBlock
            language="text"
            filename="#claude-eng-test"
            code={`@Claude the checkout flow throws a 500 on empty carts in api/checkout.
Reproduce it, find the root cause, and open a draft PR with a fix and a test.

# Claude posts progress in-thread, then returns with a summary and
# action buttons: View Session and Create PR. Each coding task runs as a
# Claude Code session on the web, and can open one pull request.`}
          />
          <p className="text-lg leading-relaxed mb-6">
            Two routing modes decide how mentions are handled, set from the Claude App Home in Slack.{" "}
            <strong>Code only</strong> sends every mention to a Claude Code session, which suits a
            dedicated engineering channel.{" "}
            <strong>Code + Chat</strong> lets Claude decide between a coding session and a chat answer,
            which suits a mixed channel where people also ask general questions (
            <Link
              href="https://code.claude.com/docs/en/slack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Claude Code in Slack docs
            </Link>
            ). For an eng channel, I default to Code only and avoid the ambiguity.
          </p>
          <Card className="card-accent-left mb-6">
            <CardContent className="pt-6">
              <p className="leading-relaxed">
                <strong>Heads up on prompt injection:</strong> when you tag Claude, it reads the
                surrounding conversation and may follow instructions buried in other messages.
                Anthropic&apos;s own docs warn to only use it in trusted channels. Treat a channel&apos;s
                membership list as part of its threat model, the same way I argued in my post on{" "}
                <Link
                  href="/blog/hardening-ai-agents-cicd-prompt-injection"
                  className="text-accent hover:underline"
                >
                  hardening AI agents against prompt injection
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3 */}
      <section id="mcp" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            Connecting Claude Tag to Developer Tools and MCP Servers
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Claude Tag is only as useful as the tools you connect to it. Admins attach credentials,
            repositories, and connections as part of a channel&apos;s access bundle, and the underlying
            integration surface is the Model Context Protocol. Claude Code&apos;s MCP ecosystem spans
            300+ integrations, including GitHub, Sentry, Linear, and PostgreSQL, plus any custom internal
            server you build (
            <Link
              href="https://code.claude.com/docs/en/managed-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Claude Code MCP docs
            </Link>
            ).
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The trick is to match each channel to the smallest set of tools that channel&apos;s work
            actually needs. An incident channel does not need write access to your planning board, and a
            planning channel has no business touching the production database. Because access follows the
            channel, you get to make that decision per channel instead of granting one giant bundle to
            everything. Here is the mapping I would start with:
          </p>
          <CodeBlock
            language="yaml"
            filename="channel-to-tools (planning sketch)"
            code={`# Not a config file Claude reads - a planning sketch for the access
# bundle an admin attaches to each channel at admin-settings/claude-tag.

#incidents:        # on-call and outage response
  tools: [sentry, pagerduty, github-read]
  ambient_mode: on        # proactive surfacing helps here

#pull-requests:    # code review and small fixes
  tools: [github-write]   # can open one PR per session
  ambient_mode: off

#sprint-planning:  # roadmap and ticket grooming
  tools: [linear, github-read]
  ambient_mode: off

#ci-alerts:        # build and pipeline failures
  tools: [custom-ci-mcp, github-read]
  ambient_mode: on`}
          />
          <p className="text-lg leading-relaxed mb-6">
            That last one, <code className="bg-muted px-1 rounded">custom-ci-mcp</code>, is where a lot
            of teams will get the most value: a server you write to expose your own pipeline. I have
            built MCP servers for exactly this kind of internal surface, like the{" "}
            <Link href="/projects/jenkins-mcp" className="text-accent hover:underline">
              Jenkins MCP server
            </Link>{" "}
            that lets an agent read build status and trigger jobs, and a{" "}
            <Link href="/blog/method-crm-mcp" className="text-accent hover:underline">
              Method CRM MCP server
            </Link>{" "}
            for business data. If you have a CI dashboard, an internal metrics API, or a deployment
            tool, wrapping it as an MCP server is what turns Claude Tag from a code-writer into something
            that understands your specific stack. My{" "}
            <Link href="/blog/mcp-code-execution-pattern" className="text-accent hover:underline">
              guide to the MCP code-execution pattern
            </Link>{" "}
            covers how to keep those servers efficient.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section id="ambient" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            Ambient Mode: What It Reads and When to Enable It
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Ambient mode is the feature that makes Claude Tag feel like a teammate rather than a command
            line. With it on, Claude proactively keeps you updated about whatever it thinks you might
            need to know, flagging information across the connected channel and tools without being
            tagged first (
            <Link
              href="https://www.anthropic.com/news/introducing-claude-tag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Anthropic, 2026
            </Link>
            ). On an incident channel, that means it can spot a spike in Sentry and post about it before
            anyone asks.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The catch is the part TechCrunch flagged on launch day: to decide what to surface, ambient
            mode reads the channel&apos;s messages (
            <Link
              href="https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              TechCrunch, June 2026
            </Link>
            ). That is a fair trade in an ops channel full of alerts and stack traces. It is a worse
            trade in a channel where people paste customer emails, credentials, or anything you would not
            want a persistent memory to retain. Memory is scoped to the channel, which limits the blast
            radius, but scoping is not the same as not reading.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            My rule of thumb is simple. Turn ambient mode on for channels whose entire purpose is signal
            you want chased - incidents, CI failures, deploy logs. Keep it off everywhere people mix in
            sensitive content or think out loud. If you are unsure, leave it off and tag Claude
            explicitly. You lose the proactive nudge, but you keep full control over what it sees and
            when.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="costs" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Controlling Claude Tag&apos;s Token Costs</h2>
          <p className="text-lg leading-relaxed mb-6">
            Claude Tag is metered as model usage, on a consumption basis. That is the line item to watch,
            because an async teammate that schedules its own work over hours can quietly run up a bill in
            a way an interactive session never does. The good news is the controls are real: an Owner sets
            a hard cap on Claude&apos;s draw from the organization&apos;s usage balance, and there is a
            per-channel consumption breakdown at{" "}
            <code className="bg-muted px-1 rounded">claude.ai/admin-settings/usage/claude-in-slack</code>.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Anthropic is softening the start with an introductory usage credit running through September
            1, 2026, so eligible orgs can find their real consumption pattern before it costs anything.
            Use that window deliberately. The mistake is to set a generous cap, forget about it, and
            discover the shape of your spend in a monthly invoice.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The discipline here is the same one I wrote about in{" "}
            <Link href="/blog/claude-code-cost-tracking" className="text-accent hover:underline">
              tracking Claude Code costs
            </Link>
            : the bill is driven by volume, not by any single clever prompt. Start each channel with a
            low cap. Watch the per-channel breakdown for a week. Raise the cap only where the value is
            obvious, and leave it tight everywhere else. One channel doing real engineering work earns a
            bigger budget; a chatty general channel with ambient mode on does not.
          </p>
          <Card className="card-accent-left mb-6">
            <CardContent className="pt-6">
              <p className="leading-relaxed">
                <strong>One number to remember:</strong> channel and thread work bills the organization,
                while a direct message to Claude bills the individual user&apos;s seat and uses their own
                account. Keep team-funded work in channels so it lands on the org balance you are
                actually monitoring.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 6 */}
      <section id="compare" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            Claude Tag vs Copilot in Teams vs Terminal Claude Code
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Claude Tag is part of a broader shift: team chat is becoming the control surface for AI
            agents in the enterprise. GitHub brought Copilot into Microsoft Teams, and OpenAI&apos;s
            Codex ships a Slack integration of its own. The question is not whether to put an agent in
            chat, but which one fits where your engineers already are and how it participates in your
            workflow.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The honest framing is that these are not all the same layer. Claude Tag is the async
            coordination layer - hand off a task in Slack, get a pull request or a summary back. Terminal
            Claude Code is the deep-work layer for real-time, interactive sessions on your own machine.
            Copilot in Teams centers on the GitHub platform with Actions, PR pipelines, and org policy.
            You do not pick one and retire the others; you place each where it earns its keep.
          </p>
          <Card className="card-accent-left mb-6">
            <CardContent className="pt-6">
              <p className="leading-relaxed mb-3">
                <strong>Claude Tag:</strong> shared async teammate in Slack, channel-scoped access and
                memory, opens pull requests via Claude Code, ambient monitoring. Best for hand-offs,
                incidents, and team-visible tasks.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Terminal Claude Code:</strong> interactive, full-context, real-time pair work on
                your machine. Best for focused building and complex refactors.
              </p>
              <p className="leading-relaxed">
                <strong>Copilot in Teams:</strong> agent in Microsoft Teams anchored to the GitHub
                platform. Best when your org already lives in Teams and GitHub Actions.
              </p>
            </CardContent>
          </Card>
          <p className="text-lg leading-relaxed mb-6">
            If your team already runs Claude Code, Claude Tag is the natural extension into shared
            workflows, and it pairs well with the agent patterns I covered in{" "}
            <Link href="/blog/claude-managed-agents" className="text-accent hover:underline">
              Claude managed agents
            </Link>{" "}
            and{" "}
            <Link href="/blog/claude-code-dynamic-workflows-guide" className="text-accent hover:underline">
              dynamic workflows
            </Link>
            . The async, multi-stage task model in Slack is the same one those posts explore, now wearing
            a teammate&apos;s name.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container-project">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CategoryIcon icon="HelpCircle" size="sm" /> Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">
                    What is Claude Tag and how is it different from the old Claude Slack app?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Claude Tag is Anthropic&apos;s persistent AI teammate in Slack, launched June 23,
                      2026. Unlike the old request-response Claude Slack app, it runs as one shared{" "}
                      <code className="bg-muted px-1 rounded">@Claude</code> identity per channel with
                      admin-configured access, persistent channel-scoped memory, and an ambient mode. It
                      runs on Opus 4.8 under the same Slack app, so there is nothing to reinstall.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">
                    Which plans include Claude Tag?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Claude Tag is in beta for Claude Enterprise and Claude Team customers on Slack. An
                      organization Owner provisions it from{" "}
                      <code className="bg-muted px-1 rounded">claude.ai/admin-settings/claude-tag</code>.
                      Anthropic is offering an introductory usage credit through September 1, 2026 for
                      eligible organizations to test it before consumption-based billing applies in full.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I connect Claude Tag to GitHub, Sentry, or other developer tools?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Admins attach credentials, repositories, and tool connections as an access bundle,
                      scoped per channel. Claude Code&apos;s MCP ecosystem covers 300+ integrations
                      including GitHub, Sentry, and Linear, plus custom internal servers. Keep each
                      channel&apos;s bundle minimal so an incident channel cannot reach a planning
                      channel&apos;s tools.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">
                    What is ambient mode in Claude Tag, and is it safe to enable?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Ambient mode lets Claude proactively monitor a channel and surface information it
                      thinks the team needs, without being tagged. It reads channel messages to do this,
                      so enable it on ops and incident channels where that helps, and keep it off on
                      channels that mix customer data, secrets, or sensitive threads.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I control Claude Tag&apos;s token costs?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Billing is consumption-based, metered as model usage. An Owner sets a hard spend cap
                      on Claude&apos;s draw from the organization&apos;s usage balance, and can review
                      per-channel consumption at{" "}
                      <code className="bg-muted px-1 rounded">
                        claude.ai/admin-settings/usage/claude-in-slack
                      </code>
                      . Start low, watch the per-channel breakdown, and raise caps only where the value is
                      proven.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Can I limit which channels and data Claude Tag can access?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes. Access follows the channel, not the user, and individual users cannot override
                      it. Admins create separate Claude identities for different uses, so an engineering
                      setup will not pass memory or tools to a sales one. Claude only responds where it
                      has been invited with <code className="bg-muted px-1 rounded">/invite @Claude</code>.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left font-semibold">
                    Does Claude Tag replace running Claude Code in the terminal?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      No. Claude Tag is the async coordination layer in Slack, where you delegate a task
                      and get a pull request or summary back. Terminal Claude Code remains the deep-work
                      layer for real-time, interactive sessions. Most teams use both: Slack for hand-offs
                      and incidents, the terminal for focused building.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left font-semibold">
                    How does Claude Tag compare to Microsoft Copilot in Teams?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Both make team chat the control surface for an AI agent. Claude Tag lives in Slack,
                      participates in Git workflows, and proposes changes as pull requests through Claude
                      Code. Copilot in Teams centers on the GitHub platform with Actions and org policy.
                      Pick the one that matches where your engineers already work.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-project">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Users" size="sm" /> Roll it out the safe way
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Start with one private channel, a minimal access bundle, ambient mode off, and a low
                spend cap. Hand Claude a small fix, review the pull request it opens, then widen access
                one channel at a time. The teams that get burned are the ones that grant everything on day
                one. Start from the official docs and provision from your admin settings.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button asChild>
                  <Link
                    href="https://www.anthropic.com/news/introducing-claude-tag"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Claude Tag Announcement <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://code.claude.com/docs/en/slack"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Claude in Slack Docs <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Related Articles" centered />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Claude Code
                </Badge>
                <CardTitle>Claude Managed Agents</CardTitle>
                <CardDescription>
                  The async, multi-stage agent model that Claude Tag brings into your team Slack.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/blog/claude-managed-agents" className="project-link">
                  Read Article →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Cost Control
                </Badge>
                <CardTitle>Tracking Claude Code Costs</CardTitle>
                <CardDescription>
                  Why the bill is driven by volume, and the same discipline that keeps Claude Tag caps
                  sane.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/blog/claude-code-cost-tracking" className="project-link">
                  Read Article →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  MCP
                </Badge>
                <CardTitle>The MCP Code-Execution Pattern</CardTitle>
                <CardDescription>
                  How to build efficient MCP servers, the tools you connect to a Claude Tag channel.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/blog/mcp-code-execution-pattern" className="project-link">
                  Read Article →
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
