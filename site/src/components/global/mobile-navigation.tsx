"use client";

import { Icon } from "@/components/icon";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";

import { Container } from "@/components/foundations";
import type { NavigationItem } from "@/content/navigation";
import { siteContent } from "@/content/site";

type MobileNavigationProps = {
  items: readonly NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusOnCloseRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      if (restoreFocusOnCloseRef.current) {
        menuButtonRef.current?.focus();
        restoreFocusOnCloseRef.current = false;
      }

      return;
    }

    const panel = panelRef.current;

    if (!panel) return;

    const previousOverflow = document.body.style.overflow;
    const backgroundElements = Array.from(document.body.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement && element !== panel,
    );
    const previousInertValues = new Map(
      backgroundElements.map((element) => [element, element.inert]),
    );

    document.body.style.overflow = "hidden";
    backgroundElements.forEach((element) => {
      element.inert = true;
    });
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Tab" && panel) {
        const targets = Array.from(
          panel.querySelectorAll<HTMLElement>("a[href], button, summary"),
        ).filter((el) => el.getClientRects().length > 0);
        const first = targets[0];
        const last = targets[targets.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
      if (event.key === "Escape") {
        event.preventDefault();
        restoreFocusOnCloseRef.current = true;
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    function handleResize() {
      if (menuButtonRef.current?.getClientRects().length === 0) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      previousInertValues.forEach((wasInert, element) => {
        element.inert = wasInert;
      });
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  function closeMenuAndReturnFocus() {
    restoreFocusOnCloseRef.current = true;
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className="flex min-h-12 min-w-12 items-center justify-center gap-2 border border-border bg-transparent px-3 text-sm font-semibold"
        onClick={() => setIsOpen(true)}
        ref={menuButtonRef}
        type="button"
      >
        <Icon name="menu" />
        Menu
      </button>

      {isOpen
        ? createPortal(
            <div
              className="mobile-menu fixed inset-0 z-50 overflow-y-auto bg-background"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              id={panelId}
              ref={panelRef}
            >
              <Container>
                <div className="flex min-h-20 items-center justify-between gap-6 border-b border-border">
                  <Link
                    className="font-serif text-2xl leading-none no-underline"
                    href="/"
                    onClick={closeMenu}
                  >
                    {siteContent.shortName}
                  </Link>
                  <button
                    className="flex min-h-12 min-w-12 items-center justify-center gap-2 border border-border bg-transparent px-3 text-sm font-semibold"
                    onClick={closeMenuAndReturnFocus}
                    ref={closeButtonRef}
                    type="button"
                  >
                    <Icon name="close" />
                    Close
                  </button>
                </div>

                <nav aria-label="Mobile navigation" className="py-8">
                  <ul className="list-none space-y-2 p-0">
                    {items.map((item, index) => (
                      <li
                        className="mobile-menu-item border-b border-border"
                        key={item.href}
                        style={{ "--item": index } as CSSProperties}
                      >
                        {item.kind === "link" ? (
                          <Link
                            className="flex min-h-14 items-center text-xl font-semibold no-underline"
                            href={item.href}
                            aria-current={pathname === item.href ? "page" : undefined}
                            onClick={closeMenu}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <details className="group">
                            <summary data-active={pathname === item.href || pathname.startsWith(`${item.href}/`) || undefined} className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold [&::-webkit-details-marker]:hidden">
                              {item.label}
                              <Icon name="chevron" className="transition-transform group-open:rotate-180 motion-reduce:transition-none" />
                            </summary>
                            <div className="space-y-6 pb-6 pl-4">
                              {item.sections.map((section, index) => (
                                <div
                                  className="space-y-2"
                                  key={section.label ?? index}
                                >
                                  {section.label ? (
                                    <p className="type-label uppercase text-action">
                                      {section.label}
                                    </p>
                                  ) : null}
                                  <ul className="list-none space-y-1 p-0">
                                    {section.links.map((link) => (
                                      <li key={link.href}>
                                        <Link
                                          className="flex min-h-12 items-center font-semibold no-underline"
                                          href={link.href}
                                          aria-current={pathname === link.href ? "page" : undefined}
                                          onClick={closeMenu}
                                        >
                                          {link.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                              <Link
                                className="inline-flex min-h-12 items-center font-semibold text-action"
                                href={item.href}
                            aria-current={pathname === item.href ? "page" : undefined}
                                onClick={closeMenu}
                              >
                                View all {item.label.toLowerCase()}
                              </Link>
                            </div>
                          </details>
                        )}
                      </li>
                    ))}
                  </ul>

                  <Link
                    className="mt-8 flex min-h-14 items-center justify-center bg-action px-6 font-semibold text-action-foreground no-underline"
                    href="/book"
                    onClick={closeMenu}
                  >
                    Book a consultation
                  </Link>
                </nav>
              </Container>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
