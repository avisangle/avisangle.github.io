A new packaging standard for AI agents shipped on August 6, backed by Amazon, Cursor, Microsoft, OpenAI, Vercel and Google. Anthropic, which wrote both of the things being packaged, is not part of it. That was odd enough that I spent a morning building a plugin against the spec instead of reading the announcements.

The useful finding is that you don't have to choose sides. One repository can carry both manifests, the portable one at the root and the Claude Code one in its own directory, sharing a single skills folder. I ran the Claude Code validator against that layout and it passes, because each client ignores the manifest it doesn't recognise.

I also validated real manifests against the published JSON Schemas, which turned up two things the written spec does not prepare you for.
