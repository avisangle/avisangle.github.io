# Twitter/X Long-form Post - Gemini 4 Argon for Agentic Coding: When It Beats Opus 5.5

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py gemini-4-argon-agentic-coding-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Gemini 4 Argon is half the price of Claude Opus 5.5. For six more weeks.

On December 1 it goes from $2/$10 to $4/$20 per million tokens. That's exactly Opus 5.5's price. Most launch coverage skips that part.

I ran Argon through the Gemini API and through Claude Code to see what the intro price actually buys.

THE BENCHMARK SPLIT

From Google's own model card:
- DeepSWE v1.1: Argon 77.9%, Opus 5.5 74.2%
- Terminal-Bench 4.0: Argon 57.4%, Opus 66.4%
- Long context (256k-1M): Argon 84.2%, Opus 66.8%

Argon wins long tasks and big codebases. Opus wins the run-a-command, read-the-output loop that coding agents spend their day in.

THE COST PROBLEM

The one public real-repo test I found (paddo.dev, 6 merged changes, 20 runs each):
- Argon passed every test in 16 runs, Opus in 13
- Argon wrote 1.37M output tokens, Opus 495k
- Argon cost $57.68, Opus $45.81, at Argon's intro price

More accurate. Wordier. Already more expensive per fix, before the price doubles.

THINKING_LEVEL IS THE LEVER

Argon takes low, medium or high. No minimal: I sent one and got a 400.

I ran one coding task 6 times, all passing the same 13 tests. Low and medium used zero thinking tokens. High used 3,472-4,272 and cost roughly 7-8x more for the same code.

Check thoughts_token_count before you reach for high.

RUNNING IT IN CLAUDE CODE

It works through a LiteLLM proxy. I tested it: 6 turns, 75 seconds, bug fixed, about $0.11.

But the first run failed on every request:
"Explicit caching is not supported for models/gemini-4-argon"

Claude Code sends Anthropic cache_control markers, LiteLLM turns them into Gemini explicit caching, and Argon rejects it. Fix: DISABLE_PROMPT_CACHING=1. Gemini's implicit cache still served 70% of input.

Also: Claude Code reported the run at $0.29 because it doesn't know Argon's prices.

MY ROUTING

Argon: reading huge codebases, long multi-file changes with tests
Opus 5.5: terminal loops, UI work, anything you're waiting on
Before Nov 30, trial Argon. After Dec 1, keep it only where it wins on pass rate.

Full guide with the LiteLLM config and the exact env vars:
https://avinashsangle.com/blog/gemini-4-argon-agentic-coding-guide

Follow @avi_sangle for more hands-on AI coding tests.
