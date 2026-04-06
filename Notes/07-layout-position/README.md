# Tailwind CSS - Layout and Position (Project 07)

## Concept First: Why Position Utilities Matter

Positioning utilities decide where elements appear and how they stack or flow. Tailwind gives direct classes for positioning, display mode, layering, and float behavior.

Main use-cases:

- Anchoring badges, buttons, overlays, and labels.
- Switching between inline, block, and hidden display modes.
- Managing stacking order with z-index.

---

## Lesson-wise Notes

### 1. Relative and Absolute

Pattern:

- Parent: `relative`
- Child: `absolute` with `top/right/bottom/left`

---

### 2. Corner Positioning

Use combinations like:

- `top-0 left-0`
- `top-0 right-0`
- `bottom-0 left-0`
- `bottom-0 right-0`

---

### 3. Display Utilities

Examples:

- `inline`
- `inline-block`
- `block`
- `hidden`

---

### 4. Z-Index

Examples:

- `z-10`
- `z-20`
- `z-40`

Higher value appears above lower values.

---

### 5. Float

Examples:

- `float-right`
- `float-left`
- `float-none`

Common for text wrapping around media blocks.

---

## Quick Revision Summary

- Use `relative` + `absolute` for local positioning.
- Use display classes to control flow behavior.
- Use z-index when elements overlap.
- Float is optional today, but useful for wrapping content.

---

## Practice Tasks

1. Add a notification badge in the top-right of a card.
2. Create an overlap effect using three boxes and z-index.
3. Build one paragraph with a floated image placeholder.
4. Toggle visibility of an element using `hidden`.

---

## Run This File

Open `index.html` in browser. Tailwind CDN is already included.
