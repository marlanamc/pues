#!/usr/bin/env tsx
/**
 * Generate static audio files for every Spanish phrase in the content/.
 *
 * - Walks frames, situations, cognates
 * - Computes a SHA-1 filename for each unique phrase (so re-runs are idempotent)
 * - Calls ElevenLabs only for phrases missing from Supabase Storage
 * - Uploads audio/<hash>.mp3 to the public `audio` bucket
 * - Writes public/audio/manifest.json (text → filename)
 *
 * Usage:
 *   npm run audio                         # generate missing files + upload
 *   npm run audio -- --dry                # show what WOULD be generated
 *   npm run audio -- --force              # regenerate everything
 *   npm run audio -- --upload-local       # upload existing public/audio/*.mp3
 */

import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { config as loadEnv } from "dotenv";

import { frameDays } from "../content/frames.js";
import { situations } from "../content/situations.js";
import { accentAudioTexts } from "../content/accent.js";
import { linkingAudioTexts } from "../content/linking.js";
import { frequentVerbAudioTexts } from "../content/frequentVerbs.js";
import { questionAudioTexts } from "../content/questions.js";
import { accentMarkAudioTexts } from "../content/accentMarks.js";
import { sentenceBuilderAudioTexts } from "../content/sentenceBuilder.js";
import {
  cognatePatterns,
  cognateThemes,
  falseFriends,
} from "../content/cognates.js";
import { AUDIO_BUCKET } from "../lib/supabase/storage.js";
import { createScriptClient } from "../lib/supabase/script.js";

loadEnv({ path: join(process.cwd(), ".env") });

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID;
const MODEL_ID = "eleven_multilingual_v2";

const AUDIO_DIR = join(process.cwd(), "public", "audio");
const MANIFEST_PATH = join(AUDIO_DIR, "manifest.json");

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has("--dry");
const FORCE = args.has("--force");
const UPLOAD_LOCAL = args.has("--upload-local");

if (!UPLOAD_LOCAL && !DRY_RUN && (!API_KEY || !VOICE_ID)) {
  console.error("\n  Missing ELEVENLABS_API_KEY or ELEVENLABS_VOICE_ID in .env\n");
  process.exit(1);
}

if (!DRY_RUN) {
  try {
    createScriptClient();
  } catch {
    console.error(
      "\n  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env\n"
    );
    process.exit(1);
  }
}

mkdirSync(AUDIO_DIR, { recursive: true });

function hashFor(text: string): string {
  return createHash("sha1")
    .update(`${VOICE_ID}::${text}`)
    .digest("hex")
    .slice(0, 16);
}

/* ─── Collect every Spanish string in content/ ──────────── */

function collectPhrases(): string[] {
  const out = new Set<string>();

  for (const day of frameDays) {
    for (const f of day.frames) {
      for (const ex of f.examples) out.add(ex);
    }
  }

  for (const s of situations) {
    if (!s.phrases) continue;
    for (const p of s.phrases) out.add(p.es);
  }

  for (const p of cognatePatterns) {
    for (const pair of p.pairs) {
      out.add(pair.es.split(" / ")[0].trim());
    }
  }

  for (const theme of cognateThemes) {
    for (const w of theme.words) out.add(w.es);
  }

  for (const ff of falseFriends) {
    out.add(ff.spanish);
    out.add(ff.example);
  }

  for (const text of accentAudioTexts()) out.add(text);
  for (const text of linkingAudioTexts()) out.add(text);
  for (const text of frequentVerbAudioTexts()) out.add(text);
  for (const text of questionAudioTexts()) out.add(text);
  for (const text of accentMarkAudioTexts()) out.add(text);
  for (const text of sentenceBuilderAudioTexts()) out.add(text);

  return [...out].filter((t) => t && t.length > 0 && t.length <= 500);
}

/* ─── Supabase Storage ─────────────────────────────────── */

async function listStorageFiles(): Promise<Set<string>> {
  const supabase = createScriptClient();
  const names = new Set<string>();
  let offset = 0;

  while (true) {
    const { data, error } = await supabase.storage.from(AUDIO_BUCKET).list("", {
      limit: 1000,
      offset,
    });
    if (error) throw error;
    if (!data?.length) break;
    for (const f of data) {
      if (f.name.endsWith(".mp3")) names.add(f.name);
    }
    if (data.length < 1000) break;
    offset += 1000;
  }

  return names;
}

async function uploadMp3(filename: string, buffer: Buffer): Promise<void> {
  const supabase = createScriptClient();
  const { error } = await supabase.storage.from(AUDIO_BUCKET).upload(filename, buffer, {
    upsert: true,
    contentType: "audio/mpeg",
  });
  if (error) throw error;
}

function writeManifest(manifest: Record<string, string>, inStorage: Set<string>) {
  const verified: Record<string, string> = {};
  for (const [text, filename] of Object.entries(manifest)) {
    if (inStorage.has(filename)) verified[text] = filename;
  }
  writeFileSync(MANIFEST_PATH, JSON.stringify(verified, null, 2));
}

