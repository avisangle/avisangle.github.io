"""One-time LinkedIn OAuth 2.0 authorization flow.

Opens your browser to LinkedIn's consent screen, catches the redirect locally,
exchanges the auth code for an access token, fetches your user URN, and writes
both to .env.

Usage:
    python scripts/linkedin_authorize.py

Requirements in .env:
    LINKEDIN_CLIENT_ID
    LINKEDIN_CLIENT_SECRET
    LINKEDIN_REDIRECT_URI  (must match the one registered in the LinkedIn app)

App must have these OAuth 2.0 scopes approved:
    openid, profile, email, w_member_social
"""

import os
import secrets
import sys
import urllib.parse
import webbrowser
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path

import requests
from dotenv import load_dotenv

REPO_ROOT = Path(__file__).resolve().parent.parent
ENV_PATH = REPO_ROOT / ".env"

AUTH_URL = "https://www.linkedin.com/oauth/v2/authorization"
TOKEN_URL = "https://www.linkedin.com/oauth/v2/accessToken"
USERINFO_URL = "https://api.linkedin.com/v2/userinfo"
SCOPES = "openid profile email w_member_social"

load_dotenv(ENV_PATH)

CLIENT_ID = os.getenv("LINKEDIN_CLIENT_ID")
CLIENT_SECRET = os.getenv("LINKEDIN_CLIENT_SECRET")
REDIRECT_URI = os.getenv("LINKEDIN_REDIRECT_URI", "http://localhost:8000/callback")

if not CLIENT_ID or not CLIENT_SECRET:
    sys.exit("Missing LINKEDIN_CLIENT_ID or LINKEDIN_CLIENT_SECRET in .env")

state = secrets.token_urlsafe(16)
received: dict[str, str] = {}


class CallbackHandler(BaseHTTPRequestHandler):
    def log_message(self, *_args):
        pass  # silence default stdout logging

    def do_GET(self):  # noqa: N802 (http.server convention)
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path != "/callback":
            self.send_response(404)
            self.end_headers()
            return

        qs = urllib.parse.parse_qs(parsed.query)
        received["code"] = qs.get("code", [""])[0]
        received["state"] = qs.get("state", [""])[0]
        received["error"] = qs.get("error_description", qs.get("error", [""]))[0]

        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.end_headers()
        msg = "Authorization received. You can close this tab."
        if received["error"]:
            msg = f"Authorization failed: {received['error']}"
        self.wfile.write(f"<html><body><h2>{msg}</h2></body></html>".encode())


def run_local_server() -> None:
    server = HTTPServer(("localhost", 8000), CallbackHandler)
    print("Listening on http://localhost:8000 for LinkedIn redirect...")
    while "code" not in received and "error" not in received:
        server.handle_request()


def exchange_code_for_token(code: str) -> str:
    resp = requests.post(
        TOKEN_URL,
        data={
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": REDIRECT_URI,
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRET,
        },
        headers={"Content-Type": "application/x-www-form-urlencoded"},
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()["access_token"]


def fetch_user_urn(access_token: str) -> str:
    resp = requests.get(
        USERINFO_URL,
        headers={"Authorization": f"Bearer {access_token}"},
        timeout=30,
    )
    resp.raise_for_status()
    sub = resp.json()["sub"]  # OpenID Connect subject = LinkedIn member ID
    return f"urn:li:person:{sub}"


def write_env_value(key: str, value: str) -> None:
    lines = ENV_PATH.read_text(encoding="utf-8").splitlines()
    updated = False
    for idx, line in enumerate(lines):
        if line.startswith(f"{key}="):
            lines[idx] = f"{key}={value}"
            updated = True
            break
    if not updated:
        lines.append(f"{key}={value}")
    ENV_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    params = {
        "response_type": "code",
        "client_id": CLIENT_ID,
        "redirect_uri": REDIRECT_URI,
        "scope": SCOPES,
        "state": state,
    }
    auth_link = f"{AUTH_URL}?{urllib.parse.urlencode(params)}"

    print("Opening browser for LinkedIn authorization...")
    print(f"If it doesn't open, visit: {auth_link}\n")
    webbrowser.open(auth_link)

    run_local_server()

    if received.get("error"):
        sys.exit(f"Auth error: {received['error']}")
    if received.get("state") != state:
        sys.exit("State mismatch - possible CSRF. Aborting.")
    if not received.get("code"):
        sys.exit("No authorization code received.")

    print("Exchanging code for access token...")
    access_token = exchange_code_for_token(received["code"])

    print("Fetching user URN...")
    user_urn = fetch_user_urn(access_token)

    write_env_value("LINKEDIN_ACCESS_TOKEN", access_token)
    write_env_value("LINKEDIN_USER_URN", user_urn)

    print("\nSaved LINKEDIN_ACCESS_TOKEN and LINKEDIN_USER_URN to .env")
    print(f"User URN: {user_urn}")
    print("Token valid for 60 days. Re-run this script when it expires.")


if __name__ == "__main__":
    main()
