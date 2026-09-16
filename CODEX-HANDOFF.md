# Juniper House — Codex handoff

## Current status — 15 September 2026

The approved portfolio implementation is complete through local deployment readiness. The global shell, homepage, typed content models, all concern and treatment pages, remaining narrative pages, simulated booking and inquiry experiences, responsive behavior, accessibility work, metadata, security headers, automated tests, and deployment documentation are implemented. The final clean production build and all local checks pass; see `site/QA.md` for the evidence and `site/DEPLOYMENT.md` for the release procedure.

The subsequent approved visual-elevation pass is complete locally: stronger hero and image-led compositions, varied editorial layouts, SVG icons, restrained motion, and one general footer disclosure. All 37 browser checks and eight unit tests pass. See `site/VISUAL-PASS.md` and `site/QA.md`. No new deployment or external-service change was made during the visual pass. The existing linked Vercel project and earlier preview remain in place; a Preview update requires separate approval. Creator portfolio and contact URLs intentionally remain visible placeholders in `site/src/content/creator.ts`.

**Prepared:** 7 September 2026  
**Repository:** `/Users/carlos/Desktop/Freelance Web Design + AI Development/juniper-house`  
**Application:** `site/`  
**Current branch:** `main`  
**Next milestone:** Review the completed local visual pass, then obtain approval before updating the Vercel Preview

## Purpose and working preference

Juniper House Skin & Aesthetics is a fictional premium Austin clinic website and a portfolio case study for conversion-focused web design and development. The site must demonstrate business strategy, clear decision paths, responsible aesthetics copy, refined visual judgment, accessible implementation, and a credible simulated consultation-booking experience.

Prioritize shipping this portfolio site efficiently. Take initiative and complete coherent, reviewable milestones without pausing for every small implementation decision. Keep explanations brief and practical; Carlos will study programming separately. Preserve the approved strategy and architecture, run checks appropriate to each milestone, and ask only when a consequential choice would change scope, approved direction, privacy/medical boundaries, maintainability, or deployment behavior.

Do not reopen approved Stages 1–11 merely because a different implementation is possible. Do not add dependencies casually. A new dependency needs a concrete requirement and a short trade-off explanation.

## Essential approved direction

- **Business:** Premium, consultation-led fictional aesthetics and skin-health clinic in West Austin, Texas.
- **Primary audience:** Adults roughly 25–50 who want skin health and natural-looking aesthetic results but feel uncertain about treatment fit, safety, recovery, and provider trust.
- **Primary conversion:** Book a consultation.
- **Core offer:** 45-minute Skin & Aesthetic Planning Consultation for $150, with a $100 credit toward a first treatment of $350+ booked within 60 days. The deliverable is a prioritized Now / Next / Later plan; treatment is not performed during the consultation.
- **Position:** Expert guidance, personalized care, and results that still feel like the client—without pressure, confusion, or a cold clinical experience.
- **Visual direction:** Warm Clinical Editorial; clinical precision × human warmth. Use Newsreader with Manrope and the approved Juniper Ink, Juniper, Porcelain, Bone, Mineral, and Clay palette.
- **Experience:** Concerns orient, treatments explain, consultation decides. Important price, downtime, provider, suitability, recovery, and risk information must not be hidden behind decorative content or FAQs.
- **Ethics:** The clinic, people, contact details, schedules, and booking are fictional. The booking flow must not transmit, persist, or place entered data in URLs/analytics. Generated people and environments are illustrative, never proof.
- **Architecture:** Node.js 24 LTS; a supported security-patched Next.js 16.x App Router release; strict TypeScript; Tailwind CSS v4; Server Components and static prerendering by default; small Client Components only for real interaction; typed local content; no CMS, database, authentication, payment, email, scheduler, API, or server-side form submission for the portfolio version.
- **Quality:** Type check, lint, and production build throughout development; focused tests for consequential interaction logic; Playwright, accessibility automation, and manual QA closer to completion.

## Read first

1. `outputs/README.md` — artifact index, approval status, conflicts, and missing inputs.
2. `outputs/approved/project-strategy.md` — master locked decisions for Stages 1–11.
3. `outputs/approved/technical-architecture.md` and `outputs/approved/adr-001-technical-foundation.md` — implementation boundaries and trade-offs.
4. `outputs/approved/visual-direction.md` and `outputs/approved/visual-direction-board.html` — design system and visual intent.
5. `outputs/approved/website-copy.md` and `outputs/approved/brand-voice-guidelines.md` — final implementation copy and voice source of truth.
6. `outputs/wireframes/juniper-house-wireframes.html` — page hierarchy and responsive conversion logic.
7. `site/AGENTS.md` — Next.js-version-specific instruction to consult the local framework docs before code changes.

The older `outputs/supporting/stage-12-implementation-handoff-2026-08-23.md` is historical. Its initial milestone has already begun and its statement that no implementation exists is no longer current.

## Git and implementation snapshot

### Committed milestones

| Commit | Date | Milestone |
|---|---|---|
| `ef09b9e` | 24 Aug 2026 | Scaffolded the Next.js application foundation. |
| `819917c` | 24 Aug 2026 | Added semantic design tokens, global styling, fonts, and reusable layout foundations. |
| `8191217` | 25 Aug 2026 | Made the skip-link target programmatically focusable. |

