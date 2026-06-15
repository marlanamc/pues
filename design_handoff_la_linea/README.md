# Handoff: La Línea — Spanish tense-timeline game for Pues

## Overview
**La Línea** is a calm, quick-tap grammar game for **Pues** (the Spanish-practice PWA). It teaches the Spanish verb-tense system by mapping each tense onto a visual **past → now → future timeline**, using a small set of "stamps" (marks) whose **shape says *what kind* of action** and whose **color says *when***.

It is the Spanish-learning counterpart to the existing **Timeline Tenses** game in the ESOL LMS (which teaches English tenses). This handoff is the design for porting that idea into Pues — re-authored for Spanish (pretérito vs imperfecto, perfectos, subjuntivo, condicional), restyled in Pues's **El Cuaderno** look (Paper mode), and surfaced as one row in the **Práctica** tab.

The game is **not** speak-gated (unlike Pues's core Speak-First flow). It's a low-stakes tap/type drill: one question per screen, warm inline feedback, a short round, a gentle results screen.

---

## About the Design Files
The files in `design_references/` are **design references created in HTML/React-via-Babel** — runnable prototypes that show the intended look, layout, content, and interactions. **They are not production code to ship directly.**

The task is to **recreate these designs inside the existing Pues codebase** — a **Next.js (App Router) + React + TypeScript + Tailwind CSS v4** PWA — using its established patterns:
- Game components live under `src/components/games/` (the ESOL app already has `src/components/games/TimelineTensesGame/` — a close architectural precedent: `TimelineCanvas.tsx`, per-exercise components, `useTimelineTensesState`, `timelineTensesUtils.ts`, and content in `src/data/`). **Reuse that architecture** where it fits; the Spanish timeline geometry and stamp renderer map almost 1:1.
- Activity/game types live in `src/types/activity.ts`. Add Spanish-tense variants there.
- Theme tokens are CSS variables in `app/globals.css` with a `.light`/`.paper` variant. **Use the El Cuaderno tokens below.**
- Do **not** introduce a new styling system. Express all tokens as CSS variables / Tailwind theme values.

> The prototype loads three React/Babel script files (`linea-shared`, `linea-content`, `linea-game`, `linea-directions`) and presents everything on a pan/zoom **design canvas** (`design-canvas.jsx`). **`design-canvas.jsx` is only the presentation viewer — ignore it for production.** Each phone is a fixed `300×640` frame standing in for the real full-viewport PWA screen.

---

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, the timeline geometry, the stamp shapes, and all content (Spanish sentences, options, explanations, the full stamp guide) are final. Recreate faithfully using the codebase's libraries. All hex/oklch values and pixel sizes below are exact.

---

## Design Tokens — El Cuaderno (Paper mode is the default for this game)

The app ships **Ink** (dark) and **Paper** (light) modes. The user chose **Paper** as the active look for La Línea, but the prototype defines both — wire both and respect the app's theme toggle.

### Color — Paper mode (active)
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#F1E7D4` | Screen background (warm bone paper) |
| `--surface` | `#FBF4E6` | Cards, option rows, the list card |
| `--surface-2` | `#F6ECD8` | Raised surface |
| `--ink` | `#28231B` | Primary text (warm near-black) |
| `--ink-soft` | `#5B5343` | Secondary text, descriptions |
| `--ink-faint` | `#978A73` | Tertiary text, metadata, inactive icons |
| `--rule` | `#DDCCAE` | Hairlines, borders, dividers |
| `--accent` | `#BB4A2A` | *Almagre* — interactions: active states, buttons, chevrons, NOW tick |
| `--accent-ink` | `#FBF4E6` | Text/icon on top of accent fills |

### Color — Ink mode (dark, for parity)
`--bg:#1B1712` · `--surface:#251F18` · `--surface-2:#2C251C` · `--ink:#EFE5D2` · `--ink-soft:#B4A98F` · `--ink-faint:#7D7259` · `--rule:#3A3127` · `--accent:#DD6A43` · `--accent-ink:#1B1712`

### Tense-semantic colors (THE key learning system — see note)
The English Timeline game colored the three time-bands (past=amber, present=green, future=blue). Pues's El Cuaderno normally allows only **one** chromatic accent (almagre). **The user explicitly approved breaking that rule for learning.** So La Línea keeps almagre for *interaction* and adds three **tense colors** for *content* (the timeline). They are warm-harmonized (equal lightness/chroma, varied hue) and have two mode-specific values for contrast:

| Token | Meaning | Paper (on bone) | Ink (on espresso) |
|---|---|---|---|
| `--past` | ANTES | `oklch(0.56 0.13 64)` (amber/ochre) | `oklch(0.76 0.115 72)` |
| `--present` | AHORA | `oklch(0.50 0.11 158)` (sage green) | `oklch(0.74 0.095 158)` |
| `--future` | DESPUÉS | `oklch(0.50 0.10 252)` (dusty blue) | `oklch(0.73 0.085 245)` |

**Rule of thumb:** `color = WHEN` (zone), `shape = WHAT KIND` (stamp), `almagre = what you tap`. Never color a stamp with almagre; never use a tense color for a button.

### Typography
Three families, all Google Fonts:
- **Newsreader** — display, headlines, **all Spanish sentences/examples**, button labels. Weights 300/400; italic 300/400. `opsz 6..72`. This is the soul of the look.
- **Hanken Grotesk** — interface & body (descriptions, option labels, tab labels). Weights 400/500/600.
- **Spline Sans Mono** — **metadata only** (caps labels, tags like `JUEGO`/`1 FRASE`, zone labels `ANTES/AHORA/DESPUÉS`, step counters). 400/500. Always UPPERCASE, wide tracking.

Import:
```
https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=Hanken+Grotesk:wght@400;500;600&family=Spline+Sans+Mono:wght@400;500&display=swap
```
In Next.js, load via `next/font/google`.

#### Type scale (exact, from the prototype)
| Role | Family | Size / line-height | Weight | Notes |
|---|---|---|---|---|
| Screen headline ("Speak, save, play.", "¿Cómo quieres practicar?") | Newsreader | 30–33 / 1.04 | 300 | letter-spacing −0.02em |
| Spanish prompt sentence (game) | Newsreader | 19–28 / 1.22–1.3 | 300 | the blank verb is italic in `--accent` |
| Verb option (italic) | Newsreader italic | 16 | 400 | — |
| Row / card title (Diario, La Línea, mode names) | Newsreader | 17–19 | 400 | — |
| Body / description | Hanken | 12.5–13.5 / 1.4–1.55 | 400 | `--ink-soft` |
| `.cap` metadata | Spline Sans Mono | 10 | 400/500 | 0.13em, UPPERCASE, `--ink-faint` |
| Tab label | Hanken | 9 | 600 | 0.1em, UPPERCASE |
| Tag (`JUEGO`, `1 FRASE`) | Spline Sans Mono | 9.5 | 400 | 0.1em, UPPERCASE, `white-space:nowrap` |

### Spacing / radius / misc
- Screen horizontal padding: **22px**. Phone frame in mock: **300×640**, radius **30px** (this is the device shell; in the PWA it's the full viewport).
- Radii: cards/buttons **12–16px**; option rows **11px**; pills/tags **999px**.
- Dividers: **1px** solid `--rule`. The feedback separator is **2px** solid (`--accent` if correct, `--ink-faint` if not).
- **Paper grain:** a whisper-faint full-screen noise overlay (inline SVG `feTurbulence`, baseFrequency 0.85, 2 octaves). Paper: `opacity:0.5; mix-blend-mode:multiply`. Ink: `opacity:0.35; mix-blend-mode:screen`. A tiling noise PNG is an acceptable substitute.
- **No drop shadows on content.** Hierarchy = type + whitespace + hairlines.
- Motion: quiet. Feedback rises in (`opacity 0→1`, `translateY(8px)→0`, 0.5s ease-out), gated behind `@media (prefers-reduced-motion: no-preference)`. No bouncy/springy motion, no loops.

---

## The Timeline Engine (geometry & stamp renderer)

A reusable SVG component renders an axis + a list of "marks" (stamps). **This is the heart of the game — build it once, reuse everywhere** (Práctica row icon, game prompts, build-mode canvas, spot-the-difference cards, the stamp guide). Mirrors the ESOL app's `TimelineCanvas.tsx`.

### Coordinate system (SVG viewBox `0 0 300 76`)
```
axisY   = 50          // horizontal axis y
nowX    = 150         // the NOW tick (vertical, --present color)
past  band: x 26 → 124    (label "ANTES",   --past)
future band: x 176 → 274  (label "DESPUÉS", --future)
present: x = 150          (label "AHORA",   --present)
```
- Axis is drawn in two tinted segments: past half `stroke:var(--past)` and future half `stroke:var(--future)`, both `opacity:0.5`, `stroke-width:2`.
- NOW tick: vertical line at x=150, y 39→61, `stroke:var(--present)`, width 2.6.
- Zone labels in Spline Mono 8.5, colored by zone.
- A mark's x within a zone is `zoneStart + pos * (zoneEnd - zoneStart)`, `pos` ∈ 0..1 (default 0.5).

### Mark types (`kind`)
Each mark = `{ kind, zone: 'past'|'now'|'future', pos?, span?, to?, toZone? }`. **Color is always the zone color** (`--past/--present/--future`). Shapes:

| `kind` | Renders | Spanish meaning |
|---|---|---|
| `dot` | filled circle r=5.5 | a finished moment (pretérito, futuro) |
| `line` | rounded bar, default span 56, width 7 | an action in progress (imperfecto, estar+gerundio) |
| `dots` | three filled circles r=3.6, gap 15 | a habit (presente/imperfecto habitual) |
| `arc` | dot → quadratic arc up (−26) → dot; `to`/`toZone` set the far endpoint (default NOW) | a connection (perfectos) |
| `wave` | a small dashed wave floating ~24px **above** the axis + a faint dotted tether to the axis | subjunctive (irrealis — a mood, floats off the line) |
| `diamond` | a hollow diamond ~22px **above** the axis + dotted tether | conditional (hypothetical "would") |

`wave` and `diamond` are the **two new stamps** invented for Spanish — English has no subjunctive/conditional *tense*, so they don't fit dot/line/arc. They float **off** the line precisely because they're irrealis (not real / not (yet) time-located).

A small inline **`StampGlyph`** variant (no axis, accepts an explicit `color`) is used in palettes, legends, tags, and the guide.

> Exact SVG paths for all six shapes are in `design_references/linea-shared.jsx` (`Mark` and `StampGlyph`). Copy them verbatim.

---

## The Stamp System (content spec)

Six stamps describe the whole verb system. **Shape = what kind, color = when.** Full per-stamp data (the "Guía de sellos") lives in `linea-content.jsx` as `STAMP_GUIDE`; the at-a-glance list is `STAMPS`.

1. **Punto ● · Momento puntual** — one finished moment / single point.
   - ANTES → **Pretérito** (*ayer comí*) · AHORA → rare, sudden present (*¡ay, me caigo!*) · DESPUÉS → **Futuro simple** (*mañana comeré*).
   - **No:** imperfecto, progresivo, hábito, subjuntivo, condicional.
2. **Línea ▬ · En curso** — action open, no marked end (background / in progress).
   - ANTES → **Imperfecto descriptivo** (*llovía, vivía en Madrid*) · AHORA → **Estar + gerundio** (*estoy estudiando*) · DESPUÉS → **Futuro progresivo** (*estaré trabajando*).
   - **Clave:** línea = *mientras, en ese momento*. NOT a repeated habit (that's Repetición).
3. **Repetición ◦◦◦ · Hábito / rutina** — same action, many times. The highest-value contrast for learners.
   - ANTES → **Imperfecto habitual** (*siempre íbamos, todos los veranos*) · AHORA → **Presente habitual** (*todos los días*) · DESPUÉS → **Futuro habitual** (*los lunes iré*).
   - **The split (teach explicitly):** *Mientras cocinaba* → Línea · *Siempre cocinaba los domingos* → Repetición.
   - Present note: Repetición is the default AHORA stamp; presente also covers truths/states (*vivo en Boston*). For scoring, accept Punto for a "state at now" only when there's no habit cue.
4. **Arco ⌒ · Conexión (compuestos)** — links one moment to a reference point.
   - Arco → AHORA = **Pretérito perfecto** (*he comido*) · Arco → punto en ANTES = **Pluscuamperfecto** (*había salido cuando…*) · Arco → punto en DESPUÉS = **Futuro perfecto** (*habré terminado*).
   - **Note:** Condicional compuesto (*habría hecho*) = **Rombo + Arco**, not a new stamp.
5. **Onda 〜 · Subjuntivo (irrealis)** *(NEW)* — a mood, not a time; floats off the line.
   - *Quiero que vengas* · *Es posible que llueva* · *Ojalá tuviera tiempo*.
   - **Behavior:** tether the wave to the main-clause anchor (usually AHORA, or a punto in ANTES). Color shows the trigger tense; shape says "irrealis."
6. **Rombo ◇ · Condicional / hipótesis** *(NEW)* — possible, not actual; the "would" family.
   - **Condicional simple** (*compraría, me gustaría*) · **Presente irreal** (*Si tuviera dinero, viajaría*) · **Petición suave** (*¿Podrías…?*).
   - Visually distinct from Punto-en-DESPUÉS (real future) and Línea (ongoing). Do not fold into anything else.

---

## Screens / Views

All screens are a single column, 22px side padding, in a phone frame (real PWA = full viewport). The bottom **tab bar** (4 tabs) shows on hub-level screens, hidden during a round.

### Tab bar
Four tabs, Spanish labels, matching the app's real bottom nav:
| Tab | Label | Icon | Route |
|---|---|---|---|
| Today | **HOY** | house | `/` |
| Practice | **PRÁCTICA** (active here) | document with clip + 2 lines | `/practice` |
| Places | **LUGARES** | 2×2 grid | `/situations` |
| Guides | **GUÍAS** | two connected circles | `/guides` |
Active = `--accent`; inactive = `--ink-faint`. 1px top `--rule`. Labels Hanken 600, 9px, 0.1em, uppercase. Icons 20px, 1.7 stroke. (Exact paths in `linea-shared.jsx` `TABS`.)

### 1. Práctica hub (entry point)
**Purpose:** A calm list of practice activities; **La Línea is one row.** Matches the user's real `/practice` screen.
**Layout (top→bottom):**
1. Header row: wordmark "Práctica" (Newsreader italic 17, `--ink-soft`) left; a 34px circular outline button with a **sliders** icon (filter) right.
2. "DO THE WORK" pill (almagre outline, mono caps, `white-space:nowrap`).
3. Headline "Speak, save, play." (Newsreader 300, 33).
4. Description (Hanken 13.5/1.55, `--ink-soft`): *"Práctica is where you use Spanish — not just read about it. Open your journal and try the games as they land."* (UI copy is English; the language lives in the chrome.)
5. **One `--surface` card, radius 14, rows divided by 1px `--rule`:**
   - **Diario** — notebook icon — "Every sentence you've spoken out loud." — tag `1 FRASE` — chevron.
   - **La Línea** — *timeline icon* (axis + dot + NOW tick) — "Spanish tenses, drawn on a timeline." — tag `JUEGO` — chevron. **This row is "live":** faint accent tint `color-mix(in oklab, var(--accent) 6%, var(--surface))`, tag + chevron in `--accent`. **Tapping it opens La Línea (mode select).**
   - **Ser vs Estar** — game-controller icon — "Sort sentences into ser or estar." — tag `JUEGO` — chevron.
   - Row anatomy: 22px accent icon · (serif 19 title + sans 12.5 desc) · (mono tag + 13px chevron). Padding 14px.

### 2. Mode select
**Purpose:** Choose how to practice + (future) a tense scope.
**Layout:** Back link "‹ PRÁCTICA" (mono cap) + "LA LÍNEA" cap right. Headline "¿Cómo quieres practicar?" (Newsreader 300, 30). A "TIEMPOS" cap + a wrap row of **scope chips** (pills): `Todo` (selected, accent fill), `Presente · Pasado · Futuro`, `Pretérito vs Imperfecto`, `Perfectos`, `Subjuntivo · Condicional`. Then a column of **4 mode cards** (`--surface`, radius 12), each: serif 17 title (line-height 1.14) + sans 11.5 sub + accent arrow:
- **Leer la línea** — "Mira el dibujo, elige el verbo"
- **Construir la línea** — "Lee la frase, coloca los sellos"
- **Pretérito vs Imperfecto** — "¿Qué línea encaja?"
- **Señales de tiempo** — "Empareja la pista con el tiempo"
Tapping a mode starts a round of that mode.

### 3. Round chrome (all play screens)
No tab bar. Top row: "✕ SALIR" (mono cap, exits to mode select) left; **progress pills** right (one per question; active = 16px `--accent` bar, done = 6px `--accent` dot, upcoming = 6px `--rule` dot). One question per screen. After answering, a **feedback block** rises in at the bottom (2px top rule, check/✕ + "BIEN DICHO · <Tense>" or "CASI · <Tense>", a 1-line explanation, and a full-width `Siguiente` / `Ver resultados` accent button).

### 3a. Mode — Leer la línea (read → choose verb)
"LEE LA LÍNEA" cap → a `--surface` card holding the **timeline diagram** → the Spanish sentence (Newsreader 300, 21) with the target shown as `(verb)` and replaced by the italic-accent answer after submitting → 3 stacked verb options (italic Newsreader). Selecting locks: correct row → accent border + check; chosen-wrong → accent border; others → 45% opacity. Then feedback.

### 3b. Mode — Construir la línea (read → place stamps)
"CONSTRUYE LA LÍNEA" cap → the sentence (target verbs italic-accent) → a `--surface` card with a **live timeline** the learner stamps onto. Below: a **stamp palette** (4 buttons: Punto / Línea / Repetición / Arco, each a `StampGlyph` + mono name). Flow: tap a stamp (selects, accent ring), then tap a zone (Antes/Ahora/Después tap-regions overlaid on the timeline) to place it; the placed mark renders in that zone's color. Buttons: `LIMPIAR` (clears) + `Comprobar`. On check, validate the placed multiset of `{kind, zone}` against the expected set; show feedback. (Palette stamps are zone-neutral ink until placed.)

### 3c. Mode — Pretérito vs Imperfecto (spot the difference)
"¿QUÉ LÍNEA ENCAJA?" cap → the sentence → **two timeline cards A and B** (each a `--surface` button with a label like "Línea + punto" / "Dos puntos" and its own mini timeline). Pick the matching one; correct card → accent border + its marks turn accent-on; feedback explains the contrast (e.g. background imperfecto = line, interrupting pretérito = dot).

### 3d. Mode — Señales de tiempo (clue → tense)
"¿QUÉ TIEMPO PIDE ESTA SEÑAL?" cap → a big italic accent clue word centered (e.g. *«ayer»*, Newsreader italic 38, `--accent`) → 3 stacked tense options. Select → correct highlighted; feedback.

### 4. Results
No tab bar. Top: mode title cap + full progress pills. Centered: a 58px accent-tint circle with a check; "RONDA TERMINADA" cap; big score `N / total` (Newsreader 300, 44; the `/total` in `--ink-faint`); a warm italic line keyed to the score ("Impecable…", "Vas viendo la forma…", "Sin prisa…"). Footer: `Otra ronda` (accent button) + `Elegir otro modo` (text button).

### 5. Guía de sellos (reference — optional in-app, under GUÍAS)
A long scrollable reference page (prototype: an 820px-wide plate) with the full 6-stamp spec from the section above: each entry = big glyph + name + role + 1-line def, then a **zone table** (Antes/Ahora/Después with stamp-in-color + form + example) *or* **pattern rows** (Arco) *or* **example cards** (Onda/Rombo), then the key-rule/"No:" note. Onda & Rombo carry a `NUEVO` badge. See `StampGuide` in `linea-directions.jsx`. Recommended placement: the **GUÍAS** tab, plus a "Guía" link from mode-select so a learner can pull it up mid-game.

---

## Interactions & Behavior
- **Hub:** only the La Línea row navigates (to mode select). Diario/Ser vs Estar are shown for context.
- **Mode select → round:** picking a mode builds a round from that mode's question bank (prototype plays the whole bank in order; production should sample/shuffle — mirror `buildTimelineRoundQuestions` in the ESOL app).
- **Answering:** single selection (read/spot/signals) or stamp-placement + Comprobar (build). Locks on submit; reveals correct answer + explanation. No second guess.
- **`Siguiente`** advances; the last question's button reads `Ver resultados` and routes to Results.
- **`SALIR`** returns to mode select at any time.
- **Scoring:** +1 per correct; results shows score/total. (Hook into the app's points/progress; the ESOL app awards `POINTS.TIMELINE_TENSES*` per round — define Spanish equivalents.)
- **Reduced motion:** the feedback entrance animation is gated; everything is fully visible without motion.
- **Theme:** honor the app's Ink/Paper toggle; tense colors swap per mode (values above).

## State Management
- **Game machine:** `screen ∈ {hub, modes, play, results}`, `mode ∈ {read, build, spot, signals}`, `index`, `score`. (Prototype: `LineaGame` in `linea-game.jsx`.) Map to the app's existing game-state hook pattern (cf. `useTimelineTensesState`).
- **Per-question local state:** selected option / placed marks / checked flag.
- **Content:** question banks are static data (see below) — in production, source from `src/data/` and/or DB seed like the ESOL `seed-timeline-tenses*.ts`.
- **Progress:** round completion + accuracy → app progress/points; consider flagging "Quiero practicarla"-style misses for resurfacing (parallel to Pues's journal).

## Content (re-authored for Spanish — all final copy in `linea-content.jsx`)
- `READ` — 7 read-the-timeline items (pretérito, imperfecto, presente, perfecto, futuro, subjuntivo, condicional), each: `marks`, sentence parts, 3 `options`, `answer`, `tense`, `why`.
- `BUILD` — 4 build items: `sentence`, bolded verb(s), expected `need: [{kind, zone}]`, `tense`, `why`.
- `SPOT` — 3 pretérito-vs-imperfecto pairs: `sentence`, timelines `A`/`B` (marks + label), `answer`, `why`.
- `SIGNALS` — 6 clue→tense items: `clue`, 3 `options`, `answer`, `why`.
- `STAMPS`, `STAMP_GUIDE`, `TENSE_SCOPES`, `MODES` — system + UI data.
Expand these banks before ship (the ESOL English bank is large; aim for similar Spanish coverage incl. pluscuamperfecto, futuro perfecto, subjuntivo imperfecto).

## Design Tokens — quick reference
Colors: see tables above (Paper + Ink + tense colors). Radii: 11/12/14/16/999. Spacing: screen pad 22; row pad 14; card pad 16–22. Stroke: icons 1.6–1.7. Rule: 1px; feedback separator 2px. Grain: see misc.

## Assets
- **Fonts:** Newsreader, Hanken Grotesk, Spline Sans Mono (Google Fonts; `next/font/google`).
- **Icons:** inline SVG, 1.6–1.7 stroke, `currentColor` — house, document-with-clip, 2×2 grid, connected-circles (tabs); sliders, notebook, timeline, game-controller, chevron, arrow, check, close (UI). All paths in `linea-shared.jsx` / `linea-game.jsx`.
- **Stamps & timeline:** pure SVG from `linea-shared.jsx` (`Mark`, `StampGlyph`, `TimelineDiagram`). No raster art.
- **Paper grain:** inline SVG `feTurbulence` (no external file needed).
- No other imagery — the look is type, paper, and the timeline.

## Files in this bundle (`design_references/`)
| File | What it is | Use |
|---|---|---|
| `La Linea.html` | Entry point; loads fonts + scripts; lays everything on the design canvas. | Run in a browser to see all screens. |
| `linea-shared.jsx` | **El Cuaderno tokens, phone shell, tab bar, status bar, the timeline engine (`TimelineDiagram`, `Mark`, `StampGlyph`), helpers.** | The core to port first. |
| `linea-content.jsx` | All Spanish content: `READ/BUILD/SPOT/SIGNALS`, `STAMPS`, `STAMP_GUIDE`, `MODES`, `TENSE_SCOPES`. | Source of truth for copy & data. |
| `linea-game.jsx` | The playable flow: `PracticaHub`, `ModeSelect`, the 4 mode components, `Feedback`, `Results`, `LineaGame` machine. | Screen-by-screen reference. |
| `linea-directions.jsx` | 3 layout directions for the main "Leer la línea" screen + the `StampLegend` and full `StampGuide` reference plates. | Layout options + the guide. |
| `design-canvas.jsx` | Pan/zoom canvas viewer that hosts the prototypes. | **Presentation only — ignore for production.** |

---

## Notes for the implementer
- Start by porting **`TimelineDiagram` + `Mark` + `StampGlyph`** (the geometry constants and SVG paths are exact) — most of the game is just feeding it `marks`. The ESOL app's `TimelineCanvas.tsx` + `timelineTensesUtils.ts` are a strong reference; the zone/position math is the same idea.
- Keep the **two-color logic** intact: tense colors for the diagram, almagre for interaction. It's the whole pedagogical point and the user approved the exception to El Cuaderno's single-accent rule.
- The **two new stamps (Onda / Rombo)** float above the axis — preserve that; it visually encodes "irrealis / not a real time."
- UI chrome speaks Spanish; explanatory copy can be English (matches the app). Spanish sentences/examples are always Newsreader.
- The hub must stay a **calm row list** — do not promote La Línea to a hero card; it's one game among several.
