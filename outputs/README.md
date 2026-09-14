# Juniper House outputs index

This folder consolidates the Stage 1–11 source material that was available in the original Work workspace on 7 September 2026. Source files were copied without editing; the originals remain in their prior locations.

## Authority and labels

- `approved/` contains original deliverables from the Work workspace. The approval record is the locked stage status in `approved/project-strategy.md` plus Carlos's explicit approvals in the Work chat.
- `wireframes/` contains the original interactive Stage 8 wireframe artifact.
- `supporting/` contains useful historical or AI-authoring material that is not the current implementation handoff.
- `reconciliation/` contains new handoff documentation reconstructed from the repository and chat record. These files are summaries, not original approved stage deliverables.
- `CODEX-HANDOFF.md` at the repository root is the current operational handoff. It summarizes approved material but does not replace it.

## Stage map

| Stage | Status | Approved source | Purpose |
|---|---|---|---|
| 1 — Project brief | Locked — 13 Aug 2026 | `approved/project-strategy.md`, Stage 1 | Defines the fictional Austin clinic, offer category, audience, promise, and primary conversion. |
| 2 — Ideal customer | Locked — 13 Aug 2026 | `approved/project-strategy.md`, Stage 2 | Records the primary audience, anxieties, motivations, objections, and decision context. |
| 3 — Competitive and market research | Locked — 13 Aug 2026 | `approved/project-strategy.md`, Stage 3 | Records category patterns, competitor observations, source links, gaps, and strategic implications. |
| 4 — Brand positioning | Locked — 13 Aug 2026 | `approved/project-strategy.md`, Stage 4 | Establishes Juniper House, the consultation-led position, promise, personality, and message hierarchy. |
| 5 — Services and offer structure | Locked — 14 Aug 2026 | `approved/project-strategy.md`, Stage 5 | Defines the paid Planning Consultation and the seven-treatment launch menu. |
| 6 — Conversion strategy | Locked — 14 Aug 2026 | `approved/project-strategy.md`, Stage 6 | Defines the conversion path, CTA hierarchy, trust requirements, objections, and measurement intent. |
| 7 — Sitemap | Locked — 14 Aug 2026 | `approved/project-strategy.md`, Stage 7 | Defines navigation, routes, templates, internal linking, transparency pages, and indexing stance. |
| 8 — Page structure and wireframes | Locked — 22 Aug 2026 | `approved/project-strategy.md`, Stage 8; `wireframes/juniper-house-wireframes.html` | Defines page-level hierarchy, shared section patterns, responsive priorities, and the five-step booking structure. |
| 9 — Copy | Locked — 22 Aug 2026 | `approved/project-strategy.md`, Stage 9; `approved/website-copy.md`; `approved/brand-voice-guidelines.md` | Supplies implementation copy, interface states, disclosures, medical boundaries, and voice rules. |
| 10 — Visual direction | Locked — 22 Aug 2026 | `approved/project-strategy.md`, Stage 10; `approved/visual-direction.md`; `approved/visual-direction-board.html`; `approved/image-generation-prompts.md`; `approved/assets/` | Defines Warm Clinical Editorial, tokens, type, layout, imagery, interaction tone, and two illustrative reference images. |
| 11 — Technical architecture | Locked — 23 Aug 2026 | `approved/project-strategy.md`, Stage 11; `approved/technical-architecture.md`; `approved/adr-001-technical-foundation.md` | Defines the application architecture, content model, rendering, booking-demo boundaries, testing, deployment, and dependency rules. |

Stages 1–7 do not have separate standalone files in the retrieved workspace; their complete approved content is consolidated in `approved/project-strategy.md`. Stage 8 is also consolidated there and has the separate wireframe artifact listed above.

## Approved source files

- `approved/project-strategy.md` — master approval and decision record for Stages 1–11.
- `approved/website-copy.md` — complete page and interface copy deck.
- `approved/brand-voice-guidelines.md` — copy source of truth.
- `approved/visual-direction.md` — design specification and art direction.
- `approved/visual-direction-board.html` — rendered visual reference; its image paths resolve to `approved/assets/`.
- `approved/image-generation-prompts.md` — source prompts and provenance for the two generated references.
- `approved/technical-architecture.md` — authoritative Stage 11 architecture copy.
- `approved/adr-001-technical-foundation.md` — accepted architecture decision and trade-offs.
- `approved/assets/README.md` — new provenance inventory; it is a handoff summary, not an approved Stage 10 artifact.

## Supporting material

- `supporting/ai-brand-voice-guidelines.md` — the original `.claude` authoring version. It is not byte-identical to the approved brand-voice source and must not supersede it.
- `supporting/stage-12-implementation-handoff-2026-08-23.md` — the original pre-development handoff. It is historically useful, but its statement that no code exists is obsolete. Use the root `CODEX-HANDOFF.md` for current status.

## Reconciliations, conflicts, and unresolved items

### Approval metadata mismatch

The original `approved/website-copy.md` and `approved/visual-direction.md` headers still say “Proposed for approval,” and the brand-voice document says “Approved-strategy draft.” They were not edited during handoff. Their later approval is recorded by the locked Stage 9 and Stage 10 entries in `approved/project-strategy.md` and by the subsequent approvals in the Work chat.

### Architecture copies

`approved/technical-architecture.md` and `site/technical-architecture.md` are byte-for-byte identical (SHA-256 `8260cb6825f1b6c5c89d85e8a3eaf9cef96b29088aabe555dd4e474bff20b3a9`). The approved outputs copy is the source of truth; the site copy is an unchanged implementation-local mirror. See `reconciliation/technical-architecture-reconciliation.md`.

### Brand-voice copies

The approved brand-voice document and the historical `.claude` version are not exact mirrors. The latter includes additional AI-enforcement wording and examples. The master strategy explicitly identifies `approved/brand-voice-guidelines.md` as the voice source of truth.

### Deferred or unresolved decisions

- Final metadata, structured data, privacy, terms, and tested accessibility language remain Stage 15 work.
- Detailed interaction behavior and motion refinement remain Stage 14 work.
- The strategic customer model has not been validated with interviews or real clinic performance data; it remains a portfolio hypothesis even though the project direction is approved.
- Real-world clinical, legal, regulatory, privacy, provider-scope, and accessibility review is intentionally absent and would be required before adapting this fictional concept for an operating clinic.
- The architecture requires the latest supported security-patched Next.js 16.x release to be verified at scaffolding time. The repository currently pins 16.3.2; no independent registry/security verification was possible during this documentation-only, restricted-network handoff.

## Missing or inaccessible artifacts

No referenced Stage 1–11 text or wireframe artifact was inaccessible. The following production inputs do not exist in the retrieved materials:

- A complete production photography set. Only the hero portrait and interior art-direction references are present.
- A separate license or usage-rights certificate for the generated images. The available provenance says they were created with the built-in image-generation tool as original illustrative references.
- Real patient proof, testimonials, ratings, awards, before-and-after results, provider credentials, or operating-clinic facts. These are intentionally excluded from the approved fictional concept, not lost artifacts.
- A final custom logo symbol or production favicon. Stage 10 approves a typography-led wordmark and does not require a symbol.

## New summaries created for this handoff

The following are reconstructed from the approved files, Work chat approvals, Git history, and current working tree. They are clearly separate from the original deliverables:

- `README.md` — this index.
- `approved/assets/README.md` — asset provenance inventory.
- `reconciliation/technical-architecture-reconciliation.md` — architecture comparison.
- `../CODEX-HANDOFF.md` — current repository and implementation handoff.
