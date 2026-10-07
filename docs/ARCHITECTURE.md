# Architecture and implementation status

This document describes the repository, not a certification of the live site's configuration. Read [the build guide](AI_AGENT_WEBSITE_BUILD_GUIDE.md) and [delivery checklist](WEBSITE_DELIVERY_CHECKLIST.md) before development or release.

## Implemented in source

- React 18, TypeScript, Vite, Tailwind CSS v4 and wouter.
- Public pages: /, /about, /services, /consultations, /portfolio, /pricing, /contact, /faq and /privacy-policy.
- Dynamic routes: /portal, /admin, /admin/clients, /admin/projects and /project/:shareId.
- Public page HTML generated during build from the same React components used in the browser.
- Page metadata collected from Seo.tsx during generation; client navigation updates it after rendering.
- Browser hydration activates public pages; the original assistant and contact launcher load after hydration. Contact and chat launchers are stacked on the right; contact sits above chat, with its card above both controls.
- A separate DigitalCheckupProvider in the public Layout shows a non-modal welcome invitation after 5 seconds, once per tab session. It stores only a welcome-shown flag (memory fallback if storage fails). The invitation does not steal focus and is suppressed while an input is being edited. Home and a shared footer CTA can open or reopen the quiz.
- The seven-question digital checkup covers organisation, goal, website, workflow, follow-up, priority and timing; workflow wording adapts to the goal. Answers support back/restart/skip and are cleared downstream when an earlier choice changes. After two answers an optional contact step asks for name, email, phone and explicit unfinished-enquiry follow-up consent. Successful submission saves the partial record; subsequent answers update it serially with revision protection. Skipped contact steps do not create database records. Native dialog supplies modal behavior; Escape/close restores focus and body scroll.
- src/lib/checkup.ts contains local recommendation rules. Institutions/complex requirements receive custom scoping. Strengths, possible supporting improvements and unknowns are based on supplied answers only; no AI backend, website audit, numerical score, assumed budget or automatic lead submission is added.
- The result prepares identical encoded WhatsApp and /contact?brief=... drafts. Visitors review/send the WhatsApp message or edit the contact enquiry. Contact details can be submitted at the optional mid-quiz step; they never enter the WhatsApp/contact URL draft or browser persistent storage. No quiz analytics is added.
- The original assistant and contact widgets remain manually available; the assistant no longer opens automatically. The former inline homepage questionnaire remains removed.
- Pricing package selection uses /contact?brief=...&plan=... with an editable, length-limited enquiry and package validation. The assistant retains direct WhatsApp/email/consultation options. No payment/checkout/order backend is implemented; the owner selected quote first, close on WhatsApp.
- src/components/layout/ChatBot.tsx is an automated guide, not live human chat or generative AI.
- Route loading UI and an error boundary offer reload and direct email contact.
- Native FAQ expansion and a standard contact form POST fallback support use without JavaScript.
- Contact submissions use Formspree. Inbox destination, delivery, spam controls and service settings require verification.
- Firebase Authentication, Firestore, Storage and callable Functions support the CRM, portal and project sharing.
- Source access rules distinguish internal users, client membership, legacy ownership and project visitors.
- Functions implement share creation/revocation, PIN validation/access grants and server-side PDF signing. Presence in source does not prove deployment or security test completion.
- The project-share flow requires Firebase Anonymous sign-in. Internal access relies on users profiles with admin/staff roles; client records link to account membership.
- PDF signing records are an application signature/audit workflow; the repository does not establish certified or qualified signature status.
- Firebase analytics initialization exists in src/firebase.ts. Client approval, consent and actual production collection have not been verified.

## Build and route behavior

Commands from the repository root:

| Command | Purpose |
|---|---|
| npm run dev | Development server; defaults to port 20791 unless PORT is set |
| npm run build | Build browser assets, build the server renderer, then generate public HTML |
| npm run verify:prerender | Check generated content, metadata, assets, FAQ, form fallback and portal shell |
| npm run typecheck | TypeScript validation |
| npm run serve | Local production preview with hosting-style route handling |

The repository contains pnpm lock/workspace files; the equivalent pnpm run commands are supported. Follow the project's selected package manager and lockfile when changing dependencies.

scripts/prerender.mjs derives the public route list from public/sitemap.xml. Missing renderable pages or metadata fail the build. Generated public pages live in dist/public/<route>/index.html; / uses dist/public/index.html. dist/public/app.html remains the empty browser app shell for dynamic routes.

firebase.json serves dist/public, removes trailing slashes and rewrites unmatched routes to /app.html. Existing static page files take precedence. public/_redirects specifies the equivalent app-shell fallback for compatible static hosts. vite.config.ts mirrors public-page and app-shell selection in local production preview.

Deploy the whole public output and matching hosting configuration together. Server build files in dist/prerender are build tooling and are not hosted. .replit also defines a static deployment with the same build command and public directory; the active production provider/account has not been established by this document.

## Backend and ownership boundaries

