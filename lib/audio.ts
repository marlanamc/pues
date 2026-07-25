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
    manifestPromise = fetch("/audio/manifest.json", {
      cache: "no-cache",
      signal: AbortSignal.timeout(10000),
    })
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

/** Live TTS clip as an object URL. The caller owns it — revoke when done. */
export async function liveAudioObjectUrl(text: string, lang = "es"): Promise<string> {
  const res = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, lang }),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`TTS failed: ${res.status}`);
  return URL.createObjectURL(await res.blob());
}

/**
 * Manifest hit if there is one, else a live TTS clip — the same lookup order
 * PlayButton uses, for callers that play many phrases in a row. `objectUrl`
 * flags the URLs that need revoking.
 */
export async function resolveAudioUrl(
  text: string,
  lang = "es"
): Promise<{ url: string; objectUrl: boolean }> {
  const stat = await staticAudioUrl(text);
  if (stat) return { url: stat, objectUrl: false };
  return { url: await liveAudioObjectUrl(text, lang), objectUrl: true };
}
