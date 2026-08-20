# Dev.to + Hashnode Cross-post - Agent Plugins 1.0

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py agent-plugins-getting-started-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py agent-plugins-getting-started-guide --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Agent Plugins 1.0: Build One Plugin for Claude Code and Copilot
DESCRIPTION: Agent Plugins 1.0 packages skills and MCP servers into one portable folder. Building one from scratch, the schema rules that reject a copy-pasted MCP config, and the dual-manifest layout that works in both ecosystems.
TAGS: mcp, ai, claudecode, devtools
CANONICAL_URL: https://avinashsangle.com/blog/agent-plugins-getting-started-guide
COVER_IMAGE: https://avinashsangle.com/og-agent-plugins-getting-started-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/agent-plugins-getting-started-guide).

An Agent Plugin is a folder with `plugin.json` at its root that bundles Agent Skills and MCP servers so one package installs into several agent clients. Version 1.0.0 shipped on August 6, 2026. Claude Code is not one of those clients, which is the part worth planning around.

## TL;DR

- **Three files, one folder:** `plugin.json` at the root, skills under `skills/<name>/SKILL.md`, MCP servers in `mcp.json`. Six clients read that layout today: ChatGPT, Codex, Cursor, GitHub Copilot, Kiro, and VS Code.
- **Anthropic sat this one out.** The company that wrote Agent Skills and MCP is on neither the steering committee nor the client list, and Claude Code still reads `.claude-plugin/plugin.json`.
- **One repo can carry both manifests.** I built the dual layout and ran `claude plugin validate` on it under Claude Code v2.1.237. It passes, because each client ignores the other format.
- **The schemas are stricter than the prose.** Both manifests set `additionalProperties: false`, and an MCP entry without an explicit `type` fails validation, which is exactly what a copy-paste from `.mcp.json` gives you.

## What Is an Agent Plugin, and What Does It Package?

