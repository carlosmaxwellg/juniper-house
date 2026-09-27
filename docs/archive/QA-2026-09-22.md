# Production QA record

**Date:** 22 September 2026

**Release state:** Final portfolio remediation complete; ready for review and a separately approved Preview update

**Deployment state:** No deployment, remote push, or external-service change during this visual pass. The earlier Vercel preview remains unchanged; see `passes/VISUAL-PASS.md`.

## Final result

All critical local checks pass against a clean production build. The site prerenders its complete approved public route set, the simulated booking and inquiry journeys work without transmitting or persisting entered details, and no known critical or high-severity application issue remains.

See [final remediation record](passes/FINAL-REMEDIATION.md) for the completed scope, current checks, and visual review matrix. Earlier pass observations below remain historical evidence.

## Verification

| Check | Result |
| --- | --- |
| Clean locked install | Previous implementation baseline: 369 packages; dependencies unchanged in this pass |
| `npm audit` | Previous implementation baseline: 0 known vulnerabilities; not rerun for this dependency-free visual pass |
| `npm run lint` | Passed with no errors or warnings |
| `npm run typecheck` | Passed |
| `npm test` | Passed; 8 of 8 tests |
| `npm run build` | Passed; all application routes prerendered with Next.js 16.3.5 |
| `npm run test:e2e` | Passed; 55 of 55 tests (final rerun recorded in passes/FINAL-REMEDIATION.md) |
| `git diff --check` | Passed |

The browser suite uses the production server and installed Google Chrome. It checks all 25 public page routes for successful responses, one main landmark, one page heading, preview-safe `noindex` metadata, and zero axe violations for the WCAG 2.0/2.1/2.2 A and AA rule tags used by the scanner.

Focused journeys cover internal links and 404s; mobile and desktop navigation; keyboard focus containment and restoration; the skip link; booking validation, empty availability, editing, confirmation, exit, refresh, and data clearing; inquiry validation, completion, return focus, and data clearing; absence of request, URL, cookie, local-storage, or session-storage leakage; image and font loading; CSP and security headers; social image and icon responses; robots and sitemap behavior; responsive layouts from 320 to 1440 pixels; enlarged text spacing; reduced motion; forced colors; and core content without JavaScript.

## Issues resolved during production QA

- Portfolio pass: earlier treatment booking, compact mobile facts, treatment-specific process/recovery diagrams, navigable alternatives, a fictional provider portrait, HTML care-plan artifact, and compact Visit progress label are validated. See `passes/PORTFOLIO-PASS.md` for copy changes and image provenance.

- Interior pass: the desktop Concerns separator now sits below the last item; verified at 1024, 1440, and 1920 pixels, retaining hover and keyboard behavior.
- Added six representative interior regressions covering optimized image loading, responsive reflow, reduced motion, enlarged text spacing, and axe checks. See `passes/INTERIOR-PASS.md` for the completed scope and image provenance.

- Visual-pass regression: treatment index numbers now use Juniper for sufficient contrast on Bone.
- Visual-pass regression: oversized provider quotation wraps without horizontal overflow at 320 pixels with enlarged text spacing.
- Added homepage regression coverage for footer disclosure, reduced motion, enlarged text reflow, and accessibility.
- Confirmed all three optimized images load. At the sampled 1440px/1x desktop viewport, image transfers were approximately 28 KB, 53 KB, and 61 KB. This is a local asset measurement, not a real-world performance score.

- Kept the two approved image assets byte-identical while recovering their local working copies from Git after macOS cloud offloading interrupted the first pass.
- Rebuilt from a clean generated cache after cloud-conflict copies appeared under `.next`; no source history was reset or rewritten.
- Contained the two-column treatment menu at the 1024-pixel desktop breakpoint.
- Prevented the mobile header and long headings from overflowing at 320 pixels with enlarged text spacing.
- Restored focus after cancelling booking exit and after returning from the inquiry completion state.
- Verified the booking fallback and substantive treatment content remain readable without JavaScript.

## Manual and remaining checks

Production screenshots were visually reviewed for 11 representative routes at 320, 390, 768, 1024, and 1440 pixels; all sections were checked for reflow and images for loading. Automated Chrome coverage is complete for this release candidate. The earlier deployed version received a desktop Safari smoke check; the new visual pass has not received a real Safari/iOS device check or manual VoiceOver workflow, so this project does not claim full browser coverage or WCAG conformance.

The following are intentional placeholders or deployment inputs:

- Creator contact is Carlos Gonzalez at `carlosmaxwellg@gmail.com`, supplied through a `mailto:` link. No personal portfolio URL is supplied or invented; no “coming soon” language remains.
- `NEXT_PUBLIC_SITE_URL` awaits the approved preview URL. Canonical links are omitted locally until it is set.
- `SITE_ALLOW_INDEXING` remains false. Review previews and booking pages stay `noindex`.
- Host-specific connection logging and headers must be confirmed on the deployed preview before the privacy delivery text is considered final for that host.

## Deployment gate

The local implementation is ready for a separately approved Vercel Preview update using the existing linked `site` app. Keep `SITE_ALLOW_INDEXING=false`; do not promote to Production, connect GitHub, or add a domain. After an approved deployment, run the HTTPS, metadata, asset, header, booking-privacy, keyboard, and mobile smoke checks listed in `../site/DEPLOYMENT.md`.
