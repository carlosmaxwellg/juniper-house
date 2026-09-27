
import { Icon } from "@/components/icon";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Container, Section } from "@/components/foundations";

export function Button({
  href = "/book",
  children = "Book a consultation",
  secondary = false,
}: {
  href?: string;
  children?: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={href}
    >
      {children}
      <Icon />
    </Link>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {items.map((item) => (
          <li key={item.label}>
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
export function EditorialHero({
  eyebrow,
  title,
  introduction,
  children,
  image,
}: {
  eyebrow: string;
  title: string;
  introduction: string;
  children?: ReactNode;
  image?: ReactNode;
}) {
  return (
    <Section className={`editorial-hero ${image ? "illustrated-hero" : ""}`} data-hero>
      <Container className={image ? "interior-hero-grid" : ""}>
        <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className="type-lead max-w-3xl">{introduction}</p>
        {children ?? <Button />}
        </div>
        {image}
      </Container>
    </Section>
  );
}
export function ModelImage({
  interior = false,
  consultation = false,
  variant,
  priority = false,
  sizes = "(max-width: 767px) 100vw, 50vw",
  className = "",
  overlay,
  children,
}: {
  interior?: boolean;
  consultation?: boolean;
  variant?: "concern" | "treatment" | "provider";
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Decorative layer drawn over the photograph, inside its frame. */
  overlay?: ReactNode;
  /** Decorative layers composed around the frame, such as an inset detail. */
  children?: ReactNode;
}) {
  return (
    <figure
      className={`model-image ${interior ? "interior-image" : ""} ${consultation ? "consultation-image" : ""} ${variant ? `image-${variant}` : ""} ${className}`}
      // Above-the-fold images arrive immediately; everything else opens as it enters view.
      data-reveal={priority ? undefined : ""}
    >
      <div>
        <Image
          src={
            variant === "provider" ? "/images/people/lead-provider.png" : variant === "concern" ? "/images/people/concern-model.png" : variant === "treatment" ? "/images/clinic/treatment-room.png" : consultation ? "/images/clinic/consultation-planning.png" : interior
              ? "/images/clinic/interior-concept.png"
              : "/images/people/hero-model.png"
          }
          alt={
            variant === "provider" ? "Generated portrait representing the fictional lead provider, seated at a consultation desk." : variant === "concern" ? "Adult model with naturally textured skin in soft window light." : variant === "treatment" ? "Illustrative treatment room prepared with a clean couch, folded towel, and closed tray." : consultation ? "A hand holding a pen beside an open planning notebook on a warm stone desk." : interior
              ? "Illustrative reception with warm stone, natural wood, and soft daylight."
              : "Model seated in a warm, softly lit interior."
          }
          fill
          sizes={sizes}
          preload={priority}
          className="object-cover"
        />
        {overlay}
      </div>
      {children}
      <figcaption>
        {variant === "provider" ? "Generated portrait of fictional provider Rowan Ellis. No real clinician or license is represented." : variant === "concern" ? "Generated model. Not a patient or treatment result." : variant === "treatment" ? "Generated treatment environment. Not a real clinic or procedure." : consultation ? "Generated consultation scene. Illustrative, not a real appointment." : interior
          ? "Generated environment. Illustrative concept, not an operating clinic."
          : "Model image. Not a patient or treatment result."}
      </figcaption>
    </figure>
  );
}
export function FinalCta({
  title = "Not sure which path fits?",
  body = "Use a 45-minute Planning Consultation to compare appropriate options and leave with a clear Now / Next / Later plan.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section className="final-cta">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Your next step</Eyebrow>
          <h2>{title}</h2>
          <p className="type-lead">{body}</p>
          <p className="cta-facts">
            $150 · 45 minutes · No treatment obligation
          </p>
          <p className="text-sm mb-8">
            $100 applicable to a first treatment of $350+ booked within 60 days.
          </p>
          <Button />
        </div>
      </Container>
    </Section>
  );
}
export function Boundary({ children }: { children: ReactNode }) {
  return (
    <aside className="boundary">
      <p className="eyebrow">A considered boundary</p>
      {children}
    </aside>
  );
}
export function FaqList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="faq-list">
      {items.map((faq) => (
        <details key={faq.question}>
          <summary>
            {faq.question}
            <Icon name="plus" />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
export function QuickFacts({ facts }: { facts: Record<string, string> }) {
  return (
    <dl className="quick-facts">
      {Object.entries(facts).map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
