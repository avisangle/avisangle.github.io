# Twitter/X Long-form Post - Agent Plugins 1.0

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py agent-plugins-getting-started-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Agent Plugins 1.0 shipped on August 6. Amazon, Cursor, Microsoft, OpenAI, Vercel and Google on the steering committee.

Anthropic isn't on it.

The company that wrote Agent Skills and MCP is absent from the standard that packages them.

WHAT IT IS

A folder with plugin.json at the root that bundles skills and MCP servers so one package installs into several clients. Skills live in skills/<name>/SKILL.md. MCP servers go in mcp.json.

Six clients read it today: ChatGPT, Codex, Cursor, GitHub Copilot, Kiro, VS Code. GitHub made it GA across all Copilot surfaces on August 12.

Claude Code is not one of them.

WHAT I ACTUALLY TESTED

I downloaded both published JSON Schemas and validated real manifests against them instead of trusting the prose. Three things bite immediately:

1. `type` is REQUIRED on every mcp.json server entry. Claude Code's .mcp.json lets you omit it for stdio. So the obvious migration move, copy the block across, fails validation. The error doesn't tell you why either. It just says the object isn't valid under any of the given schemas.

2. `"cwd": "server"` fails. Relative paths need the ./ prefix.

3. `command` gets no placeholder expansion at all. Only args, env values and cwd do, and the expansion is single-pass, so a placeholder that arrives inside a substituted value stays literal.

THE PART THE DOCS DON'T WARN YOU ABOUT

The written spec says unknown top-level fields are reported and ignored without invalidating the plugin.

Both published schemas set additionalProperties: false.

So a leftover Claude Code field like `hooks` passes silently at runtime and hard-fails the moment you validate in CI.

ONE REPO, BOTH FORMATS

You don't have to pick. Root plugin.json + mcp.json alongside .claude-plugin/plugin.json + .mcp.json, sharing one skills/ directory.

I built that tree and ran `claude plugin validate` on Claude Code v2.1.237. Both the marketplace and the plugin directory pass. The validator reads .claude-plugin/plugin.json and ignores the root manifests sitting next to it.

The only real duplication is the placeholder spelling: ${PLUGIN_ROOT} in one file, ${CLAUDE_PLUGIN_ROOT} in the other. Generate the second from the first in a pre-commit hook.

WHAT DOESN'T PORT

Commands, hooks, agents, rules and LSP servers are all outside v1. So is OAuth config and any portable credential reference.

Skills port byte-identical, but that's the Agent Skills spec doing the work, not this one.

Treat it as a packaging standard, not a portability guarantee.

THE SECURITY LINE WORTH READING TWICE

From the VS Code docs: "Plugin MCP servers are implicitly trusted when you install the plugin."

No per-server prompt. Trust granted once, at marketplace level, on first install from a new source.

Full build walkthrough, the schema rules, and the dual-manifest layout:
https://avinashsangle.com/blog/agent-plugins-getting-started-guide

Follow @avi_sangle
