import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"

export const metadata: Metadata = {
  title: "WordPress Development with AI | MCP-Enhanced WordPress Coding",
  description:
    "WordPress development services enhanced with AI-assisted debugging and code analysis using Model Context Protocol. Custom themes, plugins, and optimization.",
  keywords: [
    "WordPress development",
    "AI-assisted coding",
    "WordPress debugging",
    "MCP WordPress",
    "custom theme development",
    "plugin development",
    "PHP development",
    "WordPress optimization",
    "AI code analysis",
    "WordPress consultant",
  ],
  openGraph: {
    title: "WordPress Development with AI | Avinash Sangle",
    description: "AI-assisted WordPress development using Model Context Protocol.",
    url: "https://avinashsangle.com/projects/wp-mcp",
    type: "article",
  },
}

export default function WPMCPPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "WP Coding with MCP",
            description:
              "WordPress development enhanced with AI-assisted debugging and code analysis using Model Context Protocol.",
            applicationCategory: "DeveloperApplication",
            programmingLanguage: "PHP",
            author: { "@type": "Person", name: "Avinash Sangle" },
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/#projects" },
            { label: "WP Coding with MCP" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">WORDPRESS DEVELOPMENT</p>
            <h1 className="hero-title mb-6">WP Coding with MCP</h1>
            <p className="hero-description">
              WordPress development enhanced with AI-assisted debugging and code analysis using
              Model Context Protocol
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
          <p className="text-lg leading-relaxed mb-8">
            Comprehensive WordPress development services enhanced with AI-assisted code analysis
            and debugging through Model Context Protocol integration. Combines traditional WordPress
            expertise with modern AI capabilities for faster, more efficient development.
          </p>

          <div className="grid-2">
            <Card>
              <CardHeader>
                <CardTitle>Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Custom theme development</li>
                  <li>Plugin creation</li>
                  <li>Error debugging</li>
                  <li>Performance optimization</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="tech-stack">
                  <Badge variant="outline">WordPress</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">MCP</Badge>
                  <Badge variant="outline">AI</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="What It Does" centered={false} />
          <div className="grid-2">
            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">🎨</div>
                <CardTitle>Custom Themes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Design and develop custom WordPress themes tailored to brand requirements with
                  responsive design and modern best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">🔌</div>
                <CardTitle>Plugin Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create custom plugins to extend WordPress functionality, from simple features to
                  complex integrations.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">🐛</div>
                <CardTitle>AI-Assisted Debugging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leverage MCP integration for intelligent error detection, code analysis, and
                  automated corrections.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">⚡</div>
                <CardTitle>Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimize WordPress sites for speed, SEO, and user experience with caching,
                  database optimization, and code review.
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
                <CardTitle>🤖 AI-Enhanced Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  MCP integration enables AI-powered code analysis and automated error correction,
                  reducing development time.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🎯 Faster Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI assistance accelerates debugging and development cycles, delivering projects
                  faster without compromising quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
