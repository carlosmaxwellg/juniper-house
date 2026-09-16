import type { CopyBlock } from "@/content/types";
import { Boundary } from "./shared";
import { Icon } from "@/components/icon";

/** Group existing heading-led copy for editorial columns without changing its order. */
export function ChapterCopy({ blocks }: { blocks: CopyBlock[] }) {
  const chapters: CopyBlock[][] = [];
  for (const block of blocks) {
    if (block.kind === "heading" || block.kind === "quote" || !chapters.length || chapters.at(-1)?.[0].kind === "quote") {
      chapters.push([block]);
    } else {
      chapters[chapters.length - 1].push(block);
    }
  }
  return <div className="copy-chapters">{chapters.map((chapter, index) => (
    <div className={chapter[0].kind === "quote" ? "copy-chapter-boundary" : "copy-chapter"} key={index}>
      <Copy blocks={chapter} />
    </div>
  ))}</div>;
}

export function Copy({ blocks }: { blocks: CopyBlock[] }) {
  return (
    <div className="reading-copy">
      {blocks.map((block, i) => {
        if (block.kind === "list")
          return (
            <ul key={i}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        if (block.kind === "heading") return <h3 key={i}>{block.text}</h3>;
        if (block.kind === "quote")
          return (
            <Boundary key={i}>
              <p>{block.text}</p>
            </Boundary>
          );
        return (
          <p key={i} className="whitespace-pre-line">
            {block.text.includes(" → ") ? block.text.split(" → ").map((step, index) => (
              <span className="copy-sequence-step" key={`${index}-${step}`}>
                {index > 0 && <><span className="sr-only"> then </span><Icon name="right" /></>}
                {step}
              </span>
            )) : block.text}
          </p>
        );
      })}
    </div>
  );
}
