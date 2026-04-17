# Hacker News Submission - Getting Started with the ant CLI

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Getting Started with the ant CLI: Anthropic's CLI for Managing Cloud Agents

**URL:** https://avinashsangle.com/blog/ant-cli-getting-started

---

**First Comment:**

Author here. Anthropic shipped the ant CLI alongside Managed Agents on April 8. It's a Go binary for creating and managing cloud-hosted Claude agents from the terminal.

The part I found most interesting is the YAML version control workflow - define agents as .agent.yaml files, check them into Git, deploy through CI. Updates require the current version number (optimistic concurrency). Nobody's covered this specific workflow yet, so I wrote a hands-on tutorial.

The CLI is separate from Claude Code. Claude Code is interactive and subscription-based. The ant CLI is programmatic and API-key-based. They complement each other. Feedback welcome.
