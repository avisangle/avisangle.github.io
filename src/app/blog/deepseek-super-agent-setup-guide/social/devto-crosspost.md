# Dev.to + Hashnode Cross-post - How to Set Up DeepSeek Super-Agent (dsh-superagent) Safely

**Post date:** Day 14-21 (2026-11-21 to 2026-11-28). Syndicating the same day lets Dev.to outrank the original despite the canonical URL.
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py deepseek-super-agent-setup-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py deepseek-super-agent-setup-guide --dry-run`

WARNING: `post_to_hashnode.py` uses Hashnode's publishPost mutation, which goes LIVE immediately
regardless of `PUBLISHED: false`. Only Dev.to honors the draft flag.

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: How to Set Up DeepSeek Super-Agent (dsh-superagent) Safely
DESCRIPTION: Step-by-step dsh-superagent setup: agent GitHub account, gh wrapper, observe mode, and why follow-up comments from any GitHub user reach its full-access worker.
TAGS: ai, security, github, opensource
CANONICAL_URL: https://avinashsangle.com/blog/deepseek-super-agent-setup-guide
COVER_IMAGE: https://avinashsangle.com/og-deepseek-super-agent-setup-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/deepseek-super-agent-setup-guide).

DeepSeek Super-Agent setup takes a dedicated GitHub account for the agent, a separate DeepSeek Harness profile, and five install commands. After that you configure it in a local panel. Get one setting right before anything else: the allowed list controls who can start work, but anyone who comments on the agent's pull request reaches it.

## TL;DR

- dsh-superagent is an MIT research prototype for one github.com repository. It acts on @mentions from an allowed list and records proactive work in observe mode instead of doing it.
- You need Node 22.19+, pnpm, git 2.32+, tmux, Python 3.8+, gh 2.48+, DeepSeek Harness 0.2.1-rc.3, a model provider and a second GitHub user account.
- Every session runs with `danger-full-access`, hard-coded. Follow-up comments from any GitHub user reach a working Ticket and can resume an ended one.
- Start on a private repo, under a separate OS user, with only yourself on the allowed list and auto-merge off.

## What is DeepSeek Super-Agent, and what did the headlines get wrong?

DeepSeek Super-Agent, published as [dsh-superagent-prototype](https://github.com/deepseek-ai/dsh-superagent-prototype), is a coding agent that runs as a service next to one GitHub repository instead of in your terminal. It's a plugin bundle for DeepSeek Harness (DSH), the company's open-source agent runtime. When an allowed person mentions the agent's GitHub account, it opens a Ticket, works on it in its own session and directory, and answers in the same thread, usually with a pull request. A local web panel shows what needs a person.

The design splits work between a main session that judges incoming messages (the router, called Eval in the docs) and one worker session per Ticket (the Executor). The flow in `docs/001-domain.md` is Source, Trigger, Thread, Eval, Ticket, then Assignment to an Executor. You don't need the vocabulary to install it, but you do need it to read the panel.

It got attention fast. The repo had 20,210 stars and 2,350 forks by November 7, seven days after the first commit, according to GitHub's API. [Bloomberg](https://www.bloomberg.com/news/articles/2026-11-01/deepseek-drops-enhanced-coding-agent-with-aim-to-rival-anthropic) framed it as DeepSeek's challenge to Claude Code, and [The Next Web](https://thenextweb.com/news/deepseek-super-agent-open-source-coding-agent) led with an agent that reads team chats and acts without being asked.

That second framing is wrong for the code you can download. Out of the box it acts only when someone on its allowed list addresses it. Work nobody asked for needs a rule your team writes, and even then the default accept mode, `observe`, only records what the agent would have done. The README is also blunt about status: "Research prototype for reference only, not an official DeepSeek product," with much of the engineering "done by coding agents." It differs from DeepSeek's internal version.

One note on how I wrote this. I cloned commit `8c32a9d` and read the 2,091 lines of docs plus the parts of the roughly 15,200 lines of TypeScript that decide who reaches the agent. I haven't run a Ticket end to end yet; that needs a model provider key and a second GitHub account I haven't set up. Where I quote code or docs, I give the file. Where I describe behaviour, it comes from those files and not from a test run.

## What do you need before installing dsh-superagent?

You need a Unix machine with the usual Node tooling, a GitHub repository on github.com, a DeepSeek Harness install with a working model, and a second GitHub user account for the agent. The full list from `SETUP.md` and `docs/006-deployment.md`:

- Node.js 22.19+ or 24+, pnpm, git 2.32+, tmux and Python 3.8+
- GitHub CLI 2.48 or later
- DeepSeek Harness within the `engines.dsh` range in `package.json`, which is `^0.2.1-alpha.2`; the docs pin the public `0.2.1-rc.3`
- A model provider configured in DSH (it uses the profile's default model)
- A repository on github.com. GitHub Enterprise Server isn't supported
- git-lfs, if your repository uses LFS
- A dedicated GitHub user account with write access to the repository

The setup guide starts with a probe. Run it and fix anything missing before you go on:

```bash
node -v; pnpm -v; git --version; tmux -V; python3 --version
gh --version | head -1; dsh --version
gh api user --jq .login     # your own login, for the allowed list
```

Why a user account and not a GitHub App? The agent finds requests by reading its account's notifications, and Apps don't get notifications. The deployment doc says so directly. It also means everything the agent writes appears under that account's name, which is what you want: its work should look like its work.

## How to install DeepSeek Super-Agent

Install in three steps: give the agent account its own GitHub CLI, install DSH plus the bundle, then write one config file. If you're going to follow my advice later and use a separate OS user, switch to that user now and do all of this as them.

### 1. A GitHub CLI that only knows the agent

The wrapper points `gh` at a separate config directory, so the agent's login never mixes with yours. The service later puts a shim named `gh` first on the workers' PATH that calls this wrapper.

```bash
mkdir -p ~/.local/bin
cat > ~/.local/bin/gh-agent <<'EOF'
#!/bin/sh
GH_CONFIG_DIR="$HOME/.config/gh-agent" exec gh "$@"
EOF
chmod +x ~/.local/bin/gh-agent

