"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Gloss } from "@/components/Gloss";
import { PlayButton } from "@/components/PlayButton";
import { frameDays } from "@/content/frames";
import { speakDays } from "@/content/prompts";
import { playbackRateFor, useAudioSpeed } from "@/hooks/useAudioSpeed";
import { resolveAudioUrl } from "@/lib/audio";
import {
  flagForPractice,
  listPracticeFlags,
  unflagForPractice,
} from "@/lib/store";

/**
 * Sin mirar — cued production, the drill for recall rather than recognition.
 *
 * Reading a stem and knowing what it means is recognition, and recognition is
 * not the thing that fails in conversation. This runs the week the other way:
 * English gloss first, say the Spanish out loud, then reveal and judge whether
 * it came out on its own or you had to build it. Building counts as a miss.
 *
 * Misses go into the shared practice list (see lib/store.ts) — the same one the
 * "Quiero practicarla" reflection writes to — so the two kinds of "needs work"
 * pool together and resurface here.
 *
 * Deliberately not a game: no score, no timer, no streak. The output is a list
 * of stems, not a number to beat.
 *
 * "Sin manos" runs the same cards hands-free: a beat on the English gloss,
 * then reveal + audio, then on. You can still tap Lo armé when the answer
 * shows — same practice list as the hand-run pass.
 */

type Card = { promptId: string; stem: string; english: string; day: number };

const THINK_MS = 6000;
/** Beat after audio so you can flag before the next card. */
const FLAG_MS = 2500;

const ws = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Unique stems for the week, first occurrence wins — repaso repeats aren't re-drilled. */
function cardsForWeek(dayNums: number[]): Card[] {
  const seen = new Set<string>();
  const cards: Card[] = [];
  for (const d of dayNums) {
    const frame = frameDays[d - 1];
    const speak = speakDays[d - 1];
    frame.frames.forEach((f, i) => {
      if (seen.has(f.stem)) return;
      seen.add(f.stem);
      cards.push({ promptId: speak.prompts[i].id, stem: f.stem, english: f.english, day: d });
    });
  }
  return cards;
}

/** Fisher–Yates. Order matters: going down the page lets you ride the sequence. */
function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

/** Waits while hands-free is paused; returns false if the session ended. */
async function waitWhilePaused(active: () => boolean, paused: () => boolean) {
  while (paused() && active()) {
    await sleep(200);
  }
  return active();
}

/** Countdown that respects pause and stop. */
async function delayMs(
  ms: number,
  active: () => boolean,
  paused: () => boolean,
) {
  const step = 200;
  let left = ms;
  while (left > 0) {
    if (!(await waitWhilePaused(active, paused))) return false;
    const chunk = Math.min(step, left);
    await sleep(chunk);
    left -= chunk;
  }
  return active();
}

/** Play to end, pausing/resuming with the session. */
async function playToEnd(
  audio: HTMLAudioElement,
  active: () => boolean,
  paused: () => boolean,
) {
  await new Promise<void>((resolve, reject) => {
    audio.onended = () => resolve();
    audio.onerror = () => reject(new Error("playback"));

    audio.play().catch(reject);

    (async () => {
      while (!audio.ended && active()) {
        if (!(await waitWhilePaused(active, paused))) {
          audio.pause();
          resolve();
          return;
        }
        if (paused()) audio.pause();
        else if (audio.paused) {
          try {
            await audio.play();
          } catch {
            reject(new Error("playback"));
            return;
          }
        }
        await sleep(200);
      }
      resolve();
    })();
  });
}

