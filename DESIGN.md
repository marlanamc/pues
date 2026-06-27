---
name: Pues — El Cuaderno
description: A quiet notebook for thinking in Spanish. Ink and paper, one warm almagre red, dark by default.
colors:
  bg: "#1b1712"
  surface: "#251f18"
  surface-2: "#2c251c"
  surface-sunk: "#1f1a14"
  ink: "#efe5d2"
  ink-soft: "#b4a98f"
  ink-mute: "#7d7259"
  rule: "#3a3127"
  almagre: "#dd6a43"
  almagre-soft: "#c25a37"
  accent-ink: "#1b1712"
  paper-bg: "#f1e7d4"
  paper-surface: "#fbf4e6"
  paper-surface-2: "#f6ecd8"
  paper-surface-sunk: "#efe3cc"
  paper-ink: "#28231b"
  paper-ink-soft: "#5b5343"
  paper-ink-mute: "#978a73"
  paper-rule: "#ddccae"
  almagre-paper: "#bb4a2a"
  almagre-paper-soft: "#a23f23"
  zone-lugares: "#5fb585"
  zone-guias: "#7faedd"
  zone-lab: "#d68dc4"
  past: "#d8a35a"
  present: "#73c2a1"
  future: "#80b3e5"
  correct: "#3fb462"
typography:
  display:
    fontFamily: "Newsreader, Georgia, ui-serif, serif"
    fontSize: "2.875rem"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "'liga', 'kern'"
  headline:
    fontFamily: "Newsreader, Georgia, ui-serif, serif"
    fontSize: "1.875rem"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Newsreader, Georgia, ui-serif, serif"
    fontSize: "1.75rem"
    fontWeight: 300
    lineHeight: 1.22
    letterSpacing: "-0.01em"
  display-italic:
    fontFamily: "Newsreader, Georgia, ui-serif, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.28
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  gloss:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Spline Sans Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.65rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.13em"
rounded:
  sm: "4px"
  md: "11px"
  lg: "14px"
  full: "999px"
spacing:
  hairline: "1px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.almagre}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.lg}"
    padding: "16px 18px"
    typography: "{typography.title}"
  button-primary-active:
    backgroundColor: "{colors.almagre-soft}"
  pill-lower:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
    typography: "{typography.body}"
  situation-pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "5px 12px"
  day-pill:
    backgroundColor: "transparent"
    textColor: "{colors.almagre}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
    typography: "{typography.label}"
  tip-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.md}"
    padding: "10px 14px 12px"
    typography: "{typography.gloss}"
  questionnaire-input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "13px 15px"
    typography: "{typography.body}"
  questionnaire-section:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "18px 16px 20px"
---

# Design System: Pues — El Cuaderno

## 1. Overview

**Creative North Star: "The Quiet Notebook"**

Pues is a personal Spanish-practice notebook rendered as a PWA. The interface treats itself as a private ledger: dark warm paper at night, bone-warm paper by day, ink that breathes, and one signature warm red — *almagre* — used sparingly enough that it always means something. Newsreader carries the Spanish sentences with the dignity they deserve; Hanken Grotesk handles the chrome quietly; Spline Sans Mono whispers metadata in tracked-out small caps, the library-card signal at the edge of every screen. There is a feTurbulence noise layer washed over everything — a whisper of paper grain — and a faint almagre radial wash at the top of the page, like ink bleeding through the page above. Hierarchy comes from type and whitespace and hairline rules, never from elevation. There are no drop shadows on content. Cards exist, but they earn their place; they're sunk into the surface with borders, not lifted off it.

This system explicitly rejects everything that makes a language app feel like a slot machine. No XP bars, no badges, no streak-as-pressure, no celebration confetti, no gradient-hero / feature-card-grid SaaS template, no glassmorphism, no dashboard density. The warmth is in the paper and the type, not in chirpy copy. The almagre is committed (always the same red, always doing real work) rather than decorative. When the warm-tinted neutrals push body text toward the muted edge of the ramp, the design fights back to keep contrast honest — quietness is not the same as washed-out.

