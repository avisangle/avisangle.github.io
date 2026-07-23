# Posted Log - Harden Claude Code GitHub Actions: Prompt Injection Defense

## linkedin (socia) - 2026-04-25

- URN: urn:li:share:7453872149741678592
- Account: socia (URN: urn:li:person:qxL86YnJF9)
- Dry run: passed
- Body chars: 2026

## reddit - 2026-04-26

- r/devops: https://redd.it/1svvg0q (flair: Discussion, body 2486 chars)
- r/ClaudeAI: https://redd.it/1svvgac (flair: Claude Code, body 2476 chars)
- Note: initial r/ClaudeAI attempt failed with "Tutorial" (not a valid flair); changed to "Claude Code" and retried.
- Dry run: passed

## twitter - 2026-04-25 / 2026-04-26 (FAILED twice, not posted)

- Attempt 1 (2026-04-25): 403 Cloudflare WAF block (Ray ID: 9f1f64205a74c5da)
- Attempt 2 (2026-04-26): 403 Cloudflare WAF block (Ray ID: 9f222b7bdd056eca)
- Reproducible — block is tied to body payload, not auth or transient edge state
- Likely trigger: command-string substrings (`ps auxeww | base64`, `cat /proc/self/environ`, `env | base64`)
- Status: not posted; defang body or post manually
