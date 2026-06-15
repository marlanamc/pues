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

## 3. Enable sign-in (no UI required for now)

Until email login is wired up, Pues uses **silent anonymous sign-in** so Row Level Security still works.

1. Go to **Authentication → Providers → Anonymous**.
2. Turn **Enable anonymous sign-ins** on.

The app calls `signInAnonymously()` on load — no sign-in screen. When you add email auth later, you can link that anonymous account to your email.

### Email auth (magic link)

The Settings page has a magic-link sign-in. Signing in with your email is what
makes data sync across devices (anonymous accounts are per-device).

1. Go to **Authentication → Providers → Email** and leave it enabled.
2. Under **Authentication → URL Configuration**, set:
   - **Site URL**: `http://localhost:3000` (add your Vercel URL later)
   - **Redirect URLs** (add each):
     - `http://localhost:3000/auth/finish`
     - `https://your-app.vercel.app/auth/finish`

That's it — **no email template editing required.** The magic link lands on the
client page `/auth/finish`, where the Supabase browser client auto-completes the
session from the URL (works with both the `?code=` and `#access_token` link
shapes the default template can produce).

> The routes `/auth/callback` (`exchangeCodeForSession`) and `/auth/confirm`
> (`verifyOtp` with `token_hash`) are kept for the custom-SMTP / OAuth paths
> below, but the default flow uses `/auth/finish`.

### Heads up: built-in email is rate-limited

Supabase's built-in email sender is throttled (a few messages per hour) and is
meant for testing, not daily production use. Editing email templates is also
gated behind custom SMTP.

For a **personal app where you're the only user**, the built-in sender is often
fine — you sign in rarely and sessions persist. Set up custom SMTP when you want
reliable delivery, higher limits, or to edit templates.

#### Custom SMTP via Resend

1. Create an account at [resend.com](https://resend.com).
2. **Domains → Add Domain**: add a domain you own and create the DNS records
   Resend shows you (SPF/DKIM). Magic links will send `from` an address on this
   domain (e.g. `pues@yourdomain.com`). _(Without a domain you can only send to
   your own Resend account email — fine for a quick personal test.)_
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

#### Optional: token-hash template (only after SMTP is on)

With custom SMTP you can edit **Email Templates → Magic Link** to use the
server-side `/auth/confirm` route instead of `/auth/finish`:

```html
<h2>Sign in to Pues</h2>
<p><a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=magiclink&next=/settings">Sign in to Pues</a></p>
```

…and add `/auth/confirm` to the Redirect URLs. This is optional — the default
`/auth/finish` flow works without any template editing.

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

Middleware is already wired (`middleware.ts`) to refresh auth cookies. The auth callback route lives at `/auth/callback`.

## What’s not migrated yet

`lib/store.ts` and `lib/audioStore.ts` still read/write the browser. The schema matches those types so we can swap the implementation behind the same functions without touching UI code.

Next step when you’re ready: add a sign-in card on Settings and replace `saveThought` / `listThoughts` with Supabase calls for signed-in users (fall back to localStorage when offline or unsigned).

## Optional: Supabase CLI

For migration history and local Postgres:

```bash
brew install supabase/tap/supabase
supabase login
supabase link --project-ref <your-project-ref>
supabase db push
```

Project ref is in the dashboard URL: `https://supabase.com/dashboard/project/<ref>`.
