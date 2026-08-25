import type { ComponentPropsWithoutRef } from "react";

import { withBaseClass } from "./_shared";

export type GridProps = ComponentPropsWithoutRef<"div">;

export function Grid({ className, ...props }: GridProps) {
  return <div className={withBaseClass("layout-grid", className)} {...props} />;
}
