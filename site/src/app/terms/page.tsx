import { NarrativePage } from "@/components/templates/narrative-page";
import { terms } from "@/content/policies";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  terms.name,
  terms.hero.introduction,
  "/terms",
);
export default function Page() {
  return <NarrativePage page={terms} kind="terms" />;
}
