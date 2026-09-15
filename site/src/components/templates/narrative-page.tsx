import type { ReactNode } from "react";
import { Container, Section } from "@/components/foundations";
import {
  Button,
  EditorialHero,
  FaqList,
  FinalCta,
  ModelImage,
  QuickFacts,
} from "@/components/content/shared";
import { Copy } from "@/components/content/copy";
import type { NarrativePage as NarrativeContent } from "@/content/types";

export function NarrativePage({
  page,
  kind,
  children,
}: {
  page: NarrativeContent;
  kind: string;
  children?: ReactNode;
}) {
  const utility = [
    "portfolio-concept",
    "medical-disclaimer",
    "accessibility",
    "privacy",
    "terms",
  ].includes(kind);
  return (
    <>
      <EditorialHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.headline}
        introduction={page.hero.introduction}
      >
        {kind === "consultation" ? (
          <>
            <QuickFacts
              facts={{
                Duration: "45 minutes",
                Fee: "$150",
                Deliverable: "Digital Now / Next / Later plan",
              }}
            />
            <p className="mb-6 text-sm">
              $100 treatment credit toward a first treatment of $350+ booked
              within 60 days. Treatment is not performed during the
              consultation.
            </p>
            <Button>Choose a time</Button>
          </>
        ) : utility ? (
          <span />
        ) : (
          <Button />
        )}
      </EditorialHero>
      {page.sections.map((section, i) => (
        <Section
          className={`content-section ${i % 2 === 0 ? "" : "bg-surface-muted"}`}
          key={section.title}
        >
          <Container className="editorial-grid">
            <div>
              <h2>{section.title}</h2>
              {kind === "about" && section.title === "A sense of place" && (
                <ModelImage interior />
              )}
            </div>
            <Copy blocks={section.blocks} />
          </Container>
        </Section>
      ))}
      {children}
      {page.faqs.length > 0 && (
        <Section className="bg-surface-muted">
          <Container className="editorial-grid">
            <h2>Your questions, considered</h2>
            <FaqList items={page.faqs} />
          </Container>
        </Section>
      )}
      {!utility && <FinalCta {...page.finalCta} />}
    </>
  );
}
