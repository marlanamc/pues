import { NextResponse } from "next/server";

export const runtime = "nodejs";

const ELEVENLABS_API = "https://api.elevenlabs.io/v1/text-to-speech";

export async function POST(req: Request) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const voiceId = process.env.ELEVENLABS_VOICE_ID;

  if (!apiKey || !voiceId) {
    return NextResponse.json(
      { error: "ElevenLabs not configured" },
      { status: 500 }
    );
  }

  let text: string;
  let lang: string | undefined;
  let contextBefore: string | undefined;
  try {
    const body = await req.json();
    text = typeof body?.text === "string" ? body.text.trim() : "";
    lang = typeof body?.lang === "string" ? body.lang.trim() : "es";
    contextBefore =
      typeof body?.contextBefore === "string"
        ? body.contextBefore.trim()
        : undefined;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!text || text.length > 500) {
    return NextResponse.json(
      { error: "text must be 1-500 chars" },
      { status: 400 }
    );
  }

  let res: Response;
  try {
    res = await fetch(`${ELEVENLABS_API}/${voiceId}`, {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        language_code: lang,
        ...(contextBefore ? { previous_text: contextBefore } : {}),
        voice_settings: { stability: 0.5, similarity_boost: 0.75 },
      }),
      // Bound the upstream call so a hung provider can't hold the function open.
      signal: AbortSignal.timeout(20000),
    });
  } catch (err) {
    const timedOut = err instanceof Error && err.name === "TimeoutError";
    console.error(`[tts] ElevenLabs ${timedOut ? "timeout" : "network error"}:`, err);
    return NextResponse.json(
      { error: timedOut ? "ElevenLabs timed out" : "ElevenLabs unreachable" },
      { status: 504 }
    );
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error(
      `[tts] ElevenLabs ${res.status}: ${detail.slice(0, 300)}`
    );
    return NextResponse.json(
      { error: "ElevenLabs request failed", detail: detail.slice(0, 300) },
      { status: res.status }
    );
  }

  const audio = await res.arrayBuffer();
  return new NextResponse(audio, {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
