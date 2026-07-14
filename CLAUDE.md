# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is a Next.js App Router project currently at the `create-next-app` scaffold stage (`app/page.tsx`, `app/layout.tsx` are still default boilerplate). The real content of this repo so far is `DESIGN.md` — a full design-system specification that future UI work is expected to implement against.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`) — use `pnpm`, not `npm`/`yarn`.

- `pnpm dev` — start the dev server (Next.js, Turbopack by default)
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — ESLint via `eslint.config.mjs` (flat config, extends `eslint-config-next` core-web-vitals + typescript)

There is no test suite configured in this repo yet.

## Architecture

- Next.js **App Router**, all routes/layouts live under `app/`.
- TypeScript with strict mode; path alias `@/*` maps to the repo root (`tsconfig.json`).
- Styling is **Tailwind CSS v4**, configured CSS-first (no `tailwind.config.*`) — theme tokens are declared directly in `app/globals.css` via `@theme inline`, with light/dark values set as CSS custom properties (`--background`, `--foreground`) and switched with `@media (prefers-color-scheme: dark)`.
- Fonts are loaded via `next/font/google` (Geist / Geist Mono) in `app/layout.tsx`, exposed as CSS variables consumed by the Tailwind theme.

## DESIGN.md — the design system spec

`DESIGN.md` is a Starbucks-inspired design system extracted for reuse, and it is the primary reference for any UI/component work in this repo. Before building or styling a component, check it for the relevant tokens/spec rather than inventing values. Key points to know going in:

- **Color roles are tiered, not a single brand color.** Four greens each map to a specific surface (Starbucks Green for headings, Green Accent `#00754A` for CTAs, House Green `#1E3932` for dark feature bands/footer, Uplift for decorative accents). Gold (`#cba258`) is reserved exclusively for Rewards-style ceremony moments — never a general accent.
- **Page canvas is warm cream** (`#f2f0eb` / `#edebe9`), never pure white; body text is `rgba(0,0,0,0.87)`, never pure black.
- **Buttons are always 50px full-pill radius** with `transform: scale(0.95)` as the universal active/press state; cards are `12px` radius with layered whisper-soft shadows (never a single heavy drop shadow).
- **No gradients anywhere** — the system is strictly color-block.
- **Typography is proprietary and needs substitution**: SoDoSans (primary) → substitute **Inter** or **Manrope**; Lander Tall (serif, used only for Rewards-style headline moments) → substitute **Iowan Old Style** or **Lora**; Kalam (script, used only for Careers-style personal-name touches) → available directly on Google Fonts. Don't mix these three type families outside their documented contexts.
- Section 4 ("Component Stylings") gives exact specs (padding, radius, shadow, states) for buttons, cards, forms, nav, and a full product-detail-page component cluster (size selector, add-in rows, nutrition table, etc.) — treat these as literal implementation specs, not inspiration.
- Section 7 ("Do's and Don'ts") and Section 9 ("Agent Prompt Guide") are written specifically to constrain AI-driven UI generation — read them before generating new components from scratch.
