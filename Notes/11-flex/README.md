# Tailwind CSS - Flexbox (Project 11)

## Concept First: Why Flex Utilities Matter

Flexbox is best for one-dimensional layouts: arranging items in a row or column and controlling alignment, spacing, and distribution.

Tailwind gives utility classes for:

- Flex direction
- Main-axis alignment (`justify-*`)
- Cross-axis alignment (`items-*`, `self-*`)
- Wrapping and ordering
- Grow and shrink behavior

---

## Lesson-wise Notes

### 1. Flex Container and Alignment

Examples:

- `flex`
- `justify-around`
- `items-center`
- `self-start`, `self-end`

---

### 2. Direction, Gap, and Order

Examples:

- `flex-col`
- `gap-4`
- `order-1`, `order-4`

Use `order-*` carefully to avoid accessibility confusion.

---

### 3. Grow and Shrink Behavior

Examples:

- `flex-none`
- `flex-initial`
- `flex-auto`
- `flex-1`

These control how items use available space.

---

## Quick Revision Summary

- Flex is ideal for row/column component layout.
- Use `justify-*` for main axis and `items-*` for cross axis.
- Use `gap-*` for clean spacing between items.
- Use `flex-1` and related utilities to control expansion.

---

## Practice Tasks

1. Build a horizontal navbar with centered items.
2. Create a vertical card stack with `flex-col` and `gap-4`.
3. Make one card grow using `flex-1` while others stay fixed.
4. Reorder two items for desktop using `md:order-*`.

---

## Run This File

Open `index.html` in browser. Tailwind CDN is already included.
