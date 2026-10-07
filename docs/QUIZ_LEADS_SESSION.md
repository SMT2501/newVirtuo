# Quiz lead capture — 6 October 2026

Brief before coding: apply approved headline/purpose copy; retain five-second invitation measured across public-page navigation; insert voluntary contact capture after two answers; save the partial quiz on explicit consent and subsequent answers to existing Firestore; expose captured leads only to internal admin/staff. No new provider/auth migration or automated outbound messages. Existing Functions deployment required; no production deployment authorized.
Acceptance criteria: (1) headline explicitly says websites/digital systems and preserves PASA/WITS/DUT experience; (2) invitation uses elapsed visit time and session dismissal; (3) contact save is explicit, validated and consented, saves the first two answers before continuing, can continue without sharing; (4) later answers and completion update one record, with visible errors/retry and no false success; (5) public callers cannot read leads or change someone else's lead, server validates values/size and throttles submissions; (6) internal CRM can inspect unfinished/completed leads; (7) contact details never enter query URLs, browser persistent storage, or application logs.
Retention is an open owner decision (async question sent). Prepare server policy with no default retention until confirmed; no legal approval invented. Privacy draft marked LEGAL REVIEW REQUIRED. Checklist scope: security/input/access/UI/forms/architecture/legal/test changes apply. Payment, DNS and provider migrations N/A. Production persistence and TTL/deployment need human verification and Sam launch sign-off.

Owner selected 30-day quiz enquiry retention. Shared functions/checkup-policy.json now contains 30; privacy text is a draft, not legal approval. Callable, rules and TTL source are prepared, not deployed.


## Session report
**What I changed:** Home.tsx applies approved concrete headline/purpose; DigitalCheckup.tsx adds the optional contact/consent checkpoint after two answers, queued progress saves, failure/retry states and visit-wide timer; checkup-leads.ts adds lazy callable transport; config/firebase.ts centralizes existing public configuration without triggering analytics for quiz submissions; functions/checkup-leads.js/index.js add validated, throttled capability-based writes; Firestore rules/TTL configuration protect and expire records; QuizLeadsPanel/CRMWorkspace expose saved enquiries to internal users; PrivacyPolicy adds a marked draft; README/architecture explain deployment boundaries.
**Acceptance criteria:** Contact capture, initial two-answer save, subsequent updates, failure staying on contact step, optional no-share route and five-second navigation timing PASS in component harness. Server validation, consent, malicious/oversized/enum/honeypot input, wrong capability, revisions, expiry and throttling PASS in local transaction adapter. Public/internal Firestore rule source reviewed; emulator/live authorization tests NOT TESTED. Generated-page/headline checks appended below. Actual persistence/TTL and browser layout/keyboard NOT TESTED.
**Checks run:** Quiz harness PASS; server harness PASS after correcting a test request containing an unsupported response-only key. Functions syntax PASS. Typecheck FAIL in existing chart/AdminWorkspace only; no changed-file errors. Source whitespace PASS. Build/prerender final results appended below. No lint script. Automated accessibility, Lighthouse, dependency audit/full security audit NOT TESTED; no connected browser available in prior/current session context.
**Placeholders and assumptions:** Owner selected 30-day enquiry retention; single source is functions/checkup-policy.json. Backend is existing Firebase, no new provider/accounts/auth migration. Public update credentials stay in memory and hashed at rest. Contact submission is voluntary and explicit, includes unfinished-quiz follow-up permission, not marketing. New privacy text remains LEGAL REVIEW REQUIRED. Expiry deletion is asynchronous and must be enabled; no immediate-delete promise. Approved organisational experience retained.
**Content conflicts or risks found:** Earlier claims that all quiz answers stay only in memory/no contact is collected before results are superseded. Production function/rules/TTL/billing/abuse controls remain unverified. Browser leaving the page can interrupt an in-flight update; the acknowledged initial partial record remains saved. No identifying contact data is added to query drafts, browser persistent storage or application logs. Existing analytics/privacy and unrelated site verification concerns remain.
**Needs human verification:** Review privacy/consent and public endpoint abuse controls/billing, deploy callable/rules/TTL under the project's required sign-off, test a consented enquiry in an authorized staging environment, verify staff/client/public access isolation, expiry cleanup and CRM view, then browser/real-device tests. No production records or messages were created by tests; no deployment or DNS change performed.
**Recommended next step:** Review the concrete code and local flow. Complete project-specific delivery evidence and Sam's Section 12 launch approval before production rollout; actual database persistence cannot work until the new Firebase components are deployed.


