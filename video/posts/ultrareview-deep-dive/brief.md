---
name: ultrareview-deep-dive
description: First long-form video — multi-agent code review with /ultrareview pegged to the 2026-04-20 public preview release
type: project
---

# Topic Brief — /ultrareview Deep Dive: Cloud Multi-Agent Code Review

**Source:** custom topic (no underlying blog post yet — long-form pilot)
**Format suggested:** long (target 7–10 min)
**Slug:** ultrareview-deep-dive

## Hook
You merge a PR, your CI is green, your team approved it — and three days later production breaks because nobody caught the race condition. That's the gap `/ultrareview` was built to close: a fleet of cloud agents reviewing your branch in parallel while you make coffee.

## Key bullets
- One command spins up a multi-agent review fleet in the cloud
- Findings sync straight back to your CLI — no tab switching
- Works on local branches without a GitHub remote (no-arg form bundles the branch)
- Pass a PR number to review remote work: `/ultrareview <PR#>`
- Each agent attacks from a different angle in parallel — security, perf, correctness, style
- Billed per run, user-triggered — different cost model from interactive Claude Code

## Demoable code
```bash
# In a git repo with uncommitted or committed changes on a branch
/ultrareview

# Or target a specific GitHub PR
/ultrareview 142
```

The visual story is in the terminal output: agents reporting back asynchronously, findings populating the panel, then opening one finding to walk the reasoning.

## Numbers to animate
- Multi-agent fan-out: N parallel agents per run (capture actual count from a live run)
- Wall-clock vs. equivalent serial review (timer in the corner during demo)
- Findings count vs. a single-agent baseline review of the same diff
- Released **2026-04-20** — show the release-to-recording gap so it reads as fresh

## Canonical URL
n/a — custom topic, blog post may follow

## SEO seed (refined later by /video-script)
- Working title options:
  - "I tested Claude Code's new multi-agent reviewer on a real PR"
  - "The cloud code reviewer that runs 10 agents in parallel — /ultrareview"
  - "Claude Code /ultrareview: what it caught that my CI didn't"
- Tags: claude code, ultrareview, ai code review, multi-agent, anthropic, code review automation, github pr review, cloud agents, claude opus 4.7

## News peg

**Release:** /ultrareview public research preview — 2026-04-20
**Source:** https://code.claude.com/docs/en/whats-new
**Why it pegs this topic:** The release IS the topic. Public preview opened 9 days before recording. Multi-agent cloud review is a category-creating feature — first-mover content has search demand and AI-citation upside before the space saturates.
**How to use it in the script:** Open mid-action — show the command running before the title card. Reference "shipped April 20" in the first 15 seconds so the algorithm and the viewer both clock the freshness. Frame the episode as "here's what it actually does on a real PR," not "here's how to use a new feature."

## Long-form structure (rough)
1. Cold open: command runs, agents report back, one surprising finding
2. Title card + 1-line "what is /ultrareview" framing
3. Setup: one-liner on the install/availability state as of 2026-04-20
4. Demo path A: local branch, no GitHub remote — no-arg form
5. Demo path B: existing PR — `/ultrareview <PR#>`
6. Walk one finding end-to-end — agent reasoning, fix, re-run
7. Cost + when-to-use frame (research preview, billed)
8. Outro: when this replaces a human reviewer vs. when it doesn't
