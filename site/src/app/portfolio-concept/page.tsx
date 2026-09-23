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
