# Dev.to + Hashnode Cross-post - Regression-Proof Claude Code Workflows

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py regression-proofing-claude-code-workflows --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py regression-proofing-claude-code-workflows --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Regression-Proof Claude Code Workflows: Pin, Lock, Test
DESCRIPTION: After Anthropic's April 2026 postmortem revealed three Claude Code regressions, here is how to pin versions, lock effort levels, and add fixture tests.
TAGS: claudecode, devops, ai, productivity
CANONICAL_URL: https://avinashsangle.com/blog/regression-proofing-claude-code-workflows
COVER_IMAGE: https://avinashsangle.com/og-regression-proofing-claude-code-workflows.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/regression-proofing-claude-code-workflows).

Anthropic's April 23, 2026 postmortem confirmed three wrapper-level changes silently degraded Claude Code over seven weeks. The model never changed; the harness around it broke. To regression-proof your workflow against the next upstream surprise, pin the CLI version, lock effort with `effortLevel`, allowlist models, add a regression-detecting hook, and keep a fixture suite.

## TL;DR

- Anthropic's April 23, 2026 postmortem confirmed three confounding wrapper changes degraded Claude Code over 7 weeks. The model never changed; the runtime around it did.
- Pin the CLI: `npm install -g @anthropic-ai/claude-code@2.1.117` plus an `~/.npmrc` lock so auto-upgrade can't silently move you to a broken version.
- Lock `effortLevel` in `~/.claude/settings.json`, allowlist models with `availableModels`, and pin third-party deployments via `modelOverrides`.
- Run a Stop-hook canary against 3-5 fixture prompts after every session. Anthropic's evals missed it; yours don't have to.

## What Anthropic's April 23 Postmortem Actually Said

