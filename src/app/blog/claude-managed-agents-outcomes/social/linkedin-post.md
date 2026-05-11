# LinkedIn Post - Claude Managed Agents Outcomes

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py claude-managed-agents-outcomes --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Anthropic shipped Outcomes for Claude Managed Agents on May 6 - and it's the first built-in auto-grader I've used that doesn't feel like a glued-on judge script.

You send one event with a markdown rubric. The agent drafts. A separate grader, running in its own context window with the same model and tools as the writer, checks the artifact and returns per-criterion verdicts. If anything fails, the explanation goes back to the writer for another pass, up to max_iterations.

Things that stood out after going through the docs and cookbook:

- Internal benchmarks show +10 points overall task success, +10.1% on .pptx generation, and +8.4% on .docx. Largest gains land on the hardest tasks.
- max_iterations defaults to 3, capped at 20. The cookbook recommends starting at 5 for strict rubrics. There's a tuning rule worth borrowing: if every iteration fails on the same criterion, the rubric is wrong. If failures converge each pass, raise the cap.
- The rubric is the only lever you have. Vague criteria produce a grader that approves everything. Explicit, gradeable structure ("the CSV has a numeric price column") beats vibes ("the data looks good") every time.
- No separate per-outcome fee. The cost driver is iteration count multiplying writer + grader tokens against the same $0.08-per-session-hour clock.

But it isn't a universal answer.

If your success criterion is "does the test suite pass," Codex /goal with verifier scripts fits better. If you need offline scoring across a corpus, a standalone LLM-as-judge tool (Galileo, DeepEval, Langfuse) gives you more flexibility. Outcomes shines specifically when the artifact is qualitative (documents, decks, prose) and you want the iteration loop wired into the harness instead of building it yourself.

Harvey, Spiral by Every, and Wisedocs were named as production users at launch.

I wrote up the rubric anti-patterns, the five result states, max_iterations tuning, the cost math, and a comparison with LLM-as-judge tools and Codex /goal:

https://avinashsangle.com/blog/claude-managed-agents-outcomes

If you're using Outcomes already, what's the rubric pattern that worked for you?

#ClaudeCode #ManagedAgents #AIEngineering #Anthropic #LLMOps
