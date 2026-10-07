---
name: Secure document PDF delivery
description: Why document signing pages receive source and signed PDFs through Firebase Functions.
---

Document signing pages should retrieve source and signed PDFs through the authenticated document-delivery Function. The client sends its temporary Firebase ID token in an authorization header; the Function rechecks the document-scoped access grant, document availability, expiry, and share version before streaming the file.

**Why:** Direct Firebase Storage reads returned access-denied responses for otherwise valid anonymous signing sessions. The server-side delivery path was confirmed to support previewing and completing a signature without exposing a Storage or signed bearer URL.

**How to apply:** Keep signing-link PDF delivery on the authenticated proxy, and preserve its document-only authorization checks when changing signing, expiry, revocation, or PDF download behavior.