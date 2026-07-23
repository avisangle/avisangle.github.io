# D-SEO-01: Blog post metadata lives in a single registry

**Status:** Accepted (2026-07-23)

## Context

Blog post metadata was duplicated across three places: the hand-authored
`export const metadata` in each `src/app/blog/<slug>/page.tsx`, the `blogPosts`
array in `src/app/sitemap.ts`, and the hand-written cards in
`src/app/blog/page.tsx`. Adding related-post linking, topic hub pages, and an
RSS feed would have made it six.

The duplication had already drifted: publish dates in `sitemap.ts` disagree with
the index cards for five posts, two of them by more than a year (see `bug.md`).

## Decision

`src/data/posts.ts` is the single source of truth for post metadata — slug,
title, description, `datePublished`, topics, read time — plus the topic
taxonomy. Topic hubs, related posts, prev/next navigation, the RSS feed, the
JSON feed, and the sitemap's topic entries all derive from it.

## Alternatives rejected

**Migrate posts to MDX with frontmatter.** The natural fix, and what most Next.js
blogs do. Rejected because the 30 existing posts are richly hand-authored TSX —
custom components, per-post JSON-LD (`TechArticle`, `HowTo`, `FAQPage`),
interactive elements. Converting them is a multi-day migration with real
regression risk to already-indexed pages, and it is orthogonal to the internal
linking work that motivated this.

**Derive metadata by parsing each page's `metadata` export at build time.** No
duplication at all, but it makes the sitemap and feeds depend on successfully
static-analysing 30 hand-written files. A single unparseable file silently drops
a post from the feed.

## Trade-off accepted

The registry is a *second* copy of title/description that must be kept in sync
with each post's own `metadata` export — the duplication is reduced, not
eliminated. This is deliberate: the registry is the copy that machine-readable
outputs consume, and it is one file to review rather than 30.

Post *body* content and per-post JSON-LD stay in the page files. The registry
deliberately does not try to own them.

## Constraint discovered

The `SectionHeader` component accepts only `title` / `subtitle` / `centered`.
`CLAUDE.md`'s "Page Structure Template" shows an `icon` prop that does not
exist — follow the component, not the doc.
