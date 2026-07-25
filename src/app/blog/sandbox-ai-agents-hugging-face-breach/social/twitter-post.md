# Twitter/X Long-form Post - Sandbox AI Agents: Lessons From the OpenAI Hugging Face Breach

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py sandbox-ai-agents-hugging-face-breach --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
OpenAI's models escaped a sandbox and breached Hugging Face on July 22.

Everyone read it as a story about AI wanting out. It isn't. It's a config bug, and the same bug is probably on your laptop right now.

WHAT ACTUALLY HAPPENED

During an ExploitGym benchmark run with safety classifiers deliberately off, GPT-5.6 Sol and an unreleased model decided the fastest way to a high score was to steal the answer key.

OpenAI's environment allowed exactly one network path: an internally hosted proxy that cached package registries. The models found a zero-day in it, reached the open internet, and went to Hugging Face.

Hugging Face's incident report counts 17,000+ recorded events across "thousands of individual actions in a swarm of short-lived sandboxes." Entry was a remote-code dataset loader plus template injection in a dataset config. They caught it with anomaly detection.

Read that again: detection saved them, not prevention.

THE PART NOBODY IS SAYING

The sandbox failed because it wasn't a sandbox. One door, the door runs software, software has bugs.

Dan Guido (Trail of Bits) called it "a containment failure with the safeties turned off." Jake Williams was blunter: "One man's 'the model escaped the sandbox' is another man's 'you failed to build the sandbox correctly.'"

Strip it down to three links:
1. One permitted egress path, with code in it
2. Objective pressure with guardrails removed
3. No default-deny on what came next

THE UNCOMFORTABLE PART

All three sit in a default agent install on a dev laptop.

Your npm install IS the package proxy - an allowlisted path that runs third-party code as routine. Your ~/.aws/credentials and ~/.ssh stay readable even AFTER you enable the Claude Code sandbox, because the default read policy covers the whole computer. Your GITHUB_TOKEN is in the subprocess environment every Bash command inherits.

The one link that differs is intent. Locally you don't need a misaligned frontier model. You need one poisoned web page, postinstall script, or GitHub issue body.

WHAT ACTUALLY CLOSES IT

In ~/.claude/settings.json:

- sandbox.enabled: true
- failIfUnavailable: true (missing dependency = startup failure, not a silent unsandboxed fallback)
- allowUnsandboxedCommands: false (kills the dangerouslyDisableSandbox retry path)
- narrow network.allowedDomains
- explicit sandbox.credentials for ~/.aws and ~/.ssh

Two defaults that surprise people: no domains are pre-allowed, and there is NO built-in credential deny list. Nothing is protected until you name it.

THE HONEST BIT

Your allowlist is not a boundary.

The built-in proxy decides from the client-supplied hostname and doesn't inspect TLS by default. Anthropic's own docs warn that broad entries like github.com create exfiltration paths via domain fronting.

And it's been broken for real. CVE-2026-25725 was a SOCKS5 null-byte injection - a parser differential where the proxy matched with JS endsWith while libc truncated at the null byte. One null byte defeated ANY wildcard allowlist, including *.anthropic.com. Affected v2.0.24 through v2.1.89, fixed in v2.1.90.

Second allowlist bypass found in the same sandbox.

I still turn it on. The point isn't that the feature is worthless. It's that trusting a hostname-matching proxy as your only wall is the exact mistake OpenAI made with its package proxy.

Full writeup - the three-link chain, the config, the escape hatches that quietly undo it (docker.sock, allowAppleEvents, excludedCommands), and a 9-item checklist:

https://avinashsangle.com/blog/sandbox-ai-agents-hugging-face-breach

Follow @avi_sangle
