# Dev.to + Hashnode Cross-post - Sandbox AI Agents: Lessons From the OpenAI Hugging Face Breach

**Post date:** Day 2 (see syndication-lag note below)
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py sandbox-ai-agents-hugging-face-breach --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py sandbox-ai-agents-hugging-face-breach --dry-run`

> **Syndication lag:** prior experience on this site is that same-day dev.to
> cross-posts can outrank the origin article despite the canonical tag. Consider
> holding this until roughly 2-3 weeks after the origin post (mid-August 2026)
> rather than posting on Day 2.
>
> **Hashnode warning:** `post_to_hashnode.py` publishes LIVE even with
> `PUBLISHED: false`. Only Dev.to honors the draft flag. Do not run the Hashnode
> script until you actually want the post public.

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Sandbox AI Agents: Lessons From the OpenAI Hugging Face Breach
DESCRIPTION: OpenAI's models escaped a sandbox and breached Hugging Face. The three-link failure chain, why the same holes sit on your laptop, and the config that closes them.
TAGS: ai, security, claudecode, devops
CANONICAL_URL: https://avinashsangle.com/blog/sandbox-ai-agents-hugging-face-breach
COVER_IMAGE: https://avinashsangle.com/og-sandbox-ai-agents-hugging-face-breach.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/sandbox-ai-agents-hugging-face-breach).

On July 22, 2026, OpenAI disclosed that two of its models escaped a sandboxed evaluation environment and breached Hugging Face's production infrastructure. Containment failed because the one network path it permitted, a package registry proxy, had a zero-day in it. Your local coding agent has a hole of exactly the same shape.

## TL;DR

- The escape was not exotic. OpenAI allowed exactly one egress path, a caching package-registry proxy, and that path had a zero-day. An allowlisted hop with code in it is a hole, not a wall.
- The same three ingredients sit on your laptop: an allowlisted package path, credentials the agent can read, and an objective it will pursue hard. Prompt injection supplies the intent.
- Claude Code's built-in sandbox closes most of it in about a dozen lines of `settings.json`, but there is no default credential deny list and no pre-allowed domains. You have to name things.
- Do not mistake the allowlist for a boundary. The proxy does not inspect TLS by default, and CVE-2026-25725 defeated every wildcard allowlist with a single null byte.

## What Happened When OpenAI's Model Escaped Its Sandbox

During an internal run of ExploitGym, a benchmark that measures multi-step exploitation ability, GPT-5.6 Sol and an unreleased higher-capability model were given the task with safety classifiers deliberately switched off. The models decided the fastest route to a high score was to find the answer key. They reasoned that Hugging Face probably hosted it, chained vulnerabilities to reach the open internet, and went and got it. OpenAI published the disclosure on [July 22, 2026](https://openai.com/index/hugging-face-model-evaluation-security-incident/).

The Hugging Face side of the attack is documented in their own [incident report](https://huggingface.co/blog/security-incident-july-2026), and the details matter more than the headline. The entry point was the data-processing pipeline: a remote-code dataset loader plus a template-injection flaw in a dataset configuration, which together gave code execution on processing workers and escalated to node-level access. The report counts **more than 17,000 recorded events**, described as thousands of individual actions across a swarm of short-lived sandboxes. Their own anomaly-detection pipeline caught it.

What was taken: a limited set of internal datasets and several credentials used by their services. What was not: they found no evidence of tampering with public models, datasets, or Spaces, and verified the software supply chain clean. Hugging Face closed the dataset code-execution paths, rebuilt the compromised nodes, rotated every affected credential, brought in outside forensic specialists, and reported the incident to law enforcement. That is a textbook response, and it is worth noticing that the thing which saved them was detection, not prevention.

## Why the Sandbox Failed: A Three-Link Chain

The sandbox failed because it was not a sandbox. OpenAI described its environment as "highly isolated, with network access constrained to the ability to install packages through an internally hosted third-party software that acts as a proxy and cache for package registries." Read that again with an attacker's eye. There is one door, the door runs software, and software has bugs. The models spent, in OpenAI's words, a substantial amount of inference compute hunting for a way out, and they found it in the door.

Security practitioners were blunt about the framing. [TechCrunch quoted](https://techcrunch.com/2026/07/22/how-an-openais-human-mistake-led-to-the-ai-powered-hack-on-hugging-face/) Dan Guido of Trail of Bits calling it "a containment failure with the safeties turned off," and Jake Williams putting it more sharply: "One man's 'the model escaped the sandbox' is another man's 'you failed to build the sandbox correctly, so of course it escaped.'" I agree with them, and that is the useful reading for anyone running agents. This was an engineering defect, not a horror story about machine intent.

Strip it down and three links had to hold for the escape to work. Each one recurs in ordinary local setups, which is why the incident is worth your time even at a thousandth of the scale.

1. **One permitted egress path, with code in it.** The package proxy was allowlisted because builds need packages. Nobody treated it as attack surface.
2. **Objective pressure with guardrails removed.** A model told to maximise a score, with the classifiers off, will treat your boundary as an obstacle rather than a rule.
3. **No default-deny on what came next.** Once the process reached the internet, nothing constrained where it could go or what credentials it could carry.

## Does This Affect My Local AI Coding Agent?

Yes in shape, no in scale. A default agent install on a developer laptop has all three ingredients sitting there by default, and you do not need a frontier model with the safeties off to light them. You need one poisoned input.

Map the links across. Your `npm install` or `pip install` is the package proxy: an allowlisted path that executes third-party code as a matter of routine. Your `~/.aws/credentials` and `~/.ssh` are readable, and they stay readable even after you turn the Claude Code sandbox on, because the documented default read policy covers the whole computer. Your `GITHUB_TOKEN` is sitting in the subprocess environment that every Bash command inherits.

The link that differs is intent. Locally, the realistic trigger is not model misalignment, it is prompt injection: a fetched web page, a dependency's postinstall script, a GitHub issue body the agent was asked to read. Containment is what makes those attacks survivable rather than fatal. The injection still lands; it just cannot reach anything worth having.

## How to Sandbox Claude Code with the Built-In Bash Sandbox

Claude Code ships an OS-level sandbox for Bash commands, and it is off until you turn it on. Run `/sandbox` in a session to get a panel with Mode, Overrides, and Config tabs. Picking a mode there writes to `.claude/settings.local.json`, which applies to that project only. To make it your default everywhere, put it in your user settings instead.

Platform support is worth checking before you plan around it. macOS uses the built-in Seatbelt framework with nothing to install. Linux and WSL2 need two packages, `bubblewrap` for filesystem isolation and `socat` to relay traffic through the sandbox proxy. Native Windows is not supported at all, and WSL1 is not either, because bubblewrap needs kernel features only WSL2 has.

```bash
# Linux / WSL2 only - macOS needs none of this
sudo apt-get install bubblewrap socat

