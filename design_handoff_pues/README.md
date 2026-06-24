# Handoff: Pues — Home app (Direction C) + Theme system

## Overview
**Pues** is a calm, streak-driven Spanish-practice app. The core gesture is small and repeatable: each day the app surfaces **one phrase** ("Lo de hoy"), the user says it out loud (or records ~20s), and that keeps their **racha** (streak) alive. The product has an "ink & paper" editorial soul — serif Spanish sentences, a monospace label system, one warm accent, and a four-season journey ("El Camino") that frames a year of practice.

This bundle covers **Direction C** — a two-column desktop layout (the lit act on the left, the notebook that grows on the right) with a monospace **PUES** wordmark — plus the matching **mobile** layout, and a full **theme system** (5 dark + 2 light palettes) that the user wants to switch from **Settings**.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing the intended look and behavior. They are **not** production code to copy directly. They are authored in a small in-house "Design Component" format (`.dc.html` + `support.js` runtime); **do not** port that runtime. The task is to **recreate these designs in the target codebase's environment** (React/Vue/SwiftUI/native/etc.) using its established patterns, component library, and routing — or, if no environment exists yet, to choose the most appropriate framework and implement them there.

`ios-frame.jsx` is only a **presentation bezel** used to show mobile screens as phones in the prototype — it is **not** part of the product UI. Ignore it when implementing; just build the mobile screens responsively.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and interactions are final and intended to be matched closely. Exact tokens are listed below. Recreate pixel-closely using the codebase's primitives.

---

## Design Tokens

### Typography
Three families (Google Fonts):
- **Newsreader** (serif) — every Spanish sentence, headings, the soul of the product. Weights used: 300 (most headings/phrases), 400 (notebook entries), italic 300/400 (supporting lines). `letter-spacing: -0.02em` on large headings.
- **Hanken Grotesk** (sans) — UI body text, descriptions. Weights 400/500/600.
- **Spline Sans Mono** (monospace) — all labels, eyebrows, metadata, the **PUES** wordmark. Almost always `text-transform: uppercase` with `letter-spacing: 0.10em–0.18em` and small sizes (8.5–11px).

Type scale (desktop):
| Use | Family | Size / line-height / weight |
|---|---|---|
| Page H1 | Newsreader | 46px / 1.0 / 300 |
| Section H2 | Newsreader | 24–27px / 1.08 / 300 |
| Card phrase (Hoy) | Newsreader | 34px / 1.26 / 300 |
| Card phrase (Práctica/Camino) | Newsreader | 23–30px / 1.3 / 300 |
| Notebook entry | Newsreader | 17–20px / 1.34 / 400 |
| Supporting italic | Newsreader italic | 14–18px / 1.4 / 300–400 |
| Eyebrow / label | Spline Sans Mono | 9–11px / uppercase / 0.12em |
| Wordmark "PUES" | Spline Sans Mono | 16px / 0.34em / 500 |

Mobile shrinks H1 to ~32px, card phrase to ~24px; labels stay 8–10px.

