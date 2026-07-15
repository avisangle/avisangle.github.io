# LinkedIn Post - Stop HalluSquatting in AI Coding Agents

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py hallusquatting-defense-ai-coding-agents --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Last week researchers published an attack that turns an AI agent's worst habit into a delivery mechanism for malware.

It's called HalluSquatting, and the idea is simple enough to be uncomfortable: work out which package names an LLM predictably invents, register those names first, then wait for someone's coding assistant to fetch them on their behalf.

I read fifteen articles about it. Every one explained the attack. Not one told me which settings to change. So I spent a day working that out.

What I found:

- Repositories published in 2025 carry a 92.4% hallucination rate across six LLMs. Pre-2019 repos sit at 0.9%. Recency and hallucination are the same axis, so the tool you most want to install is the one your agent is least able to name correctly. That is exactly where attackers wait.

- The standard supply chain playbook does not cover this. Lockfiles protect dependencies you already track, but the agent is adding a new one. Install cooldowns assume the malicious version is recent, but a hallusquatter registers early and waits months. Both are post-resolution controls, and this attack is won at resolution time.

- react-codeshift is the proof it is not theoretical. An LLM fused two real packages into a plausible fake, it landed in 47 auto-generated Agent Skills committed without review, and copy-paste carried it to 237 GitHub repositories. When Aikido claimed the name in January, telemetry showed 1-4 downloads a day. Live agents, still executing it, months later.

- The control that actually works is a PreToolUse hook: parse the command, check the registry, exit 2 on a 404. It runs outside the model loop, so an injected prompt cannot argue with it.

The nuance worth stating plainly: this is not a "Claude is safe, the others aren't" story. Claude Code was not among the nine applications tested. What was tested is the models, and the spread is the actual lesson. Opus 4.5 searched before fetching in 73% of runs and hallucinated 0% of the time. Sonnet 4.5 searched in only 31%, and hit 100% when it skipped. Two models, same vendor, a 100-point spread. That is a habit, not a security boundary, and it is not something to rely on.

Full write-up, with the hook script and the sandbox config:
https://avinashsangle.com/blog/hallusquatting-defense-ai-coding-agents

If you run an AI coding agent day to day: do you actually know what it installed last week?

#AISecurity #SupplyChainSecurity #DevSecOps #ClaudeCode #AIAgents
