import { pages } from "@/content/pages";

export function CarePlan() {
  const blocks = pages.consultation.sections[0].blocks;
  return (
    <article className="care-plan-artifact" aria-label="Now, Next, Later planning framework">
      <p className="eyebrow">Your personal care plan</p>
      <p className="care-plan-title">Now / Next / Later</p>
      <ol>
        {[0, 2, 4].map((index) => {
          const title = blocks[index];
          const body = blocks[index + 1];
          return <li key={index}>
            <h2>{"text" in title ? title.text : ""}</h2>
            <p>{"text" in body ? body.text : ""}</p>
          </li>;
        })}
      </ol>
    </article>
  );
}
