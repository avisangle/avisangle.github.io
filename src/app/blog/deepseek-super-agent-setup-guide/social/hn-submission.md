# Hacker News Submission - How to Set Up DeepSeek Super-Agent (dsh-superagent) Safely

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** DeepSeek Super-Agent: comments from anyone reach its full-access worker

**URL:** https://avinashsangle.com/blog/deepseek-super-agent-setup-guide

---

**First Comment:**

Author here. I read the dsh-superagent docs and source at commit 8c32a9d. The allowed list gates who can start a Ticket, but every human comment on a Ticket's threads, including the agent's own PR after it merges, reaches the Executor and can resume an ended Ticket (src/core/intake.ts). Every session is set to danger-full-access in src/app/sessions.ts, so on a public repo that's outsider text in an unapproved shell session. I haven't run a Ticket end to end, so corrections from anyone who has are welcome.
