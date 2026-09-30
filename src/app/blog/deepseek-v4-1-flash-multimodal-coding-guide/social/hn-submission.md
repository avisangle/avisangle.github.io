# Hacker News Submission - DeepSeek V4.1 Flash in Claude Code

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** DeepSeek V4.1 Flash: the Claude Code config changed, and V4 Pro didn't go away

**URL:** https://avinashsangle.com/blog/deepseek-v4-1-flash-multimodal-coding-guide

---

**First Comment:**

Author here. I wrote the V4 Flash 0731 guide in August, and this release made enough of it wrong that it needed a follow-up. DeepSeek's own Claude Code config went from V4 Pro in the main loop to Flash in every slot, and the Sep 10 notice that V4 Pro traffic would reroute to Flash was reversed on Sep 11, which several guides still miss.

The detail I haven't seen written up elsewhere is that the Anthropic-compatible endpoint maps any claude-opus model name to deepseek-v4-pro, and that it drops PDF document blocks and MCP tool blocks while passing images through.

The benchmark numbers are DeepSeek's, apart from the Artificial Analysis ranking, and I haven't run it on a production workload. Corrections welcome, especially independent Terminal-Bench results.
