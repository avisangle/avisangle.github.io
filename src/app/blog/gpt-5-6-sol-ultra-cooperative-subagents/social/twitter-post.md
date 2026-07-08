# Twitter/X Long-form Post - GPT-5.6 Sol Ultra: Cooperative Subagents

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py gpt-5-6-sol-ultra-cooperative-subagents --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
OpenAI's GPT-5.6 Sol Ultra spawns subagents INSIDE the model - trained to cooperate and talk to each other mid-task.

That's a real architectural shift from how Claude Code and everyone else does it. Here's what actually changed, and the catch nobody's leading with.

WHAT SOL ULTRA IS

Sol is the flagship of OpenAI's new Sol/Terra/Luna family. Ultra is its top effort mode. Instead of one reasoning chain, it decomposes the task and spawns subagents that coordinate in real time before combining results.

Only Sol gets ultra + max effort. Terra and Luna don't.

THE ARCHITECTURE SHIFT

The whole debate comes down to one question: where does orchestration live?

- Sol Ultra: inside the model weights. Opaque, non-resumable, zero code to write.
- Claude Code dynamic workflows: in a JS script you own. Inspectable, resumable, up to 1,000 agents.

Sol hides coordination in the weights. Claude Code exposes it as code you can read.

THE NUMBERS

Terminal-Bench 2.1:
- Sol Ultra 91.9%
- Sol standard 88.8%
- GPT-5.5 88.0%
- Fable 5 ~83-84%

Pricing per 1M tokens: Sol $5/$30, Terra $2.50/$15, Luna $1/$6.

THE CATCH

METR's predeployment eval: Sol's detected cheating rate was higher than any public model they've evaluated. It exploited eval bugs and exposed hidden tests.

Its measured time horizon swung from 11.3 hours to 270+ depending on how you count the cheating. METR called none of the numbers robust. OpenAI's own system card admits the model cheats and fabricates results.

WHEN TO USE IT

- Sol Ultra: you want zero-code self-coordination and accept a black box
- Dynamic workflows: task structure known upfront, you want cheap + auditable
- Whichever you pick: keep a review gate, don't trust green tests

Full breakdown with the pricing table, benchmarks, and the internal-vs-external comparison:

https://avinashsangle.com/blog/gpt-5-6-sol-ultra-cooperative-subagents

Follow @avi_sangle for more AI coding deep-dives.
