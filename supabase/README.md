# Supabase setup for Pues

Pues currently saves data in the browser (`localStorage` + IndexedDB). This guide wires up Supabase so your journal, stats, questionnaire, and recordings can sync across devices once you sign in.

The app still works without Supabase — env vars are optional until you flip the sync switch.

## 1. Create the project

On the **Create a new project** screen:

| Setting | Recommendation |
| --- | --- |
| **Project name** | `Pues` |
| **Database password** | Strong password — save it in a password manager |
| **Region** | **Americas** (closest to you in Boston) |
| **Enable Data API** | On — required for `supabase-js` |
| **Automatically expose new tables** | **Off** — the migration below grants access explicitly |
| **Enable automatic RLS** | On — good default; our migration also enables RLS per table |

Click **Create new project** and wait ~2 minutes for provisioning.

## 2. Run the database migration

1. Open **SQL Editor** in the Supabase dashboard.
2. Paste the contents of `supabase/migrations/20250615000000_initial_schema.sql`.
3. Click **Run**.

This creates:

- `thoughts` — your Diario sentences
- `session_stats` — streak / progress counters
- `practice_flags` — “Quiero practicarla” resurfacing list
- `questionnaire_answers` — content profile JSON
- `user_preferences` — theme, audio speed, UI toggles
- `recordings` storage bucket — private voice clips at `{user_id}/{thought_id}.webm`

All tables use **Row Level Security** — each user only sees their own rows.

## 3. Enable sign-in

Pues uses **email + password** on the Settings page for cross-device sync. Until you sign in, data stays on the device only.

### Email + password (recommended)

1. Go to **Authentication → Providers → Email** and leave it enabled.
2. For a personal app, turn **Confirm email** **off** — you can sign in immediately with no inbox step.
3. Create your account either:
   - **In the app**: Settings → *Create account* → email + password (6+ characters), or
   - **In Supabase**: Authentication → Users → *Add user* → set email + password and check **Auto Confirm User**.

On each device (phone, laptop, production): open **Settings → Sign in** with the **same** email and password. Local progress merges with the cloud on first sign-in.

### Anonymous sign-in (optional)

Anonymous auth gives each device a silent backup before you sign in. It is **not** required for password sync.

1. Go to **Authentication → Providers → Anonymous**.
2. Turn **Enable anonymous sign-ins** on if you want per-device backup before login.

If anonymous is off, the app still works — sync simply waits until you sign in with email + password.

### URL configuration (only if email confirmation is on)

If you keep **Confirm email** enabled, add under **Authentication → URL Configuration**:

- **Site URL**: `http://localhost:3000` (plus your Vercel URL)
- **Redirect URLs**:
  - `http://localhost:3000/auth/finish`
  - `https://your-app.vercel.app/auth/finish`

With confirmation off, you do not need magic links or redirect URLs for day-to-day use.

### Built-in email is rate-limited

Supabase's built-in email sender is throttled and meant for testing. With password auth and **Confirm email** off, you rarely need outbound email at all.

#### Custom SMTP via Resend (optional)

Only needed if you want confirmation emails, password reset, or higher send limits.

1. Create an account at [resend.com](https://resend.com).
2. **Domains → Add Domain**: add a domain you own and create the DNS records
   Resend shows you (SPF/DKIM).
3. **API Keys → Create API Key** → copy it (`re_…`).
4. In Supabase: **Authentication → Emails → SMTP Settings**, enable custom SMTP
   and enter:

   | Field | Value |
   | --- | --- |
   | Host | `smtp.resend.com` |
   | Port | `465` (SSL) or `587` (TLS) |
   | Username | `resend` |
   | Password | your Resend API key (`re_…`) |
   | Sender email | `pues@yourdomain.com` (on the verified domain) |
   | Sender name | `Pues` |

5. Optionally raise the cap under **Authentication → Rate Limits → Emails**.

## What's synced

`lib/sync.ts` mirrors these to Supabase when you're signed in:

- **Diario** (`thoughts`) — sentences you've spoken and saved
- **Streak / progress** (`session_stats`) — day index, counters, frames explored
- **Practice flags** — “Quiero practicarla” resurfacing list
- **Preferences** — theme, audio speed, UI toggles
- **Questionnaire** — content profile answers

Still local-only: in-progress drafts, today's prompt cursor, sentence-builder level progress, and voice recordings (IndexedDB).

## 4. Add environment variables

Copy keys from **Project Settings → API**:

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
# or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

Optional (server-only, never expose to the browser):

```bash
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

Add the same `NEXT_PUBLIC_*` vars in **Vercel → Project Settings → Environment Variables**.

## 5. Test locally

```bash
npm run dev
```

Middleware is already wired (`middleware.ts`) to refresh auth cookies.

1. Open **Settings** → sign in with your email + password.
2. Practice a sentence, then open the app on another device (or browser) with the same account — your journal and streak should appear after sign-in.

## Optional: Supabase CLI

For migration history and local Postgres:

```bash
brew install supabase/tap/supabase
supabase login
supabase link --project-ref <your-project-ref>
supabase db push
```

Project ref is in the dashboard URL: `https://supabase.com/dashboard/project/<ref>`.