gh-agent auth login            # sign in as the AGENT account, not yours
gh-agent api user --jq .login  # must print the agent's login
```

Accept the repository invitation while signed in as the agent account in a browser. Setup checks push access later and refuses to start without it.

### 2. DSH and the bundle

```bash
npm install -g @deepseek-ai/dsh@0.2.1-rc.3
git clone https://github.com/deepseek-ai/dsh-superagent-prototype.git dsh-superagent && cd dsh-superagent
pnpm install && pnpm build
dsh superagent --from-default-profile web --dump-config > /dev/null
dsh plugin --profile superagent add "link:$PWD"
```

The fourth command creates `~/.dsh/profiles/superagent` from the DSH Web template. It's a separate profile on purpose: the plugin changes process-wide `PATH` and git settings, and it needs to restart without closing the sessions you work in. Run that command once. On an existing profile it replaces the profile and deletes its `cordis.patch.yml`, so never use it for upgrades.

### 3. Machine configuration

Copy `examples/profile.cordis.patch.yml` to `~/.dsh/profiles/superagent/cordis.patch.yml` and fill in the state directory. It holds the SQLite database, the command shims, the agent's git config and, by default, every Ticket's working directory. It can't be changed later from the panel.

```yaml
# ~/.dsh/profiles/superagent/cordis.patch.yml
- id: webserver
  config:
    host: 127.0.0.1
    port: 3082
- id: dsh-superagent
  config:
    stateDir: /home/me/.dsh/state/superagent   # absolute path
