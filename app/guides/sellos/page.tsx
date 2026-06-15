import Link from "next/link";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { StampGlyph } from "@/components/LaLineaTimeline";
import {
  STAMP_GUIDE,
  type GuideEntry as GuideEntryData,
  type StampKind,
} from "@/content/laLinea";

const MONO = "var(--font-mono)";
const SERIF = "var(--font-display)";

// representative zone color for each stamp's hero glyph
const repZone: Record<StampKind, "past" | "present" | "future"> = {
  dot: "past",
  line: "present",
  dots: "present",
  arc: "present",
  wave: "future",
  diamond: "future",
};

function ZoneCell({
  kind,
  zone,
  label,
  form,
  ex,
  faint,
}: {
  kind: StampKind;
  zone: "past" | "present" | "future";
  label: string;
  form: string;
  ex: string;
  faint?: boolean;
}) {
  return (
    <div style={{ opacity: faint ? 0.5 : 1 }}>
      <div className="flex items-center gap-2 mb-1.5">
        <span
          className="flex items-center justify-center rounded-md border border-rule"
          style={{ width: 26, height: 26, background: "var(--bg)" }}
        >
          <StampGlyph kind={kind} size={20} color={`var(--${zone})`} />
        </span>
        <span style={{ fontFamily: MONO, fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase", color: `var(--${zone})` }}>{label}</span>
      </div>
      <p className="text-ink" style={{ fontSize: 12, fontWeight: 600, margin: "0 0 1px" }}>{form}</p>
      <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 12.5, color: "var(--ink-soft)", margin: 0 }}>{ex}</p>
    </div>
  );
}

function GuideEntry({ s, n }: { s: GuideEntryData; n: number }) {
  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{ background: "var(--surface)", border: `1px solid ${s.isNew ? "var(--accent)" : "var(--rule)"}` }}
    >
      <div className="flex items-center gap-3.5 mb-3">
        <span
          className="flex items-center justify-center rounded-xl border border-rule shrink-0"
          style={{ width: 50, height: 50, background: "var(--bg)" }}
        >
          <StampGlyph kind={s.kind} size={38} color={`var(--${repZone[s.kind]})`} />
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span style={{ fontFamily: MONO, fontSize: 10, color: "var(--ink-mute)" }}>{String(n).padStart(2, "0")}</span>
            <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 22, margin: 0, color: "var(--ink)" }}>{s.name}</h2>
            <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-mute)" }}>· {s.role}</span>
            {s.isNew && (
              <span className="ml-auto" style={{ fontFamily: MONO, fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-ink)", background: "var(--accent)", padding: "3px 7px", borderRadius: 999 }}>Nuevo</span>
            )}
          </div>
          <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: "4px 0 0" }}>{s.def}</p>
        </div>
      </div>

      {s.zones && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <ZoneCell kind={s.kind} zone="past" label="Antes" {...s.zones.past} />
          <ZoneCell kind={s.kind} zone="present" label="Ahora" {...s.zones.present} />
          <ZoneCell kind={s.kind} zone="future" label="Después" {...s.zones.future} />
        </div>
      )}

      {s.patterns && (
        <div className="flex flex-col gap-2.5">
          {s.patterns.map((p) => (
            <div key={p.label} className="flex items-center gap-3 flex-wrap">
              <span
                className="flex items-center justify-center rounded-md border border-rule shrink-0"
                style={{ width: 26, height: 26, background: "var(--bg)" }}
              >
                <StampGlyph kind={s.kind} size={20} color={`var(--${p.zone})`} />
              </span>
              <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: `var(--${p.zone})`, flex: "0 0 130px" }}>{p.label}</span>
              <span className="text-ink" style={{ fontSize: 12.5, fontWeight: 600 }}>{p.form}</span>
              <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: "var(--ink-soft)" }}>{p.ex}</span>
            </div>
          ))}
        </div>
      )}

      {s.examples && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {s.examples.map((e) => (
            <div key={e.form} className="rounded-lg border border-rule" style={{ background: "var(--bg)", padding: "10px 12px" }}>
              <p style={{ fontFamily: MONO, fontSize: 8.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-mute)", margin: "0 0 4px" }}>{e.form}</p>
              <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 14, color: "var(--ink)", margin: 0 }}>{e.ex}</p>
            </div>
          ))}
        </div>
      )}

      {s.note && (
        <div className="flex gap-2.5 items-baseline mt-3 pt-3" style={{ borderTop: "1px solid var(--rule)" }}>
          <span style={{ fontFamily: MONO, fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", flex: "0 0 auto" }}>{s.note.label}</span>
          <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--ink-soft)", margin: 0 }}>{s.note.text}</p>
        </div>
      )}
      {s.tip && (
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 12.5, color: "var(--ink-mute)", margin: "10px 0 0" }}>{s.tip}</p>
      )}
    </div>
  );
}

