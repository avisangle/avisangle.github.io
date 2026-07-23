import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import {
  topics,
  getPostsByTopic,
  getTopicById,
  type Topic,
  type TopicId,
} from "@/data/posts"

const SITE_URL = "https://avinashsangle.com"

/**
 * Per-topic SEO copy. Kept separate from the registry so meta titles can hit the
 * 38-43 char band (rendered <= 60 after the " | Avinash Sangle" template) while
 * pageTitle (the visible h1 / OG title, no suffix) stays in the 55-65 band.
 * Typed as Record<TopicId, ...> so a new registry topic fails the build here.
 */
const topicSeo: Record<
  TopicId,
  { metaTitle: string; pageTitle: string; description: string; keywords: string[] }
> = {
  mcp: {
    metaTitle: "Model Context Protocol Guides & Tutorials",
    pageTitle: "Model Context Protocol Guides: Servers, Specs, and Patterns",
    description:
      "Model Context Protocol guides covering the stateless 2026 spec, the code execution pattern, and building MCP servers that connect AI agents to your tools.",
    keywords: [
      "Model Context Protocol",
      "MCP servers",
      "MCP spec 2026",
      "MCP code execution",
      "MCP tutorials",
    ],
  },
  "claude-code": {
    metaTitle: "Claude Code Guides: Setup, Routing, Cost",
    pageTitle: "Claude Code Guides: CLAUDE.md, Model Routing, Cost Control",
    description:
      "Claude Code guides on writing CLAUDE.md files, routing work between models, wiring hooks, tracking token cost, and keeping terminal agent workflows stable.",
    keywords: [
      "Claude Code",
      "CLAUDE.md",
      "Claude Code hooks",
      "Claude Code cost tracking",
      "model routing",
    ],
  },
  "coding-agents": {
    metaTitle: "Coding Agent & Model CLI Guides for 2026",
    pageTitle: "Coding Agents and Model CLIs: Compared, Set Up, Benchmarked",
    description:
      "Coding agent guides comparing Kimi K3, GLM-5.2, Gemini, GPT-5.6, and Qwen, plus the terminal CLIs that run them, with setup steps, pricing, and benchmarks.",
    keywords: [
      "coding agents",
      "AI coding CLI",
      "Kimi K3",
      "GPT-5.6",
      "Qwen Code",
      "agentic coding",
    ],
  },
  "agent-platforms": {
    metaTitle: "Agent Platform Guides: Run & Grade Agents",
    pageTitle: "Agent Platform Guides: Host, Run, and Grade AI Agents at Scale",
    description:
      "Agent platform guides covering Claude Managed Agents, the ant CLI, Claude Tag in Slack, and self-hosted bots, with pricing math and deployment walkthroughs.",
    keywords: [
      "agent platforms",
      "Claude Managed Agents",
      "ant CLI",
      "Claude Tag",
      "AI agent deployment",
    ],
  },
  "ai-security": {
    metaTitle: "AI Agent Security Guides & Defense Plays",
    pageTitle: "AI Agent Security Guides: Prompt Injection, CVEs, Defenses",
    description:
      "AI agent security guides on prompt injection, hallucinated package attacks, and gateway CVEs, with the hooks, allowlists, and sandbox settings that hold.",
    keywords: [
      "AI agent security",
      "prompt injection defense",
      "HalluSquatting",
      "LLM gateway CVE",
      "AI supply chain security",
    ],
  },
  "ci-cd": {
    metaTitle: "AI in CI/CD: GitHub Actions Agent Guides",
    pageTitle: "AI in CI/CD Guides: GitHub Actions, Review, and Cost Caps",
    description:
      "Guides for running AI agents in CI/CD pipelines: non-interactive auth, GitHub Actions workflows, automated code review, cost caps, and least privilege.",
    keywords: [
      "AI in CI/CD",
      "Claude Code GitHub Actions",
      "AI code review",
      "agent CI pipeline",
      "non-interactive agent auth",
    ],
  },
  "local-inference": {
    metaTitle: "Local & On-Device AI Inference Guides 2026",
    pageTitle: "Local and On-Device Inference: Run Open Models Yourself",
    description:
      "Local inference guides for running open-weight models on hardware you own at zero token cost: GLM-5.2, Gemma 4, Apple Core AI, and the RAM you need.",
    keywords: [
      "local inference",
      "on-device AI",
      "open-weight models",
      "GLM-5.2 local",
      "Gemma 4",
      "Apple Core AI",
    ],
  },
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-")
  return `${MONTHS[Number(month) - 1]} ${Number(day)}, ${year}`
}

