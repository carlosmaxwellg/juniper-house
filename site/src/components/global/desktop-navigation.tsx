
import { Icon } from "@/components/icon";
import Link from "next/link";

import type { NavigationItem } from "@/content/navigation";

import { DesktopNavigationBehavior } from "./desktop-navigation-behavior";

type DesktopNavigationProps = {
  items: readonly NavigationItem[];
};

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  const navigationId = "desktop-primary-navigation";

  return (
    <nav
      aria-label="Primary navigation"
      className="relative hidden lg:block"
      id={navigationId}
    >
      <DesktopNavigationBehavior navigationId={navigationId} />
      <ul className="flex list-none items-center gap-1 p-0">
        {items.map((item) => (
          <li key={item.href}>
            {item.kind === "link" ? (
              <Link
                className="flex min-h-12 items-center px-3 text-sm font-semibold no-underline decoration-2 hover:text-action hover:underline"
                href={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <details
                className="group"
                name="desktop-primary-navigation"
              >
                <summary className="flex min-h-12 cursor-pointer list-none items-center gap-2 px-3 text-sm font-semibold hover:text-action [&::-webkit-details-marker]:hidden">
                  {item.label}
                  <Icon name="chevron" className="transition-transform group-open:rotate-180 motion-reduce:transition-none" />
                </summary>
                <div
                  className={`absolute right-0 top-full z-50 border border-border bg-surface p-6 shadow-xl ${
                    item.desktopPanelColumns === 2
                      ? "grid w-[42rem] grid-cols-2 gap-8"
                      : "w-96"
                  }`}
                >
                  {item.sections.map((section, index) => (
                    <div className="space-y-3" key={section.label ?? index}>
                      {section.label ? (
                        <p className="type-label uppercase text-action">
                          {section.label}
                        </p>
                      ) : null}
                      <ul className="list-none space-y-2 p-0">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              className="block py-1 font-semibold no-underline hover:text-action hover:underline"
                              href={link.href}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link
                    className="col-span-full border-t border-border pt-4 font-semibold text-action"
                    href={item.href}
                  >
                    View all {item.label.toLowerCase()}
                  </Link>
                </div>
              </details>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
