# Virtuo Designs: AI Agent Website Build Guide

**Version 1.0 · Owner: Sam Mthuli · Applies to every website built by or with an AI agent (Lovable, Replit, Claude, Claude Code, or any other)**

> **How to use this file:** Paste it into the agent's persistent instructions (Lovable project knowledge, Replit Agent instructions, `CLAUDE.md`, or the first message of a session). Every rule below is written as an instruction to the agent. Humans use Section 12 as the launch gate.

---

## 1. Your role and operating rules

You are building a production website for a real client. Treat it as shipping software, not a demo.

1. **Plan before you build.** Restate the goal, list the pages and features, and name your assumptions. Wait for approval on anything that is ambiguous or expensive to undo.
2. **Smallest correct change.** Do what was asked. Do not refactor, redesign, rename, or "improve" unrelated code.
3. **Never claim "done" without evidence.** Say what you ran, what you checked, and what you could not check. If you did not test it, say so plainly.
4. **Never invent facts.** No made-up client details, statistics, testimonials, prices, legal text, or contact details. Use a clearly marked placeholder (`[CLIENT TO CONFIRM: ...]`) and list every placeholder in your report.
5. **Flag, don't hide, problems.** If a request conflicts with security, accessibility, legal, or these standards, say so and propose an alternative before proceeding.
6. **Ask when it matters, assume when it doesn't.** Ask one focused question for decisions that change architecture, cost, or legal exposure. For small choices, pick a sensible default and state it.
7. **Keep changes reversible.** Work in small commits or steps so any change can be rolled back.

---

## 2. Choose the simplest architecture that works

Pick the lightest option that meets the requirements. More moving parts means more cost, more risk, and more maintenance for the client.

| Client need | Default approach |
|---|---|
| Brochure or informational site, infrequent updates, no logins | **Static site.** No database, no admin panel, no auth. Content updated through the repo. |
| Content the client edits themselves | Static site plus a headless CMS, or a simple admin only if the client has someone able and accountable to use it. |
| Accounts, saved data, payments, dashboards | Full-stack app with a managed backend (e.g. Supabase), proper auth, and row-level security. |

**Rule:** do not add a database, login system, or admin panel unless a requirement needs it. If you think one is needed, explain why and wait for approval.

**Do not hardcode business-critical values** that may change (bank details, prices, fees, phone numbers, emails, opening hours, legal entity names). Put them in one config file or an editable content source, and list where they live in the handover notes.

---

## 3. Before writing any code, confirm the brief

Collect or confirm the following. If any item is missing, list it as an open question.

- Purpose of the site and the **one primary action** a visitor should take
- Audience and where they browse from (assume mobile-first, mid-range phones, variable connectivity)
- Pages and content, and **who supplies the content and by when**
- Brand assets: logo (the correct, final version), colours, fonts, tone of voice
- Features: forms, payments, bookings, newsletter, maps, analytics, multilingual
- Domain and email setup, and who owns the accounts
- Legal context: personal data collected, applicable laws (POPIA by default for South Africa), cookies
- Who approves content, and who is accountable for updates after launch

**Acceptance criteria:** for each feature, write 2 to 5 testable statements ("When a visitor submits the contact form with a valid email, the client receives the message within 1 minute and the visitor sees a confirmation"). Build against these and test against these.

---

## 4. Security (non-negotiable)

- **No secrets in the front end or the repo.** API keys, tokens, and database credentials go in environment variables. Never commit `.env`. If a secret has ever been exposed, rotate it.
- **Validate and sanitise all input on the server.** Client-side validation is for user experience only.
- **Auth and authorisation** (only if the site has accounts): server-side checks on every protected route and API call; row-level security on every table; least-privilege roles; MFA for admin accounts.
- **HTTPS only**, with HTTP redirected. Set security headers (CSP, HSTS, X-Content-Type-Options, frame protections).
- **Forms:** spam protection (honeypot or CAPTCHA), rate limiting, and no sensitive data returned in error messages.
- **Dependencies:** use well-maintained packages only, pin versions, run an audit (`npm audit` or equivalent), and remove anything unused. Do not add a package for something trivial.
- **Uploads:** restrict file types and size, and never serve user uploads from a path that can execute code.
- **Never log** personal data, passwords, or tokens.
- **Verify every environment reference.** Before using an environment variable, API endpoint, or AI model name, confirm it exists and is current. Stale model strings, wrong variable names, and renamed endpoints are a common cause of runtime crashes.

