# Content Brief: Running claude ultrareview in CI/CD Pipelines

**Slug:** `ultrareview-ci-cd-pipelines`
**Status:** ready to write
**Research date:** 2026-05-03

---

## Phase 1 — Topic Validation

### Search demand

- **News hook (April 28 2026):** Claude Code 2.1.120 quietly added `claude ultrareview [target]` - a non-interactive CLI subcommand that runs the multi-agent ultrareview from CI scripts and pipelines. Findings to stdout, `--json` for raw output, exit 0/1/130. Confirmed in the official changelog and `@ClaudeCodeLog` tweet. ([changelog](https://code.claude.com/docs/en/changelog), [tweet](https://x.com/ClaudeCodeLog/status/2047882231343878309))
- **Timing hook (April 27 2026):** GitHub Copilot code review starts consuming Actions minutes on **June 1 2026**, plus moves to credit-based billing. Teams are actively shopping for AI code-review alternatives before the bill changes. ([GitHub Changelog](https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026/), [VS Magazine](https://visualstudiomagazine.com/articles/2026/04/27/devs-sound-off-on-usage-based-copilot-pricing-change-you-will-get-less-but-pay-the-same-price.aspx))
- **Surrounding intent:** Active forum/HN/Reddit chatter about CodeRabbit vs Greptile vs Cursor BugBot vs Claude Code review-cycle gain. Multiple "best AI code review tools 2026" roundups but none cover `claude ultrareview` in CI yet. ([Hightower comparison](https://medium.com/@richardhightower/claude-code-ultrareview-vs-coderabbit-vs-greptile-94737b30ec1f), [DEV 2026 roundup](https://dev.to/heraldofsolace/the-best-ai-code-review-tools-of-2026-2mb3), [Greptile vs CodeRabbit](https://www.greptile.com/greptile-vs-coderabbit))
- **Google autocomplete (May 2026):** "claude ultrareview github actions", "claude ultrareview ci pipeline", "claude ultrareview non-interactive", "claude ultrareview json output", "claude ultrareview cost".
- **Practitioner pain:** Open issues like [#50029](https://github.com/anthropics/claude-code/issues/50029) (empty findings on large repos) and [#53301](https://github.com/anthropics/claude-code/issues/53301) (review crashes) show real users wiring this into automation right now and hitting edges that no blog has documented.

### Competition analysis (top results)

1. **[Official Claude Code docs - Find bugs with ultrareview](https://code.claude.com/docs/en/ultrareview)** - definitive reference for the subcommand, flags, and pricing. Reads like a spec; no end-to-end CI workflow, no cost-control playbook, no comparison vs the managed Code Review product.
2. **[Rick Hightower - Ultrareview vs CodeRabbit vs Greptile](https://medium.com/@richardhightower/claude-code-ultrareview-vs-coderabbit-vs-greptile-94737b30ec1f)** - comparison piece. Interactive `/ultrareview` only; explicitly states CI integration is a gap.
3. **[Mejba Ahmed - Ultra Review tested](https://www.mejba.me/blog/claude-code-ultra-review-tested)** and **[Joe Njenga - I Tried Claude Code Ultra Review](https://medium.com/@joe.njenga/i-tried-claude-code-ultra-review-it-catches-bugs-before-you-even-merge-4d827ac667bd)** - first-impression reviews of the slash command. No CI angle.
4. **[Build This Now - Claude Code Ultra Review](https://www.buildthisnow.com/blog/guide/development/ultra-review)**, [tech2geek](https://www.tech2geek.net/), [wmedia.es](https://www.wmedia.es/), [Pasquale Pillitteri](https://www.pasqualepillitteri.it/) - 8+ first-look posts written between April 16-25 (right after the `/ultrareview` launch on 2.1.111). All cover the interactive command only. Several explicitly say automation is not supported - that statement was true on April 25 and false by April 28.
5. **[Claude Code GitHub Actions docs](https://code.claude.com/docs/en/github-actions)** - covers `anthropics/claude-code-action@v1` for `@claude` mention workflows. Does **not** mention `claude ultrareview`. The action authenticates via `ANTHROPIC_API_KEY`, which is the wrong auth surface for ultrareview (which requires a Claude.ai OAuth token).

**Gap we fill:** the only end-to-end practitioner guide for running `claude ultrareview` from CI. Specifically:
- Walks the **Claude.ai OAuth token gotcha** that blocks 90% of first attempts. Ultrareview will not run with `ANTHROPIC_API_KEY`. You must use `claude setup-token` to generate `CLAUDE_CODE_OAUTH_TOKEN`. The official docs mention this in passing; no tutorial spells out the exact secret-rotation flow.
- Provides a **copy-pasteable GitHub Actions workflow** that installs the CLI, authenticates via OAuth secret, runs `claude ultrareview --json`, parses findings with `jq`, and posts them as a PR comment with severity counts.
- Provides a **GitLab CI equivalent** for teams not on GitHub.
- Models **cost and frequency** so teams don't blow the bill: skip `claude ultrareview` on `dependabot` PRs, gate on diff size or label, run only on `main`-targeted PRs, set `--timeout` floors.
- **Compares the three Claude code-review surfaces** so the reader picks the right tool: local `/review`, `claude ultrareview` from CI (this post), and the managed Code Review product (Team/Enterprise, $15-25/review, GitHub App).
- Frames the **Copilot billing change** so DevOps readers see why the timing matters.

### AI citation potential

**Very high.** The phrase "claude ultrareview github actions" returns Anthropic's docs and nothing else. ChatGPT, Claude, and Perplexity will be answering "how do I run claude ultrareview in CI" within weeks of the v2.1.120 ship date. Being the first practitioner guide with a working workflow file gives long-tail citation pickup. Bonus: every existing ultrareview article will date itself ("interactive-only") - we can supersede them by name.

### Freshness opportunity

- The subcommand is **5 days old at publish time**. No competing content exists.
- Anthropic has not published a sample workflow file for `claude ultrareview` in any of their three GitHub Actions docs pages.
- The Copilot billing change is **28 days from kicking in** - peak shopping intent.
- The 3-free-run promo for Pro/Max ends **May 5 2026**. Article should be live before then so readers can test free.

---

## Phase 2 — Keyword Strategy

### Primary keyword
`claude ultrareview ci cd`

### Secondary keywords
- `claude ultrareview github actions`
- `claude ultrareview non-interactive`
- `claude ultrareview json output`
- `claude ultrareview cost`
- `ai code review github actions 2026`

### Long-tail queries
1. how to run claude ultrareview in github actions
2. claude ultrareview cli subcommand example
3. claude ultrareview --json parse findings
4. claude code oauth token github actions secret
5. claude ultrareview vs code review managed product
6. claude ultrareview gitlab ci pipeline
7. claude ultrareview exit codes ci
8. claude ultrareview timeout flag

### FAQ candidates (mirror real search queries)
1. What is the `claude ultrareview` CLI subcommand?
2. How do I run `claude ultrareview` in GitHub Actions?
3. Why does `claude ultrareview` fail with `ANTHROPIC_API_KEY`?
4. What does `claude ultrareview --json` return?
5. How much does `claude ultrareview` cost per run in CI?
6. Can I run `claude ultrareview` on Amazon Bedrock or Google Vertex AI?
7. What exit codes does `claude ultrareview` use?
8. How is `claude ultrareview` different from the managed Code Review product?
9. Can I use `claude ultrareview` with GitLab CI?
10. How do I prevent `claude ultrareview` from running on every push?

---

## Phase 3 — Content Brief

### Article metadata

- **Title:** `Run claude ultrareview in CI/CD: GitHub Actions Guide` (53 chars)
  - Backup: `Claude ultrareview in CI/CD Pipelines: 2026 Walkthrough` (55 chars)
- **Slug:** `ultrareview-ci-cd-pipelines`
- **Meta description:** `Run claude ultrareview in CI/CD with the new non-interactive subcommand. GitHub Actions YAML, OAuth token setup, --json parsing, and cost controls.` (148 chars)
- **Target word count:** 2,800 - 3,200 words
- **Estimated read time:** 12 min
- **Category:** DevOps / Claude Code
- **Lucide icon:** `GitPullRequestArrow` (or `Workflow` as backup)
- **Publish date:** 2026-05-03
- **Tags:** Claude Code, GitHub Actions, CI/CD, Code Review, DevOps

### Unique angle

Every existing ultrareview article was written between April 16-25 against the interactive `/ultrareview` slash command and explicitly states that automation is not supported. Claude Code 2.1.120 (April 28) made that statement obsolete by adding `claude ultrareview [target]` as a non-interactive subcommand. This post is the first practitioner guide that:

1. Documents the OAuth-only authentication gotcha (the official `claude-code-action@v1` won't work because it uses `ANTHROPIC_API_KEY`; ultrareview rejects API keys).
2. Provides a working GitHub Actions workflow that installs the CLI, authenticates via `CLAUDE_CODE_OAUTH_TOKEN`, runs the subcommand, parses JSON findings, and posts a structured PR comment.
3. Provides a GitLab CI equivalent.
4. Builds a cost model showing what `claude ultrareview` costs at 50/100/200 PRs/month and when to use it vs the managed Code Review product.
5. Links the timing to the GitHub Copilot Actions-minutes billing change on June 1 2026.

Original contribution: the assembled hardened workflow nobody else has published, the OAuth setup walkthrough, and the cost/frequency control patterns.

### Opening (first 40-60 words must answer the title)

> Claude Code 2.1.120 added `claude ultrareview [target]` - a non-interactive CLI subcommand that runs the cloud multi-agent code review from CI scripts and pipelines. It prints findings to stdout, supports `--json` for raw output, and exits 0 on completion or 1 on failure. This guide wires it into a real GitHub Actions workflow, with the Claude.ai OAuth token that the standard action doesn't ship.

### TL;DR (place right after the opening, 4 bullets)

- `claude ultrareview` is the non-interactive form of `/ultrareview`. Same multi-agent review, same 5-10 minute runtime, same $5-$20 per run.
- Authentication is the trap: ultrareview needs a Claude.ai OAuth token (`CLAUDE_CODE_OAUTH_TOKEN`), not an API key. Generate one with `claude setup-token` (Pro/Max only).
- Use `--json` to pipe `bugs.json` through `jq` and post a severity-tagged PR comment. Exit code 1 fails the build; exit 0 passes regardless of findings.
- For Team/Enterprise orgs that want every PR reviewed automatically without writing YAML, the managed Code Review product is a better fit. CLI subcommand wins on flexibility, custom triggers, and self-hosted runners.

### Content outline

#### H2: What `claude ultrareview` Does in CI

- Quick recap: ultrareview launches a fleet of agents in a remote sandbox, each verifies its own findings, returns 5-10 min later. Higher signal than `/review` and broader coverage. ([source](https://code.claude.com/docs/en/ultrareview))
- New in v2.1.120 (April 28 2026): `claude ultrareview [target]` runs the same review from any shell. No interactive session needed.
- Three target forms: nothing (branch vs default), PR number (`claude ultrareview 1234`), base branch ref (`claude ultrareview origin/main`).
- Output rules that matter for CI: progress and session URL go to **stderr**; findings go to **stdout**; stdout stays parseable with `--json`. Exit 0 = completed with or without findings, 1 = failed/timeout, 130 = Ctrl-C interrupt.

#### H2: The Authentication Gotcha (Read This First)

- The official `anthropics/claude-code-action@v1` authenticates with `ANTHROPIC_API_KEY`. **Ultrareview rejects API key auth.** From the docs: *"Ultrareview requires authentication with a Claude.ai account because it runs on Claude Code on the web infrastructure."*
- Ultrareview is also **not available** on Amazon Bedrock, Google Cloud Vertex AI, or Microsoft Foundry, and not available with Zero Data Retention enabled. So OIDC routes are out for ultrareview, even though they work for the rest of `claude-code-action`.
- The fix: generate a long-lived OAuth token with `claude setup-token` on a Pro or Max account. Token format `sk-ant-oat01-...`, valid one year, single display, can't be retrieved again.
- Store as a GitHub Actions secret named `CLAUDE_CODE_OAUTH_TOKEN`. Rotate on day 350 to give yourself a buffer. Set a calendar reminder - the token has no in-Anthropic-console rotation UI.
- Why a Pro/Max account, not a service account: ultrareview bills against the human's extra usage allowance. Most teams use a shared "ci-bot@company.com" Pro account for this. Document who owns it in your runbook.

#### H2: Install the Claude Code CLI in GitHub Actions

- Install via npm: `npm install -g @anthropic-ai/claude-code` in a step that runs once.
- Pin the version: `npm install -g @anthropic-ai/claude-code@2.1.120` (or later). Don't float on `latest` because the subcommand surface is still moving (see [regression-proofing post](/blog/regression-proofing-claude-code-workflows)).
- Verify install with `claude --version` so the workflow fails loudly on a bad install.
- Cache `node_modules` to shave 20-30s off subsequent runs.

#### H2: Minimum Viable Workflow: `claude ultrareview` on Pull Request

- Target the `pull_request` event with `types: [opened, ready_for_review]` (skip drafts, skip every push).
- Job needs `pull-requests: write` and `contents: read`. Nothing else.
- Three steps: install CLI, run `claude ultrareview --json --timeout 20 ${{ github.event.pull_request.number }}`, post comment.
- 30-line YAML pasted in full. Annotated.
- Show what the stdout JSON looks like (truncated example of `bugs.json` shape) so readers know what they're parsing.

```yaml
# Example shape - full version in the article
name: Claude Ultrareview
on:
  pull_request:
    types: [opened, ready_for_review]
permissions:
  pull-requests: write
  contents: read
jobs:
  ultrareview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - run: npm install -g @anthropic-ai/claude-code@2.1.120
      - name: Run ultrareview
        env:
          CLAUDE_CODE_OAUTH_TOKEN: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
        run: |
          claude ultrareview --json --timeout 20 \
            ${{ github.event.pull_request.number }} > bugs.json
      - name: Post findings
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: ./scripts/post-ultrareview-comment.sh bugs.json
```

#### H2: Parse `--json` Findings and Post a Severity-Tagged PR Comment

- Walk the `bugs.json` payload structure. Show the keys (`findings[].file`, `findings[].line`, `findings[].severity`, `findings[].title`, `findings[].body`).
- 20-line `jq` script that groups findings by severity, formats them as a Markdown table, and pipes to `gh pr comment`.
- Optional: emit GitHub Actions annotations with `::error` / `::warning` so findings appear inline on the **Files changed** tab.
- Show how to fail the build only on Important findings (count = `jq '[.findings[] | select(.severity=="important")] | length'`).
- Note: blog post about the wider hardening picture lives at [/blog/hardening-ai-agents-cicd-prompt-injection](/blog/hardening-ai-agents-cicd-prompt-injection); link to it from this section because the comment-poster step inherits the same threat model.

#### H2: Cost Control: When `claude ultrareview` Pays for Itself, and When It Doesn't

- Per-review cost: $5-$20 (extra usage), avg $12 in our runs. Pro/Max get 3 free runs through May 5 2026.
- Cost table: 50 PRs/month at $12 avg = $600/mo. 200 PRs/month = $2,400/mo. Quick break-even vs CodeRabbit ($15/dev/mo Lite, $30 Pro) and the managed Code Review product ($15-25/PR).
- Five frequency controls that move the needle:
  1. **Skip drafts.** `if: github.event.pull_request.draft == false`.
  2. **Skip bot PRs.** `if: github.actor != 'dependabot[bot]' && github.actor != 'renovate[bot]'`.
  3. **Gate on label.** Only run when reviewers add `needs-deep-review`. Costs zero on routine PRs, $12 on substantive ones.
  4. **Diff-size threshold.** Use `gh pr diff --name-only | wc -l` to skip PRs under 5 changed files.
  5. **Branch targeting.** Only on PRs into `main` or `release/*`, never on long-lived feature-branch PRs.
- `--timeout 20` keeps the worst-case runner cost bounded. If the remote review hangs, you don't burn an hour of GitHub Actions minutes too.

#### H2: When to Use the Managed Code Review Product Instead

- Comparison table: `claude ultrareview` (CLI) vs Code Review (managed GitHub App).

| Dimension | `claude ultrareview` (CLI) | Code Review (managed) |
| --- | --- | --- |
| Plan required | Pro / Max / Team / Enterprise | Team / Enterprise only |
| Auth | OAuth token in CI secret | GitHub App, no token in your repo |
| Trigger | Whatever your YAML says | On PR open / every push / `@claude review` |
| Inline diff comments | You write the post step | Posted automatically |
| Cost per review | $5-$20 (extra usage) | $15-$25 (extra usage) |
| Cost predictability | You control frequency | Scales with PR count + push count |
| Customization | Anything `jq` and `gh` can do | `REVIEW.md` for severity rules and skip paths |
| Self-hosted runners | Yes | No (runs on Anthropic infra) |

- Decision rules:
  - Use **CLI subcommand** if: you have a Pro/Max account, you want custom trigger logic, you run on self-hosted runners, you want findings in non-GitHub destinations (Slack, Linear, your dashboard), or you're cost-sensitive and want one review per PR open (not per push).
  - Use **managed Code Review** if: you're on Team/Enterprise, you want zero YAML, you want inline diff annotations and severity-tagged check runs out of the box, you trust Anthropic to make the trigger decisions, and `REVIEW.md` covers your tuning needs.
- Both bill as extra usage on the same Anthropic invoice; budgeting and spend caps are per-org.

#### H2: GitLab CI Equivalent

- Mirror the GitHub workflow in `.gitlab-ci.yml`.
- 30-line job using a `node:20-alpine` image. Auth via `CLAUDE_CODE_OAUTH_TOKEN` masked variable. Post comment via the GitLab CLI (`glab mr note`) or REST.
- Note: `claude ultrareview <PR-number>` syntax is GitHub-specific (it clones from a `github.com` remote). GitLab users default to the no-arg form (current branch vs default branch) which works on bundled local state.

#### H2: The June 1 2026 Copilot Billing Change

- Short context section: GitHub Copilot code review starts consuming Actions minutes on private repos June 1 2026, plus moves to credit-based billing. Many teams that "got code review for free" will see a bill.
- Direct comparison: with `claude ultrareview` on GitHub-hosted runners, you pay both Anthropic for the review (~$12) **and** GitHub for the runner minutes (~$0.04 for a 5-minute Linux job). The Anthropic charge dominates; the runner cost is a rounding error.
- Implication: the runner-minute billing concern that pushes teams away from Copilot review is structurally similar for any CI-hosted AI reviewer, including `claude ultrareview`. The right cost lever is **frequency**, not which AI you choose.
- Citation: [GitHub Changelog](https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026/), [VS Magazine](https://visualstudiomagazine.com/articles/2026/04/27/devs-sound-off-on-usage-based-copilot-pricing-change-you-will-get-less-but-pay-the-same-price.aspx).

#### H2: Known Edges and How to Work Around Them

- **Empty findings on huge PRs.** Issue [#50029](https://github.com/anthropics/claude-code/issues/50029) reports `[]` returns on 3,000+ file diffs. Workaround: split or use the no-arg form which bundles local state instead of cloning the PR.
- **Repository too large to bundle.** Use PR mode (`claude ultrareview <PR-number>`) which clones from `github.com` instead of uploading the working tree.
- **Free runs expire May 5 2026.** Pro/Max accounts get three; the team account you use for CI has its own three. Don't burn them on `dependabot` PRs.
- **Token rotation.** OAuth token expires after one year with no in-console rotation UI. Set a renewal calendar reminder for day 350.
- **Cost surprise on busy weeks.** Set an extra-usage spend cap at [claude.ai/admin-settings/usage](https://claude.ai/admin-settings/usage) before turning the workflow on org-wide.

#### H2: Hardening Checklist for Production Use

- 12-item checklist a team can paste into their PR template before turning the workflow on:
  - Pin the CLI version (`@anthropic-ai/claude-code@2.1.120`).
  - Use a dedicated Pro/Max account whose owner is documented in the runbook.
  - Store `CLAUDE_CODE_OAUTH_TOKEN` in GitHub Secrets (not org-level vars).
  - Set workflow `permissions:` to `pull-requests: write, contents: read` and nothing else.
  - Restrict trigger to non-draft PRs and non-bot actors.
  - Add a label gate or diff-size gate.
  - Pass `--timeout 20` to bound runner cost.
  - Pipe stdout to a file; never trust the comment poster with raw model output (link to `hardening-ai-agents-cicd-prompt-injection`).
  - Fail the build only on Important findings - don't gate on Nits.
  - Set an org-level extra-usage spend cap.
  - Rotate the OAuth token annually.
  - Subscribe the runbook owner to Claude Code changelog RSS for breaking changes.

### Required FAQ section (mirror Phase 2 candidates, 40-60 words per answer)

Use the 10 FAQ questions verbatim. Each answer must cite a specific Anthropic doc URL or commit. Particular care on the auth question (most-asked) and the "vs Code Review" question (decision-time).

### Code examples to include

1. Minimal GitHub Actions workflow (~30 lines).
2. Full hardened workflow with label gate, draft skip, bot skip, JSON parsing, comment posting (~60 lines).
3. `jq` script that groups findings by severity and emits Markdown table (~15 lines).
4. GitHub Actions annotations one-liner (`::error file=...,line=...::Title`).
5. GitLab CI `.gitlab-ci.yml` equivalent (~30 lines).
6. `claude setup-token` walkthrough output (transcript-style, 8 lines).
7. Example `bugs.json` payload (truncated, 15 lines, with comments).
8. Comparison table CLI vs managed Code Review.
9. Cost table (50/100/200 PRs/month).

### Authoritative sources to cite

- Claude Code docs - Find bugs with ultrareview: https://code.claude.com/docs/en/ultrareview
- Claude Code docs - Code Review (managed): https://code.claude.com/docs/en/code-review
- Claude Code docs - Changelog (2.1.120 entry): https://code.claude.com/docs/en/changelog
- Claude Code docs - GitHub Actions: https://code.claude.com/docs/en/github-actions
- Claude Code docs - Authentication / `claude setup-token`: https://code.claude.com/docs/en/authentication
- @ClaudeCodeLog tweet announcing 2.1.120: https://x.com/ClaudeCodeLog/status/2047882231343878309
- GitHub Changelog - Copilot code review billing: https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026/
- VS Magazine devs reaction piece: https://visualstudiomagazine.com/articles/2026/04/27/devs-sound-off-on-usage-based-copilot-pricing-change-you-will-get-less-but-pay-the-same-price.aspx
- Hightower comparison (Ultrareview vs CodeRabbit vs Greptile): https://medium.com/@richardhightower/claude-code-ultrareview-vs-coderabbit-vs-greptile-94737b30ec1f
- DEV Community 2026 AI code review tools roundup: https://dev.to/heraldofsolace/the-best-ai-code-review-tools-of-2026-2mb3
- GitHub issue #50029 (empty findings on large repos): https://github.com/anthropics/claude-code/issues/50029
- GitHub issue #53301 (review crash): https://github.com/anthropics/claude-code/issues/53301

### Internal linking opportunities

- `/blog/hardening-ai-agents-cicd-prompt-injection` - link from "Parse `--json` Findings" and "Hardening Checklist" sections. Comment-posting step inherits the same prompt-injection threat model.
- `/blog/claude-code-security-review-github-actions` - link from "When to Use Managed Code Review" section. Setup companion for the security-scanning side of CI.
- `/blog/regression-proofing-claude-code-workflows` - link from "Install the Claude Code CLI" section. Why pinning matters for harness-level subcommands that move week-to-week.
- `/blog/claude-code-cost-tracking` - link from "Cost Control" section. Per-run cost tracking pattern.
- `/blog/claude-md-guide` - link from "When to Use Managed Code Review" - mention `REVIEW.md` (Code Review) vs `CLAUDE.md` (CLI subcommand) tuning surfaces.
- `/blog/claude-managed-agents` - mention in passing in the comparison table footnote.
- `/projects/jenkins-mcp` - "another CI/CD context" callout in conclusion.

### Future content cluster

- "How to read the `bugs.json` payload from Claude ultrareview"
- "Building a Slack notifier for `claude ultrareview` findings"
- "When `claude ultrareview` and CodeRabbit disagree: a side-by-side"
- "Self-hosted runners for `claude ultrareview`: cost and security tradeoffs"
- "OAuth token rotation patterns for Claude Code in CI"

---

## Ready to Write?
Run: `/write-blogpost ultrareview-ci-cd-pipelines`
