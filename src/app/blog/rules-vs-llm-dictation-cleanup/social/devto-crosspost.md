# Dev.to + Hashnode Cross-post - Rules vs LLM for Dictation Cleanup

**Post date:** Day 2 (see schedule note in the report: memory says lag Dev.to by 2-3 weeks)
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py rules-vs-llm-dictation-cleanup --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py rules-vs-llm-dictation-cleanup --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Rules vs LLM for Dictation Cleanup: What I Measured on My Speech
DESCRIPTION: I built a Mac dictation app, hand-checked my own dictations, and compared offline rules to two cloud LLMs. On everyday speech the rules won.
TAGS: ai, llm, macos, productivity
CANONICAL_URL: https://avinashsangle.com/blog/rules-vs-llm-dictation-cleanup
COVER_IMAGE: https://avinashsangle.com/og-rules-vs-llm-dictation-cleanup.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/rules-vs-llm-dictation-cleanup).

I built [Roundhand](https://roundhand.dev), a Mac dictation app. This post is about one decision in it.

## The problem with raw speech-to-text

Speech recognition gives you what you said, not what you meant. A real dictation looks like this:

> um so move the call to Tuesday scratch that to Wednesday and let Sam know

What you wanted to land in the message is "Move the call to Wednesday and let Sam know." Between those two strings sit filler words, a restarted sentence and missing capitals and punctuation. Someone has to fix that, and if it is you, you have not saved much time over typing.

The usual fix in 2026 is to hand the transcript to a language model and ask it to tidy up. I assumed that would be better than anything I could write by hand. I built both paths into Roundhand, then measured them instead of trusting the assumption.

## What I built

Roundhand is a menu-bar dictation app for Apple silicon Macs. You hold a key, talk, let go, and the text lands at your cursor. It writes for the app that has focus: a short message in Slack, a greeting and a sign-off on their own lines in Mail, a list in Notes, one line with no trailing full stop in a terminal.

Two things happen between your voice and the text field:

1. Recognition. NVIDIA's Parakeet model turns audio into a transcript. This runs on your Mac, on the Neural Engine, through CoreML. Speech is recognised on your Mac. Dictation audio is never uploaded or saved to disk.
2. Cleanup. The transcript is cleaned and shaped for the destination app. This is the step the rest of this post is about.

Here's a 60-second demo: https://www.youtube.com/watch?v=DUsTHgtK1wI

Roundhand is free to download, with no account needed. It needs an Apple silicon Mac on macOS 14 or later. [Download Roundhand for Mac](https://roundhand.dev).

## Two ways to do dictation cleanup

Rules. A set of deterministic rules that run on the Mac. They drop fillers like "um" and "uh", keep the version you meant when you restart a sentence ("Tuesday, scratch that, Wednesday" becomes Wednesday), and fix capitals and punctuation. No network, no cost per use, and the same input always produces the same output.

An LLM. The transcript text, never the audio, goes to a language model that rewrites it more freely. It can restructure a rambling sentence in a way fixed rules cannot. It costs tokens and a network round trip on every call, and it can change your wording in ways you did not ask for.

I expected the LLM to win. It is the more capable tool.

## Rules vs LLM: the measurement

I hand-annotated a set of my own real dictations: what I said, and what I wanted written. Then I scored the offline rules and two cloud LLMs against those references.

The result: on everyday dictation, the rules did better than both LLMs. The LLMs only came out ahead on edge cases.

Two honest limits on that. The set is my own speech, so it reflects how I talk, not how everyone talks. And I am reporting the direction of the result, not a headline accuracy number, because I have not published a benchmark and will not invent one. If your dictation is mostly long, rambling prose, your results may differ.

Why would rules win on ordinary speech? A language model is free to be creative, and creativity is a defect when the job is to write down what someone said. Rules do the narrow job and stop. The failure mode of a rule is leaving a small thing unfixed. The failure mode of a model is changing a word you meant.

So the free, offline cleanup is the default in Roundhand. It is not a fallback. Cloud cleanup is an optional extra for people who want freer rewording, either on a managed plan or with your own API key. Pricing details are on the [pricing page](https://roundhand.dev/pricing); dictation and the offline cleanup are free with no time or word limit.

## How the gate works (the cost angle)

If you do turn cloud cleanup on, there is a second question: should every dictation make the round trip?

I measured that too. Across the set of real LLM calls I examined, 50 of 146 returned exactly what the offline rules had already produced. That is about a third of the calls. In that sample those 50 calls cost 63 seconds of wall-clock time and 16 thousand input tokens for an answer the app already had before it asked.

You cannot tell in advance which calls will be redundant. But you can find where they cluster, and it is short utterances. So Roundhand has a gate in front of the LLM call. Under the default setting, a transcript of fewer than 6 words skips the model and uses the rules output directly. In that corpus, 11 of the 14 calls the gate would skip returned an answer the rules already had.

Counting words is deliberately unclever. My first design was richer: call the LLM if the transcript had several sentences, or was long enough, or if the rules had made a substantive edit. When I measured it, the "rules made an edit" clause carried no signal. The LLM's answer was redundant 30% of the time when the rules had changed the word sequence, and 35% of the time when they had not. A condition that does not separate the two cases is not worth the code, so it went. Length was the only clause that held up.

Two details that matter in practice:

- The gate counts what you said, not what the rules produced. If the numeral pass shortens "or twenty one" into "or-21", the text gets shorter than what you spoke. Counting the shortened text could deny a real sentence its cleanup for a word it never dropped. So the gate counts words in the raw transcript.
- A flag, a path or a dotted identifier counts as one word. That keeps a short terminal command short, which is how the speaker thinks of it.

The gate decides whether to call the model, never what the model returns. A dictation that passes the gate produces exactly what it would have without one.

The threshold is 6 because the measurement supported 6. Raising it would skip more calls and also start changing output on calls I have no way to judge yet. I would rather wait for a bigger reference set than argue for a number.

## A smaller example of the same instinct

Developers dictate ticket keys. Speech recognition turns "OR 21" into "or twenty one", which is useless in a commit message. Roundhand has a narrow rule: when a spoken number from zero to 999 comes right after the word "or", it becomes digits, so "or twenty one" is written "or-21". A bare number in ordinary prose is left alone. It is a few dozen lines of code, no model, and it never guesses.

That is the pattern I keep landing on. If the job is well defined, write the rule. Use the model where the rules run out.

## What I would take from this

- Measure the model against the boring baseline. I would not have found that the baseline was better if I had shipped the LLM path on faith.
- Gate expensive calls on a cheap signal. One measured clause beat three plausible ones.
- Keep the default free and local when it is also the better option. That turned out to be the case here, and it is a good place for a default to be.

## FAQ

### Does Roundhand send my audio to the cloud?

Speech is recognised on your Mac. Dictation audio is never uploaded or saved to disk. If you turn on cloud cleanup, the transcript text, never the audio, goes to the language model provider. In the default mode, after the one-time model download, dictation and cleanup run on your Mac, apart from update checks.

### Is rules-based cleanup better than an LLM?

On my own hand-checked everyday dictations, the rules did better than both cloud LLMs I tested. The LLMs came out ahead on edge cases. It is one person's dataset, so treat it as a direction and test your own speech.

### Which Macs does it run on?

Apple silicon Macs on macOS 14 or later. A Windows version is in development.

### Is it free?

Download is free with no account needed, and dictation with the offline cleanup stays free. See the [pricing page](https://roundhand.dev/pricing) for what the optional cloud cleanup adds.

### Will it type into password fields?

No. It will not read or type into password fields.

### Is it open source?

No.

## Try Roundhand

If you talk to your Mac more than you type, give it a day. Hold a key, say a sentence with an "um" and a "scratch that" in it, and see what lands.

[Download Roundhand for Mac](https://roundhand.dev)

Or with Homebrew: `brew install --cask avisangle/roundhand/roundhand`

I built Roundhand solo, with a lot of help from Claude Code. I would most like to hear which technical words it mishears and which apps misbehave when it inserts text. You can reach me through the [blog](https://avinashsangle.com/blog).

Privacy details are at [roundhand.dev/privacy](https://roundhand.dev/privacy).
