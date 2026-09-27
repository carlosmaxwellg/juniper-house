# ADR-001: Use a statically rendered Next.js application with a client-only booking demonstration

**Status:** Accepted  
**Date:** 22 August 2026  
**Accepted:** 23 August 2026  
**Decider:** Carlos  
**Related stage:** Stage 11 — Technical Architecture

## Context

Juniper House must become a polished, deployable portfolio website while helping its creator learn modern coded development and build an AI-assisted workflow that can later adapt to client projects.

The project has these forces:

- It needs strong SEO foundations, fast public pages, responsive imagery, reusable page templates, and a credible multi-page structure.
- Most content is stable marketing content rather than live application data.
- The booking experience is a portfolio demonstration. It must not create appointments, process payment, send messages, or store medical or personal information.
- The creator is still developing coding skills, so the architecture should expose important modern concepts without introducing unnecessary infrastructure.
- The longer-term workflow should not depend on one proprietary website builder.
- The site may later be adapted to a real scheduler, CMS, analytics product, or client-specific platform, but those integrations are not launch requirements.

## Decision

Build Juniper House as a **Next.js App Router application** using:

- The latest secure Next.js 16.x patch available at implementation time
- Node.js 24 LTS
- TypeScript with `strict: true`
- Tailwind CSS v4 with CSS-first design tokens
- React Server Components by default
- Client Components only where browser state or interaction is required
- Local typed content modules for concerns, treatments, team profiles, navigation, and policies
- Static prerendering for public content pages
- A client-only, in-memory booking state machine with deterministic mock availability
- Vercel for the first deployment, while keeping the code portable to another Next-compatible host
- npm and a deliberately small dependency set

Do **not** enable `output: "export"` initially. The pages will still be statically rendered, but the standard Next.js deployment preserves built-in image optimization, metadata conventions, preview deployments, and an easier path to a future real integration. Static export remains a documented portability option.

## Options considered

### Option A: Next.js App Router — selected

| Dimension | Assessment |
|---|---|
| Complexity | Medium, controlled by static-first boundaries |
| Cost | Free or low-cost for a portfolio deployment |
| SEO and public pages | Strong built-in primitives |
| Interactivity | Appropriate for the booking flow |
| Learning value | High for modern React and full-stack-capable workflows |
| Portability | Good, though framework-specific |
| Future client integrations | Strong |

**Pros**

- Matches the desired learning direction
- Supports static public pages and isolated interactive components in one codebase
- Provides file-based routing, metadata, image, and font tooling
- Creates a credible foundation for later scheduling, CMS, or form integrations
- Common enough for AI-assisted development and client handoff

**Cons**

- More concepts than a simple static-site generator
- Server and Client Component boundaries require discipline
- Framework upgrades can introduce migration work
- Vercel is the easiest host, which can create perceived platform coupling if portability is not documented

### Option B: Astro with TypeScript and Tailwind

| Dimension | Assessment |
|---|---|
| Complexity | Low to medium |
| Cost | Free or low-cost |
| SEO and public pages | Excellent |
| Interactivity | Island-based and efficient |
| Learning value | High, but less aligned with the stated Next.js direction |
| Portability | Excellent |
| Future client integrations | Good |

**Pros**

- Excellent fit for content-heavy, mostly static websites
- Very little client JavaScript by default
- Strong performance and deployment portability

**Cons**

- Adds another framework to learn before practicing the preferred Next.js path
- A multi-step React booking flow requires an island or framework integration
- Less directly aligned with the intended portfolio positioning around modern custom React development

### Option C: Framer, WordPress/Elementor, or another visual builder

| Dimension | Assessment |
|---|---|
| Complexity | Low for initial assembly; variable for custom behavior |
| Cost | Platform-dependent |
| SEO and public pages | Adequate to good, implementation-dependent |
| Interactivity | Platform-dependent |
| Learning value | Lower for custom application architecture |
| Portability | Low to medium |
| Future client integrations | Platform-specific |

**Pros**

- Faster visual assembly
- Relevant to client work that already uses the platform
- Easier non-technical editing in some cases

**Cons**

- Does not meet the project’s custom-development learning goal
- Encourages platform-specific solutions before the transferable system is understood
- The simulated booking experience may become harder to make both custom and ethically transparent

### Option D: Vite React single-page application

| Dimension | Assessment |
|---|---|
| Complexity | Medium |
| Cost | Free or low-cost |
| SEO and public pages | Requires more architectural work |
| Interactivity | Strong |
| Learning value | Good React practice |
| Portability | Good |
| Future client integrations | Good |

**Pros**

- Direct React model with a simple build tool
- Easy client-side booking state
- Flexible static hosting

**Cons**

- Ships a more application-centric model than the content requires
- Requires additional decisions for routing, per-page metadata, prerendering, and SEO
- Less appropriate than Next.js or Astro for a multi-page public marketing site

## Trade-off analysis

Next.js is not the smallest possible tool for this website. Astro would likely ship less client JavaScript with fewer framework concepts. The selected architecture accepts that extra conceptual weight because the project is also a learning vehicle for the creator’s intended development direction and a reusable base for future service-business sites.

The complexity is contained by three rules:

1. Public content is local, typed, and statically rendered.
2. Client Components are exceptions with explicit reasons.
3. No backend capability is added until a real requirement exists.

The architecture therefore uses Next.js as a delivery and composition framework, not as an excuse to build a fictional software platform.

## Consequences

### What becomes easier

- Reusing concern and treatment templates without duplicating page code
- Producing route-level metadata, sitemap, robots, and social assets later
- Optimizing local images and fonts
- Creating preview deployments during development
- Adding a real scheduler, CMS, analytics tool, or secure form in a later client adaptation
- Demonstrating modern React and TypeScript skills in the portfolio case study

### What becomes harder

- The creator must understand Server versus Client Components
- Dynamic route parameters and content typing require more initial structure
- Framework and Node versions need an upgrade policy
- Testing must cover both static content and the interactive booking state machine

### What remains deliberately unsupported

- Real appointments or provider availability
- Payment
- Authentication or client accounts
- Database or CRM writes
- Medical intake or protected health information
- Email or SMS delivery
- Live chat
- CMS editing
- User-generated content

### What should trigger reconsideration

- A real clinic needs staff-edited content weekly: evaluate a headless CMS.
- A real scheduler becomes the source of truth: integrate its supported API or hosted flow.
- A non-Vercel static host becomes mandatory: test `output: "export"` and image handling.
- The project becomes a one-page brochure with no custom flow: reconsider Astro or a visual builder.
- A client requires WordPress, Shopify, Framer, or another existing platform: preserve the design and conversion system while changing the implementation layer.

## Action items

1. [ ] Scaffold the project with the latest secure Next.js 16.x App Router release, TypeScript, ESLint, Tailwind, and the `@/*` alias.
2. [ ] Pin Node.js 24 LTS in `.nvmrc` and the package `engines` field.
3. [ ] Create CSS-first tokens from the approved Stage 10 visual system.
4. [ ] Define typed content models for concerns, treatments, people, navigation, and practical information.
5. [ ] Build shared page templates as Server Components.
6. [ ] Isolate header menu, accordions, mobile booking action, and booking flow as Client Components.
7. [ ] Implement deterministic mock availability and in-memory booking state with no network submission.
8. [ ] Add focused tests when important interaction logic is implemented; defer Playwright and `@axe-core/playwright` coverage until the project approaches completion.
9. [ ] Deploy to Vercel only after local build, accessibility, responsive, and no-data-transmission checks pass.
10. [ ] Revisit the architecture decision if a real client adaptation introduces content editors, secure intake, payment, or live scheduling.
