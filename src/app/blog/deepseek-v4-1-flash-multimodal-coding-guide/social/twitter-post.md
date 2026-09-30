# Twitter/X Long-form Post - DeepSeek V4.1 Flash in Claude Code

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py deepseek-v4-1-flash-multimodal-coding-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
In August, DeepSeek's official Claude Code config put V4 Pro in the main loop and kept Flash for grep and subagents.

In September they changed it. Every slot now gets deepseek-flash.

Here's what changed, and the one trap in their endpoint that sends you back to Pro anyway.

WHAT SHIPPED (Sep 10)

DeepSeek V4.1 Flash. 552B MoE, MIT weights, 1M context, native image input.

New architecture: a Causal Encoder-Decoder. 8B active parameters to read your prompt, 16B to write the answer. V4 Flash used 13B for both.

Agent loops are mostly reading. Every Claude Code turn re-sends the system prompt, tools, files and history. Cheaper reading is the right trade.

THE NUMBERS (DeepSeek-reported)

DeepSWE v1.1: 74.2 (V4 Pro 62.7, GPT-5.6 Sol 73.0)
Terminal-Bench 2.1: 90.6 (Opus 5 89.1)
Terminal-Bench 4.0: 31.2 (Sol 39.9)

That last row is the one to watch. The long-horizon gap narrowed a lot (V4 Flash scored 7.0) but it didn't close.

Independent: Artificial Analysis puts it 7th of 117, at 208.9 tok/s.

THE MAPPING TRAP

DeepSeek's Anthropic endpoint maps Claude model names for you:

claude-opus -> deepseek-v4-pro
claude-sonnet / haiku -> deepseek-flash

Set only the base URL and pick Opus in /model because it's "the best one", and you're on V4 Pro. Slower, 4.4x more per input token, 11.5 points lower on DeepSWE.

Set every ANTHROPIC_DEFAULT_*_MODEL explicitly.

VISION

Screenshots work through the endpoint (base64, URL, Files API).

PDFs don't. Document blocks are unsupported, and so are MCP tool blocks.

THE REROUTE THAT DIDN'T HAPPEN

Sep 10: DeepSeek says deepseek-v4-pro will route to Flash from Sep 14.
Sep 11: reversed. V4 Pro continues, billing unchanged.

Some guides still say your Pro traffic moved. It didn't.

WHAT IT COSTS

$0.15 in / $0.60 out per 1M off-peak. $0.003 on cache hits.

Output is ~2.1x what V4 Flash 0731 charged ($0.28).

Peak hours double everything: 01:00-04:00 and 06:00-10:00 UTC. In India that's 06:30-09:30 and 11:30-15:30 IST.

Full setup, the before/after config table, vision limits, and local hardware (you now need an 8-GPU node):

https://avinashsangle.com/blog/deepseek-v4-1-flash-multimodal-coding-guide

Follow @avi_sangle
