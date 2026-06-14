/**
 * Audio asset lookup.
 *
 * The generator script (scripts/generate-audio.ts) writes:
 *   - public/audio/<hash>.mp3 for each unique Spanish phrase
 *   - public/audio/manifest.json mapping { text -> filename }
 *
 * Clients fetch the manifest once, cache it, and look up audio paths by
 * text. If a phrase isn't in the manifest yet, the client falls back to
 * the live /api/tts route.
 */

export type AudioManifest = Record<string, string>; // text → filename (e.g. "3f1ab8…c2.mp3")

let manifestPromise: Promise<AudioManifest> | null = null;

export function getAudioManifest(): Promise<AudioManifest> {
  if (typeof window === "undefined") return Promise.resolve({});
  if (!manifestPromise) {
    manifestPromise = fetch("/audio/manifest.json", { cache: "force-cache" })
      .then((r) => (r.ok ? r.json() : {}))
      .catch(() => ({}));
  }
  return manifestPromise;
}

export async function staticAudioUrl(text: string): Promise<string | null> {
  const manifest = await getAudioManifest();
  const filename = manifest[text];
  return filename ? `/audio/${filename}` : null;
}
