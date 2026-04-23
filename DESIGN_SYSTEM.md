# The Host Atlas — Design System
## Mandatory reference for all components. Read before writing any code.

This design system must be enforced on every component, every screen, every element.
Deviation is not permitted without explicit approval.

---

## 1. Brand Essence — Overarching Principles

Any design element must serve: **Authority, Editorial intelligence, Controlled luxury, Emotional depth, Strategic clarity.**

| Element | DO | DO NOT |
|---|---|---|
| **Tone** | Calm, Architectural, Intelligent | Decorative, Trend-driven, Startup-techy, Over-animated |
| **Intent** | Restraint signals confidence. Luxury moves slowly. | Bouncing, scaling, or dramatic movement |
| **Imagery** | Landscape as philosophy. Unnamed places. Human in frame facing away. | Famous landmarks, recognisable geography, corporate cruise ship imagery |

---

## 2. Colour System — Strict Hex Values Only

No other colours are permitted. Ever.

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--green` | Deep Forest Green | `#1B3D2F` | Green panel backgrounds. Primary accent on white panels. |
| `--white` | Warm White | `#FBFAF8` | White panel backgrounds. 60–70% of visible area. |
| `--off-white` | Warm Off-White | `#F5F3EF` | Text on green panels. |
| `--text` | Near Black | `#1A1A2E` | All text on white panels. |
| `--bronze` | Antique Bronze | `#C49A5C` | Accent only. Under 8% of visible area. Icons, borders, separators, tagline. Bronze feels like jewellery — never paint. |

### Panel pairing rules — always follow these

| Panel | Background | Text | Accent |
|---|---|---|---|
| Green panel | `#1B3D2F` | `#F5F3EF` | `#C49A5C` |
| White panel | `#FBFAF8` | `#1A1A2E` | `#1B3D2F` |

### Tailwind — use these classes only

```
bg: bg-[#1B3D2F] · bg-[#FBFAF8] · bg-[#F5F3EF] · bg-[#1A1A2E] · bg-[#C49A5C]
text: text-[#1B3D2F] · text-[#FBFAF8] · text-[#F5F3EF] · text-[#1A1A2E] · text-[#C49A5C]
border: border-[#C49A5C] · border-[#1B3D2F]
```

---

## 3. Typography — Non-Negotiable

Two fonts only. No others permitted.

| Element | Font | Weight | Size | Line height | Notes |
|---|---|---|---|---|---|
| All headings h1–h6 | **Playfair Display** | 500 default / 600 rare | Hero: 56px / Section: 40px / Sub: 28px | 1.05 (hero) · 1.1–1.2 (sections) | Letter-spacing: -0.01em |
| Body copy | **Inter** | 400 body / 500 nav+CTA / 600 rare | 18px body / 16px secondary / 13px caption | 1.6–1.75 | Max paragraph width: 48–52ch |
| Tagline | **Playfair Display** | 400 italic | 18px on site | 1.4 | Bronze colour only. Never all-caps. |
| Overlines | **Inter** | 500 | 10–11px | — | Uppercase, letter-spacing 0.07–0.09em, Deep Green |
| Verbatims | **Playfair Display** | 400 italic | 14–16px | 1.5 | Inside callout boxes |

### Never do
- Never use weight 300 on Inter
- Never use weight 700+ on Playfair Display
- Never use any font other than Playfair Display and Inter
- Never use full-width paragraphs — always constrain to 48–52ch max

---

## 4. Spacing — Strict Rules

| Element | Required range |
|---|---|
| Section padding top/bottom | 120–160px desktop |
| Headline → first paragraph | 32–40px |
| Paragraph → next element | 56–72px |
| Card internal padding | 20–24px |
| Grid gap | 16–24px |

---

## 5. Motion — Luxury Moves Slowly

| Element | DO | DO NOT |
|---|---|---|
| UI transitions | 300–400ms ease-out | Bounce, scale, dramatic entrance |
| Scroll reveal | Fade-up: translateY 20px → 0, opacity 0 → 1, 400ms | Fast transitions, aggressive parallax |
| Hero | Subtle Ken Burns 8–20s loop | Fast zoom, dramatic movement |
| All animation | Always respect prefers-reduced-motion | Never animate without this check |

---

## 6. Images — Critical Rules

- All images use `next/image` component with correct `alt` text
- Full-bleed images always have an overlay for text legibility:
  - Dark overlay: `rgba(0,0,0,0.42)` minimum
  - Green overlay: `rgba(27,61,47,0.87)` for green panel screens
- Never use Unsplash URLs — local files in `public/images/` only
- Never show a famous landmark — unnamed landscape only
- Always have a human figure in frame, facing away, world dominant

### Image slot assignments

| File | Screen | Overlay |
|---|---|---|
| `hero-01.jpg` | S1 Hero full-bleed | `rgba(0,0,0,0.42)` |
| `screen2-deck-river.jpg` | S2 figure at railing + wallpaper split | None — CSS filter only |
| `screen3-demo.jpg` | S3 background | `rgba(0,0,0,0.35)` |
| `screen4-background.jpg` | S4 full-bleed | `rgba(27,61,47,0.87)` |
| `screen5-deck-coastal.jpg` | S5 left column | None |
| `screen6-operator.jpg` | S6 right column | None |
| `screen7-insight.jpg` | S7 supporting | None |
| `screen8-operator.jpg` | S8 supporting | None |
| `screen9-evening-water.jpg` | S9 full-bleed closing | `rgba(27,61,47,0.78)` |
| `logo-light.png` | Nav on white background | — |
| `logo-dark.png` | Nav on scroll / green panels | — |

---

## 7. Icons

| Rule | Requirement |
|---|---|
| Style | Thin stroke, minimal, geometric |
| Never | Fill icons, gradients, multicolour |
| Size | 20–24px standard / 16px inline |

---

## 8. Global Copy Rules — Enforced Everywhere

| Element | Required | Never |
|---|---|---|
| Product name | **The Host Atlas** | HostAtlas · Host Atlas · TheHostAtlas |
| Tagline | *Curated narratives for the silent stretches* — sentence case, Playfair italic, bronze | All-caps · tiny · decorative-only |
| Primary CTA | **Get in touch** | "Request a conversation" · "Request a call" · "Book a meeting" |
| Positioning line (locked) | *Guides bring the highlights to life. The Host Atlas curates the silent stretches.* | Any paraphrase |
| Contact email | connect@hostatlas.guide | hello@hostatlas.guide (old — do not use) |
| Contact phone | +47 995 95 002 | — |
| Cruise types | river, coastal, and expedition | river and coastal (missing expedition) |

---

## 9. Component Quality Check

Before marking any component complete, confirm:
- Does this look premium or generic?
- Would a cruise operator trust this company from this screen?
- Is the typography doing the work or is it just text?
- Is the whitespace generous enough that nothing feels rushed?
- Are all colours strictly within the five-token palette?
- Does every image have the correct overlay?
- Is the product name correct everywhere in this component?

---

## 10. Build Discipline

- Run `npm run build` after every component
- Never commit a build that fails
- Never push without a passing build
- Show component code and await approval before committing
- Build one screen at a time

---

*The Host Atlas · Design System · April 2026*
*Source: hostatlas-design-playbook · Applied to: hostatlas_website*
