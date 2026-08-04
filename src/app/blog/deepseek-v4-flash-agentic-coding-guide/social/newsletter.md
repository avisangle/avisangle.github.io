DeepSeek shipped a new build of V4 Flash on July 31 and changed nothing about the model. Same 284B architecture as the April preview, same 13B active parameters, no new pretraining. Only the post-training run was different, and DeepSWE jumped from 7.3 to 54.4 on those identical weights.

What I wanted to know was whether a Claude Code user should care. It turned out to be a routing question rather than a switching one. Flash beats GPT-5.6 Terra on short-horizon tool use and loses badly on long-horizon agent work, so it executes well and plans poorly. DeepSeek's own recommended config quietly agrees: it puts Flash in the subagent slot and keeps Pro in the main loop.

I also checked their benchmark table against the public leaderboard, which is where a few of the launch-week claims stop holding up.
