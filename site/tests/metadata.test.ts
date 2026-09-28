import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

function metadataFor(overrides: Record<string, string>) {
  const env = { ...process.env };
  for (const key of ["NEXT_PUBLIC_SITE_URL", "SITE_ALLOW_INDEXING", "SITE_ENV", "VERCEL_ENV"])
    delete env[key];
  return JSON.parse(execFileSync(process.execPath, ["--input-type=module", "-e", `
    import { allowIndexing, pageMetadata } from './src/lib/metadata.ts';
    console.log(JSON.stringify({allowIndexing, page: pageMetadata('Test', 'Description', '/about'), booking: pageMetadata('Book', 'Demo', '/book', true)}));
  `], { env: { ...env, ...overrides }, encoding: "utf8", cwd: new URL("../", import.meta.url) }));
}

test("preview and unclassified builds cannot opt into indexing", () => {
  for (const SITE_ENV of ["preview", ""]) {
    const result = metadataFor({ NEXT_PUBLIC_SITE_URL: "https://preview.example", SITE_ALLOW_INDEXING: "true", SITE_ENV });
    assert.equal(result.allowIndexing, false);
    assert.equal(result.page.robots.index, false);
  }
});

test("production indexing requires explicit permission and a URL; booking stays noindex", () => {
  const cases: Record<string, string>[] = [{}, {SITE_ALLOW_INDEXING: "true"}, {NEXT_PUBLIC_SITE_URL: "https://juniper.example"}];
  for (const overrides of cases) {
    assert.equal(metadataFor({ SITE_ENV: "production", ...overrides }).allowIndexing, false);
  }
  const result = metadataFor({ SITE_ENV: "production", SITE_ALLOW_INDEXING: "true", NEXT_PUBLIC_SITE_URL: "https://juniper.example" });
  assert.equal(result.allowIndexing, true);
  assert.equal(result.page.alternates.canonical, "https://juniper.example/about");
  assert.equal(result.page.openGraph.url, "https://juniper.example/about");
  assert.equal(result.booking.robots.index, false);
  assert.equal(metadataFor({ SITE_ENV: "production", SITE_ALLOW_INDEXING: "true", NEXT_PUBLIC_SITE_URL: "https://juniper.example", VERCEL_ENV: "preview" }).allowIndexing, false);
});
