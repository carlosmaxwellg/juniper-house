import { NarrativePage } from "@/components/templates/narrative-page";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";
const page=pages["consultation"];
export const metadata=pageMetadata(page.name,page.hero.introduction,"/consultation");
export default function Page() { return <NarrativePage page={page} kind="consultation" />; }
