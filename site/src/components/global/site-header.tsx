import Link from "next/link";

import { Container } from "@/components/foundations";
import { primaryNavigation } from "@/content/navigation";
import { siteContent } from "@/content/site";

import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-border bg-background">
      <Container className="flex min-h-20 items-center justify-between gap-3 sm:gap-6">
        <Link
          aria-label={`${siteContent.shortName}, home`}
          className="flex min-w-0 flex-col no-underline sm:shrink-0"
          href="/"
        >
          <span className="font-serif text-2xl leading-none">
            {siteContent.shortName}
          </span>
          <span className="type-label mt-1 hidden uppercase tracking-wider text-action sm:block">
            Skin &amp; Aesthetics
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <DesktopNavigation items={primaryNavigation} />
          <Link
            className="hidden min-h-12 items-center justify-center bg-action px-5 text-sm font-semibold text-action-foreground no-underline lg:flex"
            href="/book"
          >
            Book a consultation
          </Link>
          <MobileNavigation items={primaryNavigation} />
        </div>
      </Container>
    </header>
  );
}
