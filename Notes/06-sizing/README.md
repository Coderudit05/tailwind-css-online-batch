# Tailwind CSS - Sizing (Project 06)

## Concept First: Why Sizing Utilities Matter

Sizing controls how much space each element occupies. In Tailwind, you can set width and height using scale values, fractions, viewport units, and min/max constraints.

Why this matters:

- Better layout control across devices.
- Consistent sizing system without custom CSS.
- Easy responsive adjustments.

---

## Lesson-wise Notes

### 1. Fixed Width

Examples:

- `w-12`, `w-24`, `w-32`, `w-64`, `w-96`

---

### 2. Fractional Width

Examples:

- `w-1/2`, `w-1/3`, `w-2/3`, `w-3/4`

Useful in columns and card grids.

---

### 3. Full, Screen, Min, Max Width

Examples:

- `w-full`
- `w-screen`
- `w-min`
- `w-max`

---

### 4. Arbitrary Width

Use custom value when needed:

- `w-[300px]`

---

### 5. Max Width

Use max width for readable content blocks:

- `max-w-lg`
- `max-w-xl`

---

### 6. Height Utilities

Examples:

- `h-24`, `h-32`, `h-40`, `h-48`
- `max-h-full`, `h-screen`

---

## Quick Revision Summary

- Width and height can be fixed, fractional, or viewport-based.
- Max width helps maintain readable text line length.
- Arbitrary values are useful for one-off design needs.
- Prefer scale values for consistent UI.

---

## Practice Tasks

1. Create three boxes with widths `w-1/3`, `w-1/2`, and `w-3/4`.
2. Build a card that uses `max-w-lg` and `w-full`.
3. Add a hero section using `h-screen`.
4. Use one arbitrary size value in a controlled way.

---

## Run This File

Open `index.html` in browser. Tailwind CDN is already included.
