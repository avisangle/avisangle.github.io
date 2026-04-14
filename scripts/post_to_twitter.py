"""Post a long-form tweet to Twitter/X from a blog post's social folder.

Usage:
    python scripts/post_to_twitter.py <blog-slug>
    python scripts/post_to_twitter.py --file <path-to-text-file>

Examples:
    python scripts/post_to_twitter.py claude-managed-agents
    python scripts/post_to_twitter.py --file src/app/blog/claude-managed-agents/social/twitter-post.md

The script reads the tweet body from:
    src/app/blog/<slug>/social/twitter-post.md

Requirements:
- Twitter Basic tier or higher (supports long-form tweets, up to 25,000 chars)
- .env file with: TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_TOKEN_SECRET
- App permissions must be set to "Read and Write"
"""

import argparse
import os
import sys
from pathlib import Path

import tweepy
from dotenv import load_dotenv

REPO_ROOT = Path(__file__).resolve().parent.parent
MAX_TWEET_CHARS = 25_000  # Basic tier limit


def load_tweet_body(path: Path) -> str:
    """Read the tweet body, stripping any markdown frontmatter/headers."""
    if not path.exists():
        sys.exit(f"Tweet file not found: {path}")

    raw = path.read_text(encoding="utf-8").strip()

    # Strip optional metadata header. Everything after a line containing only
    # "---BODY---" is treated as the tweet body. This lets the file start with
    # instructions/notes that won't be posted.
    lines = raw.splitlines()
    for idx, line in enumerate(lines):
        if line.strip() == "---BODY---":
            raw = "\n".join(lines[idx + 1 :]).strip()
            break

    if not raw:
        sys.exit(f"Tweet file is empty: {path}")

    if len(raw) > MAX_TWEET_CHARS:
        sys.exit(
            f"Tweet is {len(raw)} chars, exceeds Basic tier limit of {MAX_TWEET_CHARS}."
        )

    return raw


def resolve_tweet_path(slug: str | None, explicit_file: str | None) -> Path:
    if explicit_file:
        return Path(explicit_file).resolve()
    if not slug:
        sys.exit("Provide either a blog slug or --file.")
    return REPO_ROOT / "src" / "app" / "blog" / slug / "social" / "twitter-post.md"


def build_client() -> tweepy.Client:
    required = [
        "TWITTER_CONSUMER_KEY",
        "TWITTER_CONSUMER_SECRET",
        "TWITTER_ACCESS_TOKEN",
        "TWITTER_ACCESS_TOKEN_SECRET",
    ]
    missing = [var for var in required if not os.getenv(var)]
    if missing:
        sys.exit(f"Missing env vars: {', '.join(missing)}")

    return tweepy.Client(
        consumer_key=os.getenv("TWITTER_CONSUMER_KEY"),
        consumer_secret=os.getenv("TWITTER_CONSUMER_SECRET"),
        access_token=os.getenv("TWITTER_ACCESS_TOKEN"),
        access_token_secret=os.getenv("TWITTER_ACCESS_TOKEN_SECRET"),
    )


def main() -> None:
    parser = argparse.ArgumentParser(description="Post a long-form tweet from a blog's social folder.")
    parser.add_argument("slug", nargs="?", help="Blog slug (folder name under src/app/blog/)")
    parser.add_argument("--file", help="Path to a text file containing the tweet body (overrides slug)")
    parser.add_argument("--dry-run", action="store_true", help="Preview the tweet without posting")
    args = parser.parse_args()

    load_dotenv(REPO_ROOT / ".env")

    tweet_path = resolve_tweet_path(args.slug, args.file)
    body = load_tweet_body(tweet_path)

    print(f"Source: {tweet_path}")
    print(f"Length: {len(body)} chars")

    if args.dry_run:
        print("\n--- DRY RUN ---\n")
        print(body)
        print("\n--- (not posted) ---")
        return

    client = build_client()
    try:
        response = client.create_tweet(text=body)
        tweet_id = response.data["id"]
        print(f"Posted: https://x.com/avi_sangle/status/{tweet_id}")
    except tweepy.TweepyException as exc:
        sys.exit(f"Post failed: {exc}")


if __name__ == "__main__":
    main()
