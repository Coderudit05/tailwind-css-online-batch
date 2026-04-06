# Tailwind CSS - Interactivity (Project 14)

## Concept First: Why Interactivity Utilities Matter

Interactivity utilities help communicate state changes and improve usability. Tailwind supports hover, focus, active, cursor, selection, and smooth scrolling behavior.

These utilities are essential for accessible and responsive UI feedback.

---

## Lesson-wise Notes

### 1. Hover, Focus, Active States

Examples:

- `hover:bg-blue-500`
- `focus:outline-none focus:ring-2`
- `active:scale-95`

---

### 2. Parent and Pseudo State Styling

Examples:

- `group` with `group-hover:*`
- `first:*`, `last:*`, `odd:*`, `even:*`

---

### 3. Appearance and Cursor

Examples:

- `appearance-none`
- `cursor-pointer`
- `cursor-not-allowed`

---

### 4. Resize and User Select

Examples:

- `resize`
- `resize-y`
- `select-none`
- `select-text`

---

### 5. Smooth Scroll

Set on root element:

- `scroll-smooth`

Useful for anchor link navigation.

---

## Quick Revision Summary

- State variants (`hover:`, `focus:`, `active:`) provide feedback.
- Cursor and selection utilities improve user interaction clarity.
- Use `scroll-smooth` for cleaner in-page navigation.
- Always test keyboard focus styles for accessibility.

---

## Practice Tasks

1. Create a button with hover, focus, and active states.
2. Build a card where child text changes on parent hover.
3. Add a textarea with resize control.
4. Create anchor links and test smooth scrolling.

---

## Run This File

Open `index.html` in browser. Tailwind CDN is already included.
