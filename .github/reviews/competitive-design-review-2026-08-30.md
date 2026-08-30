# Competitive Design Review, 2026-08-30

## Scope

Independent review of the development website across visual design, UX and readability, frontend and responsive behavior, accessibility, and competitive positioning.

## Review conclusion

The established Black Bag Security visual direction is distinctive and credible, but the prior implementation over-optimized for dense technical-dashboard aesthetics. Several engineering diagrams were being reused at display sizes too small for their internal typography, meaningful interface copy was frequently below a comfortable public-site reading size, and two raster assets in the deployed artifact failed independent decoding.

## Findings corrected in this pass

### 1. Architecture diagrams exceeded their display boundaries

Observed on Security Engagement Platform, AOTP, OSMAP, OpenBSD Mailstack, and Browser AI Security visuals. Detailed diagrams contained too much copy for homepage card scale, causing crowded labels, boundary collisions, and poor scanability.

**Correction:** created purpose-built 1000 by 500 public-site diagrams with large typography, 32 to 72 pixel safe areas, three conceptual stages, and simplified supporting text. The same readable diagrams are used on project pages, while deeper technical detail remains in project documentation and page copy.

### 2. Broken raster assets

The deployed OpenBSD Mailstack WebP and approved principal portrait PNG failed independent image decoding in artifact QA.

**Correction:** rendered site now uses the valid SVG Mailstack visual treatment and SVG principal silhouette fallback, eliminating dependence on corrupted raster rendering.

### 3. Meaningful text was presented as microprint

Legacy CSS used roughly 9 to 12 pixel text for technical labels, process descriptions, metadata, and methodology controls.

**Correction:** the v14 readability layer remains authoritative, with v15 preserving normal-zoom readability and larger internal spacing.

### 4. Services and Methodology were over-dense

Five-across technical and process grids created excessive cognitive density and reduced readable column width.

**Correction:** desktop layouts now use a maximum of three columns for dense process/tooling content and two columns for specialist content, collapsing progressively for smaller screens.

### 5. Arsenal project heroes mixed architecture and summary content too tightly

Two-column hero layouts constrained both diagrams and summary text.

**Correction:** project architecture is now full-width. Summary information follows as a three-column strip on wide screens and one column on smaller screens.

### 6. Homepage card hierarchy needed stronger containment

Technology chips, diagrams, links, and headings were visually crowded.

**Correction:** increased card padding, diagram safe area, chip spacing, and separation before card links.

## Acceptance criteria

- No meaningful public-site text should require browser zoom for comfortable reading.
- Engineering diagrams must remain legible at their actual rendered size, not merely at source-image size.
- Text must remain inside intended diagram and card boundaries.
- No broken or undecodable image may be required for visible page content.
- Dense technical grids may use no more than three columns at ordinary desktop widths.
- Core engineering visuals must be visible without lazy-load layout collapse.
- Development deployment must retain noindex, nofollow, noarchive and crawler blocking.
- Production remains unchanged until the development site is explicitly approved.