export function StemRecall({ dayNums }: { dayNums: number[] }) {
  const all = useMemo(() => cardsForWeek(dayNums), [dayNums]);
  const { speed } = useAudioSpeed();

  const [queue, setQueue] = useState<Card[] | null>(null);
  const [pos, setPos] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [missed, setMissed] = useState<Card[]>([]);
  const [flagged, setFlagged] = useState<string[]>([]);
  const [handsFree, setHandsFree] = useState(false);
  const [handsFreePaused, setHandsFreePaused] = useState(false);
  const [sessionHandsFree, setSessionHandsFree] = useState(false);
  const [reviewQueue, setReviewQueue] = useState<Card[] | null>(null);
  const [reviewPos, setReviewPos] = useState(0);

  const handsFreeRef = useRef(false);
  const pausedRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);
  const rateRef = useRef(playbackRateFor(speed));

  // The standing list, so misses from a past pass (and "Quiero practicarla"
  // picks from the week's sentences) are visible before the drill starts.
  const syncFlags = useCallback(() => setFlagged(listPracticeFlags()), []);
  useEffect(() => {
    syncFlags();
  }, [syncFlags]);

  useEffect(() => {
    rateRef.current = playbackRateFor(speed);
    if (audioRef.current) audioRef.current.playbackRate = rateRef.current;
  }, [speed]);

  useEffect(() => {
    return () => {
      handsFreeRef.current = false;
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const standing = useMemo(() => {
    const ids = new Set(flagged);
    return all.filter((c) => ids.has(c.promptId));
  }, [all, flagged]);

  function stopAudio() {
    audioRef.current?.pause();
  }

  function isHandsFreeActive() {
    return handsFreeRef.current;
  }

  function isPaused() {
    return pausedRef.current;
  }

  function setPaused(paused: boolean) {
    pausedRef.current = paused;
    setHandsFreePaused(paused);
    if (paused) stopAudio();
  }

  function togglePause() {
    setPaused(!pausedRef.current);
  }

  async function playStem(text: string) {
    if (!audioRef.current) {
      const el = new Audio();
      el.preload = "auto";
      audioRef.current = el;
    }
    const audio = audioRef.current;
    const { url, objectUrl } = await resolveAudioUrl(text);
    if (!handsFreeRef.current) {
      if (objectUrl) URL.revokeObjectURL(url);
      return;
    }
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    objectUrlRef.current = objectUrl ? url : null;

    audio.src = url;
    audio.playbackRate = rateRef.current;
    try {
      await playToEnd(audio, isHandsFreeActive, isPaused);
    } catch {
      // One bad clip shouldn't end the pass — carry on.
    }
  }

  function begin(cards: Card[], opts?: { handsFree?: boolean }) {
    const hf = opts?.handsFree ?? false;
    handsFreeRef.current = hf;
    pausedRef.current = false;
    setHandsFree(hf);
    setHandsFreePaused(false);
    setSessionHandsFree(hf);
    setQueue(shuffle(cards));
    setPos(0);
    setRevealed(false);
    setMissed([]);
  }

  function stop() {
    handsFreeRef.current = false;
    pausedRef.current = false;
    setHandsFree(false);
    setHandsFreePaused(false);
    setSessionHandsFree(false);
    stopAudio();
    setQueue(null);
    setReviewQueue(null);
    setReviewPos(0);
  }

  function beginReview(cards: Card[]) {
    stopAudio();
    setReviewQueue(cards);
    setReviewPos(0);
  }

  function advanceReview() {
    if (!reviewQueue) return;
    if (reviewPos + 1 >= reviewQueue.length) {
      setReviewQueue(null);
      setReviewPos(0);
      return;
    }
    setReviewPos((p) => p + 1);
  }

  useEffect(() => {
    if (!handsFree || !queue) return;

    let cancelled = false;

    async function run() {
      for (let p = 0; p < queue!.length; p += 1) {
        if (cancelled || !handsFreeRef.current) return;

        setPos(p);
        setRevealed(false);
        if (!(await delayMs(THINK_MS, isHandsFreeActive, isPaused))) return;
        if (cancelled || !handsFreeRef.current) return;

        setRevealed(true);
        try {
          await playStem(queue![p].stem);
        } catch {
          // One bad clip shouldn't end the pass — carry on.
        }
        if (!(await delayMs(FLAG_MS, isHandsFreeActive, isPaused))) return;
        if (cancelled || !handsFreeRef.current) return;
      }

      if (!cancelled && handsFreeRef.current) {
        handsFreeRef.current = false;
        setHandsFree(false);
        setPos(queue!.length);
      }
    }

    run();

    return () => {
      cancelled = true;
      stopAudio();
    };
  }, [handsFree, queue]);

  function judge(arrived: boolean) {
    const card = queue![pos];
    // Written per card rather than at the end, so quitting halfway still counts.
    if (arrived) unflagForPractice(card.promptId);
    else flagMiss(card);
    syncFlags();
    setRevealed(false);
    setPos((p) => p + 1);
  }

  function flagMiss(card: Card) {
    if (!listPracticeFlags().includes(card.promptId)) flagForPractice(card.promptId);
    setMissed((m) => (m.some((c) => c.promptId === card.promptId) ? m : [...m, card]));
  }

  function unflagMiss(card: Card) {
    unflagForPractice(card.promptId);
    setMissed((m) => m.filter((c) => c.promptId !== card.promptId));
  }

  function toggleMiss(card: Card) {
    if (listPracticeFlags().includes(card.promptId)) unflagMiss(card);
    else flagMiss(card);
    syncFlags();
  }

  const running = queue !== null && pos < queue.length;
  const finished = queue !== null && pos >= queue.length;
  const reviewing = reviewQueue !== null && reviewPos < reviewQueue.length;

  /* ---------- End-of-session repaso ---------- */
  if (reviewing) {
    const card = reviewQueue![reviewPos];
    return (
      <div>
        <p className="mono-cap" style={{ color: "var(--ink-mute)" }}>
          Repaso · {reviewPos + 1} de {reviewQueue!.length}
        </p>
        <Gloss>{`Review · ${reviewPos + 1} of ${reviewQueue!.length}`}</Gloss>

        <div className="stem-recall-card">
          <p className="stem-recall-card__stem">{card.stem}</p>
          <p className="stem-recall-card__english" style={{ marginTop: 10 }}>
            {card.english}
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
            <PlayButton text={card.stem} label={`Escuchar: ${card.stem}`} />
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
          <button type="button" onClick={advanceReview} className="btn-primary">
            <span className="lab">{reviewPos + 1 >= reviewQueue!.length ? "Listo" : "Siguiente"}</span>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => {
              setReviewQueue(null);
              setReviewPos(0);
            }}
            className="mono-cap transition-colors hover:text-accent"
            style={{ minHeight: 44, padding: "0 6px", color: "var(--ink-soft)", background: "transparent" }}
          >
            Saltar
            <Gloss>Skip review</Gloss>
          </button>
        </div>
      </div>
    );
  }

  /* ---------- Idle ---------- */
  if (!running && !finished) {
    return (
      <div>
        <Intro count={all.length} />
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <StartMode label="Empezar" en="By hand" onClick={() => begin(all)} />
          <StartMode label="Sin manos" en="Hands-free" onClick={() => begin(all, { handsFree: true })} />
        </div>
        {standing.length > 0 && (
          <Standing
            cards={standing}
            onDrill={() => begin(standing)}
            onReview={() => beginReview(standing)}
          />
        )}
      </div>
    );
  }

  /* ---------- Running ---------- */
  if (running) {
    const card = queue[pos];
    const cardFlagged =
      flagged.includes(card.promptId) || missed.some((m) => m.promptId === card.promptId);
    return (
      <div>
        {handsFree ? (
          <HandsFreeBar
            pos={pos}
            total={queue.length}
            paused={handsFreePaused}
            onTogglePause={togglePause}
            onEnd={stop}
          />
        ) : (
          <p className="mono-cap" style={{ color: "var(--ink-mute)" }}>
            {pos + 1} de {queue.length}
          </p>
        )}

        <div className="stem-recall-card">
          {!revealed && (
            <span className="mono-cap stem-recall-card__hint">
              Dilo en voz alta{handsFree ? "…" : "."}
            </span>
          )}

          <p className="stem-recall-card__english">{card.english}</p>

          {revealed ? (
            <>
              <p className="stem-recall-card__stem">{card.stem}</p>
              {!handsFree && (
                <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap", justifyContent: "center" }}>
                  <Judge label="Salió solo" en="It came out on its own" tone="zone" onClick={() => judge(true)} />
                  <Judge label="Lo armé" en="I had to build it" tone="mute" onClick={() => judge(false)} />
                </div>
              )}
              {handsFree && (
                <div style={{ display: "flex", justifyContent: "center", marginTop: 22 }}>
                  <FlagMiss flagged={cardFlagged} onToggle={() => toggleMiss(card)} />
                </div>
              )}
            </>
          ) : (
            !handsFree && (
              <button
                type="button"
                onClick={() => setRevealed(true)}
                className="stem-recall-reveal"
              >
                <span className="stem-recall-reveal-label">Ver la respuesta</span>
                <Gloss>Show answer</Gloss>
              </button>
            )
          )}
        </div>

        {!handsFree && (
          <button
            type="button"
            onClick={stop}
            className="mono-cap transition-colors hover:text-accent"
            style={{ marginTop: 14, minHeight: 44, color: "var(--ink-mute)", background: "transparent" }}
          >
            Dejarlo aquí
            <Gloss>Stop here</Gloss>
          </button>
        )}
      </div>
    );
  }

  /* ---------- Finished ---------- */
  const total = queue.length;

  if (sessionHandsFree) {
    return (
      <div>
        <p className="stem-recall-done">Hecho. {total} comienzos.</p>
        <Gloss>{`Done. ${total} stems.`}</Gloss>

        {missed.length === 0 ? (
          <p className="stem-recall-body">
            Nada que marcar esta vuelta.
          </p>
        ) : (
          <>
            <p className="stem-recall-body">
              {missed.length} en tu lista — repásalos cuando quieras.
            </p>
            <Gloss>
              {`${missed.length} on your list — review them whenever you like.`}
            </Gloss>
            <StemList cards={missed} />
          </>
        )}

        <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
          {missed.length > 0 && (
            <button type="button" onClick={() => beginReview(missed)} className="btn-primary">
              <span className="lab">Repasar estos</span>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          )}
          <button
            type="button"
            onClick={() => begin(all, { handsFree: true })}
            className={missed.length > 0 ? "mono-cap transition-colors hover:text-accent" : "btn-primary"}
            style={
              missed.length > 0
                ? {
                    minHeight: 44,
                    padding: "0 16px",
                    color: "var(--zone)",
                    background: "transparent",
                    border: "1px solid color-mix(in oklab, var(--zone) 40%, transparent)",
                    borderRadius: 9,
                    cursor: "pointer",
                  }
                : undefined
            }
          >
            {missed.length > 0 ? (
              <>
                Otra vuelta
                <Gloss>Run again</Gloss>
              </>
            ) : (
              <>
                <span className="lab">Otra vuelta</span>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
                  <path d="M4 12a8 8 0 1 1 2.5 5.8M4 18v-4h4" />
                </svg>
              </>
            )}
          </button>
          <button
            type="button"
            onClick={stop}
            className="mono-cap transition-colors hover:text-accent"
            style={{ minHeight: 44, padding: "0 6px", color: "var(--ink-soft)", background: "transparent" }}
          >
            Listo
          </button>
        </div>
      </div>
    );
  }

  const arrived = total - missed.length;
  return (
    <div>
      <p className="stem-recall-done">{arrived} de {total} salieron solos.</p>
      <Gloss>{`${arrived} of ${total} came out on their own`}</Gloss>

      {missed.length === 0 ? (
        <p className="stem-recall-body">
          Nada que marcar. La semana ya está en la punta de la lengua.
        </p>
      ) : (
        <>
          <p className="stem-recall-body">
            Ya están en tu lista — los verás la próxima vez que abras Sin mirar.
            Repásalos ahora si quieres.
          </p>
          <Gloss>
            Saved to your practice list — they&apos;ll show up next time. Review them now if you like.
          </Gloss>
          <StemList cards={missed} />
        </>
      )}

      <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
        {missed.length > 0 && (
          <>
            <button type="button" onClick={() => beginReview(missed)} className="btn-primary">
              <span className="lab">Repasar estos</span>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => begin(missed)}
              className="mono-cap transition-colors hover:text-accent"
              style={{
                minHeight: 44,
                padding: "0 16px",
                color: "var(--zone)",
                background: "transparent",
                border: "1px solid color-mix(in oklab, var(--zone) 40%, transparent)",
                borderRadius: 9,
                cursor: "pointer",
              }}
            >
              Otra vuelta
              <Gloss>Drill again</Gloss>
            </button>
          </>
        )}
        <button
          type="button"
          onClick={stop}
          className="mono-cap transition-colors hover:text-accent"
          style={{ minHeight: 44, padding: "0 6px", color: "var(--ink-soft)", background: "transparent" }}
        >
          Listo
        </button>
      </div>
    </div>
  );
}

