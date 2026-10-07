# Mobile hero responsiveness
Brief: Correct excessive empty space and undersized mobile heading shown in the old/new comparison. Preserve approved copy, desktop hero, background and five-second showcase.
Assumptions: On phones, content determines hero height; the showcase follows below. Normal vertical scrolling is preferable to clipping enlarged text.
Criteria: (1) Under 768px hero is top-aligned below the header without full-viewport empty space. (2) Heading is at least 32px at normal root size and wraps naturally. (3) Buttons retain 44px targets and stack on narrow phones. (4) Desktop rules remain unchanged.
Scope: Narrow responsive CSS fix; business facts, database, security, forms, legal, DNS and deployment are not applicable. Existing full release checklist remains separate.

Session report: Added phone-only overrides for natural hero height, top alignment, 32-48px heading with natural wrapping, 16px description and narrow-phone stacked actions. Scope checks PASS at source level for 320, 360, 390, 414, 600 and 767px; these are CSS calculations, not measured browser layouts. Existing desktop rules retained. No browser visual/overflow/zoom measurement performed; real phone and enlarged-text review remains needed. No content facts or integrations changed.
Production build PASS, including nine prerendered public pages. Existing Firebase chunk-size warning remains. No deployment performed.

## Continuous hero background brief
User requests the same first-page background behind projects. Criteria: hero and mobile showcase share one background layer; no border separates them; desktop placement and rotation remain intact. Assumption: project card retains its readable surface. Backend, business content, DNS and legal checks are not applicable to this visual fix.

Continuous background session report: Shared the existing background between the hero and mobile showcase, removing the divider. Source and generated Home checks PASS for one image and both project placements. Production build PASS, including nine public pages; existing Firebase size warning remains. Phone visual review not performed. No deployment performed.
