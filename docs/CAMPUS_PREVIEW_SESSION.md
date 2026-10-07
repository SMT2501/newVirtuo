# Campus preview replacement
Brief: Use supplied public/images/campus-market.png in the rotating hero.
Criteria: screenshot path and real dimensions match asset; descriptive screenshot alt text replaces logo wording; identity badge removed; existing rotation remains unchanged.
Scope: Single asset reference change. Backend, business facts, legal, routes and DNS not applicable.
Session report: Connected the original 1351x682 user screenshot unchanged, replaced alt text and removed the identity badge. Rotation/asset/anchor harness PASS. No browser visual check or deployment performed for this change. Original partner-strip logo remains in its intended location.
Release brief: User explicitly requests Firebase Hosting publication. Acceptance: production build and public-page verification pass; Firebase newvirtuo Hosting release succeeds; live screenshot bytes and current bundle match the prepared release. Backend, rules, IAM and DNS remain outside this release scope. Existing full release checklist and outstanding real-device checks apply.
Publication result: production build and nine-page verification PASS. Firebase Hosting newvirtuo release PASS for commit 0d011c85, tag release-2026-10-07-campus. Live virt uo domain checked using its actual configured URL: current Home bundle references and exact Campus screenshot bytes PASS. No rules, IAM, Functions, Storage or DNS mutation.
