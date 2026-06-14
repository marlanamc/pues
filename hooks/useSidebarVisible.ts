"use client";

import { useEffect, useState } from "react";
import {
  getSidebarVisible,
  setSidebarVisible as persistSidebarVisible,
} from "@/lib/store";

const SIDEBAR_VISIBLE_EVENT = "pues:sidebar-visible-change";

function applySidebarVisible(visible: boolean) {
  document.documentElement.classList.toggle("sidebar-collapsed", !visible);
}

export function useSidebarVisible() {
  const [visible, setVisibleState] = useState(true);

  useEffect(() => {
    const current = getSidebarVisible();
    setVisibleState(current);
    applySidebarVisible(current);

    function sync() {
      const next = getSidebarVisible();
      setVisibleState(next);
      applySidebarVisible(next);
    }

    window.addEventListener(SIDEBAR_VISIBLE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(SIDEBAR_VISIBLE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function setVisible(next: boolean) {
    persistSidebarVisible(next);
    setVisibleState(next);
    applySidebarVisible(next);
    window.dispatchEvent(new Event(SIDEBAR_VISIBLE_EVENT));
  }

  return { visible, setVisible };
}
