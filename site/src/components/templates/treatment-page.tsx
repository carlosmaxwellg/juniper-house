import Link from "next/link";
import { Container, Section } from "@/components/foundations";
import { Breadcrumbs, Button, Eyebrow, FaqList, FinalCta, QuickFacts } from "@/components/content/shared";
import { Copy } from "@/components/content/copy";
import { concerns } from "@/content/concerns";
import type { Treatment } from "@/content/types";

export function TreatmentPage({ treatment: t }: { treatment: Treatment }) {
  return <>
    <Container><Breadcrumbs items={[{ label:"Treatments",href:"/treatments" },{label:t.name}]} /></Container>
    <Section className="editorial-hero" data-hero><Container><Eyebrow>{t.name}</Eyebrow><h1>{t.hero.headline}</h1><p className="type-lead max-w-3xl">{t.hero.introduction}</p><QuickFacts facts={t.quickFacts} /><div className="flex flex-wrap gap-5 items-center"><Button /><Link className="text-link" href="#risks">Read risks and limitations ↓</Link></div></Container></Section>
    <Section><Container className="editorial-grid"><div><h2>May be discussed for</h2><Copy blocks={[{kind:"list",items:t.maySuit}]} /></div><div><h2>May not be appropriate when</h2><Copy blocks={[{kind:"list",items:t.mayNotSuit}]} /></div></Container></Section>
    <Section className="bg-surface-muted"><Container className="editorial-grid"><div><Eyebrow>The appointment</Eyebrow><h2>The process</h2><Copy blocks={t.process} /></div><div><Eyebrow>Allow time</Eyebrow><h2>What to expect</h2><Copy blocks={t.timeline} /></div></Container></Section>
    <Section><Container className="editorial-grid"><h2>Alternatives and trade-offs</h2><Copy blocks={[{kind:"list",items:t.alternatives}]} /></Container></Section>
    <Section className="bg-surface-muted"><Container className="editorial-grid"><h2>Provider and standard</h2><div className="reading-copy"><p>{t.providerStandard}</p><p className="text-sm">Provider roles are illustrative. Juniper House is a fictional clinic; no real provider or license is represented.</p><Link className="text-link" href="/about">Meet the fictional team ↗</Link></div></Container></Section>
    <Section id="risks" className="bg-warning-surface"><Container className="editorial-grid"><div><Eyebrow>Understand before deciding</Eyebrow><h2>Risks and limitations</h2></div><p className="reading-copy">{t.risks}</p></Container></Section>
    <Section><Container className="editorial-grid"><h2>Pricing</h2><div className="reading-copy"><p>{t.pricing}</p><p className="text-sm">Illustrative pricing for this portfolio concept. Individual suitability requires assessment.</p></div></Container></Section>
    <Section className="bg-surface-muted"><Container className="editorial-grid"><h2>Your questions, considered</h2><FaqList items={t.faqs} /></Container></Section>
    <Section><Container><h2 className="mb-8">Explore related concerns</h2><div className="concern-grid">{t.relatedConcernSlugs.map(slug => { const c = concerns.find(c => c.slug === slug)!; return <article className="concern-card" key={slug}><h3><Link href={`/concerns/${slug}`}>{c.name}</Link></h3><p>{c.shortDescription}</p></article>; })}</div><Link className="text-link" href="/consultation">What the Planning Consultation clarifies ↗</Link></Container></Section>
    <FinalCta {...t.finalCta} />
  </>;
}
