import type { ComponentPropsWithoutRef } from "react";

import { withBaseClass } from "./_shared";

export type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={withBaseClass("layout-section", className)}
      {...props}
    />
  );
}
