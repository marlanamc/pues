"use client";

import { useEffect, useState } from "react";
import {
  getTheme,
  setTheme as persistTheme,
  isLightTheme,
  type ThemeName,
} from "@/lib/store";

const THEME_EVENT = "pues:theme-mode-change";

export function applyTheme(name: ThemeName) {
  const root = document.documentElement;
  root.dataset.theme = name;
  root.classList.toggle("light", isLightTheme(name));
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeName>("Almagre");

  useEffect(() => {
    const current = getTheme();
    setThemeState(current);
    applyTheme(current);

    function sync() {
      const next = getTheme();
      setThemeState(next);
      applyTheme(next);
    }

    window.addEventListener(THEME_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(THEME_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function setTheme(next: ThemeName) {
    persistTheme(next);
    setThemeState(next);
    applyTheme(next);
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return { theme, setTheme };
}
