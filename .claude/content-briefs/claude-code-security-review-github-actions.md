# Content Brief: Claude Code Security Review GitHub Action

**Slug:** `claude-code-security-review-github-actions`
**Status:** ready to write
**Research date:** 2026-04-22

---

## Phase 1 — Topic Validation

### Search demand
- Hacker News thread on "Claude Code Used to Find Remotely Exploitable Linux Kernel Vulnerability Hidden for 23 Years" (InfoQ, April 2026) drove heavy discussion about AI-assisted vulnerability discovery. Commenter "Lynch" reported <20% false positive rate using Opus 4.6 on similar workloads.
- The Register (April 16, 2026) covered a design flaw in MCP putting 200k+ servers at risk; The Hacker News covered an MCP RCE vulnerability affecting 7,000+ public servers. Security in AI-generated code is the dominant thread on r/ClaudeAI and HN right now.
- SpecterOps blog (March 26, 2026) — "Leveling Up Secure Code Reviews with Claude Code" — takes the red-team angle but does not cover the GitHub Action workflow.
- Active searches: "claude code security review github action setup", "anthropics/claude-code-security-review false positives", "claude code security review cost".

### Competition analysis (top results)
1. **Official repo README** (github.com/anthropics/claude-code-security-review) — 4.3k stars, 388 forks, MIT. Complete reference but no narrative.
2. **Gecko Security blog** (April 2026) — ~2,500 words. Strong overview, comparison table vs SAST tools, but **no concrete vulnerability examples, no real YAML edge cases, no CI/CD integration patterns beyond GitHub basics, no performance metrics or cost data**.
3. **DerivAI Substack** — shorter practitioner guide; covers setup but not tuning.
4. **SpecterOps** — security professional angle; argues for Claude Code as a "targeted manager" rather than surfacing vulnerabilities directly.
5. **systemprompt.io** (March 10, 2026) — covers generic Claude Code GitHub Actions, not the security-review action specifically.

**Gap we fill:** No guide shows (a) working YAML with all nine inputs demonstrated, (b) how to write a custom `false-positive-filtering-instructions` file with real examples, (c) cost math per PR based on token usage, (d) how this action fits alongside Semgrep/Snyk in the same pipeline, (e) troubleshooting when the action hits the 20-min timeout or emits duplicate comments.

### AI citation potential
**High.** Developers ask ChatGPT, Claude, and Perplexity: "how do I set up Claude Code security review on GitHub?" and "is Claude Code security review worth the cost vs Semgrep?" Current answers pull from the official README (thin narrative) or Gecko's blog (vendor-adjacent). A practitioner guide with original cost data and a working workflow is easy to cite.

### Freshness opportunity
The action's default model is `claude-opus-4-1-20250805` but Opus 4.6 and 4.7 are now available — worth calling out the `claude-model` input. The MCP security news cycle from April 2026 creates a news hook that lifts this topic above evergreen status.

---

## Phase 2 — Keyword Strategy

### Primary keyword
`claude code security review github action`

### Secondary keywords
- `automated security review ai`
- `ai sast github actions`
- `claude code security scan`
- `github actions vulnerability scanning claude`
- `anthropic security review action`

### Long-tail queries
1. how to set up claude code security review github action
2. claude code security review false positives
3. claude code security review cost per pull request
4. claude code security review vs semgrep
5. claude code security review configuration example
6. how to customize claude code security review
7. claude code security review api key setup
8. claude code security review timeout error

### FAQ candidates (mirror real search queries)
1. What is the Claude Code Security Review GitHub Action?
2. How much does the Claude Code Security Review action cost per PR?
3. How do I reduce false positives in Claude Code Security Review?
4. Does Claude Code Security Review replace Semgrep or Snyk?
5. What permissions does the action need?
6. Can I run Claude Code Security Review on private repos?
7. What models does the action support?
8. Is the action safe to run on external contributor PRs?
9. How do I exclude directories from the scan?
10. What happens when the analysis times out?

---

## Phase 3 — Content Brief

### Article metadata
- **Title:** `Claude Code Security Review GitHub Action: 2026 Setup Guide` (59 chars)
- **Slug:** `claude-code-security-review-github-actions`
- **Meta description:** `How to set up Anthropic's Claude Code Security Review GitHub Action: workflow YAML, false positive tuning, costs, and comparison with Semgrep.` (143 chars)
- **Target word count:** 2,800 words
- **Estimated read time:** 11 min
- **Category:** Claude Code / DevSecOps
- **Lucide icon:** `ShieldCheck`
- **Publish date:** 2026-04-22
- **Tags:** Claude Code, GitHub Actions, DevSecOps, AI SAST, Security Review

### Direct answer (first 40-60 words)
The Claude Code Security Review GitHub Action (`anthropics/claude-code-security-review`) is an official Anthropic Action that uses Claude to scan pull-request diffs for vulnerabilities and comment findings on the PR. You add it as a workflow, supply a Claude API key enabled for Claude Code, and get context-aware SAST on every PR in under 20 minutes.

