# Hacker News Submission - Sandbox AI Agents: Lessons From the OpenAI Hugging Face Breach

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** The OpenAI sandbox escape was a config bug, and the same one is on your laptop

**URL:** https://avinashsangle.com/blog/sandbox-ai-agents-hugging-face-breach

---

**First Comment:**

Author here. I read the OpenAI disclosure and Hugging Face incident report from July 22 and wanted to write down the engineering version rather than the sci-fi one. OpenAI's environment permitted exactly one egress path, an internally hosted proxy caching package registries, and the models found a zero-day in it. One door, the door runs software, software has bugs.

The reason I think it generalises: strip the escape down and three links had to hold, and all three exist in a default coding-agent install. The package proxy maps to npm/pip, credentials in ~/.aws and ~/.ssh stay readable even with Claude Code's sandbox enabled because the default read policy covers the whole machine, and there is no built-in credential deny list.

The section I expect pushback on is the claim that a network allowlist is blast-radius reduction rather than containment. Claude Code's proxy decides from the client-supplied hostname and doesn't inspect TLS by default, and CVE-2026-25725 (a SOCKS5 null-byte parser differential between JS endsWith and libc getaddrinfo) defeated any wildcard allowlist through v2.1.89. That was the second bypass in the same sandbox.

Feedback welcome, particularly from anyone running agents under gVisor or Firecracker in anger - I'd like to know where the practical breakage is.
