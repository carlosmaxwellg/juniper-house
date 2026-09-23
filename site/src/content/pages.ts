import type { NarrativePage } from "./types";

export const pages = {
  consultation: {
    name: "Skin & Aesthetic Planning Consultation",
    hero: {
      eyebrow: "Your first appointment",
      headline: "Turn uncertainty into a useful plan.",
      introduction:
        "Bring what you are noticing, what you have tried, and what you want to understand. Leave with a prioritized care plan that explains what may fit, what can wait, likely cost and recovery, and when treatment is not the right next step.",
    },
    sections: [
      {
        title: "What you receive",
        blocks: [
          {
            kind: "heading",
            text: "Now",
          },
          {
            kind: "paragraph",
            text: "The most useful first priority—whether that is treatment, home-care support, more information, or referral.",
          },
          {
            kind: "heading",
            text: "Next",
          },
          {
            kind: "paragraph",
            text: "Options that may make sense after the first step, with the order and reason explained.",
          },
          {
            kind: "heading",
            text: "Later",
          },
          {
            kind: "paragraph",
            text: "Maintenance or future possibilities that do not need to compete for attention or budget today.",
          },
          {
            kind: "paragraph",
            text: "Your digital summary includes the recommended sequence, indicative price, expected recovery, likely course, and questions that still need to be resolved.",
          },
        ],
      },
      {
        title: "What happens in 45 minutes",
        blocks: [
          {
            kind: "heading",
            text: "Listen",
          },
          {
            kind: "paragraph",
            text: "We begin with your goals, what has changed, what you have tried, previous treatment, timing, and budget.",
          },
          {
            kind: "heading",
            text: "Assess",
          },
          {
            kind: "paragraph",
            text: "The provider reviews the visible concern and relevant history within the scope of the appointment. Baseline photographs are optional and require specific consent.",
          },
          {
            kind: "heading",
            text: "Explain",
          },
          {
            kind: "paragraph",
            text: "You compare appropriate options, alternatives, likely recovery, cost, limitations, and important risks in plain language.",
          },
          {
            kind: "heading",
            text: "Plan",
          },
          {
            kind: "paragraph",
            text: "You agree on a Now / Next / Later sequence. The plan may recommend treatment, a simpler first step, more time, or another professional.",
          },
        ],
      },
      {
        title: "Your planning provider",
        blocks: [
          {
            kind: "paragraph",
            text: "Rowan Ellis, PA-C · Lead aesthetic provider",
          },
          {
            kind: "paragraph",
            text: "Rowan leads first-time planning consultations and selected injectable treatments within the clinic’s medical structure. The consultation role is to bring clinical reasoning and client priorities into one understandable plan.",
          },
          {
            kind: "quote",
            text: "Illustrative provider profile; no real clinician or license is represented.",
          },
        ],
      },
      {
        title: "No pressure to decide that day",
        blocks: [
          {
            kind: "paragraph",
            text: "The consultation is a paid professional service, not a requirement to purchase treatment. You can take the plan away, compare options, or choose not to proceed.",
          },
          {
            kind: "paragraph",
            text: "If a recommendation falls outside Juniper House’s scope—or the responsible choice is no aesthetic treatment—the plan should say so clearly.",
          },
        ],
      },
      {
        title: "How the treatment credit works",
        blocks: [
          {
            kind: "paragraph",
            text: "$100 of the $150 consultation fee may be applied to your first treatment priced at $350 or more when that treatment is booked within 60 days of the consultation.",
          },
          {
            kind: "list",
            items: [
              "The credit applies only after consultation and suitability assessment.",
              "It does not require same-day treatment.",
              "It cannot be redeemed for cash or transferred.",
              "One credit applies to one eligible first treatment.",
              "Review cancellation, refund, and credit terms before making a payment. No payment is taken in this booking demo.",
            ],
          },
        ],
      },
      {
        title: "How to prepare",
        blocks: [
          {
            kind: "list",
            items: [
              "Bring or list the skincare and prescriptions you use.",
              "Note previous aesthetic procedures, approximate dates, and how you responded.",
              "Consider your budget, recovery tolerance, and upcoming events or travel.",
              "Arrive with the skin free from heavy makeup when practical.",
              "Do not stop prescribed medication unless the prescribing clinician tells you to.",
              "Do not send photographs, diagnoses, medication details, or sensitive health information through the public booking form. Discuss sensitive health information through an appropriate secure clinical intake.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why is the consultation paid?",
        answer:
          "The appointment reserves enough time for assessment, comparison, and a written plan. Its value does not depend on selling a procedure that day.",
      },
      {
        question: "Will I receive treatment at the first visit?",
        answer:
          "The appointment is designed for planning. Same-day treatment is not promised and may be unsuitable because of screening, preparation, timing, or the value of considering the recommendation.",
      },
      {
        question: "What if I already know which treatment I want?",
        answer:
          "Bring that preference. The provider will explain whether it fits your concern, what alternatives differ, and what needs to be true before proceeding.",
      },
      {
        question: "Can the consultation diagnose a skin condition?",
        answer:
          "No. It is not a dermatology diagnostic visit. A concerning, unclear, or medically complex finding should be referred to an appropriate clinician.",
      },
      {
        question: "Do I have to use the treatment credit?",
        answer:
          "No. The consultation remains useful on its own, and choosing not to proceed is an acceptable outcome.",
      },
    ],
    finalCta: {
      title: "A clearer decision begins here.",
      body: "Choose a consultation time and take the first step toward a clear Now / Next / Later plan.",
    },
  },
  approach: {
    name: "Our approach",
    hero: {
      eyebrow: "Considered care",
      headline: "Clarity before treatment.",
      introduction:
        "Good aesthetic care is not measured by how much is recommended. It is measured by whether the goal is understood, the reasoning is visible, the risk is proportionate, and the client remains in control.",
    },
    sections: [
      {
        title: "The method",
        blocks: [
          {
            kind: "heading",
            text: "Assess",
          },
          {
            kind: "paragraph",
            text: "Begin with goals, relevant history, current skin, previous treatment, timing, budget, and the factors that may change suitability.",
          },
          {
            kind: "heading",
            text: "Prioritize",
          },
          {
            kind: "paragraph",
            text: "Decide what may create the most useful progress now. Separate it from what can wait, what may be unnecessary, and what belongs with another professional.",
          },
          {
            kind: "heading",
            text: "Treat",
          },
          {
            kind: "paragraph",
            text: "If treatment is chosen, use the most measured plan that supports the agreed outcome. More intensity, product, or sessions are not assumed to be better.",
          },
          {
            kind: "heading",
            text: "Review",
          },
          {
            kind: "paragraph",
            text: "Assess response and recovery before repeating, combining, or escalating. The plan should adapt to evidence, not momentum.",
          },
        ],
      },
      {
        title: "What we commit to",
        blocks: [
          {
            kind: "list",
            items: [
              "Explain why an option may or may not fit",
              "Know who assesses and performs each service",
              "Show starting prices, major cost factors, and expected recovery",
              "Discuss alternatives, limitations, and material risks",
              "Use consent-based photography and responsible context for any future proof",
              "Make room for no treatment, more time, or referral",
              "Avoid artificial urgency and sales pressure",
            ],
          },
        ],
      },
      {
        title: "What we avoid",
        blocks: [
          {
            kind: "list",
            items: [
              "Choosing treatment from a trend, package, or before-and-after image alone",
              "Treating provider roles as interchangeable",
              "Guarantees about outcome, pain, permanence, or downtime",
              "Automatic escalation when a simpler plan may work",
              "Insecurity-based language about normal features or aging",
              "Hiding serious risks in an FAQ or consent form after the sale",
            ],
          },
        ],
      },
      {
        title: "A visible clinical structure",
        blocks: [
          {
            kind: "heading",
            text: "Medical director",
          },
          {
            kind: "paragraph",
            text: "Responsible for the appropriate medical structure, oversight, delegation, protocols, and escalation pathways required for the clinic’s scope.",
          },
          {
            kind: "heading",
            text: "Lead aesthetic provider",
          },
          {
            kind: "paragraph",
            text: "Conducts Planning Consultations, performs appropriate medical-aesthetic services, and explains how the recommended sequence fits the client.",
          },
          {
            kind: "heading",
            text: "Laser professional",
          },
          {
            kind: "paragraph",
            text: "Performs authorized light and laser procedures within applicable qualifications, protocols, delegation, and oversight.",
          },
          {
            kind: "heading",
            text: "Licensed esthetician",
          },
          {
            kind: "paragraph",
            text: "Provides facials and permitted superficial skin services, and refers concerns outside the esthetic scope.",
          },
          {
            kind: "quote",
            text: "Ask who is responsible for your care, what their role covers, and how medical oversight and urgent concerns are handled.",
          },
        ],
      },
      {
        title: "Conservative results are individual",
        blocks: [
          {
            kind: "paragraph",
            text: "“Natural-looking” is not a universal aesthetic. At Juniper House, it means defining the smallest worthwhile change for the person, preserving identity and movement where relevant, and accepting that no treatment may be the right choice.",
          },
        ],
      },
      {
        title: "Pricing should help you plan",
        blocks: [
          {
            kind: "paragraph",
            text: "Every treatment page shows a starting price or range, expected recovery, and the main factors that can change cost. A real quote follows assessment; it should not arrive as a surprise after the decision has been emotionally made.",
          },
        ],
      },
      {
        title: "Proof should explain—not perform",
        blocks: [
          {
            kind: "paragraph",
            text: "When comparing results, consider the treatment, timing, number of sessions, and individual differences. Model imagery is not evidence of a treatment outcome.",
          },
        ],
      },
      {
        title: "Knowing when to refer",
        blocks: [
          {
            kind: "paragraph",
            text: "Juniper House is not positioned as a dermatology practice or urgent-care service. New, changing, painful, bleeding, infected, or medically complex concerns require the appropriate clinician. Responsible scope is part of the service, not a footnote.",
          },
        ],
      },
    ],
    faqs: [],
    finalCta: {
      title: "Bring the question before choosing the treatment.",
      body: "The Planning Consultation turns the method into a personalized Now / Next / Later plan.",
    },
  },
  about: {
    name: "About Juniper House",
    hero: {
      eyebrow: "About Juniper House",
      headline: "A clinic designed around better decisions.",
      introduction:
        "A warmer, clearer approach to premium aesthetics: clinically responsible enough to name limits, personal enough to listen before recommending, and refined enough not to rely on hype.",
    },
    sections: [
      {
        title: "Why Juniper House exists",
        blocks: [
          {
            kind: "paragraph",
            text: "The category asks people to make complex choices through treatment menus, trends, and dramatic promises. Juniper House begins elsewhere: with the concern, the person, and the decision they are actually trying to make.",
          },
          {
            kind: "paragraph",
            text: "Our care begins with one premise—when clients understand the options, trade-offs, and order, they can choose with more confidence and less pressure.",
          },
        ],
      },
      {
        title: "Your care team",
        blocks: [
          {
            kind: "heading",
            text: "Rowan Ellis, PA-C",
          },
          {
            kind: "paragraph",
            text: "Lead aesthetic provider",
          },
          {
            kind: "paragraph",
            text: "Leads Planning Consultations and performs selected medical-aesthetic services. Rowan’s approach values conservative planning, visible reasoning, and the ability to recommend less.",
          },
          {
            kind: "heading",
            text: "Dr. Elena Marín, MD",
          },
          {
            kind: "paragraph",
            text: "Medical director",
          },
          {
            kind: "paragraph",
            text: "Oversees medical protocols, delegation, quality standards, and escalation pathways.",
          },
          {
            kind: "heading",
            text: "Riley Brooks",
          },
          {
            kind: "paragraph",
            text: "Laser professional",
          },
          {
            kind: "paragraph",
            text: "Focuses on selected IPL and fractional laser procedures within the required medical structure.",
          },
          {
            kind: "heading",
            text: "Avery Chen, LE",
          },
          {
            kind: "paragraph",
            text: "Licensed esthetician",
          },
          {
            kind: "paragraph",
            text: "Provides customized facials and eligible superficial skin services, recognizing when a concern needs medical assessment.",
          },
          {
            kind: "quote",
            text: "All names, portraits, credentials, and roles shown here are illustrative. No real provider or license is represented.",
          },
        ],
      },
      {
        title: "Lead-provider philosophy",
        blocks: [
          {
            kind: "heading",
            text: "The plan should make sense even if you decide not to treat.",
          },
          {
            kind: "paragraph",
            text: "The provider’s job is to translate goals and clinical considerations into a clear recommendation. That includes explaining alternatives, uncertainty, recovery, and material risk—and being willing to say that the useful next step is simpler care, more time, or another professional.",
          },
        ],
      },
      {
        title: "Oversight and role clarity",
        blocks: [
          {
            kind: "paragraph",
            text: "Medical direction does not make every team member qualified to perform every service. Before choosing a procedure, understand who will perform it, their qualifications, and how support or escalation works.",
          },
        ],
      },
      {
        title: "A sense of place",
        blocks: [
          {
            kind: "paragraph",
            text: "Juniper House brings a West Austin sensibility: quiet, contemporary, and welcoming without turning a medical-aesthetic visit into a resort fantasy. The environment supports privacy and ease; it does not substitute for clinical trust.",
          },
        ],
      },
    ],
    faqs: [],
    finalCta: {
      title: "Meet the plan before the procedure.",
      body: "Begin with a 45-minute consultation and leave with priorities you can understand.",
    },
  },
  visit: {
    name: "Visit and contact",
    hero: {
      eyebrow: "West Austin",
      headline: "Plan an easy first visit.",
      introduction:
        "A considered visit begins before you arrive. Review hours, plan the arrival details you need, and make space for an unhurried conversation.",
    },
    sections: [
      {
        title: "Location",
        blocks: [
          {
            kind: "paragraph",
            text: "West Austin, Texas. Street address and directions are not available.",
          },
        ],
      },
      {
        title: "Hours",
        blocks: [
          {
            kind: "list",
            items: [
              "Tuesday–Friday: 9:00 a.m.–6:00 p.m.",
              "Saturday: 9:00 a.m.–3:00 p.m.",
              "Sunday–Monday: Closed",
            ],
          },
        ],
      },
      {
        title: "Arrival",
        blocks: [
          {
            kind: "paragraph",
            text: "Before travelling to an appointment, confirm the arrival details you need:",
          },
          {
            kind: "list",
            items: [
              "Step-free route from parking to reception",
              "Accessible parking location",
              "Suite and elevator instructions, if applicable",
              "Public-transport and rideshare drop-off guidance",
              "How to ask for arrival assistance",
            ],
          },
          {
            kind: "paragraph",
            text: "Check the details that matter to your comfort before travelling.",
          },
        ],
      },
      {
        title: "General inquiries",
        blocks: [
          {
            kind: "paragraph",
            text: "For questions about visits, pricing, or the consultation process, use the general inquiry form below.",
          },
          {
            kind: "paragraph",
            text: "Please keep medical concerns and sensitive health information out of the form.",
          },
        ],
      },
      {
        title: "Contact boundaries",
        blocks: [
          {
            kind: "quote",
            text: "This website is not monitored for medical questions or urgent needs. If you have a medical emergency, call 911 in the United States or use your local emergency service. For concerning skin symptoms, contact an appropriate healthcare professional.",
          },
        ],
      },
    ],
    faqs: [],
    finalCta: {
      title: "Begin with a clear plan.",
      body: "Start with a 45-minute consultation to discuss your priorities, compare options, and decide what comes next.",
    },
  },
  "portfolio-concept": {
    name: "Juniper House case study",
    hero: {
      eyebrow: "Selected work · Carlos Gonzalez",
      headline: "A clearer path from curiosity to consultation.",
      introduction: "Juniper House is a self-initiated website for a fictional premium aesthetics clinic. The project brings strategy, editorial design, and a complete booking journey together around one decision: what care fits the person?",
    },
    sections: [
      {
        title: "The brief",
        blocks: [{ kind: "paragraph", text: "Create a warm, credible digital experience for people who want healthier-looking skin but are unsure which treatment to choose. Make the consultation valuable in its own right, explain costs and recovery early, and let visitors explore without pressure." }],
      },
      {
        title: "Decisions that shaped the site",
        blocks: [
          { kind: "heading", text: "Start with the concern" },
          { kind: "paragraph", text: "Concern-led navigation meets visitors in their own language. Treatment pages then make suitability, alternatives, recovery, and risks easy to compare." },
          { kind: "heading", text: "Make the next step tangible" },
          { kind: "paragraph", text: "A clearly priced, 45-minute consultation leads to a Now / Next / Later care plan. The booking journey keeps the offer and expectations visible as visitors choose a provider and time." },
          { kind: "heading", text: "Balance warmth with precision" },
          { kind: "paragraph", text: "Editorial typography, a restrained green-and-stone palette, and carefully labeled imagery create a premium atmosphere. Clear language and visible clinical boundaries carry the trust story, without invented testimonials or results." },
        ],
      },
      {
        title: "What was built",
        blocks: [{ kind: "paragraph", text: "A responsive Next.js website with shared concern and treatment templates, comparison tools, narrative pages, and a five-step simulated booking flow. Reusable content models keep prices, recovery guidance, and related services consistent. Keyboard navigation, reduced motion, privacy safeguards, and automated browser checks support the experience." },
          { kind: "paragraph", text: "This is an implemented portfolio concept, not a measured client success story. No live conversion, revenue, or clinical outcome claims are made." }],
      },
      {
        title: "Concept disclosure",
        blocks: [{ kind: "paragraph", text: "The clinic, providers, credentials, location, hours, prices, contact details, and availability are fictional. People and environments are generated or illustrative, not patients, real clinicians, or treatment results. No patient reviews, awards, or before-and-after outcomes are fabricated." },
          { kind: "paragraph", text: "Booking and inquiry forms simulate the interaction only: no appointment, payment, reminder, or clinic message is created. Use test information only; entries stay in browser memory and clear on completion or refresh. Do not enter health information. An operating clinic would require qualified clinical, legal, privacy, and regulatory review and real service integrations." }],
      },
    ],
    faqs: [],
    finalCta: { title: "Discuss your project", body: "Contact Carlos Gonzalez." },
  },
  "medical-disclaimer": {
    name: "Medical disclaimer",
    hero: {
      eyebrow: "About the portfolio concept",
      headline: "General information, not medical advice",
      introduction:
        "The content on this fictional website is provided for design and educational demonstration only. It does not diagnose a condition, recommend a treatment for an individual, establish a clinician–patient relationship, or replace advice from a qualified healthcare professional.",
    },
    sections: [
      {
        title: "Use of this information",
        blocks: [
          {
            kind: "paragraph",
            text: "Treatment candidacy, benefits, risks, recovery, product or device selection, and outcomes vary. A real provider must evaluate relevant health history, medication, anatomy, skin, goals, and other individual factors before recommending or performing a procedure.",
          },
          {
            kind: "paragraph",
            text: "If you have a new, changing, painful, bleeding, infected, or otherwise concerning skin finding, contact an appropriate medical professional. If you may be experiencing a medical emergency, call 911 in the United States or use your local emergency service.",
          },
          {
            kind: "paragraph",
            text: "Images are illustrative models unless explicitly and verifiably identified otherwise. They do not represent treatment outcomes.",
          },
        ],
      },
    ],
    faqs: [],
    finalCta: {
      title: "Not sure which path fits?",
      body: "Use a 45-minute Planning Consultation to compare appropriate options and leave with a clear Now / Next / Later plan.",
    },
  },
  accessibility: {
    name: "Accessibility statement",
    hero: {
      eyebrow: "About the portfolio concept",
      headline: "Accessibility at Juniper House",
      introduction:
        "This portfolio concept aims to provide an experience that can be understood and used across different devices and access needs. WCAG 2.2 Level AA is the implementation target. Automated accessibility checks and keyboard, focus, responsive reflow, text-spacing, and reduced-motion checks inform its development. This is not a claim of full conformance; manual screen-reader and Safari/iOS testing remain outstanding.",
    },
    sections: [
      {
        title: "Known limitation",
        blocks: [
          {
            kind: "paragraph",
            text: "Contact Carlos Gonzalez using the email link below to report an accessibility barrier. Include the page and what you were trying to do; please do not send health information.",
          },
        ],
      },
      {
        title: "Requesting accommodations in the demo",
        blocks: [
          {
            kind: "paragraph",
            text: "The booking flow includes an optional field for an accessibility or communication request. Your request stays in this demonstration and is not sent anywhere.",
          },
        ],
      },
    ],
    faqs: [],
    finalCta: {
      title: "Not sure which path fits?",
      body: "Use a 45-minute Planning Consultation to compare appropriate options and leave with a clear Now / Next / Later plan.",
    },
  },
} satisfies Record<string, NarrativePage>;