### TL;DR bullets
- Official action at `anthropics/claude-code-security-review@main` — 4.3k stars, MIT, Python.
- Requires `CLAUDE_API_KEY` enabled for both Claude API and Claude Code usage.
- Default model `claude-opus-4-1-20250805`; switchable via `claude-model` input.
- False-positive tuning via custom instruction files; built-in confidence-score filter (<8 discarded).
- Not hardened against prompt injection — require maintainer approval on external PRs.

### Content outline

#### H2: What is the Claude Code Security Review GitHub Action?
- Define the action, its repo, and what it does (semantic vulnerability scan on PR diffs, posts PR comments).
- Cover authoritative source: [anthropics/claude-code-security-review](https://github.com/anthropics/claude-code-security-review) — 4.3k stars, MIT, last updated April 2026.
- Contrast with `anthropics/claude-code-action` (general Claude Code PR assistant) and the newer Claude Code Review service ($15-25/PR, Team plan only, different product).
- Stat: "LLM-assisted code elevates vulnerability rates — Gecko Security, 2026" linking to their report.

#### H2: How to set up Claude Code Security Review on GitHub
Step-by-step (HowTo schema candidate).
1. Get a Claude API key enabled for **both** Claude API and Claude Code.
2. Add `CLAUDE_API_KEY` to repo secrets: Settings → Secrets and variables → Actions.
3. Create `.github/workflows/security-review.yml` with the minimal workflow.
4. Set `permissions: pull-requests: write, contents: read`.
5. Configure fork approval: Settings → Actions → "Require approval for all external contributors".
6. Open a test PR and verify findings comment.

Include the minimal working YAML. Cite the repo README for permission rationale.

#### H2: Minimal working workflow YAML
```yaml
name: Claude Security Review
permissions:
  pull-requests: write
  contents: read
on:
  pull_request:
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          ref: ${{ github.event.pull_request.head.sha || github.sha }}
          fetch-depth: 2
      - uses: anthropics/claude-code-security-review@main
        with:
          comment-pr: true
          claude-api-key: ${{ secrets.CLAUDE_API_KEY }}
```
- Explain `fetch-depth: 2` (needed for diff comparison).
- Explain why `permissions` must be explicit in modern repos.

#### H2: All nine action inputs explained
Table of every input (`claude-api-key`, `comment-pr`, `upload-results`, `exclude-directories`, `claude-model`, `claudecode-timeout`, `run-every-commit`, `false-positive-filtering-instructions`, `custom-security-scan-instructions`) with default, when to change, and gotchas.
- Note: `run-every-commit: false` is the sensible default — enabling it multiplies cost and false positives.
- Outputs: `findings-count`, `results-file` — how to use them in downstream steps.

#### H2: How to reduce false positives in Claude Code Security Review
- Built-in filters: confidence score <8 is auto-dropped. DoS, rate limit, memory/CPU exhaustion, generic input validation, open redirects — all hard-excluded.
- User-reported FP rate: <20% with Opus 4.6 per the InfoQ/HN discussion on kernel vulnerability work. Cite: [InfoQ, April 2026](https://www.infoq.com/news/2026/04/claude-code-linux-vulnerability/).
- Writing a custom `false-positive-filtering-instructions` file:
  - Put it at `.security/false-positives.md` in the repo.
  - Example content: "Admin routes under `/internal/*` intentionally bypass auth because they are bound to localhost only. Test utilities in `tests/fixtures/` intentionally contain hardcoded secrets for replay."
  - Reference it in the action: `false-positive-filtering-instructions: ./.security/false-positives.md`.
- Pattern from SpecterOps: use Claude Code as a "targeted manager" (point it at specific files) rather than a shotgun scanner. Cite [SpecterOps blog](https://specterops.io/blog/2026/03/26/leveling-up-secure-code-reviews-with-claude-code/).

#### H2: Customizing the security scan with your own rules
- Copy `.claude/commands/security-review.md` from the action repo into your own `.claude/commands/`.
- Edit it to add org-specific categories (e.g., "flag any SQL query built with string concatenation even inside stored procedures").
- Point `custom-security-scan-instructions` at a Markdown file.
- This ties into the existing [CLAUDE.md guide](https://avinashsangle.com/blog/claude-md-guide) — same mechanism, different file.

#### H2: How much does Claude Code Security Review cost per PR?
- Cost is **token-based against your API key**, unlike the separate Claude Code Review service ($15-25/PR, Team plan only).
- Token math: a 500-line PR diff with Opus 4.1 averages roughly 30-60k input tokens + ~5k output per scan. At Opus pricing, that's $0.90-$1.80 per PR. Clarify this is a rough estimate — real cost scales with diff size, file count, and whether the model requests tool calls.
- Knobs to lower cost: use `claude-model: claude-sonnet-4-6` (about 3-5x cheaper per token), restrict `exclude-directories` to skip `vendor/`, `node_modules/`, generated code, and disable `run-every-commit`.
- Cross-link to [Claude Code Cost Tracking](https://avinashsangle.com/blog/claude-code-cost-tracking) for broader cost-control patterns.

#### H2: Claude Code Security Review vs Semgrep, Snyk, and SonarQube
- Not a replacement — a complement. Claude's strength is context-aware semantic analysis (business-logic flaws, auth bypass reasoning). Semgrep/Snyk strengths: deterministic pattern detection, dependency CVEs, license compliance, IDE integration, zero token cost.
- Data point: "Snyk Code detection rate 11.2%; all four tools combined detected 38.8%" — cite [sanj.dev AI security tools 2025](https://sanj.dev/post/ai-code-security-tools-comparison). Layered scanning beats any single tool.
- Recommended layered pipeline:
  1. Semgrep for pattern-based SAST (fast, free, deterministic).
  2. Snyk/Dependabot for SCA.
  3. Claude Code Security Review for context-aware business-logic review on every PR.
- Keep Semgrep as the blocking gate; use Claude as an advisory commenter to avoid cost blowouts.

#### H2: Security considerations and prompt injection risk
- The action is explicitly **not hardened against prompt injection**. A malicious contributor can embed instructions in code comments that subvert the reviewer.
- Mitigation: "Require approval for all external contributors" in Actions settings. Link to the [GitHub docs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#controlling-changes-from-forks-to-workflows-in-public-repositories).
- Don't grant `contents: write` or `pull-requests: admin` — strictly `read`/`write` on the minimum.
- Reference the broader MCP security conversation: [The Register, April 16 2026](https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/) — establishes news hook.

#### H2: Troubleshooting common failures
- **Analysis times out after 20 minutes:** raise `claudecode-timeout: 40` or narrow `exclude-directories`.
- **Duplicate comments on re-runs:** the action edits its previous comment; if it posts a duplicate, check that `pull-requests: write` is set at the workflow (not job) level.
- **`CLAUDE_API_KEY not enabled for Claude Code`:** go to [console.anthropic.com](https://console.anthropic.com), enable Claude Code on the key.
- **Findings missing on large PRs:** the model may skip files when context is tight — reduce `exclude-directories` scope or switch to a model with a larger context window.
- **External PR workflow never runs:** expected behavior when "Require approval" is on — that's a feature, not a bug.

#### H2: FAQ
(10 Q&As, 40-60 words each — see FAQ candidates above.)

### Unique angle
1. **Cost math with token counts** — no competitor shows per-PR dollar math.
2. **Layered pipeline recipe** — Semgrep + Snyk + Claude Code Security Review as a three-layer scan, with clear roles.
3. **Writing the `false-positive-filtering-instructions` file** — competitor guides mention this input exists but nobody shows what the file actually contains.
4. **News-hook framing** — April 2026 MCP security crisis makes AI-SAST a present concern, not a hypothetical.
5. **Practitioner voice** — Avinash's DevOps/CI-CD background gives the "how does this fit next to my existing linters and tests" perspective that Gecko's vendor post lacks.

### Internal linking opportunities
- [Claude Code Cost Tracking](https://avinashsangle.com/blog/claude-code-cost-tracking) — in the cost section.
- [How I Write CLAUDE.md Files](https://avinashsangle.com/blog/claude-md-guide) — when discussing `.claude/commands/security-review.md`.
- [Jenkins MCP Server project](https://avinashsangle.com/projects/jenkins-mcp) — CI/CD context for readers on Jenkins.
- [Getting Started with the ant CLI](https://avinashsangle.com/blog/ant-cli-getting-started) — for readers exploring Anthropic's full tooling surface.

### Future cluster
- "Writing custom CLAUDE.md rules for security review"
- "Semgrep + Claude Code: layered SAST pipeline"
- "Using Claude Code Security Review on a monorepo"

### Authoritative external links
- [anthropics/claude-code-security-review](https://github.com/anthropics/claude-code-security-review)
- [Automate Security Reviews with Claude Code — Anthropic](https://www.anthropic.com/news/automate-security-reviews-with-claude-code)
- [Automated Security Reviews in Claude Code — Claude Help Center](https://support.claude.com/en/articles/11932705-automated-security-reviews-in-claude-code)
- [Gecko Security guide (April 2026)](https://www.gecko.security/blog/claude-code-security-review-guide)
- [SpecterOps — Leveling Up Secure Code Reviews](https://specterops.io/blog/2026/03/26/leveling-up-secure-code-reviews-with-claude-code/)
- [The Register — MCP design flaw, April 2026](https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/)
- [InfoQ — Claude Code finds 23-year Linux kernel bug](https://www.infoq.com/news/2026/04/claude-code-linux-vulnerability/)
- [sanj.dev — AI code security tools 2025](https://sanj.dev/post/ai-code-security-tools-comparison)

---

## Ready to Write?
Run: `/write-blogpost claude-code-security-review-github-actions`