function Intro({ count }: { count: number }) {
  return (
    <>
      <p className="stem-recall-intro-title">
        Del inglés al español, en voz alta, sin mirar.
      </p>
      <Gloss>From English to Spanish, out loud, without looking</Gloss>
      <p className="stem-recall-body">
        Los {count} comienzos en orden aleatorio. Si tuviste que armarlo, pulsa
        Lo armé — queda en tu lista y lo repasas al final. O ponla sin manos:
        la respuesta y el audio siguen solas — y puedes marcar Lo armé cuando salga.
      </p>
      <Gloss>
        {`All ${count} stems, shuffled. If you had to build it, tap I built it — it goes on your list for review at the end. Or run hands-free: answer and audio on their own, and you can still flag I built it when it appears.`}
      </Gloss>
    </>
  );
}

function StartMode({
  label,
  en,
  onClick,
}: {
  label: string;
  en: string;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className="stem-recall-start">
      <span className="stem-recall-start-label">{label}</span>
      <Gloss>{en}</Gloss>
    </button>
  );
}

function HandsFreeBar({
  pos,
  total,
  paused,
  onTogglePause,
  onEnd,
}: {
  pos: number;
  total: number;
  paused: boolean;
  onTogglePause: () => void;
  onEnd: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 10,
        padding: "12px 14px",
        background: "var(--surface)",
        border: "1px solid var(--rule)",
        borderRadius: 14,
      }}
    >
      <button
        type="button"
        onClick={onTogglePause}
        aria-label={paused ? "Continuar sin manos" : "Pausar sin manos"}
        className="inline-flex shrink-0 items-center justify-center rounded-full transition-colors active:bg-surface-sunk"
        style={{
          width: 48,
          height: 48,
          border: "2px solid var(--zone)",
          color: "var(--zone)",
        }}
      >
        {paused ? (
          <svg viewBox="0 0 16 16" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M5 3.5v9l7-4.5z" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" className="h-5 w-5 fill-current" aria-hidden>
            <rect x="4" y="3" width="3" height="10" rx="1" />
            <rect x="9" y="3" width="3" height="10" rx="1" />
          </svg>
        )}
      </button>

      <span style={{ minWidth: 0, flex: 1 }}>
        <span className="mono-cap" style={{ color: "var(--zone)" }}>
          Sin manos · {pos + 1} de {total}
        </span>
        <Gloss>{paused ? "Paused · tap to continue" : "Hands-free · tap to pause"}</Gloss>
      </span>

      <button
        type="button"
        onClick={onEnd}
        className="mono-cap shrink-0 transition-colors hover:text-accent"
        style={{
          minHeight: 44,
          padding: "0 12px",
          color: "var(--ink-soft)",
          background: "transparent",
          border: "1px solid color-mix(in oklab, var(--ink-soft) 35%, transparent)",
          borderRadius: 9,
          cursor: "pointer",
        }}
      >
        Terminar
        <Gloss>End</Gloss>
      </button>
    </div>
  );
}

