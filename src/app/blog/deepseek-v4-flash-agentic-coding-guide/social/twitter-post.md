# Twitter/X Long-form Post - DeepSeek V4 Flash for Claude Code

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py deepseek-v4-flash-agentic-coding-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
DeepSeek shipped V4 Flash 0731 on July 31. Same 284B architecture as the April preview. No new pretraining.

DeepSWE went from 7.3 to 54.4.

That came from post-training alone.

WHAT SHIPPED

284B MoE, 13B active per token, 1M context, MIT weights.

Terminal Bench 2.1: 61.8 -> 82.7
DeepSWE: 7.3 -> 54.4
Toolathlon: 49.7 -> 70.3

It beat DeepSeek's own V4-Pro-Preview on all nine published agent benchmarks.

THE PRICE

$0.14 input, $0.28 output per 1M tokens. $0.0028 on cache hits, which is a 98% discount and the lowest Artificial Analysis has measured across all models.

They ran their full Intelligence Index suite on it for $72.02 and scored it 50, third of 101 models against a median of 25.

WHAT THE RECAPS SKIPPED

Flash trails Claude Opus 4.8 on every single row of DeepSeek's own table. Close on Terminal Bench (82.7 vs 85.0). Fifteen points back on NL2Repo.

And it's not on the public Terminal-Bench leaderboard at all. I checked on Aug 4. DeepSeek ran its own eval setup, so the cross-vendor rows aren't same-harness comparisons.

Trust the model-against-itself rows. Those are airtight: same weights, one variable changed. Treat the rest as directional.

THE ROUTING RULE

Against GPT-5.6 Terra:

Terminal Bench 82.7 vs 78.4 (Flash wins)
Toolathlon 70.3 vs 53.1 (Flash wins big)
DeepSWE 54.4 vs 69.6 (Flash loses)
Agents' Last Exam 25.2 vs 50.4 (Flash loses badly)

Flash executes. It doesn't plan. Give it the step, not the goal.

THE TELL

DeepSeek ships an Anthropic-compatible endpoint, so Claude Code repoints in four env vars.

But read their own recommended config. Pro takes the Opus AND Sonnet slots. Flash only gets Haiku and subagents.

The vendor's defaults agree with the benchmarks.

TWO COSTS NOBODY MENTIONS

It's verbose: 210M output tokens in that eval against a 100M median, on a model where output costs double the input rate.

And a 2x peak-hour price is announced but undated, covering 09:00-12:00 and 14:00-18:00 Beijing time. That's most of an Indian working day.

Setup, the full benchmark table, the cost math, and the limitations nobody lists:

https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide

Follow @avi_sangle
