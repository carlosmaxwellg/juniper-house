import Image from "next/image";
import Link from "next/link";
import { NarrativePage } from "@/components/templates/narrative-page";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";
import { CreatorContact } from "@/components/content/creator-contact";
import { Container, Section } from "@/components/foundations";
const page = pages["portfolio-concept"];
export const metadata = pageMetadata(
  page.name,
  page.hero.introduction,
  "/portfolio-concept",
);
export default function Page() {
  return (
    <NarrativePage page={page} kind="portfolio-concept">
      <Section className="case-study-screens">
        <Container>
          <h2>The experience in practice</h2>
          <p>Two screens from the working website: a tangible care plan and a clear first step into booking.</p>
          <div className="case-study-gallery">
            <figure>
              <Link href="/approach" aria-label="Explore the care-plan page">
                <Image src="/images/case-study/care-plan.webp" alt="Approach page with the Now, Next, Later care plan beside its introduction." width={1440} height={900} sizes="(max-width: 767px) 100vw, 90vw" />
              </Link>
              <figcaption>The care plan makes the consultation’s value visible before visitors book.</figcaption>
            </figure>
            <figure>
              <Link href="/book" aria-label="Try the simulated booking experience">
                <Image src="/images/case-study/booking.webp" alt="Booking introduction showing five steps, the consultation fee, and the demonstration notice." width={1440} height={900} sizes="(max-width: 767px) 100vw, 90vw" />
              </Link>
              <figcaption>The booking flow keeps price, progress, and expectations in view. This is a simulation.</figcaption>
            </figure>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="mb-5">Have a project in mind?</h2>
          <p className="mb-6">Created by Carlos Gonzalez — strategy, copy, design, and implementation with AI-assisted tools.</p>
          <CreatorContact />
        </Container>
      </Section>
    </NarrativePage>
  );
}
