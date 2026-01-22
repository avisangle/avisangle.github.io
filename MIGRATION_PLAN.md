# Bio Site Migration Plan: Static HTML to Next.js with shadcn/ui

## Overview

**Objective:** Convert the existing static HTML portfolio site to a Next.js app using shadcn/ui components.

**Current State:** Static HTML site with 12 pages using custom CSS (`css/styles.css`)  
**Target State:** Next.js app using shadcn/ui components with Tailwind CSS and global styling (`src/app/globals.css`)

---

## Completed Setup

### ✅ Already Done

1. **Next.js project initialized** in the repository root
2. **shadcn/ui components installed** from v0 package
3. **Theme configured** with v0 color scheme (orange primary `#ff8f33`)
4. **Base template created** with:
   - `src/app/layout.tsx` - Root layout with Navbar, Footer, ThemeProvider
   - `src/app/globals.css` - Global styles with CSS variables and utility classes
   - `src/components/navbar.tsx` - Portfolio navbar with theme toggle
   - `src/components/footer.tsx` - Portfolio footer with social links
   - `src/components/section-header.tsx` - Reusable section headers
   - `src/components/breadcrumb.tsx` - Breadcrumb navigation
   - `src/components/theme-provider.tsx` - Dark mode support
5. **Sample home page** created at `src/app/page.tsx`

---

## Available shadcn/ui Components

Located in `src/components/ui/`:

| Component | File | Usage |
|-----------|------|-------|
| Button | `button.tsx` | CTAs, links, actions |
| Badge | `badge.tsx` | Tech stack tags, categories |
| Card | `card.tsx` | About cards, project cards, skill cards |
| Accordion | `accordion.tsx` | FAQ sections |
| NavigationMenu | `navigation-menu.tsx` | Desktop navigation |
| Sheet | `sheet.tsx` | Mobile navigation drawer |
| Separator | `separator.tsx` | Visual dividers |
| Tabs | `tabs.tsx` | Content organization |
| Table | `table.tsx` | Data display |
| Avatar | `avatar.tsx` | Profile display |
| Tooltip | `tooltip.tsx` | Icon tooltips |
| Skeleton | `skeleton.tsx` | Loading states |
| Progress | `progress.tsx` | Progress indicators |
| Alert | `alert.tsx` | Notices, callouts |
| Input | `input.tsx` | Form inputs |
| Label | `label.tsx` | Form labels |
| Textarea | `textarea.tsx` | Multi-line inputs |
| Select | `select.tsx` | Dropdown selects |
| Checkbox | `checkbox.tsx` | Checkboxes |
| Radio Group | `radio-group.tsx` | Radio buttons |
| Switch | `switch.tsx` | Toggle switches |
| Slider | `slider.tsx` | Range sliders |
| Chart | `chart.tsx` | Data visualization |

### Showcase Components (Reference)

Located in `src/components/showcases/` - Use these as reference for component usage patterns:
- `button-showcase.tsx`
- `card-showcase.tsx`
- `accordion-showcase.tsx`
- `badge-showcase.tsx`
- `table-showcase.tsx`
- `tabs-showcase.tsx`
- `form-showcase.tsx`
- `misc-showcase.tsx`
- `chart-showcase.tsx`
- `alert-showcase.tsx`

---

## Global CSS Classes Available

Located in `src/app/globals.css`:

### Layout Classes
- `.section` - Section padding (`py-20 md:py-28 lg:py-32`)
- `.section-alt` - Alternate background color
- `.section-header` - Section header container (`mb-16`)
- `.section-header-centered` - Centered header
- `.section-title` - Section title styling
- `.section-subtitle` - Section subtitle styling
- `.container-content` - Narrow content container (`max-w-4xl`)

### Grid Classes
- `.grid-2` - 2-column grid
- `.grid-3` - 3-column grid
- `.grid-4` - 4-column grid
- `.grid-5` - Flexible 3-column grid

### Hero Classes
- `.hero` - Hero section padding
- `.hero-content` - Hero content container
- `.hero-greeting` - Greeting text
- `.hero-title` - Main title
- `.hero-subtitle` - Subtitle
- `.hero-description` - Description paragraph
- `.hero-cta` - CTA buttons container

### Card Classes
- `.card-hover` - Hover effect with shadow and lift
- `.card-accent-left` - Left accent border

### Other Classes
- `.text-accent` - Accent color text
- `.tech-stack` - Tech badge container
- `.skill-list` - Styled skill list
- `.project-image` - Project emoji/icon
- `.project-link` - Project link styling
- `.breadcrumb` - Breadcrumb container
- `.code-block` - Code block styling
- `.fade-in-up` - Fade in animation
- `.stagger-1` to `.stagger-5` - Animation delays

---

## Pages to Convert

### Page Inventory

