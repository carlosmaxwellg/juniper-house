import type { Treatment } from "./types";

// Transcribed from outputs/approved/website-copy.md; approved copy remains authoritative.
export const treatments = [
  {
    slug: "custom-clinical-facial",
    name: "Custom Clinical Facial",
    shortDescription:
      "Personalized cleansing, exfoliation, hydration, and barrier support for general skin health, dullness, dehydration, or congestion.",
    group: "Maintain and support",
    hero: {
      eyebrow: "Custom Clinical Facial",
      headline: "Support the skin you have today.",
      introduction:
        "A Custom Clinical Facial adapts cleansing, exfoliation, hydration, and barrier support to what your skin can comfortably tolerate at the appointment. It is a maintenance treatment, not a substitute for diagnosing or treating a medical skin condition.",
    },
    quickFacts: {
      Price: "$225",
      Duration: "60 minutes",
      Downtime: "None to minimal",
      "Typical course": "One appointment or maintenance as useful",
      Provider: "Licensed esthetician",
    },
    maySuit: [
      "Dehydration or dullness",
      "Mild congestion",
      "Surface roughness",
      "Barrier support",
      "General maintenance before an event, with adequate planning",
    ],
    mayNotSuit: [
      "The skin is actively infected, significantly inflamed, or injured",
      "A new or changing lesion needs medical evaluation",
      "Recent procedures or medication make exfoliation inappropriate",
      "The goal requires treatment beyond an esthetician’s scope",
    ],
    process: [
      {
        kind: "heading",
        text: "Review",
      },
      {
        kind: "paragraph",
        text: "Your esthetician asks what you are using, how the skin feels, and what has recently changed.",
      },
      {
        kind: "heading",
        text: "Select",
      },
      {
        kind: "paragraph",
        text: "The protocol is adjusted rather than treating every client with the same sequence or intensity.",
      },
      {
        kind: "heading",
        text: "Treat",
      },
      {
        kind: "paragraph",
        text: "The appointment may include cleansing, tailored exfoliation, hydration, and supportive finishing products.",
      },
      {
        kind: "heading",
        text: "Maintain",
      },
      {
        kind: "paragraph",
        text: "You leave with simple home-care priorities and guidance on when—or whether—to return.",
      },
    ],
    timeline: [
      {
        kind: "paragraph",
        text: "Skin may feel hydrated and comfortable after the appointment. Temporary pinkness, sensitivity, or a breakout can occur, depending on the products and your skin. A facial does not promise a permanent change or treat every concern.",
      },
    ],
    alternatives: [
      "Choose a simpler home-care reset when the barrier needs time more than exfoliation.",
      "Discuss a Corrective Chemical Peel when superficial pigment or texture calls for a more targeted approach and you can accept more recovery.",
      "Seek dermatology care when the concern needs diagnosis or prescription management.",
    ],
    providerStandard:
      "The Custom Clinical Facial is performed by a licensed esthetician within the permitted scope. The esthetician should pause and refer when the concern or requested treatment falls outside that scope.",
    risks:
      "Possible responses include irritation, redness, sensitivity, allergic reaction, or temporary breakouts. Products, exfoliation, and extractions should be adjusted to the skin and disclosed allergies. This overview is not individual consent information.",
    pricing:
      "$225 per 60-minute appointment. Enhancements are not required to make the base service complete. Any future add-on must show its purpose and price before the appointment.",
    faqs: [
      {
        question: "Can I book this without the Planning Consultation?",
        answer:
          "Yes. New clients may choose the facial and complete a suitability intake. Medical or device-based concerns still begin with the appropriate consultation.",
      },
      {
        question: "Is this a Hydrafacial?",
        answer:
          "No specific branded device is implied. Products and methods are selected for the assessed need.",
      },
      {
        question: "Can I have it the day before an event?",
        answer:
          "That is not the safest first-time plan. Even low-downtime care can cause an unexpected response. Allow time, especially before a first appointment.",
      },
    ],
    relatedConcernSlugs: ["redness-visible-vessels"],
    finalCta: {
      title: "Want a wider plan, not only a facial?",
      body: "Book the Planning Consultation to compare maintenance with corrective or medical-aesthetic options.",
    },
  },
  {
    slug: "corrective-chemical-peel",
    name: "Corrective Chemical Peel",
    shortDescription:
      "A controlled chemical exfoliation selected for superficial pigment, texture, congestion, or dullness.",
    group: "Maintain and support",
    hero: {
      eyebrow: "Corrective Chemical Peel",
      headline: "Match the peel to the skin—not the trend.",
      introduction:
        "A chemical peel applies a selected solution to create controlled exfoliation. The formulation and depth affect what it may address, who should perform it, and how much recovery to expect.",
    },
    quickFacts: {
      Price: "$225–$350",
      Duration: "30–45 minutes",
      Downtime:
        "Minimal to approximately 7 days, depending on depth and protocol",
      "Typical course": "One treatment or a planned series after assessment",
      Provider:
        "Appropriately qualified or delegated provider for the selected peel depth",
    },
    maySuit: [
      "Superficial uneven tone or selected discoloration",
      "Dullness and rough-feeling skin",
      "Congestion or selected acne concerns",
      "Fine surface lines",
    ],
    mayNotSuit: [
      "The skin is infected, injured, or actively inflamed",
      "Recent sun exposure, tanning, procedures, or certain medication increase risk",
      "The pigment pattern needs diagnosis",
      "Healing history or skin sensitivity makes the proposed depth unsuitable",
    ],
    process: [
      {
        kind: "paragraph",
        text: "Consult → Prepare → Peel → Recover and review",
      },
      {
        kind: "paragraph",
        text: "Preparation may involve adjusting active skincare before treatment. At the appointment, the provider cleanses the area, applies the selected solution, monitors the response, and gives protocol-specific aftercare.",
      },
    ],
    timeline: [
      {
        kind: "list",
        items: [
          "Immediately: Warmth, tightness, pinkness, or little visible change, depending on the peel",
          "Following days: Dryness, flaking, peeling, or temporary darkening may occur",
          "Gradual change: Tone or texture may appear more even as the skin recovers",
          "Course: Some goals may require a series; progress should be reviewed before repeating",
        ],
      },
    ],
    alternatives: [
      "A Custom Clinical Facial may suit maintenance with less expected recovery.",
      "IPL may be considered for selected pigment or vessels when light-based treatment is appropriate.",
      "Fractional laser may address more persistent texture or pigment with greater cost and recovery.",
    ],
    providerStandard:
      "Provider qualifications and medical oversight depend on the peel formulation and depth. Ask who will assess and perform your peel; different depths require different qualifications.",
    risks:
      "Chemical peels can cause redness, irritation, swelling, blistering, infection, scarring, cold-sore reactivation, or temporary or lasting changes in skin color. Risk varies with depth, skin tone, health history, and aftercare. At-home or unsupervised high-strength peels can cause serious injury.",
    pricing:
      "$225–$350. Cost changes with the protocol, peel depth, treatment area, preparation, and required follow-up. Before agreeing to a series, review both the per-session price and the total cost.",
    faqs: [
      {
        question: "Will my skin visibly peel?",
        answer:
          "Possibly, but not every peel creates dramatic shedding. Visible peeling is not a reliable measure of quality or effectiveness.",
      },
      {
        question: "Are chemical peels suitable for darker skin tones?",
        answer:
          "They may be, but the formulation, depth, preparation, and provider experience matter. Assessment is essential because pigment changes are a potential risk.",
      },
      {
        question: "Can I use retinoids before a peel?",
        answer:
          "Do not change prescription or active products based on website advice. Your provider should review what you use and give protocol-specific preparation instructions.",
      },
    ],
    relatedConcernSlugs: ["uneven-tone-sun-damage", "texture-acne-marks"],
    finalCta: {
      title: "Find the appropriate depth and pace.",
      body: "Use a consultation to compare a peel with lower- or higher-intensity options.",
    },
  },
  {
    slug: "ipl-photofacial",
    name: "IPL Photofacial",
    shortDescription:
      "Broad-spectrum light used for selected visible pigment, redness, and vessels.",
    group: "Correct tone",
    hero: {
      eyebrow: "IPL Photofacial",
      headline: "Target selected pigment and redness with a plan.",
      introduction:
        "IPL—intense pulsed light—uses a range of light wavelengths to target selected pigment and visible vessels. It is not a laser, and it is not suitable for every pigment pattern, skin tone, or season.",
    },
    quickFacts: {
      Price: "From $375 per facial session",
      Duration: "Approximately 30–45 minutes",
      Downtime:
        "Mild redness, swelling, or temporary darkening of targeted pigment may occur",
      "Typical course":
        "Often discussed as more than one session; individual plan required",
      Provider: "Qualified laser professional under required medical oversight",
    },
    maySuit: [
      "Selected brown sun spots",
      "Diffuse visible redness",
      "Small facial vessels",
      "Uneven tone when the target and skin are appropriate",
    ],
    mayNotSuit: [
      "The skin is recently tanned or the person cannot avoid sun exposure",
      "The pigment pattern could worsen with light or heat",
      "Medication or a condition increases photosensitivity",
      "The skin tone, target, or history creates an unsuitable risk profile",
      "A lesion needs diagnosis",
    ],
    process: [
      {
        kind: "paragraph",
        text: "Consult → Prepare → Treat → Protect and review",
      },
      {
        kind: "paragraph",
        text: "The provider identifies the intended target, reviews photosensitivity and tan status, selects device settings, provides eye protection, and explains expected skin response. Cooling and aftercare depend on the device and protocol.",
      },
    ],
    timeline: [
      {
        kind: "list",
        items: [
          "Immediately: Warmth, redness, or mild swelling may occur",
          "Following days: Targeted brown pigment may look darker before it flakes or fades",
          "Gradual change: Redness or pigment may appear reduced over a planned course",
          "Maintenance: Sun exposure and the underlying concern affect recurrence",
        ],
      },
    ],
    alternatives: [
      "A chemical peel may suit selected superficial pigment with a different recovery pattern.",
      "Fractional laser may be considered when texture and more persistent sun-related changes overlap.",
      "Barrier support or medical referral may be the better first step for reactive or unexplained redness.",
    ],
    providerStandard:
      "IPL is performed by a qualified laser professional within the required Texas medical structure. Before proceeding, ask which device will be used, who will perform the treatment, and how the protocol fits your skin and intended target.",
    risks:
      "Light-based treatment can cause pain, redness, swelling, blistering, burns, infection, scarring, eye injury, or temporary or lasting changes in skin color. It may fail to produce the desired result, and selected pigment or redness can recur. Protective eyewear and appropriate assessment are essential.",
    pricing:
      "From $375 per facial session. Cost varies with treatment area, target, device, settings, and course. A series is considered only after suitability and response are assessed.",
    faqs: [
      {
        question: "Is IPL a laser?",
        answer:
          "No. IPL emits a range of light wavelengths; lasers use more specific wavelengths. Both are device-based procedures with benefits, limits, and risks.",
      },
      {
        question: "Can IPL treat melasma?",
        answer:
          "Melasma and other pigment patterns require careful assessment because heat or light may not be the right approach and can sometimes worsen pigmentation. This page does not determine suitability.",
      },
      {
        question: "How should I plan around sun exposure?",
        answer:
          "Tell the provider about recent tanning and upcoming travel or outdoor activity. Treatment timing and sun protection are part of the safety decision.",
      },
    ],
    relatedConcernSlugs: ["uneven-tone-sun-damage", "redness-visible-vessels"],
    finalCta: {
      title: "Light-based treatment begins with the right target.",
      body: "Use a consultation to assess the pigment or redness, compare alternatives, and plan around recovery.",
    },
  },
  {
    slug: "medical-microneedling",
    name: "Medical Microneedling",
    shortDescription:
      "A professional treatment using controlled needle punctures to support collagen remodeling for selected texture, scars, and fine lines.",
    group: "Improve texture",
    hero: {
      eyebrow: "Medical Microneedling",
      headline: "Build improvement gradually.",
      introduction:
        "Medical microneedling uses sterile needle cartridges to create controlled punctures in the skin. The healing response can support collagen remodeling, making the treatment worth discussing for selected texture, scars, and fine lines.",
    },
    quickFacts: {
      Price: "From $475 per session",
      Duration: "Approximately 60 minutes including preparation",
      Downtime: "About 2–4 days of redness or sensitivity",
      "Typical course":
        "Often a series, with progress reviewed between sessions",
      Provider: "Appropriately qualified medical or delegated provider",
    },
    maySuit: [
      "Selected acne scars",
      "Uneven texture",
      "Fine lines",
      "Visible pores",
      "Selected uneven tone, depending on assessment",
    ],
    mayNotSuit: [
      "There is active infection, inflamed acne, open skin, or an active outbreak",
      "Healing or scarring history raises concern",
      "Medication or a health condition affects healing or bleeding",
      "The desired improvement requires another modality or medical care",
    ],
    process: [
      {
        kind: "paragraph",
        text: "Consult → Prepare → Treat → Recover and review",
      },
      {
        kind: "paragraph",
        text: "After screening and skin preparation, a single-use sterile cartridge is moved across the planned area at selected settings. The provider gives specific aftercare and explains which redness, sensitivity, or pinpoint bleeding may be expected.",
      },
    ],
    timeline: [
      {
        kind: "list",
        items: [
          "Immediately: Redness, warmth, tightness, and mild swelling are common",
          "Following days: Dryness, sensitivity, or temporary roughness may occur",
          "Following weeks: Change develops gradually as the skin’s healing response continues",
          "Course: Texture or scars may require multiple sessions; full response is not immediate",
        ],
      },
    ],
    alternatives: [
      "A chemical peel may better suit selected surface pigment or congestion.",
      "Fractional laser may offer a different level of intensity for persistent texture, with different suitability and recovery.",
      "Active acne may need medical management before scar-focused treatment.",
    ],
    providerStandard:
      "The provider should use an appropriate device, a new cartridge for each client and session, infection-control procedures, and settings selected for the treatment goal and skin. Professional medical microneedling and at-home rollers are not equivalent.",
    risks:
      "Microneedling can cause skin damage, prolonged redness, pain, swelling, infection, bleeding, scarring, or changes in skin color. Results may be limited or uneven, and more than one procedure may be needed. This service does not use radiofrequency energy.",
    pricing:
      "From $475 per session. Cost varies with the treatment area, device, depth, preparation, and recommended course. Progress should be reviewed before extending a series.",
    faqs: [
      {
        question: "When will I see a change?",
        answer:
          "Some people notice early improvement within weeks, but collagen remodeling is gradual and fuller response may take months. Timing varies.",
      },
      {
        question: "Is at-home microneedling the same?",
        answer:
          "No. At-home tools differ in purpose, depth, sterility, and risk. They should not be presented as substitutes for a professionally assessed medical procedure.",
      },
      {
        question: "Is this RF microneedling?",
        answer:
          "No. This service is standard medical microneedling without radiofrequency energy.",
      },
    ],
    relatedConcernSlugs: ["texture-acne-marks", "fine-lines-facial-balance"],
    finalCta: {
      title: "Plan for gradual change, not an instant promise.",
      body: "Use a consultation to assess the texture, compare treatment intensity, and decide whether a series is worthwhile.",
    },
  },
  {
    slug: "fractional-laser-resurfacing",
    name: "Fractional Laser Resurfacing",
    shortDescription:
      "Targeted laser energy used to create controlled treatment zones for more persistent texture, selected pigment, and fine lines.",
    group: "Improve texture",
    hero: {
      eyebrow: "Fractional Laser Resurfacing",
      headline: "More intensive treatment deserves more planning.",
      introduction:
        "Fractional laser resurfacing delivers focused laser energy in a pattern that leaves areas of surrounding skin untreated. It may be discussed for selected texture, fine lines, scars, or sun-related changes when the expected benefit justifies the recovery and risk.",
    },
    quickFacts: {
      Price: "From $550 per session",
      Duration: "Approximately 45–60 minutes",
      Downtime:
        "Approximately 3–7 days, depending on device, settings, and treatment area",
      "Typical course": "Individual; one or more sessions may be discussed",
      Provider:
        "Qualified laser professional under appropriate medical oversight",
    },
    maySuit: [
      "More persistent uneven texture",
      "Selected acne scars",
      "Fine lines",
      "Selected pigment and cumulative sun-related change",
    ],
    mayNotSuit: [
      "The skin is tanned, infected, actively inflamed, or not ready to heal",
      "Medication, health history, or scarring tendency increases risk",
      "The skin tone or pigment concern requires a different device or approach",
      "The available recovery window is too short",
    ],
    process: [
      {
        kind: "paragraph",
        text: "Consult → Prepare → Treat → Recover → Review",
      },
      {
        kind: "paragraph",
        text: "Preparation may include skincare changes or other instructions based on the device and history. During treatment, eye protection and protocol-specific comfort measures are used. Aftercare focuses on healing, sun protection, and early contact if the response falls outside what was discussed.",
      },
    ],
    timeline: [
      {
        kind: "list",
        items: [
          "Immediately: Redness, warmth, swelling, or pinpoint crusting may occur",
          "Days 1–7: Visible recovery varies with treatment intensity; peeling or roughness may occur",
          "Following weeks and months: Improvement may continue gradually as healing and remodeling progress",
          "Course: The plan should be reassessed before repeating or increasing intensity",
        ],
      },
    ],
    alternatives: [
      "Microneedling may offer a different risk and recovery profile for selected texture concerns.",
      "A chemical peel may suit more superficial tone or texture.",
      "IPL targets selected pigment or vessels differently and is not a resurfacing laser.",
    ],
    providerStandard:
      "Before proceeding, ask about the specific laser, its authorized use, provider qualifications, oversight, protective measures, and emergency procedures. Your consultation explains why the proposed device and intensity fit your needs.",
    risks:
      "Laser treatment can cause incomplete or undesired results, pain, prolonged redness, swelling, bleeding, infection, cold-sore reactivation, scarring, eye injury, or temporary or lasting changes in skin color. Risks vary with the device, settings, treatment area, skin, and aftercare.",
    pricing:
      "From $550 per session. Cost varies with device, treatment area, intensity, preparation, and follow-up. A higher setting is not automatically a better plan.",
    faqs: [
      {
        question: "Is all fractional laser treatment the same?",
        answer:
          "No. Devices, wavelengths, treatment depth, and recovery profiles differ. Ask which exact technology is proposed; “fractional” does not describe one uniform service.",
      },
      {
        question: "Can I work the next day?",
        answer:
          "Do not assume that. Visible redness, swelling, roughness, or peeling may last several days, and deeper settings can require more recovery. Plan from the provider’s specific guidance.",
      },
      {
        question: "Will one session be enough?",
        answer:
          "Possibly for a modest goal, but many factors affect response. The clinic should review progress before promising or extending a course.",
      },
    ],
    relatedConcernSlugs: [
      "uneven-tone-sun-damage",
      "texture-acne-marks",
      "fine-lines-facial-balance",
    ],
    finalCta: {
      title: "Decide whether the intensity is worth it.",
      body: "Use a consultation to compare laser with lower-intensity options and plan the recovery realistically.",
    },
  },
  {
    slug: "neuromodulator-treatment",
    name: "Neuromodulator Treatment",
    shortDescription:
      "Prescription botulinum toxin used to temporarily reduce selected muscle activity and soften expression lines.",
    group: "Soften and balance",
    hero: {
      eyebrow: "Neuromodulator Treatment",
      headline: "Soften selected lines. Keep the expression yours.",
      introduction:
        "Neuromodulator treatment uses prescription botulinum toxin to temporarily reduce activity in selected muscles. The aim is a measured result based on your movement, anatomy, and preferences—not a standard number of units for every face.",
    },
    quickFacts: {
      Price:
        "From $14 per unit; an illustrative plan may total about $350–$700",
      Duration: "Approximately 30 minutes",
      Downtime: "Often minimal, though swelling or bruising may occur",
      "Typical course":
        "Temporary effect; timing varies by product, area, dose, and person",
      Provider:
        "Qualified nurse practitioner, physician assistant, or physician",
    },
    maySuit: [
      "Selected expression lines",
      "A desire to soften movement without removing all expression",
      "Specific goals supported by the product’s approved use and provider judgment",
    ],
    mayNotSuit: [
      "Screening identifies a contraindication or a condition requiring medical review",
      "The concern is primarily skin quality or volume rather than movement",
      "The requested effect or area is outside the provider’s responsible scope",
      "Expectations require a guaranteed or completely motionless result",
    ],
    process: [
      {
        kind: "paragraph",
        text: "Consult → Map movement → Treat if appropriate → Review",
      },
      {
        kind: "paragraph",
        text: "The provider reviews history, goals, facial movement, product choice, dose, and relevant risks. Small injections are placed in the agreed areas. Follow-up timing depends on the product and plan.",
      },
    ],
    timeline: [
      {
        kind: "list",
        items: [
          "Immediately: Small raised areas, redness, tenderness, or bruising may occur",
          "Following days: The effect begins gradually rather than at once",
          "Around 2 weeks: The provider may assess the settled response when clinically appropriate",
          "Over time: The effect is temporary and muscle activity returns gradually",
        ],
      },
    ],
    alternatives: [
      "Microneedling or fractional laser may better address fine lines related to skin quality.",
      "Filler addresses selected volume or contour concerns, not muscle movement, and carries a different risk profile.",
      "No treatment is appropriate when the line or movement does not meaningfully concern you.",
    ],
    providerStandard:
      "Only an appropriately licensed and trained healthcare professional should obtain and administer an authorized prescription botulinum toxin product. Ask which product is proposed and confirm that it comes from an authorized source.",
    risks:
      "Possible effects include pain, swelling, bruising, headache, asymmetry, unwanted weakness, eyelid or brow droop, dry eye, or an unsatisfactory result. Botulinum toxin products carry a boxed warning about the possible distant spread of toxin effect, which can cause serious symptoms including swallowing or breathing difficulty. Seek immediate medical care for trouble breathing or swallowing or other signs of botulism after treatment.",
    pricing:
      "From $14 per unit. Total cost depends on product, area, anatomy, movement, and the agreed dose. The illustrative $350–$700 range is planning guidance, not a quote or a required amount.",
    faqs: [
      {
        question: "Is this Botox?",
        answer:
          "Botox Cosmetic is one brand of prescription botulinum toxin. Ask which authorized product is proposed. Different neuromodulators are not all Botox Cosmetic.",
      },
      {
        question: "Will I still be able to move my face?",
        answer:
          "Preserving natural movement is the stated planning goal, but response varies and no exact result can be guaranteed. Dose and placement should follow anatomy and the agreed objective.",
      },
      {
        question: "Can I receive treatment the day before an event?",
        answer:
          "That is poor timing for a first treatment. Bruising, swelling, asymmetry, or an unexpected response can occur, and the effect develops over days.",
      },
    ],
    relatedConcernSlugs: ["fine-lines-facial-balance"],
    finalCta: {
      title: "Start with the movement and the goal.",
      body: "Use a consultation to discuss product, dose, risk, cost, and whether treatment fits at all.",
    },
  },
  {
    slug: "hyaluronic-acid-filler",
    name: "Hyaluronic Acid Filler",
    shortDescription:
      "Temporary injectable gel used for selected volume support and contour refinement in approved areas.",
    group: "Soften and balance",
    hero: {
      eyebrow: "Hyaluronic Acid Filler",
      headline: "Add only what supports the plan.",
      introduction:
        "Hyaluronic acid dermal filler is a temporary injectable gel used in selected approved areas to add volume or refine contour. Suitability depends on anatomy, product, area, health history, and whether the expected change is worth the material risk.",
    },
    quickFacts: {
      Price: "From $850 per syringe",
      Duration: "Approximately 45–60 minutes",
      Downtime:
        "Swelling and bruising may last several days; recovery varies by area",
      "Typical course":
        "Individual; more product is not treated as the default",
      Provider:
        "Qualified nurse practitioner, physician assistant, or physician with relevant training",
    },
    maySuit: [
      "Temporary volume support in selected approved areas",
      "Selected contour refinement",
      "A conservative facial-balancing goal supported by anatomy",
    ],
    mayNotSuit: [
      "There is active inflammation or infection near the treatment area",
      "Medical history, allergies, recent dental work, or other factors require delay or avoidance",
      "The requested area or outcome is not supported by product labeling or provider judgment",
      "The concern is better addressed through skin treatment, another professional, or no treatment",
    ],
    process: [
      {
        kind: "paragraph",
        text: "Consult → Assess anatomy → Select product and area → Treat if appropriate → Review",
      },
      {
        kind: "paragraph",
        text: "The provider explains the exact product, approved use, planned amount, technique, common reactions, serious vascular risks, and emergency plan before any injection. The goal and stopping point should be agreed before treatment begins.",
      },
    ],
    timeline: [
      {
        kind: "list",
        items: [
          "Immediately: Swelling, tenderness, redness, and bruising can affect how the result looks",
          "Following days: Early swelling often settles, but timing varies by product and area",
          "Later: Most HA filler is gradually absorbed; duration varies",
          "Review: Additional product should not be assumed before the initial result is assessed",
        ],
      },
    ],
    alternatives: [
      "Neuromodulator treatment affects selected muscle activity; it does not replace volume.",
      "Skin treatments may better address texture, pigment, or fine surface lines.",
      "Waiting or choosing no treatment avoids filler-related risk and may be the right decision.",
    ],
    providerStandard:
      "Filler injection is a medical procedure. Before proceeding, ask about the product’s FDA approval and intended treatment area, its patient labeling, your provider’s qualifications, and the plan for recognizing and responding to vascular complications.",
    risks:
      "Common reactions can include bruising, redness, swelling, pain, tenderness, itching, or lumps. Less common and rare complications can include infection, nodules, allergic reaction, migration, tissue damage, and a lasting undesired result. Accidental injection into a blood vessel can cause tissue death, vision abnormalities including blindness, stroke, and, rarely, death. Seek immediate medical attention for unusual pain, vision change, pale or discolored skin near the injection area, or stroke symptoms during or after treatment.",
    pricing:
      "From $850 per syringe. Cost depends on the selected product, approved area, anatomy, and agreed volume. The number of syringes is not a measure of quality, and unused product policies must be explained before treatment.",
    faqs: [
      {
        question: "Is filler permanent?",
        answer:
          "Most HA fillers are absorbed over time, but duration varies and an undesired effect or complication may not be simple to reverse. “Temporary” does not mean consequence-free.",
      },
      {
        question: "Can filler be dissolved?",
        answer:
          "Some HA filler may be reduced with hyaluronidase, but that is another medical intervention with risks. Complete or immediate restoration of the starting state is not guaranteed.",
      },
      {
        question: "Do I need a full syringe?",
        answer:
          "Product packaging and safe-use policy affect what can be used or discarded, but the aesthetic plan should be based on anatomy and goal—not pressure to place unnecessary volume.",
      },
    ],
    relatedConcernSlugs: ["fine-lines-facial-balance"],
    finalCta: {
      title: "Make the smallest useful decision first.",
      body: "Use a consultation to discuss the area, product, amount, alternatives, and material risks before deciding.",
    },
  },
] satisfies Treatment[];
