# Product

## Register

product

## Users

A solo user — the project owner — practicing Spanish as an intermediate adult learner. Context: short, quiet sessions (often before bed or during a coffee), on phone or laptop, alongside other reading/writing habits. The job to be done is *think in Spanish a little bit every day* — see a real prompt, say something true aloud, compare with a model, and keep a growing notebook of those sentences over time. Not a course, not a streak game, not a tutor.

**The rhythm is weekly, the ritual is daily.** The energy to *do* the practice is reliably there; the energy to *start* it, cold, seven mornings a week, is not. So the deciding and the warming-up happen once, in one unhurried weekend hour (La semana): read the week ahead, listen through it, say one sentence out loud. The weekdays that follow are a *pickup*, not a start — the week is already lit, and its seven days are a queue pulled at whatever pace the week allows.

## Product Purpose

Pues is a personal Spanish-practice notebook — a PWA that walks the owner through a short speak-first daily flow (say it aloud → reveal → reflect → save) and accumulates those sentences into a quiet journal. Recording is optional; the gate is speaking (or affirming you said it), not the microphone. Supporting surfaces (situations library, guías, lab, La Línea, La Lectura) exist to feed and enrich that ritual, not to be products of their own.

One surface sits above the day: **La semana**, the weekend momentum session. It is orientation and warm-up only — never homework, never a second chore that itself needs starting. Preparing a week is always an invitation and never a gate: every daily surface works identically whether or not the week was prepared.

Within it, one pass is diagnostic rather than orienting. **Sin mirar** runs the week's stems backwards — English gloss first, say the Spanish out loud, then reveal and judge whether it *arrived* or you assembled it. This exists because recognition and production are different skills, and only the second one fails in conversation: knowing every stem on sight says nothing about whether it comes when you need it. Its output is a list of stems, never a score. Misses join the same practice list the "Quiero practicarla" reflection writes to, and resurface there until they arrive.

Success looks like: the owner prepares most weeks, opens the app most days, says one sentence in Spanish without friction (recording optional), can browse what they've said before, and feels like they're sharpening — not grinding. One sentence is enough; more is welcome. The interface disappears in favor of the speaking.

## Information Architecture

The app is organized in three zones:

| Zone | Job | Routes |
|------|-----|--------|
| **Ritual** | Say one sentence today. Nothing is calendar-due — *tu día* advances when you finish five frases, not at midnight. | Hoy (`/`), Flow (`/flow/*`), La lectura (`/read`), Formar la frase, Cuaderno (`/cuaderno`, `/thoughts`) |
| **La semana** | Light the week once in an unhurried hour; pull days from the queue at your pace. | La semana (`/semana`), Camino (`/camino`), Progreso (`/progress`) |
| **Extras** | Optional companions that feed the ritual — never a second course. | Más hub (`/mas`), Juegos, Lugares, El oído, Guías · Referencia |

Mobile navigation uses three tabs: **Hoy**, **La semana**, **Más**. Desktop left rail groups the same zones with section labels (Ritual / La semana / Extras).

There is no "due today." Week days are `done`, `now`, or `open` — never locked or behind. Guías are reference lookup, not sequenced lessons.

## Brand Personality

Quiet. Editorial. Considered.

Voice is warm-intellectual — closer to a Robin Sloan newsletter than to a language app. Sentences are direct, occasionally playful, never chirpy. Type does the work: serif display (Newsreader), humanist sans body (Hanken), mono for codey moments. Color is one warm almagre red against ink-and-paper neutrals — committed, not decorative. The product should feel like a thoughtful object the owner returns to, not a tool that demands engagement.

## Anti-references

Explicitly NOT:

- **Duolingo / gamified language apps** — no mascots, no XP bars, no streak pressure, no celebration confetti, no "you're on fire!" copy. Streaks may exist as quiet stats, never as motivators.
- **Generic SaaS marketing** — no gradient heroes, no feature-card grids, no glassmorphism, no "Trusted by" logo wall, no three-icon value-prop row.
- **Productivity dashboards** — no Notion/Linear clone density, no charts-as-decoration, no command-K-for-its-own-sake. Stats stay minimal.
- **Loud, neon, or brutalist** — no aggressive visual statements. The almagre accent earns its presence through restraint, not volume.

## Design Principles

1. **Hierarchy from type and whitespace, never from elevation.** No drop shadows on content. Hairline rules and generous space do the structural work. Cards are the lazy answer; reach for them last.
2. **One warm accent, used with discipline.** Almagre is the brand's voice. Spend it on what matters (the current action, the saved sentence, the zone indicator) and let everything else recede into ink and paper.
3. **The writing is the interface.** Chrome should disappear when the owner is reading, listening, or writing. Navigation, controls, and meta-text get smaller and quieter as the act of thinking in Spanish gets louder.
4. **Quiet over clever.** When in doubt, fewer words, smaller numbers, less motion. A working personal tool that the owner enjoys touching every day beats a clever demo.
5. **Honor the ritual, not the engagement metric.** Features exist to make tomorrow's sentence easier to write — not to bring the user back. No nudges, no notifications-by-default, no "you missed a day" guilt.
6. **Lower the activation energy, never raise it.** The expensive thing is starting, not doing. Prefer the design that removes a decision from the weekday over the one that adds a capability. An unprepared week, a skipped day, and a half-finished week are all ordinary states the interface should render without comment — descriptive language (`done` / `now` / `open`), never `behind`, `missed`, or `locked`. Weeks prepared is the headline number precisely because it measures the habit under construction; `racha` survives as a quiet stat on Progreso and never as a motivator.

## Accessibility & Inclusion

Target: **WCAG 2.2 AA** on text contrast and interaction.

- Body text ≥ 4.5:1 against its background; large text ≥ 3:1. Verify on both dark (default) and light themes; the warm-tinted neutrals make this easy to slip on muted text.
- All animation, page transitions, and reveals must have a `prefers-reduced-motion: reduce` alternative — typically an instant state change or a crossfade.
- Keyboard reachable for the full daily flow (speak → reveal → save, including the optional record control). No mouse-only affordances.
- Audio (ElevenLabs TTS) is supplementary; nothing essential should be audio-only. Spanish text is always visible alongside playback.
- Touch targets ≥ 44px on phone surfaces (the primary device for the daily ritual).
