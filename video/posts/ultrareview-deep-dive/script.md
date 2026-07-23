# Video Script — /ultrareview Deep Dive: Cloud Multi-Agent Code Review

**Format:** long
**Voice:** Brian (default; configurable via .env)
**Target spoken duration:** ~7m 30s at 145 wpm
**Blog post:** n/a — custom topic, long-form pilot

---

## Full VO (continuous — read aloud as one breath)

> I shipped a green PR last Tuesday. Prod broke Friday. /ultrareview would've caught it. By the end of this video you'll know exactly what /ultrareview does, when it's worth running, and the one tradeoff Anthropic is being quiet about — because the feature shipped to public preview on April 20th, just nine days before I'm recording this, and most reactions you've seen so far gloss right past the part that actually matters in a real workflow.
>
> So here's the simplest framing. /ultrareview is a single command. You run it inside any git repo, on any branch, and Claude Code spins up a fleet of agents in the cloud — each one reviewing your diff from a different angle. One agent looks at correctness, the next watches performance, a third tears into security, and the last digs into the assumptions buried in your test coverage. They run in parallel, they don't share a context window, and they argue back to you with concrete findings instead of one vague summary. The no-argument form bundles your local branch and ships it up for review — no GitHub remote required, which is the part that surprised me when I first read the docs. And if you do want to review a remote PR — just pass the number — and the same fleet attaches to the diff on GitHub.
>
> Let me show you what that looks like. I'm on a feature branch — about 200 lines of changes — the kind of PR my CI is going to greenlight in 90 seconds without breaking a sweat. I run /ultrareview, no arguments, and the terminal hands off to the cloud. Five agents spin up. The output panel starts streaming back findings in real time — and this is the part that's hard to convey in a screenshot. They don't all finish at once. The fast checks land first, the deeper analysis lands second, and you can open any finding to see the agent's chain of reasoning before the next one even reports back. One of mine flagged a race condition in a function I wrote eight hours earlier — a tiny gap between a check and a write where two requests could land in the wrong order. My team had already approved the PR. CI was green. Three days from now, that race would have fired in production, and I would have been the one paged at 2 in the morning. That's the gap. /ultrareview isn't replacing your human reviewer. It's reviewing what your human reviewer wasn't looking for.
>
> But here's the catch — and this is the part nobody's talking about in the launch coverage. /ultrareview is billed per run. Every fleet you spin up costs real money on top of your normal Claude Code spend, and the bill scales with diff size, agent count, and reasoning depth. So if you start running it on every PR — every doc tweak, every config bump — you'll watch your monthly bill climb in a way that interactive Claude Code spending doesn't. It's also a research preview, which means the surface is still moving, the cost model is still being tuned, and you should not be wiring this into a CI pipeline yet — at least not as a blocking step. Run it on the diffs that actually matter. The PR your team is about to merge to main. The hot-fix going out at 5 PM on a Friday. The migration that touches the auth path. Not the tiny copy change in a marketing page.
>
> Now the other path — the remote one. When the PR is already on GitHub, you skip the bundle step entirely. /ultrareview, space, the PR number, and the fleet pulls the diff from GitHub directly. The findings still sync back to your terminal — which is the design decision I want to underline — because every other tool in this category buries the report in a web dashboard you have to remember to open. /ultrareview puts it where your hands already are. You stay in the terminal, the agents come to you, and when you act on a finding you're already in the editor that owns the file. That's not a small UX win. That's the difference between actually fixing the issue and bookmarking a tab you'll never reopen.
>
> So when does this replace a human reviewer? It doesn't. It catches the things your reviewer wasn't looking for — the race condition at line 84, the off-by-one in the loop you copied from another file two weeks ago, the silent failure mode in the error handler that's been there since the original PR. A human reviewer is judging whether the code should exist — whether the abstraction is right, whether the API makes sense, whether the team agreed to ship it this way. /ultrareview is judging whether the code, as written, is going to break under load. Use both. Pay for the fleet on the diffs where production cost beats agent cost — and trust your team for everything else.
>
> One more thing on the cost beat — because it matters and most reviews skip past it. The way I'm using /ultrareview now is: I run it before requesting human review, not after. The fleet finds the boring bugs first — the typos, the race conditions, the missing null checks — and my reviewer doesn't waste their attention pointing those out. They get a cleaner diff, they focus on the design, and the cycle time on the PR drops because we're not bouncing through three rounds of you-missed-a-semicolon. That's the workflow I'd recommend if you're trying it for the first time.
>
> To recap. /ultrareview spins up a cloud agent fleet on your branch with one command. It works on local branches and remote PRs — no GitHub remote required for the local form. Findings sync back to the terminal, not a dashboard. It's a research preview, billed per run, so save it for the diffs that actually matter. The value isn't in replacing your reviewer — it's in catching the bugs your reviewer was never going to see anyway.
>
> That's the loop. My green PR last Tuesday — the one prod broke on Friday — wouldn't have shipped if I'd run /ultrareview before requesting review. Yours might be next.

**~1100 words / ~7m 35s at 145 wpm.**

---

## Scene-marked (cuts on natural beats — voice carries across)

[chapter-1: The setup] — ~33s

