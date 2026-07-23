/**
 * Update the authenticated YouTube channel's brandingSettings.
 * Reads current settings first and merges, so untouched fields are preserved.
 *
 * Run: npx tsx scripts/youtube-channel-update.ts
 */

import { config as loadEnv } from "dotenv";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { google } from "googleapis";

loadEnv();

const REDIRECT_PORT = 53682;
const REDIRECT_URI = `http://localhost:${REDIRECT_PORT}`;

const NEW_DESCRIPTION = `Practical demos and decision frameworks for AI engineering — Anthropic Claude, Claude Code, and the tools developers actually use to ship.

New short every week. No filler — just the price, the trade-off, and the code.

Full write-ups: https://avinashsangle.com/blog
Built by Avinash Sangle — AI & Automation Engineer, Pune.`;

const NEW_KEYWORDS =
  'claude anthropic "claude code" "ai agents" "ai engineering" "ai coding" "developer tools" "ai cost" llm "anthropic api" "ai automation" "ai productivity"';

const NEW_DEFAULT_LANGUAGE = "en";

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
  const cur = await youtube.channels.list({
    mine: true,
    part: ["brandingSettings"],
  });
  const ch = cur.data.items?.[0];
  if (!ch || !ch.id) {
    console.error("No channel returned");
    process.exit(1);
  }

  const branding = ch.brandingSettings ?? {};
  const channel = branding.channel ?? {};

  // Merge: keep existing fields (country, title, etc.) and overwrite only
  // description/keywords/defaultLanguage.
  const updated = {
    ...branding,
    channel: {
      ...channel,
      description: NEW_DESCRIPTION,
      keywords: NEW_KEYWORDS,
      defaultLanguage: NEW_DEFAULT_LANGUAGE,
    },
  };

  console.log("Applying brandingSettings update...");
  const res = await youtube.channels.update({
    part: ["brandingSettings"],
    requestBody: {
      id: ch.id,
      brandingSettings: updated,
    },
  });

  console.log("✓ Updated.");
  const c = res.data.brandingSettings?.channel;
  console.log("  description chars:", (c?.description ?? "").length);
  console.log("  keywords chars:   ", (c?.keywords ?? "").length);
  console.log("  defaultLanguage:  ", c?.defaultLanguage);
  console.log("  country:          ", c?.country);
})().catch((e) => {
  console.error(e?.response?.data ?? e);
  process.exit(1);
});
