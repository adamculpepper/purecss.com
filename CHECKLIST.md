# purecss.com Example Checklist

---

## Current Examples (27)

- [x] 1. Toggle Switch — styled on/off checkbox with CSS `translate` thumb
- [x] 2. Floating Labels — labels that float above input using `:placeholder-shown`
- [x] 3. Star Rating — clickable stars with radio inputs + general sibling combinator
- [x] 4. Expandable Search — search bar that widens on focus via CSS `transition`
- [x] 5. Show / Hide Content — toggle visibility with a checkbox and `~` combinator
- [x] 6. Dark / Light Mode — full theme switcher using CSS custom properties + checkbox
- [x] 7. Accordion / FAQ — expand/collapse panels using `<details>` and `<summary>`
- [x] 8. Tab Navigation — tabbed interface with radio inputs and `:checked`
- [x] 9. Hover Tooltip — tooltip text via `::before` reading from `data-tip` attribute
- [x] 10. Custom Checkboxes — fully styled checkboxes using `appearance:none` + `:checked`
- [x] 11. Custom Radio Buttons — styled radios without images or JavaScript
- [x] 12. Styled Range Slider — custom track and thumb via CSS pseudo-elements
- [x] 13. Progress Bars — `<progress>` element styled with vendor-prefixed pseudo-elements
- [x] 14. Click-to-Reveal — hidden content shown on click using a checkbox as state
- [x] 15. 3D Card Flip — card flips on hover using CSS 3D transforms and `perspective`
- [x] 16. Image Zoom on Hover — smooth zoom with `transform: scale()` + `overflow:hidden`
- [x] 17. Gradient Text — gradient clipped to text shape via `background-clip:text`
- [x] 18. Skeleton Loader — shimmer placeholder using `@keyframes` + gradient animation
- [x] 19. Hover Dropdown Menu — menu revealed on `:hover` using `visibility` + `opacity`
- [x] 20. Modal Dialog — show/hide modal using `:target` and URL hash
- [x] 21. Off-Canvas Navigation — slide-in panel with a checkbox and CSS `translate`
- [x] 22. CSS Input Validation — real-time feedback using `:user-invalid` and `:user-valid`
- [x] 23. Animated Number Counter — numbers count up using `@property` + CSS counters
- [x] 24. Scroll Snap Carousel — horizontal carousel with `scroll-snap-type`
- [x] 25. Aspect Ratio Box — fixed ratio element using the `aspect-ratio` property
- [x] 26. Scroll Spy Indicator — reading progress bar via scroll-driven animations
- [x] 27. Glitch Effect — scan-line text glitch using `clip-path` + pseudo-elements

---

## Ideas (100)

### Forms & Inputs
- [ ] 1. Password strength meter (color-coded bar using `:valid`/CSS length checks)
- [ ] 2. Character count indicator (input near max shows red border via `:out-of-range`)
- [ ] 3. Custom file upload button (hidden `<input type="file">` with styled label)
- [ ] 4. Multi-step form wizard (radio inputs control which step is visible)
- [ ] 5. Styled `<select>` dropdown (custom arrow, custom color via `appearance:none`)
- [ ] 6. Date input calendar picker styling
- [ ] 7. Pill/chip tag input display
- [ ] 8. Numeric stepper with `+`/`-` buttons (CSS counter trick)
- [ ] 9. Form with inline error messages using `:user-invalid` + `::after`
- [ ] 10. Color swatch picker (radio buttons styled as color circles)

### Navigation
- [ ] 11. Sticky sidebar nav with scroll-spy highlighting (scroll-driven animations)
- [ ] 12. Breadcrumb trail with `::before` separators
- [ ] 13. Mega menu (multi-column dropdown on hover)
- [ ] 14. Mobile hamburger menu (checkbox-controlled slide-in)
- [ ] 15. Pagination component (numbered pages, active state)
- [ ] 16. Steps/wizard progress indicator (numbered connected dots)
- [ ] 17. Sticky header that shrinks on scroll (scroll-driven animation)
- [ ] 18. Tag cloud with varying font sizes
- [ ] 19. Dot-notation nav (circle dots with tooltips on hover)
- [ ] 20. Tabbed sidebar (vertical tabs)

### Layout & Display
- [ ] 21. CSS masonry grid (multi-column + `break-inside: avoid`)
- [ ] 22. Asymmetric hero with diagonal clip-path section divider
- [ ] 23. Magazine-style text columns (`columns: 2`)
- [ ] 24. Pull quote styled aside (large quotes via `::before`)
- [ ] 25. Sticky table header (`position: sticky` on `<thead>`)
- [ ] 26. Responsive card grid that switches to list view (no JS)
- [ ] 27. CSS-only lightbox (`:target` to show full-size image)
- [ ] 28. Drag-scrollable shelf (overflowing flex with scroll-snap)
- [ ] 29. Feature comparison table with highlighted column
- [ ] 30. CSS `subgrid` nested layout demo

