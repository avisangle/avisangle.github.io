# Architectural Decisions Log

## Decision: Wrap slash-commands in `<code>` and strip from JSON-LD plaintext
**Date:** 2026-05-11
**Status:** Accepted

**Context:**
GSC "Page indexing → Not found (404)" listed `/cost`, `/clear`, `/compact`, `/model`, `/resume`, `/rename`, `/stats`, `/usage` — none are real routes. Source: Claude Code slash-command mentions in `claude-code-cost-tracking` and `regression-proofing-claude-code-workflows` blog posts. Googlebot extracts strings matching `/[a-z]+` from page text and tries them as relative URLs.

**Decision:**
- In JSON-LD `text`/`name` and metadata `keywords` (plain-text fields Google parses), drop the leading slash and refer to the command by name ("the cost command").
- In user-visible headings (h3, CardTitle, AccordionTrigger) that previously had bare `/cmd`, wrap the slash command in `<code>` so it's clearly code syntax, not a path.
- Leave existing `<code>/cmd</code>` body mentions alone — Google's URL extractor respects code spans in practice.

**Rationale:**
- JSON-LD is the highest-risk surface because Google parses it as plain text. Removing the slash there eliminates the URL pattern without changing semantic meaning.
- `<code>` wrapping in headings keeps visible content informative for readers while reducing extraction risk.
- Avoided robots.txt disallow (would leave URLs in GSC as "Blocked by robots.txt" instead of clearing them).

**Consequences:**
- ✅ Googlebot no longer sees a URL pattern in plaintext.
- ✅ JSON-LD still matches visible content semantically (rich-snippet policy compliant).
- ⚠️ Slight wording shift in FAQ JSON-LD vs visible headings (e.g., "the stats command" vs `<code>/stats</code> command`) — acceptable variation per Google's "closely match" guidance.

---

## Decision 1: Custom HTML/CSS/JS vs Hugo Framework
**Date:** 2025-11-20
**Status:** Accepted

**Context:**
User requested modern landing page and asked if theme was necessary for GitHub Pages. Existing site used Hugo with Hextra theme.

**Decision:**
Build completely custom site with vanilla HTML/CSS/JavaScript, no frameworks or build tools.

**Rationale:**
- GitHub Pages hosts any static files (no theme required)
- Zero dependencies = faster loading, no maintenance
- No build process = simpler deployment workflow
- Full creative control over design and animations
- Better performance with optimized custom code
- Easier for user to customize without learning Hugo

**Consequences:**
- ✅ Faster, lighter site
- ✅ No build complexity
- ✅ Direct control over every element
- ⚠️ Manual content updates (no markdown templating)
- ⚠️ Scaling requires more manual work for many pages

---

## Decision 2: Bento Grid Layout for Projects
**Date:** 2025-11-20
**Status:** Accepted

**Context:**
Needed modern project showcase that stands out from typical grid layouts.

**Decision:**
Implement bento grid (uneven card sizes) using CSS Grid with different span values.

**Rationale:**
- Apple-style modern aesthetic (trending in 2025)
- Visual hierarchy (featured projects get larger cards)
- More engaging than uniform grid
- CSS Grid provides clean implementation
- Responsive with media query fallbacks

**Implementation:**
```css
.project-card.large { grid-column: span 2; grid-row: span 2; }
.project-card.medium { grid-column: span 2; grid-row: span 1; }
```

---

## Decision 3: Terminal-Style Hero Section
**Date:** 2025-11-20
**Status:** Accepted

**Context:**
User is developer with DevOps/automation background. Needed hero section that resonates with technical audience.

**Decision:**
Terminal aesthetic with animated typing effect showing command prompt and output.

**Rationale:**
- Aligns with user's technical identity
- Unique and memorable
- Typing animation creates engagement
- Familiar to developer audience
- Sets tone for entire portfolio

**Implementation:**
- Terminal window with macOS-style dots
- Command prompt with color-coded elements
- Character-by-character typing animation
- Cursor blink effect

---

## Decision 4: Animated Gradient Mesh Background
**Date:** 2025-11-20
**Status:** Accepted

**Context:**
Needed modern, eye-catching background without overwhelming content.

**Decision:**
Radial gradient mesh with CSS animation, low opacity overlay.

**Rationale:**
- Modern aesthetic (trending in 2025)
- Subtle movement adds visual interest
- Pure CSS = no performance hit
- Works well with dark theme
- Creates depth without distraction

**CSS Implementation:**
```css
--gradient-mesh: radial-gradient(at 40% 20%, hsla(240, 75%, 65%, 0.3)...);
animation: meshMove 20s ease infinite;
```

---

## Decision 5: Intersection Observer for Scroll Animations
**Date:** 2025-11-20
**Status:** Accepted

**Context:**
Wanted scroll-triggered animations without heavy dependencies or performance issues.

**Decision:**
Use native Intersection Observer API for triggering animations on scroll.

