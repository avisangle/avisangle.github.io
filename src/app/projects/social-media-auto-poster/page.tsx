import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Social Media Auto-Poster | AI-Powered Social Media Management SaaS",
  description:
    "AI-powered social media management platform with automated posting, multi-platform support, and intelligent content generation. Built with React, Supabase, and AI APIs.",
  keywords: [
    "social media automation",
    "AI content generation",
    "auto-posting",
    "social media scheduler",
    "multi-platform posting",
    "Supabase",
    "React",
    "OAuth integration",
    "social media management",
    "content marketing automation",
  ],
  openGraph: {
    title: "Social Media Auto-Poster | AI-Powered SaaS by Avinash Sangle",
    description:
      "AI-powered social media management platform with automated posting and multi-platform support",
    url: "https://avinashsangle.com/projects/social-media-auto-poster",
    type: "article",
  },
}

export default function SocialMediaAutoPosterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Social Media Auto-Poster",
            description:
              "AI-powered social media scheduler for Twitter, LinkedIn, Reddit, Facebook, and Instagram with automated posting and intelligent content generation.",
            applicationCategory: "SocialNetworkingApplication",
            operatingSystem: "Web Browser",
            author: { "@type": "Person", name: "Avinash Sangle" },
            url: "https://social.avinashsangle.com/",
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/#projects" },
            { label: "Social Media Auto-Poster" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">PRODUCTION SAAS APPLICATION</p>
            <h1 className="hero-title mb-6">Social Media Auto-Poster</h1>
            <p className="hero-description">
              AI-powered social media management platform with automated posting, multi-platform
              support, and intelligent content generation
            </p>
            <div className="hero-cta">
              <Button asChild>
                <Link
                  href="https://social.avinashsangle.com/"
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
              <p className="text-lg leading-relaxed mb-4">
                Social Media Auto-Poster is a comprehensive SaaS platform that revolutionizes
                social media management by combining AI-powered content generation with automated
                multi-platform posting capabilities.
              </p>
              <p className="text-lg leading-relaxed">
                The platform enables users to schedule, generate, and post content across multiple
                social media platforms including Twitter, LinkedIn, Facebook, Instagram, and
                Reddit - all from a single unified interface.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="tech-stack mb-6">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Supabase</Badge>
                  <Badge variant="outline">AI APIs</Badge>
                  <Badge variant="outline">OAuth 2.0</Badge>
                  <Badge variant="outline">Stripe</Badge>
                  <Badge variant="outline">Vercel</Badge>
                </div>
                <CardTitle className="mb-4">Key Features</CardTitle>
                <ul className="skill-list">
                  <li>AI content generation</li>
                  <li>Multi-platform posting</li>
                  <li>Smart scheduling</li>
                  <li>Analytics dashboard</li>
                  <li>Approval workflow</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="What It Does" centered={false} />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">🤖</div>
                <CardTitle>AI Content Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Generate engaging social media posts using advanced AI models. The platform
                  analyzes your audience and creates platform-specific content optimized for
                  engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">📅</div>
                <CardTitle>Smart Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Schedule posts across multiple platforms with intelligent timing recommendations.
                  Calendar view makes it easy to visualize your content strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">🔗</div>
                <CardTitle>Multi-Platform Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seamlessly post to Twitter, LinkedIn, Facebook, Instagram, and Reddit from a
                  single interface with OAuth integration.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">✅</div>
                <CardTitle>Approval Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Review and approve AI-generated content before publishing. Maintain full control
                  over your social media presence.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">📊</div>
                <CardTitle>Analytics & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track post performance, engagement metrics, and audience growth across all
                  connected platforms in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">🎨</div>
                <CardTitle>Media Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload and manage images, videos, and other media assets. Optimize content for
                  each platform automatically.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader
            title="Supported Platforms"
            subtitle="Post to all major social networks from one dashboard"
            centered={false}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <Card className="text-center p-6">
              <div className="text-3xl mb-2">🐦</div>
              <h4 className="font-semibold">Twitter / X</h4>
              <p className="text-sm text-muted-foreground">Tweets & threads</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl mb-2">💼</div>
              <h4 className="font-semibold">LinkedIn</h4>
              <p className="text-sm text-muted-foreground">Posts & articles</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl mb-2">🤖</div>
              <h4 className="font-semibold">Reddit</h4>
              <p className="text-sm text-muted-foreground">Subreddit posts</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl mb-2">📘</div>
              <h4 className="font-semibold">Facebook</h4>
              <p className="text-sm text-muted-foreground">Page posts</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl mb-2">📸</div>
              <h4 className="font-semibold">Instagram</h4>
              <p className="text-sm text-muted-foreground">Feed posts</p>
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
                <CardTitle>⏱️ Save Time & Effort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduce social media management time by up to 80%. AI handles content creation
                  while automation handles distribution, freeing you to focus on strategy and
                  engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>📈 Consistent Posting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Maintain a consistent social media presence across all platforms. Never miss
                  optimal posting times with smart scheduling and automation.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🎯 Better Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI-generated content is optimized for each platform&apos;s algorithm and audience
                  preferences, leading to higher engagement rates and better ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>💼 Professional Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enterprise-grade social media management accessible to businesses of all sizes.
                  Scalable solution that grows with your needs.
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
                  <h4 className="font-semibold text-accent-foreground mb-2">Frontend</h4>
                  <p className="text-muted-foreground">
                    Built with React for a responsive, dynamic user interface. Component-based
                    architecture ensures maintainability and scalability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">Backend & Database</h4>
                  <p className="text-muted-foreground">
                    Supabase provides real-time database, authentication, and storage. PostgreSQL
                    ensures data integrity and complex querying capabilities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">AI Integration</h4>
                  <p className="text-muted-foreground">
                    Multiple AI providers (Gemini, OpenAI) for content generation with fallback
                    mechanisms ensuring reliability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">OAuth & APIs</h4>
                  <p className="text-muted-foreground">
                    Secure OAuth 2.0 integration with all major social platforms. RESTful API
                    architecture for platform communication.
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
                <li>Real-time post scheduling and calendar management</li>
                <li>AI-powered content generation with customizable settings</li>
                <li>Multi-platform OAuth authentication and authorization</li>
                <li>Automated posting with platform-specific formatting</li>
                <li>Post history and analytics tracking</li>
                <li>Image upload and optimization</li>
                <li>User management and billing integration (Stripe)</li>
                <li>RSS feed integration for content sources</li>
                <li>Twitter thread generation and formatting</li>
                <li>Approval queue for content review</li>
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
                  AI Integration
                </Badge>
                <CardTitle>Jenkins MCP Server</CardTitle>
                <CardDescription>
                  MCP server enabling AI agents to interact with Jenkins programmatically.
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
                  Cloud Automation
                </Badge>
                <CardTitle>AWS EC2 with AI Agent</CardTitle>
                <CardDescription>
                  Deploy cloud infrastructure via natural language with intelligent automation.
                </CardDescription>
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
                  OAuth Automation
                </Badge>
                <CardTitle>Twitter OAuth Wizard</CardTitle>
                <CardDescription>
                  Streamlined OAuth 2.0 setup for Make.com with PKCE security.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/twitter-oauth" className="project-link">
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
          <h2 className="section-title">Ready to Explore More?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Check out the live application or view more projects
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link
                href="https://social.avinashsangle.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Live Demo <ExternalLink className="ml-2 h-4 w-4" />
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
