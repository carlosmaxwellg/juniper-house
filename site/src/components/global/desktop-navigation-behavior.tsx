"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type DesktopNavigationBehaviorProps = {
  navigationId: string;
};

export function DesktopNavigationBehavior({
  navigationId,
}: DesktopNavigationBehaviorProps) {
  const pathname = usePathname();

  useEffect(() => {
    const navigation = document.getElementById(navigationId);

    if (!navigation) return;

    const navigationElement = navigation;

    function getOpenDetails() {
      return Array.from(
        navigationElement.querySelectorAll<HTMLDetailsElement>("details[open]"),
      );
    }

    function closeOpenDetails() {
      getOpenDetails().forEach((details) => {
        details.open = false;
      });
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !navigationElement.contains(event.target)
      ) {
        closeOpenDetails();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      const openDetails = getOpenDetails();

      if (openDetails.length === 0) return;

      const focusedDetails =
        document.activeElement?.closest<HTMLDetailsElement>("details[open]") ??
        openDetails[0];
      const summary = focusedDetails.querySelector<HTMLElement>(
        ":scope > summary",
      );

      closeOpenDetails();
      summary?.focus();
      event.preventDefault();
    }

    closeOpenDetails();
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Element && event.target.closest("a")) closeOpenDetails();
    }
    navigationElement.addEventListener("click", handleClick);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      navigationElement.removeEventListener("click", handleClick);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigationId, pathname]);

  return null;
}
