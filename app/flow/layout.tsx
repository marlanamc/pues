"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { clearDraft } from "@/lib/store";

const steps = [
  { path: "/flow/speak", step: 1 },
  { path: "/flow/reveal", step: 2 },
  { path: "/flow/saved", step: 3 },
];

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconBack = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...stroke}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export default function FlowLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const current =
    steps.find((s) => pathname.startsWith(s.path))?.step ?? 1;

  return (
    <div className="flex min-h-[calc(100dvh-10.5rem)] flex-1 flex-col lg:mx-auto lg:min-h-[calc(100dvh-5.5rem)] lg:max-w-[560px]">
      <header
        className="flex items-center justify-between"
        style={{ paddingTop: 4 }}
      >
        <Link
          href="/"
          aria-label="Salir"
          onClick={() => clearDraft()}
          className="mono-cap inline-flex min-h-[44px] items-center gap-1.5 px-2 -ml-2 transition-colors hover:text-ink-soft"
        >
          {IconBack}
          Salir
        </Link>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden>
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className="rounded-full transition-all"
                style={{
                  width: n === current ? 16 : 6,
                  height: 6,
                  background: n <= current ? "var(--accent)" : "var(--rule)",
                }}
              />
            ))}
          </div>
          <SettingsMenuButton />
        </div>
      </header>
      {children}
    </div>
  );
}
