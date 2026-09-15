import { NarrativePage } from "@/components/templates/narrative-page";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";
import { CreatorContact } from "@/components/content/creator-contact";
import { Container, Section } from "@/components/foundations";
const page = pages["accessibility"];
export const metadata = pageMetadata(
  page.name,
  page.hero.introduction,
  "/accessibility",
);
export default function Page() {
  return (
    <NarrativePage page={page} kind="accessibility">
      <Section>
        <Container>
          <CreatorContact purpose="contact" />
        </Container>
      </Section>
    </NarrativePage>
  );
}
