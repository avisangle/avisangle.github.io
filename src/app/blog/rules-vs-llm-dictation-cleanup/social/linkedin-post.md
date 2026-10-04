# LinkedIn Post - Rules vs LLM for Dictation Cleanup

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py rules-vs-llm-dictation-cleanup --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
I assumed a language model would clean up my dictation better than any rules I could write by hand. So I built both into a Mac dictation app I made, and measured them against my own speech.

I hand-annotated a set of my real dictations: what I said, and what I wanted written. Then I scored offline rules and two cloud LLMs against those references.

What came out:

- On everyday dictation, the rules did better than both LLMs. The LLMs only came out ahead on edge cases.
- In the LLM calls I examined, 50 of 146 returned exactly what the rules had already produced. About a third.
- Those 50 calls cost 63 seconds of wall-clock time and 16 thousand input tokens for an answer the app already had.
- So the app skips the LLM for transcripts under 6 words by default. 11 of the 14 calls that gate would skip were redundant.

One more result I liked: my first gate design had a clause for "did the rules make an edit". When I measured it, the LLM answer was redundant 30% of the time when the rules had changed the word sequence and 35% when they hadn't. No signal, so I deleted the clause. Word count was the only one that held up.

The limits are real. It's my own speech, not everyone's, and I'm reporting a direction, not an accuracy number, because I haven't published a benchmark. If your dictation is mostly long, rambling prose, your results may differ.

The app is Roundhand, and I built it solo with a lot of help from Claude Code. The post covers the measurement and how the gate works:
https://avinashsangle.com/blog/rules-vs-llm-dictation-cleanup

When did you last measure a model against the boring baseline before shipping it?

#LLM #AIEngineering #MacOS #SpeechToText
