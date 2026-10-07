import { makeCheckupLeadHandler } from "./checkup-leads.js";
import { createHash, randomBytes } from "node:crypto";
import { initializeApp } from "firebase-admin/app";
import { FieldValue, Timestamp, getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import { HttpsError, onCall } from "firebase-functions/v2/https";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

initializeApp();
const db = getFirestore();
const bucket = getStorage().bucket();
const PIN_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const ACCESS_TTL_MS = 60 * 60 * 1000;

function createPin() {
  const bytes = randomBytes(10);
  return Array.from(bytes, (byte) => PIN_ALPHABET[byte % PIN_ALPHABET.length]).join("");
}

function createShareId() {
  return randomBytes(18).toString("base64url");
}

function hashPin(shareId, pin) {
  return createHash("sha256").update(`${shareId}:${pin.trim().toUpperCase()}`).digest("hex");
}

async function requireInternalUser(uid) {
  const profile = await db.doc(`users/${uid}`).get();
  if (!profile.exists || !["admin", "staff"].includes(profile.data().role)) {
    throw new HttpsError("permission-denied", "Internal CRM access is required.");
  }
}

export const createProjectShare = onCall(async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "Sign in as an internal user first.");
  await requireInternalUser(request.auth.uid);
  const projectId = String(request.data?.projectId || "");
  if (!projectId) throw new HttpsError("invalid-argument", "A project is required.");

  const projectRef = db.doc(`projects/${projectId}`);
  const project = await projectRef.get();
  if (!project.exists) throw new HttpsError("not-found", "Project not found.");

  const shareId = createShareId();
  const pin = createPin();
  const shareVersion = Number(project.data().shareVersion || 0) + 1;
  await projectRef.update({
    shareId,
    sharePinHash: hashPin(shareId, pin),
    shareEnabled: true,
    shareVersion,
    shareUpdatedAt: FieldValue.serverTimestamp(),
    shareUpdatedBy: request.auth.uid,
  });
  return { shareId, pin, shareVersion };
});

export const revokeProjectShare = onCall(async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "Sign in as an internal user first.");
  await requireInternalUser(request.auth.uid);
  const projectId = String(request.data?.projectId || "");
  if (!projectId) throw new HttpsError("invalid-argument", "A project is required.");
  await db.doc(`projects/${projectId}`).update({
    shareEnabled: false,
    shareVersion: FieldValue.increment(1),
    shareUpdatedAt: FieldValue.serverTimestamp(),
    shareUpdatedBy: request.auth.uid,
  });
  return { revoked: true };
});

export const unlockProjectShare = onCall(async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "A temporary project session is required.");
  const shareId = String(request.data?.shareId || "");
  const pin = String(request.data?.pin || "");
  if (!shareId || pin.length < 8) throw new HttpsError("invalid-argument", "Enter the project PIN.");

  const projects = await db.collection("projects").where("shareId", "==", shareId).limit(1).get();
  if (projects.empty) throw new HttpsError("not-found", "This project link is invalid.");
  const project = projects.docs[0];
  const data = project.data();
  if (!data.shareEnabled || hashPin(shareId, pin) !== data.sharePinHash) {
    throw new HttpsError("permission-denied", "The project PIN is incorrect or sharing is disabled.");
  }

  const expiresAt = Timestamp.fromMillis(Date.now() + ACCESS_TTL_MS);
  await project.ref.collection("access").doc(request.auth.uid).set({
    shareVersion: Number(data.shareVersion || 0),
    expiresAt,
    unlockedAt: FieldValue.serverTimestamp(),
  });
  return { projectId: project.id, expiresAt: expiresAt.toMillis() };
});

async function requireActiveProjectAccess(projectId, uid) {
  const [project, access] = await Promise.all([
    db.doc(`projects/${projectId}`).get(),
    db.doc(`projects/${projectId}/access/${uid}`).get(),
  ]);
  if (!project.exists || !access.exists || !project.data().shareEnabled
    || access.data().expiresAt.toMillis() <= Date.now()
    || access.data().shareVersion !== project.data().shareVersion) {
    throw new HttpsError("permission-denied", "Your project access has expired. Re-enter the project PIN.");
  }
}

async function requireDocumentRecipient(data, uid) {
  const membership = await db.doc(`accounts/${data.accountId}/members/${uid}`).get();
  if (!membership.exists || !Array.isArray(data.recipientIds) || !data.recipientIds.includes(uid)) {
    throw new HttpsError("permission-denied", "This document was not shared with your client account.");
  }
}

function timestampMillis(value) {
  return value?.toMillis?.() || null;
}

