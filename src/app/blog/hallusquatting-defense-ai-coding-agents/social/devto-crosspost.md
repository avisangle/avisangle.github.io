# Dev.to + Hashnode Cross-post - Stop HalluSquatting in AI Coding Agents

**Post date:** Day 21+ (NOT day 2 - see the timing warning below)
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py hallusquatting-defense-ai-coding-agents --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py hallusquatting-defense-ai-coding-agents --dry-run`

> **TIMING - do not run this on Day 2.** Same-day syndication lets dev.to outrank
> the origin post despite the canonical tag. Lag this cross-post **2-3 weeks**
> behind the blog (blog published 2026-07-15, so post around **2026-08-05**), by
> which time Google has firmly attributed the original.
>
> **HASHNODE GOES LIVE REGARDLESS OF `PUBLISHED: false`.** `post_to_hashnode.py`
> publishes immediately; only Dev.to honours the draft flag. Do not run the
> Hashnode script until you actually intend to publish. Dev.to is safe to run
> early: it lands as a reviewable draft.

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: How to Defend AI Coding Agents Against HalluSquatting Attacks
DESCRIPTION: HalluSquatting turns predictable AI hallucinations into malware delivery. Why lockfiles and install cooldowns miss it, and the PreToolUse hook, sandbox config, and .npmrc settings that actually block the fetch.
TAGS: security, ai, claudecode, devops
CANONICAL_URL: https://avinashsangle.com/blog/hallusquatting-defense-ai-coding-agents
COVER_IMAGE: https://avinashsangle.com/og-hallusquatting-defense-ai-coding-agents.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/hallusquatting-defense-ai-coding-agents).

HalluSquatting works because your agent guesses a package name and an attacker already registered the guess. Lockfiles and install cooldowns will not save you, because both assume the dependency is already tracked. The fix is to block the fetch before it happens: force search-before-fetch, verify names with a hook, and sandbox egress.

## TL;DR

- **The attack:** attackers compute which names an LLM predictably invents for a trending tool, register those names first, and host a malicious prompt there. Researchers measured a **92.4% hallucination rate for repositories published in 2025** and end-to-end remote code execution in 20-65% of runs.
- **Your existing defenses miss it:** lockfiles protect dependencies you already have, and cooldowns assume the bad version is new. A hallusquatter registers early and waits. The attack is won at resolution time, upstream of both.
- **What actually works:** search-before-fetch, a `PreToolUse` hook that checks the registry and exits 2 on a 404, `ignore-scripts=true`, and an OS-level sandbox so a bad fetch cannot reach the network.
- **Claude Code was not one of the nine tested apps**, despite how the news read. The models were: `claude-4.5-opus` searched first in 73% of runs and hallucinated 0%, while `claude-4.5-sonnet` searched in 31% and hit 100% when it skipped. That is a habit, not a control.

## What HalluSquatting Actually Is

HalluSquatting is a supply chain attack that targets your agent's guesses instead of your typos. It was named in ["Beware of Agentic Botnets"](https://arxiv.org/abs/2607.07433), published on July 8, 2026 by researchers from Tel Aviv University, the Technion, and Intuit. The recipe is three steps: identify a trending resource, compute the LLM's probability distribution over the names it hallucinates for that resource, then pre-register the highest-probability fakes and host an adversarial prompt on them.

Then the attacker waits. When you ask your assistant to clone that trending repo or install that trending skill, it reaches for the name it invented, finds the attacker's payload sitting there, and pulls the poisoned content into its own context. From there it is indirect prompt injection, and the paper measured **end-to-end remote code execution in 20-65% of runs** across the coding assistants tested.

The distinction from slopsquatting matters. Slopsquatting, coined by Seth Larson in 2025, is opportunistic: register whatever nonsense models happen to emit and hope someone installs it. HalluSquatting is targeted and transferable. The adversarial trigger makes models hallucinate a name the attacker *chose*, and it works across vendors. That turns a random accident into a repeatable delivery mechanism.

**The part that makes it scale:** the attacker needs exactly two capabilities: the ability to see what is trending, and the ability to register a public name. No access to your repository, your CI, or your prompts. They publish a name and wait for your agent to walk into it, which is why the paper classes it as an *untargeted* promptware attack. There is nothing to detect on your side until it fires.

## The Newer the Tool, the More Likely Your Agent Invents Its Name

This is the finding that reframed the whole thing for me, and almost none of the news coverage mentioned it. Repositories published in 2025 carry a **92.4% mean hallucination rate** across the six LLMs tested. Repositories from before 2019 sit at **0.9%**.

Read those two numbers together and the security intuition inverts. Recency and hallucination are the same axis: a training cutoff means the model has read plenty about tools that existed for years and nearly nothing about the one that trended last week. So the resource you are *most* likely to ask an agent to fetch is the one it is *least* able to name correctly.

Which is precisely where the attacker sets up. They are not squatting stable, well-known package names, because the model already knows those. They squat this week's trending tool, where hallucination is close to a coin flip in their favour. The skill numbers are worse than the repo numbers: 90.7% of skill-installation trials (127 of 140) resolved to a slug an attacker could have registered, rising to **100% for skills with non-English display names**. So "just ask the agent for the popular one" is the worst available heuristic. It aims your agent at the part of the name space where it is guessing hardest.

## Why Lockfiles and Install Cooldowns Do Not Stop This

Every npm hardening guide published in 2026 tells you the same things: commit your lockfile, run `npm ci`, turn on a cooldown so you never install a version published five minutes ago. That advice is good. It is also aimed at a different attack, and against HalluSquatting most of it does nothing.

The reason is structural. Every control in that list operates *after* a dependency has been resolved and recorded. HalluSquatting wins during resolution, when your agent decides what name to reach for in the first place. By the time your lockfile has an opinion, the decision has already been made.

| Defense | What it assumes | Why HalluSquatting walks past it |
|---|---|---|
| `npm ci` / lockfile | The dependency is already tracked | The agent is *adding* a brand-new one. There is no entry to check against. |
| `min-release-age` | The malicious version was published recently | The attacker registered months ago and waited. It clears the cooldown. |
| Typosquat scanners | The name is a near-miss of a real package | `react-codeshift` is a plausible hybrid of two real packages, not a typo of either. |
| SBOM | You audit what you shipped | Tells you after the `postinstall` script already ran. |
| Permission prompt | A human will recognise a wrong name | The name looks perfectly reasonable. That is the entire point of the attack. |

I want to be fair to these controls. Cooldowns and lockfiles are genuinely effective against compromised-maintainer attacks, where a legitimate package suddenly ships a malicious version. Keep them. Just do not mistake them for coverage here, because the threat model is inverted: there is no legitimate package to compromise, only a name your model invented.

## Force Search Before Fetch

The paper's headline mitigation is almost embarrassingly simple: make the assistant look the thing up before it goes and gets it. A real search grounds the agent in what exists, and the numbers behind it are not subtle. Cursor CLI, when it searched before cloning, got the right slug 93.4% of the time. When it skipped the search, **99.1% of its outcomes were hallucinated**.

Now the part the news cycle got wrong, and it cuts both ways. **Claude Code was not one of the nine applications tested.** The nine were Cursor IDE, Cursor CLI, Gemini CLI, Windsurf, GitHub Copilot Chat, Cline, and three personal assistants (OpenClaw, ZeroClaw, NanoClaw). Headlines saying "nine AI coding assistants compromised" are stretching it: three of them are not coding assistants at all.

What the researchers did test is the underlying models, and that result is the most useful thing in the paper for anyone running Claude Code. `claude-4.5-opus` searched before fetching in 73% of runs and hallucinated **0% of the time**. Its sibling `claude-4.5-sonnet` searched in only 31% of runs, and when it skipped the search it hallucinated **100% of the time**.

**Do not read that as a Claude victory lap.** Two models from the same vendor, three weeks apart in capability, and a 100-point spread in outcome. The thing protecting Opus is a *habit*, not a control. It searches most of the time. Most of the time is not a security boundary, and the 27% of runs where it did not search are exactly the runs an attacker is playing for.

You can nudge the habit by telling the agent to search first, and it helps. It is not enough. The paper is blunt that prompt framing has no safe configuration: *every prompt category tested had at least one model that hallucinated above 50%*. A `CLAUDE.md` rule is advisory text that the model weighs against everything else in its context, which is a bad property for a control whose whole job is to survive an injected prompt. If a rule genuinely must hold, it belongs in a hook, not a markdown file.

## Verify the Package Exists With a PreToolUse Hook

A `PreToolUse` hook is the enforcement version of "search before you fetch." It runs after Claude builds the tool parameters and before the command executes, it costs zero tokens, and it does not care what the model believes. An injected prompt can talk Claude out of a markdown rule. It cannot talk a shell script out of returning exit code 2. Wire it to the `Bash` tool:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/verify-package.sh"
          }
        ]
      }
    ]
  }
}
```