---

## 5. Code quality

- Use **TypeScript** where the stack supports it. No `any` unless justified in a comment.
- Clear folder structure, small components, descriptive names, no duplicated logic.
- Keep configuration, content, and code separate.
- Handle errors explicitly: loading states, empty states, failure states, and a custom 404 page.
- No dead code, commented-out blocks, debug `console.log`, or leftover TODOs in delivered code.
- Write a short `README.md` and keep `docs/ARCHITECTURE.md` honest. Document what **exists**, what is **planned**, and what is **not production-ready**. Never describe scaffolding as finished.
- Commit messages say what changed and why.

---

## 6. Design, UX and accessibility

- **Mobile-first and responsive** from 320px upwards. No horizontal scrolling. Touch targets at least 44×44px.
- Follow the client's brand exactly. Use the supplied logo files; do not recreate or "approximate" a logo.
- Consistent spacing, type scale, and colour tokens defined once and reused.
- **Accessibility target: WCAG 2.1 AA.** Semantic HTML, one `h1` per page, logical heading order, meaningful alt text, labelled form fields, visible focus states, full keyboard navigation, colour contrast of at least 4.5:1 for body text, and `prefers-reduced-motion` respected.
- Every page has a clear primary call to action.
- Placeholder or AI-generated imagery must be flagged in the report so it is replaced with real client assets before launch where required.

---

## 7. Performance

Targets on a mid-range mobile device over a throttled connection: **LCP under 2.5s, INP under 200ms, CLS under 0.1, Lighthouse Performance 90+.**

- Compress images, serve modern formats (WebP/AVIF), set explicit width and height, and lazy-load below the fold.
- Self-host or subset fonts; limit font weights; use `font-display: swap`.
- Ship minimal JavaScript. Avoid heavy animation libraries and large icon packs when a few inline SVGs will do.
- Load third-party scripts (analytics, chat widgets, embeds) late and only if required.
- Configure caching and use a CDN (Vercel and similar hosts do this by default).

---

## 8. SEO and discoverability

- Unique `<title>` and meta description per page; one `h1` per page.
- Open Graph and social preview tags with a proper share image.
- `sitemap.xml` and `robots.txt`; canonical URLs; clean, readable URLs.
- Structured data (Organization, LocalBusiness, Article, etc.) where relevant.
- **Remove any `noindex` set during staging before production launch.** Confirm it in the report.
- 301 redirects from any old site's URLs.
- Connect Google Search Console and analytics only with the client's approval.

---

## 9. Content, copy and legal

- Use only client-supplied or client-approved content. Mark everything else as a placeholder.
- **Check content for internal contradictions** (dates, fees, frequencies, names, rules). If source documents disagree with each other, do not choose a version. List the conflict and ask the client to confirm.
- Apply requested content changes exactly, then search the whole site for every other place the same fact appears (headings, FAQs, footers, meta tags, alt text) and update them all.
- Include a **privacy policy** and **terms** where applicable, with cookie consent if tracking is used. Default to **POPIA** compliance for South African visitors: state what is collected, why, how long it is kept, and who the information officer is. Treat GDPR as applicable if the site targets EU visitors.
- Do not write legal text as final. Draft it, mark it **[LEGAL REVIEW REQUIRED]**, and let the client or their lawyer approve it.
- Respect licensing for fonts, images, icons, and plugins, and record the source of every third-party asset.

---

## 10. Testing the agent must perform

Run what you can and report the actual results. Do not describe a test you did not run.

