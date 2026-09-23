import { Icon } from "@/components/icon";
import { creator } from "@/content/creator";

export function CreatorContact() {
  return <a className="text-link" href={creator.contactUrl}>Email {creator.name} <Icon /></a>;
}
