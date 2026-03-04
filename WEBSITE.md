# Wolf Mind Hypnotherapy — Website Copy & Brand Guidelines

## Brand Identity

### Name Variants (as seen across assets)
- **Primary:** Wolf Mind Hypnotherapy
- **Alternate spelling:** WolfMinds Hypnotherapy

### Tagline
> Unlock your mind, transform your life.

### Therapist
- **Name:** Piers Gentry
- **Title:** Clinical Hypnotherapist

### Contact Details
| Channel | Value |
|---|---|
| Phone (UK) | +44 7823 389590 |
| Phone (local) | 07823 389590 |
| Email | wolfminds-hypnotherapy@outlook.com |
| Sessions | Online sessions available |

---

## Brand Guidelines

### Colour Palette

| Role | Hex | Usage |
|---|---|---|
| Background | `#0e0e0e` | Page background |
| Surface / Card | `#181818` | Section backgrounds, cards |
| Gold (Primary Accent) | `#c9a025` | Headings, icons, CTAs, borders |
| Gold (Hover / Light) | `#e0b84a` | Interactive hover states |
| Body Text | `#f0ece3` | Primary readable text |
| Muted Text | `#a89f8f` | Subheadings, secondary copy |
| Dark Text on Gold | `#0e0e0e` | Text inside filled gold buttons |

### Typography

| Element | Style |
|---|---|
| Headings | Serif (Georgia / Times New Roman) — bold, tight letter-spacing |
| Body / UI | Sans-serif (Arial / system-ui) — regular / light weight |
| Labels / Badges | Sans-serif, uppercase, wide letter-spacing (0.15–0.22em) |
| Heading sizes | Fluid / clamp: ~1.9rem → 3.2rem for H1, ~1.5rem → 2.3rem for H2 |

### Logo
- **Shape:** Circular badge with a stylised wolf-head silhouette
- **Colour:** Gold on transparent / dark background
- **Ears:** Two pointed ears at top-left and top-right
- **Eyes:** Two filled ellipses with dark pupils
- **Nose / muzzle:** Soft ellipse, lower centre
- **Mouth:** Gentle upward curve
- **Border:** Gold circle ring
- **Usage:** White/transparent background variants not provided — use only on dark backgrounds

### Aesthetic & Tone
- Minimal, premium, therapeutic
- Dark luxury — not clinical or sterile
- Gold accents convey warmth, trust, and quality
- No garish gradients; use radial glows sparingly for depth
- Subtle grid/dot texture overlay at very low opacity (≈3%)

---

## Landing Page Copy

### Navigation

**Brand lockup:**
```
[Wolf Logo]  WOLF MIND
             HYPNOTHERAPY
```

**Nav links (right-aligned):**
```
+44 7823 389590
wolfminds-hypnotherapy@outlook.com
```

---

### Hero Section

**Section label:**
```
Wolf Mind Hypnotherapy
```

**Headline (H1):**
```
Struggling with stress, anxiety
or overwhelm?
```

**Body:**
```
At WolfMinds Hypnotherapy, I help you quiet the noise,
reconnect with yourself, and regain control —
one session at a time.
```

**Primary CTA button:**
```
Book your breakthrough today
```

---

### Services Strip

Five services displayed with gold checkmark icons:

1. Clinical Hypnotherapy
2. Stress & Anxiety Relief
3. Confidence Building
4. Habit Change
5. Relaxation & Mind Reset Sessions

---

### "Helps With" Section

**Section label:**
```
Clinical Hypnotherapy for lasting change
```

**Heading (H2):**
```
Helping you work with
the subconscious to:
```

**Four benefit cards:**
1. Reduce anxiety & overwhelm
2. Break unwanted habits
3. Build confidence & self-belief
4. Process past experiences safely

**Disclaimer / reassurance callout:**
```
No loss of control. No stage hypnosis.
Just focused, professional therapeutic work.
```

---

### "My Approach" Section

**Section label:**
```
My approach
```

**Heading (H2):**
```
Calm, client-led hypnotherapy
```

**Body paragraph 1:**
```
A calm, client-led style of hypnotherapy that prevents overwhelm
and respects your pace. You remain aware and in control throughout.
```

**Body paragraph 2 (editorial extension):**
```
Together we work with your subconscious mind to create meaningful,
lasting change — at a speed and depth that feels right for you.
```

**Therapist card:**
```
[Avatar icon]
Piers Gentry
CLINICAL HYPNOTHERAPIST

[ ONLINE SESSIONS AVAILABLE ]
```

---

### CTA / Contact Section

**Section label:**
```
Get in touch
```

**Heading (H2):**
```
Unlock your mind,
transform your life.
```

**Body:**
```
Take the first step. Reach out today to discuss
how hypnotherapy can help you.
```

**Primary CTA button:**
```
Call +44 7823 389590
```

**Secondary CTA button (outline style):**
```
Email Us
```

**Contact details:**
```
📞 +44 7823 389590
✉️ wolfminds-hypnotherapy@outlook.com
```

---

### Footer

```
© 2026 Wolf Mind Hypnotherapy — Piers Gentry, Clinical Hypnotherapist
```

---

## Page Structure

```
<nav>           Fixed header — logo + contact links
<hero>          Full-viewport — headline, body, CTA
<services-strip> Gold checkmark list of 5 services
<helps>         Dark section — 4-card benefit grid + disclaimer
<approach>      Card surface — copy + therapist profile card
<cta>           Centred — headline, buttons, contact links
<footer>        Minimal — copyright line
```

---

## Design Principles

1. **Dark by default** — all sections use `#0e0e0e` or `#181818` background.
2. **Gold as the single accent** — reserve gold exclusively for interactive elements, borders, icons, and labels. Never use it for large filled background areas.
3. **No forms** — contact is handled through phone and email links only.
4. **No stock photography** — the brand relies on the wolf logo, typography, and geometry.
5. **Border-left gold rule** — use a 3px solid gold left border on cards and callouts instead of drop shadows.
6. **Radial glow sparingly** — one subtle gold radial gradient per section maximum, at 5–8% opacity.
7. **Responsive via flex/grid** — no fixed pixel widths; use `clamp()` for type and `minmax()` for grids.
