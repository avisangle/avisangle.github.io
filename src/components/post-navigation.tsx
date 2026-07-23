import Link from "next/link"
import { posts, getPostBySlug, getTopicById } from "@/data/posts"

interface PostNavigationProps {
  /** Slug of the post currently being read. */
  slug: string
}

/**
 * Previous / next navigation across the `posts` registry.
 * The registry is newest-first, so the "previous" post is the next-newer entry
 * and the "next" post is the next-older one. Either side is omitted entirely
 * when the current post sits at an end of the list.
 */
export function PostNavigation({ slug }: PostNavigationProps) {
  const index = posts.findIndex((post) => post.slug === slug)

  if (index === -1) return null

  const previous = index > 0 ? posts[index - 1] : undefined
  const next = index < posts.length - 1 ? posts[index + 1] : undefined

  if (!previous && !next) return null

  // Links back to this post's topic hubs, completing the post -> hub -> post
  // link graph. Hubs already link down to their posts.
  const postTopics = (getPostBySlug(slug)?.topics ?? [])
    .map((id) => getTopicById(id))
    .filter((topic) => topic !== undefined)

  return (
    <nav aria-label="Post navigation" className="section">
      <div className="container-project">
        {postTopics.length > 0 && (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground text-sm">Topics:</span>
            {postTopics.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.id}`}
                className="rounded-full border border-border px-3 py-1 text-sm transition-colors hover:border-accent hover:text-foreground text-muted-foreground"
              >
                {topic.label}
              </Link>
            ))}
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2">
          {previous && (
            <Link
              href={`/blog/${previous.slug}`}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span className="text-muted-foreground text-sm">← Previous article</span>
              <span className="block font-semibold mt-2">{previous.title}</span>
            </Link>
          )}
          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 md:col-start-2 md:text-right"
            >
              <span className="text-muted-foreground text-sm">Next article →</span>
              <span className="block font-semibold mt-2">{next.title}</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
