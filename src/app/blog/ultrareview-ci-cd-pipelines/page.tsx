import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Running claude ultrareview in CI/CD: GitHub Actions Guide",
  description:
    "Claude Code 2.1.120 added claude ultrareview as a non-interactive CLI subcommand. GitHub Actions YAML, OAuth token setup, --json parsing, cost controls.",
  keywords: [
    "claude ultrareview ci cd",
    "claude ultrareview github actions",
    "claude ultrareview non-interactive",
    "claude ultrareview json output",
    "claude ultrareview cost",
    "claude code 2.1.120 ultrareview",
    "claude code oauth token github actions",
    "CLAUDE_CODE_OAUTH_TOKEN",
    "claude setup-token",
    "ai code review github actions 2026",
    "claude ultrareview gitlab ci",
    "github copilot code review billing june 2026",
    "claude ultrareview vs code review",
    "claude code cli subcommand pipeline",
    "claude ultrareview exit codes",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Running claude ultrareview in CI/CD: GitHub Actions Guide",
    description:
      "Claude Code 2.1.120 added claude ultrareview as a non-interactive CLI subcommand. GitHub Actions YAML, OAuth token setup, --json parsing, cost controls.",
    url: "https://avinashsangle.com/blog/ultrareview-ci-cd-pipelines",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-05-03T00:00:00.000Z",
    modifiedTime: "2026-05-03T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-ultrareview-ci-cd-pipelines.png",
        width: 1200,
        height: 630,
        alt: "Running claude ultrareview in CI/CD pipelines: a GitHub Actions guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Running claude ultrareview in CI/CD: GitHub Actions Guide",
    description:
      "claude ultrareview is the new non-interactive subcommand. Wire it into GitHub Actions with the OAuth token the standard action doesn't ship.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-ultrareview-ci-cd-pipelines.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/ultrareview-ci-cd-pipelines",
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

// Static JSON-LD schemas built at compile time. The strings are produced from
// JSON.stringify() of trusted, hardcoded data, then injected via the standard
// Next.js JSON-LD pattern (same pattern used across every blog post on this
// site). No user input flows into these strings.
const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Running claude ultrareview in CI/CD: GitHub Actions Guide",
  description:
    "Claude Code 2.1.120 added claude ultrareview as a non-interactive CLI subcommand. GitHub Actions YAML, OAuth token setup, --json parsing, cost controls.",
  image: "https://avinashsangle.com/og-ultrareview-ci-cd-pipelines.png",
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
  datePublished: "2026-05-03",
  dateModified: "2026-05-03",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/ultrareview-ci-cd-pipelines",
  },
  keywords:
    "claude ultrareview ci cd, claude ultrareview github actions, claude ultrareview non-interactive, claude code oauth token, ai code review github actions 2026",
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
      name: "Running claude ultrareview in CI/CD",
      item: "https://avinashsangle.com/blog/ultrareview-ci-cd-pipelines",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the claude ultrareview CLI subcommand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "claude ultrareview [target] is a non-interactive CLI subcommand added in Claude Code 2.1.120 (April 28, 2026). It runs the same multi-agent cloud review as /ultrareview, prints findings to stdout, supports --json for raw output, and exits 0 on completion or 1 on failure. Designed for CI scripts.",
      },
    },
    {
      "@type": "Question",
      name: "Why does claude ultrareview fail with ANTHROPIC_API_KEY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ultrareview runs on Claude Code on the web infrastructure and requires Claude.ai account authentication, not an API key. The official anthropics/claude-code-action@v1 uses ANTHROPIC_API_KEY and cannot run ultrareview. Generate a long-lived OAuth token with claude setup-token on a Pro or Max account instead.",
      },
    },
    {
      "@type": "Question",
      name: "How do I run claude ultrareview in GitHub Actions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Install the CLI with npm install -g @anthropic-ai/claude-code@2.1.120, store CLAUDE_CODE_OAUTH_TOKEN as a repo secret, and call claude ultrareview --json --timeout 20 with the PR number on the pull_request event. Pipe stdout to bugs.json and post findings with gh pr comment.",
      },
    },
    {
      "@type": "Question",
      name: "How much does claude ultrareview cost per run in CI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each ultrareview run costs roughly $5 to $20 in extra usage, scaling with diff size. Pro and Max accounts get three free runs that expire May 5, 2026. At an average of $12 per review, 50 PRs per month costs about $600. Skip drafts and bot PRs to keep the bill bounded.",
      },
    },
    {
      "@type": "Question",
      name: "Can I run claude ultrareview on Amazon Bedrock or Google Vertex AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The official docs state ultrareview is not available when using Claude Code with Amazon Bedrock, Google Cloud Vertex AI, or Microsoft Foundry, and it is not available to organizations with Zero Data Retention enabled. Ultrareview only works with direct Claude.ai OAuth authentication.",
      },
    },
    {
      "@type": "Question",
      name: "What exit codes does claude ultrareview use in CI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exit 0 means the review completed, with or without findings. Exit 1 means the review failed to launch, the remote session errored, or the timeout elapsed. Exit 130 means the subcommand was interrupted with Ctrl-C. The remote review keeps running on interrupt, so follow the session URL printed to stderr.",
      },
    },
    {
      "@type": "Question",
      name: "How is claude ultrareview different from the managed Code Review product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "claude ultrareview is a CLI subcommand you wire into your own pipeline (Pro/Max/Team/Enterprise). The managed Code Review is a GitHub App for Team and Enterprise that posts inline review comments automatically and costs $15-$25 per review. Pick the CLI for control, the managed product for zero YAML.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use claude ultrareview with GitLab CI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but the PR-number target form is GitHub-specific because it clones from a github.com remote. On GitLab, use the no-arg form (claude ultrareview) which bundles your local working tree and reviews the diff against the default branch. Authenticate with CLAUDE_CODE_OAUTH_TOKEN as a masked CI variable.",
      },
    },
  ],
})

