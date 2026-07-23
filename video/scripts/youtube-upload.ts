/**
 * Upload a video to YouTube as PRIVATE using the refresh token saved by
 * scripts/youtube-auth.ts.
 *
 * All metadata (title, description, tags, category, privacy) lives in
 * posts/<slug>/youtube.json — no inline edits to this script per video.
 *
 * Run: npm run yt:upload -- <slug>
 *      e.g. npm run yt:upload -- claude-managed-agents
 */

import { config as loadEnv } from "dotenv";
import {
  createReadStream,
  existsSync,
  readFileSync,
  statSync,
} from "node:fs";
import { join } from "node:path";
import { google } from "googleapis";

loadEnv();

// ----- CLI arg + metadata load ----------------------------------------------

const SLUG = process.argv[2];
if (!SLUG) {
  console.error(
    "Usage: npm run yt:upload -- <slug>\n" +
      "Example: npm run yt:upload -- claude-managed-agents",
  );
  process.exit(1);
}

const METADATA_PATH = `posts/${SLUG}/youtube.json`;
if (!existsSync(METADATA_PATH)) {
  console.error(
    `Metadata not found: ${METADATA_PATH}\n` +
      "Generate it via /video-script (or hand-edit a youtube.json) before publishing.",
  );
  process.exit(1);
}

type YouTubeMetadata = {
  title: string;
  description: string;
  tags: string[];
  categoryId: string;
  privacy: "private" | "unlisted" | "public";
  selfDeclaredMadeForKids: boolean;
  embeddable: boolean;
  // Used to find captions.srt at public/voiceover/<compositionId>/captions.srt
  // for upload as the YT subtitle track. Optional: skip SRT upload if absent.
  compositionId?: string;
  blogUrl?: string;
  // Append the uploaded video to one or more playlists by ID. Take precedence
  // over playlistTitle when both are set. Get IDs via `npm run yt:playlists`.
  playlistIds?: string[];
  // Resolve a playlist by title (case-insensitive). Creates one if not found,
  // matching the video's privacy setting. Convenience for series workflows.
  playlistTitle?: string;
};

const meta = JSON.parse(readFileSync(METADATA_PATH, "utf8")) as YouTubeMetadata;

// Render output lives at out/<slug>/<slug>.mp4 — already SEO-named, no copy needed.
const SOURCE_VIDEO = `out/${SLUG}/${SLUG}.mp4`;

// ---- Auth -------------------------------------------------------------------

const REDIRECT_PORT = 53682;
const REDIRECT_URI = `http://localhost:${REDIRECT_PORT}`;

const clientSecretPath = process.env.YOUTUBE_CLIENT_SECRET_PATH;
const refreshToken = process.env.YOUTUBE_REFRESH_TOKEN;
if (!clientSecretPath || !refreshToken) {
  console.error(
    "Missing YOUTUBE_CLIENT_SECRET_PATH or YOUTUBE_REFRESH_TOKEN in video/.env. " +
      "Run `npm run yt:auth` first.",
  );
  process.exit(1);
}

const resolvedClientSecretPath = clientSecretPath.startsWith("/")
  ? clientSecretPath
  : join(process.cwd(), clientSecretPath);

const raw = JSON.parse(readFileSync(resolvedClientSecretPath, "utf8")) as {
  installed?: { client_id: string; client_secret: string };
  web?: { client_id: string; client_secret: string };
};
const cfg = raw.installed ?? raw.web!;

const oauth = new google.auth.OAuth2(
  cfg.client_id,
  cfg.client_secret,
  REDIRECT_URI,
);
oauth.setCredentials({ refresh_token: refreshToken });

const youtube = google.youtube({ version: "v3", auth: oauth });

// ---- Playlist linking -------------------------------------------------------

/**
 * Append the uploaded video to playlist(s) declared in youtube.json.
 *
 * Resolution order:
 *   1. `playlistIds` (explicit list of IDs) — used as-is, in order.
 *   2. `playlistTitle` (string) — case-insensitive lookup against the user's
 *      own playlists. Created if not found, with privacy matching the video.
 *
 * Failures are logged and swallowed — the video upload itself is not rolled
 * back. Same convention as the captions block below.
 */
async function linkToPlaylists(
  videoId: string,
  meta: YouTubeMetadata,
): Promise<void> {
  const ids: string[] = [];

  if (meta.playlistIds?.length) {
    ids.push(...meta.playlistIds);
  } else if (meta.playlistTitle) {
    try {
      const resolved = await resolveOrCreatePlaylistByTitle(
        meta.playlistTitle,
        meta.privacy,
      );
      ids.push(resolved);
    } catch (err) {
      console.warn(
        `⚠ Could not resolve/create playlist "${meta.playlistTitle}" — skipping playlist link.`,
      );
      logApiError(err);
      return;
    }
  } else {
    return;
  }

  for (const playlistId of ids) {
    try {
      const res = await youtube.playlistItems.insert({
        part: ["snippet"],
        requestBody: {
          snippet: {
            playlistId,
            resourceId: { kind: "youtube#video", videoId },
          },
        },
      });
      console.log(
        `✓ Linked to playlist ${playlistId} — item ID: ${res.data.id}`,
      );
    } catch (err) {
      console.warn(`⚠ Failed to link to playlist ${playlistId}.`);
      logApiError(err);
    }
  }
}

