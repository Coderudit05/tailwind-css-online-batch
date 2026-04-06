# Tailwind CSS - Breakpoints (Project 10)

## Concept First: Why Breakpoints Matter

Breakpoints make your UI responsive. In Tailwind, you prefix utilities with screen sizes so styles apply only from that width and above.

Common prefixes:

- `sm:` for 640px and above
- `md:` for 768px and above
- `lg:` for 1024px and above
- `xl:` for 1280px and above
- `2xl:` for 1536px and above

---

## Lesson-wise Notes

### 1. Mobile-First Approach

Tailwind is mobile-first.

- Base class applies to all sizes.
- Breakpoint class overrides from that breakpoint upward.

Example:

- `text-sm md:text-lg lg:text-2xl`

---

### 2. Responsive Layout Patterns

Use breakpoints for structure changes.

Examples:

- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- `flex-col md:flex-row`
- `p-3 sm:p-6 lg:p-10`

---

### 3. Responsive Visibility

Show/hide by screen size.

Examples:

- `hidden md:block`
- `block md:hidden`

---

## Quick Revision Summary

- Prefix utilities with `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.
- Base utility is for mobile by default.
- Use breakpoints for spacing, typography, and layout shifts.

---

## Practice Tasks

1. Create a card grid with 1, 2, and 3 columns across breakpoints.
2. Make heading size responsive using 3 breakpoints.
3. Build a menu that is hidden on mobile and visible on desktop.

---

## Run This Folder

Add or open your project HTML file and include Tailwind CDN to test responsive classes.
