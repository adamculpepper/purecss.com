# purecss.com

A collection of interactive UI patterns built with pure CSS — no JavaScript required. Built with [Eleventy (11ty) v3](https://www.11ty.dev) and hosted on [Netlify](https://netlify.com).

## Getting started

```bash
npm install
npm start
```

Opens at `http://localhost:8080`.

## Build

```bash
npm run build
```

Output goes to `public/` (gitignored). Netlify runs this automatically on deploy.

## Project structure

```
purecss.com/
├── eleventy.config.js       # Eleventy config (ESM)
├── netlify.toml             # Build command + www redirect
├── TODO.md                  # Outstanding items / future ideas
└── src/
    ├── index.njk            # Homepage grid
    ├── _data/
    │   └── examples.js      # Master list of all examples (slug, title, description, tags)
    ├── _includes/
    │   ├── base.njk         # Site shell (head, header, footer)
    │   ├── example.njk      # Example page layout
    │   └── previews/        # Mini demo snippets used in homepage cards
    ├── examples/            # One .njk file per example page
    └── css/
        ├── global.css       # Site-wide styles
        └── examples/        # One .css file per example (scoped to .demo-[slug])
```

## Adding a new example

1. Add an entry to `src/_data/examples.js` with `slug`, `title`, `description`, and `tags`.
2. Create `src/css/examples/[slug].css` — scope all rules under `.demo-[slug]`.
3. Create `src/_includes/previews/[slug].njk` — the mini demo shown in the homepage card.
4. Create `src/examples/[slug].njk` using the `example.njk` layout. Fill in the `demo`, `html_code`, and `css_code` blocks.
5. Add the CSS link to the `{% block head %}` in `src/index.njk`.

## Tech

- **[Eleventy v3](https://www.11ty.dev)** — static site generator (ESM config)
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** — templating
- **[@11ty/eleventy-plugin-syntaxhighlight](https://www.11ty.dev/docs/plugins/syntaxhighlight/)** — build-time Prism syntax highlighting (zero client-side JS)
- **Vanilla CSS** — custom properties, no preprocessors
- **[Netlify](https://netlify.com)** — hosting with www → non-www redirect

## Examples (26 total)

| Slug | Title |
|------|-------|
| `toggle-switch` | Toggle Switch |
| `floating-labels` | Floating Labels |
| `star-rating` | Star Rating |
| `expandable-search` | Expandable Search |
| `show-hide-content` | Show / Hide Content |
| `dark-light-mode` | Dark / Light Mode |
| `accordion` | Accordion / FAQ |
| `tab-navigation` | Tab Navigation |
| `hover-tooltip` | Hover Tooltip |
| `custom-checkboxes` | Custom Checkboxes |
| `custom-radio` | Custom Radio Buttons |
| `range-slider` | Styled Range Slider |
| `progress-bar` | Progress Bars |
| `click-reveal` | Click-to-Reveal |
| `card-flip` | 3D Card Flip |
| `image-zoom` | Image Zoom on Hover |
| `gradient-text` | Gradient Text |
| `skeleton-loader` | Skeleton Loader |
| `hover-dropdown` | Hover Dropdown Menu |
| `modal-dialog` | Modal Dialog |
| `offcanvas-nav` | Off-Canvas Navigation |
| `input-validation` | CSS Input Validation |
| `number-counter` | Animated Number Counter |
| `scroll-carousel` | Scroll Snap Carousel |
| `aspect-ratio-box` | Aspect Ratio Box |
| `scroll-spy` | Scroll Spy Indicator |