```

There's also an assisted route. The README suggests asking your coding agent to "Read SETUP.md in this repository and set up dsh-superagent with me." SETUP.md is written for an agent: nine questions, one per message, then a single plan to confirm before anything runs. It never asks for a secret in chat. If you use Claude Code or Codex daily, that's a reasonable way to do it, and it's a nice example of setup docs written for agents first.

## How to configure and start it

Start the service, open the panel at `127.0.0.1:3082`, choose Superagent in the sidebar, and fill in four cards in order: Sources, Policy, Execution, Prompts. Until the allowed list has at least one login, no request can become a Ticket.

```bash
scripts/dsh-superagent start
scripts/dsh-superagent status
echo $?   # 0 ok, 1 down (restart may help), 2 a part errors, 3 waiting for setup
```

The start script runs `dsh --profile superagent` inside a tmux session named `dsh-superagent` and waits up to a minute. The exit codes matter for automation, because a restart only fixes code 1:

| Exit code | Meaning | Does a restart help? |
|---|---|---|
| 0 | Running normally | Not needed |
| 1 | Not running, running twice, not answering, or a runtime error | Maybe |
| 2 | Running, but a Source or allowed-list sync reports an error | No |
| 3 | Running and waiting for setup (the output says what's missing) | No |

Then the cards:

1. Sources. Set the repository as `owner/name` and the agent CLI as an absolute path, such as `/home/me/.local/bin/gh-agent`. Leave the four observe switches (all new issues, PRs, comments, CI) off.
2. Policy. Add your own GitHub login under the GitHub Source's allowed list. Leave accept mode on `observe`.
3. Execution. Set a prepare command that gives each Ticket its own git worktree, and list any personal CLIs (one signed in as you, for example) as blocked commands.
4. Prompts. Set the commit author and the auto-merge condition. I'd delete the auto-merge paragraph for now so people merge everything.

The prepare command from the deployment doc fetches the right ref and adds a worktree on an `agent/` branch. Swap in the path to your own clone:

```bash
git -C /home/me/src/widgets fetch --no-tags \
  "https://github.com/$DSH_SUPERAGENT_GITHUB_REPOSITORY.git" \
  "${DSH_SUPERAGENT_GITHUB_PR_HEAD:-HEAD}:refs/dsh-superagent/$DSH_SUPERAGENT_TICKET" &&
git -C /home/me/src/widgets worktree add -b "agent/$DSH_SUPERAGENT_NAME" \
  "$DSH_SUPERAGENT_DIR" "refs/dsh-superagent/$DSH_SUPERAGENT_TICKET"
```

Everything in the panel goes through a local HTTP API, which is handy if you'd rather script it. Requests need the `x-orchestrator-request: 1` header and the block's current revision, and a save that changes an account can restart the service:

```bash
api=http://127.0.0.1:3082/orchestrator/api
h='x-orchestrator-request: 1'

# Every save needs the block's current revision
rev=$(curl -s -H "$h" $api/settings | jq '.sources[] | select(.id == "github") | .revision')

curl -s -X PUT -H "$h" -H 'content-type: application/json' $api/settings/source:github \
  -d "{\"value\": {\"enabled\": true, \"config\": {\"repository\": \"acme/widgets\", \"cli\": \"$HOME/.local/bin/gh-agent\"}}, \"revision\": $rev}"
