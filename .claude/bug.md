# Bug Reports

## 2026-01-24

### Fixed: Sitemap pointing to old HTML routes
- **Issue:** sitemap.xml contained old HTML file paths (`.html` extensions) after Next.js migration
- **Impact:** SEO - Search engines indexing wrong URLs
- **Fix:** Updated all routes to Next.js format without extensions
- **Status:** ✅ Fixed in commit 09567bd