### [scene-1: news-peg-headline] — ~33s
> I shipped a green PR last Tuesday. Prod broke Friday. /ultrareview would've caught it. By the end of this video you'll know exactly what /ultrareview does, when it's worth running, and the one tradeoff Anthropic is being quiet about — because the feature shipped to public preview on April 20th, just nine days before I'm recording this, and most reactions you've seen so far gloss right past the part that actually matters in a real workflow.

[chapter-2: What /ultrareview actually does] — ~62s

### [scene-2: agent-fanout] — ~62s
> So here's the simplest framing. /ultrareview is a single command. You run it inside any git repo, on any branch, and Claude Code spins up a fleet of agents in the cloud — each one reviewing your diff from a different angle. One agent looks at correctness, the next watches performance, a third tears into security, and the last digs into the assumptions buried in your test coverage. They run in parallel, they don't share a context window, and they argue back to you with concrete findings instead of one vague summary. The no-argument form bundles your local branch and ships it up for review — no GitHub remote required, which is the part that surprised me when I first read the docs. And if you do want to review a remote PR — just pass the number — and the same fleet attaches to the diff on GitHub.

[chapter-3: Live on a real branch] — ~83s

### [scene-3: demo-block-local] — ~46s
> Let me show you what that looks like. I'm on a feature branch — about 200 lines of changes — the kind of PR my CI is going to greenlight in 90 seconds without breaking a sweat. I run /ultrareview, no arguments, and the terminal hands off to the cloud. Five agents spin up. The output panel starts streaming back findings in real time — and this is the part that's hard to convey in a screenshot. They don't all finish at once. The fast checks land first, the deeper analysis lands second, and you can open any finding to see the agent's chain of reasoning before the next one even reports back.

### [scene-4: demo-block-finding] — ~37s `bridge: true`
> One of mine flagged a race condition in a function I wrote eight hours earlier — a tiny gap between a check and a write where two requests could land in the wrong order. My team had already approved the PR. CI was green. Three days from now, that race would have fired in production, and I would have been the one paged at 2 in the morning. That's the gap. /ultrareview isn't replacing your human reviewer. It's reviewing what your human reviewer wasn't looking for.

[chapter-4: The cost catch] — ~69s

### [scene-5: cost-quote-card] — ~50s
> But here's the catch — and this is the part nobody's talking about in the launch coverage. /ultrareview is billed per run. Every fleet you spin up costs real money on top of your normal Claude Code spend, and the bill scales with diff size, agent count, and reasoning depth. So if you start running it on every PR — every doc tweak, every config bump — you'll watch your monthly bill climb in a way that interactive Claude Code spending doesn't. It's also a research preview, which means the surface is still moving, the cost model is still being tuned, and you should not be wiring this into a CI pipeline yet — at least not as a blocking step.

### [scene-6: priority-list] — ~19s `bridge: true`
> Run it on the diffs that actually matter. The PR your team is about to merge to main. The hot-fix going out at 5 PM on a Friday. The migration that touches the auth path. Not the tiny copy change in a marketing page.

[chapter-5: Local vs remote vs human] — ~158s

### [scene-7: pr-demo-block] — ~56s
> Now the other path — the remote one. When the PR is already on GitHub, you skip the bundle step entirely. /ultrareview, space, the PR number, and the fleet pulls the diff from GitHub directly. The findings still sync back to your terminal — which is the design decision I want to underline — because every other tool in this category buries the report in a web dashboard you have to remember to open. /ultrareview puts it where your hands already are. You stay in the terminal, the agents come to you, and when you act on a finding you're already in the editor that owns the file. That's not a small UX win. That's the difference between actually fixing the issue and bookmarking a tab you'll never reopen.

### [scene-8: comparison-split] — ~54s
> So when does this replace a human reviewer? It doesn't. It catches the things your reviewer wasn't looking for — the race condition at line 84, the off-by-one in the loop you copied from another file two weeks ago, the silent failure mode in the error handler that's been there since the original PR. A human reviewer is judging whether the code should exist — whether the abstraction is right, whether the API makes sense, whether the team agreed to ship it this way. /ultrareview is judging whether the code, as written, is going to break under load. Use both. Pay for the fleet on the diffs where production cost beats agent cost — and trust your team for everything else.

### [scene-9: workflow-tip] — ~48s
> One more thing on the cost beat — because it matters and most reviews skip past it. The way I'm using /ultrareview now is: I run it before requesting human review, not after. The fleet finds the boring bugs first — the typos, the race conditions, the missing null checks — and my reviewer doesn't waste their attention pointing those out. They get a cleaner diff, they focus on the design, and the cycle time on the PR drops because we're not bouncing through three rounds of you-missed-a-semicolon. That's the workflow I'd recommend if you're trying it for the first time.

[chapter-6: Recap + close] — ~45s

### [scene-10: recap-card] — ~33s
> To recap. /ultrareview spins up a cloud agent fleet on your branch with one command. It works on local branches and remote PRs — no GitHub remote required for the local form. Findings sync back to the terminal, not a dashboard. It's a research preview, billed per run, so save it for the diffs that actually matter. The value isn't in replacing your reviewer — it's in catching the bugs your reviewer was never going to see anyway.

### [scene-11: outro] — ~12s `bridge: true`
> That's the loop. My green PR last Tuesday — the one prod broke on Friday — wouldn't have shipped if I'd run /ultrareview before requesting review. Yours might be next.
