---
name: Pues — El Cuaderno
description: A quiet notebook for thinking in Spanish. Ink, paper, and grain; one accent slot, seven palettes; dark by default.
colors:
  # ---- Semantic slots. Every palette fills these same eight. Values shown are
  # the Almagre default; six other palettes swap them wholesale. Never author
  # against a hex below — author against the slot.
  bg: "#1b1712"
  surface: "#251f18"
  surface-2: "#2c251c"
  surface-sunk: "#1f1a14"
  ink: "#efe5d2"
  ink-soft: "#b4a98f"
  ink-mute: "#988d73"
  rule: "#3a3127"
  accent: "#dd6a43"
  accent-soft: "#c25a37"
  accent-ink: "#1b1712"
  highlight: "#dd6a43"
  # ---- The seven palette accents. Identity lives in the SLOT, not in any one
  # of these. Listed so the set is auditable, not so components can pick one.
  accent-almagre: "#dd6a43"
  accent-pizarra: "#4cb6a4"
  accent-ciruela: "#d77a9a"
  accent-bosque: "#9bb24a"
  accent-medianoche: "#8a9cf0"
  accent-papel: "#bb4a2a"
  accent-niebla: "#2f8f7f"
  # ---- Zone hues. Constant per MODE, not per palette, so every theme reads as
  # the same product. Canonical in OKLCH (that is how the code declares them).
  zone-lugares: "oklch(0.7 0.1 152)"
  zone-guias: "oklch(0.7 0.09 248)"
  zone-lab: "oklch(0.72 0.11 332)"
  zone-lugares-light: "oklch(0.5 0.085 152)"
  zone-guias-light: "oklch(0.5 0.082 248)"
  zone-lab-light: "oklch(0.52 0.105 332)"
  # ---- La Línea tense semantics. Color IS when.
  past: "oklch(0.76 0.115 72)"
  present: "oklch(0.74 0.095 158)"
  future: "oklch(0.73 0.085 245)"
  correct: "oklch(0.68 0.14 145)"
typography:
  display:
    fontFamily: "Newsreader, Georgia, ui-serif, serif"
    fontSize: "2.875rem"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "'liga', 'kern'"
  display-brand:
    fontFamily: "Newsreader, Georgia, ui-serif, serif"
    fontSize: "clamp(2.75rem, 10vw, 3.75rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.02em"
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
  title-lg:
    fontFamily: "Newsreader, Georgia, ui-serif, serif"
    fontSize: "1.5625rem"
    fontWeight: 300
    lineHeight: 1.22
    letterSpacing: "-0.01em"
  answer:
    fontFamily: "Newsreader, Georgia, ui-serif, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.28
  display-italic:
    fontFamily: "Newsreader, Georgia, ui-serif, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  gloss:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  gloss-italic:
    fontFamily: "Newsreader, Georgia, ui-serif, serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Spline Sans Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.11em"
rounded:
  sm: "4px"
  md: "11px"
  lg: "14px"
  xl: "16px"
  full: "999px"
spacing:
  hairline: "1px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "20px"
  xl: "28px"
  section: "36px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.lg}"
    padding: "16px 18px"
  button-primary-active:
    backgroundColor: "{colors.accent-soft}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  button-secondary-active:
    backgroundColor: "{colors.surface-sunk}"
  judge-zone:
    textColor: "{colors.accent}"
    rounded: "10px"
    padding: "8px 10px"
    height: "44px"
  judge-mute:
    textColor: "{colors.ink-soft}"
    rounded: "10px"
    padding: "8px 10px"
    height: "44px"
  judge-ghost:
    textColor: "{colors.ink-mute}"
    rounded: "10px"
    padding: "8px 10px"
    height: "44px"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "9px"
    padding: "13px 15px"
    height: "44px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "16px"
  card-section:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "20px 16px"
  recall-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "28px 20px"
  pill:
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "5px 12px"
  play-lead:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.full}"
    size: "92px"
---

# Design System: Pues — El Cuaderno

## 1. Overview

**Creative North Star: "The Quiet Notebook"**

