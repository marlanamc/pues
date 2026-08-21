import { describe, it, expect } from "vitest";
import {
  vocabThemes,
  vocabWords,
  VOCAB_TOTAL,
  wordById,
  themeBySlug,
  wordIdsForTheme,
} from "@/content/vocab";
import { frameDays } from "@/content/frames";
import { speakDays } from "@/content/prompts";
import { readingDays } from "@/content/readings";
import { situations } from "@/content/situations";

/**
 * Shape guard for Las palabras. Unlike frames/prompts there is no index
 * alignment to enforce here — the coupling that matters is between an entry's
 * id and the progress map in lib/store.ts, so uniqueness and format are what
 * these tests defend.
 */

/**
 * Frozen per-theme counts. The first twenty-seven are the Fluent Forever 625;
 * preguntas / preposiciones / conectores are the glue added on top, pinned
 * the same way so a later pass can't quietly drop a card.
 */
const EXPECTED_COUNTS: Record<string, number> = {
  animales: 10,
  transporte: 13,
  lugares: 32,
  ropa: 12,
  colores: 11,
  gente: 30,
  trabajos: 17,
  sociedad: 37,
  arte: 6,
  bebidas: 8,
  comida: 28,
  casa: 36,
  electronica: 12,
  cuerpo: 31,
  naturaleza: 33,
  materiales: 12,
  medidas: 14,
  varios: 17,
  direcciones: 17,
  estaciones: 5,
  numeros: 58,
  meses: 12,
  dias: 7,
  tiempo: 12,
  verbos: 82,
  adjetivos: 64,
  pronombres: 8,
  preguntas: 8,
  preposiciones: 13,
  conectores: 7,
};

const EXPECTED_TOTAL = Object.values(EXPECTED_COUNTS).reduce((a, b) => a + b, 0);

/**
 * Themes whose examples inflect the headword — "construir" appears as
 * "construyendo", "viejo" as "vieja", "negro" as "negra". A stem-prefix hack
 * would give false negatives on irregulars (ir → voy) and false positives
 * everywhere else, so containment is simply not checked here. Colors are in
 * the list because they are adjectives wearing a different name. Review
 * carries these five.
 */
const INFLECTING_THEMES = new Set([
  "verbos",
  "adjetivos",
  "colores",
  "pronombres",
  "numeros",
]);

/**
 * Headwords that legitimately appear twice in one theme, because English
 * splits a sense Spanish keeps together.
 */
const ALLOWED_HOMOGRAPHS: Record<string, string[]> = {
  adjetivos: ["alto", "bajo"],
  preposiciones: ["a"],
};

const ARTICLES = /^(el|la|los|las|un|una) /;