### Animations & Visual Effects
- [ ] 31. Neon glow text effect (CSS `text-shadow` layers)
- [ ] 32. Typewriter effect (`@keyframes` width + `steps()` timing)
- [ ] 33. Fireworks/confetti burst (CSS `@keyframes` + `transform: rotate`)
- [ ] 34. Parallax scrolling layers (scroll-driven `translateY`)
- [ ] 35. Morphing blob shapes (CSS `border-radius` animation)
- [ ] 36. Particle float effect (multiple `@keyframes` on pseudo-elements)
- [ ] 37. CSS-only rain/snow effect (pseudo-elements + animation)
- [ ] 38. Loading spinner variants (dots, bars, rings, orbit)
- [ ] 39. Elastic bounce animation (CSS spring with `cubic-bezier`)
- [ ] 40. Countdown timer display (CSS counter + `animation: steps()`)

### Cards & Content
- [ ] 41. Profile card with avatar, stats, follow button
- [ ] 42. Pricing card with a "popular" badge
- [ ] 43. Recipe card with ingredient list and steps
- [ ] 44. Product card with color variant swatches
- [ ] 45. Blog post card with category tag and read time
- [ ] 46. Testimonial card with star rating and quote
- [ ] 47. Stat card with large number and trend indicator
- [ ] 48. Media card (image left, content right) with hover effect
- [ ] 49. Expandable card that grows to full height on click
- [ ] 50. Stacked cards perspective effect on hover

### Buttons & Controls
- [ ] 51. Animated border draw button (SVG `stroke-dashoffset`)
- [ ] 52. Filled progress button (`background-size` animation — label trick)
- [ ] 53. Neumorphic button (soft shadow inset/outset)
- [ ] 54. Split button (primary action + dropdown trigger)
- [ ] 55. Floating action button (FAB) with radial menu
- [ ] 56. Copy-to-clipboard button visual state (CSS `:active` feedback)
- [ ] 57. Pill button group (segmented control using radio inputs)
- [ ] 58. Magnetic hover button (CSS `@starting-style` + transition)
- [ ] 59. Ghost button with hover fill sweep
- [ ] 60. Destructive confirm button (two-stage reveal with `:checked`)

### Feedback & Notifications
- [ ] 61. Toast/snackbar notification (slide-in from bottom with `:target`)
- [ ] 62. Alert banner variants (info, success, warning, error)
- [ ] 63. Badge dot on icon (notification indicator using `::after`)
- [ ] 64. Tooltip with arrow pointing in multiple directions
- [ ] 65. Inline status indicator (dot + label, color-coded)
- [ ] 66. Empty state illustration (CSS-drawn icon with message)
- [ ] 67. Loading state shimmer on text lines
- [ ] 68. Animated checkmark on success
- [ ] 69. Error shake animation on invalid submit
- [ ] 70. Banner with dismiss `×` button (checkbox-hide trick)

### Typography
- [ ] 71. Highlighted text with marker-style underline
- [ ] 72. Drop cap (`::first-letter` large initial)
- [ ] 73. Strikethrough price with discount badge
- [ ] 74. Animated underline link (width grows from center on hover)
- [ ] 75. Text with `letter-spacing` animation on hover
- [ ] 76. Rotating text ticker (multiple words cycling vertically)
- [ ] 77. Outlined/stroked text (`-webkit-text-stroke`)
- [ ] 78. Blurred redacted text (`filter: blur`, reveal on hover)
- [ ] 79. Scrolling marquee text (pure CSS infinite `translateX`)
- [ ] 80. Text reveal on scroll (scroll-driven `clip-path` animation)

### CSS Art & Data Viz
- [ ] 81. CSS-drawn toggle icons (hamburger → X morphing)
- [ ] 82. Dark/light mode switch with sun/moon CSS illustration
- [ ] 83. CSS-only pie chart (`conic-gradient`)
- [ ] 84. Bar chart (flex + CSS custom properties for bar heights)
- [ ] 85. CSS calendar grid (7-column CSS grid + date styling)
- [ ] 86. CSS-drawn social media icons
- [ ] 87. Animated donut chart (SVG `stroke-dashoffset`, no JS)
- [ ] 88. CSS color palette swatch grid with hover labels
- [ ] 89. CSS-only QR code pattern (grid + colored cells)
- [ ] 90. Abstract geometric art with CSS shapes + animation

### Utilities & Modern CSS
- [ ] 91. Drag-to-resize split panel (CSS `resize: horizontal` demo)
- [ ] 92. Print styles — hide nav, format page for paper
- [ ] 93. Focus ring visibility demo (`:focus-visible` vs `:focus`)
- [ ] 94. High-contrast mode demo (`forced-colors` media query)
- [ ] 95. Reduced motion (`prefers-reduced-motion` animation toggle)
- [ ] 96. Container query responsive card (resizes based on container width)
- [ ] 97. CSS `has()` selector interactive demo
- [ ] 98. CSS logical properties direction switcher (LTR/RTL)
- [ ] 99. View Transitions API page transition demo
- [ ] 100. Scroll-triggered reveal animation (scroll-driven opacity/transform)
