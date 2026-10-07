# Contact launcher positioning ? 6 October 2026

Brief before coding: move contact launcher to the right, above the existing chat launcher, and align its tooltip/card. No contact destinations, chat/quiz behavior, data/backend or deployment changes.
Acceptance criteria: contact trigger right-6/bottom-24; chat remains right-6/bottom-6; contact card opens above the stacked controls and tooltip opens leftward. Check source positions and production build. Browser visual/keyboard check unavailable unless browser connected. Backend/data/security/DNS/launch checklist sections N/A to this reversible positioning fix.


## Session report
**What I changed:** WhatsAppFloat.tsx moves contact launcher/card rightward, card above the stacked controls, and hover label leftward; ARCHITECTURE.md records the stack.
**Acceptance criteria:** All three positions PASS by source inspection; actual browser appearance NOT TESTED.
**Checks run:** Production browser build PASS with existing large Firebase chunk warning; whitespace PASS. Public-page checks appended below. No unnecessary unit tests for class-only positioning. No browser is connected; visual/keyboard/Lighthouse checks NOT TESTED.
**Placeholders and assumptions:** Existing contact destinations and behavior retained; 16px separation between the standard 56px launcher circles at default spacing.
**Content conflicts or risks found:** No business facts changed. Existing broader verification/deployment blockers unchanged.
**Needs human verification:** Refresh local preview and open the contact card on phone/desktop. No new deployment performed.
**Recommended next step:** Review the button stack in local preview.

Final checks: public-page generation PASS; verify:prerender PASS for nine pages. Contact/chat positions verified in source. No hosting or IAM changes in this positioning session.