function FlagMiss({ flagged, onToggle }: { flagged: boolean; onToggle: () => void }) {
  const color = flagged ? "var(--zone)" : "var(--ink-soft)";
  return (
    <button
      type="button"
      onClick={onToggle}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        minHeight: 44,
        padding: "9px 18px",
        borderRadius: 10,
        border: `1px solid color-mix(in oklab, ${color} 40%, transparent)`,
        background: flagged ? "color-mix(in oklab, var(--zone) 8%, transparent)" : "transparent",
        color,
        cursor: "pointer",
      }}
    >
      <span className="stem-recall-judge-label">{flagged ? "En la lista" : "Lo armé"}</span>
      <Gloss>{flagged ? "On your list · tap to remove" : "I had to build it"}</Gloss>
    </button>
  );
}

function Judge({
  label,
  en,
  tone,
  onClick,
}: {
  label: string;
  en: string;
  tone: "zone" | "mute";
  onClick: () => void;
}) {
  const color = tone === "zone" ? "var(--zone)" : "var(--ink-soft)";
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        minHeight: 44,
        padding: "9px 18px",
        borderRadius: 10,
        border: `1px solid color-mix(in oklab, ${color} 40%, transparent)`,
        background: "transparent",
        color,
        cursor: "pointer",
      }}
    >
      <span className="stem-recall-judge-label">{label}</span>
      <Gloss>{en}</Gloss>
    </button>
  );
}

