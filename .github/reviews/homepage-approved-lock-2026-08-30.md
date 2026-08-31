# Homepage approved lock baseline

Status: **LOCKED / APPROVED**

Originally approved by the site owner on 2026-08-30 after review of the development deployment at `https://dev.blackbagsecurity.com/`.

The site owner explicitly reopened one homepage section on 2026-08-31 to replace the text-heavy `A smaller practice can be a stronger control.` block with the approved institutional delivery graphic. The approved direction establishes that the principal sets the standard and tone, while Black Bag Security applies that standard through policy, process, quality assurance, security, shared knowledge, and a repeatable delivery model.

## Approved design source

- Original approval commit: `636f647437bf784ecb9abcc21523324d1c1a96d4`
- Original development deployment: GitHub Pages run `65`
- Approved practice-control implementation commit: `73da8a0a6c6d1f0e40ab6125ba1d3bc7a8bd83a2`
- Approved practice-control development deployment: GitHub Pages run `74`
- Homepage purpose: executive-facing confidence, differentiation, evidence discipline, institutional delivery discipline, and direct accountability
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
- `docs/assets/css/bbs-homepage-practice-v21.css`
- `docs/assets/js/app.js`

These files must not change unless the site owner explicitly reopens homepage design review and approves a new baseline.

## Approved 2026-08-31 practice-control change

The prior four-card `Why Black Bag` presentation remains the no-JavaScript fallback in `docs/index.html`. Normal page execution replaces that block with an accessible, responsive institutional-control graphic using the locked homepage script and `bbs-homepage-practice-v21.css`.

The visual model communicates:

1. The principal sets the standard, defines policy, and leads by example.
2. Policy and standards govern methodology, tools, quality, ethics, and security.
3. Operations, assessors, quality assurance, security, and knowledge apply those controls across the practice.
4. Delivery follows a repeatable lifecycle from scope through improvement.
5. Client outcomes are the product of institutional discipline rather than dependence on one individual's execution path.

## Shared styles

Shared global styles are intentionally not hash-locked because they are still required for refinement of Services, Methodology, Arsenal, About, Trust, Contact, and supporting pages. Any shared-style change must preserve the approved homepage visually and should be checked against `dev.blackbagsecurity.com` before promotion.

## Unlock procedure

1. Obtain explicit site-owner approval to reopen the homepage.
2. Make the homepage change on a purpose-specific branch.
3. Review the rendered development site at normal browser zoom.
4. Obtain explicit approval of the revised homepage.
5. Update the expected blob hashes in `.github/workflows/homepage-lock.yml` and this approval record in the same reviewed change.

No implicit homepage redesign or copy drift is authorized.
