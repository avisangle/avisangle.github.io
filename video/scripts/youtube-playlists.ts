/**
 * List the authenticated channel's playlists with IDs, titles, item counts,
 * and privacy. Read-only.
 *
 * Use the printed ID in posts/<slug>/youtube.json under `playlistIds` so
 * `npm run yt:upload` appends the video on publish.
 *
 * Run: npm run yt:playlists
 */

import { config as loadEnv } from "dotenv";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { google } from "googleapis";

loadEnv();

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

const resolvedPath = clientSecretPath.startsWith("/")
  ? clientSecretPath
  : join(process.cwd(), clientSecretPath);
const raw = JSON.parse(readFileSync(resolvedPath, "utf8")) as {
  installed?: { client_id: string; client_secret: string };
  web?: { client_id: string; client_secret: string };
};
const cfg = raw.installed ?? raw.web!;

const oauth2 = new google.auth.OAuth2(
  cfg.client_id,
  cfg.client_secret,
  REDIRECT_URI,
);
oauth2.setCredentials({ refresh_token: refreshToken });

const youtube = google.youtube({ version: "v3", auth: oauth2 });

(async () => {
  const rows: Array<{
    id: string;
    title: string;
    items: number;
    privacy: string;
  }> = [];

  let pageToken: string | undefined;
  do {
    const res = await youtube.playlists.list({
      part: ["snippet", "contentDetails", "status"],
      mine: true,
      maxResults: 50,
      pageToken,
    });
    for (const p of res.data.items ?? []) {
      rows.push({
        id: p.id ?? "",
        title: p.snippet?.title ?? "(untitled)",
        items: p.contentDetails?.itemCount ?? 0,
        privacy: p.status?.privacyStatus ?? "?",
      });
    }
    pageToken = res.data.nextPageToken ?? undefined;
  } while (pageToken);

  if (rows.length === 0) {
    console.log("No playlists on this channel yet.");
    console.log(
      "Tip: set `playlistTitle` in posts/<slug>/youtube.json — yt:upload will create it on first publish.",
    );
    return;
  }

  // Width-aware printing so IDs stay easy to copy.
  const titleW = Math.min(
    Math.max(...rows.map((r) => r.title.length)),
    50,
  );
  const idW = Math.max(...rows.map((r) => r.id.length));

  console.log(
    `${"ID".padEnd(idW)}  ${"PRIVACY".padEnd(8)}  ${"ITEMS".padStart(5)}  TITLE`,
  );
  console.log(
    `${"-".repeat(idW)}  ${"-".repeat(8)}  ${"-".repeat(5)}  ${"-".repeat(titleW)}`,
  );
  for (const r of rows) {
    const title =
      r.title.length > titleW ? r.title.slice(0, titleW - 1) + "…" : r.title;
    console.log(
      `${r.id.padEnd(idW)}  ${r.privacy.padEnd(8)}  ${String(r.items).padStart(5)}  ${title}`,
    );
  }

  console.log(
    `\n${rows.length} playlist${rows.length === 1 ? "" : "s"} total. ` +
      `Copy an ID into \`playlistIds\` in posts/<slug>/youtube.json.`,
  );
})().catch((e) => {
  console.error("yt:playlists failed:");
  if ((e as { errors?: unknown })?.errors) {
    console.error(JSON.stringify((e as { errors: unknown }).errors, null, 2));
  } else {
    console.error(e);
  }
  process.exit(1);
});