### Color — the theme token model
**Every color in the UI resolves from 8 CSS custom properties.** This is the heart of the theme system — implement it as a token set (CSS variables, a theme object, or your platform's equivalent) and the whole app re-skins by swapping one palette.

| Token | Role |
|---|---|
| `--bg` | App background. **Also used as the "on-accent" color** (icon/check color sitting on top of an accent fill) — this is why light themes automatically get light icons on the dark accent. |
| `--surface` | Cards, rails, raised panels |
| `--surface2` | Slightly raised / nested surfaces (the "uno en voz alta" card) |
| `--ink` | Primary text |
| `--ink-soft` | Secondary text |
| `--ink-mute` | Tertiary text / metadata / inactive |
| `--rule` | Hairline borders & dividers (1px) |
| `--accent` | The one warm accent: active state, the record button, today's highlight, the streak |

Derived colors are built with `color-mix()` against these tokens, e.g. active nav background = `color-mix(in oklab, var(--accent) 13%, transparent)`; card glow = a blurred radial of `color-mix(in oklab, var(--accent) 22%, transparent)`. Reproduce these as alpha/tint helpers in your platform.

### The 7 palettes (the Settings options)
Order as shown. Default = **Almagre**.

| Name | Mode | bg | surface | surface2 | ink | ink-soft | ink-mute | rule | accent |
|---|---|---|---|---|---|---|---|---|---|
| **Almagre** | dark | `#1b1712` | `#251f18` | `#2c251c` | `#efe5d2` | `#b4a98f` | `#7d7259` | `#3a3127` | `#dd6a43` |
| **Pizarra** | dark | `#15191b` | `#1d2427` | `#222b2e` | `#e8efee` | `#9fb1b0` | `#6d7d7c` | `#2c3739` | `#4cb6a4` |
| **Ciruela** | dark | `#1a1419` | `#241b24` | `#2b212b` | `#f0e6ec` | `#bba3b4` | `#7d6c78` | `#392f38` | `#d77a9a` |
| **Bosque** | dark | `#13180f` | `#1d2416` | `#232b1b` | `#ebefdf` | `#aeb795` | `#777f63` | `#333a28` | `#9bb24a` |
| **Medianoche** | dark | `#14151f` | `#1d1f2e` | `#232639` | `#e7e8f2` | `#a3a7c2` | `#6d7192` | `#2f3247` | `#8a9cf0` |
| **Papel** | light | `#f1e7d4` | `#fbf4e6` | `#f6ecd8` | `#28231b` | `#5b5343` | `#978a73` | `#ddccae` | `#bb4a2a` |
| **Niebla** | light | `#e8edec` | `#f4f8f7` | `#eef3f2` | `#1c2625` | `#4f5f5d` | `#899794` | `#cdd9d7` | `#2f8f7f` |

**Why light mode "just works":** because the on-accent color is `--bg`, a light theme (light `--bg`) automatically renders light icons/checks on the darker accent fill, and a dark theme renders dark icons on the lighter accent. Keep that rule and any future palette stays legible.

### Seasonal accent colors (theme-independent — do NOT tokenize)
The four-season journey and the weekday ribbon use fixed semantic colors so every theme still reads as the same product. Keep these constant across all themes:
- Verano (T1): `oklch(0.77 0.105 66)` warm gold
- Otoño (T2): `oklch(0.70 0.12 48)` amber
- Invierno (T3): `oklch(0.62 0.125 28)` rust
- Primavera (T4): `oklch(0.55 0.105 12)` deep red
- Weekday dots also use green `oklch(0.7 0.1 152)`, blue `oklch(0.7 0.09 248)`, pink `oklch(0.72 0.11 332)` as decorative day markers.

(The *active* weekday and the T1 dot use `--accent`, so they follow the theme; the rest are fixed.)

### Spacing, radius, shadow
- **Spacing**: generous. Desktop page padding `52px 56px`; rail padding `30px 16px`; asides `52px 34px`. Use a 4px-based rhythm (common gaps: 6, 9, 12, 14, 16, 18, 24, 34, 40px).
- **Radius**: nav items / small chips `12px`; cards `16–20px`; pills `999px`; circular buttons `50%`.
- **Hairlines**: 1px solid `--rule` for all dividers and most borders.
- **The "lit card" treatment** (today's act): `background: --surface`; `border: 1px solid color-mix(in oklab, --accent 42%, --rule)`; `border-radius: 20px`; a blurred radial **glow** behind it (`radial-gradient(... color-mix(--accent 22%, transparent) ...)`, `filter: blur(12px)`); plus layered shadow `0 0 0 1px color-mix(--accent 18%, transparent), 0 22px 50px -18px color-mix(--accent 50%, transparent)`. This is the one element that "glows" — everything else is flat ink.
- **Record button**: solid `--accent` circle, mic icon stroked in `--bg`, ring halo `box-shadow: 0 0 0 10px color-mix(--accent 15%, transparent)`; hover `transform: scale(1.06)` over 150ms.

### Icons
Inline SVGs, 1.6 stroke width, `stroke="currentColor"`, round caps/joins, ~18–20px. Swap for your icon library's nearest equivalents:
- Hoy = house; Camino = hills/waves; Práctica = book/article; Cuaderno = notebook (ruled); Ajustes = gear; record = microphone; done = checkmark; arrow = chevron-right.

---

## Screens / Views

### DESKTOP — single app shell, 4 routes
Persistent **left rail** (222px, `border-right: 1px solid --rule`): wordmark **PUES** at top; nav items **Hoy / Camino / Práctica / Cuaderno** (Newsreader 15px label + icon, 12px radius); active item = `background: color-mix(--accent 13%, transparent)`, `color: --accent`; inactive = muted toward `--ink-soft`. Bottom of rail: **Racha · 12 días** and an **Ajustes** (Settings) row.

Right side switches by route. Layout per route:

**1. Hoy** (default) — two columns.
- *Main* (flex:1, padding 52×56): italic eyebrow "Doce días seguidos," + H1 "no rompas la racha." → **weekday ribbon** (7 circles L–D; today=M is an outlined accent ring with mic; done days filled accent with check; future days outlined `--rule`; each labeled below in mono) → the **lit act card** (eyebrow "Lo de hoy · martes" / "artículo"; phrase in Newsreader 34px; record button + italic prompt "Dílo en voz alta — o graba 20 s.") → spacer → **year line** at the bottom (a thin `--rule` track with a 14%-filled accent segment and 4 dots: today filled accent, future outlined; label "Verano · el año →").
- *Aside* (368px, `border-left`): "Tu cuaderno" + "47 frases"; italic "Todo lo que ya dijiste en voz alta."; list of recent notebook entries (mono day tag · Newsreader phrase · accent check); footer link "ver el cuaderno entero →" (navigates to Cuaderno).

**2. Camino** — the year as a journey. Two columns.
- *Main*: eyebrow "El Camino · un año" + H1 "Cuatro temporadas." + italic subtitle. A **vertical timeline** (left spine `--rule` with the first ~120px filled by an accent→amber gradient): 4 temporada nodes (T1 active = filled accent dot with ring + "Estás aquí · Día 03"; T2–T4 = outlined dots in their season color, progressively muted text) each with a season range label, Newsreader title, and a Hanken description. A final dashed "El horizonte" node with an italic aspiration line.
- *Aside*: current temporada detail — "Estás aquí · Día 03", "El verano que hablo", season label; a progress card ("3 / 90 días", a 6%-filled progress bar); a 2-item "Metas de la temporada" checklist (one done, one not); a primary button "Practicar lo de hoy →" pinned to the bottom (navigates to Práctica).

**3. Práctica** — the 3·2·1 daily act. Two columns; the *main* contains a **two-column inner row that wraps** (`flex-wrap: wrap`, each column `min-width: 280px`) so it stacks on narrow widths.
- Top: a pill "Martes · artículo · Día 03" + H1 "Lo de hoy." + italic "Tres frases, dos verbos, una dicha en voz alta."
- Inner-left column (max-width 380px): "**Tres frases**" (3 Newsreader lines) and "**Dos verbos**" (leer · entender), each under a mono label and a top hairline.
- Inner-right column: the **"Uno en voz alta"** card (`--surface2`, top border 2px accent, the cloze sentence in Newsreader italic 23px) + the big record button with "Toca y dílo en voz alta."
- *Aside*: "Cómo funciona" — a 3·2·1 numbered list (mono numerals in accent) + a footer stat "Dichas — 47".

**4. Cuaderno** — the full notebook. Two columns.
- *Main*: eyebrow "Tu cuaderno · 47 frases" + H1 "Todo lo que dijiste." + italic subtitle. Entries grouped by week ("Esta semana", "La semana pasada"): each row = mono day tag · Newsreader 20px phrase · small mono tag, separated by top hairlines.
- *Aside*: "El recuento" — two stat cards (47 frases dichas / 12 días de racha) + a "Por temporada" breakdown (Verano 47, Otoño —) + a closing italic line.

### MOBILE — same four screens, one column, bottom tab bar
A single-column fold of the desktop. Shared chrome: top row with **PUES** wordmark + "Racha · 12"; a **bottom tab bar** (Hoy / Camino / Práctica / Cuaderno) with the active tab in `--accent`, fixed, with a translucent blurred background and a top hairline. (In the prototype each screen is shown inside a phone bezel from `ios-frame.jsx` — ignore the bezel.)
- **Hoy**: italic eyebrow + H1 → compact weekday ribbon → lit act card → a short "Tu cuaderno · 47 frases · ver →" preview with one entry.
- **Camino**: the vertical temporada timeline (condensed).
- **Práctica**: the 3·2·1 stacked vertically, record button near the bottom; top has a "‹ Hoy" back affordance.
- **Cuaderno**: the two stat cards + grouped entry lists.

---

## Interactions & Behavior
- **Navigation**: rail (desktop) / bottom tabs (mobile) switch the active route. Several in-content affordances also navigate: the Hoy record button and aside "ver el cuaderno entero →", the Camino "Practicar lo de hoy" button. Single-page client routing; no full reloads.
- **Record button**: hover `scale(1.06)` 150ms ease. (Wire to real audio capture in production — the prototype is visual only.)
- **Hover**: nav items lighten background; quiet text links shift from `--ink-mute` toward `--ink-soft`.
- **Responsive**: desktop two-column shell holds to ~1280px design width; the Práctica inner row wraps below that. On true mobile widths, collapse to the one-column mobile layout with the bottom tab bar.
- **Theme switching** (see below): applies instantly across the whole app, no reload.

## State Management
- `route`: `'hoy' | 'camino' | 'practica' | 'cuaderno'` (current screen).
- `theme`: one of the 7 palette names (`'Almagre' | 'Pizarra' | 'Ciruela' | 'Bosque' | 'Medianoche' | 'Papel' | 'Niebla'`). **Persist this** (localStorage / user settings / device prefs) and apply on load. Optionally honor OS `prefers-color-scheme` for the *initial* default (e.g. Papel/Niebla when the OS is light) but always let the explicit Settings choice win.
- Product data (today's phrase, streak count, weekday completion, notebook entries, temporada progress) is currently hard-coded in the prototype — model it as your real data layer. Sample values present: streak 12, "frases dichas" 47, today's phrase "He estado estudiando toda la mañana.", Día 03 of Temporada 1 (verano).

## Theme switching as a Settings feature (what the user wants built)
The prototype exposes theme as a design knob; **in the product it should be a real setting.** Implement:
1. A **Settings / Ajustes** screen (the rail's "Ajustes" row and mobile settings entry point lead here) with an **Apariencia / Tema** section.
2. Present the 7 palettes as selectable swatches — ideally grouped **Oscuro** (Almagre, Pizarra, Ciruela, Bosque, Medianoche) and **Claro** (Papel, Niebla), each swatch previewing its bg + accent (+ a sample ink dot), with the active one checked.
3. Selecting one updates the `theme` token set globally and **persists** it. No reload; the whole UI (including the seasonal colors, which stay fixed) re-skins from the 8 tokens.
4. Suggested copy: section "Apariencia", helper "Elige el tema que te acompaña." Spanish-first, matching the product voice.

## Files
- `Pues - Escritorio C.dc.html` — desktop app: 4 routes + theme tokens + the 7-palette theme logic. The themes map lives in the `Component` logic class (`themes()`), applied to the root element's CSS variables.
- `Pues - Móvil C.dc.html` — mobile: the 4 screens with bottom tab bar + the same 7 palettes.
- `ios-frame.jsx` — prototype-only phone bezel. **Not product UI.** Do not implement.
- `support.js` — the prototype runtime. **Do not port.**

## Assets
No external image assets — all iconography is inline SVG (replace with your icon set). Fonts: **Newsreader**, **Hanken Grotesk**, **Spline Sans Mono** (Google Fonts). No logo image; the wordmark is set type ("PUES" in Spline Sans Mono, 0.34em tracking).
