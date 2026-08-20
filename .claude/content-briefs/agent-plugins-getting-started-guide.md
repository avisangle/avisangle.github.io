# Content Brief: Agent Plugins 1.0 Getting Started Guide

**Slug:** `agent-plugins-getting-started-guide`
**Researched:** 2026-08-20
**Status:** Ready to write
**Source:** PR #65 topic suggestion (merged 9629c02)

---

## Phase 1 - Topic Validation

### Verdict: WRITE, with a narrowed angle

The generic "what is Agent Plugins" slot is already crowded (8+ posts in 14 days). The
hands-on slot is empty: nobody has published a working build that targets Claude Code and a
spec client from one repo. That gap is the whole reason to write this.

### What actually shipped (verified against primary sources)

| Fact | Value | Source |
|---|---|---|
| Spec version | 1.0.0 (1.1.0 in working draft) | [agent-plugins-spec repo](https://github.com/agentplugins/agent-plugins-spec) |
| Published | 2026-08-06 | [Google Developers Blog](https://developers.googleblog.com/agent-plugins-package-your-skills-tools-and-more/) |
| GA on Copilot surfaces | 2026-08-12: VS Code, Copilot CLI, Copilot SDK, Copilot app, all Copilot plans | [GitHub Changelog](https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app/) |
| Core Maintainers (TSC) | Amazon, Cursor (Anysphere), Microsoft, OpenAI, Vercel, plus Google | [agent-plugins.org](https://agent-plugins.org/), Google Developers Blog |
| Launch clients | ChatGPT, Codex, Cursor, GitHub Copilot, Kiro, VS Code | agent-plugins.org |
| Not a maintainer, no documented support | Anthropic / Claude Code | [Claude Code plugins reference](https://code.claude.com/docs/en/plugins-reference) has zero mentions of agent-plugins.org (checked 2026-08-20) |

The irony carries the post: Anthropic wrote both halves of the payload (Agent Skills and MCP)
and is absent from the standard that packages them.

### Competition analysis

| Rank / URL | What it is | Gap it leaves |
|---|---|---|
| [digitalapplied.com - What Still Does Not Port](https://www.digitalapplied.com/blog/agent-plugins-1-0-ga-what-still-does-not-port) (Aug 16) | ~4,500 words, strongest piece out there. Doc-audit methodology, support matrix, names the `.claude-plugin/plugin.json` vs `plugin.json` split | Almost no code. Audits vendor claims; never builds or installs a plugin |
| [agent-plugins.org/plugin-authors](https://agent-plugins.org/plugin-authors) | Official authoring guide, authoritative | Spec-shaped, not workflow-shaped. Nothing about Claude Code, no dual-target repo, no debugging |
| [blakecrosley.com](https://blakecrosley.com/blog/agent-plugins-standard), [developersdigest.tech](https://www.developersdigest.tech/blog/agent-plugins-1-0-0), [agenticskills.io](https://agenticskills.io/learn/what-are-agent-plugins) | Launch-week feature overviews | Restated announcements. No working artifact |
| [Ken Muse](https://www.kenmuse.com/blog/creating-agent-plugins-for-vs-code-and-copilot-cli/) | Hands-on build, credible | Copilot/VS Code only. Claude Code never enters the picture |
| [VS Code docs](https://code.visualstudio.com/docs/agent-customization/agent-plugins) | Client-side reference | Consumer view, not author view |

Competition level: **moderate-high on the overview keyword, low on the build keyword.**
Do not write another "what is Agent Plugins" post. Write the one where a plugin gets built,
installed twice, and breaks in a documented way.

### AI citation potential: high

The questions ("does Claude Code support Agent Plugins?", "where does plugin.json go?",
"what ports and what doesn't?") are exactly the shape LLMs get asked. The precise, quotable
facts (closed top-level field list, `${PLUGIN_ROOT}` vs `${CLAUDE_PLUGIN_ROOT}`, the six
launch clients, the v1 exclusion list) are answer-engine bait, and most of them exist today
only inside spec prose that nobody quotes.

### Freshness

The spec is 14 days old and 1.1.0 is already drafting. Anything written before Aug 12 predates
GA. This post can be the first practitioner walkthrough of the GA build, but the window is
weeks, not months. Publish inside the next few days or the angle decays.

### Bing / ChatGPT first-party demand

Ran `scripts/bing_report.py --type queries --days 120 --json`. **Zero** agent-plugin queries
in 120 days, expected for a two-week-old standard. The observed clusters are adjacent, not
overlapping: CLAUDE.md authoring (`how to write claude.md`, pos 5.4, 30 impressions),
`ant cli`, session-cost extraction. Nothing to target directly.

Consequence: every FAQ candidate below comes from PAA / autocomplete / forum phrasing, not
observed demand. Marked accordingly. Do not claim Bing-sourced questions in this post.

---

## Phase 2 - Keyword Strategy

**Primary:** `agent plugins` (build/getting-started intent)

**Secondary:**
- `agent plugins 1.0`
- `build an agent plugin`
- `plugin.json agent plugins`
- `claude code agent plugins`
- `mcp.json plugin`

**Long-tail:**
1. how to build an agent plugin
2. does claude code support agent plugins 1.0
3. agent plugins vs claude code plugins
4. what goes in plugin.json agent plugins
5. how to package an mcp server as a plugin
6. agent plugins mcp.json transport types
7. install agent plugin in vs code copilot cli
8. what does not port between agent clients

**FAQ candidates** (all PAA/autocomplete-sourced; none observed in Bing):
1. Does Claude Code support Agent Plugins 1.0?
2. What is the difference between an Agent Plugin and a Claude Code plugin?
3. Where does plugin.json go in an Agent Plugin?
4. Can one repo work as both an Agent Plugin and a Claude Code plugin?
5. Do hooks, slash commands, and subagents port between clients?
6. How do I add an MCP server to an Agent Plugin?
7. Is `${PLUGIN_ROOT}` the same as `${CLAUDE_PLUGIN_ROOT}`?
8. How do I put secrets or API keys in an Agent Plugin?
9. Which clients support Agent Plugins 1.0 today?
10. Do I need to migrate my existing skills to Agent Plugins?

---

## Phase 3 - Content Brief

### Article Metadata

- **`metadata.title`:** `Agent Plugins 1.0: Build Your First Plugin` (42 chars, rendered 59)
- **OG / Twitter / H1 / TechArticle headline:** `Agent Plugins 1.0: Build One Plugin for Claude Code and Copilot` (63 chars)
- **Slug:** `agent-plugins-getting-started-guide`
- **Meta description** (151 chars):
  `Agent Plugins 1.0 packages skills and MCP servers into one portable folder. Build a working plugin, then ship the same repo to Claude Code and Copilot.`
- **Target word count:** 2,800-3,200
- **Read time:** 12 min read
- **Category:** AI Development
- **Lucide icon:** `Package`
- **Topics (posts.ts):** `['mcp', 'claude-code']`

### Content Outline

**Direct answer (first 40-60 words)**
An Agent Plugin is a folder with `plugin.json` at its root that bundles Agent Skills and MCP
servers so one package installs into multiple agent clients. Version 1.0.0 shipped 2026-08-06
and went GA on Copilot surfaces 2026-08-12. Claude Code is not one of the clients, which is
the part worth planning around.

**TL;DR** (4 bullets: what the format is; six launch clients; Claude Code keeps its own
manifest path; one repo can carry both manifests, with one collision to watch.)

---

**H2: What Is an Agent Plugin, and What Does It Actually Package?**
- Three files decide everything: `plugin.json`, `skills/<name>/SKILL.md`, `mcp.json`.
- The closed manifest. Only these top-level fields are permitted: `$schema`, `name`,
  `version`, `description`, `author`, `homepage`, `repository`, `license`, `keywords`,
  `extensions`. Unknown fields are reported and ignored but do not invalidate the plugin.
  `$schema` must be exactly `https://agent-plugins.org/schemas/1.0.0/plugin.schema.json`.
- `name` rules: 1-64 chars, lowercase alphanumeric plus hyphens and periods, no consecutive
  separators, starts and ends alphanumeric.
- Skills discovery is deliberately shallow: only immediate children of `skills/` that contain
  a literal `SKILL.md`. Clients MUST NOT recurse deeper. Nested skill trees silently vanish.
- Source: [specification](https://agent-plugins.org/specification)

**H2: How to Build an Agent Plugin in Under Ten Minutes**
- Real payload, not `hello-world`: package the [Jenkins MCP server](/projects/jenkins-mcp) (or
  [Method CRM MCP](/projects/method-crm-mcp)) plus one skill that tells the agent when to reach
  for it. Skills are the missing half of every MCP install: the tools exist, the agent still
  does not know the workflow.
- Code block 1: file tree.
- Code block 2: minimal `plugin.json`.
- Code block 3: `skills/trigger-build/SKILL.md` with frontmatter.
- Code block 4: `mcp.json` with a `stdio` server using `${PLUGIN_ROOT}`.
- HowTo schema attaches here.

**H2: mcp.json Rules That Break Plugins Quietly**
- Transports: `stdio`, `streamable-http`, `sse` (deprecated, optional support).
- `command` MUST be a single executable token, not a shell string, and gets **no** placeholder
  expansion. Expansion applies only to `args` elements, `env` values, and `cwd`. It is
  single-pass and non-recursive: text introduced by a replacement is never rescanned.
- Clients inject `PLUGIN_ROOT` and `PLUGIN_DATA`; your `env` block must not define either.
  `PLUGIN_ROOT` is the read-only package, `PLUGIN_DATA` is the writable directory that survives
  updates. Writing to `PLUGIN_ROOT` is the mistake to name here.
- Remote URLs must be HTTPS except loopback. Headers are visible package data, so plugins MUST
  NOT embed credentials in them. Duplicate header names differing only by case invalidate the
  entry.
- Containment: every plugin-supplied path must resolve inside the plugin root after symlink
  resolution, and the failure modes are graded, not uniform. Bad `plugin.json` path rejects
  the plugin; bad skill path skips that skill; bad MCP `command`/`cwd` invalidates only that
  server entry. Explains "why did two of my three servers load?"

**H2: Does Claude Code Support Agent Plugins 1.0?**
- Direct answer: no, not as of 2026-08-20. Anthropic is on neither the TSC nor the launch
  client list, and the Claude Code plugins reference does not mention the standard.
- Side-by-side table, both columns verified against vendor docs:

  | | Agent Plugins 1.0 | Claude Code |
  |---|---|---|
  | Manifest | `plugin.json` (root, required) | `.claude-plugin/plugin.json` (optional, auto-discovery by dir name) |
  | Skills | `skills/<name>/SKILL.md` | `skills/<name>/SKILL.md` |
  | MCP config | `mcp.json` | `.mcp.json`, or inline `mcpServers` |
  | Path var | `${PLUGIN_ROOT}` / `${PLUGIN_DATA}` | `${CLAUDE_PLUGIN_ROOT}` / `${CLAUDE_PLUGIN_DATA}` / `${CLAUDE_PROJECT_DIR}` |
  | Hooks, commands, subagents, LSP, workflows, output styles | out of v1 scope | native |

- The one thing that already ports cleanly: `skills/<name>/SKILL.md` is byte-identical on both
  sides. That is the shared Agent Skills spec doing the work, not the plugin standard.

**H2: How to Ship One Repo to Both (Dual-Manifest Layout)**
- The core original section. Additive, never destructive: keep `.claude-plugin/plugin.json`,
  add root `plugin.json`; keep `.mcp.json`, add `mcp.json`; share `skills/` unchanged.
- Code block 5: the dual-format tree with both manifests annotated.
- The placeholder split is the tax: the same server needs `${PLUGIN_ROOT}` in `mcp.json` and
  `${CLAUDE_PLUGIN_ROOT}` in `.mcp.json`. Two files, one substantive difference. Show a
  10-line generator script so the two never drift, rather than hand-maintaining both.
- **Flag for verification at write time:** the VS Code docs say plugin MCP servers load from
  `mcp.json` (Agent Plugins format) *or* `.mcp.json` (Copilot/Claude formats). A dual-manifest
  repo may therefore register the same server twice in VS Code. Test it before publishing;
  if it reproduces, this is the single most useful paragraph in the post. If it does not, say
  so plainly.
- Keep client-only features where they belong: reverse-DNS top-level dirs
  (`com.github.copilot/`) and the `extensions` object keyed by reverse-domain namespace.

**H2: Installing and Debugging the Plugin**
- VS Code: default marketplaces `copilot-plugins` and `awesome-copilot`; "Chat: Install Plugin
  From Source" for a Git URL; cache at `~/Library/Application Support/Code/agentPlugins/`;
  Copilot CLI installs land in `~/.copilot/installed-plugins/` and surface in VS Code.
- Claude Code side: local marketplace add from a path, then `/plugin install`. Verify the exact
  current commands against `code.claude.com` at write time; do not paste from memory.
- Debug ladder: skill not showing (recursion rule), server not starting (`command` token rule),
  server starting with no data (`PLUGIN_ROOT` vs `PLUGIN_DATA`), plugin rejected wholesale
  (containment).

**H2: The Security Model Nobody Reads Before Installing**
- VS Code: "Plugin MCP servers are implicitly trusted when you install the plugin." No
  per-server trust prompt. Trust happens once, at marketplace level, on first install from a
  new source. VS Code's own docs warn that plugins can include hooks and MCP servers that run
  code on your machine.
- v1 defines no OAuth config and no portable credential-reference fields, so every real plugin
  ends up with an out-of-band secret story. Say what to do instead: reference an env var the
  user sets, never a value the package carries.
- Enterprise controls: `managed-settings.json` with `enabledPlugins`,
  `extraKnownMarketplaces`, `strictKnownMarketplaces`.
- Cross-link to [HalluSquatting defense](/blog/hallusquatting-defense-ai-coding-agents) and
  [LiteLLM CVE-2026-42271](/blog/litellm-mcp-exploit-response-guide): a plugin marketplace is
  a supply chain, and this one auto-trusts.

**H2: What Agent Plugins 1.0 Deliberately Leaves Out**
- The v1 exclusion list, verbatim from the spec: commands, hooks, agents, rules, LSP servers,
  OAuth configuration, portable credential-reference fields, archive formats (`.zip`,
  `.tar.gz`), registry-fetched bundles, alternative manifest paths, inline component config in
  `plugin.json`.
- The escape hatch tension: client-specific behavior is legal inside reverse-DNS namespaces, so
  fragmentation can move rather than disappear. VS Code already documents ignoring client
  extension data from other vendors, and parses hook `matcher` values then ignores them.
- Honest read: this is a packaging standard, not a portability guarantee. The right expectation
  is "my skills and MCP config travel; my workflow does not."

**H2 (short): Should You Migrate Today?**
- Decision rule, not a hedge. Migrate now if you publish skills/MCP for other people. Add the
  second manifest and wait if you are a Claude Code-only user; nothing breaks either way, since
  each client ignores the other's manifest.

**FAQ section** (8 of the 10 candidates above, 40-60 words each)

---

### Unique Angle

1. **The only dual-target build.** Every competitor either explains the spec or audits vendor
   claims. This one produces a repo that installs in both ecosystems, including the placeholder
   split and the possible double-registration in VS Code.
2. **Real payload.** The plugin wraps an MCP server that already exists on this site
   ([Jenkins MCP](/projects/jenkins-mcp), [Method CRM MCP](/projects/method-crm-mcp),
   [WP MCP](/projects/wp-mcp)), so the skill content is a genuine workflow rather than a
   greeting.
3. **Answers the question the audience is actually asking.** This blog's readers use Claude
   Code. Their first question is "do I need to care?", and the honest answer (no native support,
   but your skills already port and the second manifest is free) exists nowhere in a form
   they can act on.
4. **Spec details in quotable form.** The single-pass expansion rule, the graded containment
   failures, the closed field list, the `command`-token rule. These sit in spec prose today
   and are exactly what breaks a first plugin.

### Internal Linking

**Existing posts:**
- [MCP Goes Stateless: Migrating Your Servers to the 2026 Spec](/blog/mcp-stateless-spec-migration-guide) - the transport section, `streamable-http` vs `sse`
- [MCP Code Execution Pattern](/blog/mcp-code-execution-pattern) - context cost of loading many servers; relevant to bundling servers into plugins
- [How I Write CLAUDE.md Files That Actually Work](/blog/claude-md-guide) - CLAUDE.md vs skills vs plugins, which instruction layer to use
- [Persistent Memory for AI Coding Agents Beyond CLAUDE.md](/blog/persistent-memory-ai-coding-agents) - adjacent instruction-layer post
- [How to Defend AI Coding Agents Against HalluSquatting Attacks](/blog/hallusquatting-defense-ai-coding-agents) - marketplace supply chain
- [LiteLLM CVE-2026-42271](/blog/litellm-mcp-exploit-response-guide) - MCP-adjacent RCE, security section
- [Claude Code Dynamic Workflows](/blog/claude-code-dynamic-workflows-guide) - what stays Claude-native

**Project pages:** [Jenkins MCP](/projects/jenkins-mcp), [Method CRM MCP](/projects/method-crm-mcp), [WP MCP](/projects/wp-mcp)

**Future cluster:** an Agent Skills authoring guide (SKILL.md frontmatter, progressive
disclosure); an Agent Plugins 1.1 update when the draft lands; a "publish your plugin to a
marketplace" follow-up.

---

## Verify Before Publishing

Non-negotiable. Several claims here are two weeks old and moving.

1. Re-check [code.claude.com/docs/en/plugins-reference](https://code.claude.com/docs/en/plugins-reference)
   for any new Agent Plugins support. The "no native support" claim is the post's spine and
   dates to 2026-08-20.
2. Actually build the plugin and install it in both clients. Every command and path in the post
   must come from a real run. No pasted-from-docs commands presented as tested.
3. Test the dual-manifest double-registration hypothesis in VS Code. Report what happened,
   including "it did not reproduce".
4. Confirm current Claude Code marketplace/install command syntax rather than recalling it.
5. [The New Stack piece](https://thenewstack.io/agent-plugins-portability-gaps/) on Anthropic's
   absence from governance could not be fetched (page body did not render). Either fetch it
   properly for the quotes or drop the citation.
6. Third-party CLIs claiming to translate the portable format into Claude Code's system came
   from search summaries only, unverified. Do not name any tool you have not run.
7. Check whether 1.1.0 has moved from working draft; if it shipped, the post needs a version
   note in the intro.

---

## Ready to Write?
Run: /write-blogpost agent-plugins-getting-started-guide
