# Tracking Plan

## Analytics Options

### Option A — Vercel Analytics (Recommended for v1)
Built into Vercel. No third-party scripts. Enable in the Vercel dashboard under **Analytics** tab.

```bash
pnpm add @vercel/analytics
```

Add to `src/app/layout.tsx`:
```tsx
import { Analytics } from "@vercel/analytics/react";

// Inside <body>:
<Analytics />
```

### Option B — Google Analytics 4
Requires a GA4 property. Add measurement ID to `.env.local`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Install and configure via `next/script` in `layout.tsx`.

---

## Event Tracking Placeholders

The following events should be tracked once analytics is wired up:

| Event Name | Trigger | Properties |
|------------|---------|------------|
| `page_view` | On load | `page_path`, `referrer` |
| `section_view` | When section scrolls into viewport | `section_name` |
| `tab_click` | User switches commercial tabs | `tab_label` |
| `accordion_open` | User expands an accordion item | `accordion_id`, `section` |
| `cta_click` | User clicks any CTA button | `button_label`, `location` |
| `form_start` | User begins filling signature form (v2) | — |
| `form_submit` | User submits acceptance form (v2) | `party_name` |

---

## Form Submission Tracking (v2)

When a contact or acceptance form is added, track:
- `form_submit` event with `success: true/false`
- Submission timestamp
- Which party submitted (Telgea vs DSG)

---

## Conversion Goals

| Goal | Definition | Measurement |
|------|-----------|-------------|
| Proposal Viewed | Full page load + >10s dwell | Session duration + page_view |
| Commercial Section Engaged | Tabs clicked or scrolled past | `tab_click` event |
| Acceptance Initiated | Signature section viewed | `section_view: signatures` |
| Proposal Accepted | Form submitted (v2) | `form_submit` event |

---

## Privacy

- Use cookieless analytics where possible (Vercel Analytics is cookieless by default).
- If using GA4, implement a cookie consent banner before firing analytics scripts.
- No PII should be collected without explicit consent.