**Key Characteristics:**

- Dark by default; warm bone-paper light mode is a peer, not an afterthought.
- One signature warm red — almagre — committed across both themes, ≤10% of any screen.
- Type-led hierarchy: Newsreader serif display, Hanken sans body, Spline mono labels.
- Hairline rules (1px) and generous whitespace do the structural work.
- Flat surfaces; no drop shadows on content. Depth comes from tonal layering and ink mass.
- Paper grain (feTurbulence noise) and a soft almagre top-of-page wash on every screen.
- Four zone hues (almagre, green, blue, magenta) used as identity markers per hub, not as decoration.
- La Línea tense semantics: color = WHEN (past=amber, present=green, future=blue).

## 2. Colors: The Ink-and-Paper Palette

A single committed warm red against a two-mode neutral system — ink (dark, the default) and paper (warm bone, light mode) — supplemented by four zone hues that mark navigation territory and three tense hues that carry grammatical meaning.

### Primary

- **Almagre** (`#dd6a43` ink / `#bb4a2a` paper): The brand voice. Used for the primary action button, the active situation dot, current-page indicators in the tab bar, accent hairlines, focus rings, selection highlight, and the radial wash that bleeds from the top of every screen. Earthy iron-red, named after the Spanish-language pigment ground from red earth — the cultural fit matters as much as the hue.
- **Almagre-soft** (`#c25a37` ink / `#a23f23` paper): The pressed state of the primary action. Slightly deeper, slightly more saturated; never used at rest.

### Neutral — Ink (dark, default)

- **Bg** (`#1b1712`): Warm near-black with a touch of red-brown. The page itself.
- **Surface** (`#251f18`): One step up; the resting plane of cards and pills.
- **Surface-2** (`#2c251c`): A second step up for nested or selected surfaces.
- **Surface-sunk** (`#1f1a14`): One step *below* surface; input fields, recessed wells.
- **Ink** (`#efe5d2`): Warm cream — body text at full strength.
- **Ink-soft** (`#b4a98f`): Secondary text, glosses, descriptions. Hits 4.5:1 against bg.
- **Ink-mute** (`#7d7259`): Tertiary text, mono labels, hints; the quietest readable voice.
- **Rule** (`#3a3127`): Hairline borders. Always 1px, never thicker.

### Neutral — Paper (light)

- **Paper-bg** (`#f1e7d4`): Warm bone, the day mode. Not white; deliberately tinted toward almagre's hue family.
- **Paper-surface** (`#fbf4e6`) / **paper-surface-2** (`#f6ecd8`) / **paper-surface-sunk** (`#efe3cc`): Same tonal stepping as the ink mode, reversed.
- **Paper-ink** (`#28231b`) / **paper-ink-soft** (`#5b5343`) / **paper-ink-mute** (`#978a73`): Body, secondary, tertiary text on bone paper.
- **Paper-rule** (`#ddccae`): Hairline on paper.

### Tertiary — Zone Hues (canonical OKLCH; hex is the round-tripped approximation)

One signature color per navigation hub. Each zone overrides `--zone` on its own root so accents elsewhere on the page can inherit the right hue. Dark-mode values listed; light mode uses deeper variants for contrast on bone paper.

- **Zone — Práctica** = almagre (the brand home, no separate hue).
- **Zone — Lugares**: `oklch(0.7 0.1 152)` — sage green, the places hub.
- **Zone — Guías**: `oklch(0.7 0.09 248)` — overcast blue, the references hub.
- **Zone — Lab**: `oklch(0.72 0.11 332)` — dusty magenta, the experiments hub.

### Tertiary — La Línea Tense Semantics (canonical OKLCH)

Color **IS** when. Used only inside La Línea (the timeline game) and never as decorative color elsewhere.

