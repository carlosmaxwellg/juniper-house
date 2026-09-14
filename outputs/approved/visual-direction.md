# Juniper House Skin & Aesthetics — Visual Direction

**Stage:** 10 — Visual Direction  
**Status:** Proposed for approval  
**Date:** 22 August 2026  
**Recommended territory:** Warm Clinical Editorial

## Direction in one sentence

Juniper House should look like a thoughtful editorial publication inside a warm, contemporary clinic: human enough to lower anxiety, precise enough to earn clinical trust, and restrained enough to feel premium without performing luxury.

## The visual problem to solve

Most category aesthetics cluster around one of two visual extremes:

- Soft beige spa imagery that feels pleasant but interchangeable
- High-contrast medical luxury that feels expensive but cold or intimidating

Juniper House needs a third position. Its visual system should express **clarity before treatment** by making information easy to understand while using tactile materials, editorial typography, and natural photography to keep the experience approachable.

## Recommended territory: Warm Clinical Editorial

### Core tension

**Clinical precision × human warmth**

The system balances:

- Architectural structure with organic texture
- Deep, credible color with light, breathable surfaces
- Editorial typography with plain-language information design
- Natural skin and lived-in detail with disciplined composition
- Quiet confidence with clear conversion actions

### Visual keywords

- Considered
- Grounded
- Intelligent
- Warm
- Tactile
- Editorial
- Contemporary
- Calm
- Credible
- Unforced

### What it should not become

- A beige spa brand with botanical clichés
- A black-and-white fashion campaign
- A sterile dermatology interface
- A social-media injector aesthetic
- A wellness brand built on pseudoscientific softness
- A conspicuous-luxury space full of marble, gold, and ornament

## Alternative territories considered

### Monochrome Precision

Black, white, cool gray, sharp geometry, and high-fashion imagery.

**Why it was not selected:** It could communicate expertise and restraint, but it would amplify the audience’s fear of coldness, judgment, and aggressive aesthetic intervention.

### Soft Botanical Spa

Cream, blush, sage, rounded forms, plant imagery, and ethereal skin photography.

**Why it was not selected:** It would feel approachable but too familiar, too lifestyle-led, and less capable of carrying serious treatment, risk, and provider information.

### Warm Clinical Editorial — selected

Deep juniper, mineral neutrals, muted clay, strong typographic hierarchy, natural portraiture, and structured information.

**Why it fits:** It expresses “considered care” through both feeling and function. The warmth earns attention; the information design earns the booking.

## Color system

### Primary palette

| Token | Hex | Role |
|---|---|---|
| Juniper Ink | `#18211C` | Primary text, dark surfaces, strongest contrast |
| Juniper | `#264739` | Primary brand color, buttons, key bands, active states |
| Moss | `#6F806F` | Secondary accents, diagrams, large decorative details only |
| Porcelain | `#F8F5EF` | Default page background |
| Bone | `#EFE9DE` | Alternate section background, quiet cards |
| Mineral | `#D8D1C5` | Borders, dividers, inactive controls |
| Clay | `#A45A42` | Restrained accent, selected highlights, warm emphasis |
| Paper | `#FFFFFF` | Elevated cards and form surfaces |

### Functional colors

| Token | Hex | Role |
|---|---|---|
| Success | `#35664B` | Confirmed and completed states |
| Error | `#9B3D35` | Validation and critical errors |
| Warning surface | `#F2E4D8` | Boundary and caution callouts |
| Focus | `#2769B2` | Visible keyboard focus ring; intentionally distinct from brand color |

### Usage ratio

- 55% Porcelain and Paper
- 25% Bone and mineral neutrals
- 15% Juniper Ink and Juniper
- 5% Clay, Moss, and functional accents

The palette should feel light overall. Deep green creates authority in focused moments rather than coating every section.

### Contrast rules

- Juniper Ink on Porcelain: approximately **15.2:1**
- Juniper on Porcelain: approximately **9.5:1**
- White on Juniper: approximately **10.3:1**
- Clay on Porcelain: approximately **4.7:1**

Moss is not approved for normal-sized body copy. Use it for decorative shapes, large labels, charts with redundant differentiation, or borders. Never use color alone to indicate error, success, selection, or treatment suitability.

## Typography

### Display and editorial headings: Newsreader

Newsreader brings literary warmth and distinctive shape without feeling ornamental. Use regular and medium weights; avoid thin weights that lose clarity on smaller screens.

### Body and interface: Manrope

Manrope supplies a contemporary, highly structured counterpoint. Use it for navigation, body copy, facts, buttons, forms, tables, and captions.

Both typefaces are available through Google Fonts. For implementation, self-host variable font files where licensing and performance review permit, with robust system fallbacks.

### Type pairing behavior

