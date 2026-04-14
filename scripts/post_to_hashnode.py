"""Cross-post a blog article to Hashnode with canonical URL set to avinashsangle.com.

Reuses the same `devto-crosspost.md` file format - so a single source-of-truth
article body powers both Dev.to and Hashnode.

Required header fields (above ---BODY--- line):
    TITLE: Article title
    DESCRIPTION: 1-2 sentence summary
    TAGS: claudecode, ai, agents, mcp   (comma-separated)
    CANONICAL_URL: https://avinashsangle.com/blog/<slug>
    COVER_IMAGE: https://avinashsangle.com/og-<slug>.png  (optional)
    PUBLISHED: true | false  (default true)

Usage:
    python scripts/post_to_hashnode.py <blog-slug>
    python scripts/post_to_hashnode.py <blog-slug> --dry-run

Required env: HASHNODE_ACCESS_TOKEN, HASHNODE_PUBLICATION_ID
"""

import argparse
import os
import sys
from pathlib import Path

import requests
from dotenv import load_dotenv

REPO_ROOT = Path(__file__).resolve().parent.parent
HASHNODE_API = "https://gql.hashnode.com"
MIN_BODY_CHARS = 1000  # Hashnode requires at least 1000 characters


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

    fields: dict = {"published": True, "tags": []}
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
            fields["subtitle"] = value
        elif key == "TAGS":
            fields["tags"] = [t.strip() for t in value.split(",") if t.strip()][:5]
        elif key == "CANONICAL_URL":
            fields["canonical_url"] = value
        elif key == "COVER_IMAGE":
            fields["cover_image"] = value
        elif key == "PUBLISHED":
            fields["published"] = value.lower() in ("true", "1", "yes")

    if not fields.get("title"):
        sys.exit("Missing required field: TITLE")
    if not body:
        sys.exit("Body is empty")
    if len(body) < MIN_BODY_CHARS:
        sys.exit(f"Body is {len(body)} chars; Hashnode requires at least {MIN_BODY_CHARS}")

    fields["body_markdown"] = body
    return fields


def build_mutation_input(fields: dict, publication_id: str) -> dict:
    """Build the input payload for Hashnode's publishPost mutation."""
    payload = {
        "publicationId": publication_id,
        "title": fields["title"],
        "contentMarkdown": fields["body_markdown"],
        "tags": [{"slug": t.lower().replace(" ", "-"), "name": t} for t in fields.get("tags", [])],
    }
    if fields.get("subtitle"):
        payload["subtitle"] = fields["subtitle"]
    if fields.get("canonical_url"):
        payload["originalArticleURL"] = fields["canonical_url"]
    if fields.get("cover_image"):
        payload["coverImageOptions"] = {"coverImageURL": fields["cover_image"]}
    return payload


def main() -> None:
    parser = argparse.ArgumentParser(description="Cross-post to Hashnode.")
    parser.add_argument("slug", nargs="?")
    parser.add_argument("--file")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    load_dotenv(REPO_ROOT / ".env")
    token = os.getenv("HASHNODE_ACCESS_TOKEN")
    pub_id = os.getenv("HASHNODE_PUBLICATION_ID")
    if not token:
        sys.exit("Missing HASHNODE_ACCESS_TOKEN")
    if not pub_id:
        sys.exit("Missing HASHNODE_PUBLICATION_ID")

    if args.file:
        path = Path(args.file).resolve()
    elif args.slug:
        path = REPO_ROOT / "src" / "app" / "blog" / args.slug / "social" / "devto-crosspost.md"
    else:
        sys.exit("Provide a blog slug or --file")

    fields = parse_file(path)
    payload = build_mutation_input(fields, pub_id)

    print(f"Source: {path}")
    print(f"Title: {fields['title']}")
    print(f"Tags: {[t['name'] for t in payload['tags']]}")
    print(f"Canonical: {fields.get('canonical_url', '(none)')}")
    print(f"Cover: {fields.get('cover_image', '(none)')}")
    print(f"Body: {len(fields['body_markdown'])} chars")

    if args.dry_run:
        print("\n--- DRY RUN ---\n")
        print(fields["body_markdown"][:500] + ("..." if len(fields["body_markdown"]) > 500 else ""))
        print("\n--- (not posted) ---")
        return

    mutation = """
    mutation PublishPost($input: PublishPostInput!) {
      publishPost(input: $input) {
        post { id slug url }
      }
    }
    """
    resp = requests.post(
        HASHNODE_API,
        json={"query": mutation, "variables": {"input": payload}},
        headers={"Authorization": token, "Content-Type": "application/json"},
        timeout=60,
    )
    data = resp.json()
    if data.get("errors"):
        sys.exit(f"Post failed: {data['errors']}")
    post = data["data"]["publishPost"]["post"]
    print(f"\nPosted: {post['url']}")


if __name__ == "__main__":
    main()
