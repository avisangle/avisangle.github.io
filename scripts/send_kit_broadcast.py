"""Create a Kit (ConvertKit) broadcast announcing a new blog post.

Always creates a DRAFT. Kit treats a broadcast with no `send_at` as a draft, so
nothing is mailed until you open Kit and click send. This is deliberate: a sent
email cannot be recalled the way a published post can be edited.

Post metadata is read from src/data/posts.ts, the single source of truth
(see docs/decisions/D-SEO-01), so the email can never disagree with the site.

Uses the v3 API (api.convertkit.com). The account's credentials are v3; the v4
endpoint rejects them.

Usage:
    python scripts/send_kit_broadcast.py <blog-slug>
    python scripts/send_kit_broadcast.py <blog-slug> --dry-run
    python scripts/send_kit_broadcast.py <blog-slug> --force   # bypass duplicate check

Required env: KIT_API_SECRET
"""

import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

from dotenv import load_dotenv

REPO_ROOT = Path(__file__).resolve().parent.parent
POSTS_TS = REPO_ROOT / "src" / "data" / "posts.ts"
SITE_URL = "https://avinashsangle.com"
API_BASE = "https://api.convertkit.com/v3"


def parse_post(slug: str) -> dict:
    """Pull one post's fields out of the posts.ts registry."""
    source = POSTS_TS.read_text(encoding="utf-8")

    # Isolate the object literal for this slug: from its `slug:` line to the
    # closing brace of that entry.
    start = source.find(f"slug: '{slug}'")
    if start == -1:
        sys.exit(f"Slug '{slug}' not found in {POSTS_TS.relative_to(REPO_ROOT)}")
    block = source[start : source.find("\n  },", start)]

    def field(name: str) -> str | None:
        # Values are single-quoted and may wrap across lines.
        match = re.search(rf"{name}:\s*'((?:[^'\\]|\\.)*)'", block, re.DOTALL)
        if not match:
            return None
        return re.sub(r"\s+", " ", match.group(1)).replace("\\'", "'").strip()

    title = field("title")
    description = field("description")
    if not title or not description:
        sys.exit(f"Could not parse title/description for '{slug}'")

    return {
        "slug": slug,
        "title": title,
        "description": description,
        "date_published": field("datePublished"),
        "read_time": field("readTime"),
    }


def load_intro(slug: str) -> str | None:
    """Optional hand-written email body, mirroring the other social drafts.

    Without it the email is a title plus a one-line description, which reads as
    thin, link-heavy content to spam filters. A few real paragraphs fix that,
    but they have to be written rather than generated as filler.
    """
    path = REPO_ROOT / "src" / "app" / "blog" / slug / "social" / "newsletter.md"
    if not path.exists():
        return None

    paragraphs = [p.strip() for p in path.read_text(encoding="utf-8").split("\n\n") if p.strip()]
    if not paragraphs:
        return None

    def escape(text: str) -> str:
        return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

    return "".join(f"<p>{escape(' '.join(p.split()))}</p>" for p in paragraphs)


def build_content(post: dict) -> str:
    """Kit appends the unsubscribe footer itself.

    One link only: three links to the same URL in a ~50-word email is a
    high link-to-text ratio, which spam filters weight against.
    """
    url = f"{SITE_URL}/blog/{post['slug']}"
    meta = f" &middot; {post['read_time']}" if post["read_time"] else ""
    body = load_intro(post["slug"]) or f"<p>{post['description']}</p>"

    return (
        f"<h2>{post['title']}</h2>"
        f"{body}"
        f'<p><a href="{url}">Read the full post</a>{meta}</p>'
    )


def api(method: str, path: str, secret: str, payload: dict | None = None) -> dict:
    url = f"{API_BASE}{path}"
    data = None
    headers = {"Accept": "application/json"}

    if method == "GET":
        url += f"?api_secret={urllib.parse.quote(secret)}"
    else:
        body = dict(payload or {}, api_secret=secret)
        data = json.dumps(body).encode()
        headers["Content-Type"] = "application/json"

    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            return json.loads(response.read())
    except urllib.error.HTTPError as exc:
        sys.exit(f"Kit API {exc.code}: {exc.read()[:400].decode()}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Draft a Kit broadcast for a blog post.")
    parser.add_argument("slug")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument(
        "--force", action="store_true", help="create even if a broadcast with this subject exists"
    )
    args = parser.parse_args()

    load_dotenv(REPO_ROOT / ".env")
    secret = os.getenv("KIT_API_SECRET")
    if not secret:
        sys.exit("Missing KIT_API_SECRET")
    from_email = os.getenv("KIT_FROM_EMAIL")

    post = parse_post(args.slug)
    content = build_content(post)
    preview = post["description"][:150]

    print(f"Subject:  {post['title']}")
    print(f"URL:      {SITE_URL}/blog/{post['slug']}")
    print(f"Preview:  {preview}")
    print(f"Content:  {len(content)} chars HTML")

    if args.dry_run:
        print("\n--dry-run: nothing sent to Kit.\n")
        print(content)
        return

    # Guard against mailing the same post twice.
    existing = api("GET", "/broadcasts", secret).get("broadcasts", [])
    clash = [b for b in existing if (b.get("subject") or "").strip() == post["title"]]
    if clash and not args.force:
        sys.exit(
            f"A broadcast with this subject already exists (id {clash[0]['id']}). "
            "Use --force to create another."
        )

    payload = {
        "subject": post["title"],
        "content": content,
        "description": f"New post: {post['slug']}",
        "preview_text": preview,
        "public": False,
        "thumbnail_url": f"{SITE_URL}/og-{post['slug']}.png",
        # No send_at -> Kit saves this as a draft. Do not add one here.
    }
    # Kit 422s with "Email address not found" unless this address is a confirmed
    # sender on the account, so only send it when configured.
    if from_email:
        payload["email_address"] = from_email

    result = api("POST", "/broadcasts", secret, payload)

    broadcast = result.get("broadcast", result)
    print(f"\nDraft created (id {broadcast.get('id')}).")

    # A From address off our own domain defeats the DKIM/SPF alignment that makes
    # these emails deliverable, and Kit silently falls back to the account default.
    sender = broadcast.get("email_address") or ""
    if not sender.endswith("@avinashsangle.com"):
        print(
            f"\nWARNING: sender is {sender!r}, not an @avinashsangle.com address.\n"
            "  DKIM/SPF align to avinashsangle.com, so this draft will fail DMARC\n"
            "  alignment and is likely to land in spam. Add and confirm the address\n"
            "  in Kit (Settings -> Email addresses -> Add from address), set\n"
            "  KIT_FROM_EMAIL in .env, then re-run. Do not send this draft as-is."
        )
    else:
        print(f"Sender: {sender} — aligned with your DKIM/SPF setup.")

    print("Review and send it from Kit -> Broadcasts. Nothing has been mailed.")


if __name__ == "__main__":
    main()
