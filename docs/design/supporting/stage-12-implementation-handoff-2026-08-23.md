# Juniper House — Stage 12 Implementation Handoff

**Status:** Ready to begin  
**Prepared:** 23 August 2026  
**Next stage:** Stage 12 — Development  
**First milestone:** Scaffold and verify the application foundation

## Handoff outcome

Stages 1–11 are locked. Stage 12 can begin without reopening the business strategy, customer, market, positioning, offer, conversion, sitemap, wireframe, copy, visual, or architecture decisions.

The implementation should translate those decisions faithfully, in small reviewable steps, while explaining modern development concepts just before they become relevant.

## Locked source-of-truth map

| Area | Source |
|---|---|
| Stages 1–11 decisions | `docs/design/project-strategy.md` |
| Final website copy | `docs/design/website-copy.md` |
| Brand voice | `docs/design/brand-voice-guidelines.md` |
| Visual system | `docs/design/visual-direction.md` |
| Visual reference board | `docs/design/visual-direction-board.html` |
| Generated-image prompts | `docs/design/image-generation-prompts.md` |
| Technical architecture | `docs/design/technical-architecture.md` |
| Architecture decision | `docs/design/adr-001-technical-foundation.md` |

When implementation details conflict with a locked source, pause and resolve the conflict rather than silently improvising a new strategy.

## Workspace structure

Stage 12 will create the application inside `site/`:

```text
workspace/
├── docs/design/    # locked project artifacts
└── site/       # Next.js application and deployment root
```

This preserves the existing project archive and gives Vercel a clear application root. The strategy documents do not ship as public website assets unless a later portfolio case-study decision explicitly uses them.

## Approved technical foundation

- Node.js 24 LTS
- Latest supported, security-patched Next.js 16.x release verified at scaffolding time
- Next.js App Router
- React through the compatible Next.js scaffold
- Strict TypeScript
- Tailwind CSS v4 with CSS-first semantic tokens
- npm
- Server Components and static rendering by default
- Focused Client Components only where browser interaction requires them
- Typed local content; no CMS
- In-memory simulated booking; no transmission or persistence
- Vercel deployment with `site/` configured as the root

Do not copy a patch version from an earlier document. The first Stage 12 step must check the current supported Next.js 16.x versions and select the latest security-patched release available at that moment.

## Standing learning rule

Assume modern coded-development concepts may be unfamiliar unless the user clearly demonstrates otherwise.

This includes Node.js, npm, React, Next.js, App Router, Server Components, Client Components, TypeScript, Tailwind CSS, routing, dynamic routes, build tooling, dependencies, state management, testing, deployment, APIs, environment variables, Git workflows, and similar concepts.

Whenever an unfamiliar technology, concept, dependency, command, or architectural decision is introduced:

1. Explain what it is in plain English.
2. Explain the role it plays in Juniper House.
3. Explain why it is being used instead of a simpler or common alternative when relevant.
4. State the minimum the user needs to understand before proceeding.
5. Keep the explanation practical and concise unless deeper detail is requested.

The goal is not to turn every step into a lesson. The goal is to make sure the user can follow the important decisions, recognize the files involved, and understand what AI-generated code is doing.

## Working rhythm for major steps

### Before implementation

State:

- The outcome being created
- The unfamiliar concept, if any
- The important files that will be created or changed
- Any choice that affects maintainability, performance, accessibility, privacy, or later integration
- Any proposed dependency and its trade-offs

### During implementation

- Work in a small vertical slice that can be inspected and tested.
- Preserve the approved copy and design tokens.
- Reuse existing components before creating another pattern.
- Explain new `"use client"` boundaries.
- Do not replace large sections to fix a localized problem without first isolating the cause.

### After implementation

Report:

- What changed
- Which files matter most
- What checks passed
- What remains intentionally unfinished
- What the user should understand before the next step

## Dependency gate

No package is added casually.

Before adding a dependency, document:

1. **Requirement:** What exact problem does it solve?
2. **Built-in alternative:** Can Next.js, React, TypeScript, CSS, HTML, or a small local function solve it adequately?
3. **Role:** What will the package do in this project?
4. **Trade-offs:** What does it add in bundle weight, maintenance, security exposure, accessibility risk, learning cost, or future replacement effort?
5. **Decision:** Why is adding it better than the alternative?

### Approved at scaffold

- Next.js
- React
- React DOM
- TypeScript
- Tailwind CSS and its required PostCSS integration
- ESLint and the compatible Next.js rules

### Not approved merely because it is common

