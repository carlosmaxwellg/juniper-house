import { NarrativePage } from "@/components/templates/narrative-page";
import { privacy } from "@/content/policies";
import { pageMetadata } from "@/lib/metadata";
export const metadata=pageMetadata(privacy.name,privacy.hero.introduction,"/privacy");
export default function Page() { return <NarrativePage page={privacy} kind="privacy" />; }