| # | Current File | New Location | Priority |
|---|--------------|--------------|----------|
| 1 | `index.html` | `src/app/page.tsx` | ✅ Done |
| 2 | `blog.html` | `src/app/blog/page.tsx` | ✅ Done |
| 3 | `blog-method-crm-mcp.html` | `src/app/blog/method-crm-mcp/page.tsx` | ✅ Done |
| 4 | `project-jenkins-mcp.html` | `src/app/projects/jenkins-mcp/page.tsx` | ✅ Done |
| 5 | `project-jenkins-chatbot.html` | `src/app/projects/jenkins-chatbot/page.tsx` | ✅ Done |
| 6 | `project-calculator-server.html` | `src/app/projects/calculator-server/page.tsx` | ✅ Done |
| 7 | `project-method-crm-mcp.html` | `src/app/projects/method-crm-mcp/page.tsx` | ✅ Done |
| 8 | `project-aws-ec2-agent.html` | `src/app/projects/aws-ec2-agent/page.tsx` | ✅ Done |
| 9 | `project-twitter-oauth.html` | `src/app/projects/twitter-oauth/page.tsx` | ✅ Done |
| 10 | `project-social-media-auto-poster.html` | `src/app/projects/social-media-auto-poster/page.tsx` | ✅ Done |
| 11 | `project-wp-mcp.html` | `src/app/projects/wp-mcp/page.tsx` | ✅ Done |

---

## Conversion Instructions

### General Rules

1. **DO NOT create new components** - Use existing shadcn/ui components
2. **Use global CSS classes** - No inline styles
3. **Maintain consistency** across all pages
4. **Copy content from HTML files** - Do not rewrite content
5. **Preserve SEO metadata** - Convert to Next.js Metadata API
6. **Preserve JSON-LD schemas** - Add as script tags

### Component Mapping

| HTML Element | shadcn/ui Component |
|--------------|---------------------|
| `.btn` | `<Button>` |
| `.btn-primary` | `<Button>` (default variant) |
| `.btn-outline` | `<Button variant="outline">` |
| `.card` | `<Card>`, `<CardHeader>`, `<CardContent>`, `<CardFooter>` |
| `.badge` | `<Badge>` |
| Tech stack badges | `<Badge variant="outline">` |
| FAQ section | `<Accordion>`, `<AccordionItem>`, `<AccordionTrigger>`, `<AccordionContent>` |
| Navigation | Already in `navbar.tsx` |
| Footer | Already in `footer.tsx` |

---

## Page-by-Page Conversion Details

### Page 1: Home Page (`src/app/page.tsx`)

**Status:** Sample created - needs content completion

**Sections:**
1. **Hero** - Use `.hero`, `.hero-content`, `.hero-title`, etc.
2. **About** - 4 cards in `.grid-2` with `<Card>` components
3. **Projects** - 9 project cards in `.grid-3` with `<Card>`, `<Badge>`
4. **Skills** - 4 cards in `.grid-4` with `.skill-list`
5. **Blog** - 3 cards in `.grid-3`
6. **FAQ** - Use `<Accordion>` component
7. **Contact** - Centered `<Button>` components

**Content Source:** `index.html`

---

### Page 2: Blog Listing (`src/app/blog/page.tsx`)

**Sections:**
1. **Hero** (simplified) - Title and subtitle only
2. **Latest Articles** - Featured article card (horizontal layout)
3. **Topics Grid** - 4 topic cards with `.skill-list`
4. **Stay Connected** - CTA buttons

**Content Source:** `blog.html`

**Metadata:**
```tsx
export const metadata: Metadata = {
  title: "Technical Blog | AI, DevOps & Cloud Technologies Insights",
  description: "Technical blog and case studies on AI automation, DevOps practices, and cloud technologies.",
}
```

---

### Page 3: Blog Article (`src/app/blog/method-crm-mcp/page.tsx`)

**Sections:**
1. **Breadcrumb** - Use `<Breadcrumb>` component
2. **Article Header** - Title, date, read time, category badge
3. **Article Content** - Prose styling with code blocks
4. **Related Articles** - 3 cards in `.grid-3`

**Content Source:** `blog-method-crm-mcp.html`

---

### Pages 4-11: Project Detail Pages

All project pages share the same structure. Create each as a separate page.

**Template Structure:**

