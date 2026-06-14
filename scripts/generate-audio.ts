#!/usr/bin/env tsx
/**
 * Generate static audio files for every Spanish phrase in the content/.
 *
 * - Walks frames, situations, cognates
 * - Computes a SHA-1 filename for each unique phrase (so re-runs are idempotent)
 * - Calls ElevenLabs only for phrases that don't already have an MP3
 * - Writes public/audio/<hash>.mp3 + public/audio/manifest.json
 *
 * Usage:
 *   npm run audio              # generate missing files
 *   npm run audio -- --dry     # show what WOULD be generated, no API calls
 *   npm run audio -- --force   # regenerate everything (skips skip-cache)
 */

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { config as loadEnv } from "dotenv";

import { frameDays } from "../content/frames.js";
import { situations } from "../content/situations.js";
import { accentAudioTexts } from "../content/accent.js";
import {
  cognatePatterns,
  cognateThemes,
  falseFriends,
} from "../content/cognates.js";

loadEnv({ path: join(process.cwd(), ".env") });

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID;
const MODEL_ID = "eleven_multilingual_v2";

const AUDIO_DIR = join(process.cwd(), "public", "audio");
const MANIFEST_PATH = join(AUDIO_DIR, "manifest.json");

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has("--dry");
const FORCE = args.has("--force");

if (!API_KEY || !VOICE_ID) {
  console.error("\n  Missing ELEVENLABS_API_KEY or ELEVENLABS_VOICE_ID in .env\n");
  process.exit(1);
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
      // Pairs are sometimes "famoso / famosa" — voice just the first form.
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

  return [...out].filter((t) => t && t.length > 0 && t.length <= 500);
}

/* ─── Talk to ElevenLabs ───────────────────────────────── */

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
      body: JSON.stringify({
        text,
        model_id: MODEL_ID,
        voice_settings: { stability: 0.5, similarity_boost: 0.75 },
      }),
    }
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`ElevenLabs ${res.status}: ${detail.slice(0, 200)}`);
  }

  const buf = await res.arrayBuffer();
  return Buffer.from(buf);
}

/* ─── Main ─────────────────────────────────────────────── */

async function main() {
  const phrases = collectPhrases();

  // Load existing manifest so we keep entries for orphaned phrases too
  // (text that's been removed from content but the MP3 is still there).
  let manifest: Record<string, string> = {};
  if (existsSync(MANIFEST_PATH)) {
    try {
      manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));
    } catch {
      /* start fresh */
    }
  }

  let chars = 0;
  let generated = 0;
  let skipped = 0;
  let failed = 0;

  console.log(`\n  ${phrases.length} unique phrases to check\n`);

  for (let i = 0; i < phrases.length; i++) {
    const text = phrases[i];
    const filename = `${hashFor(text)}.mp3`;
    const filepath = join(AUDIO_DIR, filename);
    const exists = existsSync(filepath);

    manifest[text] = filename;

    const prefix = `  [${(i + 1).toString().padStart(3, " ")}/${phrases.length}]`;

    if (exists && !FORCE) {
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
      writeFileSync(filepath, audio);
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

    // Mild throttle — be polite to the free tier.
    await sleep(150);
  }

  // Write manifest last so a partial run is still useful.
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

  console.log("\n  ─────────────────");
  console.log(`  Generated: ${generated}`);
  console.log(`  Skipped:   ${skipped} (already on disk)`);
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