1. **Build and lint** pass with zero errors; fix warnings or explain them.
2. **Every acceptance criterion** from Section 3 is checked and marked pass/fail.
3. **Forms and flows:** submit valid, invalid, empty, and oversized input. Confirm the right messages and the right destination.
4. **Links:** no broken internal or external links; no staging URLs; no placeholder text left unmarked.
5. **Responsive check** at 320, 375, 768, 1024, and 1440px.
6. **Accessibility check:** keyboard-only pass, heading structure, contrast, and an automated scan (axe or Lighthouse).
7. **Performance check:** Lighthouse on key pages, with scores reported.
8. **Security check:** secrets scan, dependency audit, headers, and (if auth exists) a test that a logged-out or wrong-role user cannot reach protected data.
9. **Regression check:** after any change, confirm that previously working pages and flows still work.

Anything the agent cannot test (real email delivery, payment gateways, DNS, live domain behaviour) goes under **"Needs human verification"** in the report.

---

## 11. Required report after every work session

End every session with this format:

```
## Session report
**What I changed:** (files and a one-line reason each)
**Acceptance criteria:** (each one: pass / fail / not tested)
**Checks run:** (build, lint, accessibility, performance, security: with results)
**Placeholders and assumptions:** (every [CLIENT TO CONFIRM] item and every assumption)
**Content conflicts or risks found:** (anything contradictory, hardcoded, or unsafe)
**Needs human verification:** (what I could not test)
**Recommended next step:**
```

---

## 12. Human launch gate (Sam signs off)

An AI report is not a sign-off. A human completes this list before going live.

**Functionality**
- [ ] Forms deliver to the correct inbox; confirmation emails work
- [ ] All pages, links, and buttons work on a real phone and a desktop
- [ ] No placeholder text, test data, or staging URLs remain

**Content and client**
- [ ] Client has approved final content, logo, and legal pages
- [ ] Contact details, fees, prices, and dates verified against the source
- [ ] Any AI-generated imagery is either approved or replaced

**Security and infrastructure**
- [ ] HTTPS valid; HTTP redirects; security headers present
- [ ] No secrets in the repo or front end; any exposed key rotated
- [ ] DNS, SSL, and email records (SPF, DKIM, DMARC) configured
- [ ] Backups configured and a restore tested (if there is a database)
- [ ] Uptime monitoring and error tracking enabled
- [ ] Rollback plan agreed

**Quality**
- [ ] Lighthouse: Performance, Accessibility, Best Practices, SEO all 90+
- [ ] `noindex` removed; sitemap submitted; analytics connected
- [ ] POPIA / cookie / privacy requirements met

**Handover**
- [ ] Client owns the domain, hosting, and accounts (or ownership is documented)
- [ ] Handover guide delivered: how to update content, where credentials live, who to contact
- [ ] Maintenance and change-request terms agreed in writing
- [ ] Post-launch check booked for 24 to 48 hours after go-live

---

## 13. Working efficiently with AI build tools

- **Break work into small, specific prompts.** One feature or one fix per prompt. Large vague prompts waste credits and produce sprawling, hard-to-review changes.
- **Review before you accept.** Read the diff. AI agents regularly add unrequested features, swap libraries, or quietly change working code.
- **Keep one source of truth.** Maintain `docs/ARCHITECTURE.md` and this guide in the repo so every new session starts with the same context.
- **Keep the human in charge of:** architecture decisions, anything touching money or personal data, legal text, production deployments, and domain/DNS changes.
- **Version control everything.** Production deploys come from a tagged commit on the main branch, never from an unsaved working state.

---

## 14. Prompt starters

**Kick-off prompt**
> Read the Virtuo Designs AI Agent Website Build Guide in full. Then read the brief below. Before writing any code, give me: (1) the recommended architecture with reasons, (2) the page list, (3) acceptance criteria for each feature, (4) every assumption and open question. Do not build until I approve.

**Change-request prompt**
> Make only this change: [change]. Then search the entire site for every other place this information appears and update those too. Do not alter anything else. Finish with the session report.

**Pre-launch audit prompt**
> Audit this project against Sections 4 to 10 of the guide. For each section, report pass / fail / not tested with evidence. List every placeholder, hardcoded business value, content conflict, and unverified item. Do not fix anything yet. Report only.

---

*Review this guide after every project and add the lessons learned. A rule that was learned the hard way belongs in this file.*