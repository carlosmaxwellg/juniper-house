import Link from "next/link";

import { Container } from "@/components/foundations";
import { siteContent } from "@/content/site";

export function PortfolioNotice() {
  return (
    <aside
      aria-label="Portfolio concept notice"
      className="border-b border-accent/30 bg-warning-surface py-2 text-sm"
    >
      <Container className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-center sm:gap-2">
        <p>
          <strong>Portfolio concept:</strong> {siteContent.portfolioNotice}
        </p>
        <Link
          className="shrink-0 font-semibold text-action underline decoration-2"
          href="/portfolio-concept"
        >
          About this concept
        </Link>
      </Container>
    </aside>
  );
}
