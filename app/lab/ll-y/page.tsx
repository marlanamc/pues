"use client";

import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PlayButton } from "@/components/PlayButton";
import { llyWords } from "@/content/lab";

export default function LLYPage() {
  return (
    <div className="space-y-6 pb-28 lg:pb-8 fade-rise">
      <div className="space-y-1">
        <Link
          href="/lab"
          className="text-sm transition-colors"
          style={{ color: "var(--ink-mute)" }}
        >
          ← Lab
        </Link>
        <PageHeader
          title={
            <span className="font-display" style={{ fontSize: "1.375rem", color: "var(--ink)" }}>
              LL y Y
            </span>
          }
          meta={
            <span className="mono-cap" style={{ color: "var(--accent)" }}>
              Español Real
            </span>
          }
        />
      </div>

      <p className="text-gloss">
        LL and Y don&apos;t sound the same everywhere. In Argentina and Uruguay
        they sound like "sh." In most of Latin America, LL and Y have merged
        into a single Y sound. In parts of Spain they stay distinct. The goal
        is recognition — hearing how a word shifts across accents.
      </p>

      <div className="tip-card">
        <span className="tip-card__label mono-cap">Yeísmo</span>
        <p className="tip-card__body">
          The merger of LL and Y is called <em>yeísmo</em> — and it&apos;s the
          dominant pattern across the Spanish-speaking world. You don&apos;t need
          to produce both sounds. You need to hear both.
        </p>
      </div>

      <ul className="space-y-3">
        {llyWords.map((item) => (
          <li
            key={item.word}
            className="rounded-[14px] border"
            style={{ borderColor: "var(--rule)", background: "var(--surface)" }}
          >
            <div className="flex items-center gap-4 px-5 py-4">
              <PlayButton
                text={item.word}
                label={`Escuchar: ${item.word}`}
                contextBefore="En español:"
              />
              <span
                className="font-display"
                style={{ fontSize: "1.375rem", color: "var(--ink)", letterSpacing: "-0.01em" }}
              >
                {item.word}
              </span>
            </div>
            {item.note && (
              <div
                className="border-t px-5 py-3"
                style={{ borderColor: "var(--rule)" }}
              >
                <p className="text-gloss">{item.note}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
