# Project Structure

## Folder Layout

```
telgea-mvno-proposal/
├── docs/                        # Project documentation (not shipped)
│   ├── PROJECT_OVERVIEW.md
│   ├── ASSUMPTIONS.md
│   ├── SCOPE.md
│   ├── STRUCTURE.md             ← this file
│   ├── TRACKING_PLAN.md
│   └── DEPLOYMENT.md
│
├── public/
│   └── images/                  # Static image assets (logos, etc.)
│
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind base + shadcn CSS variables
│   │   ├── layout.tsx           # Root layout — fonts, metadata, html/body
│   │   └── page.tsx             # Main page — imports and sequences all sections
│   │
│   ├── components/
│   │   ├── sections/            # Page section components (one per proposal section)
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ScopeSection.tsx
│   │   │   ├── CommercialSection.tsx
│   │   │   ├── TermsSection.tsx
│   │   │   └── SignatureSection.tsx
│   │   │
│   │   └── ui/                  # shadcn UI primitives (do not edit manually)
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── separator.tsx
│   │       └── tabs.tsx
│   │
│   ├── content/                 # Static content / data files (JSON, MDX, ts)
│   │   └── (proposal data files go here)
│   │
│   └── lib/
│       └── utils.ts             # cn() helper for Tailwind class merging
│
├── .eslintrc.json
├── .gitignore
├── components.json              # shadcn configuration
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Section Composition Rules

1. **One file per section.** Each section of the proposal lives in its own component file under `src/components/sections/`.
2. **Sections are server components by default.** Only add `"use client"` if the section requires interactivity (e.g. form state, click handlers not covered by shadcn primitives).
3. **shadcn primitives only in `src/components/ui/`.** Never build custom low-level UI components from scratch if a shadcn equivalent exists.
4. **No inline styles.** Use Tailwind utility classes exclusively. Custom values go in `tailwind.config.ts` under `theme.extend`.
5. **Content separation.** Hard-coded strings in section files are acceptable for v1. For v2, move all content to `src/content/` as typed data objects.

## Content Management Approach

**v1 (current):** Content is hard-coded directly in section components. Changes require editing the relevant `.tsx` file and redeploying.

**v2 (recommended upgrade):** Extract all proposal text, tables, and figures into typed data objects in `src/content/proposal.ts`. Section components import from this file. This allows non-developer content updates with no component changes.

**v3 (optional):** Integrate a headless CMS (Sanity, Contentlayer, or similar) for fully managed content updates without code changes.
