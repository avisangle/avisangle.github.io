# Hacker News Submission - Apple's Full Disk Access Change: Audit Your AI Coding Agent

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Apple's Full Disk Access change and what your terminal grants AI agents

**URL:** https://avinashsangle.com/blog/macos-full-disk-access-ai-coding-agents

---

**First Comment:**

Author here. Apple said on Oct 2 that it will make macOS Full Disk Access harder to grant because of AI agents, but gave no date, OS version or mechanism, so I checked what my own Mac lets a coding agent do today.

From the shell Claude Code uses, launched from iTerm2 without the grant, Messages, Safari and Mail were refused, and ~/.ssh was readable. The agent inherits the terminal's permissions and Claude Code's sandbox is off by default, so the grant isn't the only thing between an agent and your credentials.

I didn't test with Full Disk Access switched on, and I left out claims about a December deadline that I couldn't trace to Apple. Corrections welcome, especially from anyone who has checked what other agents (Codex CLI, Cursor) can read by default.
