import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Claude Code Security Review GitHub Action: 2026 Setup Guide",
  description:
    "Set up Anthropic's Claude Code Security Review GitHub Action: workflow YAML, false positive tuning, cost math, and comparison with Semgrep and Snyk.",
  keywords: [
    "claude code security review github action",
    "claude code security review",
    "ai sast github actions",
    "automated security review ai",
    "github actions vulnerability scanning",
    "anthropic security review action",
    "claude code security scan",
    "anthropics claude-code-security-review",
    "claude code security review false positives",
    "claude code security review cost",
    "claude code vs semgrep",
    "ai code security review",
    "ai pull request security scan",
    "github actions claude security",
    "devsecops claude code",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Claude Code Security Review GitHub Action: 2026 Setup Guide",
    description:
      "Set up Anthropic's Claude Code Security Review GitHub Action: workflow YAML, false positive tuning, cost math, and comparison with Semgrep and Snyk.",
    url: "https://avinashsangle.com/blog/claude-code-security-review-github-actions",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-04-22T00:00:00.000Z",
    modifiedTime: "2026-04-22T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-claude-code-security-review-github-actions.png",
        width: 1200,
        height: 630,
        alt: "Claude Code Security Review GitHub Action - 2026 Setup Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code Security Review GitHub Action: 2026 Setup Guide",
    description:
      "Set up Anthropic's Claude Code Security Review GitHub Action: workflow YAML, false positive tuning, cost math, and comparison with Semgrep and Snyk.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-claude-code-security-review-github-actions.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/claude-code-security-review-github-actions",
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
  headline: "Claude Code Security Review GitHub Action: 2026 Setup Guide",
  description:
    "Set up Anthropic's Claude Code Security Review GitHub Action: workflow YAML, false positive tuning, cost math, and comparison with Semgrep and Snyk.",
  image: "https://avinashsangle.com/og-claude-code-security-review-github-actions.png",
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
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/claude-code-security-review-github-actions",
  },
  keywords:
    "claude code security review github action, ai sast, github actions security, anthropic security review, false positive filtering, devsecops claude code",
  articleSection: "Claude Code",
  wordCount: 2800,
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
      name: "Claude Code Security Review GitHub Action",
      item: "https://avinashsangle.com/blog/claude-code-security-review-github-actions",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Claude Code Security Review GitHub Action?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is an official Anthropic GitHub Action (anthropics/claude-code-security-review) that uses Claude to scan pull request diffs for security vulnerabilities and post findings as PR comments. It covers injection, auth bypass, data exposure, crypto issues, and business-logic flaws across any language.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Claude Code Security Review cost per PR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost is token-based against your Anthropic API key. A typical 500-line PR diff with Opus runs roughly $0.90 to $1.80. Switching the claude-model input to Sonnet 4.6 drops that by three to five times. Unlike the separate Claude Code Review service, there is no flat per-PR fee.",
      },
    },
    {
      "@type": "Question",
      name: "How do I reduce false positives in Claude Code Security Review?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pass a Markdown file to the false-positive-filtering-instructions input describing org-specific patterns the scanner should skip, for example admin-only routes bound to localhost. Built-in filters already drop findings with a confidence score below 8 and exclude DoS, rate-limit, and generic input-validation flags by default.",
      },
    },
    {
      "@type": "Question",
      name: "Does Claude Code Security Review replace Semgrep or Snyk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It complements them. Claude is strong at semantic and business-logic flaws that pattern-matching SAST tools miss. Semgrep and Snyk remain best for deterministic rules, dependency CVEs, and license checks. A layered pipeline using all three produces higher detection rates than any single tool.",
      },
    },
    {
      "@type": "Question",
      name: "What permissions does the action need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The action needs pull-requests: write to post comments and contents: read to read the diff. Do not grant contents: write or pull-requests: admin. The API key must be stored as a repository secret and enabled for both Claude API and Claude Code usage in your Anthropic Console.",
      },
    },
    {
      "@type": "Question",
      name: "Is Claude Code Security Review safe to run on external contributor PRs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not by default. The action is explicitly not hardened against prompt injection, so a malicious PR can manipulate the reviewer through code comments. Anthropic recommends turning on 'Require approval for all external contributors' in Actions settings so workflows only run after maintainer review.",
      },
    },
    {
      "@type": "Question",
      name: "What models does the Claude Code Security Review action support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The default model is claude-opus-4-1-20250805, configurable via the claude-model input. Any Claude model your API key is enabled for works, including Sonnet and Haiku variants. Newer Opus versions like 4.6 and 4.7 can also be specified when you want higher accuracy on complex PRs.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when Claude Code Security Review times out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The default timeout is 20 minutes. Large PRs with many files can exceed it and fail mid-scan. Raise it via the claudecode-timeout input (for example, 40 minutes) or narrow scope with exclude-directories to skip generated code, vendor folders, and test fixtures. Retrying usually works after a tightening.",
      },
    },
  ],
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up Claude Code Security Review on GitHub",
  description:
    "Step-by-step guide to installing Anthropic's Claude Code Security Review GitHub Action, configuring a Claude API key, and running it on every pull request.",
  totalTime: "PT10M",
  tool: [
    { "@type": "HowToTool", name: "GitHub repository" },
    { "@type": "HowToTool", name: "Anthropic Console" },
  ],
  supply: [
    { "@type": "HowToSupply", name: "Anthropic API key enabled for Claude Code" },
    { "@type": "HowToSupply", name: "GitHub Actions enabled on the repo" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Generate a Claude API key",
      text: "Create an API key in the Anthropic Console and enable it for both Claude API and Claude Code usage.",
      url: "https://avinashsangle.com/blog/claude-code-security-review-github-actions#how-to-set-up",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Add the key as a repository secret",
      text: "In the GitHub repo, go to Settings, Secrets and variables, Actions, and create a secret named CLAUDE_API_KEY.",
      url: "https://avinashsangle.com/blog/claude-code-security-review-github-actions#how-to-set-up",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Create the workflow file",
      text: "Add .github/workflows/security-review.yml with the anthropics/claude-code-security-review action and pull_request trigger.",
      url: "https://avinashsangle.com/blog/claude-code-security-review-github-actions#how-to-set-up",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Require approval for external contributors",
      text: "In Settings, Actions, General, enable 'Require approval for all external contributors' to mitigate prompt injection risk.",
      url: "https://avinashsangle.com/blog/claude-code-security-review-github-actions#security-considerations",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Open a test PR and verify",
      text: "Push a branch with a small code change, open a PR, and confirm the action runs and posts findings as a PR comment.",
      url: "https://avinashsangle.com/blog/claude-code-security-review-github-actions#how-to-set-up",
    },
  ],
})

