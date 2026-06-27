"use client";

import { PlayButton } from "@/components/PlayButton";
import type { RealPair } from "@/content/lab";

export function LabRealSpanish({ pairs }: { pairs: RealPair[] }) {
  return (
    <div className="space-y-4 fade-rise">
      {pairs.map((pair, i) => (
        <div
          key={i}
          className="rounded-[14px] border overflow-hidden"
          style={{ borderColor: "var(--rule)", background: "var(--surface)" }}
        >
          <div className="grid grid-cols-2 divide-x" style={{ borderColor: "var(--rule)" }}>
            {/* Textbook */}
            <div className="flex flex-col gap-3 p-4">
              <p className="mono-cap" style={{ color: "var(--ink-mute)" }}>
                Lo que ves
              </p>
              <p
                className="text-display-md leading-snug"
                style={{ color: "var(--ink)" }}
              >
                {pair.textbook}
              </p>
              <PlayButton
                text={pair.textbook}
                label={`Escuchar: ${pair.textbook}`}
                contextBefore="En español:"
              />
            </div>

            {/* Real speech */}
            <div
              className="flex flex-col gap-3 p-4"
              style={{
                background: "color-mix(in oklab, var(--accent) 5%, var(--surface))",
              }}
            >
              <p className="mono-cap" style={{ color: "var(--accent)" }}>
                Lo que oyes
              </p>
              <p
                className="text-display-md leading-snug"
                style={{ color: "var(--ink)", fontStyle: "italic" }}
              >
                {pair.real}
              </p>
              <PlayButton
                text={pair.textbook}
                label={`Escuchar rápido: ${pair.real}`}
              />
            </div>
          </div>

          {pair.note && (
            <div
              className="border-t px-4 py-3"
              style={{ borderColor: "var(--rule)" }}
            >
              <p className="text-gloss" style={{ color: "var(--ink-soft)" }}>
                {pair.note}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
