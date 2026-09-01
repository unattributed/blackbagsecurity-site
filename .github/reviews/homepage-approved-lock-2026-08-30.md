# Homepage approved lock baseline

Status: **LOCKED / APPROVED**

The site owner explicitly approved the infographic-led homepage and instructed that the main page must not change unless a specific section is explicitly reopened. On 2026-09-01, the site owner reopened only the institutional-delivery graphic, approved the stronger visual direction, changed the governing role from `PRINCIPAL` to `FOUNDER`, and instructed that the approved concept be implemented on dev.

## Current approved design source

- Approved homepage site source after institutional-delivery refinement: `e67a78971964ec0a8ac04bb3fb2f0cac6fcc6612`
- Approved development deployment containing the refinement: GitHub Pages run `83`
- Development URL: `https://dev.blackbagsecurity.com/`
- Homepage purpose: client acquisition, executive confidence, clear service positioning, institutional delivery discipline, evidence-backed security work, engineering depth, and a direct path to engagement

The approved homepage uses the infographic-led visual model established during the 2026-08-31 redesign. Each major section combines concise client-facing copy with a specific explanatory visual.

## Approved journey rendering correction

The homepage hero `From uncertainty to verified outcome` graphic uses the locked `bbs-homepage-journey-v25.css` treatment. It keeps the five stages balanced, makes the luminous path span the full progression, protects text clearance, and uses a separate stacked mobile treatment.

## Approved founder-led institutional-delivery refinement

The institutional-delivery section is now governed by the following visual and message hierarchy:

1. `FOUNDER` sets the standard, defines policy, and leads by example.
2. `POLICY & STANDARDS` governs methodology, tools, quality, ethics, and security.
3. Policy distributes through Operations, Assessors, Quality Assurance, Security, and Knowledge.
4. Those functions produce `UNIFORM DELIVERY OF EXCELLENCE`.
5. Delivery resolves into `CLIENT OUTCOMES`, consistent results and stronger security.

The accompanying copy is `Founder-led. Policy-driven. Process enforced.`

The approved implementation uses semantic HTML and purpose-built inline SVG iconography rather than a raster screenshot. The homepage-only `bbs-homepage-institution-v26.css` layer provides the stronger hierarchy, explicit control distribution, richer function cards, and differentiated client-outcome endpoint. The actual Pages artifact from run `83` was rendered at desktop size and visually inspected before relocking.

No other homepage section, service positioning, section order, or copy was reopened by this change.

## Locked homepage composition

The approved homepage contains these major visual stories and they are not to be redesigned, rewritten, reordered, or restyled without explicit site-owner approval:

1. Security testing and engineering for high-consequence systems, with the uncertainty-to-verified-outcome journey.
2. Institutional excellence, smaller practice, stronger control, with the founder-led Black Bag institutional delivery model.
3. Focused services, measurable impact, with the four-service visual map.
4. Every engagement, same rigor, with the engagement lifecycle graphic.
5. Your data, our responsibility, with the controlled evidence-handling chain.
6. Real systems, real results, using Black Bag's actual engineering work as proof of capability.
7. End with clarity, build with confidence, with the client engagement-intake flow.

## Repository enforcement

The homepage lock workflow verifies the Git blob identity of the files that directly define the approved homepage and its current visual system:

- `docs/index.html`
- `docs/_layouts/home-v2.html`
- `docs/assets/css/homepage-v2.css`
- `docs/assets/css/homepage-v2-polish.css`
- `docs/assets/css/homepage-v2-depth.css`
- `docs/assets/css/homepage-v2-silhouette.css`
- `docs/assets/css/homepage-v2-refine.css`
- `docs/assets/css/bbs-winning-v10.css`
- `docs/assets/css/bbs-homepage-refinement-v12.css`
- `docs/assets/css/bbs-homepage-proof-v16.css`
- `docs/assets/css/bbs-homepage-practice-v21.css`
- `docs/assets/css/bbs-client-acquisition-v22.css`
- `docs/assets/css/bbs-visual-story-v23.css`
- `docs/assets/css/bbs-infographic-site-v24.css`
- `docs/assets/css/bbs-homepage-journey-v25.css`
- `docs/assets/css/bbs-homepage-institution-v26.css`
- `docs/assets/js/app.js`

The lock workflow runs on the active `feature/client-acquisition-visual-redesign` branch as well as the existing protected design branches and `main`.

## Operating rule for future site work

The homepage is immutable unless the site owner explicitly reopens a specific homepage section. Future Services, Methodology, Trust, About, Contact, Industries, On-site, Policies, service-detail, or Arsenal work must be implemented without changing the locked homepage baseline. Page-specific or non-home styling should be used instead of modifying locked shared layers.

## Unlock procedure

1. Obtain explicit site-owner approval to reopen a specific homepage section.
2. Make only the approved homepage change.
3. Render and review the change at normal browser zoom on the development site.
4. Obtain explicit approval of the revised section.
5. Update the expected blob hashes in `.github/workflows/homepage-lock.yml` and this approval record.
6. Confirm the homepage lock workflow passes before treating the new version as approved.

No implicit homepage redesign, copy drift, visual restyling, section reordering, or shared-style change that alters the homepage is authorized.