On April 23, 2026, Anthropic published an [engineering postmortem](https://www.anthropic.com/engineering/april-23-postmortem) confirming what thousands of developers had been complaining about for weeks: Claude Code felt noticeably worse. The cause wasn't a model change. It was three separate harness-level bugs that compounded over seven weeks (March 4 to April 20).

The three changes Anthropic identified:

1. **Reasoning-effort downgrade.** A default-effort change shipped March 4 and was reverted April 7. Affected Sonnet 4.6 and Opus 4.6.
2. **Thinking-cache bug.** A prompt-caching optimization using the `clear_thinking_20251015` API header with `keep:1` shipped March 26 and was fixed April 10 in v2.1.101. Anthropic's own line: *"Instead of clearing thinking history once, it cleared it on every turn for the rest of the session."*
3. **System-prompt verbosity cap.** A "Length limits: keep text between tool calls to ≤25 words" instruction was added April 16 and reverted April 20 in v2.1.116. Affected Sonnet 4.6, Opus 4.6, and Opus 4.7.

The lived experience of the second bug is worth quoting directly. Per Anthropic's own writeup: *"Claude would continue executing, but increasingly without memory of why it had chosen to do what it was doing."* If you ever had a session where Claude felt confused after a long task in late March or early April, that's why.

Two things stand out for practitioners. First, Anthropic's internal evals missed all three. The postmortem cites stale-session-only reproduction, interference from a separate server-side message-queuing experiment, suppressed thinking displays masking the bug in CLI sessions, and the fact that the broader eval suite wasn't initially run on the system-prompt change. Second, Anthropic's recommended user-side mitigation was simply: *"As of April 23, we're resetting usage limits for all subscribers."* That's it. No flags. No configuration. No version pinning advice. The rest of this post is the gap.

The model itself was fine throughout. According to one of Anthropic's internal evals quoted in the postmortem, *"one of these evaluations showed a 3% drop for both Opus 4.6 and 4.7,"* which sounds small until you remember the wrapper around the model is what shipped to thousands of developers nightly.

## The 24-Hour v2.1.119/v2.1.120 Incident

One day after the postmortem dropped, on April 24, Anthropic shipped v2.1.119 and v2.1.120 within 24 hours. Together those releases triggered **eight community-filed regressions**. The community-maintained [v2.1.117 survival checklist on GitHub Gist](https://gist.github.com/yurukusa/a866b4cd2976486156a00c190c39cef6) documents them and recommends rolling back as the shortest path to a working session.

The eight bugs filed against the official repo:

| Issue | Symptom |
| --- | --- |
| #53044, #53041 | `claude --resume` crashes at startup (TypeError in session restoration) |
| #53031 | Silent routing of `claude-opus-4-7` to the 1M-context variant - changes pricing and cache behaviour |
| #53038 | Resize-redraw UI duplication regression |
| #53028 | Auto-update stopped working silently |
| #53035 | `/mcp` menu freezes when `--resume` is used in WSL2 |
| #53040 | `CLAUDE.md` ignored even below 1/3 context |
| #53012 | `sandbox.excludedCommands` doesn't release network enforcement |
| #53015 | Worktree creation hangs on macOS 26.4 (`git merge` blocks stdin) |

This isn't the first time. In March 2026, v2.1.89 shipped a rate-limit regression that consumed quotas **3 to 50 times faster** than usual. Teams without version pinning got blindsided overnight; the only fix was a rollback they hadn't prepared for.

The pattern is consistent. Ship dates aren't stability dates. The community has filed an open feature request, [issue #22106](https://github.com/anthropics/claude-code/issues/22106), asking for first-party version-management tooling and auto-rollback alerts. Until that lands, the workflow is yours to build.

## Pin the Claude Code CLI to a Known-Good Version

The first defense is the cheapest. Treat `@anthropic-ai/claude-code` like any other dependency: pin it to a version you've actually validated, and stop auto-upgrade from changing that on you between coffee and lunch.

As of late April 2026, the community-validated "known-good" version is **v2.1.117**, which is the build immediately before the v2.1.119/v2.1.120 fiasco.

```bash
# Roll back / pin to v2.1.117
npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code@2.1.117

# Confirm what's actually loaded
claude --version
```

That installs the version, but npm will happily upgrade you on the next global update unless you tell it not to. Add an explicit version pin to your user-level npm config:

```ini
@anthropic-ai/claude-code:version=2.1.117
```

On WSL2 or other non-npm distributions, the CLI ships with its own installer. The equivalent rollback command per the community gist is:

```bash
claude install --force 2.1.117
```

Once you're pinned, treat upgrades like any other dependency bump. Watch the [releases page](https://github.com/anthropics/claude-code/releases) and the active issues list for at least 48 hours after a new minor version ships before adopting it. If your team lives in CI, drop the same pin into your onboarding script and your devcontainer image so every contributor lands on the same byte-identical CLI.

Two sanity checks I run after every install. First, `claude --version` confirms the binary. Second, inside Claude Code I run `/status` to confirm the active model and effort level, which is where the next defense lives.

## Lock Effort Level in settings.json

The reasoning-effort downgrade in March was invisible to most users because most users never set `effortLevel` explicitly. They got the silently lowered default and felt their tasks getting dumber without knowing why. The fix is to stop trusting defaults.

Per Anthropic's [model-config docs](https://code.claude.com/docs/en/model-config), effort levels are scoped per model:

- **Opus 4.7:** `low`, `medium`, `high`, `xhigh`, `max`
- **Opus 4.6 and Sonnet 4.6:** `low`, `medium`, `high`, `max`
- As of v2.1.117, the default effort is `xhigh` on Opus 4.7 and `high` on Opus 4.6 and Sonnet 4.6. Pin it explicitly anyway.

The verified syntax is plain JSON in your user-level Claude Code config:

```json
{
  "model": "claude-opus-4-7",
  "effortLevel": "xhigh"
}
```

Precedence matters when something needs to override. Anthropic's docs spell it out: *"The environment variable takes precedence over all other methods, then your configured level, then the model default."* So a CI job can do this without touching the file:

```bash
# Force a one-off session at low effort (e.g., a fast lint job)
CLAUDE_CODE_EFFORT_LEVEL=low claude --print "review this diff"

# Or set it once for the shell
export CLAUDE_CODE_EFFORT_LEVEL=high
```

For teams, ship `effortLevel` in managed or policy settings so developers can't drift below the floor. If adaptive reasoning misbehaves after an update on Opus 4.6 or Sonnet 4.6, there's a fallback flag worth knowing:

```bash
# Revert Opus 4.6 / Sonnet 4.6 to the older fixed thinking budget
# (Does NOT apply to Opus 4.7, which always uses adaptive reasoning.)
export CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING=1

# Pair with an explicit max thinking token count
export MAX_THINKING_TOKENS=20000
```

I keep `effortLevel` set in my user settings and refuse to rely on the picker's "auto" option. If the next regression is another silent default change, my workflow is unaffected.

## Allowlist Your Model Set With availableModels and modelOverrides

The aliases `opus`, `sonnet`, and `haiku` resolve to "the recommended model for your account type." The problem is that "recommended" can change without you noticing. Issue #53031 from the v2.1.119 incident was exactly this: Claude Code started silently routing `claude-opus-4-7` to its 1M-context variant, which changed both the price and the cache hit rate without a config change on the user's end.

For direct-API users, the four-line fix:

```json
{
  "model": "claude-opus-4-7",
  "availableModels": ["claude-opus-4-7", "claude-sonnet-4-6", "haiku"],
  "effortLevel": "xhigh",
  "env": {
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "claude-opus-4-7",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-6"
  }
}
```

Three things working together. `model` sets the initial selection. `availableModels` stops the picker, `--model` flag, and `ANTHROPIC_MODEL` env var from accepting anything outside the list. The `env` block matters most: without it, a user who picks "Default" in the picker bypasses your `model` pin and gets whatever Anthropic's upstream default resolves to that day.

On AWS Bedrock, Google Vertex AI, or Azure Foundry, you need one more layer. Anthropic's docs explicitly warn: *"Without pinning, Claude Code uses model aliases that resolve to the latest version. When Anthropic releases a new model that isn't yet enabled in a user's account, Bedrock and Vertex AI users see a notice and fall back to the previous version for that session, while Foundry users see errors."* The April 2026 `modelOverrides` map is the answer:

```json
{
  "model": "claude-opus-4-7",
  "availableModels": ["claude-opus-4-7", "claude-sonnet-4-6"],
  "modelOverrides": {
    "claude-opus-4-7": "arn:aws:bedrock:us-east-2:123456789012:application-inference-profile/opus-prod",
    "claude-sonnet-4-6": "arn:aws:bedrock:us-east-2:123456789012:application-inference-profile/sonnet-prod"
  }
}
```

`modelOverrides` maps each Anthropic model ID to the provider-specific string Claude Code sends to Bedrock or Vertex. When a user picks "Opus 4.7" in the `/model` picker, Claude Code substitutes the ARN before calling out. New Anthropic releases don't change behaviour until you update this map.

Allowlists win because the failure mode of an unknown new entry is "blocked" rather than "automatically applied."

## Add a Regression-Detecting Stop Hook

Anthropic's evals missed three regressions in seven weeks. Reading their status page won't catch the next one either. The right defense is your own canary: a small script that runs after every Claude Code session, replays a few golden-output prompts against fresh sessions, and pings you when the output drifts.

Wire it through the `Stop` hook in `.claude/settings.json`:

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "python .claude/hooks/check-regression.py"
          }
        ]
      }
    ]
  }
}
```

The hook script reads each fixture, runs an ephemeral Claude session against it, and diffs the output against the saved expectation. Drift triggers a webhook to Slack or Discord. Keep it dumb and short:

```python
#!/usr/bin/env python3
"""Stop-hook canary: replay fixtures and alert on drift."""
import json
import os
import re
import subprocess
import sys
import urllib.request
from pathlib import Path

