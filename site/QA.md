# Production QA record

**Date:** 15 September 2026

**Release state:** Local release candidate; ready for an approved review-preview deployment

**Deployment state:** No deployment, remote push, or external-service change performed

## Final result

All critical local checks pass against a clean production build. The site prerenders its complete approved public route set, the simulated booking and inquiry journeys work without transmitting or persisting entered details, and no known critical or high-severity application issue remains.

## Verification

| Check | Result |
| --- | --- |
| Clean locked install | Passed; 369 packages installed |
| `npm audit` | Passed; 0 known vulnerabilities across production and development dependencies |
| `npm run lint` | Passed with no errors or warnings |
| `npm run typecheck` | Passed |
| `npm test` | Passed; 8 of 8 tests |
| `npm run build` | Passed; all application routes prerendered with Next.js 16.3.5 |
| `npm run test:e2e` | Passed; 36 of 36 tests in 31.9 seconds |
| `git diff --check` | Passed |

The browser suite uses the production server and installed Google Chrome. It checks all 25 public page routes for successful responses, one main landmark, one page heading, preview-safe `noindex` metadata, and zero axe violations for the WCAG 2.0/2.1/2.2 A and AA rule tags used by the scanner.

Focused journeys cover internal links and 404s; mobile and desktop navigation; keyboard focus containment and restoration; the skip link; booking validation, empty availability, editing, confirmation, exit, refresh, and data clearing; inquiry validation, completion, return focus, and data clearing; absence of request, URL, cookie, local-storage, or session-storage leakage; image and font loading; CSP and security headers; social image and icon responses; robots and sitemap behavior; responsive layouts from 320 to 1440 pixels; enlarged text spacing; reduced motion; forced colors; and core content without JavaScript.

## Issues resolved during production QA

- Kept the two approved image assets byte-identical while recovering their local working copies from Git after macOS cloud offloading interrupted the first pass.
- Rebuilt from a clean generated cache after cloud-conflict copies appeared under `.next`; no source history was reset or rewritten.
- Contained the two-column treatment menu at the 1024-pixel desktop breakpoint.
- Prevented the mobile header and long headings from overflowing at 320 pixels with enlarged text spacing.
- Restored focus after cancelling booking exit and after returning from the inquiry completion state.
- Verified the booking fallback and substantive treatment content remain readable without JavaScript.

## Manual and remaining checks

Desktop and 390-pixel mobile production views received a visual spot-check during QA. Automated Chrome coverage is complete for this release candidate. A real Safari/iOS device check and a manual VoiceOver workflow have not been performed, so this project does not claim full browser coverage or WCAG conformance.

The following are intentional placeholders or deployment inputs:

- Creator portfolio and contact URLs remain blank in `src/content/creator.ts` and render a clear “coming soon” state, as approved.
- `NEXT_PUBLIC_SITE_URL` awaits the approved preview URL. Canonical links are omitted locally until it is set.
- `SITE_ALLOW_INDEXING` remains false. Review previews and booking pages stay `noindex`.
- Host-specific connection logging and headers must be confirmed on the deployed preview before the privacy delivery text is considered final for that host.

## Deployment gate

The local implementation is ready for an approved Vercel review preview using `site` as the project root, Node.js 24, `npm ci`, and `npm run build`. Before any external change, confirm the Vercel account/project and destination URL. After deployment, run the HTTPS, metadata, asset, header, booking-privacy, keyboard, and mobile smoke checks listed in `DEPLOYMENT.md`.
