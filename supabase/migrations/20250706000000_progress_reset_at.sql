-- Tombstone timestamp: when set, other devices wipe local progress on pull.
alter table public.session_stats
  add column if not exists progress_reset_at timestamptz;
