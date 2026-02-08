# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Avinash Sangle (avinashsangle.com) - a Next.js 16 static site with shadcn/ui components, deployed to GitHub Pages. The site features project showcases, technical blog posts, and comprehensive SEO optimization.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with static export
- **Styling:** Tailwind CSS 4 with shadcn/ui components
- **Icons:** Lucide React (replaced emojis throughout)
- **Fonts:** Plus Jakarta Sans (sans), IBM Plex Mono (mono)
- **Deployment:** GitHub Pages via GitHub Actions workflow
- **Domain:** Custom domain (avinashsangle.com) with Cloudflare DNS

## Development Commands

```bash
# Development server (runs on localhost:3000)
npm run dev

# Production build (outputs to ./out folder)
npm run build

# Lint
npm run lint
```

## Critical Architecture Rules

### 1. Static Export Configuration

The site uses Next.js static export for GitHub Pages deployment:

```typescript
// next.config.ts
{
  output: 'export',           // Static HTML export
  trailingSlash: true,        // Required for GitHub Pages routing
  images: { unoptimized: true } // Required for static export
}
```

**Important:** All pages must be statically exportable. No server-side rendering, API routes, or dynamic routes with `getServerSideProps`.

### 2. shadcn/ui Components - DO NOT MODIFY

**Critical Rule:** NEVER modify files in `src/components/ui/`. These are shadcn/ui components installed via CLI.

**To customize styling:**
- Use `src/app/globals.css` for global styles and custom CSS classes
- Apply Tailwind classes directly in page files (`src/app/**/page.tsx`)
- Modify layout components (`src/components/navbar.tsx`, `src/components/footer.tsx`)
- Use the `cn()` utility from `@/lib/utils` for conditional classes

**Files to NEVER edit:**
- `src/components/ui/*` (all shadcn/ui components)

**Files where styling changes are allowed:**
- `src/app/globals.css`
- `src/app/**/page.tsx` (page files)
- `src/components/navbar.tsx`
- `src/components/footer.tsx`
- Custom components outside `/ui` folder

### 3. Icon System

The site uses Lucide React icons exclusively (no emojis):

```tsx
import { CategoryIcon } from "@/components/icons/category-icon"

// Usage
<CategoryIcon
  icon="Code"           // Any Lucide icon name
  size="md"             // sm | md | lg | xl
  animation="float"     // float | pulse | hover-rotate | static
  variant="circle"      // default | circle | square
/>
```

**Never add emojis to the codebase** unless explicitly requested by the user.

## Deployment Architecture

### GitHub Pages Workflow

Located at `.github/workflows/deploy.yml`:

1. Triggers on push to `main` branch
2. Runs `npm ci` and `npm run build`
3. Uploads `./out` folder to GitHub Pages
4. Deploys via `actions/deploy-pages@v4`

**Important Files in `public/` folder:**
- `sitemap.xml` - Must be kept updated with all pages
- `robots.txt` - Search engine directives
- `.nojekyll` - Prevents GitHub from processing `_next` folder
- `CNAME` - Custom domain configuration (avinashsangle.com)

### Routing Structure

```
/                           # Homepage (src/app/page.tsx)
/blog                       # Blog index (src/app/blog/page.tsx)
/blog/[article-slug]        # Blog articles (src/app/blog/[slug]/page.tsx)
/projects                   # Projects index (src/app/projects/page.tsx)
/projects/[project-slug]    # Project pages (src/app/projects/[slug]/page.tsx)
```

**Blog Migration:** Previously at `blog.avinashsangle.com` subdomain, now consolidated into main site at `/blog`.

## SEO Requirements

All pages must include comprehensive metadata for search engines (Google, Bing):

### Title & Description Limits (Bing Requirements)

- **Title:** 55-65 characters (Bing prefers under 70)
- **Description:** 130-160 characters (Bing prefers 150-160)

### Required Metadata Structure

```tsx
export const metadata: Metadata = {
  title: "Page Title (55-65 chars)",
  description: "Meta description (130-160 chars)",
  keywords: ["keyword1", "keyword2"],
  authors: [{ name: "Avinash Sangle" }],

  openGraph: {
    title: "OG Title",
    description: "OG Description",
    url: "https://avinashsangle.com/page-url",
    type: "article", // or "website"
    images: [{ url: "https://avinashsangle.com/og-image.png" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Twitter Title",
    description: "Twitter Description",
    creator: "@AvinashSangle",
  },
}
```

### Required JSON-LD Schemas

Blog articles need:
- `TechArticle` schema with headline, description, author, datePublished
- `BreadcrumbList` schema for navigation

Project pages need:
- `SoftwareApplication` schema
- `BreadcrumbList` schema
- `FAQPage` schema (2 Q&As minimum)

## Sitemap Management

**Location:** `public/sitemap.xml`

When adding new pages, manually update sitemap.xml:
- Use current date for `<lastmod>` (format: YYYY-MM-DD)
- Set appropriate `<priority>` (1.0 for home, 0.9 for blog index, 0.8 for articles/projects)
- Use correct URLs without `.html` extensions

**Current pages in sitemap:**
- Homepage: `/`
- Blog index: `/blog`
- Blog articles: `/blog/method-crm-mcp`, `/blog/clawdbot-guide`
- 8 project pages: `/projects/*`

## Component Structure

### Custom Components (can be modified)

- `src/components/navbar.tsx` - Site navigation with dark mode toggle
- `src/components/footer.tsx` - Site footer with social links
- `src/components/breadcrumb.tsx` - Breadcrumb navigation
- `src/components/section-header.tsx` - Reusable section headers
- `src/components/contact-form.tsx` - Contact form with validation
- `src/components/icons/category-icon.tsx` - Lucide icon wrapper

### Layout Pattern

All pages use the root layout (`src/app/layout.tsx`):
- Wraps content with ThemeProvider (next-themes)
- Includes Navbar and Footer
- Uses Plus Jakarta Sans and IBM Plex Mono fonts

## Common Patterns

### Page Structure Template

```tsx
import { Metadata } from "next"
import { CategoryIcon } from "@/components/icons/category-icon"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"

export const metadata: Metadata = {
  // ... SEO metadata
}

export default function PageName() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({ /* schema */ })
      }} />

      <div className="container mx-auto px-6 py-12">
        <Breadcrumb items={[...]} />

        <SectionHeader
          icon={<CategoryIcon icon="IconName" />}
          title="Page Title"
          description="Page description"
        />

        {/* Page content */}
      </div>
    </>
  )
}
```

### Adding Blog Articles

1. Create folder: `src/app/blog/[article-slug]/`
2. Add `page.tsx` with full metadata and schemas
3. Update `src/app/blog/page.tsx` to list the article
4. Add to `public/sitemap.xml`
5. Ensure title/description meet Bing character limits

### Adding Project Pages

1. Create folder: `src/app/projects/[project-slug]/`
2. Add `page.tsx` with metadata and schemas
3. Update projects index or navigation as needed
4. Add to `public/sitemap.xml`

## Important Notes

- **No emojis:** Use Lucide icons via `CategoryIcon` component
- **Static only:** Cannot use dynamic server features
- **Year context:** Current year is 2026 (update dates accordingly)
- **Git workflow:** Commit with descriptive messages, always include Co-Authored-By line
- **Build output:** GitHub Actions builds and deploys from `./out` folder
- **Previous issue:** Separate `avisangle/blog` repo had Pages enabled, causing routing conflicts (now disabled)

## Cloudflare Configuration

- Custom domain: avinashsangle.com
- DNS managed via Cloudflare
- Previous CNAME record for `blog` subdomain removed during consolidation
