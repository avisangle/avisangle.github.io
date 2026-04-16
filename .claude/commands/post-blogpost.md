---
description: Post a blog post's pre-generated social media draft to a specific platform. Validates, previews, confirms, then publishes. Use after /promote-blogpost has generated drafts.
arguments:
  - name: slug
    description: The blog post slug (e.g., "claude-code-cost-tracking"). Drafts must already exist at src/app/blog/[slug]/social/.
    required: true
  - name: platform
    description: The platform to post to (twitter, linkedin, reddit, devto, hashnode, hn). If omitted, show a menu.
    required: false
---

You are an operator publishing pre-drafted social media posts for avinashsangle.com. Your job is to run the right `post_to_*.py` script for a specific platform after validating the draft, showing a preview, and getting explicit user confirmation.

**CRITICAL:** Posting is a public, hard-to-reverse action. Never post without explicit user confirmation. If the user does not clearly say "yes" / "post" / "confirm", abort.

---

## Phase 1 - Pre-Flight Checks

1. **Verify the draft directory exists:** `src/app/blog/$1/social/` must have draft files. If not, stop and tell the user to run `/promote-blogpost $1` first.

2. **Check POSTED.md:** If `src/app/blog/$1/social/POSTED.md` already lists the requested platform as posted, warn the user and ask "Post again? (y/N)". If no, abort.

3. **Resolve platform argument:** `$2` is the platform. Accept these aliases:
   - `twitter`, `x`, `tw` → twitter
   - `linkedin`, `li` → linkedin
   - `reddit`, `rd` → reddit
   - `devto`, `dev` → devto
   - `hashnode`, `hn-blog` → hashnode
   - `hn`, `hackernews` → hacker news (manual)

4. **If `$2` is empty,** show this menu and ask which platform to post to:
   ```
   Which platform do you want to post to?

   [twitter]   src/app/blog/$1/social/twitter-post.md
   [linkedin]  src/app/blog/$1/social/linkedin-post.md
   [reddit]    src/app/blog/$1/social/reddit-post.md
   [devto]     src/app/blog/$1/social/devto-crosspost.md
   [hashnode]  src/app/blog/$1/social/devto-crosspost.md (shared file)
   [hn]        src/app/blog/$1/social/hn-submission.md (manual - no API)

   Type the platform name or "cancel".
   ```

5. **Verify the draft file exists** for the resolved platform. If not, stop and tell the user which file is missing.

---

## Phase 2 - Validate with Dry Run

Run the platform's script with `--dry-run` to validate format, length, and authentication.

| Platform | Command |
|---|---|
| twitter | `python scripts/post_to_twitter.py $1 --dry-run` (check if `--dry-run` is supported, else read the file manually) |
| linkedin | `python scripts/post_to_linkedin.py $1 --dry-run` |
| reddit | `python scripts/post_to_reddit.py $1 --dry-run` |
| devto | `python scripts/post_to_devto.py $1 --dry-run` |
| hashnode | `python scripts/post_to_hashnode.py $1 --dry-run` |
| hn | Skip dry-run (manual process) |

**IMPORTANT:** Always activate the venv first if it exists:
```bash
source venv/bin/activate && python scripts/post_to_<platform>.py $1 --dry-run
```

If the dry-run fails (auth error, format error, length over limit), stop and show the error. Do not proceed to posting.

---

## Phase 3 - Show Preview

Display the exact content that will be posted:

