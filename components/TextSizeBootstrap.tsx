"use client";

import { useEffect } from "react";
import { applyTextSize } from "@/hooks/useTextSize";
import { getTextSize } from "@/lib/store";

/** Applies saved text size on mount (layout script handles the first paint). */
export function TextSizeBootstrap() {
  useEffect(() => {
    applyTextSize(getTextSize());
  }, []);

  return null;
}
