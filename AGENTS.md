# Project instructions for coding agents

Read these before website development or review:
1. docs/AI_AGENT_WEBSITE_BUILD_GUIDE.md — Sam's complete website build standards.
2. docs/ARCHITECTURE.md — what this repository actually implements and its known limits.
3. docs/WEBSITE_DELIVERY_CHECKLIST.md — requirements, verification evidence and human launch gate.

Apply the guide to new features and changes. Existing architecture is not a reason to add a new backend or migrate providers. Work within the user's authorized scope; resolve routine reversible choices without requesting approval again. Ask when an unresolved decision changes architecture, cost or legal exposure.

Before coding, record the brief, assumptions and 2–5 testable acceptance criteria per feature. For a narrow fix, use the relevant criteria and record any checklist sections that are not applicable with a reason. A complete launch review must cover every section.

After changing business facts, search all pages, FAQs, metadata, structured data and configuration for conflicting copies. Never invent business claims, testimonials, contact information or legal approvals.

Keep docs/ARCHITECTURE.md current when behavior, routes, integrations or deployment change. Record actual check results and outstanding issues; do not treat generated files, scaffolding or an unchecked box as proof of production readiness. Use the session report in Section 11 of the guide.

Before release, create a project-specific copy of the delivery checklist and complete it with evidence. Sam's Section 12 launch sign-off is required by the supplied guide. Prepare and verify the complete release before requesting that final sign-off. Do not deploy or change DNS simply because a local build passes.
