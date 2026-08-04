# LinkedIn Post - DeepSeek V4 Flash for Claude Code

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py deepseek-v4-flash-agentic-coding-guide --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
DeepSeek released V4 Flash 0731 on July 31 without changing the model at all.

Same 284B Mixture-of-Experts architecture as the April preview. Same 13B active parameters per token. No new pretraining. The only thing that changed was the post-training run, the step that teaches a model planning, error-checking and recovery.

DeepSWE went from 7.3 to 54.4 on those identical weights. Terminal Bench went from 61.8 to 82.7. It now beats DeepSeek's own flagship V4-Pro-Preview on all nine published agent benchmarks.

What I found digging past the launch coverage:

- At $0.14 input and $0.28 output per 1M tokens, it is roughly 57x cheaper than Claude Opus 4.8 at a 3:1 token blend. Artificial Analysis ran its full Intelligence Index suite for $72.02 and scored it 50, third of 101 models.
- It still trails Opus 4.8 on every single row of DeepSeek's own table. Close on Terminal Bench (82.7 against 85.0), fifteen points back on NL2Repo. The claim was never parity.
- It is absent from the public Terminal-Bench leaderboard, and DeepSeek ran its own evaluation setup. So the cross-vendor comparisons are not like-for-like, even though the model-against-itself numbers are solid.
- The shape that matters: it beats GPT-5.6 Terra on short-horizon tool use and loses badly on long-horizon agent work (Agents' Last Exam 25.2 against 50.4).

That last point is the whole decision. Flash executes well and plans poorly. Give it the step, not the goal.

The detail I keep coming back to is that DeepSeek's own recommended Claude Code configuration says the same thing. Their documented setup puts V4 Pro in the Opus and Sonnet slots and Flash only in the Haiku slot and subagents. The vendor's defaults agree with the benchmark shape, which is about as much corroboration as you get before running it yourself.

So this isn't a switch. It's a routing decision: cheap model on search, grep and parallel fan-out, expensive model on the code that ships.

Full write-up with the setup block, the benchmark table, the cost math, and the limitations nobody lists:

https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide

Where do you draw the line between a cheap model and your default one?

#AI #DevOps #SoftwareEngineering #LLM #AgenticCoding