```

To test, comment `@your-agent-login fix the typo in README` on an issue from your allowed account. The GitHub Source polls once a minute by default, so a Ticket should show up on the overview within about that long. If nothing happens, check that you posted a new comment. A mention added by editing an existing issue body isn't received, which is the first thing most people will trip over.

One last operational detail: the docs recommend an hourly health check scheduled from your normal DSH profile, not from the superagent profile, so it still runs when the service is down. It calls `status` and restarts only on exit code 1, using `--respect-stop` so a deliberate stop stays stopped.

## Who can reach the agent once it's working?

The allowed list decides who can start a Ticket. It doesn't decide who can talk to one. Once a Ticket exists, every message on the threads it's subscribed to reaches its Executor, from anyone. A human's comment can also wake a Ticket that already ended. Most of what I'd change about the default setup follows from that.

The docs say it plainly. `docs/001-domain.md` describes a Subscription as delivering a matching Trigger "to every live subscribed Ticket, with no check of who sent it." `docs/002-authorization.md` adds that a person's message on one of a Ticket's own threads "can resume the same work without a new Eval or Decision, regardless of who sent it." The agent's pull request is one of those threads, and the subscription survives after the PR merges or closes.

The code matches. This is the loop in `src/core/intake.ts` that decides which Tickets a new message reaches:

```typescript
// src/core/intake.ts (excerpt)
for (const ticketId of thread.subscriptions) {
  const ticket = this.repo.tickets.get(ticketId)
  // Only a person's message on a non-context thread resumes an ended ticket; bots and CI do not ...
  const followed = !!thread.context?.includes(ticketId)
  const resumes = trigger.human && ticket?.ended?.by !== 'human' && !followed
  if (!ticket || (!liveTicket(ticket) && !resumes)) continue
  reached.set(ticketId, { ticket, context: ... })
}
```

The only conditions are that the sender is human, nobody stopped the Ticket by hand, and the thread isn't one the Executor follows just for context. The allowed list doesn't appear. On GitHub, "human" means any login that isn't a bot and isn't the agent itself (`src/sources/github-trigger.ts`).

Now put that next to what the Executor can do. Every session the bundle creates gets this, in code, with no setting to change it:

```typescript
// src/app/sessions.ts:152
ctx.permissionPresets.set(result.agent.session, 'danger-full-access')
```

The deployment doc spells out what that means: workers run commands without approval as your OS user, "can execute programs by path and read the operator's home directory." Blocked commands are shims matched by name, and `docs/003-execution.md` says the wrappers "establish defaults, not a security boundary."

So on a public repository, a stranger can comment on the agent's pull request and that text lands in a full-access session on your machine. The design's answer is the Mandate: the Executor is told the scope it was granted and should hand back anything outside it. That's an instruction to a model, and models follow injected instructions some of the time. [Tencent's Zhuque Lab](https://matrix.tencent.com/en/2026/08/20/deepseek-harness-agent-injection-risk) measured this on DeepSeek Harness itself in August 2026: across 14,560 real runs, 5.6% of injection attempts fully succeeded, 16.6% for the fake-completion technique, and 25.5% for hidden-Unicode text delivered in files. That study predates this bundle and used `deepseek-v4-flash`, so treat it as a base rate, not a measurement of dsh-superagent.

To be fair to DeepSeek, the host does real work to shrink the blast radius. Setup strips environment variables whose names contain KEY, PASSWORD, SECRET or TOKEN, removes `GH_TOKEN` and `GITHUB_TOKEN`, replaces your global git config with one that only knows the agent's credentials, and fails any Ticket whose clone adds its own credentials. The agent never enables auto-merge as itself, and the default auto-merge rule needs approvals and fewer than 200 changed lines. None of that stops a shell command from reading `~/.ssh`. I covered how that kind of chain plays out in [hardening AI agents in CI/CD against prompt injection](https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection).

## A safer DeepSeek Super-Agent setup

Isolate the process first, then narrow who can reach it. DeepSeek's own advice is "for isolation, use a dedicated OS account containing only the agent's credentials," and that's the step I'd never skip. Here's the order I'd set it up in:

1. Run it as a separate OS user, or in a VM, that holds nothing but the agent's GitHub login and model key. Not your laptop account.
2. Point it at a private repository first. Outsiders can't comment there, which closes the gap above for now.
3. Keep the allowed list to yourself until you've read a week of its work.
4. Leave accept mode on `observe` and read the "would accept" decisions before you consider `auto`.
5. Turn auto-merge off. People merge.
6. Add your personal CLIs to blocked commands anyway. A path still bypasses them, but they stop the accidental case.
7. Back up `<stateDir>/orchestrator.sqlite` before each upgrade. A migrated database won't open in an older version.

```bash
# Linux: a separate user that holds only the agent's credentials
sudo useradd --create-home --shell /bin/bash dsh-agent
sudo -iu dsh-agent
# ...then run every install and gh-agent step above as this user
```

On macOS, create a standard user in System Settings and log in to it, or run the whole thing in a Linux VM. Don't give that user's terminal Full Disk Access; I wrote about why in [the macOS Full Disk Access post](https://avinashsangle.com/blog/macos-full-disk-access-ai-coding-agents). For more on choosing a boundary, the [agent sandboxing guide](https://avinashsangle.com/blog/sandbox-ai-agents-hugging-face-breach) compares containers, VMs and OS-level sandboxes.

If you must run it on a public repo, accept that every pull request it opens is a place where outsiders can talk to it. Stop finished Tickets from the panel rather than letting them end on their own. A Ticket a person stopped "receives nothing" afterwards, per the intake code above, so a stray comment can't revive it.

## DeepSeek Super-Agent vs Claude Code GitHub Actions

They solve the same request, "mention the bot on an issue and get a PR," from opposite ends. Claude Code Action runs per event in a GitHub Actions workflow and only listens to people with write access. dsh-superagent is a long-running service on a machine you own, with its own memory of Tickets and its own idea of who may ask.

| | dsh-superagent | Claude Code Action |
|---|---|---|
| Where it runs | A service on your machine, in tmux | A GitHub Actions runner, per event |
| How it hears requests | Polls the agent account's notifications (1 min default) | Workflow triggers on GitHub events |
| Who can start work | Logins on the allowed list | Users with write access |
| Outsiders' follow-ups | Reach a live Ticket; can resume an ended one | Ignored unless you set allowed_non_write_users |
| Command approval | None: danger-full-access, hard-coded | Limited by the tools you allow in the workflow |
| Models | Any provider DeepSeek Harness supports | Claude |
| Chat source | Feishu (optional) | None built in |
| Status | Research prototype, v0.1.0 | Maintained Anthropic GitHub Action |

The row that matters is outsiders' follow-ups. Anthropic's [security doc for the action](https://github.com/anthropics/claude-code-action/blob/main/docs/security.md) checks write access on issue, pull request, comment and review events, and calls the opt-out `allowed_non_write_users` "a significant security risk." When you do opt out, it scrubs secrets from subprocess environments and tells you to use the short-lived `GITHUB_TOKEN`. dsh-superagent gives outsiders that reach on any Ticket's threads without being asked.

On speed, the only head-to-head I found is one [Towards AI write-up](https://pub.towardsai.net/i-raced-deepseeks-new-agent-against-claude-code-37-seconds-vs-73-02d9ce10c4e9) that raced both on a small two-bug repo: 37 seconds for Claude Code, 73 for Super-Agent, with the same four-line fix. The author put most of the gap down to the one-minute poll. One repo, one person, so I wouldn't read much into it.

Where dsh-superagent is more interesting is the model choice and the persistent Ticket model. If you already route Claude Code through cheaper models, as I described in the [DeepSeek V4 Flash guide](https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide) and the [V4.1 Flash follow-up](https://avinashsangle.com/blog/deepseek-v4-1-flash-multimodal-coding-guide), a self-hosted agent that keeps context across a whole issue thread is worth trying. On a private repo, under its own user, with you on the allowed list.

## Frequently Asked Questions

### What is DeepSeek Super-Agent (dsh-superagent)?

It's an MIT-licensed research prototype from DeepSeek's Harness team, released October 31, 2026. It runs as a background service for one GitHub repository, turns requests from allowed people into Tickets, and works each Ticket in its own DeepSeek Harness session, usually ending in a pull request. DeepSeek says it is not an official product.

### Is DeepSeek Super-Agent safe to run on my machine?

Not as installed by default. Every session it starts has danger-full-access set in code, runs shell commands without approval as your OS user, and can read your home directory. DeepSeek's own docs say the wrappers are not a security boundary. Run it under a dedicated OS user or in a VM holding only the agent's credentials.

### Can I use DeepSeek Super-Agent on a public GitHub repository?

You can, but I wouldn't start there. The allowed list only gates new work. Once the agent opens a pull request, any human GitHub user who comments on it reaches the working session, and a comment can resume an ended Ticket. On a public repo that means strangers can put text in front of a full-access agent.

### Why does DeepSeek Super-Agent need a separate GitHub account?

It reads requests from that account's GitHub notifications, which a GitHub App doesn't have, so it must be a normal user account. Everything it writes, comments, branches and pull requests, appears under that name. Using your own account would make its work look like yours and give it your credentials.

### Does DeepSeek Super-Agent need Feishu?

No. Feishu, ByteDance's workplace chat app, is an optional second Source. The setup guide recommends GitHub only unless your team already works in Feishu. With GitHub alone, people ask for work by mentioning the agent account in an issue or pull request comment, and it replies in the same thread.

### What does observe mode do in dsh-superagent?

Observe is the default accept mode for proactive work. The agent still assesses messages nobody addressed to it, but a positive assessment is only recorded as "would accept" and nothing starts. Explicit requests from allowed people work in every mode. Switch to auto only after you've read what it would have done.

### How is DeepSeek Super-Agent different from Claude Code's GitHub integration?

Claude Code Action runs in a GitHub Actions workflow and only responds to users with write access unless you opt into allowed_non_write_users. dsh-superagent runs as a service on your own machine, polls notifications every minute, works with any model DeepSeek Harness supports, and lets follow-up comments from anyone reach a running Ticket.

### Why doesn't DeepSeek Super-Agent respond to my mention?

Check three things: your login is on the GitHub Source's allowed list, the Source is switched on, and processing isn't paused. Then check how you mentioned it. A mention added by editing an existing issue body is not received. Post a new comment instead and wait for the next one-minute poll.

---

Sources: [dsh-superagent-prototype (commit 8c32a9d)](https://github.com/deepseek-ai/dsh-superagent-prototype), [006 Deployment](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/006-deployment.md), [002 Authorization](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/002-authorization.md), [Tencent Zhuque Lab](https://matrix.tencent.com/en/2026/08/20/deepseek-harness-agent-injection-risk), [claude-code-action security](https://github.com/anthropics/claude-code-action/blob/main/docs/security.md).
