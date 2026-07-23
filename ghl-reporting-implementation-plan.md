# GoHighLevel Reporting Add-on — Implementation Plan

**Status:** Draft v1 · **Created:** 2026-06-13 · **Owner:** Avinash Sangle
**Working title:** *RollupIQ* (placeholder — agency-rollup + white-label + AI summaries for GHL)

---

## 0. Read this first — the strategic frame

This plan is **not** "build a GHL reporting tool." That market is being actively
cannibalized by HighLevel itself. Between LevelUp 2025 (Oct 14 2025) and Q1 2026,
GHL natively shipped sub-account dashboards + custom reports on **all** plans,
Meta ad widgets, custom-object widgets, and phase-2 attribution reporting. Those
wedges are **closed**.

This plan targets the **one wedge that survived adversarial verification**:

> **Agency-level cross-subaccount rollups + white-label client-facing dashboards +
> AI-generated narrative summaries — for agencies on GHL's $97 / $297 plans**
> (native rolled-up reporting is gated to the $497 Pro plan).

Treat this as a **fast, cheap, opportunistic bet with a 12–18 month window**, not a
durable SaaS. Build lean, monetize immediately, and watch GHL's changelog monthly.
If GHL ships native AI summaries + all-plan agency rollups, this product is done —
plan for that from day one (see §11 Kill Criteria).

**Why build it anyway:** demand is real (multi-year first-party complaints), WTP is
proven (Databox $79–399/mo, Whatagraph ~$286/mo, paid Looker connectors), the API
makes it genuinely buildable in ~2 weeks, and the HighLevel Marketplace gives free
distribution at **0% commission today**.

---

## 1. Pre-build validation gate (DO THIS BEFORE WRITING CODE — 1–2 days)

Two unknowns can kill the wedge. Verify both before committing the build week.

- [ ] **Gate A — Native AI summaries.** Does GHL's native reporting now generate
  AI/narrative report summaries? Check the latest dashboards docs + changelog and a
  live $297 account. If yes → the AI-summary differentiator is gone; re-scope.
- [ ] **Gate B — Native white-label export.** Does native reporting do branded /
  white-label PDF export and client-portal/share access (agency branding, no GHL
  logo)? If yes → the white-label differentiator weakens; lean harder on rollups.
- [ ] **Gate C — Demand sanity (parallel).** DM/interview 5 agencies running 5+
  sub-accounts on the $97/$297 plans. Ask: "How do you build one cross-client
  report today, and would you pay $29–79/mo to skip it?" Need ≥3 clear yeses.

**Decision rule:** proceed only if at least one of {AI summaries, white-label export}
is still missing natively AND you get ≥3 demand yeses. Otherwise pivot to the
QuickBooks Online reporting add-on (the stronger, more durable opportunity).

---

## 2. Target user & positioning

- **Buyer:** Small/mid marketing agencies running **5–50 sub-accounts** on GHL's
  $97 (Starter) or $297 (Unlimited) plans — i.e., the tier *below* the $497 Pro
  plan that unlocks native rolled-up reporting.
- **Job-to-be-done:** "Show me (and my clients) performance across all my
  sub-accounts in one branded report, without upgrading to the $497 plan or
  exporting spreadsheets from each account by hand."
- **Positioning line:** *"Agency-wide client reports for GoHighLevel — rolled up,
  white-labeled, and explained in plain English by AI. No $497 upgrade required."*
- **Wedge vs. competitors:**
  - *Native GHL reporting* → sub-account-scoped; rollups locked to $497 Pro; no AI
    narrative; export/white-label depth unconfirmed.
  - *Databox / Whatagraph* → generic BI, expensive ($79–399 / ~$286), not
    GHL-native, steep setup.
  - *Looker Studio connectors* → require building dashboards yourself; no AI; not
    turnkey white-label.
  - *Us* → GHL-native, turnkey, cheaper, AI summaries, one-click branded client
    report.

---

## 3. Scope

### In scope (MVP)
1. **Agency OAuth install** (one install → access all current/future sub-accounts).
2. **Cross-subaccount rollup**: aggregate core metrics across selected sub-accounts
   into one view (leads, opportunities/pipeline value, won revenue, appointments,
   calls, conversion rate).
3. **White-label client report**: per-sub-account branded report (agency logo,
   colors, custom domain optional) shareable via link + branded PDF export.
4. **AI narrative summary**: Claude-generated plain-English "what happened &
   what to do" paragraph per report, from the report's own numbers.
5. **Marketplace listing** with paid subscription + free trial.

### Explicitly OUT of scope (GHL already does these natively — do not rebuild)
- Single sub-account dashboards / custom reports (native, all plans).
- Meta/Facebook ad spend widgets (native).
- Custom-object/vertical widgets (native).
- Basic attribution top-stats (native phase-2).
- Building a general-purpose BI tool / arbitrary chart builder.

