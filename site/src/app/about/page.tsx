import { NarrativePage } from "@/components/templates/narrative-page";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";
const page=pages["about"];
export const metadata=pageMetadata(page.name,page.hero.introduction,"/about");
export default function Page() { return <NarrativePage page={page} kind="about" />; }
