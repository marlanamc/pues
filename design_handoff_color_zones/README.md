# Handoff: Pues — Color-Coded Zones + Color-Forward Home (Espectro)

## Overview
This handoff adds a **color layer** to the existing "El Cuaderno" design system. Today every hub screen (Práctica, Lugares, Guías, Lab) shares the same ink-and-paper look with a single red accent — which made the hubs feel *"same but different by accident."* This change makes that sameness **intentional** and gives each section an identity:

1. **Color-coded zones** — the app keeps **one identical chassis** (header rhythm, list model, row anatomy, nav) across all four hub sections, and differentiates them on a single systematic axis: **a signature hue per zone**, like color-coded dividers in a notebook. Práctica = almagre (the brand red, "home"), Lugares = sage green, Guías = dusty blue, Lab = plum.
2. **A color-forward Home ("Hoy") — direction "C · Espectro"** — the Home is the one screen that belongs to *all* zones at once, so it's where the whole palette appears: a soft multi-hue wash behind the greeting, and a four-path "Cuatro caminos" map where each path carries its zone hue.

The guiding idea: **same skeleton, different organs.** Structure never moves between tabs; color is the only thing that changes, and it always *means* a zone (navigation), never decoration — except the Home wash, which is intentional mood.

---

## About the Design Files
The files in `design_references/` are **design references created in HTML/JSX** — prototypes that show the intended look, layout, and behavior. **They are not production code to copy directly.**

This app already has a codebase: a **Next.js (App Router) + React + TypeScript + Tailwind CSS v4** PWA (the `pues/` project — see its `app/`, `components/`, `content/`, `hooks/` directories). The task is to **recreate these designs inside that existing environment**, using its established patterns:
- Hub routes already exist: `app/practice/page.tsx`, `app/situations/page.tsx`, `app/guides/page.tsx`, `app/lab/page.tsx`, and the Home `app/page.tsx`.
- Shared UI lives in `components/` (`PageHeader.tsx`, `BottomTabNav.tsx`, `NotebookAside.tsx`).
- Theme tokens are CSS variables in `app/globals.css` with a `.light` custom variant. **The new zone tokens below should be added there.**

