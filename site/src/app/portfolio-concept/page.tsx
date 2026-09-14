import { NarrativePage } from "@/components/templates/narrative-page";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";
import { CreatorContact } from "@/components/content/creator-contact";
import { Container, Section } from "@/components/foundations";
const page=pages["portfolio-concept"];
export const metadata=pageMetadata(page.name,page.hero.introduction,"/portfolio-concept");
export default function Page() { return <NarrativePage page={page} kind="portfolio-concept"><Section><Container><CreatorContact purpose="portfolio" /></Container></Section></NarrativePage>; }
