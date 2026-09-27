# Juniper House

A fictional Austin skin and aesthetics clinic, built as a portfolio project. The approved strategy, copy, wireframes, and visual direction live in `../docs/design/approved/`; the application lives here.

## Run locally

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview:

```sh
npm run build
npm run start
```

Next.js 16.3.5, React 19, strict TypeScript, and Tailwind v4 are the application stack. Public pages prerender at build time. Webpack is selected explicitly for development and production builds because Turbopack's worker process was blocked by the development environment. This remains a standard Next.js deployment, not a static export.

Newsreader and Manrope use `next/font/google`: a clean build needs access to Google Fonts, while visitors receive self-hosted fonts from the site. No runtime Google Fonts request is needed.

## Content and implementation

- `src/content/treatments.ts`, `concerns.ts`, and `types.ts`: typed clinical-orientation content and cross references, transcribed from approved copy.
- `src/content/pages.ts`: consultation, approach, team, visit, and disclosure content.
- `src/content/policies.ts`: notices describing the actual portfolio implementation.
- `src/content/creator.ts`: Carlos Gonzalez’s approved public email, shared by the case study and accessibility page. No personal portfolio URL is invented.
- `src/components/templates/`: shared concern, treatment, and narrative page composition.
- `src/components/global/`: navigation, concept notice, footer, and mobile booking action.
- `src/lib/booking/state.ts`: pure booking reducer, validation, and deterministic sample availability.
- `src/components/booking/booking-flow.tsx`: five-step interactive demo and in-place confirmation.
- `src/components/content/inquiry-form.tsx`: local inquiry demonstration.
- `src/app/globals.css`: approved tokens, foundations, and responsive patterns.

Approved copy is not a substitute for clinical or legal review for a real clinic. Provider names, credentials, prices, hours, and contact details are explicitly fictional. No testimonials or patient results are invented. The six supplied/generated images are illustrative and labeled visibly.

## Demonstration privacy

Booking and inquiry details stay in React memory. There are no submission endpoints, server actions, payment services, mail services, analytics, persistent browser storage, or medical intake integrations. Final actions update the screen and clear entered personal fields. Refreshing resets the flow. Confirmation is displayed in place; `/book/confirmation` explains that no saved appointment exists.

The schedule is a fixed, labeled sample week in October 2026, including an empty day and provider-specific availability. It does not claim to be current or live. Change the sample week in the one availability module when useful.

The optional free-text checks are only a reminder against entering health details, not a medical-data detector or a secure intake system. Use test information only.

## Validation

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

The end-to-end suite starts the built app on `127.0.0.1:3100`. It uses the installed Google Chrome through Playwright; install Chrome first on another machine, or change the channel in `playwright.config.ts` to an installed Playwright browser. Test reports and traces stay in ignored local folders. Tests require permission to start a local server and browser.

The Node tests cover reducer transitions, invalid/stale choices, data clearing, validation, content completeness, and internal references. Browser tests cover every public route, axe accessibility scans, menu behavior, booking and inquiry journeys, request/storage checks, responsive reflow, text spacing, reduced motion, forced colors, image loading, and no-JavaScript content.

## Deployment configuration

See `../docs/DEPLOYMENT.md` and `../docs/QA.md` for the reviewed release state and remaining manual checks. No deployment is configured or authorized by running the local build.

- Root directory on the host: `site`
- Runtime: Node.js 24
- Install: `npm ci`
- Build: `npm run build`
- Start on a generic Next-compatible host: `npm run start`
- `NEXT_PUBLIC_SITE_URL`: approved absolute HTTPS site URL; set before the host builds the site.
- `SITE_ALLOW_INDEXING`: defaults off. Only set to `true` after an explicit indexing decision. Vercel previews remain `noindex` even if they inherit this flag.

Without an approved URL, local social-image metadata uses localhost and canonical links are omitted. That is suitable for local QA only. Booking and confirmation always remain `noindex`; no fictional clinic business schema is emitted. CSP blocks native form submissions and third-party requests; its inline-script allowance supports statically rendered Next.js hydration and is not a nonce-based strict CSP.