**Rationale:**
- Native browser API (no library needed)
- Performant (doesn't constantly poll scroll position)
- Progressive enhancement (works without JS)
- Clean implementation
- Good browser support

**Implementation:**
- Observe elements entering viewport
- Add 'animate' class to trigger CSS transitions
- Staggered delays for sequential appearance

---

## Decision 6: Zero External Dependencies
**Date:** 2025-11-20
**Status:** Accepted

**Context:**
Could have used libraries like Three.js, GSAP, or Anime.js for animations.

**Decision:**
Build everything with vanilla JavaScript and CSS animations.

**Rationale:**
- Faster page load (no external JS to fetch)
- No version management or updates needed
- Reduced security surface area
- Easier to understand and maintain
- CSS animations are hardware accelerated

**Trade-offs:**
- Some advanced effects harder to implement
- More manual coding required
- Less complex animations than with libraries

---

## Decision 7: Mobile-First Responsive Design
**Date:** 2025-11-20
**Status:** Accepted

**Context:**
Site needs to work perfectly on all devices.

**Decision:**
Mobile-first approach with breakpoints at 968px and 640px.

**Rationale:**
- Mobile traffic increasing year over year
- Forces prioritization of essential content
- Progressive enhancement approach
- Better performance on mobile
- Easier to scale up than scale down

**Breakpoints:**
- Base: Mobile (< 640px)
- 640px+: Tablet adjustments
- 968px+: Desktop layout

---

## Decision 8: System Fonts for Performance
**Date:** 2025-11-20
**Status:** Accepted

**Context:**
Could use custom web fonts for unique typography.

**Decision:**
Use system font stack (San Francisco, Segoe UI, etc.).

**Rationale:**
- Zero network requests for fonts
- Instant text rendering (no FOUT/FOIT)
- Familiar and readable on each platform
- Performance is priority
- Professional appearance maintained

**Font Stack:**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

---

## Decision 9: Preserve Old Hugo Content
**Date:** 2025-11-20
**Status:** Recommended

**Context:**
User has existing Hugo-based site with content and configuration.

**Decision:**
Keep Hugo files in repository, new files take precedence at root.

**Rationale:**
- Easy to rollback if needed
- Reference old content during migration
- No data loss
- GitHub Pages serves root files first
- Can compare old vs new

**Migration Path:**
- New site: `index.html` at root
- Old site: Hugo files remain in subfolders
- User can move Hugo to backup folder later if desired

---

## Decision 10: Multi-Page Structure with Blog Posts
**Date:** 2025-11-20
**Status:** Accepted

**Context:**
User wanted dedicated pages for projects and detailed blog posts for each project instead of direct GitHub links.

**Decision:**
Create multi-page structure:
- `projects.html` - All projects listing page
- Individual blog post pages for each project (`project-{name}.html`)
- "View Project" links go to blog posts, not GitHub
- Separate GitHub links available on each page

**Rationale:**
- Provides more context and detail than GitHub READMEs
- Better SEO with more indexed pages
- Showcases writing and communication skills
- Keeps visitors on the site longer
- Can add screenshots, demos, case studies
- Cross-promotes related projects

**Implementation:**
- Created 5 new HTML pages (1 projects page + 4 blog posts)
- Updated all navigation links in index.html
- Added ~600 lines of CSS for new page layouts
- Implemented sidebar with related projects
- Breadcrumb navigation for better UX

**Consequences:**
- ✅ More professional portfolio presentation
- ✅ Better user engagement and time on site
- ✅ Improved SEO with keyword-rich content
- ✅ Cross-linking between projects
- ⚠️ More content to maintain/update
- ⚠️ Slightly larger site (still minimal)

---

## Decision 11: Blog Post Content Structure
**Date:** 2025-11-20
**Status:** Accepted

**Context:**
Needed consistent structure for project blog posts that showcases projects effectively.

**Decision:**
Standard blog post structure:
1. Hero with breadcrumb navigation
2. Project Overview (What it does, Why it matters)
3. Implementation Highlights (Architecture, Features)
4. Demo/Screenshots section (placeholder for future content)
5. Tech Stack
6. GitHub CTA
7. Sidebar with metadata and related projects

**Rationale:**
- Consistent user experience across all projects
- Tells complete story: problem → solution → implementation
- Technical depth without overwhelming
- Easy to scan with clear sections
- Promotes related work through sidebar

**Content Approach:**
- Used existing project descriptions as foundation
- Expanded with technical details and benefits
- Added placeholders for demos/screenshots
- Included code examples where appropriate
- Focused on "why" not just "what"

---

## Decision 12: Sidebar Layout for Blog Posts
**Date:** 2025-11-20
**Status:** Accepted

**Context:**
Blog posts needed supplementary navigation and information without cluttering main content.

**Decision:**
Sticky sidebar with:
- Project metadata (Status, Type, Category)
- Related projects cards (with links)
- Quick navigation links

**Rationale:**
- Common pattern in professional blogs/documentation
- Keeps important info visible while scrolling
- Cross-promotes other projects effectively
- Provides easy navigation back to main sections
- Responsive design collapses on mobile

**Layout:**
- Main content: 1fr (flexible)
- Sidebar: 350px (fixed width)
- Sticky positioning (top: 100px)
- Collapses to single column on tablets/mobile

---

## Decision 13: View All Projects vs GitHub Profile
**Date:** 2025-11-20
**Status:** Accepted

**Context:**
User wanted "View All Projects" card to go to projects.html, while "GitHub Profile" button goes to GitHub.

**Decision:**
Make entire "View All Projects" card clickable (links to projects.html) with nested "GitHub Profile" button that stops propagation.

**Implementation:**
```html
<a href="projects.html" class="project-card view-all">
  <div class="view-all-content">
    <h3>View All Projects</h3>
    <span class="btn btn-primary">View All Projects →</span>
    <a href="https://github.com/..." onclick="event.stopPropagation()">
      GitHub Profile →
    </a>
  </div>
</a>
```

**Rationale:**
- Clear visual hierarchy (primary vs secondary action)
- Card click = internal navigation (projects page)
- Button click = external navigation (GitHub)
- `event.stopPropagation()` prevents card click when clicking button
- Both actions clearly labeled

**Trade-offs:**
- Slightly more complex HTML/JS
- Requires understanding of event propagation
- But provides better UX with dual functionality

---

## Decision 14: Comprehensive SEO Implementation Strategy
**Date:** 2025-11-27
**Status:** Accepted

**Context:**
User requested making site SEO-friendly to rank higher on Google. Site had basic meta tags but lacked structured data, social optimization, and crawler guidance.

**Decision:**
Implement comprehensive SEO optimization including:
1. Enhanced meta tags with targeted keywords
2. Schema.org JSON-LD structured data
3. Open Graph and Twitter Card tags
4. robots.txt and sitemap.xml
5. Canonical URLs
6. Semantic HTML5 structure
7. ARIA labels for accessibility

**Rationale:**
- **Structured Data**: Helps Google understand content and show rich results
- **Social Tags**: Improves sharing on LinkedIn, Twitter, Facebook
- **Sitemap**: Ensures all pages are discovered and indexed
- **Semantic HTML**: Better for crawlers and screen readers
- **Canonical URLs**: Prevents duplicate content penalties
- **Keywords**: Targets relevant search queries without stuffing

**Keywords Strategy:**
- Primary: "Avinash Sangle", "AI Agents", "DevOps", "Jenkins MCP"
- Secondary: AWS, Cloud Architecture, Python, Go, CI/CD
- Long-tail: "Jenkins AI Integration", "Model Context Protocol", "WordPress MCP"

**Implementation:**
```html
<!-- Person Schema for homepage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Avinash Sangle",
  "jobTitle": "Software Engineer",
  "knowsAbout": ["AI Agents", "DevOps", "Jenkins"...],
  "sameAs": ["LinkedIn", "GitHub", "YouTube"]
}
</script>
```

**Expected Results:**
- Week 1-2: Site indexed by Google
- Week 3-4: Appears for branded searches
- Month 2-3: Rankings improve for targeted keywords
- Month 3-6: Established presence with regular traffic

**Consequences:**
- ✅ Better Google visibility and rankings
- ✅ Rich search results with structured data
- ✅ Better social media previews
- ✅ Improved accessibility
- ✅ Knowledge graph potential
- ⚠️ Requires ongoing maintenance (update sitemap, add content)
- ⚠️ Rankings take time (3-6 months to see full impact)

---

## Decision 15: sitemap.xml Priority and Frequency Strategy
**Date:** 2025-11-27
**Status:** Accepted

**Context:**
Needed to guide search engines on which pages are most important and how often they change.

**Decision:**
Priority and frequency settings:
- Homepage (index.html): Priority 1.0, weekly updates
- Projects page: Priority 0.9, weekly updates
- Individual projects: Priority 0.8, monthly updates

**Rationale:**
- Homepage is entry point → highest priority
- Projects page is second most important navigation hub
- Individual project pages are content depth
- Weekly for dynamic pages, monthly for stable content
- Realistic change frequencies (not misleading crawlers)

**Consequences:**
- ✅ Crawl budget optimized
- ✅ Important pages crawled more frequently
- ✅ Honest change frequencies build trust with search engines

---

## Decision 16: Schema.org Types Selection
**Date:** 2025-11-27
**Status:** Accepted

**Context:**
Multiple Schema.org types available - needed to choose most appropriate for each page type.

**Decision:**
- Homepage: "Person" type
- Project pages: "SoftwareSourceCode" type
- Projects listing: "CollectionPage" type

**Rationale:**
- **Person**: Portfolio is about Avinash as a software engineer
  - Enables knowledge graph appearance
  - Links social profiles
  - Shows expertise areas
- **SoftwareSourceCode**: Each project is open source software
  - Links to GitHub repositories
  - Shows programming languages
  - Better than generic "CreativeWork"
- **CollectionPage**: Projects page aggregates multiple items
  - Signals to Google it's a listing/index page

**Alternatives Considered:**
- ProfilePage (too limited for portfolios)
- WebPage (too generic, loses rich result potential)
- Article (not appropriate for project pages)

**Consequences:**
- ✅ Eligible for rich search results
- ✅ Better understanding by search engines
- ✅ Potential knowledge graph inclusion
- ✅ Proper semantic classification

---

## Decision 17: robots.txt Configuration
**Date:** 2025-11-27
**Status:** Accepted

**Context:**
Needed to guide search engine crawlers on what to index and where to find sitemap.

**Decision:**
```
User-agent: *
Allow: /
Disallow: /themes/
Sitemap: https://avisangle.github.io/sitemap.xml
Crawl-delay: 1
```

**Rationale:**
- Allow all crawlers (no restrictions needed for public portfolio)
- Disallow /themes/ (non-essential assets)
- Direct crawlers to sitemap
- Crawl-delay prevents server overload (GitHub Pages courtesy)

**Consequences:**
- ✅ Guides all search engines properly
- ✅ Prevents wasted crawl budget on themes folder
- ✅ Sitemap easily discoverable
- ✅ Polite crawling behavior

---

## Decision 18: Vercel vs Cloudflare Pages for Deployment
**Date:** 2026-02-21
**Status:** Accepted

**Context:**
User requested migration from GitHub Pages static export to modern deployment platform. Domain already on Cloudflare DNS. Needed to choose between Vercel (Next.js creators) and Cloudflare Pages (same DNS provider).

**Decision:**
Deploy to Vercel instead of Cloudflare Pages.

**Rationale:**
- **Native Next.js Support**: Vercel built Next.js, zero configuration needed
- **@vercel/analytics Already Installed**: Package already in dependencies
- **Future Flexibility**: Easy to add SSR, API routes, ISR later
  - Cloudflare requires `@cloudflare/next-on-pages` adapter with limitations
- **Superior DX**: Auto git deployments, PR preview URLs, instant rollbacks
- **Image Optimization**: Native Next.js Image component works automatically
  - Cloudflare has limitations with Next.js image optimization
- **Build Simplicity**: No adapters or workarounds needed

**Cloudflare Advantages Not Selected:**
- Unlimited bandwidth (Vercel's 100GB/month sufficient for portfolio)
- 330+ edge locations vs Vercel's network (negligible for this use case)
- Same DNS provider (minor convenience, but DNS change is easy)

**Consequences:**
- ✅ Zero-config deployment
- ✅ Native Next.js features available
- ✅ Image optimization enabled automatically
- ✅ Can add server features later if needed
- ✅ Better developer experience (git push = deploy)
- ⚠️ DNS needs to point to Vercel (simple CNAME change)
- ⚠️ 100GB bandwidth limit (vs Cloudflare unlimited)

**Migration Path:**
- Update `next.config.ts` to remove GitHub Pages config
- Deploy to Vercel via GitHub integration
- Point Cloudflare DNS to Vercel
- Keep Cloudflare for DNS management (recommended)

---

## Decision 19: Dynamic Sitemap vs Static sitemap.xml
**Date:** 2026-02-21
**Status:** Accepted

**Context:**
Site had static `public/sitemap.xml` requiring manual updates when adding pages. User wanted better SEO management.

**Decision:**
Replace static sitemap with Next.js dynamic sitemap (`src/app/sitemap.ts`).

**Rationale:**
- **Auto-Generation**: Sitemap updates automatically at build time
- **Type Safety**: TypeScript ensures correct structure
- **No Manual Updates**: Add page → build → sitemap updated
- **Current Dates**: lastModified uses current date for index pages
- **Native Next.js Feature**: Built-in App Router support
- **Discovered Missing Page**: Found `/showcase` not in old sitemap

**Implementation:**
```typescript
// src/app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://avinashsangle.com', priority: 1.0 },
    { url: 'https://avinashsangle.com/blog', priority: 0.9 },
    // ... dynamically built from arrays
  ]
}
```

**Consequences:**
- ✅ No manual sitemap editing needed
- ✅ Always up-to-date lastModified dates
- ✅ Type-safe sitemap structure
- ✅ Scales easily (add to array, not XML)
- ⚠️ Requires build to update (not an issue with auto-deploy)

---

## Decision 20: Comprehensive 301 Redirect Strategy
**Date:** 2026-02-21
**Status:** Accepted

**Context:**
Google Search Console showed 10+ 404 errors from old URL patterns:
- Old blog subdomain: `blog.avinashsangle.com`
- Old HTML file structure: `project-{name}.html`, `blog-{name}.html`
- WWW variants

**Decision:**
Implement comprehensive 301 redirects in `next.config.ts` with three layers:
1. **Specific redirects** for all GSC 404 errors
2. **Pattern-based redirects** for old URL structures
3. **Domain-level redirects** (blog subdomain, www)

**Rationale:**
- **SEO Preservation**: 301 redirects pass link equity to new URLs
- **User Experience**: Old bookmarks/links still work
- **Crawl Budget**: Stop crawlers hitting 404s
- **Clean GSC**: Resolve all reported errors
- **Future-Proof**: Pattern redirects catch old URL variations

**Implementation Layers:**
```typescript
// Layer 1: Specific URLs (from GSC)
{ source: '/blog.html', destination: '/blog', permanent: true }
{ source: '/project-jenkins-mcp.html', destination: '/projects/jenkins-mcp', permanent: true }
// ... 10+ specific redirects

// Layer 2: Pattern-based catch-all
{ source: '/project-:slug.html', destination: '/projects/:slug', permanent: true }
{ source: '/blog-:slug.html', destination: '/blog/:slug', permanent: true }

// Layer 3: Domain-level
{ source: '/:path*', has: [{ type: 'host', value: 'blog.avinashsangle.com' }],
  destination: 'https://avinashsangle.com/blog/:path*', permanent: true }
```

**Consequences:**
- ✅ All 10+ GSC 404s resolved
- ✅ SEO equity preserved
- ✅ Old links still work
- ✅ Clean Search Console reports
- ✅ Future-proof with pattern matching
- ⚠️ Need to test all redirects post-deployment

---

## Decision 21: Enhanced robots.txt with Cloudflare Blocking
**Date:** 2026-02-21
**Status:** Accepted

**Context:**
Google Search Console showed crawling of Cloudflare infrastructure URLs (`/cdn-cgi/l/email-protection`) causing false 404 errors.

**Decision:**
Block Cloudflare infrastructure paths in robots.txt:
```
Disallow: /cdn-cgi/
Disallow: /_next/static/
Disallow: /_next/image/
Disallow: /api/
```

**Rationale:**
- **Waste of Crawl Budget**: `/cdn-cgi/` URLs are not content
- **False 404 Reports**: Shows up in GSC as errors
- **Infrastructure URLs**: `_next/` paths are build artifacts
- **Future API Protection**: Block `/api/` for future routes
- **Standard Best Practice**: Common for Cloudflare + Next.js sites

**What Gets Blocked:**
- `/cdn-cgi/*` - Cloudflare email obfuscation, apps, trace routes
- `/_next/static/*` - Next.js static assets (already handled by CDN)
- `/_next/image/*` - Image optimization endpoint
- `/api/*` - Future API routes (if added)

**Consequences:**
- ✅ Cleaner Google Search Console reports
- ✅ Better crawl budget allocation
- ✅ No more false 404s from infrastructure URLs
- ✅ Prepares for future API routes
- ⚠️ Must submit updated robots.txt to GSC

---

## Decision 22: Remove GitHub Pages Configuration
**Date:** 2026-02-21
**Status:** Accepted

**Context:**
Project configured for GitHub Pages static export with:
- `output: 'export'` in next.config.ts
- `trailingSlash: true` (required for GitHub Pages)
- `images: { unoptimized: true }` (static export limitation)

**Decision:**
Remove all GitHub Pages-specific configuration for Vercel deployment.

**Rationale:**
- **Vercel Native**: Vercel builds Next.js natively (no export needed)
- **Enable Features**: Unlocks SSR, ISR, API routes, middleware
- **Image Optimization**: Vercel optimizes images automatically
  - WebP/AVIF conversion
  - Responsive srcsets
  - Lazy loading
- **Better Performance**: Dynamic rendering when needed
- **Trailing Slashes**: Vercel handles routing without enforcing slashes

**Configuration Changes:**
```typescript
// BEFORE (GitHub Pages)
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
}

// AFTER (Vercel)
const nextConfig = {
  async redirects() { ... }
}
```

**Consequences:**
- ✅ Image optimization enabled
- ✅ Can add SSR/ISR later if needed
- ✅ Can add API routes for contact form, newsletter, etc.
- ✅ Better performance with optimized images
- ✅ Simpler configuration
- ⚠️ Cannot deploy to GitHub Pages anymore (Vercel only)
- ⚠️ Build output changes from `/out` to `/.next`

**Migration Impact:**
- GitHub Actions workflow can be removed/disabled
- Build command stays same: `npm run build`
- Vercel handles deployment automatically on git push

---

## Decision 23: Remotion for Blog Video Augmentation Pipeline
**Date:** 2026-04-26
**Status:** Accepted

**Context:**
Plan to augment blog posts with short YouTube explainer videos (programmatic, VO-synced, with code blocks/bullets/charts/animated diagrams). Researched Remotion vs Motion Canvas vs Revideo. Cross-referencing video ↔ blog post is a goal.

**Decision:**
Use **Remotion** as the rendering framework. Accept that VO sync is manual (build a thin VO-anchored timing layer ~50 lines).

**Rationale:**
- **Stack fit**: React/TypeScript matches existing Next.js codebase; reusable component patterns
- **AI codegen**: Official Remotion Skills for Claude Code shipped Jan 2026 — strong productivity multiplier for scene authoring
- **Ecosystem**: Lottie, Three.js, GIFs, Shiki, Recharts, React Flow all integrate cleanly
- **Lambda rendering**: 1-min video in ~30s if we ever scale up
- **License**: BUSL but free under $1M ARR — fine for personal blog

**Tradeoff accepted:**
- Motion Canvas/Revideo has built-in VO sync via UI; Remotion does not. Mitigated by writing a per-scene VO timing module that reads ElevenLabs (or recorded VO) durations and feeds them to `<Sequence>` durations.

**Architecture:**
- VO-first pipeline: script.md → per-scene ElevenLabs MP3s → scenes.json (with durations) → Remotion composition reads it
- Separate `video/` workspace at repo root (not nested under Next.js — avoids static export conflicts; project still on Vercel post-Decision 22)
- Reusable scene templates: TitleCard, BulletReveal, CodeBlock (Shiki), Chart (Recharts), Diagram (React Flow / Excalidraw SVG), Outro
- Cross-reference: blog page embeds YouTube video; video description + outro link to canonical blog URL; both list each other in JSON-LD (`VideoObject`)
- Burned-in captions from ElevenLabs word timestamps
- Pronunciation dictionary for tech terms (MCP, OAuth, CI/CD, etc.)

**Rejected alternatives:**
- **Motion Canvas / Revideo**: Closer fit for VO-synced explainers and MIT-licensed, but separate paradigm from React stack and weaker AI-assisted authoring. Would also be a separate workspace anyway.
- **Manim**: Python; great for math but overkill for tech tutorials
- **After Effects (Fireship/ByteByteGo style)**: not programmatic, doesn't fit "code-driven" goal

**Consequences:**
- ✅ Native to existing stack; reusable React components
- ✅ AI-assisted scene authoring via Claude Code Skills
- ✅ Version-controlled, reproducible video sources
- ⚠️ Must build VO-anchored timing layer ourselves
- ⚠️ Local render is slow (5–15 min for 1080p 2-min); plan for Lambda if cadence increases
- ⚠️ BUSL license — must monitor if ARR ever crosses $1M (irrelevant for personal blog)

**Pending sub-decisions:**
- Voiceover source: ElevenLabs vs own voice
- Pilot blog post selection
- Aspect ratio: 16:9 long-form, 9:16 Shorts, or both from one source
- Video length per format: 60s Short pilot vs 2-min long-form first

---

## Decision 24: Polyglot Pipeline — Python for audio, TS for everything else
**Date:** 2026-04-27
**Status:** Accepted

**Context:**
After shipping Brian-voice ElevenLabs VO, perceived loudness was low (-19 LUFS, well below YouTube's -14 LUFS recommended). TS audio libs (Web Audio in headless) are weak for broadcast-grade processing. Python has best-in-class tools (`pyloudnorm`, `pedalboard`).

**Decision:**
Add **Python tools as sidecars** to the TS-first pipeline. Specifically:
- `video/scripts/python/audio-polish/` runs LUFS normalize + light compression + true-peak limiter on the master VO MP3 before the Remotion composition uses it.
- Managed with **uv** (`pyproject.toml`, no shared megaenv).
- Invoked via `execFile` from `generate-vo.ts`.
- Skippable via `AUDIO_POLISH=false` env var.

**Rationale:**
- Spotify's `pedalboard` + ITU R BS.1770 standard `pyloudnorm` are the de facto tools for this. TS has no equivalent.
- Remotion forces the rendering layer to be React, so we can't switch to Python wholesale. Polyglot pipeline lets each language do what it's best at.
- `uv` (vs pip/poetry/conda) gives single-tool venv management with fast, reproducible installs.

**Where else Python may be added later (not now):**
- Whisper alignment if user-recorded VO replaces ElevenLabs (free, runs locally)
- Manim segments for math/algorithm content (renderable to MP4 → drop into Remotion as `<Video>`)

**Where Python is NOT used:**
- Remotion compositions (React-only, hard constraint)
- YouTube upload (`googleapis` Node is fine)
- All scene logic, captions, animations

**Consequences:**
- ✅ Brian VO loudness +1.3 dB (raw -19.36 → polished -18.08 LUFS), audible improvement
- ✅ Limiter prevents clipping after gain
- ✅ Pipeline pattern set up for future Python tools
- ⚠️ Two package managers (npm + uv) to maintain
- ⚠️ Dev needs Python 3.12+ available locally (`uv` auto-installs interpreter via `.python-version`)

---

## Decision 25: Video Pipeline as 8 Project-Level Skills
**Date:** 2026-04-27
**Status:** Accepted

**Context:**
After completing the manual end-to-end (topic → script → scenes → VO → captions → render → YouTube upload), the workflow needed to be productized so future videos don't require the same manual orchestration.

**Decision:**
Implement the pipeline as 8 project-level skills under `.claude/skills/video-*/SKILL.md`:

1. `/video-topic <slug-or-topic>` — extract from blog OR research custom topic
2. `/video-script [--short|--long]` — spoken script with `[scene-N]` markers
3. `/video-scenes` — composition + scene customization, render visual stills
4. `/video-vo` — ElevenLabs single-pass with timestamps + audio polish
5. `/video-thumbnail` — high-res still for manual upload
6. `/video-render` — final MP4
7. `/video-publish` — YouTube upload as Private (always; never auto-public)
8. `/video-blog-embed <video-id>` — YouTube embed + VideoObject JSON-LD on blog page

**Each skill ends with `Next: /video-X` to chain the pipeline.**

**Rationale:**
- Project-level (vs user-level) so pipeline is versioned with the repo
- 8 commands (not 1 mega) so each step is reviewable and resumable mid-pipeline
- Each command has a deterministic output contract — files at predictable paths
- Pattern matches existing skills (`/research-topic`, `/write-blogpost`, etc.)

**v1 scope deliberately limited:**
- `--short` only (60s 9:16). `--long` is phase 2 (needs new scene library)
- Scene customization is human-in-the-loop, not fully automated (avoids over-engineering scene schema)
- Reuses existing `/research-topic` skill for custom topics
- Thumbnail is rendered locally; YouTube upload limitation (mobile-only) is documented but not solved

**Consequences:**
- ✅ Next blog→video flow takes ~30 minutes vs the multi-hour manual process from this session
- ✅ Each skill reviewable independently; resumable from any step
- ✅ Skills auto-discovered by Claude Code harness (verified: all 8 appear in available skills list)
- ⚠️ Pronunciation dictionary (`src/lib/pronunciation.ts`) accumulates over time — needs review every 5-10 videos
- ⚠️ Per-topic scene customization (CodeBlock content, chart values) still requires human review — scene templates need topic-shape parameterization in phase 2

---

## Decision 26: Scenes Take Optional Content Props (Backward-Compatible Defaults)
**Date:** 2026-04-27
**Status:** Accepted

**Context:**
Scaling the video pipeline to a second topic (claude-managed-agents) forced the question: how do we customize scenes per topic without forking the components? Decision 25 deferred this to phase 2.

**Decision:**
Refactor each scene component to accept **optional** content props with defaults that match the original cost-tracking content. Compositions pass topic-specific content explicitly; the original composition needs no changes.

Concretely:
- TitleCard: `lines` (array of {text, color, size, weight}), `underlineWidthPercent`
- BulletReveal: `header`, `items` (union of `slash` | `numbered` | `filepath` chip variants), stagger timing
- CodeBlock: now multi-line — `lines: Token[][]`, plus `topCaption`, `bottomCaption`, `fontSize`, `typewriterSeconds`
- CostChart: `header`, `bars: [Bar, Bar]`, `callout`. Bar gained `decimals` and `overlay` fields
- Outro: `bigNumber`, `bigNumberSize`, `subhead`, `caption`, `url`, `ctaLabel`
- CaptionStrip: now requires `captions` and `audioDurationSeconds` props (was hardcoded import)

**Rationale:**
- Optional props with defaults = zero migration risk for existing composition
- Single scene library across all topics; no per-topic component forks
- Animation logic stays baked-in; only content varies — keeps motion identity consistent
- Token-array model for code (rather than string + parser) lets each topic colorize tokens independently without a syntax-highlighting dep

**Alternatives considered:**
- **Per-topic component variants** (e.g., `TitleCard.ManagedAgents.tsx`) — rejected; scales linearly with topic count
- **Single mega-prop schema (JSON-driven)** — rejected for v1; loses TypeScript benefits and over-abstracts

**Consequences:**
- ✅ Adding a new topic = new composition file + content props; scene library untouched
- ✅ Compositions are self-documenting — read the file to see the topic's content
- ⚠️ Each new topic-shape (e.g., a Counter scene, a Diagram scene) still needs a new scene component — only content variation is free
- ⚠️ `Root.tsx` grows linearly with compositions; factored out `buildCalcMetadata` to keep registration short
- ⚠️ Stub `scenes.json` (`stub: true` flag) is required to render visual stills before VO exists — composition gates Audio + CaptionStrip on the flag

---

## Decision 27: Scene Library Catalog + Reuse-First Decision Tree
**Date:** 2026-04-27
**Status:** Accepted

**Context:**
With Decision 26 making scenes props-driven, the failure mode shifted: instead of forking files, we risk silently *adding* scene types or variants when an existing one would work. The `/video-scenes` skill had no documented rule for "reuse first." User asked how new graphics get tracked and how they're notified.

**Decision:**
Introduce `video/src/scenes/CATALOG.md` as the single source of truth for the scene library, and rewire `/video-scenes` to read it and enforce a 4-step decision tree.

- **Catalog format**: one section per scene with purpose, props table, variants list, and "First used in" tag. Plus a Global changes log for theme/caption-wide edits.
- **Decision tree** (every beat walks top-down): (1) reuse via props, (2) new variant of existing scene, (3) new scene file (bar: reusable in ≥2 future videos), (4) global change.
- `/video-scenes` step 1 reads CATALOG.md before anything else; step 3 produces a beat→variant mapping table for user review; step 9 updates the catalog if step 5 extended the library, or explicitly states "no catalog updates" when nothing was added.

**Rationale:**
- Discoverability — user can scan one file to see what exists
- Prevents library bloat — variants and new scenes require user confirmation, not silent code generation
- Self-documenting reuse — every `/video-scenes` run states whether it reused or extended
- Fits existing flow — no separate registry script or build step needed

**Alternatives considered:**
- **Per-scene `meta` exports + generator script** — deferred; worth the cost only after library has 8–10 entries
- **No catalog, rely on file reads** — rejected; doesn't scale and gives no decision framework

**Consequences:**
- ✅ Reuse-first is now enforced in the skill, not just hoped-for
- ✅ User sees the reuse vs. extend call before any scene file is touched
- ⚠️ CATALOG.md becomes a maintained doc — must stay in sync with scene files (skill enforces via step 9)
- ⚠️ Adding a brand-new scene now also requires a catalog entry in the same change

---

## Decision 28: Safe-Area Constant + Per-Video out/ Subfolders
**Date:** 2026-04-27
**Status:** Accepted

**Context:**
Two layout issues surfaced together: (1) caption padding (600px) collided visually with the YT Shorts title bar, and (2) the flat `video/out/` folder mixed renders, frames, thumbnails, and iteration scratch from every video into one pile.

**Decision:**

1. **Safe-area constant** — `SAFE_AREA_BOTTOM = 400` exported from `video/src/lib/theme.ts`. Used in two places:
   - `CaptionStrip.tsx` for caption padding (replaces hardcoded 600)
   - Each composition wraps its `Series` in a positioned div with `bottom: SAFE_AREA_BOTTOM`, so scene `<AbsoluteFill>` resolves only against the top 1520px of the frame and cannot leak into the caption/Shorts-UI zone

2. **Per-video render folders** — `video/out/<slug>/` is the canonical layout. Inside each: `<slug>.mp4` (final render, already SEO-named), `frame-<N>.png` (review stills), `thumbnail.png` (YT manual upload), and optional `_archive/` for iteration history. Source content (`brief.md`, `script.md`) stays in `posts/<slug>/`; voiceover stays in `public/voiceover/<CompId>/`.

**Rationale:**
- Single constant for the safe zone means caption position and scene exclusion can never drift apart
- Wrapping at the composition level keeps individual scene files unaware of the constraint — they keep using AbsoluteFill normally
- Per-video folders enable `rm -rf out/<slug>` cleanup, deterministic upload paths, and grouped iteration artifacts
- File inside `out/<slug>/` is named `<slug>.mp4` — directory + filename give path uniqueness AND keep SEO filename. Removed the redundant copy-and-rename step from `youtube-upload.ts`

**Alternatives considered:**
- **Add bottom padding to each scene** instead of wrapping the Series — rejected; 5 places to forget, no enforcement for new scenes
- **Flat `out/<slug>.mp4` + `out/<slug>-frame-N.png`** instead of subfolders — rejected; same flat-folder problem just delayed

**Consequences:**
- ✅ Scene authors can keep using `AbsoluteFill` without thinking about safe zones
- ✅ Captions and scene exclusion both move together if `SAFE_AREA_BOTTOM` ever changes
- ✅ All render outputs for a video group together; cleaning up old work is one `rm -rf` away
- ⚠️ Existing files moved into `out/<slug>/` (and historical scratch into `_archive/`); skills updated to new paths
- ⚠️ Vertical real estate for scenes drops from 1920 to 1520 — a ~21% loss. Stills re-rendered after the change confirmed all 5 scenes still fit comfortably

---

## Decision 29: Burn Thumbnail PNG Into First 0.5s of MP4
**Date:** 2026-04-27
**Status:** Accepted

**Context:**
YouTube custom thumbnail upload requires phone-verified channels OR mobile-only upload from the YT app. Without verification, every video shipped meant the user had to copy thumbnail.png from laptop → mobile → YT app each time. Tedious and error-prone.

**Decision:**
The composition burns `public/thumbnails/<slug>.png` as the first `THUMBNAIL_HOLD_FRAMES = 15` frames (0.5s @ 30fps) of every rendered MP4. The YouTube mobile Studio frame picker can scrub to that opening frame and use it as the thumbnail — no separate file transfer.

Implementation:
- New constant `THUMBNAIL_HOLD_FRAMES` in `lib/theme.ts` alongside `SAFE_AREA_BOTTOM`
- New `ThumbnailHold` scene component renders the PNG full-frame outside the safe-area wrapper
- Compositions accept optional `thumbnailSrc` + `thumbnailHoldFrames` props (defaults to ON)
- `Root.tsx` calculateMetadata adds `thumbnailHoldFrames` to `durationInFrames` and `audioOffsetFrames`
- `/video-scenes` and `/video-thumbnail` pass `--props='{"thumbnailHoldFrames":0}'` to suppress the burn-in for stills (avoids self-reference when rendering the thumbnail itself)
- Thumbnail path moved from `out/<slug>/thumbnail.png` to `public/thumbnails/<slug>.png` (Remotion `staticFile()` only reads from `public/`)

**Rationale:**
- 0.5s is long enough for mobile picker to scrub-snap and for MP4 keyframe stability; short enough viewers register it as a clean title-card open rather than a glitch
- Burning into video means the thumbnail design always travels with the file — no separate manual upload step in the pipeline
- Opt-in via prop means the same composition can render review stills without the burn-in (frame numbers stay stable for /video-scenes)
- Phone verification still works as a parallel path — the PNG is at `public/thumbnails/<slug>.png` for direct desktop upload

**Alternatives considered:**
- **Verify phone, upload from desktop** — works but requires a one-time setup step the user hasn't done; doesn't help recover from accidental verification loss
- **0.1s (3 frames)** as user originally requested — too short for reliable mobile scrub-snap and might not produce a clean MP4 keyframe
- **Last-frame hold** — viewers see thumbnail after outro; reasonable but loses the "scrub to start" intuition

**Consequences:**
- ✅ Mobile thumbnail set is now: open YT Studio app → frame picker → 0:00 → save. No file transfer.
- ✅ Composition is the single source of truth for thumbnail content (PNG is rendered FROM the composition, then burned INTO subsequent renders of the same composition)
- ⚠️ MP4 length grows by 0.5s — for a 55s Short, still under the 60s YT cap
- ⚠️ Review-still rendering must pass `thumbnailHoldFrames: 0` override; documented in /video-scenes and /video-thumbnail skill files
- ⚠️ `/video-thumbnail` must run before `/video-render` — render will fail at staticFile lookup if PNG missing

---

## Decision 30: Phase 2 Pipeline Polish — Data-Driven Metadata, SRT Captions, /video-promote
**Date:** 2026-04-27
**Status:** Accepted

**Context:**
After shipping Decisions 23-29, the pipeline still had three rough edges: (1) per-video YT metadata required hand-editing `youtube-upload.ts`, (2) burned-in captions weren't surfacing as a YT subtitle track for accessibility/search indexing, (3) no equivalent of `/promote-blogpost` for video drafts.

**Decision:**
Three coordinated changes:

1. **Data-driven YT metadata** — Each video gets `posts/<slug>/youtube.json` with `title`, `description`, `tags[]`, `categoryId`, `privacy`, `selfDeclaredMadeForKids`, `embeddable`, optional `compositionId`, optional `blogUrl`. `youtube-upload.ts` reads this file (slug via CLI arg). Generated by `/video-script` step 6. Zero per-video script edits.

2. **SRT subtitle generation + upload** — `scripts/lib/srt.ts` exports `buildSrt()`. `generate-vo.ts` writes `captions.srt` alongside `captions.json`. `npm run captions:srt -- <CompositionId>` regenerates without re-running TTS. `youtube-upload.ts` after `videos.insert` calls `captions.insert` if `compositionId` is set and SRT exists. Failure of SRT step does not roll back the video upload (graceful degrade).

3. **`/video-promote` skill** — Mirrors `/promote-blogpost`. Generates Twitter / LinkedIn / Reddit drafts into `video/posts/<slug>/social/`. Drafts cross-link YT URL + (optional) blog URL. Posting is currently manual (auto-posting deferred to a future `/post-video`).

**Both modes (blog-driven AND standalone) are first-class:**
- `blogUrl` is optional in `youtube.json` — present for blog mode, omitted for standalone
- `/video-publish` suggests `/video-blog-embed` for blog mode and `/video-promote` for standalone
- `/video-blog-embed` explicitly tells the user to skip when no `blogUrl` is set
- `/video-promote` drops blog references when `blogUrl` is absent

**Rationale:**
- `youtube.json` decouples metadata from the upload script — the script becomes a reusable engine, the JSON is the per-video config
- SRT auto-upload removes a manual YT Studio step + adds searchable transcript with no extra effort
- Promote drafts catch the natural follow-up after publish without forcing the user to rewrite the same hook for each platform

**Alternatives considered:**
- **Inline metadata constants per video** (status quo before this decision) — rejected; one manual edit per video, easy to leave stale across sessions
- **Auto-derive metadata from brief.md at publish time** — rejected; user wants override window; explicit JSON gives that
- **Auto-post to social platforms from /video-promote** — deferred; posting is irreversible, drafting is not

**Consequences:**
- ✅ Pipeline is fully data-driven from `/video-topic` to `/video-promote` — no hand-edits to `.ts` per video
- ✅ Every published video automatically gets a YT subtitle track for free
- ✅ Standalone (no-blog) videos work end-to-end without leaving holes
- ⚠️ `youtube.json` is a new required step in `/video-script`; existing 2 videos got hand-written JSON files as migration
- ⚠️ Captions API call costs 400 quota units on top of the 1600 for `videos.insert` — daily quota of 10K still allows ~5 uploads/day
- ⚠️ `/video-promote` is draft-only for now; `/post-blogpost` reads from blog social paths and would need extension to handle video drafts (deferred)

---

## Decision 31: Optional Playlist Linking via youtube.json

**Date:** 2026-04-27
**Status:** Implemented

**Decision:** Extend `youtube.json` with two optional fields — `playlistIds: string[]` (precise) and `playlistTitle: string` (resolve-or-create by title) — and append the uploaded video to those playlists from `youtube-upload.ts`. `playlistIds` wins when both are set.

**Rationale:**
- New series workflow (Claude Code shorts) needs every episode in the same playlist; manual addition via Studio fights the data-driven pipeline.
- `playlistIds` is the precise path for established series (look up once via new `npm run yt:playlists`).
- `playlistTitle` is the bootstrap path: first episode auto-creates the playlist with the video's privacy, so series setup needs zero pre-work.
- Failure pattern mirrors caption upload: warn + continue. The video itself is the irreversible action; playlist linking is a follow-up that can be re-attempted manually.

**Alternatives considered:**
- **Single `playlistId` string** — rejected; one video often belongs in multiple playlists ("Claude Code Shorts" + "All Tutorials").
- **Inline playlist constants in upload script** — rejected for the same reason as Decision 30: per-video state belongs in `youtube.json`, not in code.
- **Separate `series.json` file with playlist info** — deferred to a later PR (still planned for series template). For now keeping all per-video state in one JSON file.
- **Re-auth with broader `youtube` scope** — unnecessary; Google's docs confirm `youtube.force-ssl` (already requested) covers `playlists.insert` and `playlistItems.insert`.

**Consequences:**
- ✅ Series videos drop into the right playlist on `npm run yt:upload` with no Studio steps
- ✅ Pipeline still works for one-offs (omit both fields)
- ✅ No re-auth required for existing users
- ⚠️ Adds ~50 quota units per playlist link on top of the 1600 + 400 already paid per upload — negligible
- ⚠️ `playlistTitle` lookup paginates; ~50 playlists per request. Channels with hundreds of playlists would slow this down — not a concern for personal channels

---

## Decision 32: `/video-news-peg` Skill + Auto-Wire from `/video-topic`

**Date:** 2026-04-28
**Status:** Implemented

**Decision:** Build a new `/video-news-peg` skill that fetches recent (≤30 days) Anthropic + Claude Code releases and either appends a "## News peg" section to a topic's `brief.md` (targeted mode) or writes a dated slate-planning digest (standalone mode). Auto-invoke it from `/video-topic` step 7. `/video-script` step 1 reads the news-peg section to decide hook framing (lead with the change vs. lean contrarian/first-person).

**Rationale:**
- Post-E1 channel research showed news-pegged Claude Code shorts outperform evergreen ones — top performers (AICodeKing, Theo, Fireship, IndyDevDan) all peg episodes to releases.
- E2 (`install-claude-code`) was the first episode to use a news peg (npm → native installer). The hook lifted from the news directly. Without the peg, E2 would have been a structurally weaker generic install demo.
- The check shouldn't be optional or remembered — it should be automatic in the pipeline. Codifying it as a skill makes it repeatable across episodes and visible in the brief.

**Sources baked in (validated 2026-04-28):**
1. `https://code.claude.com/docs/en/whats-new` — weekly feature digests with code snippets + version tags
2. `https://code.claude.com/docs/en/changelog` — granular CLI version history
3. `https://www.anthropic.com/news` — company-wide announcements

Rejected during validation: GitHub `anthropics/claude-code/releases` (no releases published), `platform.claude.com/docs/en/release-notes*` (404), `https://www.anthropic.com/claude-code` (static product page). No RSS available.

**Wiring:**
- `/video-topic` step 7 (new) invokes `/video-news-peg <slug>` via the Skill tool after the brief is written, before user confirmation.
- `/video-script` step 1 (extended) reads the `## News peg` section and adapts hook framing accordingly.
- "No peg found" is a deliberate documented state, not a failure — `/video-script` falls back to contrarian/first-person framing.

**Alternatives considered:**
- **Manual invocation between `/video-topic` and `/video-script`** — rejected; too easy to forget; defeats the point of automation.
- **Bake news fetching directly into `/video-topic`'s research step** — rejected; conflates topic research (one-time) with news fetching (which has its own retry/cache logic and standalone use case).
- **Cache news fetches for 24h** — deferred to v2; news changes daily and one fetch per episode is cheap.
- **Add Twitter/HN/Reddit as sources** — deferred; harder to scrape, lower signal-to-noise than official sources.

**Consequences:**
- ✅ Every new episode gets a news-peg check by default — no separate user action
- ✅ Standalone mode (`/video-news-peg` alone) gives a slate-planning digest for batch decisions
- ✅ "No peg" path is well-defined — pipeline doesn't break on evergreen topics
- ⚠️ Each `/video-topic` run now does 3-5 extra WebFetch calls (~5-15s wallclock). Acceptable since `/video-topic` is the slowest step anyway.
- ⚠️ Sources are hardcoded — if Anthropic changes URLs, skill needs an update. Validated 2026-04-28; should re-check quarterly.
- ⚠️ Relevance is judgment, not regex — the matcher reads agent-summarized release notes against the brief, can mis-classify edge cases. "Strong vs weak peg" decision is documented in the SKILL but still subjective.

---

## Decision 33: `/video-style-lint` + `/video-hook-options` Skills

**Date:** 2026-04-28
**Status:** Implemented

**Decision:** Build two complementary skills that operationalize the post-E1 channel research:

- **`/video-style-lint`** — auto-invoked from `/video-script` step 7 (also runnable standalone). Scans the spoken script for 5 verified anti-patterns (YouTuber-explainer hook, parallel anaphora ≥3, spoken brand URL, slogan-only outro, Q/A grid ≥3). Advisory output with line citations + suggested rewrites. Never blocks.
- **`/video-hook-options`** — manual pre-script step. Reads `brief.md`, generates 7 hook variants in proven channel templates (AICodeKing-superlative, Fireship-cold-open, IndyDevDan-anti-hype, AICodeKing-first-person-number, Theo-BREAKING, Greg-numbered-list, Mid-action). User picks one; chosen hook saves to `posts/<slug>/hook.md`, which `/video-script` step 1 reads as the locked seed for scene-1.

**Rationale:**
- Two halves of the same loop: hook-options reduces the *frequency* of anti-patterns at hook-design time; style-lint catches the ones that slip through at script-finalization time.
- E1 (`what-is-claude-code`) shipped with 3 of the 5 anti-patterns and got "looks generic and promotional" feedback. E2 (`install-claude-code`) was rewritten manually after diagnosis. These skills make the diagnosis run *before* shipping, not after.
- Hook-options is intentionally manual/optional — auto-invoking it would either pick for the user (defeats the value) or stall the pipeline.
- Style-lint is auto-invoked because it's read-only + fast + always advisory; no friction cost.

**Wiring summary:**

| Skill | Invoked from | When | Mode |
|---|---|---|---|
| `/video-news-peg` | `/video-topic` step 7 | After brief written | Auto |
| `/video-hook-options` | User direct | Between brief and script | Manual / optional |
| `/video-style-lint` | `/video-script` step 7 | Before user confirms script | Auto + advisory |

`/video-script` step 1 was extended to read `hook.md` if present (use chosen hook verbatim) and to read `brief.md`'s `## News peg` section to adapt hook framing if hook.md is absent.

**Alternatives considered:**
- **Implement style-lint as a Node script with regex** instead of an instructional SKILL — rejected for v1; the SKILL approach has zero deps and the rules are explicit enough that Claude applies them deterministically. Promote to a script in v2 if the pattern set grows.
- **Make hook-options auto-invoke from /video-topic** — rejected; the user choice IS the value, auto-running it stalls the pipeline waiting for input.
- **Make style-lint blocking** — rejected; some "violations" are intentional (e.g. deliberate marketing-y outro for a launch video). Advisory keeps the user in control.
- **Combine the two skills into one `/video-craft`** — rejected; they serve different stages and the separation makes each cleaner to reason about and to update independently.

**Consequences:**
- ✅ E3+ episodes get pre-flight style checks for free; no "ship and diagnose later" loops
- ✅ Hook craft becomes a deliberate menu-driven step instead of "write one from instinct"
- ✅ Both skills are advisory — the user can always override; pipeline never blocks
- ⚠️ Adds 1-2 more steps to the cognitive flow (especially if user always runs hook-options) — pipeline is now 8+ skills deep. Worth it; a tighter hook + lint catches more problems than the extra step costs.
- ⚠️ Style-lint patterns are heuristic — will catch obvious violations, miss subtle ones. Lint is necessary, not sufficient.
- ⚠️ Hook templates plateau — produce reliable B+ hooks, not A+ moments. Custom override always available.
- ⚠️ Pattern lists in both skills will need updating as we learn from real YT Studio analytics. Don't add patterns from intuition; only from validated data.
