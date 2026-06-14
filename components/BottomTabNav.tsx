"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type Tab = {
  href: string;
  label: string;
  match: (path: string) => boolean;
  icon: ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconToday = (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...stroke}>
    <path d="M4 11.5 12 5l8 6.5" />
    <path d="M5.5 10.5V19h13v-8.5" />
    <path d="M10 19v-5h4v5" />
  </svg>
);

const IconActivities = (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...stroke}>
    <circle cx="8" cy="8" r="3.5" />
    <circle cx="16" cy="16" r="3.5" />
    <path d="M12.5 7.5h6M15.5 4.5v6M5 14h6M5 17.5h4" />
  </svg>
);

const IconSituations = (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...stroke}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" />
  </svg>
);

const IconProgress = (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...stroke}>
    <path d="M5 20V10" />
    <path d="M12 20V4" />
    <path d="M19 20v-7" />
  </svg>
);

const tabs: Tab[] = [
  { href: "/", label: "Today", match: (p) => p === "/", icon: IconToday },
  { href: "/activities", label: "Activities", match: (p) => p.startsWith("/activities") || p.startsWith("/thoughts"), icon: IconActivities },
  { href: "/situations", label: "Situations", match: (p) => p.startsWith("/situations"), icon: IconSituations },
  { href: "/progress", label: "Progress", match: (p) => p.startsWith("/progress"), icon: IconProgress },
];

export function BottomTabNav() {
  const pathname = usePathname() ?? "/";

  if (pathname.startsWith("/flow")) return null;

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-bg/90 backdrop-blur-md"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0.5rem)" }}
    >
      <ul className="mx-auto flex max-w-[520px] items-stretch justify-around px-1 pt-2">
        {tabs.map((t) => {
          const active = t.match(pathname);
          return (
            <li key={t.href} className="flex-1">
              <Link
                href={t.href}
                className="flex flex-col items-center gap-1 py-3"
                style={{ color: active ? "var(--accent)" : "var(--ink-mute)" }}
              >
                {t.icon}
                <span
                  className="text-[0.625rem] font-medium tracking-[0.04em]"
                  style={{ letterSpacing: "0.02em" }}
                >
                  {t.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
