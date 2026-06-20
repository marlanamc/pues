"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/nav";
import { Wordmark } from "@/components/PageHeader";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { useSidebarVisible } from "@/hooks/useSidebarVisible";

const IconCollapse = (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    aria-hidden
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 6l-6 6 6 6M19 6v12" />
  </svg>
);

const IconExpand = (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    aria-hidden
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 6l6 6-6 6M5 6v12" />
  </svg>
);

export function LeftRailNav() {
  const pathname = usePathname() ?? "/";
  const { visible: expanded, setVisible: setExpanded } = useSidebarVisible();

  if (pathname.startsWith("/flow")) return null;

  return (
    <nav
      aria-label="Primary"
      className={`hidden border-r border-rule bg-bg py-6 transition-[width] duration-200 lg:sticky lg:top-0 lg:z-30 lg:flex lg:h-dvh lg:shrink-0 lg:flex-col ${
        expanded ? "lg:w-60 lg:px-4" : "lg:w-[4.5rem] lg:px-2"
      }`}
    >
      <div
        className={`flex items-center ${
          expanded ? "justify-between px-3" : "justify-center"
        }`}
      >
        {expanded ? (
          <Link href="/" className="py-2" aria-label="Pues — inicio">
            <Wordmark>Pues</Wordmark>
          </Link>
        ) : (
          <Link
            href="/"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full font-display italic text-[17px] text-ink-soft transition-colors hover:text-accent"
            aria-label="Pues — inicio"
          >
            P
          </Link>
        )}
        {expanded && (
          <button
            type="button"
            onClick={() => setExpanded(false)}
            aria-label="Collapse navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-rule text-ink-mute transition-colors hover:border-accent/60 hover:text-accent"
          >
            {IconCollapse}
          </button>
        )}
      </div>

      <ul className={`mt-8 space-y-1 ${expanded ? "" : "flex flex-col items-center"}`}>
        {navItems.map((item) => {
          const active = item.match(pathname);
          return (
            <li key={item.href} className={expanded ? "" : "w-full"}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                aria-label={item.label}
                title={expanded ? undefined : item.label}
                className={`flex items-center transition-colors ${
                  expanded
                    ? "gap-3 px-3.5 py-2.5 rounded-2xl"
                    : "mx-auto h-10 w-10 justify-center rounded-full"
                }`}
                style={{
                  color: active ? item.zone : "var(--ink-soft)",
                  background: active
                    ? `color-mix(in oklab, ${item.zone} 10%, transparent)`
                    : "transparent",
                  fontWeight: active ? 500 : 400,
                }}
              >
                {item.icon}
                {expanded && (
                  <span className="font-display" style={{ fontSize: 15 }}>
                    {item.label}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        className={`mt-auto flex flex-col gap-2 pt-4 ${
          expanded ? "px-3" : "items-center"
        }`}
      >
        {!expanded && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-label="Expand navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rule text-ink-mute transition-colors hover:border-accent/60 hover:text-accent"
          >
            {IconExpand}
          </button>
        )}
        <SettingsMenuButton placement="up-left" />
      </div>
    </nav>
  );
}
