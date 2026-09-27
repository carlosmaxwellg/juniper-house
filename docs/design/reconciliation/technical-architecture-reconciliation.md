# Technical architecture reconciliation

**Prepared:** 7 September 2026  
**Comparison:** approved Work artifact versus repository-local implementation copy

## Outcome

No content difference exists.

- Approved source: `../approved/technical-architecture.md`
- Existing implementation-local copy: `../../site/technical-architecture.md`
- SHA-256 for both: `8260cb6825f1b6c5c89d85e8a3eaf9cef96b29088aabe555dd4e474bff20b3a9`
- Both files: 807 lines, 30,914 bytes in the source workspace comparison

The Stage 11 strategy names the outputs version as the full-system source of truth. Therefore, `docs/design/approved/technical-architecture.md` is the authoritative handoff copy. `site/technical-architecture.md` remains an exact implementation-local mirror and has not been overwritten, edited, moved, staged, or deleted.

## Implementation state versus the approved architecture

The repository aligns with the foundation decisions that can already be observed:

- Node 24 is declared in `site/.nvmrc`.
- `site/package.json` pins Next.js 16.3.2 and ESLint's matching Next.js config.
- TypeScript strict mode is enabled.
- Tailwind CSS v4 is present without an added UI framework.
- The new site shell uses Server Components by default and isolates interactive navigation behavior in Client Components.
- Content has started moving into typed local modules.

Items still requiring later confirmation or implementation:

- The repository version, 16.3.2, was not independently checked against the package registry or current security advisories during this restricted-network handoff.
- Most approved routes, typed concern/treatment models, shared page templates, booking state machine, SEO files, tests, and deployment configuration are not yet implemented.
- The production build could not be fully verified in the handoff environment because `next/font/google` could not reach Google Fonts. Lint and TypeScript checks pass.

No architectural decision was changed during reconciliation.