The hook receives the tool call as JSON on stdin. It pulls out the command, extracts any package or repo names, checks each one against the real registry, and blocks on a 404. Exit code 2 blocks the action and feeds stderr back to Claude as the reason, so the model learns why it was stopped and can correct itself.

```bash
#!/usr/bin/env bash
# Blocks installs and clones of names that do not resolve on the registry.
set -uo pipefail

INPUT=$(cat)
CMD=$(printf '%s' "$INPUT" | jq -r '.tool_input.command // empty')
LOG="$HOME/.claude/fetch-audit.log"

record() { printf '%s\t%s\t%s\t%s\n' "$(date -u +%FT%TZ)" "$2" "$1" "$CMD" >> "$LOG"; }

deny() {
  record DENY "$1"
  echo "Blocked: '$1' does not resolve. Search for the real name before fetching it." >&2
  exit 2   # 2 = block the tool call, stderr goes back to Claude
}

# npm / npx / pnpm / bun
for pkg in $(printf '%s' "$CMD" \
  | grep -oE '\b(npm i|npm install|npx|bunx|pnpm add) +[@a-zA-Z0-9/._-]+' \
  | awk '{print $NF}'); do
  npm view "$pkg" version >/dev/null 2>&1 && record ALLOW "$pkg" || deny "$pkg"
done

# pip
for pkg in $(printf '%s' "$CMD" \
  | grep -oE '\bpip3? install +[a-zA-Z0-9._-]+' \
  | awk '{print $NF}'); do
  curl -sf -o /dev/null "https://pypi.org/pypi/$pkg/json" && record ALLOW "$pkg" || deny "$pkg"
done

# git clone / GitHub slugs
for repo in $(printf '%s' "$CMD" \
  | grep -oE 'github\.com[:/][A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+' \
  | sed -E 's#github\.com[:/]##; s#\.git$##'); do
  gh repo view "$repo" >/dev/null 2>&1 && record ALLOW "$repo" || deny "$repo"
done

exit 0   # 0 = no decision, normal permission flow applies
```

