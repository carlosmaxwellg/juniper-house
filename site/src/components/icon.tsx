type IconName = "arrow" | "right" | "down" | "chevron" | "menu" | "close" | "plus" | "check";

const paths: Record<IconName, string> = {
  arrow: "M5 19 19 5M5 5h14v14",
  right: "M4 12h16m-7-7 7 7-7 7",
  down: "M12 4v16m-7-7 7 7 7-7",
  chevron: "m6 9 6 6 6-6",
  menu: "M4 8h16M4 16h16",
  close: "m6 6 12 12M6 18 18 6",
  plus: "M5 12h14M12 5v14",
  check: "m5 12 4 4L19 6",
};

/** Decorative icons: the adjacent text supplies every control's accessible name. */
export function Icon({ name = "arrow", className = "" }: { name?: IconName; className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" className={`icon icon-${name} ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {name === "plus" ? <><path d="M5 12h14" /><path className="icon-plus-vertical" d="M12 5v14" /></> : <path d={paths[name]} />}
    </svg>
  );
}