Pues is a personal Spanish-practice notebook rendered as a PWA. The interface treats itself as a private ledger: warm dark paper at night, bone-warm or cool-fog paper by day, ink that breathes, and one saturated accent used sparingly enough that it always means something. Newsreader carries the Spanish sentences with the dignity they deserve; Hanken Grotesk handles the chrome quietly; Spline Sans Mono whispers metadata in tracked-out small caps, the library-card signal at the edge of every screen. A feTurbulence noise layer washes over everything — a whisper of paper grain — and a faint accent radial bleeds down from the top of the page, like ink soaking through from the sheet above. Hierarchy comes from type, whitespace, and hairline rules, never from elevation. There are no drop shadows on content. Cards exist, but they earn their place; they are sunk into the surface with borders, not lifted off it.

The system's most important structural fact is that **color is a variable and everything else is not.** Seven named palettes — `Almagre`, `Pizarra`, `Ciruela`, `Bosque`, `Medianoche` (dark) and `Papel`, `Niebla` (light) — each fill the same eight semantic slots, and the user picks one in Settings. Almagre, the warm iron-red the product was born in, is the default fill of the accent slot and nothing more privileged than that. Identity therefore lives in the parts that never move: the Newsreader/Hanken/mono triad, the grain, the hairline, the tonal ramp, the generosity of the whitespace. A screen that only reads well in one palette is a broken screen. Zone hues and La Línea's tense colors stay constant *per mode* (one dark set, one deeper light set) precisely so that switching skins never changes what a color means.

This system explicitly rejects everything that makes a language app feel like a slot machine. No XP bars, no badges, no streak-as-pressure, no celebration confetti, no gradient-hero / feature-card-grid SaaS template, no glassmorphism, no dashboard density. The warmth is in the paper and the type, not in chirpy copy. The accent is committed — always doing real work, never decoration. And when tinted neutrals push secondary text toward the muted edge of the ramp, the design fights back to keep contrast honest: quietness is not the same as washed-out.

**Key Characteristics:**

- Dark by default; light palettes are peers, not afterthoughts.
- Eight semantic color slots, seven interchangeable palettes, zero hue-specific components.
- One saturated accent per palette, on ≤10% of any screen.
- Type-led hierarchy: Newsreader serif display, Hanken sans body, Spline mono labels.
- Hairline rules (1px) and generous whitespace do the structural work.
- Flat surfaces; no drop shadows on content. Depth is tonal layering and ink mass.
- Paper grain (feTurbulence) plus a soft accent top-of-page wash on every screen; stronger washes stage the two activation surfaces (Hoy, Speak).
- Four zone hues mark navigation territory per hub; they are markers, not paint.
- La Línea tense semantics: color = WHEN (past = amber, present = green, future = blue).
- A three-step root text scale (`data-text-size`) means all typography must be rem-based.

## 2. Colors: One Slot, Seven Palettes

Eight semantic slots carry the entire system. A palette is nothing but a set of eight values; the interface never knows which one is loaded. Around that sit two fixed vocabularies — zone hues for navigation territory and tense hues for grammatical meaning — held constant per mode so their meaning survives every skin change.

### Primary — The Accent Slot

- **`--accent`**: The brand voice. Primary action fill, active navigation state, current-page indicator, accent hairlines, focus rings, `::selection`, the situation dot, the play button, and the radial wash bleeding from the top of every screen. **Almagre** (`#dd6a43`) is its default fill — an earthy iron-red named after the Spanish pigment ground from red earth, and the reason the product looks the way it does. It is a default, not a law.
- **`--accent-soft`**: The pressed state, derived (`color-mix(in oklab, var(--accent) 85%, #000)`) rather than authored. Never used at rest.
- **`--accent-ink`**: The on-accent foreground. Resolves to `--bg` in dark palettes and `--surface` in light ones, so text on an accent fill is always legible without per-palette tuning.
- **`--highlight`**: Aliased to `--accent`. Selection and emphasis marks.

### The Seven Palettes

Dark palettes carry `color-scheme: dark` and grain at 0.35 opacity in `screen` blend. Light palettes carry `color-scheme: light`, grain at 0.5 in `multiply`, plus a `.light` class so legacy `.light`-scoped rules keep resolving.

| Palette | Mode | Character | `bg` | `accent` |
|---|---|---|---|---|
| **Almagre** *(default)* | dark | Warm iron-red on dark clay. The original. | `#1b1712` | `#dd6a43` |
| **Pizarra** | dark | Teal on cold slate. The most clinical of the set. | `#15191b` | `#4cb6a4` |
| **Ciruela** | dark | Dusty rose on plum. The softest. | `#1a1419` | `#d77a9a` |
| **Bosque** | dark | Moss on deep forest. The most vegetal. | `#13180f` | `#9bb24a` |
| **Medianoche** | dark | Periwinkle on indigo. The coolest and quietest. | `#14151f` | `#8a9cf0` |
| **Papel** | light | Warm bone paper, deep terracotta ink. | `#f1e7d4` | `#bb4a2a` |
| **Niebla** | light | Sea green on cool fog. | `#e8edec` | `#2f8f7f` |

