import type { Metadata } from "next";

// Set only after the production URL and indexing policy have been approved.
export const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const allowIndexing =
  process.env.VERCEL_ENV !== "preview" &&
  process.env.SITE_ALLOW_INDEXING === "true" &&
  !!publicSiteUrl;
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  noindex = false,
): Metadata {
  return {
    title,
    description,
    alternates: publicSiteUrl
      ? { canonical: new URL(path, publicSiteUrl).href }
      : undefined,
    robots: { index: allowIndexing && !noindex, follow: !noindex },
    openGraph: {
      title: `${title} | Juniper House`,
      description,
      type: "website",
      locale: "en_US",
      ...(publicSiteUrl ? { url: new URL(path, publicSiteUrl).href } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