- src/firebase.ts: Firebase public client configuration and service initialization.
- functions/index.js and functions/package.json: server functions and runtime dependencies.
- firestore.rules, firestore.indexes.json and storage.rules: database/storage controls and query indexes.
- src/pages/CRMWorkspace.tsx: internal CRM interface.
- src/pages/ClientDashboard.tsx: client portal.
- src/pages/ProjectShare.tsx: shared project access.
- src/pages/Contact.tsx: enquiry destination and submission flow.
- src/components/Seo.tsx and index.html: metadata and structured data.
- public/robots.txt and public/sitemap.xml: crawler policy and public route inventory.

Firebase browser identifiers are not interchangeable with private server credentials. Verify provider restrictions and actual authorization controls; never add service-account credentials or server secrets to browser code.

## Known limits and release verification

These are outstanding verification items, not a completed full-site audit:

- The previous development session's production build and nine-page checks passed. Services navigation and FAQ browser checks passed without hydration errors. These checks must be rerun for a later release.
- That session's typecheck failed in src/components/ui/chart.tsx and src/pages/AdminWorkspace.tsx. They were outside the rendering change; a clean typecheck remains a launch requirement.
- package.json has no lint script. No automated accessibility, full responsive, performance, dependency audit or complete security audit was claimed.
- Website package cards and assistant pricing share src/config/sales.ts. Prices/contact details elsewhere (including SEO descriptions and budgets) remain repeated; full business configuration centralization is incomplete.
- Existing statistics, testimonials, structured-data ratings, prices, founder details, addresses and legal text require client/source verification.
- Deployment of functions/rules/indexes, admin MFA, access isolation, anonymous sign-in, upload restrictions, email delivery, headers, DNS, backup restoration and monitoring are not verified here.
- firebase.json has no explicit security-header configuration. Headers on the actual live host still require inspection.
- The app-shell catch-all means unknown URLs may return HTTP 200 and render the custom not-found page. True HTTP 404 handling is not implemented by this configuration.
- Portal/shared-link indexing policies, privacy/consent behavior and tracking coverage require review.
- Search Console access, sitemap submission, live canonical behavior and production rollout of the rendering changes have not been verified.
- No consolidated completed acceptance-criteria record or Sam launch sign-off is stored here.

## Planned and not yet production-verified

No new backend, CMS, payment provider or architecture migration is approved by these documents. Centralized business content, additional verification tooling and any remediation require scoped work against the delivery checklist. Never describe these items as implemented until code and evidence exist.

## Release and handover record

Use a project-specific delivery checklist for approvals, account ownership, secret locations (never secret values), content update instructions, support contacts, maintenance terms, migration/backup recovery, rollback and the 24–48 hour review. Production deployments and DNS changes require the human decision described in the build guide.

## Sales guide verification ? 6 October 2026

Owner selected quote first, close on WhatsApp. Component harness passed six project/referral paths, three goal-based recommendations, browse/share, back/restart and exact draft transfer. Browser and SSR bundles compiled; the combined build failed during homepage output on a Windows file-open error. Public generation succeeded on retry, and verify:prerender passed all nine pages. Typecheck still fails only in the documented chart.tsx and AdminWorkspace.tsx files. No lint script. Browser responsive/accessibility, live WhatsApp sending and Formspree delivery were not tested. No deployment or launch sign-off. See SALES_FLOW_SESSION.md for acceptance evidence and limitations.

## Visitor greeting correction ? 6 October 2026

Owner requested the original assistant/contact buttons and an automatic welcome after five seconds. Implemented above; previous inline finder and its harness removed. Greeting harness passed timing, dismissal, session suppression, manual opening, welcome/menu presence and unmount cleanup. Browser build passed with existing large Firebase chunk warning. Public generation/typecheck results recorded in VISITOR_GREETING_SESSION.md; no deployment performed. Previous sales-guide verification is historical and does not describe the current visitor interface.

## Official partner strip ? 6 October 2026

Home mounts src/components/PartnersStrip.tsx in place of the former enterprise-experience block, as requested by the owner. Seven original PNGs in public/images/partners are connected using their actual filenames and partner names; image paths are URL-encoded. Originals are unchanged. The section loops right to left without a visible pause button (owner request), pauses on hover/focus, hides visual duplicates from assistive technology and uses a static wrapping list under reduced motion. Failed images retain a labelled fallback.

The owner supplied the Official partners label and originals. No additional endorsements, outbound links, third-party services or data collection were added. Missing-file blockers from earlier entries in PARTNERS_SESSION.md are now resolved. Build and asset verification results are recorded there; browser motion/layout/accessibility and human launch approval remain unverified. No deployment performed.

## Digital checkup and positioning ? 6 October 2026

User confirmed experience with PASA, WITS and DUT. Home names them as organisations worked with, separately from the official-partner logos; no additional logos, endorsement claims or project specifics are invented. Hero/introduction now address businesses and institutions rather than positioning solely around an early-stage founder. Prices remain in the shared published package source; the quiz recommends scope, not discounted or invented estimates.

scripts/verify-digital-checkup.mjs verifies local recommendation rules and component state/timing with a harness. This is not proof of native browser focus trapping or visual/responsive quality. Browser tooling previously reported no available browser. Existing chart/AdminWorkspace type errors remain; build/prerender evidence and outstanding checks are in DIGITAL_CHECKUP_SESSION.md. Previous visitor-greeting/partner reports are historical where they describe automatic assistant greetings or a visible pause button. No deployment or launch sign-off.

