import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import { ExternalLink, CheckCircle, Shield, Zap, Brain, AlertTriangle, Database, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Reddit Comment Engagement Agent - AI-Powered Engagement with HITL Approval",
  description:
    "Compliance-first Reddit engagement agent with LangGraph workflow, AI quality scoring, human approval, and auto-publish. Features shadowban detection, historical learning, and comprehensive safety controls.",
  keywords: [
    "reddit automation",
    "ai agent",
    "langgraph",
    "hitl approval",
    "reddit engagement",
    "compliance-first",
    "shadowban detection",
    "quality scoring",
    "reddit api",
    "python automation",
    "fastapi",
    "gemini ai",
  ],
  openGraph: {
    title: "Reddit Comment Engagement Agent",
    description: "AI-powered Reddit engagement with human oversight and safety controls",
    url: "https://avinashsangle.com/projects/reddit-agent",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddit Comment Engagement Agent",
    description: "Compliance-first AI engagement for Reddit",
  },
}

export default function RedditAgentPage() {
  return (
    <>
      {/* JSON-LD Schemas for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Reddit Comment Engagement Agent",
            description:
              "Compliance-first, anti-fingerprint Reddit engagement agent with AI-powered quality scoring, human-in-the-loop approval, and LangGraph workflow orchestration",
            applicationCategory: "DeveloperApplication",
            applicationSubCategory: "AI Automation, Reddit Tools",
            operatingSystem: "Linux, macOS, Windows",
            programmingLanguage: ["Python", "TypeScript"],
            softwareVersion: "2.5",
            author: { "@type": "Person", name: "Avinash Sangle" },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />

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
                name: "Projects",
                item: "https://avinashsangle.com/projects",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Reddit Agent",
                item: "https://avinashsangle.com/projects/reddit-agent",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Reddit Comment Engagement Agent?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Reddit Comment Engagement Agent is a compliance-first AI automation tool that intelligently engages with Reddit comments. It uses a 13-node LangGraph workflow with AI-powered quality scoring, mandatory human-in-the-loop approval, and comprehensive safety controls to prevent shadowbans.",
                },
              },
              {
                "@type": "Question",
                name: "How does the agent avoid getting shadowbanned?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The agent includes multiple anti-fingerprint features: daily comment limits (max 8/day), per-run limits (max 3), cooldown periods (6h for inbox, 24h for rising content), random timing jitter, shadowban risk detection, bot filtering, and diversity controls (max 2 per subreddit, max 1 per post).",
                },
              },
              {
                "@type": "Question",
                name: "What LLM providers are supported?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The agent supports Gemini 2.5 Flash (recommended), OpenAI GPT models, and Anthropic Claude models. At least one LLM API key is required, and the agent can automatically fall back to alternative providers if the primary fails.",
                },
              },
              {
                "@type": "Question",
                name: "Is human approval required for all comments?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, human-in-the-loop (HITL) approval is mandatory for all comments. The agent sends draft comments via Slack, Telegram, or Webhook with URL-based approve/reject buttons. Only after human approval does the agent automatically post to Reddit.",
                },
              },
              {
                "@type": "Question",
                name: "How does quality scoring work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The agent uses 7 factors for AI-powered quality scoring: upvote ratio, author karma, content freshness, engagement velocity, question signal, thread depth, and historical performance. It also learns from past outcomes per subreddit with time-decay weighting and includes 25% exploration randomization.",
                },
              },
              {
                "@type": "Question",
                name: "Can I run this without a public URL?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, a public URL is required for the approval workflow. The callback server needs to be publicly accessible so that approval/reject buttons in Slack/Telegram can reach your server. You can use ngrok, Cloudflare Tunnel, or deploy to a cloud server.",
                },
              },
              {
                "@type": "Question",
                name: "What Reddit API permissions are needed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You need a Reddit application with 'script' type permissions. Required scopes include: read (fetch posts/comments), submit (post comments), identity (get account info), and edit (modify comments if needed). Create an app at reddit.com/prefs/apps.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to run?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The software is free. Costs include: LLM API usage (Gemini ~$0.01-0.05/day for 8 comments), PostgreSQL database (free with local install or ~$5-10/month cloud), and server hosting if not running locally (free with ngrok or ~$5/month VPS).",
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
            { label: "Projects", href: "/#projects" },
            { label: "Reddit Agent" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">COMPLIANCE-FIRST AI ENGAGEMENT</p>
            <h1 className="hero-title mb-6">Reddit Comment Engagement Agent</h1>
            <p className="hero-description">
              AI-powered Reddit engagement with 13-node LangGraph workflow, quality scoring, human-in-the-loop approval, and comprehensive safety controls
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-3 my-6">
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Version 2.5</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">136 Tests Passing</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">13-Node Pipeline</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Production Ready</Badge>
            </div>

            <div className="hero-cta">
              <Button variant="outline" asChild>
                <Link href="/#projects">← Back to Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Overview" centered={false} />
          <div className="grid-2">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                The Reddit Comment Engagement Agent is an intelligent automation tool that helps you engage with Reddit communities while maintaining compliance and avoiding shadowbans. Built with a compliance-first approach, it uses AI to identify high-quality engagement opportunities and requires human approval before posting.
              </p>
              <p className="text-lg leading-relaxed">
                Perfect for developers, marketers, and community managers who want to maintain authentic Reddit presence without manual monitoring. The agent operates within strict safety limits and learns from historical performance to improve over time.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Use Cases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Product Promotion</p>
                    <p className="text-sm text-muted-foreground">Engage authentically when users ask about your product category</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Community Support</p>
                    <p className="text-sm text-muted-foreground">Respond to questions in your niche with helpful answers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Content Distribution</p>
                    <p className="text-sm text-muted-foreground">Share relevant blog posts or resources where appropriate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Key Features" centered={true} />
          <div className="grid-3">
            <Card>
              <CardHeader>
                <Brain className="h-8 w-8 text-accent mb-2" />
                <CardTitle>AI-Powered Quality Scoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  7-factor quality assessment including upvote ratio, author karma, content freshness, engagement velocity, question signals, thread depth, and historical performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Human-in-the-Loop Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mandatory approval via Slack/Telegram with URL-based buttons. Secure one-time tokens with 48-hour expiry ensure safety. Auto-publish after approval.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Shadowban Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Daily limits (8 comments/day), cooldown periods, random timing jitter, bot filtering, and diversity controls prevent detection and shadowbans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-accent mb-2" />
                <CardTitle>LangGraph Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  13-node pipeline with intelligent routing: fetch candidates → score quality → filter duplicates → check compliance → human approval → auto-publish.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Historical Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learns from past performance per subreddit with time-decay weighting. Tracks 24-hour engagement metrics (upvotes, replies) to refine future scoring.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Web Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Next.js admin UI with real-time stats, settings editor, workflow visualizer, and setup wizard. Secure JWT authentication with role-based access.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Architecture" centered={false} />
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Backend Stack</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>FastAPI</strong> - High-performance Python web framework with async support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>LangGraph</strong> - Orchestrates 13-node workflow with conditional logic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>PostgreSQL</strong> - Persistent storage with Alembic migrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>PRAW</strong> - Reddit API wrapper with rate limiting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Gemini 2.5 Flash</strong> - Primary LLM for draft generation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Frontend Stack</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Next.js 16</strong> - React framework with App Router</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>shadcn/ui</strong> - Beautiful Radix UI components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>TypeScript</strong> - Type-safe development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Tailwind CSS</strong> - Utility-first styling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Recharts</strong> - Data visualization for dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="How It Works" centered={false} />
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>13-Node LangGraph Workflow</CardTitle>
                <CardDescription>Intelligent pipeline with quality-driven candidate selection</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">1</div>
                    <div>
                      <p className="font-semibold">Fetch Candidates</p>
                      <p className="text-sm text-muted-foreground">Retrieves inbox replies (HIGH priority) + rising posts/comments from allowed subreddits</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">2</div>
                    <div>
                      <p className="font-semibold">Select by Ratio</p>
                      <p className="text-sm text-muted-foreground">Applies 30% post / 70% comment distribution for natural engagement patterns</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">3</div>
                    <div>
                      <p className="font-semibold">Score Quality</p>
                      <p className="text-sm text-muted-foreground">AI-powered 7-factor scoring with historical learning and 25% exploration</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">4</div>
                    <div>
                      <p className="font-semibold">Filter & Check Rules</p>
                      <p className="text-sm text-muted-foreground">Removes duplicates, applies cooldowns, verifies subreddit compliance</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">5</div>
                    <div>
                      <p className="font-semibold">Diversity Select</p>
                      <p className="text-sm text-muted-foreground">Max 2 per subreddit, max 1 per post (with quality overrides)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">6</div>
                    <div>
                      <p className="font-semibold">Generate Draft</p>
                      <p className="text-sm text-muted-foreground">LLM creates human-like reply with context-aware prompts</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">7</div>
                    <div>
                      <p className="font-semibold">Human Approval</p>
                      <p className="text-sm text-muted-foreground">Sends to Slack/Telegram with approve/reject buttons + context link</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">8</div>
                    <div>
                      <p className="font-semibold">Auto-Publish</p>
                      <p className="text-sm text-muted-foreground">Posts approved drafts to Reddit automatically with random timing jitter</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Getting Started" centered={false} />
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Python 3.11+ installed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Reddit API credentials (Client ID + Secret)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>LLM API key (Gemini, OpenAI, or Anthropic)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>PostgreSQL database (local or cloud)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Public URL for callback server (ngrok, Cloudflare Tunnel, or VPS)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Clone the repository</p>
                  <CodeBlock language="bash" code={`git clone https://github.com/yourusername/reddit_agent
cd reddit_agent`} />
                </div>
                <div>
                  <p className="font-semibold mb-2">2. Create virtual environment</p>
                  <CodeBlock language="bash" code={`python -m venv venv
source venv/bin/activate  # macOS/Linux
# OR
venv\\Scripts\\activate  # Windows`} />
                </div>
                <div>
                  <p className="font-semibold mb-2">3. Install dependencies</p>
                  <CodeBlock language="bash" code={`pip install -r requirements.txt`} />
                </div>
                <div>
                  <p className="font-semibold mb-2">4. Configure environment</p>
                  <CodeBlock language="bash" code={`cp .env.example .env
# Edit .env with your credentials`} />
                </div>
                <div>
                  <p className="font-semibold mb-2">5. Run database migrations</p>
                  <CodeBlock language="bash" code={`alembic upgrade head`} />
                </div>
                <div>
                  <p className="font-semibold mb-2">6. Start the callback server</p>
                  <CodeBlock language="bash" code={`python main.py server`} />
                </div>
                <div>
                  <p className="font-semibold mb-2">7. Run the agent (in another terminal)</p>
                  <CodeBlock language="bash" code={`source venv/bin/activate
python main.py run --once`} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Configuration Guide" centered={false} />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Reddit API Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 text-sm">
                  <li>1. Visit reddit.com/prefs/apps</li>
                  <li>2. Click "Create App" or "Create Another App"</li>
                  <li>3. Select "script" type</li>
                  <li>4. Fill name and redirect URI (http://localhost)</li>
                  <li>5. Copy Client ID (under app name) and Secret</li>
                  <li>6. Add to .env file</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>LLM API Keys</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>
                    <p className="font-semibold">Gemini (Recommended)</p>
                    <p className="text-muted-foreground">Get free API key at aistudio.google.com</p>
                  </li>
                  <li>
                    <p className="font-semibold">OpenAI</p>
                    <p className="text-muted-foreground">Sign up at platform.openai.com</p>
                  </li>
                  <li>
                    <p className="font-semibold">Anthropic</p>
                    <p className="text-muted-foreground">Get API key from console.anthropic.com</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>
                    <p className="font-semibold">Slack Webhook</p>
                    <p className="text-muted-foreground">Create incoming webhook at api.slack.com/apps</p>
                  </li>
                  <li>
                    <p className="font-semibold">Telegram Bot</p>
                    <p className="text-muted-foreground">Create bot via @BotFather, get token + chat ID</p>
                  </li>
                  <li>
                    <p className="font-semibold">Generic Webhook</p>
                    <p className="text-muted-foreground">Any endpoint accepting POST with JSON payload</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Safety Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>MAX_COMMENTS_PER_DAY</span>
                    <Badge variant="secondary">8</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>MAX_COMMENTS_PER_RUN</span>
                    <Badge variant="secondary">3</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>INBOX_COOLDOWN_HOURS</span>
                    <Badge variant="secondary">6</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>RISING_COOLDOWN_HOURS</span>
                    <Badge variant="secondary">24</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>POST_REPLY_RATIO</span>
                    <Badge variant="secondary">0.3</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Web Dashboard */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Web Dashboard" centered={false} />
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Dashboard Stats</p>
                        <p className="text-sm text-muted-foreground">Real-time metrics, charts, and draft status</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Settings Editor</p>
                        <p className="text-sm text-muted-foreground">Edit environment variables with validation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Workflow Visualizer</p>
                        <p className="text-sm text-muted-foreground">Interactive 13-node pipeline diagram</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Setup Wizard</p>
                        <p className="text-sm text-muted-foreground">4-step configuration with test functions</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Access</h3>
                  <div className="space-y-4">
                    <div>
                      <CodeBlock language="bash" code={`# Start server (includes web dashboard)
python main.py server

# Access dashboard
# Open browser: http://localhost:3000`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Default password: <code className="bg-muted px-1.5 py-0.5 rounded">admin123</code>
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Change password hash in .env: ADMIN_PASSWORD_HASH
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Frequently Asked Questions" centered={false} />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Reddit Comment Engagement Agent?</AccordionTrigger>
              <AccordionContent>
                Reddit Comment Engagement Agent is a compliance-first AI automation tool that intelligently engages with Reddit comments. It uses a 13-node LangGraph workflow with AI-powered quality scoring, mandatory human-in-the-loop approval, and comprehensive safety controls to prevent shadowbans.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How does the agent avoid getting shadowbanned?</AccordionTrigger>
              <AccordionContent>
                The agent includes multiple anti-fingerprint features: daily comment limits (max 8/day), per-run limits (max 3), cooldown periods (6h for inbox, 24h for rising content), random timing jitter, shadowban risk detection, bot filtering, and diversity controls (max 2 per subreddit, max 1 per post).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What LLM providers are supported?</AccordionTrigger>
              <AccordionContent>
                The agent supports Gemini 2.5 Flash (recommended), OpenAI GPT models, and Anthropic Claude models. At least one LLM API key is required, and the agent can automatically fall back to alternative providers if the primary fails.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Is human approval required for all comments?</AccordionTrigger>
              <AccordionContent>
                Yes, human-in-the-loop (HITL) approval is mandatory for all comments. The agent sends draft comments via Slack, Telegram, or Webhook with URL-based approve/reject buttons. Only after human approval does the agent automatically post to Reddit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How does quality scoring work?</AccordionTrigger>
              <AccordionContent>
                The agent uses 7 factors for AI-powered quality scoring: upvote ratio, author karma, content freshness, engagement velocity, question signal, thread depth, and historical performance. It also learns from past outcomes per subreddit with time-decay weighting and includes 25% exploration randomization.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Can I run this without a public URL?</AccordionTrigger>
              <AccordionContent>
                No, a public URL is required for the approval workflow. The callback server needs to be publicly accessible so that approval/reject buttons in Slack/Telegram can reach your server. You can use ngrok, Cloudflare Tunnel, or deploy to a cloud server.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>What Reddit API permissions are needed?</AccordionTrigger>
              <AccordionContent>
                You need a Reddit application with 'script' type permissions. Required scopes include: read (fetch posts/comments), submit (post comments), identity (get account info), and edit (modify comments if needed). Create an app at reddit.com/prefs/apps.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>How much does it cost to run?</AccordionTrigger>
              <AccordionContent>
                The software is free. Costs include: LLM API usage (Gemini ~$0.01-0.05/day for 8 comments), PostgreSQL database (free with local install or ~$5-10/month cloud), and server hosting if not running locally (free with ngrok or ~$5/month VPS).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Related Projects" centered={false} />
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  AI Integration
                </Badge>
                <CardTitle>Jenkins MCP Server</CardTitle>
                <CardDescription>
                  Enable AI agents to interact with Jenkins through Model Context Protocol
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/jenkins-mcp" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  CRM Integration
                </Badge>
                <CardTitle>Method CRM MCP</CardTitle>
                <CardDescription>
                  Production-ready MCP server for Method CRM API with 20 tools
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/method-crm-mcp" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Production SaaS
                </Badge>
                <CardTitle>Social Media Auto-Poster</CardTitle>
                <CardDescription>
                  AI-powered platform with automated posting and multi-platform support
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/social-media-auto-poster" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* License & Credits */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="License & Credits" centered={false} />
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">License</h3>
                  <p className="text-muted-foreground mb-4">
                    This project is available under an open-source license. See the repository for full license details.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Author:</strong> Avinash Sangle<br />
                    <strong>Website:</strong> avinashsangle.com<br />
                    <strong>Year:</strong> 2026
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Built With</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• LangGraph - Workflow orchestration</li>
                    <li>• PRAW - Reddit API wrapper</li>
                    <li>• FastAPI - High-performance web framework</li>
                    <li>• shadcn/ui - Beautiful React components</li>
                    <li>• PostgreSQL - Reliable database</li>
                    <li>• Gemini 2.5 Flash - AI language model</li>
                    <li>• Built with Claude Code - AI-assisted development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container-project text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start engaging with Reddit communities intelligently while maintaining compliance and avoiding shadowbans.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/#projects">← Back to Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
