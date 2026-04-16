# Reddit Posts - Claude Code Cost Tracking

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py claude-code-cost-tracking --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: ClaudeAI
TITLE: How I cut my Claude Code spending from $12/day to $5-6/day without losing output quality
FLAIR: Productivity
---BODY---
Spent a few weeks actually tracking my Claude Code costs after noticing they were higher than I expected. Found a bunch of tracking methods that most people seem to miss, and 7 practical changes that cut my daily spend roughly in half.

**The tracking gap nobody talks about**

Subscription users cannot see dollar costs in the Console. API users get billing data but no per-session breakdown. Meanwhile, every session Claude Code runs writes a full JSONL log to `~/.claude/projects/` with token counts, model used, and timestamps. Most people do not know this data exists on their machine.

**Built-in commands worth knowing**

- **/cost** - session API spend (for API users)
- **/stats** - subscriber usage dashboard
- **/usage** - rate limit status
- **Status line config** - real-time cost in your terminal

**Third-party tools that fill the gap**

- **ccusage** (4,800+ GitHub stars) - daily/monthly/per-session reports. Just `npx ccusage` and you see everything
- **claude-usage** - local web dashboard
- **Claude-Code-Usage-Monitor** - real-time alerts when you hit thresholds

**7 changes that cut my costs 50%**

1. Default to Sonnet ($3/$15 per million tokens). Only switch to Opus ($15/$75, 5x more expensive) when you actually need it
2. `export MAX_THINKING_TOKENS=10000` - extended thinking is the biggest single cost lever
3. `/clear` between unrelated tasks. Stale context costs real money
4. `/compact` when context grows mid-task
5. Write specific prompts with file paths instead of vague "make this better"
6. Plan mode (Shift+Tab twice) before big refactors - saves thousands of tokens by preventing rework
7. Break work into scoped sessions instead of one giant session

**The API vs subscription math**

- Under $50/month usage: API pay-per-token is cheapest
- $100+/month: Max 5x plan ($100/mo) pays off
- $200+/month: Max 20x plan ($200/mo) is the better deal

Wrote a full guide covering the JSONL format, each tracking tool in detail, the /cost vs /stats distinction, and agent SDK cost tracking if you are building with Claude programmatically:

https://avinashsangle.com/blog/claude-code-cost-tracking

Happy to answer questions if anyone wants to compare numbers or discuss cost-optimization strategies.
---POST---
SUBREDDIT: ChatGPTCoding
TITLE: Built-in + third-party tools to track Claude Code token costs (from someone who tracked it for weeks)
FLAIR: Claude
---BODY---
After watching my Claude Code spending climb without really knowing why, I spent a few weeks tracking every session. Turns out Claude Code already logs everything you need. Most people just do not know the commands or where the data lives.

**Where the data actually lives**

Every session writes a JSONL file to `~/.claude/projects/` with full token counts, model used, and timestamps. This data has been on your machine all along.

**Built-in commands**

- `/cost` - session API spend (API users)
- `/stats` - subscriber usage dashboard
- `/usage` - rate limit status

**Best third-party tool I found**

**ccusage** (4,800+ GitHub stars) reads those JSONL files and gives you daily, monthly, and per-session cost reports. One `npx ccusage` command, works offline with cached pricing data.

**The changes that actually moved the needle for me**

- Switching the default model from Opus ($15/$75 per million tokens) to Sonnet ($3/$15). 5x cheaper with no quality drop for most coding tasks
- Setting `MAX_THINKING_TOKENS=10000` to cap extended thinking - this was the single biggest lever
- Running `/clear` between unrelated tasks so stale context does not get sent with every request
- Writing specific prompts with file paths instead of vague asks

Daily spend went from ~$12 to $5-6. Quality did not change.

Full write-up with JSONL examples, each third-party tool compared, and the API vs subscription breakeven math:

https://avinashsangle.com/blog/claude-code-cost-tracking

What tools are you using to track AI coding costs? Curious if there are options I missed.
