# Reddit Posts - Persistent Memory for AI Coding Agents

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py persistent-memory-ai-coding-agents --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: ClaudeAI
TITLE: Persistent memory for Claude Code beyond CLAUDE.md - the three tiers and what each one actually buys you
FLAIR: MCP
---BODY---
CLAUDE.md is the floor, not the ceiling. It loads at session start and never updates. Anything Claude learns mid-session is gone at /exit. Long refactors, multi-session debugging, and team-shared learnings all hit that wall.

After spending a few weeks evaluating the options, here is the frame I now use.

**Tier 1 - Static files (CLAUDE.md, AGENTS.md).** Zero infra, read-only. Handles ~80% of solo workflows. When the file grows past a few hundred lines or work spans days, Tier 1 starts costing more than it saves.

**Tier 2 - MCP memory servers.** Three projects dominate as of May 2026:

- **agentmemory** (19.5K stars) - SQLite + BM25 + vector + knowledge graph, 12 auto-capture hooks, dashboard on :3113. Publishes 95.2% R@5 on LongMemEval-S and ~92% context reduction. Zero infra. Apache-2.0.
- **claude-mem** (79.5K stars) - SQLite + FTS5 + Chroma, summary-on-clear hook, plugin marketplace install. Advertises ~10x token savings. v13+ ships a Postgres + BullMQ server-beta runtime for team deployments.
- **mcp-memory-service** - SQLite knowledge graph + REST API, autonomous consolidation, LangGraph/CrewAI/AutoGen integrations.

**Tier 3 - Platform-native.** Anthropic's Memory tool (memory_20250818) plus context editing show 84% token savings on long-running tasks. Dreaming - a scheduled cross-session memory curator shipped at Code with Claude - drove ~6x task-completion lift for Harvey per Anthropic's own writeup. Memory for Managed Agents in public beta adds audit logs and cross-agent sharing.

**The gotcha most posts miss:** the Anthropic Memory tool is NOT Claude Code CLI memory. memory_20250818 is an API capability for agents you build with the SDK. Claude Code the CLI uses CLAUDE.md + MCP servers for persistence today. If you want Memory-tool semantics inside Claude Code, the path is an MCP server, not a flag.

Full write-up with the install steps, a decision matrix by team size, and the trade-offs (token cost, staleness, cross-agent leakage):

https://avinashsangle.com/blog/persistent-memory-ai-coding-agents

Happy to answer questions if anyone is wiring this into a Claude Code setup.
---POST---
SUBREDDIT: mcp
TITLE: Comparing the three leading MCP memory servers (agentmemory, claude-mem, mcp-memory-service) with benchmarks
FLAIR: discussion
---BODY---
A lot of the MCP memory space matured in the last quarter and most of the existing comparisons are out of date. Here is the head-to-head I landed on as of May 2026.

**agentmemory** - 19.5K stars, Apache-2.0. SQLite with BM25 + vector + knowledge-graph hybrid retrieval. 12 auto-capture hooks, 4-tier consolidation (working / episodic / semantic / procedural), real-time dashboard on :3113. Published benchmark: 95.2% R@5 on LongMemEval-S, ~92% context reduction. Zero infra - npm global install and an MCP stdio server.

**claude-mem** - 79.5K stars, Apache-2.0. SQLite + FTS5 with Chroma vector layer. Summary-on-clear hook rather than per-tool-call hooks. Web viewer on :37777. Advertises ~10x token savings through layered search (compact index then timeline then detailed fetch). v13.3.0 ships a server-beta backed by Postgres + BullMQ - that's the path if you need multi-user team deployments. Plugin marketplace install: `/plugin marketplace add thedotmack/claude-mem` inside Claude Code.

**mcp-memory-service** - SQLite knowledge graph with entity/relation/observation API and a REST surface. Autonomous consolidation. Strong native integration with LangGraph, CrewAI, and AutoGen. Good when you need cross-framework memory beyond Claude Code.

**Honest caveat on the benchmarks:** LongMemEval-S is a retrieval suite. 95.2% R@5 says the retrieval is solid; it does not say "your agent codes 95% better." Procedural memory - learned workflows and tool-use habits - is the gap most current evals still skip. Hooks-based capture is where the actual coding-agent wins come from, but it costs tokens per tool call, so watch the dashboard for the first week before you trust it.

Five-minute install path with claude mcp add command, the ~/.claude.json block, and how it plays with Anthropic's first-party Memory tool (which is API-only, not Claude Code CLI) here:

https://avinashsangle.com/blog/persistent-memory-ai-coding-agents

