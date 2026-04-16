"""Request Google to re-index a specific URL via the Indexing API.

Note: The Indexing API officially supports only JobPosting and BroadcastEvent
schema types. For general web pages, Google recommends using the URL Inspection
API or submitting via Search Console UI.

This script uses the URL Inspection API to check indexing status and provides
instructions for requesting re-indexing.

Usage:
    python scripts/request_indexing.py <url>
    python scripts/request_indexing.py --all-blog-posts
    python scripts/request_indexing.py --ping-sitemap

Examples:
    python scripts/request_indexing.py https://avinashsangle.com/blog/gemma-4-models-guide/
    python scripts/request_indexing.py --ping-sitemap
"""

import argparse
import json
import sys
from pathlib import Path

import requests
from google.oauth2 import service_account
from googleapiclient.discovery import build

REPO_ROOT = Path(__file__).resolve().parent.parent
CREDS_PATH = REPO_ROOT / "scripts" / "credentials" / "gsc-service-account.json"
SITE_URL = "sc-domain:avinashsangle.com"
BASE_URL = "https://avinashsangle.com"
SCOPES = ["https://www.googleapis.com/auth/webmasters"]
SITEMAP_URL = f"{BASE_URL}/sitemap.xml"


def get_service():
    if not CREDS_PATH.exists():
        sys.exit(f"Credentials not found: {CREDS_PATH}")
    creds = service_account.Credentials.from_service_account_file(
        str(CREDS_PATH), scopes=SCOPES
    )
    return build("searchconsole", "v1", credentials=creds)


def inspect_url(service, url: str) -> None:
    """Check the indexing status of a URL."""
    try:
        result = service.urlInspection().index().inspect(
            body={
                "inspectionUrl": url,
                "siteUrl": SITE_URL,
            }
        ).execute()

        inspection = result.get("inspectionResult", {})
        index_status = inspection.get("indexStatusResult", {})

        verdict = index_status.get("verdict", "UNKNOWN")
        coverage = index_status.get("coverageState", "UNKNOWN")
        crawled = index_status.get("lastCrawlTime", "never")
        indexing = index_status.get("indexingState", "UNKNOWN")

        print(f"\n  URL: {url}")
        print(f"  Verdict:        {verdict}")
        print(f"  Coverage:       {coverage}")
        print(f"  Indexing state: {indexing}")
        print(f"  Last crawled:   {crawled}")

        if verdict == "PASS":
            print("  Status: INDEXED - page is in Google's index")
        elif verdict == "NEUTRAL":
            print("  Status: NOT INDEXED or excluded by robots/canonical")
        else:
            print(f"  Status: {verdict} - may need attention")

    except Exception as exc:
        print(f"\n  URL: {url}")
        print(f"  Inspection failed: {exc}")


def ping_sitemap() -> None:
    """Ping Google to re-process the sitemap."""
    ping_url = f"https://www.google.com/ping?sitemap={SITEMAP_URL}"
    try:
        resp = requests.get(ping_url, timeout=30)
        if resp.status_code == 200:
            print(f"  Sitemap ping successful: {SITEMAP_URL}")
            print("  Google will re-process the sitemap and discover updated pages.")
        else:
            print(f"  Sitemap ping returned {resp.status_code}")
    except Exception as exc:
        print(f"  Sitemap ping failed: {exc}")


def get_blog_urls() -> list[str]:
    """Discover all blog post URLs from the blog directory."""
    blog_dir = REPO_ROOT / "src" / "app" / "blog"
    urls = []
    for child in sorted(blog_dir.iterdir()):
        if child.is_dir() and (child / "page.tsx").exists():
            urls.append(f"{BASE_URL}/blog/{child.name}")
    return urls


def main() -> None:
    parser = argparse.ArgumentParser(description="Check indexing status and ping sitemap.")
    parser.add_argument("url", nargs="?", help="URL to inspect")
    parser.add_argument("--all-blog-posts", action="store_true", help="Inspect all blog post URLs")
    parser.add_argument("--ping-sitemap", action="store_true", help="Ping Google sitemap")
    args = parser.parse_args()

    if args.ping_sitemap:
        ping_sitemap()
        if not args.url and not args.all_blog_posts:
            return

    service = get_service()

    if args.all_blog_posts:
        urls = get_blog_urls()
        print(f"Inspecting {len(urls)} blog posts:\n")
        for url in urls:
            inspect_url(service, url)
        print()
        print("To request re-indexing, visit Google Search Console:")
        print("  https://search.google.com/search-console")
        print("  Paste each URL in the top bar -> click 'Request Indexing'")
        return

    if args.url:
        inspect_url(service, args.url)
        print()
        print("To request re-indexing:")
        print("  1. Go to https://search.google.com/search-console")
        print(f"  2. Paste: {args.url}")
        print("  3. Click 'Request Indexing'")
        return

    parser.print_help()


if __name__ == "__main__":
    main()
