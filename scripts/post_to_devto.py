"""Cross-post a blog article to Dev.to with canonical URL set to avinashsangle.com.

The script reads metadata + body from:
    src/app/blog/<slug>/social/devto-crosspost.md

Required fields above the `---BODY---` marker:
    TITLE: Article title
    DESCRIPTION: 1-2 sentence summary (max 250 chars)
    TAGS: claudecode, ai, agents, mcp   (comma-separated, max 4)
    CANONICAL_URL: https://avinashsangle.com/blog/<slug>
    COVER_IMAGE: https://avinashsangle.com/og-<slug>.png   (optional)
    SERIES: Optional series name
    PUBLISHED: true | false   (default false = saves as draft)

Body (after `---BODY---`) must be the full article in markdown.

Usage:
    python scripts/post_to_devto.py <blog-slug>
    python scripts/post_to_devto.py <blog-slug> --dry-run

Required env: DEVTO_API_KEY
"""

import argparse
import os
import sys
from pathlib import Path

import requests
from dotenv import load_dotenv

REPO_ROOT = Path(__file__).resolve().parent.parent
DEVTO_ARTICLES_URL = "https://dev.to/api/articles"


def parse_file(path: Path) -> dict:
    if not path.exists():
        sys.exit(f"File not found: {path}")
    raw = path.read_text(encoding="utf-8")

    lines = raw.splitlines()
    body_idx = None
    for idx, line in enumerate(lines):
        if line.strip() == "---BODY---":
            body_idx = idx
            break
    if body_idx is None:
        sys.exit(f"No standalone '---BODY---' line in {path}")

    header_text = "\n".join(lines[:body_idx])
    body = "\n".join(lines[body_idx + 1 :]).strip()

    fields: dict = {"published": False, "tags": []}
    for line in header_text.splitlines():
        line = line.strip()
        if not line or ":" not in line:
            continue
        key, _, value = line.partition(":")
        key = key.strip().upper()
        value = value.strip()
        if key == "TITLE":
            fields["title"] = value
        elif key == "DESCRIPTION":
            fields["description"] = value
        elif key == "TAGS":
            fields["tags"] = [t.strip() for t in value.split(",") if t.strip()][:4]
        elif key == "CANONICAL_URL":
            fields["canonical_url"] = value
        elif key == "COVER_IMAGE":
            fields["main_image"] = value
        elif key == "SERIES":
            fields["series"] = value
        elif key == "PUBLISHED":
            fields["published"] = value.lower() in ("true", "1", "yes")

    if not fields.get("title"):
        sys.exit("Missing required field: TITLE")
    if not body:
        sys.exit("Body is empty")

    fields["body_markdown"] = body
    return fields


def main() -> None:
    parser = argparse.ArgumentParser(description="Cross-post to Dev.to.")
    parser.add_argument("slug", nargs="?")
    parser.add_argument("--file")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    load_dotenv(REPO_ROOT / ".env")
    api_key = os.getenv("DEVTO_API_KEY")
    if not api_key:
        sys.exit("Missing DEVTO_API_KEY")

    if args.file:
        path = Path(args.file).resolve()
    elif args.slug:
        path = REPO_ROOT / "src" / "app" / "blog" / args.slug / "social" / "devto-crosspost.md"
    else:
        sys.exit("Provide a blog slug or --file")

    fields = parse_file(path)

    print(f"Source: {path}")
    print(f"Title: {fields['title']}")
    print(f"Tags: {fields.get('tags')}")
    print(f"Canonical: {fields.get('canonical_url', '(none)')}")
    print(f"Cover: {fields.get('main_image', '(none)')}")
    print(f"Published: {fields['published']}")
    print(f"Body: {len(fields['body_markdown'])} chars")

    if args.dry_run:
        print("\n--- DRY RUN ---\n")
        print(fields["body_markdown"][:500] + ("..." if len(fields["body_markdown"]) > 500 else ""))
        print("\n--- (not posted) ---")
        return

    resp = requests.post(
        DEVTO_ARTICLES_URL,
        headers={"api-key": api_key, "Content-Type": "application/json"},
        json={"article": fields},
        timeout=60,
    )
    if resp.status_code >= 400:
        sys.exit(f"Post failed ({resp.status_code}): {resp.text}")
    data = resp.json()
    print(f"\nPosted: {data.get('url', data)}")


if __name__ == "__main__":
    main()
