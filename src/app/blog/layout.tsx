import { NewsletterSignup } from "@/components/newsletter-signup"

/**
 * Wraps the blog index and every post directory under src/app/blog/.
 *
 * The signup lives here rather than in each post page so new posts pick it up
 * automatically - it was previously only on /blog and /contact, so readers
 * arriving on a post from search never saw it.
 */
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <NewsletterSignup />
    </>
  )
}
