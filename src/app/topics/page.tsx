import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import { topics, posts, getPostsByTopic } from "@/data/posts"

const SITE_URL = "https://avinashsangle.com"

// Visible h1 / OG title carry no template suffix, so they run longer than metadata.title.
const PAGE_TITLE = "Browse All Topics: AI Agents, MCP, and Claude Code Guides"
const PAGE_DESCRIPTION =
  "Every guide here, grouped into seven topics: Model Context Protocol, Claude Code, coding agents, agent platforms, AI security, CI/CD, and local inference."

export const metadata: Metadata = {
  title: "Topics: AI Agent, MCP & Claude Code Guides",
  description: PAGE_DESCRIPTION,
  keywords: [
    "AI agent topics",
    "Model Context Protocol guides",
    "Claude Code guides",
    "coding agents",
    "AI security",
    "AI in CI/CD",
    "local inference",
  ],
  authors: [{ name: "Avinash Sangle" }],
  alternates: {
    canonical: `${SITE_URL}/topics`,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/topics`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    creator: "@AvinashSangle",
  },
}

export default function TopicsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            url: `${SITE_URL}/topics`,
            isPartOf: {
              "@type": "WebSite",
              name: "Avinash Sangle",
              url: SITE_URL,
            },
            mainEntity: {
              "@type": "ItemList",
              name: "Topic hubs",
              numberOfItems: topics.length,
              itemListElement: topics.map((topic, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `${SITE_URL}/topics/${topic.id}`,
                name: topic.label,
              })),
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
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              {
                "@type": "ListItem",
                position: 2,
                name: "Topics",
                item: `${SITE_URL}/topics`,
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Topics" }]} />
      </div>

      {/* Hero - answer-first opening */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">TOPIC HUBS</p>
            <h1 className="hero-title mb-6">{PAGE_TITLE}</h1>
            <p className="hero-description">
              This page groups all {posts.length} articles on this site into{" "}
              {topics.length} topics, so you can read a subject end to end instead of
              hunting through the archive. Pick a hub below for every guide on that
              subject, newest first.
            </p>
          </div>
        </div>
      </section>

      {/* Topic cards */}
      <section className="section section-alt">
        <div className="container-project">
          <h2 className="section-title mb-8">All {topics.length} topics</h2>
          <div className="grid-2">
            {topics.map((topic) => {
              const count = getPostsByTopic(topic.id).length
              return (
                <Card key={topic.id} className="card-hover">
                  <CardHeader>
                    <CategoryIcon icon={topic.icon} size="lg" animation="pulse" />
                    <CardTitle>{topic.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{topic.description}</p>
                    <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <CategoryIcon icon="FileText" size="sm" /> {count}{" "}
                        {count === 1 ? "guide" : "guides"}
                      </span>
                    </div>
                    <Link href={`/topics/${topic.id}`} className="project-link">
                      Browse {topic.label} →
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-project text-center">
          <h2 className="section-title">Prefer the full archive?</h2>
          <p className="section-subtitle mx-auto mb-8">
            The blog index lists every article in publication order, across all{" "}
            {topics.length} topics.
          </p>
          <Button asChild>
            <Link href="/blog">Browse all articles</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
