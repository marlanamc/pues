#!/usr/bin/env tsx
/**
 * Generate SentenceFormerDay entries for Verano days 36–91 from frames + prompts.
 * Usage: tsx scripts/generate-sentence-former-batch.ts > /tmp/sf-batch.ts
 */

import { frameDays } from "../content/frames";
import { speakDays } from "../content/prompts";

type Category = "food" | "time" | "activity" | "opinion" | "other";

const FRAGMENTS: Record<string, { es: string; en: string; category: Category }[]> = {
  stories: [
    { es: "más tarde ese día", en: "later that day", category: "time" },
    { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
    { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
    { es: "como siempre", en: "like always", category: "other" },
    { es: "un rato después", en: "a little while later", category: "time" },
  ],
  describe: [
    { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
    { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
    { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
    { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
    { es: "lleno de gente", en: "full of people", category: "other" },
  ],
  advice: [
    { es: "un poco cada día", en: "a little each day", category: "time" },
    { es: "cuando puedas", en: "when you can", category: "time" },
    { es: "sin presión", en: "without pressure", category: "other" },
    { es: "con calma", en: "calmly", category: "other" },
    { es: "paso a paso", en: "step by step", category: "other" },
  ],
  plans: [
    { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
    { es: "después del trabajo", en: "after work", category: "time" },
    { es: "si te queda bien", en: "if it works for you", category: "other" },
    { es: "cerca del centro", en: "near downtown", category: "other" },
    { es: "esta semana", en: "this week", category: "time" },
  ],
  nuance: [
    { es: "en mi caso", en: "in my case", category: "other" },
    { es: "depende del día", en: "it depends on the day", category: "other" },
    { es: "más o menos", en: "more or less", category: "other" },
    { es: "no siempre", en: "not always", category: "other" },
    { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
  ],
  problems: [
    { es: "otra vez", en: "again", category: "other" },
    { es: "desde ayer", en: "since yesterday", category: "time" },
    { es: "sin avisar", en: "without warning", category: "other" },
    { es: "en la escuela", en: "at school", category: "other" },
    { es: "con la cuenta", en: "with the bill", category: "other" },
  ],
  feelings: [
    { es: "de verdad", en: "for real", category: "other" },
    { es: "mucho", en: "a lot", category: "other" },
    { es: "últimamente", en: "lately", category: "time" },
    { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
    { es: "contigo", en: "with you", category: "other" },
  ],
  conversation: [
    { es: "la verdad", en: "honestly", category: "other" },
    { es: "por cierto", en: "by the way", category: "other" },
    { es: "un ratito", en: "for a little while", category: "time" },
    { es: "cuando quieras", en: "whenever you want", category: "time" },
    { es: "la próxima semana", en: "next week", category: "time" },
  ],
};

function poolForDay(day: number): typeof FRAGMENTS.stories {
  if (day <= 42) return FRAGMENTS.stories;
  if (day <= 49) return FRAGMENTS.describe;
  if (day <= 56) return FRAGMENTS.advice;
  if (day <= 63) return FRAGMENTS.plans;
  if (day <= 70) return FRAGMENTS.nuance;
  if (day <= 77) return FRAGMENTS.problems;
  if (day <= 84) return FRAGMENTS.feelings;
  return FRAGMENTS.conversation;
}

function stemBase(stem: string): string {
  return stem.replace(/…+$/, "").trim();
}

function completionEs(stem: string, example: string): string {
  const base = stemBase(stem);
  let text = example.replace(/\.$/, "").trim();
  if (text.toLowerCase().startsWith(base.toLowerCase())) {
    text = text.slice(base.length).trim();
  }
  if (!text) return example.replace(/\.$/, "").trim().toLowerCase();
  return text.charAt(0).toLowerCase() + text.slice(1);
}

const EN_PREFIXES = [
  /^first,?\s+/i,
  /^first\s+/i,
  /^after that,?\s+/i,
  /^then,?\s+/i,
  /^in the end,?\s+/i,
  /^suddenly,?\s+/i,
  /^it turns out that\s+/i,
  /^it was\s+/i,
  /^i was\s+/i,
  /^there (?:was|were)\s+/i,
  /^the weather was\s+/i,
  /^every day,?\s+/i,
  /^i went to\s+/i,
  /^i saw\s+/i,
  /^i met\s+/i,
  /^something\s+/i,
  /^while\s+/i,
  /^just when\s+/i,
  /^at that moment,?\s+/i,
  /^and then,?\s+/i,
  /^i thought\s+/i,
  /^guess what\??\s+/i,
  /^the best part was\s+/i,
  /^all in all,?\s+/i,
  /^i('m| am) so glad that\s+/i,
  /^congratulations on\s+/i,
  /^i('m| am) happy for\s+/i,
  /^no way!?\s*tell me\s+/i,
  /^how exciting\.?\s+/i,
  /^i('m| am) so sorry about\s+/i,
  /^how hard\.?\s+/i,
  /^i hope\s+/i,
  /^count on me for\s+/i,
  /^i agree with\s+/i,
  /^you('re| are) right about\s+/i,
  /^of course\s+/i,
  /^me too\.?\s+/i,
  /^yes, but\s+/i,
  /^it depends on\s+/i,
  /^really\??\s+/i,
  /^tell me more about\s+/i,
  /^you('re| are) doing\s+/i,
  /^don('t| not) worry about\s+/i,
];

function englishGloss(full: string): string {
  let text = full.replace(/\.$/, "").trim();
  for (const re of EN_PREFIXES) {
    if (re.test(text)) {
      text = text.replace(re, "");
      break;
    }
  }
  text = text.replace(/^i\s+/i, "").replace(/^it's\s+/i, "");
  if (text.length > 0) {
    text = text.charAt(0).toLowerCase() + text.slice(1);
  }
  return text || full.toLowerCase();
}

/** English gloss for frame examples that aren't the primary prompt sentence. */
function fallbackEn(stem: string, example: string, scenario: string): string {
  const es = completionEs(stem, example);
  const pairs: [RegExp, string][] = [
    [/desayun/i, "had a calm breakfast"],
    [/revis[eé].*mensajes/i, "checked my messages"],
    [/llam[eé].*amiga/i, "called a friend"],
    [/prepar[eé].*cena/i, "made dinner"],
    [/vimos.*pel[ií]cula/i, "watched a movie"],
    [/salimos.*caminar/i, "went out for a walk"],
    [/decidimos/i, "we decided to stay home"],
    [/llegu[eé].*tiempo/i, "I made it on time"],
    [/empez[oó].*llover/i, "it started to rain"],
    [/se fue la luz/i, "the power went out"],
    [/empezaron.*aplaudir/i, "everyone started clapping"],
    [/nerviosa/i, "nervous but happy"],
    [/lloviendo/i, "raining and I had no umbrella"],
    [/much[ao] gente/i, "a lot of people"],
    [/fila/i, "a long line"],
    [/m[uú]sica/i, "music everywhere"],
    [/calor/i, "very hot"],
    [/fr[ií]o/i, "freezing cold"],
    [/a[nñ]os que no/i, "years since I last visited"],
    [/nad[aá]bamos/i, "we swam in the lake every day"],
    [/mismo tren/i, "I took the same train every day"],
    [/abuela.*caf[eé]/i, "grandma made coffee at six"],
    [/concierto/i, "went to a concert in the park"],
    [/visit[eé].*amiga/i, "visited a friend in Providence"],
    [/m[eé]dico/i, "finally went to the doctor"],
    [/ballena/i, "saw a whale from the boat"],
    [/vecin/i, "ran into my neighbor at the market"],
    [/documental/i, "watched a great documentary last night"],
    [/padres.*estudiante/i, "met my student's parents"],
    [/desarrolladora/i, "met a developer from Medellín"],
    [/chistoso/i, "something funny happened on the train"],
    [/raro/i, "something weird happened this morning"],
    [/incre[ií]ble/i, "something incredible — I have to tell you"],
  ];
  for (const [re, en] of pairs) {
    if (re.test(example) || re.test(es)) return en;
  }
  if (scenario) {
    return scenario.charAt(0).toLowerCase() + scenario.slice(1);
  }
  return es;
}

function guessCategory(es: string): Category {
  const s = es.toLowerCase();
  if (/(café|comer|cena|restaurante|desayun|almorz|comida|té|mesa)/.test(s)) return "food";
  if (/(mañana|tarde|noche|semana|hoy|ayer|minuto|hora|día|verano|invierno|lunes|sábado)/.test(s)) return "time";
  if (/(creo|pienso|parece|opino|mejor|peor|importante)/.test(s)) return "opinion";
  if (/\b(hablar|practicar|aprender|salir|caminar|viajar|trabajar|estudiar|ir|venir|hacer)\b/.test(s)) return "activity";
  return "other";
}

function pickHints(completions: { es: string; en: string }[]) {
  const que = completions.slice(0, 3).map((c) => ({ es: c.es, en: c.en }));
  const hints: { que: typeof que; cuando?: typeof que } = { que };
  const time = completions.filter((c) => guessCategory(c.es) === "time").slice(0, 2);
  if (time.length) hints.cuando = time.map((c) => ({ es: c.es, en: c.en }));
  return hints;
}

function esc(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function emitDay(dayNum: number) {
  const fd = frameDays.find((d) => d.day === dayNum);
  const sd = speakDays.find((d) => d.day === dayNum);
  if (!fd || !sd) throw new Error(`Missing day ${dayNum}`);

  const lines: string[] = [];
  lines.push("  {");
  lines.push(`    day: ${dayNum},`);
  lines.push(`    theme: "${esc(fd.theme)}",`);
  lines.push("    stems: [");

  const pool = poolForDay(dayNum);
  let fragIdx = 0;

  fd.frames.forEach((frame, fi) => {
    const prompt = sd.prompts.find((p) => p.frameStem === frame.stem);
    const seen = new Set<string>();
    const completions: { es: string; en: string; category: Category }[] = [];

    for (const example of frame.examples) {
      const es = completionEs(frame.stem, example);
      if (seen.has(es)) continue;
      seen.add(es);
      let en = frame.scenarios[completions.length] ?? "…";
      if (prompt && prompt.spanish === example) {
        en = englishGloss(prompt.english);
      } else {
        en = fallbackEn(frame.stem, example, frame.scenarios[completions.length] ?? "");
      }
      completions.push({ es, en, category: guessCategory(es) });
    }

    while (completions.length < 5) {
      const frag = pool[(fragIdx + fi + dayNum) % pool.length];
      fragIdx += 1;
      if (!seen.has(frag.es)) {
        seen.add(frag.es);
        completions.push(frag);
      }
    }

    const hints = pickHints(completions);

    lines.push("      {");
    lines.push(`        stem: "${esc(frame.stem)}",`);
    lines.push(`        english: "${esc(frame.english)}",`);
    lines.push("        hints: {");
    lines.push(`          que: [`);
    hints.que?.forEach((h) => {
      lines.push(`            { es: "${esc(h.es)}", en: "${esc(h.en)}" },`);
    });
    lines.push("          ],");
    if (hints.cuando) {
      lines.push(`          cuando: [`);
      hints.cuando.forEach((h) => {
        lines.push(`            { es: "${esc(h.es)}", en: "${esc(h.en)}" },`);
      });
      lines.push("          ],");
    }
    lines.push("        },");
    lines.push("        completions: [");
    completions.forEach((c) => {
      lines.push(
        `          { es: "${esc(c.es)}", en: "${esc(c.en)}", category: "${c.category}" },`,
      );
    });
    lines.push("        ],");
    lines.push("      },");
  });

  lines.push("    ],");
  lines.push("  },");
  return lines.join("\n");
}

const start = Number(process.argv[2] ?? 36);
const end = Number(process.argv[3] ?? 91);

for (let d = start; d <= end; d++) {
  console.log(emitDay(d));
}
