# Dev.to + Hashnode Cross-post - Apple's Full Disk Access Change: Audit Your AI Coding Agent

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py macos-full-disk-access-ai-coding-agents --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py macos-full-disk-access-ai-coding-agents --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Apple's Full Disk Access Change: Audit Your AI Coding Agent
DESCRIPTION: Apple will tighten macOS Full Disk Access over AI agents, with no date yet. How Claude Code inherits it from your terminal, what I saw on my Mac, and the sandbox config that shrinks it.
TAGS: claudecode, macos, security, ai
CANONICAL_URL: https://avinashsangle.com/blog/macos-full-disk-access-ai-coding-agents
COVER_IMAGE: https://avinashsangle.com/og-macos-full-disk-access-ai-coding-agents.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/macos-full-disk-access-ai-coding-agents).

Apple will require very explicit user action before an app gets macOS Full Disk Access, and it named AI agents as the reason. Claude Code doesn't request the permission itself. It inherits whatever your terminal holds. Check that grant, remove it if you don't need it, and turn on the Claude Code sandbox.

## TL;DR

- Apple announced the change on 2026-10-02 and has not said when it ships, in which macOS version, or what the new prompt looks like.
- Agents run as child processes of your terminal, so a terminal with Full Disk Access gives every agent session that access.
- Without Full Disk Access an agent still reads your whole home folder, including SSH keys. The Claude Code sandbox is off by default.
- The fix is a 15-minute audit: revoke the grant, enable the sandbox, and deny reads outside the project.

## What is Apple changing about Full Disk Access?

