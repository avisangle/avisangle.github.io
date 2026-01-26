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
  title: "Complete Guide to Clawdbot: Setup Your Personal AI Assistant (2025)",
  description:
    "Step-by-step guide to install and configure Clawdbot—the open-source personal AI assistant with 31k+ GitHub stars. Works on WhatsApp, Telegram, Discord, Slack, Signal & iMessage. Self-hosted with persistent memory.",
  keywords: [
    "Clawdbot",
    "Clawdbot setup",
    "Clawdbot tutorial",
    "Clawdbot guide",
    "Clawdbot installation",
    "personal AI assistant",
    "self-hosted AI assistant",
    "WhatsApp AI bot",
    "Telegram AI assistant",
    "Discord AI bot",
    "Slack AI integration",
    "Claude AI assistant",
    "open source AI assistant",
    "AI assistant with memory",
    "proactive AI assistant",
    "clawdbot onboard",
    "clawdbot gateway",
    "Peter Steinberger",
    "clawd.bot",
    "AI personal OS",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Complete Guide to Clawdbot: Setup Your Personal AI Assistant (2025)",
    description:
      "Install Clawdbot in minutes—the self-hosted AI assistant that works on WhatsApp, Telegram, Discord & more. 31k+ GitHub stars. Persistent memory. Proactive notifications.",
    url: "https://avinashsangle.com/blog/clawdbot-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2025-01-26T00:00:00.000Z",
    modifiedTime: "2025-01-26T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-clawdbot-guide.png",
        width: 1200,
        height: 630,
        alt: "Clawdbot Setup Guide - Personal AI Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Guide to Clawdbot: Setup Your Personal AI Assistant",
    description:
      "Step-by-step guide to install Clawdbot—the open-source AI assistant for WhatsApp, Telegram, Discord & more. Self-hosted with persistent memory.",
    creator: "@AvinashSangle",
    images: ["https://avinashsangle.com/og-clawdbot-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/clawdbot-guide",
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

export default function ClawdbotGuideBlogPage() {
  return (
    <>
      {/* TechArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Complete Guide to Clawdbot: Setup Your Personal AI Assistant (2025)",
            description:
              "Step-by-step guide to install and configure Clawdbot—the open-source personal AI assistant with 31k+ GitHub stars. Works on WhatsApp, Telegram, Discord, Slack, Signal & iMessage.",
            image: "https://avinashsangle.com/og-clawdbot-guide.png",
            author: {
              "@type": "Person",
              name: "Avinash Sangle",
              url: "https://avinashsangle.com",
            },
            publisher: {
              "@type": "Person",
              name: "Avinash Sangle",
              url: "https://avinashsangle.com",
            },
            datePublished: "2025-01-26",
            dateModified: "2025-01-26",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://avinashsangle.com/blog/clawdbot-guide",
            },
            keywords: "Clawdbot, personal AI assistant, WhatsApp AI bot, Telegram AI assistant, Discord AI bot, self-hosted AI, open source AI assistant",
            articleSection: "AI Assistant",
            wordCount: 2500,
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
                name: "Clawdbot Guide",
                item: "https://avinashsangle.com/blog/clawdbot-guide",
              },
            ],
          }),
        }}
      />

      {/* HowTo Schema for Installation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Install and Setup Clawdbot",
            description: "Step-by-step guide to install Clawdbot, the open-source personal AI assistant that works on WhatsApp, Telegram, Discord, and more.",
            totalTime: "PT15M",
            tool: [
              { "@type": "HowToTool", name: "Node.js 22+" },
              { "@type": "HowToTool", name: "Terminal/Command Line" },
            ],
            supply: [
              { "@type": "HowToSupply", name: "Anthropic API key or Claude subscription" },
              { "@type": "HowToSupply", name: "Messaging app account (WhatsApp, Telegram, etc.)" },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Install the CLI",
                text: "Run: curl -fsSL https://clawd.bot/install.sh | bash (or npm install -g clawdbot@latest)",
                url: "https://avinashsangle.com/blog/clawdbot-guide#installation",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Run the Onboarding Wizard",
                text: "Run: clawdbot onboard --install-daemon to configure gateway, auth, and channels",
                url: "https://avinashsangle.com/blog/clawdbot-guide#installation",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Connect a Chat Channel",
                text: "Run: clawdbot channels login to connect WhatsApp via QR code, or configure Telegram/Discord tokens",
                url: "https://avinashsangle.com/blog/clawdbot-guide#channels",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Start Chatting",
                text: "Send a message to your connected channel and Clawdbot will respond as your personal AI assistant",
                url: "https://avinashsangle.com/blog/clawdbot-guide#getting-started",
              },
            ],
          }),
        }}
      />

      {/* FAQPage Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Clawdbot?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Clawdbot is an open-source personal AI assistant that you run on your own devices. It connects to messaging apps like WhatsApp, Telegram, Discord, Slack, Signal, and iMessage, providing a personal AI assistant with persistent memory, proactive notifications, and browser automation capabilities. It has over 31,000 GitHub stars and is actively maintained.",
                },
              },
              {
                "@type": "Question",
                name: "How do I install Clawdbot?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Install Clawdbot by running: curl -fsSL https://clawd.bot/install.sh | bash (or npm install -g clawdbot@latest). Then run 'clawdbot onboard --install-daemon' to configure the gateway, authentication, and messaging channels. Requires Node.js 22 or higher.",
                },
              },
              {
                "@type": "Question",
                name: "What messaging apps does Clawdbot support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Clawdbot supports WhatsApp, Telegram, Discord, Slack, Signal, iMessage (macOS), Microsoft Teams, Google Chat, Matrix, BlueBubbles, Zalo, and WebChat. It can work in both DMs and group chats.",
                },
              },
              {
                "@type": "Question",
                name: "Is Clawdbot free to use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Clawdbot itself is free and open-source (MIT license). Costs come from: 1) Hosting—free if running locally, or $5-50/month for a VPS, and 2) AI provider access—either a Claude/OpenAI subscription or API usage costs.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to be technical to set up Clawdbot?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You don't need to be a developer, but you should be comfortable running commands in a terminal. The onboarding wizard (clawdbot onboard) guides you through the entire setup process step by step.",
                },
              },
              {
                "@type": "Question",
                name: "Can Clawdbot run 24/7?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, if you host Clawdbot on an always-on machine like a VPS, Mac mini, or Raspberry Pi. This enables proactive features like scheduled reminders, briefings, and automated tasks even when your personal computer is off.",
                },
              },
              {
                "@type": "Question",
                name: "What makes Clawdbot different from ChatGPT or Claude?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Unlike ChatGPT or Claude which are chat interfaces you visit, Clawdbot is a self-hosted orchestrator that brings AI into your existing messaging apps. It offers persistent memory across sessions, proactive notifications, browser automation, and full control over your data since it runs on your own devices.",
                },
              },
              {
                "@type": "Question",
                name: "What are Clawdbot's system requirements?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Clawdbot requires Node.js 22 or higher. It runs on macOS, Linux, or Windows (WSL2 strongly recommended for Windows). For AI access, you need either an Anthropic API key/Claude subscription or OpenAI/Codex subscription.",
                },
              },
            ],
          }),
        }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Clawdbot",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "macOS, Linux, Windows (WSL2)",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "31400",
              bestRating: "5",
            },
            author: {
              "@type": "Person",
              name: "Peter Steinberger",
            },
            downloadUrl: "https://github.com/clawdbot/clawdbot",
            softwareVersion: "2026.1.24",
            description: "Personal AI assistant that runs on your own devices. Works on WhatsApp, Telegram, Discord, Slack, Signal, iMessage and more.",
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Clawdbot Guide" },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="section">
        <div className="container-project">
          <div>
            <p className="text-accent font-semibold mb-4">AI ASSISTANT</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Complete Guide to Clawdbot: Your Personal AI Assistant for Any Platform 🦞
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Clawdbot is a personal AI assistant you run on your own devices. It answers you on 
              WhatsApp, Telegram, Slack, Discord, Signal, iMessage, and more—with voice support, 
              live Canvas, and full control over your data.
            </p>
            <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-8">
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Calendar" size="sm" /> January 26, 2025
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Clock" size="sm" /> 12 min read
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Tag" size="sm" /> AI, Messaging, Automation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section-alt py-8">
        <div className="container-project">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>📑 Table of Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal ml-6 space-y-2">
                  <li>
                    <Link href="#introduction" className="text-accent hover:underline">
                      What is Clawdbot?
                    </Link>
                  </li>
                  <li>
                    <Link href="#why-clawdbot" className="text-accent hover:underline">
                      Why Choose Clawdbot?
                    </Link>
                  </li>
                  <li>
                    <Link href="#prerequisites" className="text-accent hover:underline">
                      Prerequisites & Requirements
                    </Link>
                  </li>
                  <li>
                    <Link href="#installation" className="text-accent hover:underline">
                      Installation Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="#features" className="text-accent hover:underline">
                      Key Features & Capabilities
                    </Link>
                  </li>
                  <li>
                    <Link href="#channels" className="text-accent hover:underline">
                      Supported Channels
                    </Link>
                  </li>
                  <li>
                    <Link href="#getting-started" className="text-accent hover:underline">
                      Getting Started: First Chat
                    </Link>
                  </li>
                  <li>
                    <Link href="#advanced-usage" className="text-accent hover:underline">
                      Advanced Usage & Configuration
                    </Link>
                  </li>
                  <li>
                    <Link href="#security" className="text-accent hover:underline">
                      Security & Best Practices
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
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="section">
        <div className="container-project">
          <div>
            <h2 className="text-3xl font-bold mb-6">What is Clawdbot?</h2>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Clawdbot</strong> is a personal AI assistant that you run on your own devices. 
              Unlike cloud-based AI services, Clawdbot gives you full control—it connects to the 
              messaging channels you already use (WhatsApp, Telegram, Slack, Discord, and more) 
              and responds as your personal AI assistant.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Built by Peter Steinberger and the open-source community, Clawdbot supports multiple 
              AI providers including Anthropic (Claude) and OpenAI. The project has over 31,000 stars 
              on GitHub and is actively maintained with regular releases.
            </p>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🦞 What Makes Clawdbot Special</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>
                    <strong>Multi-Channel:</strong> Works on WhatsApp, Telegram, Slack, Discord, 
                    Signal, iMessage, Microsoft Teams, Google Chat, and more
                  </li>
                  <li>
                    <strong>Self-Hosted:</strong> Run on your own devices—your data stays with you
                  </li>
                  <li>
                    <strong>Voice Support:</strong> Voice Wake and Talk Mode for hands-free interaction
                  </li>
                  <li>
                    <strong>Live Canvas:</strong> Agent-driven visual workspace for rich interactions
                  </li>
                  <li>
                    <strong>Multi-Agent Routing:</strong> Route different channels to isolated agents
                  </li>
                  <li>
                    <strong>Companion Apps:</strong> Native macOS menu bar app, iOS and Android nodes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Clawdbot */}
      <section id="why-clawdbot" className="section section-alt">
        <div className="container-project">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Clawdbot?</h2>

            <div className="grid-2 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CategoryIcon icon="Shield" size="sm" /> Own Your Data
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Unlike cloud AI services, Clawdbot runs on your hardware. Your conversations, 
                    context, and data never leave your control.
                  </p>
                  <ul className="skill-list">
                    <li>Self-hosted on your devices</li>
                    <li>No third-party data storage</li>
                    <li>Full privacy control</li>
                    <li>Local-first architecture</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CategoryIcon icon="MessageSquare" size="sm" /> Use Your Channels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Chat with your AI assistant on the platforms you already use daily. No new 
                    apps to install—just message your assistant.
                  </p>
                  <ul className="skill-list">
                    <li>WhatsApp, Telegram, Discord</li>
                    <li>Slack, Microsoft Teams</li>
                    <li>Signal, iMessage (macOS)</li>
                    <li>Google Chat, Matrix, WebChat</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>💡 Perfect For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Personal Use</h4>
                    <ul className="skill-list">
                      <li>Personal AI assistant on your phone</li>
                      <li>Quick Q&A via messaging apps</li>
                      <li>Voice-activated tasks</li>
                      <li>Always-on availability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Power Users</h4>
                    <ul className="skill-list">
                      <li>Multi-agent workflows</li>
                      <li>Custom skills and tools</li>
                      <li>Browser automation</li>
                      <li>Cron jobs and webhooks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section id="prerequisites" className="section">
        <div className="container-project">
          <div>
            <h2 className="text-3xl font-bold mb-6">Prerequisites & Requirements</h2>

            <div className="grid-2 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CategoryIcon icon="Wrench" size="sm" /> System Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    <li>
                      <strong>Node.js:</strong> Version 22 or higher (required)
                    </li>
                    <li>
                      <strong>OS:</strong> macOS, Linux, or Windows (WSL2 strongly recommended)
                    </li>
                    <li>
                      <strong>pnpm:</strong> Recommended if building from source
                    </li>
                    <li>
                      <strong>macOS:</strong> Xcode/CLT if building companion apps
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CategoryIcon icon="Key" size="sm" /> AI Provider Auth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    <li>
                      <strong>Anthropic:</strong> API key or Claude Pro/Max subscription (OAuth)
                    </li>
                    <li>
                      <strong>OpenAI:</strong> ChatGPT/Codex subscription (OAuth) or API key
                    </li>
                    <li>
                      <strong>Recommended:</strong> Anthropic Pro/Max + Opus 4.5 for best results
                    </li>
                    <li>
                      <strong>Optional:</strong> Brave Search API key for web search
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-yellow-500/50 bg-yellow-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                  ⚠️ Windows Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  WSL2 (Ubuntu recommended) is <strong>strongly recommended</strong> for Windows. 
                  Native Windows is untested and has poorer tool compatibility. Install WSL2 first, 
                  then run all commands inside WSL.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="section section-alt">
        <div className="container-project">
          <div>
            <h2 className="text-3xl font-bold mb-6">Installation Guide</h2>
            <p className="text-lg leading-relaxed mb-6">
              The recommended approach is to use the CLI onboarding wizard, which sets up everything 
              automatically.
            </p>

            <h3 className="text-xl font-bold mb-4">Step 1: Install the CLI</h3>
            <p className="mb-4">Install via the official installer script:</p>
            <CodeBlock
              code={`# macOS / Linux
curl -fsSL https://clawd.bot/install.sh | bash

# Windows (PowerShell) - then use WSL2
iwr -useb https://clawd.bot/install.ps1 | iex

# Alternative: npm/pnpm global install
npm install -g clawdbot@latest
# or
pnpm add -g clawdbot@latest`}
              language="bash"
              filename="terminal"
              className="mb-6"
            />

            <h3 className="text-xl font-bold mb-4">Step 2: Run the Onboarding Wizard</h3>
            <p className="mb-4">
              The wizard guides you through gateway setup, auth, channels, and daemon installation:
            </p>
            <CodeBlock
              code={`clawdbot onboard --install-daemon`}
              language="bash"
              filename="terminal"
              className="mb-6"
            />
            <p className="mb-4">The wizard will help you configure:</p>
            <ul className="skill-list mb-6">
              <li><strong>Local vs Remote</strong> gateway mode</li>
              <li><strong>Auth:</strong> OpenAI Codex subscription (OAuth) or API keys</li>
              <li><strong>Providers:</strong> WhatsApp QR login, Telegram/Discord tokens, etc.</li>
              <li><strong>Daemon:</strong> Background service (launchd/systemd)</li>
              <li><strong>Gateway token:</strong> Auto-generated for security</li>
            </ul>

            <h3 className="text-xl font-bold mb-4">Step 3: Verify the Gateway</h3>
            <CodeBlock
              code={`# Check gateway status
clawdbot gateway status

# Run gateway manually (foreground)
clawdbot gateway --port 18789 --verbose

# Quick health check
clawdbot status
clawdbot health`}
              language="bash"
              filename="terminal"
              className="mb-6"
            />

            <Card className="border-2 border-blue-500/50 bg-blue-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  💡 Dashboard Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Once the gateway is running, access the Control UI dashboard at{" "}
                  <code className="bg-muted px-1 rounded">http://127.0.0.1:18789/</code>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container-project">
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Features & Capabilities</h2>

            <div className="grid-2 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-accent flex items-center gap-2">
                    <CategoryIcon icon="MessageSquare" size="sm" /> Multi-Channel Inbox
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    <li>WhatsApp (via Baileys)</li>
                    <li>Telegram (via grammY)</li>
                    <li>Slack (via Bolt)</li>
                    <li>Discord (via discord.js)</li>
                    <li>Signal, iMessage, Microsoft Teams</li>
                    <li>Google Chat, Matrix, WebChat</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-accent flex items-center gap-2">
                    <CategoryIcon icon="Mic" size="sm" /> Voice & Canvas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    <li>Voice Wake for always-on listening</li>
                    <li>Talk Mode for continuous conversation</li>
                    <li>Live Canvas visual workspace (A2UI)</li>
                    <li>ElevenLabs voice integration</li>
                    <li>macOS/iOS/Android support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-accent flex items-center gap-2">
                    <CategoryIcon icon="Terminal" size="sm" /> Tools & Automation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    <li>Browser control (dedicated Chromium)</li>
                    <li>Camera snap/clip, screen record</li>
                    <li>Cron jobs and webhooks</li>
                    <li>Gmail Pub/Sub triggers</li>
                    <li>Skills platform (bundled + custom)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-accent flex items-center gap-2">
                    <CategoryIcon icon="Smartphone" size="sm" /> Companion Apps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    <li>macOS menu bar app</li>
                    <li>iOS node (Canvas, Voice, camera)</li>
                    <li>Android node (Canvas, Talk, camera)</li>
                    <li>Remote gateway control</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🔌 Multi-Agent Routing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Route different channels, accounts, or peers to isolated agents with their own 
                  workspaces and sessions. Perfect for separating personal and work contexts.
                </p>
                <CodeBlock
                  code={`{
  "routing": {
    "agents": {
      "main": {
        "workspace": "~/clawd",
        "sandbox": { "mode": "off" }
      },
      "work": {
        "workspace": "~/clawd-work",
        "sandbox": { "mode": "non-main" }
      }
    }
  }
}`}
                  language="json"
                  filename="clawdbot.json"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Channels */}
      <section id="channels" className="section section-alt">
        <div className="container-project">
          <div>
            <h2 className="text-3xl font-bold mb-6">Supported Channels</h2>

            <div className="grid-3 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>📱 WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Link via QR code, just like WhatsApp Web.</p>
                  <CodeBlock
                    code={`clawdbot channels login`}
                    language="bash"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>✈️ Telegram</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Use a bot token from @BotFather.</p>
                  <CodeBlock
                    code={`{
  "channels": {
    "telegram": {
      "botToken": "123:ABC"
    }
  }
}`}
                    language="json"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>💬 Discord</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Configure with your Discord bot token.</p>
                  <CodeBlock
                    code={`{
  "channels": {
    "discord": {
      "token": "your-token"
    }
  }
}`}
                    language="json"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>💼 Slack</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Use Bolt with bot and app tokens.</p>
                  <CodeBlock
                    code={`SLACK_BOT_TOKEN=xoxb-...
SLACK_APP_TOKEN=xapp-...`}
                    language="bash"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>🔒 Signal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Requires signal-cli setup.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>💬 iMessage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">macOS only, requires Messages sign-in.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="section">
        <div className="container-project">
          <div>
            <h2 className="text-3xl font-bold mb-6">Getting Started: Your First Chat</h2>

            <h3 className="text-xl font-bold mb-4">1. Pair a Channel (WhatsApp Example)</h3>
            <CodeBlock
              code={`# Login to WhatsApp (scan QR code)
clawdbot channels login

# Approve pairing for new contacts
clawdbot pairing list whatsapp
clawdbot pairing approve whatsapp <code>`}
              language="bash"
              filename="terminal"
              className="mb-6"
            />

            <h3 className="text-xl font-bold mb-4">2. Send a Test Message</h3>
            <CodeBlock
              code={`# Send a message via CLI
clawdbot message send --to +1234567890 --message "Hello from Clawdbot"

# Or interact directly with the agent
clawdbot agent --message "What can you help me with?" --thinking high`}
              language="bash"
              filename="terminal"
              className="mb-6"
            />

            <h3 className="text-xl font-bold mb-4">3. Chat Commands</h3>
            <p className="mb-4">
              Send these commands in any connected channel (WhatsApp, Telegram, etc.):
            </p>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Command</th>
                        <th className="text-left p-3">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3"><code>/status</code></td>
                        <td className="p-3">Show session status (model, tokens, cost)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3"><code>/new</code> or <code>/reset</code></td>
                        <td className="p-3">Reset the session</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3"><code>/compact</code></td>
                        <td className="p-3">Compact session context (summary)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3"><code>/think &lt;level&gt;</code></td>
                        <td className="p-3">Set thinking level (off/minimal/low/medium/high/xhigh)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3"><code>/verbose on|off</code></td>
                        <td className="p-3">Toggle verbose mode</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>/restart</code></td>
                        <td className="p-3">Restart gateway (owner-only)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Usage */}
      <section id="advanced-usage" className="section section-alt">
        <div className="container-project">
          <div>
            <h2 className="text-3xl font-bold mb-6">Advanced Usage & Configuration</h2>

            <h3 className="text-xl font-bold mb-4">Configuration File</h3>
            <p className="mb-4">
              Main configuration lives at <code>~/.clawdbot/clawdbot.json</code>:
            </p>
            <CodeBlock
              code={`{
  "agent": {
    "model": "anthropic/claude-opus-4-5"
  },
  "browser": {
    "enabled": true,
    "controlUrl": "http://127.0.0.1:18791"
  },
  "channels": {
    "whatsapp": {
      "allowFrom": ["+1234567890"]
    }
  }
}`}
              language="json"
              filename="~/.clawdbot/clawdbot.json"
              className="mb-6"
            />

            <h3 className="text-xl font-bold mb-4">Skills & Workspace</h3>
            <p className="mb-4">
              Clawdbot supports bundled, managed, and workspace skills:
            </p>
            <ul className="skill-list mb-6">
              <li><strong>Workspace root:</strong> <code>~/clawd</code> (configurable)</li>
              <li><strong>Prompt files:</strong> <code>AGENTS.md</code>, <code>SOUL.md</code>, <code>TOOLS.md</code></li>
              <li><strong>Custom skills:</strong> <code>~/clawd/skills/&lt;skill&gt;/SKILL.md</code></li>
            </ul>

            <h3 className="text-xl font-bold mb-4">Tailscale Remote Access</h3>
            <p className="mb-4">
              Expose the gateway securely via Tailscale Serve or Funnel:
            </p>
            <CodeBlock
              code={`{
  "gateway": {
    "tailscale": {
      "mode": "serve"  // or "funnel" for public access
    }
  }
}`}
              language="json"
              filename="clawdbot.json"
              className="mb-6"
            />

            <h3 className="text-xl font-bold mb-4">Building from Source</h3>
            <CodeBlock
              code={`git clone https://github.com/clawdbot/clawdbot.git
cd clawdbot
pnpm install
pnpm ui:build    # auto-installs UI deps
pnpm build
pnpm clawdbot onboard --install-daemon

# Development mode (auto-reload)
pnpm gateway:watch`}
              language="bash"
              filename="terminal"
            />
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="section">
        <div className="container-project">
          <div>
            <h2 className="text-3xl font-bold mb-6">Security & Best Practices</h2>

            <Card className="border-2 border-red-500/50 bg-red-500/5 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  🔒 Important: DM Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Clawdbot connects to real messaging surfaces. Treat all inbound DMs as{" "}
                  <strong>untrusted input</strong>.
                </p>
                <ul className="skill-list">
                  <li>
                    <strong>Default behavior:</strong> Unknown senders receive a pairing code—
                    the bot won&apos;t process messages until approved
                  </li>
                  <li>
                    <strong>Approve senders:</strong> <code>clawdbot pairing approve &lt;channel&gt; &lt;code&gt;</code>
                  </li>
                  <li>
                    <strong>Run diagnostics:</strong> <code>clawdbot doctor</code> to check for risky DM policies
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid-2 mb-8">
              <Card className="card-accent-left">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CategoryIcon icon="Shield" size="sm" /> Security Defaults
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    <li>DM pairing required by default</li>
                    <li>Tools run on host for main session only</li>
                    <li>Non-main sessions can be sandboxed (Docker)</li>
                    <li>Gateway tokens auto-generated</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-accent-left">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CategoryIcon icon="Settings" size="sm" /> Sandbox Mode
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    <li>Set <code>sandbox.mode: &quot;non-main&quot;</code></li>
                    <li>Groups/channels run in Docker</li>
                    <li>Bash isolated per session</li>
                    <li>Tool allowlist/denylist supported</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-blue-500/50 bg-blue-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  💡 Pro Tip
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Run <code>clawdbot doctor</code> regularly to check for configuration issues 
                  and security risks. It will surface any misconfigured DM policies or missing auth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section section-alt">
        <div className="container-project">
          <div>
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-semibold">What is Clawdbot?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Clawdbot is an open-source personal AI assistant that you run on your own devices. 
                        It connects to messaging apps like WhatsApp, Telegram, Discord, Slack, Signal, and 
                        iMessage, providing a personal AI assistant with persistent memory, proactive 
                        notifications, and browser automation capabilities. It has over 31,000 GitHub stars 
                        and is actively maintained by Peter Steinberger and the community.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-semibold">How do I install Clawdbot?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Install Clawdbot by running: <code className="bg-muted px-1 rounded">curl -fsSL https://clawd.bot/install.sh | bash</code> (or{" "}
                        <code className="bg-muted px-1 rounded">npm install -g clawdbot@latest</code>). 
                        Then run <code className="bg-muted px-1 rounded">clawdbot onboard --install-daemon</code> to 
                        configure the gateway, authentication, and messaging channels. Requires Node.js 22 or higher.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-semibold">What messaging apps does Clawdbot support?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Clawdbot supports WhatsApp, Telegram, Discord, Slack, Signal, iMessage (macOS), 
                        Microsoft Teams, Google Chat, Matrix, BlueBubbles, Zalo, and WebChat. It can work 
                        in both DMs and group chats.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-semibold">Is Clawdbot free to use?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Clawdbot itself is free and open-source (MIT license). Costs come from: 1) Hosting—free 
                        if running locally, or $5-50/month for a VPS, and 2) AI provider access—either a 
                        Claude/OpenAI subscription or API usage costs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left font-semibold">Do I need to be technical to set up Clawdbot?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        You don&apos;t need to be a developer, but you should be comfortable running commands 
                        in a terminal. The onboarding wizard (<code className="bg-muted px-1 rounded">clawdbot onboard</code>) 
                        guides you through the entire setup process step by step.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left font-semibold">Can Clawdbot run 24/7?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Yes, if you host Clawdbot on an always-on machine like a VPS, Mac mini, or 
                        Raspberry Pi. This enables proactive features like scheduled reminders, briefings, 
                        and automated tasks even when your personal computer is off.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-left font-semibold">What makes Clawdbot different from ChatGPT or Claude?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Unlike ChatGPT or Claude which are chat interfaces you visit, Clawdbot is a 
                        self-hosted orchestrator that brings AI into your existing messaging apps. It 
                        offers persistent memory across sessions, proactive notifications, browser 
                        automation, and full control over your data since it runs on your own devices.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-left font-semibold">What are Clawdbot&apos;s system requirements?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Clawdbot requires Node.js 22 or higher. It runs on macOS, Linux, or Windows 
                        (WSL2 strongly recommended for Windows). For AI access, you need either an 
                        Anthropic API key/Claude subscription or OpenAI/Codex subscription.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-project">
          <div>
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Rocket" size="sm" /> Ready to Get Started?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Clawdbot is the personal AI assistant you run on your own terms. With support 
                  for 12+ messaging channels, voice interaction, and a thriving open-source 
                  community, it&apos;s the most flexible way to have an AI assistant everywhere you chat.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Button asChild>
                    <Link
                      href="https://github.com/clawdbot/clawdbot"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link
                      href="https://docs.clawd.bot/start/getting-started"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Documentation <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
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
                  AI Integration
                </Badge>
                <CardTitle>Jenkins MCP Server</CardTitle>
                <CardDescription>
                  Enable AI agents to interact with Jenkins CI/CD infrastructure.
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
                  MCP Server
                </Badge>
                <CardTitle>Calculator Server</CardTitle>
                <CardDescription>Go-based MCP server for mathematical computations.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/calculator-server" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  CRM Integration
                </Badge>
                <CardTitle>Method CRM MCP Server</CardTitle>
                <CardDescription>
                  Production-ready MCP server for Method CRM API integration.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/blog/method-crm-mcp" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
