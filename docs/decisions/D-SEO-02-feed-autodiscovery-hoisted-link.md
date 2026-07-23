# D-SEO-02: Feed autodiscovery uses hoisted `<link>` tags, not `metadata.alternates`

**Status:** Accepted (2026-07-23)

## Context

`/rss.xml` and `/feed.json` need `<link rel="alternate">` autodiscovery tags so
feed readers and aggregators can find them from any page.

The idiomatic Next.js way is the Metadata API:

```ts
// src/app/layout.tsx
export const metadata: Metadata = {
  alternates: { types: { "application/rss+xml": [...] } },
}
```

## Decision

Render the two `<link rel="alternate">` tags directly in the root layout's JSX
instead. React hoists them into `<head>`.

## Why the idiomatic approach is wrong here

Next.js **shallow**-merges metadata between a layout and its pages. A page that
sets `alternates` replaces the parent's entire `alternates` object — it does not
merge the keys inside it.

35 of this site's 50 pages set `alternates: { canonical: ... }`. Putting the feed
types in the root layout's `alternates` therefore drops autodiscovery on every
one of those 35 pages, including all 30 blog posts — the pages a feed reader is
most likely to be pointed at. The failure is silent: the build succeeds, the
homepage looks correct, and only the pages that matter are missing the tag.

Verified against built HTML after the change: `about.html`, `contact.html`,
`blog/claude-md-guide.html`, and `topics/mcp.html` each carry exactly one
`rel="alternate"` link of each type alongside their own canonical.

## Trade-off accepted

Bypassing the Metadata API for these two tags is slightly unidiomatic and a
future reader may try to "fix" it by moving them back into `alternates`. The
comment in `layout.tsx` states why, and this record is the longer form.

Note the same shallow-merge trap applies to any future root-level `alternates`
key (e.g. `languages`). It does **not** apply to `canonical`, which every page
should set for itself anyway.