export default function UltrareviewCiCdPipelinesPage() {
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
            { label: "Running claude ultrareview in CI/CD" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">Claude Code</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Running claude ultrareview in CI/CD: GitHub Actions Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Claude Code 2.1.120 (April 28, 2026) added{" "}
            <code>claude ultrareview [target]</code> as a non-interactive CLI
            subcommand that runs the cloud multi-agent review from CI scripts. It
            prints findings to stdout, supports <code>--json</code> for raw output,
            and exits 0 on completion or 1 on failure. Wiring it into GitHub
            Actions takes one OAuth token the standard action doesn&apos;t ship.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> May 3, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-05-03</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Claude Code", "GitHub Actions", "CI/CD", "Code Review", "DevOps"].map(
              (tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              )
            )}
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
                  <a href="#what-it-does" className="project-link">
                    What claude ultrareview Does in CI
                  </a>
                </li>
                <li>
                  <a href="#oauth-gotcha" className="project-link">
                    The Claude.ai OAuth Token Gotcha (Read This First)
                  </a>
                </li>
                <li>
                  <a href="#minimum-workflow" className="project-link">
                    The Minimum Viable GitHub Actions Workflow
                  </a>
                </li>
                <li>
                  <a href="#parse-findings" className="project-link">
                    Parse --json Findings and Post a PR Comment
                  </a>
                </li>
                <li>
                  <a href="#cost-control" className="project-link">
                    Cost Control and Frequency Guards
                  </a>
                </li>
                <li>
                  <a href="#vs-managed" className="project-link">
                    When to Use the Managed Code Review Product Instead
                  </a>
                </li>
                <li>
                  <a href="#gitlab-copilot" className="project-link">
                    GitLab CI and the June 1 Copilot Billing Change
                  </a>
                </li>
                <li>
                  <a href="#hardening" className="project-link">
                    Known Edges and the Hardening Checklist
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
                <code>claude ultrareview</code> is the non-interactive form of{" "}
                <code>/ultrareview</code>. Same multi-agent review, same 5 to 10
                minute runtime, same $5 to $20 per run.
              </li>
              <li>
                Authentication is the trap. Ultrareview needs a Claude.ai OAuth
                token (<code>CLAUDE_CODE_OAUTH_TOKEN</code>), not an API key.
                Generate one with <code>claude setup-token</code> on a Pro or Max
                account.
              </li>
              <li>
                Use <code>--json</code> to pipe <code>bugs.json</code> through{" "}
                <code>jq</code> and post a severity-tagged PR comment. Exit 1
                fails the build; exit 0 passes regardless of findings.
              </li>
              <li>
                For Team and Enterprise orgs that want every PR reviewed without
                writing YAML, the managed Code Review product is a better fit. The
                CLI subcommand wins on flexibility and self-hosted runners.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1: What it does */}
        <section id="what-it-does" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitPullRequestArrow" size="md" />
            What claude ultrareview Does in CI
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <code>claude ultrareview [target]</code> launches the same fleet of
            reviewer agents that power the interactive <code>/ultrareview</code>{" "}
            slash command. The review runs in a remote Anthropic sandbox, multiple
            agents explore the diff in parallel, each finding is independently
            reproduced and verified, and the result lands back as a list of bugs
            roughly 5 to 10 minutes later. The{" "}
            <a
              href="https://code.claude.com/docs/en/ultrareview"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              official docs
            </a>{" "}
            describe ultrareview as offering <em>&quot;higher signal&quot;</em>{" "}
            and <em>&quot;broader coverage&quot;</em> than the local{" "}
            <code>/review</code> at the cost of a longer wait and a per-run charge.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            What changed on April 28, 2026 is that this review now runs without an
            interactive Claude Code session. Per the{" "}
            <a
              href="https://code.claude.com/docs/en/changelog"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              v2.1.120 changelog
            </a>
            , Anthropic added a CLI subcommand that <em>&quot;runs /ultrareview
            non-interactively from CI or scripts, prints findings to stdout
            (--json for raw output) and exits 0 on completion or 1 on failure.&quot;</em>{" "}
            Same review, no terminal, no human keystroke required.
          </p>

          <p className="text-lg leading-relaxed mb-6">The subcommand takes three target forms:</p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Diff between current branch and the default branch
