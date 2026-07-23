import { posts, getTopicById } from "@/data/posts"

/**
 * JSON Feed 1.1 for the blog (/feed.json).
 * Spec: https://jsonfeed.org/version/1.1
 */

const SITE_URL = "https://avinashsangle.com"
const FEED_URL = `${SITE_URL}/feed.json`
const BLOG_URL = `${SITE_URL}/blog`
const FEED_TITLE = "Avinash Sangle - AI Automation & DevOps Blog"
const FEED_DESCRIPTION =
  "Hands-on guides on AI coding agents, Model Context Protocol, Claude Code, agent security, CI/CD automation and local inference."

export const dynamic = "force-static"
export const revalidate = 3600

function buildJsonFeed() {
  return {
    version: "https://jsonfeed.org/version/1.1",
    title: FEED_TITLE,
    home_page_url: BLOG_URL,
    feed_url: FEED_URL,
    description: FEED_DESCRIPTION,
    language: "en",
    authors: [
      {
        name: "Avinash Sangle",
        url: SITE_URL,
      },
    ],
    // Posts are newest-first in the registry; keep that order in the feed.
    items: posts.map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`

      return {
        id: url,
        url,
        title: post.title,
        summary: post.description,
        date_published: new Date(`${post.datePublished}T00:00:00Z`).toISOString(),
        tags: post.topics.map((topicId) => getTopicById(topicId)?.label ?? topicId),
      }
    }),
  }
}

export function GET(): Response {
  return new Response(JSON.stringify(buildJsonFeed(), null, 2), {
    headers: {
      "Content-Type": "application/feed+json; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
