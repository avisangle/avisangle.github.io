"""Fetch Google Search Console data for avinashsangle.com.

Usage:
    python scripts/search_console_report.py                   # last 28 days summary
    python scripts/search_console_report.py --days 7          # last 7 days
    python scripts/search_console_report.py --page /blog/claude-managed-agents/  # single page
    python scripts/search_console_report.py --type queries    # top queries only
    python scripts/search_console_report.py --type pages      # top pages only
    python scripts/search_console_report.py --type opportunities  # page-2 keywords (pos 11-20)
    python scripts/search_console_report.py --json            # output as JSON

Prerequisites:
    - Service account JSON at scripts/credentials/gsc-service-account.json
    - Service account email added as user in Search Console for the property
    - Search Console API enabled in the GCP project
"""

import argparse
import json
import sys
from datetime import date, timedelta
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build

REPO_ROOT = Path(__file__).resolve().parent.parent
CREDS_PATH = REPO_ROOT / "scripts" / "credentials" / "gsc-service-account.json"
SITE_URL = "sc-domain:avinashsangle.com"  # domain property
SITE_URL_PREFIX = "https://avinashsangle.com"  # fallback: URL-prefix property
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]


def get_service():
    if not CREDS_PATH.exists():
        sys.exit(f"Credentials not found: {CREDS_PATH}")
    creds = service_account.Credentials.from_service_account_file(
        str(CREDS_PATH), scopes=SCOPES
    )
    return build("searchconsole", "v1", credentials=creds)


def detect_site_url(service) -> str:
    """Try domain property first, fall back to URL-prefix."""
    try:
        sites = service.sites().list().execute()
        urls = [s["siteUrl"] for s in sites.get("siteEntry", [])]
        if SITE_URL in urls:
            return SITE_URL
        if SITE_URL_PREFIX in urls:
            return SITE_URL_PREFIX
        # Try with trailing slash
        if SITE_URL_PREFIX + "/" in urls:
            return SITE_URL_PREFIX + "/"
        if urls:
            print(f"Available properties: {urls}")
            return urls[0]
        sys.exit("No Search Console properties found. Did you add the service account email as a user?")
    except Exception as exc:
        sys.exit(f"Could not list sites: {exc}")


def query_analytics(service, site_url: str, start: str, end: str,
                    dimensions: list, row_limit: int = 25,
                    page_filter: str | None = None,
                    position_filter: tuple | None = None) -> list:
    body = {
        "startDate": start,
        "endDate": end,
        "dimensions": dimensions,
        "rowLimit": row_limit,
    }
    filters = []
    if page_filter:
        filters.append({
            "dimension": "page",
            "operator": "contains",
            "expression": page_filter,
        })
    if position_filter:
        filters.append({
            "dimension": "page",
            "operator": "contains",
            "expression": "",  # match all
        })
    if filters:
        body["dimensionFilterGroups"] = [{"filters": filters}]

    resp = service.searchanalytics().query(siteUrl=site_url, body=body).execute()
    return resp.get("rows", [])


def print_table(headers: list, rows: list, alignments: list | None = None) -> None:
    if not rows:
        print("  (no data)")
        return
    col_widths = [len(h) for h in headers]
    str_rows = []
    for row in rows:
        str_row = [str(c) for c in row]
        for i, c in enumerate(str_row):
            col_widths[i] = max(col_widths[i], len(c))
        str_rows.append(str_row)

    header_line = "  ".join(h.ljust(col_widths[i]) for i, h in enumerate(headers))
    print(f"  {header_line}")
    print(f"  {'  '.join('-' * w for w in col_widths)}")
    for str_row in str_rows:
        line = "  ".join(str_row[i].ljust(col_widths[i]) for i in range(len(headers)))
        print(f"  {line}")


