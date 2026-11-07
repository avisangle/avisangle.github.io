# Reddit Posts - How to Set Up DeepSeek Super-Agent (dsh-superagent) Safely

**Post date:** Day 1
**Best time:** 2:00 PM IST (stagger the two subs by 30+ minutes)
**Post via:** `python scripts/post_to_reddit.py deepseek-super-agent-setup-guide --dry-run`

Flair note: `list_reddit_flairs.py` returned `401 HTTP response` for both subs on 2026-11-07
(same as 2026-08-20), so live flair IDs could not be fetched. The FLAIR values below are names
that posted successfully before: "Coding" on r/ClaudeAI and "Discussion" on r/ChatGPTCoding.
Refresh the Reddit credentials and re-run `python scripts/list_reddit_flairs.py <sub>` before posting.

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: ChatGPTCoding
TITLE: I read DeepSeek Super-Agent's source before installing it. The allowed list doesn't cover follow-up comments.
FLAIR: Discussion
---BODY---
DeepSeek's dsh-superagent (the "Super-Agent" from last week's headlines) is a coding agent that runs as a service next to one GitHub repo. Someone on its allowed list mentions its GitHub account, it opens a Ticket, works in its own session and git worktree, and replies with a PR. 20K+ stars in a week, five setup guides already.

Before installing it, I read the docs and the TypeScript at commit `8c32a9d`. A few things none of the guides mention:

- **The allowed list only gates new work.** Once a Ticket exists, every human comment on its threads reaches the Executor session, including comments on the agent's own PR. The loop in `src/core/intake.ts` checks that the sender is human and that nobody stopped the Ticket by hand. It doesn't check the allowed list.
- **A comment can resume an ended Ticket.** The PR subscription survives merge or close, so a later comment from anyone wakes the work up again under the original mandate.
- **Full access is hard-coded.** `src/app/sessions.ts:152` sets `danger-full-access` on every session. No approval prompts, runs as your OS user, can read your home directory. The docs call the command wrappers "defaults, not a security boundary."
- **It's not proactive by default.** The "reads your team chat and acts on its own" framing in the press doesn't match the code. Unprompted work needs a team-written rule and starts in `observe` mode, which only records what it would have done.

For comparison, Claude Code Action ignores anyone without write access unless you set `allowed_non_write_users`, and Anthropic's docs call that opt-out a significant security risk. Different trust model entirely.

What I'd run: a separate OS user or VM with only the agent's credentials, a private repo first, only yourself on the allowed list, observe mode, auto-merge off, and stop finished Tickets from the panel (a human-stopped Ticket receives nothing afterwards).

To be clear, I haven't run a Ticket end to end. Everything above is traced to a file in the repo, and I'd like to hear from anyone who has run it whether the behaviour matches.

Full setup walkthrough (gh wrapper for the agent account, the five install commands, status exit codes, the prepare command for per-Ticket worktrees) and the comparison table:

https://avinashsangle.com/blog/deepseek-super-agent-setup-guide

Happy to answer questions about the setup or the code paths.
---POST---
SUBREDDIT: ClaudeAI
TITLE: DeepSeek's Claude Code rival vs claude-code-action: who can actually talk to the agent
FLAIR: Coding
---BODY---
Bloomberg pitched DeepSeek's new Super-Agent (dsh-superagent) as a direct challenge to Claude Code. I read its docs and source at commit `8c32a9d` to see how it compares with what most of us already run in GitHub: claude-code-action.

They solve the same request, "mention the bot on an issue, get a PR," from opposite ends.

- **Where it runs.** claude-code-action runs per event on a GitHub Actions runner. dsh-superagent is a long-running service on your own machine, in tmux, polling the agent account's notifications once a minute.
- **Who can start work.** claude-code-action: users with write access. dsh-superagent: logins on an allowed list you set.
- **Who can talk to running work.** This is the big one. claude-code-action ignores non-write users unless you opt into `allowed_non_write_users`, which Anthropic's security doc labels a significant risk and pairs with env scrubbing. In dsh-superagent, every human comment on a Ticket's threads reaches the worker session, and can resume a Ticket that already ended. No allowed-list check in that path (`src/core/intake.ts`).
- **Command approval.** dsh-superagent sets `danger-full-access` on every session in code (`src/app/sessions.ts:152`). It runs as your OS user and can read your home directory.
- **Models.** dsh-superagent works with any provider DeepSeek Harness supports. claude-code-action is Claude.

The one head-to-head I found (a Towards AI write-up, one small repo) had Claude Code at 37 seconds and Super-Agent at 73 for the same four-line fix, with most of the gap from the one-minute poll.

dsh-superagent does have some good ideas: per-Ticket git worktrees, a persistent Ticket that keeps context across the whole issue thread, and an observe mode for proactive work. If you want to try it, use a separate OS user, a private repo, and only yourself on the allowed list.

I haven't run a Ticket end to end; it's all traced to files in the repo. The full setup guide and comparison table:

https://avinashsangle.com/blog/deepseek-super-agent-setup-guide

Happy to answer questions, especially from anyone running claude-code-action with `allowed_non_write_users`.