- Newsreader carries point of view, calm, and editorial emphasis.
- Manrope carries facts, actions, scanning, and interface confidence.
- Do not use the serif for buttons, labels, prices, downtime, or form copy.
- Do not italicize long passages. Reserve Newsreader Italic for one short editorial phrase or quotation.
- Use sentence case throughout. Avoid all-caps headlines.

### Desktop scale

| Style | Size / line height | Typeface | Use |
|---|---|---|---|
| Display | `72 / 76` | Newsreader 400 | Homepage hero only |
| H1 | `56 / 60` | Newsreader 400 | Interior page hero |
| H2 | `42 / 48` | Newsreader 400 | Major section heading |
| H3 | `26 / 32` | Newsreader 500 | Card and subsection heading |
| Lead | `20 / 31` | Manrope 400 | Hero and key explanation |
| Body large | `18 / 29` | Manrope 400 | Editorial body sections |
| Body | `16 / 26` | Manrope 400 | Default content and forms |
| Small | `14 / 21` | Manrope 500 | Supporting facts and helper text |
| Label | `12 / 16` | Manrope 650 | Eyebrows and metadata; slight tracking |

### Mobile scale

| Style | Size / line height |
|---|---|
| Display / H1 | `44 / 47` |
| H2 | `34 / 39` |
| H3 | `24 / 29` |
| Lead | `18 / 28` |
| Body | `16 / 26` |
| Small | `14 / 21` |

Use fluid scaling between mobile and desktop for display styles, but set maximums so headings do not dominate decision-critical facts.

## Wordmark direction

### Recommended lockup

- **Juniper House** in Newsreader Medium, title case
- **Skin & Aesthetics** beneath or beside it in Manrope Medium with restrained tracking
- No symbol required at launch

This typographic lockup supports credibility and avoids forcing a generic leaf mark into the identity. If a symbol is explored later, it should be an abstract architectural–botanical form built from the same proportions as the wordmark—not a literal juniper sprig, face outline, cross, droplet, or sparkle.

### Minimum behavior

- Preserve generous clear space around the wordmark.
- Use Juniper Ink or Paper; no multicolor wordmark.
- Avoid hairline serif weights.
- Provide horizontal and compact stacked lockups.
- The text name remains visible; do not rely on a symbol alone.

## Layout and composition

### Grid

- 12-column desktop grid
- 8-column tablet grid
- 4-column mobile grid
- Content maximum: `1280px`
- Reading measure: `620–720px`
- Edge padding: `72px` desktop, `32px` tablet, `20px` mobile

### Spacing

Use a 4px base with a practical scale:

`4, 8, 12, 16, 24, 32, 48, 64, 88, 120`

- Section spacing: 88–120px desktop; 64–80px mobile
- Card gaps: 24–32px desktop; 16px mobile
- Form-field gaps: 20–24px
- Major facts stay visually close to the heading they support

### Composition rules

- Favor asymmetric editorial layouts with strong alignment.
- Use one intentional image per narrative section.
- Alternate full-bleed atmosphere with constrained information sections.
- Keep clinical and educational reading measures narrow.
- Allow large areas of negative space, but never push price or suitability below decorative imagery.
- Avoid card grids when a simple list or comparison communicates the relationship better.

## Shape, border, and depth

### Corners

- Cards and inputs: `6px`
- Large images: `0–6px`, depending on crop
- Buttons: `4px`
- Pills and tags: fully rounded only when they behave as tags or statuses

The interface should not become a collection of soft floating capsules.

### Borders

- Default: 1px Mineral
- Strong: 1px Juniper Ink at 25–35% opacity
- Selected: 2px Juniper
- Boundary callout: 1px Clay or a 4px left rule

### Shadows

Use sparingly. Default cards rely on borders and background contrast. One soft elevation may be used for menus and sticky booking summaries:

`0 12px 32px rgba(24, 33, 28, 0.10)`

## Core interface styling

### Primary button

- Juniper background, Paper text
- 48px minimum height; 52px preferred on desktop
- 16–20px horizontal padding
- Manrope 650, 15–16px
- Hover: deepen toward Juniper Ink and add a small arrow shift
- Focus: 3px Focus ring with 2px offset
- Disabled: reduced contrast only when still legible; cursor and semantics must match

### Secondary button

- Transparent or Porcelain background
- 1px Juniper border
- Juniper text
- Same dimensions and focus behavior as primary

### Text link

- Juniper text with visible underline or arrow
- Underline thickens or offset changes on hover
- Never rely on color alone inside body copy

### Cards

- Paper or Bone surface
- 1px Mineral border
- Little or no shadow
- Clear title, one explanation, and facts aligned consistently
- Entire card may be clickable only when semantics and focus behavior remain clear

### Quick-facts panel

- Structured 2×2 or 5-column layout on large screens
- Stacked definition list on mobile
- Labels in Manrope; values in Juniper Ink
- Price, duration, downtime, course, and provider remain visible

### Boundary callout

- Warning surface with Clay rule
- No alarm icon unless action is genuinely urgent
- Short heading, plain-language explanation, and specific next step