function resolveTopic(id: string): Topic | undefined {
  return topics.find((topic) => topic.id === id)
}

export function generateStaticParams() {
  return topics.map((topic) => ({ topic: topic.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>
}): Promise<Metadata> {
  const { topic: topicParam } = await params
  const topic = resolveTopic(topicParam)

  if (!topic) {
    return { title: "Topic Not Found" }
  }

  const seo = topicSeo[topic.id]
  const url = `${SITE_URL}/topics/${topic.id}`

  return {
    title: seo.metaTitle,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "Avinash Sangle" }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: seo.pageTitle,
      description: seo.description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.pageTitle,
      description: seo.description,
      creator: "@AvinashSangle",
    },
  }
}

export default async function TopicHubPage({
  params,
}: {
  params: Promise<{ topic: string }>
}) {
  const { topic: topicParam } = await params
  const topic = resolveTopic(topicParam)

  if (!topic) {
    notFound()
  }

  const seo = topicSeo[topic.id]
  const topicPosts = getPostsByTopic(topic.id)
  const otherTopics = topics.filter((other) => other.id !== topic.id)
  const url = `${SITE_URL}/topics/${topic.id}`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: seo.pageTitle,
            description: seo.description,
            url,
            isPartOf: {
              "@type": "WebSite",
              name: "Avinash Sangle",
              url: SITE_URL,
            },
            about: {
              "@type": "Thing",
              name: topic.label,
              description: topic.description,
            },
            mainEntity: {
              "@type": "ItemList",
              name: `${topic.label} guides`,
              numberOfItems: topicPosts.length,
              itemListOrder: "https://schema.org/ItemListOrderDescending",
              itemListElement: topicPosts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `${SITE_URL}/blog/${post.slug}`,
                name: post.title,
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
              { "@type": "ListItem", position: 3, name: topic.label, item: url },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Topics", href: "/topics" },
            { label: topic.label },
          ]}
        />
      </div>

      {/* Hero - answer-first opening */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <CategoryIcon
              icon={topic.icon}
              size="lg"
              variant="circle"
              className="mb-4 w-fit"
            />
            <h1 className="hero-title mb-6">{seo.pageTitle}</h1>
            <p className="hero-description">
              {topic.description} Below {topicPosts.length === 1 ? "is" : "are"} all{" "}
              {topicPosts.length} {topicPosts.length === 1 ? "guide" : "guides"} on{" "}
              {topic.label} published on this site, newest first, each one a hands-on
              walkthrough with configuration you can copy.
            </p>
          </div>
        </div>
      </section>

      {/* Post list */}
      <section className="section section-alt">
        <div className="container-project">
          <h2 className="section-title mb-8">
            All {topic.label} guides ({topicPosts.length})
          </h2>
          <div className="grid-2">
            {topicPosts.map((post) => {
              const primaryTopic = getTopicById(post.topics[0])
              return (
                <Card key={post.slug} className="card-hover">
                  <CardHeader>
                    <CategoryIcon
                      icon={primaryTopic ? primaryTopic.icon : topic.icon}
                      size="lg"
                      animation="pulse"
                    />
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <CategoryIcon icon="Calendar" size="sm" />{" "}
                        {formatDate(post.datePublished)}
                      </span>
                      {post.readTime && (
                        <>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </>
                      )}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="project-link">
                      Read Article →
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Other topic hubs */}
      <section className="section">
        <div className="container-project">
          <SectionHeader
            title="Explore other topics"
            subtitle="Every guide on this site is grouped into one of these hubs."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {otherTopics.map((other) => (
              <Link key={other.id} href={`/topics/${other.id}`} className="group">
                <Card className="h-full transition-colors hover:border-accent">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <CategoryIcon icon={other.icon} size="md" className="shrink-0" />
                    <div>
                      <p className="font-semibold">{other.label}</p>
                      <p className="text-muted-foreground text-sm">
                        {getPostsByTopic(other.id).length} guides
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-project text-center">
          <h2 className="section-title">Looking for everything at once?</h2>
          <p className="section-subtitle mx-auto mb-8">
            The full archive lists every article in publication order, across all
            seven topics.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild>
              <Link href="/blog">Browse all articles</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/topics">See all topics</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
