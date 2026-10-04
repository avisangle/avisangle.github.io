# Twitter/X Long-form Post - Rules vs LLM for Dictation Cleanup

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py rules-vs-llm-dictation-cleanup --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
I built a Mac dictation app, then tested whether an LLM or plain rules should clean up the transcript. On everyday speech, the rules won.

THE PROBLEM

Speech-to-text gives you what you said, not what you meant:

"um so move the call to Tuesday scratch that to Wednesday and let Sam know"

What you wanted: "Move the call to Wednesday and let Sam know."

WHAT I TESTED

I hand-annotated my own real dictations (what I said, what I wanted written) and scored offline rules and two cloud LLMs against them.

THE RESULT

Rules did better than both LLMs on everyday dictation. The LLMs only came out ahead on edge cases. No accuracy percentages: it's one person's speech and I haven't published a benchmark.

My read on why: a model is free to be creative, and creativity is a defect when the job is to write down what someone said. A rule's failure is leaving a small thing unfixed. A model's failure is changing a word you meant.

THE COST ANGLE

In the LLM calls I examined, 50 of 146 returned exactly what the rules had already produced. About a third. Those 50 calls cost 63 seconds of wall-clock time and 16 thousand input tokens for an answer the app already had.

THE GATE

The redundant calls cluster in short utterances. So a transcript under 6 words skips the model by default. 11 of the 14 calls that gate would skip were redundant.

My first gate design also had a clause for "did the rules make an edit". Measured: the LLM answer was redundant 30% of the time when the rules had changed the word sequence, and 35% of the time when they hadn't. No signal, so I deleted it. Word count was the only clause that held up.

WHAT I'D TAKE FROM IT

- Measure the model against the boring baseline
- Gate expensive calls on a cheap signal
- Keep the default free and local when it's also the better option

Full write-up. The app is Roundhand, and I built it with a lot of help from Claude Code:
https://avinashsangle.com/blog/rules-vs-llm-dictation-cleanup

Follow @avi_sangle
