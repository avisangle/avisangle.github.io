# LinkedIn Post - How to Set Up DeepSeek Super-Agent (dsh-superagent) Safely

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py deepseek-super-agent-setup-guide --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Last week DeepSeek open-sourced a coding agent that sits on your machine, watches a GitHub repo, and opens pull requests when a teammate asks. It passed 20,000 GitHub stars in seven days, and within three days there were five setup guides online.

I read all of them, then read the project's docs and source myself. The install is the easy part. What none of the guides mention is who gets to talk to the agent once it's working.

What I found at commit 8c32a9d:

- The allowed list controls who can start a task. It doesn't control who can reply to one. Once the agent opens a pull request, a comment from any human GitHub account reaches the session doing the work, and can wake a task that already finished.
- Every session runs with full access, set in code with no option to change it. It runs commands without asking and can read the operator's home directory.
- DeepSeek's own docs say the command wrappers are "defaults, not a security boundary."
- Tencent's Zhuque Lab tested prompt injection on the underlying DeepSeek Harness in August: 5.6% of attacks fully succeeded across 14,560 runs.
- By contrast, Claude Code's GitHub Action ignores anyone without write access unless you opt out, and Anthropic labels that opt-out a significant security risk.

None of this makes the project bad. The design is thoughtful, it defaults to observe mode for proactive work, and DeepSeek is upfront that it's a research prototype. It does mean the safe setup looks different from the quick one: a separate OS user, a private repo first, only yourself on the allowed list, auto-merge off.

I haven't run a task end to end yet, and the post says so. Everything in it is traced to a file in the repo.

https://avinashsangle.com/blog/deepseek-super-agent-setup-guide

If you're trying self-hosted coding agents, where do you draw the line between what it may read and what it may run?

#AIAgents #DeepSeek #DevSecOps #CodingAgents #OpenSource