### Out of scope for MVP (later, if traction)
- Google Ads / TikTok ad blending, multi-touch attribution, scheduled email
  delivery, per-client logins/portal, anomaly alerts, benchmarking.

---

## 4. Architecture overview

```
                  ┌─────────────────────────────────────────────┐
   Agency admin   │  Next.js app (Vercel)                        │
   installs app   │                                              │
   in GHL  ─────► │  /api/oauth/callback  ── stores Company token │
                  │  /api/cron/sync       ── polls GHL per loc    │
   Views report   │  /dashboard, /report/[token] (white-label)    │
   in GHL iframe  │  /api/ai/summary      ── Claude Haiku 4.5     │
   or share link  │  /api/export/pdf      ── Playwright → PDF     │
                  └───────────────┬──────────────────────────────┘
                                  │
              ┌───────────────────┼────────────────────┐
              ▼                   ▼                     ▼
        Postgres (Neon)     GHL API v2 (OAuth)    Anthropic API
        - installs/tokens   - GET locations       - claude-haiku-4-5
        - cached metrics    - POST /oauth/         (report summaries)
        - branding             locationToken
        - report configs    - contacts/opps/
                               appts/calls
```

- **Embedded in GHL** as a Marketplace app (custom menu link / custom page) with
  SSO so agencies open it inside GHL. Also works standalone (share links/PDF).
- **Polling, not realtime.** Sync each sub-account on a schedule + on-demand when a
  report is opened; cache in Postgres. This respects rate limits and keeps reports
  fast.

---

## 5. Tech stack

| Concern | Choice | Why |
|---|---|---|
| App framework | **Next.js (App Router) + TypeScript** | Your stack; SSR dashboards + API routes for OAuth/cron in one deploy |
| Hosting | **Vercel** | You already use it; Cron jobs + serverless built in |
| DB | **Postgres (Neon or Supabase)** | Relational fit for installs/metrics; cheap free tier |
| ORM | **Drizzle** (or Prisma) | Typed schema, fast migrations |
| Charts | **Tremor** or **Recharts** | Prebuilt React dashboard components → speed |
| AI summaries | **Anthropic Claude API — `claude-haiku-4-5`** | Cheap, fast, plenty for templated data→prose; upgrade to `claude-sonnet-4-6` if quality needs it |
| PDF export | **Playwright** (render report route → PDF) | Reuses the white-label HTML; pixel-accurate |
| Token encryption | **libsodium / AES-GCM** via env key | OAuth tokens are secrets; encrypt at rest |
| Background sync | **Vercel Cron** (MVP) → Inngest/Trigger.dev (scale) | Simple first; queue later for many installs |

---

## 6. Data model (Postgres)

```
agencies            id, ghl_company_id, name, plan, created_at
oauth_tokens        id, agency_id, scope('company'|'location'),
                    ghl_location_id?, access_token(enc), refresh_token(enc),
                    expires_at
locations           id, agency_id, ghl_location_id, name, active,
                    last_synced_at
metrics_snapshot    id, location_id, period_start, period_end,
                    leads, opportunities, pipeline_value, won_revenue,
                    appointments, calls, conversion_rate, raw_json
branding            id, agency_id, logo_url, primary_color, accent_color,
                    custom_domain?, hide_our_brand(bool)
reports             id, agency_id, slug, title, location_ids[],
                    period, share_token, is_public, created_at
ai_summaries        id, report_id, period, summary_md, model, created_at
subscriptions       id, agency_id, ghl_plan_id, status, trial_ends_at
```

---

## 7. GHL integration spec (verified facts)

- **API version:** v2 only. API **v1 reached end-of-support 31 Dec 2025** — build
  on v2.
- **Auth:** OAuth 2.0 for Marketplace apps. Install at **agency (Company)** level →
  receive a **Company access token**.
- **Multi-subaccount access (the key endpoint):**
  `POST /oauth/locationToken` with `{ companyId, locationId }` → returns a
  **Location access token**. One agency install can mint tokens for all current and
  future sub-accounts. This is what makes the rollup feasible.
- **OAuth scopes to request (least privilege):** locations (read), contacts (read),
  opportunities (read), calendars/appointments (read), conversations/calls (read).
  Confirm exact scope strings in the developer portal at build time.
- **Rate limits (per Marketplace app, PER resource = per Location or Company):**
  - Burst: **100 requests / 10 seconds**
  - Daily: **200,000 requests / day**
  - Because limits are **per sub-account**, each client has an independent quota →
    generous for reporting. Still: batch, paginate, and cache.
  - Respect `X-RateLimit-*` response headers; back off on 429.
- **Token refresh:** store `refresh_token`, refresh before `expires_at`. Handle
  re-auth if an agency revokes.