Every palette declares the same eight: `bg`, `surface`, `surface-2`, `ink`, `ink-soft`, `ink-mute`, `rule`, `accent`. Three more are derived for all of them: `accent-soft`, `surface-sunk` (`color-mix(in oklab, var(--bg) 78%, var(--surface))`), and `highlight`.

### Neutral — The Slots

- **`--bg`**: The page itself. Never white and never black; always tinted toward its palette's own hue family.
- **`--surface`**: One step up. The resting plane of cards and pills.
- **`--surface-2`**: A second step up, for nested or selected surfaces and popovers.
- **`--surface-sunk`**: One step *below* `bg`. Input fields and recessed wells. Derived, not authored.
- **`--ink`**: Body text at full strength.
- **`--ink-soft`**: Secondary text, glosses, descriptions. Must clear 4.5:1 against `bg` in all seven.
- **`--ink-mute`**: Tertiary text, mono labels, hints, placeholders. The quietest readable voice — and the slot where contrast most often slips. It carries small text, so it needs the full 4.5:1, measured against the *lightest* plane in a dark palette (`surface-2`) and the *darkest* plane in a light one (`bg`). Checking it against `bg` alone will pass while a label on a card still fails.
- **`--rule`**: Hairline borders. Always 1px, never thicker.

### Tertiary — Zone Hues

One signature color per navigation hub. Each hub overrides `--zone` on its own root so accents inside the page inherit the right hue; the judge buttons and La semana's step numerals read from `--zone` and retint automatically. Dark values listed; light palettes use deeper variants (see frontmatter) for contrast on pale paper.

- **Zone — Práctica** = `var(--accent)`. The brand home has no separate hue.
- **Zone — Lugares**: `oklch(0.7 0.1 152)` — sage green. Places, games, Formar la frase.
- **Zone — Guías**: `oklch(0.7 0.09 248)` — overcast blue. Cuaderno, references, guías.
- **Zone — Lab**: `oklch(0.72 0.11 332)` — dusty magenta. El oído, experiments.

### Tertiary — La Línea Tense Semantics

Color **IS** when. Confined to La Línea (the timeline game) and never decorative elsewhere.

- **Past**: `oklch(0.76 0.115 72)` — amber.
- **Present**: `oklch(0.74 0.095 158)` — green.
- **Future**: `oklch(0.73 0.085 245)` — blue.
- **Correct**: `oklch(0.68 0.14 145)` — the affirmative green in games. Not a tense; a verdict.

### Named Rules

**The Accent-Is-A-Slot Rule.** The brand voice is a *position*, not a color. No component may name a hue. Almagre (`#dd6a43`) is the default fill of that slot, nothing more. Every new surface ships only after it is read in all seven palettes. If a design reads well in Almagre and muddy in Bosque, the design is wrong, not the palette.

**The One Voice Rule.** The accent occupies ≤10% of any screen. It marks the current action, the active state, and the saved sentence. Everything else recedes into ink and paper. Its rarity is what makes it legible.

**The Derive-Don't-Declare Rule.** If a value can be `color-mix`ed from a slot, mix it. `accent-soft`, `surface-sunk`, and every tinted border and wash in the system are derived, which is exactly why seven palettes cost eight lines each instead of forty. A hardcoded hex anywhere outside the palette blocks in `globals.css` breaks that property permanently.

**The Constant-Meaning Rule.** Zone hues and tense hues are fixed per mode, not per palette. Switching skins may change the accent; it must never change what green means.

## 3. Typography

**Display Font:** Newsreader (Google Fonts; weights 300 / 400 / 500, italic; optical sizing on).
**Body Font:** Hanken Grotesk (Google Fonts; weights 400 / 500 / 600).
**Label / Mono Font:** Spline Sans Mono (Google Fonts; weights 400 / 500).

**Character:** A literary serif paired with a humanist sans and a mono used strictly as metadata. Newsreader is the soul of the look — its optical sizing handles the shift from hero greeting to inline Spanish prompt without losing weight. Hanken stays quiet; it never competes with the serif. Spline Sans Mono is the library-card signal: tracked-out, tiny, uppercase, `ink-mute`. Never a body font.