Apple posted a short note on its developer news page on October 2, 2026. The core sentence: "Going forward, we will introduce additional controls to ensure that users who genuinely wish to grant an app this extraordinary level of access can only do so with very explicit user action." Apple says some developers use Full Disk Access in ways that expose files, mail, messages and browsing history without the user's full understanding, and that as AI agents grow more capable and autonomous, the risk "will grow substantially." [Apple's note](https://developer.apple.com/news/?id=p6zjojqw) is the primary source. MacRumors, TechCrunch and Help Net Security all covered it within three days.

What the note leaves out matters more than what it says. There is no release date, no macOS version, and no description of what an "explicit action" will be. Help Net Security says plainly that the company hasn't detailed how the controls will work. Some articles you'll find online quote a specific beta build or a December deadline. I couldn't trace those to Apple, and they conflict with Apple's own wording, so I'm not repeating them. If Apple publishes specifics, I'll update the original post and the date at the top.

Apple's guidance to developers is also short: review whether you need the permission, expect stricter prompts, limit scope, and tell users why you're asking. That is advice for app makers. As someone who runs coding agents, the useful question is different: what does my machine already let an agent do?

## Does Claude Code need Full Disk Access?

No. Claude Code reads and writes your project folders without it. But it doesn't need to ask, because of how macOS attributes permissions. When you start Claude Code from iTerm2, Ghostty or the VS Code terminal, the shell and everything it launches run as children of that app. macOS checks protected reads against the app at the top of that chain. If the terminal holds Full Disk Access, so does every command in it, and no prompt appears for the agent because the agent was never the one asked.

The same holds for Codex CLI, Gemini CLI, Aider, or a script you wrote last year. The agent is a convenient way to run commands, and it adds no permissions of its own. That also means the grant most people made once, to make a backup tool or a file search work, quietly became a grant to every agent they now run.

Editors work the same way. Cursor and VS Code run agents in an integrated terminal that belongs to the editor process, so the editor's grants apply. I haven't tested every editor, so check the specific app you use rather than assuming.

## What I saw on my own Mac

I ran a few reads from the shell Claude Code uses on my machine, which I launch from iTerm2. The Mac is on macOS 26.6.2. I haven't given iTerm2 Full Disk Access, and the output shows it.

```bash
# 1. What can this shell read? (run from the terminal you launch agents in)
ls ~/Library/Messages
ls ~/Library/Safari
ls ~/Library/Mail

# 2. Can it read the TCC database that stores the grants?
sqlite3 "$HOME/Library/Application Support/com.apple.TCC/TCC.db" \
  "select client from access where service='kTCCServiceSystemPolicyAllFiles';"
```

```bash
$ ls ~/Library/Messages
ls: /Users/avinashsangle/Library/Messages: Operation not permitted
$ ls ~/Library/Safari
ls: /Users/avinashsangle/Library/Safari: Operation not permitted
$ ls ~/Library/Mail
ls: /Users/avinashsangle/Library/Mail: Operation not permitted
$ ls ~/.ssh
agent  config  github-app-key.pem
```

Three protected folders refused me. The TCC database that records the grants also refused to open, because reading it needs Full Disk Access itself. My ~/.ssh folder listed without complaint. That last line is the one to look at. Full Disk Access wasn't what protected my SSH keys, and its absence didn't stop me reading them.

One limit on this test: I haven't run the same commands with the grant switched on. Turning Full Disk Access on to prove a point would mean granting an agent session exactly what this post warns about. The with-grant behaviour here is what Apple and the press describe, and not something I measured.

## What can an agent read without Full Disk Access?

Most of your home folder. macOS protects a short list of locations: Mail, Messages, Safari data, and a few others. Everything else you own is readable by any process you start, including `~/.ssh`, `~/.aws`, `.env` files in every project, and your shell history. Full Disk Access widens that list to cover the protected locations as well.

So Full Disk Access is the loudest permission, and not the only one worth worrying about. Anthropic's sandbox documentation describes the default read policy for sandboxed commands as "most of the machine, including credential files such as ~/.ssh and ~/.aws/credentials." That's with the sandbox on. With it off, which is the default, there is no filesystem boundary around shell commands at all. A prompt-injected instruction to cat a key file and send it somewhere has to get past your permission prompts and nothing else.

I wrote about how that kind of failure chains together in [the Hugging Face breach post](https://avinashsangle.com/blog/sandbox-ai-agents-hugging-face-breach), and about the injection side in [hardening agents in CI/CD](https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection). Full Disk Access is one more door on the same house.

## How do I shrink an agent's access on macOS?

Do two things: remove Full Disk Access from the terminal you run agents in, and turn on the Claude Code sandbox with reads limited to the project. They cover different layers. The first is a macOS permission. The second is a boundary the operating system enforces around shell commands.

First, the grant itself:

1. Open System Settings, then Privacy & Security, then Full Disk Access. Switch off your terminal and any editor you launch agents from.
2. Quit and reopen the app. The old grant stays in force for a running process, so a session you left open still has it.
3. If you do need Full Disk Access for something, give it to a separate app you don't run agents in.

```bash
# Clear the Full Disk Access grant for one app, by bundle identifier
tccutil reset SystemPolicyAllFiles com.googlecode.iterm2

# Find a bundle identifier
osascript -e 'id of app "iTerm"'
```

I haven't run the `tccutil` line against a real grant, because it would have revoked mine. I did confirm the command exists and rejects an unknown bundle identifier. It resets the grant for one app, and the next protected read prompts again.

Second, the Claude Code sandbox. It is built into Claude Code, uses macOS's Seatbelt framework, and is off until you run `/sandbox` or set `sandbox.enabled`. This config, from Anthropic's [sandboxing docs](https://code.claude.com/docs/en/sandboxing), blocks reads of the home folder except the project, and denies the usual credential locations:

```json
{
  "sandbox": {
    "enabled": true,
    "filesystem": {
      "denyRead": ["~/"],
      "allowRead": ["."]
    },
    "credentials": {
      "files": [
        { "path": "~/.aws/credentials", "mode": "deny" },
        { "path": "~/.ssh", "mode": "deny" }
      ],
      "envVars": [
        { "name": "GITHUB_TOKEN", "mode": "deny" }
      ]
    }
  }
}
```

Put it in the project's `.claude/settings.json`. The `.` in `allowRead` resolves to the project root there. In `~/.claude/settings.json` it would resolve to `~/.claude` and your project files would be blocked.

Know where the boundary stops. The sandbox wraps shell commands. Claude's own Read, Edit and Write tools follow permission rules, and a `denyRead` entry doesn't stop the Read tool. Hooks, local MCP servers and LSP servers run outside it with your full access. Commands you type after the `!` prefix, anything in `excludedCommands`, and unsandboxed retries Claude asks for also run outside it. If you need one boundary around everything, run the whole Claude Code process in a container or VM. Anthropic's [sandbox environments](https://code.claude.com/docs/en/sandbox-environments) page compares the options.

## What will Apple's change break?

Nobody knows yet, and I'd rather say that than guess. The one concrete signal is that coverage of the announcement expects backup tools to feel it, since they are the legitimate users of the permission. Apple's own developer note says to expect stricter prompts.

Here's how I'm reasoning about it. If your agent workflow works without Full Disk Access today, as mine does, an extra confirmation step costs you nothing. If you granted it to a terminal years ago and forgot, you'll probably meet the new prompt the first time something needs it, and you can decide then. The people with real work to do are the ones whose tooling reads Mail or Messages data on purpose. I'll update the original post when Apple publishes the details.

## A 15-minute audit checklist

1. Open Full Disk Access in System Settings and write down every app that is on. Remove the ones you don't use.
2. Check your terminal and your editor specifically. Switch them off, relaunch, and run your normal agent workflow to see if anything breaks.
3. Run the three `ls ~/Library/...` commands above from the terminal you use for agents. "Operation not permitted" is the result you want.
4. Run `/sandbox` in Claude Code and enable it, or set `sandbox.enabled` in settings.
5. Add `denyRead` for `~/` with `allowRead` for the project, plus `credentials` entries for `~/.ssh`, `~/.aws/credentials` and any token in your environment.
6. Add the paths your builds really need, such as a package cache, and test a normal build. Fix what breaks by allowing a path, not by switching the sandbox off.

Step six is where people give up, so do it last and do it narrowly. A sandbox that you disabled because one cache directory was blocked protects nothing.

## Frequently Asked Questions

### What is Apple changing about macOS Full Disk Access?

On October 2, 2026 Apple said it will add controls so a user can grant Full Disk Access only through very explicit action, citing the growing autonomy of AI agents. Apple has not published a date, a macOS version, or a description of how the new controls will look.

### Does Claude Code need Full Disk Access?

No. Claude Code needs nothing special to read and edit your projects. It runs as a child of your terminal, so it gets whatever the terminal has been granted. If your terminal has Full Disk Access, every command Claude runs there can read Mail, Messages and Safari data too.

### Should I give Terminal Full Disk Access?

Only if a specific tool you run needs it, and not as a default. Granting it to your terminal hands that access to every program started there, including AI agents. A separate terminal app used only for tasks that need protected data keeps the grant away from your agent sessions.

### How do I check which apps have Full Disk Access on a Mac?

Open System Settings, then Privacy & Security, then Full Disk Access. The list shows every app with a toggle. Apps you installed years ago and no longer use often still appear there. Turn off anything you don't recognise or no longer need, then relaunch the apps you kept.

### How do I revoke Full Disk Access from my terminal?

Switch the terminal off in System Settings under Privacy & Security, Full Disk Access, then quit and reopen it. From the command line, tccutil reset SystemPolicyAllFiles followed by the app's bundle identifier clears the grant, and the next protected read will prompt again.

### Does the Claude Code sandbox limit what an agent can read?

Only for shell commands, and only when you turn it on. Anthropic's docs say the sandbox is off by default and, once enabled, still lets commands read most of the machine, including ~/.ssh. You restrict reads with sandbox.filesystem.denyRead and allowRead, or credentials entries for secrets.

### Which Claude Code tools run outside the sandbox?

The built-in Read, Edit, Write, WebFetch and WebSearch tools follow permission rules instead. Hooks, local MCP servers, LSP servers and helper commands also run outside it, as do commands you type after the ! prefix and anything in excludedCommands. A denyRead entry does not stop the Read tool.

### Will Apple's Full Disk Access change break my agent workflow?

Nobody outside Apple can say yet, because no mechanism or date has been published. Apple's developer note only warns of stricter prompts. A workflow that never needed Full Disk Access should be unaffected. One that relies on it for a terminal should expect an extra confirmation step.

## Keep going

For the failure chain that makes a sandbox worth having, read [Sandbox AI Agents: Lessons From the OpenAI Hugging Face Breach](https://avinashsangle.com/blog/sandbox-ai-agents-hugging-face-breach). For the CI side, [Hardening AI Agents in CI/CD Against Prompt Injection](https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection). Sources: [Apple Developer](https://developer.apple.com/news/?id=p6zjojqw), [MacRumors](https://www.macrumors.com/2026/10/02/apple-announces-macos-full-disk-access-changes/), [TechCrunch](https://techcrunch.com/2026/10/02/apple-says-its-tightening-macos-full-disk-access-controls-due-to-new-risks-from-ai-agents/), [Help Net Security](https://www.helpnetsecurity.com/2026/10/05/macos-full-disk-access-updates/), [Claude Code sandboxing docs](https://code.claude.com/docs/en/sandboxing).
