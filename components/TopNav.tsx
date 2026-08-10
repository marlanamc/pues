"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/nav";
import { Wordmark } from "@/components/PageHeader";
import { SettingsMenuButton } from "@/components/SettingsMenu";

export function TopNav() {
  const pathname = usePathname() ?? "/";

  if (pathname.startsWith("/flow")) return null;

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-30 hidden border-b border-rule bg-bg/85 backdrop-blur-md lg:block"
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-8">
        <Link href="/" className="shrink-0" aria-label="Pues — inicio">
          <Wordmark>Pues</Wordmark>
        </Link>

        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const active = item.match(pathname);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="flex items-center gap-2 rounded-full px-4 py-2 font-display transition-colors"
                  style={{
                    fontSize: 15,
                    color: active ? item.zone : "var(--ink-soft)",
                    background: active
                      ? `color-mix(in oklab, ${item.zone} 10%, transparent)`
                      : "transparent",
                    fontWeight: active ? 500 : 400,
                  }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="shrink-0">
          <SettingsMenuButton />
        </div>
      </div>
    </nav>
  );
}
