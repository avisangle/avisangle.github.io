# D-SEO-03: Trending Scout dashboard served as a pushed static file

**Status:** Accepted (2026-07-26)

## Context

The Trending Repo Scout dashboard existed at two indexable URLs serving
byte-identical HTML with no canonical: `avinashsangle.com/projects/trending-scout`
(a Vercel rewrite proxying the origin) and
`trending-repo-scout.aavi-sangle.workers.dev` (the Cloudflare Worker origin).
That is duplicate content, and a generic `*.workers.dev` host could win the
canonicalisation and collect citations that should land on the brand domain.

Goal: exactly one public URL for the dashboard, on `avinashsangle.com`.

## Decision

Retire the Cloudflare Worker. The scout's CI writes its generated dashboard into
this repo as a committed file (`src/app/projects/trending-scout/dashboard.html`)
and commits it, which auto-deploys the site. A `force-static` Route Handler
(`src/app/projects/trending-scout/route.ts`) reads that file at build and serves
it raw.

- **Push, not pull.** The scout's GitHub Action clones this repo, overwrites
  `dashboard.html`, and pushes (guarded by `BIO_REPO_TOKEN`, skipped if unset).
- Served raw (not via `page.tsx`) because the dashboard is a full `<!doctype>`
  document with its own `<head>`/fonts/styles — wrapping it in the site layout
  would nest `<html>`/`<head>` and collide.
- `dashboard.html` lives under `src/` (not `public/`) so it is not
  independently reachable at a second URL — the Route Handler is the only path.

## Alternatives rejected

**Keep the Worker proxy + add a canonical.** Fixes the SEO signal but leaves the
`workers.dev` URL live as a second public page. The requirement was to remove it,
not mask it.

**Pull: bio fetches the file from the scout repo via the GitHub Contents API on
an ISR timer.** Also valid and was built first. Rejected once we confirmed the
scout repo is **private** — pull then needs a read token *in Vercel* and a
runtime fetch on every revalidation, and the "refresh" is a timer to reason
about. Push is a plain committed static file: no runtime fetch, no Vercel token,
and the page updates *exactly when* the scout publishes (event-driven), which is
a simpler and more robust model. Both need a PAT, so pull's credential advantage
was moot.

**Native ISR page rendering the scout's JSON.** Best integration, but means
rebuilding the whole dashboard as React — large effort for a page that is already
a finished, self-contained document.

## Trade-offs accepted

- **A write credential to this (public) repo** lives in the scout's Actions
  secrets (`BIO_REPO_TOKEN`, fine-grained, Contents:write on this repo only).
  Higher blast radius than a read token, but scoped to one repo; the dashboard it
  publishes is public anyway.
- **A daily automated commit + redeploy** here per scout run. Accepted: it's an
  audit trail, and the commit is idempotent (skipped when the dashboard is
  unchanged).
- Publishing depends on GitHub Actions on the **private** scout repo (billed
  minutes). The added push step is ~seconds; the cost is the pre-existing fetch
  pipeline, unchanged by this decision.

## Sequencing constraint (invisible from the code)

An initial `dashboard.html` is committed here so the page works on first deploy
without waiting for a scout run. `BIO_REPO_TOKEN` must exist in the scout repo
before its CI can publish updates; until then the scout skips the publish step
cleanly and the page serves the seeded copy. Deleting the Cloudflare Worker is a
manual step that removes the `workers.dev` URL entirely.
