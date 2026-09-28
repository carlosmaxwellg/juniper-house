# Cloudflare Pages static-export verification — 27 September 2026

Scope: the existing premium working tree on `main`, based on `e45433ffca6451ecf5c0d53cb3cc3dc317779719`. No design or interaction changes, commit, push, or deployment. This entry supersedes the deployment-specific status below; earlier QA remains historical evidence only.

## Fresh completed checks

- Clean `npm ci`: passed; locked dependency installation completed, audit reported 0 vulnerabilities. Existing ESLint 9.39.5 emitted a deprecation notice; its version was not changed in this work.
- Final production static export: passed, 32/32 generated entries, 25 public HTML pages, 219 files in `site/out/`. No Worker bundle or runtime image endpoint. All eight shipped editorial/case-study assets are WebP; large PNG originals are absent from the export.
- Lint, TypeScript, and `git diff --check`: passed.
- Unit tests: 10/10 passed, including preview/unknown-environment noindex, production opt-in and always-noindex booking metadata.
- Playwright request-only checks against the actual Wrangler Pages emulator: 2/2 passed. These exercise all 25 public routes, internal links and referenced assets/fonts, all five security headers, canonical URLs, page noindex, unknown-route 404s, robots and sitemap, and the generated Open Graph image.
- `/opengraph-image`: HTTP 200, `Content-Type: image/png`, verified PNG signature. The first Pages check exposed `application/octet-stream`; the dedicated `_headers` rule fixed it and the regression passed after the final build.
- The source `_headers` file is copied byte-for-byte to the export. `/about` resolves directly without a trailing-slash change; unknown concern/treatment routes return a real 404. No SPA fallback was added.
- In-app browser: 55 reflow checks (11 representative routes × 320, 390, 768, 1024, 1440px), all without horizontal overflow, with one main and one H1 each. Visually inspected desktop/mobile homepage and compared original/WebP image crops. All eight images loaded in the browser; no warning/error console entries in the final inspected pages.
- In-app interactions: hero reveal resolves; mobile menu closes with Escape and restores focus; mobile About navigation closes the dialog; desktop menu keyboard open/Escape works; client navigation to About/Visit and homepage works.
- Full simulated booking checked: required-provider error, no-times day, chosen sample time, missing-details errors, sample details, review, edit with retained details, completion with cleared personal fields and focused heading, then refresh reset. No entered details appeared in the URL.
- Inquiry checked: required-field errors, sample completion, confirmation focus, cleared fields, and return to the form. No mutation requests or sentinel values appeared in the local Pages access log during these manual flows. Automated reducer/privacy tests also pass.

## Unfinished browser sign-off

The full 61-test Playwright suite was attempted against the export, but Chromium could not launch under the macOS execution sandbox: `MachPortRendezvousServer ... Permission denied (1100)`. The fail-fast run reported one browser-launch failure (`page and accessibility: /`), one interrupted remediation test and 59 not run. Installed Chrome and an isolated Playwright Chromium download both hit the launch restriction. This is an environment failure, not a passing suite or an application assertion failure.

The in-app checks above provide useful browser evidence, but do not replace the full axe, reduced-motion, forced-colors, no-JavaScript and automated request/storage suite. Rerun `npm run test:e2e` from `site/` in an environment permitted to launch Playwright browsers before final release sign-off. `npx playwright install chromium` prepares the default browser. The Pages-only checks can run separately with `npm run test:e2e -- static-http.spec.ts`.

Sandbox-local QA used `XDG_CONFIG_HOME` and `WRANGLER_LOG_PATH` under `/tmp`, `CHOKIDAR_USEPOLLING=true`, and `PLAYWRIGHT_BROWSERS_PATH` under `/tmp`. These are local execution accommodations, not deployment requirements.

## Deployment prerequisites

