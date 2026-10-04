# Reddit Posts - Rules vs LLM for Dictation Cleanup

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py rules-vs-llm-dictation-cleanup --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

Flair lookup returned 401 for all three subs, so flair names come from the registry,
not verified IDs. Run `python scripts/list_reddit_flairs.py <sub>` once credentials are
refreshed. r/LocalLLaMA is hostile to closed-source marketing: expect possible removal.

---POST---
SUBREDDIT: LLMDevs
TITLE: A third of my LLM cleanup calls returned exactly what plain rules had already produced
FLAIR: Discussion
---BODY---
I built a Mac dictation app and put an LLM cleanup step behind it. Then I measured that step against a plain rules pass on my own dictations.

**Setup:** I hand-annotated a set of my real dictations (what I said, what I wanted written) and scored the offline rules and two cloud LLMs against those references.

**Result:** on everyday dictation the rules did better than both LLMs. The LLMs only came out ahead on edge cases. No accuracy numbers, because it's one person's speech and I haven't published a benchmark.

**The call-gating part is probably more useful to you.** In the LLM calls I examined, 50 of 146 returned exactly what the rules had already produced. Those 50 calls cost 63 seconds of wall-clock time and 16 thousand input tokens for an answer the app already had before it asked.

You can't know in advance which calls are redundant, but they cluster in short utterances. So there's a gate in front of the call: under 6 words, skip the model and use the rules output. In that corpus 11 of the 14 calls the gate would skip were redundant. The gate decides whether to call the model, never what the model returns.

**What I deleted:** my first gate also called the LLM if the rules had made a substantive edit. Measured, the LLM answer was redundant 30% of the time when the rules had changed the word sequence and 35% when they hadn't. A clause that doesn't separate the cases isn't worth the code. Word count was the only clause that held up.

Two details that bit me: the gate counts words in the raw transcript, not the rules output (a numeral pass can shorten the text below what was spoken), and a flag, path or dotted identifier counts as one word.

I'm the author of the app (Roundhand, Mac only). The full write-up is here: https://avinashsangle.com/blog/rules-vs-llm-dictation-cleanup

Happy to answer questions, and I'd like to hear if you've found a cheap signal that predicts redundant calls better than length.

---POST---
SUBREDDIT: LocalLLaMA
TITLE: On-device dictation cleanup: offline rules beat two cloud LLMs on my everyday speech
FLAIR: Discussion
---BODY---
I wanted to know whether an LLM was worth putting behind my dictation app's transcript, so I measured it against offline rules.

**Pipeline:** NVIDIA's Parakeet model does the speech recognition on the Mac, on the Neural Engine, through CoreML. Cleanup then runs either as deterministic rules on the Mac or as a cloud LLM that gets the transcript text, never the audio.

**Eval:** I hand-annotated my own real dictations and scored the offline rules and two cloud LLMs against them. On everyday speech the rules did better than both. The LLMs only won on edge cases. It's my speech, not a benchmark, so treat it as a direction.

**Why I think the rules win:** a model is free to be creative, and creativity is a defect when the job is to write down what someone said. A rule's failure mode is leaving a small thing unfixed. A model's failure mode is changing a word you meant.

So the free offline cleanup is the default and cloud cleanup is optional. For people who do turn it on, 50 of 146 of the calls I examined returned exactly what the rules had already produced, so under 6 words the model is skipped. That cost-saving gate is covered in the write-up.

Disclosure: I made the app. It's Mac only (Apple silicon, macOS 14 or later) and closed source, so this isn't a local-model release. I'm posting the measurement because the rules-first result might be useful to anyone building a local dictation pipeline.

Write-up: https://avinashsangle.com/blog/rules-vs-llm-dictation-cleanup

Happy to answer questions about the setup.

---POST---
SUBREDDIT: MLOps
TITLE: Skipping LLM calls that return what a cheap baseline already produced (146 calls, 50 redundant)
FLAIR: Discussion
---BODY---
A small production-cost finding from a dictation app I built, in case the pattern transfers.

The app cleans up speech transcripts with offline rules by default, with an optional cloud LLM step. I logged real LLM calls and compared each response to what the rules had already produced.

**Finding:** 50 of 146 calls returned exactly the rules output. About a third. In that sample those 50 calls cost 63 seconds of wall-clock time and 16 thousand input tokens.

**Fix:** a gate in front of the call. Under the default setting, a transcript of fewer than 6 words skips the model. In that corpus 11 of the 14 calls the gate would skip were redundant. The gate only decides whether to call the model, so anything that passes it produces exactly what it would have without one.

**Feature selection:** I started with three conditions (several sentences, long enough, rules made an edit). Measured individually, the "rules made an edit" clause carried no signal: the LLM answer was redundant 30% of the time when the rules changed the word sequence and 35% when they hadn't. I dropped it. Length was the only clause that held up.

Caveats: one person's dictations, and the threshold of 6 is what this sample supported. A larger reference set might move it, and I'd rather wait for one than argue for a number.

I'm the author of the app (Roundhand). The full write-up covers the eval and the gate: https://avinashsangle.com/blog/rules-vs-llm-dictation-cleanup

Happy to answer questions.
