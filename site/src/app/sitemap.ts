import type { MetadataRoute } from "next";
import { concerns } from "@/content/concerns";
import { treatments } from "@/content/treatments";
import { allowIndexing, publicSiteUrl } from "@/lib/metadata";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!allowIndexing || !publicSiteUrl) return [];
  return [
    "/",
    "/concerns",
    "/treatments",
    "/consultation",
    "/approach",
    "/about",
    "/visit",
    "/portfolio-concept",
    ...concerns.map((c) => `/concerns/${c.slug}`),
    ...treatments.map((t) => `/treatments/${t.slug}`),
  ].map((path) => ({ url: new URL(path, publicSiteUrl).href }));
}
