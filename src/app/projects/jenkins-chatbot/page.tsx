import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Jenkins Chatbot Plugin | Conversational AI for CI/CD",
  description:
    "AI-powered conversational interface for Jenkins to manage builds and deployments via natural language commands. Secure integration with Jenkins RBAC.",
  keywords: [
    "Jenkins chatbot",
    "conversational AI",
    "ChatOps",
    "natural language processing",
    "AI-powered DevOps",
    "Jenkins plugin",
    "build automation",
    "deployment automation",
    "Python chatbot",
    "CI/CD chatbot",
  ],
  openGraph: {
    title: "Jenkins Chatbot Plugin | Conversational AI for CI/CD",
    description: "AI-powered conversational interface for Jenkins build management",
    url: "https://avinashsangle.com/projects/jenkins-chatbot",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenkins Chatbot Plugin",
    description: "AI-powered conversational interface for Jenkins",
  },
}

export default function JenkinsChatbotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Jenkins Chatbot Plugin",
            description:
              "AI-powered conversational interface for Jenkins CI/CD operations",
            applicationCategory: "DeveloperApplication",
            author: { "@type": "Person", name: "Avinash Sangle" },
            url: "https://github.com/avisangle/jenkins-chatbot-plugin",
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/#projects" },
            { label: "Jenkins Chatbot Plugin" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">CHATOPS FOR JENKINS</p>
            <h1 className="hero-title mb-6">Jenkins Chatbot Plugin</h1>
            <p className="hero-description">
              AI-powered conversational interface for Jenkins to manage builds and deployments via
              natural language commands
            </p>
            <div className="hero-cta">
              <Button variant="outline" asChild>
                <Link href="/#projects">← Back to Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader title="Project Overview" centered={false} />
          <p className="text-lg leading-relaxed mb-8">
            The Jenkins Chatbot Plugin embeds an AI-powered chat interface within Jenkins, enabling
            users to manage builds, deployments, and system tasks using natural language. This
            revolutionary approach transforms complex Jenkins interactions into simple
            conversational commands while respecting Jenkins&apos; security and access control.
          </p>

          <div className="grid-2">
            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="tech-stack">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">AI/ML</Badge>
                  <Badge variant="outline">Jenkins</Badge>
                  <Badge variant="outline">NLP</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Natural language commands</li>
                  <li>Build triggering via chat</li>
                  <li>Status queries</li>
                  <li>Security integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeader title="Quick Start" centered={false} />
          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block mb-6">
                <code>{`# Clone the repository
git clone https://github.com/avisangle/jenkins-chatbot-plugin.git
cd jenkins-chatbot-plugin

# Install dependencies
pip install -r requirements.txt

# Configure Jenkins connection
export JENKINS_URL="http://your-jenkins-server:8080"
export JENKINS_USER="your_username"
export JENKINS_TOKEN="your_api_token"

# Start the chatbot
python chatbot.py`}</code>
              </pre>
              <p className="text-muted-foreground">
                For Jenkins plugin installation, see the{" "}
                <Link
                  href="https://github.com/avisangle/jenkins-chatbot-plugin#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  README on GitHub
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What It Does */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeader title="What It Does" centered={false} />
          <div className="grid-2">
            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">💬</div>
                <CardTitle>Natural Language Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interact with Jenkins using conversational commands like &quot;trigger build for
                  project X&quot; or &quot;show me the latest test results&quot;.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">🔒</div>
                <CardTitle>Security Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fully integrated with Jenkins RBAC. Users can only perform actions they&apos;re
                  authorized for, maintaining security compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">⚡</div>
                <CardTitle>Faster Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduce time spent navigating Jenkins UI. Execute complex operations with simple
                  chat commands.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">📊</div>
                <CardTitle>Intelligent Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ask questions about build history, failure patterns, and system status to get
                  AI-powered insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader title="Why It Matters" centered={false} />
          <div className="grid-2">
            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🚀 Developer Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Eliminate context switching. Manage Jenkins operations without leaving your chat
                  interface or IDE.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>📉 Lower Barrier to Entry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Make Jenkins accessible to team members unfamiliar with its interface. Natural
                  language removes learning curve.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🤖 AI-Assisted Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leverage AI to understand intent, suggest actions, and provide contextual help
                  for Jenkins operations.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>⏱️ Time Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduce CI/CD operation time by up to 60% with instant command execution via chat.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Highlights */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeader title="Implementation Highlights" centered={false} />
          <Card>
            <CardHeader>
              <CardTitle>Core Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li>Build triggering and management through natural language</li>
                <li>Real-time build status monitoring and notifications</li>
                <li>Log analysis and failure diagnostics</li>
                <li>Job configuration queries</li>
                <li>Pipeline execution tracking</li>
                <li>Multi-user conversation support</li>
                <li>Context-aware responses</li>
                <li>Integration with Jenkins security model</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader title="Related Projects" centered={false} />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  AI Integration
                </Badge>
                <CardTitle>Jenkins MCP Server</CardTitle>
                <CardDescription>
                  MCP server enabling AI agents to interact with Jenkins.
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
                  Production SaaS
                </Badge>
                <CardTitle>Social Media Auto-Poster</CardTitle>
                <CardDescription>AI-powered social media management platform.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/social-media-auto-poster" className="project-link">
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Explore the Code</h2>
          <p className="section-subtitle mx-auto mb-8">
            Check out the GitHub repository for implementation details
          </p>
          <Button size="lg" asChild>
            <Link
              href="https://github.com/avisangle/jenkins-chatbot-plugin"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
