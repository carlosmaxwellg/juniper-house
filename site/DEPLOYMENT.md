# Deployment readiness

No deployment or external-service changes have been made. Preserve the existing Git history and deploy only after Carlos approves a concrete destination.

## Proposed first release

Use the approved Vercel direction with the repository root directory set to `site`, Node.js 24, `npm ci`, and `npm run build`. Keep the standard Next.js runtime and image optimization. Do not add a database, CMS, scheduler, mail service, payment service, or analytics.

The first release should be a review preview with indexing disabled. Confirm the destination account/project and URL before creating or changing anything externally. Do not push to a remote that may automatically deploy without approval.

## Before creating the deployment

1. Review the final `../docs/QA.md` results and any recorded limitations.
2. Confirm the Vercel account/project and preview or production intent with Carlos.
3. Set `NEXT_PUBLIC_SITE_URL` to the actual approved destination before building. Rebuild after a URL change; canonical and social metadata are generated at build time.
4. Leave `SITE_ALLOW_INDEXING` unset/false for previews. The fictional concept should not be indexed as a real clinic. Production indexing is a separate explicit decision.
5. Confirm the chosen host's connection/log processing and update the delivery section of the privacy notice if necessary.
6. Creator contact/portfolio may remain the visible placeholder, as Carlos explicitly requested. Update `src/content/creator.ts` whenever the destination is available.

## Post-deployment smoke checks

- Homepage, concern, treatment, consultation, visit, and booking load over HTTPS.
- Fonts and all six optimized images load across the homepage and interior templates; favicon and social image resolve at the deployed domain.
- Canonicals use the correct domain, previews and booking remain `noindex`, and the sitemap matches the chosen policy.
- Complete booking with sample details; confirm no POST, email, charge, booking, URL leakage, or persistent browser storage.
- Check keyboard navigation and mobile layout on the actual preview, including the sticky booking action.
- Check CSP and security headers through the host; document any host-added scripts or behavior.
- Spot-check real Safari/iOS and VoiceOver before claiming broad browser or accessibility conformance.

## Portability and rollback

Any compatible Node/Next.js host can run `npm run build` followed by `npm run start`. `output: "export"` is not enabled; changing it would need separate image and routing verification.

For a bad release, redeploy the last verified commit through the host's rollback mechanism. Do not rewrite Git history. The site has no database or external writes to migrate or undo.

## Known scope boundaries

- A fictional clinic, not an operational healthcare site.
- Sample dates, no live availability or transactions.
- Two supplied illustrative images plus generated consultation, model-portrait, prepared-room, and fictional lead-provider images; no real provider/patient photography set.
- Public creator destinations intentionally remain placeholders.
- No real-world performance, conversion, patient outcome, or accessibility-conformance claim.
