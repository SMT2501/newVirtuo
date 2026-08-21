# Virtuo Designs

A multi-page agency website and account-scoped client operations CRM built with React, Vite, Tailwind CSS v4, Firebase Authentication, Firestore, and Firebase Storage. Client-side routing uses wouter.

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/consulting` — Consulting
- `/portfolio` — Portfolio
- `/pricing` — Pricing
- `/contact` — Contact
- `/faq` — FAQ
- `/admin` — Internal CRM workspace for accounts, contacts, projects, tasks, documents, invoices, and activity
- `/portal` — Client portal for account-scoped projects, documents, signatures, invoices, tasks, and shared activity

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

## CRM data and Firebase setup

The CRM adds these Firestore collections:

- `accounts` and `accounts/{accountId}/members` — client organization records and access membership
- `projects`, `tasks`, `documents`, `invoices`, and `activities` — account-linked operational records

Internal users require a `users/{uid}` profile with `role: "admin"` or `role: "staff"`. Client logins are linked to an account by setting `users/{uid}.accountId` and adding an `accounts/{accountId}/members/{uid}` document. Existing legacy records that use `clientId` or `ownerId` remain readable by that client.

Before using the new CRM with real client records, deploy the included access controls to the configured Firebase project:

```bash
firebase deploy --only firestore:rules,firestore:indexes,storage
```

The document-signing flow accepts PDFs. It embeds the signer name and timestamp in a new signed PDF, stores that copy in Firebase Storage, and saves the signature audit event in Firestore. It is an in-platform electronic signature record, not a certified or qualified e-signature service.

## User preferences

<!-- Add any user preferences here -->
