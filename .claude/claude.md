# GitHub Bio Site - Project Documentation

## Project Status: SEO/AEO Optimization Complete ✅

**Last Updated:** 2026-01-12

## Overview
Personal portfolio bio site at `avinashsangle.com` with comprehensive SEO and AEO (Answer Engine Optimization) implementation.

---

## Implementation Status

### ✅ Completed: SEO/AEO Optimizations

#### Index & Blog Pages
- **index.html**: Enhanced `Person` schema, `FAQPage` schema, "About Avinash - AI & Automation Engineer" header, visible FAQ section
- **blog.html**: `Blog` schema, Open Graph & Twitter Card tags

#### All Project Pages (9 total)
All project pages now have:
- ✅ `SoftwareApplication` JSON-LD schema
- ✅ `BreadcrumbList` JSON-LD schema  
- ✅ `FAQPage` JSON-LD schema (2 Q&As each)
- ✅ Open Graph & Twitter Card meta tags

| Page | Status |
|------|--------|
| project-aws-ec2-agent.html | ✅ Complete |
| project-calculator-server.html | ✅ Complete |
| project-jenkins-chatbot.html | ✅ Complete |
| project-jenkins-mcp.html | ✅ Complete |
| project-method-crm-mcp.html | ✅ Complete |
| project-social-media-auto-poster.html | ✅ Complete |
| project-twitter-oauth.html | ✅ Complete |
| project-wp-mcp.html | ✅ Complete |
| project-template.html | ✅ Complete (with placeholders) |

#### Site Configuration
- **sitemap.xml**: Updated all project dates to 2026-01-12
- **robots.txt**: Configured to block `project-template.html`
- **CNAME**: Custom domain configuration added

---

## File Structure

```
github_bio/
├── index.html              # Main portfolio page
├── blog.html               # Technical blog page
├── project-template.html   # Template (blocked in robots.txt)
├── project-*.html          # Individual project pages
├── css/styles.css          # Stylesheet
├── js/main.js              # JavaScript
├── sitemap.xml             # Sitemap (all pages included)
└── robots.txt              # Robots configuration
```

---

## For AI Assistants

When working on this project:
1. **New Project Pages**: Use `project-template.html` and follow instructions in `.claude/new-project-page.md`
2. **SEO/AEO Standards**: All pages must have `SoftwareApplication`, `BreadcrumbList`, and `FAQPage` schemas
3. **Consistency**: Match the styling and structure of existing project pages

---

## ⚠️ Styling Rules (IMPORTANT)

**DO NOT modify UI component files** in `src/components/ui/`. These are shadcn/ui components and should remain unchanged.

All styling changes MUST be made through:
1. **Global CSS** - Add/modify classes in `src/app/globals.css`
2. **CSS Classes** - Use existing global classes or create new ones in globals.css
3. **Tailwind Classes** - Apply Tailwind utility classes directly on elements in page files
4. **Inline className** - Use className props on page elements

**Files that should NOT be edited for styling:**
- `src/components/ui/button.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/accordion.tsx`
- Any other files in `src/components/ui/`

**Where to make styling changes:**
- `src/app/globals.css` - Global styles, custom classes
- Page files (`src/app/**/page.tsx`) - Apply classes to elements
- `src/components/navbar.tsx`, `src/components/footer.tsx` - Layout components (use global classes)
