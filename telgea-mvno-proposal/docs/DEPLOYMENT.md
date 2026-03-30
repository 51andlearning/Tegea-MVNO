# Deployment Guide

## Prerequisites

- Node.js 20+
- pnpm (`npm install -g pnpm` or via corepack)
- A GitHub account
- A Vercel account (free tier is fine for this project)

---

## 1. GitHub Repository Setup

```bash
# From inside the project folder:
git init
git add .
git commit -m "Initial commit: Next.js proposal site scaffold"

# Create repo on GitHub (via UI or CLI):
gh repo create telgea-mvno-proposal --private --source=. --push
```

Keep the repo **private** unless DSG explicitly wants it public.

---

## 2. Install Dependencies (local)

```bash
pnpm install
```

---

## 3. Local Development

```bash
pnpm dev
# → http://localhost:3000
```

---

## 4. Verify Build Before Deploying

```bash
pnpm build
# Must complete with 0 errors and 0 TypeScript issues
```

---

## 5. Vercel Project Setup

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repository (`telgea-mvno-proposal`)
3. Configure:

| Setting | Value |
|---------|-------|
| Framework Preset | **Next.js** (auto-detected) |
| Root Directory | `. ` (project root — leave blank) |
| Build Command | `pnpm build` |
| Install Command | `pnpm install` |
| Output Directory | *(leave blank — Next.js default)* |

4. Click **Deploy**

> **Do NOT create a `vercel.json`** unless you need custom headers, redirects, or rewrites. Next.js + Vercel auto-configure correctly without it.

---

## 6. Environment Variables

No environment variables are required for v1 (static content, no API keys).

If analytics is added later, add via the Vercel dashboard:
- **Settings → Environment Variables**
- Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` (if using GA4)

Never commit `.env.local` or `.env` to the repository.

---

## 7. Custom Domain (Optional)

1. Vercel dashboard → Project → **Settings → Domains**
2. Add your domain (e.g. `proposal.dsg.co.za`)
3. Follow DNS instructions (add CNAME or A record at your DNS provider)
4. Vercel provisions SSL automatically

---

## 8. Redeployment

Every `git push` to `main` triggers an automatic Vercel deployment.

For manual redeployment:
```bash
# Vercel CLI (optional):
pnpm dlx vercel --prod
```

Or trigger via the Vercel dashboard: **Deployments → Redeploy**.

---

## 9. Rollback

Vercel retains all previous deployments. To roll back:
- Vercel dashboard → **Deployments** → select a previous deployment → **Promote to Production**
