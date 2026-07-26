-- ---------------------------------------------------------------------------
-- Storage: pre-generated TTS clips (public read, no auth required)
-- Files live at audio/<hash>.mp3 — uploaded by scripts/generate-audio.ts
-- ---------------------------------------------------------------------------

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'audio',
  'audio',
  true,
  1048576,
  array['audio/mpeg']
)
on conflict (id) do nothing;

create policy "audio_public_read"
  on storage.objects for select
  using (bucket_id = 'audio');
