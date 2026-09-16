
import { Icon } from "@/components/icon";
import Link from "next/link";
import { Container, Section } from "@/components/foundations";
import { Boundary, EditorialHero, FinalCta } from "@/components/content/shared";
import { concerns } from "@/content/concerns";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Explore by concern",
  "Explore skin and aesthetic concerns, possible pathways, and when medical assessment should come first. Fictional portfolio concept.",
  "/concerns",
);
export default function Page() {
  return (
    <>
      <EditorialHero
        eyebrow="Explore by concern"
        title="Start with what you want to understand."
        introduction="The same visible change can have more than one possible path. Explore common concerns for orientation, then use a consultation to decide what—if anything—belongs in your plan."
      />
      <Section>
        <Container>
          <h2 className="mb-8">Primary concerns</h2>
          <div className="concern-grid">
            {concerns.map((c, i) => (
              <article className="concern-card" key={c.slug}>
                <span className="number">0{i + 1}</span>
                <h3>{c.name}</h3>
                <p>{c.shortDescription}</p>
                <Link className="text-link" href={`/concerns/${c.slug}`}>
                  Explore {c.name.toLowerCase()} <Icon />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-surface-muted">
        <Container className="editorial-grid">
          <div>
            <h2>Supporting concerns</h2>
            <h3 className="mb-4">Dullness and dehydration</h3>
            <p>
              Sometimes the useful first step is simpler: barrier support,
              hydration, a tailored facial, or an adjusted home routine.
            </p>
            <h3 className="mt-8 mb-4">General maintenance</h3>
            <p>
              For people who feel comfortable with their skin and want a
              sensible professional plan without chasing every trend.
            </p>
            <Link
              className="text-link mt-6"
              href="/treatments/custom-clinical-facial"
            >
              Explore Custom Clinical Facial <Icon />
            </Link>
          </div>
          <div>
            <h2>Concerns often overlap</h2>
            <p>
              Uneven tone may sit alongside sensitivity. Fine lines may reflect
              movement, sun exposure, hydration, or changes in volume. Acne
              marks may include both color and texture. That overlap is why this
              site offers pathways, not self-diagnosis.
            </p>
            <Link className="text-link mt-6" href="/consultation">
              What the consultation separates <Icon />
            </Link>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="mb-6">When aesthetic care is not the first step</h2>
          <Boundary>
            <p>
              New, changing, painful, bleeding, infected, or otherwise
              concerning skin findings should be assessed by an appropriate
              medical professional. This website cannot diagnose a skin
              condition. Seek urgent or emergency care when symptoms warrant it.
            </p>
          </Boundary>
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
