# Reddit Posts - Apple's Full Disk Access Change: Audit Your AI Coding Agent

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py macos-full-disk-access-ai-coding-agents --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

Flair note: `list_reddit_flairs.py` returned a 401 on 2026-10-06, so flairs below are
names from the registry and past POSTED.md notes, not looked-up IDs. "Claude Code" worked
on r/ClaudeAI on 2026-04-26 ("Tutorial" was rejected). If posting fails on flair, fix the
Reddit credentials and re-run `python scripts/list_reddit_flairs.py <sub>`.
r/ChatGPTCoding needs account-level user flair set first.

---POST---
SUBREDDIT: ClaudeAI
TITLE: Claude Code inherits your terminal's Full Disk Access. Here's what I found checking my Mac before Apple changes it
FLAIR: Claude Code
---BODY---
Apple said on Oct 2 that it will make macOS Full Disk Access harder to grant, citing AI agents. No date, no macOS version, no description of the new prompt. (A few articles quote a December deadline. I couldn't trace that to Apple's post, so I'm ignoring it.)

I wanted to know what Claude Code can actually reach on my machine today, so I ran some reads from the shell it uses, launched from iTerm2 with no Full Disk Access granted (macOS 26.6.2):

- `ls ~/Library/Messages`, `~/Library/Safari`, `~/Library/Mail`: all "Operation not permitted"
- Opening the TCC database: refused
- `ls ~/.ssh`: listed fine

**Claude Code never asks for Full Disk Access.** It's a child process of your terminal, and macOS checks against the app at the top of the chain. If your terminal has the grant, every command Claude runs there has it too.

**Full Disk Access isn't what protects your SSH keys.** Without it, an agent still reads your whole home folder, `.env` files and cloud credentials.

**The sandbox is off by default.** From Anthropic's docs: once enabled, sandboxed commands still read "most of the machine" unless you set `sandbox.filesystem.denyRead`. And the built-in Read/Edit/Write tools, hooks and local MCP servers run outside the sandbox. A `denyRead` entry doesn't stop the Read tool.

What I changed: removed the grant from my terminal, enabled `/sandbox`, and put this in the project's `.claude/settings.json`:

```json
{
  "sandbox": {
    "enabled": true,
    "filesystem": { "denyRead": ["~/"], "allowRead": ["."] },
    "credentials": { "files": [
      { "path": "~/.ssh", "mode": "deny" },
      { "path": "~/.aws/credentials", "mode": "deny" }
    ] }
  }
}
```

One limit: I didn't test with the grant switched on, since that means handing an agent session what I'm trying to avoid.

Happy to answer questions. Full write-up with the audit checklist is here: https://avinashsangle.com/blog/macos-full-disk-access-ai-coding-agents

---POST---
SUBREDDIT: ChatGPTCoding
TITLE: Whichever terminal you run Claude Code, Codex CLI or Aider in, the agent gets that terminal's macOS Full Disk Access
FLAIR: Discussion
---BODY---
Apple announced on Oct 2 that it will add controls making Full Disk Access require "very explicit user action", and it named AI agents as the reason. It hasn't said when, in which macOS version, or what the prompt looks like.

The part that applies to every CLI agent: none of them hold the permission themselves. Claude Code, Codex CLI, Gemini CLI and Aider all run as child processes of your terminal. macOS attributes the protected read to the app at the top of the chain, so a terminal (or an editor with an integrated terminal) that was granted Full Disk Access years ago gives that access to every agent you start in it. I haven't tested every editor, so check yours.

Quick test I ran from iTerm2 with no grant: Messages, Safari and Mail folders returned "Operation not permitted". `~/.ssh` listed fine. So the permission people worry about isn't the one guarding credentials.

Where tools differ is the sandbox. Claude Code's is built on macOS Seatbelt, off by default, and covers shell commands only. Its Read/Edit/Write tools, hooks and local MCP servers sit outside it. I'm curious how other agents handle this, so if you've checked what Codex CLI or Cursor's agent can read by default, I'd like to hear it.

What I'd do regardless of tool: remove Full Disk Access from the terminal you run agents in, relaunch it, and give any real need for the grant to a separate app.

Happy to answer questions. The audit checklist and config are in the full post: https://avinashsangle.com/blog/macos-full-disk-access-ai-coding-agents

---POST---
SUBREDDIT: vibecoding
TITLE: Apple is tightening Full Disk Access because of AI agents. Quick check you can do on your Mac today
FLAIR: Discussion
---BODY---
If you run Claude Code, Codex or Cursor's agent on a Mac, this affects you even though Apple hasn't shipped anything yet.

Apple said on Oct 2 it will make Full Disk Access harder to grant. No date given. The important bit for us: the agent doesn't have its own permission. It uses whatever your terminal or editor was granted, possibly years ago for some backup tool.

Two-minute check:

1. System Settings > Privacy & Security > Full Disk Access
2. Switch off your terminal and your editor, then quit and reopen them
3. In that terminal, run `ls ~/Library/Messages`. "Operation not permitted" is what you want

When I did the same on my Mac, Messages, Safari and Mail were all blocked. But `~/.ssh` was readable, so don't assume the permission is your only protection. An agent can still read your home folder and `.env` files. Claude Code has a sandbox for limiting that, but it's off until you enable it with `/sandbox`.

I didn't test with the grant on. I don't want to hand an agent session that access just to prove a point.

Happy to answer questions. I put the longer version with the settings.json I use here: https://avinashsangle.com/blog/macos-full-disk-access-ai-coding-agents