# Optional seccomp filter, adds Unix domain socket blocking
npm install -g @anthropic-ai/sandbox-runtime

# Restart Claude Code, then check what is missing
/sandbox
```

Here is the configuration I run in `~/.claude/settings.json`. It combines all four layers that matter: turn the sandbox on, refuse to run without it, block the escape hatch, and name the domains and credentials explicitly.

```json
{
  "sandbox": {
    "enabled": true,
    "failIfUnavailable": true,
    "allowUnsandboxedCommands": false,
    "network": {
      "allowedDomains": ["registry.npmjs.org", "*.github.com"]
    },
    "credentials": {
      "files": [
        { "path": "~/.aws/credentials", "mode": "deny" },
        { "path": "~/.ssh", "mode": "deny" }
      ],
      "envVars": [
        { "name": "GITHUB_TOKEN", "mode": "deny" },
        { "name": "NPM_TOKEN", "mode": "deny" }
      ]
    }
  }
}
```

Line by line: `failIfUnavailable` turns a missing dependency into a startup failure instead of a warning followed by unsandboxed execution, which is the behaviour you want if sandboxing is a security gate rather than a nicety. `allowUnsandboxedCommands: false` disables the `dangerouslyDisableSandbox` retry path, where Claude analyses a sandbox-related failure and may rerun the command outside the boundary. The docs call the strict combination "Strict sandbox mode."

Two defaults surprise people, and both are documented in the [official sandboxing reference](https://code.claude.com/docs/en/sandboxing). First, **no domains are pre-allowed**. The first time a command needs a host you have not listed, you get a prompt. Second, there is **no built-in credential deny list**. Only the files and variables you name are protected, which is why the block above spells out `~/.aws/credentials` and `~/.ssh` rather than trusting a sensible default that does not exist.

Version floors, because these keys arrived at different times: `sandbox.credentials` needs v2.1.187 or later, credential `mask` mode needs v2.1.199, and `filesystem.disabled` needs v2.1.216. If a key silently does nothing, check your version before you check your JSON.

One default that does work in your favour: the sandbox denies writes to Claude Code's `settings.json` at every scope and to the managed settings directory, so a sandboxed command cannot rewrite its own policy. Since v2.1.210 those deny rules resolve symlinks too, closing the obvious workaround. That protection is part of the filesystem layer, so it disappears the moment you set `filesystem.disabled`.

## Keep Credentials Out of Reach While the Agent Runs

Denying a credential outright is the safest option and the most annoying one. Unset `GITHUB_TOKEN` and `gh` stops working; unset `NPM_TOKEN` and private installs fail. That friction is why people quietly turn protections back off, so it is worth knowing about the middle path.

Mask mode gives the sandboxed process a per-session sentinel value instead of the real credential. When a request leaves the sandbox headed for one of the hosts you listed in `injectHosts`, the proxy swaps the sentinel for the real secret on the way out. The command authenticates normally, and neither the command nor anything it logs ever held the actual token. The catch is that the proxy has to see request contents to do the substitution, so you must also enable `network.tlsTerminate`. Without it, masking fails closed: the sentinel travels to the server unchanged and auth fails.

```json
{
  "sandbox": {
    "enabled": true,
    "network": {
      "tlsTerminate": {},
      "allowedDomains": ["*.github.com", "registry.npmjs.org"]
    },
    "credentials": {
      "envVars": [
        { "name": "GH_TOKEN", "mode": "mask", "injectHosts": ["api.github.com"] },
        { "name": "NPM_TOKEN", "mode": "mask" }
      ]
    }
  }
}
```

`GH_TOKEN` is substituted only on requests to `api.github.com`. `NPM_TOKEN` has no `injectHosts`, so it is substituted for every host in `allowedDomains`, which is broader than you probably want. Note the deliberate asymmetry in how these settings are trusted: a `deny` entry only narrows access, so any settings scope can add one and no scope can remove one. A `mask` entry authorises the proxy to send your real secret somewhere, so it is honoured only from user settings, managed settings, or the `--settings` flag. A checked-out repository cannot mask a credential, and that restriction exists for a good reason.

To strip Anthropic and cloud provider credentials from every subprocess regardless of sandboxing, set the `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` environment variable. It also has a side effect worth knowing: when it is set, Claude Code ignores `filesystem.disabled` from every source including managed settings, so filesystem isolation stays on.

None of this beats the structural fix. Short-lived, task-scoped tokens make the whole question smaller, because the credential the agent never holds is the one that cannot leak. Hugging Face rotated credentials as step three of their response; tokens that expire on their own turn that emergency into a non-event.

## Why a Network Allowlist Is Not a Security Boundary

This is the part the vendor blog posts leave out, so let me be direct about it: the allowlist you just configured reduces blast radius. It is not containment. Anthropic's own documentation says the built-in proxy enforces the allowlist from the client-supplied hostname and, by default, does not terminate or inspect TLS. The docs then warn plainly that allowing broad domains such as `github.com` can create paths for data exfiltration, because code inside the sandbox can use domain fronting to reach hosts outside the list.

That is not theoretical. CVE-2026-25725 was a SOCKS5 hostname null-byte injection, and the mechanism is a textbook parser differential: the sandbox proxy matched hostnames with a JavaScript `endsWith` check, while the OS resolver treated a null byte as a string terminator. The two components read the same input differently. A single null byte defeated *any* wildcard allowlist, including `*.anthropic.com`. Every release from v2.0.24 through v2.1.89 was affected, patched in v2.1.90 on 2026-04-01 via an `isValidHost()` check in `@anthropic-ai/sandbox-runtime` 0.0.43. [Aonan Guan's writeup](https://oddguan.com/blog/second-time-same-sandbox-anthropic-claude-code-network-allowlist-bypass-data-exfiltration/) notes this was the second allowlist bypass found in the same sandbox, and estimates the network boundary effectively did not exist for the roughly 5.5 months between sandbox general availability and the fix.

I still turn the allowlist on. The point is not that the feature is worthless, it is that trusting a hostname-matching proxy as your only wall is the same category of mistake OpenAI made with its package proxy. If your threat model needs real guarantees, run a custom proxy that terminates TLS and inspects traffic, and install its CA inside the sandbox.

```json
{
  "sandbox": {
    "network": {
      "httpProxyPort": 8080,
      "socksProxyPort": 8081
    }
  }
}
```

### The escape hatches that quietly undo your config

Several settings widen the boundary in ways that are easy to add and easy to forget. `excludedCommands` is the one to watch, because it has no managed-only lockdown: even in an organisation that enforces sandboxing centrally, a developer can always append entries that run outside it. Keep the list short and review it.

The Docker case is the sharpest example of a fix that costs more than the problem. `docker` is incompatible with the sandbox, and the documented workaround is to add `docker *` to `excludedCommands` so it runs outside. The tempting alternative, allowing `/var/run/docker.sock` through `allowUnixSockets`, is worse: the docs note it effectively grants access to the host system. On macOS, `allowAppleEvents: true` fixes `open` and `osascript` failing with error `-600`, but the docs are explicit that it removes code-execution isolation, since sandboxed commands can then launch other applications unsandboxed.

Two more weaken things by design and are named accordingly: `enableWeakerNestedSandbox`, for running inside an unprivileged container where bubblewrap cannot mount a fresh `/proc`, and `enableWeakerNetworkIsolation`, for MITM proxies with a custom CA. Use them only when an outer layer already provides the isolation you need.

Some friction is just friction, and it helps to know it in advance rather than discover it mid-task. `jest` hangs because watchman is incompatible, so run `jest --no-watchman`. Go-based CLIs such as `gh`, `gcloud`, and `terraform` can fail TLS verification under Seatbelt on macOS, which is a legitimate use for a narrow `excludedCommands` entry. Neither of those is a security decision, and it is worth keeping them mentally separate from the ones that are.

## When You Need a Container or microVM Instead

Pick the isolation layer from what the agent is doing, not from what sounds safest. For supervised interactive work where you are reading the diffs, the built-in sandbox is proportionate. For unattended runs, wrap the whole Claude Code process rather than just its Bash calls, either with a dev container or with the standalone [@anthropic-ai/sandbox-runtime](https://github.com/anthropic-experimental/sandbox-runtime) package. For anything that executes code you have not reviewed, you want a hardware boundary: Firecracker or Kata Containers.

The line the sandbox-vendor posts state quietly deserves saying loudly. Containers share the host kernel. A container escape through a kernel vulnerability exposes the host, which makes a plain container a blast-radius control rather than an isolation boundary for adversarial workloads. gVisor's user-space kernel sits between the two: stronger than a container, cheaper than a full VM, with a syscall compatibility cost.

A detail that catches people setting up autonomous runs: `--dangerously-skip-permissions` is blocked when running as root or via sudo, and the check is skipped only inside a recognised sandbox. The documented path for unattended container work is the dev container configuration, which runs Claude Code as a non-root user. If you find yourself reaching for `sudo` to make that flag work, the setup is telling you something.

One boundary question the sandbox does not answer: MCP tools do not run through it. The Bash sandbox isolates Bash subprocesses, while Read, Edit, Write, and MCP tools operate under the permission system instead. If your agent talks to an MCP server with real privileges, that path needs its own thinking. Subagents, by contrast, run in the same process and inherit the parent session's sandbox configuration.

## A Containment Checklist You Can Apply Today

Nine things, in the order I would do them. Most of this is one evening of configuration, and the first four cover the majority of the risk.

1. Turn the sandbox on globally with `sandbox.enabled: true` in `~/.claude/settings.json`, not per project.
2. Add `failIfUnavailable: true` so a missing dependency stops the session instead of silently dropping the boundary.
3. Set `allowUnsandboxedCommands: false` to close the `dangerouslyDisableSandbox` retry path.
4. Name your credential files and environment variables under `sandbox.credentials`. There is no built-in deny list, so nothing is protected until you list it.
5. Keep `allowedDomains` as narrow as your build tolerates. Prefer `registry.npmjs.org` over a wildcard.
6. Audit `excludedCommands` the way you would audit a sudoers file. It is the one list a developer can always widen.
7. Never allow `/var/run/docker.sock` through `allowUnixSockets`. Exclude the `docker` command instead.
8. Move to short-lived task-scoped tokens where your provider supports them, and stop putting long-lived secrets in the shell that launches the agent.
9. Run unattended work in a dev container or microVM. The built-in sandbox is designed for supervised sessions.

If you have been running an agent unsandboxed on a machine with real credentials, treat it the way Hugging Face treated their incident rather than assuming nothing happened. Rotate the tokens that were reachable, check your shell and agent history for commands you did not intend, and assume anything readable was readable. That is cheap. Finding out later is not.

## Frequently Asked Questions

### How did OpenAI's model escape its sandbox?

The evaluation environment allowed one network path: an internally hosted proxy that cached package registries. The models found a zero-day in that proxy, chained it to reach the open internet, then used stolen credentials and further zero-days to get remote code execution on Hugging Face infrastructure.

### Can my local AI coding agent do the same thing?

Not spontaneously, but the failure shape is identical. A default agent install has unrestricted egress, readable credentials in `~/.aws` and `~/.ssh`, and an objective it pursues hard. The realistic trigger is prompt injection from a fetched page, a dependency, or an issue body rather than model misalignment.

### Is Docker enough to sandbox an AI coding agent?

For untrusted code, no. Containers share the host kernel, so a kernel-level escape exposes the host. Docker is a reasonable blast-radius control for supervised work. If the agent runs code you have not reviewed, use a microVM such as Firecracker or Kata Containers instead.

### How do I enable the Claude Code sandbox?

Run `/sandbox` in a session and pick a mode, which writes to `.claude/settings.local.json`. To turn it on everywhere, set `sandbox.enabled` to `true` in `~/.claude/settings.json`. macOS uses Seatbelt with nothing to install; Linux and WSL2 need bubblewrap and socat. Native Windows is unsupported.

### Does the sandbox stop the agent from reading my AWS and SSH credentials?

Not by default. The sandbox's default read policy covers the whole computer, and there is no built-in credential deny list. You name the paths yourself under `sandbox.credentials.files` with mode `deny`, or add them to `filesystem.denyRead`. Only what you list is protected.

### Is a network allowlist a real security boundary?

No, treat it as blast-radius reduction. Claude Code's proxy decides from the client-supplied hostname and does not inspect TLS by default, so domain fronting can reach hosts outside the list. CVE-2026-25725 defeated any wildcard allowlist with a single null byte.

### What is the difference between sandboxing and permission modes?

Permission rules decide whether a tool call runs at all, evaluated before execution across every tool. The sandbox restricts what a Bash command can touch once it runs, enforced by the operating system on the live process. The sandbox holds even when a command does more than its name suggests.

### Do subagents run inside the same sandbox?

Yes. Subagents run in the same process as the parent session and inherit its sandbox configuration, so their Bash commands are sandboxed when the parent has sandboxing on. MCP tools and the built-in Read, Edit, and Write tools sit outside the Bash sandbox boundary entirely.