export default function SellosGuidePage() {
  return (
    <div className="space-y-6 lg:mx-auto lg:max-w-[680px]">
      <header className="flex items-center justify-between">
        <Link
          href="/guides"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Guías
        </Link>
        <p className="text-caption text-ink-mute">6 sellos</p>
        <SettingsMenuButton />
      </header>

      <section className="space-y-3">
        <p className="day-pill">El sistema completo</p>
        <h1 className="text-display-lg text-ink">Qué forma, qué color, qué tiempo.</h1>
        <p className="text-gloss">
          Cada sello con sus formas por zona, ejemplos y la regla que evita
          confusiones. El color es <em className="font-display italic">cuándo</em>;
          la forma es <em className="font-display italic">qué tipo</em> de acción.
        </p>
      </section>

      {/* zone color key */}
      <div className="flex flex-wrap gap-2.5">
        {([["past", "Antes"], ["present", "Ahora"], ["future", "Después"]] as const).map(([z, l]) => (
          <div key={z} className="flex items-center gap-2 rounded-full border border-rule" style={{ padding: "5px 11px" }}>
            <span style={{ width: 10, height: 10, borderRadius: 99, background: `var(--${z})` }} />
            <span style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-soft)" }}>{l}</span>
          </div>
        ))}
      </div>

      <details className="confusions-jump border-accent/30">
        <summary className="confusions-jump__summary">
          <span id="english-heading" className="text-caption text-accent normal-case tracking-normal">
            How this differs from English
          </span>
          <span className="confusions-jump__summary-hint">9 mappings</span>
        </summary>

        <div className="confusions-jump__panel space-y-4">
          <p className="text-sm text-ink-soft leading-relaxed">
            English names tenses mostly by <strong className="font-medium text-ink">when</strong>{" "}
            (past · present · future) plus <strong className="font-medium text-ink">aspect</strong>{" "}
            (simple · continuous · perfect). Spanish doesn&apos;t pack it that way. These sellos
            split by <strong className="font-medium text-ink">what kind of action</strong> (shape)
            and <strong className="font-medium text-ink">when</strong> (color). So there is no
            single &ldquo;present simple&rdquo; stamp — one English form often maps to several
            different shapes.
          </p>

          <ul className="space-y-3 text-sm leading-relaxed">
          {[
            {
              en: "Present simple (habit)",
              stamp: "Repetición · Ahora",
              ex: "tomo café todos los días",
              note: "Repeated routine",
            },
            {
              en: "Present simple (state)",
              stamp: "Presente",
              ex: "vivo en Boston",
              note: "Truth or ongoing state — not a stamp on its own",
            },
            {
              en: "Present continuous",
              stamp: "Línea · Ahora",
              ex: "estoy estudiando",
              note: "Action in progress right now",
            },
            {
              en: "Past simple",
              stamp: "Punto · Antes",
              ex: "ayer comí",
              note: "One finished moment",
            },
            {
              en: "Past continuous",
              stamp: "Línea · Antes",
              ex: "llovía, vivía en Madrid",
              note: "Background or ongoing past",
            },
            {
              en: "Present perfect",
              stamp: "Arco → Ahora",
              ex: "he comido",
              note: "Past linked to now",
            },
            {
              en: "Future simple",
              stamp: "Punto · Después",
              ex: "mañana comeré",
              note: "A real point in the future",
            },
            {
              en: "Subjunctive",
              stamp: "Onda",
              ex: "ojalá llueva",
              note: "English has no parallel tense — wish, doubt, emotion",
            },
            {
              en: "Would / conditional",
              stamp: "Rombo",
              ex: "iría contigo",
              note: "Possible but not actual",
            },
          ].map((row) => (
            <li key={row.en} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
              <span className="text-caption text-ink-mute shrink-0 sm:w-[9.5rem]">{row.en}</span>
              <span className="min-w-0 flex-1">
                <span className="text-ink">
                  <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent)" }}>
                    {row.stamp}
                  </span>
                  {" · "}
                  <span className="font-display italic">{row.ex}</span>
                </span>
                <span className="block text-ink-mute text-xs mt-0.5">{row.note}</span>
              </span>
            </li>
          ))}
        </ul>

          <p className="text-sm text-ink-soft leading-relaxed pt-1 border-t border-rule">
            <span className="text-caption text-accent block mb-1">The surprise</span>
            <em className="font-display not-italic">I eat breakfast every day</em> and{" "}
            <em className="font-display not-italic">I live in Boston</em>{" "}
            are both &ldquo;present
            simple&rdquo; in English — but Spanish treats the habit (Repetición) differently from
            the state (plain presente). And neither is a Punto: Punto at Ahora is rare — sudden
            reactions like <span className="font-display italic">¡ay, me caigo!</span>
          </p>
        </div>
      </details>

      <div className="flex flex-col gap-3.5">
        {STAMP_GUIDE.map((s, i) => (
          <GuideEntry key={s.kind} s={s} n={i + 1} />
        ))}
      </div>
    </div>
  );
}
