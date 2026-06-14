"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/nav";
import { Wordmark } from "@/components/PageHeader";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { useSidebarVisible } from "@/hooks/useSidebarVisible";

export function LeftRailNav() {
  const pathname = usePathname() ?? "/";
  const { visible } = useSidebarVisible();

  if (pathname.startsWith("/flow") || !visible) return null;

  return (
    <nav
      aria-label="Primary"
      className="hidden lg:flex lg:flex-col lg:w-60 lg:shrink-0 lg:sticky lg:top-0 lg:h-dvh border-r border-rule bg-bg px-4 py-6"
    >
      <Link href="/" className="px-3 py-2" aria-label="Pues — inicio">
        <Wordmark>Pues</Wordmark>
      </Link>

      <ul className="mt-8 space-y-1">
        {navItems.map((item) => {
          const active = item.match(pathname);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="flex items-center gap-3 rounded-full px-3 py-2.5 text-[0.9375rem] transition-colors"
                style={{
                  color: active ? "var(--accent)" : "var(--ink-mute)",
                  background: active ? "var(--surface)" : "transparent",
                }}
              >
                {item.icon}
                <span className="font-display">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto px-3 pt-4">
        <SettingsMenuButton placement="up-left" />
      </div>
    </nav>
  );
}
