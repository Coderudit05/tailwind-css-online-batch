# Tailwind CSS - Colors and Backgrounds (Project 03)

## Concept First: Why Colors Matter in Utility-First CSS
In Tailwind CSS, colors are applied directly through utility classes like `text-red-500`, `bg-blue-200`, or `border-emerald-600`.

The main idea:
- You do not write custom CSS for every color use-case.
- You combine small utilities in HTML to style text, backgrounds, borders, shadows, and form controls.
- Color shades (`50` to `900`) help you control visual hierarchy and contrast.

A common pattern is:
- Lighter shades (`50`, `100`, `200`) for soft backgrounds.
- Mid shades (`400`, `500`, `600`) for primary UI accents.
- Dark shades (`700`, `800`, `900`) for headings, important labels, and strong contrast.

---

## Lesson-wise Notes

### 1. Text Colors
Use `text-{color}-{shade}`.

Examples:
- `text-red-500`
- `text-slate-700`
- `text-emerald-900`

Use this when you want emphasis or semantic meaning (error, warning, success, etc.).

---

### 2. Background Colors
Use `bg-{color}-{shade}`.

Examples:
- `bg-slate-700`
- `bg-zinc-400`
- `bg-emerald-600`

Tip: Always check text readability with background contrast.

---

### 3. Underline / Decoration Colors
Text decoration can have its own color.

Examples:
- `underline decoration-red-500`
- `underline decoration-wavy decoration-cyan-500`

Useful for links, highlights, and annotations.

---

### 4. Border Colors
Use `border-{color}-{shade}` with border width class.

Examples:
- `border-2 border-rose-500`
- `border-2 border-yellow-500`

Useful for form states (active/error/success) and card styling.

---

### 5. Divide Colors
Use `divide-y divide-{color}-{shade}` in a parent container.

Example:
- `divide-y divide-blue-300`

This adds separators between direct child elements.

---

### 6. Outline Colors
Use `outline outline-{color}-{shade}`.

Examples:
- `outline outline-blue-500`
- `outline outline-gray-500`

Outline is different from border and often used for focus visuals.

---

### 7. Shadow Colors
Tailwind supports shadow color and opacity.

Examples:
- `shadow-lg shadow-cyan-500/60`
- `shadow-lg shadow-blue-500/50`

This helps create depth with branded color feel.

---

### 8. Accent Colors (Form Controls)
Use `accent-{color}-{shade}` for checkbox/radio highlight.

Examples:
- `accent-purple-500`
- `accent-pink-500`

Great for matching form controls with your theme.

---

### 9. Arbitrary Colors
When your brand color is not in Tailwind palette, use square bracket syntax.

Examples:
- `bg-[#427fab]`
- `text-[#427fab]`
- `border-[#427fab]`

Use this carefully to avoid inconsistent design.

---

### 10. Gradient Backgrounds
Use gradient direction with from/via/to stops.

Example:
- `bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500`

This is useful for hero banners and highlighted sections.

---

## Quick Revision Summary
- `text-*` changes text color.
- `bg-*` changes background color.
- `border-*`, `outline-*`, `divide-*` control line/separator colors.
- `shadow-*` can be colorized with opacity.
- `accent-*` styles checkbox/radio highlight.
- Arbitrary value syntax `[#hex]` gives custom brand colors.
- Prefer readable contrast and consistent color scale usage.

---

## Practice Tasks
1. Create a card with a dark background and readable light text.
2. Build a list using `divide-y` and experiment with 3 different divider colors.
3. Make 3 buttons with different shadow colors and opacity values.
4. Replace one default palette color with an arbitrary hex color.

---

## Run This File
Open `index.html` in browser. Since this project uses CDN, no build step is required.
