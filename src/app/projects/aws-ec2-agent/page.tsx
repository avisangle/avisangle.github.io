import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "AWS EC2 Deployment with AI Agent | Cloud Infrastructure Automation",
  description:
    "Deploy cloud infrastructure via natural language with intelligent self-healing automation. Multi-cloud support for AWS, GCP, and Azure.",
  keywords: [
    "AWS automation",
    "EC2 deployment",
    "AI agent",
    "cloud infrastructure",
    "infrastructure as code",
    "multi-cloud",
    "AWS DevOps",
    "self-healing infrastructure",
    "natural language cloud",
    "GCP",
    "Azure",
    "cloud automation",
  ],
  openGraph: {
    title: "AWS EC2 Deployment with AI Agent | Avinash Sangle",
    description:
      "Deploy cloud infrastructure via natural language with intelligent self-healing automation.",
    url: "https://avinashsangle.com/projects/aws-ec2-agent",
    type: "article",
  },
}

export default function AWSEc2AgentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "AWS EC2 Deployment with AI Agent",
            description:
              "Deploy cloud infrastructure via natural language with intelligent self-healing automation. Multi-cloud support for AWS, GCP, and Azure.",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Linux, Windows, macOS",
            author: { "@type": "Person", name: "Avinash Sangle" },
            url: "https://youtu.be/E6QqJJAZzlE",
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/#projects" },
            { label: "AWS EC2 with AI Agent" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">CLOUD INFRASTRUCTURE AUTOMATION</p>
            <h1 className="hero-title mb-6">AWS EC2 Deployment with AI Agent</h1>
            <p className="hero-description">
              Deploy cloud infrastructure through natural language with intelligent self-healing
              automation
            </p>
            <div className="hero-cta">
              <Button asChild>
                <Link
                  href="https://youtu.be/E6QqJJAZzlE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#projects">← Back</Link>
              </Button>
            </div>

            {/* YouTube Embed */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-none"
                  src="https://www.youtube.com/embed/E6QqJJAZzlE"
                  title="Deploy AWS EC2 with AI Agent Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Project Overview" centered={false} />
          <div className="grid-2">
            <div>
              <p className="text-lg leading-relaxed mb-4">
                Automated multi-cloud infrastructure provisioning through natural language commands.
                Deploy AWS EC2 instances using an AI agent that intelligently plans, discovers
                resources, and self-heals errors during execution. From chat to cloud in 60 seconds.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Cloud Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="tech-stack mb-6">
                  <Badge variant="outline" className="badge-primary-outline">AWS</Badge>
                  <Badge variant="outline" className="badge-primary-outline">GCP</Badge>
                  <Badge variant="outline" className="badge-primary-outline">Azure</Badge>
                </div>
                <CardTitle className="mb-6">Key Features</CardTitle>
                <ul className="skill-list">
                  <li>Natural language deployment</li>
                  <li>Intelligent planning</li>
                  <li>Self-healing automation</li>
                  <li>Multi-cloud support</li>
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
              <CardTitle>Try It Now</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block mb-6">
                <code>{`# Configure AWS credentials
export AWS_ACCESS_KEY_ID="your_access_key"
export AWS_SECRET_ACCESS_KEY="your_secret_key"
export AWS_REGION="us-east-1"

# Example natural language command:
"Deploy an Ubuntu EC2 instance with t2.micro in us-east-1"`}</code>
              </pre>
              <p className="text-muted-foreground">
                Watch the{" "}
                <Link
                  href="https://youtu.be/E6QqJJAZzlE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  full demo video
                </Link>{" "}
                to see the AI agent in action.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What It Does */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="What It Does" centered={false} />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="MessageSquare" size="lg" animation="pulse" />
                <CardTitle>Natural Language</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simply describe what you want to deploy. &quot;Create an EC2 instance with
                  Ubuntu&quot; - that&apos;s all you need.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Brain" size="lg" animation="pulse" />
                <CardTitle>Intelligent Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI agent analyzes requirements, discovers existing resources, and creates
                  optimal deployment plan.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="RefreshCw" size="lg" animation="pulse" />
                <CardTitle>Self-Healing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatically detects and corrects errors during deployment, retrying failed
                  steps intelligently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Why It Matters" centered={false} />
          <div className="grid-2">
            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>⚡ 60-Second Deployments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  What traditionally takes 30 minutes of clicking through AWS console now takes 60
                  seconds via chat.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🌐 Multi-Cloud Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Same natural language interface works across AWS, GCP, and Azure - no
                  platform-specific learning required.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🛡️ Error Resilience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI agent handles common deployment errors automatically, reducing manual
                  intervention.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>📚 Democratizes DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Makes cloud infrastructure accessible to developers unfamiliar with complex
                  cloud consoles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Highlights */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Implementation Highlights" centered={false} />
          <Card>
            <CardHeader>
              <CardTitle>Core Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li>Natural language infrastructure description parsing</li>
                <li>Intelligent resource discovery and planning</li>
                <li>Multi-cloud API integration (AWS, GCP, Azure)</li>
                <li>Automated error detection and recovery</li>
                <li>MCP protocol for AI agent communication</li>
                <li>Security best practices enforcement</li>
                <li>Real-time deployment monitoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
