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
      <ul className="mx-auto flex max-w-[520px] items-stretch justify-around px-1 pt-1.5">
        {navItems.map((t) => {
          const active = t.match(pathname);
          return (
            <li key={t.href} className="flex-1">
              <Link
                href={t.href}
                className="flex flex-col items-center py-2.5"
                style={{ color: active ? t.zone : "var(--ink-mute)", gap: 3 }}
              >
                {t.icon}
                <span className="mono-cap" style={{ color: "inherit" }}>
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
