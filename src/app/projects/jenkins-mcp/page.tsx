import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Jenkins MCP Server | AI Integration for Jenkins CI/CD",
  description:
    "Enable AI agents to interact with Jenkins through Model Context Protocol for automated DevOps workflows. Query jobs, trigger builds, and access logs programmatically.",
  keywords: [
    "Jenkins automation",
    "Model Context Protocol",
    "MCP server",
    "AI DevOps",
    "Jenkins AI integration",
    "CI/CD automation",
    "conversational DevOps",
    "LLM integration",
    "Python Jenkins",
    "DevOps tools",
  ],
  openGraph: {
    title: "Jenkins MCP Server | AI Integration for Jenkins",
    description: "Enable AI agents to interact with Jenkins through Model Context Protocol",
    url: "https://avinashsangle.com/projects/jenkins-mcp",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenkins MCP Server | AI Integration",
    description: "Enable AI agents to interact with Jenkins through MCP",
  },
}

export default function JenkinsMCPPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Jenkins MCP Server",
            description:
              "MCP server enabling AI agents to interact with Jenkins programmatically for automated DevOps workflows",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Linux, Windows, macOS",
            author: { "@type": "Person", name: "Avinash Sangle" },
            url: "https://github.com/avisangle/jenkins-mcp-server",
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/#projects" },
            { label: "Jenkins MCP Server" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">AI INTEGRATION FOR JENKINS</p>
            <h1 className="hero-title mb-6">Jenkins MCP Server</h1>
            <p className="hero-description">
              Enable AI agents to interact with Jenkins through Model Context Protocol for automated
              DevOps workflows
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
        <div className="container-project">
          <SectionHeader title="Project Overview" centered={false} />
          <p className="text-lg leading-relaxed mb-6">
            The Jenkins MCP Server is a groundbreaking integration that enables Jenkins to serve
            context and operations through the Model Context Protocol (MCP). This project bridges
            the gap between AI agents and Jenkins, allowing for unprecedented levels of automation
            and AI-assisted DevOps workflows.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            By implementing the MCP protocol, Jenkins becomes accessible to LLM-based tools and AI
            assistants, enabling natural language interactions with your CI/CD infrastructure.
          </p>

          <div className="grid-2">
            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="tech-stack">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">MCP</Badge>
                  <Badge variant="outline">Jenkins API</Badge>
                  <Badge variant="outline">Node.js</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Query job configurations</li>
                  <li>Trigger builds programmatically</li>
                  <li>Access build logs and artifacts</li>
                  <li>AI-assisted troubleshooting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Quick Start" centered={false} />
          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block mb-6">
                <code>{`# Clone the repository
git clone https://github.com/avisangle/jenkins-mcp-server.git
cd jenkins-mcp-server

# Install dependencies
pip install -r requirements.txt

# Configure Jenkins connection
export JENKINS_URL="http://your-jenkins-server:8080"
export JENKINS_USER="your_username"
export JENKINS_TOKEN="your_api_token"

# Run the MCP server
python -m jenkins_mcp_server`}</code>
              </pre>
              <p className="text-muted-foreground">
                For Claude Desktop integration and advanced configuration, see the{" "}
                <Link
                  href="https://github.com/avisangle/jenkins-mcp-server#readme"
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
        <div className="container-project">
          <SectionHeader title="What It Does" centered={false} />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">🔧</div>
                <CardTitle>Job Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Query job configurations, retrieve status information, and manage Jenkins jobs
                  through AI-powered natural language commands.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">🚀</div>
                <CardTitle>Build Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trigger builds, monitor execution status, access build logs, and retrieve
                  artifacts programmatically through the MCP interface.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">🧠</div>
                <CardTitle>Context Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Provide AI agents with comprehensive Jenkins environment information for
                  intelligent decision-making and automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Why It Matters" centered={false} />
          <div className="grid-2">
            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🤖 AI-Assisted DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transform Jenkins operations with AI assistance. Use natural language to interact
                  with your CI/CD infrastructure, making complex operations accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>⚡ Faster Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduce time spent on repetitive Jenkins tasks. AI agents can handle routine
                  operations, troubleshooting, and monitoring automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🔄 Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  MCP provides a standardized protocol for AI-Jenkins interaction, enabling
                  integration with any MCP-compatible LLM application or AI assistant.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🛡️ Security First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Respects Jenkins&apos; authentication and authorization models, ensuring secure AI
                  interactions that maintain your existing security policies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Highlights */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Implementation Highlights" centered={false} />

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>🏗️ Technical Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid-2">
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">
                    MCP Server Architecture
                  </h4>
                  <p className="text-muted-foreground">
                    Python-based MCP server with Node.js wrapper for seamless integration with
                    Jenkins. Optimized for low-latency responses to support real-time AI
                    conversations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">Security First</h4>
                  <p className="text-muted-foreground">
                    Respects Jenkins&apos; authentication and authorization models, ensuring secure
                    AI interactions that maintain existing security policies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">High Performance</h4>
                  <p className="text-muted-foreground">
                    Optimized for low-latency responses with efficient caching and connection
                    pooling for real-time AI conversations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">Extensible Design</h4>
                  <p className="text-muted-foreground">
                    Modular tool system allows custom extensions for specific use cases. Add new
                    capabilities without modifying core functionality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✨ Core Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li>Job configuration queries and status retrieval</li>
                <li>Programmatic build triggering with parameters</li>
                <li>Build log access and real-time monitoring</li>
                <li>Artifact retrieval and management</li>
                <li>Jenkins environment context provisioning</li>
                <li>Custom tool development framework</li>
                <li>Secure authentication integration</li>
                <li>RESTful API compatibility</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Related Projects" centered={false} />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  ChatOps
                </Badge>
                <CardTitle>Jenkins Chatbot Plugin</CardTitle>
                <CardDescription>
                  AI-powered conversational interface for Jenkins build management.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/jenkins-chatbot" className="project-link">
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
                  Cloud Automation
                </Badge>
                <CardTitle>AWS EC2 with AI Agent</CardTitle>
                <CardDescription>Natural language cloud infrastructure deployment.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/aws-ec2-agent" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-project text-center">
          <h2 className="section-title">Explore the Code</h2>
          <p className="section-subtitle mx-auto mb-8">
            Check out the GitHub repository for implementation details and documentation
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link
                href="https://github.com/avisangle/jenkins-mcp-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
