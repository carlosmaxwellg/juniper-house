export type CopyBlock =
  | { kind: "paragraph" | "heading" | "quote"; text: string }
  | { kind: "list"; items: string[] };
export type CopySection = { title: string; blocks: CopyBlock[] };
export type Faq = { question: string; answer: string };
export type Hero = { eyebrow: string; headline: string; introduction: string };
export type Treatment = {
  slug: string;
  name: string;
  shortDescription: string;
  group: string;
  hero: Hero;
  quickFacts: {
    Price: string;
    Duration: string;
    Downtime: string;
    "Typical course": string;
    Provider: string;
  };
  maySuit: string[];
  mayNotSuit: string[];
  process: CopyBlock[];
  timeline: CopyBlock[];
  alternatives: string[];
  providerStandard: string;
  risks: string;
  pricing: string;
  faqs: Faq[];
  relatedConcernSlugs: string[];
  finalCta: { title: string; body: string };
};
export type Concern = {
  slug: string;
  name: string;
  hero: Hero;
  shortDescription: string;
  notices: string[];
  influences: string;
  assessment: string;
  pathways: {
    title: string;
    description: string;
    facts?: string;
    treatmentSlugs: string[];
  }[];
  medicalBoundary: string;
  consultationClarifies: string[];
  relatedTreatmentSlugs: string[];
  faqs: Faq[];
  finalCta: { title: string; body: string };
};
export type NarrativePage = {
  name: string;
  hero: Hero;
  sections: CopySection[];
  faqs: Faq[];
  finalCta: { title: string; body: string };
};