Curious which one others have shipped to production and what broke.
---POST---
SUBREDDIT: AI_Agents
TITLE: How persistent memory actually works for AI coding agents in 2026 - three tiers, with benchmarks
FLAIR: Discussion
---BODY---
Memory was the missing piece in 2025. In 2026 it is treated as a dedicated architectural component, not just a longer prompt. Here is the practitioner frame I use after spending a few weeks comparing the options.

**Tier 1 - Static project files.** CLAUDE.md, AGENTS.md, .cursor/rules. Read-only at session start. Handles project rules, conventions, build commands. Falls over when the agent needs to learn between sessions.

**Tier 2 - MCP memory servers.** External processes exposing memory-shaped tools to any MCP client. Two stand out for coding agents: agentmemory (19.5K stars, 95.2% R@5 on LongMemEval-S, hooks-based auto-capture, 4-tier consolidation across working/episodic/semantic/procedural memory) and claude-mem (79.5K stars, ~10x token savings, server-beta on Postgres + BullMQ for teams).

**Tier 3 - Platform-native memory.** Anthropic's Memory tool (memory_20250818) pairs with context editing for 84% token savings on long-running tasks. Dreaming - announced at Code with Claude on May 6-7 - is a scheduled process that reviews past sessions, extracts patterns, and curates memory between runs. Harvey reported ~6x task-completion lift after enabling it (Anthropic's number, not independent). Memory for Managed Agents in public beta adds per-write audit logs and cross-agent sharing across a workspace. Cloudflare Agent Memory entered private beta on April 17 for edge-distributed workloads.

**Memory taxonomy that helps frame the choice** (from mem0's State of AI Agent Memory 2026): episodic, semantic, procedural. Procedural is the underserved one. That is exactly the gap hooks-based MCP servers attack.

**The trade-off most people underestimate:** stored facts that became wrong after a refactor are worse than no memory. The store will confidently return outdated guidance and the agent will trust it. Either schedule a weekly prune or use Dreaming-style curation.

Decision matrix by team size and runtime, plus a five-minute Claude Code install walkthrough:

https://avinashsangle.com/blog/persistent-memory-ai-coding-agents

What is your team using? Curious which combinations actually survived production.
---POST---
SUBREDDIT: ChatGPTCoding
TITLE: Persistent memory for AI coding agents in 2026 - comparing CLAUDE.md, MCP servers, and Anthropic's Memory tool
FLAIR: Resources And Tips
---BODY---
The "agent forgets after every session" problem finally has serious answers. Here is the comparison I wish existed when I started looking.

**Three tiers, each with a different owner of the storage:**

**Tier 1 - Static project files.** CLAUDE.md (Claude Code), AGENTS.md (Codex and friends), .cursor/rules. Read-only at session start. Cheap, version-controlled, deterministic. Read-only is the wall.

**Tier 2 - MCP memory servers.** The same server works in Claude Code, Codex, Gemini CLI, anywhere that speaks MCP. Three projects worth comparing as of May 2026:
- **agentmemory** (19.5K stars) - 95.2% R@5 on LongMemEval-S, ~92% context reduction, SQLite + hybrid retrieval, dashboard on :3113. Zero infra.
- **claude-mem** (79.5K stars) - ~10x token savings, plugin marketplace install, Postgres-backed server-beta for teams.
- **mcp-memory-service** - knowledge-graph entities/relations with REST API, LangGraph/CrewAI/AutoGen integrations.

**Tier 3 - Platform-native.** Anthropic's Memory tool (memory_20250818) plus context editing show 84% token savings on long-running tasks. Dreaming (research preview, May 6 announcement) refines memory cross-session - Harvey reported ~6x task-completion lift. Memory for Managed Agents adds audit logs and workspace-wide sharing.

**The confusion that trips everyone up:** the Anthropic Memory tool is NOT the same thing as Claude Code CLI memory. memory_20250818 is an API capability for agents you build with the SDK. Claude Code the CLI uses CLAUDE.md + MCP servers. If you want Memory-tool behavior inside Claude Code today, the path is an MCP server.

**Picking the right tier:**
- Solo dev, short sessions -> CLAUDE.md only.
- Solo dev, week-long work -> CLAUDE.md + agentmemory or claude-mem.
- Team with audit needs -> Memory for Managed Agents or claude-mem server-beta.
- Building on the API -> Memory tool + context editing.

Five-minute install walkthrough, the decision matrix, and the trade-offs (token cost, staleness, cross-agent leakage):

https://avinashsangle.com/blog/persistent-memory-ai-coding-agents

Curious what others actually shipped and what broke first.
