import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CategoryIcon } from "@/components/icons/category-icon"
import { getRelatedPosts, getTopicById } from "@/data/posts"

interface RelatedPostsProps {
  /** Slug of the post currently being read. It is never linked to itself. */
  slug: string
  limit?: number
}

export function RelatedPosts({ slug, limit = 3 }: RelatedPostsProps) {
  const related = getRelatedPosts(slug, limit)

  if (related.length === 0) return null

  return (
    <section className="section">
      <div className="container-project">
        <h2 className="section-title mb-8">Related reading</h2>
        <div className="grid-3">
          {related.map((post) => {
            const topic = getTopicById(post.topics[0])

            return (
              <Card key={post.slug} className="card-hover">
                <CardHeader>
                  {topic && <CategoryIcon icon={topic.icon} size="lg" animation="pulse" />}
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
                  {post.readTime && (
                    <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
                      <span>{post.readTime}</span>
                    </div>
                  )}
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
  )
}