**The root scale moves.** Base is 16px, rising to 17px at ≥1024px. A `data-text-size` attribute on `<html>` offers three steps — `default`, `comfortable` (118.75%, 125% desktop), `large` (131.25%, 150% desktop) — so *every* size in this system must be authored in `rem`. Px-based type silently opts out of an accessibility setting the owner actually uses. Mono labels and the italic gloss line carry explicit per-step overrides because tracking and italic serif need retuning as they grow, not merely scaling.

### Hierarchy

- **Display Brand** (Newsreader 300, `clamp(2.75rem, 10vw, 3.75rem)`, lh 1, ls -0.02em, balanced): The Hoy greeting. The system's one fluid size, and its ceiling (60px) is deliberate.
- **Display 2xl** (300, 2.875rem / 46px, lh 1, ls -0.02em): Hero greeting elsewhere.
- **Headline** (300, 1.875rem / 30px, lh 1.1, ls -0.015em): Page titles on hubs and second-level pages.
- **Title / Prompt** (300, 1.75rem → 2rem at ≥1024px, lh 1.22 → 1.24, ls -0.01em, `text-wrap: balance`): The Spanish sentence prompt — the warmest, most-loved type on any screen.
- **Title lg** (300, 1.5625rem / 25px, lh 1.22, ls -0.01em): One warm display sentence per screen, used sparingly.
- **Recall Stem** (`clamp(1.75rem, 4.5vw, 2.25rem)`): The stem under test in Sin mirar, centered on its card. Sized to be the only thing on the screen.
- **Answer** (400, 1.5rem / 24px, lh 1.28): Revealed Spanish, and the saved sentence in the Cuaderno.
- **Display Italic** (400, italic, `ink-soft`, ls -0.005em): Lead-ins, the wordmark, the reflection question. Italic earns its presence; never for emphasis inside body prose.
- **Body** (Hanken 400, 0.9375rem / 15px, lh 1.55): Interface text. Cap prose at 65–75ch.
- **Gloss** (Hanken 400, 0.875rem / 14px, `ink-soft`, lh 1.55): Sub-text under prompts — English translations, gentle hints.
- **Gloss Italic** (Newsreader 400 italic, 0.875rem, `ink-mute`, lh 1.4): The inline English gloss beside Spanish in La semana. Serif-italic because it sits inside serif Spanish; a sans gloss there reads as chrome intruding on content.
- **Label / mono-cap** (Spline Sans Mono 400, 0.72rem, ls 0.11em, uppercase, `ink-mute`): The library-card signal. Metadata only — day markers, timestamps, rail section labels, jump-nav category headers, step numerals. Never body, never button labels, never continuous reading.

### Named Rules

**The Newsreader-for-Spanish Rule.** Every Spanish sentence in the app — prompt, frame stem, saved sentence, gloss source — is set in Newsreader. The serif gives the language the dignity the product is built around. Hanken handles English chrome.

**The Mono-as-Metadata Rule.** Spline Sans Mono is reserved for small, uppercase, tracked-out, `ink-mute` metadata. Using it for buttons, body, or display text breaks the metaphor — those tracked caps tell the reader "this is the catalog edge of the page, not the content."

**The One-Display-Sentence Rule.** A screen earns at most one display-sized warm sentence. Stacking two flattens the hierarchy and turns the page into a brochure.

**The Rem-Only Rule.** Type sizes, and any container width meant to hold type, are authored in `rem`. A px value is a silent opt-out of `data-text-size`. `.page-column` (40rem, 44rem at desktop, 48rem at the large step) is the reference implementation.

**The 65–75ch Body Rule.** Prose containers cap at 65–75ch. The notebook is meant to be read, not scrolled past.

## 4. Elevation

The system is **flat**. There are no drop shadows on content surfaces. Depth comes from four quieter mechanisms:

1. **Tonal layering.** A four-step ramp (`surface-sunk` → `bg` → `surface` → `surface-2`) carries hierarchy. Inputs sit *below* the page in `surface-sunk`; cards rest *on* the page in `surface`; nested, selected, and popover surfaces rise to `surface-2`. Every palette mirrors this exactly.
2. **Hairline rules.** A 1px `rule` border defines every card, pill, and section edge. Variants mix `accent` into the rule for emphasis (`tip-card` at 24%, `hoy-mission` at 22%).
3. **Inset shadows on inputs only.** Form fields carry a faint inset (`inset 0 1px 2px` at ~8% ink; 6% in light palettes) so they read as recessed rather than lifted.
4. **Concentric rings.** The mic and lead play buttons wear a soft ring of accent at zero offset. A ring is not a lift — it spreads outward in-plane, like a halo on the paper, and it always signals live state.

