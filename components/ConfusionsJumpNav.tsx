"use client";

import { useRef } from "react";
import { confusionGroupsByCategory } from "@/content/confusions";

export function ConfusionsJumpNav() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function handleLinkClick() {
    detailsRef.current?.removeAttribute("open");
  }

  return (
    <details ref={detailsRef} className="confusions-jump">
      <summary className="confusions-jump__summary">
        <span className="confusions-jump__summary-label">On this page</span>
        <span className="confusions-jump__summary-hint">23 sections</span>
      </summary>

      <div className="confusions-jump__panel">
        {confusionGroupsByCategory().map(({ category, groups }) => (
          <div key={category.id} className="confusions-jump__group">
            <p className="confusions-jump__category">{category.label}</p>
            <ul className="confusions-jump__list">
              {groups.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${group.id}`}
                    className="confusions-jump__link"
                    onClick={handleLinkClick}
                  >
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}
