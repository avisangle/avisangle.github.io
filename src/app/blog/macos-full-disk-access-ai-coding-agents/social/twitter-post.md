# Twitter/X Long-form Post - Apple's Full Disk Access Change: Audit Your AI Coding Agent

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py macos-full-disk-access-ai-coding-agents --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
On October 2 Apple said it will make macOS Full Disk Access harder to grant, and it named AI agents as the reason.

It gave no date, no macOS version, and no description of what the new prompt looks like. A few articles online quote a December deadline. I couldn't trace that to Apple.

So I checked what my own machine lets an agent do today.

HOW AGENTS GET FULL DISK ACCESS

Claude Code never asks for it. It runs as a child of your terminal, and macOS checks protected reads against the app at the top of that chain. If iTerm2 or your editor has Full Disk Access, every command an agent runs there has it too. Same for Codex CLI, Gemini CLI and Aider.

WHAT I SAW ON MY MAC

From the shell Claude Code uses, launched from iTerm2 (no Full Disk Access granted, macOS 26.6.2):

- ~/Library/Messages: Operation not permitted
- ~/Library/Safari: Operation not permitted
- ~/Library/Mail: Operation not permitted
- TCC.db: couldn't open it
- ~/.ssh: listed without complaint

That last line is the one that matters. Full Disk Access isn't what protects your SSH keys.

THE SANDBOX IS OFF BY DEFAULT

Anthropic's docs say the Claude Code sandbox is off until you turn it on, and even then shell commands can read most of the machine, including ~/.ssh and ~/.aws/credentials.

Two more limits from the docs:
- Read, Edit and Write tools run outside the sandbox. A denyRead entry doesn't stop the Read tool.
- Hooks, local MCP servers and ! commands run outside it too.

WHAT I'D DO THIS WEEK

1. System Settings > Privacy & Security > Full Disk Access. Switch off your terminal and editor, then relaunch them.
2. Turn on /sandbox.
3. In the project's .claude/settings.json set denyRead ["~/"], allowRead ["."], plus credentials entries for ~/.ssh and ~/.aws.
4. Fix breakage by allowing a path, not by disabling the sandbox.

One caveat: I didn't test with the grant switched on. Granting an agent session exactly what the post warns about felt like a bad experiment.

Full audit checklist, the settings.json and 8 FAQs:

https://avinashsangle.com/blog/macos-full-disk-access-ai-coding-agents

Follow @avi_sangle for more Claude Code security notes.