/* ─── Talk to ElevenLabs ───────────────────────────────── */

function ttsPayload(text: string) {
  const isShortInfinitive = text.length <= 5 && !text.includes(" ");
  return {
    text,
    model_id: MODEL_ID,
    language_code: "es",
    ...(isShortInfinitive ? { previous_text: "El verbo " } : {}),
    voice_settings: { stability: 0.5, similarity_boost: 0.75 },
  };
}

async function synthesize(text: string): Promise<Buffer> {
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": API_KEY!,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify(ttsPayload(text)),
    }
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`ElevenLabs ${res.status}: ${detail.slice(0, 200)}`);
  }

  return Buffer.from(await res.arrayBuffer());
}

/* ─── Upload local MP3s (one-time migration) ─────────── */

async function uploadLocal() {
  const localFiles = readdirSync(AUDIO_DIR).filter((f) => f.endsWith(".mp3"));
  console.log(`\n  ${localFiles.length} local MP3s to check\n`);

  const inStorage = await listStorageFiles();
  let uploaded = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < localFiles.length; i++) {
    const filename = localFiles[i];
    const prefix = `  [${(i + 1).toString().padStart(3, " ")}/${localFiles.length}]`;

    if (inStorage.has(filename)) {
      skipped++;
      console.log(`${prefix} ✓ ${filename} (already in storage)`);
      continue;
    }

    try {
      const buf = readFileSync(join(AUDIO_DIR, filename));
      await uploadMp3(filename, buf);
      inStorage.add(filename);
      uploaded++;
      console.log(`${prefix} ↑ ${filename}  (${(buf.length / 1024).toFixed(1)}kb)`);
    } catch (err) {
      failed++;
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`${prefix} ✗ ${filename}`);
      console.error(`        ${msg}`);
    }
  }

  let manifest: Record<string, string> = {};
  if (existsSync(MANIFEST_PATH)) {
    try {
      manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));
    } catch {
      /* start fresh */
    }
  }

  writeManifest(manifest, inStorage);

  console.log("\n  ─────────────────");
  console.log(`  Uploaded:  ${uploaded}`);
  console.log(`  Skipped:   ${skipped} (already in storage)`);
  console.log(`  Failed:    ${failed}`);
  console.log(`  Manifest:  ${MANIFEST_PATH}`);
  console.log("");
}

/* ─── Main ─────────────────────────────────────────────── */

async function main() {
  if (UPLOAD_LOCAL) {
    await uploadLocal();
    return;
  }

  const phrases = collectPhrases();

  let manifest: Record<string, string> = {};
  if (existsSync(MANIFEST_PATH)) {
    try {
      manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));
    } catch {
      /* start fresh */
    }
  }

  const inStorage = DRY_RUN ? new Set<string>() : await listStorageFiles();

  let chars = 0;
  let generated = 0;
  let skipped = 0;
  let failed = 0;

  console.log(`\n  ${phrases.length} unique phrases to check\n`);

  for (let i = 0; i < phrases.length; i++) {
    const text = phrases[i];
    const filename = `${hashFor(text)}.mp3`;
    const exists = inStorage.has(filename);

    const prefix = `  [${(i + 1).toString().padStart(3, " ")}/${phrases.length}]`;

    if (exists && !FORCE) {
      manifest[text] = filename;
      skipped++;
      console.log(`${prefix} ✓ ${truncate(text, 60)}`);
      continue;
    }

    if (DRY_RUN) {
      chars += text.length;
      console.log(`${prefix} → ${truncate(text, 60)}  (${text.length}ch)`);
      continue;
    }

    try {
      const audio = await synthesize(text);
      await uploadMp3(filename, audio);
      inStorage.add(filename);
      manifest[text] = filename;
      chars += text.length;
      generated++;
      console.log(
        `${prefix} ★ ${truncate(text, 60)}  (${text.length}ch, ${(audio.length / 1024).toFixed(1)}kb)`
      );
    } catch (err) {
      failed++;
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`${prefix} ✗ ${truncate(text, 60)}`);
      console.error(`        ${msg}`);
      if (msg.includes("401") || msg.includes("403") || msg.includes("429")) {
        console.error("\n  Stopping early — auth or rate-limit error.\n");
        break;
      }
    }

    await sleep(150);
  }

  if (!DRY_RUN) {
    writeManifest(manifest, inStorage);
  }

  console.log("\n  ─────────────────");
  console.log(`  Generated: ${generated}`);
  console.log(`  Skipped:   ${skipped} (already in storage)`);
  console.log(`  Failed:    ${failed}`);
  console.log(`  Characters used this run: ${chars.toLocaleString()}`);
  console.log(`  Manifest:  ${MANIFEST_PATH}`);
  console.log("");
}

function truncate(s: string, n: number) {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
