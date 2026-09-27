import { CarePlan } from "@/components/content/care-plan";
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
  const sections = kind === "approach" ? page.sections.flatMap(section => {
    if (section.title === "The method") return [{ ...section, title: "Your care, from assessment to review" }];
    if (section.title === "What we commit to") return [{ title: "What guides your plan", blocks: [
      { kind: "heading" as const, text: "What you can expect" }, ...section.blocks,
      { kind: "heading" as const, text: "What we avoid" }, ...page.sections.find(item => item.title === "What we avoid")!.blocks,
    ] }];
    return section.title === "What we avoid" ? [] : [section];
  }) : page.sections;
  return (
    <div className={utility ? `utility-page ${kind === "portfolio-concept" ? "case-study" : ""}` : `interior-page narrative-page narrative-${kind}`}>
      <EditorialHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.headline}
        introduction={page.hero.introduction}
        image={utility ? undefined : kind === "approach" ? <CarePlan /> : kind === "about" ? <ModelImage variant="provider" priority sizes="(max-width: 767px) 100vw, 45vw" /> : kind === "consultation" ? <ModelImage consultation priority sizes="(max-width: 767px) 120vw, 70vw" /> : <ModelImage interior priority sizes="(max-width: 767px) 120vw, 70vw" />}
      >
        {kind === "about" ? <>
          <p className="lead-provider-name"><strong>Rowan Ellis, PA-C</strong><br />Lead aesthetic provider · Illustrative profile</p>
          <Button />
        </> : kind === "consultation" ? (
          <>
            <Button>Choose a time</Button>
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
          </>
        ) : utility ? (
          <span />
        ) : (
          <Button />
        )}
      </EditorialHero>
      {sections.map((section, i) => {
        const chapters = (!utility || kind === "portfolio-concept") && section.blocks.filter(block => block.kind === "heading").length >= 3;
        return (
        <Section
          className={`content-section ${utility ? (i % 2 === 0 ? "" : "bg-surface-muted") : `narrative-section ${section.blocks.length === 1 && section.blocks[0].kind === "paragraph" ? "narrative-pause" : ""} narrative-section-${i + 1} ${i % 3 === 1 ? "bg-surface-muted" : ""}`}`}
          key={section.title}
          data-section={section.title}
        >
          <Container className={chapters ? "narrative-chapters" : utility ? "editorial-grid" : "editorial-grid chapter-grid"}>
            <div>
              <h2>{section.title}</h2>
            </div>
            {chapters ? <ChapterCopy blocks={section.blocks} /> : <Copy blocks={section.blocks} />}
          </Container>
          {kind === "about" && section.title === "A sense of place" && <Container className="place-gallery"><ModelImage interior sizes="(max-width: 767px) 100vw, 65vw" /><ModelImage variant="treatment" sizes="(max-width: 767px) 100vw, 50vw" /></Container>}
        </Section>
      );})}
      {children}
      {page.faqs.length > 0 && (
        <Section className="bg-surface-muted">
          <Container className="editorial-grid">
            <h2>Common questions</h2>
            <FaqList items={page.faqs} />
          </Container>

        </Section>
      )}
      {!utility && <FinalCta {...page.finalCta} />}
    </div>
  );
}
