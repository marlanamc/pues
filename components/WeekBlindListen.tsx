"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Gloss } from "@/components/Gloss";
import { PlayButton } from "@/components/PlayButton";
import { playbackRateFor, useAudioSpeed } from "@/hooks/useAudioSpeed";
import { resolveAudioUrl } from "@/lib/audio";
import {
  flagForPractice,
  listPracticeFlags,
  unflagForPractice,
} from "@/lib/store";
import { shuffle } from "@/lib/shuffle";
import { sentencesForWeek, type WeekSentence } from "@/lib/weekSentences";

/**
 * Solo escuchar — blind listening with self-check, like Sin mirar for the ear.
 *
 * Escúchala lets you read along. Here you hear each model sentence with nothing
 * on screen, then say whether it landed. Misses join the same practice list as
 * Sin mirar and "Quiero practicarla."
 */

const ws = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WeekBlindListen({ dayNums }: { dayNums: number[] }) {
  const all = useMemo(() => sentencesForWeek(dayNums), [dayNums]);
  const { speed } = useAudioSpeed();

  const [queue, setQueue] = useState<WeekSentence[] | null>(null);
  const [pos, setPos] = useState(0);
  const [judging, setJudging] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [missed, setMissed] = useState<WeekSentence[]>([]);
  const [flagged, setFlagged] = useState<string[]>([]);
  const [reviewQueue, setReviewQueue] = useState<WeekSentence[] | null>(null);
  const [reviewPos, setReviewPos] = useState(0);

  const activeRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);
  const rateRef = useRef(playbackRateFor(speed));

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
      activeRef.current = false;
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const standing = useMemo(() => {
    const ids = new Set(flagged);
    return all.filter((s) => ids.has(s.promptId));
  }, [all, flagged]);

  function stopAudio() {
    audioRef.current?.pause();
  }

  async function playSpanish(text: string) {
    if (!audioRef.current) {
      const el = new Audio();
      el.preload = "auto";
      audioRef.current = el;
    }
    const audio = audioRef.current;
    const { url, objectUrl } = await resolveAudioUrl(text);
    if (!activeRef.current) {
      if (objectUrl) URL.revokeObjectURL(url);
      return;
    }
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    objectUrlRef.current = objectUrl ? url : null;

    audio.src = url;
    audio.playbackRate = rateRef.current;
    await new Promise<void>((resolve, reject) => {
      audio.onended = () => resolve();
      audio.onerror = () => reject(new Error("playback"));
      audio.play().then(
        () => {
          audio.playbackRate = rateRef.current;
        },
        reject,
      );
    });
  }

  function begin(cards: WeekSentence[]) {
    activeRef.current = true;
    setQueue(shuffle(cards));
    setPos(0);
    setJudging(false);
    setPlaying(false);
    setMissed([]);
  }

  function stop() {
    activeRef.current = false;
    stopAudio();
    setQueue(null);
    setReviewQueue(null);
    setReviewPos(0);
    setJudging(false);
    setPlaying(false);
  }

  function flagMiss(s: WeekSentence) {
    if (!listPracticeFlags().includes(s.promptId)) flagForPractice(s.promptId);
    setMissed((m) => (m.some((c) => c.promptId === s.promptId) ? m : [...m, s]));
  }

  function judge(gotIt: boolean) {
    const s = queue![pos];
    if (gotIt) unflagForPractice(s.promptId);
    else flagMiss(s);
    syncFlags();
    setJudging(false);
    setPos((p) => p + 1);
  }

  function beginReview(cards: WeekSentence[]) {
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
    if (!queue || !activeRef.current || judging) return;
    if (pos >= queue.length) return;

    let cancelled = false;

    async function run() {
      setPlaying(true);
      try {
        await playSpanish(queue![pos].spanish);
      } catch {
        // One bad clip shouldn't end the pass.
      }
      if (cancelled || !activeRef.current) return;
      setPlaying(false);
      setJudging(true);
    }

    run();

    return () => {
      cancelled = true;
      stopAudio();
    };
  }, [queue, pos, judging]);

  const running = queue !== null && pos < queue.length;
  const finished = queue !== null && pos >= queue.length;
  const reviewing = reviewQueue !== null && reviewPos < reviewQueue.length;

  if (all.length === 0) return null;

  if (reviewing) {
    const s = reviewQueue![reviewPos];
    return (
      <div>
        <p className="mono-cap" style={{ color: "var(--ink-mute)" }}>
          Repaso · {reviewPos + 1} de {reviewQueue!.length}
        </p>
        <Gloss>{`Review · ${reviewPos + 1} of ${reviewQueue!.length}`}</Gloss>
        <div className="stem-recall-card">
          <p className="stem-recall-card__stem">{s.spanish}</p>
          <p className="stem-recall-card__english" style={{ marginTop: 10 }}>
            {s.english}
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
            <PlayButton text={s.spanish} label={`Escuchar: ${s.spanish}`} />
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
            className="text-caption transition-colors hover:text-accent"
            style={{ minHeight: 44, padding: "0 6px", color: "var(--ink-soft)", background: "transparent" }}
          >
            Saltar
            <Gloss>Skip review</Gloss>
          </button>
        </div>
      </div>
    );
  }

  if (!running && !finished) {
    return (
      <div>
        <p className="stem-recall-intro-title">
          Solo audio. Luego dices si entró.
        </p>
        <Gloss>Audio only. Then you say whether it landed.</Gloss>
        <p className="stem-recall-body">
          Las {all.length} frases en orden aleatorio. Nada escrito mientras suena
          — si se te fue, pulsa Se me fue y queda en tu lista.
        </p>
        <Gloss>
          {`All ${all.length} sentences, shuffled. Nothing on screen while it plays — if it got away from you, tap It got away and it goes on your list.`}
        </Gloss>
        <button
          type="button"
          onClick={() => begin(all)}
          className="stem-recall-start"
          style={{ marginTop: 16, maxWidth: 220 }}
        >
          <span className="stem-recall-start-label">Empezar</span>
          <Gloss>Start</Gloss>
        </button>
        {standing.length > 0 && (
          <StandingList
            sentences={standing}
            onDrill={() => begin(standing)}
            onReview={() => beginReview(standing)}
          />
        )}
      </div>
    );
  }

  if (running) {
    const s = queue![pos];
    return (
      <div>
        <p className="mono-cap" style={{ color: "var(--ink-mute)" }}>
          {pos + 1} de {queue.length}
        </p>
        <div className="stem-recall-card">
          <span className="text-caption stem-recall-card__hint">
            {playing ? "Escucha…" : "¿Entró?"}
          </span>
          {!playing && !judging && (
            <span
              aria-hidden
              style={{
                display: "block",
                marginTop: 24,
                width: 40,
                height: 2,
                background: "var(--zone)",
                opacity: 0.45,
              }}
            />
          )}
          {playing && (
            <span
              aria-hidden
              style={{
                display: "block",
                marginTop: 24,
                width: 48,
                height: 2,
                background: "var(--zone)",
                opacity: 0.45,
              }}
            />
          )}
          {judging && (
            <div className="stem-recall-judge-row">
              <Judge label="Lo entendí" en="I got it" tone="zone" onClick={() => judge(true)} />
              <Judge label="Se me fue" en="It got away" tone="mute" onClick={() => judge(false)} />
              <Judge
                label="Otra vez"
                en="Listen again"
                tone="ghost"
                onClick={async () => {
                  setPlaying(true);
                  setJudging(false);
                  try {
                    await playSpanish(s.spanish);
                  } catch {
                    // carry on
                  }
                  setPlaying(false);
                  setJudging(true);
                }}
              />
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={stop}
          className="text-caption transition-colors hover:text-accent"
          style={{ marginTop: 14, minHeight: 44, color: "var(--ink-mute)", background: "transparent" }}
        >
          Dejarlo aquí
          <Gloss>Stop here</Gloss>
        </button>
      </div>
    );
  }

  const total = queue!.length;
  const got = total - missed.length;

  return (
    <div>
      <p className="stem-recall-done">{got} de {total} entraron.</p>
      <Gloss>{`${got} of ${total} landed`}</Gloss>
      {missed.length === 0 ? (
        <p className="stem-recall-body">Nada que marcar esta vuelta.</p>
      ) : (
        <>
          <p className="stem-recall-body">
            Ya están en tu lista — repásalas cuando quieras.
          </p>
          <Gloss>Saved to your practice list — review them whenever you like.</Gloss>
          <MissedList sentences={missed} />
        </>
      )}
      <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
        {missed.length > 0 && (
          <button type="button" onClick={() => beginReview(missed)} className="btn-primary">
            <span className="lab">Repasar estas</span>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        )}
        <button
          type="button"
          onClick={() => begin(missed.length > 0 ? missed : all)}
          className={missed.length > 0 ? "text-caption transition-colors hover:text-accent" : "btn-primary"}
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
              <Gloss>Try again</Gloss>
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
          className="text-caption transition-colors hover:text-accent"
          style={{ minHeight: 44, padding: "0 6px", color: "var(--ink-soft)", background: "transparent" }}
        >
          Listo
        </button>
      </div>
    </div>
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
  tone: "zone" | "mute" | "ghost";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`stem-recall-judge stem-recall-judge--${tone}`}
    >
      <span className="stem-recall-judge-label">{label}</span>
      <Gloss>{en}</Gloss>
    </button>
  );
}

