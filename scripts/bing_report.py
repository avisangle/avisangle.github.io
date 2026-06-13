"""Fetch Bing Webmaster Tools data for avinashsangle.com.

Bing powers Microsoft Copilot and ChatGPT web search, so Bing rank ≈ AI-citation
potential. This is the companion to search_console_report.py (Google).

Usage:
    python scripts/bing_report.py                    # last 90 days summary
    python scripts/bing_report.py --days 30          # narrower window
    python scripts/bing_report.py --type queries     # top queries only
    python scripts/bing_report.py --type pages       # top pages only
    python scripts/bing_report.py --type crawl       # crawl + index health
    python scripts/bing_report.py --json             # output as JSON

Prerequisites:
    - API key at scripts/credentials/bing-api-key.txt
      (Bing Webmaster Tools -> Settings -> API Access -> Generate)

Note on windows: the Bing API returns a rolling ~6-month window of daily rows with
no server-side date filter, so --days narrows client-side over what Bing returns.
"""

import argparse
import json
import re
import sys
import urllib.parse
import urllib.request
from collections import defaultdict
from datetime import date, datetime, timedelta, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
KEY_PATH = REPO_ROOT / "scripts" / "credentials" / "bing-api-key.txt"
SITE_URL = "https://avinashsangle.com/"
API_BASE = "https://ssl.bing.com/webmaster/api.svc/json"

_MS_DATE = re.compile(r"/Date\((\d+)(?:[+-]\d+)?\)/")


def load_key() -> str:
    if not KEY_PATH.exists():
        sys.exit(f"API key not found: {KEY_PATH}")
    return KEY_PATH.read_text().strip()


def bing_get(endpoint: str, key: str, **params) -> list:
    params["apikey"] = key
    params["siteUrl"] = SITE_URL
    url = f"{API_BASE}/{endpoint}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={"Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            payload = json.load(resp)
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", "replace")[:300]
        sys.exit(f"Bing API {endpoint} failed ({exc.code}): {body}")
    return payload.get("d", []) or []


def parse_ms_date(value: str):
    m = _MS_DATE.search(value or "")
    if not m:
        return None
    return datetime.fromtimestamp(int(m.group(1)) / 1000, tz=timezone.utc).date()


def within(d, cutoff) -> bool:
    return d is not None and d >= cutoff


def aggregate(rows: list, key_field: str, cutoff) -> list:
    """Collapse per-(item, date) rows into per-item totals with weighted position."""
    agg = defaultdict(lambda: {"clicks": 0, "impressions": 0, "pos_weight": 0.0})
    for r in rows:
        if not within(parse_ms_date(r.get("Date", "")), cutoff):
            continue
        name = r.get(key_field)
        if name is None:
            continue
        clicks = int(r.get("Clicks", 0))
        impr = int(r.get("Impressions", 0))
        pos = float(r.get("AvgImpressionPosition", 0) or 0)
        bucket = agg[name]
        bucket["clicks"] += clicks
        bucket["impressions"] += impr
        bucket["pos_weight"] += pos * impr
    out = []
    for name, b in agg.items():
        impr = b["impressions"]
        out.append({
            "name": name,
            "clicks": b["clicks"],
            "impressions": impr,
            "ctr": round(b["clicks"] / impr * 100, 1) if impr else 0.0,
            "position": round(b["pos_weight"] / impr, 1) if impr else 0.0,
        })
    out.sort(key=lambda x: (x["clicks"], x["impressions"]), reverse=True)
    return out


def print_table(headers: list, rows: list) -> None:
    if not rows:
        print("  (no data)")
        return
    widths = [len(h) for h in headers]
    str_rows = []
    for row in rows:
        sr = [str(c) for c in row]
        for i, c in enumerate(sr):
            widths[i] = max(widths[i], len(c))
        str_rows.append(sr)
    print("  " + "  ".join(h.ljust(widths[i]) for i, h in enumerate(headers)))
    print("  " + "  ".join("-" * w for w in widths))
    for sr in str_rows:
        print("  " + "  ".join(sr[i].ljust(widths[i]) for i in range(len(headers))))


def strip_host(url: str) -> str:
    return (url or "").replace("https://avinashsangle.com", "").replace("http://avinashsangle.com", "") or "/"


