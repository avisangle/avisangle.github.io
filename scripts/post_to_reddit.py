"""Post a blog promotion to Reddit subreddits.

Reads from:
    src/app/blog/<slug>/social/reddit-post.md

The file supports multiple posts separated by `---POST---` blocks. Each block
must contain front-matter-style fields:

    SUBREDDIT: ClaudeAI
    TITLE: Your post title here
    FLAIR: Comparison          (optional - required by some subs)
    FLAIR_ID: <template-id>    (optional - use instead of FLAIR for exact match)
    ---BODY---
    Post body (markdown supported)

Usage:
    python scripts/post_to_reddit.py <blog-slug>
    python scripts/post_to_reddit.py <blog-slug> --dry-run
    python scripts/post_to_reddit.py <blog-slug> --subreddit ClaudeAI   # post to just one

Required env vars:
    REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_USERNAME, REDDIT_PASSWORD,
    REDDIT_USER_AGENT

Note: password auth only works for apps registered as "script" type on Reddit.
"""

import argparse
import os
import sys
import time
from pathlib import Path
from typing import List, Tuple

import praw
from dotenv import load_dotenv

REPO_ROOT = Path(__file__).resolve().parent.parent
POST_SEPARATOR = "---POST---"
BODY_MARKER = "---BODY---"


def parse_posts(raw: str) -> List[dict]:
    """Return list of post dicts (subreddit, title, body, flair, flair_id) from the markdown file."""
    # Split on POST_SEPARATOR (a line containing only the marker)
    blocks: list[str] = []
    current: list[str] = []
    for line in raw.splitlines():
        if line.strip() == POST_SEPARATOR:
            if current:
                blocks.append("\n".join(current).strip())
                current = []
        else:
            current.append(line)
    if current:
        blocks.append("\n".join(current).strip())

    posts = []
    for block in blocks:
        if not block or BODY_MARKER not in block:
            continue

        # Split header from body
        header, _, body = block.partition(BODY_MARKER)
        body = body.strip()

        # Parse header fields
        fields = {"subreddit": "", "title": "", "flair": "", "flair_id": ""}
        for line in header.splitlines():
            line = line.strip()
            for key in ("SUBREDDIT", "TITLE", "FLAIR", "FLAIR_ID"):
                if line.upper().startswith(f"{key}:"):
                    fields[key.lower()] = line.split(":", 1)[1].strip()
                    break

        if fields["subreddit"] and fields["title"] and body:
            fields["body"] = body
            posts.append(fields)

    return posts


def resolve_path(slug: str | None, explicit_file: str | None) -> Path:
    if explicit_file:
        return Path(explicit_file).resolve()
    if not slug:
        sys.exit("Provide either a blog slug or --file.")
    return REPO_ROOT / "src" / "app" / "blog" / slug / "social" / "reddit-post.md"


def build_reddit_client() -> praw.Reddit:
    required = ["REDDIT_CLIENT_ID", "REDDIT_CLIENT_SECRET", "REDDIT_USERNAME", "REDDIT_PASSWORD", "REDDIT_USER_AGENT"]
    missing = [v for v in required if not os.getenv(v)]
    if missing:
        sys.exit(f"Missing env vars: {', '.join(missing)}")

    return praw.Reddit(
        client_id=os.getenv("REDDIT_CLIENT_ID"),
        client_secret=os.getenv("REDDIT_CLIENT_SECRET"),
        username=os.getenv("REDDIT_USERNAME"),
        password=os.getenv("REDDIT_PASSWORD"),
        user_agent=os.getenv("REDDIT_USER_AGENT"),
    )


def main() -> None:
    parser = argparse.ArgumentParser(description="Post to Reddit from a blog's social folder.")
    parser.add_argument("slug", nargs="?")
    parser.add_argument("--file")
    parser.add_argument("--subreddit", help="Only post to this subreddit (match is case-insensitive)")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    load_dotenv(REPO_ROOT / ".env")

    path = resolve_path(args.slug, args.file)
    if not path.exists():
        sys.exit(f"Post file not found: {path}")

    posts = parse_posts(path.read_text(encoding="utf-8"))
    if not posts:
        sys.exit(
            f"No valid posts parsed from {path}. "
            f"Each post block must include SUBREDDIT:, TITLE:, and a {BODY_MARKER} line."
        )

    if args.subreddit:
        target = args.subreddit.lower().lstrip("r/").lstrip("/")
        posts = [p for p in posts if p["subreddit"].lower().lstrip("r/").lstrip("/") == target]
        if not posts:
            sys.exit(f"No posts match subreddit '{args.subreddit}'.")

    print(f"Source: {path}")
    print(f"Found {len(posts)} post(s) to publish.\n")

    if args.dry_run:
        for p in posts:
            flair_info = f" [flair: {p['flair'] or p['flair_id'] or 'none'}]"
            print(f"--- DRY RUN: r/{p['subreddit']}{flair_info} ---")
            print(f"Title: {p['title']}")
            print(f"Body ({len(p['body'])} chars):\n{p['body']}\n")
        return

    reddit = build_reddit_client()

    # Verify auth
    try:
        me = reddit.user.me()
        print(f"Authenticated as u/{me}")
    except Exception as exc:
        sys.exit(f"Reddit auth failed: {exc}\n"
                 f"Likely cause: the app is not a 'script' type. Web apps need OAuth flow.")

    posted = []
    for i, p in enumerate(posts):
        sub, title, body = p["subreddit"], p["title"], p["body"]
        try:
            flair_id = p.get("flair_id") or None
            # If user gave flair text (not id), look up the template id
            if not flair_id and p.get("flair"):
                wanted = p["flair"].strip().lower()
                for tmpl in reddit.subreddit(sub).flair.link_templates.user_selectable():
                    if tmpl["flair_text"].strip().lower() == wanted:
                        flair_id = tmpl["flair_template_id"]
                        break
                if not flair_id:
                    print(f"WARNING r/{sub}: flair '{p['flair']}' not found, posting without flair")

            submission = reddit.subreddit(sub).submit(
                title=title, selftext=body, flair_id=flair_id
            )
            print(f"Posted to r/{sub}: {submission.shortlink}")
            posted.append(submission.shortlink)
            if i < len(posts) - 1:
                print("Waiting 30s before next post (Reddit anti-spam)...")
                time.sleep(30)
        except Exception as exc:
            print(f"FAILED r/{sub}: {exc}")

    print(f"\nDone. {len(posted)}/{len(posts)} posts published.")


if __name__ == "__main__":
    main()
