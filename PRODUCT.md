# Product

## Register

product

## Users

A solo user — the project owner — practicing Spanish daily as an intermediate adult learner. Context: short, quiet sessions (often before bed or during a coffee), on phone or laptop, alongside other reading/writing habits. The job to be done is *think in Spanish a little bit every day* — see a real prompt, say something true aloud, compare with a model, and keep a growing notebook of those sentences over time. Not a course, not a streak game, not a tutor. A daily ritual.

## Product Purpose

Pues is a personal Spanish-practice notebook — a PWA that walks the owner through a short speak-first daily flow (say it aloud → reveal → reflect → save) and accumulates those sentences into a quiet journal. Recording is optional; the gate is speaking (or affirming you said it), not the microphone. Supporting surfaces (situations library, guías, lab, La Línea, La Lectura) exist to feed and enrich that ritual, not to be products of their own.

Success looks like: the owner opens it most days, says one sentence in Spanish without friction (recording optional), can browse what they've said before, and feels like they're sharpening — not grinding. One sentence is enough; more is welcome. The interface disappears in favor of the speaking.

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
5. **Honor the daily ritual, not the engagement metric.** Features exist to make tomorrow's sentence easier to write — not to bring the user back. No nudges, no notifications-by-default, no "you missed a day" guilt.

## Accessibility & Inclusion

Target: **WCAG 2.2 AA** on text contrast and interaction.

- Body text ≥ 4.5:1 against its background; large text ≥ 3:1. Verify on both dark (default) and light themes; the warm-tinted neutrals make this easy to slip on muted text.
- All animation, page transitions, and reveals must have a `prefers-reduced-motion: reduce` alternative — typically an instant state change or a crossfade.
- Keyboard reachable for the full daily flow (speak → reveal → save, including the optional record control). No mouse-only affordances.
- Audio (ElevenLabs TTS) is supplementary; nothing essential should be audio-only. Spanish text is always visible alongside playback.
- Touch targets ≥ 44px on phone surfaces (the primary device for the daily ritual).
