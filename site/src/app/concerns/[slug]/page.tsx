import { notFound } from "next/navigation";
import { concerns } from "@/content/concerns";
import { ConcernPage } from "@/components/templates/concern-page";
import { pageMetadata } from "@/lib/metadata";
export const dynamicParams = false;
export function generateStaticParams() { return concerns.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: {params:Promise<{slug:string}>}) {
  const {slug}=await params; const c=concerns.find(c=>c.slug===slug); if(!c) notFound();
  return pageMetadata(c.name, `${c.shortDescription} Fictional portfolio concept.`, `/concerns/${slug}`);
}
export default async function Page({params}: {params:Promise<{slug:string}>}) {
  const {slug}=await params; const concern=concerns.find(c=>c.slug===slug); if(!concern) notFound();
  return <ConcernPage concern={concern} />;
}
