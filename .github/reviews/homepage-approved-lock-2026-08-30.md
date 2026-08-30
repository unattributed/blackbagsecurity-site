# Homepage approved lock baseline

Status: **LOCKED / APPROVED**

Approved by the site owner on 2026-08-30 after review of the development deployment at `https://dev.blackbagsecurity.com/`.

## Approved design source

- Approval commit: `636f647437bf784ecb9abcc21523324d1c1a96d4`
- Development deployment: GitHub Pages run `65`
- Homepage purpose: executive-facing confidence, differentiation, evidence discipline, and direct accountability
- Arsenal remains the location for project, technology, architecture, and engineering depth

## Locked homepage-specific files

The homepage lock workflow verifies the Git blob identity of these files:

- `docs/index.html`
- `docs/assets/css/homepage-v2.css`
- `docs/assets/css/homepage-v2-polish.css`
- `docs/assets/css/homepage-v2-depth.css`
- `docs/assets/css/homepage-v2-silhouette.css`
- `docs/assets/css/homepage-v2-refine.css`
- `docs/assets/css/bbs-winning-v10.css`
- `docs/assets/css/bbs-homepage-refinement-v12.css`
- `docs/assets/css/bbs-homepage-proof-v16.css`

These files must not change unless the site owner explicitly reopens homepage design review and approves a new baseline.

## Shared styles

Shared global styles are intentionally not hash-locked because they are still required for refinement of Services, Methodology, Arsenal, About, Trust, Contact, and supporting pages. Any shared-style change must preserve the approved homepage visually and should be checked against `dev.blackbagsecurity.com` before promotion.

## Unlock procedure

1. Obtain explicit site-owner approval to reopen the homepage.
2. Make the homepage change on a purpose-specific branch.
3. Review the rendered development site at normal browser zoom.
4. Obtain explicit approval of the revised homepage.
5. Update the expected blob hashes in `.github/workflows/homepage-lock.yml` and this approval record in the same reviewed change.

No implicit homepage redesign or copy drift is authorized.
