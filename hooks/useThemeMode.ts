"use client";

import { useEffect, useState } from "react";
import {
  getThemeMode,
  setThemeMode as persistThemeMode,
  type ThemeMode,
} from "@/lib/store";

const THEME_MODE_EVENT = "pues:theme-mode-change";

function applyThemeMode(mode: ThemeMode) {
  document.documentElement.classList.toggle("light", mode === "light");
}

export function useThemeMode() {
  const [mode, setModeState] = useState<ThemeMode>("dark");

  useEffect(() => {
    const current = getThemeMode();
    setModeState(current);
    applyThemeMode(current);

    function sync() {
      const next = getThemeMode();
      setModeState(next);
      applyThemeMode(next);
    }

    window.addEventListener(THEME_MODE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(THEME_MODE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function setMode(next: ThemeMode) {
    persistThemeMode(next);
    setModeState(next);
    applyThemeMode(next);
    window.dispatchEvent(new Event(THEME_MODE_EVENT));
  }

  return { mode, setMode };
}
