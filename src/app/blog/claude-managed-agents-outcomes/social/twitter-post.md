# Twitter/X Long-form Post - Claude Managed Agents Outcomes

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py claude-managed-agents-outcomes --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Anthropic shipped Outcomes for Claude Managed Agents on May 6.

It's the first built-in auto-grader for AI agents. Send one event, hand the agent a rubric, and a separate grader model re-runs the writer until the artifact passes.

Here's what's worth knowing after going through the docs and cookbook:

THE LOOP

Writer drafts. Harness emits `span.outcome_evaluation_start`. Grader runs in a fresh context window, same model and tools as the writer. Verdict comes back on `span.outcome_evaluation_end`. If it's `needs_revision`, the gaps flow back into the writer's next turn. No human in the loop.

THE NUMBERS

Anthropic's internal benchmarks:
- +10 points overall task success vs standard prompting
- +10.1% on .pptx generation
- +8.4% on .docx generation

Largest gains land on the hardest tasks. Easy work looks fine on the first pass anyway.

THE FIVE RESULT STATES

- `satisfied` -> session goes idle
- `needs_revision` -> writer starts another pass
- `max_iterations_reached` -> one final revision allowed
- `failed` -> rubric and description contradict each other
- `interrupted` -> a user.interrupt event landed

THE RUBRIC IS THE LEVER

Default failure mode: a grader that approves everything. Fix: explicit, gradeable criteria.

"The CSV has a numeric price column" beats "the data looks good."

Don't ask the grader to verify factual accuracy it can't check. Anchor the rubric in structure and completeness. Anticipate shortcuts. Mandate a feedback format.

THE max_iterations TRAP

Defaults to 3, max 20. The cookbook recommends 5 for strict rubrics.

Decision rule: if the loop hits the cap with the SAME failures every iteration, the rubric is the problem. If it hits the cap with DIFFERENT failures converging, raise the cap.

Raising the cap to mask a bad rubric just doubles your token spend.

THE COST

No per-outcome fee. The cost driver is iteration count. Every revision adds writer + grader tokens and keeps the $0.08-per-session-hour clock running. A 20-minute session that iterates twice runs about $0.029 in session-hours plus tokens.

Way cheaper than a human review round.

WHO'S USING IT

Harvey (legal docs), Spiral by Every (editorial quality), Wisedocs (document QA).

Full walkthrough with Python code, the rubric anti-patterns, max_iterations tuning rule, and a comparison with LLM-as-judge tools and Codex /goal:

https://avinashsangle.com/blog/claude-managed-agents-outcomes

Follow @avi_sangle for more Claude Code and Managed Agents deep-dives.
