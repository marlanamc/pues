"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

export function Wordmark({ children }: { children: ReactNode }) {
  return (
    <span className="text-display-italic text-[17px]">{children}</span>
  );
}

type PageHeaderProps = {
  title?: ReactNode;
  meta?: ReactNode;
  className?: string;
};

export function PageHeader({ title, meta, className }: PageHeaderProps) {
  const pathname = usePathname() ?? "/";

  if (pathname.startsWith("/flow")) return null;

  return (
    <header
      className={`flex items-center ${title ? "justify-between" : "justify-end"}${className ? ` ${className}` : ""}`}
      style={{ paddingTop: 4 }}
    >
      {title ? <div>{title}</div> : null}
      {meta ? <div className="flex items-center gap-2.5">{meta}</div> : null}
    </header>
  );
}
