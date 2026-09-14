import type { MetadataRoute } from "next";
import { allowIndexing, publicSiteUrl } from "@/lib/metadata";
export default function robots():MetadataRoute.Robots {
  // Keep pages crawlable so search engines can read their noindex metadata.
  return {rules:{userAgent:"*",allow:"/"},...(allowIndexing && publicSiteUrl ? {sitemap:new URL("/sitemap.xml",publicSiteUrl).href} : {})};
}
