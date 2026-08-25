import type { ComponentPropsWithoutRef } from "react";

import type { LayoutSpace } from "./_shared";
import { withBaseClass } from "./_shared";

export type StackProps = ComponentPropsWithoutRef<"div"> & {
  space?: LayoutSpace;
};

export function Stack({
  className,
  space = "md",
  ...props
}: StackProps) {
  return (
    <div
      className={withBaseClass("layout-stack", className)}
      data-space={space}
      {...props}
    />
  );
}
