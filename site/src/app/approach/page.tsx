import { NarrativePage } from "@/components/templates/narrative-page";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";
const page = pages["approach"];
export const metadata = pageMetadata(
  page.name,
  page.hero.introduction,
  "/approach",
);
export default function Page() {
  return <NarrativePage page={page} kind="approach" />;
}
