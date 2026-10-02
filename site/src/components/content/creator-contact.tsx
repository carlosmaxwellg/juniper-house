import { Icon } from "@/components/icon";
import { creator } from "@/content/creator";

export function CreatorContact() {
  return <a className="text-link" href={creator.contactUrl} target="_blank" rel="noopener noreferrer">View my Upwork profile <Icon /></a>;
}