- **Past**: `oklch(0.76 0.115 72)` — amber, looking back.
- **Present**: `oklch(0.74 0.095 158)` — green, the now.
- **Future**: `oklch(0.73 0.085 245)` — cool blue, looking forward.
- **Correct**: `oklch(0.68 0.14 145)` — vivid green, the win signal in games.

### Named Rules

**The One Voice Rule.** Almagre is the only saturated accent that may appear on a non-game, non-zone surface. It is used on the primary action, the active state, the selection highlight, the focus ring, and the top-of-page wash. Anything else asking for "accent color" gets ink, ink-soft, or a hairline rule instead.

**The Zone-Identity Rule.** Zone hues mark territory and may color current-page indicators, the active tab dot, and the Empezar gradient sweep on the home screen. They do **not** appear inside zone pages as decoration; once the user is inside Lugares, almagre is still the action color.

**The Tense-as-Color Rule.** Past=amber, Present=green, Future=blue are reserved for La Línea. Re-using them elsewhere breaks the system's grammar and is forbidden.

**The Honest-Contrast Rule.** Body text on `bg` must clear 4.5:1; secondary text (`ink-soft`) must clear it too. The warm-tinted ramp makes washed-out muted gray easy to slip into — when in doubt, push toward `ink`, never toward `ink-mute`.

## 3. Typography

**Display Font:** Newsreader (Google Fonts; weights 300 / 400 / 500, italic).
**Body Font:** Hanken Grotesk (Google Fonts; weights 400 / 500 / 600).
**Label / Mono Font:** Spline Sans Mono (Google Fonts; weights 400 / 500).

**Character:** A literary serif paired with a humanist sans and a mono used strictly as metadata. Newsreader is the soul of the look — its optical-sizing handles the shift from hero greeting to inline Spanish prompt without losing weight. Hanken stays quiet; it never tries to compete with the serif. Spline Sans Mono is the library-card signal: tracked-out, tiny, uppercase, ink-mute. Never a body font.

### Hierarchy

- **Display 2xl** (weight 300, 2.875rem / 46px, line-height 1, letter-spacing -0.02em): Hero greeting on the Today screen ("Marlana"). Newsreader, optical sizing on.
- **Display xl** (weight 300, 1.875rem / 30px, line-height 1.1, letter-spacing -0.015em): Page titles on hubs and second-level pages.
- **Display Prompt** (weight 300, 1.75rem mobile → 2rem desktop / 28–32px, line-height 1.22, letter-spacing -0.01em): The Spanish sentence prompt — the warmest, most-loved type on any screen.
- **Display lg** (weight 300, 1.5625rem / 25px, line-height 1.22, letter-spacing -0.01em): One warm display sentence per screen, used sparingly.
- **Display md** (weight 400, 1.5rem / 24px, line-height 1.28): Revealed Spanish answer / saved sentence in the notebook.
- **Display Italic** (weight 400, ink-soft, letter-spacing -0.005em): Lead-ins, the wordmark, the reflection question. Italic earns its presence; never used for emphasis inside body prose.
- **Body** (Hanken, weight 400, ~0.9375rem / 15px, line-height 1.55): Interface text. Hold to 65–75ch per line for prose.
- **Gloss** (Hanken, weight 400, 0.875rem / 14px, ink-soft): Sub-text under prompts; English translations, gentle hints.
- **Mono-Cap / Label** (Spline Sans Mono, weight 400, 0.65rem / ~10.5px, letter-spacing 0.13em, uppercase, ink-mute): The library-card / ledger signal. Metadata only — frame names, timestamps, jump-nav category headers. Never used for body text, button labels, or anything the user is meant to read continuously.

### Named Rules

**The Newsreader-for-Spanish Rule.** Every Spanish sentence in the app — prompt, frame stem, saved sentence, gloss source — is set in Newsreader. The serif gives the language the dignity the product is built around. Hanken handles English chrome.

