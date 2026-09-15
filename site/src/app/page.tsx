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
    <>
      <section className="home-hero" data-hero>
        <Container className="home-hero-grid">
          <div>
            <Eyebrow>
              Skin health and medical aesthetics · Austin, Texas
            </Eyebrow>
            <h1 className="type-display">Know what fits before you decide.</h1>
            <p className="type-lead">
              Thoughtful skin and aesthetic care begins with a clear
              understanding of your goals, your options, and what each path may
              involve. Juniper House helps you make a considered plan—without
              pressure to choose a treatment on the spot.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button />
              <Link className="text-link" href="/concerns">
                Explore your concerns <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <ModelImage priority />
        </Container>
      </section>
      <div className="trust-strip">
        <Container>
          <ul>
            {[
              "Qualified provider roles",
              "45-minute consultation · $150",
              "Prices and recovery made visible",
              "West Austin concept location",
            ].map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </Container>
      </div>
      <Section>
        <Container>
          <div className="section-heading">
            <Eyebrow>Start with the concern</Eyebrow>
            <h2>Start with what you’re noticing</h2>
            <p>
              You do not need to arrive knowing the name of a treatment. Begin
              with the change you want to understand, then see the approaches
              that may be worth discussing.
            </p>
          </div>
          <div className="concern-grid">
            {concerns.map(([slug, name, body, label], i) => (
              <article className="concern-card" key={slug}>
                <span className="number">0{i + 1}</span>
                <h3>{name}</h3>
                <p>{body}</p>
                <Link className="text-link" href={`/concerns/${slug}`}>
                  {label} <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-surface-muted">
        <Container className="editorial-grid">
          <div>
            <Eyebrow>A consultation with something to show for it</Eyebrow>
            <h2>Leave with a plan, not a sales pitch.</h2>
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
            <p className="font-semibold">
              45 minutes · $150 · No treatment required
            </p>
            <p className="text-sm">
              $100 treatment credit on a first treatment of $350+ booked within
              60 days.
            </p>
            <Link className="text-link mt-5" href="/consultation">
              See how the consultation works <span aria-hidden="true">↗</span>
            </Link>
          </div>
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
        </Container>
      </Section>
      <Section>
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
            Read about our approach <span aria-hidden="true">↗</span>
          </Link>
        </Container>
      </Section>
      <Section className="bg-surface-muted">
        <Container className="editorial-grid">
          <div>
            <Eyebrow>Options, with perspective</Eyebrow>
            <h2>A focused treatment menu</h2>
            <Link className="text-link" href="/treatments">
              Compare treatments <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div>
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
            ].map(([title, body]) => (
              <article className="concern-card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="editorial-grid">
          <div>
            <Eyebrow>Advice before intervention</Eyebrow>
            <h2>Meet your planning provider</h2>
            <p>
              <strong>Rowan Ellis, PA-C</strong> leads first-time planning
              consultations and selected medical-aesthetic treatments. The role
              is to clarify the decision—not to fit every concern to a
              procedure.
            </p>
            <blockquote className="font-serif text-3xl leading-snug my-8">
              “A useful consultation may lead to treatment, a different
              sequence, or a recommendation to wait. The reasoning should be
              clear either way.”
            </blockquote>
            <p className="text-sm">
              Rowan Ellis is a fictional provider profile created for this
              portfolio concept. Credentials and practice history are
              illustrative and must not be treated as real.
            </p>
            <Link className="text-link mt-4" href="/about">
              Meet the fictional team <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div>
            <Eyebrow>What responsible care looks like here</Eyebrow>
            {[
              [
                "Prices you can see",
                "Starting prices and major cost factors appear before you book. Your plan should not depend on a surprise quote.",
              ],
              [
                "Roles you can understand",
                "Each service identifies the type of professional who would assess or perform it. “The team” is not treated as interchangeable.",
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
        </Container>
      </Section>
      <Section className="bg-surface-muted">
        <Container className="editorial-grid items-center">
          <ModelImage interior />
          <div>
            <Eyebrow>West Austin · Illustrative location</Eyebrow>
            <h2>Visit Juniper House</h2>
            <p>
              Tuesday–Friday, 9:00 a.m.–6:00 p.m.
              <br />
              Saturday, 9:00 a.m.–3:00 p.m.
              <br />
              Sunday–Monday, closed
            </p>
            <p>
              Explore illustrative arrival, parking, and accessibility
              information. There is no operating clinic or real clinic address.
            </p>
            <Link className="text-link mt-5" href="/visit">
              Plan your visit <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </Container>
      </Section>
      <FinalCta
        title="Clarity before treatment."
        body="Bring the concern. Leave with a prioritized plan, realistic expectations, and room to decide."
      />
    </>
  );
}
