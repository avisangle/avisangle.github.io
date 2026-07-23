/**
 * Read the authenticated YouTube channel's snippet + brandingSettings.
 * Read-only; no writes.
 *
 * Run: npx tsx scripts/youtube-channel-info.ts
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
  console.error("Missing creds in video/.env");
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
  const res = await youtube.channels.list({
    mine: true,
    part: ["snippet", "brandingSettings", "statistics", "status"],
  });
  const ch = res.data.items?.[0];
  if (!ch) {
    console.error("No channel returned");
    process.exit(1);
  }

  console.log("=== CHANNEL ===");
  console.log("ID:               ", ch.id);
  console.log("Title:            ", ch.snippet?.title);
  console.log("Custom URL:       ", ch.snippet?.customUrl ?? "(none)");
  console.log("Country:          ", ch.snippet?.country ?? "(none)");
  console.log("Default lang:     ", ch.snippet?.defaultLanguage ?? "(none)");
  console.log("Published:        ", ch.snippet?.publishedAt);
  console.log();
  console.log("=== SNIPPET DESCRIPTION ===");
  console.log(ch.snippet?.description || "(empty)");
  console.log();
  console.log("=== BRANDING SETTINGS ===");
  console.log(
    "branding.channel.title:        ",
    ch.brandingSettings?.channel?.title,
  );
  console.log(
    "branding.channel.description:  ",
    ch.brandingSettings?.channel?.description ?? "(empty)",
  );
  console.log(
    "branding.channel.keywords:     ",
    ch.brandingSettings?.channel?.keywords ?? "(empty)",
  );
  console.log(
    "branding.channel.country:      ",
    ch.brandingSettings?.channel?.country ?? "(none)",
  );
  console.log(
    "branding.channel.defaultLanguage:",
    ch.brandingSettings?.channel?.defaultLanguage ?? "(none)",
  );
  console.log(
    "branding.channel.unsubscribed.. trailer:",
    ch.brandingSettings?.channel?.unsubscribedTrailer ?? "(none)",
  );
  console.log();
  console.log("=== STATS ===");
  console.log("Subs:    ", ch.statistics?.subscriberCount);
  console.log("Videos:  ", ch.statistics?.videoCount);
  console.log("Views:   ", ch.statistics?.viewCount);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
