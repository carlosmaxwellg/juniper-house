import { pages } from "@/content/pages";

/**
 * The Now / Next / Later plan staged as a document you could be handed.
 * `hero` settles on arrival (Approach); `section` settles as it scrolls into view (home).
 * Underlying sheets are decorative; the plan itself stays a plain ordered list.
 */
export function CarePlan({
  variant = "hero",
  headingLevel = 2,
}: {
  variant?: "hero" | "section";
  headingLevel?: 2 | 3;
}) {
  const blocks = pages.consultation.sections[0].blocks;
  const Heading = `h${headingLevel}` as const;
  return (
    <article
      className="care-plan-artifact"
      data-variant={variant}
      aria-label="Now, Next, Later planning framework"
    >
      <span className="care-plan-sheet care-plan-sheet-back" aria-hidden="true" />
      <span className="care-plan-sheet care-plan-sheet-middle" aria-hidden="true" />
      <div className="care-plan-sheet care-plan-sheet-front">
        <header className="care-plan-header">
          <p className="eyebrow">Your personal care plan</p>
          <p className="care-plan-meta">Prepared after your Planning Consultation</p>
        </header>
        <p className="care-plan-title">Now / Next / Later</p>
        <ol>
          {[0, 2, 4].map((index, tier) => {
            const title = blocks[index];
            const body = blocks[index + 1];
            return (
              <li key={index}>
                <span className="care-plan-tier" aria-hidden="true">0{tier + 1}</span>
                <div>
                  <Heading>{"text" in title ? title.text : ""}</Heading>
                  <p>{"text" in body ? body.text : ""}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="care-plan-footer">
          <span>Rowan Ellis, PA-C · Lead aesthetic provider</span>
          <span>Illustrative framework</span>
        </p>
      </div>
    </article>
  );
}
