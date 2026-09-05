# Services page production approval

Status: **APPROVED / IMMUTABLE PRODUCTION BASELINE**

The Black Bag Security Services overview page is approved for production at source baseline:

`547373034c6366195b82a7fef6c62e62a8704551`

Approved development deployment:

`#98`

## Scope of approval

The approval covers the English Services overview page in its entirety, including:

- page copy and service positioning;
- decision-led hero and decision map;
- Black Bag Security proof flow;
- four primary service presentations;
- engagement-shape section;
- closing `System / Decision / Consequence` intake graphic;
- centered `Recommended engagement` output matrix;
- calls to action, spacing, alignment, and responsive behavior;
- dedicated Services CSS layers and service-family visual assets used by the page.

## Immutable baseline

The approved page must not be rewritten, reordered, restyled, or visually altered during subsequent site development unless the site owner explicitly reopens Services review.

`.github/workflows/services-lock.yml` enforces the approved baseline by validating the Services markup, dedicated styling layers, service visual assets, and required stylesheet loaders.

## Production boundary

This approval means the Services page is cleared for the eventual production redesign release. It does **not** by itself publish the redesign to production `main`.

Production promotion remains an explicit reviewed VCS action after the remaining redesign pages are approved.
