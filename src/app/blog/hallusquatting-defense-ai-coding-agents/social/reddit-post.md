# Reddit Posts - Stop HalluSquatting in AI Coding Agents

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py hallusquatting-defense-ai-coding-agents --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

> **FLAIR WARNING (read before posting):** `list_reddit_flairs.py` returned
> **401 Unauthorized** for both subs on 2026-07-15, so the flair values below are
> names taken from `.claude/subreddit-registry.md`, NOT verified flair IDs. Reddit
> auth is currently failing (credentials are present in `.env` but rejected, which
> usually means an expired password or 2FA on the account). Fix auth, then re-run
> `python scripts/list_reddit_flairs.py ClaudeAI` and `... devsecops` and swap in
> the real IDs, or the post may be rejected on flair validation.
>
> Stagger the two posts by >= 30 min (registry anti-spam rule). Bodies are tailored
> per sub, which counts as split.

---POST---
SUBREDDIT: ClaudeAI
TITLE: HalluSquatting: attackers now register the package names your agent predictably invents. Here's the Claude Code config that blocks it.
FLAIR: Tutorial
---BODY---
Researchers published "Beware of Agentic Botnets" on July 8 (arXiv:2607.07433). The attack is called HalluSquatting: work out which names an LLM predictably hallucinates for a trending resource, register those names first, host a malicious prompt there, and wait for someone's agent to fetch it.

**The number that reframed this for me:** repositories published in 2025 carry a **92.4% mean hallucination rate** across six LLMs. Repos from before 2019 sit at **0.9%**.

Recency and hallucination are the same axis. Your model has read plenty about tools that existed for years and nearly nothing about the one that trended last week. So the resource you're most likely to ask for is the one it's least able to name. That's where attackers set up.

**First, an accuracy note, because the headlines got this wrong.** Claude Code was **not** one of the nine applications tested. The nine were Cursor IDE, Cursor CLI, Gemini CLI, Windsurf, GitHub Copilot Chat, Cline, and three personal assistants (OpenClaw, ZeroClaw, NanoClaw).

The *models* were tested, and that's the useful part:

- `claude-4.5-opus` searched before fetching in 73% of runs and hallucinated **0%** of the time
- `claude-4.5-sonnet` searched in only 31%, and hit **100%** hallucination when it skipped

Search-before-fetch is the entire fix. But read those two numbers again: it's a *habit*, not a control. Same vendor, 100-point spread. The 27% of runs where Opus didn't search are exactly what an attacker is playing for.

**Why your lockfile won't save you.** This is the part I didn't see anyone say:

- `npm ci` and lockfiles protect dependencies you **already track**. The agent is *adding* a brand-new one. There's no entry to check against.
- `min-release-age` cooldowns assume the malicious version is **recent**. A hallusquatter registers the name early and waits months. It clears a 3-day cooldown without trouble.
- Typosquat scanners look for near-misses. `react-codeshift` is a plausible hybrid of `jscodeshift` and `react-codemod`, not a typo of either.

All post-resolution controls. The attack is won at resolution time.

**What actually works: a PreToolUse hook.** A CLAUDE.md rule is advisory text the model weighs against everything else in context, which is a bad property for a control whose job is surviving an injected prompt. A hook runs outside the agentic loop, costs zero tokens, and doesn't care what the model believes.

    {
      "hooks": {
        "PreToolUse": [
          { "matcher": "Bash",
            "hooks": [{ "type": "command", "command": "~/.claude/hooks/verify-package.sh" }] }
        ]
      }
    }

The script parses `.tool_input.command` with jq, extracts package/repo names, checks each against the registry (`npm view`, the PyPI JSON API, `gh repo view`), and exits 2 on a 404. Exit 2 blocks the call and feeds stderr back to Claude as the reason, so it can correct itself.

**Be clear on what that buys you:** it proves the name resolves. It does not prove the package is benign, and a squatted package *does* resolve. It closes the hallucination gap, not the malice gap. Pair it with `/sandbox` (bubblewrap on Linux, seatbelt on macOS, covering Bash and every child process) so a `postinstall` that does run can't reach the attacker's host. Anthropic reports sandboxing cut permission prompts 84% internally, which matters because approval fatigue is what this attack actually preys on.

Also `ignore-scripts=true` in `.npmrc`. That one line kills the cheapest execution path in the ecosystem.

