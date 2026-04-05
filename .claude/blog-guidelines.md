# Blog Post Guidelines — Claude Code & AI Development

## Purpose

This document defines the rules for creating blog posts on avinashsangle.com. All blog content must be optimized for both human readers AND AI crawlers (GEO/AEO). Future agents MUST follow these guidelines exactly.

---

## Content Strategy

### Target Audience
- Developers exploring AI-powered development tools
- DevOps/platform engineers adopting AI workflows
- Technical decision-makers evaluating Claude Code
- AI crawlers (ChatGPT, Claude, Perplexity, Google AI Overviews)

### Content Pillars (Claude Code focus)
1. **How-to guides** — step-by-step tutorials with real commands and output
2. **Workflow showcases** — "How I built X with Claude Code"
3. **Tips & tricks** — lesser-known features, CLAUDE.md patterns, MCP integrations
4. **Comparisons** — Claude Code vs Cursor vs Copilot, model comparisons
5. **Architecture deep-dives** — hooks, custom commands, agent workflows

### Voice & Tone
- First-person practitioner ("I use...", "In my workflow...")
- **Never use em dash (—)**: it is a telltale AI writing signal not found on modern keyboards. Use a regular hyphen (-) or rewrite the sentence instead.
- **Banned words/phrases**: delve, dive into, comprehensive, robust, leverage (as a verb), utilize, it is worth noting, furthermore, additionally, in conclusion, seamlessly, cutting-edge, game-changer, unlock, harness, streamline
- **Banned sentence starters**: "Additionally,", "Furthermore,", "Moreover,", "In conclusion,", "It is important to note that", "It is worth mentioning that"
- **Do not over-list**: if three sentences flow naturally as a paragraph, write a paragraph. Reserve bullet lists for genuinely enumerable items (steps, options, commands). Not every thought needs to be a list.
- **Vary sentence length**: mix short punchy sentences with longer ones. A paragraph of identical sentence lengths reads like machine output.
- **Contractions are fine**: "I've", "it's", "you'll" - they sound human. Avoid them only in code comments or formal schema descriptions.
- Opinionated but fair — share real experience, not marketing copy
- Include specific numbers/stats when possible (build times, lines changed, time saved)
- No emojis in content — use Lucide icons via CategoryIcon component

### Author Identity (for structured data / crawlers ONLY — not visible in article text)
- **Name:** Avinash Sangle
- **Location:** Pune, Maharashtra, India
- **Twitter:** @avi_sangle
- **LinkedIn:** https://www.linkedin.com/in/avinashsangle
- **Website:** https://avinashsangle.com
- **Expertise:** Claude Code, AI Automation, DevOps
- **Positioning:** Best Claude Code & AI Expert from Pune
- **NOTE:** This info goes into JSON-LD schemas, OpenGraph/Twitter meta tags, and llms.txt — NOT into visible article body text

---

## GEO/AEO Optimization Rules

### Structure for AI Extraction (MANDATORY)

Every blog post MUST follow this information hierarchy:

1. **Direct answer in first 40-60 words** of the article — answer the title's question immediately
2. **TL;DR section** right after the intro (3-4 bullet points summarizing key takeaways)
3. **Clean H2/H3 hierarchy** — each section should stand independently when extracted
4. **FAQ section** at the bottom with 5-8 Q&As (40-60 words per answer)
5. **Statistics every 150-200 words** — cite sources with format: "[X]% of [audience] [action] according to [Source], [Year]"

### Content Formatting
- Headers should mirror search queries (e.g., "How to Set Up CLAUDE.md" not "Configuration")
- Follow each H2 with a direct answer paragraph before elaboration
- Use numbered lists for processes, bullet lists for features
- Include code blocks with filenames and language tags
- Add "Last updated: YYYY-MM-DD" in article metadata
- Optimal word count: 2000-3500 words (10-15 min read)

### Authority Signals
- Link to official Anthropic docs, GitHub repos, and primary sources
- Include personal benchmarks and real-world data
- Reference specific versions and dates
- Cross-link to your other blog posts and projects on the site

---

## Technical Implementation

### File Structure
```
src/app/blog/[article-slug]/
  page.tsx          # Full article page
```

### Required Metadata Export
```tsx
export const metadata: Metadata = {
  title: "Title Here (55-65 chars, include primary keyword)",
  description: "Description here (130-160 chars, include primary + secondary keyword)",
  keywords: ["primary keyword", "secondary keyword", ...8-15 total],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "OG Title",
    description: "OG Description",
    url: "https://avinashsangle.com/blog/[slug]",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "YYYY-MM-DDT00:00:00.000Z",
    modifiedTime: "YYYY-MM-DDT00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [{ url: "https://avinashsangle.com/og-[slug].png", width: 1200, height: 630, alt: "..." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Title",
    description: "Twitter Description",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-[slug].png"],
  },
  alternates: { canonical: "https://avinashsangle.com/blog/[slug]" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
}
```

