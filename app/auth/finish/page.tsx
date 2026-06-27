"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";

/**
 * Magic-link landing page.
 *
 * The Supabase browser client auto-detects the session from the URL on load
 * (detectSessionInUrl) — handling both the `?code=` (PKCE) and `#access_token`
 * (implicit) shapes the default email template can produce. A server route
 * can't read the `#hash` form, so completing sign-in on the client is the
 * robust path that needs no custom email template.
 */
export default function AuthFinishPage() {
  const router = useRouter();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setError(true);
      return;
    }

    const supabase = createClient();
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      router.replace("/settings");
    };

    // Already exchanged by the time we mount?
    void supabase.auth.getSession().then(({ data }) => {
      if (data.session) finish();
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) finish();
    });

    // If nothing resolves, the link was stale or already used.
    const timeout = setTimeout(() => {
      if (!done) setError(true);
    }, 8000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-center">
      {error ? (
        <>
          <p className="text-gloss">That sign-in link didn’t work.</p>
          <p className="text-sm text-ink-mute">
            It may have expired or already been used.
          </p>
          <a
            href="/settings"
            className="mono-cap mt-2 rounded-full border border-rule px-4 py-2 text-ink-soft transition-colors hover:border-accent/60 hover:text-accent"
          >
            Back to Settings
          </a>
        </>
      ) : (
        <p className="text-gloss">Signing you in…</p>
      )}
    </div>
  );
}
