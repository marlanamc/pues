"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SettingsMenuButton } from "@/components/SettingsMenu";

export function Wordmark({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-display"
      style={{ fontStyle: "italic", fontSize: 17, color: "var(--ink-soft)" }}
    >
      {children}
    </span>
  );
}

type PageHeaderProps = {
  title: ReactNode;
  meta?: ReactNode;
  className?: string;
};

export function PageHeader({ title, meta, className }: PageHeaderProps) {
  const pathname = usePathname() ?? "/";

  if (pathname.startsWith("/flow")) return null;

  return (
    <header
      className={`flex items-center justify-between${className ? ` ${className}` : ""}`}
      style={{ paddingTop: 4 }}
    >
      <div>{title}</div>
      <div className="flex items-center gap-2.5">
        {meta}
        <SettingsMenuButton />
      </div>
    </header>
  );
}
