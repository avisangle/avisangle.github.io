# Dev.to + Hashnode Cross-post - Claude Code Fable 5: Model Routing, Fallbacks, Cost Control

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py claude-code-fable-5-model-routing --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py claude-code-fable-5-model-routing --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Claude Code Fable 5: Model Routing, Fallbacks, Cost Control
DESCRIPTION: Configure Fable 5 in Claude Code: fallbackModel chains, safety classifier fallback to Opus 4.8, and which coding tasks justify the 2x price.
TAGS: claudecode, ai, devops, productivity
CANONICAL_URL: https://avinashsangle.com/blog/claude-code-fable-5-model-routing
COVER_IMAGE: https://avinashsangle.com/og-claude-code-fable-5-model-routing.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/claude-code-fable-5-model-routing).

Claude Code Fable 5 arrived June 9, 2026 at exactly 2x Opus 4.8's per-token price, the same week the native `fallbackModel` setting shipped. This guide covers switching to Fable 5, configuring a fallback chain, why sessions silently reroute to Opus 4.8, and which coding tasks actually justify the premium.

**TL;DR**

- Fable 5 costs **$10/$50 per 1M tokens**, exactly 2x Opus 4.8. It is free on Pro, Max, and Team plans through **June 22, 2026**, which makes right now the cheapest time to benchmark it on your own tasks.
- There are **two separate fallback systems**: `fallbackModel` chains handle availability errors (up to 3 backups, one turn at a time), while safety classifiers reroute flagged content to Opus 4.8 and keep the session there.
- A security-heavy CLAUDE.md or git history can trip the classifier **before you type anything**. Debug with `claude --safe-mode`, or turn off auto-switching in `/config`.
- Route by task: Fable 5 for ambiguous, multi-file, long-running work; Opus 4.8 as the daily driver; Sonnet 4.6 for scoped fixes. Fewer turns on hard tasks narrows the real cost gap.

## What Changed in June 2026: Fable 5 Plus Native Fallback Chains

Two releases landed in the same week and together they changed how I think about model selection in Claude Code. On June 9, Anthropic shipped [Claude Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5), the first generally available Mythos-class model. A few releases earlier, Claude Code v2.1.166 added a native `fallbackModel` setting that chains up to three backup models when your primary is overloaded or down.

