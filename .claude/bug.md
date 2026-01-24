# Bug Reports

## 2026-01-24

### Fixed: Sitemap pointing to old HTML routes
- **Issue:** sitemap.xml contained old HTML file paths (`.html` extensions) after Next.js migration
- **Impact:** SEO - Search engines indexing wrong URLs
- **Fix:** Updated all routes to Next.js format without extensions
- **Status:** ✅ Fixed in commit 09567bd

### Fixed: Sitemap not loading at URL
- **Issue:** sitemap.xml and robots.txt not accessible at https://avinashsangle.com/
- **Root Cause:** Files in project root instead of public/ folder
- **Impact:** SEO - Search engines cannot find sitemap
- **Fix:** Moved both files to public/ folder (Next.js static file location)
- **Status:** ✅ Fixed in commit 3e88a83