### Shadow Vocabulary

- **Input inset** (`inset 0 1px 2px color-mix(in oklab, var(--ink) 8%, transparent)`): The recessed feel of form fields. 6% in light palettes for a softer well.
- **Focus glow** (`0 0 0 3px color-mix(in oklab, var(--accent) 18%, transparent)`): The focus ring on inputs, paired with `border-color: var(--accent)`. Never used alone.
- **Focus outline** (`outline: 2px solid color-mix(in oklab, var(--accent) 55%, transparent)`, offset 2px): The keyboard-focus mark on borderless controls like the judge buttons.
- **Idle ring** (`0 0 0 10px color-mix(in oklab, var(--accent) 14%, transparent)`): The lead play button at rest, and the resting frame of the mic breathe.
- **Live ring** (`0 0 0 12px` → `0 0 0 20px` at 18% → 28% accent): The recording pulse. Motion, not decoration.

### Named Rules

**The No-Lift Rule.** No `box-shadow` with a positive Y-offset on any content surface. Cards are sunk into the page with borders, not lifted off it. The only shadows in the system are the input inset, the focus glow, and the zero-offset state rings.

**The Tonal-Depth Rule.** To make a surface feel "above" another, change its step on the four-step ramp — never reach for a shadow. To make it feel "below," use `surface-sunk`, optionally with the input inset.

## 5. Components

### Buttons

- **Shape:** 14px (`--radius-lg`) for the primary; 11px (`--radius-md`) for secondary; 10px for judge buttons; 999px for pills and round players.
- **Primary (`btn-primary`):** Full-width accent fill, `accent-ink` text, space-between with the label left and a `›` arrow right. Padding 16×18px. The label is Newsreader at 1.1875rem / 19px — a serif-on-saturated-fill signature unique to this product. Pressed: `accent-soft`. 120ms.
- **Primary — Zones (`btn-primary--zones`):** The Empezar action on home. A four-stop sweep through all four zone hues (práctica → lugares → guías → lab) — the one place the zones appear together. Pressed: `brightness(0.9)`. Not repurposable as decoration.
- **Primary — Spectrum (`btn-primary--spectrum`):** Comprobar in Sentence Builder. A five-stop sweep (accent → amber → green → blue → magenta). Exactly one use site. Pressed: `brightness(0.92)`.
- **Primary — Center (`btn-primary--center`):** Centered label plus arrow, for half-width grid cells in the Sentence Builder action row. Min-height 52px.
- **Secondary (`pill-lower`):** `surface` fill, 1px `rule`, 11px radius, 14×16px padding, body type. Pressed: `surface-sunk` with a 60%-accent border. Non-primary actions in the daily flow.

### Self-Check Judges (Signature)

The three-way verdict control shared by Sin mirar and Solo escuchar — the product's most consequential interaction, since the whole diagnostic rests on an honest answer. Deliberately *unlike* a button: transparent ground, 1px border, 44px min-height, 10px radius, Newsreader label at 0.875rem, laid out on a `repeat(3, 1fr)` grid capped at 22rem (a `--duo` variant is two columns at 16rem). Three variants, in weight order:

- **`--zone`**: The affirmative ("llegó" — it arrived). Colored `var(--zone)`, border at 45% zone, ground at 7% zone. Retints per hub automatically.
- **`--mute`**: The middle ("la armé" — I assembled it). `ink-soft`, border mixing 28% `ink-soft` into `rule`.
- **`--ghost`**: The negative ("no llegó"). `ink-mute`, and on hover it becomes the *accent* — the one place in the system where admitting a miss lights up, because the miss is the useful signal.

Hover deepens border and ground by roughly half a step. Focus is a 2px 55%-accent outline at 2px offset; the bare `:focus` outline is suppressed so only keyboard focus shows a ring.

**Never** give a judge a filled background, and never make the affirmative louder than the other two. A judge that visually rewards "llegó" corrupts its own data.

### La semana — Numbered Doors (Signature)

