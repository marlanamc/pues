"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { quizQuestionsForDay, type QuizQuestion } from "@/content/prompts";
import { Gloss } from "@/components/Gloss";

const OK = "#059669";
const WRONG = "#ef4444";

type OptState = "idle" | "correct" | "wrong" | "muted";

function OptRow({
  children,
  state,
  onClick,
}: {
  children: React.ReactNode;
  state: OptState;
  onClick: () => void;
}) {
  let bg = "var(--surface)";
  let border = "var(--rule)";
  if (state === "correct") {
    bg = `color-mix(in oklab, ${OK} 13%, var(--surface))`;
    border = OK;
  } else if (state === "wrong") {
    bg = `color-mix(in oklab, ${WRONG} 11%, var(--surface))`;
    border = WRONG;
  }
  const opacity = state === "muted" ? 0.45 : 1;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={state !== "idle"}
      className="font-display"
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        textAlign: "left",
        padding: "14px 16px",
        borderRadius: 12,
        background: bg,
        border: `1px solid ${border}`,
        color: "var(--ink)",
        opacity,
        fontSize: "1.0625rem",
        minHeight: 44,
        cursor: state === "idle" ? "pointer" : "default",
      }}
    >
      {children}
    </button>
  );
}

function QuizScreen() {
  const params = useSearchParams();
  const dayIndex = Number(params.get("dayIndex") ?? "0");
  const openTurnParam = params.get("openTurn");
  const openTurnHref = openTurnParam ? `/flow/abierto?i=${openTurnParam}` : null;

  const questions = useMemo(() => quizQuestionsForDay(dayIndex, 3), [dayIndex]);

  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  if (questions.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <Link href="/" className="btn-primary">
          <span className="lab">Terminar</span>
        </Link>
      </div>
    );
  }

  const total = questions.length;
  const done = index >= total;
  const q: QuizQuestion | undefined = questions[index];

  function choose(option: string) {
    if (picked || !q) return;
    setPicked(option);
    if (option === q.correct) setScore((s) => s + 1);
  }

  function next() {
    setPicked(null);
    setIndex((i) => i + 1);
  }

  if (done) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <div>
          <p className="text-display-xl text-ink">
            {score} de {total}
          </p>
          <Gloss>{`${score} of ${total}`}</Gloss>
        </div>

        <div className="flex w-full max-w-[320px] flex-col gap-2.5">
          {openTurnHref && (
            <>
              <Link href={openTurnHref} className="btn-primary">
                <span className="lab">Una más, sin guion</span>
              </Link>
              <div className="text-center">
                <Gloss>One more — no English, no script</Gloss>
              </div>
            </>
          )}
          <Link
            href="/"
            className={openTurnHref ? "px-6 py-2.5 text-center min-h-[44px]" : "btn-primary"}
            style={openTurnHref ? { color: "var(--ink-soft)" } : undefined}
          >
            <span className={openTurnHref ? "font-display" : "lab"} style={openTurnHref ? { fontSize: "1.0625rem" } : undefined}>
              Terminar
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between">
        <span className="mono-cap" style={{ color: "var(--ink-mute)" }}>
          Pregunta {index + 1} de {total}
        </span>
        <Link href="/" className="text-caption transition-colors hover:text-accent" style={{ color: "var(--ink-soft)" }}>
          Saltar
        </Link>
      </div>

      <p className="mt-6 mb-2 font-display text-xl text-ink">{q?.english}</p>

      <div className="mt-4 flex flex-col gap-2.5">
        {q?.options.map((option) => {
          let state: OptState = "idle";
          if (picked) {
            if (option === q.correct) state = "correct";
            else if (option === picked) state = "wrong";
            else state = "muted";
          }
          return (
            <OptRow key={option} state={state} onClick={() => choose(option)}>
              {option}
            </OptRow>
          );
        })}
      </div>

      {picked && (
        <div className="mt-6">
          <button type="button" onClick={next} className="btn-primary">
            <span className="lab">{index + 1 < total ? "Siguiente" : "Ver resultado"}</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="flex flex-1" />}>
      <QuizScreen />
    </Suspense>
  );
}