claude ultrareview

# A specific GitHub PR (clones from github.com remote)
claude ultrareview 1234

# Diff against an arbitrary base branch
claude ultrareview origin/main`}
          />

          <p className="text-lg leading-relaxed my-6">
            Two flags matter for automation. <code>--json</code> swaps the human
            formatting for the raw <code>bugs.json</code> payload, which is what
            you actually want for <code>jq</code> downstream. <code>--timeout</code>{" "}
            takes a value in minutes and defaults to 30, which is also the wall
            clock you should bound your CI job at. Output rules also matter:
            progress and the live session URL go to <strong>stderr</strong>;
            findings go to <strong>stdout</strong>. That keeps stdout parseable.
          </p>

          <p className="text-lg leading-relaxed">
            Exit codes are tight and correct. Exit 0 means the review finished,
            including the case where no bugs were found. Exit 1 means the review
            failed to launch, the remote session errored, or the timeout elapsed.
            Exit 130 means you (or your runner) hit Ctrl-C, but the remote review
            keeps running anyway, so follow the session URL on stderr if you want
            to recover the result. None of these codes equate to a build pass or
            fail by themselves; you decide what counts as &quot;blocking&quot; by
            parsing the JSON.
          </p>
        </section>

        {/* Section 2: OAuth gotcha */}
        <section id="oauth-gotcha" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="KeyRound" size="md" />
            The Claude.ai OAuth Token Gotcha (Read This First)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Ultrareview will not run with an Anthropic API key. The{" "}
            <a
              href="https://code.claude.com/docs/en/ultrareview"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              official docs
            </a>{" "}
            spell it out:{" "}
            <em>&quot;Ultrareview requires authentication with a Claude.ai
            account because it runs on Claude Code on the web infrastructure. If
            you are signed in with an API key only, run /login and authenticate
            with Claude.ai first.&quot;</em> That kills the usual GitHub Actions
            pattern of pasting <code>ANTHROPIC_API_KEY</code> into a secret and
            calling <code>anthropics/claude-code-action@v1</code>. The action
            authenticates with API keys; ultrareview rejects them.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The same docs page also rules out the cloud-provider routes you might
            reach for as a workaround:{" "}
            <em>&quot;Ultrareview is not available when using Claude Code with
            Amazon Bedrock, Google Cloud Vertex AI, or Microsoft Foundry, and it
            is not available to organizations that have enabled Zero Data
            Retention.&quot;</em> So OIDC via Bedrock or Vertex AI, which I cover
            for the wider hardening picture in{" "}
            <Link
              href="/blog/hardening-ai-agents-cicd-prompt-injection"
              className="project-link"
            >
              Hardening Claude Code GitHub Actions
            </Link>
            , is off the table for ultrareview specifically.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The fix is a long-lived OAuth token. On a Pro or Max account, run the
            following on your laptop:
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Pro/Max account, browser flow
claude setup-token

# Output (truncated):
# Visit https://claude.ai/oauth/authorize?... in your browser
# After approval, paste the code shown:
# > ********
# Token issued (valid 1 year):
# sk-ant-oat01-***`}
          />

          <p className="text-lg leading-relaxed my-6">
            The token format is <code>sk-ant-oat01-...</code>, distinct from the
            Console <code>sk-ant-api03-...</code> API keys. It&apos;s valid for
            one year, displayed once, and can&apos;t be retrieved again from any
            UI. Copy it straight into a GitHub repository secret named{" "}
            <code>CLAUDE_CODE_OAUTH_TOKEN</code> via{" "}
            <strong>Settings → Secrets and variables → Actions</strong>. Treat it
            like any other production secret: never log it, never commit it,
            don&apos;t put it in an org-wide variable accessible to every repo.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two operational notes most teams miss. First, the token bills against
            the human account&apos;s extra usage allowance, so most teams use a
            shared <code>ci-bot@company.com</code> Pro account dedicated to CI.
            Document who owns the credentials and the recovery email in your
            runbook before you wire the workflow up. Second, there is no in-console
            rotation UI for OAuth tokens. Set a calendar reminder for day 350 to
            run <code>claude setup-token</code> again and update the secret
            yourself before the year-mark.
          </p>

          <p className="text-lg leading-relaxed">
            If you skip this section and try to use <code>ANTHROPIC_API_KEY</code>{" "}
            anyway, the failure surfaces as the CLI dropping you into a{" "}
            <code>/login</code> prompt that expects a browser, which then errors
            out in the headless runner. That&apos;s the most common reason
            first-time CI integrations fail on the very first run.
          </p>
        </section>

        {/* Section 3: Minimum viable workflow */}
        <section id="minimum-workflow" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Workflow" size="md" />
            The Minimum Viable GitHub Actions Workflow
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Below is the smallest workflow that does something useful: it triggers
            on PR open and ready-for-review (skipping every push), installs a
            pinned CLI, runs <code>claude ultrareview --json</code> against the PR
            number, and stashes the findings as a build artifact. Drop it at{" "}
            <code>.github/workflows/ultrareview.yml</code> and it just works.
          </p>

          <CodeBlock
            language="yaml"
            filename=".github/workflows/ultrareview.yml"
            code={`name: Claude Ultrareview

on:
  pull_request:
    types: [opened, ready_for_review]

permissions:
  pull-requests: write
  contents: read

jobs:
  ultrareview:
    if: github.event.pull_request.draft == false
    runs-on: ubuntu-latest
    timeout-minutes: 25
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install Claude Code CLI (pinned)
        run: npm install -g @anthropic-ai/claude-code@2.1.120

      - name: Verify install
        run: claude --version

      - name: Run claude ultrareview
        env:
          CLAUDE_CODE_OAUTH_TOKEN: \${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
        run: |
          claude ultrareview --json --timeout 20 \\
            "\${{ github.event.pull_request.number }}" > bugs.json

      - name: Upload findings artifact
        uses: actions/upload-artifact@v4
        with:
          name: ultrareview-findings
          path: bugs.json
          retention-days: 14`}
          />

          <p className="text-lg leading-relaxed my-6">
            A few choices in here are deliberate, not stylistic. <code>fetch-depth: 0</code>{" "}
            grabs full git history so the bundled-tree path works on tiny PRs
            where shallow clones miss the merge base. The version pin (<code>@2.1.120</code>)
            matters because the subcommand is brand new and the CLI surface is
            actively moving; I covered the broader case for pinning in{" "}
            <Link href="/blog/regression-proofing-claude-code-workflows" className="project-link">
              Regression-Proof Claude Code Workflows
            </Link>
            . The <code>timeout-minutes: 25</code> at the job level paired with{" "}
            <code>--timeout 20</code> on the subcommand gives the runner a five
            minute buffer to tear down on a stuck review.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The skip rule (<code>if: github.event.pull_request.draft == false</code>)
            is a single line that prevents you from spending $12 reviewing a draft
            you&apos;ll rewrite three times before it&apos;s ready. Combined with{" "}
            <code>types: [opened, ready_for_review]</code>, the review fires once
            per PR at the moment review actually makes sense.
          </p>

          <p className="text-lg leading-relaxed">
            The first run end-to-end takes 6 to 11 minutes for a typical PR: 30 to
            45 seconds of npm install, then 5 to 10 minutes for the remote review,
            then a few seconds to upload. On a GitHub-hosted Linux runner that
            charges around $0.008 per minute on private repos, the runner cost
            sits at roughly $0.05. The Anthropic charge dominates by two orders of
            magnitude.
          </p>
        </section>

        {/* Section 4: Parse findings */}
        <section id="parse-findings" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="MessageSquareCode" size="md" />
            Parse --json Findings and Post a PR Comment
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The artifact upload from the minimum workflow is fine for offline
            triage, but most teams want findings posted directly on the PR. The{" "}
            <code>bugs.json</code> payload is shaped roughly like this (truncated
            to the keys you actually use):
          </p>

          <CodeBlock
            language="json"
            filename="bugs.json"
            code={`{
  "session_url": "https://claude.ai/code/session_01H...",
  "summary": "Reviewed 12 files, 480 changed lines.",
  "findings": [
    {
      "severity": "important",
      "file": "src/auth/session.ts",
      "line": 142,
      "title": "Token refresh races with logout",
      "body": "On concurrent logout/refresh, the refresh handler can resurrect a session that was just torn down..."
    },
    {
      "severity": "nit",
      "file": "src/auth/session.ts",
      "line": 88,
      "title": "parseExpiry silently returns 0 on malformed input",
      "body": "..."
    }
  ]
}`}
          />

          <p className="text-lg leading-relaxed my-6">
            <code>severity</code> takes one of three values:{" "}
            <code>important</code>, <code>nit</code>, and{" "}
            <code>pre_existing</code>. Important is what you want to gate on.
            Nits are useful as feedback but should not fail a build. Pre-existing
            bugs are bugs the reviewer found in code that wasn&apos;t touched by
            the PR; they&apos;re informational.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            A small <code>jq</code> script turns the payload into a Markdown
            comment grouped by severity, then <code>gh pr comment</code> posts it
            with the GitHub CLI that ships preinstalled on every runner:
          </p>

          <CodeBlock
            language="bash"
            filename="scripts/post-ultrareview-comment.sh"
            code={`#!/usr/bin/env bash
set -euo pipefail

BUGS=\${1:-bugs.json}
PR=\${PR_NUMBER:-\$GITHUB_PR_NUMBER}

IMPORTANT=$(jq '[.findings[] | select(.severity=="important")] | length' "\$BUGS")
NIT=$(jq '[.findings[] | select(.severity=="nit")] | length' "\$BUGS")
SESSION=$(jq -r .session_url "\$BUGS")

{
  echo "## Claude ultrareview"
  echo ""
  echo "**\$IMPORTANT important** | **\$NIT nits** | [session log](\$SESSION)"
  echo ""
  jq -r '.findings | sort_by(.severity) | .[] |
    "### [\\(.severity | ascii_upcase)] \\(.file):\\(.line)\\n**\\(.title)**\\n\\n\\(.body)\\n"' "\$BUGS"
} > comment.md

gh pr comment "\$PR" --body-file comment.md

# Fail the build only on Important findings
if [ "\$IMPORTANT" -gt 0 ]; then
  echo "::error::Found \$IMPORTANT important issues"
  exit 1
fi`}
          />

          <p className="text-lg leading-relaxed my-6">
            Two design choices worth pulling out. First, the build only fails on
            important findings. That keeps the workflow useful as a warning
            channel without becoming the team&apos;s nemesis on every typo-grade
            nit. If you want to gate harder, raise the threshold; if your team
            wants Claude as advisory only, drop the exit 1 line entirely and let
            every run pass. Second, the comment posts even on green runs because{" "}
            <code>gh pr comment</code> runs before the exit-code check. That tells
            reviewers <em>&quot;ultrareview ran and found nothing&quot;</em>{" "}
            instead of leaving them to wonder.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Wire it into the workflow with two extra steps:
          </p>

          <CodeBlock
            language="yaml"
            filename=".github/workflows/ultrareview.yml (additions)"
            code={`      - name: Post findings as PR comment
        env:
          GH_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          PR_NUMBER: \${{ github.event.pull_request.number }}
        run: bash scripts/post-ultrareview-comment.sh bugs.json`}
          />

          <p className="text-lg leading-relaxed">
            One safety note: model output is untrusted input the moment it lands
            on a PR. Don&apos;t pipe <code>bugs.json</code> into{" "}
            <code>eval</code>, don&apos;t feed it to a downstream agent without
            sanitization, and assume the comment body could contain Markdown that
            tries to confuse a downstream reviewer agent. The same threat model I
            cover in{" "}
            <Link
              href="/blog/hardening-ai-agents-cicd-prompt-injection"
              className="project-link"
            >
              Hardening Claude Code GitHub Actions
            </Link>{" "}
            applies here. Treat the JSON as text, not as instructions.
          </p>
        </section>

        {/* Section 5: Cost control */}
        <section id="cost-control" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="DollarSign" size="md" />
            Cost Control and Frequency Guards
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Anthropic&apos;s{" "}
            <a
              href="https://code.claude.com/docs/en/ultrareview"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              ultrareview docs
            </a>{" "}
            quote a per-review range of <em>&quot;roughly $5 to $20 per review
            as extra usage&quot;</em>. In practice my own runs cluster around
            $10-$14 on PRs of 200-600 changed lines. Pro and Max accounts get
            three free runs that expire May 5, 2026, which is genuinely tight if
            you&apos;re reading this on publication day. Spend them validating the
            workflow against real PRs in your repo, not testing the YAML on
            scratch branches.
          </p>

          <p className="text-lg leading-relaxed mb-6">A simple cost table at three volumes:</p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">PRs/month</th>
                  <th className="py-3 pr-4 font-semibold">At $12 avg</th>
                  <th className="py-3 pr-4 font-semibold">At $18 avg</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">50</td>
                  <td className="py-3 pr-4">$600</td>
                  <td className="py-3 pr-4">$900</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">100</td>
                  <td className="py-3 pr-4">$1,200</td>
                  <td className="py-3 pr-4">$1,800</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">200</td>
                  <td className="py-3 pr-4">$2,400</td>
                  <td className="py-3 pr-4">$3,600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Five frequency guards move the needle far more than picking a cheaper
            tool would. The first three live as <code>if:</code> conditions on
            the job; the last two need a small step to compute the gate.
          </p>

          <CodeBlock
            language="yaml"
            filename=".github/workflows/ultrareview.yml (frequency guards)"
            code={`jobs:
  ultrareview:
    # 1. Skip drafts
    # 2. Skip Dependabot, Renovate, and other bots
    # 3. Skip if a "skip-ultrareview" label is present
    # 4. Optional: only run when reviewers add a "needs-deep-review" label
    if: |
      github.event.pull_request.draft == false &&
      github.actor != 'dependabot[bot]' &&
      github.actor != 'renovate[bot]' &&
      !contains(github.event.pull_request.labels.*.name, 'skip-ultrareview') &&
      contains(github.event.pull_request.labels.*.name, 'needs-deep-review')
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }

      - name: Skip tiny PRs
        id: size
        env:
          GH_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        run: |
          changed=$(gh pr diff "\${{ github.event.pull_request.number }}" --name-only | wc -l)
          echo "changed=\$changed" >> "\$GITHUB_OUTPUT"
          [ "\$changed" -ge 5 ] || echo "Skipping: only \$changed files changed"

      - name: Run claude ultrareview
        if: steps.size.outputs.changed != '' && steps.size.outputs.changed >= 5
        env:
          CLAUDE_CODE_OAUTH_TOKEN: \${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
        run: |
          claude ultrareview --json --timeout 20 \\
            "\${{ github.event.pull_request.number }}" > bugs.json`}
          />

          <p className="text-lg leading-relaxed my-6">
            With the label gate, you go from &quot;every PR&quot; to &quot;PRs
            where a reviewer flagged the change as substantive&quot;. That cuts
            volume by 60-80% in my experience without losing the high-impact
            reviews. The diff-size threshold catches the long tail of
            one-line-fix PRs that don&apos;t need a 10-minute multi-agent
            sweep. The bot-actor skip alone has saved real teams from posting an
            $18 ultrareview comment on a Dependabot version bump.
          </p>

          <p className="text-lg leading-relaxed">
            Set an org-wide spend cap at{" "}
            <a
              href="https://claude.ai/admin-settings/usage"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              claude.ai/admin-settings/usage
            </a>{" "}
            before turning the workflow on for the whole engineering team. A bad
            week of mass-rebases can otherwise turn into a four-figure surprise
            on the Anthropic invoice. The same cost tracking patterns I covered
            in{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              Claude Code Cost Tracking
            </Link>{" "}
            apply here for per-run accounting on your side.
          </p>
        </section>

        {/* Section 6: vs managed Code Review */}
        <section id="vs-managed" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Scale" size="md" />
            When to Use the Managed Code Review Product Instead
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Anthropic ships a separate product called{" "}
            <a
              href="https://code.claude.com/docs/en/code-review"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Code Review
            </a>{" "}
            that&apos;s easy to confuse with the CLI subcommand because both run
            multi-agent reviews. They&apos;re not the same thing. Code Review is
            a managed GitHub App available only to{" "}
            <strong>Team and Enterprise</strong> subscriptions. It posts findings
            as inline review comments, ships a check run with a severity table,
            costs <em>&quot;$15-25 in cost, scaling with PR size&quot;</em> per
            run, and triggers on PR open, every push, or via{" "}
            <code>@claude review</code> comments. No YAML required on your side.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Dimension</th>
                  <th className="py-3 pr-4 font-semibold">claude ultrareview (CLI)</th>
                  <th className="py-3 pr-4 font-semibold">Code Review (managed)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">Plan required</td>
                  <td className="py-3 pr-4">Pro / Max / Team / Enterprise</td>
                  <td className="py-3 pr-4">Team / Enterprise only</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Auth</td>
                  <td className="py-3 pr-4">OAuth token in CI secret</td>
                  <td className="py-3 pr-4">GitHub App, no token in your repo</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Trigger</td>
                  <td className="py-3 pr-4">Whatever your YAML says</td>
                  <td className="py-3 pr-4">PR open / every push / @claude review</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Inline diff comments</td>
                  <td className="py-3 pr-4">You write the post step</td>
                  <td className="py-3 pr-4">Posted automatically</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Cost per review</td>
                  <td className="py-3 pr-4">$5 to $20</td>
                  <td className="py-3 pr-4">$15 to $25</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Customization</td>
                  <td className="py-3 pr-4">Anything jq and gh can do</td>
                  <td className="py-3 pr-4"><code>REVIEW.md</code> for severity rules and skip paths</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Self-hosted runners</td>
                  <td className="py-3 pr-4">Yes</td>
                  <td className="py-3 pr-4">No (runs on Anthropic infra)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Pick the <strong>CLI subcommand</strong> if you have a Pro or Max
            account, you want full control over trigger logic, you run on
            self-hosted runners, you want findings routed to non-GitHub
            destinations like Slack or Linear, or you&apos;re cost-sensitive and
            want exactly one review per PR open. Pick the <strong>managed Code
            Review</strong> if you&apos;re on Team or Enterprise, you want zero
            YAML, you want inline diff annotations and severity-tagged check runs
            out of the box, and <code>REVIEW.md</code> covers your tuning needs.
            Both bill as extra usage on the same Anthropic invoice; budgeting and
            spend caps are configured per organization.
          </p>

          <p className="text-lg leading-relaxed">
            One subtle point: the managed Code Review&apos;s &quot;every push&quot;
            mode multiplies cost by the number of pushes, which is invisible until
            it isn&apos;t. The CLI subcommand fires exactly when your YAML says
            it should, no more, no less. If your team rewrites PRs heavily before
            merge, the CLI form is the cheaper structure even before you account
            for the higher per-run cost of the managed product.
          </p>
        </section>

        {/* Section 7: GitLab CI + Copilot billing */}
        <section id="gitlab-copilot" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitMerge" size="md" />
            GitLab CI and the June 1 Copilot Billing Change
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            GitLab CI works with one structural change: the{" "}
            <code>claude ultrareview &lt;PR-number&gt;</code> form is GitHub-only
            because it clones from a <code>github.com</code> remote. On GitLab,
            the no-arg form bundles your local working tree and reviews against
            the default branch, which is what you want for an MR job anyway.
          </p>

          <CodeBlock
            language="yaml"
            filename=".gitlab-ci.yml"
            code={`ultrareview:
  image: node:20-alpine
  stage: review
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
      when: on_success
  variables:
    GIT_DEPTH: 0
  before_script:
    - apk add --no-cache git curl jq glab
    - npm install -g @anthropic-ai/claude-code@2.1.120
    - claude --version
  script:
    - claude ultrareview --json --timeout 20 > bugs.json
    - |
      IMPORTANT=$(jq '[.findings[] | select(.severity=="important")] | length' bugs.json)
      jq -r '.findings | sort_by(.severity) | .[] |
        "### [\\(.severity | ascii_upcase)] \\(.file):\\(.line)\\n\\(.title)\\n"' bugs.json > comment.md
      glab mr note "$CI_MERGE_REQUEST_IID" --message "$(cat comment.md)"
      [ "$IMPORTANT" -eq 0 ]
  artifacts:
    paths: [bugs.json]
    when: always`}
          />

          <p className="text-lg leading-relaxed my-6">
            Store <code>CLAUDE_CODE_OAUTH_TOKEN</code> as a masked, protected CI/CD
            variable under <strong>Settings → CI/CD → Variables</strong>. The{" "}
            <code>glab</code> CLI handles the MR comment posting; if you don&apos;t
            want the extra binary, the GitLab REST API works just as well with{" "}
            <code>curl</code> and a project-scoped token.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The timing on this whole topic is sharper than it looks. On April 27,
            2026, GitHub announced that{" "}
            <a
              href="https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Copilot code review will start consuming GitHub Actions minutes on
              June 1, 2026
            </a>{" "}
            on private repos, alongside a broader move to credit-based billing
            that drew sharp pushback from developers (<em>&quot;you will get less
            but pay the same price&quot;</em>, per{" "}
            <a
              href="https://visualstudiomagazine.com/articles/2026/04/27/devs-sound-off-on-usage-based-copilot-pricing-change-you-will-get-less-but-pay-the-same-price.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visual Studio Magazine
            </a>
            ). Teams that &quot;got code review for free&quot; until now have 28
            days to evaluate alternatives.
          </p>

          <p className="text-lg leading-relaxed">
            The honest comparison: <code>claude ultrareview</code> on GitHub-hosted
            runners charges you both Anthropic for the review (~$12) and GitHub
            for the runner minutes (~$0.05 for a 6-minute Linux job). The Anthropic
            charge dominates by orders of magnitude; the runner cost is a rounding
            error. The Copilot billing concern is structural for any CI-hosted AI
            reviewer, including this one. The right cost lever is the frequency
            guards from the previous section, not switching providers.
          </p>
        </section>

        {/* Section 8: Hardening + edges */}
        <section id="hardening" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldCheck" size="md" />
            Known Edges and the Hardening Checklist
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            A few rough edges are worth knowing about before you turn this on
            org-wide.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Empty findings on huge PRs.</strong>{" "}
            <a
              href="https://github.com/anthropics/claude-code/issues/50029"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Issue #50029
            </a>{" "}
            reports an empty <code>findings: []</code> array on PRs with several
            thousand changed files. The workaround is to either split the PR or
            use the no-arg form which bundles local state instead of cloning the
            PR. If your team routinely opens 1000-file PRs, ultrareview probably
            isn&apos;t the right tool for that PR class anyway.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Repository too large to bundle.</strong> The docs note that
            Claude Code prompts for PR mode if your bundled tree exceeds the
            upload size. Push your branch, open a draft PR, then run{" "}
            <code>claude ultrareview &lt;PR-number&gt;</code> so the remote
            sandbox clones from <code>github.com</code> directly.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Free runs expire May 5, 2026.</strong> Each Pro and Max
            account gets exactly three runs to evaluate the feature. Don&apos;t
            burn them on Dependabot PRs you weren&apos;t going to review anyway.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Cost surprise on busy weeks.</strong> A merge train with 30
            substantive PRs in a day at $14 each is $420 nobody planned for. The
            spend cap setting linked from the cost-control section is the only
            real defense.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The 12-item production checklist I run through before turning the
            workflow on a new repo:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-lg leading-relaxed mb-6 pl-4">
            <li>Pin the CLI version (<code>@anthropic-ai/claude-code@2.1.120</code> or later).</li>
            <li>Use a dedicated Pro or Max account whose owner is documented in the runbook.</li>
            <li>
              Store <code>CLAUDE_CODE_OAUTH_TOKEN</code> as a repository secret,
              not an org-wide variable.
            </li>
            <li>
              Restrict workflow <code>permissions:</code> to{" "}
              <code>pull-requests: write, contents: read</code> and nothing else.
            </li>
            <li>Skip drafts and bot actors with <code>if:</code> conditions.</li>
            <li>Add a label gate or diff-size gate so cost only fires on substantive PRs.</li>
            <li>
              Pass <code>--timeout 20</code> with a job-level{" "}
              <code>timeout-minutes: 25</code> to bound runner cost.
            </li>
            <li>
              Pipe stdout to a file. Never trust the comment poster with raw model
              output (link to{" "}
              <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
                hardening guide
              </Link>
              ).
            </li>
            <li>Fail the build only on <code>important</code> findings, not nits.</li>
            <li>
              Set an org-level extra-usage spend cap at{" "}
              <code>claude.ai/admin-settings/usage</code>.
            </li>
            <li>Set a calendar reminder to rotate the OAuth token at day 350.</li>
            <li>
              Subscribe the runbook owner to the{" "}
              <a
                href="https://code.claude.com/docs/en/changelog"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Claude Code changelog
              </a>{" "}
              for breaking changes to the subcommand surface.
            </li>
          </ol>

          <p className="text-lg leading-relaxed">
            None of these items are clever. They&apos;re the boring guardrails
            that turn a <em>&quot;cool, it works&quot;</em> demo into a workflow
            you can leave running for a year without surprises. Five days after
            v2.1.120 shipped, almost no one has these in writing yet. Yours can.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-it">
              <AccordionTrigger>
                What is the claude ultrareview CLI subcommand?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  <code>claude ultrareview [target]</code> is a non-interactive
                  CLI subcommand added in Claude Code 2.1.120 (April 28, 2026).
                  It runs the same multi-agent cloud review as{" "}
                  <code>/ultrareview</code>, prints findings to stdout, supports{" "}
                  <code>--json</code> for raw output, and exits 0 on completion
                  or 1 on failure. Designed for CI scripts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="api-key-fails">
              <AccordionTrigger>
                Why does claude ultrareview fail with ANTHROPIC_API_KEY?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Ultrareview runs on Claude Code on the web infrastructure and
                  requires Claude.ai account authentication, not an API key. The
                  official <code>anthropics/claude-code-action@v1</code> uses{" "}
                  <code>ANTHROPIC_API_KEY</code> and cannot run ultrareview.
                  Generate a long-lived OAuth token with{" "}
                  <code>claude setup-token</code> on a Pro or Max account
                  instead.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-to-run-gha">
              <AccordionTrigger>
                How do I run claude ultrareview in GitHub Actions?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Install the CLI with{" "}
                  <code>npm install -g @anthropic-ai/claude-code@2.1.120</code>,
                  store <code>CLAUDE_CODE_OAUTH_TOKEN</code> as a repo secret, and
                  call <code>claude ultrareview --json --timeout 20</code> with
                  the PR number on the <code>pull_request</code> event. Pipe
                  stdout to <code>bugs.json</code> and post findings with{" "}
                  <code>gh pr comment</code>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger>
                How much does claude ultrareview cost per run in CI?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Each ultrareview run costs roughly $5 to $20 in extra usage,
                  scaling with diff size. Pro and Max accounts get three free
                  runs that expire May 5, 2026. At an average of $12 per review,
                  50 PRs per month costs about $600. Skip drafts and bot PRs to
                  keep the bill bounded.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bedrock-vertex">
              <AccordionTrigger>
                Can I run claude ultrareview on Amazon Bedrock or Google Vertex AI?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  No. The official docs state ultrareview is not available when
                  using Claude Code with Amazon Bedrock, Google Cloud Vertex AI,
                  or Microsoft Foundry, and it is not available to organizations
                  with Zero Data Retention enabled. Ultrareview only works with
                  direct Claude.ai OAuth authentication.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="exit-codes">
              <AccordionTrigger>
                What exit codes does claude ultrareview use in CI?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Exit 0 means the review completed, with or without findings.
                  Exit 1 means the review failed to launch, the remote session
                  errored, or the timeout elapsed. Exit 130 means the subcommand
                  was interrupted with Ctrl-C. The remote review keeps running on
                  interrupt, so follow the session URL printed to stderr.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vs-managed">
              <AccordionTrigger>
                How is claude ultrareview different from the managed Code Review product?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  <code>claude ultrareview</code> is a CLI subcommand you wire
                  into your own pipeline (Pro/Max/Team/Enterprise). The managed
                  Code Review is a GitHub App for Team and Enterprise that posts
                  inline review comments automatically and costs $15-$25 per
                  review. Pick the CLI for control, the managed product for zero
                  YAML.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="gitlab">
              <AccordionTrigger>
                Can I use claude ultrareview with GitLab CI?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, but the PR-number target form is GitHub-specific because
                  it clones from a <code>github.com</code> remote. On GitLab, use
                  the no-arg form (<code>claude ultrareview</code>) which bundles
                  your local working tree and reviews the diff against the
                  default branch. Authenticate with{" "}
                  <code>CLAUDE_CODE_OAUTH_TOKEN</code> as a masked CI variable.
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
                  The same PR comment poster used here inherits the Comment and
                  Control threat model. Tool allowlists, OIDC, script caps, and
                  the assembled hardened workflow.
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
                <CategoryIcon icon="ShieldHalf" size="md" />
                <CardTitle>Regression-Proof Claude Code Workflows: Pin, Lock, Test</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Why the version pin in this workflow matters: Anthropic shipped
                  three confirmed regressions in seven weeks. Pin the CLI, lock
                  effort, allowlist models, fixture-test.
                </p>
                <Link
                  href="/blog/regression-proofing-claude-code-workflows"
                  className="project-link"
                >
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
