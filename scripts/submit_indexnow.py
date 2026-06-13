"""Submit URLs to IndexNow for instant indexing by Bing, DuckDuckGo, Yandex, etc.

IndexNow notifies participating search engines the moment content changes, instead
of waiting for a crawl. Bing powers Copilot + ChatGPT search, so this is the fastest
path to getting new posts into the AI-citation index.

The key (589c30d54f9f3681d19765a4f3dd71b6) is intentionally public: it is verified by
fetching https://avinashsangle.com/<key>.txt, so it is committed in public/, not a secret.

Usage:
    python scripts/submit_indexnow.py <url> [<url> ...]   # submit specific URLs
    python scripts/submit_indexnow.py --all               # submit every URL in sitemap.xml
    python scripts/submit_indexnow.py --all --dry-run     # show what would be sent

Examples:
    python scripts/submit_indexnow.py https://avinashsangle.com/blog/claude-md-guide/
    python scripts/submit_indexnow.py --all
"""

import argparse
import json
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SITEMAP_PATH = REPO_ROOT / "public" / "sitemap.xml"
KEY = "589c30d54f9f3681d19765a4f3dd71b6"
HOST = "avinashsangle.com"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
ENDPOINT = "https://api.indexnow.org/indexnow"


def urls_from_sitemap() -> list:
    # Regex extraction over the first-party sitemap; avoids an XML parser (no XXE surface).
    if not SITEMAP_PATH.exists():
        sys.exit(f"Sitemap not found: {SITEMAP_PATH}")
    return [m.strip() for m in re.findall(r"<loc>(.*?)</loc>", SITEMAP_PATH.read_text(), re.S)]


def submit(urls: list, dry_run: bool) -> None:
    if not urls:
        sys.exit("No URLs to submit.")
    bad = [u for u in urls if not u.startswith(f"https://{HOST}")]
    if bad:
        sys.exit(f"Refusing: these URLs are not on {HOST}: {bad}")

    payload = {"host": HOST, "key": KEY, "keyLocation": KEY_LOCATION, "urlList": urls}

    if dry_run:
        print(f"DRY RUN — would POST {len(urls)} URL(s) to {ENDPOINT}:")
        for u in urls:
            print(f"  {u}")
        return

    req = urllib.request.Request(
        ENDPOINT,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            code = resp.status
    except urllib.error.HTTPError as exc:
        # IndexNow uses status codes as the response; 200/202 are success.
        code = exc.code
        if code not in (200, 202):
            body = exc.read().decode("utf-8", "replace")[:300]
            sys.exit(f"IndexNow rejected submission ({code}): {body}")

    meaning = {200: "OK", 202: "Accepted (key validation pending)"}.get(code, str(code))
    print(f"Submitted {len(urls)} URL(s) — IndexNow returned {code} ({meaning}).")
    for u in urls:
        print(f"  {u}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Submit URLs to IndexNow (Bing/DuckDuckGo/Yandex).")
    parser.add_argument("urls", nargs="*", help="Specific URLs to submit")
    parser.add_argument("--all", action="store_true", help="Submit every URL in public/sitemap.xml")
    parser.add_argument("--dry-run", action="store_true", help="Print URLs without submitting")
    args = parser.parse_args()

    urls = urls_from_sitemap() if args.all else args.urls
    if not urls:
        parser.error("Provide URLs or use --all")
    submit(urls, args.dry_run)


if __name__ == "__main__":
    main()
