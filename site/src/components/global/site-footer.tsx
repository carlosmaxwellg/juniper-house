import Link from "next/link";

import { Container, Grid, Stack } from "@/components/foundations";
import { footerNavigation } from "@/content/navigation";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-foreground py-16 text-surface">
      <Container>
        <Grid>
          <Stack className="col-span-4 lg:pr-12" space="sm">
            <Link
              className="font-serif text-3xl leading-tight no-underline"
              href="/"
            >
              {siteContent.name}
            </Link>
            <p className="max-w-sm text-surface/75">{siteContent.description}</p>
            <p className="type-label uppercase text-surface/60">
              {siteContent.location}
            </p>
          </Stack>

          {footerNavigation.map((section) => (
            <nav
              aria-label={`${section.label} footer navigation`}
              className={
                section.columnSpan === 4
                  ? "col-span-4"
                  : "col-span-2"
              }
              key={section.label}
            >
              <Stack space="sm">
                <p className="type-label uppercase text-surface/60">
                  {section.label}
                </p>
                <ul className="list-none space-y-2 p-0">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="inline-flex min-h-12 items-center text-sm font-semibold text-surface/90 decoration-2 hover:text-surface"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Stack>
            </nav>
          ))}
        </Grid>

        <div className="mt-12 border-t border-surface/20 pt-6 text-sm text-surface/70">
          <p>
            Juniper House is a fictional clinic concept created as a web design
            and development portfolio project.
          </p>
        </div>
      </Container>
    </footer>
  );
}
