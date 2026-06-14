# Handoff: Pues — "El Cuaderno" redesign + Speak-First flow

## Overview
Pues is a personal Spanish-practice PWA — *"a quiet notebook for thinking in Spanish."* It is **not** a traditional drill app. The user already has a foundation; the goal is to make them **speak**, not conjugate. This handoff covers two things:

1. **A new visual direction — "El Cuaderno"** ("the notebook"): a calm, editorial, ink-and-paper aesthetic built to age slowly. It replaces the previous navy/copper look and dramatically reduces visual density.
2. **A new core mechanic — the Speak-First flow**: the user says a thought out loud *before* any Spanish is revealed; the answer unlocks only after they've tried.

The redesign brief, in the user's words: *make it less overwhelming, plan to grow, and make me SPEAK.*

---

## About the Design Files
The files in `design_references/` are **design references created in HTML** — prototypes that show the intended look, layout, and behavior. **They are not production code to copy directly.**

This app already has a codebase: a **Next.js (App Router) + React + TypeScript + Tailwind CSS v4** PWA (see the existing `app/`, `components/`, `content/`, `hooks/` directories). The task is to **recreate these designs inside that existing environment**, using its established patterns:
- Routes live under `app/` (e.g. `app/flow/...`, `app/progress/`).
- Shared UI lives in `components/`.
- Content/data lives in `content/` (e.g. `content/frames.ts`), state in `hooks/` (e.g. `useFlowDraft`, `useThoughts`).
- Theme tokens are defined as CSS variables in `app/globals.css` with a `.light` custom variant — **the new palette below should replace the existing token values there.**

Do not introduce a new styling system; express all tokens below as CSS variables / Tailwind theme values in the existing setup.

---

## Fidelity
**High-fidelity (hifi).** The primary reference — `design_references/Pues Direction.html` — is a pixel-level mock with final colors, typography, spacing, and component styling. Recreate the UI faithfully using the codebase's existing libraries and patterns. All hex values, font sizes, and spacing in this README are final.

> Note on the second reference file: `Pues Redesign.html` (with `pues-homes.jsx` / `pues-flow.jsx`) is an **earlier exploration** showing three home-screen *layout* concepts (Solo / Camino / Diario) and the full 3-step flow. Use it for **layout and interaction ideas only** — its colors/fonts are the *old* navy/copper palette and are superseded by El Cuaderno tokens below. (`design-canvas.jsx` in that file is just the presentation viewer — ignore it.)

---

## Design Tokens

All tokens are warm. Two modes ship: **Ink** (dark, the default) and **Paper** (light). Both matter equally — build them as a proper theme toggle.

### Color — Ink mode (dark, default)
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#1B1712` | App background (warm espresso-black, **not** navy) |
| `--surface` | `#251F18` | Cards / option rows |
| `--surface-2` | `#2C251C` | Raised surface |
| `--ink` | `#EFE5D2` | Primary text (bone) |
| `--ink-soft` | `#B4A98F` | Secondary text |
| `--ink-faint` | `#7D7259` | Tertiary text, inactive icons, metadata |
| `--rule` | `#3A3127` | Hairline dividers, borders |
| `--accent` | `#DD6A43` | *Almagre* — primary actions, active states, highlights |
| `--accent-ink` | `#1B1712` | Text/icon on top of accent fills |

### Color — Paper mode (light)
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#F1E7D4` | App background (warm bone paper) |
| `--surface` | `#FBF4E6` | Cards / option rows |
| `--surface-2` | `#F6ECD8` | Raised surface |
| `--ink` | `#28231B` | Primary text (warm near-black) |
| `--ink-soft` | `#5B5343` | Secondary text |
| `--ink-faint` | `#978A73` | Tertiary text, inactive icons, metadata |
| `--rule` | `#DDCCAE` | Hairline dividers, borders |
| `--accent` | `#BB4A2A` | *Almagre* (slightly deeper for contrast on light) |
| `--accent-ink` | `#FBF4E6` | Text/icon on top of accent fills |

