I built a Mac dictation app, and the part I was surest about turned out to be wrong. I assumed a language model would clean up a transcript better than any rules I could write by hand. So I hand-annotated a set of my own dictations and scored the rules and two cloud models against them.

On everyday speech, the rules did better than both models. The models only came out ahead on edge cases. The more useful number came from the cost side: about a third of the model calls I looked at returned exactly what the rules had already produced, so the app now skips the model for very short dictations.

This is one person's speech and I haven't published a benchmark, so it is a direction, not a verdict. It's most useful if you ship anything that puts an LLM call behind a cheap baseline.
