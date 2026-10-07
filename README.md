# Virtuo Designs

Agency website and Firebase client operations CRM built with React, TypeScript, Vite and Tailwind CSS.

## Development standards

Start with these documents for every website project or change:

- [AI Agent Website Build Guide](docs/AI_AGENT_WEBSITE_BUILD_GUIDE.md) — Sam Mthuli's original Version 1.0 guide, preserved as supplied.
- [Website delivery checklist](docs/WEBSITE_DELIVERY_CHECKLIST.md) — requirements, acceptance criteria, evidence, human sign-off and post-launch verification.
- [Architecture and status](docs/ARCHITECTURE.md) — actual routes, integrations, deployment behavior and outstanding verification.
- [Agent instructions](AGENTS.md) — makes the standards discoverable to coding agents working in this repository.

Copy the delivery checklist for each project/release. Record PASS, FAIL, NOT TESTED or N/A with evidence. The template is not a completed audit, and a successful build does not replace Sam's launch sign-off.

## Local development and production checks

Run from the repository root:

npm run dev
npm run build
npm run verify:prerender
npm run typecheck
npm run serve

The default local port is 20791; PORT can override it. The repository contains pnpm lock/workspace files; equivalent pnpm run commands are available.

## Public rendering and deployment

The build generates all public pages listed in public/sitemap.xml from the existing React components, with page content and page-specific SEO metadata. The browser hydrates those pages for interaction. FAQs and contact form submission have native HTML fallbacks.

Deploy the entire dist/public directory with the matching hosting configuration. Public page files take precedence; portal, admin and project routes use the separate app.html shell. Local production preview mirrors that behavior.

See the architecture document for Firebase prerequisites and known limits. After an approved deployment, verify live page source, metadata, main enquiry flow and Search Console rendering. Record everything unavailable under Needs human verification.


### Quiz enquiry storage (local implementation; deployment pending)

The optional contact step saves a consented partial quiz through the existing Firebase callable `saveCheckupLead`; later answers update the same record. Internal admin/staff can review it in CRM > Quiz enquiries. No automatic messages are sent.

- Source: functions/checkup-leads.js, functions/checkup-policy.json (owner-selected 30 days), src/lib/checkup-leads.ts, src/components/DigitalCheckup.tsx.
- Collections: checkupLeads and private _checkupRateLimits; source rules deny all direct browser writes and public reads.
- Deploy the callable, matching Firestore rules and TTL field configuration together in an approved release. TTL cleanup is asynchronous; verify enablement and actual expiry behavior. Existing production provider/account/billing and App Check/abuse protection must be reviewed before exposing this public endpoint.
- Run node scripts/verify-checkup-leads.mjs and node scripts/verify-digital-checkup.mjs. These use local adapters/mocks, not the live database. Run build/public generation and existing prerender checks as well.
- New privacy wording is LEGAL REVIEW REQUIRED. Sam's launch gate still applies. Do not call the live database save production-ready until consent, delivery/access tests, TTL and deployment are verified.
