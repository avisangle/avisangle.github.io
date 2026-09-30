# LinkedIn Post - DeepSeek V4.1 Flash in Claude Code

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py deepseek-v4-1-flash-multimodal-coding-guide --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Seven weeks ago I wrote that DeepSeek's own Claude Code config told you where its models belonged: V4 Pro in the main loop, Flash on grep and subagents.

That advice is now out of date, and DeepSeek changed it themselves.

V4.1 Flash shipped on September 10. It's a new architecture, not another tuning pass, and DeepSeek's docs now put deepseek-flash in every Claude Code slot. What I found going through the release:

- It reads your prompt with 8B active parameters and writes with 16B. Agent loops are mostly re-reading context, so that split is where the savings come from.
- DeepSWE went from 54.4 to 74.2, ahead of DeepSeek's own V4 Pro at 62.7. These are vendor numbers. Artificial Analysis independently ranks it 7th of 117.
- The Anthropic-compatible endpoint maps any "claude-opus" model name to V4 Pro. Leave one slot unset and you're on the slower, pricier model without knowing it.
- Screenshots go through. PDFs and MCP tool blocks don't.
- DeepSeek announced that V4 Pro traffic would be rerouted to Flash on September 14, then reversed it a day later. Several guides still describe the reroute.

The part that isn't cheaper: output costs about 2x what V4 Flash charged, and peak pricing (double rates) runs 06:30-09:30 and 11:30-15:30 IST on weekdays. For teams in India, that's most of the morning.

It also still trails on the hardest long-horizon terminal benchmark, 31.2 against 39.9 for GPT-5.6 Sol. I'd put it in the main loop for everyday work. I wouldn't hand it an overnight autonomous run.

Full guide with the config, the before/after table and the vision limits:
https://avinashsangle.com/blog/deepseek-v4-1-flash-multimodal-coding-guide

How are you handling vendors that repoint model IDs underneath you? Pinning versions, running your own evals, or just watching the changelog?

#ClaudeCode #DeepSeek #AIEngineering #DevOps #LLM
