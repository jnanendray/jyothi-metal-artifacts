# Jyothi Metal Artifacts — Demo Store

## What this is
A fictional store selling handcrafted copper, brass and bronze utensils,
pooja essentials, idols and decor. Built as part of the Bviate Solutions
37-Day Vibe Coder program (Site 4).

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Deployed on Vercel (Hobby plan)

## Commands
- `npm install`
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — lint check

## Rules
- Never commit directly to `main`. Create a branch per task, open a PR, check
  the Vercel preview link, then merge.
- No secrets or real phone numbers in code. The WhatsApp number is read from
  `NEXT_PUBLIC_WHATSAPP_NUMBER`, set as an environment variable in Vercel.
- Use the shared `components/Container.tsx` for page width/padding
  (max-width 1760px, padding 16/24/32px).
- Product grid: 2 columns on mobile, 3 on larger screens.
- Any overlay/modal added later must be keyboard-accessible.
- Use click-to-chat (WhatsApp) links instead of displaying a raw phone number.
- Keep Next.js pinned to a patched version (no known CVEs) — check
  https://nextjs.org/blog before upgrading or staying on an old version.
- If a database is added later (e.g. Supabase), enable Row Level Security
  on every table.

## Process checklist (per change)
1. Create a branch.
2. Open a PR — Vercel creates a preview deployment automatically.
3. Check the preview URL, test on mobile view, run Lighthouse on
   **production** (not the preview link — previews are marked `noindex`).
4. Merge once it looks right.

## Current status
Day 7 (Roadmap): store scaffold with Hero, 6 featured products (each with a
WhatsApp enquire link), trust points, and an enquiry form. No real
cart/checkout — this is a lead-generation style demo, enquiries go via
WhatsApp or the contact form.