function fold(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function normalizeSentence(s: string): string {
  return fold(s).replace(/\s+/g, " ").replace(/[.!?¿¡]/g, "").trim();
}

describe("vocab theme structure", () => {
  it("has unique theme slugs", () => {
    const slugs = vocabThemes.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("matches the frozen per-theme word counts", () => {
    vocabThemes.forEach((t) => {
      expect(t.words.length, `theme ${t.slug}`).toBe(EXPECTED_COUNTS[t.slug]);
    });
  });

  it("covers exactly the frozen theme list", () => {
    expect(vocabThemes.map((t) => t.slug).sort()).toEqual(
      Object.keys(EXPECTED_COUNTS).sort(),
    );
  });

  it("totals the frozen count", () => {
    expect(VOCAB_TOTAL).toBe(EXPECTED_TOTAL);
    expect(vocabWords.length).toBe(EXPECTED_TOTAL);
  });

  it("gives every theme a Spanish label and an English gloss", () => {
    vocabThemes.forEach((t) => {
      expect(t.label.trim().length, `theme ${t.slug} label`).toBeGreaterThan(0);
      expect(t.labelEn.trim().length, `theme ${t.slug} labelEn`).toBeGreaterThan(0);
    });
  });
});

describe("vocab entry integrity", () => {
  it("has globally unique ids", () => {
    const ids = vocabWords.map((w) => w.id);
    const seen = new Set<string>();
    const dupes = ids.filter((id) => (seen.has(id) ? true : (seen.add(id), false)));
    expect(dupes, "duplicate ids").toEqual([]);
  });

  it("prefixes every id with v-<its own theme slug>-", () => {
    vocabThemes.forEach((t) => {
      t.words.forEach((w) => {
        expect(w.id, `${t.slug}: ${w.es}`).toMatch(
          new RegExp(`^v-${t.slug}-[a-z0-9-]+$`),
        );
      });
    });
  });

  it("has no empty fields", () => {
    vocabWords.forEach((w) => {
      expect(w.es.trim().length, `${w.id} es`).toBeGreaterThan(0);
      expect(w.en.trim().length, `${w.id} en`).toBeGreaterThan(0);
      expect(w.example.trim().length, `${w.id} example`).toBeGreaterThan(0);
      expect(w.exampleEn.trim().length, `${w.id} exampleEn`).toBeGreaterThan(0);
    });
  });

  it("keeps headwords to a single word or phrase, never a slash pair", () => {
    // "el maestro / la maestra" breaks TTS, overflows the recall card, and has
    // no honest id. One headword per entry.
    vocabWords.forEach((w) => {
      expect(w.es, `${w.id} es`).not.toContain("/");
    });
  });

  it("ends every example with terminal punctuation", () => {
    vocabWords.forEach((w) => {
      expect(w.example, `${w.id} example`).toMatch(/[.!?]$/);
    });
  });

  it("keeps examples short enough to say in one breath", () => {
    vocabWords.forEach((w) => {
      const words = w.example.trim().split(/\s+/).length;
      expect(words, `${w.id}: "${w.example}"`).toBeLessThanOrEqual(14);
    });
  });

  it("uses the headword in its own example, for non-inflecting themes", () => {
    vocabThemes.forEach((t) => {
      if (INFLECTING_THEMES.has(t.slug)) return;
      t.words.forEach((w) => {
        const head = fold(w.es).replace(ARTICLES, "");
        expect(fold(w.example), `${w.id} should use "${head}"`).toContain(head);
      });
    });
  });

  it("has no undocumented duplicate headword within a theme", () => {
    // Case-sensitive on purpose: "la Tierra" (the planet) and "la tierra"
    // (soil) differ only in capitalization and both belong in naturaleza.
    //
    // ALLOWED_HOMOGRAPHS is the short list of places where the source list
    // splits an English pair that Spanish does not: tall/high are both *alto*,
    // short/low are both *bajo*. Two cards with the same answer is the honest
    // outcome there — inventing a synonym to satisfy this test would teach a
    // word nobody uses. Any duplicate NOT on this list is an authoring slip.
    vocabThemes.forEach((t) => {
      const allowed = ALLOWED_HOMOGRAPHS[t.slug] ?? [];
      const counts = new Map<string, number>();
      t.words.forEach((w) => {
        const head = w.es.trim();
        counts.set(head, (counts.get(head) ?? 0) + 1);
      });
      const unexpected = [...counts.entries()]
        .filter(([head, n]) => n > 1 && !allowed.includes(head))
        .map(([head, n]) => `${head} ×${n}`);
      expect(unexpected, `theme ${t.slug}`).toEqual([]);
    });
  });

  it("gives every allowed homograph a distinct English gloss", () => {
    // The whole justification for a repeated headword is that the two cards
    // ask different questions. If the glosses matched too, one is a mistake.
    vocabThemes.forEach((t) => {
      (ALLOWED_HOMOGRAPHS[t.slug] ?? []).forEach((head) => {
        const glosses = t.words.filter((w) => w.es.trim() === head).map((w) => w.en);
        expect(glosses.length, `${t.slug}: "${head}" is no longer a homograph`)
          .toBeGreaterThan(1);
        expect(new Set(glosses).size, `${t.slug}: "${head}" glosses`).toBe(glosses.length);
      });
    });
  });

  it("has no duplicate example anywhere in the list", () => {
    const seen = new Map<string, string>();
    const dupes: string[] = [];
    vocabWords.forEach((w) => {
      const key = normalizeSentence(w.example);
      const prev = seen.get(key);
      if (prev) dupes.push(`${w.id} duplicates ${prev}: "${w.example}"`);
      else seen.set(key, w.id);
    });
    expect(dupes).toEqual([]);
  });
});

describe("vocab vs. the existing corpus", () => {
  /**
   * CURRICULUM.md convention 8 — no duplicate sentences. Built once at module
   * scope rather than per assertion: this is every Spanish string in content/,
   * and rebuilding it per entry would be 600 passes over the corpus.
   *
   * Exact match, not normalized: across ~10k strings, normalized matching
   * flags legitimately similar short sentences. The case that matters is an
   * example lifted verbatim from a dialogue, and that is exact.
   */
  const corpus = new Set<string>();
  frameDays.forEach((d) =>
    d.frames.forEach((f) => {
      f.examples.forEach((e) => corpus.add(e));
      f.scenarios.forEach((s) => corpus.add(s));
    }),
  );
  speakDays.forEach((d) => d.prompts.forEach((p) => corpus.add(p.spanish)));
  readingDays.forEach((d) => {
    d.vocab.forEach((v) => corpus.add(v.example));
    d.dialogue.lines.forEach((l) => corpus.add(l.es));
  });
  situations.forEach((s) => s.phrases?.forEach((p) => corpus.add(p.es)));

  it("built a non-trivial corpus to check against", () => {
    expect(corpus.size).toBeGreaterThan(1000);
  });

  it("introduces no example that already exists in content/", () => {
    const collisions = vocabWords
      .filter((w) => corpus.has(w.example))
      .map((w) => `${w.id}: "${w.example}"`);
    expect(collisions).toEqual([]);
  });
});

describe("vocab lookups", () => {
  it("resolves every word by id", () => {
    vocabWords.forEach((w) => {
      expect(wordById(w.id)?.es, w.id).toBe(w.es);
    });
  });

  it("returns undefined for an unknown id or slug", () => {
    expect(wordById("v-nope-nope")).toBeUndefined();
    expect(themeBySlug("nope")).toBeUndefined();
  });

  it("resolves every theme by slug, and its ids in authoring order", () => {
    vocabThemes.forEach((t) => {
      expect(themeBySlug(t.slug)?.label).toBe(t.label);
      expect(wordIdsForTheme(t.slug)).toEqual(t.words.map((w) => w.id));
    });
  });
});
