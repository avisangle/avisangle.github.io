# Content Brief: DeepSeek Super-Agent (dsh-superagent) Setup Guide

**Status:** ready to write
**Researched:** 2026-11-07
**Source:** PR #99 topic suggestion (merged as 1a61e50)
**Primary source checked:** `deepseek-ai/dsh-superagent-prototype`, cloned at HEAD `8c32a9d` (2026-10-31), repo pushed 2026-11-03, 20.2K stars, 2.35K forks, MIT, `package.json` version 0.1.0

---

## Phase 1 - Topic Validation

### Correction to the topic suggestion

The suggestion (written 2026-11-06) said "zero English-language practitioner guides exist." That
is no longer true. At least five English setup or explainer posts appeared Oct 31 - Nov 3 (table
below). The topic is still worth writing, but only with the angle in "Unique Angle". A plain
"clone, install, start" walkthrough would be the sixth copy of `docs/006-deployment.md`.

Also correct in the post: the repo is `dsh-superagent-prototype`, not `dsh-superagent`, and
DeepSeek calls it "Research prototype for reference only, not an official DeepSeek product."
Bloomberg/TNW framed it as watching team chats and acting unprompted. By default it does
neither: proactive work starts in `observe` mode, which only records "would accept" decisions,
and it acts only when someone on the allowed list mentions the agent account.

### Search demand

- News peg: Bloomberg (Nov 1), SCMP (Nov 1), The Next Web (Nov 2), MarkTechPost (Nov 1), HN
  thread, r/singularity thread (440+ upvotes, secondary report). See topic-suggestions.md entry.
- 20.2K GitHub stars in 7 days signals heavy developer curiosity, and setup is hard enough
  (second GitHub account, separate DSH profile, tmux service, Management API) that people
  search for help.
- Query shapes seen in SERPs: "deepseek super agent setup", "dsh-superagent install",
  "deepseek super agent github account", "deepseek super agent vs claude code",
  "is deepseek super agent safe".

**First-party Bing demand: none.** `scripts/bing_report.py --type queries --days 120` returns 25
queries for the whole site, none DeepSeek- or agent-related. (No project venv exists; ran with
system `python3`.) The site does have two DeepSeek posts, so this extends an existing cluster,
but the traffic case rests on the news peg and AI citation, not observed demand.

### Competition analysis

