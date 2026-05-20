# purecss.com — Outstanding Items

## Must-do before launch

- [ ] **Prism theme CSS** — syntax blocks render highlighted HTML but have no color theme applied. Add a Prism theme CSS file to `src/css/` and link it in `src/_includes/base.njk`. Pick one from https://prismjs.com (Okaidia, Tomorrow Night, etc.) or write a custom one.
- [ ] **Favicon** — old files were deleted when the repo was cleared. Drop new `favicon.ico` and `favicon.png` into `src/`.

## Known bugs / polish

- [ ] **Tab Navigation card preview** — the `.tab-navigation` CSS uses element IDs in its selectors (`#demo-tab-navigation-t1`, etc.) because that pattern requires IDs. The homepage card preview uses different markup so the active-tab styles won't apply there. Options: write a simplified preview-specific version, or accept the tabs show unstyled in the card.

## Future / nice-to-have

- [ ] **Homepage card mini-previews (Option A vs B)** — currently using Option A (scale the full demo with `transform:scale(0.65)`). Some demos may not look great at that size. Option B would be writing dedicated thumbnail-sized versions per example. Revisit after seeing all cards rendered.
- [ ] **Syntax theme customization** — consider a custom Prism theme that matches the site's purple accent (`#5b4cdb`) instead of using an off-the-shelf one.
- [ ] **Tags/filter on homepage** — the `examples.js` data file already has `tags` per example. A CSS-only filter (`:checked` + sibling combinators) could let users filter by category (forms, interactive, visual, etc.).
- [ ] **"Copy code" button** — would require JS; note for later if we ever allow a small JS sprinkle.
- [ ] **Smooth accordion animation** — `<details>` open/close can't be CSS-transitioned in most browsers yet. Worth revisiting as browser support for `interpolate-size` improves.
- [ ] **OG / social meta tags** — add `og:title`, `og:description`, `og:image` to `base.njk` for sharing.
- [ ] **Add more examples** — possible candidates: CSS-only counters, sticky header shrink-on-scroll, color picker, typewriter effect, blur reveal on hover.