async function resolveOrCreatePlaylistByTitle(
  title: string,
  privacy: YouTubeMetadata["privacy"],
): Promise<string> {
  const wanted = title.trim().toLowerCase();

  // Page through user's playlists looking for a title match.
  let pageToken: string | undefined;
  do {
    const res = await youtube.playlists.list({
      part: ["snippet"],
      mine: true,
      maxResults: 50,
      pageToken,
    });
    for (const item of res.data.items ?? []) {
      if (item.snippet?.title?.trim().toLowerCase() === wanted && item.id) {
        return item.id;
      }
    }
    pageToken = res.data.nextPageToken ?? undefined;
  } while (pageToken);

  // Not found — create it. Match the video's privacy so a private video
  // doesn't accidentally end up in a public playlist.
  console.log(`Playlist "${title}" not found — creating (${privacy})...`);
  const created = await youtube.playlists.insert({
    part: ["snippet", "status"],
    requestBody: {
      snippet: { title },
      status: { privacyStatus: privacy },
    },
  });
  if (!created.data.id) {
    throw new Error("Playlist creation succeeded but returned no ID.");
  }
  console.log(`✓ Created playlist "${title}" — ID: ${created.data.id}`);
  return created.data.id;
}

function logApiError(err: unknown) {
  if ((err as { errors?: unknown })?.errors) {
    console.warn(JSON.stringify((err as { errors: unknown }).errors, null, 2));
  } else if (err instanceof Error) {
    console.warn(err.message);
  }
}

// ---- Upload -----------------------------------------------------------------

(async () => {
  if (!existsSync(SOURCE_VIDEO)) {
    console.error(`Source not found: ${SOURCE_VIDEO}`);
    process.exit(1);
  }

  const sizeMB = statSync(SOURCE_VIDEO).size / 1024 / 1024;

  console.log("\n--- Upload metadata ---");
  console.log(`Slug:         ${SLUG}`);
  console.log(`File:         ${SOURCE_VIDEO} (${sizeMB.toFixed(1)} MB)`);
  console.log(`Title:        ${meta.title}`);
  console.log(`Tags:         ${meta.tags.join(", ")}`);
  console.log(`Category:     ${meta.categoryId}`);
  console.log(`Privacy:      ${meta.privacy}`);
  console.log(`Made for kids: ${meta.selfDeclaredMadeForKids}`);
  if (meta.playlistIds?.length) {
    console.log(`Playlists:    ${meta.playlistIds.join(", ")}`);
  } else if (meta.playlistTitle) {
    console.log(`Playlist:     "${meta.playlistTitle}" (resolve-or-create by title)`);
  }
  console.log("\nDescription:");
  console.log(meta.description);
  console.log("--- ---\n");

  console.log(`Uploading to YouTube as ${meta.privacy.toUpperCase()}...`);

  const res = await youtube.videos.insert({
    part: ["snippet", "status"],
    requestBody: {
      snippet: {
        title: meta.title,
        description: meta.description,
        tags: meta.tags,
        categoryId: meta.categoryId,
        defaultLanguage: "en",
        defaultAudioLanguage: "en",
      },
      status: {
        privacyStatus: meta.privacy,
        selfDeclaredMadeForKids: meta.selfDeclaredMadeForKids,
        embeddable: meta.embeddable,
      },
    },
    media: { body: createReadStream(SOURCE_VIDEO) },
  });

  const videoId = res.data.id;
  console.log("\n✓ Upload complete.");
  console.log(`  Video ID:    ${videoId}`);
  console.log(`  Watch URL:   https://www.youtube.com/watch?v=${videoId}`);
  console.log(`  Studio edit: https://studio.youtube.com/video/${videoId}/edit`);

  // Playlist linking (optional — needs playlistIds or playlistTitle).
  if (videoId) {
    await linkToPlaylists(videoId, meta);
  }

  // Subtitle track upload (optional — needs compositionId + captions.srt).
  if (meta.compositionId && videoId) {
    const srtPath = `public/voiceover/${meta.compositionId}/captions.srt`;
    if (existsSync(srtPath)) {
      console.log(`\nUploading captions: ${srtPath}`);
      try {
        const capRes = await youtube.captions.insert({
          part: ["snippet"],
          requestBody: {
            snippet: {
              videoId,
              language: "en",
              name: "English",
              isDraft: false,
            },
          },
          media: {
            mimeType: "application/octet-stream",
            body: createReadStream(srtPath),
          },
        });
        console.log(`✓ Captions uploaded — track ID: ${capRes.data.id}`);
      } catch (capErr) {
        console.warn(
          "⚠ Captions upload failed (video upload succeeded). " +
            "You can re-run captions.insert manually or upload via Studio.",
        );
        if ((capErr as { errors?: unknown })?.errors) {
          console.warn(JSON.stringify((capErr as { errors: unknown }).errors, null, 2));
        }
      }
    } else {
      console.log(`\n(no captions.srt at ${srtPath} — skipping subtitle upload)`);
    }
  }

  console.log(
    `\nNote: video is ${meta.privacy.toUpperCase()}. Review in Studio, then flip to Public.`,
  );
})().catch((err) => {
  console.error("Upload failed:");
  if (err?.errors) console.error(JSON.stringify(err.errors, null, 2));
  else console.error(err);
  process.exit(1);
});