export const signDocument = onCall(async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "A temporary project session is required.");
  const documentId = String(request.data?.documentId || "");
  const signerName = String(request.data?.signerName || "").trim();
  if (!documentId || signerName.length < 2 || signerName.length > 120) {
    throw new HttpsError("invalid-argument", "Enter your full name to sign this document.");
  }

  const documentRef = db.doc(`documents/${documentId}`);
  const record = await documentRef.get();
  if (!record.exists) throw new HttpsError("not-found", "Document not found.");
  const data = record.data();
  if (data.status !== "awaiting_signature" || data.needsSignature !== true
    || data.clientVisible !== true || data.contentType !== "application/pdf" || !data.storagePath) {
    throw new HttpsError("failed-precondition", "This document is not available for signing.");
  }
  if (data.expiresAt && data.expiresAt.toMillis() <= Date.now()) {
    throw new HttpsError("failed-precondition", "This signature request has expired.");
  }
  let authorizationMode = "recipient";
  try {
    await requireDocumentRecipient(data, request.auth.uid);
  } catch (recipientError) {
    if (!data.projectId) throw recipientError;
    await requireActiveProjectAccess(data.projectId, request.auth.uid);
    authorizationMode = "project";
  }

  const [source] = await bucket.file(data.storagePath).download();
  const pdf = await PDFDocument.load(source);
  const pages = pdf.getPages();
  const field = data.signatureField || {};
  const page = pages[Math.min(Math.max(field.page || 0, 0), pages.length - 1)];
  const { width } = page.getSize();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const x = field.x ?? 52;
  const y = field.y ?? 58;
  page.drawRectangle({ x, y, width: Math.min(260, width - x - 24), height: 54, color: rgb(0.98, 0.95, 0.9), borderColor: rgb(0.78, 0.38, 0.08), borderWidth: 1 });
  page.drawText(`Signed electronically by ${signerName}`, { x: x + 10, y: y + 31, size: 12, font, color: rgb(0.12, 0.1, 0.08) });
  page.drawText(`Virtuo client portal · ${new Date().toLocaleString("en-ZA")}`, { x: x + 10, y: y + 14, size: 8, font, color: rgb(0.35, 0.32, 0.28) });

  const signedPath = `accounts/${data.accountId}/documents/${documentId}/signed-${request.auth.uid}.pdf`;
  await bucket.file(signedPath).save(Buffer.from(await pdf.save()), { contentType: "application/pdf", resumable: false });
  await db.runTransaction(async (transaction) => {
    const current = await transaction.get(documentRef);
    const latest = current.data();
    if (!current.exists || latest.status !== "awaiting_signature"
      || latest.storagePath !== data.storagePath
      || latest.projectId !== data.projectId
      || latest.contentType !== data.contentType
      || latest.needsSignature !== true
      || JSON.stringify(latest.signatureField || {}) !== JSON.stringify(data.signatureField || {})
      || timestampMillis(latest.expiresAt) !== timestampMillis(data.expiresAt)) {
      throw new HttpsError("failed-precondition", "This signature request changed while it was being completed. Please review the latest version.");
    }
    if (authorizationMode === "project") {
      const [project, access] = await Promise.all([
        transaction.get(db.doc(`projects/${data.projectId}`)),
        transaction.get(db.doc(`projects/${data.projectId}/access/${request.auth.uid}`)),
      ]);
      if (!project.exists || !access.exists || !project.data().shareEnabled
        || timestampMillis(access.data().expiresAt) <= Date.now()
        || access.data().shareVersion !== project.data().shareVersion) {
        throw new HttpsError("permission-denied", "Your project access has expired. Re-enter the project PIN.");
      }
    } else {
      const membership = await transaction.get(db.doc(`accounts/${data.accountId}/members/${request.auth.uid}`));
      if (!membership.exists || !Array.isArray(latest.recipientIds) || !latest.recipientIds.includes(request.auth.uid)) {
        throw new HttpsError("permission-denied", "This document is no longer shared with your client account.");
      }
    }
    transaction.update(documentRef, {
      status: "signed",
      signedAt: FieldValue.serverTimestamp(),
      signedBy: request.auth.uid,
      signedByName: signerName,
      signedStoragePath: signedPath,
    });
    transaction.set(db.collection("documentEvents").doc(), {
      accountId: data.accountId,
      documentId,
      eventType: "signed",
      actorId: request.auth.uid,
      createdAt: FieldValue.serverTimestamp(),
    });
  });
  return { signedPath };
});
export const saveCheckupLead = onCall({ invoker: "public", timeoutSeconds: 30, maxInstances: 5 }, makeCheckupLeadHandler(db));
