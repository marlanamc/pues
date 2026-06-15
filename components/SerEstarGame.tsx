"use client";

import { useEffect, useMemo, useState } from "react";
import { PlayButton } from "@/components/PlayButton";
import {
  serEstarRounds,
  shuffleWithSeed,
  totalSerEstarItems,
  type SerEstar,
  type SerEstarItem,
} from "@/content/serEstar";

type Status = "idle" | "correct" | "wrong";

const VERB_LABEL: Record<SerEstar, string> = {
  ser: "SER",
  estar: "ESTAR",
};

/** Replace the blank with the conjugated form for the correct-answer reveal. */
function filledSentence(item: SerEstarItem): string {
  return item.prompt.replace("___", item.conjugated);
}

export function SerEstarGame({ onQuit }: { onQuit?: () => void }) {
  const total = useMemo(() => totalSerEstarItems(), []);

  // seed=0 on the server and first client render (stable → no hydration
  // mismatch); a real seed is set after mount so each session varies.
  const [seed, setSeed] = useState(0);
  useEffect(() => {
    setSeed((Math.floor(performance.now()) % 100000) + 1);
  }, []);

  const [roundIndex, setRoundIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [selected, setSelected] = useState<SerEstar | null>(null);
  const [correctInRound, setCorrectInRound] = useState(0);
  const [completedBefore, setCompletedBefore] = useState(0);
  const [roundDone, setRoundDone] = useState(false);
  const [gameDone, setGameDone] = useState(false);

  const round = serEstarRounds[roundIndex];
  const items = useMemo(
    () => shuffleWithSeed(round.items, seed + round.round),
    [round, seed]
  );
  const item = items[itemIndex];

  const overallDone = completedBefore + correctInRound;
  const overallPercent = total > 0 ? Math.round((overallDone / total) * 100) : 0;

  function resetRoundState() {
    setItemIndex(0);
    setStatus("idle");
    setSelected(null);
    setCorrectInRound(0);
    setRoundDone(false);
  }

  function advance() {
    const next = itemIndex + 1;
    if (next >= items.length) {
      setRoundDone(true);
    } else {
      setItemIndex(next);
      setStatus("idle");
      setSelected(null);
    }
  }

  function choose(answer: SerEstar) {
    if (status === "correct") return;
    setSelected(answer);

    if (answer === item.answer) {
      setStatus("correct");
      setCorrectInRound((c) => c + 1);
    } else {
      setStatus("wrong");
    }
  }

  function nextRound() {
    setCompletedBefore((c) => c + items.length);
    if (roundIndex + 1 >= serEstarRounds.length) {
      setGameDone(true);
      return;
    }
    setRoundIndex((r) => r + 1);
    resetRoundState();
  }

  function playAgain() {
    setSeed((Math.floor(performance.now()) % 100000) + 1);
    setRoundIndex(0);
    setCompletedBefore(0);
    setGameDone(false);
    resetRoundState();
  }

  function returnToIntro() {
    playAgain();
    onQuit?.();
  }

  // --- End screen -----------------------------------------------------------
  if (gameDone) {
    return (
      <div className="rounded-lg border border-accent/30 bg-surface p-8 text-center space-y-4">
        <p className="day-pill mx-auto w-fit">¡Lo lograste!</p>
        <h2 className="text-display-lg text-ink">You finished all {serEstarRounds.length} rounds.</h2>
        <p className="text-gloss mx-auto max-w-sm">
          That&apos;s every sentence sorted. Come back and play again — the order
          shuffles each time.
        </p>
        <div className="flex flex-col gap-3 mx-auto mt-2 max-w-xs">
          <button onClick={playAgain} className="btn-primary">
            <span className="lab">Jugar otra vez</span>
            <span aria-hidden>↺</span>
          </button>
          {onQuit && (
            <button
              type="button"
              onClick={returnToIntro}
              className="text-caption text-ink-mute hover:text-accent transition-colors py-2"
            >
              Volver a la ayuda
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Shake />

      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-[1.375rem] text-ink leading-tight">
          Ser o estar
        </p>
        {onQuit && (
          <button
            type="button"
            onClick={onQuit}
            className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px]"
          >
            Ver ayuda
          </button>
        )}
      </div>

      {/* Progress + score */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-caption">
          <span>
            Ronda {round.round} de {serEstarRounds.length} · {round.label}
          </span>
          <span>
            <span className="text-accent">{correctInRound}</span> / {items.length}
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-sunk">
          <div
            className="h-full bg-accent transition-[width] duration-300"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </div>

      {roundDone ? (
        /* Round-complete card */
        <div className="rounded-lg border border-accent/30 bg-surface p-8 lg:p-10 text-center space-y-4">
          <p className="day-pill mx-auto w-fit">Ronda {round.round} ✓</p>
          <h2 className="text-display-md text-ink">
            You sorted all {items.length} sentences.
          </h2>
          <button onClick={nextRound} className="btn-primary mx-auto max-w-xs">
            <span className="lab">
              {roundIndex + 1 >= serEstarRounds.length ? "Terminar" : "Siguiente ronda"}
            </span>
            <span aria-hidden>›</span>
          </button>
        </div>
      ) : (
        <>
          <div className="lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-8 lg:items-start">
            {/* Sentence card */}
            <div
              className={`rounded-lg border bg-surface p-8 text-center transition-colors lg:p-10 ${
                status === "wrong"
                  ? "serestar-shake border-red-500/60"
                  : status === "correct"
                    ? "border-emerald-500/60"
                    : "border-rule"
              }`}
            >
              <p className="text-caption mb-4">Tap the verb that fits</p>
              <p className="font-display text-[1.75rem] lg:text-[2.125rem] leading-snug text-ink">
                {status === "correct" ? (
                  <SentenceReveal item={item} />
                ) : (
                  renderPromptWithBlank(item.prompt)
                )}
              </p>
              <p className="text-sm text-ink-mute mt-3">{item.english}</p>

              {status === "correct" && (
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <PlayButton text={filledSentence(item)} />
                    <span className="text-caption text-emerald-600">¡Correcto!</span>
                  </div>
                  <button
                    type="button"
                    onClick={advance}
                    className="btn-primary mx-auto max-w-xs"
                  >
                    <span className="lab">Siguiente</span>
                    <span aria-hidden>›</span>
                  </button>
                </div>
              )}
            </div>

            {/* Two choices */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4 lg:pt-2">
              {(["ser", "estar"] as const).map((verb) => {
                const isChosen = selected === verb;
                const showCorrect = status === "correct" && verb === item.answer;
                const showWrong = status === "wrong" && isChosen;
                return (
                  <button
                    key={verb}
                    onClick={() => choose(verb)}
                    disabled={status === "correct"}
                    className={`min-h-[88px] lg:min-h-[140px] rounded-lg border-2 font-display text-2xl lg:text-3xl tracking-wide transition-colors active:bg-surface-sunk disabled:cursor-default ${
                      showCorrect
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-600"
                        : showWrong
                          ? "border-red-500 bg-red-500/10 text-red-500"
                          : "border-rule bg-surface text-ink hover:border-accent/60"
                    }`}
                  >
                    {VERB_LABEL[verb]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation on a wrong guess */}
          {status === "wrong" && (
            <div className="rounded-lg border border-red-500/40 bg-surface p-5 lg:p-6 space-y-2">
              <p className="text-caption text-red-500">No del todo</p>
              <p className="text-sm text-ink leading-relaxed">
                It&apos;s{" "}
                <span className="font-display text-base">{VERB_LABEL[item.answer]}</span>{" "}
                <span className="text-ink-mute">· {item.tag}</span>
              </p>
              <p className="text-sm text-ink-soft leading-relaxed">{item.explanation}</p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setSelected(null);
                }}
                className="mt-1 text-caption text-accent hover:underline"
              >
                Intentar de nuevo →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/** Render the prompt with a styled blank where ser/estar belongs. */
function renderPromptWithBlank(prompt: string) {
  const [before, after] = prompt.split("___");
  return (
    <>
      {before}
      <span className="mx-1 inline-block min-w-[2.5ch] border-b-2 border-accent/70 align-baseline" aria-hidden>
        &nbsp;
      </span>
      {after}
    </>
  );
}

/** Render the prompt with the conjugated form filled in and emphasized. */
function SentenceReveal({ item }: { item: SerEstarItem }) {
  const [before, after] = item.prompt.split("___");
  return (
    <>
      {before}
      <span className="text-emerald-600">{item.conjugated}</span>
      {after}
    </>
  );
}

/** Injects the shake keyframe once (mirrors the source game's inline-style pattern). */
function Shake() {
  useEffect(() => {
    const id = "ser-estar-shake";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      @keyframes ser-estar-shake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-6px); }
        40% { transform: translateX(6px); }
        60% { transform: translateX(-4px); }
        80% { transform: translateX(4px); }
      }
      .serestar-shake { animation: ser-estar-shake 0.4s ease-in-out; }
    `;
    document.head.appendChild(style);
  }, []);
  return null;
}
