-- Pues initial schema
-- Run in Supabase Dashboard → SQL Editor after creating the project.

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.thoughts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  frame_stem text not null,
  situation_slug text not null,
  situation_label text not null,
  sentence text not null,
  english text,
  reflection text not null check (reflection in ('yes', 'maybe', 'not_really')),
  practice_flag boolean not null default false,
  audio_path text,
  prompt_id text,
  created_at timestamptz not null default now()
);

create index thoughts_user_created_idx on public.thoughts (user_id, created_at desc);

create table public.session_stats (
  user_id uuid primary key references auth.users (id) on delete cascade,
  days_practiced integer not null default 0,
  sentences_created integer not null default 0,
  frames_explored text[] not null default '{}',
  last_session_date date,
  current_day_index integer not null default 0,
  updated_at timestamptz not null default now()
);

create table public.practice_flags (
  user_id uuid not null references auth.users (id) on delete cascade,
  prompt_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, prompt_id)
);

create table public.questionnaire_answers (
  user_id uuid primary key references auth.users (id) on delete cascade,
  answers jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table public.user_preferences (
  user_id uuid primary key references auth.users (id) on delete cascade,
  audio_speed text not null default 'normal' check (audio_speed in ('normal', 'slow')),
  theme_mode text not null default 'dark' check (theme_mode in ('dark', 'light')),
  sidebar_visible boolean not null default true,
  phrase_english_visible boolean not null default false,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.thoughts enable row level security;
alter table public.session_stats enable row level security;
alter table public.practice_flags enable row level security;
alter table public.questionnaire_answers enable row level security;
alter table public.user_preferences enable row level security;

create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

create policy "thoughts_select_own"
  on public.thoughts for select
  using (auth.uid() = user_id);

create policy "thoughts_insert_own"
  on public.thoughts for insert
  with check (auth.uid() = user_id);

create policy "thoughts_update_own"
  on public.thoughts for update
  using (auth.uid() = user_id);

create policy "thoughts_delete_own"
  on public.thoughts for delete
  using (auth.uid() = user_id);

create policy "session_stats_select_own"
  on public.session_stats for select
  using (auth.uid() = user_id);

create policy "session_stats_insert_own"
  on public.session_stats for insert
  with check (auth.uid() = user_id);

create policy "session_stats_update_own"
  on public.session_stats for update
  using (auth.uid() = user_id);

create policy "practice_flags_select_own"
  on public.practice_flags for select
  using (auth.uid() = user_id);

create policy "practice_flags_insert_own"
  on public.practice_flags for insert
  with check (auth.uid() = user_id);

create policy "practice_flags_delete_own"
  on public.practice_flags for delete
  using (auth.uid() = user_id);

create policy "questionnaire_answers_select_own"
  on public.questionnaire_answers for select
  using (auth.uid() = user_id);

create policy "questionnaire_answers_insert_own"
  on public.questionnaire_answers for insert
  with check (auth.uid() = user_id);

create policy "questionnaire_answers_update_own"
  on public.questionnaire_answers for update
  using (auth.uid() = user_id);

create policy "user_preferences_select_own"
  on public.user_preferences for select
  using (auth.uid() = user_id);

create policy "user_preferences_insert_own"
  on public.user_preferences for insert
  with check (auth.uid() = user_id);

create policy "user_preferences_update_own"
  on public.user_preferences for update
  using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- New-user bootstrap
-- ---------------------------------------------------------------------------

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id);
  insert into public.session_stats (user_id) values (new.id);
  insert into public.user_preferences (user_id) values (new.id);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Storage: voice recordings (private per user)
-- ---------------------------------------------------------------------------

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'recordings',
  'recordings',
  false,
  5242880,
  array['audio/webm', 'audio/mp4', 'audio/mpeg', 'audio/ogg']
)
on conflict (id) do nothing;

create policy "recordings_select_own"
  on storage.objects for select
  using (
    bucket_id = 'recordings'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "recordings_insert_own"
  on storage.objects for insert
  with check (
    bucket_id = 'recordings'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "recordings_update_own"
  on storage.objects for update
  using (
    bucket_id = 'recordings'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "recordings_delete_own"
  on storage.objects for delete
  using (
    bucket_id = 'recordings'
    and auth.uid()::text = (storage.foldername(name))[1]
  );
