import { posts, getTopicById } from "@/data/posts"

/**
 * RSS 2.0 feed for the blog (/rss.xml).
 *
 * Consumed by feed readers, dev aggregators and newsletter bots, so it must be
 * byte-valid XML: every interpolated value goes through escapeXml() and every
 * date is emitted in RFC-822 (NOT ISO-8601, which RSS parsers reject).
 */

const SITE_URL = "https://avinashsangle.com"
const FEED_URL = `${SITE_URL}/rss.xml`
const BLOG_URL = `${SITE_URL}/blog`
const FEED_TITLE = "Avinash Sangle - AI Automation & DevOps Blog"
const FEED_DESCRIPTION =
  "Hands-on guides on AI coding agents, Model Context Protocol, Claude Code, agent security, CI/CD automation and local inference."

export const dynamic = "force-static"
export const revalidate = 3600

/** Escape the five XML predefined entities. Every dynamic value must use this. */
function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

const RFC822_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const RFC822_MONTHS = [
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

/** 'YYYY-MM-DD' -> 'Wed, 23 Jul 2026 00:00:00 GMT' (RFC-822, required by RSS). */
function toRfc822(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00Z`)
  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    `${RFC822_DAYS[date.getUTCDay()]}, ` +
    `${pad(date.getUTCDate())} ` +
    `${RFC822_MONTHS[date.getUTCMonth()]} ` +
    `${date.getUTCFullYear()} ` +
    `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())} GMT`
  )
}

function buildRssFeed(): string {
  // Posts are newest-first in the registry; keep that order in the feed.
  const lastBuildDate = toRfc822(posts[0]?.datePublished ?? "2026-01-01")

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`
      const categories = post.topics
        .map((topicId) => getTopicById(topicId)?.label ?? topicId)
        .map((label) => `      <category>${escapeXml(label)}</category>`)
        .join("\n")

      return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <description>${escapeXml(post.description)}</description>`,
        `      <pubDate>${toRfc822(post.datePublished)}</pubDate>`,
        categories,
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n")
    })
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${escapeXml(BLOG_URL)}</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${escapeXml(FEED_URL)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`
}

export function GET(): Response {
  return new Response(buildRssFeed(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
