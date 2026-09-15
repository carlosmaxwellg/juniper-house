import type { ComponentPropsWithoutRef } from "react";

import type { LayoutSpace } from "./_shared";
import { withBaseClass } from "./_shared";

export type ClusterProps = ComponentPropsWithoutRef<"div"> & {
  space?: LayoutSpace;
};

export function Cluster({ className, space = "md", ...props }: ClusterProps) {
  return (
    <div
      className={withBaseClass("layout-cluster", className)}
      data-space={space}
      {...props}
    />
  );
}