**And the part that isn't theoretical.** `react-codeshift` never existed. An LLM invented it inside 47 auto-generated Agent Skills committed with no review in October. Copy-paste carried it to **237 GitHub repositories**. When Aikido claimed the name in January, telemetry showed **1-4 downloads every day** (a normal phantom package spikes to 60-100 on day one, then flatlines at zero). That trickle is live agents, still executing it. A skill file is a shell script wearing a `.md` extension.

I wrote the whole thing up with the full hook script, the sandbox settings, and the honest limits (the paper found no assistant refused execution based on payload content, even with explicit AI-targeting markers):

https://avinashsangle.com/blog/hallusquatting-defense-ai-coding-agents

Happy to answer questions, and genuinely interested if anyone's hook regex has caught something real.

---POST---
SUBREDDIT: devsecops
TITLE: Why lockfiles and install cooldowns don't stop HalluSquatting
FLAIR: Article
---BODY---
There's a new supply chain attack class worth threat-modelling, and the standard playbook mostly doesn't cover it.

**HalluSquatting** (arXiv:2607.07433, published July 8) targets your AI agent's guesses instead of your developers' typos. Three steps: identify a trending resource, compute the LLM's probability distribution over the names it hallucinates for that resource, pre-register the high-probability fakes with an adversarial prompt on them. Then wait.

The attacker needs exactly two capabilities: see what's trending, and register a public name. **No repo access. No CI access. No injection channel into your prompts.** That's why the paper classes it as an untargeted attack, and it means there's nothing on your side to detect until it fires. End-to-end RCE landed in 20-65% of runs.

**Here's the part that should bother you.** Every control we normally reach for is post-resolution, and this attack is won at resolution time:

| Defense | What it assumes | Why it walks past |
|---|---|---|
| `npm ci` / lockfile | Dependency is already tracked | Agent is *adding* a new one; no entry exists |
| `min-release-age` | Malicious version is recent | Attacker registered months ago and waited |
| Typosquat scanners | Name is a near-miss | `react-codeshift` is a plausible hybrid of `jscodeshift` + `react-codemod`, not a typo |
| SBOM | You audit what you shipped | Reports after `postinstall` already ran |
| Permission prompt | Human recognises a wrong name | The name looks perfectly reasonable. That's the point. |

I want to be fair: cooldowns and lockfiles are genuinely effective against compromised-maintainer attacks, where a legitimate package ships a malicious version. Keep them. Just don't count them as coverage here. The threat model is inverted, because there's no legitimate package to compromise, only a name a model invented.

**The risk profile inverts too.** Repos published in 2025: **92.4%** mean hallucination across six LLMs. Pre-2019 repos: **0.9%**. Training cutoffs mean recency and hallucination are the same axis, so the newest, most-requested tooling is the most dangerous to ask an agent for. Skill installs were worse: 90.7% of trials resolved to a squattable slug, and 100% for non-English display names.

**What survives the threat model:**

1. **Verification at resolution time.** A pre-execution hook that checks the name against the registry and hard-fails on a 404. Deterministic, outside the model loop, so a prompt injection can't negotiate with it. This is the only control that stops the fetch rather than cleaning up after it.
2. **`ignore-scripts=true`.** Lifecycle scripts run automatically with full user privileges the moment a package lands. Turn them off and a squatted package that does get installed sits inert.
3. **OS-level sandbox with both filesystem and network boundaries.** Half a sandbox is not a sandbox: without network isolation a compromised agent exfiltrates, without filesystem isolation it escapes and reaches the network anyway. A botnet node that can't call home isn't a botnet node.
4. **Audit the agent's fetch log.** Detection, not prevention, but the react-codeshift trickle proves agents keep executing bad instructions for months before anyone notices.

**The uncomfortable finding:** the paper reports *"No assistant refused execution based on payload content"* even for a crude variant carrying explicit AI-targeting markers. Content guardrails did nothing. The mechanism is that once the agent operates on attacker-controlled files, it applies the same trust as to legitimate project code. There's no trust boundary after the fetch, which is why everything above has to sit before it.

Real-world precedent, if you want something to point at in a review: `react-codeshift` was hallucinated into 47 auto-generated agent skills committed without review, spread to 237 GitHub repos by copy-paste and forking, and when a researcher claimed the name it showed 1-4 downloads daily indefinitely. Live agents executing a package that never existed. It happened to be a researcher who registered it first.

Full write-up with the hook script, `.npmrc`, sandbox config, and the residual risks:

https://avinashsangle.com/blog/hallusquatting-defense-ai-coding-agents

Happy to answer questions. Curious whether anyone's SCA tooling flags this class at all, since none of it is a typo and none of it is a known-bad version.