```tsx
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "PROJECT_NAME | PROJECT_TAGLINE",
  description: "PROJECT_DESCRIPTION",
  // Add OpenGraph, Twitter, etc.
}

export default function ProjectPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/#projects" },
          { label: "PROJECT_NAME" }
        ]} />
      </div>

      {/* Project Header */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="container-content text-center">
            <Badge className="mb-4">CATEGORY</Badge>
            <h1 className="hero-title">PROJECT_NAME</h1>
            <p className="hero-description">PROJECT_TAGLINE</p>
            <div className="hero-cta">
              <Button size="lg" asChild>
                <Link href="GITHUB_URL" target="_blank">
                  View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#projects">← Back to Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section section-alt">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Project Overview</h2>
          <p className="text-lg leading-relaxed mb-6">OVERVIEW_PARAGRAPH_1</p>
          <p className="text-lg leading-relaxed mb-8">OVERVIEW_PARAGRAPH_2</p>
          <div className="grid-2">
            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="tech-stack">
                  <Badge variant="outline">TECH_1</Badge>
                  <Badge variant="outline">TECH_2</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>FEATURE_1</li>
                  <li>FEATURE_2</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeader title="What It Does" />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <div className="project-image">EMOJI</div>
                <CardTitle>FEATURE_TITLE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">FEATURE_DESCRIPTION</p>
              </CardContent>
            </Card>
            {/* Repeat for each feature */}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader title="Why It Matters" />
          <div className="grid-2">
            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>EMOJI BENEFIT_TITLE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">BENEFIT_DESCRIPTION</p>
              </CardContent>
            </Card>
            {/* Repeat for each benefit */}
          </div>
        </div>
      </section>

      {/* Implementation Highlights */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeader title="Implementation Highlights" />
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>🏗️ Technical Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid-2">
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">ARCH_TITLE</h4>
                  <p className="text-muted-foreground">ARCH_DESCRIPTION</p>
                </div>
                {/* Repeat */}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>✨ Core Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li>CAPABILITY_1</li>
                <li>CAPABILITY_2</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section section-alt">
        <div className="container mx-auto px-4">
          <SectionHeader title="Related Projects" />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">CATEGORY</Badge>
                <CardTitle>PROJECT_NAME</CardTitle>
                <CardDescription>DESCRIPTION</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="PROJECT_URL" className="project-link">Learn More →</Link>
              </CardFooter>
            </Card>
            {/* Repeat for related projects */}
          </div>
        </div>
      </section>

      {/* FAQ (if applicable) */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeader title="Frequently Asked Questions" centered />
          <div className="container-content">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger>QUESTION_1</AccordionTrigger>
                <AccordionContent>ANSWER_1</AccordionContent>
              </AccordionItem>
              {/* Repeat */}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">CTA_HEADING</h2>
          <p className="section-subtitle mx-auto mb-8">CTA_SUBHEADING</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="PRIMARY_URL" target="_blank">
                PRIMARY_CTA <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
```

---

## Project-Specific Content Sources

| Project | Source HTML | Key Sections |
|---------|-------------|--------------|
| Jenkins MCP Server | `project-jenkins-mcp.html` | Quick Start with code block |
| Jenkins Chatbot | `project-jenkins-chatbot.html` | Standard layout |
| Calculator Server | `project-calculator-server.html` | Standard layout |
| Method CRM MCP | `project-method-crm-mcp.html` | Comprehensive FAQ |
| AWS EC2 Agent | `project-aws-ec2-agent.html` | Demo video link |
| Twitter OAuth | `project-twitter-oauth.html` | Live demo link |
| Social Media Auto-Poster | `project-social-media-auto-poster.html` | Production SaaS, live demo |
| WP MCP | `project-wp-mcp.html` | Standard layout |

---

## Metadata Template

For each page, add proper Next.js metadata:

```tsx
export const metadata: Metadata = {
  title: "PAGE_TITLE | Avinash Sangle",
  description: "PAGE_DESCRIPTION",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "PAGE_TITLE",
    description: "PAGE_DESCRIPTION",
    url: "https://avinashsangle.com/PAGE_PATH",
    type: "article",
    images: [{ url: "https://avinashsangle.com/assets/og-PAGE.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAGE_TITLE",
    description: "PAGE_DESCRIPTION",
  },
}
```

---

## Validation Checklist

For each converted page:

- [x] All content copied from source HTML
- [x] Metadata added (title, description, OpenGraph, Twitter)
- [x] JSON-LD schemas preserved
- [x] All links working (internal routes)
- [ ] Responsive design tested
- [ ] Dark mode appearance verified
- [x] No inline styles used
- [x] Using shadcn/ui components correctly
- [x] Build passes (`npm run build`)

---

## Commands

```bash
# Development server
npm run dev

# Build (run after each page to verify)
npm run build

# Type check
npx tsc --noEmit
```

---

## File Structure After Migration

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                           # Home
│   ├── globals.css
│   ├── blog/
│   │   ├── page.tsx                       # Blog listing
│   │   └── method-crm-mcp/
│   │       └── page.tsx                   # Blog article
│   └── projects/
│       ├── jenkins-mcp/
│       │   └── page.tsx
│       ├── jenkins-chatbot/
│       │   └── page.tsx
│       ├── calculator-server/
│       │   └── page.tsx
│       ├── method-crm-mcp/
│       │   └── page.tsx
│       ├── aws-ec2-agent/
│       │   └── page.tsx
│       ├── twitter-oauth/
│       │   └── page.tsx
│       ├── social-media-auto-poster/
│       │   └── page.tsx
│       └── wp-mcp/
│           └── page.tsx
├── components/
│   ├── ui/                                # shadcn/ui components
│   ├── showcases/                         # Reference components
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── section-header.tsx
│   ├── breadcrumb.tsx
│   └── theme-provider.tsx
└── lib/
    └── utils.ts
```

---

## Notes

1. **Keep old HTML files** until migration is complete and verified
2. **Test each page** in both light and dark modes
3. **Run build** after each page conversion to catch errors
4. **Reference showcase components** for shadcn/ui usage patterns
5. **Copy content exactly** from source HTML files - do not rewrite
