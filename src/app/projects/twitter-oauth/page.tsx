import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Twitter OAuth Setup Wizard for Make.com | OAuth 2.0 Automation",
  description:
    "Streamlined OAuth 2.0 setup wizard for Make.com with PKCE security. Auto-generate ready-to-import scenarios in under 2 minutes.",
  keywords: [
    "Twitter OAuth",
    "Make.com integration",
    "OAuth 2.0",
    "PKCE authentication",
    "Twitter API",
    "automation wizard",
    "no-code integration",
    "scenario generation",
    "JavaScript OAuth",
    "Make.com automation",
  ],
  openGraph: {
    title: "Twitter OAuth Setup Wizard | Avinash Sangle",
    description: "Streamlined OAuth 2.0 setup for Make.com with PKCE security.",
    url: "https://avinashsangle.com/projects/twitter-oauth",
    type: "article",
  },
}

export default function TwitterOAuthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Twitter OAuth Setup Wizard",
            description:
              "Streamlined OAuth 2.0 setup wizard for Make.com with PKCE security and automatic scenario generation.",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web Browser",
            author: { "@type": "Person", name: "Avinash Sangle" },
            url: "https://avisangle.github.io/make-twitter-oauth/",
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/#projects" },
            { label: "Twitter OAuth Wizard" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">OAUTH 2.0 AUTOMATION</p>
            <h1 className="hero-title mb-6">Twitter OAuth Setup Wizard</h1>
            <p className="hero-description">
              Streamlined OAuth 2.0 setup for Make.com with PKCE security and automatic scenario
              generation
            </p>
            <div className="hero-cta">
              <Button asChild>
                <Link
                  href="https://avisangle.github.io/make-twitter-oauth/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
              <p className="text-lg leading-relaxed mb-8">
                Twitter OAuth Setup Wizard streamlines Twitter API OAuth 2.0 configuration for Make.com
                automation with a guided 4-step wizard. Implements PKCE security, auto-generates
                ready-to-import Make.com scenarios, and reduces setup time from 30 minutes to under 2
                minutes.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="tech-stack mb-6">
                  <Badge variant="outline" className="badge-primary-outline">JavaScript</Badge>
                  <Badge variant="outline" className="badge-primary-outline">OAuth 2.0</Badge>
                  <Badge variant="outline" className="badge-primary-outline">PKCE</Badge>
                  <Badge variant="outline" className="badge-primary-outline">Make.com</Badge>
                </div>
                <CardTitle className="mb-6">Key Features</CardTitle>
                <ul className="skill-list">
                  <li>4-step guided wizard</li>
                  <li>PKCE security (SHA-256)</li>
                  <li>Auto scenario generation</li>
                  <li>2-minute setup</li>
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
              <CodeBlock
                code={`# Clone the repository
git clone https://github.com/avisangle/make-twitter-oauth.git
cd make-twitter-oauth

# Open index.html in your browser
open index.html

# Or serve with a local server
python -m http.server 8000`}
                language="bash"
                className="mb-6"
              />
              <p className="text-muted-foreground">
                For detailed setup instructions, see the{" "}
                <Link
                  href="https://github.com/avisangle/make-twitter-oauth#readme"
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
                <CategoryIcon icon="Lock" size="lg" animation="pulse" />
                <CardTitle>PKCE Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Implements OAuth 2.0 with PKCE (Proof Key for Code Exchange) using SHA-256
                  hashing for enhanced security.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Rocket" size="lg" animation="pulse" />
                <CardTitle>Auto Scenario Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Generates ready-to-import Make.com scenarios with pre-filled credentials - no
                  manual configuration needed.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Zap" size="lg" animation="pulse" />
                <CardTitle>Zero-Friction UI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modern, responsive wizard interface guides users through OAuth setup with clear
                  instructions at each step.
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
                <CardTitle className="flex items-center gap-2"><CategoryIcon icon="Clock" size="sm" /> Massive Time Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduces Twitter OAuth setup time from 30+ minutes to under 2 minutes with
                  automated scenario generation.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CategoryIcon icon="Lock" size="sm" /> Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  PKCE implementation provides bank-level security for OAuth flows, protecting
                  against authorization code interception.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CategoryIcon icon="Target" size="sm" /> Error Prevention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Eliminates common OAuth configuration errors with automated setup and validation.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CategoryIcon icon="Globe" size="sm" /> No-Code Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Makes complex OAuth configuration accessible to non-technical Make.com users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="How to Fix Twitter OAuth in Make.com" centered={false} />
          <Card>
            <CardHeader>
              <CardTitle>Common Twitter OAuth Errors & Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid-2">
                <div>
                  <h4 className="text-accent font-semibold mb-2">Callback URL Mismatch</h4>
                  <p className="text-muted-foreground">
                    Ensure your Twitter Developer Portal callback URL{" "}
                    <strong>exactly</strong> matches the Make.com redirect URI. Even trailing
                    slashes matter!
                  </p>
                </div>
                <div>
                  <h4 className="text-accent font-semibold mb-2">PKCE Verifier Failed</h4>
                  <p className="text-muted-foreground">
                    This occurs when code_verifier doesn&apos;t match code_challenge. Our wizard
                    generates these correctly using SHA-256.
                  </p>
                </div>
                <div>
                  <h4 className="text-accent font-semibold mb-2">Invalid Client Credentials</h4>
                  <p className="text-muted-foreground">
                    Double-check your Client ID and Client Secret. Ensure you&apos;re using OAuth
                    2.0 credentials, not OAuth 1.0a.
                  </p>
                </div>
                <div>
                  <h4 className="text-accent font-semibold mb-2">Scope Errors</h4>
                  <p className="text-muted-foreground">
                    Twitter API v2 requires specific scopes. The wizard pre-configures tweet.read,
                    tweet.write, and users.read.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Implementation Highlights */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Implementation Highlights" centered={false} />
          <Card>
            <CardHeader>
              <CardTitle>Core Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li>4-step guided wizard interface</li>
                <li>OAuth 2.0 with PKCE implementation</li>
                <li>SHA-256 code challenge generation</li>
                <li>Twitter API v2 integration</li>
                <li>Make.com scenario auto-generation</li>
                <li>Pre-filled credential injection</li>
                <li>Responsive modern UI</li>
                <li>Real-time validation and error handling</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-project text-center">
          <h2 className="section-title">Try It Now</h2>
          <p className="section-subtitle mx-auto mb-8">
            Use the wizard to set up Twitter OAuth for Make.com in under 2 minutes
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link
                href="https://avisangle.github.io/make-twitter-oauth/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Wizard <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://github.com/avisangle/make-twitter-oauth"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
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
                  Production SaaS
                </Badge>
                <CardTitle>Social Media Auto-Poster</CardTitle>
                <CardDescription>
                  AI-powered social media management with OAuth integrations.
                </CardDescription>
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

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  AI Integration
                </Badge>
                <CardTitle>Jenkins MCP Server</CardTitle>
                <CardDescription>MCP server for AI-powered Jenkins automation.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/jenkins-mcp" className="project-link">
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
