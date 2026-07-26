// Serves the Trending Repo Scout dashboard at /projects/trending-scout.
//
// The dashboard is a standalone HTML document generated in the private
// `avisangle/trending-repo-scout` repo. That repo's CI writes the latest build
// to `dashboard.html` (co-located here) and commits it — which auto-deploys
// this site. So the page is a plain committed file: no runtime fetch, no token
// in Vercel, no Cloudflare Worker, exactly one public URL.
//
// It's served RAW (not through a page.tsx) because it's a full <!doctype>
// document with its own <head>/fonts/styles — wrapping it in the site layout
// would nest <html>/<head> and collide. `dashboard.html` sits under src/ (not
// public/) so it isn't independently reachable at a second URL.

import { readFileSync } from "fs"
import { join } from "path"

export const dynamic = "force-static" // prerender at build; refreshes when CI commits a new dashboard.html

export function GET() {
  try {
    const html = readFileSync(
      join(process.cwd(), "src/app/projects/trending-scout/dashboard.html"),
      "utf8",
    )
    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    })
  } catch {
    return new Response(FALLBACK, {
      status: 200,
      headers: { "content-type": "text/html; charset=utf-8" },
    })
  }
}

const FALLBACK = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Trending Repo Scout | Avinash Sangle</title>
<meta name="robots" content="noindex"/>
<style>
  html,body{margin:0;height:100%;background:#0a0d16;color:#eaeefb;
    font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
  .wrap{min-height:100%;display:flex;flex-direction:column;align-items:center;
    justify-content:center;text-align:center;gap:1rem;padding:2rem}
  a{color:#5fd0e6;text-decoration:none}a:hover{text-decoration:underline}
  .muted{color:#9aa4c4;max-width:32rem}
  nav{display:flex;gap:1.25rem;flex-wrap:wrap;justify-content:center;margin-top:.5rem}
</style></head>
<body><div class="wrap">
  <h1>Trending Repo Scout</h1>
  <p class="muted">The latest survey is being published. Refresh in a moment.</p>
  <nav>
    <a href="https://avinashsangle.com/">Home</a>
    <a href="https://avinashsangle.com/projects">Projects</a>
    <a href="https://avinashsangle.com/projects/trending-repo-scout">About this project</a>
    <a href="https://avinashsangle.com/contact">Contact</a>
  </nav>
</div></body></html>`