FIXTURES = Path(".claude/hooks/fixtures")
WEBHOOK = os.environ.get("REGRESSION_WEBHOOK_URL")
DRIFT_THRESHOLD = 0.30  # 30% token delta or missing required substring

def post_alert(message):
    if not WEBHOOK:
        print(f"[regression] {message}", file=sys.stderr)
        return
    data = json.dumps({"text": f":rotating_light: {message}"}).encode()
    req = urllib.request.Request(WEBHOOK, data=data, headers={"Content-Type": "application/json"})
    urllib.request.urlopen(req, timeout=5)

def run_fixture(prompt_file, expect_file):
    prompt = prompt_file.read_text()
    expected = expect_file.read_text().strip()
    result = subprocess.run(
        ["claude", "--print", prompt],
        capture_output=True, text=True, timeout=300,
    )
    output = result.stdout
    if expected not in output:
        post_alert(f"Fixture {prompt_file.name} drift: expected substring missing.")
        return False
    expected_tokens = len(re.findall(r"\w+", expected))
    actual_tokens = len(re.findall(r"\w+", output))
    if expected_tokens and abs(actual_tokens - expected_tokens) / expected_tokens > DRIFT_THRESHOLD:
        post_alert(
            f"Fixture {prompt_file.name} token delta {actual_tokens - expected_tokens} "
            f"vs expected {expected_tokens} ({DRIFT_THRESHOLD * 100:.0f}% threshold)."
        )
        return False
    return True