export default function ClaudeCodeSecurityReviewPage() {
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
        dangerouslySetInnerHTML={{ __html: howToSchema }}
      />

      <div className="container-project py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Claude Code Security Review GitHub Action" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">Claude Code</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Claude Code Security Review GitHub Action: 2026 Setup Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            The Claude Code Security Review GitHub Action (<code>anthropics/claude-code-security-review</code>)
            uses Claude to scan pull request diffs for vulnerabilities and post findings as
            PR comments. Add it as a workflow, supply a Claude API key enabled for Claude
            Code, and you get context-aware SAST on every PR in under 20 minutes.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> April 22, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 11 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-04-22</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Claude Code", "GitHub Actions", "DevSecOps", "AI SAST", "Security"].map(
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
                  <a href="#what-is-the-action" className="project-link">
                    What Is the Claude Code Security Review GitHub Action?
                  </a>
                </li>
                <li>
                  <a href="#how-to-set-up" className="project-link">
                    How to Set Up Claude Code Security Review on GitHub
                  </a>
                </li>
                <li>
                  <a href="#action-inputs" className="project-link">
                    All Nine Action Inputs Explained
                  </a>
                </li>
                <li>
                  <a href="#reduce-false-positives" className="project-link">
                    How to Reduce False Positives
                  </a>
                </li>
                <li>
                  <a href="#cost-per-pr" className="project-link">
                    How Much Does Claude Code Security Review Cost Per PR?
                  </a>
                </li>
                <li>
                  <a href="#vs-semgrep-snyk" className="project-link">
                    Claude Code Security Review vs Semgrep, Snyk, and SonarQube
                  </a>
                </li>
                <li>
                  <a href="#security-considerations" className="project-link">
                    Security Considerations and Prompt Injection Risk
                  </a>
                </li>
                <li>
                  <a href="#troubleshooting" className="project-link">
                    Troubleshooting Common Failures
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
                Official action at <code>anthropics/claude-code-security-review@main</code> -
                4.3k stars, MIT, Python-based, maintained by Anthropic.
              </li>
              <li>
                Requires <code>CLAUDE_API_KEY</code> enabled for both Claude API and Claude Code
                usage. Store it as a repo secret.
              </li>
              <li>
                Default model is <code>claude-opus-4-1-20250805</code>, switchable through the
                <code> claude-model</code> input. Nine total inputs cover scope, timeout, and
                custom instructions.
              </li>
              <li>
                Not hardened against prompt injection. Turn on &quot;Require approval for all
                external contributors&quot; before accepting fork PRs.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1: What Is the Action */}
        <section id="what-is-the-action" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldCheck" size="md" />
            What Is the Claude Code Security Review GitHub Action?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The Claude Code Security Review GitHub Action is an AI-powered SAST (static
            application security testing) tool built by Anthropic. You install it as a
            GitHub Action, configure a Claude API key, and on every pull request it reads
            the diff, reasons about the code semantically, and posts vulnerability findings
            as PR comments. The{" "}
            <a
              href="https://github.com/anthropics/claude-code-security-review"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              official repository
            </a>{" "}
            has 4,300 stars and 388 forks as of April 2026.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The big difference between this and a classic SAST tool is that Claude doesn&apos;t
            run pattern rules. It reads your code the way a human reviewer would, follows
            data flow across files, and flags issues that need context to understand: broken
            access control, business-logic flaws, insecure deserialization, auth bypass
            through an unusual state machine. According to Gecko Security&apos;s analysis,
            LLM-assisted code elevates vulnerability rates sharply, which makes automated
            review on every PR more important than it was a year ago.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            A common point of confusion: this action is a different product from Anthropic&apos;s
            Claude Code Review service (announced March 2026). Claude Code Review is a
            managed service that runs inside claude.ai, costs roughly $15 to $25 per PR,
            and is restricted to Team plan customers. The GitHub Action covered here runs
            in your own repo, bills tokens to your API key, and works on any plan that can
            enable Claude Code.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I&apos;ve been running this action on my portfolio site and a few side projects
            since early April. The findings have been mostly useful, with occasional
            over-eager flags on test fixtures. The tuning knobs are solid once you know
            where to look, which is what this guide covers next.
          </p>
        </section>

        {/* Section 2: How to Set Up */}
        <section id="how-to-set-up" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Wrench" size="md" />
            How to Set Up Claude Code Security Review on GitHub
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Setup takes about ten minutes if you already have a Claude API key. If you
            don&apos;t, you&apos;ll need to create one first and enable it for Claude Code
            in the Anthropic Console.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 1: Generate and enable a Claude API key</h3>

          <p className="text-lg leading-relaxed mb-6">
            Log into the{" "}
            <a
              href="https://console.anthropic.com/settings/keys"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Anthropic Console
            </a>
            , create an API key, and make sure it is enabled for both the Claude API and
            Claude Code. The action fails with an unauthorized error if Claude Code isn&apos;t
            toggled on, and the error message doesn&apos;t tell you which toggle is missing.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 2: Add the key as a repo secret</h3>

          <p className="text-lg leading-relaxed mb-6">
            In your GitHub repo, go to <strong>Settings &gt; Secrets and variables &gt; Actions</strong>,
            click <strong>New repository secret</strong>, and paste the key with the name
            <code> CLAUDE_API_KEY</code>. Don&apos;t put it in a workflow file literal, even
            briefly, because GitHub logs fork PRs before secret redaction kicks in on some
            edge cases.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 3: Create the workflow file</h3>

          <p className="text-lg leading-relaxed mb-6">
            Drop the following into <code>.github/workflows/security-review.yml</code>. This
            is the minimum viable setup: run on every PR, comment findings back on the PR,
            and let the action pick its defaults for everything else.
          </p>

          <CodeBlock language="yaml" filename=".github/workflows/security-review.yml" code={`name: Claude Security Review

permissions:
  pull-requests: write
  contents: read

on:
  pull_request:

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          ref: \${{ github.event.pull_request.head.sha || github.sha }}
          fetch-depth: 2

      - uses: anthropics/claude-code-security-review@main
        with:
          comment-pr: true
          claude-api-key: \${{ secrets.CLAUDE_API_KEY }}`} />

          <p className="text-lg leading-relaxed my-6">
            Two bits of this are easy to miss. <code>fetch-depth: 2</code> is required so
            that the checkout step pulls both the base and head commits, which is what the
            action diffs against. Skip it and every file looks &quot;new&quot; to the scanner,
            which both wastes tokens and distorts findings. The explicit <code>permissions</code> block
            matters because modern GitHub repos default to restricted permissions on the
            <code> GITHUB_TOKEN</code>, and the action can&apos;t post a comment without
            <code> pull-requests: write</code>.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 4: Lock down fork PRs</h3>

          <p className="text-lg leading-relaxed mb-6">
            Before merging the workflow, go to <strong>Settings &gt; Actions &gt; General</strong> and
            enable <strong>Require approval for all external contributors</strong>. Skip
            this step and a random fork PR can try to prompt-inject the reviewer into
            dismissing real findings. I cover the reasoning in the{" "}
            <a href="#security-considerations" className="project-link">
              security considerations section
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 5: Open a test PR</h3>

          <p className="text-lg leading-relaxed mb-6">
            Create a small branch with any code change, open a PR, and watch the Actions
            tab. On a first run against a 200-line Python diff, my scan finished in roughly
            3 minutes and came back with two findings (both legit). That output pattern is
            typical for small PRs on Sonnet 4.6. Larger PRs on Opus can take 10 to 15 minutes.
          </p>
        </section>

        {/* Section 3: Action Inputs */}
        <section id="action-inputs" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Settings" size="md" />
            All Nine Action Inputs Explained
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The action exposes nine inputs. Most people only need to set two or three, but
            knowing all of them helps when something doesn&apos;t behave the way you expect.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Input</th>
                  <th className="py-3 pr-4 font-semibold">Default</th>
                  <th className="py-3 pr-4 font-semibold">When to change</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4"><code>claude-api-key</code></td>
                  <td className="py-3 pr-4">Required</td>
                  <td className="py-3 pr-4">Always pass from secrets, never literal</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4"><code>comment-pr</code></td>
                  <td className="py-3 pr-4"><code>true</code></td>
                  <td className="py-3 pr-4">Set false for silent runs that only produce artifacts</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4"><code>upload-results</code></td>
                  <td className="py-3 pr-4"><code>true</code></td>
                  <td className="py-3 pr-4">Keep true for audit trails and SARIF workflows</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4"><code>exclude-directories</code></td>
                  <td className="py-3 pr-4">None</td>
                  <td className="py-3 pr-4">Skip generated code, vendor, node_modules, test fixtures</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4"><code>claude-model</code></td>
                  <td className="py-3 pr-4"><code>claude-opus-4-1-20250805</code></td>
                  <td className="py-3 pr-4">Switch to Sonnet or Haiku to cut cost</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4"><code>claudecode-timeout</code></td>
                  <td className="py-3 pr-4"><code>20</code> (minutes)</td>
                  <td className="py-3 pr-4">Raise for large PRs or monorepos</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4"><code>run-every-commit</code></td>
                  <td className="py-3 pr-4"><code>false</code></td>
                  <td className="py-3 pr-4">Leave false - enabling multiplies cost and noise</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4"><code>false-positive-filtering-instructions</code></td>
                  <td className="py-3 pr-4">None</td>
                  <td className="py-3 pr-4">Point at an org-specific FP markdown file</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4"><code>custom-security-scan-instructions</code></td>
                  <td className="py-3 pr-4">None</td>
                  <td className="py-3 pr-4">Point at a custom rules markdown file</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The action also emits two outputs: <code>findings-count</code> (an integer) and
            <code> results-file</code> (a path to the JSON report). You can wire these into
            downstream steps. A pattern I use in stricter repos is to fail the job when
            <code> findings-count</code> exceeds zero, so the PR blocks until the author
            addresses the issues.
          </p>

          <CodeBlock language="yaml" filename=".github/workflows/security-review.yml" code={`- uses: anthropics/claude-code-security-review@main
  id: review
  with:
    claude-api-key: \${{ secrets.CLAUDE_API_KEY }}

- name: Fail on any finding
  if: steps.review.outputs.findings-count != '0'
  run: |
    echo "Security review flagged \${{ steps.review.outputs.findings-count }} issue(s)."
    exit 1`} />
        </section>

        {/* Section 4: Reduce False Positives */}
        <section id="reduce-false-positives" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Filter" size="md" />
            How to Reduce False Positives
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The action already does a lot of filtering on your behalf. Every flagged
            vulnerability passes through a verification sub-task that re-analyzes the
            finding against actual code behavior. Anything with a confidence score below 8
            is dropped. Entire categories are auto-excluded: denial of service, rate
            limiting concerns, memory or CPU exhaustion, input validation without proven
            impact, and most open-redirect findings.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The remaining noise usually comes from code that looks suspicious in isolation
            but is safe in context. Admin-only routes that deliberately skip auth because
            they bind to localhost, test fixtures with hardcoded secrets, internal scripts
            that intentionally shell out to user-controlled strings. The{" "}
            <a
              href="https://specterops.io/blog/2026/03/26/leveling-up-secure-code-reviews-with-claude-code/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              SpecterOps writeup
            </a>{" "}
            puts it well: Claude Code works best as a targeted manager pointed at specific
            files with specific context, not as a shotgun scanner.
          </p>

          <h3 className="text-xl font-semibold mb-4">Write a false-positive filtering file</h3>

          <p className="text-lg leading-relaxed mb-6">
            This is the input almost nobody shows an example of. You put a Markdown file in
            the repo describing org-specific patterns the scanner should skip, then point
            the action at it. The model reads the file before scanning and applies your
            rules during verification. Here is a real one from a project I run:
          </p>

          <CodeBlock language="markdown" filename=".security/false-positives.md" code={`# Organization-specific false positive filters

## Admin routes bound to localhost
Any handler under \`/internal/*\` is served on 127.0.0.1 only. These routes
intentionally skip authentication because the bind address provides the
boundary. Do not flag missing auth on these routes.

## Test fixtures with sample credentials
Files under \`tests/fixtures/\` may contain hardcoded tokens and passwords
used for replay and snapshot tests. These are not real credentials. Do not
flag hardcoded-secret findings in this path.

## Debug endpoints disabled in production
Any file importing from \`app/debug/\` is gated by the \`DEBUG\` environment
flag, which is always false in production. Do not flag eval or exec calls
in these files.

## Allowed shell-out patterns
\`subprocess.run\` calls in \`scripts/release/\` run against repo-controlled
input only. The commit history enforces review. Do not flag command
injection in these scripts.`} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            Then reference it from the workflow:
          </p>

          <CodeBlock language="yaml" filename=".github/workflows/security-review.yml" code={`- uses: anthropics/claude-code-security-review@main
  with:
    claude-api-key: \${{ secrets.CLAUDE_API_KEY }}
    false-positive-filtering-instructions: ./.security/false-positives.md`} />

          <p className="text-lg leading-relaxed mt-6">
            On a small Rust project where I was getting three or four false positives per
            PR, adding a similar filter file cut them to roughly one per week. Lynch on
            Hacker News reported a false positive rate under 20% with Opus 4.6 on kernel
            vulnerability work, which tracks with what I see on application code after
            tuning. See{" "}
            <a
              href="https://www.infoq.com/news/2026/04/claude-code-linux-vulnerability/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              InfoQ, April 2026
            </a>{" "}
            for the kernel case study.
          </p>
        </section>

        {/* Section 5: Cost per PR */}
        <section id="cost-per-pr" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="DollarSign" size="md" />
            How Much Does Claude Code Security Review Cost Per PR?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The action bills tokens against your Anthropic API key directly. There is no
            flat per-PR fee (that&apos;s the separate Claude Code Review service, which
            averages $15 to $25 per PR and is Team plan only). Your cost depends on three
            variables: model choice, diff size, and how many verification sub-tasks the
            model kicks off.
          </p>

          <h3 className="text-xl font-semibold mb-4">Rough token math</h3>

          <p className="text-lg leading-relaxed mb-6">
            A 500-line PR diff with 10 files touched typically consumes 30,000 to 60,000
            input tokens plus 3,000 to 6,000 output tokens on Opus 4.1. At published Opus
            pricing, that is roughly $0.90 to $1.80 per scan. Switch <code>claude-model</code> to
            Sonnet 4.6 and the same diff runs closer to $0.20 to $0.40. For Haiku, the
            cost drops another two to three times, but I find it misses more subtle flaws.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            These are ballpark figures from my own usage. Real numbers depend on how much
            context the model pulls in through file reads and whether it invokes verification
            sub-tasks. Large PRs with many file touches can easily double the token count.
            For detailed cost tracking, I wrote a full guide on{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              Claude Code cost tracking
            </Link>{" "}
            that covers the same techniques you&apos;d use to audit security review spending.
          </p>

          <h3 className="text-xl font-semibold mb-4">Three knobs to lower cost</h3>

          <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed mb-6 pl-4">
            <li>
              <strong>Switch models:</strong> <code>claude-model: claude-sonnet-4-6</code> gives
              three to five times lower cost per token with minor accuracy tradeoff for
              application code.
            </li>
            <li>
              <strong>Trim scope:</strong> Add <code>exclude-directories: &quot;node_modules,vendor,dist,tests/snapshots&quot;</code> to
              skip paths the reviewer has no business reading.
            </li>
            <li>
              <strong>Leave <code>run-every-commit: false</code>:</strong> Enabling it triggers a
              rescan on every push, which can easily 5x your monthly bill on active PRs.
            </li>
          </ol>

          <p className="text-lg leading-relaxed">
            A repo I manage processes roughly 30 PRs per week. On Sonnet 4.6 with scoped
            exclusions, the security-review line item runs around $25 to $35 per month.
            On Opus it is closer to $120 to $160. Both are cheaper than a single hour of a
            human security consultant&apos;s time, but the gap matters at team scale.
          </p>
        </section>

        {/* Section 6: vs Semgrep, Snyk, SonarQube */}
        <section id="vs-semgrep-snyk" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompare" size="md" />
            Claude Code Security Review vs Semgrep, Snyk, and SonarQube
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Short version: Claude Code Security Review is not a replacement for pattern-based
            SAST, dependency scanning, or code-quality tools. It complements them. A{" "}
            <a
              href="https://sanj.dev/post/ai-code-security-tools-comparison"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              2025 comparison by sanj.dev
            </a>{" "}
            tested four tools and found Snyk Code detected just 11.2% of planted vulnerabilities
            on its own. All four tools combined still only reached 38.8%. Layered scanning beats
            any single tool.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Tool</th>
                  <th className="py-3 pr-4 font-semibold">Strength</th>
                  <th className="py-3 pr-4 font-semibold">Weakness</th>
                  <th className="py-3 pr-4 font-semibold">Cost model</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">Semgrep</td>
                  <td className="py-3 pr-4">Fast pattern rules, YAML-customizable</td>
                  <td className="py-3 pr-4">Misses semantic and logic flaws</td>
                  <td className="py-3 pr-4">Free OSS / paid cloud</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Snyk</td>
                  <td className="py-3 pr-4">Dependency CVEs, SCA, IaC</td>
                  <td className="py-3 pr-4">Lower SAST detection rate in tests</td>
                  <td className="py-3 pr-4">Per-developer subscription</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">SonarQube</td>
                  <td className="py-3 pr-4">Code quality + some security</td>
                  <td className="py-3 pr-4">Quality-first, not security-first</td>
                  <td className="py-3 pr-4">Self-host / licensed</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Claude Code Security Review</td>
                  <td className="py-3 pr-4">Semantic reasoning, business-logic flaws</td>
                  <td className="py-3 pr-4">Token cost, non-deterministic output</td>
                  <td className="py-3 pr-4">Token-based API billing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-4">Recommended layered pipeline</h3>

          <p className="text-lg leading-relaxed mb-6">
            On repos I manage, the pipeline looks like this: Semgrep runs first as the
            fast, deterministic blocking gate. Snyk or Dependabot handles dependency CVEs
            and SBOM generation. Claude Code Security Review runs last as an advisory
            commenter that flags semantic issues the pattern tools miss. Keeping Claude
            advisory (not blocking) avoids cost blowouts when someone opens a draft PR with
            incomplete code.
          </p>

          <CodeBlock language="yaml" filename=".github/workflows/security.yml" code={`name: Security Pipeline

on: [pull_request]

jobs:
  semgrep:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: returntocorp/semgrep-action@v1
        with:
          config: auto

  dependencies:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}

  ai-review:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write
      contents: read
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 2
      - uses: anthropics/claude-code-security-review@main
        with:
          claude-api-key: \${{ secrets.CLAUDE_API_KEY }}
          claude-model: claude-sonnet-4-6`} />
        </section>

        {/* Section 7: Security Considerations */}
        <section id="security-considerations" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Shield" size="md" />
            Security Considerations and Prompt Injection Risk
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The action&apos;s README is explicit about this: it is not hardened against
            prompt injection. A malicious contributor can embed instructions in code
            comments, string literals, or file names that subvert the reviewer into
            dismissing real vulnerabilities or running unintended tool calls. The broader
            AI supply chain conversation is hot right now for a reason. The Register
            reported on April 16, 2026 that an MCP design flaw put up to{" "}
            <a
              href="https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              200,000 MCP servers at risk of takeover
            </a>
            , and similar stories hit The Hacker News the same week.
          </p>

          <h3 className="text-xl font-semibold mb-4">Three mitigations I actually apply</h3>

          <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed mb-6 pl-4">
            <li>
              <strong>Require approval for fork PRs.</strong> In <strong>Settings &gt; Actions
              &gt; General</strong>, enable &quot;Require approval for all external
              contributors&quot;. The action then runs only after a maintainer clicks
              approve, which lets you eyeball the diff for obvious prompt injection first.
              See the official{" "}
              <a
                href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#controlling-changes-from-forks-to-workflows-in-public-repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub docs
              </a>{" "}
              for the exact setting.
            </li>
            <li>
              <strong>Minimum permissions.</strong> Grant <code>pull-requests: write</code> and
              <code> contents: read</code>. Never grant <code>contents: write</code> or
              <code> pull-requests: admin</code>. If the reviewer is prompt-injected, it
              shouldn&apos;t have the power to push commits or close issues.
            </li>
            <li>
              <strong>Restrict key scope.</strong> Use a dedicated API key for this action
              with usage caps set in the Anthropic Console. A compromised workflow can
              burn through your monthly spend if the key is shared with other services.
            </li>
          </ol>

          <p className="text-lg leading-relaxed">
            I treat Claude Code Security Review as advisory input, not a security gate.
            The human reviewer still has to care. If you want the AI output to block
            merges, fail the job on <code>findings-count</code> only after a Semgrep pass,
            and keep Semgrep as the primary gate.
          </p>
        </section>

        {/* Section 8: Troubleshooting */}
        <section id="troubleshooting" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="AlertTriangle" size="md" />
            Troubleshooting Common Failures
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Five issues come up often enough to be worth calling out. Most are cheap fixes
            once you know where to look.
          </p>

          <div className="grid gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Clock" size="sm" />
                  Timeout after 20 minutes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Raise <code>claudecode-timeout: 40</code> or narrow <code>exclude-directories</code> to
                  skip generated code, vendor paths, and test snapshots. Large monorepos
                  with 100+ file diffs almost always need this.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Key" size="sm" />
                  &quot;CLAUDE_API_KEY not enabled for Claude Code&quot;
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Go to{" "}
                  <a
                    href="https://console.anthropic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    console.anthropic.com
                  </a>
                  , open the key settings, and enable Claude Code alongside Claude API.
                  The action won&apos;t auto-detect this toggle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="MessageSquare" size="sm" />
                  Duplicate comments on re-runs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The action edits its previous comment rather than posting a new one. If
                  you see duplicates, check that <code>permissions</code> is set at the
                  workflow level (not just the job level) and that no other workflow is
                  also commenting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="FileX" size="sm" />
                  Findings missing on large PRs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The model may skip files when the context window gets tight. Either trim
                  scope with <code>exclude-directories</code>, split the PR, or switch to a
                  model with a larger context window. Opus 4.7 has helped on 2,000+ line diffs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="GitPullRequest" size="sm" />
                  External PR workflow never runs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expected behavior when &quot;Require approval for all external
                  contributors&quot; is on. Approve the workflow from the PR page. This
                  is the mitigation working as intended, not a bug.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-action">
              <AccordionTrigger>What is the Claude Code Security Review GitHub Action?</AccordionTrigger>
              <AccordionContent>
                <p>
                  It is an official Anthropic GitHub Action (<code>anthropics/claude-code-security-review</code>)
                  that uses Claude to scan pull request diffs for security vulnerabilities and
                  post findings as PR comments. It covers injection, auth bypass, data exposure,
                  crypto issues, and business-logic flaws across any language.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost-per-pr">
              <AccordionTrigger>How much does Claude Code Security Review cost per PR?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Cost is token-based against your Anthropic API key. A typical 500-line PR
                  diff with Opus runs roughly $0.90 to $1.80. Switching the <code>claude-model</code> input
                  to Sonnet 4.6 drops that by three to five times. Unlike the separate Claude
                  Code Review service, there is no flat per-PR fee.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="false-positives">
              <AccordionTrigger>How do I reduce false positives in Claude Code Security Review?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Pass a Markdown file to the <code>false-positive-filtering-instructions</code> input
                  describing org-specific patterns the scanner should skip, for example
                  admin-only routes bound to localhost. Built-in filters already drop
                  findings with a confidence score below 8 and exclude DoS, rate-limit, and
                  generic input-validation flags by default.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vs-semgrep">
              <AccordionTrigger>Does Claude Code Security Review replace Semgrep or Snyk?</AccordionTrigger>
              <AccordionContent>
                <p>
                  No. It complements them. Claude is strong at semantic and business-logic
                  flaws that pattern-matching SAST tools miss. Semgrep and Snyk remain best
                  for deterministic rules, dependency CVEs, and license checks. A layered
                  pipeline using all three produces higher detection rates than any single tool.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="permissions">
              <AccordionTrigger>What permissions does the action need?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The action needs <code>pull-requests: write</code> to post comments and
                  <code> contents: read</code> to read the diff. Do not grant <code>contents:
                  write</code> or <code>pull-requests: admin</code>. The API key must be
                  stored as a repository secret and enabled for both Claude API and Claude
                  Code usage in your Anthropic Console.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="external-prs">
              <AccordionTrigger>Is Claude Code Security Review safe to run on external contributor PRs?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Not by default. The action is explicitly not hardened against prompt
                  injection, so a malicious PR can manipulate the reviewer through code
                  comments. Anthropic recommends turning on &quot;Require approval for all
                  external contributors&quot; in Actions settings so workflows only run
                  after maintainer review.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="models">
              <AccordionTrigger>What models does the Claude Code Security Review action support?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The default model is <code>claude-opus-4-1-20250805</code>, configurable via
                  the <code>claude-model</code> input. Any Claude model your API key is
                  enabled for works, including Sonnet and Haiku variants. Newer Opus
                  versions like 4.6 and 4.7 can also be specified when you want higher
                  accuracy on complex PRs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="timeout">
              <AccordionTrigger>What happens when Claude Code Security Review times out?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The default timeout is 20 minutes. Large PRs with many files can exceed
                  it and fail mid-scan. Raise it via the <code>claudecode-timeout</code> input
                  (for example, 40 minutes) or narrow scope with <code>exclude-directories</code> to
                  skip generated code, vendor folders, and test fixtures. Retrying usually
                  works after a tightening.
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
                <CategoryIcon icon="DollarSign" size="md" />
                <CardTitle>Claude Code Cost Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Track and cut what the security-review action (and the rest of Claude Code)
                  costs you. JSONL logs, ccusage, and 7 practical tips to reduce spend.
                </p>
                <Link href="/blog/claude-code-cost-tracking" className="project-link">
                  Read the guide
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="FileText" size="md" />
                <CardTitle>How I Write CLAUDE.md Files That Actually Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The same <code>.claude/commands/</code> mechanism powers custom security-review
                  instructions. Patterns that work for CLAUDE.md work here too.
                </p>
                <Link href="/blog/claude-md-guide" className="project-link">
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
