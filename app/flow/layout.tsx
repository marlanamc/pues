"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { StepChip } from "@/components/StepChip";

const steps = [
  { path: "/flow/frame", label: "Choose Frame", step: 1 },
  { path: "/flow/situation", label: "Choose Situation", step: 2 },
  { path: "/flow/build", label: "Build Sentence", step: 3 },
  { path: "/flow/reflect", label: "Reflect", step: 4 },
  { path: "/flow/save", label: "Save Thought", step: 5 },
];
const TOTAL = steps.length;

export default function FlowLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const current = steps.find((s) => pathname.startsWith(s.path)) ?? steps[0];

  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Back to today"
          className="text-caption text-ink-mute hover:text-ink-soft transition-colors min-h-[44px] inline-flex items-center px-2 -ml-2"
        >
          ← Exit
        </Link>
        <StepChip step={current.step} total={TOTAL} label={current.label} />
      </header>
      {children}
    </div>
  );
}