if __name__ == "__main__":
    pairs = sorted(FIXTURES.glob("*.prompt.md"))
    failures = []
    for prompt_file in pairs:
        expect_file = prompt_file.with_suffix("").with_suffix(".expect.md")
        if not expect_file.exists():
            continue
        if not run_fixture(prompt_file, expect_file):
            failures.append(prompt_file.name)
    sys.exit(0 if not failures else 1)
```

Two design notes. First, this runs *after* the user's real session, so it doesn't add latency to interactive work. Second, it uses `claude --print` for non-interactive replays, which is the right primitive for fixture testing.

The webhook target is yours to pick. I use a Slack channel called `#claude-regressions` with two people on watch. The point is the alert fires before you waste a workday wondering if your skills got worse.

## Keep a Tiny Fixture Suite Per Repo

The hook is only as useful as the fixtures it runs. You don't need a full eval harness; three to five carefully chosen prompts cover the failure modes the postmortem revealed. Each fixture is two files: a prompt and an expected substring or short output snippet.

Here's the layout I use:

```text
refactor.prompt.md
refactor.expect.md
test-gen.prompt.md
test-gen.expect.md
plan-mode.prompt.md
plan-mode.expect.md
long-horizon.prompt.md
long-horizon.expect.md
```

What each fixture catches:

- **Refactor fixture.** "Rename function `oldName` to `newName` across this 12-file module." Catches edit-tool regressions like the v2.1.119 ignored-CLAUDE.md bug.
- **Test-generation fixture.** "Write tests for `utils/parse.ts`." Expected output names a known-correct edge case. Catches reasoning-effort downgrades where Claude stops covering edge cases.
- **Plan-mode fixture.** A multi-step planning prompt with a checkpoint phrase that should appear in the plan. Catches output-cap bugs like the "≤25 words" system-prompt change.
- **Long-horizon fixture.** A 1500-token CLAUDE.md plus a multi-step task. Tests directly for the postmortem's memory-loss symptom: Claude continuing to act without remembering why.

A real refactor fixture pair looks like this:

```markdown
Rename the function `computeTotal` to `calculateTotal` across the
`src/billing/` directory. List every file changed in your final response.
Do not edit tests in `tests/snapshots/`.
```

```text
src/billing/cart.ts
src/billing/checkout.ts
src/billing/invoice.ts
```

Commit these to the repo. They're self-documenting, run in under a minute total, and give you a 60-second binary check the next time someone says "Claude feels weird today."

Re-record the expected outputs every time you intentionally bump the pinned version. That's your signal that the new version actually behaves the way you want, not just the way the changelog claims.

## The Rollback Runbook (When Something Breaks Anyway)

Even pinned, you eventually upgrade. And eventually one of those upgrades misbehaves. Keep a five-step playbook ready so the morning you notice something off doesn't become a half-day of debugging.

