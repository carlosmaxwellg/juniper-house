
import { Icon } from "@/components/icon";
import Link from "next/link";
import { Container, Section } from "@/components/foundations";
import { EditorialHero, FinalCta, ModelImage } from "@/components/content/shared";
import { treatments } from "@/content/treatments";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Compare treatments",
  "Compare illustrative treatment prices, recovery, provider roles, and alternatives in the Juniper House portfolio concept.",
  "/treatments",
);
export default function Page() {
  return (
    <div className="interior-page treatments-index">
      <EditorialHero
        image={<ModelImage variant="treatment" priority sizes="(max-width: 767px) 100vw, 50vw" />}
        eyebrow="Focused treatment menu"
        title="Compare the options without choosing alone."
        introduction="This menu gives you the practical facts: what each treatment may address, who performs it, what recovery can involve, and where alternatives differ. Final suitability depends on individual assessment."
      />
      <Section>
        <Container className="editorial-grid">
          <h2>Not sure what you need?</h2>
          <div>
            <p>
              That is the expected starting point. The Planning Consultation is
              designed to separate overlapping concerns, compare appropriate
              options, and set a useful order.
            </p>
            <Link className="text-link mt-5" href="/consultation">
              See how the consultation works <Icon />
            </Link>
          </div>
        </Container>
      </Section>
      {[
        "Maintain and support",
        "Correct tone",
        "Improve texture",
        "Soften and balance",
      ].map((group, i) => (
        <Section className={i % 2 === 0 ? "bg-surface-muted" : ""} key={group}>
          <Container>
            <h2 className="mb-8">{group}</h2>
            <div className="concern-grid">
              {treatments
                .filter((t) => t.group === group)
                .map((t) => (
                  <article className="concern-card" key={t.slug}>
                    <h3>{t.name}</h3>
                    <p>{t.shortDescription}</p>
                    <dl className="treatment-card-facts">
                      {Object.entries(t.quickFacts).map(([label, value]) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <Link
                      className="text-link mt-5"
                      href={`/treatments/${t.slug}`}
                    >
                      Explore {t.name} <Icon />
                    </Link>
                  </article>
                ))}
            </div>
          </Container>
        </Section>
      ))}
      <Section>
        <Container>
          <h2 className="mb-8">At-a-glance comparison</h2>
          <div className="comparison">
            {treatments.map((t) => (
              <div className="comparison-row" key={t.slug}>
                <Link href={`/treatments/${t.slug}`}>{t.name}</Link>
                <p>
                  <span>Starting price</span>
                  {t.quickFacts.Price}
                </p>
                <p>
                  <span>Typical visible recovery</span>
                  {t.quickFacts.Downtime}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm mt-5">
            Recovery varies with the person, treatment area, protocol, device,
            and intensity. These ranges are orientation, not a promise.
          </p>
        </Container>
      </Section>
      <Section className="bg-surface-muted">
        <Container className="editorial-grid">
          <h2>How suitability is decided</h2>
          <ul className="reading-copy list-disc pl-5">
            <li>
              Your goal and the smallest change that would feel worthwhile
            </li>
            <li>Skin tone, condition, and healing history</li>
            <li>
              Medical history, medication, allergies, and previous procedures
            </li>
            <li>
              Current inflammation, infection, tan, pregnancy, or other relevant
              factors
            </li>
            <li>
              Time available for preparation, recovery, and gradual change
            </li>
            <li>
              Whether another provider or no treatment is more appropriate
            </li>
          </ul>
        </Container>
      </Section>
      <FinalCta />
    </div>
  );
}