function MissedList({ sentences }: { sentences: WeekSentence[] }) {
  return (
    <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none" }}>
      {sentences.map((s) => (
        <li
          key={s.promptId}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "7px 0",
            borderTop: "1px solid var(--rule)",
          }}
        >
          <PlayButton text={s.spanish} label={`Escuchar: ${s.spanish}`} />
          <span className="week-stems-stem" style={{ flex: 1, minWidth: 0 }}>
            {s.spanish}
          </span>
          <span className="week-stems-gloss">{s.english}</span>
        </li>
      ))}
    </ul>
  );
}

function StandingList({
  sentences,
  onDrill,
  onReview,
}: {
  sentences: WeekSentence[];
  onDrill: () => void;
  onReview: () => void;
}) {
  return (
    <div style={{ marginTop: 26, paddingTop: 18, borderTop: "1px solid var(--rule)" }}>
      <span className="text-caption" style={{ color: "var(--zone)" }}>
        En tu lista · {sentences.length}
      </span>
      <Gloss>On your practice list from this week</Gloss>
      <MissedList sentences={sentences} />
      <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
        <button type="button" onClick={onReview} className="stem-recall-start" style={{ flex: "none" }}>
          <span className="stem-recall-start-label">Repasar</span>
          <Gloss>Review</Gloss>
        </button>
        <button type="button" onClick={onDrill} className="stem-recall-start" style={{ flex: "none" }}>
          <span className="stem-recall-start-label">Solo estas</span>
          <Gloss>Just these</Gloss>
        </button>
      </div>
    </div>
  );
}
