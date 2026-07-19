# Virtuo Designs

A multi-page agency website for Virtuo Designs built with React, Vite, Tailwind CSS v4, and shadcn/ui components. Client-side routing via wouter.

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/consulting` — Consulting
- `/portfolio` — Portfolio
- `/pricing` — Pricing
- `/contact` — Contact
- `/faq` — FAQ

## Running locally

```bash
PORT=5000 pnpm run dev
```

## Building for production

```bash
pnpm run build
# Output: dist/public/
```

## Deployment

Configured as a **static** deployment on Replit:
- Build command: `pnpm run build`
- Public directory: `dist/public`
- `public/_redirects` contains `/* /index.html 200` to fix SPA deep-link / page-refresh routing on the host.

## User preferences

<!-- Add any user preferences here -->
