# Homepage approved production sections

Status: **PARTIALLY LOCKED / APPROVED FOR PRODUCTION**

The homepage is being approved progressively, section by section. Approved sections are immutable unless the site owner explicitly reopens that specific section. Unapproved homepage sections remain available for development review.

## Approved production section 1

### Security testing and engineering for high-consequence systems.

Status: **APPROVED / LOCKED**

The approved hero includes:

- `Security testing and engineering for high-consequence systems.`
- `Fewer surprises. Stronger systems. Evidence you can trust.`
- the `From uncertainty to verified outcome` journey graphic;
- the current five-stage journey from Question through Close;
- the current responsive rendering supplied by `bbs-homepage-journey-v25.css`.

This section must not be rewritten, reordered, restyled, or visually altered without explicit site-owner approval to reopen the hero.

## Approved production section 2

### Institutional excellence. Smaller practice. Stronger control.

Status: **APPROVED / LOCKED**

Approved development rendering: GitHub Pages development deployment `#89`.

Approved source baseline: `414ec875b3e151bfeee0d803ece42b018565c4d5`.

The approved institutional section includes the complete current message and visual hierarchy:

1. `Institutional excellence. Smaller practice. Stronger control.`
2. `Founder-led. Policy-driven. Process enforced.`
3. `Uniform delivery. Consistent standards. Reviewable outcomes.`
4. `FOUNDER`, centered on the full institutional band.
5. `Sets the standard. Defines the policy. Leads by example.`
6. `POLICY & STANDARDS`, centered on the full institutional band.
7. `Methodology · Tools · Quality · Ethics · Security`.
8. Operations, Assessors, Quality Assurance, Security, and Knowledge as the five governed operating functions.
9. `UNIFORM DELIVERY OF EXCELLENCE` resolving through a single clean arrow to `CLIENT OUTCOMES`.
10. `Consistent results. Stronger security.`

The approved Founder and Policy text blocks are centered against the full width of their bands. Their icons remain independent left-side anchors and do not affect text centering.

The approved delivery connector is a single arrow only. Decorative parallel lines or multi-line connector treatments are not approved.

### Approved institutional visual assets

- `docs/assets/css/bbs-homepage-institution-v26.css`
- `docs/assets/css/bbs-homepage-institution-v27.css`
- `docs/assets/css/bbs-homepage-engagement-v30.css`, which contains the final institutional tier-centering correction
- `docs/assets/css/bbs-homepage-institution-arrow-v31.css`, which enforces the approved single-arrow connector

## Approved production section 3

### Focused services. Measurable impact.

Status: **APPROVED / LOCKED**

Approved development rendering: GitHub Pages development deployment `#91`.

The approved service map uses four restrained technical diagrams rather than explanatory text blocks. The visible service names and `Explore →` links are centered. The four approved service visuals are Application & API Security, Adversary Validation, AI Security, and Secure Systems Engineering.

### Approved service visual assets

- `docs/assets/css/bbs-homepage-services-v32.css`
- `docs/assets/img/service-application-api-v32.svg`
- `docs/assets/img/service-adversary-validation-v32.svg`
- `docs/assets/img/service-ai-security-v32.svg`
- `docs/assets/img/service-secure-systems-v32.svg`

## Approved production section 4

### Every engagement. Same rigor.

Status: **APPROVED / LOCKED**

Approved source baseline: `4ce351fa79aa4d580cc5632098bcc312f446c69d`.

The approved engagement-lifecycle treatment keeps the six stages Authorize, Test, Evidence, Report, Remediate, and Retest, but removes the descriptive stage copy from the visible composition. The graphic is primarily communicated through purpose-built line icons, numbered stages, a connected control path, and the closing assurance `CONSISTENT METHOD • REVIEWABLE PROOF • VERIFIED OUTCOME`.

### Approved lifecycle visual assets

- `docs/assets/css/bbs-homepage-rigor-v33.css`
- `docs/assets/img/lifecycle-authorize-v33.svg`
- `docs/assets/img/lifecycle-test-v33.svg`
- `docs/assets/img/lifecycle-evidence-v33.svg`
- `docs/assets/img/lifecycle-report-v33.svg`
- `docs/assets/img/lifecycle-remediate-v33.svg`
- `docs/assets/img/lifecycle-retest-v33.svg`

## Current section under review

### Your data. Our responsibility.

The current development treatment is approved in direction but remains open for rendered review before it is added to the production lock. The client-facing copy is `Minimum exposure. Controlled handling. Reviewable delivery.` and the visual presents Authorize, Collect, Preserve, Sanitize, and Deliver as a controlled handling path.

## Enforcement

`.github/workflows/homepage-lock.yml` is a progressive section lock rather than a whole-page file lock.

It verifies:

- the exact approved hero markup by SHA-256;
- the exact approved institutional-section markup by SHA-256;
- the exact approved Focused services markup by SHA-256;
- the exact approved Every engagement markup by SHA-256;
- the Git blob identities of the dedicated approved visual assets;
- that the required approved stylesheets remain loaded by the homepage layout.

This lets development continue on unapproved homepage sections without permitting drift in sections already approved for production.

## Operating rule

Do not change any approved section during further development work. If a future request would alter one of these sections, stop and require explicit site-owner approval to reopen that specific section before making the change.

Production remains unchanged until the remaining development review is complete and the approved development version is intentionally promoted.