Do not introduce a new styling system — express everything as CSS variables / Tailwind theme values in the existing setup. The prototype uses inline React for speed; in the codebase, prefer the existing component structure (e.g. extend `PageHeader`, don't fork it).

> **Prerequisite:** this builds directly on top of the prior handoff, `design_handoff_pues_cuaderno/` (the El Cuaderno tokens, type scale, and the Speak-First flow). All base tokens, fonts, and the `.mono-cap` / `.btn-primary` / grain conventions from that handoff still apply unchanged. This document only adds the **color layer** and the **Home redesign**.

---

## Fidelity
**High-fidelity (hifi).** Colors, type, spacing, and component anatomy are final. Recreate faithfully. The one soft spot is the exact perceived strength of the Home wash and the green/blue/plum oklch values — those are tuned by eye and can be nudged ±a few % chroma to sit well on the shipped paper/ink backgrounds.

---

## The Zone Color System

### Zone hues (source of truth = oklch)
Four zones. Hues are chosen at **matched lightness + chroma**, rotating only hue, so they harmonize and read as one family. Two modes, matching the app's Ink (dark, default) and Paper (light) themes. The Ink set is lighter/brighter for contrast on the espresso background; the Paper set is deeper.

| Zone | Route | Paper (light) | Ink (dark) | Approx hex (paper) |
|---|---|---|---|---|
| **Práctica** | `/practice` | `#bb4a2a` *(= existing `--accent`)* | `#dd6a43` *(= existing `--accent`)* | `#bb4a2a` |
| **Lugares** | `/situations` | `oklch(0.50 0.085 152)` | `oklch(0.70 0.10 152)` | ≈ `#4d7a55` |
| **Guías** | `/guides` | `oklch(0.50 0.082 248)` | `oklch(0.70 0.09 248)` | ≈ `#456f9c` |
| **Lab** | `/lab` | `oklch(0.52 0.105 332)` | `oklch(0.72 0.11 332)` | ≈ `#9d4d79` |

**Práctica's hue is the existing almagre accent** — the brand "home" color. The three new hues join it; together they are the only chromatic colors in the app. Everything else stays warm neutral (ink/paper/rule).

### Tokens to add (`app/globals.css`)
Define the four zone hues as variables in **both** `:root` (Ink) and `.light` (Paper) blocks, then expose a *current* zone var that each hub page sets:

```css
:root { /* Ink (dark, default) */
  --zone-practica: #dd6a43;          /* = --accent */
  --zone-lugares:  oklch(0.70 0.10 152);
  --zone-guias:    oklch(0.70 0.09 248);
  --zone-lab:      oklch(0.72 0.11 332);
  --zone: var(--accent);             /* current page zone; defaults to brand */
}
.light { /* Paper */
  --zone-practica: #bb4a2a;          /* = --accent */
  --zone-lugares:  oklch(0.50 0.085 152);
  --zone-guias:    oklch(0.50 0.082 248);
  --zone-lab:      oklch(0.52 0.105 332);
}
```

Each hub page sets its own `--zone` on its root wrapper:
```tsx
// app/situations/page.tsx
<div style={{ ["--zone" as any]: "var(--zone-lugares)" }}> … </div>
```
Then components inside use `var(--zone)` wherever they previously hard-coded `var(--accent)` (kicker, icon chip, active states, the colored word, meta, chevron-on-hover). This keeps a single source of truth and makes a section's color a one-line change. The **bottom nav** is the exception — it must color *each* tab by its own zone regardless of the current route, so it reads the four `--zone-*` vars directly (see Navigation).

### Derived tints (used everywhere — keep consistent)
All built with `color-mix(in oklab, …)` so they work in both themes:
| Use | Recipe |
|---|---|
| Icon **chip** background | `color-mix(in oklab, var(--zone) 13%, var(--surface))` |
| Icon **chip** (Home, slightly stronger) | `color-mix(in oklab, var(--zone) 15%, var(--surface))` |
| **Featured row** background | `color-mix(in oklab, var(--zone) 8%, var(--surface))` |
| **Featured row** border | `color-mix(in oklab, var(--zone) 45%, var(--rule))` |
| Icon, kicker rule, colored word, meta, active nav | solid `var(--zone)` |

---

## The Shared Chassis (identical on every hub)

These four pieces are the same on Práctica / Lugares / Guías / Lab. Only the hue changes.

### 1. Top bar (`PageHeader`)
Unchanged from today: italic wordmark left (Newsreader italic 16, `--ink-soft`), a 36px round settings button right (1px `--rule` border, `--surface` fill). On Home it also shows a `Racha · N` mono-cap before the settings button.

### 2. Intro block (NEW — replaces today's four different intro treatments)
A single pattern everywhere:
- **Kicker** (row, gap 9): a 16×1.5px rounded bar in `var(--zone)` + a mono-cap reading `{ZONE} · {ROLE}` in `var(--zone)`. (`.mono-cap`: Spline Sans Mono, 10px, tracking 0.12em, uppercase.)
- **Display line** (Newsreader 300, 27px, line-height 1.14, letter-spacing −0.01em, `--ink`), with **one word** set in `var(--zone)` italic (the `Hue` accent word). Gap between kicker and line: 11px.

Per-zone intro content:
| Zone | Kicker `ROLE` | Display line (hue word *italicized*) |
|---|---|---|
| Práctica | `HAZ EL TRABAJO` | "Speak, save, *play*." |
| Lugares | `BIBLIOTECA` | "Where you'll *actually* use it." |
| Guías | `REFERENCIA` | "The pattern, *when you need it*." |
| Lab | `EL OÍDO` | "Train your *ear*." |

> Copy is placeholder-grade English/Spanish mix from the prototype — keep the *pattern* (kicker + one line + one colored word); the product owner can finalize wording.

### 3. The list — ONE model everywhere ("the ledger")
A single bordered container, hairline-divided rows. **Lab's old floating-cards model is retired** in favor of this.
- Container: `<ul>`, 1px `--rule` border, radius **14**, `--surface` background, `overflow: hidden`.
- Row: flex, align-center, gap 14, padding **15px 18px**; every row after the first gets a 1px `--rule` top border (the divider).

### 4. Row anatomy
`[icon chip] · [title (+ description)] · [meta?] · [chevron]`
- **Icon chip:** 38×38 (32×32 in the compact tier), radius **11**, background = chip tint recipe above, icon in `var(--zone)` at 20px (18px in chip ≤34).
- **Title:** Newsreader, 18px (17px compact), line-height 1.15, `--ink`.
- **Description** (optional): Hanken Grotesk, 13.5px, line-height 1.4, `--ink-mute`, margin-top 2.
- **Meta** (optional): `.mono-cap` in `var(--zone)` (e.g. `JUEGO`, `5 GUÍAS`, `7 TEMAS`, `DESTACADO`).
- **Chevron:** the `›` line glyph (1.5 stroke), `--ink-mute`.

### 5. Density tiers (the *intentional* difference besides color)
Content-driven, repeatable — not per-page improvisation:
- **Comfortable (two-line):** Práctica, Lugares, Lab — icon chip 38, title + description.
- **Compact (one-line):** Guías only — it's a pure reference index. Chip 32, title only, tighter padding (13px 18px).

### 6. Featured row (shared device)
One reusable highlight any zone may use for a single standout item (in the prototype: Lab's *Español Real*). Same row anatomy but pulled out of the ledger as its own block: radius 14, background = featured tint, border = featured border (recipes above), meta `DESTACADO` in `var(--zone)`. Use **at most one per screen**.

---

## Navigation (`BottomTabNav`)
5 tabs: **Hoy** (home glyph), **Práctica**, **Lugares**, **Guías**, **Lab**. 1px top `--rule`, mono-cap labels (8.5px, tracking 0.06em, uppercase), 19px line icons (1.6 stroke).

**Change:** the active tab is colored by **its own zone hue**, not the global accent:
- Active Hoy → `var(--accent)` (brand). Active Práctica → `var(--zone-practica)`, Lugares → `var(--zone-lugares)`, Guías → `var(--zone-guias)`, Lab → `var(--zone-lab)`.
- Inactive → `--ink-mute`.

So the nav itself previews the palette, and the lit tab always matches the page you're on.

(Icon SVG paths for all five are in `design_references/pues-symmetry.jsx` — `NavPractica / NavLugares / NavGuias / NavLab` — and `pues-home.jsx` — `IcoHome`.)

---

## Home — "Hoy", direction C · Espectro

**Purpose:** the calm overview + one obvious start, now also the colorful map of the whole app. Screen padding 18px sides; single column.

**Layout (top → bottom):**
1. **Top bar** — wordmark "Pues" + `Racha · 1` mono-cap + settings button.
2. **Multi-hue wash** (behind the hero only): an absolutely-positioned full-bleed layer, `z-index 0`, with:
   ```css
   background: linear-gradient(103deg,
     color-mix(in oklab, var(--zone-practica) 20%, transparent) 0%,
     color-mix(in oklab, var(--zone-lugares)  16%, transparent) 34%,
     color-mix(in oklab, var(--zone-guias)    16%, transparent) 66%,
     color-mix(in oklab, var(--zone-lab)      20%, transparent) 100%);
   mask-image: linear-gradient(180deg, black 0%, black 18%, transparent 46%);
   ```
   The mask confines the color to the top ~hero band and fades it to nothing by ~46% down. Keep it a whisper — it's the only place color is pure mood. All content sits at `z-index 1` above it.
3. **Hero:**
   - "Buenos días," (Newsreader italic 14, `--ink-soft`).
   - "Marlana" (Newsreader 300, **40px**, line-height 1, tracking −0.02em, `--ink`).
   - 1px `--rule` hairline (margin 22/0/20).
   - Mono-cap "DÍA 01 · DESEOS Y PLANES".
   - Display line "Cinco minutos son una conversación entera." (Newsreader 300, 23px, line-height 1.22), margin-top 11.
   - **Empezar** button — full-width `--accent` fill (stays brand red, *not* a zone hue), `--accent-ink` text, radius 14, padding 15/18, space-between with a 19px right-arrow. Newsreader 19. Margin-top 22.
4. **"Cuatro caminos" map** (the colorful element — **containerless / open**, no boxes per the chosen variant):
   - Mono-cap label "CUATRO CAMINOS".
   - 2-column grid, column-gap 18, row-gap 20, margin-top 14. Four items, one per zone:

     | Path | Hue | Meta cap |
     |---|---|---|
     | Práctica | `--zone-practica` | `SIGUE` |
     | Lugares | `--zone-lugares` | `12 TEMAS` |
     | Guías | `--zone-guias` | `PATRONES` |
     | Lab | `--zone-lab` | `EL OÍDO` |
   - Each item: a 38×38 icon chip (radius 11, chip-tint @15%, icon in zone hue) + a stacked label (Newsreader 17, `--ink`) over a mono-cap meta (9px) **in the zone hue**. **No border, no card background** — the items sit directly on the paper. Tapping a path routes to that hub.
5. **Cuaderno streak card** (`NotebookAside`): 1px `--rule`, radius 14, `--surface`, padding 18/20.
   - Header row: "TU CUADERNO" + "VER MÁS" (mono-caps).
   - Flame icon (1.6 stroke, `--accent`) + streak number (Newsreader 30, `--accent`); mono-cap "DÍA DE RACHA".
   - **Week dots (colorized — the second place color enters):** 7 day-initials (M M J V S D L), each a 28px circle. In the colorized treatment each day's hue cycles the four zones (`[practica, lugares, guias, lab, …]`): an *unpracticed* day shows the hue as text + a 1px `color-mix(zone 55%, --rule)` border on transparent; a *practiced/today* day is **filled** with its hue, text in `--bg`. (Today = index 5 in the mock.) This makes the streak feel like a record of which corners of the app you touched.
   - "HOY" + "0 de 5" mono-caps, then a 4px progress track (`--surface-sunk`).
6. **Bottom nav** with **Hoy** active.

> **Color budget on Home:** Empezar and the streak number stay brand `--accent`. Zone color appears in (a) the wash, (b) the four-path map, (c) the week dots. That's the *most* color in the app — appropriate because Home is the one screen that owns every zone.

---

## Interactions & Behavior
- **Routing:** four-path map items and bottom-tab items navigate to `/practice`, `/situations`, `/guides`, `/lab`. Active nav tab reflects current route in that route's zone hue.
- **Zone threading:** setting `--zone` on a hub's root wrapper recolors its kicker, chips, colored word, meta, and any hover/active accent in one place. No per-component color props needed.
- **Hover/active:** rows use the existing `active:bg-surface-sunk`; on desktop, row hover may tint the chevron / border toward `var(--zone)` (optional, matches today's `hover:border-accent/50` pattern — swap `accent` → `zone`).
- **Motion:** unchanged from El Cuaderno — quiet fades/rises (~0.6s ease-out), respect `prefers-reduced-motion`. No new motion introduced. Do **not** animate the wash.
- **Themes:** everything is defined in both Ink and Paper; the zone vars switch with the existing `.light` variant. Verify the oklch hues read clearly on both backgrounds.
- **Accessibility:** color is a *secondary* signal — every zone is still labeled in text (kicker, nav label, path label). Don't rely on hue alone. Check contrast of zone-hue meta text on `--surface` in both themes (the paper plum/blue are the ones to watch).

---

## State Management
No new state. This is a presentation layer over existing data:
- Streak / week / today-progress already come from `useStats` + `useThoughts` + `lib/streak` (`currentStreak`, `last7Days`). The colorized week dots just map `last7Days()` index → zone hue.
- Theme (Ink/Paper) persists as today.
- The four-path "meta" strings (`12 TEMAS`, etc.) can be live counts from existing content (`content/situations.ts`, etc.) or static labels — product's call.

---

## Design Tokens (summary)
**Inherited from `design_handoff_pues_cuaderno`** (unchanged): `--bg/--surface/--surface-2/--surface-sunk/--ink/--ink-soft/--ink-mute/--rule/--accent/--accent-ink`; fonts Newsreader / Hanken Grotesk / Spline Sans Mono; radii sm 4 / md 11 / lg 14 / full 999; paper grain overlay; no content shadows.

**Added here:**
- `--zone-practica`, `--zone-lugares`, `--zone-guias`, `--zone-lab` (both themes — see table).
- `--zone` (current-page pointer, defaults to `--accent`).
- Tint recipes: chip `13%` (Home `15%`), featured bg `8%`, featured border `45%`, week-dot border `55%` — all `color-mix(in oklab, var(--zone) N%, …)`.
- Home wash gradient (103deg, 20/16/16/20%) + top mask (black→black 18%→transparent 46%).

---

## Assets
- **Fonts:** Newsreader, Hanken Grotesk, Spline Sans Mono — Google Fonts (already loaded via `next/font/google` in the app). No change.
- **Icons:** 1.5–1.6 stroke inline SVG line icons. All paths used here are in the bundled JSX (`pues-symmetry.jsx`, `pues-home.jsx`). Reuse the codebase's existing icon components where they already exist (`content/nav.tsx`, the per-page icon sets).
- **No raster imagery.** Color + type + paper only.

---

## Files in this bundle (`design_references/`)
| File | What it is | How to use |
|---|---|---|
| `Pues System.html` | **Primary hifi reference.** A pan/zoom canvas with three sections: **Home (Hoy)** color intensities (A Brújula / B Racha viva / **C Espectro ← the chosen one**), **Today** (the four hubs as they are now, for contrast), and **Proposed** (the four hubs under the color-coded zone system). Open in a browser; click any artboard's expand button to view it fullscreen. | Source of truth for look, tokens, anatomy. The "Proposed" row and the "C · Espectro" home are what to build. |
| `pues-symmetry.jsx` | The hub components: `ZONES` (the hue definitions), the shared chassis (`Screen`, `Ledger`, `Row`, `Chip`, `Kicker`, `Intro`, `Hue`, `ZRow`, `BottomNav`), and both the `Today*` (current) and `New*` (proposed) hub screens. | Reference for exact values, the zone hues, and component structure. Build the `New*` versions. |
| `pues-home.jsx` | The Home study: shared `Hero`, `CuadernoCard` (with colorized week dots), `ZoneMap` (`tint`/`solid`/**`open`** variants), and `HomeBrujula` / `HomeRachaViva` / **`HomeEspectro`**. | Build `HomeEspectro` (uses `ZoneMap variant="open"` + the wash). |
| `design-canvas.jsx` | The pan/zoom viewer scaffold that renders `Pues System.html`. | **Not a design — ignore.** Presentation chrome only. |

> Implement against the existing **`pues/`** Next.js + Tailwind v4 PWA: add the zone tokens to `app/globals.css`; introduce the shared Intro/kicker into `components/PageHeader.tsx` (or a small new `ZoneIntro` component); apply `--zone` + the ledger/chip pattern in `app/{practice,situations,guides,lab}/page.tsx`; color the active tab per-zone in `components/BottomTabNav.tsx`; rebuild `app/page.tsx` + `components/NotebookAside.tsx` for the Espectro Home.