If you prefer structured output over exit codes, return a JSON decision on stdout instead:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Package 'react-codeshift' does not exist on npm"
  }
}
```

Notice the hook also writes every decision to `~/.claude/fetch-audit.log`. That log is the only forensic trail you will have. Grep it for installs of packages that never made it into `package.json`, clones nobody asked for, and repeated denials against the same name. That last pattern is what an active campaign looks like.

**Existence is not safety.** Be clear about what this hook buys you. It proves the name resolves. It does not prove the package is benign, and a squatted package *does* resolve, because the attacker registered it. This closes the hallucination gap, not the malice gap, which is why it composes with the sandbox below instead of replacing it. Treat the regex parsing as a starting point too: shell commands are not a regular language, and a determined agent will find a phrasing your pattern misses.

## Sandbox the Agent So a Bad Fetch Cannot Phone Home

The hook stops the fetch you can predict. The sandbox handles the one you cannot. Claude Code's sandboxing uses OS-level primitives, bubblewrap on Linux and seatbelt on macOS, so it covers the Bash tool *and every child process it spawns*. That last part matters here, because a `postinstall` script is exactly such a child process.

There are two boundaries and you need both. [Anthropic's argument](https://www.anthropic.com/engineering/claude-code-sandboxing) for the pairing is the clearest statement of it: without network isolation a compromised agent exfiltrates your files, and without filesystem isolation it escapes and reaches the network anyway. Half a sandbox is not a sandbox.

```json
{
  "sandbox": {
    "enabled": true,
    "autoAllowBashIfSandboxed": true,
    "filesystem": {
      "allowWrite": ["/tmp/build"],
      "denyRead": ["~/.aws/credentials", "~/.ssh"]
    },
    "network": {
      "allowedDomains": ["github.com", "*.npmjs.org", "pypi.org"],
      "deniedDomains": ["uploads.github.com"],
      "allowLocalBinding": true
    }
  }
}
```

Map that back to the attack. Suppose everything upstream fails: the model hallucinates the name, the attacker registered it, the hook's regex missed the phrasing, and the install runs. The payload executes inside a process that can write to `/tmp/build` and talk to three domains. It cannot read your AWS credentials or reach the attacker's command-and-control host. A botnet node that cannot call home is not a botnet node.

The friction argument is better than the security argument, honestly. Anthropic reports that **sandboxing reduced permission prompts by 84%** in internal usage, because inside a bounded environment there is far less to ask about. Approval fatigue is the failure mode this whole attack class depends on. An engineer clicking through their fortieth prompt of the morning is not reading the package name, so fewer and more meaningful prompts is itself a control.

Two caveats before you rely on it. Sandboxing is still a research preview, so treat it as defense in depth. And the network rules apply to sandboxed Bash commands, **not to the WebFetch tool**, which follows its own permission rules.

## Lock Down the Install Path Itself

One `.npmrc` setting does most of the work here, and it is not the one the 2026 hardening posts lead with.

```ini
# The one that matters for this attack.
# Kills preinstall/install/postinstall/prepare, the cheapest RCE in the ecosystem.
ignore-scripts=true

