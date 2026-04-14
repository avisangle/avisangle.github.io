"""List available post flairs for one or more subreddits.

Use this during blog post generation to pick the right flair for each subreddit.

Usage:
    python scripts/list_reddit_flairs.py ClaudeAI LocalLLaMA
    python scripts/list_reddit_flairs.py programming

Output: plain list of flairs per subreddit, suitable for copying into a
reddit-post.md file as `FLAIR: <text>`.
"""

import os
import sys
from pathlib import Path

import praw
from dotenv import load_dotenv

REPO_ROOT = Path(__file__).resolve().parent.parent


def main() -> None:
    if len(sys.argv) < 2:
        sys.exit("Usage: python scripts/list_reddit_flairs.py <subreddit> [<subreddit> ...]")

    load_dotenv(REPO_ROOT / ".env")

    reddit = praw.Reddit(
        client_id=os.getenv("REDDIT_CLIENT_ID"),
        client_secret=os.getenv("REDDIT_CLIENT_SECRET"),
        username=os.getenv("REDDIT_USERNAME"),
        password=os.getenv("REDDIT_PASSWORD"),
        user_agent=os.getenv("REDDIT_USER_AGENT"),
    )

    for raw in sys.argv[1:]:
        sub_name = raw.lstrip("r/").lstrip("/")
        print(f"\n=== r/{sub_name} ===")
        try:
            flairs = list(reddit.subreddit(sub_name).flair.link_templates.user_selectable())
        except Exception as exc:
            print(f"  Error: {exc}")
            continue

        if not flairs:
            print("  (no user-selectable flairs)")
            continue

        for f in flairs:
            print(f"  - {f['flair_text']}")


if __name__ == "__main__":
    main()
