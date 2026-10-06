# LinkedIn Post - Apple's Full Disk Access Change: Audit Your AI Coding Agent

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py macos-full-disk-access-ai-coding-agents --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Apple said last week that macOS Full Disk Access is about to get harder to grant, and the stated reason is AI agents. The announcement came with no date, no OS version and no mechanism.

Instead of guessing, I ran a few reads from the shell my coding agent uses on my Mac, launched from iTerm2 without Full Disk Access.

What I found:

- Messages, Safari and Mail folders: all refused with "Operation not permitted"
- The TCC database that records the grants: also refused
- My ~/.ssh folder: listed without a problem

That last result changed how I think about the announcement. Full Disk Access is the loudest permission, but it isn't the one protecting my SSH keys. An agent running as my user can already read my home folder, my .env files and my cloud credentials.

The other detail that surprised me: Claude Code doesn't ask for Full Disk Access at all. It runs as a child of the terminal, so it inherits whatever the terminal was granted years ago. And Anthropic's sandbox, which does limit reads, is off by default. Even when it's on, the built-in Read tool runs outside it.

I wrote up a 15-minute audit: revoke the grant from your terminal, turn on the sandbox, deny reads outside the project, and protect credentials. It also says plainly what Apple hasn't told us yet, and I left out the claims I couldn't trace to Apple.

One limit on my test: I didn't try it with the grant switched on, because that would hand an agent session exactly what the post warns about.

https://avinashsangle.com/blog/macos-full-disk-access-ai-coding-agents

If you run coding agents on a Mac, which apps have Full Disk Access on yours right now? I'd bet at least one is a grant you forgot you made.

#ClaudeCode #macOS #AIAgents #DevSecOps