# Defense in depth against *other* supply chain attacks. Near-useless here:
# a patient hallusquatter registered the name months ago and it clears the cooldown.
min-release-age=3
```

`ignore-scripts=true` earns its place because lifecycle scripts run automatically with your full user privileges the moment a package lands. It is the lowest-friction execution path in the ecosystem, and turning it off means a squatted package that does get installed sits there inertly instead of running. It will break a handful of packages with legitimate native build steps, and you will allowlist those individually. That trade has been worth it in every repo where I have made it.

For the blunt backstop, a deny rule forces every ad-hoc fetch-and-execute through a human. Rules evaluate in the order deny, then ask, then allow, so a deny always wins:

```json
{
  "permissions": {
    "deny": [
      "Bash(npx *)",
      "Bash(bunx *)"
    ]
  }
}
```

This is deliberately annoying, and that is the point. `npx` is fetch-and-execute in a single breath with no lockfile step anywhere in the middle, which is why `react-codeshift` spread as an `npx` invocation rather than a dependency.

## Treat Agent Skills as Executable Code

The best evidence that this attack is not theoretical is a package that nobody attacked with. The timeline, from [Aikido's writeup](https://www.aikido.dev/blog/agent-skills-spreading-hallucinated-npx-commands): on October 17, 2025, a single commit added **47 LLM-generated Agent Skills** across 14 plugins to a popular agents repository, with no apparent human review. Two of them, `react-modernization` and `dependency-upgrade`, told agents to run `npx react-codeshift`. That package never existed. An LLM had fused `jscodeshift` (Facebook) and `react-codemod` (the React team) into a plausible hybrid that sounds more real than either parent.

Then it spread, entirely by copy-paste. Around 100 direct forks. One user replicated it into 30+ of their own repositories. Someone translated it into Japanese. Someone swapped `npx` for `bunx`. Nobody in that chain ran `npm view react-codeshift`. By the time Aikido claimed the name on January 14, 2026, **237 GitHub repositories** were instructing agents to install it.

**The telemetry is the scary part.** After claiming it, Aikido saw **1-4 downloads every single day**. A normal phantom package spikes to 60-100 downloads on day one as scanners sweep it, then flatlines at zero forever. A persistent daily trickle means something is still executing that instruction, months later, on real machines. Whoever registered that name owned a slow, permanent drip of remote code execution across hundreds of projects. It happened to be a security researcher. It did not have to be.

The lesson I took from this is that a skill file is a shell script wearing a `.md` extension. It reads like documentation, it reviews like documentation, and it executes like code. So audit your own:

```bash
# Find every fetch-and-execute instruction hiding in your agent config
grep -rnE '(npx|bunx|npm i(nstall)?|pip3? install|git clone) ' \
  skills/ .claude/ ~/.claude/ 2>/dev/null

