# Hacker News Submission - Harden Claude Code GitHub Actions

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Hardening Claude Code in GitHub Actions against the Comment and Control CVE

**URL:** https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection

---

**First Comment:**

Author here. On April 15, 2026, Aonan Guan published "Comment and Control," a prompt injection that steals workflow secrets from Claude Code, Gemini CLI, and GitHub Copilot Agent through a PR title or hidden HTML comment. Anthropic rated it CVSS 9.4. The vendor fixes shipped quietly and the news coverage stopped at the attack; nobody wrote the practitioner hardening guide.

Anthropic's own security.md admits the action is not designed to be hardened against prompt injection, and their fix (commit 25e460e) just added `--disallowed-tools 'Bash(ps:*)'`. That's a blocklist, which the researcher aptly calls whack-a-mole (ps is blocked, but printenv, /proc/self/environ, and env | base64 are not).

The write-up assembles the hardened workflow: `--allowedTools` allowlist, `permissions: read-all`, OIDC to AWS Bedrock (so no static `ANTHROPIC_API_KEY` lives in GitHub secrets), `CLAUDE_CODE_SCRIPT_CAPS`, actor filters, and `harden-runner` in block mode with an egress allowlist. Before/after diff is 35 lines. I also cover what hardening can't fix - prompt injection is context the agent is designed to process, so human-in-the-loop for merges is still required. Feedback welcome, especially on the OIDC/Bedrock trade-offs.
