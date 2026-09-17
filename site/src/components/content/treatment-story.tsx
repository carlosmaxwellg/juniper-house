import Link from "next/link";
import { Fragment } from "react";
import { Icon } from "@/components/icon";
import { treatments } from "@/content/treatments";
import type { Treatment } from "@/content/types";
import { Copy } from "./copy";

export function TreatmentProcess({ treatment }: { treatment: Treatment }) {
  const sequence = treatment.process.find(block => "text" in block && block.text.includes(" → "));
  const steps = sequence && "text" in sequence ? sequence.text.split(" → ") : treatment.process.flatMap(block => block.kind === "heading" ? [block.text] : []);
  return <>
    <ol className="process-roadmap" aria-label={`${treatment.name} process`}>
      {steps.map((step, index) => <li key={step}><span aria-hidden="true">0{index + 1}</span>{step}</li>)}
    </ol>
    <Copy blocks={treatment.process.filter(block => block !== sequence)} />
  </>;
}

export function RecoveryTimeline({ treatment }: { treatment: Treatment }) {
  return <ol className="recovery-timeline">
    {treatment.timeline.flatMap(block => block.kind === "list" ? block.items : [block.text]).map((text, index) => {
      const colon = text.indexOf(":");
      return <li key={text}>
        <span className="timeline-number" aria-hidden="true">0{index + 1}</span>
        <div>{colon >= 0 ? <><h3>{text.slice(0, colon)}</h3><p>{text.slice(colon + 1).trim()}</p></> : <p>{text}</p>}</div>
      </li>;
    })}
  </ol>;
}

const alternativeNames = [
  ["Custom Clinical Facial", "custom-clinical-facial"],
  ["Corrective Chemical Peel", "corrective-chemical-peel"],
  ["chemical peel", "corrective-chemical-peel"],
  ["fractional laser", "fractional-laser-resurfacing"],
  ["microneedling", "medical-microneedling"],
  ["IPL", "ipl-photofacial"],
  ["Filler", "hyaluronic-acid-filler"],
  ["Neuromodulator treatment", "neuromodulator-treatment"],
] as const;

export function TreatmentAlternatives({ treatment }: { treatment: Treatment }) {
  return <ul className="alternative-list">{treatment.alternatives.map(text => {
    const matches = alternativeNames.filter(([name, slug]) => slug !== treatment.slug && text.toLowerCase().includes(name.toLowerCase()));
    const slugs = [...new Set(matches.map(([, slug]) => slug))];
    return <li key={text}><p>{text}</p>{slugs.map(slug => {
      const related = treatments.find(item => item.slug === slug)!;
      return <Fragment key={slug}><Link className="text-link" href={`/treatments/${slug}`}>Explore {related.name}<Icon /></Link></Fragment>;
    })}</li>;
  })}</ul>;
}
