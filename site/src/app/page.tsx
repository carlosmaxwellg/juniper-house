
import { Icon } from "@/components/icon";
import Link from "next/link";
import { Container, Section } from "@/components/foundations";
import {
  Button,
  Eyebrow,
  FinalCta,
  ModelImage,
} from "@/components/content/shared";

import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Considered skin & aesthetic care · Portfolio concept",
  "Explore Juniper House, a fictional Austin clinic concept built around clear treatment choices and a 45-minute Planning Consultation.",
  "/",
);
const concerns = [
  [
    "uneven-tone-sun-damage",
    "Uneven tone and sun damage",
    "Brown spots, patchy pigment, or a complexion that looks less even than it once did.",
    "Explore uneven tone",
  ],
  [
    "redness-visible-vessels",
    "Redness and visible vessels",
    "Persistent flushing, diffuse redness, or small vessels that remain visible.",
    "Explore redness",
  ],
  [
    "texture-acne-marks",
    "Texture and acne marks",
    "Roughness, visible pores, or marks and indentations left after acne.",
    "Explore texture",
  ],
  [
    "fine-lines-facial-balance",
    "Fine lines and facial balance",
    "Changes in movement, volume, or proportion that you want to understand without losing what looks like you.",
    "Explore fine lines and balance",
  ],
];
const method = [
  [
    "Assess",
    "Listen to your goals and review the factors that may affect safety, suitability, and timing.",
  ],
  [
    "Prioritize",
    "Separate what may be useful now from what can wait—and what may not be appropriate.",
  ],
  [
    "Treat",
    "If you choose to proceed, use the most measured path that supports the agreed goal.",
  ],
  [
    "Review",
    "Look at response and recovery before repeating, combining, or escalating treatment.",
  ],
];
export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero" data-hero>
        <Container className="home-hero-grid">
          <div className="hero-copy">
            <Eyebrow>
              Skin health and medical aesthetics · Austin, Texas
            </Eyebrow>
            <h1 className="type-display">Know what fits <span>before you decide.</span></h1>
            <p className="type-lead">
              Thoughtful skin and aesthetic care begins with a clear
              understanding of your goals, your options, and what each path may
              involve. Juniper House helps you make a considered plan—without
              pressure to choose a treatment on the spot.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button />
              <Link className="text-link" href="/concerns">
                Explore your concerns <Icon />
              </Link>
            </div>
          </div>
          <ModelImage priority sizes="(max-width: 767px) 130vw, 80vw" />
        </Container>
      </section>
      <div className="trust-strip">
        <Container>
          <ul>
            {[
              "Qualified provider roles",
              "45-minute consultation · $150",
              "Prices and recovery made visible",
              "West Austin, Texas",
            ].map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </Container>
      </div>
      <Section className="home-concerns">
        <Container>
          <div className="section-heading home-section-heading">
            <Eyebrow>Start with the concern</Eyebrow>
            <h2>Start with what you’re noticing</h2>
            <p>
              You do not need to arrive knowing the name of a treatment. Begin
              with the change you want to understand, then see the approaches
              that may be worth discussing.
            </p>
          </div>
          <div className="concern-index">
            {concerns.map(([slug, name, body, label], i) => (
              <article className="concern-row" key={slug}>
                <span className="number">0{i + 1}</span>
                <h3>{name}</h3>
                <div><p>{body}</p>
                <Link className="text-link" href={`/concerns/${slug}`}>
                  {label} <Icon />
                </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="home-consultation">
        <Container>
          <div className="consultation-intro">
          <div>
            <Eyebrow>A consultation with something to show for it</Eyebrow>
            <h2>Leave with a plan, not a sales pitch.</h2>
          </div>
          <div className="consultation-copy">
            <p>
              Your Skin &amp; Aesthetic Planning Consultation is a focused
              45-minute appointment with the lead aesthetic provider. We’ll
              review what you’re noticing, relevant history, past treatment,
              skincare, timing, and budget before discussing options.
            </p>
            <p>
              You’ll receive a digital <strong>Now / Next / Later</strong> plan
              with priorities, likely costs, recovery considerations, and the
              reason behind each recommendation. You can take it away and decide
              in your own time.
            </p>
            <p className="consultation-price">
              <span>45 minutes</span>{" "}<span>$150</span>{" "}<span>No treatment required</span>
            </p>
            <p className="text-sm">
              $100 treatment credit on a first treatment of $350+ booked within
              60 days.
            </p>
            <Link className="text-link mt-5" href="/consultation">
              See how the consultation works <Icon />
            </Link>
          </div>
          </div>
          <div className="consultation-story">
          <ModelImage consultation sizes="(max-width: 767px) 115vw, 95vw" />
          <div className="plan-panel">
            <Eyebrow>Your personal care plan</Eyebrow>
            {[
              [
                "Now",
                "The most useful first priority—whether that is treatment, home-care support, more information, or referral.",
              ],
              [
                "Next",
                "Options that may make sense after the first step, with the order and reason explained.",
              ],
              [
                "Later",
                "Maintenance or future possibilities that do not need to compete for attention or budget today.",
              ],
            ].map(([title, body]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
          </div>
        </Container>
      </Section>
      <Section className="home-approach">
        <Container>
          <div className="section-heading">
            <Eyebrow>The Juniper House approach</Eyebrow>
            <h2>Considered care, step by step</h2>
          </div>
          <ol className="steps">
            {method.map(([name, body]) => (
              <li key={name}>
                <h3>{name}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
          <Link className="text-link mt-8" href="/approach">
            Read about our approach <Icon />
          </Link>
        </Container>
      </Section>
      <Section className="home-treatments">
        <Container>
          <div className="treatment-heading">
            <div>
            <Eyebrow>Options, with perspective</Eyebrow>
            <h2>A focused treatment menu</h2>
            </div>
            <Link className="text-link" href="/treatments">
              Compare treatments <Icon />
            </Link>
          </div>
          <div className="treatment-index">
            {[
              [
                "Maintain and support",
                "Custom Clinical Facial and Corrective Chemical Peel for hydration, barrier support, congestion, dullness, and selected superficial concerns.",
              ],
              [
                "Correct tone",
                "Peels, IPL, and fractional laser may be discussed for selected pigmentation, redness, visible vessels, or sun-related changes.",
              ],
              [
                "Improve texture",
                "Microneedling, peels, and fractional laser offer different levels of intensity for texture, acne marks, and fine lines.",
              ],
              [
                "Soften and balance",
                "Neuromodulators and conservative HA filler may be discussed when movement or volume—not skin quality alone—is the main consideration.",
              ],
            ].map(([title, body], i) => (
              <Link className="treatment-row" href={`/treatments#${title.toLowerCase().replaceAll(" ", "-")}`} key={title}>
                <span className="number" aria-hidden="true">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="home-provider">
        <Container>
          <div className="provider-intro">
          <div>
            <Eyebrow>Advice before intervention</Eyebrow>
            <h2>Meet your planning provider</h2>
            <p>
              <strong>Rowan Ellis, PA-C</strong> leads first-time planning
              consultations and selected medical-aesthetic treatments. The role
              is to clarify the decision—not to fit every concern to a
              procedure.
            </p>
            <Link className="text-link mt-4" href="/about">
              Meet your care team <Icon />
            </Link>
          </div>
            <div className="home-provider-portrait">
              <ModelImage variant="provider" sizes="(max-width: 767px) 100vw, 45vw" />
            <blockquote className="provider-quote">
              “A useful consultation may lead to treatment, a different
              sequence, or a recommendation to wait. The reasoning should be
              clear either way.”
            </blockquote>
            </div>
          </div>
          <div>
            <Eyebrow>What responsible care looks like here</Eyebrow>
            <div className="provider-principles">
            {[
              [
                "Prices you can see",
                "Starting prices and major cost factors appear before you book. Your plan should not depend on a surprise quote.",
              ],
              [
                "Roles you can understand",
                "Know who will assess or perform each service, and what their role covers.",
              ],
              [
                "Boundaries you can trust",
                "When a concern needs medical diagnosis, a different specialist, or no aesthetic treatment, the responsible next step is referral or pause.",
              ],
              [
                "No same-day pressure",
                "The Planning Consultation stands on its own. You can leave with the plan and decide later.",
              ],
            ].map(([title, body]) => (
              <article className="concern-card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section className="home-visit">
        <Container>
          <ModelImage interior sizes="100vw" />
          <div className="visit-details">
            <div><Eyebrow>West Austin</Eyebrow>
            <h2>Visit Juniper House</h2>
            </div>
            <p>
              Tuesday–Friday, 9:00 a.m.–6:00 p.m.
              <br />
              Saturday, 9:00 a.m.–3:00 p.m.
              <br />
              Sunday–Monday, closed
            </p>
            <div><p>
              Plan your arrival, parking, and accessibility needs.
            </p>
            <Link className="text-link mt-5" href="/visit">
              Plan your visit <Icon />
            </Link>
            </div>
          </div>
        </Container>
      </Section>
      <FinalCta
        title="Clarity before treatment."
        body="Bring the concern. Leave with a prioritized plan, realistic expectations, and room to decide."
      />
    </div>
  );
}
