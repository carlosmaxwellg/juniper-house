# Cloudflare Pages deployment

The premium repository exports a fully static Next.js site. No Pages Functions, Worker adapter, Next.js server, database, or runtime image service is required. Deployment is not authorized by local build or QA commands. Do not push the current local-baseline remote or create a hosted release without Carlos's approval.

## Pages build settings

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Root directory | `site` |
| Node version | `24` (`NODE_VERSION=24` in Pages) |
| Dependency install | `npm ci` (lockfile committed) |
| Build command | `npm run build` |
| Build output directory | `out` (relative to `site`) |
| Production branch | Select the approved release branch; current checkout is `main` |

Do not use `next start`, `next export`, `@cloudflare/next-on-pages`, or an OpenNext adapter. Pages serves the HTML, RSC navigation payloads, fonts, images and other files generated in `site/out/`. Its clean-URL handling serves `/about.html` at `/about`; exported `404.html` supplies actual 404 responses. No catch-all SPA redirect should be added.

## Build-time environment

Configure these separately in the Pages **Production** and **Preview** environment settings:

| Variable | Production | Preview |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Approved HTTPS origin (custom domain, or production `pages.dev` origin) | Same approved canonical origin; previews remain noindex |
| `SITE_ENV` | `production` | `preview` |
| `SITE_ALLOW_INDEXING` | `false` for this fictional portfolio | `false` |
| `NODE_VERSION` | `24` | `24` |

`NEXT_PUBLIC_SITE_URL` is required for correct deployed canonical, Open Graph and social-image URLs. Use an origin without a path. Set it before building and rebuild when it changes. It is intentionally not inferred from request headers. Local builds without it omit canonicals and use localhost for the social-image base; those builds must not be deployed. The validation run used the reserved `https://juniper-house.example` origin, which must be replaced and rebuilt before release.

Indexing requires all three: `SITE_ENV=production`, `SITE_ALLOW_INDEXING=true`, and a configured site URL. Unknown environments fail closed. Vercel previews also remain blocked if that platform is used later. Booking and booking-confirmation pages always remain noindex. With indexing disabled, sitemap.xml is empty and robots.txt allows crawling so crawlers can read page-level noindex; it does not advertise a sitemap. This is not access control. Enabling production indexing is a separate decision, not part of this migration.

## Local static verification

From `site/`, using Node 24:

```sh
npm ci
npx playwright install chromium
export NEXT_PUBLIC_SITE_URL=https://juniper-house.example
SITE_ENV=production SITE_ALLOW_INDEXING=false npm run build
npm run lint
npm run typecheck
npm test
npm run test:e2e
```

The browser suite starts **Wrangler Pages locally against `out/`**, exercising Cloudflare clean URLs, exported navigation payloads, `_headers`, metadata assets, and the custom 404. `npm start` launches the same local preview at http://127.0.0.1:3100; it does not deploy or require a Cloudflare account. Wrangler is a pinned development dependency only. `PLAYWRIGHT_CHANNEL=chrome` optionally uses installed Chrome instead of Playwright Chromium.

## Images and security headers

See [static image decisions](STATIC-IMAGES.md). All eight editorial/case-study images are committed WebP files, served directly. Six photos use quality 85; two UI screenshots use lossless encoding. Original dimensions, framing, alt text, loading behavior and CSS remain unchanged. No image service, loader, or generation step is required during deployment.

`site/public/_headers` is copied unchanged to `out/_headers`. It preserves the production CSP, nosniff, DENY framing, referrer policy and device restrictions. A specific `/opengraph-image` rule supplies `Content-Type: image/png` because that exported file has no extension. The CSP retains the existing inline-script allowance for Next.js hydration. The Next dev server does not interpret this Cloudflare file; validate production headers with the static preview. Add no third-party scripts without checking their CSP implications.

## Before release

1. Approve the Cloudflare account/project, source repository/branch, and destination URL. The prior Vercel destination is historical context, not this deployment target.
2. Set the environment table above and produce a fresh build using the actual URL.
3. Run the current validation suite; review [QA](QA.md) for outstanding local-environment limitations.
4. Deploy only after authorization. Verify routes, unknown-route 404s, CSP/security headers, WebP images, fonts, canonicals/social previews, noindex, mobile navigation, hero reveal, and the complete booking/inquiry demonstrations on the real HTTPS origin.
5. Check actual iPhone Safari and VoiceOver. Local browser checks do not establish real-device support or complete accessibility conformance.

Rollback by redeploying the last verified Pages deployment. There is no persistent application data to migrate. Preserve the baseline repository and Git history.
