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

---

## 2026-07-26 — Newsletter subscription diagnosis (Kit)

8. **`NewsletterSignup` mishandles Kit's `quarantined` response**
   - **Issue**: `src/components/newsletter-signup.tsx:36` treats only `status === "success"` as success. Kit also returns `{"status":"quarantined","url":"https://app.kit.com/forms/guards/…"}` — a spam-guard challenge the visitor must complete before the subscription is created. The code drops `url` and shows "Something went wrong."
   - **Cause**: the guard handling existed in Kit's JS embed, removed in `2100482` when the embed was replaced with a native `fetch`.
   - **Impact**: Medium — a guarded visitor can never subscribe and gets a generic error. Observed live on 2026-07-26 while the Kit plan was expired; endpoint returned `success` again after the account moved to the free plan, so the guard is not currently firing.
   - **Fix**: on `quarantined`, redirect to `data.url` instead of erroring.

9. **Success copy claims a confirmation email that may never be sent**
   - **Issue**: "Please check your inbox to confirm" is hardcoded at `src/components/newsletter-signup.tsx:60`, independent of Kit's response. Per Kit docs the confirmation ("Incentive") email is sent only for **double opt-in** forms, and is not resent to an address already on the form.
   - **Impact**: Low-Medium — misleading if form `9487940` is single opt-in.
   - **Status**: NOT A BUG, closed 2026-07-26. Confirmation emails are arriving, so form `9487940` is double opt-in and the copy is accurate. The coupling remains (copy is independent of Kit's response) but has no observable effect; leave as is.

10. **Domain has no email authentication for Kit — confirmation emails landing in spam**
   - **Issue**: `_dmarc.avinashsangle.com` does not exist. SPF is `v=spf1 include:_spf.mx.cloudflare.net ~all` (Cloudflare Email Routing = inbound forwarding only; MX are `route1/2/3.mx.cloudflare.net`), which does not authorize Kit. Without a Kit Verified Sending Domain, Kit DKIM-signs with its own domain, so DKIM does not align either.
   - **Impact**: High — no SPF alignment, no DKIM alignment, no DMARC record. Confirmed by user: confirmation emails go to spam.
   - **Fix**: (a) Kit Settings → Emails → Verified Sending Domains (CNAME-based; root SPF unchanged) — set the records **DNS-only/grey-cloud** in Cloudflare, since proxying rewrites CNAMEs and breaks DKIM; (b) add TXT `_dmarc` = `v=DMARC1; p=none; rua=mailto:aavi.sangle@gmail.com; fo=1`, staying at `p=none` until reports show alignment; (c) verify Kit's From address is on `avinashsangle.com`, not `@gmail.com`.
   - **Status**: RESOLVED 2026-07-26 (config, not code). Kit Verified Sending Domain validated. Live DNS verified via `dig`: `ckespa` → `spf.dm-50c2be8f.sg9.convertkit.com` → `"v=spf1 include:sendgrid.net ~all"` (Return-Path alignment); `cka`/`cka2._domainkey` → convertkit → sendgrid, both resolving to real `k=rsa` keys; exactly one `_dmarc` TXT = `v=DMARC1; p=none; rua=mailto:…@dmarc-reports.cloudflare.net`. Apex SPF untouched (1 of 10 DNS lookups). NOTE: the Kit From *address* is still `aavi.sangle@gmail.com` — only the From *name* was changed to `admin`, so this alignment is not yet in effect. See item 11.
   - **Correction to the fix above**: `rua=mailto:aavi.sangle@gmail.com` would NOT have worked. Per RFC 7489 §7.1 an external-domain RUA requires the destination to publish `<domain>._report._dmarc.<destination>`; verified `…_report._dmarc.gmail.com` returns nothing while `…_report._dmarc.dmarc-reports.cloudflare.net` returns `"v=DMARC1;"`. Used Cloudflare DMARC Management instead. Also `fo=1` was inert without a `ruf=` tag.
   - **Deliberately NOT done**: Cloudflare flags DMARC `p=none` as a Warning and BIMI as Fail. Stay at `p=none` for 2–4 weeks of reports before stepping to `p=quarantine; pct=25` — Kit has no send history yet and Web3Forms (contact form) alignment is unverified, so enforcing now risks blocking own mail. BIMI declined: needs enforcement policy + a ~$1–1.5k/yr VMC. Do NOT add Kit/SendGrid to the apex SPF — alignment comes via the `ckespa` subdomain; an `include:` would waste a DNS lookup.
   - **Open**: whether authenticated mail actually reaches the inbox — needs a test send and a `Show original` header check (SPF/DKIM/DMARC all PASS on `avinashsangle.com`). Residual spam placement after that is reputation, not config.

11. **Kit From address is `@gmail.com`, defeating the DKIM/SPF alignment just configured**
   - **Issue**: Kit Settings → Email addresses shows From Name `admin` but address `aavi.sangle@gmail.com` (Default), and Kit itself warns it is "a free address" that hurts deliverability. First draft created via API came back with `email_address: 'aavi.sangle@gmail.com'`. DKIM signs and Return-Path aligns to `avinashsangle.com`, so a `gmail.com` From header means receivers evaluate the wrong domain and DMARC alignment fails — the DNS work in item 10 is inert until this changes.
   - **Not a free-plan limit**: adding a custom From address IS permitted. API errors moved from `422 "Email address not found"` → `422 "Email address not confirmed"` once the address was added, i.e. it only needs verifying.
   - **Blocked on**: receiving Kit's verification email at `admin@avinashsangle.com`, which needs a Cloudflare Email Routing custom-address rule forwarding it to the gmail account. MX records already present.
   - **Guard added**: `scripts/send_kit_broadcast.py` sends `KIT_FROM_EMAIL` explicitly and prints a loud WARNING (or aborts on Kit's 422) if the resulting sender is not `@avinashsangle.com`, rather than silently drafting a misaligned email.
   - **Status**: RESOLVED 2026-07-26. `admin@avinashsangle.com` is confirmed and Default in Kit; subscription confirmation emails now land in the inbox rather than spam. Draft 25159854 deleted; draft 25159901 recreated and verified via API: `email_address: admin@avinashsangle.com`, `send_at: None`, `published_at: None` (unsent draft, aligned sender). Account has 2 confirmed subscribers.

12. **Broadcast scheduled via API with `send_at = now` completes with 0 recipients**
   - **Issue**: `PUT /v3/broadcasts/25159901` with `send_at` set to the current UTC timestamp returned 200 and Kit set `published_at`, but `/stats` reports `recipients: 0, status: "completed", progress: 0.0` while the account has 2 `active` subscribers. Nothing appears to have been dispatched.
   - **NOT A BUG, closed 2026-07-26.** The `/stats` endpoint simply lags several minutes behind the actual send. Re-checked after delivery: `recipients: 2, progress: 100.0, emails_opened: 1`, and the mail was confirmed received. `send_at = now` via `PUT /v3/broadcasts/{id}` is a valid way to send immediately.
   - **Lesson**: do not treat a fresh `/stats` read as evidence of a failed send; wait or confirm in an inbox before concluding anything.

13. **Authenticated broadcast still lands in Gmail spam**
   - **Issue**: First real broadcast (25159901) delivered with textbook authentication — `mailed-by: ckespa.avinashsangle.com`, `signed-by: avinashsangle.com`, From `admin@avinashsangle.com` — and still landed in spam for `ashwinighuge1@gmail.com`.
   - **Assessment**: not a configuration fault; SPF and DKIM both align. Contributing factors: (a) `avinashsangle.com` has zero bulk-sending reputation, this being its first send; (b) earlier confirmation emails to the same recipient landed in spam, which Gmail learns per-recipient; (c) the email body is ~50 words carrying three links to the same URL — a high link-to-text ratio is a standard spam heuristic.
   - **Fix**: (a) recipients click "Report not spam" and add the sender to Contacts; (b) enrich `build_content()` in `scripts/send_kit_broadcast.py` — a real intro paragraph and a single primary CTA instead of three duplicate links; (c) send consistently and let reputation accrue over 4–8 weeks.
   - **Status**: OPEN — (a) and (c) are not code. Read Gmail's "Why is this message in spam?" banner for the specific reason before acting further.
