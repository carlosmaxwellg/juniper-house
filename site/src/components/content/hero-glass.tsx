"use client";

import { useEffect, type CSSProperties } from "react";

const FLUTES = 12;

/**
 * A reeded-glass pane that clears from the homepage portrait on arrival.
 * The resolve itself is pure CSS, so it also plays before hydration; this island only
 * marks the moment as seen so returning to the homepage within a visit shows the clear image.
 */
export function HeroGlass() {
  useEffect(() => {
    const seen = window.setTimeout(() => {
      document.documentElement.dataset.heroResolved = "true";
    }, 2600);
    return () => window.clearTimeout(seen);
  }, []);

  return (
    <div className="hero-glass" aria-hidden="true">
      {Array.from({ length: FLUTES }, (_, index) => (
        <span key={index} style={{ "--flute": index } as CSSProperties} />
      ))}
    </div>
  );
}
