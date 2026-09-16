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
import { Copy, ChapterCopy } from "@/components/content/copy";
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
    <div className={utility ? "utility-page" : `interior-page narrative-page narrative-${kind}`}>
      <EditorialHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.headline}
        introduction={page.hero.introduction}
        image={utility ? undefined : kind === "consultation" || kind === "approach" ? <ModelImage consultation priority sizes="(max-width: 767px) 120vw, 70vw" /> : <ModelImage interior priority sizes="(max-width: 767px) 120vw, 70vw" />}
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
      {page.sections.map((section, i) => {
        const chapters = !utility && section.blocks.filter(block => block.kind === "heading").length >= 3;
        return (
        <Section
          className={`content-section ${utility ? (i % 2 === 0 ? "" : "bg-surface-muted") : `narrative-section narrative-section-${i + 1} ${i % 3 === 1 ? "bg-surface-muted" : ""}`}`}
          key={section.title}
        >
          <Container className={chapters ? "narrative-chapters" : "editorial-grid"}>
            <div>
              <h2>{section.title}</h2>
            </div>
            {chapters ? <ChapterCopy blocks={section.blocks} /> : <Copy blocks={section.blocks} />}
          </Container>
        </Section>
      );})}
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
    </div>
  );
}