- **Sync strategy:** nightly cron full sync per active location + on-demand refresh
  (debounced) when a report is opened and data is >N hours stale.

### Endpoints used (MVP)
- `GET /locations/` (enumerate sub-accounts under the agency)
- `GET /contacts/` (lead counts, sources)
- `GET /opportunities/` + pipelines (pipeline value, won revenue, stages)
- `GET /calendars/events` or appointments (booked, show/no-show if available)
- `GET /conversations/` or calls (volume)
- Derive conversion rate from the above. (Ad metrics are native in GHL — skip.)

---

## 8. Core features — build detail

### 8.1 Agency OAuth + install
- Register Marketplace app in the GHL Developer portal; set redirect to
  `/api/oauth/callback`.
- On callback: exchange code → Company token; store encrypted; enumerate locations;
  create `agencies` + `locations` rows.

### 8.2 Cross-subaccount rollup
- Background job iterates active locations → mints location token → fetches metrics
  → writes `metrics_snapshot`.
- Rollup view = SQL aggregation across selected `location_ids` for a period, with a
  per-sub-account breakdown table + an agency total row.

### 8.3 White-label client report
- `/report/[share_token]` renders a branded report (agency logo/colors, optional
  custom domain via Vercel domains). `hide_our_brand` removes any "powered by".
- Shareable read-only link; no client login in MVP (link = access).

### 8.4 AI narrative summary
- `/api/ai/summary`: send the report's structured numbers (current vs prior period)
  to `claude-haiku-4-5` with a tight prompt → 2–4 sentence "what changed + one
  recommendation" in the agency's tone. Cache per report+period in `ai_summaries`.
- Guardrails: pass only numbers (no PII), template the prompt, cap tokens, show the
  agency an edit box before sharing.

### 8.5 Branded PDF export
- Playwright loads the white-label report route with a `?print=1` flag → PDF →
  return/download. Reuses the HTML so there's one rendering path.

---

## 9. Two-week build plan (solo)

> A **weekend MVP** is possible if you cut to: OAuth + one rollup view + one
> hardcoded brand + AI summary, demoed on your own agency account. The full
> 2-week plan below makes it sellable.

**Day 0 (gate):** Run §1 validation. Stop or go.

**Week 1 — data pipeline + rollup**
- D1: Next.js + Vercel + Neon scaffold; Drizzle schema; env/secrets; token
  encryption helper.
- D2: GHL Marketplace app registration; OAuth flow end-to-end; store Company token;
  list locations.
- D3: `POST /oauth/locationToken` exchange; fetch contacts/opportunities for one
  sub-account; write `metrics_snapshot`.
- D4: Generalize fetch across all metrics (appts, calls, pipeline, won); rate-limit
  handling + pagination + 429 backoff.
- D5: Vercel Cron nightly sync; rollup SQL + a basic internal dashboard (Tremor).

**Week 2 — productize + ship**
- D6: White-label report route + branding settings (logo, colors).
- D7: Share tokens / public report links; per-sub-account breakdown + agency total.
- D8: Claude AI summary endpoint + caching + agency edit box.
- D9: Playwright branded PDF export.
- D10: Marketplace listing (copy, screenshots, scopes), pricing + trial config,
  Tipalti payout setup; SSO embed test inside GHL; smoke test on a real agency.

---

## 10. Monetization & pricing

- **Channel:** list on the **HighLevel Marketplace** (in-platform checkout via
  Tipalti, **0% commission currently**). Also allow direct Stripe signup as a hedge
  against future marketplace rev-share.
- **Model:** paid subscription + **14-day free trial** (Marketplace supports 1–90
  day trials and freemium).
- **Tiers (anchored below Databox/Whatagraph):**

| Tier | Price | Limits |
|---|---|---|
| Starter | **$29/mo** | up to 5 sub-accounts, white-label, AI summaries, PDF |
| Agency | **$79/mo** | up to 25 sub-accounts, custom domain |
| Scale | **$149/mo** | unlimited sub-accounts, priority sync |

- **WTP justification:** agencies already pay $79–399/mo (Databox) and ~$286/mo
  (Whatagraph) for reporting on top of GHL; $29–149 GHL-native is an easy yes, and
  it lets a $97/$297-plan agency avoid the $497 Pro upgrade (clear ROI story).
- **Unit economics:** marginal cost ≈ Neon + Vercel + a few cents of Claude Haiku
  per report. High margin; first revenue realistic within weeks of listing.

---

## 11. Risks & mitigations

