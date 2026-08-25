export type LayoutSpace = "xs" | "sm" | "md" | "lg" | "xl";

export function withBaseClass(baseClass: string, className?: string) {
  return className ? `${baseClass} ${className}` : baseClass;
}
