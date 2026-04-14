"""Generate a 1200x630 OG (Open Graph) image for a blog post.

Reads title, category, and output filename from the blog's page.tsx, then
renders a branded PNG into public/ so Twitter/LinkedIn/Dev.to/Hashnode
previews all load correctly.

Usage:
    python scripts/generate_og_image.py <blog-slug>
    python scripts/generate_og_image.py --all                 # regenerate all
    python scripts/generate_og_image.py <blog-slug> --force   # overwrite

Design:
    1200x630 dark canvas (#1a1b1e)
    Orange accent bar + category label (#ff8f33)
    Title in Plus Jakarta Sans Bold, wrapped
    Author line in bottom-left
    Site URL in top-right
"""

import argparse
import re
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

REPO_ROOT = Path(__file__).resolve().parent.parent
BLOG_ROOT = REPO_ROOT / "src" / "app" / "blog"
PUBLIC_ROOT = REPO_ROOT / "public"
FONT_PATH = REPO_ROOT / "scripts" / "assets" / "fonts" / "PlusJakartaSans-Bold.ttf"

# Theme (matches the site's dark accent palette)
BG = (26, 27, 30)            # #1a1b1e
FG = (240, 240, 240)          # #f0f0f0
ACCENT = (255, 143, 51)       # #ff8f33
MUTED = (160, 160, 160)

WIDTH, HEIGHT = 1200, 630
MARGIN = 80


def extract_from_tsx(page_tsx: Path) -> dict:
    """Return dict with title, category, og_image_filename."""
    if not page_tsx.exists():
        sys.exit(f"page.tsx not found: {page_tsx}")

    src = page_tsx.read_text(encoding="utf-8")

    # Title: first metadata.title value
    title_match = re.search(r'title:\s*"([^"]+)"', src)
    if not title_match:
        sys.exit("Could not find title in metadata")
    title = title_match.group(1)

    # Category: text inside <p className="text-accent font-semibold ...">CATEGORY</p>
    cat_match = re.search(
        r'<p\s+className="text-accent[^"]*"[^>]*>\s*([A-Z][A-Z0-9 &-]+?)\s*</p>',
        src,
    )
    category = cat_match.group(1).strip() if cat_match else "ARTICLE"

    # OG image URL -> filename
    og_match = re.search(r"openGraph:\s*\{[^}]*images:\s*\[\s*\{\s*url:\s*\"([^\"]+)\"", src, re.DOTALL)
    if og_match:
        og_filename = og_match.group(1).rstrip("/").split("/")[-1]
    else:
        # fallback: derive from slug
        og_filename = f"og-{page_tsx.parent.name}.png"

    return {"title": title, "category": category, "og_filename": og_filename}


def wrap_text(text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current: list[str] = []
    for word in words:
        trial = " ".join(current + [word])
        bbox = font.getbbox(trial)
        if bbox[2] - bbox[0] <= max_width:
            current.append(word)
        else:
            if current:
                lines.append(" ".join(current))
            current = [word]
    if current:
        lines.append(" ".join(current))
    return lines


def render(title: str, category: str, output_path: Path) -> None:
    img = Image.new("RGB", (WIDTH, HEIGHT), BG)
    draw = ImageDraw.Draw(img)

    # Fonts
    font_category = ImageFont.truetype(str(FONT_PATH), 24)
    font_url = ImageFont.truetype(str(FONT_PATH), 22)
    font_title = ImageFont.truetype(str(FONT_PATH), 64)
    font_author_name = ImageFont.truetype(str(FONT_PATH), 28)
    font_author_role = ImageFont.truetype(str(FONT_PATH), 20)

    # Top-right: site URL
    site_url = "avinashsangle.com"
    bbox = font_url.getbbox(site_url)
    url_width = bbox[2] - bbox[0]
    draw.text((WIDTH - MARGIN - url_width, MARGIN), site_url, font=font_url, fill=MUTED)

    # Top-left: accent bar + category
    bar_y = MARGIN + 8
    draw.rectangle([MARGIN, bar_y, MARGIN + 48, bar_y + 4], fill=ACCENT)
    draw.text((MARGIN + 64, MARGIN), category, font=font_category, fill=ACCENT)

    # Title block - vertically centered
    available_width = WIDTH - 2 * MARGIN
    lines = wrap_text(title, font_title, available_width)
    # Limit to 4 lines, ellipsis if longer
    if len(lines) > 4:
        lines = lines[:4]
        lines[-1] = lines[-1].rstrip() + "..."

    # Compute line height
    ascent, descent = font_title.getmetrics()
    line_height = ascent + descent + 8
    total_title_height = line_height * len(lines)
    title_start_y = (HEIGHT - total_title_height) // 2 - 20

    for i, line in enumerate(lines):
        draw.text((MARGIN, title_start_y + i * line_height), line, font=font_title, fill=FG)

    # Bottom-left: author block
    author_y = HEIGHT - MARGIN - 72
    draw.rectangle([MARGIN, author_y, MARGIN + 64, author_y + 3], fill=ACCENT)
    draw.text((MARGIN, author_y + 14), "Avinash Sangle", font=font_author_name, fill=FG)
    draw.text((MARGIN, author_y + 48), "Claude Code & AI Engineering", font=font_author_role, fill=MUTED)

    img.save(output_path, "PNG", optimize=True)


def generate_for_slug(slug: str, force: bool = False) -> Path | None:
    page_tsx = BLOG_ROOT / slug / "page.tsx"
    if not page_tsx.exists():
        print(f"  [{slug}] page.tsx not found, skipping")
        return None

    meta = extract_from_tsx(page_tsx)
    output_path = PUBLIC_ROOT / meta["og_filename"]

    if output_path.exists() and not force:
        print(f"  [{slug}] already exists at {output_path.name} (use --force to overwrite)")
        return output_path

    render(meta["title"], meta["category"], output_path)
    print(f"  [{slug}] -> public/{meta['og_filename']}  (category: {meta['category']})")
    return output_path


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate Open Graph images for blog posts.")
    parser.add_argument("slug", nargs="?")
    parser.add_argument("--all", action="store_true", help="Generate for every post in src/app/blog/")
    parser.add_argument("--force", action="store_true", help="Overwrite existing images")
    args = parser.parse_args()

    if not FONT_PATH.exists():
        sys.exit(f"Font missing: {FONT_PATH}. Re-download Plus Jakarta Sans.")

    PUBLIC_ROOT.mkdir(exist_ok=True)

    if args.all:
        slugs = [p.name for p in sorted(BLOG_ROOT.iterdir()) if (p / "page.tsx").exists()]
        print(f"Generating OG images for {len(slugs)} posts:")
        for slug in slugs:
            generate_for_slug(slug, force=args.force)
        return

    if not args.slug:
        sys.exit("Provide a blog slug or --all")

    generate_for_slug(args.slug, force=args.force)


if __name__ == "__main__":
    main()
