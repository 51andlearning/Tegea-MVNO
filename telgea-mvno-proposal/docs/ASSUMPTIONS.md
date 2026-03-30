# Assumptions

## Data & Content

- All content is sourced from the static Word proposal document (`TELGEA MVNE MVNO Proposal 20260325.docx`). No live data feeds or CMS integrations are in scope at launch.
- Pricing figures (R250k setup, R75k/month, R15/subscriber, etc.) are directional and subject to change. The site does not calculate or validate these figures dynamically.
- No internal DSG systems (billing, CRM, subscriber databases) are connected or accessible from this site.

## Strategy

- This is a sales/proposal tool, not an operational platform. It presents terms; it does not enforce or process them.
- The commercial model shown (ARPU example, cost breakdown) is illustrative. Final figures require validation by both parties post-signature.

## Access & Security

- The site is publicly accessible via URL. There is no authentication or password protection at launch.
- If confidentiality is required, DSG should distribute the URL selectively and/or implement Vercel password protection.

## Legal

- This site does not constitute a legally binding agreement. Binding commitment requires a separately executed contract.
- The proposal validity period (30 days) is informational only; the site does not auto-expire or enforce this deadline.

## Technical

- No backend, database, or server-side logic is required at launch. The site is fully static/SSG.
- Form submission (if added) will require a third-party service (e.g. Resend, Formspree) — not in scope for v1.
- Analytics require a Google Analytics property or Vercel Analytics to be set up post-deployment.
