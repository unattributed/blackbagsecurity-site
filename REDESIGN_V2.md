# Black Bag Security Website Redesign v2

## Status

Approved design and information architecture for the next Black Bag Security website.

Production remains on `main` until the redesign is reviewed and explicitly promoted.

## Branch model

- `main`: production source for `www.blackbagsecurity.com`
- `redesign/v2`: integration branch for the approved redesign
- `feature/homepage`: implementation branch for the approved homepage
- future page work should use focused feature branches created from `redesign/v2`

## Development deployment target

The intended preview deployment is:

- repository: `unattributed/blackbagsecurity-dev`
- hostname: `dev.blackbagsecurity.com`
- DNS: `dev.blackbagsecurity.com CNAME unattributed.github.io`
- publishing model: GitHub Pages using GitHub Actions

The preview site must not contain client data, engagement evidence, credentials, secrets, tokens, or other confidential information.

During development the preview site should advertise `noindex, nofollow` to search engines.

## Approved primary navigation

1. Services
2. Methodology
3. Research
4. About
5. Contact

Supporting pages remain available outside the primary navigation:

- Trust
- Industries

## Approved page structure

- `/`
- `/services/`
- `/services/application-api-security/`
- `/services/adversary-validation/`
- `/services/ai-security/`
- `/services/secure-systems-engineering/`
- `/methodology/`
- `/research/`
- `/research/aotp/`
- `/research/osmap/`
- `/research/openbsd-mailstack/`
- `/research/browser-safe-ai-security/`
- `/about/`
- `/contact/`
- `/trust/`
- `/industries/`

## Homepage implementation order

1. Foundation: grid, typography, palette, header, navigation
2. Hero: approved principal-led message, calls to action, schematic
3. Capability sections: Why Clients Hire Us, What We Do
4. Proof of work: Selected Engineering & Research, timeline
5. Principal and trust: principal panel, commitments, responsive behavior

## Engineering constraints

Retain the existing lightweight Jekyll architecture unless a requirement proves it insufficient.

Prefer:

- semantic HTML
- modern CSS
- local fonts and media
- SVG for diagrams and icons
- minimal JavaScript
- no analytics by default
- no third-party CDN dependencies
- no framework dependency unless specifically justified

Preserve the existing security-conscious deployment characteristics, including `security.txt` and compatibility with a restrictive Content Security Policy.

## Promotion workflow

`feature/*` -> pull request -> `redesign/v2` -> development review -> final pull request -> `main` -> production.

Do not force-push `main`. Production promotion should be explicit and reviewable.
