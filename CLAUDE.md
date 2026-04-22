# CLAUDE.md — HostAtlas Project
# _active/hostatlas · Updated 2026-04
# Inherits all rules from Developer_ClaudeCode/CLAUDE.md — this file extends and overrides.

---

## Project Overview

**HostAtlas** — B2B/B2C hospitality platform. Landscape awareness and storytelling for premium river cruises, coastal voyages, and scenic journeys.

**Two products:**
- `hostatlas/` — Operator hub (B2B dashboard)
- `helmut-pwa/` — Guest PWA (Helmut) — consumer-facing, mobile-first, senior audience (65–85)

**Stack:** React 18 + TypeScript + Vite · Tailwind CSS · shadcn/ui (Radix) · Supabase · React Router DOM

**Full design spec:** `_assets/hostatlas-design-playbook/` (authoritative)
**Machine-readable rules:** `src/data/guardrailRules.ts` (38 rules with severity)
**Component registry:** `src/data/componentRegistry.tsx`

---

## Brand Identity

Calm, architectural, intelligent, editorial authority, controlled luxury.
Restraint signals confidence. Never startup-techy, never playful, never urgent.

**Two rendering modes:**
- **Signature Mode (B2B)** — Design System Hub, sales, onboarding. Deep Green + Bronze structural.
- **Operator Expression Mode (B2C)** — Guest-facing. Adapts accent color per operator. Map, layout, typography remain immutable.

---

## Color System — 60/30/8 Distribution Rule

| Token | Tailwind | HSL | Usage |
|---|---|---|---|
| Base Canvas | `bg-background` | 37 31% 95% | Primary surface — 60–70% of visible area |
| Warm Stone | `bg-card` | 33 16% 89% | Cards, panels, secondary surfaces |
| Deep Charcoal | `text-foreground` | 120 9% 11% | All primary text |
| Muted | `text-muted-foreground` | 45 8% 40% | Secondary text, captions |
| Deep Green | `bg-primary` / `deep-green` | 158 41% 21% | Structure, navigation, anchor panels — 20–30% |
| Terracotta | `bg-primary` / `terracotta` | 14 53% 50% | Interaction only — buttons, CTAs, active states |
| Champagne Bronze | `bg-accent` / `accent` | 40 46% 53% | Highlights only — **max 8%** |
| Warm Border | `border` | 33 12% 76% | Single border color — no variations |

**Hard rules:**
- No gradients. No colors outside this palette. No blue tones.
- Terracotta: interaction elements only — never typography, never maps, never nav, never borders
- Bronze: highlights only — text only on Deep Green backgrounds, never on light surfaces
- Deep Green: structural surfaces only — never as a button or interactive color
- No pure black (#000) — use Deep Charcoal (#1A1F1A)

**CTA by environment:**
- On Deep Green → Champagne Bronze CTA (solid)
- On Base Canvas → Terracotta CTA (solid)
- On Terracotta panel → Base Canvas / white CTA
- Never Terracotta CTA on Deep Green. Never Bronze + Terracotta together.

---

## Typography

| Role | Font | Weight | Size | Notes |
|---|---|---|---|---|
| Display | Playfair Display | 500 | 48px / 3rem | — |
| H1 | Playfair Display | 500 | 36px / 2.25rem | — |
| H2 | Playfair Display | 500 | 24px / 1.5rem | — |
| H3 | Playfair Display | 500 | 20px / 1.25rem | — |
| Body Large | Lexend | 400 | 18px / 1.125rem | Primary guest content |
| Body | Lexend | 400 | 16px / 1rem | — |
| Body Small | Lexend | 400 | 14px / 0.875rem | — |
| Label | Lexend | 500 | 13px / 0.8125rem | — |
| Caption | Lexend | 400 | 12px / 0.75rem | — |

**Hard rules:**
- Weight 300 never used — anywhere
- Playfair Display: headlines only (Display–H3)
- Lexend: body, UI, labels, captions — never headlines
- Body minimum: 16px. Guest-facing (Helmut): 18px preferred.

---

## Spacing Scale

```
space-1 =  4px   space-2 =  8px   space-3 = 12px
space-4 = 16px   space-5 = 24px   space-6 = 32px
space-7 = 48px   space-8 = 64px   space-9 = 96px
```

**Context rules:** Sections → `space-8`. Blocks → `space-6`. Components → `space-4`. Text stacks → `space-3`.
Never use arbitrary px values. Never reduce spacing on mobile — same tokens at all breakpoints.

---

## Layout Tokens

| Token | Value | Use |
|---|---|---|
| `max-w-prose` | 52ch | Max paragraph width |
| `max-w-reading` | 720px | Editorial / long-form content |
| `max-w-content` | 1100px | Dashboard / page content |
| `max-w-wide` | 1280px | Multi-panel / sidebar layouts |

Grid: 12 col / 24px gutter (desktop) · 8 col / 16px (tablet) · 4 col / 16px (mobile)

---

## Component Rules

- One primary button per section maximum
- Button labels: verb-first, 1–3 words, no exclamation marks
- Hover: opacity shift only — no scale, no bounce
- No nested cards
- Full-width buttons: mobile only
- Sentence case headlines — never Title Case
- No urgency language

**Panel Pairing (signature layout):**
- Primary Context (`bg-background`) + Anchor Context (`bg-primary`) side by side
- Stacks vertically on mobile. One pairing per major section.

**Motion:**
- UI transitions: 300–400ms ease-out (`duration-ui` = 350ms)
- Hero loops: 8–20s ambient only
- No parallax, no scale-on-hover, no spring physics, no disorienting animation

---

## Helmut PWA — Additional Constraints (Guest-Facing)

Audience: cruise guests aged 65–85. Every decision prioritizes clarity and confidence.

- Body Large (18px) for all primary content — never smaller
- Minimum touch target: 48px (52px preferred)
- Minimum 12px spacing between adjacent tap targets
- Single-tap only — no double-tap, long-press, or complex gestures
- Pinch-to-zoom snaps to discrete levels — no free zoom
- Always visible "Return to vessel" button on map
- Map markers: white disk + black ring + black icon — monochrome always
- Selected marker state only: 3px Champagne Bronze ring
- WCAG AAA preferred (7:1) for all body text in Helmut

---

## Key Source Files

| File | Purpose |
|---|---|
| `_assets/hostatlas-design-playbook/` | Full design spec — authoritative |
| `src/data/guardrailRules.ts` | 38 machine-readable compliance rules |
| `src/data/componentRegistry.tsx` | Component definitions with do/don'ts |
| `src/data/channelKits.tsx` | Channel constraints (web, landing, social, email) |
| `tailwind.config.ts` | All token extensions |
| `src/index.css` | CSS custom property definitions |

---

## Routing

Defined in `src/App.tsx`:
- `/` — Dashboard
- `/tokens/*` — Token documentation
- `/components` — Component library
- `/guardrails` — Compliance rules
- `/studio` — Interactive builder
- `/export` — Token export
- `/auth` — Authentication
- `/maps/*` — Maps product documentation

---

## Open Questions (Require Human Decision)

- Voice tokens: snapshot into export or always reference database as source of truth?
- Form validation: define message styling and placement rules?
- Mobile navigation pattern: hamburger or bottom nav?
- Print channel kit needed?
- Push notification channel kit needed?
