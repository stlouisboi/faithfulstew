from PIL import Image, ImageDraw, ImageFont

NAVY = (27, 34, 44)
GOLD = (212, 175, 55)
CREAM = (245, 241, 232)
MUTE = (176, 182, 190)

PLAYFAIR = "/app/.fonts/Playfair.ttf"
INTER = "/app/.fonts/Inter.ttf"


def font(path, size, weight=None):
    f = ImageFont.truetype(path, size)
    if weight is not None:
        try:
            f.set_variation_by_axes([weight])
        except Exception:
            pass
    return f


def tracked_text(draw, xy, text, fnt, fill, tracking=0, anchor_left=True):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        w = draw.textlength(ch, font=fnt)
        x += w + tracking
    return x


def wrap(draw, text, fnt, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        test = (cur + " " + w).strip()
        if draw.textlength(test, font=fnt) <= max_w:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


# ---------------- OG WORKBOOK ----------------
def build_workbook():
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), NAVY)
    d = ImageDraw.Draw(img)

    cover = Image.open("/tmp/wb_a_cut.png").convert("RGBA")
    th = 540
    tw = int(cover.width * th / cover.height)
    cover = cover.resize((tw, th), Image.LANCZOS)
    cx = 70
    cy = (H - th) // 2
    img.paste(cover, (cx, cy), cover)

    tx = 460
    y = 118
    f_label = font(INTER, 25, 700)
    tracked_text(d, (tx, y), "THE FAITHFUL STEWARD", f_label, GOLD, tracking=6)
    d.line([(tx + 2, y + 44), (tx + 185, y + 44)], fill=GOLD, width=3)

    y += 76
    f_title = font(PLAYFAIR, 90, 800)
    d.text((tx - 4, y), "The Workbook", font=f_title, fill=CREAM)

    y += 122
    f_sub = font(INTER, 34, 400)
    for line in wrap(d, "Turn conviction into the way you actually build and lead.", f_sub, 660):
        d.text((tx, y), line, font=f_sub, fill=CREAM)
        y += 44

    y += 26
    f_meta = font(INTER, 23, 700)
    tracked_text(d, (tx, y), "$29.99   \u00b7   COMPANION TO KINGDOM BEFORE COMPANY", f_meta, GOLD, tracking=0.5)

    img.save("/app/public/og-workbook.jpg", quality=88)
    print("og-workbook done")


# ---------------- OG HOME ----------------
def build_home():
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), NAVY)
    d = ImageDraw.Draw(img)

    # workbook behind
    wb = Image.open("/tmp/wb_a_cut.png").convert("RGBA")
    wbh = 430
    wbw = int(wb.width * wbh / wb.height)
    wb = wb.resize((wbw, wbh), Image.LANCZOS)
    img.paste(wb, (250, 120), wb)

    # paperback front
    pb = Image.open("/app/public/book-3d-cover.png").convert("RGBA")
    pbh = 500
    pbw = int(pb.width * pbh / pb.height)
    pb = pb.resize((pbw, pbh), Image.LANCZOS)
    img.paste(pb, (55, 78), pb)

    tx = 610
    y = 120
    f_label = font(INTER, 26, 700)
    tracked_text(d, (tx, y), "THE FAITHFUL STEWARD", f_label, GOLD, tracking=6)
    d.line([(tx + 2, y + 46), (tx + 190, y + 46)], fill=GOLD, width=3)

    y += 74
    f_title = font(PLAYFAIR, 76, 800)
    for line in ["Put the", "Kingdom Before", "the Company."]:
        d.text((tx - 3, y), line, font=f_title, fill=CREAM)
        y += 82

    y += 18
    f_sub = font(INTER, 32, 400)
    for line in wrap(d, "A biblical framework for building a business under God's authority.", f_sub, 520):
        d.text((tx, y), line, font=f_sub, fill=MUTE)
        y += 42

    img.save("/app/public/og-home.jpg", quality=88)
    print("og-home done")


build_workbook()
build_home()
