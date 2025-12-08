# Rishi Kathal — Modern DevOps Portfolio

This is a modern, animated Next.js + Tailwind portfolio with a working contact API (uses nodemailer).  
Replace the placeholder resume and set environment variables before deploying.

## Quick start (local)

1. Install deps:
```bash
npm install
```

2. Create a `.env.local` file (see `.env.example`) and fill SMTP credentials.

3. Run dev:
```bash
npm run dev
```

4. Build:
```bash
npm run build
npm start
```

## Vercel deployment notes

- Keep `vercel.json` in repo so Vercel uses the Next.js builder.
- Add environment variables in Vercel Project Settings (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL).
- Vercel Hobby supports serverless functions (API routes) but be mindful of SMTP provider restrictions; consider SendGrid/Mailgun or an external webhook like Formspree for high reliability.

## Files added
- `pages/` - Next.js pages including `api/contact.js` (serverless send via nodemailer).
- `public/` - og-image and resume placeholder.
- `styles/` - Tailwind globals and some custom CSS.
- `.env.example` - sample env vars.
