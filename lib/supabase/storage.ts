/** Pre-generated ElevenLabs clips (public bucket). */
export const AUDIO_BUCKET = "audio";

/** User voice recordings from Diario (private per-user bucket). */
export const RECORDINGS_BUCKET = "recordings";

/** Public URL for a file in a public Supabase Storage bucket. */
export function publicStorageUrl(bucket: string, path: string): string {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) return "";
  return `${base}/storage/v1/object/public/${bucket}/${path}`;
}

/** Resolve a manifest filename to a playable URL (Supabase or local fallback). */
export function audioPublicUrl(filename: string): string {
  const remote = publicStorageUrl(AUDIO_BUCKET, filename);
  if (remote) return remote;
  return `/audio/${filename}`;
}
