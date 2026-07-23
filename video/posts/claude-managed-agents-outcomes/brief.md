# Topic Brief — Claude Managed Agents Outcomes: Auto-Grading Agent Work

**Source:** https://avinashsangle.com/blog/claude-managed-agents-outcomes
**Format suggested:** short
**Slug:** claude-managed-agents-outcomes

## Hook
A separate grader auto-grades agent work against a rubric, and the writer keeps revising until it passes.

## Key bullets
- Grader runs in fresh context, judges every artifact from scratch
- Feedback flows straight back to the writer as revision notes
- Up to 10 percent lift on .pptx and .docx generation
- No separate fee — just writer plus grader tokens per loop
- Markdown rubrics, max iterations capped at twenty

## Demoable code
```python
client.beta.sessions.events.send(
    session.id,
    events=[
        {
            "type": "user.define_outcome",
            "description": "Build a one-page business brief in .docx",
            "rubric": {"type": "file", "file_id": rubric.id},
            "max_iterations": 5,
        }
    ],
)
```

## Numbers to animate
- +10 percentage points overall task success lift
- +10.1% on .pptx generation
- +8.4% on .docx generation
- 80% agreement with human evaluators (LLM-judge research)
- 3 iterations — default `max_iterations`
- 5 iterations — recommended starting point
- 20 iterations — hard cap
- $0.08 per session-hour
- Launched May 6, 2026

## Canonical URL
https://avinashsangle.com/blog/claude-managed-agents-outcomes

## SEO seed (refined later by /video-script)
- Working title: Grader Auto-Grades Your AI Agent's Work, No Human Review
- Tags: claude-managed-agents, ai-agents, rubric-grading, llm-as-judge, anthropic, agent-automation, quality-assurance, ai-development

## News peg

**Release:** Claude Managed Agents — Outcomes (rubric-based auto-grading), 2026-05-06
**Source:** Anthropic API / Managed Agents — Outcomes feature launch (referenced in the canonical blog post; appeared in the same week as Anthropic's "Agents for financial services" announcement on 2026-05-05 and the higher-usage-limits / SpaceX compute post on 2026-05-06, both signalling an agent-productization wave).
**Why it pegs this topic:** The release IS the topic — Outcomes shipped six days before the video records. The +10% / +10.1% / +8.4% lift numbers in the brief come directly from the launch announcement. This is the textbook "release is the hook" pattern from AICodeKing / Fireship / Theo.
**How to use it in the script:** Lead the hook with the change itself — "Anthropic just shipped auto-grading for Managed Agents" or "Your agent now grades its own work against a rubric, and re-runs until it passes." Frame the episode as the new capability, not as evergreen exposition on LLM-as-judge. Anchor scene-1 on the launch, not on the broader judging concept.

(Releases checked but rejected as not directly relevant: Claude Code v2.1.x feature drops — plugins from .zip, worktree.baseRef, auto mode hard-deny, `xhigh` effort, `/usage`, Ultraplan preview, Computer Use in CLI; Opus 4.7 default model bump (2026-04-16); Amazon 5GW partnership; Claude Design by Anthropic Labs.)