If you read my [Claude Mythos preview post](https://avinashsangle.com/blog/claude-mythos-preview) from April, Fable 5 is the payoff: the same underlying model as Mythos 5, with safety classifiers added so the rest of us can use it. [TechCrunch](https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/) framed it as Anthropic releasing its most powerful model days after warning that AI is getting too dangerous, and that tension is baked into how it behaves in Claude Code.

The practical situation: you now have three viable models with real price-performance gaps. Fable 5 at $10/$50 per million input/output tokens, Opus 4.8 at $5/$25, and Sonnet 4.6 well below that. You have a built-in routing mechanism for outages, a classifier that can yank your session off Fable 5 mid-task, and a free evaluation window on Pro, Max, and Team plans that closes **June 22, 2026** according to [Anthropic's announcement](https://www.anthropic.com/news/claude-fable-5-mythos-5). Every guide I've seen covers the benchmarks. None of them cover the routing decisions you face in an actual session, so that's what this post does.

## How to Switch to Fable 5 in Claude Code

Run `/model fable` in a session, or launch with `claude --model fable`. Fable 5 requires Claude Code v2.1.170 or later; older versions don't show it in the picker at all, so run `claude update` first. It is not the default model on any plan tier, which is deliberate. You opt in.

```bash
# Upgrade first - Fable 5 needs v2.1.170+
claude update

# Switch inside a session (Enter saves as default, 's' = this session only)
/model fable

# Or launch a single session on Fable 5 without saving it
claude --model fable

# Check what you're running
/status
```

One behavior change worth knowing: since v2.1.153, picking a model with `/model` writes it to your user settings as the default for new sessions. Press `s` in the picker instead if you only want it for the current session. I got caught by this on day one; I tried Fable 5 for one task and every session after that started on it, quietly burning my rate limit faster. The [model configuration docs](https://code.claude.com/docs/en/model-config) list the full precedence order: in-session `/model`, then the `--model` flag, then `ANTHROPIC_MODEL`, then the `model` field in settings.

There's also a `best` alias that resolves to Fable 5 where your organization has access and falls back to the latest Opus elsewhere. That's useful in shared settings files for teams where not everyone has Fable access yet. Defaults by account type: Max, Team Premium, and the API default to Opus 4.8, while Pro and Team Standard default to Sonnet 4.6. Fable 5 is also unavailable under zero data retention agreements, where the picker omits it entirely.

```json
{
  "model": "fable",
  "fallbackModel": ["claude-opus-4-8", "claude-sonnet-4-6"]
}
```

That two-line settings file is my current setup: Fable 5 as primary with a fallback chain behind it. The next two sections explain what that second line does and what it deliberately does not do.

## How to Configure a Fallback Model Chain (fallbackModel)

The `fallbackModel` setting handles availability failures: when the primary model is overloaded, unavailable, or returns a non-retryable server error, Claude Code tries the next model in your chain instead of failing the request. Authentication, billing, rate-limit, request-size, and transport errors never trigger a switch; those follow normal retry handling. Chains are capped at three models after duplicate removal.

```bash
# One session: comma-separated list, flag wins over settings
claude --model fable --fallback-model opus,sonnet

# Persistent: array in settings.json
# "fallbackModel": ["claude-opus-4-8", "claude-haiku-4-5"]
```

The detail that matters most in practice: **the switch lasts for the current turn only**. Your next message tries the primary model first again. So a fallback chain is not a routing policy; it's a shock absorber. During the launch-week load spikes I hit two overloaded-model errors on Fable 5 in one afternoon, and both times the chain dropped that single turn to Opus 4.8 and bounced back without me touching anything. A notice appears in the transcript when it switches, so you're never guessing which model answered.

Each element accepts a model name or alias, and the string `"default"` expands to your account's default model. Two cases silently shrink your chain: a model that can't be reached (say, a retired version pinned in settings) gets skipped, and any element outside your organization's `availableModels` allowlist is dropped when the chain is read and never tried. If you manage pinned models and allowlists for a team, audit the chain against the allowlist or your backups may not exist.

For Fable 5 users I recommend `["claude-opus-4-8", "claude-sonnet-4-6"]`. Opus 4.8 first because it's also where the safety classifier sends flagged requests, so your session behaves consistently no matter which fallback system fired. Sonnet 4.6 second as the cheap last resort that's essentially never overloaded.

## Why Claude Code Switches From Fable 5 to Opus 4.8

This is the part that confuses people, because it's a completely separate mechanism from the fallback chain above. Fable 5 runs with safety classifiers that screen cybersecurity and biology content. When a classifier flags a request, Claude Code re-runs that request on Opus 4.8, shows a notice in the transcript, and **the session stays on Opus** until you run `/model fable` again. Chain fallback is per-turn; classifier fallback is sticky.

Anthropic says the handoff fires on under 5% of sessions on average, per the [Claude Cookbook fallback guide](https://platform.claude.com/cookbook/fable-5-fallback-billing-guide). My experience says that average hides a skew: if your repos touch security at all, you will see it constantly. The gotcha is that fallback can trigger on the **first request of a session, before you type anything**, because that request carries workspace context: your CLAUDE.md, git status, and directory structure. I opened a Fable 5 session in the repo for my [prompt injection hardening post](https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection), which has a CLAUDE.md full of injection payloads and CVE references, and the session rerouted to Opus 4.8 on the context load alone.

To figure out whether your customizations are the trigger, start a session with `claude --safe-mode`. It disables CLAUDE.md, skills, MCP servers, and hooks; git status and directory names still go through because they aren't customizations. If safe mode stays on Fable 5 and a normal session doesn't, your CLAUDE.md or a skill is tripping the classifier.

```bash
# Isolate the trigger: no CLAUDE.md, skills, MCP servers, or hooks
claude --safe-mode --model fable

# Stayed on Fable 5? A customization is the trigger.
# Still rerouted? It's the git history or directory contents.
```

If you'd rather decide each time than be switched automatically, run `/config` and turn off **"switch models when a message is flagged"**. A flagged request then pauses with two options: switch to Opus for that request, or edit the prompt and retry on Fable 5. I keep this off on security repos because rewording a prompt often gets past a conservative classifier without losing the Fable session. The classifiers are tuned deliberately cautious, and Anthropic's docs are explicit that offensive security and biology workloads should expect frequent rerouting; it's expected routing for those domains, not a flag on your account.

One more case that bites CI users: in non-interactive mode and SDK integrations that can't show a prompt, a flagged request ends the turn with a refusal instead of falling back. If you run Fable 5 in pipelines like the ones in my [ultrareview CI/CD guide](https://avinashsangle.com/blog/ultrareview-ci-cd-pipelines), a classifier hit means a failed job, not a slower model. For automated security scanning, pin Opus 4.8 and skip the problem entirely.

## What Fallback Costs: The Billing Mechanics

The billing treatment is more generous than I expected. Per the [official cookbook guide](https://platform.claude.com/cookbook/fable-5-fallback-billing-guide), input tokens on a request the classifier blocks outright are not billed at all. When the request re-runs on Opus 4.8, the fallback input tokens bill at the cache-read rate, which is 10% of the base input price, instead of the 1.25x or 2x cache-write rates you'd normally pay to rebuild context on a different model. You are not paying double for the same tokens because a classifier got nervous.

Claude Code handles all of this automatically. If you build on the API directly, you need the `server-side-fallback-2026-06-01` beta header with a `fallbacks` parameter to get automatic retry, or you redeem a `fallback_credit_token` from the blocked response within 5 minutes for client-side retries. Check `usage.iterations` in the response to know which model actually answered; don't trust the model you requested.

For tracking what routing decisions actually cost you across sessions, the JSONL log approach from my [Claude Code cost tracking post](https://avinashsangle.com/blog/claude-code-cost-tracking) works unchanged: each entry records the model that served the turn, so fallback turns show up as Opus 4.8 entries inside a Fable 5 session.

## Which Tasks Justify Fable 5's 2x Price

The per-token math says 2x, but per-token math is the wrong lens. Fable 5 investigates before acting and verifies its own work, which means it spends more thinking tokens per turn but takes fewer turns and fewer tool calls on hard problems. Commenters in the [Hacker News launch thread](https://news.ycombinator.com/item?id=48463808) noticed the same thing: on complex tasks the per-token premium partially cancels out. On simple tasks it doesn't, because there's nothing to investigate.

I ran the same real task on both models during the free window: a root-cause investigation of a flaky OAuth refresh in one of my MCP servers, spanning four files and a misleading error message. Opus 4.8 needed three rounds of my steering to stop patching the symptom. Fable 5 found the actual race condition on its own, wrote a reproducing test first, and used roughly 40% fewer turns end to end. Total cost came out near parity; the difference was my time. Then I gave both a scoped task, adding a flag to a CLI parser, and Fable 5 was simply a slower, pricier Opus. That's the whole routing principle in two data points.

| Task type | Model | Why |
|---|---|---|
| Root-cause debugging, outage investigation | Fable 5 | Investigates before acting; fewer wrong turns |
| Multi-file refactors, architecture decisions | Fable 5 | Holds long sessions without losing the thread |
| Long autonomous runs, tasks beyond one sitting | Fable 5 | Self-verifies; needs fewer check-ins |
| Daily feature work, code review, writing tests | Opus 4.8 | Near-Fable quality on scoped work at half price |
| Scoped bug fixes, docs, small edits | Sonnet 4.6 | Fast and cheap; the gap doesn't show here |
| Security scanning in CI, offensive security | Opus 4.8 | Classifier reroutes or refuses Fable 5 anyway |

Anthropic's own guidance in the [docs](https://code.claude.com/docs/en/model-config) matches this: describe the outcome rather than the steps, hand Fable 5 ambiguous problems, and skip the "remember to test" reminders because it verifies without them. Two interactions with other settings to keep in mind. Fable 5's default effort level is `high` with `xhigh` and `max` above it, and thinking cannot be disabled on Fable 5 at all, so budget for thinking tokens as a floor, not an option. And if you use [dynamic workflows](https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide), remember every subagent inherits the session model by default; a 50-agent workflow on Fable 5 is a very different bill than the same workflow on Sonnet.

My suggestion before June 22: pick one genuinely hard task from your backlog, run it on Fable 5 while it's free, and compare turns and outcome against what Opus 4.8 does on a similar task. That's a better basis for the routing decision than any benchmark table, including mine.

## Fable 5 Routing on Bedrock, Vertex AI, and Foundry

On third-party providers, model IDs are provider-specific, so automatic classifier fallback only works when Claude Code can identify both ends of the handoff: the current model as Fable 5 and the target as an Opus model. If either can't be identified, a flagged request ends with a refusal and you switch manually with `/model`. The fix is two environment variables.

```bash
# Make automatic Fable -> Opus fallback work on Bedrock
export ANTHROPIC_DEFAULT_FABLE_MODEL='us.anthropic.claude-fable-5'
export ANTHROPIC_DEFAULT_OPUS_MODEL='us.anthropic.claude-opus-4-8'
```

Enterprise teams have one more thing to weigh. [Fable 5 on Bedrock](https://aws.amazon.com/blogs/aws/anthropic-claude-fable-5-on-aws-mythos-class-capabilities-with-built-in-safeguards-now-available/) requires sharing data with Anthropic under a 30-day retention window for Mythos-class models, a change that drew its own [Hacker News front-page thread](https://news.ycombinator.com/item?id=48473166). Fable 5 is flatly unavailable under zero data retention. If your org runs ZDR, your routing decision is made for you: Opus 4.8 stays the ceiling, and honestly that's a fine place to be. Also note the classifier's fallback target differs by platform: Opus 4.8 on the Anthropic API and LLM gateways, Opus 4.7 on Claude Platform on AWS.

## Frequently Asked Questions

### What is the fallbackModel setting in Claude Code?

fallbackModel, shipped in Claude Code v2.1.166, lets you chain up to three backup models that take over when the primary is overloaded or unavailable. Set it as an array in settings.json or per session with the --fallback-model flag. The switch lasts one turn, then Claude Code retries the primary.

### How do I switch to Fable 5 in Claude Code?

Run /model fable inside a session, launch with claude --model fable, or set "model": "fable" in settings.json. Fable 5 requires Claude Code v2.1.170 or later, so run claude update first. It is never the default model; you have to select it, and /model saves it for future sessions.

### Why did Claude Code switch my session from Fable 5 to Opus 4.8?

Fable 5 runs safety classifiers for cybersecurity and biology content. When a request is flagged, Claude Code re-runs it on Opus 4.8 and the session stays there until you run /model fable again. Workspace context like a security-focused CLAUDE.md can trigger this on the very first request.

### Is Claude Fable 5 worth 2x the price of Opus 4.8 for coding?

For well-scoped daily tasks, no; Opus 4.8 is close enough at half the per-token price. Fable 5 pays off on ambiguous, long-running work: root-cause debugging, multi-file refactors, and tasks bigger than one sitting, where it uses fewer turns and verifies its own output, narrowing the effective cost gap.

### How much does Claude Fable 5 cost?

Fable 5 is $10 per million input tokens and $50 per million output tokens on the Anthropic API, exactly 2x Opus 4.8's $5/$25. On Pro, Max, and Team subscriptions it is included free through June 22, 2026, after which usage draws on credits. It consumes rate limits faster than any other model.

### Can I stop Claude Code from switching models automatically?

Yes. Run /config and turn off "switch models when a message is flagged". A flagged request then pauses the session with two choices: switch to Opus for that request, or edit the prompt and retry on Fable 5. Availability fallback is separate; remove the fallbackModel setting to disable that.

### How are Fable 5 fallback requests billed?

Input tokens on a directly blocked classifier request are not billed at all. When the request re-runs on Opus 4.8, the fallback input tokens bill at the cache-read rate, which is 10% of the base input price. Claude Code applies this automatically; API users need the server-side-fallback beta header.

### Does Fable 5 automatic fallback work on Amazon Bedrock?

Only if Claude Code can identify both models. Set ANTHROPIC_DEFAULT_FABLE_MODEL to your Fable 5 model ID and ANTHROPIC_DEFAULT_OPUS_MODEL to an Opus 4.8 ID. Without both, a flagged request ends in a refusal instead of switching. Bedrock also requires 30-day data retention for Mythos-class models.

---

*This post is the sequel to my [Claude Mythos preview](https://avinashsangle.com/blog/claude-mythos-preview), written back when none of us could touch the model. For the cost side of routing decisions, see the [cost tracking guide](https://avinashsangle.com/blog/claude-code-cost-tracking), and for what happens when one session fans out to hundreds of subagents, the [dynamic workflows guide](https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide).*