| Risk | Severity | Mitigation |
|---|---|---|
| **Platform cannibalization** — GHL ships native all-plan rollups / AI summaries / white-label | **High (primary risk)** | Pick wedges GHL hasn't shipped; ship fast; watch changelog monthly; keep build cheap so payback is quick; diversify toward QBO if it closes |
| Marketplace introduces rev-share | Medium | Offer direct Stripe signup in parallel; don't depend solely on Marketplace billing |
| API rate limits on large agencies | Low–Med | Per-resource quotas are generous; cache + nightly sync + backoff; cap sync frequency |
| API v2 changes / scope changes | Medium | Pin to documented v2; monitor developer changelog; abstract the GHL client |
| Churn (agencies churn fast) | Medium | Make the white-label client report sticky (clients expect it weekly); annual discount |
| AI summary errors / hallucinated numbers | Medium | Feed only computed numbers; template prompt; human edit step before share |
| Single-platform dependency (whole business on GHL) | High | Keep codebase portable; the same rollup+white-label+AI pattern ports to other CRMs later |

---

## 12. Kill criteria (decide in advance)

Sunset or pivot if **any** of these hit:
- GHL ships native **all-plan** agency rollups **and** AI summaries **and** branded
  export (the whole wedge gone).
- < **5 paying agencies** after 8 weeks of Marketplace listing + active community
  posting.
- Marketplace introduces a rev-share that breaks the unit economics and direct
  Stripe can't offset it.
- Monthly churn > 10% after month 2 with no fixable cause.

---

## 13. Distribution / go-to-market

Ranked by expected conversion for this audience:
1. **HighLevel Marketplace listing** — built-in intent; agencies browse for apps.
2. **GHL agency Facebook groups** — where this audience actually lives; post the
   "agency-wide client report without the $497 upgrade" angle + demo video.
3. **r/gohighlevel** — answer reporting/rollup threads with a genuine solution.
4. **YouTube** — a short "one branded report across all your GHL clients" walkthrough;
   partner with GHL affiliate channels.
5. **Your own blog** — an SEO/AEO post: "How to build agency-wide GoHighLevel
   reports (and white-label them)" → soft funnel to the app.

---

## 14. Success metrics

- **Activation:** % of installs that connect ≥3 sub-accounts and generate 1 report.
- **Aha:** first white-label report shared / PDF exported within 24h of install.
- **Revenue:** trial→paid conversion; target ≥ 8–10% of active trials.
- **Retention:** weekly report-generation rate (proxy for stickiness).
- **North star:** number of *client-facing* reports shared per week (the habit that
  prevents churn).

---

## 15. Open questions to resolve during build

- Exact GHL OAuth scope strings + whether appointment **no-show** status is exposed
  via API (needed for the appointment-ROI angle).
- Does the Marketplace SSO embed allow the iframe/custom-page UX we want, or is a
  custom menu link the cleaner path?
- Custom-domain white-label: Vercel domains per agency vs. a single shared subdomain
  with path-based branding for MVP.
- Confirm `claude-haiku-4-5` summary quality on real agency data vs. stepping up to
  `claude-sonnet-4-6`.

---

## 16. Decisions log

- **2026-06-13** — Scope narrowed to agency-rollup + white-label + AI-summary wedge
  only; all natively-shipped GHL reporting features explicitly excluded. Rationale:
  platform cannibalization verified across LevelUp 2025 → Q1 2026.
- **2026-06-13** — Stack = Next.js/TS + Vercel + Neon + Claude Haiku 4.5. Rationale:
  matches builder's existing expertise; fastest path to a 2-week MVP.
- **2026-06-13** — Treat as a time-boxed opportunistic bet (12–18 mo window) with
  explicit kill criteria, not a durable SaaS. QBO reporting add-on remains the
  stronger primary opportunity if this wedge closes.

---

## 17. Sources (from validation research, 2026-06-13)

- GHL ideas portal — agency rollup pain: `ideas.gohighlevel.com/reporting/p/subaccount-reporting-from-agency-level`
- GHL ideas portal — ad reporting/attribution: `ideas.gohighlevel.com/ad-reporting-and-attribution`
- LevelUp 2025 native features: `gohighlevel.com/post/levelup-2025`
- Native dashboards/chart types doc: `help.gohighlevel.com/support/solutions/articles/155000006630`
- API v2 / EOL v1: `help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api`
- OAuth 2.0 + location token: `marketplace.gohighlevel.com/docs/Authorization/OAuth2.0/` and `.../TargetUserSubAccount/`
- Rate limits FAQ: `marketplace.gohighlevel.com/docs/oauth/Faqs/`
- Marketplace pricing/commission: `help.gohighlevel.com/support/solutions/articles/155000001217`
- WTP comparables: Databox (`databox.com/metric-library/data-source/gohighlevel`), Whatagraph, Coupler.io, TheDataStudents Looker connector

> Full verified research with vote counts is summarized in
> `~/.claude/.../memory/reference_nondev_product_opportunities.md`.
```
