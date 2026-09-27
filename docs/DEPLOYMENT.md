# Deployment and freeze

## Destination verified on 24 September 2026

- Existing Vercel project: `maxwell-studio/juniper-house` (Maxwell Studio).
- Vercel account: `carlosmaxwellg-4308`.
- Project ID: `prj_dFxkXfda2CvUsUbM7AdjafUso3P0`.
- Existing project currently uses root `.` and Node.js 24.x, matching previous CLI uploads from `site/`.
- GitHub: new private `juniper-house` repository requested; Carlos will create/connect his account and provide the username before any external work.
- Premium branch `premium-direction` is the proposed release source of truth. The baseline repository must remain untouched.

Stop before final commit, remote changes, GitHub creation/push, or a Vercel release until Carlos confirms the concrete handoff. Proposed commit identity: Carlos Gonzalez <carlos@carlosmaxwell.dev>. Before any external creation or push, confirm these destinations and source-of-truth change with Carlos. Do not push the current `origin`: it points to the local baseline repository.

## GitHub integration

Create the private repository only after account confirmation. Preserve existing Git history. Point the premium repository at the new GitHub remote without writing to the baseline. For a Git integration using the complete repository, update the existing Vercel project's Root Directory from `.` to `site`; do not create another project. Use Node.js 24, `npm ci`, and `npm run build`.

For a CLI preview uploaded directly from `site/`, keep the existing root `.`. Do not mix the two root-directory conventions. Linking GitHub can trigger a deployment; perform it only as part of the approved release.

Set `NEXT_PUBLIC_SITE_URL` to the confirmed HTTPS destination before building. Keep `SITE_ALLOW_INDEXING=false`. Public hosting does not require search indexing or a public GitHub repository.

## Release checks

1. Complete local validation recorded in `QA.md` and create the final premium commit.
2. Confirm GitHub account, Vercel destination, premium source of truth, and baseline preservation.
3. Push to the new private repository and deploy to the existing Vercel project.
4. Verify HTTPS routes, images, fonts, canonical/social URLs, noindex metadata, robots, sitemap, CSP, and other security headers on the deployed URL.
5. Complete a sample booking and verify no submission, payment, email, URL leakage, or persistent storage.
6. On an actual iPhone in Safari, check navigation, glass reveal, treatment reading, booking/back/edit/confirmation, keyboard and sticky action behavior, and reduced motion.
7. Record deployed URL and commit, then freeze. Reopen only for a reproducible functional, accessibility, or security defect. Move to portfolio packaging and buyer acquisition.

Rollback through Vercel to the last verified deployment if needed. Do not rewrite Git history. The site has no persistent application data to migrate.
