"""Preflight check for Reddit subreddits - verifies the logged-in user can post.

Usage:
    python scripts/check_reddit_targets.py ClaudeAI LocalLLaMA LLMDevs AI_Agents

For each subreddit, reports:
    - Subscriber count
    - Whether your account can submit text posts
    - Whether flair is required
    - Submission rules (so you can spot karma/age/content restrictions)

The "can_post" result is what the Reddit API reports. Some subs enforce extra
rules (minimum karma, age) that only surface at submit time - this script
catches the common blockers but not all of them.
"""

import os
import sys
from pathlib import Path

import praw
import prawcore
from dotenv import load_dotenv

REPO_ROOT = Path(__file__).resolve().parent.parent


def check(reddit: praw.Reddit, sub_name: str) -> None:
    sub_name = sub_name.lstrip("r/").lstrip("/")
    print(f"\n=== r/{sub_name} ===")
    try:
        sub = reddit.subreddit(sub_name)
        subscribers = sub.subscribers
        submission_type = sub.submission_type  # 'any', 'link', 'self'
        flair_required = sub.link_flair_enabled and any(
            True for _ in sub.flair.link_templates.user_selectable()
        )

        print(f"  Subscribers:      {subscribers:,}")
        print(f"  Allowed posts:    {submission_type}  (self = text post ok)")
        print(f"  Flair required:   {'likely yes' if flair_required else 'no'}")

        # Fetch submission rules for karma/age/format restrictions
        try:
            rules = list(sub.rules)
            if rules:
                print("  Rules:")
                for i, rule in enumerate(rules[:5], 1):
                    desc = rule.short_name
                    print(f"    {i}. {desc}")
        except Exception:
            pass

    except prawcore.exceptions.Forbidden:
        print("  FORBIDDEN - private or quarantined sub, or banned user")
    except prawcore.exceptions.NotFound:
        print("  NOT FOUND - sub doesn't exist")
    except Exception as exc:
        print(f"  ERROR: {exc}")


def main() -> None:
    if len(sys.argv) < 2:
        sys.exit("Usage: python scripts/check_reddit_targets.py <subreddit> [<subreddit> ...]")

    load_dotenv(REPO_ROOT / ".env")
    reddit = praw.Reddit(
        client_id=os.getenv("REDDIT_CLIENT_ID"),
        client_secret=os.getenv("REDDIT_CLIENT_SECRET"),
        username=os.getenv("REDDIT_USERNAME"),
        password=os.getenv("REDDIT_PASSWORD"),
        user_agent=os.getenv("REDDIT_USER_AGENT"),
    )

    me = reddit.user.me()
    print(f"Checking eligibility as u/{me.name} "
          f"(link karma {me.link_karma}, comment karma {me.comment_karma})")

    for sub in sys.argv[1:]:
        check(reddit, sub)


if __name__ == "__main__":
    main()
