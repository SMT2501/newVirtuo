export type RecordStatus = "active" | "on_hold" | "completed" | "archived";
export type InvoiceStatus = "draft" | "sent" | "viewed" | "partially_paid" | "paid" | "overdue" | "void";
export type DocumentStatus = "draft" | "awaiting_signature" | "signed" | "declined" | "expired";

export type AccountRecord = {
  id: string;
  name: string;
  industry?: string;
  status?: RecordStatus;
  primaryEmail?: string;
  primaryPhone?: string;
  createdAt?: unknown;
};

export type ClientRecord = {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  accountId?: string;
  accountAccessRole?: "client" | "project_contact" | "billing_contact";
};

export type ProjectRecord = {
  id: string;
  name: string;
  accountId?: string;
  clientId?: string;
  type?: string;
  status?: string;
  progress?: number;
  dueDate?: string;
  due?: string;
  clientVisible?: boolean;
  milestones?: { title: string; dueDate?: string; status?: string }[];
  notes?: string;
  teamMembers?: string[];
};

export type TaskRecord = {
  id: string;
  title: string;
  accountId: string;
  projectId?: string;
  status?: "todo" | "in_progress" | "blocked" | "done";
  dueDate?: string;
  clientVisible?: boolean;
  assigneeName?: string;
};

export type DocumentRecord = {
  id: string;
  name: string;
  accountId?: string;
  ownerId?: string;
  clientId?: string;
  projectId?: string;
  contentType?: string;
  storagePath?: string;
  status?: DocumentStatus | string;
  needsSignature?: boolean;
  clientVisible?: boolean;
  signedAt?: unknown;
  signedBy?: string;
  signedByName?: string;
  signedStoragePath?: string;
  signatureField?: { page?: number; x?: number; y?: number };
  recipientIds?: string[];
  version?: number;
  expiresAt?: unknown;
  lastSharedAt?: unknown;
  lastSharedBy?: string;
  declinedAt?: unknown;
  declinedBy?: string;
  declineReason?: string;
  versionHistory?: { version: number; storagePath: string; name: string; contentType?: string; supersededAt?: unknown }[];
};

export type InvoiceLineItem = {
  description: string;
  quantity: number;
  unitPrice: number;
};

export type InvoiceRecord = {
  id: string;
  accountId?: string;
  clientId?: string;
  projectId?: string;
  number?: string;
  status?: InvoiceStatus | string;
  dueDate?: string;
  description?: string;
  lineItems?: InvoiceLineItem[];
  subtotal?: number;
  taxRate?: number;
  taxAmount?: number;
  discount?: number;
  total?: number;
  amount?: number;
  currency?: string;
  clientVisible?: boolean;
};

export type ActivityRecord = {
  id: string;
  accountId: string;
  projectId?: string;
  type: string;
  message: string;
  actorName?: string;
  clientVisible?: boolean;
  createdAt?: unknown;
};

export const today = () => new Date().toISOString().slice(0, 10);

export function accountFor(profile: ClientRecord | undefined, userId: string) {
  return profile?.accountId || userId;
}

export function isPastDue(dueDate?: string) {
  return Boolean(dueDate && dueDate < today());
}

export function invoiceTotal(invoice: InvoiceRecord) {
  if (typeof invoice.total === "number") return invoice.total;
  if (typeof invoice.amount === "number") return invoice.amount;
  const subtotal = invoice.lineItems?.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0) || 0;
  const discount = invoice.discount || 0;
  const tax = (subtotal - discount) * ((invoice.taxRate || 0) / 100);
  return subtotal - discount + tax;
}

export function formatMoney(value: number, currency = "ZAR") {
  return new Intl.NumberFormat("en-ZA", { style: "currency", currency, maximumFractionDigits: 2 }).format(value || 0);
}

export function timestampLabel(value: unknown) {
  if (!value) return "Just now";
  if (typeof value === "object" && value !== null && "toDate" in value && typeof value.toDate === "function") {
    return value.toDate().toLocaleDateString("en-ZA", { day: "numeric", month: "short" });
  }
  return "Recently";
}

export function statusTone(status?: string) {
  const value = (status || "").toLowerCase();
  if (["paid", "signed", "done", "completed", "active"].includes(value)) return "success";
  if (["overdue", "blocked", "declined", "void"].includes(value)) return "danger";
  if (["awaiting_signature", "sent", "in_progress", "partially_paid", "on_hold"].includes(value)) return "warning";
  return "neutral";
}