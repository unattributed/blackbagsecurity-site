# Homepage approved lock baseline

Status: **LOCKED / APPROVED**

The site owner explicitly approved the infographic-led homepage on 2026-08-31 and instructed that the main page must not change. Later on 2026-08-31, the site owner explicitly reopened only the homepage uncertainty-to-verified-outcome hero graphic to correct a rendering defect, then instructed that the defect be fixed and reported back.

## Current approved design source

- Approved homepage source commit after final journey rendering correction: `75d89858be7c950a72934768ed9596f2e9f21bab`
- Approved development deployment containing the final correction: GitHub Pages run `82`
- Development URL: `https://dev.blackbagsecurity.com/`
- Homepage purpose: client acquisition, executive confidence, clear service positioning, institutional delivery discipline, evidence-backed security work, engineering depth, and a direct path to engagement

The approved homepage uses the infographic-led visual model established during the 2026-08-31 redesign. Each major section combines concise client-facing copy with a specific explanatory visual. The institutional delivery graphic remains the reference standard for visual density, hierarchy, and meaning.

## Approved 2026-08-31 journey rendering correction

The homepage content and section order did not change. The correction is presentation-only and applies solely to the hero `From uncertainty to verified outcome` infographic.

The correction:

1. Removes excessive unused vertical space from the infographic canvas.
2. Increases stage-label, node, icon, and explanatory-text scale for normal browser zoom.
3. Rebalances the five stages so they occupy the available canvas with equal visual weight.
4. Moves the luminous journey path below the explanatory text so it no longer collides with the final verified state.
5. Makes the luminous path span the full five-stage progression instead of being aspect-ratio constrained to the center of the SVG canvas.
6. Gives the final verified-outcome node stronger visual emphasis without changing its meaning.
7. Preserves a separate stacked mobile treatment and removes the decorative path where it would reduce readability.
8. Uses a homepage-only `bbs-homepage-journey-v25.css` layer so the correction cannot alter other site pages.

The final development artifact was rendered at a 1600 x 1000 desktop viewport and a 390 x 844 mobile viewport. Desktop verification confirmed the five stages remain horizontally balanced, the journey line spans the visual progression without covering the final-state copy, and the panel no longer contains the large unused lower area. Mobile verification confirmed the stages stack cleanly and the decorative line is suppressed.

No homepage copy, service positioning, section order, or other homepage visual story was reopened by this correction.

## Locked homepage composition

The approved homepage contains these major visual stories and they are not to be redesigned, rewritten, reordered, or restyled without explicit site-owner approval:

1. Security testing and engineering for high-consequence systems, with the uncertainty-to-verified-outcome journey.
2. Institutional excellence, smaller practice, stronger control, with the Black Bag institutional delivery model.
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
- `docs/assets/js/app.js`

The lock workflow runs on the active `feature/client-acquisition-visual-redesign` branch as well as the existing protected design branches and `main`.

## Operating rule for future site work

The homepage is immutable unless the site owner explicitly reopens homepage review. Future Services, Methodology, Trust, About, Contact, Industries, On-site, Policies, service-detail, or Arsenal work must be implemented without changing the locked homepage baseline. Page-specific or non-home styling should be used instead of modifying locked shared layers.

## Unlock procedure

1. Obtain explicit site-owner approval to reopen homepage review.
2. Make the proposed homepage change on a purpose-specific branch.
3. Render and review the change at normal browser zoom on the development site.
4. Obtain explicit approval of the revised homepage.
5. Update the expected blob hashes in `.github/workflows/homepage-lock.yml` and this approval record in the same reviewed change.
6. Confirm the homepage lock workflow passes before treating the new version as approved.

No implicit homepage redesign, copy drift, visual restyling, section reordering, or shared-style change that alters the homepage is authorized.