1. **Confirm what's actually running.** Run `claude --version`. Inside Claude Code, run `/status` and check the "effective model" field. v2.1.119's silent-1M-swap (#53031) only showed there.
2. **Cross-check upstream signal.** Open the [releases page](https://github.com/anthropics/claude-code/releases) and the active issues list filtered by the version you're on. If someone else has filed your symptom in the last 24 hours, you're not imagining it.
3. **Roll back and lock.**
   ```bash
   npm uninstall -g @anthropic-ai/claude-code
   npm install -g @anthropic-ai/claude-code@2.1.117
   echo "@anthropic-ai/claude-code:version=2.1.117" >> ~/.npmrc
   ```
4. **Run your fixture suite.** The same canary script confirms the rollback restored expected behaviour. If a fixture still fails, the issue isn't the version - check your `settings.json` next.
5. **File a regression issue.** Open an issue against `anthropics/claude-code` with your fixture diff and reproducer. Subscribe to [issue #22106](https://github.com/anthropics/claude-code/issues/22106) for the auto-rollback alert feature, so you'll get pinged when first-party tooling exists.

Total time from "something feels wrong" to "back to a known state": under five minutes if you have the playbook bookmarked. Without it: anywhere between hours and a day, depending on how many tasks you finish before noticing the wheels are off.

## What This Approach Still Can't Fix

Honesty section. Pinning the CLI and locking effort fixes a class of problems, not all of them. Three you should plan for separately.

**API-side regressions still bite.** The thinking-cache bug from the postmortem was server-side: the wrong API header behaviour. Pinning your CLI gives you nothing against changes to the inference layer.

**Subscription policy changes are out of scope.** The April 23 postmortem ended with a usage-limit reset for all subscribers. That's a commercial change, not a wrapper change. No version pin will block the next one. Watch the Anthropic status page and your billing email.

**Pinned versions go stale.** Eventually v2.1.117 will lack a feature you actually want. The playbook isn't to pin forever; it's to schedule the upgrade on your terms, run the fixture suite against the new version, and re-record expected outputs once you confirm behaviour matches the changelog.

Regression-proofing isn't permanence. It's reducing how often the wrapper around the model surprises you, and giving you a 60-second binary check when it does.

## Frequently Asked Questions

### What were the three Claude Code regressions in the April 2026 postmortem?

Anthropic's April 23, 2026 postmortem confirmed three wrapper-level changes: a default reasoning-effort downgrade (March 4 to April 7), a thinking-cache bug from the `clear_thinking_20251015` header (March 26 to April 10, fixed in v2.1.101), and a system-prompt verbosity cap added April 16 and reverted April 20 in v2.1.116.

### How do I pin the Claude Code CLI to a specific version?

Run `npm uninstall -g @anthropic-ai/claude-code` then `npm install -g @anthropic-ai/claude-code@2.1.117`. To stop auto-upgrades, add the line `@anthropic-ai/claude-code:version=2.1.117` to your `~/.npmrc`. On WSL2 the equivalent is `claude install --force 2.1.117`. Verify with `claude --version`.

### What is the difference between effortLevel in settings.json and CLAUDE_CODE_EFFORT_LEVEL?

Both pin the reasoning effort, but the environment variable takes precedence. Order is `CLAUDE_CODE_EFFORT_LEVEL` > `effortLevel` in settings.json > model default. Use `effortLevel` for repo or user defaults; use `CLAUDE_CODE_EFFORT_LEVEL` when a single shell session needs to override that, for example in CI.

### How do I roll back Claude Code from v2.1.119 to v2.1.117?

`npm uninstall -g @anthropic-ai/claude-code`, then `npm install -g @anthropic-ai/claude-code@2.1.117`. Add `@anthropic-ai/claude-code:version=2.1.117` to `~/.npmrc` to block auto-upgrade. Confirm with `claude --version` and run `/status` inside Claude Code to check the active model. Then run your fixture suite to confirm behaviour.

### What does availableModels do in Claude Code settings?

`availableModels` is an array in `settings.json` that restricts which models the `/model` picker, `--model` flag, and `ANTHROPIC_MODEL` env var accept. Combine with `model` and the `ANTHROPIC_DEFAULT_*_MODEL` env vars to lock the picker's Default option as well, so a user cannot bypass your pin by selecting Default.

### How do I detect a Claude Code regression in my own workflow?

Add a `Stop` hook in `.claude/settings.json` that runs a small Python script after every session. The script replays a few golden-output prompts, diffs against expected snippets, and posts to Slack on drift. Anthropic's own evals missed three regressions in 7 weeks, so do not rely on upstream evals.

### Should I pin model versions on AWS Bedrock for Claude Code?

Yes. Anthropic's own model-config docs warn that without pinning, Bedrock and Vertex users see a notice and fall back to a previous version when a new model is released. Use `modelOverrides` in `settings.json` to map Anthropic IDs (`claude-opus-4-7`) to specific Bedrock inference-profile ARNs.

### What does CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING do?

Setting `CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING=1` reverts Opus 4.6 and Sonnet 4.6 to the older fixed thinking budget controlled by `MAX_THINKING_TOKENS`, instead of adaptive reasoning. It does not apply to Opus 4.7, which always uses adaptive reasoning. Useful as a fallback if adaptive thinking behaves erratically after an update.
