# Black Bag Security Website Redesign v2

## Status

Current implementation of the reimagined Black Bag Security website.

Production remains on `main` until the redesign is reviewed and explicitly promoted.

## Language

The reimagined website is English-only.

Legacy localized pages are not part of the redesigned information architecture and are excluded from the v2 Jekyll build and sitemap. The v2 layout emits `lang="en"` and does not publish alternate-language metadata.

## Branch model

- `main`: production source for `www.blackbagsecurity.com`
- `redesign/v2`: redesign integration branch
- focused `feature/*` branches: implementation and review work

## Development deployment target

- repository: `unattributed/blackbagsecurity-dev`
- hostname: `dev.blackbagsecurity.com`
- publishing model: GitHub Pages using GitHub Actions

The preview site must not contain client data, engagement evidence, credentials, secrets, tokens, or other confidential information.

The development preview advertises `noindex, nofollow, noarchive` and blocks crawling through `robots.txt`.

## Primary navigation

1. Services
2. Methodology
3. Arsenal
4. About
5. Contact

Supporting pages remain available from the footer and relevant contextual links:

- Trust
- Industries
- On-Site Engagements
- Policies
- Security

## Current page structure

- `/`
- `/services/`
- `/services/application-api-security/`
- `/services/adversary-validation/`
- `/services/ai-security/`
- `/services/secure-systems-engineering/`
- `/methodology/`
- `/arsenal/`
- `/arsenal/security-engagement-platform/`
- `/arsenal/aotp/`
- `/arsenal/osmap/`
- `/arsenal/openbsd-mailstack/`
- `/arsenal/browser-safe-ai-security/`
- `/about/`
- `/contact/`
- `/trust/`
- `/industries/`
- `/on-site-engagements/`
- `/policies/`
- `/security.txt`

## Design direction

The site uses the original Black Bag Security colour identity with a redesigned technical visual system:

- deep navy-black surfaces
- pale blue-white primary text
- lime for primary action and status
- cyan for engineering, evidence, focus, and interaction
- strong light/dark depth hierarchy without decorative excess
- controlled motion that communicates hierarchy and interactivity
- responsive viewport-driven layouts rather than device sniffing

## Engineering constraints

Retain the lightweight Jekyll architecture unless a requirement proves it insufficient.

Prefer:

- semantic HTML
- modern CSS
- local fonts and media
- SVG for diagrams and icons
- minimal JavaScript
- no analytics by default
- no third-party CDN dependencies
- no framework dependency unless specifically justified
- a restrictive Content Security Policy
- secure and reproducible GitHub Pages deployment

## Promotion workflow

`feature/*` -> review -> `redesign/v2` -> development review -> explicit promotion -> `main` -> production.

Do not force-push `main`. Production promotion must remain explicit and reviewable.
