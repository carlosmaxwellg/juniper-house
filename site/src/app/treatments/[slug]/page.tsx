import { notFound } from "next/navigation";
import { treatments } from "@/content/treatments";
import { TreatmentPage } from "@/components/templates/treatment-page";
import { pageMetadata } from "@/lib/metadata";
export const dynamicParams = false;
export function generateStaticParams() {
  return treatments.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = treatments.find((t) => t.slug === slug);
  if (!t) notFound();
  return pageMetadata(
    t.name,
    `${t.shortDescription} Fictional portfolio concept.`,
    `/treatments/${slug}`,
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) notFound();
  return <TreatmentPage treatment={treatment} />;
}