**The Mono-as-Metadata Rule.** Spline Sans Mono is reserved for the library-card signal: small, uppercase, tracked-out, ink-mute. Using it for buttons, body, or display text breaks the metaphor — those tracked caps tell the reader "this is the catalog edge of the page, not the content."

**The One-Display-Sentence Rule.** A screen earns at most one display-sized warm sentence. Stacking two display sentences flattens the hierarchy and turns the page into a brochure.

**The 65–75ch Body Rule.** Prose containers cap at 65–75ch for line length. The notebook is meant to be read, not scrolled past.

## 4. Elevation

The system is **flat**. There are no drop shadows on content surfaces. Depth comes from three quieter mechanisms working together:

1. **Tonal layering.** A four-step ramp (`surface-sunk` → `bg` → `surface` → `surface-2`) carries hierarchy. Inputs sit *below* the page in `surface-sunk`; cards rest *on* the page in `surface`; nested or selected surfaces rise to `surface-2`. The light-mode ramp mirrors this exactly.
2. **Hairline rules.** A 1px `rule` border defines every card, pill, and section edge. Variants tint the hairline toward `accent` for emphasis (e.g. `tip-card` uses 24% almagre mixed into rule).
3. **Inset shadows on inputs only.** Form inputs carry a faint inset shadow (`inset 0 1px 2px` at ~8% ink) — the only "shadow" in the system, used to read as recessed rather than lifted.

### Shadow Vocabulary

- **Input inset** (`box-shadow: inset 0 1px 2px color-mix(in oklab, var(--ink) 8%, transparent)`): The recessed feel of form fields. Light mode uses 6% for a slightly softer well.
- **Focus glow** (`box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 18%, transparent)`): The almagre-tinted focus ring on focused inputs. Combined with `border-color: var(--accent)`; never used alone.

### Named Rules

**The No-Lift Rule.** No `box-shadow` with a positive Y-offset on any content surface. Cards are sunk into the page with borders, not lifted off it with shadows. The one exception is the focus ring (it carries meaning, not decoration).

**The Tonal-Depth Rule.** When you need a surface to feel "above" another, change the tonal step on the four-step ramp — never reach for a shadow. When you need a surface to feel "below," use `surface-sunk` and (optionally) the input inset.

## 5. Components

### Buttons

- **Shape:** Rounded 14px (`--radius-lg`) for the primary; 11px (`--radius-md`) for secondary; 999px for pills.
- **Primary (`btn-primary`):** Full-width almagre fill, `accent-ink` text, space-between layout with the label on the left and a `›` arrow on the right. Padding 16px 18px. Label uses Newsreader at 1.1875rem / 19px — a serif-on-warm-red signature unique to this product. Pressed state: `almagre-soft`. Transition: 120ms.
- **Primary — Zones (`btn-primary--zones`):** The Empezar action on home. Same shape, but the fill is a 4-stop gradient sweep through all four zone hues (almagre → lugares → guías → lab) — the one place the four zones appear together. Pressed: `filter: brightness(0.9)`. **Not** repurposable as decoration.
- **Primary — Spectrum (`btn-primary--spectrum`):** The Comprobar action in Sentence Builder. A 5-stop horizontal sweep (almagre → amber → green → blue → magenta). One use site. Pressed: `filter: brightness(0.92)`.
- **Secondary (`pill-lower`):** Surface fill, 1px rule border, 11px radius, 14×16px padding, body type. Pressed: surface-sunk + almagre-tinted border. Used for non-primary actions in the daily flow.
- **Day-pill (`day-pill`):** Tracked mono in almagre on a transparent ground with a 45%-almagre hairline border, 999px radius. Reads as "today's session" — date / day-of-week metadata. Never used as a button.

### Pills & Chips

- **Situation Pill (`situation-pill`):** Inline-flex pill with a 5px almagre dot, 1px rule border, 999px radius, 5×12px padding. Identifies which situation the current prompt belongs to. The dot is the only place almagre appears at this size — quiet but unmistakable.

