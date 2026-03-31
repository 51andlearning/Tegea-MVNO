# Telgea MVNO Proposal

> **CONFIDENTIAL** — For the exclusive use of Telgea and authorised DSG personnel. Not for distribution.

A web-native version of the DSG Digital Mobile MVNO proposal for Telgea, built as an interactive Next.js site and deployed via Vercel.

**Proposal valid until:** 26 April 2026

---

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (New York / Neutral) |
| Package Manager | pnpm |
| Hosting | Vercel |

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build & Deploy

```bash
pnpm build     # verify locally before pushing
pnpm lint      # ESLint check
```

Push to `main` to trigger an automatic Vercel deployment. Non-main branches generate preview URLs.

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for full Vercel setup, environment variables, and the pre-launch checklist.

---

## Project Structure

```
src/
├── app/           # Next.js App Router pages and layouts
├── components/
│   ├── sections/  # Proposal section components (built per page)
│   └── ui/        # shadcn/ui base components
├── content/       # Static typed content for each section
└── lib/           # Utility functions
public/
└── images/        # Static image assets
docs/              # Project documentation
```

See [`docs/STRUCTURE.md`](docs/STRUCTURE.md) for composition rules.

---

## Pages

| Route | Page | Status |
|---|---|---|
| `/` | Home / Proposal Index | ✅ Built |
| `/executive-summary` | Executive Summary | 🔲 Pending |
| `/about` | About DSG & Digital Mobile | 🔲 Pending |
| `/platform` | The DSG Digital Mobile Platform | 🔲 Pending |
| `/market` | Market Opportunity | 🔲 Pending |
| `/scope-of-work` | Scope of Work | 🔲 Pending |
| `/commercial` | Commercial Terms | 🔲 Pending |
| `/sla` | Service Level Agreements | 🔲 Pending |
| `/raci` | Roles & Responsibilities | 🔲 Pending |
| `/risk` | Risk Register | 🔲 Pending |
| `/terms` | Terms and Conditions | 🔲 Pending |
| `/acceptance` | Proposal Acceptance | 🔲 Pending |

---

## Documentation

| Doc | Purpose |
|---|---|
| [`docs/PROJECT_OVERVIEW.md`](docs/PROJECT_OVERVIEW.md) | What this site is and who it's for |
| [`docs/SCOPE.md`](docs/SCOPE.md) | Pages, sections, and launch milestones |
| [`docs/STRUCTURE.md`](docs/STRUCTURE.md) | Folder structure and component rules |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | GitHub + Vercel setup and checklist |
| [`docs/ASSUMPTIONS.md`](docs/ASSUMPTIONS.md) | Project constraints and decisions |
| [`docs/TRACKING_PLAN.md`](docs/TRACKING_PLAN.md) | Analytics strategy |

---

## Owner

- **Producer:** Digital Mobile (Pty) Ltd, a DSG Company
- **Technical Owner:** Edward Wicks / DSG Digital team
- **Repository:** Private — keep private for the duration of the proposal validity period
