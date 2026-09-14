import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Container, Section } from "@/components/foundations";

export function Button({ href = "/book", children = "Book a consultation", secondary = false }: { href?: string; children?: ReactNode; secondary?: boolean }) {
  return <Link className={`button ${secondary ? "button-secondary" : ""}`} href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}
export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p>; }
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav aria-label="Breadcrumb" className="breadcrumbs"><ol><li><Link href="/">Home</Link></li>{items.map((item) => <li key={item.label}><span aria-hidden="true">/</span>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>)}</ol></nav>;
}
export function EditorialHero({ eyebrow, title, introduction, children }: { eyebrow: string; title: string; introduction: string; children?: ReactNode }) {
  return <Section className="editorial-hero" data-hero><Container><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p className="type-lead max-w-3xl">{introduction}</p>{children ?? <Button />}</Container></Section>;
}
export function ModelImage({ interior = false, priority = false }: { interior?: boolean; priority?: boolean }) {
  return <figure className={`model-image ${interior ? "interior-image" : ""}`}><div><Image src={interior ? "/images/clinic/interior-concept.png" : "/images/people/hero-model.png"} alt={interior ? "Illustrative reception with warm stone, natural wood, and soft daylight." : "Model seated in a warm, softly lit interior."} fill sizes="(max-width: 767px) 100vw, 50vw" preload={priority} className="object-cover" /></div><figcaption>{interior ? "Generated environment. Illustrative concept, not an operating clinic." : "Model image. Not a patient or treatment result."}</figcaption></figure>;
}
export function FinalCta({ title = "Not sure which path fits?", body = "Use a 45-minute Planning Consultation to compare appropriate options and leave with a clear Now / Next / Later plan." }: { title?: string; body?: string }) {
  return <Section className="final-cta"><Container><div className="max-w-3xl"><Eyebrow>Your next step</Eyebrow><h2>{title}</h2><p className="type-lead">{body}</p><p className="cta-facts">$150 · 45 minutes · No treatment obligation</p><p className="text-sm mb-8">$100 applicable to a first treatment of $350+ booked within 60 days.</p><Button /></div></Container></Section>;
}
export function Boundary({ children }: { children: ReactNode }) { return <aside className="boundary"><p className="eyebrow">A considered boundary</p>{children}</aside>; }
export function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  return <div className="faq-list">{items.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>;
}
export function QuickFacts({ facts }: { facts: Record<string, string> }) {
  return <dl className="quick-facts">{Object.entries(facts).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}