The weekend hour is a stack of `<details>` elements separated by hairlines (`border-top` on each, `border-bottom` on the last), no card and no container. Each summary is a 64px row: a 2rem circular numeral (mono, 0.8125rem, 1px border at 45% `--zone`, `--zone` text), a two-line title block, `ink-mute` meta, and a mono `↓` / `↑` disclosure glyph. Closed summaries are `ink-soft`; open ones go full `ink`. Body padding is 6px top, 32px bottom. A `--plain` variant drops to a 44px row for lighter sub-steps.

Both `::marker` and `::-webkit-details-marker` are suppressed — miss either and the native triangle sits in front of the numeral in Safari.

This is the system's one sanctioned use of numbered sections: the hour genuinely is an ordered sequence, and the numbers tell the owner how much is left. Numbering anything else is scaffolding.

### Recall Card

The stage for a single stem under test (Sin mirar). 16px radius, `surface`, 1px `rule`, min-height 12rem, contents centered on both axes, 28×20px padding. The hint sits absolutely positioned at the top-left as mono-cap; the English gloss is Newsreader 1.25rem in `ink-mute`; the Spanish stem is the clamped Recall Stem size. Everything about it says *one thing at a time*.

### Pills & Chips

- **Situation Pill (`situation-pill`):** Inline-flex, 5px accent dot, 1px `rule`, 999px, 5×12px. Identifies the situation a prompt belongs to. The dot is the smallest appearance of the accent anywhere — quiet but unmistakable.
- **Day Pill (`day-pill`):** Tracked mono in accent on transparent ground with a 45%-accent hairline, 999px. Session metadata (date, day-of-week). Never a button.

### Cards & Containers

- **Corner Style:** 11px compact (`tip-card`, `pill-lower`, `questionnaire-field-card`); 14px section (`questionnaire-section`, `confusions-jump`, `hoy-mission`); 16px for the recall card.
- **Background:** `surface` by default; accent-tinted washes for emphasis (`tip-card` at 10%, `hoy-mission` at 6%); `surface-sunk` for wells.
- **Shadow Strategy:** None. Border and tonal step define the card.
- **Border:** Always 1px. Emphasis mixes accent into `rule` (`color-mix(in oklab, var(--accent) 24%, var(--rule))`); input-bearing cards tint toward `ink-mute`.
- **Internal Padding:** 14–16px compact; 20×16px section; 22×20px for `hoy-mission`.

### Tip Card (`tip-card`)

A low-key inline card delivering a why-note beside a prompt. Border at 24% accent mixed into rule, ground at 10% accent mixed into surface, italic Newsreader for emphasized terms inside the body, gloss-sized type, accent label over `ink-soft` body. Light palettes dial the wash to 8%.

### Inputs / Fields

- **Style:** `bg` fill (the recessed tone), 1.5px border mixing `rule` with `ink-mute`, 9px radius, 13×15px padding, body type, ≥44px min-height. Carries the input inset.
- **Placeholder:** `ink-mute` at 0.85 opacity — restrained, and never a stand-in for the real value.
- **Hover:** Border tints 35% toward accent.
- **Focus:** Border becomes accent, background lifts to `surface`, and the 18%-accent glow appears. No outline; the ring carries the signal.
- **Light palettes:** Background is `surface`, border slightly cooler, inset softened to 6%.

### Hairline Accents

First-class, not a utility afterthought. `.hairline` (full-width, 1px, `rule`) divides sections; `.hairline-accent` (32px, accent) emphasizes under a label; `.hairline-accent-center` (28px, auto-margin) punctuates between blocks. `.hairline-copper*` are compatibility aliases for the same thing.

### Navigation

Three zones, two shells, one active-state language: the current item takes its own zone hue, and nothing else on the screen is colored.

- **Bottom Tabs (`BottomTabNav`, <1024px):** Fixed, `border-t` hairline, `bg/90` with `backdrop-blur-md` — the one sanctioned blur in the system, there to keep scrolling text legible under the bar, not for glass. Three tabs (Hoy · La semana · Más) capped at 520px, icon over mono-cap label, active item colored by its zone. Bottom padding respects `env(safe-area-inset-bottom)`. Hidden entirely on `/flow/*`.
- **Left Rail (`LeftRailNav`, ≥1024px):** Sticky full-height column, `border-r` hairline, collapsible between 15rem and 4.5rem with a 200ms width transition. Expanded shows the italic Newsreader wordmark, three mono-cap section labels (Ritual / La semana / Extras) each with an italic English gloss, hairline dividers between groups, and 2xl-radius rows; collapsed shows a circular "P" mark and 40px circular icon buttons with `title` tooltips. The active row is its zone hue at weight 500 over a 10%-zone ground. Hidden on `/flow/*`.
- **Jump Navs (`confusions-jump`, `accent-marks-jump`, …):** A `<details>` collapsed by default with a mono chevron, accent on hover/open, and inside, mono-cap category headers grouping hairline-separated links. An in-page table of contents for long reference pages.

