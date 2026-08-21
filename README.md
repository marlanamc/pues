# Pues

A quiet notebook for thinking in Spanish.

Pues is a personal Spanish-practice PWA built around sentence frames and real situations. Each session walks through a five-step flow: choose a frame, choose a situation, write your own sentence, reflect on whether you'd actually say it, and save it to a journal that grows over time.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 4 (dark-default editorial palette)
- ElevenLabs TTS for Spanish audio
- localStorage persistence (data model designed for a future Supabase swap)
- Supabase scaffold: schema, auth callback, and client libs — see `supabase/README.md`
- PWA-ready (manifest + icons, installable on iPhone)

## Running locally

```bash
npm install
cp .env.example .env       # fill in ElevenLabs keys
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `ELEVENLABS_API_KEY` | ElevenLabs API key. Used server-side only in `app/api/tts/route.ts`. |
| `ELEVENLABS_VOICE_ID` | Voice ID for Spanish playback. Pick a Latin American Spanish voice from the ElevenLabs voice library. |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (optional until cloud sync is enabled). |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key (safe for the browser with RLS). |

If ElevenLabs keys are missing, the TTS endpoint returns 500 but the rest of the app works fine. Without Supabase keys, data stays in the browser as today.

## Project layout

```text
app/
├── page.tsx                  Today screen — a pickup, not a start
├── semana/                   La semana — the weekly momentum session
├── flow/                     Guided 5-step sentence flow
├── activities/               Hub
│   ├── thoughts/             Sentence journal
│   └── cognates/             Patterns, true cognates, false friends
├── palabras/                 Las palabras — the 625 plus the glue, swept then drilled
├── situations/               Phrasebank library (10 categories, 50+ situations)
├── progress/                 Quiet stats — weeks, sentences, days, frames
└── api/tts/                  ElevenLabs proxy (server-side)

components/                   Shared UI (BottomTabNav, PlayButton, etc.)
content/                      Typed content: frames, situations, cognates, vocab
hooks/                        React hooks over lib/store
lib/planDay.ts                Curriculum day → season / week arithmetic
lib/store.ts                  Single seam between app and persistence
```

## The weekly rhythm

The curriculum is week-shaped (13 weeks × 7 days per season), and so is the app.
One unhurried session on **La semana** copies the stems, listens through the week,
and retrieves without looking — then marks the week *primed*. The week's seven
days become a queue pulled at any pace: finish them out of order, do two in a
day, skip a day entirely. There is no "behind," and nothing about the daily flow
depends on having prepared the week.

State lives in `SessionStats` (`primedWeeks`, `daysDone`) so it rides the
existing Supabase sync — the hour happens on the laptop and Monday happens on
the phone. Both fields merge as unions across devices; see `mergeStats` in
`lib/sync.ts`.

## Scripts

- `npm run dev` — Turbopack dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run typecheck` — TypeScript check, no emit

## Deployment

Designed for Vercel. Push to GitHub, import the repo at vercel.com, and add the two ElevenLabs env vars in Project Settings → Environment Variables. The build command and output settings are auto-detected from `next.config.ts`.