- Form libraries
- Schema libraries
- Global state libraries
- Animation libraries
- Component kits
- Icon libraries
- CMS clients
- Analytics
- Authentication
- Payment or scheduler SDKs
- Testing libraries before their testing phase begins

An icon dependency may be proposed later only if a small local SVG set becomes less maintainable.

## Proportional testing cadence

### From the scaffold onward

- Type check after coherent code changes
- Lint after coherent code changes
- Production build at major milestones and before feature-group handoff

### When important interaction logic exists

- Add focused tests for booking reducer transitions, validation, mock availability, or content cross-reference checks when those modules are implemented.
- Choose a unit-test tool only at that point and explain why it is needed.
- Do not create broad snapshots of static marketing pages.

### Closer to completion

- Add Playwright for critical browser journeys.
- Add axe integration for representative accessibility scans.
- Complete manual keyboard, screen-reader, responsive, zoom, reduced-motion, form-error, and browser QA.

This sequence keeps quality checks active without spending early development time on tooling for behavior that does not exist yet.

## Stage 12 starting milestone

### Goal

Create a clean, verified Next.js foundation inside `site/` without beginning full page production.

### Before running the scaffold

Explain these concepts briefly:

- **Node.js:** The runtime that executes the development and build tools.
- **npm:** The package manager that downloads and records project dependencies.
- **Next.js:** The framework that supplies routing, rendering, image/font tools, and the React application structure.
- **App Router:** Next.js’s folder-based system for turning files into pages and layouts.
- **TypeScript:** JavaScript with type checking that catches structural errors before deployment.
- **Tailwind CSS:** The styling tool used to apply the approved visual system through utilities and CSS tokens.

The user needs to understand the role of each, not memorize commands or framework internals.

### Preflight checks

1. Confirm the installed Node.js environment and use Node 24 LTS.
2. Confirm npm is available.
3. Verify the currently supported Next.js 16.x line and latest security-patched release.
4. Confirm `site/` does not already contain user work.
5. Review the scaffold command before executing it.

### Scaffold requirements

- Application directory: `site/`
- App Router: yes
- TypeScript: yes
- Strict mode: yes
- Tailwind CSS: yes
- ESLint: yes
- `src/` directory: yes
- Import alias: `@/*`
- Package manager: npm
- Do not add example API routes
- Do not add a database, authentication, analytics, form, animation, icon, or testing package

### Important initial files

- `site/package.json` — records scripts and dependencies
- `site/package-lock.json` — locks exact installed package versions
- `site/tsconfig.json` — controls TypeScript checking
- `site/next.config.ts` — holds Next.js configuration
- `site/postcss.config.mjs` — connects Tailwind to the CSS build
- `site/src/app/layout.tsx` — shared document shell
- `site/src/app/page.tsx` — initial homepage route
- `site/src/app/globals.css` — global styles and later design tokens
- `site/.nvmrc` — records Node 24 for local consistency

### Verification gate

Before moving to the design foundations:

- Development server starts
- Default page renders
- Type check passes
- Lint passes
- Production build passes
- Installed Next.js version is a supported security-patched 16.x release
- No unapproved dependency is present
- `docs/design/` remains unchanged except for deliberate documentation updates

### Handoff after the scaffold

Summarize:

- The versions selected and why
- The role of `package.json` and the lockfile
- The App Router folder convention
- Why most future components will remain Server Components
- Which default scaffold files were kept, changed, or removed
- The next milestone: fonts, semantic tokens, base typography, layout container, focus styles, and site shell

## Stage 12 implementation order

1. Scaffold and verify the foundation.
2. Implement fonts, semantic tokens, typography, focus, and layout primitives.
3. Build the global concept notice, header, navigation, and footer.
4. Define typed concern and treatment content models.
5. Build the homepage as the first complete vertical slice.
6. Build shared concern and treatment templates.
7. Add the remaining narrative and utility pages.
8. Implement the booking state machine and interface states.
9. Complete responsive refinements and image optimization.
10. Add the proportional automated and manual QA layers.

Each milestone should end in a usable, reviewable state rather than leaving many half-built pages.

## Definition of ready

Stage 12 is ready to begin because:

- Stages 1–11 are locked.
- Copy and visual sources of truth exist.
- The route and content architecture are defined.
- The privacy boundary of the booking demonstration is explicit.
- The dependency and testing rules are agreed.
- The working directory for the app is defined.
- The learning approach is documented.

No implementation code has been created yet. The first Stage 12 action is the scaffold milestone described above.
