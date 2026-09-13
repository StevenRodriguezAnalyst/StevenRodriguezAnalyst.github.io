# Desktop experience audit

Scope: the single portfolio route, all six linked sections, header, footer, project figures/disclosures, résumé links, contact actions, themes, and mobile navigation. There are no tables, forms, dialogs, backend loading/error states, or account controls in this site.

## Findings and changes

- Percentage gutters continued growing after the page reached its maximum width, shrinking usable content on ultrawide displays. Shared content-width and bounded gutter tokens now keep 1,240px of usable space at wide sizes; the header aligns with this same grid.
- The 100px desktop header and tall hero delayed the introduction and actions. The header is now 80px, with a bounded 260px portrait and tighter hero spacing. At 1440px, hero height drops from about 817px to 679px.
- Independent percentage project gaps and centered figures made expanded case studies feel disconnected. Shared column gaps and top alignment keep each figure paired with its title and detailed text.
- Four skill columns were cramped near 1024px. The two-column layout now lasts through 1100px. Reading widths are bounded for project and contact copy; résumé and contact actions resist compression.
- Desktop header CSS order differed from keyboard order, and navigation had no location indicator. DOM order now follows desktop presentation; scroll-aware aria-current and underlines identify the visible section. Existing focus rings, reduced-motion support, Escape/outside-dismiss behavior, and brand remain intact.

## Verification

Browser checks cover 320, 375, 390, 430, 768, 1024, 1280, 1366, 1440, 1536, 1920, and 2560px. The retained tests/mobile-qa.html fixture checks overflow, target size, themes, 200% text, long titles, disclosure expansion/collapse, loaded images, menu dismissal, short mobile viewports, and anchor navigation. Desktop screenshots were captured and reviewed across the requested widths. No forms or modals were invented for testing.

TypeScript and the Vite production build pass. The repository has no lint configuration or lint script; no lint pass is claimed. No dependency was added. The production JavaScript bundle is approximately 75KB gzip.

## Future work

A dedicated lint configuration and automated browser test runner in CI would make these checks easier to repeat. Google Fonts remain externally hosted with existing fallbacks and display=swap; self-hosting is an optional future optimization. Content, professional claims, and the existing GitHub coming-soon state were preserved.
