# Pues

A quiet notebook for thinking in Spanish.

Pues is a personal Spanish-practice PWA built around sentence frames and real situations. Each session walks through a five-step flow: choose a frame, choose a situation, write your own sentence, reflect on whether you'd actually say it, and save it to a journal that grows over time.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 4 (dark-default editorial palette)
- ElevenLabs TTS for Spanish audio
- localStorage persistence (data model designed for a future Supabase swap)
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

If either is missing, the TTS endpoint returns 500 but the rest of the app works fine.

## Project layout

```text
app/
├── page.tsx                  Today screen
├── flow/                     Guided 5-step sentence flow
├── activities/               Hub
│   ├── thoughts/             Sentence journal
│   └── cognates/             Patterns, true cognates, false friends
├── situations/               Phrasebank library (10 categories, 50+ situations)
├── progress/                 Quiet stats — sentences, days, frames
└── api/tts/                  ElevenLabs proxy (server-side)

components/                   Shared UI (BottomTabNav, PlayButton, etc.)
content/                      Typed content: frames, situations, cognates
hooks/                        React hooks over lib/store
lib/store.ts                  Single seam between app and persistence
```

## Scripts

- `npm run dev` — Turbopack dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run typecheck` — TypeScript check, no emit

## Deployment

Designed for Vercel. Push to GitHub, import the repo at vercel.com, and add the two ElevenLabs env vars in Project Settings → Environment Variables. The build command and output settings are auto-detected from `next.config.ts`.
