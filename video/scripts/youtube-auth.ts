/**
 * Interactive OAuth 2.0 flow for the YouTube Data API (Desktop client).
 *
 * Spins up a local loopback HTTP server, opens the consent screen in the
 * default browser, captures the auth code Google redirects back, exchanges
 * it for tokens, and writes YOUTUBE_REFRESH_TOKEN into video/.env.
 *
 * Run once: npm run yt:auth
 *
 * Required scopes:
 *   - youtube.upload    (insert videos)
 *   - youtube.force-ssl (edit channel snippet, manage uploads)
 */

import { config as loadEnv } from "dotenv";
import { execFile } from "node:child_process";
import {
  appendFileSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { createServer } from "node:http";
import { join } from "node:path";
import { google } from "googleapis";

loadEnv();

const SCOPES = [
  "https://www.googleapis.com/auth/youtube.upload",
  "https://www.googleapis.com/auth/youtube.force-ssl",
];

const REDIRECT_PORT = 53682;
const REDIRECT_URI = `http://localhost:${REDIRECT_PORT}`;

const clientSecretPath = process.env.YOUTUBE_CLIENT_SECRET_PATH;
if (!clientSecretPath) {
  console.error("YOUTUBE_CLIENT_SECRET_PATH is not set in video/.env");
  process.exit(1);
}

const resolvedClientSecretPath = clientSecretPath.startsWith("/")
  ? clientSecretPath
  : join(process.cwd(), clientSecretPath);

const raw = JSON.parse(readFileSync(resolvedClientSecretPath, "utf8")) as {
  installed?: { client_id: string; client_secret: string };
  web?: { client_id: string; client_secret: string };
};
const cfg = raw.installed ?? raw.web;
if (!cfg) {
  console.error(
    "Client secret JSON does not contain `installed` or `web` block. " +
      "Make sure this is an OAuth Desktop client, not a service account.",
  );
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(
  cfg.client_id,
  cfg.client_secret,
  REDIRECT_URI,
);

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: SCOPES,
});

console.log("\nYouTube OAuth — Desktop flow\n");
console.log("Scopes requested:");
SCOPES.forEach((s) => console.log("  • " + s));
console.log("\nIf the browser doesn't open, paste this URL manually:\n");
console.log(authUrl);
console.log("");

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", REDIRECT_URI);
    const code = url.searchParams.get("code");
    const error = url.searchParams.get("error");

    if (error) {
      res.writeHead(400, { "Content-Type": "text/html" });
      res.end(`<h1>OAuth error</h1><p>${error}</p>`);
      console.error("OAuth error from Google:", error);
      server.close();
      process.exit(1);
    }

    if (!code) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Missing ?code in callback");
      return;
    }

    const { tokens } = await oauth2Client.getToken(code);
    if (!tokens.refresh_token) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end(
        "<h1>No refresh_token returned</h1>" +
          "<p>This usually means consent has been granted before. " +
          "Revoke access at https://myaccount.google.com/permissions and retry.</p>",
      );
      console.error(
        "\nNo refresh_token in response. Revoke prior consent at",
        "https://myaccount.google.com/permissions",
        "and rerun npm run yt:auth.",
      );
      server.close();
      process.exit(1);
    }

    upsertEnvVar("YOUTUBE_REFRESH_TOKEN", tokens.refresh_token);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<html><body style='font-family:system-ui;padding:40px;background:#0a0a0a;color:#f5f5f5;'>" +
        "<h1 style='color:#22d3ee'>✓ Authorized.</h1>" +
        "<p>Refresh token saved to <code>video/.env</code>. You can close this tab.</p>" +
        "</body></html>",
    );

    console.log("\n✓ Refresh token captured and saved to video/.env");
    console.log("  Token field: YOUTUBE_REFRESH_TOKEN");
    console.log("\nReady to upload. Run: npm run yt:upload");
    server.close();
    process.exit(0);
  } catch (err) {
    console.error("Auth callback failed:", err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Auth failed — see server logs");
    server.close();
    process.exit(1);
  }
});

server.listen(REDIRECT_PORT, () => {
  console.log(`Local callback server listening on ${REDIRECT_URI}`);
  console.log("Opening browser...\n");
  // execFile (no shell) — safe against argv injection.
  execFile("open", [authUrl], (err) => {
    if (err) {
      console.log(
        "Could not open browser automatically. Visit the URL above manually.",
      );
    }
  });
});

function upsertEnvVar(key: string, value: string) {
  const envPath = join(process.cwd(), ".env");
  const existing = (() => {
    try {
      return readFileSync(envPath, "utf8");
    } catch {
      return "";
    }
  })();

  const lineRe = new RegExp(`^${key}=.*$`, "m");
  const newLine = `${key}=${value}`;

  if (lineRe.test(existing)) {
    writeFileSync(envPath, existing.replace(lineRe, newLine));
  } else {
    const sep = existing === "" || existing.endsWith("\n") ? "" : "\n";
    appendFileSync(
      envPath,
      `${sep}\n# YouTube refresh token (added by yt:auth)\n${newLine}\n`,
    );
  }
}
