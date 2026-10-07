# Circular favicon change

Brief: Circle crop the current Virtuo favicon, preserving the existing logo.
Assumption: Use the same logo image inside a circular SVG clip with transparent corners.
Acceptance criteria: (1) The favicon references the circular SVG. (2) The embedded image is byte-for-byte the existing logo. (3) The production build contains the icon and correct HTML reference.
Scope: Narrow visual asset change. Backend, consent, business content, routes, DNS and integrations are not applicable; no changes to them.

Session report: Replaced the unused placeholder favicon.svg with the original Virtuo logo embedded inside a circular clip; updated index.html to reference it. Acceptance criteria PASS: exact source bytes, circular clipping and production asset/reference verified. npm run build PASS, including nine prerendered pages; existing large Firebase bundle warning remains. No browser visual check available. No deployment performed in this narrow change; merged Firestore permission remains pending from the earlier release. Human check: browser favicon cache may require a hard refresh.
