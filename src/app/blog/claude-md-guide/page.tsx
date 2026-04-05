import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How I Write CLAUDE.md Files That Actually Work (2026)",
  description:
    "Learn how to write effective CLAUDE.md files with real production examples. Avoid common mistakes and make Claude Code follow your project rules consistently.",
  keywords: [
    "CLAUDE.md guide",
    "CLAUDE.md best practices",
    "CLAUDE.md examples",
    "how to write CLAUDE.md",
    "claude code project instructions",
    "CLAUDE.md template",
    "claude code memory file",
    "CLAUDE.md Next.js",
    "claude code configuration",
    "CLAUDE.md mistakes",
    "CLAUDE.md vs hooks",
    "claude code setup",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "How I Write CLAUDE.md Files That Actually Work (2026)",
    description:
      "Learn how to write effective CLAUDE.md files with real production examples. Avoid common mistakes and make Claude Code follow your project rules consistently.",
    url: "https://avinashsangle.com/blog/claude-md-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-04-05T00:00:00.000Z",
    modifiedTime: "2026-04-05T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-claude-md-guide.png",
        width: 1200,
        height: 630,
        alt: "How I Write CLAUDE.md Files That Actually Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How I Write CLAUDE.md Files That Actually Work (2026)",
    description:
      "Learn how to write effective CLAUDE.md files with real production examples. Avoid common mistakes and make Claude Code follow your project rules consistently.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-claude-md-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/claude-md-guide",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "How I Write CLAUDE.md Files That Actually Work (2026)",
  description:
    "Learn how to write effective CLAUDE.md files with real production examples. Avoid common mistakes and make Claude Code follow your project rules consistently.",
  image: "https://avinashsangle.com/og-claude-md-guide.png",
  author: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
    jobTitle: "Claude Code & AI Automation Expert",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/avinashsangle",
      "https://x.com/avi_sangle",
      "https://github.com/avisangle",
    ],
    knowsAbout: ["Claude Code", "AI Automation", "Model Context Protocol", "DevOps", "Generative AI"],
  },
  publisher: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
  },
  datePublished: "2026-04-05",
  dateModified: "2026-04-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/claude-md-guide",
  },
  keywords:
    "CLAUDE.md guide, CLAUDE.md best practices, CLAUDE.md examples, claude code project instructions, CLAUDE.md template, CLAUDE.md Next.js",
  articleSection: "Claude Code",
  wordCount: 3000,
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://avinashsangle.com/blog" },
    { "@type": "ListItem", position: 3, name: "CLAUDE.md Guide", item: "https://avinashsangle.com/blog/claude-md-guide" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a CLAUDE.md file and what does it do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CLAUDE.md is a project-level instruction file that tells Claude Code how to work with your codebase. It defines build commands, coding standards, architecture rules, and workflow preferences. Claude reads it at the start of every session to understand your project context.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I put my CLAUDE.md file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Place CLAUDE.md in your project root for shared team instructions, or in the .claude/ subdirectory for project-specific rules. You can also create a global file at ~/.claude/CLAUDE.md for personal preferences that apply across all projects.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a CLAUDE.md file be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keep CLAUDE.md under 60-80 lines for best instruction adherence. Files over 200 lines can consume 30-40K tokens at session start, reducing available context for actual work. Use @imports to reference external docs instead of inlining everything.",
      },
    },
    {
      "@type": "Question",
      name: "Why does Claude Code sometimes ignore CLAUDE.md rules?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common causes include files being too long (rules get lost in context), using negation instead of positive instructions, conflicting rules that cancel each other out, and stating obvious conventions Claude already knows. Use emphasis markers like CRITICAL for essential rules.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between CLAUDE.md and AGENTS.md?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CLAUDE.md is specific to Claude Code and read automatically by the tool. AGENTS.md is a vendor-neutral format proposed for any AI coding agent. If you use Claude Code exclusively, CLAUDE.md is the right choice. Some teams maintain both for multi-tool compatibility.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use /init to generate my CLAUDE.md?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use /init as a starting point, not the final version. The auto-generated file analyzes your codebase and creates a reasonable foundation, but it often includes obvious rules that waste tokens. Always review, trim, and customize the output based on your specific needs.",
      },
    },
    {
      "@type": "Question",
      name: "Can CLAUDE.md import other files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, CLAUDE.md supports @imports using the syntax @path/to/file. This lets you reference README files, package.json, or separate documentation without inlining everything. Supports relative paths, absolute paths, and home directory references.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I update my CLAUDE.md?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add rules reactively when Claude makes the same mistake twice. Audit quarterly to remove stale rules. Use git blame to track when and why rules were added. A self-improving approach where Claude suggests updates based on session patterns works well for ongoing maintenance.",
      },
    },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Write an Effective CLAUDE.md File",
  description:
    "Step-by-step guide to creating a CLAUDE.md file that makes Claude Code follow your project rules consistently.",
  totalTime: "PT20M",
  tool: [
    { "@type": "HowToTool", name: "Claude Code CLI" },
    { "@type": "HowToTool", name: "Text editor" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Start with project overview and build commands",
      text: "Write a 1-2 sentence project description followed by essential build, test, and lint commands. This is the highest-value content Claude reads first.",
      url: "https://avinashsangle.com/blog/claude-md-guide#anatomy-effective-claude-md",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Define architecture rules and constraints",
      text: "Document hard constraints like static export requirements, files that should never be modified, and framework-specific rules.",
      url: "https://avinashsangle.com/blog/claude-md-guide#real-claude-md-example",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Add coding patterns and anti-patterns",
      text: "Show the preferred way to import components, structure pages, and handle common tasks. Use positive instructions instead of negations.",
      url: "https://avinashsangle.com/blog/claude-md-guide#claude-md-mistakes",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Use @imports for reference documentation",
      text: "Reference external files with @path/to/file syntax instead of inlining large documentation blocks. Keeps your CLAUDE.md lean.",
      url: "https://avinashsangle.com/blog/claude-md-guide#anatomy-effective-claude-md",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Review, trim, and iterate",
      text: "Remove rules that state obvious conventions. Add new rules only when Claude makes the same mistake twice. Audit quarterly.",
      url: "https://avinashsangle.com/blog/claude-md-guide#keeping-claude-md-fresh",
    },
  ],
}

