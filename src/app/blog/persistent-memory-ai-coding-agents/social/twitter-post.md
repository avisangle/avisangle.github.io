# Twitter/X Long-form Post - Persistent Memory for AI Coding Agents

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py persistent-memory-ai-coding-agents --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Persistent memory for AI coding agents in 2026, broken down.

CLAUDE.md is the floor, not the ceiling. It loads at session start and never updates. Anything the agent learns mid-session is gone at /exit. Long refactors, multi-session debugging, team-shared learnings all hit that wall.

THE THREE TIERS

Tier 1 - Static files (CLAUDE.md, AGENTS.md). Zero infra, read-only.
Tier 2 - MCP memory servers (agentmemory, claude-mem, mcp-memory-service). Local SQLite, cross-session recall, works in any MCP client.
Tier 3 - Platform-native: Anthropic Memory tool, Dreaming, Memory for Managed Agents, Cloudflare Agent Memory.

THE NUMBERS THAT MATTER

agentmemory: 19.5K stars, 95.2% R@5 on LongMemEval-S, ~92% context reduction, 12 auto-capture hooks, dashboard on :3113.

claude-mem: 79.5K stars, ~10x token savings, plugin marketplace install, Postgres + BullMQ server-beta for teams.

Anthropic Memory tool + context editing: 84% token savings on long-running tasks. Beta header context-management-2025-06-27. Tool type memory_20250818.

Dreaming (research preview): Harvey reported ~6x lift in task-completion rates.

THE GOTCHA NOBODY MENTIONS

The Anthropic Memory tool is NOT Claude Code CLI memory. memory_20250818 is an API capability you wire into agents you build with the SDK. Claude Code the CLI uses CLAUDE.md + MCP servers. If you want Memory-tool semantics inside Claude Code, the path is an MCP server.

FIVE-MINUTE INSTALL (agentmemory + Claude Code)

npm install -g @agentmemory/agentmemory
claude mcp add agentmemory agentmemory -- serve --stdio
claude
/mcp # expect: agentmemory connected
open http://localhost:3113

Next session: "What do you remember about this project?"

PICK THE LOWEST TIER THAT SOLVES YOUR PROBLEM

Solo dev, short sessions: CLAUDE.md only.
Solo dev, week-long work: CLAUDE.md + agentmemory or claude-mem.
Team with shared agents + audit: Memory for Managed Agents.
Building on the API: Memory tool + context editing.

Full breakdown with the benchmark caveats, decision matrix, and trade-offs (token cost, staleness, cross-agent leakage):

https://avinashsangle.com/blog/persistent-memory-ai-coding-agents

Follow @avi_sangle for more practical Claude Code playbooks.
