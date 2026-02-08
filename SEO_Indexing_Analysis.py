"""
SEO Indexing Analysis Report Generator for avinashsangle.com
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.pdfgen import canvas
from reportlab.lib import colors
import os

OUTPUT_PATH = "/sessions/intelligent-funny-brahmagupta/mnt/github_bio/SEO_Indexing_Analysis.pdf"

# Colors
DARK_BG = HexColor("#1a1a2e")
ACCENT_BLUE = HexColor("#0f3460")
ACCENT_RED = HexColor("#e94560")
ACCENT_GREEN = HexColor("#16c79a")
ACCENT_ORANGE = HexColor("#f5a623")
ACCENT_YELLOW = HexColor("#ffd700")
LIGHT_GRAY = HexColor("#f5f5f5")
MID_GRAY = HexColor("#e0e0e0")
TEXT_DARK = HexColor("#2c2c2c")
TEXT_MEDIUM = HexColor("#555555")
CRITICAL_BG = HexColor("#fdecea")
HIGH_BG = HexColor("#fff3e0")
MEDIUM_BG = HexColor("#fffde7")
OK_BG = HexColor("#e8f5e9")

styles = getSampleStyleSheet()

# Custom styles
styles.add(ParagraphStyle(
    'ReportTitle', parent=styles['Title'],
    fontSize=26, textColor=ACCENT_BLUE, spaceAfter=6,
    fontName='Helvetica-Bold', alignment=TA_LEFT
))
styles.add(ParagraphStyle(
    'ReportSubtitle', parent=styles['Normal'],
    fontSize=12, textColor=TEXT_MEDIUM, spaceAfter=20,
    fontName='Helvetica', alignment=TA_LEFT
))
styles.add(ParagraphStyle(
    'SectionHead', parent=styles['Heading1'],
    fontSize=16, textColor=ACCENT_BLUE, spaceBefore=18, spaceAfter=10,
    fontName='Helvetica-Bold', borderPadding=(0, 0, 4, 0)
))
styles.add(ParagraphStyle(
    'SubSection', parent=styles['Heading2'],
    fontSize=13, textColor=TEXT_DARK, spaceBefore=14, spaceAfter=8,
    fontName='Helvetica-Bold'
))
styles.add(ParagraphStyle(
    'BodyText2', parent=styles['Normal'],
    fontSize=10, textColor=TEXT_DARK, spaceAfter=8,
    fontName='Helvetica', leading=14
))
styles.add(ParagraphStyle(
    'BodyBold', parent=styles['Normal'],
    fontSize=10, textColor=TEXT_DARK, spaceAfter=4,
    fontName='Helvetica-Bold', leading=14
))
styles.add(ParagraphStyle(
    'BulletItem', parent=styles['Normal'],
    fontSize=10, textColor=TEXT_DARK, spaceAfter=4,
    fontName='Helvetica', leading=14, leftIndent=20, bulletIndent=8
))
styles.add(ParagraphStyle(
    'CodeBlock', parent=styles['Normal'],
    fontSize=9, textColor=HexColor("#333333"),
    fontName='Courier', leading=12, leftIndent=16, spaceAfter=8,
    backColor=LIGHT_GRAY, borderPadding=6
))
styles.add(ParagraphStyle(
    'CriticalLabel', parent=styles['Normal'],
    fontSize=10, textColor=ACCENT_RED, fontName='Helvetica-Bold'
))
styles.add(ParagraphStyle(
    'OKLabel', parent=styles['Normal'],
    fontSize=10, textColor=ACCENT_GREEN, fontName='Helvetica-Bold'
))
styles.add(ParagraphStyle(
    'SmallNote', parent=styles['Normal'],
    fontSize=8, textColor=TEXT_MEDIUM, fontName='Helvetica-Oblique',
    spaceAfter=6, leading=10
))
styles.add(ParagraphStyle(
    'FooterStyle', parent=styles['Normal'],
    fontSize=8, textColor=TEXT_MEDIUM, fontName='Helvetica',
    alignment=TA_CENTER
))
styles.add(ParagraphStyle(
    'TableCell', parent=styles['Normal'],
    fontSize=9, textColor=TEXT_DARK, fontName='Helvetica', leading=12
))
styles.add(ParagraphStyle(
    'TableCellBold', parent=styles['Normal'],
    fontSize=9, textColor=TEXT_DARK, fontName='Helvetica-Bold', leading=12
))
styles.add(ParagraphStyle(
    'TableCellRed', parent=styles['Normal'],
    fontSize=9, textColor=ACCENT_RED, fontName='Helvetica-Bold', leading=12
))
styles.add(ParagraphStyle(
    'TableCellGreen', parent=styles['Normal'],
    fontSize=9, textColor=ACCENT_GREEN, fontName='Helvetica-Bold', leading=12
))


def add_header_footer(canvas_obj, doc):
    canvas_obj.saveState()
    # Header line
    canvas_obj.setStrokeColor(ACCENT_BLUE)
    canvas_obj.setLineWidth(2)
    canvas_obj.line(doc.leftMargin, letter[1] - 40, letter[0] - doc.rightMargin, letter[1] - 40)
    # Header text
    canvas_obj.setFont('Helvetica', 8)
    canvas_obj.setFillColor(TEXT_MEDIUM)
    canvas_obj.drawString(doc.leftMargin, letter[1] - 36, "SEO Indexing Analysis | avinashsangle.com")
    canvas_obj.drawRightString(letter[0] - doc.rightMargin, letter[1] - 36, "February 2026")
    # Footer
    canvas_obj.setFont('Helvetica', 8)
    canvas_obj.setFillColor(TEXT_MEDIUM)
    canvas_obj.drawCentredString(letter[0] / 2, 30, f"Page {doc.page}")
    canvas_obj.restoreState()


def severity_badge(severity):
    color_map = {
        "CRITICAL": ACCENT_RED,
        "HIGH": ACCENT_ORANGE,
        "MEDIUM": ACCENT_YELLOW,
        "OK": ACCENT_GREEN,
    }
    c = color_map.get(severity, TEXT_MEDIUM)
    return f'<font color="{c.hexval()}">[{severity}]</font>'


def build_report():
    doc = SimpleDocTemplate(
        OUTPUT_PATH, pagesize=letter,
        topMargin=56, bottomMargin=50,
        leftMargin=54, rightMargin=54
    )

    story = []

    # ===== TITLE PAGE =====
    story.append(Spacer(1, 80))
    story.append(Paragraph("Google Search Console", styles['ReportTitle']))
    story.append(Paragraph("Indexing Analysis Report", styles['ReportTitle']))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=3, color=ACCENT_BLUE))
    story.append(Spacer(1, 12))
    story.append(Paragraph("Site: <b>avinashsangle.com</b>", styles['ReportSubtitle']))
    story.append(Paragraph("Date: February 8, 2026", styles['ReportSubtitle']))
    story.append(Paragraph("Framework: Next.js (Static Export) on GitHub Pages", styles['ReportSubtitle']))
    story.append(Spacer(1, 30))

    # Executive Summary box
    summary_data = [
        [Paragraph("<b>EXECUTIVE SUMMARY</b>", ParagraphStyle('', parent=styles['Normal'], fontSize=12, textColor=ACCENT_BLUE, fontName='Helvetica-Bold'))],
        [Paragraph(
            "Google Search Console reports <b>23 pages not indexed</b> and only <b>12 pages indexed</b> with just <b>9 total clicks</b>. "
            "The biggest category is <b>'Discovered - currently not indexed' (12 pages)</b> where Google found your pages via the sitemap "
            "but decided not to crawl or index them. The root cause is a <b>critical canonical URL misconfiguration</b> in layout.tsx "
            "that tells Google every page is a duplicate of the homepage. Additional issues include 5 redirect pages, 3 broken 404s from "
            "your old site structure, and 1 canonical conflict.",
            styles['BodyText2']
        )],
    ]
    summary_table = Table(summary_data, colWidths=[doc.width])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), HexColor("#e8eef7")),
        ('BACKGROUND', (0, 1), (-1, -1), white),
        ('BOX', (0, 0), (-1, -1), 1.5, ACCENT_BLUE),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
        ('LEFTPADDING', (0, 0), (-1, -1), 14),
        ('RIGHTPADDING', (0, 0), (-1, -1), 14),
    ]))
    story.append(summary_table)
    story.append(Spacer(1, 20))

    # Scorecard
    score_data = [
        [Paragraph("<b>Category</b>", styles['TableCellBold']),
         Paragraph("<b>Status</b>", styles['TableCellBold']),
         Paragraph("<b>Impact</b>", styles['TableCellBold'])],
        [Paragraph("Canonical URLs", styles['TableCell']),
         Paragraph("CRITICAL", styles['TableCellRed']),
         Paragraph("12 of 14 pages have wrong canonical pointing to homepage", styles['TableCell'])],
        [Paragraph("Google Indexed Pages", styles['TableCell']),
         Paragraph("CRITICAL", styles['TableCellRed']),
         Paragraph("Only ~2 of 17 pages indexed (88% missing)", styles['TableCell'])],
        [Paragraph("Sitemap.xml", styles['TableCell']),
         Paragraph("OK", styles['TableCellGreen']),
         Paragraph("Valid, accessible, 14 URLs listed", styles['TableCell'])],
        [Paragraph("Robots.txt", styles['TableCell']),
         Paragraph("OK", styles['TableCellGreen']),
         Paragraph("Properly allows all crawlers", styles['TableCell'])],
        [Paragraph("Meta Titles", styles['TableCell']),
         Paragraph("OK", styles['TableCellGreen']),
         Paragraph("All pages have unique titles", styles['TableCell'])],
        [Paragraph("Meta Descriptions", styles['TableCell']),
         Paragraph("OK", styles['TableCellGreen']),
         Paragraph("All pages have unique descriptions", styles['TableCell'])],
        [Paragraph("Robots Meta Tag", styles['TableCell']),
         Paragraph("OK", styles['TableCellGreen']),
         Paragraph("All pages set to index, follow", styles['TableCell'])],
        [Paragraph("JS Bundle Size", styles['TableCell']),
         Paragraph("MEDIUM", ParagraphStyle('', parent=styles['TableCell'], textColor=ACCENT_ORANGE, fontName='Helvetica-Bold')),
         Paragraph("~3.2 MB total JS - may slow crawl budget", styles['TableCell'])],
        [Paragraph("Showcase Page", styles['TableCell']),
         Paragraph("HIGH", ParagraphStyle('', parent=styles['TableCell'], textColor=ACCENT_ORANGE, fontName='Helvetica-Bold')),
         Paragraph("Exists but missing from sitemap", styles['TableCell'])],
    ]
    score_table = Table(score_data, colWidths=[1.6*inch, 1.0*inch, 3.9*inch])
    score_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), ACCENT_BLUE),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('BACKGROUND', (0, 1), (-1, 1), CRITICAL_BG),
        ('BACKGROUND', (0, 2), (-1, 2), CRITICAL_BG),
        ('BACKGROUND', (0, 3), (-1, 5), OK_BG),
        ('BACKGROUND', (0, 6), (-1, 7), OK_BG),
        ('BACKGROUND', (0, 8), (-1, 8), MEDIUM_BG),
        ('BACKGROUND', (0, 9), (-1, 9), HIGH_BG),
        ('GRID', (0, 0), (-1, -1), 0.5, MID_GRAY),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(score_table)

    story.append(PageBreak())

    # ===== ISSUE #1: CANONICAL URLS =====
    story.append(Paragraph("1. CRITICAL: Canonical URL Misconfiguration", styles['SectionHead']))
    story.append(HRFlowable(width="100%", thickness=1, color=ACCENT_RED))
    story.append(Spacer(1, 8))

    story.append(Paragraph(
        "<b>What's happening:</b> Almost every page on your site has a <font color='#e94560'>&lt;link rel='canonical'&gt;</font> "
        "tag pointing to <b>https://avinashsangle.com/</b> (the homepage), instead of pointing to its own URL. "
        "This tells Google that all these pages are duplicates of the homepage, so Google ignores them.",
        styles['BodyText2']
    ))
    story.append(Spacer(1, 6))

    # Table of canonical issues
    canonical_data = [
        [Paragraph("<b>Page</b>", styles['TableCellBold']),
         Paragraph("<b>Current Canonical</b>", styles['TableCellBold']),
         Paragraph("<b>Correct Canonical</b>", styles['TableCellBold']),
         Paragraph("<b>Status</b>", styles['TableCellBold'])],
        [Paragraph("/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCell']),
         Paragraph("OK", styles['TableCellGreen'])],
        [Paragraph("/blog/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCellRed']),
         Paragraph(".../blog/", styles['TableCell']),
         Paragraph("WRONG", styles['TableCellRed'])],
        [Paragraph("/blog/clawdbot-guide/", styles['TableCell']),
         Paragraph(".../blog/clawdbot-guide/", styles['TableCellGreen']),
         Paragraph(".../blog/clawdbot-guide/", styles['TableCell']),
         Paragraph("OK", styles['TableCellGreen'])],
        [Paragraph("/blog/method-crm-mcp/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCellRed']),
         Paragraph(".../blog/method-crm-mcp/", styles['TableCell']),
         Paragraph("WRONG", styles['TableCellRed'])],
        [Paragraph("/projects/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCellRed']),
         Paragraph(".../projects/", styles['TableCell']),
         Paragraph("WRONG", styles['TableCellRed'])],
        [Paragraph("/projects/jenkins-mcp/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCellRed']),
         Paragraph(".../projects/jenkins-mcp/", styles['TableCell']),
         Paragraph("WRONG", styles['TableCellRed'])],
        [Paragraph("/projects/reddit-agent/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCellRed']),
         Paragraph(".../projects/reddit-agent/", styles['TableCell']),
         Paragraph("WRONG", styles['TableCellRed'])],
        [Paragraph("/projects/calculator-server/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCellRed']),
         Paragraph(".../projects/calculator-server/", styles['TableCell']),
         Paragraph("WRONG", styles['TableCellRed'])],
        [Paragraph("/projects/aws-ec2-agent/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCellRed']),
         Paragraph(".../projects/aws-ec2-agent/", styles['TableCell']),
         Paragraph("WRONG", styles['TableCellRed'])],
        [Paragraph("/projects/twitter-oauth/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCellRed']),
         Paragraph(".../projects/twitter-oauth/", styles['TableCell']),
         Paragraph("WRONG", styles['TableCellRed'])],
        [Paragraph("/projects/method-crm-mcp/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCellRed']),
         Paragraph(".../projects/method-crm-mcp/", styles['TableCell']),
         Paragraph("WRONG", styles['TableCellRed'])],
        [Paragraph("/projects/social-media-.../", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCellRed']),
         Paragraph(".../projects/social-media-.../", styles['TableCell']),
         Paragraph("WRONG", styles['TableCellRed'])],
        [Paragraph("/projects/wp-mcp/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCellRed']),
         Paragraph(".../projects/wp-mcp/", styles['TableCell']),
         Paragraph("WRONG", styles['TableCellRed'])],
        [Paragraph("/showcase/", styles['TableCell']),
         Paragraph("https://avinashsangle.com/", styles['TableCellRed']),
         Paragraph(".../showcase/", styles['TableCell']),
         Paragraph("WRONG", styles['TableCellRed'])],
    ]
    can_table = Table(canonical_data, colWidths=[1.55*inch, 1.7*inch, 1.7*inch, 0.7*inch])
    can_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), ACCENT_BLUE),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('GRID', (0, 0), (-1, -1), 0.4, MID_GRAY),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, LIGHT_GRAY]),
    ]))
    story.append(can_table)
    story.append(Spacer(1, 12))

    story.append(Paragraph("<b>Result:</b> 12 out of 14 pages have incorrect canonicals. Only the homepage and /blog/clawdbot-guide/ are correct.", styles['BodyText2']))

    story.append(Spacer(1, 10))
    story.append(Paragraph("Root Cause", styles['SubSection']))
    story.append(Paragraph(
        "In <b>src/app/layout.tsx</b> (line 70-72), the root layout sets a global canonical to '/' for ALL pages:",
        styles['BodyText2']
    ))
    story.append(Paragraph(
        'alternates: { canonical: "/" }',
        styles['CodeBlock']
    ))
    story.append(Paragraph(
        "Since Next.js resolves this relative to metadataBase (https://avinashsangle.com), every page gets "
        "canonical = https://avinashsangle.com/. Only the clawdbot-guide page overrides this with its own canonical. "
        "All other pages inherit the wrong value.",
        styles['BodyText2']
    ))

    story.append(Spacer(1, 10))
    story.append(Paragraph("The Fix", styles['SubSection']))
    story.append(Paragraph("<b>Option A (Recommended):</b> Remove the global canonical from layout.tsx entirely:", styles['BodyText2']))
    story.append(Paragraph(
        '// In src/app/layout.tsx - DELETE these lines:\n'
        '  alternates: {\n'
        '    canonical: "/",\n'
        '  },',
        styles['CodeBlock']
    ))
    story.append(Paragraph(
        "Next.js with metadataBase will auto-generate the correct canonical for each route.",
        styles['BodyText2']
    ))
    story.append(Spacer(1, 4))
    story.append(Paragraph("<b>Option B:</b> Add explicit canonical overrides in each page's metadata export:", styles['BodyText2']))
    story.append(Paragraph(
        '// Example: src/app/blog/page.tsx\n'
        'export const metadata: Metadata = {\n'
        '  ...\n'
        '  alternates: {\n'
        '    canonical: "/blog/",\n'
        '  },\n'
        '};',
        styles['CodeBlock']
    ))

    story.append(PageBreak())

    # ===== ISSUE #2: GSC INDEXING BREAKDOWN =====
    story.append(Paragraph("2. Google Search Console: Full Indexing Breakdown", styles['SectionHead']))
    story.append(HRFlowable(width="100%", thickness=1, color=ACCENT_RED))
    story.append(Spacer(1, 8))

    story.append(Paragraph(
        "Data pulled directly from your GSC account (last updated Feb 3, 2026). "
        "GSC shows <b>23 not-indexed pages</b> across 6 different reasons and <b>12 indexed pages</b>:",
        styles['BodyText2']
    ))
    story.append(Spacer(1, 4))

    # GSC error breakdown table
    gsc_data = [
        [Paragraph("<b>Reason</b>", styles['TableCellBold']),
         Paragraph("<b>Source</b>", styles['TableCellBold']),
         Paragraph("<b>Pages</b>", styles['TableCellBold']),
         Paragraph("<b>Severity</b>", styles['TableCellBold'])],
        [Paragraph("Discovered - currently not indexed", styles['TableCell']),
         Paragraph("Google systems", styles['TableCell']),
         Paragraph("12", styles['TableCellRed']),
         Paragraph("CRITICAL", styles['TableCellRed'])],
        [Paragraph("Page with redirect", styles['TableCell']),
         Paragraph("Website", styles['TableCell']),
         Paragraph("5", styles['TableCellRed']),
         Paragraph("HIGH", ParagraphStyle('', parent=styles['TableCell'], textColor=ACCENT_ORANGE, fontName='Helvetica-Bold'))],
        [Paragraph("Not found (404)", styles['TableCell']),
         Paragraph("Website", styles['TableCell']),
         Paragraph("3", ParagraphStyle('', parent=styles['TableCell'], textColor=ACCENT_ORANGE, fontName='Helvetica-Bold')),
         Paragraph("HIGH", ParagraphStyle('', parent=styles['TableCell'], textColor=ACCENT_ORANGE, fontName='Helvetica-Bold'))],
        [Paragraph("Alternative page with proper canonical tag", styles['TableCell']),
         Paragraph("Website", styles['TableCell']),
         Paragraph("1", styles['TableCellRed']),
         Paragraph("CRITICAL", styles['TableCellRed'])],
        [Paragraph("Redirect error", styles['TableCell']),
         Paragraph("Website", styles['TableCell']),
         Paragraph("1", ParagraphStyle('', parent=styles['TableCell'], textColor=ACCENT_ORANGE, fontName='Helvetica-Bold')),
         Paragraph("MEDIUM", styles['TableCellBold'])],
        [Paragraph("Crawled - currently not indexed", styles['TableCell']),
         Paragraph("Google systems", styles['TableCell']),
         Paragraph("1", styles['TableCellBold']),
         Paragraph("MEDIUM", styles['TableCellBold'])],
    ]
    gsc_table = Table(gsc_data, colWidths=[2.8*inch, 1.1*inch, 0.7*inch, 0.9*inch])
    gsc_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), ACCENT_BLUE),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('GRID', (0, 0), (-1, -1), 0.4, MID_GRAY),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, LIGHT_GRAY]),
    ]))
    story.append(gsc_table)
    story.append(Spacer(1, 12))

    # Discovered but not indexed - detailed URLs
    story.append(Paragraph("2a. 'Discovered - currently not indexed' (12 pages)", styles['SubSection']))
    story.append(Paragraph(
        "Google found these URLs in your sitemap but has <b>not even crawled them yet</b> (Last Crawled: N/A). "
        "This strongly correlates with the canonical issue - Google may be deprioritizing these pages because "
        "their canonical tag points to the homepage.",
        styles['BodyText2']
    ))

    disc_urls = [
        "/blog/", "/blog/method-crm-mcp/", "/projects/", "/projects/aws-ec2-agent/",
        "/projects/calculator-server/", "/projects/jenkins-chatbot/", "/projects/jenkins-mcp/",
        "/projects/method-crm-mcp/", "/projects/reddit-agent/", "/projects/social-media-auto-poster/",
        "/projects/twitter-oauth/", "/projects/wp-mcp/"
    ]
    disc_data = [[Paragraph("<b>URL</b>", styles['TableCellBold']), Paragraph("<b>Last Crawled</b>", styles['TableCellBold'])]]
    for u in disc_urls:
        disc_data.append([Paragraph(u, styles['TableCell']), Paragraph("N/A", styles['TableCellRed'])])
    disc_table = Table(disc_data, colWidths=[4.5*inch, 1.2*inch])
    disc_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), ACCENT_BLUE),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('GRID', (0, 0), (-1, -1), 0.4, MID_GRAY),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, LIGHT_GRAY]),
    ]))
    story.append(disc_table)
    story.append(Spacer(1, 10))

    # Page with redirect
    story.append(Paragraph("2b. 'Page with redirect' (5 pages)", styles['SubSection']))
    story.append(Paragraph(
        "These are old URLs or variant domains that redirect. This is <b>expected behavior</b> for the domain "
        "variants (http/www redirecting to https). The clawdbot-guide without trailing slash redirects to the "
        "trailing slash version. The old /make-twitter-oauth/ URL is from a previous site structure.",
        styles['BodyText2']
    ))
    redir_data = [
        [Paragraph("<b>URL</b>", styles['TableCellBold']), Paragraph("<b>Crawled</b>", styles['TableCellBold'])],
        [Paragraph("http://avinashsangle.com/", styles['TableCell']), Paragraph("3 Feb 2026", styles['TableCell'])],
        [Paragraph("https://www.avinashsangle.com/", styles['TableCell']), Paragraph("3 Feb 2026", styles['TableCell'])],
        [Paragraph(".../blog/clawdbot-guide (no trailing slash)", styles['TableCell']), Paragraph("31 Jan 2026", styles['TableCell'])],
        [Paragraph("http://avinashsangle.com/make-twitter-oauth/", styles['TableCell']), Paragraph("28 Jan 2026", styles['TableCell'])],
        [Paragraph("http://www.avinashsangle.com/", styles['TableCell']), Paragraph("15 Jan 2026", styles['TableCell'])],
    ]
    redir_table = Table(redir_data, colWidths=[4.2*inch, 1.2*inch])
    redir_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), ACCENT_BLUE),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('GRID', (0, 0), (-1, -1), 0.4, MID_GRAY),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, LIGHT_GRAY]),
    ]))
    story.append(redir_table)
    story.append(Spacer(1, 10))

    # Not found 404
    story.append(Paragraph("2c. 'Not found - 404' (3 pages)", styles['SubSection']))
    story.append(Paragraph(
        "These are <b>old URLs from your previous site structure</b> (plain .html files) that no longer exist "
        "after the Next.js migration. Google still remembers them and keeps checking.",
        styles['BodyText2']
    ))
    nf_data = [
        [Paragraph("<b>URL</b>", styles['TableCellBold']), Paragraph("<b>Crawled</b>", styles['TableCellBold'])],
        [Paragraph("https://avinashsangle.com/blog.html", styles['TableCell']), Paragraph("30 Jan 2026", styles['TableCell'])],
        [Paragraph("https://avinashsangle.com/project-aws-ec2-agent.html", styles['TableCell']), Paragraph("30 Jan 2026", styles['TableCell'])],
        [Paragraph("https://blog.avinashsangle.com/cdn-cgi/l/email-protection", styles['TableCell']), Paragraph("19 Jan 2026", styles['TableCell'])],
    ]
    nf_table = Table(nf_data, colWidths=[4.5*inch, 1.2*inch])
    nf_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), ACCENT_BLUE),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('GRID', (0, 0), (-1, -1), 0.4, MID_GRAY),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, LIGHT_GRAY]),
    ]))
    story.append(nf_table)
    story.append(Paragraph(
        "<b>Fix:</b> Add 301 redirects from old URLs to new ones: /blog.html -> /blog/, "
        "/project-aws-ec2-agent.html -> /projects/aws-ec2-agent/. "
        "The Cloudflare email protection URL can be ignored.",
        styles['BodyText2']
    ))

    story.append(Spacer(1, 14))

    # ===== ISSUE #3: MISSING FROM SITEMAP =====
    story.append(Paragraph("3. HIGH: Showcase Page Missing from Sitemap", styles['SectionHead']))
    story.append(HRFlowable(width="100%", thickness=1, color=ACCENT_ORANGE))
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "The <b>/showcase/</b> page exists as a fully rendered HTML page and is crawlable (robots: index, follow), "
        "but it is <b>not included in sitemap.xml</b>. Additionally, its title has a duplication bug: "
        '"UI Component Showcase | Avinash Sangle | Avinash Sangle" (the name appears twice due to the title template).',
        styles['BodyText2']
    ))
    story.append(Paragraph(
        "<b>Fix:</b> Either add /showcase/ to the sitemap generation, or if it's an internal/dev page, "
        "set <font face='Courier'>robots: { index: false }</font> in its metadata to prevent crawling.",
        styles['BodyText2']
    ))

    story.append(Spacer(1, 14))

    # ===== ISSUE #4: JS BUNDLE SIZE =====
    story.append(Paragraph("4. MEDIUM: Large JavaScript Bundles", styles['SectionHead']))
    story.append(HRFlowable(width="100%", thickness=1, color=ACCENT_YELLOW))
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "The site ships approximately <b>3.2 MB of JavaScript</b> across multiple chunks. The three largest chunks "
        "are each ~549 KB (likely React DOM, Recharts, and Radix UI). While the site is statically exported "
        "(so core content is in HTML), large JS bundles can:",
        styles['BodyText2']
    ))
    story.append(Paragraph("- Consume Googlebot's crawl budget and rendering resources", styles['BulletItem']))
    story.append(Paragraph("- Slow down page load speed (a ranking factor)", styles['BulletItem']))
    story.append(Paragraph("- Delay First Contentful Paint and Largest Contentful Paint metrics", styles['BulletItem']))
    story.append(Spacer(1, 6))
    story.append(Paragraph(
        "<b>Fix:</b> Consider code-splitting more aggressively, lazy-loading Recharts and Radix UI components, "
        "and auditing unused dependencies. Run <font face='Courier'>npx @next/bundle-analyzer</font> to identify the largest contributors.",
        styles['BodyText2']
    ))

    story.append(PageBreak())

    # ===== WHAT'S WORKING WELL =====
    story.append(Paragraph("5. What's Working Well", styles['SectionHead']))
    story.append(HRFlowable(width="100%", thickness=1, color=ACCENT_GREEN))
    story.append(Spacer(1, 8))

    good_items = [
        ("<b>robots.txt:</b> Correctly configured with 'Allow: /' and sitemap reference."),
        ("<b>sitemap.xml:</b> Valid XML, accessible at /sitemap.xml, lists 14 URLs with lastmod dates and priorities."),
        ("<b>Meta Titles:</b> Every page has a unique, descriptive title using the Next.js title template."),
        ("<b>Meta Descriptions:</b> All pages have unique, keyword-rich descriptions (150-160 characters)."),
        ("<b>Robots Meta Tag:</b> All pages correctly set to 'index, follow'."),
        ("<b>Open Graph Tags:</b> Most pages include OG title, description, URL, and images."),
        ("<b>Twitter Cards:</b> Homepage and blog posts have proper Twitter card markup."),
        ("<b>Structured Data:</b> The clawdbot-guide page is exemplary with TechArticle, BreadcrumbList, HowTo, FAQPage, and SoftwareApplication schemas."),
        ("<b>Static HTML:</b> Since the site uses 'output: export', all content is pre-rendered in HTML. Googlebot can read it without JavaScript rendering."),
        ("<b>Internal Linking:</b> Navigation and page cross-links use proper &lt;a href&gt; tags."),
        ("<b>Trailing Slash Consistency:</b> next.config.ts enforces trailing slashes, preventing duplicate URL issues."),
    ]
    for item in good_items:
        story.append(Paragraph(item, styles['BulletItem']))

    story.append(Spacer(1, 14))

    # ===== ACTION PLAN =====
    story.append(Paragraph("6. Action Plan (Priority Order)", styles['SectionHead']))
    story.append(HRFlowable(width="100%", thickness=1, color=ACCENT_BLUE))
    story.append(Spacer(1, 8))

    actions = [
        ["1", "CRITICAL", "Fix canonical URLs in layout.tsx",
         "Remove 'alternates: { canonical: \"/\" }' from src/app/layout.tsx. This single change will fix 12 pages. "
         "Rebuild and redeploy the site.", "~15 min"],
        ["2", "CRITICAL", "Resubmit sitemap in Search Console",
         "After deploying the fix, go to Google Search Console > Sitemaps > resubmit sitemap.xml. "
         "Then use 'URL Inspection' to request indexing for each page.", "~30 min"],
        ["3", "HIGH", "Add 301 redirects for old URLs",
         "Redirect /blog.html to /blog/ and /project-aws-ec2-agent.html to /projects/aws-ec2-agent/. "
         "Use Next.js redirects in next.config.ts or a _redirects file for GitHub Pages.", "~20 min"],
        ["4", "HIGH", "Fix showcase page",
         "Either add /showcase/ to sitemap or set its robots to noindex. Fix the duplicate title.", "~10 min"],
        ["5", "MEDIUM", "Add structured data to all project pages",
         "The clawdbot-guide page is a great template. Add similar JSON-LD schemas (SoftwareApplication, BreadcrumbList) to all project pages.", "~2 hrs"],
        ["6", "MEDIUM", "Optimize JS bundle size",
         "Use bundle analyzer to identify and lazy-load heavy libraries. Target less than 1.5 MB total JS.", "~3 hrs"],
        ["7", "LOW", "Monitor indexing progress",
         "Check Search Console weekly for 4-6 weeks after fixes. Google typically re-crawls and indexes within 1-4 weeks.", "Ongoing"],
    ]

    act_data = [
        [Paragraph("<b>#</b>", styles['TableCellBold']),
         Paragraph("<b>Priority</b>", styles['TableCellBold']),
         Paragraph("<b>Action</b>", styles['TableCellBold']),
         Paragraph("<b>Details</b>", styles['TableCellBold']),
         Paragraph("<b>Time</b>", styles['TableCellBold'])],
    ]
    for a in actions:
        priority_style = styles['TableCellRed'] if a[1] == "CRITICAL" else (
            ParagraphStyle('', parent=styles['TableCell'], textColor=ACCENT_ORANGE, fontName='Helvetica-Bold') if a[1] == "HIGH" else styles['TableCellBold']
        )
        act_data.append([
            Paragraph(a[0], styles['TableCell']),
            Paragraph(a[1], priority_style),
            Paragraph(a[2], styles['TableCellBold']),
            Paragraph(a[3], styles['TableCell']),
            Paragraph(a[4], styles['TableCell']),
        ])

    act_table = Table(act_data, colWidths=[0.3*inch, 0.85*inch, 1.4*inch, 3.0*inch, 0.7*inch])
    act_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), ACCENT_BLUE),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('GRID', (0, 0), (-1, -1), 0.4, MID_GRAY),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, LIGHT_GRAY]),
    ]))
    story.append(act_table)

    story.append(Spacer(1, 20))

    # Expected timeline box
    timeline_data = [
        [Paragraph("<b>EXPECTED TIMELINE AFTER FIXES</b>", ParagraphStyle('', parent=styles['Normal'], fontSize=11, textColor=ACCENT_BLUE, fontName='Helvetica-Bold'))],
        [Paragraph(
            "<b>Week 1:</b> Deploy canonical fix + resubmit sitemap. Google begins re-crawling.<br/>"
            "<b>Week 2-3:</b> Google processes updated pages. Expect 5-10 pages indexed.<br/>"
            "<b>Week 4-6:</b> Full indexing of all pages. Search Console coverage report shows green.<br/>"
            "<b>Month 2+:</b> Pages start ranking for target keywords. Organic traffic increases.",
            styles['BodyText2']
        )],
    ]
    tl_table = Table(timeline_data, colWidths=[doc.width])
    tl_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), HexColor("#e8f5e9")),
        ('BACKGROUND', (0, 1), (-1, -1), white),
        ('BOX', (0, 0), (-1, -1), 1.5, ACCENT_GREEN),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
        ('LEFTPADDING', (0, 0), (-1, -1), 14),
        ('RIGHTPADDING', (0, 0), (-1, -1), 14),
    ]))
    story.append(tl_table)

    # Build
    doc.build(story, onFirstPage=add_header_footer, onLaterPages=add_header_footer)
    print(f"Report generated: {OUTPUT_PATH}")


if __name__ == "__main__":
    build_report()