export default function ClaudeMdGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "CLAUDE.md Guide" },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="section">
        <div className="container-project">
          <p className="text-accent font-semibold mb-4">CLAUDE CODE</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How I Write CLAUDE.md Files That Actually Work
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            A practical guide to writing CLAUDE.md files that Claude Code actually follows,
            with real production examples from my Next.js portfolio site and the mistakes
            I learned the hard way.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-8">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> April 5, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Tag" size="sm" /> Claude Code, AI Development
            </span>
          </div>
        </div>
      </section>

      {/* Opening paragraph + TL;DR */}
      <section className="section-alt py-8">
        <div className="container-project">
          <p className="text-lg leading-relaxed mb-8">
            A CLAUDE.md file is the single most impactful thing you can add to any project
            using Claude Code. It tells Claude how to build, test, and work with your
            codebase - and when written well, it eliminates the repetitive corrections that
            slow down AI-assisted development. After months of iteration on my own production
            site, I have a system that works.
          </p>

          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Lightbulb" size="sm" />
                TL;DR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">1.</span>
                  <span>Keep CLAUDE.md under 60-80 lines. Use @imports for anything longer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">2.</span>
                  <span>Lead with build commands and hard constraints - Claude reads these first and retains them best.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">3.</span>
                  <span>Use positive instructions (&ldquo;use X&rdquo;) instead of negations (&ldquo;don&apos;t use Y&rdquo;) - Claude follows positive rules more reliably.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">4.</span>
                  <span>Add rules reactively - only when Claude makes the same mistake twice. Never front-load speculative rules.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="container-project">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="List" size="sm" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-6 space-y-2">
                <li><Link href="#what-is-claude-md" className="text-accent hover:underline">What Is a CLAUDE.md File?</Link></li>
                <li><Link href="#anatomy-effective-claude-md" className="text-accent hover:underline">The Anatomy of an Effective CLAUDE.md</Link></li>
                <li><Link href="#real-claude-md-example" className="text-accent hover:underline">My Production CLAUDE.md: A Line-by-Line Breakdown</Link></li>
                <li><Link href="#claude-md-nextjs" className="text-accent hover:underline">CLAUDE.md for Next.js Projects: Stack-Specific Rules</Link></li>
                <li><Link href="#claude-md-mistakes" className="text-accent hover:underline">7 CLAUDE.md Mistakes That Waste Your Tokens</Link></li>
                <li><Link href="#claude-md-vs-hooks" className="text-accent hover:underline">CLAUDE.md vs Hooks vs Custom Commands: When to Use What</Link></li>
                <li><Link href="#keeping-claude-md-fresh" className="text-accent hover:underline">How I Keep My CLAUDE.md Fresh</Link></li>
                <li><Link href="#faq" className="text-accent hover:underline">Frequently Asked Questions</Link></li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 1: What Is CLAUDE.md */}
      <section id="what-is-claude-md" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">What Is a CLAUDE.md File?</h2>
          <p className="text-lg leading-relaxed mb-6">
            CLAUDE.md is a Markdown file that provides project-specific instructions to Claude Code.
            When you start a session, Claude reads every CLAUDE.md file it finds - from your global
            config to your project root to nested subdirectories - and uses those instructions
            as context for the entire conversation. Think of it as a README, but written specifically
            for your AI coding partner.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            According to{" "}
            <Link href="https://blog.jetbrains.com/research/2026/04/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              JetBrains&apos; 2026 developer survey
            </Link>
            , 40.8% of developers using AI agents use Claude Code - the most popular AI coding agent.
            Yet many users never create a CLAUDE.md file, leaving significant productivity gains untapped.
          </p>

          <h3 className="text-xl font-semibold mb-4">The Hierarchical Loading System</h3>
          <p className="text-lg leading-relaxed mb-4">
            Claude Code loads CLAUDE.md files from multiple locations, with more specific files
            taking precedence over general ones:
          </p>
          <CodeBlock
            language="text"
            filename="Loading order (top = most general, bottom = most specific)"
            code={`~/.claude/CLAUDE.md              # Global - your personal preferences across all projects
/project-root/CLAUDE.md          # Project - shared team standards (commit to repo)
/project-root/.claude/CLAUDE.md  # Project - alternative location
/project-root/src/CLAUDE.md      # Subdirectory - scoped rules for a specific area`}
          />
          <p className="text-muted-foreground mt-4">
            I use the global file for personal preferences (editor style, commit message format)
            and the project-level file for architecture rules specific to each codebase.
          </p>
        </div>
      </section>

      {/* Section 2: Anatomy */}
      <section id="anatomy-effective-claude-md" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">The Anatomy of an Effective CLAUDE.md</h2>
          <p className="text-lg leading-relaxed mb-6">
            An effective CLAUDE.md has five essential sections, ordered by importance. Claude retains
            content near the top and bottom of long files better than the middle - a well-documented
            primacy/recency effect in LLMs. Place your most critical rules first.
          </p>

          <div className="space-y-4 mb-8">
            <Card className="card-accent-left">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-1">1. Project Overview (1-2 sentences)</h3>
                <p className="text-muted-foreground">What the project is and what stack it uses. Claude needs this context to make informed decisions about every change it suggests.</p>
              </CardContent>
            </Card>
            <Card className="card-accent-left">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-1">2. Build / Test / Lint Commands</h3>
                <p className="text-muted-foreground">The exact commands to build and test the project. Claude runs these dozens of times per session - get them right first.</p>
              </CardContent>
            </Card>
            <Card className="card-accent-left">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-1">3. Architecture Rules and Constraints</h3>
                <p className="text-muted-foreground">Hard constraints like &ldquo;static export only&rdquo; or &ldquo;never modify files in src/components/ui/&rdquo;. These prevent impossible or destructive changes.</p>
              </CardContent>
            </Card>
            <Card className="card-accent-left">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-1">4. File and Folder Conventions</h3>
                <p className="text-muted-foreground">Where things go, how files are named, directory structure. Claude uses this to place new files correctly.</p>
              </CardContent>
            </Card>
            <Card className="card-accent-left">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-1">5. Common Patterns and Examples</h3>
                <p className="text-muted-foreground">Code templates Claude should follow when creating new pages, components, or features. Show the preferred way, not just the rules.</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg leading-relaxed mb-4">
            Research from{" "}
            <Link href="https://www.humanlayer.dev/blog/writing-a-good-claude-md" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              HumanLayer
            </Link>{" "}
            suggests keeping CLAUDE.md under 60-80 lines for optimal instruction adherence.
            Use the <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">@import</code> syntax to
            reference external docs and keep the file lean:
          </p>
          <CodeBlock
            language="markdown"
            filename="CLAUDE.md"
            code={`# Project Overview
Portfolio site - Next.js 16 static export + shadcn/ui.

## Commands
See @package.json for all scripts. Key ones:
- \`npm run dev\`   - dev server on localhost:3000
- \`npm run build\` - static export to ./out
- \`npm run lint\`  - ESLint check

## Architecture
See @docs/architecture.md for full system design.

## Git Workflow
See @docs/git-instructions.md for branch strategy.`}
          />
        </div>
      </section>

      {/* Section 3: Real Production Example */}
      <section id="real-claude-md-example" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">My Production CLAUDE.md: A Line-by-Line Breakdown</h2>
          <p className="text-lg leading-relaxed mb-6">
            This is the actual CLAUDE.md from{" "}
            <Link href="https://avinashsangle.com" className="text-accent hover:underline">
              avinashsangle.com
            </Link>
            , a Next.js 16 static site with shadcn/ui deployed to GitHub Pages. Every rule exists
            because Claude made a specific mistake without it.
          </p>

          <h3 className="text-xl font-semibold mb-4">The Project Overview and Commands</h3>
          <CodeBlock
            language="markdown"
            filename="CLAUDE.md - Project header"
            code={`# CLAUDE.md
This file provides guidance to Claude Code when working with this repository.

## Project Overview
Personal portfolio website - Next.js 16 static site with shadcn/ui,
deployed to GitHub Pages via GitHub Actions.

## Tech Stack
- Framework: Next.js 16 (App Router) with static export
- Styling: Tailwind CSS 4 with shadcn/ui components
- Icons: Lucide React (replaced emojis throughout)
- Deployment: GitHub Pages via GitHub Actions

## Development Commands
\`\`\`bash
npm run dev    # Dev server on localhost:3000
npm run build  # Static export to ./out folder
npm run lint   # ESLint
\`\`\``}
          />
          <p className="text-muted-foreground mt-3 mb-8">
            The tech stack section prevents Claude from suggesting incompatible patterns -
            like server-side rendering or API routes that would break the GitHub Pages deployment.
          </p>

          <h3 className="text-xl font-semibold mb-4">The Hard Constraints That Prevent Real Mistakes</h3>
          <CodeBlock
            language="markdown"
            filename="CLAUDE.md - Critical architecture rules"
            code={`## Critical Architecture Rules

### 1. Static Export - NO Server Features
**CRITICAL:** All pages must be statically exportable.
No server-side rendering, API routes, or getServerSideProps.

next.config.ts must stay as:
  output: 'export'
  trailingSlash: true
  images: { unoptimized: true }

### 2. shadcn/ui Components - DO NOT MODIFY
**CRITICAL:** NEVER modify files in src/components/ui/
These are installed via CLI and must stay pristine.

Style changes go in:
- src/app/globals.css       (global styles)
- src/app/**/page.tsx       (Tailwind classes on elements)
- src/components/navbar.tsx (layout components)

### 3. Icons - Lucide Only, No Emojis
Use CategoryIcon from @/components/icons/category-icon
NEVER add emoji characters to any file`}
          />

          <Card className="card-accent-left mt-6 mb-8">
            <CardContent className="pt-6">
              <p className="font-semibold mb-2">Why each of these rules exists:</p>
              <ul className="skill-list text-muted-foreground">
                <li>Static export rule: Claude suggested an API route. Build broke on GitHub Pages deploy.</li>
                <li>shadcn/ui rule: Claude edited Button.tsx directly. Broke on next shadcn/ui update.</li>
                <li>No emojis rule: Claude added emoji to a heading. Looked unprofessional, took 20 minutes to find.</li>
              </ul>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold mb-4">Showing Patterns - More Effective Than Rules</h3>
          <p className="text-lg leading-relaxed mb-4">
            The most effective section in my CLAUDE.md is the page structure template. Rather than
            listing abstract rules, I show Claude exactly what a well-formed page looks like.
            According to{" "}
            <Link href="https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              Anthropic&apos;s 2026 Agentic Coding Trends Report
            </Link>
            , AI is projected to generate 60% of code by end of 2026. Templates ensure that
            generated code matches your established patterns from day one.
          </p>
          <CodeBlock
            language="markdown"
            filename="CLAUDE.md - Page template pattern"
            code={`## Common Patterns

### New Blog Article Checklist
1. Create: src/app/blog/[slug]/page.tsx
2. Add metadata export (title 55-65 chars, description 130-160 chars)
3. Add TechArticle + BreadcrumbList + FAQPage JSON-LD schemas
4. Update src/app/blog/page.tsx with new article card
5. Update src/app/sitemap.ts with new slug

### Required JSON-LD Author Object (all articles)
{
  "@type": "Person",
  "name": "Avinash Sangle",
  "url": "https://avinashsangle.com",
  "sameAs": ["https://www.linkedin.com/in/avinashsangle", ...]
}`}
          />
        </div>
      </section>

      {/* Section 4: Next.js Specific */}
      <section id="claude-md-nextjs" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">CLAUDE.md for Next.js Projects: Stack-Specific Rules</h2>
          <p className="text-lg leading-relaxed mb-6">
            Next.js App Router introduces conventions that differ significantly from traditional React.
            Generic Claude Code rules are not enough - you need stack-aware constraints. There is
            currently only one public CLAUDE.md example for Next.js + shadcn/ui. Here is what I
            have learned works.
          </p>

          <CodeBlock
            language="markdown"
            filename="CLAUDE.md - Next.js App Router section"
            code={`## Next.js App Router Conventions

### Routing Structure
src/app/page.tsx           → /
src/app/blog/page.tsx      → /blog
src/app/blog/[slug]/page.tsx → /blog/[slug]

### SEO Requirements (STRICT character limits)
All pages must export metadata with:
- title: 55-65 characters (Bing truncates beyond 70)
- description: 130-160 characters (Bing prefers 150-160)
- Full OpenGraph + Twitter Card tags
- JSON-LD schemas appropriate to page type

### Static Export Hard Rules
No getServerSideProps or getInitialProps
No API routes (src/app/api/ does not exist)
No next/headers or next/cookies imports
No Image optimization (unoptimized: true is set)
All dynamic routes need generateStaticParams

### Import Style
Always use path aliases:
  import { Button } from "@/components/ui/button"   ✓
  import { Button } from "../../components/ui/button" ✗`}
          />

          <p className="text-muted-foreground mt-4 mb-4">
            The SEO character limits were added after Claude generated a 91-character title that
            Bing truncated in search results. Being specific about the numbers (&ldquo;55-65 chars&rdquo;)
            works far better than vague instructions like &ldquo;keep titles short.&rdquo;
          </p>
          <Card className="card-accent-left">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                Next.js maintains its own{" "}
                <Link href="https://nextjs.org/docs/app/guides/ai-agents" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  official AI Agents guide
                </Link>{" "}
                that recommends CLAUDE.md for configuring AI coding tools - recognizing that
                framework-specific rules cannot be inferred generically.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5: Mistakes */}
      <section id="claude-md-mistakes" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">7 CLAUDE.md Mistakes That Waste Your Tokens</h2>
          <p className="text-lg leading-relaxed mb-8">
            After iterating through dozens of CLAUDE.md versions and reading hundreds shared
            on r/ClaudeAI, these are the patterns that consistently cause problems. Files over
            200 lines can consume 30-40K tokens at session start - real cost when paying per token
            on the API plan.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                <Badge variant="destructive" className="mr-2">Mistake 1</Badge>
                Using Negation Instead of Positive Instructions
              </h3>
              <div className="grid-2">
                <Card>
                  <CardHeader><CardTitle className="text-base text-red-500">Bad - negations</CardTitle></CardHeader>
                  <CardContent>
                    <CodeBlock language="markdown" code={`Do NOT use semicolons.
Do NOT add console.log statements.
Do NOT import from relative paths.`} />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-base text-green-500">Good - positive instructions</CardTitle></CardHeader>
                  <CardContent>
                    <CodeBlock language="markdown" code={`Style: no-semicolon (Prettier enforces this).
Logging: use logger from "@/lib/logger".
Imports: use path aliases (@/components/...).`} />
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground mt-2">LLMs process positive instructions more reliably than negations. Give Claude a pattern to follow, not just things to avoid.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                <Badge variant="destructive" className="mr-2">Mistake 2</Badge>
                Documenting What Claude Already Knows
              </h3>
              <div className="grid-2">
                <Card>
                  <CardHeader><CardTitle className="text-base text-red-500">Wastes tokens</CardTitle></CardHeader>
                  <CardContent>
                    <CodeBlock language="markdown" code={`- Use async/await instead of callbacks
- Use const for immutable variables
- Add error handling to async functions
- Use TypeScript for type safety`} />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-base text-green-500">Worth including</CardTitle></CardHeader>
                  <CardContent>
                    <CodeBlock language="markdown" code={`- Validation: use Zod (not io-ts or yup)
- Error boundaries: src/components/error-boundary.tsx
- API calls: always via src/lib/api-client.ts
- Dates: use date-fns (not moment.js)`} />
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground mt-2">Only document project-specific decisions Claude cannot infer from the code itself.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                <Badge variant="destructive" className="mr-2">Mistake 3</Badge>
                The Documentation Dump
              </h3>
              <p className="text-muted-foreground mb-2">Pasting entire READMEs, API docs, or style guides inline. Use @imports instead:</p>
              <CodeBlock language="markdown" filename="CLAUDE.md" code={`# Instead of pasting 300 lines of API documentation:
See @docs/api-reference.md for all endpoint specifications.
See @README.md for project setup and background.`} />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                <Badge variant="destructive" className="mr-2">Mistake 4</Badge>
                Conflicting Rules
              </h3>
              <p className="text-muted-foreground">I once had &ldquo;use functional components only&rdquo; in one section and a class component in my code template. Claude alternated between both. Audit your CLAUDE.md for contradictions - they cause inconsistent, unpredictable behavior.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                <Badge variant="destructive" className="mr-2">Mistake 5</Badge>
                No Emphasis on Critical Rules
              </h3>
              <p className="text-muted-foreground mb-2">Not all rules deserve equal weight. Mark the ones that must never be violated:</p>
              <CodeBlock language="markdown" code={`**CRITICAL:** NEVER modify files in src/components/ui/
**Important:** All pages must be statically exportable.
**Note:** Prefer named exports for components.`} />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                <Badge variant="destructive" className="mr-2">Mistake 6</Badge>
                Never Pruning Stale Rules
              </h3>
              <p className="text-muted-foreground">Rules accumulate but rarely get removed. I deleted a rule about a deprecated API endpoint that had been gone for 3 months - consuming tokens for a constraint that no longer applied. Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">git blame CLAUDE.md</code> quarterly to identify rules past their useful life.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                <Badge variant="destructive" className="mr-2">Mistake 7</Badge>
                Treating /init Output as Final
              </h3>
              <p className="text-muted-foreground">
                The <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">/init</code> command is a
                solid starting point, but its output is often verbose with generic rules Claude already knows.
                Always review the output, delete the obvious entries, and add the project-specific
                constraints that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: vs Hooks vs Commands */}
      <section id="claude-md-vs-hooks" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">CLAUDE.md vs Hooks vs Custom Commands: When to Use What</h2>
          <p className="text-lg leading-relaxed mb-6">
            CLAUDE.md is not the only tool for configuring Claude Code&apos;s behavior. One of the
            most common mistakes is putting everything into CLAUDE.md when other mechanisms
            are more appropriate. Here is the decision framework I use.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-semibold">Mechanism</th>
                  <th className="text-left p-3 font-semibold">Best For</th>
                  <th className="text-left p-3 font-semibold">Enforcement</th>
                  <th className="text-left p-3 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium">CLAUDE.md</td>
                  <td className="p-3 text-muted-foreground">Preferences, conventions, architecture context</td>
                  <td className="p-3"><Badge variant="secondary">Soft</Badge></td>
                  <td className="p-3 text-muted-foreground">&ldquo;Use Lucide icons, not emojis&rdquo;</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium">Hooks</td>
                  <td className="p-3 text-muted-foreground">Hard requirements, automated enforcement</td>
                  <td className="p-3"><Badge>Hard</Badge></td>
                  <td className="p-3 text-muted-foreground">Run ESLint after every file write</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium">Custom Commands</td>
                  <td className="p-3 text-muted-foreground">Repeatable multi-step workflows</td>
                  <td className="p-3"><Badge variant="secondary">On invoke</Badge></td>
                  <td className="p-3 text-muted-foreground">/write-blogpost, /deploy, /review</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium">Skills</td>
                  <td className="p-3 text-muted-foreground">Domain knowledge injection</td>
                  <td className="p-3"><Badge variant="secondary">Contextual</Badge></td>
                  <td className="p-3 text-muted-foreground">Testing patterns, design system rules</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Card className="card-accent-left">
            <CardContent className="pt-6">
              <p className="font-semibold mb-2">My rule of thumb</p>
              <p className="text-muted-foreground">
                If you find yourself writing &ldquo;CRITICAL&rdquo; or &ldquo;NEVER&rdquo; in CLAUDE.md, that rule
                probably belongs in a hook instead. Hooks enforce requirements deterministically -
                CLAUDE.md rules are guidelines Claude follows most of the time, not guarantees.
                I use hooks for linting and security checks, CLAUDE.md for architecture guidance and patterns.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 7: Keeping Fresh */}
      <section id="keeping-claude-md-fresh" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">How I Keep My CLAUDE.md Fresh</h2>
          <p className="text-lg leading-relaxed mb-6">
            CLAUDE.md files rot. Rules that were essential 3 months ago may now be irrelevant, and
            gaps accumulate as the project evolves. Research shows that AI-cited content is 25.7%
            fresher on average than traditional organic results - the same freshness principle applies
            to the instructions your AI reads.
          </p>

          <div className="space-y-4">
            <Card className="card-accent-left">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <CategoryIcon icon="Plus" size="sm" />
                  Add Rules Reactively
                </h3>
                <p className="text-muted-foreground">
                  Only add a rule when Claude makes the same mistake twice. If it happens once, it may be
                  a fluke. Twice means it is a pattern. This prevents the speculative rule accumulation
                  that bloats CLAUDE.md with constraints you might need someday.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <CategoryIcon icon="Search" size="sm" />
                  Quarterly Audit with Git Blame
                </h3>
                <p className="text-muted-foreground">
                  Run <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">git blame CLAUDE.md</code> to
                  see when each rule was added. If a rule is over 3 months old, verify the underlying
                  constraint still exists. In my last audit I removed 8 stale rules - a significant
                  token saving per session.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <CategoryIcon icon="RefreshCw" size="sm" />
                  Let Claude Suggest Updates
                </h3>
                <p className="text-muted-foreground">
                  At the end of a productive session, ask Claude: &ldquo;Based on the mistakes I corrected
                  today, what rules should I add to CLAUDE.md?&rdquo; This creates a feedback loop
                  where the file improves organically from real usage patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="what-is">
              <AccordionTrigger className="text-left text-lg">What is a CLAUDE.md file and what does it do?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                CLAUDE.md is a project-level instruction file that tells Claude Code how to work with your codebase.
                It defines build commands, coding standards, architecture rules, and workflow preferences.
                Claude reads it at the start of every session to understand your project context.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="where">
              <AccordionTrigger className="text-left text-lg">Where should I put my CLAUDE.md file?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Place CLAUDE.md in your project root for shared team instructions, or in the .claude/ subdirectory
                for project-specific rules. You can also create a global file at ~/.claude/CLAUDE.md for personal
                preferences that apply across all projects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="length">
              <AccordionTrigger className="text-left text-lg">How long should a CLAUDE.md file be?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Keep CLAUDE.md under 60-80 lines for best instruction adherence. Files over 200 lines can
                consume 30-40K tokens at session start, reducing available context for actual work.
                Use @imports to reference external docs instead of inlining everything.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ignoring">
              <AccordionTrigger className="text-left text-lg">Why does Claude Code sometimes ignore CLAUDE.md rules?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Common causes include files being too long, using negation instead of positive instructions,
                conflicting rules that cancel each other out, and stating obvious conventions Claude already knows.
                Use emphasis markers like CRITICAL for rules that absolutely must be followed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="agents-md">
              <AccordionTrigger className="text-left text-lg">What is the difference between CLAUDE.md and AGENTS.md?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                CLAUDE.md is specific to Claude Code and read automatically by the tool. AGENTS.md is a
                vendor-neutral format proposed for any AI coding agent. If you use Claude Code exclusively,
                CLAUDE.md is the right choice. Some teams maintain both for multi-tool compatibility.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="init">
              <AccordionTrigger className="text-left text-lg">Should I use /init to generate my CLAUDE.md?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Use /init as a starting point, not the final version. The auto-generated file analyzes your
                codebase and creates a reasonable foundation, but it often includes obvious rules that waste tokens.
                Always review, trim, and customize the output based on your specific needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="imports">
              <AccordionTrigger className="text-left text-lg">Can CLAUDE.md import other files?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. CLAUDE.md supports @imports with the syntax @path/to/file, letting you reference README
                files, package.json, or separate documentation without inlining everything. Supports relative
                paths, absolute paths, and home directory references like @~/.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="frequency">
              <AccordionTrigger className="text-left text-lg">How often should I update my CLAUDE.md?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Add rules reactively when Claude makes the same mistake twice. Audit quarterly to remove stale
                rules using git blame. A self-improving approach - asking Claude to suggest updates at the end
                of productive sessions - works well for ongoing maintenance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-project text-center">
          <h2 className="text-2xl font-bold mb-4">What to Read Next</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            CLAUDE.md sets the foundation. Next, explore hooks for automated enforcement,
            or see how I build MCP servers using Claude Code directly.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild>
              <Link href="https://github.com/avisangle" target="_blank" rel="noopener noreferrer">
                See My GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">
                More Articles
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">
                My Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