# Then confirm each name actually resolves before you trust it
npm view react-codeshift version   # npm ERR! 404 Not Found  <- this is the tell
```

Mine came back clean, which I attribute to luck rather than discipline: I write my skills by hand and I have never bulk-generated 47 of them. That is exactly the practice that failed here, and it is a popular one.

One angle I have not seen raised anywhere. If you give your agent persistent memory, a hallucinated name that lands in the memory store stops being a one-off. It gets recalled and re-executed across sessions, and the wrong name becomes a durable fact your agent believes about your project. Grep your memory files with the same command.

## What This Still Cannot Fix

Everything above is a compensating control. None of it addresses the root cause, and the paper is unsparing about how thin the model-side guardrails turned out to be. The finding that should worry you most: **"No assistant refused execution based on payload content, even for the crude variant with explicit AI-targeting markers."** The researchers left obvious fingerprints on the payload, the kind of thing a content filter exists to catch, and not one of the nine applications balked.

The mechanism behind that explains the shape of this entire post: *once the agent operates on attacker-controlled files, it applies the same trust as to legitimate project code*. There is no trust boundary after the fetch. The agent has no category for "code I pulled from a stranger." Which is why every control here lives *before* the fetch: afterwards, there is nothing left to enforce. The authors are equally unimpressed by confirmation prompts, and they are right. Many agents execute with no confirmation at all, and a human staring at a plausible package name is theatre with a latency cost.

The real fixes are upstream and out of your hands. Model providers enforcing search-before-fetch rather than leaving it to chance. Applications making verification non-optional instead of a behaviour that shows up 31% of the time. Registries doing defensive registration of high-probability hallucinations, the same move that already works against typosquatting. Until those land, everything in this post is you covering for a gap you did not create.

The residual risks, stated plainly: verification proves existence, not intent. The sandbox still permits egress to allowed domains, and `github.com` is on your allowlist. A squatted name that reaches a committed skill file outlives the session that created it.

## The HalluSquatting Defense Checklist

Ordered by impact. The first four do most of the work.

1. Install the `PreToolUse` verification hook. It is the only control that stops the fetch itself.
2. Set `ignore-scripts=true` in `.npmrc`.
3. Enable the sandbox with both a filesystem and a network allowlist. Half a sandbox is not a sandbox.
4. Grep `skills/`, `.claude/`, and your memory store for `npx`, install, and clone commands. Verify every name resolves.
5. Deny `Bash(npx *)` so fetch-and-execute needs a human.
6. Log every hook decision and grep it for repeated denials on the same name.
7. Tell the agent to search before it fetches. Advisory, but it moves the odds.
8. Commit the lockfile and run `npm ci`. It does not help here, but it helps elsewhere.
9. Be most suspicious of the newest tools. That is where hallucination hits 92.4%.

## Frequently Asked Questions

### What is HalluSquatting and how is it different from slopsquatting?

HalluSquatting is slopsquatting made targeted and repeatable. Slopsquatting registers whatever names models happen to invent. HalluSquatting computes the model's hallucination distribution for a chosen trending resource, pre-registers the top result, and hosts an adversarial prompt there. The arXiv paper reports end-to-end remote code execution in 20-65% of runs.

### Is Claude Code vulnerable to HalluSquatting?

Claude Code was not one of the nine applications tested in the paper. The models were, and the results split sharply: `claude-4.5-opus` searched before fetching in 73% of runs and hallucinated 0% of the time, while `claude-4.5-sonnet` searched in only 31% and hit 100% hallucination when it skipped. That is a tendency, not a guarantee.

### Do lockfiles protect against hallucinated packages?

Mostly no. A lockfile pins dependencies you already track, and `npm ci` refuses to re-resolve them. But a hallucinated package is a brand-new dependency the agent is adding for the first time, so there is no lockfile entry to protect it. The attack lands before the lockfile has any say.

### Does npm's min-release-age cooldown stop this attack?

Rarely. Cooldowns assume the malicious version was published recently, which holds for compromised-maintainer attacks. A hallusquatter registers the name early and waits for models to catch up. By the time an agent fetches it, the package is months old and clears any three-day cooldown without trouble.

### How do I make an AI agent verify a package exists before installing it?

Use a `PreToolUse` hook rather than a CLAUDE.md rule. The hook parses the Bash command, checks the name against the registry with `npm view` or the PyPI JSON API, and exits 2 to block on a 404. Hooks run outside the model loop, so an injected prompt cannot argue with them.

### Can a permission prompt stop a hallucinated package install?

Not reliably. The paper found no assistant refused execution based on payload content, even for a variant carrying explicit AI-targeting markers. A prompt shows you a plausible package name that looks like something you meant to install. Approval fatigue does the rest. Prompts are a speed bump, not a control.

### Are Claude Code Agent Skills safe to install from GitHub?

Treat them as executable code, not documentation. Aikido traced `react-codeshift` to 47 LLM-generated skills committed without review in October 2025. The hallucinated name reached 237 GitHub repositories through forks and copy-paste before anyone claimed it on npm. Grep any skill you install for install and clone commands.

### Does sandboxing stop HalluSquatting?

It contains the damage rather than preventing the fetch. Claude Code's sandbox uses bubblewrap on Linux and seatbelt on macOS to restrict filesystem and network access for Bash and its child processes. A `postinstall` script that cannot reach the attacker's domain cannot stage a botnet. It does not restrict WebFetch.
