import type { CopyBlock } from "@/content/types";
import { Boundary } from "./shared";
import { Icon } from "@/components/icon";

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
