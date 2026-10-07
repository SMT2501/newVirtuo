> Historical record: the inline finder was removed and the original assistant/contact launchers restored on 6 October 2026. See VISITOR_GREETING_SESSION.md for the current welcome popup. The old finder harness is no longer part of this project.

# Sales flow brief — 6 October 2026

Goal: turn passive browsing into a friendly, visitor-led website service enquiry. Primary action: request a scoped quote or open a prepared WhatsApp message.
Scope: home welcome/finder, floating guided assistant, pricing plan selection, contact handoff. Existing React, Formspree and WhatsApp only.
Assumptions: use existing published packages (not verified business facts); no payment collection, new backend, tracking or persistent visitor profiles. New conversational copy is draft for Sam's review. Online checkout requires provider, confirmed prices and payment terms from the owner.

Acceptance criteria:
- Finder: visitors can choose own project, browsing or referral; browsing can continue to work examples without giving personal details.
- Qualification: project paths ask business stage, goal and timing before a recommendation; back/restart allow corrections.
- Handoff: selected answers and suggested package appear in an editable enquiry and encoded WhatsApp draft; nothing is sent automatically.
- Packages: pricing and assistant use the same package source; selecting a plan preserves it in contact.
- Accessibility: controls have labels, visible focus and 44px minimum targets; floating guide closes with Escape and restores launcher focus.

Checklist scope: sections 1–3, 5–6, 8–11 apply to these changes. Section 4: no new server/input endpoint; provider security remains unverified. Section 7: build size checked, performance measurement pending. Sections 12–14: N/A to local implementation, no release/deployment authorized; launch gate remains required. Database/auth/uploads/DNS/ownership changes: N/A, untouched. Full-site compliance is not established by this scoped change.

## Acceptance evidence and session report

Feature | Testable criterion | Result / evidence
--- | --- | ---
Welcome | Own-project, browsing and referral choices render | PASS — component harness
Welcome | Browsing provides portfolio and share links without personal data | PASS — component harness
Qualification | Business stage, goal and timing precede recommendation | PASS — six branch tests
Qualification | Back and restart allow corrections | PASS — component harness
Handoff | WhatsApp draft includes all selected answers and suggested package | PASS — six branch tests
Handoff | Contact URL decodes to the identical draft and package | PASS — six branch tests
Handoff | Contact prefill is editable, bounded to 4,000 characters; unknown plan is ignored | Source reviewed; browser NOT TESTED
Packages | Pricing cards and guide import one package configuration | PASS — source review
Packages | Goal paths select Starter, Professional or Enterprise respectively | PASS — component harness
Accessibility | Guide controls have minimum 44px targets and focus styles | Source reviewed; browser NOT TESTED
Accessibility | Escape closes floating panel; focus returns to launcher; Tab remains within dialog | Source reviewed; keyboard NOT TESTED

**What I changed:** src/components/WebsiteFinder.tsx (visitor-led questions and quote handoff); src/components/layout/ChatBot.tsx (floating automated guide); src/components/layout/Layout.tsx (remove overlapping contact launcher); src/config/sales.ts (shared packages and handoff builders); src/pages/Home.tsx (welcome and finder CTA); src/pages/Pricing.tsx (preserve requested package); src/pages/Contact.tsx (editable query prefill and neutral budget); scripts/verify-sales-flow.mjs (branch/handoff checks); docs/ARCHITECTURE.md (actual behavior and limits).
**Acceptance criteria:** See table above. Component logic passed; browser-dependent criteria remain not tested.
**Checks run:** node scripts/verify-sales-flow.mjs PASS. Typecheck FAIL in previously documented chart.tsx and AdminWorkspace.tsx; no sales-file errors reported in either run. Browser and SSR bundles compiled successfully. npm run build ultimately failed on a Windows UNKNOWN file-open error writing dist/public/index.html. Retrying node scripts/prerender.mjs PASS; npm run verify:prerender PASS for all nine public pages. Existing Firebase chunk warning (768.54 kB) remains. git diff --check PASS for changed source. No lint script exists. Automated accessibility, responsive checks, Lighthouse, dependency audit and full security audit NOT TESTED.
**Placeholders and assumptions:** Owner chose quote first, close on WhatsApp. Existing published package facts/prices/features retained, not independently approved. New welcome/sales copy is draft for Sam approval. Existing WhatsApp number reused. No new backend, payment gateway, third-party script, persistent storage or tracking. No new placeholder business facts.
**Content conflicts or risks found:** Removed the old assistant's conflicting R5,000/R12,000/R25,000 prices and consultation promises. Other existing business claims, legal/analytics concerns and duplicated prices in SEO/FAQ/budgets remain subject to owner review. Query URLs include selected answers; no name/email/phone is added by the guide. Existing provider validation/spam controls and live recipient remain unverified.
**Needs human verification:** Approve sales copy and actual package facts; exercise on a phone/desktop and with keyboard/screen reader; verify WhatsApp number and sending the draft; verify Formspree recipient, delivery and errors. No real messages or payments were sent. No deployment performed.
**Recommended next step:** Review the local flow and resolve existing typecheck failures, then complete the project delivery checklist and Sam's Section 12 sign-off before a release.
