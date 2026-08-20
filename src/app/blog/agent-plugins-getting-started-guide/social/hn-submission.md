# Hacker News Submission - Agent Plugins 1.0

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Agent Plugins 1.0: the published schemas are stricter than the spec text

**URL:** https://avinashsangle.com/blog/agent-plugins-getting-started-guide

---

**First Comment:**

I wanted to package an existing MCP server as an Agent Plugin, so I built one and validated it against the two published JSON Schemas instead of working from the prose. Two things surprised me. The spec text says unknown top-level fields are reported and ignored without invalidating a plugin, but both schemas set additionalProperties to false, so a leftover field passes at load time and hard-fails in CI. And `type` is required on every mcp.json server entry, which means a config copied from Claude Code's .mcp.json (where it's optional for stdio) is rejected with an error that only says the object isn't valid under any of the given schemas.

The other half was whether a single repo can carry both manifests. It can: root plugin.json and mcp.json alongside .claude-plugin/plugin.json and .mcp.json, sharing one skills directory, and `claude plugin validate` passes on v2.1.237.

One thing I couldn't test: VS Code's docs say plugin MCP servers load from mcp.json or .mcp.json, so a dual-format tree might register the same server twice. If anyone with a Copilot surface has tried it, I'd like to know.
