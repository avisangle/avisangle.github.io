# Reddit Posts - Agent Plugins 1.0

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py agent-plugins-getting-started-guide --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

NOTE: flair IDs could not be looked up. `python scripts/list_reddit_flairs.py`
returned `401 HTTP response` for both subs on 2026-08-20, so the FLAIR values
below are names taken from `.claude/subreddit-registry.md`, not verified IDs.
Re-run the lookup after fixing Reddit credentials, or posting may fail flair
validation. A previous r/ClaudeAI post used the flair "Claude Code", which is
not in the registry list, so the registry's flair names may be stale.

---POST---
SUBREDDIT: ClaudeAI
TITLE: Agent Plugins 1.0 shipped without Anthropic, but one repo can still target both formats
FLAIR: Tutorial
---BODY---
Agent Plugins 1.0 landed on August 6 as an open standard for packaging Agent Skills and MCP servers into a single installable folder. The Technical Steering Committee is Amazon, Cursor, Microsoft, OpenAI and Vercel, with Google joining as a Core Maintainer the same day. GitHub made it generally available across VS Code, Copilot CLI, the Copilot SDK and the Copilot app on August 12.

**Anthropic is on neither the committee nor the launch client list**, and the Claude Code plugins reference doesn't mention the standard anywhere. The company that authored Agent Skills and MCP is absent from the format that packages them.

I spent a morning actually building a plugin instead of reading about it. Here is what matters if you maintain Claude Code plugins.

**What actually differs**

- Manifest: `plugin.json` at the root vs `.claude-plugin/plugin.json`
- MCP config: `mcp.json` vs `.mcp.json` (or inline `mcpServers`)
- Path vars: `${PLUGIN_ROOT}` / `${PLUGIN_DATA}` vs `${CLAUDE_PLUGIN_ROOT}` / `${CLAUDE_PLUGIN_DATA}` / `${CLAUDE_PROJECT_DIR}`
- Hooks, slash commands, subagents, rules and LSP servers: outside version 1 entirely

**What already ports byte-identical:** `skills/<name>/SKILL.md`. That's the shared Agent Skills spec doing the work, not the plugin standard, which means the expensive part of your plugin, the written workflow, already travels.

**The finding I care about most:** one repo can satisfy both formats at once. Root `plugin.json` and `mcp.json` sitting next to `.claude-plugin/plugin.json` and `.mcp.json`, sharing a single `skills/` directory. I built that tree and ran `claude plugin validate` on Claude Code v2.1.237. Both the marketplace validation and the plugin-directory validation pass. The validator reads `.claude-plugin/plugin.json` and ignores the root manifests next to it.

The only real duplication is the placeholder spelling, so generate the Claude file from the portable one in a pre-commit hook rather than maintaining both.

**Three schema rules that will bite you.** I validated real manifests against the published JSON Schemas rather than trusting the prose:

1. `type` is required on every `mcp.json` server entry. Claude Code's `.mcp.json` lets you omit it for stdio, so copying the block straight across fails, and the error only says the object isn't valid under any of the given schemas.
2. `"cwd": "server"` fails. Relative paths need the `./` prefix.
3. `command` receives no placeholder expansion at all. Only `args`, `env` values and `cwd` do, single-pass, so a placeholder introduced by a substitution stays literal.

**And one gap nobody documents:** the written spec says unknown top-level fields are reported and ignored without invalidating the plugin. Both published schemas set `additionalProperties: false`. So a leftover `hooks` field passes silently at runtime and hard-fails the moment you validate in CI.

**Should you migrate?** If you publish skills or MCP servers for other people, adding the second manifest costs you one file. If your plugin is private and Claude Code only, nothing breaks either way, so do it next time you touch the repo. Version 1.1.0 is already a working draft.

Full walkthrough with the build, the validation output, and the dual-manifest tree: https://avinashsangle.com/blog/agent-plugins-getting-started-guide

Happy to answer questions, especially if someone with a Copilot surface can confirm whether a dual-format tree registers the MCP server twice in VS Code. The docs say plugin servers load from `mcp.json` or `.mcp.json`, and I had no way to test that half.
---POST---
SUBREDDIT: mcp
TITLE: The mcp.json rules in Agent Plugins 1.0 that reject a config copied from .mcp.json
FLAIR: Tutorial
---BODY---
Agent Plugins 1.0 shipped on August 6 and it's the first standard that packages an MCP server together with the skills that tell an agent how to use it. Six clients read the format today: ChatGPT, Codex, Cursor, GitHub Copilot, Kiro and VS Code.

The MCP half is where the sharp edges are. I validated real manifests against the two published JSON Schemas rather than reading the prose, and these are the rules that actually reject things.

**`type` is required on every server entry.** Three transports are defined: `stdio`, `streamable-http`, and `sse`, the last already deprecated and optional for clients to support. Every variant lists `type` in its required array and the parent is a `oneOf`, so omitting it fails. This matters because Claude Code's `.mcp.json` lets you omit `type` for stdio servers, which makes "copy the block across" the natural migration move and also a broken one. The error names none of this, it just says the object is not valid under any of the given schemas.

**`command` is a token, not a shell string, and gets no placeholder expansion.** So `"command": "${PLUGIN_ROOT}/bin/server"` will not work. Expansion applies only to `args` elements, `env` values and `cwd`, and it runs exactly once: text introduced by a replacement is never rescanned.

**Relative paths need the `./` prefix.** A bare `"cwd": "server"` fails the schema pattern. It has to be `./server`, `${PLUGIN_ROOT}`, or `${PLUGIN_DATA}`, and the result still has to sit inside that root after expansion.

**PLUGIN_ROOT is read-only, PLUGIN_DATA is writable.** Clients inject both and the schema forbids you from defining either name in your own `env` block. `PLUGIN_ROOT` is the installed package and gets replaced wholesale on update. `PLUGIN_DATA` survives updates. Caches and downloaded dependencies belong in the second one.

**Path containment failures are graded, not uniform.** A bad path in `plugin.json` rejects the whole plugin. A bad skill path skips that one skill. A bad `command` or `cwd` invalidates only that server entry. If two of your three servers load and the third doesn't, that's where to look.

**Security items worth knowing before you publish:** headers are visible package data, so the spec forbids embedding credentials in them. Version 1 defines no OAuth configuration and no portable credential-reference field, so every authenticated server needs an out-of-band secret story. And VS Code's docs state that plugin MCP servers are implicitly trusted when you install the plugin, with no per-server prompt.

**Schema vs prose gap:** the written spec says unknown top-level fields are reported and ignored without invalidating the plugin, but both published schemas set `additionalProperties: false`. A stray field passes at runtime and hard-fails in CI.

Both schemas are fetchable, so CI validation needs no vendor tooling:

    curl -sO https://agent-plugins.org/schemas/1.0.0/plugin.schema.json
    curl -sO https://agent-plugins.org/schemas/1.0.0/mcp.schema.json

Full writeup, including a dual-manifest layout that also passes `claude plugin validate`: https://avinashsangle.com/blog/agent-plugins-getting-started-guide

Happy to answer questions if you're packaging an existing server.