### Form controls

- Paper fill, Mineral border, Juniper Ink text
- Minimum 48px control height
- Labels always visible above fields
- Helper and error text remain adjacent
- Selected states use border, checkmark, and text—not color alone

## Photography direction

### People

- Adults roughly 28–55 across genders and skin tones
- Natural expression, visible skin texture, and recognizable age detail
- Quiet confidence rather than aspirational perfection
- Everyday refined clothing, not spa robes
- Subjects can look away from camera; avoid repeated stock-photo smiles
- Use hands, consultation gestures, and attentive listening to show care

### Environment

- Warm plaster, pale oak, honed stone, frosted glass, linen, and brushed metal
- Soft directional daylight
- Deep juniper used as an architectural accent
- A small number of natural forms, not plant-filled wellness staging
- Clean and calm without looking unused

### Treatment imagery

- Prefer preparation, consultation, equipment context, and provider attention
- Use procedure close-ups only when they genuinely explain a treatment
- No needles or injection close-ups in broad marketing moments
- No exaggerated “problem area” crops
- No before-and-after split treatments without verified, consented proof and context

### Image treatment

- Warm-neutral white balance
- Moderate contrast with protected highlights
- Subtle film grain
- No skin smoothing or plastic finish
- Avoid preset-heavy orange skin and desaturated green shadows
- Use 3:2, 4:5, and 16:10 crops consistently

### Generated reference assets

- `outputs/assets/juniper-house-hero-reference.png` — portrait and hero composition reference
- `outputs/assets/juniper-house-interior-reference.png` — materials, light, and environment reference

These images were created with the built-in image-generation workflow for this fictional project. They are illustrative model/environment imagery, not patient proof. The final website must label the portrait as a model image.

## Illustration and iconography

- Use simple 1.5px line icons only where they speed recognition.
- Rounded line ends can soften the clinical structure without becoming playful.
- Use one icon family; do not mix filled and outline sets.
- Avoid sparkles, faces, syringes, lotus flowers, medical crosses, and generic leaves as decorative shorthand.
- Diagrams should use type, rules, numbered steps, and restrained color before icons.

## Motion direction

Motion should support comprehension, not make the site feel theatrical.

- Micro-interactions: 160–220ms
- Menus, drawers, and accordions: 220–300ms
- Image and section entrances: up to 500ms, subtle opacity and position only
- No parallax, floating product animation, cursor effects, or looping background video
- Respect `prefers-reduced-motion` by removing non-essential movement
- Booking progress should update immediately and preserve focus

Detailed interaction decisions remain Stage 14 work.

## Responsive behavior

- On mobile, H1 and orientation copy appear before the hero image.
- Quick facts move above the primary CTA when a treatment-aware visitor needs them to decide.
- Two-column editorial layouts become one column without alternating order unpredictably.
- Large images use shallower crops to reduce scroll cost.
- Sticky booking action appears only after the initial page context and never covers content.
- Comparison tables become stacked comparison rows rather than tiny columns.
- Touch targets remain at least 44×44px; 48px is the default.

## Accessibility guardrails

- Target WCAG 2.2 Level AA during implementation.
- Preserve visible focus on every interactive element.
- Do not place essential copy over complex photography unless an opaque surface protects contrast.
- Keep body text at 16px or larger.
- Do not communicate treatment suitability, error, or status with color alone.
- Use meaningful alt text for context images; use empty alt text for purely decorative imagery.
- Label generated portraits as models in nearby visible copy, not only alt text.
- Test serif headings for legibility at 200% zoom and on narrow screens.

## Visual QA questions

- Does the page feel credible before it feels luxurious?
- Can the visitor find price, provider, downtime, and the next action without reading every paragraph?
- Does the system remain warm without using spa clichés?
- Do photographs show real texture and human agency?
- Is deep green used as structure rather than decoration everywhere?
- Are cards, pills, shadows, and rounded corners kept under control?
- Does the mobile page preserve information priority?
- Is fictional imagery clearly separated from clinical proof?

## Decisions proposed for lock

- **Territory:** Warm Clinical Editorial
- **Core tension:** Clinical precision × human warmth
- **Primary palette:** Juniper Ink, Juniper, Porcelain, Bone, Mineral, Clay
- **Display type:** Newsreader
- **Body/UI type:** Manrope
- **Wordmark:** Typography-led, title case, no required symbol at launch
- **Layout:** Editorial asymmetry within a disciplined responsive grid
- **Surface style:** Mineral backgrounds, fine borders, low shadow, restrained corners
- **Photography:** Natural skin texture, quiet confidence, consultation and environment over procedure theatre
- **Iconography:** One restrained line family; no decorative spa or injector clichés
- **Motion:** Subtle, functional, and reduced-motion aware
- **Accessibility:** WCAG 2.2 AA target; information never dependent on color or imagery
- **Reference assets:** Original generated portrait and interior used as art-direction references, not proof
