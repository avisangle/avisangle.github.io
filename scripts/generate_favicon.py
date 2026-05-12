"""Generate AS monogram favicon assets for avinashsangle.com.

Outputs:
  src/app/favicon.ico        (16, 32, 48 multi-size)
  src/app/icon.png           (512x512, modern browsers + PWA)
  src/app/apple-icon.png     (180x180, iOS home-screen)
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
APP_DIR = ROOT / "src" / "app"

BG = "#1a1b1e"
FG = "#ff8f33"
RADIUS_RATIO = 0.20  # rounded-square corner radius
TEXT = "AS"

FONT_CANDIDATES = [
    "/System/Library/Fonts/SFCompactRounded.ttf",
    "/System/Library/Fonts/HelveticaNeue.ttc",
    "/System/Library/Fonts/Helvetica.ttc",
]


def load_font(size: int) -> ImageFont.FreeTypeFont:
    for path in FONT_CANDIDATES:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size)
            except OSError:
                continue
    raise RuntimeError("No suitable bold sans font found")


def render_master(side: int) -> Image.Image:
    img = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    radius = int(side * RADIUS_RATIO)
    draw.rounded_rectangle((0, 0, side - 1, side - 1), radius=radius, fill=BG)

    # Find largest font size whose "AS" fits comfortably inside ~70% of width.
    target_width = side * 0.72
    font_size = int(side * 0.65)
    while font_size > 10:
        font = load_font(font_size)
        bbox = draw.textbbox((0, 0), TEXT, font=font, anchor="lt")
        tw = bbox[2] - bbox[0]
        if tw <= target_width:
            break
        font_size -= 4

    # Optical centering tweak: nudge up slightly so the letters sit visually centered.
    offset_y = -(side * 0.02)
    # stroke_width fakes a bolder weight when the font lacks an explicit bold cut.
    stroke = max(1, int(side * 0.018))
    draw.text(
        (side / 2, side / 2 + offset_y),
        TEXT,
        font=font,
        fill=FG,
        anchor="mm",
        stroke_width=stroke,
        stroke_fill=FG,
    )
    return img


def main() -> None:
    APP_DIR.mkdir(parents=True, exist_ok=True)

    master = render_master(1024)

    # icon.png (Next.js auto-emits <link rel="icon">)
    master.resize((512, 512), Image.LANCZOS).save(APP_DIR / "icon.png", "PNG", optimize=True)

    # apple-icon.png (Next.js auto-emits <link rel="apple-touch-icon">)
    master.resize((180, 180), Image.LANCZOS).save(APP_DIR / "apple-icon.png", "PNG", optimize=True)

    # favicon.ico with multiple embedded sizes for legacy browsers
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    master.save(APP_DIR / "favicon.ico", format="ICO", sizes=ico_sizes)

    print("Generated:")
    for f in ("favicon.ico", "icon.png", "apple-icon.png"):
        path = APP_DIR / f
        print(f"  {path.relative_to(ROOT)}  ({path.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
