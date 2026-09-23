# Interior visual pass — 16 September 2026

## Completed

- Fixed the Concerns dropdown: the inline “View all concerns” link's top padding placed its border across the last menu item. It now occupies a separate block row. Other links retain their hover underline and keyboard behavior.
- Extended `EditorialHero` with an optional image composition and reused it across concerns, indexes, and narrative pages.
- Concern template: model portrait, numbered editorial pathways, and a deep-Juniper consultation composition with the existing planning image.
- Treatment template: prepared-room photograph, prominent five-part facts strip, clearer process/recovery columns, pricing typography, and visible risk-section rules.
- Narrative template: existing planning/interior photography, varied section rhythm, a shared heading-led copy grouping for method/team/clinical-role sections, and larger statement typography. Original copy and section order are preserved.
- Shared interior typography and closing invitations follow the homepage's palette and editorial scale. Policy pages remain reading-focused. The homepage and footer disclosure are unchanged.

No content model, dependency, booking behavior, external connection, or deployment configuration changed. All new presentation is server-rendered HTML and CSS; no additional client-side script or animation library was introduced. Image dimensions reserve layout space, below-fold images remain lazy-loaded, and Next.js serves responsive optimized versions.

## Validation

- Build, lint, type check, and eight unit tests pass.
- All 44 production Chrome browser tests pass (39.0 seconds), including all 25 public routes' accessibility checks, navigation, privacy-preserving booking/inquiry flows, metadata, security headers, and existing homepage regressions.
- New dropdown regression checks at 1024, 1440, and 1920 pixels verify separation from the last item, hover underline, and keyboard order.
- New interior checks cover concern, treatment, Approach, About, Consultation, and Visit at 320, 768, and 1440 pixels, image loading, reduced motion, and 320-pixel enlarged text spacing with axe checks.
- Representative concern, treatment, Approach, About, and Consultation desktop/mobile layouts were previewed locally and visually inspected.
- Generated cloud-conflict TypeScript duplicates were moved recoverably from `.next/types` to `/tmp/juniper-generated-conflicts-20260916`; no source history was reset.

Automated accessibility checks do not establish complete WCAG conformance. Manual VoiceOver and real-device Safari/iOS validation remain outside this pass. Creator contact/portfolio destinations remain the approved placeholders. No deployment was performed.

## Generated assets and final prompts

Both images were generated with the built-in image-generation tool, copied into the repository, and displayed with transparent generated-image captions. Existing images were preserved.

`public/images/people/concern-model.png`

> Juniper House warm clinical editorial photograph, natural photorealistic portrait for a premium aesthetics website. One adult woman around 42 with rich medium-brown skin, visible natural pores, subtle expression lines and small freckles, short dark curly hair. Relaxed thoughtful three-quarter portrait looking just beside camera, cream structured cotton shirt, shoulders and head visible, absolutely no beauty smoothing. Quiet pale warm plaster background with a narrow out-of-focus deep juniper green architectural panel. Soft side-window daylight, warm-neutral white balance, restrained contrast and fine film grain. Art-directed intimate magazine portrait, not a stock advertising smile or spa image. Vertical 4:5 composition with breathing room around head suitable for responsive cropping. No text, logos, jewelry emphasis, plants, robes, medical equipment, before/after, skin-problem close-ups or claims of treatment results.

`public/images/clinic/treatment-room.png`

> Juniper House warm clinical editorial photograph for a premium medical aesthetics treatment information page. One quiet treatment room prepared before an appointment: a clean ivory adjustable treatment couch partially cropped in the foreground with a precisely folded white cotton towel, brushed metal preparation trolley with a closed simple stainless steel tray and no visible instruments, frosted glass partition, pale oak cabinetry, honed limestone and warm plaster, one deep juniper green architectural plane. Soft side window daylight, warm-neutral color, subtle film grain, realistic tactile materials. Art-directed architectural hospitality photograph with disciplined clinical cleanliness, human scale and asymmetric composition; not a generic spa or stock medical room. Landscape 3:2 with central composition that crops elegantly. No people, needles, visible devices or branded products, plants, candles, robes, signage, text, logos, watermark. This is an illustrative prepared environment, not proof of a real clinic or a specific procedure.
