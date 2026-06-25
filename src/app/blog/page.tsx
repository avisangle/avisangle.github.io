import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import { NewsletterSignup } from "@/components/newsletter-signup"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Technical Blog | AI, DevOps & Cloud Technologies Insights",
  description:
    "Technical blog and case studies on AI automation, DevOps practices, and cloud technologies. Learn about Model Context Protocol, Jenkins automation, and more from Avinash Sangle.",
  keywords: [
    "DevOps blog",
    "AI automation tutorials",
    "cloud architecture articles",
    "Jenkins tips",
    "MCP guides",
    "technical blog",
    "software engineering blog",
    "AI development",
    "case studies",
  ],
  openGraph: {
    title: "Technical Blog | AI & DevOps Insights | Avinash Sangle",
    description:
      "Technical blog and case studies on AI automation, DevOps practices, and cloud technologies.",
    url: "https://avinashsangle.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Blog | AI & DevOps Insights | Avinash Sangle",
    description:
      "Technical blog and case studies on AI automation, DevOps, and cloud technologies.",
  },
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Avinash Sangle's Technical Blog",
            description:
              "Technical blog and case studies on AI automation, DevOps practices, and cloud technologies.",
            url: "https://avinashsangle.com/blog",
            author: {
              "@type": "Person",
              name: "Avinash Sangle",
              url: "https://avinashsangle.com",
            },
            blogPost: [
              {
                "@type": "BlogPosting",
                headline: "Claude Tag for Engineering Teams: A Practical Setup Guide",
                url: "https://avinashsangle.com/blog/claude-tag-engineering-teams-guide",
                datePublished: "2026-06-25",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Apple Core AI: Run Open-Weight Models On-Device for Free",
                url: "https://avinashsangle.com/blog/apple-core-ai-on-device-inference-guide",
                datePublished: "2026-06-20",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "LiteLLM CVE-2026-42271: Patch, Rotate, and Harden the RCE",
                url: "https://avinashsangle.com/blog/litellm-mcp-exploit-response-guide",
                datePublished: "2026-06-16",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Claude Code Fable 5: Model Routing, Fallbacks, Cost Control",
                url: "https://avinashsangle.com/blog/claude-code-fable-5-model-routing",
                datePublished: "2026-06-11",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Claude Code Dynamic Workflows: When They're Worth the Cost",
                url: "https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide",
                datePublished: "2026-05-30",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Persistent Memory for AI Coding Agents Beyond CLAUDE.md",
                url: "https://avinashsangle.com/blog/persistent-memory-ai-coding-agents",
                datePublished: "2026-05-29",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Qwen Code CLI: Getting Started Guide for AI Coding 2026",
                url: "https://avinashsangle.com/blog/qwen-code-getting-started",
                datePublished: "2026-05-26",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Gemini 3.5 Flash for Agentic Coding: A Claude Coder's Guide",
                url: "https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide",
                datePublished: "2026-05-25",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Gemini CLI to Antigravity CLI: Migration Guide & Alternatives",
                url: "https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide",
                datePublished: "2026-05-21",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "OpenAI Codex Security GitHub Setup Guide: 2026 Walkthrough",
                url: "https://avinashsangle.com/blog/codex-security-github-setup",
                datePublished: "2026-05-14",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Claude Managed Agents Outcomes: Auto-Grading Agent Work",
                url: "https://avinashsangle.com/blog/claude-managed-agents-outcomes",
                datePublished: "2026-05-12",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Running claude ultrareview in CI/CD: GitHub Actions Guide",
                url: "https://avinashsangle.com/blog/ultrareview-ci-cd-pipelines",
                datePublished: "2026-05-03",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "MCP Code Execution Pattern: A Hands-On Claude Code Guide",
                url: "https://avinashsangle.com/blog/mcp-code-execution-pattern",
                datePublished: "2026-05-03",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Regression-Proof Claude Code Workflows: Pin, Lock, Test",
                url: "https://avinashsangle.com/blog/regression-proofing-claude-code-workflows",
                datePublished: "2026-04-28",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Harden Claude Code GitHub Actions: Prompt Injection Defense",
                url: "https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection",
                datePublished: "2026-04-25",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Claude Code Security Review GitHub Action: 2026 Setup Guide",
                url: "https://avinashsangle.com/blog/claude-code-security-review-github-actions",
                datePublished: "2026-04-22",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Getting Started with the ant CLI: Deploy Claude Agents",
                url: "https://avinashsangle.com/blog/ant-cli-getting-started",
                datePublished: "2026-04-18",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Claude Code Cost Tracking: Monitor and Cut Your Spending",
                url: "https://avinashsangle.com/blog/claude-code-cost-tracking",
                datePublished: "2026-04-16",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Claude Managed Agents vs Agent SDK: Which Should You Use?",
                url: "https://avinashsangle.com/blog/claude-managed-agents",
                datePublished: "2026-04-09",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Claude Mythos: What It Means for Developers Who Can't Use It",
                url: "https://avinashsangle.com/blog/claude-mythos-preview",
                datePublished: "2026-04-09",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Gemma 4 Models: Which One Should You Actually Use?",
                url: "https://avinashsangle.com/blog/gemma-4-models-guide",
                datePublished: "2026-04-06",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "How I Write CLAUDE.md Files That Actually Work (2026)",
                url: "https://avinashsangle.com/blog/claude-md-guide",
                datePublished: "2026-04-05",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Complete Guide to Clawdbot: Your Personal AI Assistant",
                url: "https://avinashsangle.com/blog/clawdbot-guide",
                datePublished: "2025-01-26",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
              {
                "@type": "BlogPosting",
                headline: "Complete Guide to Method CRM MCP Server",
                url: "https://avinashsangle.com/blog/method-crm-mcp",
                datePublished: "2025-01-15",
                author: { "@type": "Person", name: "Avinash Sangle" },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="hero-compact">
        <div className="container-project">
          <div className="hero-content">
            <h1 className="hero-title">Technical Blog & Case Studies</h1>
            <p className="hero-subtitle">
              Deep dives into AI Automation, DevOps Practices & Cloud Technologies
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section section-alt">
        <div className="container-project">
          <h2 className="section-title mb-8">Featured Article</h2>
          <Card className="p-6">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
              <CategoryIcon icon="Users" size="xl" className="mx-auto" />
              <div>
                <p className="text-accent font-semibold mb-2">CLAUDE CODE</p>
                <h3 className="text-2xl font-bold mb-4">Claude Tag for Engineering Teams: A Practical Setup Guide</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Anthropic&apos;s AI Slack teammate, set up the safe way: connect
                  MCP tools, scope channel access, decide on ambient mode, and cap
                  token costs before you roll it out to engineering.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Jun 25, 2026</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><CategoryIcon icon="Clock" size="sm" /> 11 min read</span>
                </div>
                <Button asChild>
                  <Link href="/blog/claude-tag-engineering-teams-guide">Read Article →</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* All Articles */}
      <section className="section">
        <div className="container-project">
          <h2 className="section-title mb-8">All Articles</h2>
          <div className="grid-2">
            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Users" size="lg" animation="pulse" />
                <CardTitle>Claude Tag for Engineering Teams: A Practical Setup Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Claude Tag is Anthropic&apos;s persistent AI teammate in Slack.
                  Wire it into engineering: connect MCP servers, scope channel
                  access, use ambient mode safely, and control token costs.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Jun 25, 2026</span>
                  <span>•</span>
                  <span>11 min read</span>
                </div>
                <Link href="/blog/claude-tag-engineering-teams-guide" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Cpu" size="lg" animation="pulse" />
                <CardTitle>Apple Core AI: Run Open-Weight Models On-Device for Free</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Apple Core AI runs open-weight models like Qwen and Mistral on
                  Apple Silicon with zero token cost. Convert PyTorch with
                  coreai-torch, load via the Swift API, and quantize for mobile.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Jun 20, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/apple-core-ai-on-device-inference-guide" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="ShieldAlert" size="lg" animation="pulse" />
                <CardTitle>LiteLLM CVE-2026-42271: Patch, Rotate, and Harden the RCE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  CVE-2026-42271 chains with the Starlette BadHost bypass
                  (CVE-2026-48710) for unauthenticated RCE on the AI gateway.
                  Detect exposure, upgrade to 1.83.7, rotate every key, and
                  harden the MCP test endpoints.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Jun 16, 2026</span>
                  <span>•</span>
                  <span>11 min read</span>
                </div>
                <Link href="/blog/litellm-mcp-exploit-response-guide" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="GitBranch" size="lg" animation="pulse" />
                <CardTitle>Claude Code Fable 5: Model Routing, Fallbacks, Cost Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fable 5 launched at 2x Opus 4.8&apos;s price alongside the new{" "}
                  <code>fallbackModel</code> setting. Chain configuration, the
                  safety classifier that reroutes sessions to Opus 4.8, and a
                  task routing table for all three models.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Jun 11, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/claude-code-fable-5-model-routing" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Workflow" size="lg" animation="pulse" />
                <CardTitle>Claude Code Dynamic Workflows: When They&apos;re Worth the Cost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Dynamic workflows fan a task across up to 1,000 subagents.
                  Which tasks justify the cost, how to bound the agent count,
                  what ultracode costs, and when a single session still wins.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> May 30, 2026</span>
                  <span>•</span>
                  <span>11 min read</span>
                </div>
                <Link href="/blog/claude-code-dynamic-workflows-guide" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Brain" size="lg" animation="pulse" />
                <CardTitle>Persistent Memory for AI Coding Agents Beyond CLAUDE.md</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Three tiers of persistent memory in 2026: CLAUDE.md,
                  MCP servers (agentmemory, claude-mem), and Anthropic&apos;s
                  Memory tool plus Dreaming. Benchmarks and a decision matrix.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> May 29, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/persistent-memory-ai-coding-agents" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Terminal" size="lg" animation="pulse" />
                <CardTitle>Qwen Code CLI: Getting Started Guide for AI Coding 2026</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Install Qwen Code, fix the post-OAuth authentication mess,
                  and see where Alibaba&apos;s open-source terminal agent
                  actually beats Claude Code. CI/CD recipe + 1M-context reality check.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> May 26, 2026</span>
                  <span>•</span>
                  <span>11 min read</span>
                </div>
                <Link href="/blog/qwen-code-getting-started" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Zap" size="lg" animation="pulse" />
                <CardTitle>Gemini 3.5 Flash for Agentic Coding: A Claude Coder&apos;s Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Gemini 3.5 Flash beats Gemini 3.1 Pro on agent benchmarks at
                  $1.50/$9 per 1M tokens. When to route tasks from Claude
                  Code, the thinking_level trap, and a 40-line MCP agent.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> May 25, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/gemini-3-5-flash-agentic-coding-guide" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="ArrowRightLeft" size="lg" animation="pulse" />
                <CardTitle>Gemini CLI to Antigravity CLI: Migration Guide & Alternatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Gemini CLI stops on June 18, 2026. Step-by-step migration to
                  the new <code>agy</code> binary, free-tier rate-limit math,
                  and when to switch to Claude Code or Codex CLI instead.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> May 21, 2026</span>
                  <span>•</span>
                  <span>11 min read</span>
                </div>
                <Link href="/blog/gemini-cli-to-antigravity-cli-guide" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="ShieldAlert" size="lg" animation="pulse" />
                <CardTitle>OpenAI Codex Security GitHub Setup Guide: 2026 Walkthrough</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Set up OpenAI Codex Security on GitHub end-to-end: connect a repo,
                  edit the threat model, triage validated findings, ship patches as
                  PRs. 74% TPR vs Semgrep 20% and Snyk 28% in independent testing.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> May 14, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/codex-security-github-setup" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="ClipboardCheck" size="lg" animation="pulse" />
                <CardTitle>Claude Managed Agents Outcomes: Auto-Grading Agent Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Outcomes hands the agent a rubric, a separate grader checks
                  every draft, and the loop iterates until the artifact passes.
                  Rubric anti-patterns, the five result states,{" "}
                  <code>max_iterations</code> tuning, and the cost math.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> May 12, 2026</span>
                  <span>•</span>
                  <span>13 min read</span>
                </div>
                <Link href="/blog/claude-managed-agents-outcomes" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="GitPullRequestArrow" size="lg" animation="pulse" />
                <CardTitle>Running claude ultrareview in CI/CD: GitHub Actions Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Claude Code 2.1.120 added <code>claude ultrareview</code> as a non-interactive
                  CLI subcommand. The OAuth token gotcha, a copy-pasteable GitHub Actions
                  workflow, <code>--json</code> parsing with <code>jq</code>, and a cost
                  control playbook.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> May 3, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/ultrareview-ci-cd-pipelines" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Boxes" size="lg" animation="pulse" />
                <CardTitle>MCP Code Execution Pattern: A Hands-On Claude Code Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Three MCP servers can eat 72% of a 200K context window. The code execution
                  pattern compares against dynamic toolsets and Tool Search, with a working
                  Python build and Claude Code v2.1.121 <code>alwaysLoad</code> config.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> May 3, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/mcp-code-execution-pattern" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="ShieldHalf" size="lg" animation="pulse" />
                <CardTitle>Regression-Proof Claude Code Workflows: Pin, Lock, Test</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  After Anthropic&apos;s April 2026 postmortem revealed three Claude Code
                  regressions, here is the practitioner playbook: pin the CLI, lock effort,
                  allowlist models, add a regression-detecting stop hook, keep fixtures.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Apr 28, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/regression-proofing-claude-code-workflows" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="ShieldAlert" size="lg" animation="pulse" />
                <CardTitle>Harden Claude Code GitHub Actions: Prompt Injection Defense</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Defend Claude Code workflows against the April 2026 Comment and Control
                  CVE. Tool allowlists, OIDC via Bedrock, script caps, egress blocks, and a
                  before/after hardened workflow.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Apr 25, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="ShieldCheck" size="lg" animation="pulse" />
                <CardTitle>Claude Code Security Review GitHub Action: 2026 Setup Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Workflow YAML, false positive tuning, token cost math, and a layered
                  pipeline with Semgrep and Snyk for Anthropic&apos;s official security review action.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Apr 22, 2026</span>
                  <span>•</span>
                  <span>11 min read</span>
                </div>
                <Link href="/blog/claude-code-security-review-github-actions" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Terminal" size="lg" animation="pulse" />
                <CardTitle>Getting Started with the ant CLI: Deploy Claude Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Install the ant CLI, create your first managed agent, and deploy it in
                  under 10 minutes. YAML version control, scripting patterns, and CI/CD.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Apr 18, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/ant-cli-getting-started" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="DollarSign" size="lg" animation="pulse" />
                <CardTitle>Claude Code Cost Tracking: Monitor and Cut Your Spending</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Track what you spend in Claude Code with built-in commands, hidden JSONL
                  logs, and tools like ccusage. Plus 7 tips to cut token costs by 50%.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Apr 16, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/claude-code-cost-tracking" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Bot" size="lg" animation="pulse" />
                <CardTitle>Claude Managed Agents vs Agent SDK: Which to Use?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Practical decision framework for Claude Managed Agents vs the Agent SDK.
                  Pricing breakdown with worked examples, MCP integration notes, and when to
                  pick each option for your workload.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Apr 9, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/claude-managed-agents" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Shield" size="lg" animation="pulse" />
                <CardTitle>Claude Mythos: What It Means for Devs Who Can&apos;t Use It</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Anthropic locked Claude Mythos to 12 Project Glasswing partners. What the
                  benchmarks, pricing, and restricted access mean for everyday developers, plus
                  what to do while waiting for public release.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Apr 9, 2026</span>
                  <span>•</span>
                  <span>11 min read</span>
                </div>
                <Link href="/blog/claude-mythos-preview" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Cpu" size="lg" animation="pulse" />
                <CardTitle>Gemma 4 Models: Which One Should You Actually Use?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tested all 4 Gemma 4 model sizes locally. Includes RAM requirements, Ollama setup,
                  comparison with Llama 4 and Mistral, and a practical guide to picking the right variant.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Apr 6, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/gemma-4-models-guide" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="FileText" size="lg" animation="pulse" />
                <CardTitle>How I Write CLAUDE.md Files That Actually Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Real production CLAUDE.md examples from my Next.js site. Learn the anatomy of
                  an effective file, 7 common mistakes, and when to use hooks vs CLAUDE.md vs custom commands.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Apr 5, 2026</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/claude-md-guide" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Bot" size="lg" animation="pulse" />
                <CardTitle>Complete Guide to Clawdbot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Set up your own personal AI assistant that works on WhatsApp, Telegram, Discord, 
                  and more. Self-hosted with persistent memory and proactive notifications.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Jan 26, 2025</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/clawdbot-guide" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Building2" size="lg" animation="pulse" />
                <CardTitle>Complete Guide to Method CRM MCP Server</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn how to set up and use the Method CRM MCP Server to enable AI assistants 
                  like Claude to interact with your CRM data through natural language.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> Jan 15, 2025</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <Link href="/blog/method-crm-mcp" className="project-link">
                  Read Article →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Topics I'll Cover" centered />
          <div className="grid-2">
            <Card>
              <CardHeader>
                <CategoryIcon icon="Bot" size="lg" animation="pulse" />
                <CardTitle>AI & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Model Context Protocol deep dives</li>
                  <li>AI agent development</li>
                  <li>Generative AI integration</li>
                  <li>Conversational interface design</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CategoryIcon icon="Wrench" size="lg" animation="pulse" />
                <CardTitle>DevOps & CI/CD</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Jenkins automation techniques</li>
                  <li>Pipeline optimization</li>
                  <li>Infrastructure as Code</li>
                  <li>ChatOps best practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CategoryIcon icon="Cloud" size="lg" animation="pulse" />
                <CardTitle>Cloud Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Multi-cloud strategies</li>
                  <li>AWS/Azure/GCP comparisons</li>
                  <li>Serverless architectures</li>
                  <li>Cloud cost optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CategoryIcon icon="Code" size="lg" animation="pulse" />
                <CardTitle>Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Go programming tutorials</li>
                  <li>Python best practices</li>
                  <li>API design patterns</li>
                  <li>Microservices architecture</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />

      {/* Stay Connected */}
      <section className="section section-alt">
        <div className="container-project text-center">
          <SectionHeader
            title="Stay Connected"
            subtitle="Follow me on GitHub and LinkedIn to get notified when I publish new content"
            centered
          />
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild>
              <Link href="https://github.com/avisangle" target="_blank" rel="noopener noreferrer">
                Follow on GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://www.linkedin.com/in/avinashsangle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