**The accent is the only chromatic color in the system.** Everything else is warm neutral. *Almagre* is the clay-red ochre pigment — the palette's longevity rests on earth tones + a single confident accent. Do not add a second accent hue.

### Typography
Three families (all on Google Fonts):
- **Newsreader** — display, headlines, and **all Spanish sentences**. Weights 300/400/500; italic 300/400. Uses optical sizing (`opsz 6..72`). This is the soul of the look.
- **Hanken Grotesk** — interface and body text (buttons body, option labels, descriptions). Weights 400/500/600.
- **Spline Sans Mono** — **metadata only** (tiny labels, streak counts, situation tags, step counters). Weights 400/500. Always uppercase with wide tracking. This is the "library-card / ledger" signal — never use it for body copy.

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=Hanken+Grotesk:wght@400;500;600&family=Spline+Sans+Mono:wght@400;500&display=swap
```

#### Type scale (exact values from the mock)
| Role | Family | Size / line-height | Weight | Tracking | Notes |
|---|---|---|---|---|---|
| Hero name (Home greeting) | Newsreader | 46 / 1.0 | 300 | −0.02em | e.g. "Marlana" |
| "Buenos días," lead-in | Newsreader italic | 15 | 400 | — | color `--ink-soft` |
| Display sentence (Home / Speak) | Newsreader | 25–28 / 1.22 | 300 | −0.01em | one warm sentence per screen |
| Revealed Spanish answer | Newsreader | 24 / 1.28 | 400 | — | sits under a 2px accent top-rule |
| Wordmark "Pues" | Newsreader italic | 17 | 400 | — | color `--ink-soft` |
| Button label | Newsreader | 19 | 400 | — | inside primary button |
| Reflection question | Newsreader italic | 16 | 400 | — | "¿Cómo se sintió la tuya?" |
| Body / description | Hanken Grotesk | 13.5–14 / 1.55 | 400 | — | color `--ink-soft` |
| Option-row label | Hanken Grotesk | 14 | 400 | — | — |
| Metadata cap (`.mono-cap`) | Spline Sans Mono | 10–10.5 | 400 | 0.13em | UPPERCASE, color `--ink-faint` |
| Tab label | Spline Sans Mono | 9 | 400 | 0.04em | UPPERCASE |

### Spacing / radius / misc
- Screen horizontal padding: **24px**.
- Phone frame: **300 × 640**, corner radius **30px** (frame is a prototype device shell; in the real PWA this is the full viewport).
- Card / button radius: **14px**; option rows **11px**; pills/tags **999px** (full).
- Primary button padding: **16px 18px**.
- Mic button: **86px** circle, accent fill, with a soft ring: `box-shadow: 0 0 0 10px color-mix(in oklab, var(--accent) 15%, transparent)`.
- Dividers: **1px** solid `--rule`. The revealed-answer separator is **2px** solid `--accent`.
- **Paper grain texture:** a subtle full-screen noise overlay. In the mock it's an inline SVG `feTurbulence` (`baseFrequency 0.85`, 2 octaves) at low opacity — `opacity: 0.35` + `mix-blend-mode: screen` on Ink; `opacity: 0.5` + `mix-blend-mode: multiply` on Paper. Keep it whisper-faint. A tiling PNG noise asset is an acceptable substitute.
- **No drop shadows on content.** Hierarchy comes from type, whitespace, and hairline rules — not elevation. (The only shadow is the device frame in the mock, which is presentation-only.)

---

## Navigation
Bottom tab bar, 4 tabs, Spanish labels. Active tab uses `--accent`; inactive uses `--ink-faint`. 1px top `--rule`, ~10px/18px vertical padding.

| Tab | Label (es) | Icon | Route (suggested) |
|---|---|---|---|
| Today | **Hoy** | house | `/` |
| Practice | **Práctica** | overlapping circles | `/activities` |
| Situations | **Lugares** | 2×2 grid | `/situations` |
| Journal | **Diario** | open book | `/thoughts` |

Icons are 1.6-stroke line icons (`fill:none; stroke:currentColor; stroke-linecap/linejoin:round`), 20px in the tab bar. Exact SVG paths are in `design_references/Pues Direction.html` (`TabBar` component).

**Microcopy principle — "Spanish in the small print":** UI furniture speaks Spanish (*Hoy, Práctica, Lugares, Diario, Racha, Día, Empezar, Salir, Escuchar*). The language lives in the chrome; it's never shouted in big translated headings.

---

## Screens / Views

### 1. Home — "Hoy" (Today)
**Purpose:** A calm overview of where the user is, plus one obvious way to start. This screen replaced a dense version that listed 5 frames + stacked cards + multiple buttons. **One thing per screen** is the rule.

**Layout** (top → bottom, single column, 24px side padding):
1. **Header row** (`space-between`, align-center, top padding 16px):
   - Left: wordmark "Pues" (Newsreader italic 17, `--ink-soft`).
   - Right: streak metadata "Racha · 12" (`.mono-cap`).
2. **Greeting block** (margin-top 34px):
   - "Buenos días," (Newsreader italic 15, `--ink-soft`, margin-bottom 4px).
   - "Marlana" (Newsreader 300, 46px, line-height 1) — the user's name.
3. **Hairline rule** (1px `--rule`, margin 26px 0 24px).
4. **Today block:**
   - Metadata cap "Día 03 · La vida diaria" (`.mono-cap`, margin-bottom 12px).
   - One warm sentence: "Cinco minutos son una conversación entera." (Newsreader 300, 25px, line-height 1.22).
5. **Primary button** "Empezar" (margin-top 24px): full-width, `--accent` fill, `--accent-ink` text, radius 14, padding 16/18, `space-between` with a right-arrow icon (19px). Label in Newsreader 19.
6. **Spacer (flex:1)** — deliberate breathing room.
7. **Footer whisper** (centered, margin-bottom 16px): "47 frases dichas en voz alta" (`.mono-cap`). The quiet count of progress.
8. Bottom tab bar with **Hoy** active.

**Behavior:** Tapping **Empezar** begins today's Speak-First session (navigates to the flow, screen 1).

> Layout alternatives explored (see `Pues Redesign.html`, re-skin to El Cuaderno tokens before use):
> - **Solo** — greeting + single action, maximum whitespace (this is the direction realized above).
> - **Camino** — a vertical "path" of days: completed behind, today glowing, upcoming faint. Best literal answer to "where am I?".
> - **Diario** — journal-forward: today's prompt + a list of recent sentences the user has said, to reread.
> The user can pick a home layout independently of the look. The realized Home above is closest to **Solo + Diario's footer**.

---

### 2. Speak (Flow step 1 of 3) — "Decir"
**Purpose:** The core mechanic. The user is shown an English thought + a situation, and must **say it out loud in Spanish before any answer appears.** The reveal is visibly locked.

**Layout** (no tab bar during the flow):
1. **Flow header** (`space-between`, top padding 16): left "Salir" (`.mono-cap`, exits flow); right a 3-step progress indicator — three pills, the active one is a 16px-wide `--accent` bar, others are 6px `--rule` dots.
2. **Situation pill** (self-start, margin-top 22): bordered pill (1px `--rule`, radius 999, padding 5/12) with a 5px `--accent` dot + "En el café" (`.mono-cap`, `--ink-soft`).
3. **Instruction cap** "Dilo en español" (`.mono-cap`, margin 28px 0 12px).
4. **The prompt** (Newsreader 300, 28px, line-height 1.22): the English thought, in quotes — e.g. "I'd like a coffee with oat milk, please." **No Spanish anywhere on this screen.**
5. **Spacer (flex:1).**
6. **Mic control** (centered column, gap 14): an 86px circular `--accent` button with a mic icon (`--accent-ink`) and the soft accent ring shadow. Below it: "Tap, then say it out loud" (Newsreader italic 15, `--ink-soft`).
7. **Locked-reveal hint** (centered row, gap 7, padding 14/0/20): a small padlock icon (`--ink-faint`) + "La respuesta se revela después" (`.mono-cap`). Communicates the answer is gated.

**Behavior:**
- Tap mic → start recording (mic state: idle → recording → done). On stop, the reveal unlocks and the user advances to **Reveal**.
- The reveal **cannot** be opened before a speak attempt — that's the whole point of the mechanic.
- (Optional, future) Save the user's audio for replay; the user opted into "speak before the answer" as the must-have, with voice recording as a nice-to-have.

---

### 3. Reveal (Flow step 2 of 3) — "Revelar"
**Purpose:** Now the Spanish appears, with audio to compare against and a *warm* self-check (not a grade).

**Layout:**
1. **Flow header** — same as Speak; progress now shows steps 1 **and** 2 filled (step 2 is the active 16px bar).
2. **Cap** "Una forma natural de decirlo" (`.mono-cap`, margin 24px 0 12px).
3. **Answer block** — top border **2px `--accent`**, padding-top 16:
   - Spanish answer (Newsreader 400, 24px, line-height 1.28): "Quería un café con leche de avena, por favor."
   - **Audio row** (margin-top 16, gap 11): a 36px circular outline button (1px `--rule`) with a play triangle (`--accent`), then "Escuchar · lento / normal" (`.mono-cap`).
4. **Why-note** (Hanken 13.5, line-height 1.55, `--ink-soft`, margin-top 18): a soft explanation, with key words in Newsreader italic — e.g. *"Quería suena más suave y cortés que quiero aquí."*
5. **Spacer (flex:1).**
6. **Reflection question** "¿Cómo se sintió la tuya?" (Newsreader italic 16, `--ink`, margin-bottom 12).
7. **Self-assessment options** (column, gap 8) — three selectable rows (radio behavior), radius 11, padding 12/14:
   - Selected: background `color-mix(in oklab, var(--accent) 11%, var(--surface))`, border 1px `--accent`, filled radio dot.
   - Unselected: background `--surface`, border 1px `--rule`, hollow radio (1px `--ink-faint`).
   - Options: **"Lo dije con soltura"** / **"Casi — por poco"** / **"Quiero practicarla"**.

**Behavior:**
- Play button plays model audio (toggle slow / normal speed).
- Selecting a reflection option records the user's self-assessment and advances to **Saved**. "Quiero practicarla" should flag the sentence for resurfacing later.

---

### 4. Saved (Flow step 3 of 3)
**Purpose:** A warm, encouraging close that banks the sentence into the Journal.

> The realized mock focuses on Speak + Reveal. The **Saved** screen is specified from the earlier flow (`pues-flow.jsx` → `FlowSaved`), to be rendered in El Cuaderno tokens:

**Layout** (centered):
1. Flow header — all 3 steps filled.
2. Centered confirmation: a 56px accent-tint circle with a checkmark (`--accent`); heading "¡Bien dicho!" (Newsreader 300, 30px); subline "That's 4 of 5 today." (Newsreader italic 14.5, `--ink-soft`) — translate to Spanish-flavored microcopy if preferred, e.g. "4 de 5 hoy."
3. The saved sentence echoed in a `--surface-2` card (radius 14): "Quería un café con leche de avena, por favor." (Newsreader 17).
4. Footer actions (column, gap 10): primary **"Next thought"** / **"Siguiente"** (accent fill); text button **"Save & finish for today"** / **"Guardar y terminar"** (`--ink-soft`, no fill).

**Behavior:** "Siguiente" loops back to **Speak** with the next thought; "Guardar y terminar" exits to Home. Every saved sentence is appended to the Journal (Diario) and increments the day's count + streak.

---

## Interactions & Behavior (summary)
- **Speak-first gating:** Reveal is unreachable until a speak attempt is made on the Speak screen. This is the defining interaction — do not let users skip ahead to the answer.
- **Flow navigation:** linear 3 steps (Speak → Reveal → Saved), with a persistent "Salir" escape and a 3-pill progress indicator. "Siguiente" on Saved restarts the loop for the next of the day's thoughts (default 5/day; the user mentioned this count could become adjustable).
- **Audio:** model sentence playback with slow/normal toggle on Reveal.
- **Self-assessment** replaces correctness grading — tone is warm/encouraging by design. "Quiero practicarla" marks a sentence to resurface.
- **Theme toggle:** Ink (default) ↔ Paper. Persist the choice.
- **Animations:** quiet and minimal. Use short fades / small rises (~0.6–0.7s, ease-out). No bouncy/springy motion, no decorative loops. Respect `prefers-reduced-motion`.

## State Management (map to existing hooks)
- **Flow draft** (current thought, situation, recording state, revealed answer, self-assessment) — extend the existing `useFlowDraft` hook.
- **Journal entries** ("thoughts") — the existing `useThoughts` hook; each saved sentence appends here.
- **Progress** — day index, streak ("racha"), count of sentences spoken (drives the Home footer "47 frases…" and `/progress`).
- **Daily session** — which of today's N thoughts is active; default N = 5 (consider a future setting).
- **Theme** — Ink/Paper preference, persisted (localStorage), mapped to the `.light` variant class already in `globals.css`.
- **Content** — frames/prompts/situations come from `content/` (e.g. `content/frames.ts`); the per-thought English prompt, situation, model Spanish answer, audio, and why-note should be fields on that content model.

---

## Future / Room to Grow
The user explicitly wants the design to grow without losing the calm. Planned, opt-in components (all reuse the same tokens + the speak-first loop):
1. **Desktop** (next) — the journal as a wide reading view; speak-prompt and reveal side-by-side.
2. **Games** (later) — light, low-stakes rapid speak rounds & listening matches.
3. **Vocab bank** (later) — a personal word bank grown from sentences the user actually said (the existing Cognates activity expanded).
4. **Gentle grammar** (someday) — just-in-time tips inside the flow (a note on Reveal), never a drill. Confidence-first, opt-in.
5. **Record & replay** (explore) — save the user's own audio next to the model to hear progress over weeks.

Keep the app quiet by default; these stay out of the way until reached for. A visual map of these is the third section of `Pues Redesign.html`.

---

## Assets
- **Fonts:** Newsreader, Hanken Grotesk, Spline Sans Mono — all Google Fonts (import string above). In Next.js, load via `next/font/google`.
- **Icons:** simple 1.6-stroke line icons drawn inline as SVG (tab bar, mic, play, arrow, lock, check). Paths are in `Pues Direction.html`. Swap for the codebase's existing icon set if it has one with a matching weight.
- **Paper grain:** inline SVG `feTurbulence` overlay (see Spacing/misc). No external image required; a tiling noise PNG is an acceptable substitute.
- **Logo:** the wordmark "Pues" set in Newsreader italic is the brand mark; no raster logo needed. (A `pueslogo.jpeg` exists in the repo but the wordmark is preferred.)
- No other raster imagery is used — the look is type-and-paper.

---

## Files in this bundle (`design_references/`)
| File | What it is | How to use |
|---|---|---|
| `Pues Direction.html` | **Primary hifi reference.** The "El Cuaderno" direction board: manifesto, Home (Ink + Paper), Speak, Reveal, and the full type/color/principles spec. | Source of truth for look, tokens, and the Speak/Reveal screens. Open in a browser. |
| `Pues Redesign.html` | Earlier exploration on a pan/zoom canvas: 3 Home layout concepts (Solo/Camino/Diario), the 3-step flow (incl. **Saved**), and the growth map. | Layout & interaction reference **only** — ignore its old navy/copper colors; apply El Cuaderno tokens. |
| `pues-ui.jsx` | Shared prototype components (Phone shell, StatusBar, TabBar, icons) for the redesign file. | Reference for component structure / icon paths. |
| `pues-homes.jsx` | The three Home layout concepts. | Layout reference for Home alternatives. |
| `pues-flow.jsx` | The 3-step flow incl. the **Saved** screen + growth map. | Reference for flow structure and the Saved screen spec. |
| `design-canvas.jsx` | The pan/zoom viewer scaffold that renders `Pues Redesign.html`. | **Not a design** — ignore. |

> The existing app codebase (Next.js + Tailwind v4 PWA) lives in the user's `pues/` project folder — implement against that, replacing the token values in `app/globals.css` with the El Cuaderno palette above.