### Cards & Containers

- **Corner Style:** 11px for compact cards (`tip-card`, `pill-lower`, `questionnaire-field-card`); 14px for section cards (`questionnaire-section`, `confusions-jump`).
- **Background:** Most cards use `surface`; tip cards mix 10% almagre into surface for a warm wash; sunk wells use `surface-sunk`.
- **Shadow Strategy:** None (see Elevation). Cards are defined by their border and their tonal step.
- **Border:** Always 1px `rule`. Variants tint the rule toward almagre (`color-mix(in oklab, var(--accent) 24%, var(--rule))`) for the tip-card; toward ink-mute for input-bearing cards.
- **Internal Padding:** 14–16px on compact cards; 18×16×20px on section cards.

### Tip Card (`tip-card`)

A signature pattern: a low-key inline card that delivers a why-note next to a prompt. Almagre-tinted border (24% accent mixed into rule), surface tinted with 10% almagre, italic Newsreader for emphasized terms inside body text. 13.5px gloss type. The label is almagre; the body is `ink-soft`. Light mode dials the wash down to 8%.

### Inputs / Fields

- **Style:** Bg fill (the recessed tone), 1.5px border using a mix of rule + ink-mute, 9px radius, 13×15px padding, 0.9375rem body type, 44px+ min-height (touch target). Carries the input inset shadow.
- **Placeholder:** `ink-mute` at 0.85 opacity — restrained, never a dummy of the real value.
- **Hover:** Border tints 35% toward almagre.
- **Focus:** Border becomes almagre, background lifts to `surface`, and the 18%-almagre focus glow appears around the field. No outline; the ring carries the focus signal.
- **Light-mode variant:** Background is `surface`, border slightly cooler, inset shadow softened to 6% ink.

### Hairline Accents

A first-class part of the system, not a utility afterthought.

- **`.hairline`** (full-width, 1px, rule color): Section dividers.
- **`.hairline-accent`** (32px, 1px, almagre): Inline emphasis under a label.
- **`.hairline-accent-center`** (28px, 1px, almagre, auto-margin): Centered punctuation between blocks.

### Navigation

- **Bottom Tab Bar (`BottomTabNav`):** Mobile-first; fixed to the bottom of the viewport with safe-area insets. Tabs use mono-cap labels and an almagre dot for the active tab. Height respects `env(safe-area-inset-bottom)`.
- **Left Rail (`LeftRailNav`):** Desktop ≥1024px replacement for the tab bar. Vertical, hairline-separated, mono-cap labels, almagre active indicator. The main content column shifts to a centered max-width on the right.
- **Jump Navs (`confusions-jump`, `accent-marks-jump`, etc.):** A signature pattern — a `<details>` element collapsed by default, with a mono-cap chevron, almagre on hover/open, and inside, mono-cap category headers grouping links separated by faint hairlines. Functions as an in-page table of contents on long reference pages.

### Paper Wash & Grain (Signature)

Every page is rendered atop two layered textures:

- **Paper wash:** A radial gradient at ~6% almagre, top-center, falling off to transparent over 60% of the viewport. Reads as ink bleeding through from the page above.
- **Paper grain:** A 160×160px SVG feTurbulence noise tile, fixed-position, full-viewport, at 0.35 opacity in dark mode (screen blend) and 0.5 opacity in light mode (multiply blend). Sits *above* content visually but `pointer-events: none` so it never interferes. Content is z-indexed above the grain in the actual stacking order.

Together they're the most identifying mark of the system after the type. They are non-negotiable; removing them strips the notebook metaphor down to a generic dark/light app.

### Selection Highlight

`::selection` flips to `accent` background with `accent-ink` foreground. The almagre selection mark is part of the brand — never override per-component.

### Motion

Quiet only. Two utilities:

