DeepSeek open-sourced a coding agent last week that runs on your own machine, watches one GitHub repository, and opens pull requests when someone on its allowed list asks. Five setup guides appeared within three days. I wanted to know what I'd be trusting before installing it, so I read its docs and the code that decides who can reach it.

The allowed list only controls who can start a task. Once the agent opens a pull request, a comment from any GitHub user reaches the session doing the work, and that session runs commands without asking for approval. On a private repository that barely matters. On a public one, strangers can talk to it.

The post covers the full setup and the defaults I'd change first. It's for anyone thinking about running a self-hosted agent against a real repository.
