# Static image delivery

The six photographs originally occupied 11,800,042 bytes as PNG. The two UI screenshots added 486,112 bytes. All eight now total 653,322 bytes (94.7% smaller), with no resized or cropped source pixels.

| Image | Dimensions | WebP bytes |
| --- | --- | ---: |
| hero-model | 1536 × 1024 | 62,546 |
| concern-model | 1122 × 1402 | 82,418 |
| lead-provider | 1122 × 1402 | 76,804 |
| consultation-planning | 1536 × 1024 | 79,084 |
| interior-concept | 1536 × 1024 | 92,342 |
| treatment-room | 1536 × 1024 | 92,026 |
| booking screenshot | 1440 × 900 | 57,084 |
| care-plan screenshot | 1440 × 900 | 111,018 |

## Display requirements and choice

The CSS container is capped at 80rem/1280px, with narrower split-column editorial images, a provider portrait capped at 28rem/448px, and a wide reception image. The desktop hero bleeds beyond its container and scales to 1.12; consultation images can use a tall 4:5 frame. Object-fit cover, object-position and animated scaling all require the original image canvas. Mobile layouts use nearly full-width images. Case-study screenshots display up to the content-container width and need crisp UI text.

Retain original pixel dimensions to avoid removing detail from high-density screens and tall/cropped frames. Encode photos once as WebP quality 85, effort 6; screenshots as lossless WebP, effort 6. Conversion used Sharp available with the locked Next.js dependency. This is source-asset preparation, not a runtime or build service. The original PNGs remain recoverable from Git commit `e45433ffca6451ecf5c0d53cb3cc3dc317779719`.

Each photo is now under 93 KB. One reusable file per image is a simpler tradeoff than a responsive-variant manifest or custom loader at this size. There is no per-device resizing or format negotiation; all viewports receive the same compact image. CSS remains responsive and no additional image detail is invented or removed by resizing. Next Image retains its layout, preload and lazy-loading behavior with `images.unoptimized=true` because these source files are already optimized.

## Updating imagery

Keep high-resolution originals in the source/design archive or Git history, outside `public/`. Prepare new WebP assets with the same encoding choices and sufficient dimensions for their largest cropped frame. Check skin texture, gradients and fine lines at 100%; use lossless WebP for UI screenshots. Replace the committed WebP, then build and check mobile/desktop output. Do not repeatedly recompress a lossy WebP or add the large original to public delivery. If imagery becomes substantially larger, reassess responsive variants then.
