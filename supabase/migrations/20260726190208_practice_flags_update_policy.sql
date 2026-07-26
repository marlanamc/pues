-- practice_flags upsert (ON CONFLICT DO UPDATE) needs an UPDATE policy.
-- Without it, re-flagging an existing prompt fails with RLS error 42501.

create policy "practice_flags_update_own"
  on public.practice_flags for update
  using (auth.uid() = user_id);
