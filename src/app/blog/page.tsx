import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
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
              <CategoryIcon icon="ShieldCheck" size="xl" className="mx-auto" />
              <div>
                <p className="text-accent font-semibold mb-2">CLAUDE CODE</p>
                <h3 className="text-2xl font-bold mb-4">Claude Code Security Review GitHub Action: 2026 Setup Guide</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Set up Anthropic&apos;s Claude Code Security Review GitHub Action end to
                  end: workflow YAML, false positive tuning, token cost math, and a layered
                  pipeline with Semgrep and Snyk.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> April 22, 2026</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><CategoryIcon icon="Clock" size="sm" /> 11 min read</span>
                </div>
                <Button asChild>
                  <Link href="/blog/claude-code-security-review-github-actions">Read Article →</Link>
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