def run_summary(key: str, days: int, as_json: bool) -> None:
    cutoff = date.today() - timedelta(days=days)

    traffic = bing_get("GetRankAndTrafficStats", key)
    t_clicks = t_impr = 0
    for r in traffic:
        if within(parse_ms_date(r.get("Date", "")), cutoff):
            t_clicks += int(r.get("Clicks", 0))
            t_impr += int(r.get("Impressions", 0))
    totals = {
        "clicks": t_clicks,
        "impressions": t_impr,
        "ctr": round(t_clicks / t_impr * 100, 2) if t_impr else 0.0,
    }

    queries = aggregate(bing_get("GetQueryStats", key), "Query", cutoff)
    pages = [{**p, "name": strip_host(p["name"])}
             for p in aggregate(bing_get("GetPageStats", key), "Query", cutoff)]
    opportunities = [q for q in queries if 10.5 <= q["position"] <= 20.5 and q["impressions"] >= 3][:10]

    if as_json:
        print(json.dumps({
            "period_days": days,
            "since": str(cutoff),
            "totals": totals,
            "top_queries": queries[:15],
            "top_pages": pages[:15],
            "opportunities": opportunities,
        }, indent=2))
        return

    print(f"\n{'=' * 60}")
    print(f"  Bing Webmaster Report: last {days} days (since {cutoff})")
    print(f"  Site: avinashsangle.com  (also feeds Copilot + ChatGPT search)")
    print(f"{'=' * 60}\n")

    print("  TOTALS")
    print(f"  Clicks: {totals['clicks']}  |  Impressions: {totals['impressions']}  |  "
          f"CTR: {totals['ctr']}%\n")

    print("  TOP QUERIES")
    print_table(["Query", "Clicks", "Impr", "CTR%", "Pos"],
                [[q["name"], q["clicks"], q["impressions"], q["ctr"], q["position"]] for q in queries[:15]])

    print("\n  TOP PAGES")
    print_table(["Page", "Clicks", "Impr", "CTR%", "Pos"],
                [[p["name"], p["clicks"], p["impressions"], p["ctr"], p["position"]] for p in pages[:15]])

    if opportunities:
        print("\n  OPPORTUNITIES (Page 2 — position 11-20, worth optimizing)")
        print_table(["Query", "Clicks", "Impr", "Pos"],
                    [[o["name"], o["clicks"], o["impressions"], o["position"]] for o in opportunities])
    else:
        print("\n  OPPORTUNITIES: (no page-2 queries found)")
    print()


def run_single(key: str, days: int, report_type: str, as_json: bool) -> None:
    cutoff = date.today() - timedelta(days=days)

    if report_type == "crawl":
        rows = bing_get("GetCrawlStats", key)
        in_index = crawled = inlinks = c4xx = c5xx = 0
        for r in rows:
            if not within(parse_ms_date(r.get("Date", "")), cutoff):
                continue
            crawled += int(r.get("CrawledPages", 0))
            c4xx += int(r.get("Code4xx", 0))
            c5xx += int(r.get("Code5xx", 0))
            in_index = max(in_index, int(r.get("InIndex", 0)))
            inlinks = max(inlinks, int(r.get("InLinks", 0)))
        data = {"pages_in_index": in_index, "inbound_links": inlinks,
                "pages_crawled": crawled, "errors_4xx": c4xx, "errors_5xx": c5xx}
        if as_json:
            print(json.dumps(data, indent=2))
        else:
            print(f"\n  Crawl + Index Health — last {days} days (since {cutoff})\n")
            print(f"  Pages in Bing index : {data['pages_in_index']}")
            print(f"  Inbound links       : {data['inbound_links']}")
            print(f"  Pages crawled       : {data['pages_crawled']}")
            print(f"  4xx errors          : {data['errors_4xx']}")
            print(f"  5xx errors          : {data['errors_5xx']}\n")
        return

    endpoint, field = ("GetQueryStats", "Query") if report_type == "queries" else ("GetPageStats", "Query")
    data = aggregate(bing_get(endpoint, key), field, cutoff)
    if report_type == "pages":
        data = [{**d, "name": strip_host(d["name"])} for d in data]
    data = data[:25]
    if as_json:
        print(json.dumps(data, indent=2))
    else:
        label = "Queries" if report_type == "queries" else "Pages"
        print(f"\n  Top {label} — last {days} days (since {cutoff})\n")
        print_table([label[:-1], "Clicks", "Impr", "CTR%", "Pos"],
                    [[d["name"], d["clicks"], d["impressions"], d["ctr"], d["position"]] for d in data])
        print()


def main() -> None:
    parser = argparse.ArgumentParser(description="Bing Webmaster report for avinashsangle.com")
    parser.add_argument("--days", type=int, default=90, help="Look back N days (default 90)")
    parser.add_argument("--type", choices=["queries", "pages", "crawl"], help="Show only one report type")
    parser.add_argument("--json", action="store_true", help="Output as JSON")
    args = parser.parse_args()

    key = load_key()
    if args.type:
        run_single(key, args.days, args.type, args.json)
    else:
        run_summary(key, args.days, args.json)


if __name__ == "__main__":
    main()
