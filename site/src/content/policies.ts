import type { NarrativePage } from "./types";
const finalCta = { title: "", body: "" };
export const privacy: NarrativePage = {
  name: "Privacy in this demonstration",
  hero: {
    eyebrow: "Portfolio transparency",
    headline: "Your details stay in the demonstration.",
    introduction:
      "Juniper House is a fictional portfolio website. Its booking and inquiry forms demonstrate an interface; they do not contact a clinic.",
  },
  sections: [
    {
      title: "Form information",
      blocks: [
        {
          kind: "paragraph",
          text: "Use test information only. The application holds form entries in browser memory while you use the flow. It does not send them to a server, put them in URLs, or save them in cookies, local storage, or a database. Completing, leaving, or refreshing the demonstration clears its entries.",
        },
        {
          kind: "paragraph",
          text: "Do not enter health information, medical history, photographs, payment details, or real personal information. Browser extensions and browser features are outside this application's control.",
        },
      ],
    },
    {
      title: "Site delivery",
      blocks: [
        {
          kind: "paragraph",
          text: "Loading this site requests pages, scripts, fonts, and images from its host. Hosting infrastructure may process standard connection information, including IP addresses and request logs. The application does not include advertising, analytics, session replay, or third-party form services.",
        },
      ],
    },
    {
      title: "No clinic records",
      blocks: [
        {
          kind: "paragraph",
          text: "There is no appointment system, patient record, payment account, mailing list, or clinic inbox behind this concept. The creator’s public email is a real contact channel for this project, separate from the simulated clinic.",
        },
      ],
    },
    {
      title: "About this notice",
      blocks: [
        {
          kind: "paragraph",
          text: "This notice describes the portfolio application's behavior. It is not a privacy policy for an operating healthcare practice. Hosting-specific details must be confirmed before public deployment. Contact Carlos Gonzalez through the email link on the case study or accessibility page.",
        },
      ],
    },
  ],
  faqs: [],
  finalCta,
};
export const terms: NarrativePage = {
  name: "Terms of the portfolio demonstration",
  hero: {
    eyebrow: "Portfolio transparency",
    headline: "An experience to explore. A fictional clinic.",
    introduction:
      "Juniper House demonstrates website strategy, design, copy, and development. No clinical service is offered through this website.",
  },
  sections: [
    {
      title: "Demonstration use",
      blocks: [
        {
          kind: "paragraph",
          text: "Appointments, schedules, fees, treatment credits, people, credentials, hours, and contact details are illustrative. Completing a form creates no booking, payment, agreement for treatment, or message to a clinic. No cancellation fee or treatment credit applies to the demonstration.",
        },
      ],
    },
    {
      title: "Educational content",
      blocks: [
        {
          kind: "paragraph",
          text: "Information on this site cannot diagnose a condition, determine individual suitability, establish a clinician–patient relationship, or replace a qualified healthcare professional. Read the Medical Disclaimer for the limits of this content.",
        },
      ],
    },
    {
      title: "Images and proof",
      blocks: [
        {
          kind: "paragraph",
          text: "The portrait and environment are generated illustrations. They do not show patients, actual providers, an operating location, or treatment outcomes. This concept makes no claim of verified reviews, clinical results, or professional credentials.",
        },
      ],
    },
    {
      title: "Use test details",
      blocks: [
        {
          kind: "paragraph",
          text: "Do not provide medical information, clinical photographs, payment information, or real personal details. Demonstration entries are temporary and are not submitted or permanently stored by the application.",
        },
      ],
    },
    {
      title: "Adapting the concept",
      blocks: [
        {
          kind: "paragraph",
          text: "An operating clinic would need its own verified facts, clinical review, legal terms, privacy practices, accessibility support, and qualified scheduling and intake systems before using this concept.",
        },
      ],
    },
  ],
  faqs: [],
  finalCta,
};