## Quiz lead persistence ? 6 October 2026

- Approved Home headline/purpose now explicitly describe websites, digital systems and organisational service. PASA/WITS/DUT experience remains separate from partner logos.
- The invitation uses a tab-session visit-start timestamp, so navigation before five seconds does not restart the whole delay. A new welcome flag version permits the updated journey once per tab session. Active form inputs suppress the automatic invitation.
- functions/checkup-leads.js and saveCheckupLead in functions/index.js implement a public callable: server-side size/enum/contact/consent/honeypot validation, transactional per-request-identifier throttling, randomly generated update capability stored as a hash, monotonically increasing revisions and fixed record expiry. It never returns stored contact data or provides a public read endpoint.
- checkupLeads stores contact, answers, in_progress/completed status, consent version/time, server timestamps, revision, capability hash and expiry. The browser retains the update capability only in memory. _checkupRateLimits stores hourly rotating hashed request identifiers/counters and a one-day expiry, no raw IP field.
- functions/checkup-policy.json is the shared source for the owner-confirmed 30-day record expiry and consent version. firestore.indexes.json declares TTL on both collections' expiresAt fields; TTL deletion is asynchronous and actual enablement is not yet verified.
- Firestore source rules allow internal admin/staff reads of leads and deny every browser write; rate-limit records deny all browser access. Callable server writes use Admin SDK. Deployed-rule/emulator access testing remains outstanding.
- CRMWorkspace adds Quiz enquiries via QuizLeadsPanel, showing latest saved unfinished/completed records to already-authorized internal users and filtering expired records.
- src/config/firebase.ts centralizes existing public Firebase identifiers. The quiz transport initializes a named app lazily after contact submission and imports only app/functions SDKs; it does not initialize analytics/auth or switch the user's CRM session.
- New privacy text is marked LEGAL REVIEW REQUIRED and describes partial capture, consent, Firebase, retention and asynchronous expiry. No automatic follow-up messages, marketing enrolment or production deployment is implemented by this session.

Persistence is implemented in source, not certified live: callable/rules/TTL deployment, billing/abuse protection, real save/read access and expiry cleanup need verification and Sam's launch sign-off. Tests use a transaction adapter and mocked client transport, not the production database. See QUIZ_LEADS_SESSION.md.

## Compact hero ? 6 October 2026

Home now uses the approved two-part headline: Websites and Digital Systems / That Move Organisations Forward. The viewport-sized hero uses fluid typography, compact explanation/experience copy, two main actions and reserved header/widget space. Supplementary statistics remain in a separate section below the hero. Header navigation switches to a menu below 1280px to avoid tablet overflow. Extremely short viewports or enlarged text can grow naturally rather than clip controls. Source/build checks are recorded in HERO_FIT_SESSION.md; browser geometry is not claimed without browser verification. No backend/deployment change.

## Deployment status ? 6 October 2026

Firestore rules/indexes/TTL configuration released to newvirtuo. The quiz callable was deployed after declaring Admin SDK optional Firestore/Storage packages as explicit runtime dependencies (8.7.1/7.22.0). Anonymous requests currently return platform HTTP 403; explicit public-invoker approval is pending following auto-review rejection. Hosting publication is held; latest restored-background build is verified locally, not live. See RELEASE_2026_10_06.md. Artifact cleanup was opted out without deletion. Node20 decommission warning for 30 October remains a maintenance item. No actual quiz record/save or expiry deletion has yet been verified live.

## Project rotation - 7 October 2026

FeaturedProjectPreview cycles Umnini Community Trust, Campus Marketplace and MJP Security with sequential counterclockwise exit/entry arcs and one mounted card. Rotation waits five seconds between transitions and pauses for hover, keyboard focus and offscreen/background visibility. There are no buttons or counters beneath the card. Reduced motion disables automatic cycling/rotation. CSS animation-end and a bounded timer fallback complete phases, with cleanup on unmount. Campus now uses the user-supplied campus-market.png listing screenshot; all three previews use actual screenshots. Three portfolio anchors match the cards. Desktop placement and mobile below-hero placement retained. No new outcome/endorsement claims.

## Publication verification - 7 October 2026

Explicit anonymous quiz-invocation approval was received. Public invocation was applied to only savecheckuplead using the authenticated Firebase helper after discovering the callable SDK metadata did not update the effective invoker binding. The live endpoint stored a labelled synthetic partial enquiry and accepted its completion update; that test record was deleted using its exact returned ID. Anonymous Firestore reads returned 403. Newer GitHub signing/proxy/CRM changes were merged into local source; existing authenticated PDF delivery is preserved. Merged Firestore rules publication has a separate auto-review approval pending; no bypass performed. Rotation/type checks and final hosting/GitHub publication outcomes are recorded in PROJECT_ROTATION_SESSION.md.

The hero copy and below-hero mobile project showcase share one continuous decorative background wrapper. The mobile showcase has no dividing border; desktop showcase placement is unchanged.
