# Content Brief: Claude Code Fable 5 Model Routing

**Researched:** 2026-06-11
**Status:** ready to write
**Origin:** topic suggestion merged in PR #37 (2026-06-10)

---

## Phase 1 — Topic Validation Summary

### Verdict: GO (strong, time-sensitive)

- **News peg:** Fable 5 released June 9, 2026 ($10/$50 per 1M tokens, exactly 2x Opus 4.8's $5/$25). Free on Pro/Max/Team through June 22, then draws usage credits. The free-window deadline gives this post a built-in urgency hook - publish before June 22 for maximum relevance.
- **Feature peg:** Claude Code v2.1.166 shipped native `fallbackModel` chains (up to 3 backup models); v2.1.170 added Fable 5 itself (`/model fable`).
- **Demand:** Active HN main thread (item 48463808) debating whether 2x cost is justified; second HN front-page thread on Bedrock 30-day retention. Comparison articles from TrueFoundry, Coursiv, llm-stats, Finout, vanbeaumond.nl all published within 48h of launch - confirms high search interest.
- **Competition gap (verified 2026-06-11):** Every existing piece is either (a) a benchmark/pricing recap, (b) a basic "/model fable" switching tutorial (a2a-mcp.org, AIMadeTools), or (c) official docs. NOBODY covers: configuring the availability fallback chain alongside classifier fallback, task-routing decision rules from real sessions, the CLAUDE.md-triggers-classifier-on-first-request gotcha, or effort-level interaction with the 2x price.
- **AI citation potential:** HIGH. "should I use fable 5 or opus for coding", "claude code fallback model", "why did claude code switch to opus" are exactly the questions devs ask AI assistants. Official docs answer mechanics but not judgment; a practitioner post with real numbers becomes the citable judgment source.
- **Existing site overlap:** None competing. `claude-mythos-preview` is the natural prequel ("the model you couldn't use" -> "now you can, here's how to deploy it"). `claude-code-cost-tracking` provides the cost-tracking method this post applies.

---

## Phase 2 — Keyword Strategy

### Primary keyword
`claude code fable 5` (routing/configuration intent)

### Secondary keywords
- `claude code fallback model`
- `fable 5 vs opus 4.8`
- `claude fable 5 pricing`
- `claude code model selection`
- `fable 5 safety classifier fallback`

### Long-tail queries
1. how to set fallback model in claude code
2. claude code fallbackModel setting example
3. why does claude code switch from fable 5 to opus
4. is claude fable 5 worth 2x the price for coding
5. claude code which model for which task
6. fable 5 opus fallback CLAUDE.md trigger
7. claude fable 5 free until june 22
8. claude code --fallback-model flag vs settings

### FAQ candidates (8-10)
1. What is the fallbackModel setting in Claude Code?
2. How do I switch to Fable 5 in Claude Code?
3. Why did Claude Code switch my session from Fable 5 to Opus 4.8?
4. Is Claude Fable 5 worth 2x the price of Opus 4.8 for coding?
5. How much does Claude Fable 5 cost?
6. Can I stop Claude Code from automatically switching models when a request is flagged?
7. What triggers Fable 5's safety classifiers in a coding session?
8. How are Fable 5 fallback requests billed?
9. What's the difference between fallback model chains and automatic model fallback?
10. Does Fable 5 work on Amazon Bedrock with Claude Code?

---

## Phase 3 — Content Brief

### Article Metadata
- **Title:** Claude Code Fable 5: Model Routing, Fallbacks, Cost Control (60 chars)
- **Slug:** `claude-code-fable-5-model-routing`
- **Meta description:** Configure Fable 5 in Claude Code: fallbackModel chains, safety classifier fallback to Opus 4.8, and which tasks justify the 2x price. (135 chars)
- **Target word count:** 2800-3200
- **Estimated read time:** 12 min
- **Category:** Claude Code
- **Lucide icon:** `GitBranch` (routing metaphor) or `ArrowRightLeft`

### Content Outline

#### Intro (40-60 word direct answer)
Direct answer: Claude Code now has three viable models (Fable 5, Opus 4.8, Sonnet 4.6) plus a native `fallbackModel` setting. This guide covers configuring the chain, understanding the two distinct fallback types, and routing tasks by cost-performance. Then TL;DR bullets.

#### H2: What Changed in June 2026: Fable 5 and Native Fallback Chains
- Fable 5 launch June 9 (Mythos-class, $10/$50, free on subscriptions to June 22), requires Claude Code v2.1.170+
- `fallbackModel` setting shipped in v2.1.166: chains up to 3 backups for availability failures
- Why this combination creates a routing decision every Claude Code user now faces
- Sources: [Anthropic announcement](https://www.anthropic.com/news/claude-fable-5-mythos-5), [model-config docs](https://code.claude.com/docs/en/model-config), [TechCrunch](https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/)

#### H2: How to Switch to Fable 5 in Claude Code
- `/model fable`, `claude --model fable`, `ANTHROPIC_MODEL`, settings `model` field; precedence order
- As of v2.1.153, `/model` saves as default for new sessions (Enter vs `s` for session-only)
- `best` alias resolves to Fable 5 where the org has access, else latest Opus
- Note: not available under zero data retention; not default on any plan tier
- Default model by tier table: Max/Team Premium/API -> Opus 4.8; Pro/Team Standard -> Sonnet 4.6
- Code: settings.json example + CLI examples

#### H2: How to Configure a Fallback Model Chain (fallbackModel)
- What it covers: overload/unavailable/non-retryable server errors only (NOT auth, billing, rate-limit, request-size errors)
- Chain capped at 3 after dedup; switch lasts current turn only; notice shown
- `--fallback-model sonnet,haiku` flag (precedence over settings) vs persistent settings array
- `"default"` alias expands to account default; skip rules (unavailable model skipped, availableModels-excluded dropped)
- Recommended chain for Fable users: `["claude-opus-4-8", "claude-sonnet-4-6"]` - mirrors the classifier fallback target so behavior is consistent
- Code: settings.json `"fallbackModel": ["claude-opus-4-8", "claude-sonnet-4-6"]`

#### H2: Why Claude Code Switches From Fable 5 to Opus 4.8 (Safety Classifiers)
- The OTHER fallback: content-based, distinct from availability chains - clarify the two-systems confusion head-on (key differentiator, nobody else explains both together)
- Classifiers screen cyber + biology content (+ reasoning extraction at API level); flagged request re-runs on Opus 4.8, session STAYS on Opus until `/model fable`
- The first-request gotcha: workspace context (CLAUDE.md, git status, directory names) can trip the classifier before you type anything. A security-focused CLAUDE.md or vulnerability-related commit history is enough.
- Debug method: `claude --safe-mode` disables CLAUDE.md/skills/MCP/hooks to isolate the trigger
- Control: `/config` -> turn off "switch models when a message is flagged" -> flagged requests pause with switch-or-edit choice
- Non-interactive/SDK mode: flagged request = refusal, no fallback prompt - critical for CI pipelines (link ultrareview/CI post)
- Real experience to include: Avinash's own repos (hardening-ai-agents-cicd-prompt-injection content, security-review posts) - did they trigger it? Test and report.
- Sources: [model-config docs](https://code.claude.com/docs/en/model-config), [cookbook fallback guide](https://platform.claude.com/cookbook/fable-5-fallback-billing-guide), [claude5.ai safety architecture](https://claude5.ai/en/news/claude-fable-5-safety-architecture-classifiers-opus-fallback)

#### H2: What Fallback Costs: Billing Mechanics
- Input tokens on direct classifier blocks: not billed
- Fable 5 -> Opus 4.8 fallback input tokens billed at cache-read rate (10% of base input price)
- API users: `server-side-fallback-2026-06-01` beta header + `fallbacks` param; `fallback_credit_token` for client-side retry (5-min validity)
- Claude Code handles this automatically; API/SDK builders need the headers
- Stat anchors: fallback fires on <5% of sessions on average; near-100% for offensive security/bio workloads (expected routing, not an account flag)

#### H2: Which Tasks Justify Fable 5's 2x Price (Task Routing)
- The core judgment section - this is the unique value
- Per-token 2x but effective cost can run higher (more thinking tokens) OR lower (fewer turns/tool calls on complex tasks - HN comments noted this)
- Route to Fable 5: outcome-described ambiguous problems, root-cause investigations, multi-file refactors, long autonomous runs, tasks larger than one sitting
- Stay on Opus 4.8: daily driver, well-scoped tasks where the gap narrows
- Drop to Sonnet 4.6: scoped bug fixes, docs, limited-scope reviews
- Official guidance to cite + extend with own benchmarks: same task run on Fable 5 vs Opus 4.8, report tokens, turns, wall time, cost from `/usage` or cost tracking method (link claude-code-cost-tracking)
- Effort interaction: Fable 5 default effort `high`, supports up to `max`; thinking cannot be disabled on Fable 5; effort scale calibrated per model
- Decision table: task type -> model -> why

#### H2: Fable 5 Routing on Bedrock, Vertex, and Foundry
- Auto-fallback needs both models identifiable: set `ANTHROPIC_DEFAULT_FABLE_MODEL` + `ANTHROPIC_DEFAULT_OPUS_MODEL`, else flagged request = refusal
- Bedrock 30-day data retention requirement for Mythos-class (HN thread 48473166) - enterprise consideration, ZDR incompatibility
- `availableModels` allowlist interaction with fallback chains (excluded elements silently dropped)
- Brief - one section, not the focus; link AWS blog

#### H2: FAQ (Accordion, 8 Q&As from candidates above)

#### Related posts CTA
- claude-mythos-preview (prequel), claude-code-cost-tracking, claude-code-dynamic-workflows-guide

### Unique Angle
1. **Two-fallback-systems framing:** availability chains (`fallbackModel`) vs content classifiers (automatic Opus fallback) are separate mechanisms everyone else conflates or covers singly. Explaining both, and how to configure them coherently, is the definitive-guide opportunity.
2. **The CLAUDE.md first-request gotcha:** Avinash's blog literally contains prompt-injection/security-review content - his own repos are a live test case. Run Fable 5 against this repo and the security posts' repos, report what triggered fallback. Primary-source data nobody else has.
3. **Cost-per-task math, not cost-per-token:** apply the existing cost-tracking methodology to Fable 5 vs Opus 4.8 on identical tasks. Real numbers (tokens, turns, wall time) before the June 22 free window closes - free experimentation period is the moment to gather this data.
4. **Sequel positioning:** claude-mythos-preview covered the model devs couldn't access; this is "now you can - here's the deployment playbook."

### Internal Linking
- **Link from this post to:** `/blog/claude-mythos-preview`, `/blog/claude-code-cost-tracking`, `/blog/claude-code-dynamic-workflows-guide` (effort/ultracode mention), `/blog/ultrareview-ci-cd-pipelines` (non-interactive refusal behavior), `/blog/hardening-ai-agents-cicd-prompt-injection` (security CLAUDE.md content as classifier trigger example)
- **Update after publish:** add forward link from `claude-mythos-preview` ("Fable 5 is now GA - see the routing guide") and from `claude-code-cost-tracking`
- **Future cluster:** Fable 5 + dynamic workflows cost study; agent-teams model selection (CLAUDE_CODE_SUBAGENT_MODEL)

### Key Facts Verified (2026-06-11, from official docs)
- `fallbackModel`: array in settings, `--fallback-model` flag takes precedence, max 3 after dedup, current-turn-only switch, never triggers on auth/billing/rate-limit/transport errors
- Classifier fallback target: Opus 4.8 on Anthropic API, Opus 4.7 on Claude Platform on AWS
- `/config` toggle name: "switch models when a message is flagged"
- `claude --safe-mode` disables CLAUDE.md, skills, MCP servers, hooks (git status/dir names still sent)
- Fable 5 effort levels: low/medium/high/xhigh/max, default high; thinking cannot be disabled
- Fable 5 + Opus 4.8/4.7 on API always run 1M context window
- Pricing: Fable 5 $10/$50, Opus 4.8 $5/$25 per 1M tokens; fallback input at cache-read rate (10%); classifier-blocked input not billed
- Free on Pro/Max/Team through 2026-06-22
- Requires Claude Code v2.1.170+; fallbackModel since v2.1.166

---

## Ready to Write?
Run: /write-blogpost claude-code-fable-5-model-routing
