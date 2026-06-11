# Reddit Posts - Claude Code Fable 5: Model Routing, Fallbacks, Cost Control

**Post date:** Day 1
**Best time:** 2:00 PM IST (stagger each sub by 30+ min)
**Post via:** `python scripts/post_to_reddit.py claude-code-fable-5-model-routing --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: ClaudeAI
TITLE: PSA: Fable 5 can switch your session to Opus 4.8 before you type anything - how the two fallback systems actually work
FLAIR: Claude Code
---BODY---
I spent launch week running Fable 5 in Claude Code and the thing nobody's guide covers is that there are **two completely separate fallback systems** now, and they behave nothing alike.

**1. fallbackModel chains (v2.1.166)** - availability failures only. You set up to 3 backup models in settings.json or with `--fallback-model opus,sonnet`. When the primary is overloaded, the switch lasts **one turn**, then your next message tries the primary again. Auth, billing, and rate-limit errors never trigger it.

**2. Safety classifier fallback** - Fable 5 screens cyber and biology content. A flagged request re-runs on Opus 4.8 and **the session stays on Opus** until you run `/model fable` again. Per-turn vs sticky is the difference everyone misses.

The gotcha that got me: classifier fallback can fire on the **first request of a session, before you type anything**, because that request carries your workspace context - CLAUDE.md, git status, directory names. I opened a session in a repo whose CLAUDE.md is full of prompt-injection payloads and CVE references. Rerouted on the context load alone.

Useful bits I worked out:

- `claude --safe-mode` disables CLAUDE.md/skills/MCP/hooks, so one run tells you whether a customization is the trigger
- `/config` has a "switch models when a message is flagged" toggle - turn it off and a flagged request pauses with switch-or-edit options instead. Rewording often gets past the classifier without losing the Fable session
- Billing is fairer than expected: blocked input tokens aren't billed, and the Opus re-run bills input at the cache-read rate (10% of base)
- In non-interactive/CI mode, flagged requests **refuse instead of falling back** - pin Opus for automated security scanning
- Since v2.1.153, `/model` saves your pick as the default for new sessions. Press `s` for session-only or Fable quietly becomes your daily driver

My settings ended up as `"model": "fable"` with `"fallbackModel": ["claude-opus-4-8", "claude-sonnet-4-6"]` - Opus first so both fallback systems land on the same model.

Wrote up the full routing guide, including which tasks actually justify 2x pricing and the Bedrock env vars: https://avinashsangle.com/blog/claude-code-fable-5-model-routing

Happy to answer questions, especially if your repos touch security content - the "under 5% of sessions" fallback average really doesn't apply to us.
---POST---
SUBREDDIT: LLMDevs
TITLE: Model routing with Claude Fable 5: two fallback mechanisms, cache-read billing on reroutes, and when 2x per-token is cheaper per task
FLAIR: Discussion
---BODY---
Anthropic's Fable 5 launched at $10/$50 per 1M tokens, exactly 2x Opus 4.8's $5/$25. I've been working out the routing mechanics in Claude Code and a few of the design decisions are interesting beyond this specific vendor.

**Two routing layers with different semantics.** Availability fallback (an ordered chain of up to 3 backup models) switches for a single turn, then retries the primary. Content-classifier fallback (cyber/bio detection) is sticky: the session moves to Opus 4.8 and stays. Mixing up the two leads to wrong mental models about what your session is running.

**The billing design is the clever part.** When a classifier blocks a request, input tokens aren't billed. When the request re-runs on the fallback model, input bills at the **cache-read rate (10% of base)** instead of the cache-write rate you'd normally pay to rebuild context on a different model. On the raw API there's a `server-side-fallback-2026-06-01` beta header for automatic retry, and a `fallback_credit_token` (5-minute validity) for client-side retries. `usage.iterations` tells you which model actually answered - the requested model field lies to you after a fallback.

**Per-token price is the wrong cost metric.** I ran the same root-cause bug (race condition across 4 files) on both models. Fable 5 used ~40% fewer turns, investigated before patching, and wrote a reproducing test unprompted. Effective cost landed near parity with Opus 4.8 despite 2x per-token. On a scoped, well-specified task the premium buys nothing - it was just slower. Tokens-per-outcome, not dollars-per-token.

**One sharp edge for pipeline builders:** in non-interactive mode, a classifier-flagged request ends in a refusal, not a fallback. If your eval harness or CI runs Fable 5 against security-adjacent code, that's a failed job. Workspace context alone (a security-heavy CLAUDE.md equivalent) can trigger it on the first request.

Full writeup with the chain config, classifier debug workflow, and a task routing table: https://avinashsangle.com/blog/claude-code-fable-5-model-routing

Curious how others are handling model routing - static per-project config, or dynamic per-task?
---POST---
SUBREDDIT: AI_Agents
TITLE: What Fable 5's routing behavior means if you run long autonomous agent sessions
FLAIR: Discussion
---BODY---
Fable 5 is pitched as the model for long autonomous runs - it investigates before acting and verifies its own work. I've been testing it in Claude Code since launch and the routing behavior matters more for agent workloads than for interactive use.

**Why it suits agent-style work:** on an ambiguous root-cause bug spanning four files, it needed ~40% fewer turns than Opus 4.8 and wrote a reproducing test without being told. Fewer check-ins is the actual product. Anthropic's guidance is to describe the outcome, not the steps, and skip the "remember to verify" reminders entirely.

**The catches for autonomous setups:**

- **Classifier fallback is sticky.** Cyber/bio content reroutes the session to Opus 4.8 and it stays there. A long unattended run can silently finish on a different model than it started on. Check the transcript notices.
- **Non-interactive mode refuses instead of falling back.** Headless agents and SDK integrations get a refusal on flagged requests - your run dies instead of degrading. For security-adjacent workloads, start on Opus.
- **Workspace context can trigger it at step zero.** The first request carries CLAUDE.md-style instructions and repo state. Security tooling in your agent's context can reroute before the task begins.
- **Subagents inherit the session model.** A 50-subagent fan-out on Fable 5 is a very different bill than the same orchestration on Sonnet. Route the orchestrator and workers separately if your harness allows it.
- **Thinking can't be disabled on Fable 5**, so budget thinking tokens as a floor for every step of a long run.

Pricing context: $10/$50 per 1M tokens (2x Opus 4.8), free on Claude subscriptions through June 22, which is a decent window to benchmark your agent harness on it.

Longer writeup with the fallback chain config and a task routing table: https://avinashsangle.com/blog/claude-code-fable-5-model-routing

Anyone else running multi-hour sessions on it yet? Curious whether the fewer-turns pattern holds for your workloads.
