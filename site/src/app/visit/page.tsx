import { NarrativePage } from "@/components/templates/narrative-page";
import { Container, Section } from "@/components/foundations";
import { InquiryForm } from "@/components/content/inquiry-form";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";
const page = pages.visit;
export const metadata = pageMetadata(
  page.name,
  page.hero.introduction,
  "/visit",
);
export default function Page() {
  return (
    <NarrativePage page={page} kind="visit">
      <Section>
        <Container className="editorial-grid">
          <div>
            <p className="eyebrow">Illustrative orientation</p>
            <h2>West Austin, imagined</h2>
            <figure className="area-map">
              <svg
                viewBox="0 0 500 320"
                role="img"
                aria-label="Abstract area illustration for the West Austin concept. No real roads, address, or business pin."
              >
                <rect width="500" height="320" fill="#EFE9DE" />
                <path
                  d="M-20 220 Q130 60 260 210 T540 90"
                  fill="none"
                  stroke="#6F806F"
                  strokeWidth="48"
                />
                <path
                  d="M80 -10 L155 330 M320 -10 L250 340 M-10 80 L510 40 M-10 280 L510 250"
                  fill="none"
                  stroke="#F8F5EF"
                  strokeWidth="14"
                />
                <text x="32" y="35" fill="#18211C" fontSize="16">
                  WEST AUSTIN · CONCEPT AREA
                </text>
                <text x="32" y="300" fill="#18211C" fontSize="13">
                  Abstract illustration · Not for navigation
                </text>
              </svg>
              <figcaption className="text-sm mt-3">
                No real business pin, street address, or directions.
              </figcaption>
            </figure>
          </div>
          <div>
            <h2 className="mb-6">Send a general question</h2>
            <InquiryForm />
          </div>
        </Container>
      </Section>
    </NarrativePage>
  );
}
