# Homepage production approval

Status: **APPROVED / IMMUTABLE PRODUCTION BASELINE**

The complete homepage is approved for production at source baseline:

`c5c3bcf7661dcddb3a99b6bab6d64f342d29daae`

Approved development deployment:

`#94`

## Scope of approval

The approval covers the homepage in its entirety, including:

- page copy and wording;
- section order and hierarchy;
- all homepage calls to action;
- the security journey graphic;
- the institutional delivery model;
- the focused-services visual;
- the engagement-rigor visual;
- the client-data handling visual;
- the engineering-proof visual;
- spacing, alignment, responsive behavior, and homepage-specific visual treatments.

The homepage must not be rewritten, reordered, restyled, or visually altered during subsequent site development.

## Enforcement

`.github/workflows/homepage-lock.yml` enforces the immutable baseline by verifying:

- the complete `docs/index.html` Git blob;
- every dedicated homepage CSS layer from v25 through v35;
- the dedicated service, lifecycle, data-handling, and engineering-proof SVG assets;
- that all required homepage-specific stylesheets remain loaded by the shared layout.

If future work requires a homepage change, the site owner must explicitly reopen homepage review before the baseline is modified.

## Production promotion

Production remains unchanged until the remaining site review is complete. When production is promoted, the homepage must match this approved baseline.
