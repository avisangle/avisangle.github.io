# LinkedIn Post - Claude Code Fable 5: Model Routing, Fallbacks, Cost Control

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py claude-code-fable-5-model-routing --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
My Claude Code session switched models before I typed a single word. That turned into the most useful thing I learned about Fable 5 all week.

Anthropic released Claude Fable 5 on June 9 at $10/$50 per million tokens, exactly 2x Opus 4.8. The same week, Claude Code shipped a native fallbackModel setting. Suddenly every team has a routing decision to make, and the benchmark recaps don't help with it.

What I found after a week of real sessions:

- There are two separate fallback systems. fallbackModel chains handle outages (per-turn, up to 3 backups). Safety classifiers handle cyber/bio content and reroute the session to Opus 4.8 - and it stays there until you switch back.

- The classifier can fire on the first request because it carries your workspace context. A security-heavy CLAUDE.md is enough. claude --safe-mode isolates the trigger in one run.

- The billing is fair: blocked input tokens cost nothing, and fallback re-runs bill input at 10% of the base rate.

- On a real root-cause bug (OAuth race condition across four files), Fable 5 needed ~40% fewer turns than Opus 4.8 and found it without my steering. Total cost: near parity. On a scoped task, it was just slower and pricier.

What Fable 5 is NOT: a default upgrade. For daily feature work, Opus 4.8 at half the per-token price is the right call, and for CI security scanning Fable 5 will refuse flagged requests in non-interactive mode rather than fall back - that's a failed pipeline, not a slower one.

The routing rule I landed on: Fable 5 for ambiguous, long-running, multi-file work where fewer wrong turns beat cheaper tokens. Opus 4.8 for everything else. Sonnet 4.6 for scoped fixes.

Fable 5 is free on Pro, Max, and Team plans through June 22. That's the window to benchmark it on your own backlog instead of trusting anyone's table, including mine.

Full guide with the fallback chain config, /config toggle, billing mechanics, and Bedrock setup:

https://avinashsangle.com/blog/claude-code-fable-5-model-routing

How are you deciding which model gets which task - per session, per project, or not at all?

#ClaudeCode #Fable5 #AIEngineering #Anthropic #DevTools
