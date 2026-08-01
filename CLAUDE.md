# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is the documentation site for **aiszlab** (aisz.dev), built with Next.js 16 App Router. It documents two libraries:
- **musae** — a React component library (`musae` package)
- **@aiszlab/relax** — a React hooks & utilities library

## Commands

```bash
pnpm dev          # Start dev server on port 8100 (Turbopack)
pnpm build        # Production build
pnpm start        # Production server on port 8100
pnpm lint         # Run ESLint (extends next/core-web-vitals)
pnpm deploy       # Pull, install, build, and restart via PM2
```

## Architecture

### App Router structure (`app/`)

- **Root layout** (`app/layout.tsx`) — HTML shell with Geist font, Google Analytics
- **Root page** (`app/page.tsx`) — Landing page (client component), uses musae's `useTheme` for themed sections
- **(reference) route group** (`app/(reference)/`) — All documentation pages; its layout wraps children in `Provided` (ThemeProvider + ConfigProvider + Bench layout + DocSearch + FloatNav sidebar)
- **`app/about-us/`** — Simple MDX-driven about page
- **`app/sitemap.ts`** — Generates sitemap from the same `NAVIGATIONS` data structure

### MDX content pages

Documentation pages are `.mdx` files organized under `app/(reference)/`:
- `components/*/page.mdx` — One per musae component (60+ components)
- `hooks/*/page.mdx` — One per relax hook (20+ hooks)
- `utils/*/page.mdx` — Utility function docs

Custom MDX rendering overrides are defined in `mdx-components.tsx` and implemented in `components/mdx/` (table, code, headings, lists, links, pre with syntax highlighting).

### Key components (`components/`)

- **`provided/`** — App shell: `ThemeProvider` + `ConfigProvider` wrapping musae's `Bench` layout. Contains navigation definition (`navigation.ts`), toolbar (theme toggle, i18n, GitHub link), and a Robot chat widget (musae `Chat` inside a `Popover` + `Fab`)
- **`usage/`** — Renders live component examples. Accepts `sources` (array of `{src, title, description}`), loads the mock component via the static registry and reads its source code from disk, then displays both in a `Playground`
- **`float-nav/`** — Right sidebar in-page navigation. Extracts h2 headings and their child elements with IDs from the DOM to build a sticky `Menu`
- **`icon-groups/`** — Icon category display component
- **`mdx/`** — Custom MDX component overrides for headings, paragraphs, code blocks, tables, lists, anchors

### Mock registry (`mocks/`)

Example/demo components live under `mocks/components/<name>/` and `mocks/hooks/<hook-name>/`. **`mocks/registry.ts`** is a static import map that replaces dynamic `import()` calls — this is required because **Turbopack does not support dynamic imports with template literals**. When adding a new mock, you must add its entry to the registry.

### Navigation

Site navigation is a static tree defined in `components/provided/navigation.ts` (`NAVIGATIONS`). This single source of truth drives:
- The `Bench` sidebar navigation
- The sitemap generation (`app/sitemap.ts`)

### Styling

- Tailwind CSS v4 with `@tailwindcss/postcss` PostCSS plugin
- musae component library styles imported globally via `@import 'musae'` in `globals.css`
- Geist font from `next/font/google`

### Syntax highlighting

Shiki via `@shikijs/rehype` configured in `next.config.mjs` with vitesse-light/vitesse-dark themes. Remark-GFM provides GitHub Flavored Markdown support.

### Production deployment

PM2 runs `pnpm start` with the app named `telescope` (configured in `ecosystem.config.js`).

## Adding a new component doc page

1. Create `app/(reference)/components/<name>/page.mdx` with the documentation content
2. Create example mock(s) in `mocks/components/<name>/` (e.g. `basic.tsx`)
3. Add the mock import to `mocks/registry.ts`
4. Add the navigation entry in `components/provided/navigation.ts`
