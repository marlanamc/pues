-- El impulso: the week becomes the unit of rhythm.
--   primed_weeks — global curriculum weeks whose momentum session was completed.
--   days_done    — curriculum days worked through, in any order (the week is a
--                  queue, so this is a set rather than a high-water mark).
-- Both merge as unions across devices; see mergeStats in lib/sync.ts.
alter table public.session_stats
  add column if not exists primed_weeks integer[] not null default '{}',
  add column if not exists days_done integer[] not null default '{}';
