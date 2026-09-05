# Method approved production lock

Date: 2026-09-01
Page: `/methodology/`
Status: APPROVED AND LOCKED

## Approved baseline

The Method page is approved for production design integration at source commit:

`64d937df5989b450384e9cb22fcf023bd7fb9ffd`

The development preview for this baseline passed build, artifact hardening, artifact validation, and deployment in `blackbagsecurity-dev` workflow run 102.

## Approval scope

The approval covers the Method page as rendered at the baseline above, including:

- complete `docs/methodology.md` content, section order, copy, CTAs, and markup;
- the v41 Method visual system;
- the v42 Client Visibility adjustment that removes the horizontal connector line while preserving the stage icons, numbering, labels, panel, and bottom status rail;
- the Method stylesheet loader in `methodology-section-labels-v20.css`;
- all image assets referenced by the approved Method visuals;
- the combined Method and client-protection/trust narrative at `/methodology/`.

## Lock policy

The Method page must not drift during development of Proof, About, Contact, or other site work.

Any intentional change to the locked Method page requires the Method review to be explicitly reopened first. After review, a new approved baseline and corresponding lock hashes must replace this record.

Production `main` is not modified by recording this approval. Promotion remains an explicit reviewed version-control action.
