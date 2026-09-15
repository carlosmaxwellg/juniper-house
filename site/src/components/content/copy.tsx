import type { CopyBlock } from "@/content/types";
import { Boundary } from "./shared";

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
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
