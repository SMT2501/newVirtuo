# Visitor greeting correction — 6 October 2026

Brief: restore the original contact launcher and assistant; greet visitors automatically after five seconds instead of adding a homepage questionnaire.
Assumptions: greet once per tab session; dismissal stays respected across page navigation. The greeting is a non-modal chat panel and does not steal keyboard focus. Existing contact destinations and approved quote-first approach retained.
Acceptance criteria:
- Greeting: starts closed and opens after 5,000ms; pending timer is cancelled on unmount.
- Greeting: manual opening or previous greeting prevents another automatic opening during the same tab session.
- Assistant: original services/work/contact options remain available; welcome offers website, browsing and referral paths.
- Contact: original contact launcher is visible alongside the assistant, with no launcher overlap.
- Home: original Start Your Project CTA returns and the inline questionnaire is removed.
Checklist: narrow UI correction; architecture/docs, relevant functionality and build checks apply. Payments, backend permissions, deployment, DNS and launch gate N/A because unchanged/not releasing. Full accessibility/performance/security audit remains outside this narrow correction and unverified.


## Session report
**What I changed:** ChatBot.tsx restores the original assistant menu, adds welcome/browsing/referral choices and a 5,000ms session-aware greeting; Layout.tsx restores the contact widget; WhatsAppFloat.tsx places contact on the left, improves its close target and disables ping for reduced motion; Home.tsx removes the inline finder and restores the original project CTA. Removed unused WebsiteFinder.tsx and its old harness. Added scripts/verify-visitor-greeting.mjs; updated architecture and marked the earlier sales report historical.
**Acceptance criteria:** Greeting timing, session suppression, dismissal, manual opening and cleanup PASS in component harness. Assistant welcome choices and original services menu PASS in harness; other original actions restored by source review, real-browser action checks NOT TESTED. Contact launcher mounting and distinct left/right placement PASS by source review; responsive overlap NOT TESTED in browser. Home finder removal and original CTA PASS by source review and generated-page inspection.
**Checks run:** Browser build PASS; public-page generation PASS. Greeting harness PASS. Source diff whitespace check PASS. Public-page regression/typecheck final results appended below. Automated accessibility, responsive widths, Lighthouse, dependency audit and complete security review NOT TESTED. Existing Firebase chunk >500kB warning remains; no lint script exists.
**Placeholders and assumptions:** Once per tab session, reset when that session ends. Storage failure does not prevent chat. Five seconds starts when the hydrated assistant mounts. New greeting copy is draft for owner review. Original assistant content and existing contact destinations retained, except conflicting assistant prices replaced with the shared published packages.
**Content conflicts or risks found:** Existing consultation/business claims require owner verification. Existing animated chat and delayed message behavior remain; full reduced-motion/focus/contrast audit not performed. No payment, backend, new tracking or personal-data persistence added; session flag stores only whether the welcome appeared.
**Needs human verification:** Review the greeting on a real phone/desktop and with keyboard/screen reader; verify contact/WhatsApp/email/booking destinations and real delivery. No messages sent or deployment performed.
**Recommended next step:** Try the popup locally; complete the release checklist and Sam sign-off before publishing.

Additional acceptance criteria (recorded for the narrow restored features): contact opens its original methods and chat retains its original pricing/work/contact paths; visitor can close chat with its close button or Escape and manually reopen via the launcher. Source reviewed; live UI behavior NOT TESTED except open/close in component harness.

Final checks: verify:prerender PASS on nine pages; generated homepage CTA/removal assertions PASS. Typecheck FAIL only in existing chart.tsx and AdminWorkspace.tsx errors; no errors in changed files. No release/deployment.
