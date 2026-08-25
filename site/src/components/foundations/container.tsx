import type { ComponentPropsWithoutRef } from "react";

import { withBaseClass } from "./_shared";

export type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div className={withBaseClass("layout-container", className)} {...props} />
  );
}
