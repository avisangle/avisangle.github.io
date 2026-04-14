# Hacker News Submission - Claude Managed Agents vs Agent SDK

**Post date:** Day 1
**Best time:** 2:00 PM IST

---

**Title:** Claude Managed Agents vs Agent SDK: Architecture, Pricing, and When to Use Each

**URL:** https://avinashsangle.com/blog/claude-managed-agents

---

**First Comment:**

Author here. Anthropic launched Managed Agents in beta on April 8. I went through the API docs and SDK to understand how it differs from the existing Agent SDK.

The core distinction: Managed Agents runs the agent harness in Anthropic's infrastructure (sandboxed containers, persistent sessions, built-in web browsing). The Agent SDK exposes the same engine for self-hosted runtimes.

The pricing model is interesting - $0.08 per active session-hour on top of standard token rates, with idle time excluded. For long-running research or batch tasks, this is cheaper than maintaining your own agent infra. For short, frequent tasks against local files, the SDK makes more sense.

The article covers the architecture comparison, pricing math, code examples for both, and a decision framework. Feedback welcome.
