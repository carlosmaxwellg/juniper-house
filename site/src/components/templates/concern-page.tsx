
import { Icon } from "@/components/icon";
import Link from "next/link";
import { Container, Section } from "@/components/foundations";
import {
  Boundary,
  Breadcrumbs,
  EditorialHero,
  FaqList,
  FinalCta,
} from "@/components/content/shared";
import { Copy } from "@/components/content/copy";
import { treatments } from "@/content/treatments";
import type { Concern } from "@/content/types";

export function ConcernPage({ concern: c }: { concern: Concern }) {
  return (
    <>
      <Container>
        <Breadcrumbs
          items={[{ label: "Concerns", href: "/concerns" }, { label: c.name }]}
        />
      </Container>
      <EditorialHero
        eyebrow={c.name}
        title={c.hero.headline}
        introduction={c.hero.introduction}
      />
      <Section>
        <Container className="editorial-grid">
          <div>
            <h2>What you may notice</h2>
            <Copy blocks={[{ kind: "list", items: c.notices }]} />
          </div>
          <div>
            <h2>What may influence it</h2>
            <p>{c.influences}</p>
            <h3 className="mt-8 mb-4">What assessment clarifies</h3>
            <p>{c.assessment}</p>
          </div>
        </Container>
      </Section>
      <Section className="bg-surface-muted">
        <Container>
          <div className="section-heading">
            <h2>Possible pathways</h2>
            <p>Concerns orient. Treatments explain. Consultation decides.</p>
          </div>
          <div className="pathway-grid">
            {c.pathways.map((path) => (
              <article className="concern-card" key={path.title}>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                {path.facts && (
                  <p className="font-semibold text-sm">{path.facts}</p>
                )}
                {path.treatmentSlugs.map((slug) => (
                  <Link
                    className="text-link mr-4"
                    href={`/treatments/${slug}`}
                    key={slug}
                  >
                    Explore {treatments.find((t) => t.slug === slug)!.name} <Icon />
                  </Link>
                ))}
              </article>
            ))}
          </div>
          <Boundary>
            <p>{c.medicalBoundary}</p>
          </Boundary>
        </Container>
      </Section>
      <Section>
        <Container className="editorial-grid">
          <h2>What your consultation clarifies</h2>
          <div>
            <Copy blocks={[{ kind: "list", items: c.consultationClarifies }]} />
            <Link className="text-link mt-6" href="/consultation">
              See how the consultation works <Icon />
            </Link>
          </div>
        </Container>
      </Section>
      <Section className="bg-surface-muted">
        <Container className="editorial-grid">
          <h2>Your questions, considered</h2>
          <FaqList items={c.faqs} />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="mb-8">Related treatments</h2>
          <div className="concern-grid">
            {c.relatedTreatmentSlugs.map((slug) => {
              const t = treatments.find((t) => t.slug === slug)!;
              return (
                <article className="concern-card" key={slug}>
                  <h3>
                    <Link href={`/treatments/${slug}`}>{t.name}</Link>
                  </h3>
                  <p>{t.shortDescription}</p>
                  <p className="font-semibold text-sm">
                    {t.quickFacts.Price} · {t.quickFacts.Downtime}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
      <FinalCta {...c.finalCta} />
    </>
  );
}