`HEAD` is `8191217` on `main`. No commit, push, or deployment was performed during handoff preparation.

### Uncommitted implementation present before this handoff

- Modified: `site/src/app/globals.css` — adds flex growth for the root `main` element.
- Modified: `site/src/app/layout.tsx` — adds real metadata, the portfolio notice, site header, and footer.
- Untracked: `site/src/components/global/` — desktop/mobile navigation, header, footer, portfolio notice, and interaction behavior.
- Untracked: `site/src/content/` — typed site identity and navigation data.
- Untracked: `site/technical-architecture.md` — exact copy of the approved Stage 11 architecture.

These files belong to the existing work in progress. Preserve and review them; do not discard or replace them wholesale.

### Documentation added by this handoff

- Untracked: `CODEX-HANDOFF.md`
- Untracked: `outputs/`

These are intentionally not staged or committed.

## Current implementation state

Completed or substantially present:

- Next.js/TypeScript/Tailwind foundation with Node 24 declaration.
- Semantic color, typography, spacing, focus, and layout foundations.
- Newsreader and Manrope configured through Next.js font tooling.
- Root skip link and focusable main landmark.
- In-progress global portfolio notice, responsive navigation, header, footer, metadata, and typed navigation content.

Not yet complete:

- The homepage is still the `create-next-app` starter and contains a second nested `main` landmark.
- The many routes referenced by navigation are not implemented and will return 404 until their pages exist.
- Concern and treatment schemas, dynamic routes, shared content templates, consultation page, approach/about/visit pages, disclosures, and utility pages.
- Five-step in-memory booking demonstration and focused interaction tests.
- Final responsive refinement, interactions, SEO/structured data, accessibility QA, full QA, deployment, and portfolio case study.

Recommended next milestone:

1. Review and finish the existing uncommitted site shell without losing its work.
2. Replace the starter homepage with the approved Stage 8 structure and Stage 9 copy as the first complete vertical slice.
3. Validate the shell and homepage across responsive sizes, keyboard use, lint, TypeScript, and a production build.
4. Only then generalize the concern/treatment content schemas and templates.

## Review and verification status

Verified on 7 September 2026 against the current working tree:

- `npm run lint` passes.
- TypeScript strict check with `./node_modules/.bin/tsc --noEmit` passes.
- `git diff --check` passes.
- The committed skip-link fix is present: the root `main` has `tabIndex={-1}`, and the associated focus styling remains in the committed design foundation.
- `outputs/approved/technical-architecture.md` and `site/technical-architecture.md` are byte-for-byte identical.

Uncertain or outstanding:

- `npm run build` reached the optimized production build but could not fetch Manrope and Newsreader from `fonts.googleapis.com` in the restricted-network handoff environment. This does not establish whether a normal networked build passes. Re-run it in the normal development environment; if offline/reproducible builds are required, decide whether to store appropriately licensed local font files and use `next/font/local`.
- Next.js 16.3.2 is pinned. Its status as the latest supported security-patched 16.x release was not independently revalidated during this restricted-network documentation pass.
- No formal implementation review/audit document was found in the repository. The uncommitted global shell should therefore be treated as in-progress, not as approved or fully reviewed.
- The starter homepage's nested `main` landmark is an accessibility issue to remove when the homepage is implemented.
- No interaction, browser, automated accessibility, or manual responsive QA suite has been run for the uncommitted navigation work.
- `site/README.md` is still the default scaffold README and contains outdated project-specific guidance (including Geist references). Updating it is documentation work for a later implementation milestone; use this handoff now.

## Run and validate from `site/`

Prerequisites: Node.js 24 and npm. `.nvmrc` contains `24`. Dependencies are currently present locally; on a fresh checkout, use the locked dependency tree.

```bash
cd "/Users/carlos/Desktop/Freelance Web Design + AI Development/juniper-house/site"
npm ci
npm run dev
```

Open `http://localhost:3000`.

Use these checks after coherent changes:

```bash
npm run lint
npm exec tsc -- --noEmit
npm run build
```

Do not install additional tooling merely to satisfy the long-term test plan before the relevant behavior exists. Add focused logic tests when booking state/validation or content cross-reference rules are implemented; add browser/accessibility tooling closer to representative page completion.

## Missing context and assets

- Only two original AI-generated art-direction images are available: a hero portrait and an interior. They are illustrative references, not a full production photography set. Their prompts and restrictions are in `outputs/approved/image-generation-prompts.md` and provenance is summarized in `outputs/approved/assets/README.md`.
- No separate usage-rights certificate accompanies those generated images.
- No real clinic credentials, addresses, contact channels, testimonials, patient results, reviews, awards, metrics, or provider proof should be invented. The approved copy uses fictional disclosures and explicit placeholders.
- Final metadata, structured data, privacy, terms, and tested accessibility language are deferred to Stage 15.
- Interaction detail and motion refinement are deferred to Stage 14.
- The audience and positioning are strategically approved for this portfolio concept but are not validated against primary interviews or live conversion data.

These gaps do not block the next milestone. They do block presenting the concept as an operating clinic or claiming real-world clinical/commercial proof.