| Who | Date | Depth | Hands-on? | Gap |
|---|---|---|---|---|
| [aicybr](https://aicybr.com/blog/deepseek-dsh-superagent-prototype-setup-security) | Nov 1 | ~2,000 words, install commands, strong on `danger-full-access` | No, paraphrases docs | Says bot/CI messages reach the Worker; never says any human commenter does |
| [trtc.io](https://trtc.io/blog/details/deepseek-super-agent) | Nov 3 | ~2,200 words, install + `gh-agent` wrapper, vs Claude Code table | No | Heavy vendor promotion; thin on security |
| [TeamoRouter](https://teamorouter.com/blogs/deepseek-super-agent) | Nov 2 | ~1,500 words, install + provider config | Partial: stopped at "waiting for GitHub setup" | Sells API keys; never ran a Ticket |
| [explainx](https://explainx.ai/blog/deepseek-dsh-superagent-prototype-proactive-github-coding-agent-tickets-mandates-mit-2026) | Oct 31 | ~1,800 words conceptual | No | No commands |
| [DataCamp](https://www.datacamp.com/tutorial/deepseek-superagent-tutorial) | Nov | Tutorial ("Observe CI Before Repair") | Unknown (page 500'd on fetch) | Strongest domain authority; will likely rank #1 for the generic query |
| [Towards AI race](https://pub.towardsai.net/i-raced-deepseeks-new-agent-against-claude-code-37-seconds-vs-73-02d9ce10c4e9) | Nov | Member-only, single repo | Yes | 37 s vs 73 s, gap mostly the 1-minute poll |

**Competition level: medium-high for the generic "setup guide" query, low for the security
angle.** DataCamp will win the generic head term. We can win "is deepseek super agent safe",
"dsh-superagent security", "deepseek super agent public repo" and the AI-answer citation for
"what are the risks of running DeepSeek Super-Agent".

### AI citation potential: high (for the security angle)

People will ask assistants "should I run DeepSeek's super agent on my repo?" No current page
answers with the authorization facts below, which come straight from the repo docs and source
and are easy to quote with a line reference.

### Freshness

Everything is under 8 days old. The risk is the opposite: the prototype will change. Pin every
claim to commit `8c32a9d` and DSH `0.2.1-rc.3` and say so in the post.

### Original data the post can carry (verified from the clone, 2026-11-07)

1. **Who reaches the full-access Executor.** `docs/002-authorization.md` lines 20 and 127 and
   `docs/001-domain.md` (Subscription row): every message on a subscribed Thread reaches the
   Ticket's Executor as context "with no check of who sent it", including bots and CI, and "a
   person's message on one of its own Threads can resume the same work ... regardless of who
   sent it." The allowed list gates *starting* work, not *talking to* running or ended work. On
   a public repo, any GitHub user can comment on the agent's PR and that text lands in a Session
   that runs shell commands without approval. None of the five readable competitors says this.
2. **Full access is hard-coded.** `src/app/sessions.ts:152` sets
   `permissionPresets.set(session, 'danger-full-access')` for every Session. Not a setting.
   `docs/006-deployment.md`: "A worker can execute programs by path and read the operator's home
   directory." `docs/003-execution.md:80`: wrappers "establish defaults, not a security boundary."
3. **Blocked commands are name-based shims** in `<stateDir>/worker-bin`; an absolute path
   bypasses them (003:80).
4. **Mitigations the host does enforce:** setup strips env vars containing KEY, PASSWORD, SECRET,
   TOKEN; writes its own gitconfig that replaces the operator's global/system config; removes
   `GH_TOKEN`/`GITHUB_TOKEN`; refuses a Ticket dir whose repo config adds credentials; never
   enables auto-merge as the agent account; default auto-merge only under 200 changed lines.
5. **Prompt-injection base rate for DSH itself:** [Tencent Zhuque Lab, Aug 20 2026](https://matrix.tencent.com/en/2026/08/20/deepseek-harness-agent-injection-risk):
   14,560 real DSH runs, 5.6% full attack success (RuleJudge), `fake_completion` 16.6%,
   `unicode_hidden` 25.5% in file mode, 4.4% sensitive-tool triggers. Note it predates the
   superagent bundle and used `deepseek-v4-flash`.
6. **Scale of what you're trusting:** ~15.2K lines of TS in `src`, 60 test files, 2,091 lines
   of docs. README: "much of the engineering done by coding agents."
7. **Comparison fact (Context7, anthropics/claude-code-action):** Claude Code Action only runs for
   users with write access, checked on issue, PR, comment and review events; letting others in
   needs the opt-in `allowed_non_write_users`, which Anthropic labels RISKY and pairs with env
   scrubbing and a short-lived `GITHUB_TOKEN`. It also runs on an ephemeral GitHub runner, not the
   operator's machine.

### Honesty constraint for the writer

Avinash has **not** run dsh-superagent end to end (no `dsh` on this machine; it needs a model
provider key and a second GitHub account). The post must not claim a hands-on run, timings or PR
quality. Frame it as "I read the docs and source of commit 8c32a9d" with first-person voice about
that reading. If a real run happens later, add a section and bump `dateModified`.

---

## Phase 2 - Keyword Strategy

- **Primary:** deepseek super agent setup
- **Secondary:** dsh-superagent, deepseek super agent security, deepseek harness, deepseek super
  agent vs claude code
- **Long-tail:**
  - how to install dsh-superagent
  - deepseek super agent github account setup
  - is deepseek super agent safe to run
  - deepseek super agent observe mode
  - can I use deepseek super agent on a public repo
  - deepseek super agent without feishu
  - dsh-superagent status exit code 3
  - deepseek super agent requirements

### FAQ candidates (none from Bing; all from SERP/PAA and competitor gaps)

1. What is DeepSeek Super-Agent (dsh-superagent)?
2. Is DeepSeek Super-Agent safe to run on my machine?
3. Can DeepSeek Super-Agent work on a public GitHub repository?
4. Why does DeepSeek Super-Agent need a separate GitHub account?
5. Does DeepSeek Super-Agent need Feishu?
6. What does observe mode do in dsh-superagent?
7. How is DeepSeek Super-Agent different from Claude Code's GitHub integration?
8. What do I need installed before setting up dsh-superagent?
9. Why doesn't the agent respond to my @mention?
10. Does it work with GitHub Enterprise Server? (No)

---

## Phase 3 - Content Brief

### Article Metadata

- **metadata.title (39 chars, renders 56):** `DeepSeek Super-Agent Setup Guide (2026)`
- **OG / Twitter / H1 / TechArticle headline (58 chars):** `How to Set Up DeepSeek Super-Agent (dsh-superagent) Safely`
- **Slug:** `deepseek-super-agent-setup-guide`
- **Meta description (148 chars):** `Set up DeepSeek Super-Agent (dsh-superagent) step by step: agent GitHub account, gh wrapper, observe mode, and the permission gap other guides miss.`
- **Target word count:** 2,800-3,200
- **Read time:** ~12 min
- **Category:** AI Coding Agents (match the existing DeepSeek posts' category string)
- **Lucide icon:** `ShieldAlert` (fallback `Bot`)
- **Schemas:** TechArticle, BreadcrumbList, FAQPage, HowTo (install steps)

### Opening (first 40-60 words, direct answer)

DeepSeek Super-Agent (`dsh-superagent`) is an MIT-licensed research prototype that runs as a
service, watches one GitHub repo, and turns @mentions from allowed users into pull requests. Setup
takes a dedicated GitHub account, a separate DeepSeek Harness profile and five install commands.
The part to get right is who can reach the agent once it's working.

TL;DR bullets: what it is (prototype, one repo, github.com only); the 5 commands; the
security finding (allowed list gates new work, not follow-ups); the 4-setting safe default.

### Outline

**H2: What is DeepSeek Super-Agent (and what the headlines got wrong)?**
- Router-worker design: main Session (router/orchestrator) runs Eval, Executor Session per Ticket
  in its own directory, results back through the original Channel. Flow: Source -> Trigger ->
  Thread -> Eval -> Ticket/Mandate -> Assignment -> Executor.
- Not watching chats unprompted by default: `observe` mode records "would accept" only; explicit
  requests need an allowed user @mentioning the agent account.
- Prototype caveats verbatim from README; differs from DeepSeek's internal version.
- Link: repo, Bloomberg, TNW.

**H2: What do you need before installing dsh-superagent?**
- Bullet list: Node 22.19+ or 24+, pnpm, git 2.32+, tmux, Python 3.8+, gh 2.48+, DSH in
  `engines.dsh` `^0.2.1-alpha.2` (public pin `0.2.1-rc.3`), a model provider configured for DSH,
  a github.com repo (no GHES), git-lfs if the repo uses LFS, a second GitHub user account (not a
  GitHub App, because it reads that account's notifications).
- Note: macOS needs `brew install tmux gh pnpm`.

**H2: How to set up the agent's GitHub account and gh wrapper**
- Code block: the `gh-agent` wrapper from 006 (`GH_CONFIG_DIR=$HOME/.config/gh-agent`).
- Accept the repo invite as the agent account; verify `gh-agent api user --jq .login`.
- Why: everything it writes appears under that name; commit author defaults to the agent.

**H2: How to install DeepSeek Super-Agent (5 commands)**
- Code block (bash): the five Install commands.
- Explain each: profile `superagent` copied from Web template, why separate (it changes
  process-wide PATH and git config; restarts independently). Warning: re-running
  `--from-default-profile` on an existing profile deletes `cordis.patch.yml`.
- `cordis.patch.yml` snippet (webserver 127.0.0.1:3082, stateDir absolute).
- Mention the official route: ask your coding agent to "Read SETUP.md ... and set up dsh-superagent
  with me" (SETUP.md asks 9 questions one at a time, then shows one plan).

**H2: How to start it and read the status codes**
- `scripts/dsh-superagent start|status`, tmux session `dsh-superagent`.
- Table: exit codes 0/1/2/3 and whether a restart helps.
- Hourly check runs from your normal DSH profile, with `--respect-stop`.

**H2: Configuring Sources, Policy and Execution**
- Panel order: Sources (repo + absolute CLI path) -> Policy (allowed list empty means nothing
  happens) -> Execution (prepare command using `git worktree add -b agent/$DSH_SUPERAGENT_NAME`)
  -> Prompts (commit author, auto-merge).
- Management API one-liner (curl with `x-orchestrator-request: 1`).
- Accept modes table: off / observe / auto.
- First test: comment `@<agent login> <request>` on an issue; Ticket within ~1 minute (polling).
  Mentions added by editing an issue body are not received.

**H2: Who can actually reach the agent? The permission gap**  (the differentiating section)
- Direct answer first: the allowed list decides who can *start* a Ticket. Once a Ticket exists,
  every message on its Threads reaches the Executor, from anyone, and a human comment resumes an
  ended Ticket under the same Mandate.
- Quote 002 lines 20 and 127; 001 Subscription row.
- What that means on a public repo: drive-by comment on the agent's PR -> text in a
  `danger-full-access` Session (hard-coded, `src/app/sessions.ts:152`) on your machine as your OS
  user, able to read `~`.
- The Mandate limits scope by instruction to the model, not by sandbox. Cite Tencent's 5.6% / 16.6%
  numbers as the base rate for DSH following injected text.
- Fair counterpoint: setup strips secret-named env vars, replaces gitconfig, drops GH_TOKEN, no
  auto-merge as the agent. These reduce blast radius but don't stop shell access.

**H2: A safer default configuration (what I'd run)**
- Numbered list: (1) private repo only to start, (2) dedicated OS user or VM with only the agent's
  credentials, (3) allowed list = yourself, (4) accept mode `observe`, (5) auto-merge off,
  (6) block personal CLIs in `blockedCommands` knowing paths bypass it, (7) back up
  `orchestrator.sqlite` before upgrades.
- Link to sandbox and hardening posts.

**H2: DeepSeek Super-Agent vs Claude Code GitHub Actions**
- Table: where it runs (your machine vs ephemeral runner), trigger (polls notifications every
  minute vs webhook event), who can trigger (allowed list vs write access check), follow-ups from
  outsiders (reach Executor vs blocked unless `allowed_non_write_users`), permissions
  (`danger-full-access` vs configured tools), chat source (Feishu vs none built in), model
  (any DSH provider vs Claude), license (MIT vs MIT action, paid model).
- Cite Towards AI 37 s vs 73 s as one person's single-repo test, gap mostly polling.

**H2: Troubleshooting common setup errors**
- Short table from 006: CLI not found, cannot push, git < 2.32, nothing after a mention,
  `status` 3.

**H2: FAQ** - 6-8 from the candidates above, 40-60 words each.

### Unique Angle

- The only guide that traces the authorization model to its consequence: allowed list gates new
  work, follow-ups bypass it, and the executor has hard-coded full access. Quotable with file and
  line references.
- Corrects the news framing (not proactive by default).
- Verified against a pinned commit and the source, not paraphrased from other blogs.
- Comparison with Claude Code Action on the one axis that matters for this design: who can talk
  to the agent.

### Internal Linking

- `/blog/deepseek-v4-flash-agentic-coding-guide`, `/blog/deepseek-v4-1-flash-multimodal-coding-guide` (cluster)
- `/blog/hardening-ai-agents-cicd-prompt-injection` (injection via PR comments)
- `/blog/sandbox-ai-agents-hugging-face-breach` (OS-user/VM isolation)
- `/blog/macos-full-disk-access-ai-coding-agents` (home-directory read access)
- `/blog/claude-code-security-review-github-actions`, `/blog/codex-security-github-setup` (GitHub-native alternatives)
- Future: hands-on follow-up once run end to end; "background coding agents compared".

---

## Ready to Write?
Run: /write-blogpost deepseek-super-agent-setup-guide
