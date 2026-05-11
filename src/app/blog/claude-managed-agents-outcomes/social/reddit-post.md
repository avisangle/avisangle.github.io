# Reddit Posts - Claude Managed Agents Outcomes

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py claude-managed-agents-outcomes --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: ClaudeAI
TITLE: Anthropic's new Outcomes feature - practical notes on rubrics, max_iterations, and what breaks
FLAIR: Tutorial
---BODY---
Outcomes is the rubric-graded auto-iteration feature Anthropic shipped for Claude Managed Agents on May 6. I've been running it for a few days and the docs leave out a couple of things you only learn from breaking the loop.

**How it actually works**

You send one `user.define_outcome` event carrying a description and a markdown rubric. The writer drafts. A separate grader (same model and tools as the writer, fresh context window) inspects the artifact and emits `span.outcome_evaluation_end`. If the verdict is `needs_revision`, the explanation flows back into the writer's next turn. No human keystroke required.

**The numbers Anthropic published**

- +10 points overall task success vs a standard prompting loop
- +10.1% on .pptx generation
- +8.4% on .docx generation
- Largest gains land on the hardest tasks

**The five result states**

- `satisfied` -> session goes idle
- `needs_revision` -> writer starts another pass
- `max_iterations_reached` -> one final revision allowed before idle
- `failed` -> the rubric and description contradict each other
- `interrupted` -> a `user.interrupt` event landed mid-evaluation

**The rubric is the only lever**

Default failure mode is a grader that approves everything. The fix is explicit, gradeable criteria like "the CSV has a numeric price column" instead of "the data looks good." Don't ask the grader to verify factual accuracy it has no way to check - anchor the rubric in structure and completeness. Mandate a feedback format so you can parse the explanation downstream. Tell the grader what to ignore so it doesn't thrash on style nits.

**max_iterations decision rule**

Default 3, max 20. The cookbook recommends 5 for strict rubrics. If the loop hits the cap with **the same failure every iteration**, the rubric is wrong - raising the cap just buys more iterations of the same loop. If the loop hits the cap with **different failures converging**, raise the cap. That's real progress and another pass closes it out.

**Cost math**

No separate per-outcome fee. The cost driver is iteration count - every revision adds writer + grader tokens and keeps the $0.08-per-session-hour clock running. A 20-minute session that iterates twice runs about $0.029 in session-hours plus the tokens for both rounds.

**Named launch users**: Harvey (legal docs), Spiral by Every (editorial quality), Wisedocs (document QA).

Full write-up with Python code for the session + outcome event, the stream-handler, and the rubric anti-patterns: https://avinashsangle.com/blog/claude-managed-agents-outcomes

Happy to answer questions if anyone's wiring this into a production loop.
---POST---
SUBREDDIT: AI_Agents
TITLE: Practical notes on Anthropic Outcomes - the new built-in rubric grader for AI agents
FLAIR: Discussion
---BODY---
For folks building agent systems, Anthropic shipped Outcomes on May 6 as part of Claude Managed Agents. It's a built-in rubric-graded iteration loop, and the design choices are worth studying even if you're running a different stack.

**Architecture**

- One event (`user.define_outcome`) carries the task description and a markdown rubric
- A separate grader runs in a fresh context window with the same model and tools as the writer agent
- After every writer turn, the grader inspects the full artifact (not the diff) and emits a verdict
- If `needs_revision`, the grader's explanation flows back into the writer's next turn
- Loop terminates on `satisfied`, `max_iterations_reached`, `failed`, or `interrupted`

**Why the fresh context matters**

The grader can't be talked into approving an artifact that doesn't meet the rubric, because it has no visibility into the writer's reasoning. It re-checks the full artifact on every iteration, so a fix that breaks a previously-passing criterion gets caught on the next round.

**What translates to other stacks**

If you're rolling your own agent loop with open-source models or a different provider, the pattern is portable: separate the writer and judge into different model calls with different context, score against an explicit rubric, feed gaps back as natural language. Tools like Galileo, DeepEval, and Langfuse give you the scoring half but leave the wiring to you - what Anthropic added is the automatic loop.

**Where it doesn't fit**

If your success criterion is "does the test suite pass," Codex `/goal` with verifier scripts is the better tool. Outcomes leans qualitative; `/goal` leans test-driven. They target different shapes of work.

**Anthropic benchmarks**: +10 points overall task success, with the largest gains on the hardest tasks. File generation specifically saw +10.1% on .pptx and +8.4% on .docx.

Wrote up the API surface, the result states, rubric anti-patterns, and the cost math here: https://avinashsangle.com/blog/claude-managed-agents-outcomes

Curious what rubric patterns are working for others doing this with their own stack.
