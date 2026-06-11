# Twitter/X Long-form Post - Claude Code Fable 5: Model Routing, Fallbacks, Cost Control

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py claude-code-fable-5-model-routing --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Claude Fable 5 costs exactly 2x Opus 4.8. The per-token math is the wrong way to decide when to use it.

I spent the launch week configuring model routing in Claude Code and hit every gotcha. Here's what the benchmark recaps don't tell you:

TWO FALLBACK SYSTEMS, NOT ONE

Claude Code now has two completely separate mechanisms that switch your model:

1. fallbackModel chains (v2.1.166) - availability failures only. Up to 3 backups, switch lasts ONE turn, then back to primary.

2. Safety classifier fallback - cyber/bio content reroutes to Opus 4.8 and the session STAYS there until you run /model fable again.

Most posts conflate these. They behave nothing alike.

THE FIRST-REQUEST GOTCHA

Classifier fallback can fire before you type anything. The first request carries your workspace context: CLAUDE.md, git status, directory names.

I opened a Fable 5 session in the repo for my prompt-injection post (CLAUDE.md full of payloads and CVE refs). Rerouted to Opus on the context load alone.

Debug it: claude --safe-mode disables CLAUDE.md, skills, MCP, hooks. If safe mode stays on Fable, a customization is your trigger.

THE BILLING IS FAIRER THAN EXPECTED

- Classifier-blocked input tokens: not billed at all
- Fallback re-run input on Opus 4.8: billed at cache-read rate (10% of base)

You don't pay double because a classifier got nervous.

MY ROUTING TABLE

- Root-cause debugging, multi-file refactors, long autonomous runs: Fable 5
- Daily feature work, reviews, tests: Opus 4.8
- Scoped fixes, docs: Sonnet 4.6
- Security scanning in CI: Opus 4.8 (non-interactive flagged requests REFUSE instead of falling back - that's a failed job)

Same OAuth race-condition bug on both models: Fable 5 found it solo with ~40% fewer turns, wrote the reproducing test first. Cost came out near parity. On a scoped CLI flag task, Fable was just a slower, pricier Opus.

MY SETTINGS

{
  "model": "fable",
  "fallbackModel": ["claude-opus-4-8", "claude-sonnet-4-6"]
}

Opus first so both fallback systems land on the same model.

Fable 5 is free on Pro/Max/Team through June 22. Benchmark your own hard task before the window closes.

Full guide with the Bedrock setup, /config toggle, and effort-level interactions:

https://avinashsangle.com/blog/claude-code-fable-5-model-routing

Follow @avi_sangle for more Claude Code deep-dives.
