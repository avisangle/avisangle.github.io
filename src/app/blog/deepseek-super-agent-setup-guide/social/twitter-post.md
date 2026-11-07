# Twitter/X Long-form Post - How to Set Up DeepSeek Super-Agent (dsh-superagent) Safely

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py deepseek-super-agent-setup-guide --dry-run`

Note: kept free of shell-command strings on purpose. An earlier security post's tweet was
blocked twice by X's Cloudflare WAF over command substrings (see
hardening-ai-agents-cicd-prompt-injection/social/POSTED.md).

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
DeepSeek's Super-Agent hit 20,210 GitHub stars in its first week. Every setup guide I found walks through the install. None of them mention who can talk to it once it's running.

I read the docs and source at commit 8c32a9d. Here's what matters.

WHAT IT IS

A coding agent that runs as a service next to one GitHub repo. Someone on an allowed list mentions its GitHub account, it opens a Ticket, works in its own session and git worktree, and replies with a pull request. MIT licensed. DeepSeek calls it a research prototype, "not an official DeepSeek product."

WHAT THE HEADLINES GOT WRONG

It does not watch your team chat and act unprompted by default. Proactive work starts in observe mode, which only records what it would have done.

THE SETUP

- A second GitHub user account for the agent (not a GitHub App: it reads that account's notifications)
- A separate DeepSeek Harness profile
- Five install commands, then a local panel on port 3082
- Polls GitHub once a minute

THE GAP

The allowed list decides who can START a Ticket. It doesn't decide who can TALK to one.

Once the agent opens a PR, a comment from any human GitHub account reaches the working session. A comment can also resume a Ticket that already ended. No allowed-list check in that code path (src/core/intake.ts).

And every session runs with danger-full-access, hard-coded at src/app/sessions.ts line 152. No approval prompts. It can read your home directory.

Tencent's Zhuque Lab measured prompt injection on DeepSeek Harness in August: 5.6% full success across 14,560 runs, 16.6% for one technique. That's the base rate you're betting against.

WHAT I'D RUN

1. Separate OS user or VM, holding only the agent's credentials
2. Private repo first
3. Allowed list = you
4. Observe mode
5. Auto-merge off
6. Stop finished Tickets by hand so a stray comment can't revive them

For comparison, Claude Code Action ignores anyone without write access unless you opt into allowed_non_write_users, which Anthropic itself labels a significant security risk.

Full setup guide, the code excerpts, and the comparison table:

https://avinashsangle.com/blog/deepseek-super-agent-setup-guide

Follow @avi_sangle for more on running coding agents safely.
