import type { ComponentPropsWithoutRef } from "react";

import { withBaseClass } from "./_shared";

export type ProseProps = ComponentPropsWithoutRef<"div">;

export function Prose({ className, ...props }: ProseProps) {
  return (
    <div className={withBaseClass("layout-prose", className)} {...props} />
  );
}
