# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:5173 (auto-opens browser)
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

No test runner is configured. There is no linter configured either — Vite's dev server surfaces JSX/JS errors at runtime.

## Stack

- **React 18** + **Vite 5** — no router, no state manager, single-page static site
- **Tailwind CSS v3** with PostCSS + Autoprefixer
- **Fonts**: Inter (sans) and JetBrains Mono (mono) loaded from Google Fonts in `index.html`

## Architecture

All source files live flat in the project root (no `src/` folder).

```
App.jsx          — root component, composes all sections in order
navbar.jsx       — sticky header with mobile hamburger
Hero.jsx         — landing section with headline, CTAs, stats bar
ProjectsGrid.jsx — project cards with accent variants
Stack.jsx        — tech category chips
Contact.jsx      — channel links + mailto form
Footer.jsx       — copyright bar
index.css        — Tailwind directives + body background gradient
tailwind.config.js
vite.config.js
```

The contact form uses `window.location.href = mailto:...` — there is no backend or form service. Nothing is persisted.

## Design System

The portfolio uses a **galaxy-blue color palette**:

- **Background**: `#020817` (deep space blue-black), set in both `index.css` and as `bg-[#020817]` on the root `div` in `App.jsx`
- **Card surfaces**: `bg-[#0a1628]/60 backdrop-blur-sm` — glassmorphism pattern used across cards and the contact form
- **Primary accent**: `blue-400/500`, gradient CTAs use `from-blue-500 to-sky-500`
- **Secondary accents**: `sky-300/400` and `indigo-300/400`
- **Body text**: `text-white` (headings) / `text-slate-400` (descriptions) / `text-slate-500` (muted)
- **Borders**: `border-blue-900/40` at rest, brighten on hover

Section headers follow a consistent pattern:
```jsx
<div className="mb-4 flex items-center gap-3">
  <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-transparent" />
  <p className="text-xs uppercase tracking-[0.2em] text-blue-400/70">Label</p>
</div>
```

Components that have multiple visual variants (ProjectsGrid, Stack, Contact channels) define an `accents` object keyed by variant name and destructure it as `const a = accents[item.accent]` — follow this pattern when adding new variants.

## Adding a Project

Edit the `projects` array in `ProjectsGrid.jsx`. Each entry needs `title`, `description`, `tags[]`, `href`, `accent` (`"blue"`, `"sky"`, or `"indigo"`), and `linkType` (`"github"` or `"website"`). New accent colors require a matching entry in the `accents` object in that file.

## Contact channels

Defined in the `channels` array in `Contact.jsx`. Each entry needs `label`, `handle`, `href`, `accent` (`"blue"`, `"sky"`, `"indigo"`, or `"violet"`), and `note`. LinkedIn and Facebook URLs are set to `linkedin.com/in/sufjandauti` and `facebook.com/sufjandauti` — update if the exact profile slugs differ.

## Profile photo (navbar)

`navbar.jsx` renders an "SD" initials placeholder. To use the real LinkedIn photo, replace the `<div>` inside the logo `<a>` with:
```jsx
<img src="YOUR_LINKEDIN_PHOTO_URL" alt="Sufjan Dauti" className="h-9 w-9 rounded-full border-2 border-blue-500/40 object-cover" />
```

## GitHub project links

`ProjectsGrid.jsx` uses placeholder GitHub URLs (`github.com/sufjandauti/food-order-app`, `github.com/sufjandauti/smart-campus-parking`). Update `href` values in the `projects` array once the real repo URLs are known.