### For Twitter/LinkedIn
- Character count vs limit
- Full body text
- Link included (verify it's the correct canonical URL)

### For Reddit
- Each subreddit + title + flair + body preview
- Count of posts (e.g., "Posting to 2 subreddits: r/ClaudeAI, r/LocalLLaMA")

### For Dev.to/Hashnode
- Title
- Description
- Tags
- Canonical URL
- Cover image URL
- PUBLISHED flag (warn if `true` - this goes live immediately)
- First 300 chars of body

### For HN (manual)
- Title (verify ≤80 chars)
- URL
- First comment text
- Instructions: "Submit manually at https://news.ycombinator.com/submit"

---

## Phase 4 - Confirm

After showing the preview, ask EXPLICITLY:

```
This will post PUBLICLY to <platform>.
- Account: @<handle or workspace>
- Visibility: <public/draft>
- Reversible: <posts can be deleted but may be cached/indexed>

Post now? (yes/no)
```

Only proceed if the user says "yes", "y", "post", or "confirm". Any other response (including silence or ambiguity) → abort gracefully.

**Never assume confirmation.** "ok", "sure", "do it" → still ask for explicit "yes" since this is a high-blast-radius action.

---

## Phase 5 - Post

After explicit confirmation, run the real script (no `--dry-run`):

```bash
source venv/bin/activate && python scripts/post_to_<platform>.py $1
```

For Reddit multi-sub, the script handles posting to all configured subreddits. If the user wants to post to only one, use `--subreddit <name>`:
```bash
source venv/bin/activate && python scripts/post_to_reddit.py $1 --subreddit ClaudeAI
```

Capture the output, specifically the posted URL(s).

---

## Phase 6 - Record and Report

1. **Update `src/app/blog/$1/social/POSTED.md`** (create if missing). Append:
   ```markdown
   ## <platform> - YYYY-MM-DD HH:MM IST
   - URL: <posted URL>
   - Dry run: passed
   - Body chars: <N>
   ```

2. **Suggest follow-ups based on platform:**
   - **Twitter/LinkedIn/Reddit:** Suggest checking engagement in a few hours. Suggest running `/post-blogpost $1 <next-platform>` per the stagger schedule in `src/app/blog/$1/social/twitter-post.md` header.
   - **Dev.to/Hashnode:** If `PUBLISHED: false`, remind the user to go to the platform and manually hit "Publish" after previewing there.
   - **After all platforms are posted:** Suggest running `python scripts/request_indexing.py https://avinashsangle.com/blog/$1/` to ping Google Search Console.

3. **Final report format:**
   ```
   ### Posted to <platform>
   - URL: <URL>
   - Recorded in: src/app/blog/$1/social/POSTED.md

   ### Next step
   <platform-specific suggestion>
   ```

---

## Platform-Specific Notes

### Reddit
- If the script fails with a flair error, run `python scripts/list_reddit_flairs.py <subreddit>` to see valid flair IDs, then update the FLAIR_ID in reddit-post.md.
- Password auth requires "script"-type app. If auth fails, verify `.env` has REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_USERNAME, REDDIT_PASSWORD, REDDIT_USER_AGENT.

### Dev.to / Hashnode
- These default to `PUBLISHED: false` in drafts generated by `/promote-blogpost`. The script will create a draft on the platform - the user must log into Dev.to/Hashnode and hit "Publish" on the platform's UI.
- If the user wants to post live directly, they must edit the draft file and change `PUBLISHED: true` BEFORE running this command.
- After posting, give the user the platform URL so they can review formatting (GraphQL markdown conversion can break subtle things like emphasis or code block languages).

### Hacker News
- No API posting. This command can only display the title, URL, and first comment from `hn-submission.md`.
- Instruct the user to submit at https://news.ycombinator.com/submit
- After they submit, offer to record the URL in POSTED.md if they share it.

### Twitter/X
- Long-form tweets (Basic tier) up to 25,000 chars. No 280-char limit for this account.
- If the script fails with auth errors, check `.env` for TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_TOKEN_SECRET. App permissions must be "Read and Write".

---

## Quality Checklist (verify before posting)

- [ ] Draft file exists for the requested platform
- [ ] POSTED.md checked for duplicates (warned if already posted)
- [ ] Dry-run executed and passed
- [ ] Preview shown with character count, platform, visibility
- [ ] Explicit user confirmation received (actual "yes" / "post" / "confirm")
- [ ] venv activated before running Python
- [ ] Posted URL captured and reported
- [ ] POSTED.md updated with date, URL, and platform
- [ ] Follow-up suggestion provided (next platform or indexing)
