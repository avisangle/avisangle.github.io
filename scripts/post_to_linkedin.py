"""Post a long-form LinkedIn update from a blog post's social folder.

Usage:
    python scripts/post_to_linkedin.py <blog-slug>
    python scripts/post_to_linkedin.py --file <path-to-text-file>
    python scripts/post_to_linkedin.py <blog-slug> --dry-run

Reads from:
    src/app/blog/<slug>/social/linkedin-post.md

The file must contain a line with exactly `---BODY---`; everything after it
is the post body. Everything above is treated as metadata and ignored.

Required env vars (set by running scripts/linkedin_authorize.py first):
    LINKEDIN_ACCESS_TOKEN
    LINKEDIN_USER_URN
"""

import argparse
import os
import sys
from pathlib import Path

import requests
from dotenv import load_dotenv

REPO_ROOT = Path(__file__).resolve().parent.parent
UGC_URL = "https://api.linkedin.com/v2/ugcPosts"
MAX_POST_CHARS = 3000  # LinkedIn UGC post text limit


def load_body(path: Path) -> str:
    if not path.exists():
        sys.exit(f"Post file not found: {path}")
    raw = path.read_text(encoding="utf-8").strip()

    lines = raw.splitlines()
    for idx, line in enumerate(lines):
        if line.strip() == "---BODY---":
            raw = "\n".join(lines[idx + 1 :]).strip()
            break

    if not raw:
        sys.exit(f"Post body is empty: {path}")
    if len(raw) > MAX_POST_CHARS:
        sys.exit(f"Post is {len(raw)} chars, exceeds LinkedIn limit of {MAX_POST_CHARS}.")
    return raw


def resolve_path(slug: str | None, explicit_file: str | None) -> Path:
    if explicit_file:
        return Path(explicit_file).resolve()
    if not slug:
        sys.exit("Provide either a blog slug or --file.")
    return REPO_ROOT / "src" / "app" / "blog" / slug / "social" / "linkedin-post.md"


def post_to_linkedin(body: str, access_token: str, user_urn: str) -> str:
    payload = {
        "author": user_urn,
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {"text": body},
                "shareMediaCategory": "NONE",
            }
        },
        "visibility": {"com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"},
    }
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0",
    }
    resp = requests.post(UGC_URL, headers=headers, json=payload, timeout=30)
    if resp.status_code >= 400:
        sys.exit(f"Post failed ({resp.status_code}): {resp.text}")
    return resp.json().get("id", "(unknown)")


def resolve_account_env(account: str | None) -> tuple[str, str, str]:
    """Return (access_token, user_urn, account_label) for the selected account.

    Default (no --account flag) reads LINKEDIN_ACCESS_TOKEN and LINKEDIN_USER_URN.
    With --account <name>, reads LINKEDIN_ACCESS_TOKEN_<NAME> and LINKEDIN_USER_URN_<NAME>.
    """
    if account:
        suffix = "_" + account.upper().replace("-", "_")
        token_key = f"LINKEDIN_ACCESS_TOKEN{suffix}"
        urn_key = f"LINKEDIN_USER_URN{suffix}"
        label = account
    else:
        token_key = "LINKEDIN_ACCESS_TOKEN"
        urn_key = "LINKEDIN_USER_URN"
        label = "primary"

    access_token = os.getenv(token_key)
    user_urn = os.getenv(urn_key)
    if not access_token or not user_urn:
        sys.exit(
            f"Missing {token_key} or {urn_key} in .env.\n"
            f"Authorize this account first: "
            f"python scripts/linkedin_authorize.py"
            + (f" --account {account}" if account else "")
        )
    return access_token, user_urn, label


def main() -> None:
    parser = argparse.ArgumentParser(description="Post a long-form LinkedIn update.")
    parser.add_argument("slug", nargs="?", help="Blog slug under src/app/blog/")
    parser.add_argument("--file", help="Path to a text file containing the post body")
    parser.add_argument("--dry-run", action="store_true", help="Preview without posting")
    parser.add_argument(
        "--account",
        help="Named LinkedIn account (e.g. 'brand'). Defaults to the primary account "
             "stored under LINKEDIN_ACCESS_TOKEN / LINKEDIN_USER_URN.",
    )
    args = parser.parse_args()

    load_dotenv(REPO_ROOT / ".env")

    path = resolve_path(args.slug, args.file)
    body = load_body(path)

    print(f"Source: {path}")
    print(f"Length: {len(body)} chars")

    if args.dry_run:
        access_token, user_urn, label = resolve_account_env(args.account)
        print(f"Account: {label} (URN: {user_urn})")
        print("\n--- DRY RUN ---\n")
        print(body)
        print("\n--- (not posted) ---")
        return

    access_token, user_urn, label = resolve_account_env(args.account)
    print(f"Posting as account: {label} (URN: {user_urn})")

    post_id = post_to_linkedin(body, access_token, user_urn)
    print(f"Posted: {post_id}")


if __name__ == "__main__":
    main()