### Players

- **Lead Play (`play-lead`):** A 92px round accent-filled button wearing a 10px 14%-accent idle ring. It opens the unscripted turn as the only element on the screen, because listening is the whole first move. Presses scale to 0.97 (suppressed under reduced motion).
- **Mic (`MicButton`):** Round, accent-ringed. Idle breathes (10px → 16px ring, 2.4s) unless the recording is optional; recording pulses harder and scales 1.03 (1.1s). Both stop dead under reduced motion. The gate is speaking, not recording — an optional mic must never breathe, because breathing reads as a demand.

### Paper Wash & Grain (Signature)

Every page sits atop two layered textures, and two surfaces add a third:

- **Paper wash (`--paper-wash`):** A radial at 6% accent (4% in light palettes), top-center, falling off over 60% of the viewport. Ink bleeding through from the page above. Fixed attachment on `body`.
- **Paper grain:** A 160×160px feTurbulence SVG tile, `position: fixed`, full-viewport, `pointer-events: none`, at 0.35 opacity / `screen` in dark palettes and 0.5 / `multiply` in light ones. Content is z-indexed above it.
- **Activation washes (`--hoy-wash`, `--speak-wash`):** Stronger accent radials (18% plus 8%, and 14%) drawn behind the Hoy and Speak stages with a rounded-bottom mask, at `z-index: -1` inside an isolated stacking context. These two screens are where the day begins; they are allowed to glow slightly more than the rest of the app. No third surface gets one.

Together, grain and wash are the most identifying mark of the system after the type. They are non-negotiable: strip them and the notebook collapses into a generic warm-dark app.

### Selection Highlight

`::selection` flips to `accent` ground with `accent-ink` text. The accent selection mark is part of the brand — never override it per-component.

### Print — The Stem Sheet

