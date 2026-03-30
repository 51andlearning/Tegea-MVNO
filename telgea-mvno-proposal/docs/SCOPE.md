# Scope

## Pages Included (v1)

| Route | Description |
|-------|-------------|
| `/` | Single-page proposal — all sections rendered in scroll flow |

No multi-page routing is required for v1. All content lives on a single scrollable page.

## Sections Included

| Section | Component | Status |
|---------|-----------|--------|
| Hero / Cover | `HeroSection.tsx` | ✅ Placeholder ready |
| Scope of Work | `ScopeSection.tsx` | ✅ Placeholder ready |
| Commercial Terms | `CommercialSection.tsx` | ✅ Placeholder ready |
| Terms & Conditions | `TermsSection.tsx` | ✅ Placeholder ready |
| Signatures / Acceptance | `SignatureSection.tsx` | ✅ Placeholder ready |

## What Is Excluded (v1)

- User authentication / gating
- CMS or editable content management
- Contact or signature submission forms (backend required)
- Multi-language support
- Dark mode toggle (CSS variables support it structurally; not surfaced in UI)
- Blog, news, or dynamic content
- PDF export from web view
- Mobile app integration
- Real-time subscriber data or API connections

## Launch Milestones

| Milestone | Description | Target |
|-----------|-------------|--------|
| M1 | Project scaffold + shadcn setup | Week 1 |
| M2 | All sections built and styled | Week 2 |
| M3 | Content populated from approved proposal | Week 2 |
| M4 | QA — cross-browser, mobile responsive | Week 3 |
| M5 | Vercel deployment + custom domain | Week 3 |
| M6 | Stakeholder review & sign-off | Week 4 |
