# Twitter/X Long-form Post - Stop HalluSquatting in AI Coding Agents

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py hallusquatting-defense-ai-coding-agents --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Attackers have started registering the package names your AI agent predictably invents.

It's called HalluSquatting. Researchers published it on July 8. I read fifteen articles about it. Every one explained the attack. Not one told me which settings to change.

So I worked it out.

THE NUMBER THAT REFRAMED IT

Repos published in 2025: 92.4% hallucination rate across six LLMs.
Repos from before 2019: 0.9%.

Recency and hallucination are the same axis. The tool you're most likely to ask an agent to fetch is the one it's least able to name correctly. That's exactly where attackers set up shop.

YOUR EXISTING DEFENSES DON'T COVER THIS

Every npm hardening guide says commit your lockfile and turn on an install cooldown. Both miss:

- Lockfiles protect dependencies you already track. The agent is ADDING a new one. There's no entry to check it against.
- Cooldowns assume the malicious version is recent. A hallusquatter registers early and waits months. It clears a 3-day cooldown without trouble.
- Typosquat scanners look for near-misses. react-codeshift is a plausible hybrid of jscodeshift and react-codemod, not a typo of either.

Every one of those is a post-resolution control. The attack is won at resolution time.

WHAT THE NEWS CYCLE GOT WRONG

Claude Code was not one of the nine apps tested. The nine: Cursor, Cursor CLI, Gemini CLI, Windsurf, Copilot Chat, Cline, plus three personal assistants.

The models were tested, and that split is the useful part:

- claude-4.5-opus searched before fetching in 73% of runs -> 0% hallucination
- claude-4.5-sonnet searched in 31% -> 100% hallucination when it skipped

Search-before-fetch is the whole ballgame. But it's a habit, not a control.

WHAT ACTUALLY WORKS

A PreToolUse hook. It parses the Bash command, checks the name against the registry, exits 2 on a 404. Deterministic, zero tokens, runs outside the agent loop.

An injected prompt can talk Claude out of a CLAUDE.md rule. It cannot talk a shell script out of exit code 2.

Then ignore-scripts=true in .npmrc, and a sandbox so a bad fetch can't reach the network.

THE PART THAT ISN'T THEORETICAL

react-codeshift never existed. An LLM invented it inside 47 auto-generated Agent Skills, committed with no human review. Copy-paste carried it to 237 GitHub repos.

When Aikido finally claimed the name, telemetry showed 1-4 downloads every single day. Live agents. Still running it. Months later.

A skill file is a shell script wearing a .md extension.

Full guide, with the hook script and sandbox config:
https://avinashsangle.com/blog/hallusquatting-defense-ai-coding-agents

Follow @avi_sangle