Los comienzos exists to be copied onto paper. A `@media print` block scoped with `body:has(.week-stems)` hides everything by `visibility` (not `display`, so the sheet's own ancestors can stay hidden while it shows through), forces black on white, drops the copy button, and lays the sheet at the origin at full width with `break-inside: avoid` per row. Every other page prints normally. If a new page deserves a paper form, give it its own `:has`-scoped block rather than widening this one.

### Motion

Quiet only. 120ms on most state transitions (color, border, background), 160ms where a transform is involved, 200ms on the rail's width.

- **`.fade-rise`** (0.65s `cubic-bezier(0.2, 0.7, 0.2, 1)`): 12px rise plus opacity, for the primary content of a step. Once per screen entry; never staggered across a page.
- **`.fade-in`** (0.45s, same curve): Pure opacity, for secondary content.
- **State loops** (`mic-breathe`, `mic-record-pulse`, `dilo-glow`): Ring and brightness cycles on live controls only. `dilo-glow` tops out at `brightness(1.06)` — a breath, not a pulse.
- **Smooth scroll** is enabled only on the confusions page, and only under `no-preference`.

Every animation is wrapped in `prefers-reduced-motion: no-preference` or explicitly cancelled under `reduce`, and the default state is the *end* state — reduced-motion users get the finished layout instantly, never a blank reveal that never fires.

## 6. Do's and Don'ts

### Do

- **Do** author against the slot (`var(--accent)`, `var(--ink-soft)`, `var(--zone)`), never against a hue. This is the rule the other rules depend on.
- **Do** read every new surface in all seven palettes — `Almagre`, `Pizarra`, `Ciruela`, `Bosque`, `Medianoche`, `Papel`, `Niebla` — before calling it done. Bosque and Medianoche break things Almagre hides.
- **Do** derive with `color-mix(in oklab, …)` instead of adding a token. Eight values per palette is the budget.
- **Do** set every Spanish sentence in Newsreader. The serif is the language's voice in this product.
- **Do** treat the accent as the One Voice — primary action, active state, selection, focus ring, top-of-page wash. Nothing else.
- **Do** use the four-step tonal ramp (`surface-sunk` → `bg` → `surface` → `surface-2`) to convey depth. Inputs sink, cards rest, nested surfaces rise one step.
- **Do** keep every border at 1px `rule`, or `rule` color-mixed with accent for emphasis.
- **Do** size type and type-bearing containers in `rem` so `data-text-size` actually works; give mono labels and italic glosses explicit per-step overrides.
- **Do** preserve the paper grain and the top-of-page wash on every page.
- **Do** verify `ink-soft` and `ink-mute` clear 4.5:1 against the *worst* plane in every palette — `surface-2` in dark, `bg` in light — not just against `bg`. Tinted neutrals make washed-out gray easy to slip into, and `ink-mute` is where it happens.
- **Do** keep `ink` > `ink-soft` > `ink-mute` monotonic in OKLCH lightness with ≥0.06 between steps. Two adjacent grays that pass contrast but read identically are not a hierarchy.
- **Do** reserve mono-cap (Spline Sans Mono, 0.11em tracking, uppercase, `ink-mute`) for metadata only.
- **Do** cap prose at 65–75ch.
- **Do** pair every animation with a `prefers-reduced-motion: reduce` alternative; the default state is the end state.
- **Do** keep touch targets ≥44px on every control the daily ritual passes through.

### Don't

- **Don't** hardcode a hex outside the seven palette blocks in `globals.css`. One stray `#dd6a43` and six palettes are silently broken.
- **Don't** fade a text token with `opacity` to make it quieter. The ink ramp already has three tuned steps; an opacity on top of `ink-mute` puts small text straight back under AA. Pick the right step instead.
- **Don't** write hue-specific language into component names, class names, or comments ("the red button", "almagre border"). The accent has no color.
- **Don't** add drop shadows on content. The system is flat; depth comes from tonal layering and hairline rules. The only shadows are the input inset, the focus glow, and the zero-offset state rings.
- **Don't** introduce a second saturated accent. If a UI needs more emphasis, use type weight or whitespace, not a new hue.
- **Don't** use zone hues (lugares-green, guías-blue, lab-magenta) as decorative color inside a zone page. They are territorial markers, not paint.
- **Don't** use La Línea tense colors (past = amber, present = green, future = blue) anywhere outside La Línea. They carry grammatical meaning; reusing them breaks the system's grammar.
- **Don't** make the affirmative judge louder than the other two, or fill any judge with a background. A control that visually rewards "llegó" corrupts the diagnostic it exists to run.
- **Don't** let an optional mic breathe. Idle animation reads as a demand, and recording is never the gate.
- **Don't** set body text or button labels in Spline Sans Mono. Mono is metadata; using it as content breaks the library-card metaphor.
- **Don't** set English chrome in Newsreader. Hanken handles interface text; Newsreader carries Spanish and display moments.
- **Don't** size type in px. It opts out of the `data-text-size` accessibility setting silently.
- **Don't** mimic Duolingo or other gamified language apps — no mascots, no XP bars, no streak pressure, no celebration confetti, no chirpy push-to-engage copy. Streaks may exist as quiet stats; they are never motivators.
- **Don't** ship generic SaaS marketing tropes — no gradient hero, no three-icon value-prop row, no feature-card grid, no "Trusted by" logo wall, no glassmorphism cards. The tab bar's `backdrop-blur` is legibility under a fixed bar and is the only blur in the system.
- **Don't** clone Notion / Linear dashboard density — no charts-as-decoration, no command-K-for-its-own-sake, no metric-first stat blocks.
- **Don't** reach for loud, neon, or brutalist statements. The accent earns its presence through restraint.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe. Use a full hairline tinted with accent instead.
- **Don't** use `background-clip: text` with a gradient. The two button sweeps (`--zones`, `--spectrum`) are the only gradient surfaces in the system, and each has exactly one use site.
- **Don't** stack two display-sized warm sentences on one screen.
- **Don't** add a tiny uppercase tracked eyebrow ("ABOUT", "PROCESS") above every section. Mono-cap is for metadata, not scaffolding above headings.
- **Don't** number sections unless the section IS a real ordered sequence. La semana's hour qualifies; nothing else so far does.
- **Don't** add a third activation wash. Hoy and Speak glow because the day starts there; a third one makes all three ordinary.
- **Don't** remove the paper grain or top-of-page wash to "clean up" a page. Without them the notebook metaphor collapses.