def run_summary(service, site_url: str, start: str, end: str, as_json: bool) -> None:
    # Site totals
    totals = query_analytics(service, site_url, start, end, dimensions=[], row_limit=1)
    if totals:
        t = totals[0]
        total_data = {
            "clicks": int(t["clicks"]),
            "impressions": int(t["impressions"]),
            "ctr": round(t["ctr"] * 100, 2),
            "position": round(t["position"], 1),
        }
    else:
        total_data = {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0}

    # Top queries
    query_rows = query_analytics(service, site_url, start, end, ["query"], row_limit=15)
    queries_data = [
        {
            "query": r["keys"][0],
            "clicks": int(r["clicks"]),
            "impressions": int(r["impressions"]),
            "ctr": round(r["ctr"] * 100, 1),
            "position": round(r["position"], 1),
        }
        for r in query_rows
    ]

    # Top pages
    page_rows = query_analytics(service, site_url, start, end, ["page"], row_limit=15)
    pages_data = [
        {
            "page": r["keys"][0].replace("https://avinashsangle.com", ""),
            "clicks": int(r["clicks"]),
            "impressions": int(r["impressions"]),
            "ctr": round(r["ctr"] * 100, 1),
            "position": round(r["position"], 1),
        }
        for r in page_rows
    ]

    # Opportunities (page 2: position 11-20)
    opp_rows = query_analytics(service, site_url, start, end, ["query"], row_limit=100)
    opportunities = [
        {
            "query": r["keys"][0],
            "clicks": int(r["clicks"]),
            "impressions": int(r["impressions"]),
            "position": round(r["position"], 1),
        }
        for r in opp_rows
        if 10.5 <= r["position"] <= 20.5 and r["impressions"] >= 5
    ][:10]

    if as_json:
        print(json.dumps({
            "period": {"start": start, "end": end},
            "totals": total_data,
            "top_queries": queries_data,
            "top_pages": pages_data,
            "opportunities": opportunities,
        }, indent=2))
        return

    # Pretty print
    print(f"\n{'=' * 60}")
    print(f"  Search Console Report: {start} to {end}")
    print(f"  Site: avinashsangle.com")
    print(f"{'=' * 60}\n")

    print("  TOTALS")
    print(f"  Clicks: {total_data['clicks']}  |  Impressions: {total_data['impressions']}  |  "
          f"CTR: {total_data['ctr']}%  |  Avg Position: {total_data['position']}\n")

    print("  TOP QUERIES")
    print_table(
        ["Query", "Clicks", "Impr", "CTR%", "Pos"],
        [[q["query"], q["clicks"], q["impressions"], q["ctr"], q["position"]] for q in queries_data],
    )

    print(f"\n  TOP PAGES")
    print_table(
        ["Page", "Clicks", "Impr", "CTR%", "Pos"],
        [[p["page"], p["clicks"], p["impressions"], p["ctr"], p["position"]] for p in pages_data],
    )

    if opportunities:
        print(f"\n  OPPORTUNITIES (Page 2 — position 11-20, worth optimizing)")
        print_table(
            ["Query", "Clicks", "Impr", "Pos"],
            [[o["query"], o["clicks"], o["impressions"], o["position"]] for o in opportunities],
        )
    else:
        print("\n  OPPORTUNITIES: (no page-2 queries found)")

    print()


def run_single_type(service, site_url: str, start: str, end: str,
                    report_type: str, page_filter: str | None, as_json: bool) -> None:
    if report_type == "queries":
        dims = ["query"]
    elif report_type == "pages":
        dims = ["page"]
    elif report_type == "opportunities":
        rows = query_analytics(service, site_url, start, end, ["query"], row_limit=100,
                               page_filter=page_filter)
        opps = [r for r in rows if 10.5 <= r["position"] <= 20.5 and r["impressions"] >= 5]
        data = [
            {"query": r["keys"][0], "clicks": int(r["clicks"]),
             "impressions": int(r["impressions"]), "position": round(r["position"], 1)}
            for r in opps[:20]
        ]
        if as_json:
            print(json.dumps(data, indent=2))
        else:
            print(f"\n  Opportunities (Page 2) — {start} to {end}\n")
            print_table(
                ["Query", "Clicks", "Impr", "Pos"],
                [[d["query"], d["clicks"], d["impressions"], d["position"]] for d in data],
            )
            print()
        return
    else:
        sys.exit(f"Unknown type: {report_type}. Use: queries, pages, opportunities")

    rows = query_analytics(service, site_url, start, end, dims, row_limit=25,
                           page_filter=page_filter)
    data = [
        {
            dims[0]: r["keys"][0].replace("https://avinashsangle.com", "") if dims[0] == "page" else r["keys"][0],
            "clicks": int(r["clicks"]),
            "impressions": int(r["impressions"]),
            "ctr": round(r["ctr"] * 100, 1),
            "position": round(r["position"], 1),
        }
        for r in rows
    ]
    if as_json:
        print(json.dumps(data, indent=2))
    else:
        print(f"\n  Top {dims[0].title()}s — {start} to {end}\n")
        print_table(
            [dims[0].title(), "Clicks", "Impr", "CTR%", "Pos"],
            [[d[dims[0]], d["clicks"], d["impressions"], d["ctr"], d["position"]] for d in data],
        )
        print()


def main() -> None:
    parser = argparse.ArgumentParser(description="Google Search Console report for avinashsangle.com")
    parser.add_argument("--days", type=int, default=28, help="Look back N days (default 28)")
    parser.add_argument("--type", choices=["queries", "pages", "opportunities"],
                        help="Show only one report type")
    parser.add_argument("--page", help="Filter to a specific page path (e.g. /blog/claude-managed-agents/)")
    parser.add_argument("--json", action="store_true", help="Output as JSON")
    args = parser.parse_args()

    end_date = date.today() - timedelta(days=3)  # GSC data has ~3 day lag
    start_date = end_date - timedelta(days=args.days)

    service = get_service()
    site_url = detect_site_url(service)

    if args.type:
        run_single_type(service, site_url, str(start_date), str(end_date),
                        args.type, args.page, args.json)
    else:
        run_summary(service, site_url, str(start_date), str(end_date), args.json)


if __name__ == "__main__":
    main()
