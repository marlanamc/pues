"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/nav";

export function BottomTabNav() {
  const pathname = usePathname() ?? "/";

  if (pathname.startsWith("/flow")) return null;

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-bg/90 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0.5rem)" }}
    >
      <ul className="mx-auto flex max-w-[520px] items-stretch justify-around px-1 pt-2">
        {navItems.map((t) => {
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
                  className="uppercase"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.5625rem",
                    letterSpacing: "0.04em",
                  }}
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
