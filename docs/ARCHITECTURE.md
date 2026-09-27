# Architecture

The application lives in `site/` and uses Next.js App Router, React 19, strict TypeScript, and Tailwind CSS 4 with plain CSS. Dependencies and exact versions are locked in `site/package-lock.json`; Node.js 24 is required.

Public routes prerender at build time. Client components support navigation, the decorative hero reveal, and simulated booking/inquiry interactions. Typed local content supplies shared templates. Images use Next.js optimization; fonts are self-hosted in the generated build.

Forms retain entries only in React memory and clear personal fields on completion or refresh. There are no submission endpoints, server actions, database, email, payments, analytics, or persistent browser storage.

Security headers restrict framing, content types, device permissions, external connections, and form submission. The static rendering model uses an inline-script CSP allowance for Next.js hydration; it is not a nonce-based strict CSP.

`NEXT_PUBLIC_SITE_URL` controls canonical/social URLs at build time. `SITE_ALLOW_INDEXING` defaults off, Vercel previews stay noindex, and booking routes always stay noindex. This fictional clinic should not appear as an operating local business.

Historical design decisions are retained in [the original architecture record](design/approved/technical-architecture.md). Current source and release validation take precedence over historical plans.
