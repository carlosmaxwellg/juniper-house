import test from "node:test";
import assert from "node:assert/strict";
import { treatments } from "../src/content/treatments.ts";
import { concerns } from "../src/content/concerns.ts";
import {
  primaryNavigation,
  footerNavigation,
  type NavigationLink,
} from "../src/content/navigation.ts";
import { pages } from "../src/content/pages.ts";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
test("all approved content is complete and cross references resolve", () => {
  assert.equal(treatments.length, 7);
  assert.equal(concerns.length, 4);
  const slugs = new Set(treatments.map((t) => t.slug));
  assert.equal(slugs.size, 7);
  const concernSlugs = new Set(concerns.map((c) => c.slug));
  assert.equal(concernSlugs.size, 4);
  for (const t of treatments) {
    for (const value of Object.values(t.quickFacts)) assert.ok(value.length);
    assert.ok(t.risks.length > 50);
    assert.ok(t.maySuit.length);
    assert.ok(t.mayNotSuit.length);
    assert.ok(t.faqs.length);
    for (const slug of t.relatedConcernSlugs) assert.ok(concernSlugs.has(slug));
  }
  for (const c of concerns) {
    assert.ok(c.medicalBoundary.length);
    for (const slug of c.relatedTreatmentSlugs) assert.ok(slugs.has(slug));
    for (const p of c.pathways)
      for (const slug of p.treatmentSlugs) assert.ok(slugs.has(slug));
  }
});
test("navigation points to implemented routes and headings are unique", () => {
  const routes = new Set([
    "/",
    "/concerns",
    "/treatments",
    "/book",
    "/privacy",
    "/terms",
    ...Object.keys(pages).map((k) => `/${k}`),
    ...treatments.map((t) => `/treatments/${t.slug}`),
    ...concerns.map((c) => `/concerns/${c.slug}`),
  ]);
  const links = [
    ...primaryNavigation.flatMap<NavigationLink>((n) =>
      n.kind === "menu"
        ? [n, ...n.sections.flatMap<NavigationLink>((s) => s.links)]
        : [n],
    ),
    ...footerNavigation.flatMap<NavigationLink>((n) => n.links),
  ];
  for (const link of links) assert.ok(routes.has(link.href), link.href);
  const titles = [...treatments, ...concerns, ...Object.values(pages)].map(
    (p) => p.hero.headline,
  );
  assert.equal(new Set(titles).size, titles.length);
});
test("demo implementation has no transmission or persistent storage primitives", () => {
  for (const dir of ["src/lib/booking", "src/components/booking"]) {
    for (const file of readdirSync(dir)) {
      const source = readFileSync(join(dir, file), "utf8");
      assert.doesNotMatch(
        source,
        /fetch\s*\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|document\.cookie|use server|action=|formAction=/,
        file,
      );
    }
  }
  const inquiry = readFileSync(
    "src/components/content/inquiry-form.tsx",
    "utf8",
  );
  assert.doesNotMatch(
    inquiry,
    /fetch\s*\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|document\.cookie|action=/,
  );
});
