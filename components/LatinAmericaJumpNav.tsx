"use client";

import { useRef } from "react";
import { latinAmericaSectionsByCategory } from "@/content/latinAmerica";

export function LatinAmericaJumpNav() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function handleLinkClick() {
    detailsRef.current?.removeAttribute("open");
  }

  const sectionCount = latinAmericaSectionsByCategory().reduce(
    (n, { sections }) => n + sections.length,
    0,
  );

  return (
    <details ref={detailsRef} className="confusions-jump">
      <summary className="confusions-jump__summary">
        <span className="confusions-jump__summary-label">On this page</span>
        <span className="confusions-jump__summary-hint">
          {sectionCount} sections
        </span>
      </summary>

      <div className="confusions-jump__panel">
        {latinAmericaSectionsByCategory().map(({ category, sections }) => (
          <div key={category.id} className="confusions-jump__group">
            <p className="confusions-jump__category">{category.label}</p>
            <ul className="confusions-jump__list">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="confusions-jump__link"
                    onClick={handleLinkClick}
                  >
                    {section.title}
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
