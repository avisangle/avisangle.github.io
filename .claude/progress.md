# Progress Log

## 2026-01-24

### Sitemap & SEO Fixes
- Fixed sitemap.xml routes to match Next.js structure
- Updated all routes: `.html` extensions removed
- `/blog.html` → `/blog`
- `/blog-method-crm-mcp.html` → `/blog/method-crm-mcp`
- `/project-*.html` → `/projects/*`
- Removed theme-compare page from codebase
- Cleaned up robots.txt (removed old template reference)
- Updated all sitemap dates to 2026-01-24
- **Commits:** 09567bd, 0171660

### Sitemap Deployment Fix
- Moved sitemap.xml and robots.txt to public/ folder
- Next.js serves static files from public/ folder
- Files now accessible at root URL after build
- **Commit:** 3e88a83
