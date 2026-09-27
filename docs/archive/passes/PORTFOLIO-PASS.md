# Focused portfolio pass — 17 September 2026

## Completed scope

- Treatment introduction now puts booking and the risks link before the compact facts. The generic hero photograph moves into the process section. Existing consultation or prepared-room imagery is selected by treatment group.
- Shared process roadmaps use each treatment's existing steps. Separate recovery timelines retain the existing phase descriptions, including variation and limitations. Alternatives link to the relevant implemented treatment pages; referral, home-care, and no-treatment options remain readable without misleading links.
- About now has a human centerpiece: a generated portrait explicitly representing fictional lead provider Rowan Ellis. Existing roles/credentials remain illustrative, with no new credentials or clinical claims. The existing environment photographs form a two-image sense-of-place gallery.
- Approach opens with an accessible HTML Now / Next / Later care-plan artifact. Its consultation journey reuses the approved Listen / Assess / Explain / Plan content. Commitments and exclusions share one section instead of two repeated full-width sections.
- Mobile treatment facts use two columns with a full-width provider row, treatment booking appears earlier, homepage opening spacing is tighter, directory facts are more compact, and the first booking progress label is now “Visit.” Consultation booking also precedes its facts.
- Existing SVG icons, focus behavior, reduced-motion support, footer disclosure, demo privacy boundaries, routes, typed content model, and dependencies are preserved. No additional animation or client-side script was introduced.

## Material visitor-copy changes

The user authorized this focused revision of previously approved copy. Approved source documents were not overwritten. The content schema is unchanged.

| Area | Material change |
| --- | --- |
| Chemical peel pricing | “Series pricing would show…” becomes “Before agreeing to a series, review both the per-session price and the total cost.” |
| Microneedling provider standard | “The site should never imply…” becomes the direct distinction “Professional medical microneedling and at-home rollers are not equivalent.” |
| Microneedling risks/FAQ | Removed implementation instructions about implying radiofrequency; directly states that the service does not use it. All listed risks remain. |
| Other treatment provider/product guidance | Replaced “A real clinic must/should…” with direct questions visitors can ask about device, product, qualifications, oversight, and emergency preparation. No device, license, or branded product was invented. |
| Facial and series FAQs | Removed fictional-launch/planning phrasing while preserving suitability requirements and the distinction from branded devices. |
| Treatment template | Removed repeated general clinic/provider and pricing concept notices. Retained the footer disclosure, assessment qualification, full risks, and contextual imagery captions. |
| About | Customer-facing introduction, care-team role descriptions, and oversight guidance replace business/production commentary. The compact fictional-profile notice and portrait caption clearly preserve the illustrative status of people and credentials. |
| Approach | Proof language now explains how to interpret outcome evidence; the broad role-verification implementation note becomes visitor-facing responsibility/oversight guidance. |
| Consultation | Provider profile label shortened; payment/credit terms and secure-intake guidance address the visitor directly. Demo payment safeguards remain explicit. |
| Visit | “The finished concept will demonstrate…” becomes an arrival-details checklist introduction. No real address or directions were invented. |
| Booking | “Appointment” progress label becomes “Visit.” Cancellation text is clearly a sample policy with no demo fee, instead of instructions about what a real clinic would publish. |
| Accessibility | Accommodation text directly explains that requests remain in the demonstration and are not sent. No conformance claim was added. |

## Asset added

`public/images/people/lead-provider.png` — generated using the built-in image-generation tool, copied into the repository, and delivered through the existing responsive Next.js image optimizer. This is the only new photographic asset; the other photographs are reused. The care plan, process roadmaps, and timelines are HTML/CSS, not text embedded in images.

Final generation prompt:

> Photorealistic warm clinical editorial portrait for Juniper House fictional lead-provider profile, vertical 4:5. An invented adult woman around 40 with medium olive skin, shoulder-length dark brown hair tucked behind one ear, natural visible skin texture and gentle expression lines, relaxed attentive expression, seated at a pale oak consultation desk. Understated ivory tailored shirt, no white coat, no stethoscope, no badges or medical symbols. A corner of a cream notebook visible. Warm plaster background, softly blurred deep juniper green architectural panel, soft side window daylight, warm-neutral white balance, subtle grain. Premium independent editorial photography, intimate human presence, not a stock doctor advertising smile or beauty campaign. Head and upper torso, breathing room around head. No text, logos, credentials, identifiable real person, retouching, medical procedure or patient. Will be explicitly labeled generated portrait of a fictional provider.

## QA and stopping point

- Production build, lint, TypeScript, eight unit tests, and all 47 production Chrome browser tests pass (browser suite: 1.2 minutes).
- All 25 public routes pass the existing axe scans. Targeted tests verify early booking on all seven treatments, preservation of recovery/risk text, labeled fictional provider imagery, the HTML care plan, mobile Visit progress label, and responsive reflow.
- Desktop/mobile visual review covered microneedling, HA filler, About, Approach, homepage, treatment directory, and booking. Existing narrow-width, enlarged text, reduced-motion, keyboard, no-JavaScript, privacy, and metadata regressions remain passing.
- No new dependencies, network-backed forms, indexing changes, deployment, domain changes, or GitHub connection.
- The user's `.vscode/tasks.json` is intentionally untouched and excluded from this implementation commit.

No further visual redesign is planned. Creator URLs remain approved placeholders. Manual VoiceOver and real-device Safari/iOS checks remain useful additional validation; automated checks do not establish complete accessibility conformance. Any preview deployment requires separate approval.
