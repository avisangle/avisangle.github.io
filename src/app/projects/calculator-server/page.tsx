import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Calculator Server | Go-based MCP Server for Mathematical Computations",
  description:
    "High-performance Go-based MCP server providing comprehensive mathematical computation capabilities for AI agents and applications.",
  keywords: [
    "MCP server",
    "Go programming",
    "mathematical computation",
    "Model Context Protocol",
    "Golang server",
    "AI tools",
    "computation API",
    "microservices",
    "Go development",
    "mathematical API",
  ],
  openGraph: {
    title: "Calculator Server | Go-based MCP Server",
    description:
      "High-performance mathematical computation server using Model Context Protocol",
    url: "https://avinashsangle.com/projects/calculator-server",
    type: "article",
  },
}

export default function CalculatorServerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Calculator Server",
            description:
              "Go-based MCP server for mathematical computations with comprehensive toolkit",
            applicationCategory: "DeveloperApplication",
            programmingLanguage: "Go",
            author: { "@type": "Person", name: "Avinash Sangle" },
            url: "https://github.com/avisangle/calculator-server",
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/#projects" },
            { label: "Calculator Server" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">MCP SERVER IN GO</p>
            <h1 className="hero-title mb-6">Calculator Server</h1>
            <p className="hero-description">
              High-performance Go-based MCP server providing comprehensive mathematical computation
              capabilities for AI agents
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
          <div className="grid-2">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Calculator Server is a robust Model Context Protocol (MCP) server implemented in Go
                that provides mathematical computation tools for AI agents and applications. It
                demonstrates Go programming expertise and showcases integration of computational
                services with AI systems through a standardized protocol interface.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="tech-stack mb-6">
                  <Badge variant="outline" className="badge-primary-outline">Go</Badge>
                  <Badge variant="outline" className="badge-primary-outline">MCP</Badge>
                  <Badge variant="outline" className="badge-primary-outline">Mathematical APIs</Badge>
                </div>
                <CardTitle className="mb-6">Capabilities</CardTitle>
                <ul className="skill-list mb-4">
                  <li>Basic arithmetic operations</li>
                  <li>Advanced calculations</li>
                  <li>13+ mathematical tools</li>
                  <li>High-performance computing</li>
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
git clone https://github.com/avisangle/calculator-server.git
cd calculator-server

# Build the server
go build -o calculator-server

# Run the MCP server
./calculator-server`}</code>
              </pre>
              <p className="text-muted-foreground">
                For integration with AI agents, see the{" "}
                <Link
                  href="https://github.com/avisangle/calculator-server#readme"
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
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="What It Does" centered={false} />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Plus" size="lg" animation="pulse" />
                <CardTitle>Basic Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Addition, subtraction, multiplication, division, and modulo operations with high
                  precision.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Triangle" size="lg" animation="pulse" />
                <CardTitle>Advanced Math</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trigonometric functions, logarithms, exponentials, and statistical calculations.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Zap" size="lg" animation="pulse" />
                <CardTitle>High Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Go&apos;s concurrency and speed ensure low-latency responses for AI agents.
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
                <CardTitle>🤖 AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Provides AI agents with mathematical capabilities through standardized MCP
                  protocol.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🚀 Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Go&apos;s efficiency and concurrency make it ideal for high-throughput
                  computation services.
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
              <CardTitle>Core Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li>13+ comprehensive mathematical tools</li>
                <li>MCP protocol implementation in Go</li>
                <li>Concurrent request handling</li>
                <li>Type-safe computation APIs</li>
                <li>Extensible architecture for custom functions</li>
                <li>Error handling and validation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Related Projects" centered={false} />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  AI Integration
                </Badge>
                <CardTitle>Jenkins MCP Server</CardTitle>
                <CardDescription>Python-based MCP server for Jenkins automation.</CardDescription>
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
                  WordPress Development
                </Badge>
                <CardTitle>WP Coding with MCP</CardTitle>
                <CardDescription>AI-assisted WordPress development.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/wp-mcp" className="project-link">
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
                <CardDescription>Natural language cloud deployment.</CardDescription>
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
    </>
  )
}
