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
            blogPost: [],
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
          <h2 className="section-title mb-8">Latest Articles</h2>
          <Card className="p-6">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
              <CategoryIcon icon="Building2" size="xl" className="mx-auto" />
              <div>
                <p className="text-accent font-semibold mb-2">AI & AUTOMATION</p>
                <h3 className="text-2xl font-bold mb-4">Complete Guide to Method CRM MCP Server</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Learn how to set up, configure, and use the Method CRM MCP Server to enable AI
                  assistants like Claude to interact with your CRM data through natural language
                  commands.
                </p>
                <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> January 15, 2025</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><CategoryIcon icon="Clock" size="sm" /> 12 min read</span>
                </div>
                <Button asChild>
                  <Link href="/blog/method-crm-mcp">Read Article →</Link>
                </Button>
              </div>
            </div>
          </Card>
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