Feature | Acceptance scenario | Status / evidence
--- | --- | ---
Positioning | Headline names websites/digital systems and institution-friendly benefit | Source PASS; generated check pending
Positioning | Purpose statement and PASA/WITS/DUT experience preserved | Source PASS
Invitation | Shows at five seconds total across public navigation | PASS component clock test
Invitation | Manual opening/dismissal suppresses repeat | PASS component harness
Contact | Two selected answers precede explicit name/email/consent submission | PASS component harness
Contact | Save failure does not advance; pending inputs disabled | PASS component harness
Contact | Skip creates no enquiry and still allows results | PASS source/harness route
Persistence | Initial partial record survives independently of completion | PASS server transaction adapter
Persistence | Later answer snapshots update same capability-owned record with revision protection | PASS adapter/harness
Persistence | Full answers mark completed; editing earlier answers resets stored progress | PASS server adapter
Access/abuse | Bad contact/enums/honeypot/capability rejected; submissions throttled | PASS server adapter
Access/abuse | Public reads/writes denied; admin/staff can read | Source reviewed; emulator/live NOT TESTED
Retention/CRM | Expiry fixed 30 days from creation and expired updates denied | PASS server adapter
Retention/CRM | TTL fields configured; CRM shows unfinished/completed and hides expired records | Source reviewed; actual deployment/cleanup/UI NOT TESTED

Additional transport check PASS: actual client helper tested with SDK stubs, removing response-only fields from later update requests and rejecting responses without saved confirmation. Contact inputs are disabled until the submission resolves. Source CLI/rules-unit-testing tools are unavailable, so deployed-rule/emulator tests remain NOT TESTED.

Content consistency check: the privacy notice now distinguishes Formspree contact forms from Firebase quiz enquiries, lists quiz answers/consent and Firebase processing, and marks the changed legal-basis section for review. The existing information-rights response period is a separate fact from quiz retention and is unchanged.

Final verification: browser build PASS (321.14kB main JS, 102.85kB gzip; existing Firebase >500kB warning), server renderer/public generation PASS, verify:prerender PASS on nine public pages, generated copy/privacy/shared policy/TTL-source assertions PASS. Functions syntax and source whitespace PASS. All three local harnesses passed. Typecheck remains FAIL only in existing chart/AdminWorkspace. Browser inventory rechecked and empty. No callable/rules/TTL/hosting deployment, no live persistence/access/expiry test and no production records/messages.


## Save failure investigation ? 6 October 2026
**What I changed:** No application/rule changes; recorded a read-only endpoint diagnosis.
**Acceptance criteria:** Confirm client path/caller and compare with rules PASS by source inspection; confirm live configured endpoint response PASS, GET returns HTTP 404.
**Checks run:** Client uses httpsCallable(getFunctions(named app), saveCheckupLead), project newvirtuo, default us-central1. Server export uses Firebase Admin Firestore. Read-only GET to https://us-central1-newvirtuo.cloudfunctions.net/saveCheckupLead returned 404 outside the sandbox (sandbox proxy could not connect). No contact details, quiz payload, records or messages sent.
**Placeholders and assumptions:** 404 suggests missing deployment at this endpoint or a different deployed region/project; it is not proof about every other endpoint. No authenticated function-list access available.
**Content conflicts or risks found:** Public Firestore writes remain deliberately denied; loosening them would not repair the callable endpoint. Rules apply to the internal CRM read path; server Admin SDK writes use IAM rather than client security rules.
**Needs human verification:** Confirm deployment of saveCheckupLead in newvirtuo/us-central1, or confirm actual region and align client; then authorized staging save/access/expiry tests. No deployment performed.
**Recommended next step:** Deploy/verify the configured callable under the required project launch gate, leaving lead records private; apply matching rules/TTL for CRM access/retention as part of approved rollout.
