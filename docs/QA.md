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
