import { creator } from "@/content/creator";
export function CreatorContact({ purpose="contact" }: { purpose?:"contact"|"portfolio" }) {
  const url=purpose==="contact"?creator.contactUrl:creator.portfolioUrl;
  return url ? <a className="text-link" href={url}>{purpose==="contact"?"Contact the creator":"View the creator’s portfolio"} ↗</a> : <p className="text-sm">{purpose==="contact"?"Creator contact":"Creator portfolio"}: coming soon. The demonstration clinic phone and email are not monitored.</p>;
}
