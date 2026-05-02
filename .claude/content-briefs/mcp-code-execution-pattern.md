# Content Brief: The MCP Code Execution Pattern

**Slug:** `mcp-code-execution-pattern`
**Status:** ready to write
**Research date:** 2026-05-02

---

## Phase 1 — Topic Validation

### Search demand

- **The 143,000-token problem is now common knowledge.** Three popular MCP servers (GitHub, Playwright, an IDE bridge) consume 143,000 of a 200,000-token window before the agent reads its first user message — 72% of working memory eaten by tool descriptions that mostly never get called. This number now circulates in The New Stack, Atlassian Engineering, Layered.dev, StackOne, and AgentPMT.
- **The April 2026 news cycle put a name on the fix.** On April 22, 2026, Cloudflare shipped *Code Mode for MCP* during Agents Week — a server that exposes the entire 2,500+ endpoint Cloudflare API through just two tools (`search` and `execute`) in roughly 1,000 tokens of context, a ~99.9% reduction from the ~1.17M tokens a full enumeration would require. The InfoQ writeup landed within 48 hours.
- **Anthropic's own engineering blog** (`anthropic.com/engineering/code-execution-with-mcp`, originally posted November 4, 2025 and re-circulated heavily in April 2026 alongside the Cloudflare release) describes the same core idea: present MCP servers as a code API on a filesystem, give the model a code execution sandbox, and let it write programs that compose tools instead of calling them one-by-one. They show a 150,000 → 2,000 token reduction (98.7%) on a single Salesforce-to-Google-Sheets workflow.
- **A live debate has formed.** On April 22-27, Speakeasy published "Reducing MCP token usage by 100x — you don't need code mode," arguing that *dynamic toolsets* (search → describe → execute via embeddings) achieve 96% reduction without a sandbox. earezki.com responded April 27 calling code mode "the long-tail escape hatch, not the front door." Atlassian Labs released `mcp-compressor` (70-97% schema reduction). The New Stack ran a 10-strategy listicle. The market is sorting through approaches in real time.
- **Claude Code shipped two related controls in v2.1.121** (April 28, 2026): `alwaysLoad` on MCP servers (skip Tool Search deferral for servers you call constantly) and `"anthropic/alwaysLoad": true` per-tool `_meta`. This means the *consumer* side of the pattern is already configurable in Claude Code today, even before more servers adopt code execution.
- **Active queries observed in the wild:** "mcp code execution pattern", "cloudflare code mode mcp tutorial", "mcp tool token bloat fix", "build mcp server code mode", "mcp dynamic toolsets vs code mode", "claude code alwaysLoad config", "how to write mcp server with search and execute".
- **GitHub signal:** `jx-codes/codemode-mcp` (an open-source reimplementation of Cloudflare's pattern), `modelcontextprotocol/modelcontextprotocol#1576` (SEP-1576: Mitigating Token Bloat in MCP — official spec proposal). Both indicate community-driven momentum, not just vendor marketing.

### Competition analysis (top results)

1. **Anthropic engineering blog — Code execution with MCP** ([anthropic.com/engineering/code-execution-with-mcp](https://www.anthropic.com/engineering/code-execution-with-mcp)). Canonical primary source. Explains the pattern with TypeScript examples, but it's a vendor essay not a Claude Code workflow guide. Doesn't cover `alwaysLoad`, `mcp-compressor`, or the dynamic-toolsets debate.
2. **Cloudflare blog — Code Mode: give agents an entire API in 1,000 tokens** ([blog.cloudflare.com/code-mode-mcp](https://blog.cloudflare.com/code-mode-mcp/)). Vendor product launch. Strong on the 99.9% reduction story for the Cloudflare API specifically, lighter on "how do I apply this to my own API."
3. **Cloudflare blog — Code Mode: the better way to use MCP** ([blog.cloudflare.com/code-mode](https://blog.cloudflare.com/code-mode/)). Earlier (mid-2025) post that introduces the concept and the Dynamic Worker sandbox.
4. **InfoQ — Cloudflare Launches Code Mode MCP Server** ([infoq.com/news/2026/04/cloudflare-code-mode-mcp-server](https://www.infoq.com/news/2026/04/cloudflare-code-mode-mcp-server/)). Industry recap, no implementation detail.
5. **Speakeasy — Reducing MCP token usage by 100x — you don't need code mode** ([speakeasy.com/blog/how-we-reduced-token-usage-by-100x-dynamic-toolsets-v2](https://www.speakeasy.com/blog/how-we-reduced-token-usage-by-100x-dynamic-toolsets-v2)). The strongest counter-argument: dynamic toolsets via semantic search beat code mode for most cases. Vendor-flavored.
6. **earezki.com — Code mode for MCP: the long-tail escape hatch, not the front door** ([earezki.com/.../2026-04-27-code-mode-for-mcp-the-long-tail-escape-hatch-not-the-front-door](https://earezki.com/ai-news/2026-04-27-code-mode-for-mcp-the-long-tail-escape-hatch-not-the-front-door/)). Personal blog opinion piece. Useful framing, no code.
7. **BSWEN — How MCP tool definitions inflate your AI agent token costs** ([docs.bswen.com/blog/2026-04-24-mcp-token-overhead](https://docs.bswen.com/blog/2026-04-24-mcp-token-overhead/)). Diagnostic; quantifies the problem but stops short of solutions.
8. **Atlassian Engineering — MCP Compression: Preventing tool bloat in AI agents** ([atlassian.com/blog/developer/mcp-compression-preventing-tool-bloat-in-ai-agents](https://www.atlassian.com/blog/developer/mcp-compression-preventing-tool-bloat-in-ai-agents)). Introduces `mcp-compressor` (70-97% schema reduction). Adjacent solution, not code execution.
9. **The New Stack — 10 strategies to reduce MCP token bloat** ([thenewstack.io/how-to-reduce-mcp-token-bloat](https://thenewstack.io/how-to-reduce-mcp-token-bloat/)). Listicle, breadth over depth.
10. **StackOne — MCP Token Optimization: 4 Approaches Compared** ([stackone.com/blog/mcp-token-optimization](https://www.stackone.com/blog/mcp-token-optimization/)). Comparison piece, vendor-flavored.
11. **Anthropic Claude Code MCP docs** ([code.claude.com/docs/en/mcp](https://code.claude.com/docs/en/mcp)). Reference for `alwaysLoad`, `_meta` flags. Spec-style.
12. **`jx-codes/codemode-mcp`** ([github.com/jx-codes/codemode-mcp](https://github.com/jx-codes/codemode-mcp)) — community open-source implementation of the Cloudflare pattern.
13. **SEP-1576** ([github.com/modelcontextprotocol/modelcontextprotocol/issues/1576](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1576)) — official MCP spec proposal for token-bloat mitigation.

**Gap we fill:** every existing piece falls into one of three buckets — vendor marketing (Cloudflare, Speakeasy, Atlassian), broad listicles (The New Stack, StackOne), or theoretical opinion (earezki, BSWEN). *Nobody has written the balanced practitioner guide* that does all of these in one post:

1. Names the three live approaches honestly — code execution, dynamic toolsets, and deferred loading — and gives criteria for choosing.
2. Walks through building a minimal `search` + `execute` MCP server in Python with code-mode semantics (not just describing Cloudflare's product).
3. Shows the *consumer-side* Claude Code config: `alwaysLoad`, Tool Search, and how the new April 2026 controls interact with the pattern.
4. Cites the actual numbers from Anthropic, Cloudflare, Speakeasy, and Atlassian side-by-side instead of repeating any single vendor's claim.
5. Calls out where the pattern hurts you — sandbox security, debugging opacity, server complexity — so it reads like an engineering trade-off doc, not a hype post.

### AI citation potential

**Very high.** The phrase "MCP code execution pattern" is becoming the industry name for this technique, but the canonical sources are scattered across vendor blogs, engineering essays, and GitHub specs. ChatGPT, Claude, and Perplexity get questions like *"what is the MCP code execution pattern", "should I use code mode or dynamic toolsets", "how do I build a code-mode MCP server"* and currently splice answers from Cloudflare + Anthropic + Speakeasy. A consolidated practitioner guide on a domain-authority site that links all five primary sources is directly citable and likely to land in AI Overviews and ChatGPT search snippets.

### Freshness opportunity

Cloudflare Code Mode for MCP shipped **April 22, 2026**. Speakeasy's counter-post is **April 22**. earezki.com's analysis is **April 27**. BSWEN's token-overhead piece is **April 24**. Claude Code's `alwaysLoad` option shipped in **v2.1.121 on April 28**. The Atlassian `mcp-compressor` post is **late April 2026**. Publishing on May 2-3 catches the 1-2-week window where the topic is trending and Google/AI engines are actively re-crawling for fresh authoritative coverage.

---

## Phase 2 — Keyword Strategy

### Primary keyword

`mcp code execution pattern`

### Secondary keywords

- `mcp tool token bloat`
- `cloudflare code mode mcp`
- `mcp server search execute`
- `claude code alwaysLoad mcp`
- `mcp dynamic toolsets vs code mode`

### Long-tail queries

1. what is the mcp code execution pattern
2. how to build an mcp server with code execution
3. cloudflare code mode mcp tutorial
4. mcp server token reduction techniques
5. when to use code mode vs dynamic toolsets mcp
6. claude code alwaysLoad option example
7. how to expose 2500 api endpoints to an llm
8. mcp tool description token cost
9. anthropic code execution mcp blog
10. mcp progressive tool loading filesystem

### FAQ candidates (mirror real search queries)

1. What is the MCP code execution pattern?
2. How much can the MCP code execution pattern reduce token usage?
3. What is the difference between MCP code mode and dynamic toolsets?
4. How does Cloudflare's Code Mode MCP server work?
5. When should I use the code execution pattern vs Tool Search?
6. What is the `alwaysLoad` option in Claude Code v2.1.121?
7. Can I build a code-mode MCP server in Python?
8. Is the MCP code execution pattern safe? What about sandbox isolation?
9. Does Claude Code support the MCP code execution pattern out of the box?
10. What is `mcp-compressor` and how is it different from code mode?

---

## Phase 3 — Content Brief

### Article metadata

- **Title:** `MCP Code Execution Pattern: A Hands-On Claude Code Guide` (56 chars)
- **Slug:** `mcp-code-execution-pattern`
- **Meta description:** `Three MCP servers can eat 72% of a 200K context window. The MCP code execution pattern collapses 2,500 endpoints into ~1,000 tokens. Here's how.` (147 chars)
- **Target word count:** 2,800 - 3,200 words
- **Estimated read time:** 12 min
- **Category:** Claude Code / Model Context Protocol
- **Lucide icon:** `Boxes` (or `FunctionSquare`)
- **Publish date:** 2026-05-03
- **Tags:** Claude Code, MCP, Token Optimization, Code Execution, Agent Architecture

### Unique angle

The site already has `method-crm-mcp` (a single-server MCP build), `claude-md-guide` (Claude Code config patterns), `claude-code-cost-tracking` (token economics), and `regression-proofing-claude-code-workflows` (workflow hardening). This post is the *MCP architecture* sibling: how to think about (and build) MCP servers when the bottleneck is no longer "is the API exposed?" but "how much context does exposing it cost?"

Unique contributions:

1. **The honest three-way comparison.** Code execution (Anthropic + Cloudflare) vs dynamic toolsets (Speakeasy + SEP-1576) vs deferred loading (Claude Code Tool Search + `alwaysLoad`). With criteria for picking. Nobody has put all three in one frame yet.
2. **A minimal Python `search` + `execute` server walkthrough** (~60 lines) using the official `mcp` Python SDK plus a sandboxed runner. Most existing pieces describe the pattern; this one ships it.
3. **The Claude Code consumer config** — exact `~/.claude/settings.json` block showing `alwaysLoad: true` for small servers, deferral for large ones, and how Tool Search interacts. Verified against v2.1.121 docs.
4. **The numbers side-by-side** — 99.9% (Cloudflare), 98.7% (Anthropic Salesforce demo), 96% (Speakeasy dynamic toolsets), 70-97% (Atlassian mcp-compressor), 46.9% (Claude Code Tool Search) — read in the same paragraph instead of one vendor at a time.
5. **The "when this hurts you" honesty section** — sandbox isolation risk, debugging opacity, the cost of running a code-execution sandbox per agent. Most vendor posts skip this.

### Opening (first 40-60 words must answer the title)

> The MCP code execution pattern exposes large APIs to an agent through two generic tools — `search` and `execute` — instead of one tool definition per endpoint. The agent writes code that composes calls; the model never sees thousands of tool schemas. Cloudflare shipped 2,500+ API endpoints in roughly 1,000 tokens this way. Here's how to apply it to your own MCP servers.

### Content outline

#### H2: What Is the MCP Code Execution Pattern?

- Direct answer paragraph: present an MCP server as a code API on a filesystem, give the agent a sandboxed runtime, expose two universal tools (`search` and `execute`), and let the model write programs that compose tool calls.
- Contrast with the classic MCP shape: every tool registered up-front, full schemas in the system prompt, the model picks one per turn.
- The two roles in the pattern: the *server* must expose a discoverable code surface; the *client* must run code safely.
- Quote Anthropic's framing: presenting tools as code on a filesystem allows models to read tool definitions on-demand rather than reading them all up-front.

#### H2: The 143,000-Token Problem (Why This Pattern Exists Now)

- Three popular MCP servers (GitHub + Playwright + an IDE bridge) can consume 143,000 of a 200,000-token window before the first user message — 72% of context evaporated.
- A single large MCP server commonly costs 10,000–17,000 tokens just for tool descriptions.
- Anthropic's own example: a Salesforce-to-Google-Sheets workflow that consumed 150,000 tokens for tool definitions, reducible to 2,000 via code execution. **98.7%** drop.
- Cloudflare's example: Cloudflare's full API (2,500+ endpoints) would need ~1.17 million tokens with one tool per endpoint. Code Mode delivers it in ~1,000. **99.9%** drop.
- Cite BSWEN's diagnostic and Atlassian's compression numbers (70-97%) for context.
- The pattern emerged because once you connect 3+ MCP servers, tool descriptions starve the model of working memory before it does any real work.

#### H2: How the Pattern Works End-to-End

- Walk through a single agent turn:
  1. Agent receives user request.
  2. Agent calls `search("create r2 bucket")` against an OpenAPI/typescript surface.
  3. Server returns 2-3 candidate signatures + minimal docs (a few hundred tokens).
  4. Agent calls `execute(code)` with a small JS/Python program that composes those signatures.
  5. Server runs the code in an isolated sandbox (Cloudflare uses Dynamic Workers; Anthropic's example uses a TypeScript filesystem layout; community implementations use Pyodide or Deno).
  6. Server returns the result of the code, not the raw API responses.
- Key idea: the agent only sees the tool definitions it explicitly searches for, and only on the turn it needs them.
- Reference Anthropic's "filesystem of TypeScript files" model and Cloudflare's "two tools + Dynamic Worker" model. They're the same pattern with different sandboxes.

#### H2: Code Mode vs Dynamic Toolsets vs Deferred Loading (Choose One)

- The three competing approaches in the April 2026 debate:
  | Approach | Server-side | Client-side | Reduction | Best for |
  |---|---|---|---|---|
  | **Code execution / Code Mode** | Run untrusted code in a sandbox; expose `search` + `execute`. | Standard MCP client. | 96-99.9% | Very large APIs (1,000+ endpoints), composable workflows. |
  | **Dynamic toolsets / Progressive discovery** | Expose `meta` tools that emit schemas on demand via embeddings. | Standard MCP client. | 90-96% | Large servers (50-1,000 tools) without sandbox infra. |
  | **Deferred loading / Tool Search** | No server changes required. | Client (Claude Code) defers tool descriptions until query-time. | 30-50% | Mixed setups; servers you don't control; stop-gap for existing servers. |
- Pick code execution when: you control the server, the API is huge, and workflows compose multiple endpoints.
- Pick dynamic toolsets when: your team can't operate a sandbox, but you can index schemas with embeddings.
- Pick deferred loading when: you're consuming third-party MCP servers you can't modify. Claude Code does this for you automatically once tool descriptions cross 10% of context.
- Cite the Speakeasy counter-post's 96% claim, the Cloudflare 99.9% claim, the Joe Njenga 46.9% Tool Search number, side by side. They're not in conflict — they measure different things.

#### H2: Build a Minimal Code-Mode MCP Server in Python

- Use the official `mcp` Python SDK (`pip install mcp`).
- Project layout:
  ```
  myserver/
    server.py       # registers search + execute tools
    api/            # the "filesystem" of typed function defs
      list_users.py
      create_post.py
      ...
    sandbox.py      # restricted runner
  ```
- Sketch of `server.py` (~60 lines): register two tools, `search(query: str)` returns module + signature, `execute(code: str)` runs the code via `sandbox.run()`.
- `sandbox.py`: a basic `RestrictedPython` (or sandboxed subprocess with seccomp / Docker) wrapper that imports only the `api/` modules and times out at 30s.
- Show how `ast.parse` + a whitelist of imports keeps the agent inside the API surface.
- Real warning: running model-generated code in-process is genuinely dangerous. For production, use a real sandbox — gVisor, Firecracker, Cloudflare Workers, or Pyodide in a worker. Don't ship in-process code runners to prod.
- Link to `jx-codes/codemode-mcp` as a working reference implementation.

#### H2: Configure Claude Code to Consume Code-Mode Servers Efficiently

- The April 28 v2.1.121 release added two relevant controls. Both go in `~/.claude/settings.json` or `.mcp.json`.
- For *small* servers you call constantly (4-8 tools, < 5K tokens of definitions): set `"alwaysLoad": true` so Tool Search doesn't add a round trip.
  ```json
  {
    "mcpServers": {
      "core-tools": {
        "type": "http",
        "url": "https://mcp.example.com/mcp",
        "alwaysLoad": true
      }
    }
  }
  ```
- For *large* code-mode servers (the entire Cloudflare API, GitHub's full API, etc.): leave `alwaysLoad` unset — the two tools (`search`, `execute`) are tiny enough that Tool Search keeps them deferred until needed.
- Per-tool override: a server can mark individual tools always-loaded with `"_meta": { "anthropic/alwaysLoad": true }` in the tool definition.
- Verify with `claude mcp list` and `/mcp` inside Claude Code.
- Cite the Claude Code MCP docs page directly for the schema.
- Note: Tool Search auto-triggers when MCP tool descriptions cross **10% of context**. Code-mode servers stay below this threshold by design.

#### H2: When the Code Execution Pattern Hurts You

- Honesty section.
- **Sandbox isolation risk.** You're running model-generated code. Treat it like user-uploaded code. Use real isolation: Firecracker, gVisor, Workers, or a separate VM. In-process runners are a footgun.
- **Debugging opacity.** When a tool call fails, you see the failed call. When code execution fails, you get a stack trace from inside a sandbox running model-written code. Tracing is harder; logs need more structure.
- **Server complexity goes up.** A classic MCP server is a list of functions. A code-mode server is a runtime, a sandbox, an OpenAPI ingest, and a search index. Operating it is a real ongoing cost.
- **Latency floor.** Two round trips (`search` then `execute`) per task vs one tool call. Fine for long tasks, painful for chatty short ones.
- **Auditability.** Code that composes 5 API calls in one `execute` looks like one tool invocation in your agent log. Granular per-call audit needs server-side logging inside the sandbox.
- Honest closing line: code execution wins on token cost, loses on simplicity. Pick the trade based on your API surface area, not the headline percentage.

#### H2: How This Composes With the Rest of Your MCP Stack

- Combine with `mcp-compressor` (Atlassian) on legacy servers you can't rewrite — schema-level compression sits *upstream* of code mode and stacks.
- Combine with the SEP-1576 spec proposal on the horizon: the protocol itself may move toward optional code-mode hints in the next major MCP version.
- For Claude Code users running mixed setups (a code-mode internal server + 2-3 third-party servers), the right config is `alwaysLoad: true` on small high-frequency servers, `alwaysLoad: false` on the code-mode server, and let Tool Search handle the rest.
- Reference my own [`/blog/method-crm-mcp`](https://avinashsangle.com/blog/method-crm-mcp) for what a single-purpose, classic-shape MCP server looks like — useful contrast against the code-mode style.

#### H2: Frequently Asked Questions

(Use the 10 FAQ candidates from Phase 2. 40-60 words per answer.)

### Code examples to include

1. The 143,000-token "before" — a screenshot or prose summary of three popular MCP servers' token cost (cite The New Stack / BSWEN numbers).
2. A minimal `myserver/api/list_users.py` showing the typed surface the model searches against.
3. The ~60-line `server.py` registering `search` and `execute`.
4. A locked-down `sandbox.py` using `RestrictedPython` or sandboxed subprocess + timeouts (with a "do not ship to prod" comment block above it).
5. The `~/.claude/settings.json` block with `alwaysLoad: true` on small servers and unset on code-mode servers.
6. A sample agent transcript (3-5 lines) showing `search` followed by `execute` against the Python server.
7. A side-by-side table: classic MCP shape vs code-mode shape, in tokens and in lines of server code.

### Authoritative sources to cite

- Anthropic engineering — Code execution with MCP: https://www.anthropic.com/engineering/code-execution-with-mcp
- Cloudflare — Code Mode: give agents an entire API in 1,000 tokens: https://blog.cloudflare.com/code-mode-mcp/
- Cloudflare — Code Mode: the better way to use MCP: https://blog.cloudflare.com/code-mode/
- Cloudflare Codemode docs: https://developers.cloudflare.com/agents/api-reference/codemode/
- InfoQ — Cloudflare Launches Code Mode MCP Server: https://www.infoq.com/news/2026/04/cloudflare-code-mode-mcp-server/
- Speakeasy — Reducing MCP token usage by 100x — you don't need code mode: https://www.speakeasy.com/blog/how-we-reduced-token-usage-by-100x-dynamic-toolsets-v2
- earezki.com — Code Mode for MCP: the long-tail escape hatch, not the front door: https://earezki.com/ai-news/2026-04-27-code-mode-for-mcp-the-long-tail-escape-hatch-not-the-front-door/
- BSWEN — How MCP tool definitions inflate your AI agent token costs: https://docs.bswen.com/blog/2026-04-24-mcp-token-overhead/
- Atlassian Engineering — MCP Compression: https://www.atlassian.com/blog/developer/mcp-compression-preventing-tool-bloat-in-ai-agents
- The New Stack — 10 strategies to reduce MCP token bloat: https://thenewstack.io/how-to-reduce-mcp-token-bloat/
- Joe Njenga — Claude Code Just Cut MCP Context Bloat by 46.9%: https://medium.com/@joe.njenga/claude-code-just-cut-mcp-context-bloat-by-46-9-51k-tokens-down-to-8-5k-with-new-tool-search-ddf9e905f734
- Anthropic Claude Code MCP docs: https://code.claude.com/docs/en/mcp
- Claude Code v2.1.121 release: https://github.com/anthropics/claude-code/releases/tag/v2.1.121
- `jx-codes/codemode-mcp` reference implementation: https://github.com/jx-codes/codemode-mcp
- SEP-1576 spec proposal: https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1576

### Internal linking opportunities

- `/blog/method-crm-mcp` — link from "How This Composes" as the contrast point: a classic single-purpose MCP server.
- `/blog/claude-md-guide` — link from "Configure Claude Code to Consume Code-Mode Servers" (same `~/.claude/settings.json` you use for project memory).
- `/blog/claude-code-cost-tracking` — link from "The 143,000-Token Problem" (token economics tooling).
- `/blog/regression-proofing-claude-code-workflows` — link from "Configure Claude Code" (pinning v2.1.121 so `alwaysLoad` keeps working).
- `/blog/hardening-ai-agents-cicd-prompt-injection` — link from "When the Pattern Hurts You" (sandbox isolation and code-injection risk overlap with prompt-injection threat model).
- `/projects/jenkins-mcp` and `/projects/wp-mcp` — link from the build walkthrough as Avinash's own MCP servers.

### Future content cluster

- "Building a Production Code-Mode Sandbox: Firecracker, gVisor, or Workers?"
- "MCP Tool Search Deep Dive: When Claude Code Defers and When It Loads"
- "From Classic to Code-Mode: Migrating an Existing MCP Server"
- "SEP-1576 and the Future of MCP Token Bloat Mitigation"
- "Dynamic Toolsets vs Code Mode: Benchmarking Both on the Same Workload"

---

## Ready to Write?
Run: `/write-blogpost mcp-code-execution-pattern`
