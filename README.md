# Mohdlana Preschool — Website

A high-end marketing and admissions website for Mohdlana Preschool (Accra, Ghana), built with
**Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**, ready to deploy on **Vercel** from
**GitHub**.

## Design direction

- **Palette** — deep teal (`#1C8C99`), sunshine yellow (`#F4B400`) and bloom pink (`#D42768`), pulled
  from the school's own badge logo, set against an ink (`#0E2B33`) and barely-tinted paper (`#F6FAF9`)
  base — warmer and more premium than the school's everyday brand colors, so photography of the
  children stays the star.
- **Type** — Fraunces (display) paired with Inter (body) and IBM Plex Mono (labels/eyebrows).
- **Signature motif** — the `Stamp` component, a dashed-circle "passport stamp" that echoes the
  school's own circular badge logo and reflects the Heritage & Culture Day storyline (children stepping
  into other cultures like stamps in a passport).

## Getting started locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying via GitHub + Vercel

1. Create a new GitHub repository and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Mohdlana Preschool website"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the GitHub repository, and click **Deploy** —
   Vercel auto-detects Next.js, no configuration needed.
3. Add a custom domain under **Project → Settings → Domains** once you're ready to go live.

## Structure

```
app/                 Routes (App Router): home, about, programs, global-citizens,
                      admissions, contact, plus API routes for forms
components/          Reusable UI: Navbar, Footer, Hero, Stamp, ProgramCard, Gallery,
                      AdmissionsForm, ContactForm, FAQAccordion, Testimonials…
lib/data.ts          All editable site content (programs, stats, FAQs, testimonials,
                      team, gallery) — edit this file to update copy without touching UI
public/images/       Site photography (Heritage & Culture Day, logo)
```

To update copy, prices, programs or FAQs, edit **`lib/data.ts`** — every page pulls from it.

## Forms

Both `AdmissionsForm` and `ContactForm` post to API routes (`/api/admissions`, `/api/contact`,
`/api/newsletter`) that currently `console.log` submissions. Before launch, connect one of:

- **Email** — [Resend](https://resend.com) (recommended for Vercel) or Nodemailer + SMTP
- **Spreadsheet/CRM** — Google Sheets via a service account, or Airtable
- **Automation** — a Zapier/Make.com webhook that fans out to email + WhatsApp + a sheet in one step
- **Database** — Vercel Postgres or Supabase, if you want enquiries queryable in an admin view

Add credentials as environment variables in **Vercel → Project → Settings → Environment Variables**
(never commit secrets to git).

## Feature roadmap

Implemented in this build:

- Fully responsive, accessible marketing site (keyboard focus states, reduced-motion support, alt text)
- Programs (Creche, Nursery, Kindergarten, Summer School) with anchors and detail sections
- Admissions enquiry form with validation and success state
- General contact form + embedded map
- Heritage & Culture Day gallery with keyboard-navigable lightbox
- Newsletter signup
- Floating WhatsApp quick-contact button
- SEO metadata, Open Graph tags, sitemap.xml and robots.txt
- Reusable content file (`lib/data.ts`) so non-developers can update copy via a simple pull request

Ready to layer on when you're ready to build further:

- **Parent Portal** — secure login (NextAuth.js) for daily reports, invoices and photo albums, backed
  by Supabase/Postgres
- **Online Fee Payments** — Paystack or Flutterwave integration (both support Ghana Mobile Money & cards)
- **Events & Term Calendar** — a CMS-driven calendar (Sanity.io or Notion-as-CMS) synced to Google Calendar
- **News & Blog** — a `/news` section for classroom updates, powered by MDX or a headless CMS
- **Staff Directory** — individual profile pages once photography/bios are available
- **Multi-language toggle** — English / French, given the French vocabulary already in the curriculum
- **Live chat** — Crisp or Intercom widget for instant parent support during office hours
- **Photo/Video Gallery expansion** — a full media library beyond Heritage Day, with albums per term
- **Alumni & Testimonials wall** — a growing, filterable wall of parent and alumni stories
- **Virtual tour** — 360° classroom photography or a short video walkthrough embedded on Admissions
- **Analytics** — Vercel Analytics + a cookie-consent banner once traffic goes live

## Content notes

Copy referencing tuition figures, specific staff names/photos, and Summer School dates beyond the
2026 session should be verified with the school before launch — this build uses only what is publicly
confirmed (Instagram bio, admissions posts) plus clearly-labeled illustrative placeholders (team roles,
testimonials) that should be swapped for real names, photos and quotes once available.
