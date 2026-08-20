# LinkedIn Post - Agent Plugins 1.0

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py agent-plugins-getting-started-guide --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
A new packaging standard for AI agents shipped on August 6, backed by Amazon, Cursor, Microsoft, OpenAI, Vercel and Google.

Anthropic, which wrote both of the things being packaged, is not part of it.

Agent Plugins 1.0 puts Agent Skills and MCP servers into one installable folder. Six clients read it today: ChatGPT, Codex, Cursor, GitHub Copilot, Kiro and VS Code. GitHub made it generally available across every Copilot surface on August 12. Claude Code keeps its own format.

I spent a morning building a plugin against it rather than reading about it, and validated everything against the published JSON Schemas instead of the prose. What I found:

- The `type` field is required on every MCP server entry. Claude Code's .mcp.json lets you omit it, so the obvious migration, copying the block across, fails validation with an error that explains nothing.

- The written spec says unknown top-level fields are ignored without invalidating a plugin. Both published schemas set additionalProperties to false. A leftover field passes at runtime and hard-fails in CI. Those two statements describe different moments, but the gap is real and undocumented.

- One repository can satisfy both formats at once. Root plugin.json and mcp.json next to .claude-plugin/plugin.json and .mcp.json, sharing a single skills directory. I ran `claude plugin validate` on Claude Code v2.1.237 and it passes, because each client ignores the manifest it doesn't recognise.

- Commands, hooks, subagents, rules and LSP servers are all outside version 1. So is OAuth configuration.

The part I'd underline for anyone running a team: VS Code's own documentation says plugin MCP servers are implicitly trusted when you install the plugin. No per-server prompt. Trust is granted once, at marketplace level, and every server from that source inherits it. A plugin is a folder of executable configuration fetched from a Git host, so that is a supply chain with a single decision at the front of it.

Calibrate the expectation accordingly. This is a packaging standard, not a portability guarantee. Your skills and MCP config travel. The workflow you built around them stays where it is.

Full walkthrough, with the schema rules that reject a copy-pasted config and the dual-manifest layout that works in both ecosystems:
https://avinashsangle.com/blog/agent-plugins-getting-started-guide

If you maintain an MCP server or a skill library, are you packaging for the new standard, staying native, or shipping both?

#AgentPlugins #ModelContextProtocol #ClaudeCode #AITooling #DeveloperExperience
