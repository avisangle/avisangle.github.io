Google's Gemini 4 Argon went generally available last week, and every launch post I read led with "half the price of Claude Opus." That's true until November 30. On December 1 the price doubles and lands exactly on Opus 5.5's per-token rate, so I spent a day finding out what the cheap window is actually good for.

The short version: Argon is strong on long multi-file changes and huge codebases, weaker on the terminal loop coding agents live in, and it writes a lot more output. On my own test, its highest thinking level cost seven to eight times more than the lowest and produced the same passing code.

If you use Claude Code, there's also a tested setup for running Argon inside it, including the one environment variable that stops every request from failing.