- **`.fade-rise`** (0.65s `cubic-bezier(0.2, 0.7, 0.2, 1)`): A 12px rise + opacity, used on entrance for the primary content of a step. Single use per screen entry; never stagger across an entire page.
- **`.fade-in`** (0.45s, same curve): Pure opacity for secondary content.

Both are wrapped in `@media (prefers-reduced-motion: no-preference)`; the default state is the end state, so reduced-motion users see the final layout instantly with no broken reveal.

## 6. Do's and Don'ts

### Do

- **Do** set every Spanish sentence in Newsreader. The serif is the language's voice in this product.
- **Do** treat almagre as the One Voice — primary action, active state, selection, focus ring, top-of-page wash. Nothing else.
- **Do** use the four-step tonal ramp (`surface-sunk` → `bg` → `surface` → `surface-2`) to convey depth. Inputs sink, cards rest, nested or selected surfaces rise one step.
- **Do** keep every border at 1px `rule` (or `rule` color-mixed with almagre for emphasis). Heavier borders break the hairline system.
- **Do** preserve the paper grain and the top-of-page almagre wash on every page. They're the most identifying mark after the type pairing.
- **Do** verify body text and `ink-soft` secondary text clear 4.5:1 on both ink and paper. The warm-tinted ramp makes washed-out gray easy to slip into.
- **Do** reserve mono-cap (Spline Sans Mono, 0.13em tracking, uppercase, ink-mute) for metadata only — frame names, timestamps, jump-nav category headers.
- **Do** cap prose at 65–75ch.
- **Do** pair every animation with a `prefers-reduced-motion: reduce` alternative; default state is the end state.

### Don't

- **Don't** add drop shadows on content. The system is flat by design; depth comes from tonal layering and hairline rules, never from elevation. The only allowed shadows are the input inset and the almagre focus glow.
- **Don't** introduce a second accent color. Almagre is the only saturated voice; if a UI needs more emphasis, use type weight or whitespace, not a new hue.
- **Don't** use zone hues (lugares-green, guías-blue, lab-magenta) as decorative color inside a zone page. They're territorial markers, not paint.
- **Don't** use La Línea tense colors (past=amber, present=green, future=blue) anywhere outside La Línea. They carry grammatical meaning; reusing them breaks the system's grammar.
- **Don't** set body text or button labels in Spline Sans Mono. Mono is metadata; using it as content breaks the library-card metaphor.
- **Don't** set English chrome in Newsreader. Hanken handles all interface text; Newsreader carries Spanish and display moments.
- **Don't** mimic Duolingo or other gamified language apps — no mascots, no XP bars, no streak pressure, no celebration confetti, no chirpy push-to-engage copy. Streaks may exist as quiet stats; they are never motivators.
- **Don't** ship generic SaaS marketing tropes — no gradient hero, no three-icon value-prop row, no feature-card grid, no "Trusted by" logo wall, no glassmorphism cards.
- **Don't** clone Notion / Linear dashboard density — no charts-as-decoration, no command-K-for-its-own-sake, no metric-first stat blocks.
- **Don't** reach for loud, neon, or brutalist statements. The almagre earns its presence through restraint.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, list items, or callouts. Use a full hairline border tinted with almagre instead.
- **Don't** use `background-clip: text` with a gradient. Decorative gradient text is forbidden; weight and size carry emphasis. The two existing button gradients (`--zones`, `--spectrum`) are the only gradient surfaces in the system, and each has exactly one use site.
- **Don't** stack two display-sized warm sentences on one screen. One per screen, earning its place.
- **Don't** add a tiny uppercase tracked eyebrow ("ABOUT", "PROCESS", "PRICING") above every section. The mono-cap label exists for metadata, not as scaffolding above headings.
- **Don't** number sections (01 · About / 02 · Process) unless the section IS a real ordered sequence.
- **Don't** remove the paper grain or top-of-page wash to "clean up" a page. Without them, the notebook metaphor collapses into a generic warm-dark app.
