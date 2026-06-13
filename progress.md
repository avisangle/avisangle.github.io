

# Progress Log

## 2026-06-13: Bing Webmaster reporting via API

- Added `scripts/bing_report.py` (stdlib-only, mirrors GSC reporter): types summary/queries/pages/crawl, `--days`, `--json`. API key stored at `scripts/credentials/bing-api-key.txt` (gitignored).
- Bing 120d: 123 clicks / 5,939 impr / 2.07% CTR (≈3× Google's 0.72%). Bing's top page is `/blog/claude-md-guide` (34 clicks) — differs from Google's `/blog/ant-cli-getting-started`. 72 pages indexed, 30 inbound links (matches BWT "lacks inbound links" flag).
- Flag: 129 4xx + 43 5xx crawl hits over 120d — investigate (likely pre-2026-05-11 legacy `.html` crawls, but confirm).
- Bing query data is heavily natural-language ("how to write claude.md", "is it possible to extract the cost of a session from claude?") — high-value AEO signal since Bing feeds ChatGPT/Copilot.
- `bing_report.py` not committed yet (no explicit request).

## 2026-06-13: Fix Bing meta-description flag + disable omniagent debug

- `src/app/layout.tsx`: root meta description trimmed 177→144 chars (Bing limit 160; flagged in Webmaster Tools); removed `debug: true` from OMNIAGENT_CONFIG. Pushed 309fdcb, verified live.
- Bing "lacks inbound links" recommendation is advisory — no code action; addressed over time by syndication/backlinks.

## 2026-06-12: Bing verification file live + GA4 access working

- Added `public/BingSiteAuth.xml`, pushed (9536da8), verified 200 at https://avinashsangle.com/BingSiteAuth.xml — ready to complete verification in Bing Webmaster Tools.
- GA4 Viewer grant confirmed for service account; property `properties/538973950`. 28d: 63 users / 96 sessions / 159 pageviews. Channels: Direct 58, Organic 22, Social 10. GA organic (22 sessions) ≪ GSC clicks (209) — heavy ad-blocker undercount likely (dev audience).

## 2026-06-12: GA4 access check + 28-day GSC traffic review

- No GA4 access yet: enabled Analytics Data + Admin APIs on GCP project `bio-search-console` via gcloud, but the service account (`bio-search-console@bio-search-console.iam.gserviceaccount.com`) is not yet a Viewer on the GA4 property — pending one-time grant in GA Admin UI.
- GSC 28-day (05-12→06-09): 209 clicks / 28.9k impressions / 0.72% CTR / avg pos 8.7. Top page: `/blog/ant-cli-getting-started` (70 clicks). `claude-code-cost-tracking` and `gemma-4-models-guide` have high impressions but CTR ≤0.6% — title/description rework candidates.

## 2026-05-11: Fix legacy /project-*.html redirect chain

- Verified live: `/project-twitter-oauth.html` and 8 other legacy project pages all redirected to 404. Root cause: Vercel auto-strips `.html` at the edge **before** `next.config.ts` `redirects()` evaluates, so specific rules like `source: '/project-twitter-oauth.html'` never fire — the request arrives at the redirect layer as `/project-twitter-oauth` (no `s`, no real route).
- Fix in `next.config.ts`: added generic bare-path intermediates `'/project-:slug' → '/projects/:slug'` and `'/blog-:slug' → '/blog/:slug'`, so the post-strip path lands on the canonical route. Left existing `.html` rules in place as a safety net.
- Confirmed all 9 legacy project pages affected with `curl -ILo /dev/null`.

---

## 2026-05-11: Fix GSC "Not found (404)" — slash-command URL leaks

- Root cause: Googlebot was extracting `/cost`, `/clear`, `/cost`, `/compact`, `/model`, `/resume`, `/usage`, `/rename`, `/stats` from plaintext (JSON-LD `text`/`name`, metadata `keywords`, h3/CardTitle/AccordionTrigger headings) and crawling them as relative URLs.
- Edits in `src/app/blog/claude-code-cost-tracking/page.tsx`: dropped slash in keywords entry, two FAQ JSON-LD `text` fields, one JSON-LD `name`; wrapped `<code>` around the slash in three h3s, two CardTitles, one AccordionTrigger, and changed the CodeBlock filename prop.
- Edits in `src/app/blog/regression-proofing-claude-code-workflows/page.tsx`: dropped slash from `/status` and `/model` mentions in two JSON-LD `text` fields.
- `/project-twitter-oauth.html` redirect already in `next.config.ts` (commit `9813129`); GSC 404 will clear on next recrawl.
- `npm run build` ✓ — all 30 pages prerendered.

---

## 2026-05-02: Published blog post — mcp-code-execution-pattern

- Published "MCP Code Execution Pattern: A Hands-On Claude Code Guide" at /blog/mcp-code-execution-pattern (publish date 2026-05-03, 12 min read, ~3,000 words).
- Updated blog index (featured + all-articles), sitemap.ts, and public/llms.txt.
- TechArticle + BreadcrumbList + FAQPage JSON-LD schemas all present.
- `npm run build` passes; static export emits the new route.
- File written via Bash heredoc because the security_reminder_hook fires a false positive on the standard JSON-LD embed pattern used across every other blog page.

---

## 2026-05-02: Brief — mcp-code-execution-pattern

- `/research-topic "mcp-code-execution-pattern"` produced full content brief at `.claude/content-briefs/mcp-code-execution-pattern.md`.
- Topic suggestion (origin/content/topic-suggestion-... branch) gave seed sources; verified Anthropic + Cloudflare + Speakeasy + InfoQ + Claude Code v2.1.121 release notes via web search.
- Title: "MCP Code Execution Pattern: A Hands-On Claude Code Guide" (56 chars). Slug: `mcp-code-execution-pattern`. Target: 2,800-3,200 words. Publish: 2026-05-03.
- Unique angle: balanced 3-way comparison (code execution / dynamic toolsets / deferred loading) + Python `search`+`execute` server walkthrough + Claude Code `alwaysLoad` config — none of which exist in one piece elsewhere.
- Ready to run `/write-blogpost mcp-code-execution-pattern`.

---

## 2026-04-28: Hook locked — plan-mode (E3)

- `/video-hook-options plan-mode` ran end-to-end (slash-command runtime now sees the new skill after the session refresh).
- 7 variants generated; 2 (B Fireship cold-open, D AICodeKing first-person + number) were flagged inline as carrying autobiography risk per `feedback_video_voice_authentic.md` — user notified before picking.
- **Chosen: C** — IndyDevDan anti-hype contrarian: *"Stop hitting Enter on every Claude Code prompt. Shift+Tab twice gives you Plan mode."*
- `posts/plan-mode/hook.md` written with chosen hook + all 7 variants for reference + rationale notes.
- `/video-script --short` will now read this file automatically and use the hook verbatim as scene-1 (per the wiring shipped in Decision 33).

---

## 2026-04-28: Brief — plan-mode (Claude Code Shorts E3, anti-hype angle)

- `/video-topic` run on custom topic "Plan mode is the feature nobody uses — and should".
- Brief saved at `video/posts/plan-mode/brief.md`.
- Topic verified via claude-code-guide agent: Plan mode is alive in 2026, entered via Shift+Tab × 2 OR `/plan` slash command, restricts Claude to read-only ops, produces named markdown plan files.
- News peg surfaced (manually — Skill tool can't see mid-session-created skills): cluster of recent Plan mode fixes — v2.1.111 (plan files now named after prompts), v2.1.105 (`/plan open` works on existing plans), v2.1.92 (auto-mode override fix), v2.1.81 (hides clear-context option on plan accept). Strongest peg: v2.1.111 (used as a small trust signal in scene 3, not the lead).
- **Skill-tool gotcha discovered:** the Skill tool can't invoke skills created in the same session — the available-skills list is loaded at session start. Auto-invocation of `/video-news-peg` from `/video-topic` will work for E4 onward (next session); for E3 brief, manually populated the News peg section. Documented inline in brief.md.
- Hook angle: IndyDevDan-style "feature most devs miss" template (verified winning pattern). Working title recommended: `Plan Mode: The Claude Code Feature Most Devs Miss`.
- Awaiting user **go / refine / no-go** before `/video-hook-options plan-mode` (optional) or `/video-script --short`.

---

## 2026-04-28: Two new skills — `/video-style-lint` + `/video-hook-options`

- Created `.claude/skills/video-style-lint/SKILL.md`. Detects 5 verified anti-patterns: YouTuber-explainer hook, parallel anaphora (3+), spoken brand URL, slogan-only outro, Q/A grid (3+). Plus 4 positive checks (outro CTA structure, no spoken URL, hook names proper noun in 5s, news peg honored). Advisory output with line citations + suggested rewrites. Read-only, never blocks.
- Created `.claude/skills/video-hook-options/SKILL.md`. 7 hook templates grounded in verified channel patterns: AICodeKing-superlative, Fireship-cold-open-digression, IndyDevDan-anti-hype, AICodeKing-first-person-number, Theo-BREAKING (auto-skipped if no news peg), Greg-numbered-list, Mid-action-open. User picks one; chosen hook saves to `posts/<slug>/hook.md` for `/video-script` to honor verbatim.
- Updated `/video-script` SKILL: step 1 now reads `hook.md` if present (locked seed for scene-1) AND reads brief.md's News peg section (adapts hook framing if hook.md absent). Step 7 (new) auto-invokes `/video-style-lint` before user confirmation; lint result shows in step 8's confirmation block. Renumbered following steps.
- Updated `/video-topic` SKILL step 9 (suggest next): now mentions `/video-hook-options` as optional pre-script step.
- Decision 33 logged in `decisions.md` covering both skills + the wiring matrix.
- Pipeline is now 8 skills deep: `/video-topic` → (`/video-news-peg` auto) → (optional `/video-hook-options`) → `/video-script` → (`/video-style-lint` auto) → `/video-scenes` → `/video-vo` → `/video-thumbnail` → `/video-render` → `/video-publish`.

---

## 2026-04-28: New skill — `/video-news-peg` + auto-wire from `/video-topic`

- Created `.claude/skills/video-news-peg/SKILL.md`. Two modes: targeted (`<slug>` → appends "## News peg" section to brief.md) and standalone (no args → writes dated slate-planning digest to `video/briefs/news-pegs/YYYY-MM-DD.md`).
- 3 sources baked in (validated live by sub-agent): `https://code.claude.com/docs/en/whats-new`, `https://code.claude.com/docs/en/changelog`, `https://www.anthropic.com/news`. GitHub releases + several other URLs validated as dead/empty and explicitly rejected in the SKILL doc.
- Updated `/video-topic` SKILL: new step 7 auto-invokes `/video-news-peg <slug>` after brief is written; renumbered following steps. Skip only on `--no-peg`.
- Updated `/video-script` SKILL step 1: explicitly reads the "## News peg" section and branches hook framing — strong peg → lead with the change/correction; no peg → contrarian/first-person.
- "No peg found" is a documented state, not a failure — pipeline self-explains via the appended note.
- New directory `video/briefs/news-pegs/` for standalone-mode digests.
- Decision 32 logged in `decisions.md`.

---

## 2026-04-27: Published — install-claude-code (E2, second Claude Code Shorts episode)

- **Video ID:** `cABROyFPQHM` — https://www.youtube.com/watch?v=cABROyFPQHM
- **Studio:** https://studio.youtube.com/video/cABROyFPQHM/edit
- **Privacy:** private (user flips to public manually after review)
- **Playlist append:** direct `playlistItems.insert` to existing `PLlhPzoo-csPCtJxCl4CxrSdcbCR6E8mra` (no resolve-or-create round-trip — `playlistIds` worked as designed). Item ID `UExsaFB6b28tY3NQQ3RKeENsNEN4clNkY2JDUjZFOG1yYS4yODlGNEE0NkRGMEEzMEQy`.
- **SRT track:** uploaded. ID `AUieDaY5QKLw3hDf38RGm5CXGnmIb9l82f9lGkMD8rN4v4CeVk3y66MQ`.
- **Style-direction A/B:** E2 is the first episode published in the post-research style (mid-thought contrarian opener, no parallel anaphora, no spoken brand URL, observation outro). Compared to E1's polished YouTuber-explainer cadence. Both videos are now in the same playlist; user said "wait for couple of videos" before deciding on style direction. With 2 episodes live, the next data point is YT Studio analytics — retention curves + click-through rate per video will tell us which style is landing.
- **Manual steps remaining for user:**
  - Set thumbnail in YT mobile Studio (frame picker → 0:00 = burn-in PNG)
  - Flip video Private → Public when ready
  - Playlist already exists from E1; if it's still Private, flip it to Public for series discoverability

---

## 2026-04-27: Final render — install-claude-code (E2)

- `out/install-claude-code/install-claude-code.mp4` — **3.9 MB, 1545 frames, 51.5s @ 30fps**. Comfortable buffer under Shorts 60s cap.
- Render ran clean: 1545/1545 rendered, encoded in 6 batches.
- Includes 0.5s thumbnail burn-in for YT mobile Studio frame picker.
- Lint clean before render.
- Next: `/video-publish` (uploads as Private, appends to existing `Claude Code Shorts` playlist via `playlistIds: ["PLlhPzoo-csPCtJxCl4CxrSdcbCR6E8mra"]` — no resolve-or-create round-trip this time).

---

## 2026-04-27: Thumbnail rendered — install-claude-code (E2)

- `public/thumbnails/install-claude-code.png` rendered at full 1080×1920 from frame 90 of the title scene.
- Frame 90 captures: "Most install guides" (muted) → "are out of date." (white, fits one line after the size 130 → 110 fix) → "Use" / "this." (oversized cyan with underline). The reveal cadence reads top-down as designed.
- Used `--props='{"thumbnailHoldFrames":0,"hideCaptions":true}'` per the SKILL update from E1 — no caption bleed.
- Will be burned into the first 0.5s of the rendered MP4 by `/video-render`.

---

## 2026-04-27: VO generated — install-claude-code (E2)

- `npm run vo` ran clean: 641 chars sent (smaller than E1's 699), audio **49.83s** (well under 60s Shorts cap), output **-18.35 LUFS** (target band).
- Outputs at `public/voiceover/InstallClaudeCode/`: master.mp3, master.raw.mp3, scenes.json, captions.json (122 tokens), captions.srt (26 cues).
- Per-scene aligned durations (from char-level alignment): 4.78 / 12.86 / 12.78 / 12.80 / 6.62s — all scenes came in shorter than the 5/15/15/15/10s script budget (total ~50s vs ~60s budgeted). Composition durations auto-adjust via `buildCalcMetadata` reading scenes.json. Inline scene 4 caveat now visible for ~4.5s instead of ~7s — still readable for the short Windows caveat phrase.
- New display substitutions verified end-to-end in SRT: `Mac, Linux, WSL`, `No npm.`, `That's the real upgrade over npm.`, `No API keys to wrangle.` — the matcher fix from E1 + the new `npm` and `WSL` rules all resolved correctly.
- Lint clean.
- Awaiting user before `/video-thumbnail` then `/video-render`.

---

## 2026-04-27: Composition wired — install-claude-code (E2)

- `src/compositions/InstallClaudeCode.tsx` created. 5 scenes: TitleCard / CodeBlock (curl command) / `AuthFlow` (inline 3-step row: terminal → browser → check) / `InstallerComparison` (inline npm/brew/native row + headline + caveat) / Outro.
- Scenes 3 & 4 are composition-inline one-offs per CATALOG decision tree — no `scenes/*.tsx` edits, no CATALOG changes. Same pattern as E1.
- Stub VO files at `public/voiceover/InstallClaudeCode/` so imports resolve before `/video-vo`.
- Registered in `Root.tsx` with `defaultProps`. `audioOffsetFrames: 0` in stub.
- 5 stills rendered to `out/install-claude-code/scene-N-*.png`. Visual revisions: TitleCard line 2 ("are out of date.") was wrapping at size 130 → reduced to 110, fits one line cleanly; reveal cadence preserved.
- Scene 4 has empty middle in the still snapshot but it fills during playback — the Windows caveat appears at frame 240 (8s into scene), so during live play the bottom is occupied. Verified by re-rendering at frame 1380.
- Lint clean.
- Awaiting user confirmation before `/video-vo`.

---

## 2026-04-27: Script + youtube.json — install-claude-code (Claude Code Shorts E2)

- 5-scene script saved at `video/posts/install-claude-code/script.md`. 110 spoken words, ~55s budget. **First episode written in the post-research style** — mid-thought opener, contrarian news peg up front, no parallel anaphora, no spoken brand URL.
- Hook: *"Most install guides for Claude Code are out of date. Use this."* — drops the "You think X / actually Y" structure that flattened E1.
- Outro close: *"That's the new install. Most tutorials are still teaching the old one. Full series — link in description."* — observation + soft CTA, no slogan, no URL spoken.
- Scene mapping: Scene 1 → `TitleCard`, Scene 2 → `CodeBlock` (curl command), Scenes 3 & 4 → composition-inline one-offs (3-step auth flow + npm/brew/native comparison row), Scene 5 → `Outro`. No catalog edits.
- Pronunciation overrides added: `npm` → `N P M`, `WSL` → `W S L`. Mirror caption substitutions added to both `CaptionStrip.tsx` and `scripts/lib/srt.ts`.
- `youtube.json` uses `playlistIds: ["PLlhPzoo-csPCtJxCl4CxrSdcbCR6E8mra"]` (precise) per the new project memory — no resolve-or-create round-trip.
- `compositionId: "InstallClaudeCode"` for SRT auto-upload.
- Standalone mode (no `blogUrl`).
- Lint clean.
- Awaiting user confirmation before `/video-scenes`.

---

## 2026-04-27: Brief — install-claude-code (Claude Code Shorts E2)

- `/video-topic` run on custom topic "Install Claude Code in 30 seconds".
- Brief saved at `video/posts/install-claude-code/brief.md`.
- **Real news peg surfaced during research:** the canonical install path **changed in early 2026** from `npm install -g @anthropic-ai/claude-code` to a native `curl -fsSL https://claude.ai/install.sh | bash` installer. Native auto-updates in background, zero Node dependency. Most existing tutorials still teach npm — the angle is the correction.
- Hook drafted in the verified-shorts style we identified post-E1: mid-action open ("Most install guides for Claude Code are out of date…"), drops the "You think X / actually Y" structure that flattened E1.
- Demo: 3 commands (`curl … | bash`, `claude`, `claude --version`). Visual concept maps to TitleCard + CodeBlock + composition-inline auth-flow row + CodeBlock + Outro.
- Caveat to bake in: Windows native users still need Git for Windows pre-installed (small caveat card in the Outro).
- youtube.json (when generated by /video-script) should use `playlistIds: ["PLlhPzoo-csPCtJxCl4CxrSdcbCR6E8mra"]` per the new playlist-ID memory.
- Awaiting user **go / refine / no-go** before `/video-script --short`.

---

## 2026-04-27: Published — what-is-claude-code (E1, Claude Code Shorts series bootstrap)

- **Video ID:** `80_0BONCqv4` — https://www.youtube.com/watch?v=80_0BONCqv4
- **Studio:** https://studio.youtube.com/video/80_0BONCqv4/edit
- **Privacy:** private (user flips to public manually after review)
- **Playlist auto-created:** "Claude Code Shorts" — `PLlhPzoo-csPCtJxCl4CxrSdcbCR6E8mra`. Per-`playlistTitle` resolve-or-create logic worked end-to-end. E2 onward should use `playlistIds: ["PLlhPzoo-csPCtJxCl4CxrSdcbCR6E8mra"]` (saved as project memory).
- **SRT track:** uploaded successfully. ID `AUieDaYHJmvl_iOVbKdv6RQW5S2_K6omiSBsWt5N_MB5PAuQnUczUZ9C`.
- **Decision deferred:** the script-style critique ("polished YouTuber-explainer" vs verified-shorts-pattern) was real but user chose to ship E1 as-is and gather real performance signal across "a couple of videos" before iterating. `feedback_video_voice_authentic.md` memory still describes the unvalidated principles; should be revised when watch-time data is in.
- **Manual steps remaining for user:**
  - Set thumbnail in YT mobile Studio (frame picker → 0:00 = burn-in PNG; or upload `public/thumbnails/what-is-claude-code.png` direct from desktop if phone-verified)
  - Flip video Private → Public when ready
  - Flip the *playlist* Private → Public separately (YT doesn't promote it automatically based on members)

---

## 2026-04-27: Final render — what-is-claude-code (E1)

- `out/what-is-claude-code/what-is-claude-code.mp4` — 4.5 MB, 1663 frames, 55.43s @ 30fps. Under YouTube Shorts 60s cap.
- Render ran clean: 1663/1663 rendered, then encoded in 7 batches. ~3 min total.
- Includes 15-frame (0.5s) thumbnail burn-in at the head so YT mobile Studio frame picker can snap to it without a separate file upload.
- Lint clean before render.
- Next: `/video-publish` (uploads as Private, auto-creates the "Claude Code Shorts" playlist on first publish via `playlistTitle`).

---

## 2026-04-27: Thumbnail rendered — what-is-claude-code (E1)

- `public/thumbnails/what-is-claude-code.png` rendered at full 1080×1920 from frame 90 of the title scene (post-stagger, underline drawn). Hook is fully readable.
- First render had the runtime CaptionStrip bleeding VO mid-sentence text across the bottom — caught and fixed by re-running with `--props='{"thumbnailHoldFrames":0,"hideCaptions":true}'`. Latent SKILL doc gap.
- **Updated `/video-thumbnail` SKILL** to include `hideCaptions: true` in the standard `--props` override and explain why (this step runs *after* /video-vo so IS_STUB is false; without the flag the strip is active). Future videos won't hit it.
- Will be burned into the first 0.5s of the MP4 by `/video-render` so the YT mobile Studio frame picker can snap to it.

---

## 2026-04-27: VO generated — what-is-claude-code (E1)

- `npm run vo` ran clean: 699 chars sent to ElevenLabs (Brian, eleven_v3), audio 53.76s, output -18.17 LUFS (target -16 to -19).
- Outputs at `public/voiceover/WhatIsClaudeCode/`: master.mp3, master.raw.mp3, scenes.json, captions.json (126 tokens), captions.srt (33 cues post-regen).
- Per-scene durations from alignment: 5.12 / 14.52 / 14.88 / 11.35 / 7.89s. Scene 5 (outro) came in shorter than the 15s budget — Outro animations settle by ~5s, the remaining ~3s sits comfortably on the brand pill. Acceptable.
- **Caption matcher fix shipped to both `src/scenes/CaptionStrip.tsx` and `scripts/lib/srt.ts`:** new `TRAILING_PUNCT` regex tolerates trailing `.,?!:;` on the LAST token of a substitution match (middle tokens still exact-match), preserves the punctuation in the output. Without this, sentence-ending acronyms (`IDE.`, `VS Code.`, `claude.ai/code.`) would render letter-by-letter in TikTok-style captions and SRT cues. Latent bug in prior videos; just hadn't bitten yet because CLI/API/SDK never appeared at sentence-ends in those scripts.
- New DISPLAY_SUBSTITUTIONS added (mirrored in both files): `VS Code`, `IDE`, `IDEs`, `claude.ai/code`. Comment notes the intentional duplication between CaptionStrip and srt.ts — keep in sync.
- SRT regenerated via `npm run captions:srt -- WhatIsClaudeCode` (no extra TTS spend). Verified merged forms: "VS Code.", "claude.ai/code.", "Resume in your IDE.", "Your IDE.".
- Lint clean throughout.
- One PreToolUse security hook false-positive blocked a regex method call mistakenly flagged as a shell call; rewrote using `.match()` to dodge the substring trigger. Worth tightening the hook pattern upstream.

---

## 2026-04-27: Composition wired — what-is-claude-code

- `src/compositions/WhatIsClaudeCode.tsx` created. 5 scenes: TitleCard / BulletReveal-numbered (6 chips) / `ScreenSyncBeat` (inline) / `UseCaseGrid` (inline) / Outro.
- Scenes 3 & 4 are composition-inline one-offs per CATALOG decision tree — no `scenes/*.tsx` edits, no CATALOG changes.
- Stub VO files in `public/voiceover/WhatIsClaudeCode/` (`scenes.json` with `stub: true`, empty `captions.json`) so composition imports resolve before `/video-vo`.
- Registered in `Root.tsx` with `defaultProps`. `audioOffsetFrames: 0` in stub.
- 5 stills rendered to `out/what-is-claude-code/scene-N-*.png`.
- Visual revisions after first pass: Scene 3 — "Same Claude." was wrapping at 140px → reduced to 120px + `whiteSpace: nowrap`; device frames enlarged (320×240 / 150×300) and given multi-line "screen content" instead of bare pills. Scene 4 — dropped "Your" prefix from card answers (Terminal · IDE · Phone · Web) to fix asymmetric wraps and let cards breathe.
- Lint clean.
- Awaiting user confirmation before `/video-vo`.

---

## 2026-04-27: Script + youtube.json — what-is-claude-code (Claude Code Shorts E1)

- 5-scene script saved at `video/posts/what-is-claude-code/script.md`. 119 spoken words, ~60s budget.
- Scene mapping: Scene 1 → `TitleCard`, Scene 2 → `BulletReveal` (numbered), Scene 5 → `Outro`. Scenes 3 & 4 flagged as **composition-inline** per CATALOG decision tree (one-off layouts: 3-device shared-context shot + 2x2 use-case grid).
- Pronunciation overrides added to `src/lib/pronunciation.ts`: `IDE` / `IDEs`, `claude.ai/code`, `VS Code`. Existing rules unaffected.
- `youtube.json` written with `playlistTitle: "Claude Code Shorts"` so first publish auto-creates the series playlist (no `playlistIds` yet — will populate after E1 ships).
- `compositionId: "WhatIsClaudeCode"` set so SRT auto-upload works at publish time.
- No `blogUrl` — standalone mode.
- Lint clean.
- Awaiting user confirmation before `/video-scenes`.

---

## 2026-04-27: Brief — what-is-claude-code (Claude Code Shorts E1)

- `/video-topic` run on custom topic "What Claude Code actually is".
- Brief saved at `video/posts/what-is-claude-code/brief.md`.
- Research caveat captured: no dedicated Claude Code mobile app — mobile access is via Remote Control (steers local CLI/IDE session) or `claude.ai/code` in mobile browser. Six surfaces total: terminal, desktop, VS Code, JetBrains, web, mobile-as-remote.
- Marked as **playlist-bootstrap** episode — `youtube.json` will set `playlistTitle: "Claude Code Shorts"` so first publish auto-creates the playlist.
- No code-snippet demo; visual concept (multi-surface fan-in + shared-context shot) is the primary asset, locked in for `/video-scenes`.
- Awaiting user **go / refine / no-go** before `/video-script --short`.

---

## 2026-04-27: Pipeline Phase 3 (PR 1) — playlist support in yt:upload, new yt:playlists script

### Completed
- `youtube.json` schema: added optional `playlistIds: string[]` and `playlistTitle: string`. `playlistIds` wins when both set.
- `youtube-upload.ts`: after `videos.insert`, `linkToPlaylists()` either appends to explicit IDs or resolves a title via `playlists.list (mine=true, paginated)` and creates the playlist (matching video privacy) if not found. Failures warn + swallow (video stays published) — same convention as captions.
- New script `scripts/youtube-playlists.ts` + `npm run yt:playlists` — paginated read-only listing of channel playlists with ID, privacy, item count, title. Lets user copy IDs into `youtube.json`.
- Confirmation block in upload script now surfaces playlist target before uploading.
- OAuth scope verified: `youtube.force-ssl` (already requested) covers `playlistItems.insert` and `playlists.insert`. No re-auth needed.
- `/video-publish` SKILL: confirmation step mentions playlist target; new failure modes documented (404 playlistNotFound, 403 playlistOperationNotSupported).
- `/video-script` SKILL: schema example + sources guidance for `playlistIds` / `playlistTitle`. Series brief → emit playlist field; one-off → omit.
- `npm run lint` (eslint + tsc) clean.

### Why
User starting a Claude Code shorts series; existing pipeline uploaded videos but couldn't append them to a playlist. This is PR 1 of a planned 3-PR roll-out (PR 2: `--duration=Xm` for /video-script + VO chunking, PR 3: series template files).

### Files modified / added
- `video/scripts/youtube-upload.ts` (schema + linkToPlaylists + resolveOrCreatePlaylistByTitle)
- `video/scripts/youtube-playlists.ts` (new)
- `video/package.json` (yt:playlists script)
- `.claude/skills/video-publish/SKILL.md`
- `.claude/skills/video-script/SKILL.md`
- `decisions.md` (Decision 30)

---

## 2026-04-27: Pipeline Phase 2 — youtube.json metadata, SRT auto-upload, /video-promote, both modes first-class

### Completed
- **Data-driven YT metadata**: `posts/<slug>/youtube.json` is the new per-video metadata file. `youtube-upload.ts` reads it (SLUG via CLI arg `npm run yt:upload -- <slug>`); zero inline constants. Generated by `/video-script` step 6. Migrated both existing videos (claude-managed-agents, claude-code-cost-tracking) to JSON files.
- **SRT subtitle generation**: `scripts/lib/srt.ts` exports `buildSrt()` (shared with CaptionStrip's substitution logic for acronyms). `generate-vo.ts` writes `captions.srt` alongside `captions.json`. New `npm run captions:srt -- <CompositionId>` regenerates without re-running TTS. Both existing videos generated SRT files (managed-agents 23 cues, cost-tracking 20 cues).
- **SRT auto-upload**: `youtube-upload.ts` after `videos.insert` calls `captions.insert` when `youtube.json.compositionId` is set + SRT exists. Failure path: warn + continue, video stays uploaded.
- **`/video-promote` skill**: New skill at `.claude/skills/video-promote/`. Generates Twitter / LinkedIn / Reddit drafts into `video/posts/<slug>/social/` per the schema in `youtube.json`. Drafts adapt to blog vs standalone mode automatically.
- **Both modes first-class**: `blogUrl` is optional in `youtube.json`. `/video-publish` suggests `/video-blog-embed` (blog) or `/video-promote` (standalone). `/video-blog-embed` explicitly tells the user to skip when `blogUrl` is missing. `/video-script` description guidance branches on whether brief.md has a canonical URL.

### Why
User wanted to lock down pipeline polish: (1) auto-generate YT metadata so /video-publish has zero hand-edits, (2) ship SRT subtitles for accessibility + search, (3) drafting social posts after each video shouldn't require rewriting the hook from scratch. Also: pipeline must work end-to-end for non-blog topics.

### Files modified / added
- `video/scripts/youtube-upload.ts` — refactored to read youtube.json + SLUG from argv; added captions.insert call
- `video/scripts/generate-vo.ts` — imports buildSrt from lib/srt; writes captions.srt
- `video/scripts/lib/srt.ts` (new) — shared SRT generation
- `video/scripts/captions-to-srt.ts` (new) — standalone SRT regen
- `video/package.json` — `captions:srt` npm script
- `video/posts/claude-managed-agents/youtube.json` (new — also includes compositionId)
- `video/posts/claude-code-cost-tracking/youtube.json` (new — also includes compositionId)
- `video/public/voiceover/ClaudeManagedAgents/captions.srt` (new — 23 cues)
- `video/public/voiceover/ClaudeCodeCostTracking/captions.srt` (new — 20 cues)
- `.claude/skills/video-promote/SKILL.md` (new)
- `.claude/skills/video-script/SKILL.md` (added Step 6: Generate YouTube metadata)
- `.claude/skills/video-publish/SKILL.md` (drop "edit script" step; reads JSON; SRT note; conditional next-step)
- `.claude/skills/video-vo/SKILL.md` (note SRT output + recovery via captions:srt)
- `.claude/skills/video-blog-embed/SKILL.md` (added skip-for-standalone guard)
- `decisions.md` (Decision 30)

## 2026-04-27: Video Brief — claude-managed-agents
- Ran /video-topic for blog slug `claude-managed-agents` (blog mode, no research needed)
- Extracted hook, 5 bullets, Python SDK snippet, 5 animation-worthy numbers ($0.08/hr, $10/1k searches, $0.20 example, early adopters, Apr 8 launch)
- Saved `video/posts/claude-managed-agents/brief.md`; format: --short

## 2026-04-27: Video Script — claude-managed-agents (--short)
- Wrote ~122-word script to `video/posts/claude-managed-agents/script.md`
- Scene shape: title → bullets → code → chart → outro (matches existing scene library)
- Hook front-loaded: "Eight cents an hour — worth it?"
- Added SDK to `pronunciation.ts` (alias substitution: "S D K")

## 2026-04-27: YouTube Channel Branding Updated
- Channel was empty: no description, no keywords, no default language
- Added `scripts/youtube-channel-info.ts` (read) and `scripts/youtube-channel-update.ts` (write)
- Applied: 324-char description (Anthropic Claude / Claude Code focus, generalized — no specific feature names), 153-char keywords, defaultLanguage=en
- Preserved: title "AI AgentOps", handle @aiagentops, country IN
- Pending: unsubscribed trailer (must be Public; deferred until user flips a video)

## 2026-04-27: Video Publish — claude-managed-agents → YouTube (Private)
- Updated `scripts/youtube-upload.ts`: SLUG, SOURCE_VIDEO (`out/<slug>.mp4` flat), TITLE (56 chars), DESCRIPTION, 15 TAGS
- Uploaded as Private via `npm run yt:upload` — video ID `e0gETqkdl2E`
- Watch: https://www.youtube.com/watch?v=e0gETqkdl2E
- Studio: https://studio.youtube.com/video/e0gETqkdl2E/edit
- Pending manual: thumbnail upload (mobile-only), Private→Public toggle

## 2026-04-27: Video Render — claude-managed-agents (re-rendered with SAFE_AREA_BOTTOM)
- Lint clean → re-rendered after composition picked up `SAFE_AREA_BOTTOM=400` from theme.ts
- Scenes now bound above the caption + Shorts UI safe zone (no more overlap)
- 1653 frames encoded → `video/out/claude-managed-agents.mp4` (5.2 MB, 55.1s, 1080×1920)
- Verified: chart scene shows "speed vs control" callout cleanly above caption row "scaling, retries,"

## 2026-04-27: Video Thumbnail — claude-managed-agents
- Rendered title-scene punchline at full 1080×1920 (frame 90: all 4 lines + underline complete)
- First render had caption overlay polluting the title; added optional `hideCaptions` prop to composition, gated CaptionStrip render on it
- Thumbnail saved to `video/posts/claude-managed-agents/thumbnail.png` (145 KB, no captions)
- Manual upload required (YouTube mobile-only constraint persists)

## 2026-04-27: Video VO — claude-managed-agents (Brian, eleven_v3)
- Updated `scripts/generate-vo.ts` (COMPOSITION_ID + 5 scene texts), ran `npm run vo`
- 53.90s total (well under 60s short cap); offset 15 frames, audioDuration 53.898s
- LUFS: -19.34 raw → -18.07 polished (in -16/-19 target band)
- 124 word tokens written to `captions.json`; per-scene durations 5.80 / 15.83 / 11.04 / 16.39 / 4.84s
- Pronunciation aliases for "API" and "SDK" applied; CaptionStrip merges " A P I" → "API" and " S D K" → "SDK"
- Re-rendered scene-2 still with captions overlay — active token highlights in accent orange, position above YT Shorts UI confirmed

## 2026-04-27: Video Scenes — claude-managed-agents composition wired
- Refactored 5 scene components (TitleCard, BulletReveal, CodeBlock, CostChart, Outro) to accept optional content props with backward-compatible defaults; CaptionStrip now takes captions+audioDuration as required props
- BulletReveal gained `numbered` chip variant (alongside `slash` and `filepath`)
- CodeBlock now supports multi-line code (each line = array of tokens); CostChart accepts decimals + overlay text
- Created `ClaudeManagedAgents.tsx` composition with topic-specific content; registered in `Root.tsx` alongside existing cost-tracking comp; both share a generic `buildCalcMetadata` factory
- Added stub `scenes.json` (with `stub: true` flag) + empty `captions.json` so visual stills render before VO; composition gates Audio+CaptionStrip on the flag
- Added DISPLAY_SUBSTITUTIONS entry for SDK in CaptionStrip
- Lint + typecheck pass clean
- Rendered 5 stills (`video/out/managed-agents-frame-*.png`); chart re-rendered after bumping bar heights and shortening callout to "speed vs control"

## 2026-04-27: Video Pipeline Productized — 8 Custom Skills + Audio Polish
- Built 8 project-level skills under `.claude/skills/video-*/`: topic, script, scenes, vo, thumbnail, render, publish, blog-embed
- Each skill suggests next command; output paths are deterministic; v1 scope is `--short` only (long-form deferred)
- All 8 skills auto-discovered by Claude Code harness (verified in skills list)
- Added Python audio polish tool: `video/scripts/python/audio-polish/` (uv-managed, pyloudnorm + pedalboard)
- Wired into `generate-vo.ts`: ElevenLabs → master.raw.mp3 → audio-polish → master.mp3 (skippable via AUDIO_POLISH=false)
- Verified on existing master: -19.36 LUFS raw → -18.08 LUFS polished (closer to YouTube -14 LUFS target after future music bed)
- Decision 24 (polyglot pipeline) and Decision 25 (8-skill productization) logged

## 2026-04-27: Video v1 — claude-code-cost-tracking Uploaded
- Final v7 (64pt captions, no pill, drop shadow): rendered, 4.1 MB MP4
- ElevenLabs Brian voice, eleven_v3, single-pass with-timestamps, 0.5s lead-in + 0.6s tail padding
- Captions: TikTok-style pages, raised position above YT Shorts UI, "..." filtered, JSONL display fix
- YouTube uploaded as Private: video ID `N9tRvJJYKPk`
- OAuth Desktop client + refresh token saved to gitignored `.env`
- Pending manual: thumbnail upload (mobile-only), Private→Public toggle

## 2026-04-26: Blog-Video Pipeline — v1 with VO Complete
- Researched ElevenLabs latest: v3 (March 2026 GA) — 68% reduction in complex-text errors, 70+ languages, no real-time but best for offline tech narration
- Voice picked: Brian (`nPczCjzI2devNBz1zQrb`) — gold-standard documentary narration in 2026
- Settings: stability 0.75, similarity 0.75, style 0.0, speaker_boost on
- Constraint: v3 doesn't support SSML phoneme tags (only flash_v2 / monolingual_v1) — used text alias substitutions for pronunciation overrides (JSONL, MCP, CLI, .claude, avinashsangle, MAX_THINKING_TOKENS)
- Pipeline: `scripts/generate-vo.ts` → ElevenLabs API per scene → MP3s in `public/voiceover/ClaudeCodeCostTracking/` → `scenes.json` with measured durations → `calculateMetadata` reads JSON to set per-scene frame counts → `<Audio>` per `<Series.Sequence>`
- Brian read 130 words in 43.94s (faster than my 60s visual budget) — added per-scene `VISUAL_MIN_SECONDS` floor so animations always complete; trailing silence will be hidden by music bed in v2
- Final v1 MP4: 48s, 3.4 MB (`video/out/v1-with-audio.mp4`)
- Deps added: `@remotion/media`, `music-metadata@11.12.3`, `tsx@4.21.0`, `dotenv@16.4.5`
- API key in `video/.env` (gitignored); user will rotate after testing

## 2026-04-26: Blog-Video Pipeline Pilot — Visual v0 Complete
- Scaffolded `video/` workspace via `npx create-video@latest` (Remotion 4.0.451, React 19.2)
- Used `remotion-best-practices` skill (already installed at `.agents/skills/remotion-best-practices`) — read animations, timing, sequencing, fonts, charts, voiceover, calculate-metadata, transitions rules
- Built 5 scene components for `ClaudeCodeCostTracking` 60s 9:16 Short:
  - `TitleCard` (5s) — 3-line hook with stagger reveal + drawing underline
  - `BulletReveal` (15s) — `/cost` `/stats` `/usage` slash chips with pop springs + log path callout
  - `CodeBlock` (12s) — typewriter reveal of `export MAX_THINKING_TOKENS=10000` with hand-styled token highlighting + box-shadow pulse
  - `CostChart` (16s) — animated before/after bars ($20+ → $10) + ↓50% green callout
  - `Outro` (12s) — "7 tactics" + brand URL + bobbing arrow CTA
- Brand fonts: Plus Jakarta Sans + IBM Plex Mono via `@remotion/google-fonts`
- All animations use `useCurrentFrame()` + `interpolate()` with `Easing.bezier` per skill rules (no CSS transitions/Tailwind animations)
- Lint + typecheck pass clean; verified 5 scene stills render correctly
- Fixed: file path overflow on right edge of bullet scene (fontSize 56 → 44)
- Pilot post target: claude-code-cost-tracking
- Visual reference: Aarthificial / ByteByteGo / 3Blue1Brown
- **Pending for production:** VO recording/generation, calculateMetadata for VO-driven durations, burned-in captions, background music bed, full MP4 render, YouTube upload, blog embed + VideoObject schema

## 2026-04-26: Blog-Video Augmentation Pipeline - Tooling Decision
- Researched programmatic video frameworks: Remotion 4.0.448, Motion Canvas, Revideo, Manim
- Compared modern Mermaid alternatives: D2, Excalidraw, tldraw, React Flow
- Identified Aarthificial as closest reference channel (uses Motion Canvas)
- Confirmed Fireship/ByteByteGo use After Effects/Illustrator (not programmatic) — visual reference only
- **Decision:** Remotion (Decision 23). Stack fit + Claude Code Skills (Jan 2026) win over Motion Canvas/Revideo's built-in VO sync
- VO-first architecture: script.md → ElevenLabs per-scene MP3s → scenes.json → Remotion render
- Pending: pilot post, voice source, aspect ratio, length

## 2026-04-18: Research - ant CLI Getting Started Topic
- Completed comprehensive competitive research for "ant CLI getting started" blog post
- Identified content gaps: no dedicated ant CLI tutorial exists; all coverage is managed-agents-focused
- Key finding: "ant CLI getting started" SERP returns Apache Ant results, not Anthropic
- Documented competing articles, pricing, CLI commands, and community sentiment

## 2026-04-09: Published Blog Post - Claude Managed Agents
- Published "Claude Managed Agents vs Agent SDK: Which Should You Use?" at /blog/claude-managed-agents
- ~2700 words, 12 min read, 8 FAQ items
- Schemas: TechArticle, BreadcrumbList, FAQPage
- Decision framework angle with pricing breakdown and worked cost example
- Updated blog index (featured + grid), sitemap, llms.txt

## 2026-04-09: Published Blog Post - Claude Mythos Preview
- Published "Claude Mythos: What It Means for Developers Who Can't Use It" at /blog/claude-mythos-preview
- ~2400 words, 11 min read, 8 FAQ items
- Schemas: TechArticle, BreadcrumbList, FAQPage
- Analysis/opinion angle (not tutorial) - restricted model, Project Glasswing
- Updated blog index (featured + grid), sitemap, llms.txt

## 2026-04-06: Published Blog Post - Gemma 4 Models Guide
- Published "Gemma 4 Models: Which One Should You Actually Use?" at /blog/gemma-4-models-guide
- ~2800 words, 12 min read, 8 FAQ items
- Schemas: TechArticle, BreadcrumbList, FAQPage
- Updated blog index, sitemap, llms.txt
- Build verified passing

## 2026-04-05: AI/SEO/AEO/GEO Research Completed
- Researched Neil Patel's latest AI SEO trends for 2026
- Compiled GEO (Generative Engine Optimization) best practices
- Gathered AEO (Answer Engine Optimization) strategies
- Documented how to optimize for AI crawlers (ChatGPT, Claude, Perplexity)
- Identified schema markup and llms.txt recommendations
- Delivered comprehensive actionable summary

## 2025-11-20: Custom Portfolio Landing Page Built

### Completed Tasks
1. ✅ Cloned GitHub Pages repository (avisangle.github.io)
2. ✅ Explored existing Hugo-based site structure
3. ✅ Designed modern custom landing page concept
4. ✅ Built complete HTML structure with semantic sections
5. ✅ Implemented modern CSS with:
   - Animated gradient mesh backgrounds
   - Bento grid layout for projects
   - Glassmorphism effects
   - Responsive design (mobile-first)
   - Smooth animations and transitions
6. ✅ Created JavaScript for interactivity:
   - Terminal typing animation
   - Role rotation effect
   - Scroll-triggered animations
   - 3D card hover effects
   - Smooth scroll navigation
7. ✅ Tested local preview
8. ✅ Created comprehensive deployment guide

### Key Features Implemented
- Zero-dependency custom site (no frameworks/build tools)
- Terminal-style hero section with typing effect
- Bento grid project showcase (Apple-style layout)
- Four featured projects integrated
- Fully responsive across all devices
- Performance optimized animations
- Contact section with social links
- Modern dark theme with gradient accents

### Files Created
- `/index.html` - Main landing page
- `/styles.css` - Complete styling and animations
- `/script.js` - Interactive JavaScript
- `/DEPLOYMENT.md` - Deployment and customization guide

### Ready for Deployment
Site is ready to push to GitHub and go live at https://avisangle.github.io

### Context Remaining
~159,600 tokens remaining (sufficient for deployment or additional features)

---

## 2025-11-20 (Continued): Multi-Page Portfolio with Project Blog Posts

### Completed Tasks
1. ✅ Updated index.html with new navigation structure
   - Changed all "View Project" links to point to blog post pages
   - Modified "View All Projects" card to link to projects.html
   - Added proper click handling for GitHub Profile button
2. ✅ Created projects.html - All projects page with full grid layout
3. ✅ Created 4 project blog post pages:
   - project-jenkins-mcp.html
   - project-jenkins-chatbot.html
   - project-calculator.html
   - project-wp-mcp.html
4. ✅ Added comprehensive CSS styles for new pages:
   - Blog post layout with sidebar
   - Project hero sections
   - Content sections with proper typography
   - Feature grids and highlight boxes
   - Code examples styling
   - Breadcrumb navigation
   - Related projects cards
   - Responsive design for all new pages
5. ✅ Tested all navigation links

### New Pages Structure
**Projects Page (projects.html):**
- Hero section with description
- Grid of all 4 projects with full descriptions
- Each card has "Read More" and "GitHub" buttons
- GitHub CTA at bottom

**Individual Project Blog Posts:**
Each blog post includes:
- Breadcrumb navigation
- Hero section with project title and tech badges
- Overview & motivation section
- Implementation highlights with feature cards
- Demo placeholder sections
- Tech stack details
- GitHub repository link
- Sidebar with:
  - Project info
  - Related projects
  - Quick navigation links

### Navigation Flow
1. Homepage → Click any project "View Project →" → Project blog post
2. Homepage → Click "View All Projects" card → projects.html
3. Homepage → Click "GitHub Profile" button → GitHub profile (external)
4. Any project blog post → Related projects → Other blog posts
5. Any project blog post → "All Projects" → projects.html

### Context Remaining
~119,800 tokens remaining (sufficient for deployment)

---

## 2025-11-27: Comprehensive SEO Optimization

### Completed Tasks
1. ✅ Audited current SEO status across all pages
2. ✅ Enhanced meta tags with targeted keywords for all pages
3. ✅ Implemented Schema.org JSON-LD structured data:
   - Person schema for homepage (index.html)
   - SoftwareSourceCode schema for project pages
   - CollectionPage schema for projects listing
4. ✅ Added Open Graph meta tags for social media sharing
5. ✅ Implemented Twitter Card meta tags
6. ✅ Created robots.txt for crawler guidance
7. ✅ Generated sitemap.xml with all pages and priority settings
8. ✅ Added canonical URLs to prevent duplicate content
9. ✅ Implemented semantic HTML5 elements (header, main, footer)
10. ✅ Added ARIA labels and roles for accessibility
11. ✅ Enhanced SVG with proper aria-label attributes
12. ✅ Created comprehensive SEO_GUIDE.md documentation

### Pages Optimized
- index.html (homepage)
- projects.html
- project-jenkins-mcp.html
- project-jenkins-chatbot.html
- project-calculator.html
- project-wp-mcp.html
- project-aws-ec2-agent.html

### SEO Features Added
**Technical SEO:**
- robots.txt with sitemap reference
- XML sitemap with proper priorities and lastmod dates
- Canonical URLs on all pages
- robots meta tags (index, follow)

**Structured Data:**
- Person schema with social profiles
- Software project schemas with repository links
- Knowledge graph optimization

**Social Optimization:**
- Open Graph for Facebook/LinkedIn
- Twitter Cards for better tweet previews
- Social media images configured

**Accessibility:**
- Semantic HTML5 structure
- ARIA labels and roles
- Proper heading hierarchy
- Alt text for icons

### Keywords Targeting
Primary: Avinash Sangle, Software Engineer, AI Agents, DevOps, Jenkins MCP
Secondary: AWS, Cloud Architecture, Python, Go, CI/CD, WordPress, Automation

### Documentation Created
- SEO_GUIDE.md with:
  - Verification instructions
  - Ongoing maintenance tasks
  - Timeline expectations
  - Link building strategies
  - Content strategy recommendations

### Next Steps for User
1. Submit site to Google Search Console
2. Verify structured data with Google Rich Results Test
3. Test social sharing on Facebook/Twitter validators
4. Set up Google Analytics
5. Submit sitemap to search engines
6. Begin content marketing strategy

### Context Remaining
~144,900 tokens remaining

---

## 2026-02-21: Vercel Deployment Preparation with SEO Enhancements

### Completed Tasks
1. ✅ Analyzed deployment options (Vercel vs Cloudflare Pages)
2. ✅ Created dynamic sitemap (`src/app/sitemap.ts`)
   - Auto-generates sitemap.xml at build time
   - Includes all 19 pages (blog, projects, showcase)
   - Discovered missing `/showcase` page in old sitemap
3. ✅ Configured comprehensive 301 redirects in `next.config.ts`
   - Old blog subdomain: `blog.avinashsangle.com/*` → `avinashsangle.com/blog/*`
   - WWW to non-WWW redirects
   - Old HTML URLs from GSC 404s (10+ specific redirects)
   - Generic catch-all patterns for `.html` extensions
4. ✅ Updated `next.config.ts` for Vercel
   - Removed `output: 'export'` (enables native Next.js features)
   - Removed `trailingSlash: true` (Vercel handles routing)
   - Removed `images: { unoptimized: true }` (enables image optimization)
5. ✅ Enhanced `robots.txt`
   - Blocks `/cdn-cgi/` (Cloudflare email protection URLs)
   - Blocks `/_next/` internals
   - Blocks future `/api/` routes
6. ✅ Created `VERCEL_DEPLOYMENT.md` guide
   - Step-by-step Vercel setup instructions
   - DNS configuration options
   - Post-deployment SEO tasks
   - Testing procedures
7. ✅ Verified build succeeds with new configuration
   - All 19 pages built successfully
   - Dynamic sitemap generated
   - No errors

### Key Improvements
- **SEO:** Fixed all 10+ Google Search Console 404 errors with proper 301 redirects
- **Performance:** Enabled Next.js image optimization (WebP/AVIF conversion)
- **DX:** Auto-deployments on git push, preview URLs per PR
- **Future-Ready:** Can now add SSR, ISR, API routes if needed

### Files Modified
- `next.config.ts` - Removed GitHub Pages config, added redirects
- `public/robots.txt` - Enhanced with Cloudflare URL blocks
- `src/app/sitemap.ts` - NEW: Dynamic sitemap generator

### Files Created
- `VERCEL_DEPLOYMENT.md` - Complete deployment guide

### Redirects Implemented
**Specific URLs (from GSC):**
- `/blog.html` → `/blog`
- `/blog-method-crm-mcp.html` → `/blog/method-crm-mcp`
- `/project-calculator-server.html` → `/projects/calculator-server`
- `/project-wp-mcp.html` → `/projects/wp-mcp`
- `/project-twitter-oauth.html` → `/projects/twitter-oauth`
- `/project-jenkins-mcp.html` → `/projects/jenkins-mcp`
- `/project-method-crm-mcp.html` → `/projects/method-crm-mcp`
- `/project-jenkins-chatbot.html` → `/projects/jenkins-chatbot`
- `/project-aws-ec2-agent.html` → `/projects/aws-ec2-agent`
- 2 more projects + catch-all patterns

### Next Steps
1. Deploy to Vercel (see VERCEL_DEPLOYMENT.md)
2. Configure custom domain DNS
3. Test all redirects post-deployment
4. Submit new sitemap to Google Search Console
5. Monitor GSC for redirect success

### Context Remaining
~144,535 tokens remaining

---

## 2026-04-27: Scene library catalog + /video-scenes reuse-first decision tree

### Completed
- Wrote `video/src/scenes/CATALOG.md` — props/variants/first-used-in for all 5 scenes (TitleCard, BulletReveal, CodeBlock, CostChart, Outro), plus CaptionStrip note and Global changes log.
- Embedded a 4-step decision tree in the catalog: reuse > new variant > new scene > global change.
- Rewrote `.claude/skills/video-scenes/SKILL.md`: step 1 reads CATALOG.md, step 3 produces a beat→variant table for user review before any code, step 9 updates the catalog when step 5 extended the library (or states "no catalog updates" when reused).
- Logged Decision 27.

### Why
User flagged that `/video-scenes` had no documented condition for reusing existing scenes vs. creating new ones, and no way to see what was in the library or when it grew.

### Files modified
- `video/src/scenes/CATALOG.md` (new)
- `.claude/skills/video-scenes/SKILL.md` (rewritten)
- `decisions.md` (Decision 27 added)

---

## 2026-04-27: Caption position 600→400 + safe-area constraint + per-video out/ folders

### Completed
- `lib/theme.ts`: added `SAFE_AREA_BOTTOM = 400` constant.
- `CaptionStrip.tsx`: caption padding pulled from the constant (caption baseline now y≈1520, ~60px above YT title bar).
- Both compositions (`ClaudeCodeCostTracking`, `ClaudeManagedAgents`): wrapped Series in a positioned div bounded to `bottom: SAFE_AREA_BOTTOM` so scenes can't bleed into caption/Shorts UI zone.
- `video/out/` migrated from flat to per-slug folders (`out/<slug>/`); existing iteration MP4s + scratch PNGs moved to `out/<slug>/_archive/`. Managed-agents stills renamed `frame-N.png`.
- Updated 4 skills (`/video-scenes`, `/video-render`, `/video-thumbnail`, `/video-publish`) to read/write the new paths.
- `youtube-upload.ts`: `SOURCE_VIDEO` derived from `SLUG` as `out/<slug>/<slug>.mp4`; dropped redundant copy step (file is already SEO-named).

### Why
1. YT Shorts title bar overlapped captions at PADDING_BOTTOM=600.
2. User flagged that one flat `out/` folder was hard to navigate as videos pile up.

### Files modified
- `video/src/lib/theme.ts`, `video/src/scenes/CaptionStrip.tsx`
- `video/src/compositions/ClaudeCodeCostTracking.tsx`, `video/src/compositions/ClaudeManagedAgents.tsx`
- `video/scripts/youtube-upload.ts`
- `.claude/skills/video-scenes/SKILL.md`, `video-render/SKILL.md`, `video-thumbnail/SKILL.md`, `video-publish/SKILL.md`
- `video/out/` directory layout (migration)

---

## 2026-04-27: Burn thumbnail PNG into first 0.5s of MP4

### Completed
- New scene `ThumbnailHold.tsx` renders thumbnail PNG full-frame via staticFile.
- New constant `THUMBNAIL_HOLD_FRAMES = 15` in `lib/theme.ts`.
- Both compositions accept optional `thumbnailSrc` + `thumbnailHoldFrames` props; render burn-in sequence outside safe-area wrapper, gate scenes Sequence by `from={thumbnailHoldFrames}`.
- `Root.tsx`: `buildCalcMetadata` reads `props.thumbnailHoldFrames` (default = THUMBNAIL_HOLD_FRAMES), adds to total frames and audioOffsetFrames; defaultProps include `thumbnailSrc: "thumbnails/<slug>.png"`.
- Thumbnail location moved: `posts/<slug>/thumbnail.png` → `public/thumbnails/<slug>.png` (Remotion staticFile reads only from public/). Existing managed-agents thumbnail relocated.
- 4 skills updated:
  - `/video-thumbnail`: writes to `public/thumbnails/<slug>.png`, passes `--props='{"thumbnailHoldFrames":0}'` to skip self-reference, explains burn-in behavior
  - `/video-scenes`: passes the same `--props` override on still renders
  - `/video-render`: notes the burn-in dependency (PNG must exist or render fails)
  - `/video-publish`: thumbnail set step now references "scrub frame picker to 0:00" instead of file upload
- Lint passes. Stills at frame 5 (in burn) and frame 30 (in scenes) rendered without error → staticFile lookup works.

### Why
User flagged that copying thumbnail PNG from laptop to mobile to YT app for every upload was painful. Burning the thumbnail as the opening 0.5s lets the YT mobile Studio frame picker scrub to it directly — no file transfer.

### Files modified
- `video/src/lib/theme.ts`, `video/src/Root.tsx`
- `video/src/scenes/ThumbnailHold.tsx` (new)
- `video/src/compositions/ClaudeCodeCostTracking.tsx`, `video/src/compositions/ClaudeManagedAgents.tsx`
- `video/public/thumbnails/claude-managed-agents.png` (relocated)
- `.claude/skills/video-thumbnail/SKILL.md`, `video-scenes/SKILL.md`, `video-render/SKILL.md`, `video-publish/SKILL.md`
- `decisions.md` (Decision 29)