function StemList({ cards }: { cards: Card[] }) {
  return (
    <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none" }}>
      {cards.map((c) => (
        <li
          key={c.promptId}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "7px 0",
            borderTop: "1px solid var(--rule)",
          }}
        >
          <PlayButton text={c.stem} label={`Escuchar: ${c.stem}`} />
          <span className="week-stems-stem" style={{ flex: 1, minWidth: 0 }}>
            {c.stem}
          </span>
          <span className="week-stems-gloss">
            {c.english}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Standing({
  cards,
  onDrill,
  onReview,
}: {
  cards: Card[];
  onDrill: () => void;
  onReview: () => void;
}) {
  return (
    <div style={{ marginTop: 26, paddingTop: 18, borderTop: "1px solid var(--rule)" }}>
      <span className="mono-cap" style={{ color: "var(--zone)" }}>
        En tu lista · {cards.length}
      </span>
      <Gloss>On your practice list from this week</Gloss>
      <StemList cards={cards} />
      <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={onReview}
          className="mono-cap transition-colors hover:text-accent"
          style={{
            minHeight: 44,
            padding: "0 14px",
            color: "var(--zone)",
            background: "transparent",
            border: "1px solid color-mix(in oklab, var(--zone) 40%, transparent)",
            borderRadius: 9,
            cursor: "pointer",
          }}
        >
          Repasar
          <Gloss>Review</Gloss>
        </button>
        <button
          type="button"
          onClick={onDrill}
          className="mono-cap transition-colors hover:text-accent"
          style={{
            minHeight: 44,
            padding: "0 14px",
            color: "var(--zone)",
            background: "transparent",
            border: "1px solid color-mix(in oklab, var(--zone) 40%, transparent)",
            borderRadius: 9,
            cursor: "pointer",
          }}
        >
          Solo estos
          <Gloss>Drill just these</Gloss>
        </button>
      </div>
    </div>
  );
}