The final build deliberately uses `NEXT_PUBLIC_SITE_URL=https://juniper-house.example`, `SITE_ENV=production`, and `SITE_ALLOW_INDEXING=false`. The reserved domain is for QA only: set the actual approved origin and rebuild before deployment. Cloudflare preview settings must use `SITE_ENV=preview`; leave indexing false in both environments. Real HTTPS/Cloudflare edge checks and actual iPhone/Safari/VoiceOver checks remain outstanding.

## Dependency and commit scope

The only added direct dependency is development-only `wrangler@4.142.0`, to serve the export with genuine Pages URL/header behavior for local preview and the test server. It is not part of `out/`, not a site runtime requirement, and not required by the hosted Pages build. Keeping it pinned makes `npm start` and end-to-end QA reproducible. Removing it would require changing those commands to an external pinned CLI; no deployment-only adapter is installed.

The lockfile adds 57 package records for Wrangler and its transitive tools (32 optional platform packages). Existing package versions are unchanged. Only dependency-classification flags changed for existing Sharp, @img/colour and Sharp's nested semver. No direct Sharp or image-service dependency was added.

Suggested single commit: `build: export Juniper House for Cloudflare Pages`. Include static configuration, metadata, headers, image replacements/references, Pages preview tooling/lockfile, regression tests and current deployment/QA documentation. Generated output, browser downloads, reports, caches and credentials remain ignored/outside the repository. Changes remain uncommitted; full browser sign-off is not marked complete.

---

# Premium release validation

Release candidate: 24 September 2026. Final approved cleanup, no broad redesign.

## Scope

Removed the treatment hover preview, decorative hero inset, repeated treatment image breaks, and section chapter counters/progress. Retained the glass reveal, care-plan artifact, process/recovery diagrams, prices, risks, booking, and responsive system. Revised visitor copy and standardized generated-image labels. Homepage and Approach now share Assess / Prioritize / Treat / Review; Consultation separately explains Listen / Assess / Explain / Plan within its 45-minute visit.

## Validation

- Lint and strict typecheck: passed.
- Unit tests: 8/8 passed.
- Production build: passed; 32 generated routes/assets, with public pages prerendered.
- Final full production browser suite after the case-study addition: 57/57 passed.
- Responsive capture/reflow matrix: 11 representative routes at 320, 390, 768, 1024, and 1440 pixels.
- Visually inspected desktop/mobile homepage, treatment introduction, care-plan page, booking, and case-study gallery screenshots. Gallery images are actual UI captures, not generated mockups.
- Production dependency audit: 0 known vulnerabilities on 24 September 2026.
- Local checks cover preview-safe indexing, security headers, booking privacy, keyboard navigation, reduced motion, image loading, and automated axe rules. They do not replace hosted or real-device verification.

The first run's single failure was a stale provider-caption assertion, corrected to match the approved label. Later full runs passed. The professional contact email was subsequently changed to `carlos@carlosmaxwell.dev`; a fresh production build and the focused case-study/accessibility contact test both passed for that final change.

## Repository audit

Design sources consolidated under `docs/design/`; earlier implementation and QA records archived under `docs/archive/`. Removed five unused starter SVGs and the byte-identical architecture duplicate. Source history preserved. Root ignore rules cover dependencies, build/test output, environment files, Vercel metadata, logs, and editor-local files. Known absolute Mac paths removed from current documentation. Pattern scans found no credential/private-key/token matches in 270 historical Git blobs or the 120 current tracked/candidate files. Current candidate files also had no absolute Mac paths or matching literal secret assignments. No dependency/build/test folders, `.env.local`, `.vercel`, or editor-local files are tracked. These are pattern-based audits, not a guarantee against every possible secret format.

The existing uncommitted treatment-preview work was reviewed before removal. Useful design history and the pre-existing visual-direction note remain archived. Git history was not rewritten; historical commits may still contain old local-path references.

## Outstanding release gates

External account/destination approval, GitHub creation/push, Vercel release and hosted smoke checks, and actual iPhone/Safari review. Local browser tests do not establish real-device coverage or full WCAG conformance.
