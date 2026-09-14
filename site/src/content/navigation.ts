export type NavigationLink = {
  readonly label: string;
  readonly href: string;
};

export type NavigationSection = {
  readonly label?: string;
  readonly links: readonly NavigationLink[];
};

export type NavigationItem =
  | (NavigationLink & { readonly kind: "link" })
  | {
      readonly desktopPanelColumns: 1 | 2;
      readonly kind: "menu";
      readonly label: string;
      readonly href: string;
      readonly sections: readonly NavigationSection[];
    };

export type FooterNavigationSection = NavigationSection & {
  readonly columnSpan: 2 | 4;
  readonly label: string;
};

export const primaryNavigation = [
  {
    desktopPanelColumns: 1,
    kind: "menu",
    label: "Concerns",
    href: "/concerns",
    sections: [
      {
        links: [
          {
            label: "Uneven tone & sun damage",
            href: "/concerns/uneven-tone-sun-damage",
          },
          {
            label: "Redness & visible vessels",
            href: "/concerns/redness-visible-vessels",
          },
          {
            label: "Texture & acne marks",
            href: "/concerns/texture-acne-marks",
          },
          {
            label: "Fine lines & facial balance",
            href: "/concerns/fine-lines-facial-balance",
          },
        ],
      },
    ],
  },
  {
    desktopPanelColumns: 2,
    kind: "menu",
    label: "Treatments",
    href: "/treatments",
    sections: [
      {
        label: "Skin health",
        links: [
          {
            label: "Custom Clinical Facial",
            href: "/treatments/custom-clinical-facial",
          },
          {
            label: "Corrective Chemical Peel",
            href: "/treatments/corrective-chemical-peel",
          },
        ],
      },
      {
        label: "Tone",
        links: [
          {
            label: "IPL Photofacial",
            href: "/treatments/ipl-photofacial",
          },
        ],
      },
      {
        label: "Texture",
        links: [
          {
            label: "Medical Microneedling",
            href: "/treatments/medical-microneedling",
          },
          {
            label: "Fractional Laser Resurfacing",
            href: "/treatments/fractional-laser-resurfacing",
          },
        ],
      },
      {
        label: "Injectables",
        links: [
          {
            label: "Neuromodulator Treatment",
            href: "/treatments/neuromodulator-treatment",
          },
          {
            label: "Hyaluronic Acid Filler",
            href: "/treatments/hyaluronic-acid-filler",
          },
        ],
      },
    ],
  },
  { kind: "link", label: "Our approach", href: "/approach" },
  { kind: "link", label: "About", href: "/about" },
] as const satisfies readonly NavigationItem[];

export const footerNavigation = [
  {
    columnSpan: 2,
    label: "Explore",
    links: [
      { label: "Concerns", href: "/concerns" },
      { label: "Treatments", href: "/treatments" },
      { label: "Planning consultation", href: "/consultation" },
    ],
  },
  {
    columnSpan: 2,
    label: "Juniper House",
    links: [
      { label: "Our approach", href: "/approach" },
      { label: "About", href: "/about" },
      { label: "Visit", href: "/visit" },
    ],
  },
  {
    columnSpan: 4,
    label: "Transparency",
    links: [
      { label: "Portfolio concept", href: "/portfolio-concept" },
      { label: "Medical disclaimer", href: "/medical-disclaimer" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
] as const satisfies readonly FooterNavigationSection[];
