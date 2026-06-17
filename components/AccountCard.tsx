"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";

type Status = "loading" | "anonymous" | "signed-in" | "error";
type Mode = "sign-in" | "sign-up";

/**
 * Email + password sign-in / sign-up for cross-device sync. No email sending
 * required (with email confirmation off) — works the moment a user exists.
 * Signing in links this device to your account, so the same journal/stats/
 * preferences appear everywhere; local data pushes up once you're signed in.
 */
export function AccountCard() {
  const [status, setStatus] = useState<Status>("loading");
  const [mode, setMode] = useState<Mode>("sign-in");
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setStatus("error");
      setMessage("Supabase isn't configured on this build.");
      return;
    }

    const supabase = createClient();

    const apply = (u: User | null) => {
      setUser(u);
      setStatus(u && !u.is_anonymous ? "signed-in" : "anonymous");
    };

    void supabase.auth.getUser().then(({ data }) => apply(data.user));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      apply(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !password) return;

    setMessage("");
    const supabase = createClient();

    if (mode === "sign-up") {
      const { data, error } = await supabase.auth.signUp({
        email: trimmed,
        password,
      });
      if (error) {
        setStatus("error");
        setMessage(error.message);
        return;
      }
      // With "Confirm email" on, no session is returned until the link is clicked.
      if (!data.session) {
        setStatus("error");
        setMessage(
          `Account created. Check ${trimmed} to confirm, then sign in.`
        );
        setMode("sign-in");
        setPassword("");
        return;
      }
      setPassword("");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: trimmed,
      password,
    });
    if (error) {
      setStatus("error");
      const msg = error.message;
      if (msg.toLowerCase().includes("invalid login credentials")) {
        setMessage(
          "Wrong email or password. If you created the account in the Supabase dashboard, use Sign in (not Create account) and the password you set there."
        );
      } else if (msg.toLowerCase().includes("email not confirmed")) {
        setMessage(
          "Email not confirmed yet. In Supabase → Authentication → Users, open your user and confirm the email, or turn off “Confirm email” under Email provider settings."
        );
      } else {
        setMessage(msg);
      }
      return;
    }
    setPassword("");
    // onAuthStateChange flips us to "signed-in" and kicks off sync.
  }

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setEmail("");
    setPassword("");
    setMessage("");
  }

  if (status === "loading") {
    return (
      <li className="rounded-lg border border-rule bg-surface p-6">
        <p className="text-sm text-ink-mute">Checking sign-in…</p>
      </li>
    );
  }

  if (status === "signed-in" && user) {
    return (
      <li className="rounded-lg border border-rule bg-surface p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 space-y-1">
            <p className="font-display text-[1.125rem] text-ink leading-tight">
              Account
            </p>
            <p className="text-sm text-ink-mute leading-relaxed break-all">
              Signed in as {user.email}. Your data syncs across devices.
            </p>
          </div>
          <button
            type="button"
            onClick={signOut}
            className="mono-cap shrink-0 rounded-full border border-rule px-3 py-1.5 text-ink-soft transition-colors hover:border-accent/60 hover:text-accent"
          >
            Sign out
          </button>
        </div>
      </li>
    );
  }

  return (
    <li className="rounded-lg border border-rule bg-surface p-6 space-y-4">
      <div className="min-w-0 space-y-1">
        <p className="font-display text-[1.125rem] text-ink leading-tight">
          Sync across devices
        </p>
        <p className="text-sm text-ink-mute leading-relaxed">
          {mode === "sign-in"
            ? "Sign in with the same email and password on every device. Your journal, streak, and preferences will merge automatically."
            : "Create an account to sync your journal and streak across devices."}
        </p>
      </div>

      <form onSubmit={submit} className="space-y-3">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-full border border-rule bg-bg/60 px-4 py-2.5 text-sm text-ink placeholder:text-ink-mute/60 focus:border-accent/60 focus:outline-none"
        />
        <input
          type="password"
          autoComplete={mode === "sign-in" ? "current-password" : "new-password"}
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-full border border-rule bg-bg/60 px-4 py-2.5 text-sm text-ink placeholder:text-ink-mute/60 focus:border-accent/60 focus:outline-none"
        />
        <button
          type="submit"
          className="mono-cap w-full rounded-full bg-accent px-4 py-2.5 text-bg transition-opacity hover:opacity-90"
        >
          {mode === "sign-in" ? "Sign in →" : "Create account →"}
        </button>
        {status === "error" && (
          <p className="text-sm text-ink-mute leading-relaxed">{message}</p>
        )}
      </form>

      <button
        type="button"
        onClick={() => {
          setMode((m) => (m === "sign-in" ? "sign-up" : "sign-in"));
          setMessage("");
        }}
        className="text-sm text-ink-mute transition-colors hover:text-accent"
      >
        {mode === "sign-in"
          ? "Need an account? Create one"
          : "Have an account? Sign in"}
      </button>

      {mode === "sign-in" && status !== "error" && (
        <p className="text-xs text-ink-mute leading-relaxed">
          Already added yourself in Supabase? Sign in here — no email link needed.
        </p>
      )}
    </li>
  );
}