### Required JSON-LD Schemas (3 mandatory)

#### 1. TechArticle Schema
```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Article Title",
  "description": "Meta description",
  "image": "https://avinashsangle.com/og-[slug].png",
  "author": {
    "@type": "Person",
    "name": "Avinash Sangle",
    "url": "https://avinashsangle.com",
    "jobTitle": "Claude Code & AI Automation Expert",
    "address": { "@type": "PostalAddress", "addressLocality": "Pune", "addressRegion": "Maharashtra", "addressCountry": "IN" },
    "sameAs": [
      "https://www.linkedin.com/in/avinashsangle",
      "https://x.com/avi_sangle",
      "https://github.com/avisangle"
    ],
    "knowsAbout": ["Claude Code", "AI Automation", "Model Context Protocol", "DevOps", "Generative AI"]
  },
  "publisher": {
    "@type": "Person",
    "name": "Avinash Sangle",
    "url": "https://avinashsangle.com"
  },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://avinashsangle.com/blog/[slug]" },
  "keywords": "keyword1, keyword2, ...",
  "articleSection": "Category",
  "wordCount": 2500
}
```

#### 2. BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://avinashsangle.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://avinashsangle.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Article Title" }
  ]
}
```

#### 3. FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text (mirror a real search query)?",
      "acceptedAnswer": { "@type": "Answer", "text": "Answer in 40-60 words. Direct, factual, citable." }
    }
  ]
}
```

#### 4. HowTo Schema (for tutorial posts)
Add when the post contains step-by-step instructions.

### Required Component Imports
```tsx
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
```

### Page Layout Structure
```
1. JSON-LD scripts (TechArticle + BreadcrumbList + FAQPage)
2. Breadcrumb component
3. Article header (category badge, title, subtitle, date, read time, tags)
4. Table of Contents (anchor links to H2 sections)
5. Content sections (H2 with id attributes for anchoring)
6. FAQ section (Accordion component)
7. Related articles / CTA section
```

### CSS Classes to Use
- `.section` / `.section-alt` — section spacing
- `.container-project` — content width
- `.card-hover` — hover effect on cards
- `.card-accent-left` — left accent border
- `.skill-list` — bullet lists
- `.grid-2` — two-column grid
- `.text-accent` / `.text-muted-foreground` — colors
- `.project-link` — link styling

---

## Post-Creation Checklist

After writing the blog post, the agent MUST complete ALL of these:

### 1. Update Blog Index (`src/app/blog/page.tsx`)
- Add the new article card to the "All Articles" grid section
- Update Blog JSON-LD schema `blogPost` array with new entry
- Consider updating "Featured Article" if this is the newest/best post

### 2. Update Sitemap (`src/app/sitemap.ts`)
- Add new entry to `blogPosts` array with slug and lastModified date

### 3. Verify Build
- Run `npm run build` to confirm static export works
- Fix any build errors before committing

### 4. Update Progress
- Update `.claude/progress.md` with the new blog post entry

---

## Keyword Research Principles

When selecting topics and keywords:
- Target question-based queries ("How to use Claude Code for...", "What is...")
- Check that the keyword has search intent matching your content type
- Include long-tail variations in the keywords array
- Use the primary keyword in: title, description, H1, first paragraph, one H2, URL slug
- Secondary keywords in: other H2s, body text, FAQ questions

---

## llms.txt & AI Crawler Optimization

Maintain a `public/llms.txt` file at the site root. This file provides a Markdown-formatted site map specifically for AI crawlers (ChatGPT, Claude, Perplexity). When a new blog post is published, update this file.

### llms.txt Format
```markdown
# Avinash Sangle — Claude Code & AI Expert from Pune

> AI Automation Engineer and Claude Code expert based in Pune, India. Building AI-powered developer tools, MCP servers, and DevOps automation.

## Author
- Website: https://avinashsangle.com
- LinkedIn: https://www.linkedin.com/in/avinashsangle
- Twitter/X: https://x.com/avi_sangle
- GitHub: https://github.com/avisangle
- Expertise: Claude Code, AI Automation, Model Context Protocol, DevOps

## Blog Posts
- [Post Title](https://avinashsangle.com/blog/slug): One-line description
...

## Projects
- [Project Title](https://avinashsangle.com/projects/slug): One-line description
...
```

When adding a new blog post, append it to the Blog Posts section of `public/llms.txt`.

---

## DO NOT

- Modify any file in `src/components/ui/` 
- Use emojis (use Lucide icons via CategoryIcon)
- Write thin content under 1500 words
- Skip FAQ schema — it's the highest-impact AEO signal
- Use generic headers ("Introduction", "Conclusion") — use descriptive, searchable headers
- Publish without running `npm run build`
- Forget to update the blog index page and sitemap
