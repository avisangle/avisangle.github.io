# Bug Reports & Issues Log

## 2026-02-21: Vercel Deployment Preparation

### No Bugs Found ✅

All changes completed successfully:
- ✅ Build passes with new configuration
- ✅ Dynamic sitemap generates correctly
- ✅ 301 redirects configured properly
- ✅ No TypeScript errors
- ✅ All 19 pages compile successfully

### Potential Issues to Monitor Post-Deployment

1. **Redirect Testing Needed**
   - **Issue**: 10+ redirect rules need verification
   - **Impact**: Medium - Old URLs might 404 if redirects fail
   - **Test Plan**: Use curl or redirect checker tool to verify all redirects after deployment
   - **Expected Date**: After Vercel deployment

2. **Sitemap Accessibility**
   - **Issue**: Dynamic sitemap at `/sitemap.xml` needs verification
   - **Impact**: Low - Search engines will discover pages regardless
   - **Test Plan**: Visit `https://avinashsangle.com/sitemap.xml` after deployment
   - **Expected Date**: After Vercel deployment

3. **Image Optimization Compatibility**
   - **Issue**: Images may need Next.js Image component for optimization
   - **Impact**: Low - Images will load, just not optimized
   - **Resolution**: Audit images and convert to Next.js Image component later
   - **Status**: Enhancement, not bug

---

## Previous Issues (If Any)

*No previous bugs logged*

---

## 2026-07-23 — Found during internal-linking/SEO work (branch `seo/internal-linking-hubs-rss`)

4. **Conflicting publish dates between `sitemap.ts` and blog index cards**
   - **Issue**: 5 posts have a different `datePublished` in `src/app/sitemap.ts` than the card copy in `src/app/blog/page.tsx`. Two differ by over a year.
     | slug | sitemap.ts | index card |
     |---|---|---|
     | `clawdbot-guide` | 2026-04-16 | Jan 26 2025 |
     | `method-crm-mcp` | 2026-01-24 | Jan 15 2025 |
     | `claude-managed-agents` | 2026-05-17 | Apr 9 |
     | `gemma-4-models-guide` | 2026-04-16 | Apr 6 |
     | `gemini-3-5-flash-agentic-coding-guide` | 2026-05-27 | May 25 |
   - **Impact**: Medium — contradictory `datePublished` signals across sitemap, visible cards, and blog-index JSON-LD suppress freshness ranking.
   - **Current state**: `src/data/posts.ts` took sitemap as authoritative, so registry/feeds/hubs are self-consistent. The cards and index JSON-LD still disagree.
   - **Resolution**: FIXED 2026-07-23. Author chose "latest date wins" — in all 5 cases the latest was the `sitemap.ts`/registry value. Reconciled every publish-date signal to it: post `datePublished`/`dateModified` (JSON-LD), OG `publishedTime`/`modifiedTime`, the index-card JSON-LD, the index-card visible date, and the visible in-post Calendar header. In-content date references (e.g. claude-managed-agents "May 6, 2026", gemini "May 19, 2026" GA date) were deliberately left untouched. Verified in built HTML.

5. **15 pages ship with no `<link rel="canonical">`**
   - **Issue**: Confirmed by grepping built HTML. Affected: `/` (homepage), `/blog`, `/projects`, all 10 `/projects/*` pages, `/showcase`, `/blog/method-crm-mcp`.
   - **Impact**: Medium-High — the homepage is the most-linked page on the site and has no self-canonical.
   - **Note**: Do NOT fix by adding `alternates.canonical` to the root layout — Next.js shallow-merges metadata, so every page without its own `alternates` would inherit a canonical pointing at the homepage (the classic SPA canonical bug). Must be set per page. See `docs/decisions/D-SEO-02`.
   - **Status**: FIXED 2026-07-23. Added `alternates.canonical` per page (14 pages via their existing `metadata` export; the homepage had none, so a minimal `metadata` export was added to `src/app/page.tsx` that inherits everything else from the root layout). Verified against built HTML: 56/56 pages carry a self-canonical matching their own route, zero trailing slashes, zero mismatches.

6. **`eslint` not installed**
   - **Issue**: `npm run lint` fails with `Cannot find package 'eslint' imported from eslint.config.mjs`. Pre-existing.
   - **Impact**: Low — `npx tsc --noEmit` and `npm run build` still gate correctness.

7. **`CLAUDE.md` page template shows a non-existent `SectionHeader` `icon` prop**
   - **Issue**: The "Page Structure Template" passes `icon={...}` to `SectionHeader`, which accepts only `title` / `subtitle` / `centered`.
   - **Impact**: Low — misleads anyone following the template.