An Agent Plugin packages exactly two things: Agent Skills and MCP server configuration. That is the entire portable surface. The [1.0.0 specification](https://agent-plugins.org/specification) was published on August 6, 2026 by a Technical Steering Committee drawn from Amazon, Cursor, Microsoft, OpenAI, and Vercel, with Google joining as a Core Maintainer the same day. On August 12 GitHub made it generally available across VS Code, Copilot CLI, the Copilot SDK, and the Copilot app on all Copilot plans.

The problem it solves is narrow and real. A skill and an MCP server both work fine on their own, and then you ship them to a second client and maintain two forks of the same thing. MCP standardised the wire protocol in 2024 and Agent Skills standardised the instruction file, but nothing standardised the box they travel in. Agent Plugins is the box.

The manifest is deliberately boring. Only ten top-level fields are permitted: `$schema`, `name`, `version`, `description`, `author`, `homepage`, `repository`, `license`, `keywords`, and `extensions`. Of those, only the first two are required. `$schema` must be the exact 1.0.0 URL, not a version range and not a redirect.

Skill discovery has one rule that catches people. Clients look at the immediate children of `skills/` for a file named exactly `SKILL.md`, and the spec says clients **must not** search deeper. If you organise skills into categories, every skill below the second level disappears with no error. The plugin still loads. The skills just are not there.

## How to Build an Agent Plugin in Ten Minutes

I built this one around a real payload rather than a hello-world: a Jenkins MCP server plus a skill that tells the agent when to reach for it. That pairing is the argument for the format. An MCP server gives the agent tools; it does not tell the agent that build failures should be diagnosed from the first failing stage rather than the last log line. The skill carries the workflow, the server carries the capability, and until now there was no way to ship them as one thing.

```text
jenkins-ops/
├── plugin.json                              # required, root only
├── mcp.json                                 # optional, root only
├── skills/
│   └── trigger-jenkins-build/
│       └── SKILL.md                         # discovered; one level deep
└── server/
    └── index.js                             # the MCP server itself
```

The manifest is four lines of substance. Note the `name` pattern: lowercase alphanumerics with hyphens and periods, no consecutive separators, and it has to start and end on an alphanumeric character. I fed `Jenkins--Ops` to the published schema to check, and it fails on both counts at once.

```json
{
  "$schema": "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json",
  "name": "jenkins-ops",
  "version": "0.1.0",
  "description": "Jenkins MCP server plus a skill that teaches the agent when to use it",
  "author": { "name": "Avinash Sangle", "url": "https://avinashsangle.com" },
  "license": "MIT",
  "keywords": ["jenkins", "ci", "mcp"]
}
```

The skill is a plain Markdown file with frontmatter. This is the piece that already ports everywhere, because it is governed by the Agent Skills specification rather than by the plugin standard. The same file works in Claude Code today with no changes, which is worth knowing before you rewrite anything.

```markdown
---
name: trigger-jenkins-build
description: Trigger a Jenkins job and follow its console output. Use when asked to run a build, rerun a failed pipeline, or check why a job is red.
---

# Trigger a Jenkins build

1. Resolve the job name with the `list_jobs` tool before guessing a path.
2. Trigger with `build_job`, passing parameters as a flat object.
3. Poll `get_build_status` until it leaves BUILDING, then fetch the console log tail.
4. On failure, report the first failing stage, not the last log line.
```

That is a valid plugin. It will load skills in any of the six launch clients. The MCP half is where the rules get sharp.

## The mcp.json Rules That Break Plugins Quietly

`mcp.json` lives at the plugin root, carries its own `$schema` URL, and wraps everything in an `mcpServers` object. Three transports are defined: `stdio`, `streamable-http`, and `sse`, the last already marked deprecated and optional for clients to support.

```json
{
  "$schema": "https://agent-plugins.org/schemas/1.0.0/mcp.schema.json",
  "mcpServers": {
    "jenkins": {
      "type": "stdio",
      "command": "node",
      "args": ["${PLUGIN_ROOT}/server/index.js"],
      "env": { "JENKINS_CACHE_DIR": "${PLUGIN_DATA}/cache" }
    }
  }
}
```

Four rules decide whether that file works, and I checked each of them against the published schemas rather than the prose.

**The type field is mandatory.** Claude Code's `.mcp.json` lets you omit it for stdio servers, so the obvious migration move is to copy the block across. I tried it. The schema rejects the entry outright, because every server variant lists `type` in its required array and the parent is a `oneOf`. The error names none of that, it just says the object is not valid under any of the given schemas.

```text
## bad-no-type.json: INVALID
   path: ['mcpServers', 'jenkins'] | {'command': 'node', 'args': [...]} is not valid under any of the given schemas

## bad-cwd.json: INVALID
   path: ['mcpServers', 'jenkins'] | {'type': 'stdio', 'command': 'node', 'cwd': 'server'} is not valid under any of the given schemas

## bad-name.json: INVALID
   path: ['name'] | 'Jenkins--Ops' does not match '^(?!.*(?:--|\.\.))[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?$'
```

**The command is a token, not a shell string.** It gets no placeholder expansion at all, which rules out `"command": "${PLUGIN_ROOT}/bin/server"`. Expansion applies only to `args` elements, `env` values, and `cwd`, and it runs exactly once: text introduced by a replacement is never rescanned, so a placeholder that arrives inside a substituted value stays literal.

**Relative paths need the ./ prefix.** A bare `"cwd": "server"` fails the schema pattern. It has to be `./server`, `${PLUGIN_ROOT}`, or `${PLUGIN_DATA}`, and after expansion the result still has to sit inside the corresponding root.

**PLUGIN_ROOT is read-only, PLUGIN_DATA is where you write.** Clients inject both, and the schema forbids you from defining either name in your own `env` block. `PLUGIN_ROOT` is the installed package, which gets replaced wholesale on update. `PLUGIN_DATA` is a client-managed directory that survives updates. Caches, downloaded dependencies, and generated files belong in the second one, and I have watched a plugin lose its cache on every upgrade because it wrote to the first.

Path containment is enforced after symlink resolution, and the failure modes are graded rather than uniform. A bad path in `plugin.json` rejects the whole plugin. A bad skill path skips that one skill. A bad `command` or `cwd` invalidates only that server entry. So if two of your three servers load and the third does not, the containment rules are the first place to look.

## Does Claude Code Support Agent Plugins 1.0?

No, and there is no announced plan to. As of August 20, 2026 Anthropic appears on neither the steering committee nor the launch client list, and the [Claude Code plugins reference](https://code.claude.com/docs/en/plugins-reference) does not mention the standard anywhere. The company that authored both halves of the cargo is absent from the standard that packages it.

The practical gap is smaller than that sounds. Here is what actually differs, with both columns taken from vendor documentation rather than announcements.

| Component | Agent Plugins 1.0 | Claude Code |
|---|---|---|
| Manifest | `plugin.json` at root, required | `.claude-plugin/plugin.json`, optional |
| Skills | `skills/<name>/SKILL.md` | `skills/<name>/SKILL.md` |
| MCP config | `mcp.json`, `type` required | `.mcp.json` or inline `mcpServers` |
| Path variables | `PLUGIN_ROOT`, `PLUGIN_DATA` | `CLAUDE_PLUGIN_ROOT`, `CLAUDE_PLUGIN_DATA`, `CLAUDE_PROJECT_DIR` |
| Hooks, commands, subagents, LSP | outside version 1 | native, documented |
| Distribution | out of scope, client-defined | `.claude-plugin/marketplace.json` |

One row in that table matters more than the rest. Skills are byte identical on both sides. That is the shared Agent Skills specification doing the work, not the plugin standard, and it means the expensive part of your plugin, the written workflow, already ports. What does not port is the wrapper and the client-specific extras.

## Shipping One Repo to Both Formats

The migration guide in the [official example repository](https://github.com/agentplugins/agent-plugins-example) recommends an additive approach: add the new manifest, remove nothing. That advice extends further than the repo spells out. Since each client reads the manifest it knows and ignores the other, a single tree can satisfy both formats at once.

```text
jenkins-ops/
├── plugin.json                  # Agent Plugins 1.0 reads this
├── mcp.json                     #   ... and this  (${PLUGIN_ROOT})
├── .claude-plugin/
│   └── plugin.json              # Claude Code reads this
├── .mcp.json                    #   ... and this  (${CLAUDE_PLUGIN_ROOT})
├── skills/
│   └── trigger-jenkins-build/
│       └── SKILL.md             # shared, unchanged, by both
└── server/
    └── index.js
```

The duplication is smaller than it looks. Two manifests, but the second one is metadata you have already written. Two MCP files, and here the only substantive difference is the placeholder spelling: `${PLUGIN_ROOT}` in one file, `${CLAUDE_PLUGIN_ROOT}` in the other. The skills directory is shared outright.

```json
{
  "mcpServers": {
    "jenkins": {
      "command": "node",
      "args": ["${CLAUDE_PLUGIN_ROOT}/server/index.js"],
      "env": { "JENKINS_CACHE_DIR": "${CLAUDE_PLUGIN_DATA}/cache" }
    }
  }
}
```

Two files that differ by a prefix will drift, so generate one from the other rather than maintaining both by hand. Fifteen lines of Python in a pre-commit hook is enough, and it keeps the portable file as the source of truth.

```python
#!/usr/bin/env python3
"""Generate .mcp.json (Claude Code) from mcp.json (Agent Plugins 1.0)."""
import json
from pathlib import Path

src = json.loads(Path("mcp.json").read_text())
out = {"mcpServers": {}}

for name, server in src["mcpServers"].items():
    # Claude Code infers stdio and uses its own placeholder names.
    entry = {k: v for k, v in server.items() if k != "type"}
    blob = json.dumps(entry).replace("${PLUGIN_ROOT}", "${CLAUDE_PLUGIN_ROOT}")
    blob = blob.replace("${PLUGIN_DATA}", "${CLAUDE_PLUGIN_DATA}")
    out["mcpServers"][name] = json.loads(blob)

Path(".mcp.json").write_text(json.dumps(out, indent=2) + "\n")
```

One caution I could not resolve from my own machine. The [VS Code documentation](https://code.visualstudio.com/docs/agent-customization/agent-plugins) says plugin MCP servers load from `mcp.json` in the Agent Plugins format *or* from `.mcp.json` in the Copilot and Claude formats. A dual-format tree contains both. I have no Copilot surface here to test whether that registers the same server twice, so treat it as an open question: install into VS Code, check your server list for duplicates, and drop the `.mcp.json` from the published artifact if they appear.

## Validating and Installing the Plugin

Both Agent Plugins schemas are published as fetchable JSON Schema documents, so CI validation needs no vendor tooling. This is the check I run before publishing anything.

```bash
curl -sO https://agent-plugins.org/schemas/1.0.0/plugin.schema.json
curl -sO https://agent-plugins.org/schemas/1.0.0/mcp.schema.json

uvx --with jsonschema python - <<'PY'
import json
from jsonschema import Draft202012Validator

for doc, schema in [("plugin.json", "plugin.schema.json"),
                    ("mcp.json", "mcp.schema.json")]:
    errs = list(Draft202012Validator(json.load(open(schema))).iter_errors(json.load(open(doc))))
    print(f"{doc}: {'VALID' if not errs else 'INVALID'}")
    for e in errs:
        print("  ", list(e.path), e.message)
PY
```

Run that and you find something the specification prose does not prepare you for. The written spec says unknown top-level fields must be reported and ignored without invalidating the plugin. The published schema sets `additionalProperties: false` on both manifests. Those describe different things, client load behaviour versus author-side validation, but the practical effect is that a leftover Claude Code field such as `hooks` passes silently at runtime and hard-fails in CI.

```text
## plugin.json:  VALID
## mcp.json:     VALID
## bad-extra-field.json: INVALID
   path: [] | Additional properties are not allowed ('hooks' was unexpected)
```

For the Claude Code half, the CLI ships its own validator. Claude Code plugins are distributed through a marketplace catalogue rather than installed from a bare directory, so the test setup is a small local marketplace pointing at the plugin folder.

```json
{
  "name": "avinash-plugins",
  "owner": { "name": "Avinash Sangle" },
  "plugins": [
    {
      "name": "jenkins-ops",
      "source": "./plugins/jenkins-ops",
      "description": "Jenkins MCP server plus a build-triggering skill"
    }
  ]
}
```

```bash
$ claude plugin validate .
Validating marketplace manifest: .../my-marketplace/.claude-plugin/marketplace.json

⚠ Found 1 warning:
  ❯ description: No marketplace description provided.

✔ Validation passed with warnings

$ claude plugin validate ./plugins/jenkins-ops
Validating plugin manifest: .../plugins/jenkins-ops/.claude-plugin/plugin.json

✔ Validation passed

# install it locally to test
$ claude plugin marketplace add ./my-marketplace
$ claude plugin install jenkins-ops@avinash-plugins
```

That run is the answer to whether the dual layout is safe. The validator read `.claude-plugin/plugin.json`, ignored the root `plugin.json` and `mcp.json` sitting beside it, and passed. On the Copilot side, VS Code installs from a marketplace, from a Git URL through *Chat: Install Plugin From Source*, or by picking up whatever Copilot CLI already put in `~/.copilot/installed-plugins/`.

## The Security Model Nobody Reads Before Installing

One sentence in the VS Code documentation deserves more attention than it gets: "Plugin MCP servers are implicitly trusted when you install the plugin." There is no per-server trust prompt. Trust is granted once, at the marketplace level, on your first install from a new source, and every server in every plugin from that source inherits it. VS Code's own docs follow up with the warning that plugins can include hooks and MCP servers that run code on your machine.

Put that next to what a plugin is, a folder of executable configuration fetched from a Git host, and you have a supply chain with a single trust decision at the front of it.

The spec closes one door and leaves another open. Headers are visible package data, so plugins must not embed credentials in them, full stop. But version 1 defines no OAuth configuration and no portable credential-reference field, which means every plugin that talks to an authenticated service has an out-of-band secret story. Reference an environment variable the user sets themselves; never ship a value.

For teams, GitHub exposes plugin governance through `managed-settings.json` with `enabledPlugins`, `extraKnownMarketplaces`, and `strictKnownMarketplaces`. Set the strict flag before anyone installs anything, not after.

## What Version 1 Deliberately Leaves Out

The exclusion list is long and worth reading before you plan a migration: commands, hooks, agents, rules, LSP servers, OAuth configuration, portable credential references, archive formats such as `.zip` and `.tar.gz`, registry-fetched bundles, alternative manifest paths, and inline component configuration inside `plugin.json`. The stated reason is that those formats have not converged across clients. The stated reason is also accurate, which does not make the omission less annoying, because hooks and slash commands are a large part of why people build plugins at all.

The escape hatch is reverse-DNS namespacing. Client-specific behaviour is legal inside a top-level directory named for the vendor, such as `com.github.copilot/`, and inside the `extensions` object in the manifest. Nothing requires another client to read those, and nothing stops a vendor from putting its most useful features there. VS Code already documents ignoring other vendors' extension data, and it parses hook `matcher` values and then ignores them, so hooks fire on every matching event.

So calibrate the expectation. This is a packaging standard, not a portability guarantee. Your skills and your MCP configuration travel. Your workflow, meaning the hooks, the slash commands, and the subagents, stays exactly where you built it.

Should you migrate today? If you publish skills or MCP servers for other people, yes, and the cost is one extra manifest. If you are a Claude Code user with a private plugin, add the second manifest whenever you next touch the repo and get on with your work. Version 1.1.0 is already a working draft in the specification repository, so the surface will move again before the end of the year.

## Frequently Asked Questions

### Does Claude Code support Agent Plugins 1.0?

Not as of August 20, 2026. Anthropic is on neither the Technical Steering Committee nor the launch client list, and the Claude Code plugins reference never mentions the standard. Claude Code reads its own manifest at `.claude-plugin/plugin.json` and ignores a root `plugin.json`.

### What is the difference between an Agent Plugin and a Claude Code plugin?

The wrapper differs, the payload does not. Agent Plugins put `plugin.json` at the root and MCP config in `mcp.json`. Claude Code uses `.claude-plugin/plugin.json` and `.mcp.json`. Both read skills from `skills/<name>/SKILL.md`, so skills port unchanged.

### Where does plugin.json go in an Agent Plugin?

At the plugin root, and nowhere else. Version 1.0 defines no alternative manifest paths. The file needs a `$schema` field set to the exact 1.0.0 schema URL and a `name` field; every other field is optional metadata.

### Can one repository work as both an Agent Plugin and a Claude Code plugin?

Yes. Add the root `plugin.json` and `mcp.json` next to the existing `.claude-plugin/plugin.json` and `.mcp.json`, and share one `skills/` directory. Claude Code v2.1.237 validates that layout without complaint, since each client ignores the manifest it does not recognise.

### Do hooks, slash commands, and subagents port between agent clients?

No. Commands, hooks, agents, rules, and LSP servers are all outside version 1 because their formats have not converged. Clients may keep them in reverse-DNS directories such as `com.github.copilot/`, but no other client is required to read those.

### How do I add an MCP server to an Agent Plugin?

Create `mcp.json` at the plugin root with its own `$schema` URL and an `mcpServers` object. Each entry needs an explicit `type` of `stdio`, `streamable-http`, or `sse`. Omitting `type` fails schema validation, which is the most common porting mistake.

### Is PLUGIN_ROOT the same as CLAUDE_PLUGIN_ROOT?

They point at the same place with different names. Agent Plugins inject `PLUGIN_ROOT` and `PLUGIN_DATA`; Claude Code injects `CLAUDE_PLUGIN_ROOT`, `CLAUDE_PLUGIN_DATA`, and `CLAUDE_PROJECT_DIR`. A dual-format repo carries both spellings, which is the one real duplication cost.

### How should an Agent Plugin handle API keys and secrets?

Never inside the package. The spec forbids embedding credentials in headers, since headers are visible package data, and version 1 defines no OAuth configuration or portable credential references. Reference an environment variable the user sets outside the plugin instead.

---

Originally published at [avinashsangle.com](https://avinashsangle.com/blog/agent-plugins-getting-started-guide).
