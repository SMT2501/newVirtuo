import { QuizLeadsPanel } from "@/components/crm/QuizLeadsPanel";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc, Timestamp,
} from "firebase/firestore";
import { onAuthStateChanged, sendPasswordResetEmail, signOut, User } from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { getBytes, ref, uploadBytes } from "firebase/storage";
import {
  Bell,
  Ban,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  CloudUpload,
  FileCheck2,
  FileText,
  FolderKanban,
  LayoutDashboard,
  Link2,
  Lock,
  LoaderCircle,
  LogOut,
  MoreHorizontal,
  Pencil,
  Plus,
  RefreshCw,
  Search,
  Settings,
  ShieldAlert,
  Users,
  X,
} from "lucide-react";
import { Link } from "wouter";
import { auth, createClientAuthAccount, db, functions, storage } from "@/firebase";
import { PortalAuth } from "@/components/portal/PortalAuth";
import {
  type AccountRecord,
  type ActivityRecord,
  type ClientRecord,
  type DocumentRecord,
  type InvoiceRecord,
  type InvoiceStatus,
  type ProjectRecord,
  type TaskRecord,
  formatMoney,
  invoiceTotal,
  isPastDue,
  statusTone,
  timestampLabel,
} from "@/lib/crm";
import { downloadInvoicePdf, getPdfPageSize } from "@/lib/pdf";

type View = "Overview" | "Accounts" | "Projects" | "Tasks" | "Documents" | "Invoices" | "Quiz enquiries" | "Settings";
type ModalKind = "account" | "contact" | "project" | "task" | "document" | "invoice" | "communication" | "share" | "documentShare" | null;
type ProjectForm = { accountId: string; name: string; type: string; status: string; progress: string; dueDate: string; milestones: string; notes: string; teamMembers: string };
type InvoiceLineItemForm = { description: string; quantity: string; unitPrice: string };
type InvoiceForm = {
  accountId: string;
  clientId: string;
  projectId: string;
  number: string;
  description: string;
  dueDate: string;
  taxRate: string;
  discount: string;
  status: InvoiceStatus;
  lineItems: InvoiceLineItemForm[];
};

function newInvoiceLineItem(): InvoiceLineItemForm {
  return { description: "", quantity: "1", unitPrice: "" };
}

function newInvoiceForm(): InvoiceForm {
  return {
    accountId: "",
    clientId: "",
    projectId: "",
    number: "",
    description: "",
    dueDate: "",
    taxRate: "0",
    discount: "0",
    status: "draft",
    lineItems: [newInvoiceLineItem()],
  };
}

function newProjectForm(): ProjectForm {
  return { accountId: "", name: "", type: "Website", status: "Discovery", progress: "0", dueDate: "", milestones: "", notes: "", teamMembers: "" };
}

const views: { label: View; icon: typeof LayoutDashboard }[] = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Accounts", icon: Building2 },
  { label: "Projects", icon: FolderKanban },
  { label: "Tasks", icon: ClipboardList },
  { label: "Documents", icon: FileCheck2 },
  { label: "Invoices", icon: CircleDollarSign },
  { label: "Quiz enquiries", icon: ClipboardList },
  { label: "Settings", icon: Settings },
];

export default function CRMWorkspace() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [storageAccessReady, setStorageAccessReady] = useState(false);
  const [view, setView] = useState<View>("Overview");
  const [modal, setModal] = useState<ModalKind>(null);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [accounts, setAccounts] = useState<AccountRecord[]>([]);
  const [clients, setClients] = useState<ClientRecord[]>([]);
  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [tasks, setTasks] = useState<TaskRecord[]>([]);
  const [documents, setDocuments] = useState<DocumentRecord[]>([]);
  const [invoices, setInvoices] = useState<InvoiceRecord[]>([]);
  const [activities, setActivities] = useState<ActivityRecord[]>([]);
  const [selectedAccountId, setSelectedAccountId] = useState("");

  const [accountForm, setAccountForm] = useState({ name: "", industry: "", email: "", phone: "" });
  const [contactForm, setContactForm] = useState({ accountId: "", existingClientId: "", name: "", email: "", phone: "", accessRole: "client" });
  const [projectForm, setProjectForm] = useState<ProjectForm>(newProjectForm);
  const [editingProjectId, setEditingProjectId] = useState("");
  const [taskForm, setTaskForm] = useState({ accountId: "", projectId: "", title: "", dueDate: "", clientVisible: false });
  const [documentForm, setDocumentForm] = useState({ accountId: "", projectId: "", recipientId: "", versionOfId: "", name: "", needsSignature: true, clientVisible: false, signaturePage: "0", signatureX: "52", signatureY: "58", expiresOn: "", file: null as File | null });
  const [documentPreviewUrl, setDocumentPreviewUrl] = useState("");
  const [documentPageSize, setDocumentPageSize] = useState({ width: 595, height: 842 });
  const [documentPageCount, setDocumentPageCount] = useState(1);
  const [invoiceForm, setInvoiceForm] = useState<InvoiceForm>(newInvoiceForm);
  const [editingInvoiceId, setEditingInvoiceId] = useState("");
  const [communicationForm, setCommunicationForm] = useState({ accountId: "", message: "", clientVisible: false });
  const [shareCredentials, setShareCredentials] = useState<{ projectName: string; shareId: string; pin: string } | null>(null);
  const [documentShareCredentials, setDocumentShareCredentials] = useState<{ documentName: string; shareId: string; pin: string } | null>(null);

  useEffect(() => onAuthStateChanged(auth, async (nextUser) => {
    setUser(nextUser);
    if (!nextUser) {
      setStorageAccessReady(false);
      setLoading(false);
      return;
    }
    try {
      const profile = await getDoc(doc(db, "users", nextUser.uid));
      const role = profile.exists() ? profile.data().role : "";
      const isInternalUser = ["admin", "staff"].includes(role);
      setAuthorized(isInternalUser);
      if (isInternalUser) {
        await httpsCallable(functions, "syncInternalStorageAccess")();
        await nextUser.getIdToken(true);
        setStorageAccessReady(true);
      } else {
        setStorageAccessReady(false);
      }
    } catch {
      setStorageAccessReady(false);
      setError("We could not verify your internal access.");
    } finally {
      setLoading(false);
    }
  }), []);

  useEffect(() => {
    if (authorized) void loadWorkspace();
  }, [authorized]);

  async function loadWorkspace() {
    setError("");
    try {
      const [accountSnap, userSnap, projectSnap, projectNoteSnap, taskSnap, documentSnap, invoiceSnap, activitySnap, documentEventSnap] = await Promise.all([
        getDocs(collection(db, "accounts")),
        getDocs(collection(db, "users")),
        getDocs(collection(db, "projects")),
        getDocs(collection(db, "projectNotes")),
        getDocs(collection(db, "tasks")),
        getDocs(collection(db, "documents")),
        getDocs(collection(db, "invoices")),
        getDocs(collection(db, "activities")),
        getDocs(collection(db, "documentEvents")),
      ]);
      setAccounts(accountSnap.docs.map((item) => ({ id: item.id, ...item.data() } as AccountRecord)));
      setClients(userSnap.docs.filter((item) => item.data().role === "client").map((item) => ({ id: item.id, ...item.data() } as ClientRecord)));
      const notesByProject = new Map(projectNoteSnap.docs.map((item) => [item.data().projectId as string, item.data().text as string]));
      setProjects(projectSnap.docs.map((item) => ({ id: item.id, ...item.data(), notes: notesByProject.get(item.id) } as ProjectRecord)));
      setTasks(taskSnap.docs.map((item) => ({ id: item.id, ...item.data() } as TaskRecord)));
      setDocuments(documentSnap.docs.map((item) => ({ id: item.id, ...item.data() } as DocumentRecord)));
      setInvoices(invoiceSnap.docs.map((item) => ({ id: item.id, ...item.data() } as InvoiceRecord)));
      const documentEvents = documentEventSnap.docs.map((item) => {
        const event = item.data() as { accountId: string; documentId: string; eventType: string; actorId: string; createdAt?: unknown };
        return { id: `event-${item.id}`, accountId: event.accountId, type: `document_${event.eventType}`, message: `Document ${event.eventType.replace("_", " ")}.`, actorName: event.actorId === user?.uid ? user.email || "Virtuo team" : "Client", clientVisible: false, createdAt: event.createdAt } as ActivityRecord;
      });
      setActivities([...activitySnap.docs.map((item) => ({ id: item.id, ...item.data() } as ActivityRecord)), ...documentEvents].slice(-30).reverse());
    } catch {
      setError("Could not load CRM records. Deploy the included Firestore rules, then refresh this workspace.");
    }
  }

  async function downloadDocument(record: DocumentRecord) {
    const path = record.signedStoragePath || record.storagePath;
    if (!path) return;
    try {
      const bytes = await getBytes(ref(storage, path));
      const url = URL.createObjectURL(new Blob([bytes], { type: record.contentType || "application/octet-stream" }));
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = record.signedStoragePath ? `signed-${record.name}` : record.name;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch {
      setError("The document could not be downloaded. Confirm the client still has access to this file.");
    }
  }

  async function addActivity(accountId: string, type: string, text: string, clientVisible = false, projectId?: string) {
    if (!user) return;
    await addDoc(collection(db, "activities"), {
      accountId, projectId: projectId || null, type, message: text, actorId: user.uid,
      actorName: user.email || "Virtuo team", clientVisible, createdAt: serverTimestamp(),
    });
  }

  function resetAndClose() {
    if (documentPreviewUrl) URL.revokeObjectURL(documentPreviewUrl);
    setDocumentPreviewUrl("");
    setModal(null);
    setBusy(false);
  }

  async function prepareDocumentFile(file: File | null) {
    if (documentPreviewUrl) URL.revokeObjectURL(documentPreviewUrl);
    setDocumentPreviewUrl("");
    setDocumentPageCount(1);
    setDocumentForm((current) => ({ ...current, file, signaturePage: "0" }));
    if (!file || (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf"))) return;
    setDocumentPreviewUrl(URL.createObjectURL(file));
    try {
      const size = await getPdfPageSize(await file.arrayBuffer());
      setDocumentPageSize(size);
      setDocumentPageCount(size.pageCount);
    } catch {
      setError("This PDF could not be previewed. Please choose another PDF.");
    }
  }

  async function selectDocumentPage(page: string) {
    const pageNumber = Math.max(0, Math.min(Number(page) || 0, documentPageCount - 1));
    setDocumentForm((current) => ({ ...current, signaturePage: String(pageNumber) }));
    if (!documentForm.file) return;
    try {
      const size = await getPdfPageSize(await documentForm.file.arrayBuffer(), pageNumber);
      setDocumentPageSize(size);
    } catch {
      setError("That PDF page could not be loaded.");
    }
  }

  async function shareDocument(record: DocumentRecord) {
    if (!record.id) return;
    setBusy(true);
    setError("");
    try {
      const createShare = httpsCallable<{ documentId: string }, { shareId: string; pin: string }>(functions, "createDocumentShare");
      const result = await createShare({ documentId: record.id });
      setDocumentShareCredentials({ documentName: record.name, ...result.data });
      setModal("documentShare");
      await loadWorkspace();
    } catch (error) {
      console.error("Document signing-link creation failed", error);
      const detail = error instanceof Error ? error.message : "Firebase returned an unknown error.";
      setError(`The signing link could not be created. ${detail}`);
    } finally {
      setBusy(false);
    }
  }

  async function disableDocumentShare(record: DocumentRecord) {
    if (!record.id || !window.confirm(`Disable the signing link for ${record.name}? Existing visitors will lose access.`)) return;
    setBusy(true);
    try {
      const revokeShare = httpsCallable<{ documentId: string }, { revoked: boolean }>(functions, "revokeDocumentShare");
      await revokeShare({ documentId: record.id });
      setMessage(`Signing link disabled for ${record.name}.`);
      await loadWorkspace();
    } catch {
      setError("The signing link could not be disabled. Deploy the Firebase Functions configuration, then try again.");
    } finally {
      setBusy(false);
    }
  }

  async function createProjectShare(project: ProjectRecord) {
    if (!project.id) return;
    setBusy(true);
    setError("");
    try {
      const createShare = httpsCallable<{ projectId: string }, { shareId: string; pin: string }>(functions, "createProjectShare");
      const result = await createShare({ projectId: project.id });
      setShareCredentials({ projectName: project.name, ...result.data });
      setModal("share");
      await loadWorkspace();
    } catch {
      setError("The project link could not be created. Deploy the Firebase Functions configuration, then try again.");
    } finally {
      setBusy(false);
    }
  }

  async function disableProjectShare(project: ProjectRecord) {
    if (!project.id || !window.confirm(`Disable the shared link for ${project.name}? Existing project visitors will lose access.`)) return;
    setBusy(true);
    try {
      const revokeShare = httpsCallable<{ projectId: string }, { revoked: boolean }>(functions, "revokeProjectShare");
      await revokeShare({ projectId: project.id });
      setMessage(`Project sharing was disabled for ${project.name}.`);
      await loadWorkspace();
    } catch {
      setError("The shared link could not be disabled. Deploy the Firebase Functions configuration, then try again.");
    } finally {
      setBusy(false);
    }
  }

  function addProjectDocument(project: ProjectRecord) {
    setDocumentForm({ accountId: project.accountId || "", projectId: project.id, recipientId: "", versionOfId: "", name: "", needsSignature: true, clientVisible: false, signaturePage: "0", signatureX: "52", signatureY: "58", expiresOn: "", file: null });
    setModal("document");
  }

  async function copyText(value: string, label: string) {
    try {
      await navigator.clipboard.writeText(value);
      setMessage(`${label} copied.`);
    } catch {
      setError("Could not copy to your clipboard. Please copy the value manually.");
    }
  }

  async function saveAccount(event: FormEvent) {
    event.preventDefault();
    if (!user || !accountForm.name.trim()) return;
    setBusy(true);
    try {
      const accountRef = await addDoc(collection(db, "accounts"), {
        name: accountForm.name.trim(), industry: accountForm.industry.trim(), primaryEmail: accountForm.email.trim(),
        primaryPhone: accountForm.phone.trim(), status: "active", createdBy: user.uid, createdAt: serverTimestamp(),
      });
      await setDoc(doc(db, "accounts", accountRef.id, "members", user.uid), { role: "owner", addedAt: serverTimestamp() });
      await addActivity(accountRef.id, "account_created", `Account ${accountForm.name.trim()} was created.`);
      setAccountForm({ name: "", industry: "", email: "", phone: "" });
      setSelectedAccountId(accountRef.id);
      setMessage("Account created and ready for contacts, projects, and documents.");
      resetAndClose();
      await loadWorkspace();
    } catch {
      setError("The account could not be saved. Check your Firestore rules.");
      setBusy(false);
    }
  }

  async function saveContact(event: FormEvent) {
    event.preventDefault();
    if (!user || !authorized || !contactForm.accountId) return;
    setBusy(true);
    try {
      let clientId = contactForm.existingClientId;
      let displayName = contactForm.name.trim();
      if (!clientId) {
        if (!contactForm.email.trim() || !displayName) {
          setError("Enter a name and email for the client contact.");
          setBusy(false);
          return;
        }
        const credential = await createClientAuthAccount(contactForm.email.trim());
        clientId = credential.uid;
        await setDoc(doc(db, "users", clientId), {
          name: displayName, email: contactForm.email.trim(), phone: contactForm.phone.trim(), role: "client", accountAccessRole: contactForm.accessRole,
          accountId: contactForm.accountId, createdBy: user.uid, createdAt: serverTimestamp(),
        });
      } else {
        const existing = clients.find((client) => client.id === clientId);
        displayName = existing?.name || existing?.email || "Client contact";
        await updateDoc(doc(db, "users", clientId), { accountId: contactForm.accountId, accountAccessRole: contactForm.accessRole, updatedAt: serverTimestamp() });
      }
      await setDoc(doc(db, "accounts", contactForm.accountId, "members", clientId), { role: contactForm.accessRole, addedAt: serverTimestamp() });
      await addActivity(contactForm.accountId, "contact_linked", `${displayName} was linked as ${contactForm.accessRole.replace("_", " ")}.`);
      const invitationSent = !contactForm.existingClientId && Boolean(contactForm.email.trim());
      if (invitationSent) await sendPasswordResetEmail(auth, contactForm.email.trim());
      setContactForm({ accountId: "", existingClientId: "", name: "", email: "", phone: "", accessRole: "client" });
      setMessage(invitationSent ? "Client contact linked. A password setup email was sent." : "Client contact linked to the account.");
      resetAndClose();
      await loadWorkspace();
    } catch {
      setError("The contact could not be linked. The email may already be in use or the account rules may need deploying.");
      setBusy(false);
    }
  }

  async function saveProject(event: FormEvent) {
    event.preventDefault();
    if (!user) {
      setError("Sign in before saving a project.");
      return;
    }
    if (!authorized) {
      setError("Project updates are available to internal admin or staff accounts only. Clients can view shared project updates in the portal.");
      return;
    }
    if (!projectForm.accountId) {
      setError("Choose an account before saving the project.");
      return;
    }
    if (!projectForm.name.trim()) {
      setError("Enter a project name before saving.");
      return;
    }
    const progress = Number(projectForm.progress || 0);
    if (!Number.isFinite(progress) || progress < 0 || progress > 100) {
      setError("Project progress must be a number between 0 and 100.");
      return;
    }
    setBusy(true);
    try {
      const existingProject = editingProjectId ? projects.find((project) => project.id === editingProjectId) : undefined;
      const accountClient = clients.find((client) => client.accountId === projectForm.accountId);
      const projectName = projectForm.name.trim();
      const projectData = {
        accountId: projectForm.accountId, clientId: accountClient?.id || null, name: projectName, type: projectForm.type,
        status: projectForm.status, progress, dueDate: projectForm.dueDate, clientVisible: existingProject?.clientVisible ?? true,
        milestones: parseMilestones(projectForm.milestones), teamMembers: splitValues(projectForm.teamMembers),
      };
      const projectRef = existingProject ? doc(db, "projects", existingProject.id) : doc(collection(db, "projects"));
      if (existingProject) {
        await updateDoc(projectRef, { ...projectData, updatedBy: user.uid, updatedAt: serverTimestamp() });
      } else {
        await setDoc(projectRef, { ...projectData, createdBy: user.uid, createdAt: serverTimestamp() });
      }
      const projectNoteRef = doc(db, "projectNotes", projectRef.id);
      if (projectForm.notes.trim()) {
        await setDoc(projectNoteRef, {
          projectId: projectRef.id, accountId: projectForm.accountId, text: projectForm.notes.trim(),
          ...(existingProject ? { updatedBy: user.uid, updatedAt: serverTimestamp() } : { createdBy: user.uid, createdAt: serverTimestamp() }),
        }, { merge: true });
      } else if (existingProject) {
        await deleteDoc(projectNoteRef);
      }
      await addActivity(projectForm.accountId, existingProject ? "project_updated" : "project_created", `${projectName} was ${existingProject ? "updated in" : "added to"} the project plan.`, true, projectRef.id);
      let share: { shareId: string; pin: string } | null = null;
      let shareError = "";
      if (!existingProject) {
        try {
          const createShare = httpsCallable<{ projectId: string }, { shareId: string; pin: string }>(functions, "createProjectShare");
          const shareResult = await createShare({ projectId: projectRef.id });
          share = shareResult.data;
        } catch (error) {
          shareError = error instanceof Error ? error.message : "The private-link function is unavailable.";
        }
      }
      setProjectForm(newProjectForm());
      setEditingProjectId("");
      if (share) {
        setShareCredentials({ projectName, ...share });
        setModal("share");
      } else if (existingProject) {
        setMessage(`${projectName} was updated.`);
        resetAndClose();
      } else {
        setMessage(`${projectName} was created. The private project link could not be generated yet.`);
        setError(`Deploy the Firebase Functions configuration before creating private links. ${shareError}`);
        resetAndClose();
      }
      await loadWorkspace();
    } catch (error) {
      const reason = error instanceof Error ? ` ${error.message}` : "";
      setError(`The project could not be saved. Check the deployed Firestore rules and your internal user role.${reason}`);
      setBusy(false);
    }
  }

  async function saveTask(event: FormEvent) {
    event.preventDefault();
    if (!user || !taskForm.accountId || !taskForm.title.trim()) return;
    setBusy(true);
    try {
      await addDoc(collection(db, "tasks"), {
        accountId: taskForm.accountId, projectId: taskForm.projectId || null, title: taskForm.title.trim(), dueDate: taskForm.dueDate,
        status: "todo", clientVisible: taskForm.clientVisible, createdBy: user.uid, createdAt: serverTimestamp(),
      });
      await addActivity(taskForm.accountId, "task_created", `Task added: ${taskForm.title.trim()}`, taskForm.clientVisible, taskForm.projectId);
      setTaskForm({ accountId: "", projectId: "", title: "", dueDate: "", clientVisible: false });
      setMessage("Task added to the delivery plan.");
      resetAndClose();
      await loadWorkspace();
    } catch {
      setError("The task could not be saved. Check your Firestore rules.");
      setBusy(false);
    }
  }

  async function saveDocument(event: FormEvent) {
    event.preventDefault();
    if (!user || !documentForm.accountId || !documentForm.file) return;
    if (!storageAccessReady) {
      setError("Preparing secure document-upload access. Refresh the CRM and try again.");
      return;
    }
    if (!documentForm.projectId && !documentForm.recipientId) {
      setError("Choose a project for PIN-protected sharing, or choose a client login for legacy portal sharing.");
      return;
    }
    if (documentForm.file.size > 20 * 1024 * 1024) {
      setError("Documents must be smaller than 20 MB.");
      return;
    }
    const extension = documentForm.file.name.toLowerCase().split(".").pop() || "";
    const contentTypes: Record<string, string> = {
      pdf: "application/pdf",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };
    const contentType = contentTypes[extension];
    if (!contentType) {
      setError("Choose a PDF, DOCX, or XLSX file.");
      return;
    }
    if (documentForm.needsSignature && contentType !== "application/pdf") {
      setError("In-platform signatures require a PDF. Disable the signature request to share another file type.");
      return;
    }
    setBusy(true);
    let stage = "starting the upload";
    try {
      const existing = documents.find((record) => record.id === documentForm.versionOfId);
      const recordRef = existing ? doc(db, "documents", existing.id) : doc(collection(db, "documents"));
      const version = (existing?.version || 0) + 1;
      const safeName = documentForm.file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      const fileRef = ref(storage, `accounts/${documentForm.accountId}/documents/${recordRef.id}/v${version}-${safeName}`);
      stage = "uploading the file";
      const uploaded = await uploadBytes(fileRef, documentForm.file, { contentType });
      const documentData = {
        accountId: documentForm.accountId, projectId: documentForm.projectId || null, name: documentForm.name.trim() || documentForm.file.name,
        contentType, size: documentForm.file.size, storagePath: uploaded.ref.fullPath,
        status: documentForm.needsSignature ? "awaiting_signature" : "draft", needsSignature: documentForm.needsSignature,
         clientVisible: documentForm.clientVisible, recipientIds: documentForm.recipientId ? [documentForm.recipientId] : [], signatureField: { page: Number(documentForm.signaturePage || 0), x: Number(documentForm.signatureX || 52), y: Number(documentForm.signatureY || 58) },
        version, expiresAt: documentForm.expiresOn ? Timestamp.fromDate(new Date(`${documentForm.expiresOn}T23:59:59`)) : null, uploadedBy: user.uid, uploaderId: user.uid, updatedAt: serverTimestamp(),
      };
      if (existing) {
        stage = "saving the document version";
        const priorVersion = { version: existing.version || 1, storagePath: existing.storagePath || "", name: existing.name, contentType: existing.contentType, supersededAt: new Date().toISOString() };
        await setDoc(doc(db, "documents", recordRef.id, "versions", `v${priorVersion.version}`), priorVersion);
        await updateDoc(recordRef, { ...documentData, versionHistory: [...(existing.versionHistory || []), priorVersion], signedAt: null, signedBy: null, signedByName: null, signedStoragePath: null, declinedAt: null, declinedBy: null, declineReason: null, signingShareId: null, signingShareEnabled: false, signingShareVersion: Number(existing.signingShareVersion || 0) + 1 });
      } else {
        stage = "saving the document record";
        await setDoc(recordRef, { ...documentData, createdAt: serverTimestamp() });
      }
      stage = "writing the activity record";
      await addActivity(documentForm.accountId, existing ? "document_version_sent" : "document_sent", `${documentForm.name.trim() || documentForm.file.name} ${existing ? `was updated to version ${version}` : "was shared"}${documentForm.needsSignature ? " for signature" : ""}.`, documentForm.clientVisible, documentForm.projectId);
      stage = "writing the document event";
      await addDoc(collection(db, "documentEvents"), {
        accountId: documentForm.accountId, documentId: recordRef.id, eventType: existing ? "version_sent" : "sent", actorId: user.uid, createdAt: serverTimestamp(),
      });
       setDocumentForm({ accountId: "", projectId: "", recipientId: "", versionOfId: "", name: "", needsSignature: true, clientVisible: false, signaturePage: "0", signatureX: "52", signatureY: "58", expiresOn: "", file: null });
      setMessage(existing ? `Version ${version} was shared with the selected recipient.` : documentForm.needsSignature ? "Document sent for client signature." : "Document securely shared.");
      resetAndClose();
      await loadWorkspace();
    } catch (error) {
      console.error("Document upload failed", { stage, error });
      const detail = error instanceof Error ? error.message : "Firebase returned an unknown error.";
      setError(`The document could not be uploaded while ${stage}. ${detail}`);
      setBusy(false);
    }
  }

  async function saveInvoice(event: FormEvent) {
    event.preventDefault();
    if (!user || !invoiceForm.accountId) return;
    const lineItems: NonNullable<InvoiceRecord["lineItems"]> = [];
    for (const [index, item] of invoiceForm.lineItems.entries()) {
      const description = item.description.trim();
      const hasValues = Boolean(description || item.unitPrice.trim() || item.quantity.trim() !== "1");
      if (index > 0 && !hasValues) continue;
      const quantity = Number(item.quantity || 1);
      const unitPrice = Number(item.unitPrice);
      if (!description || !Number.isFinite(quantity) || quantity <= 0 || !Number.isFinite(unitPrice) || unitPrice < 0) {
        setError(index === 0 ? "Add a description and amount for the required charge." : `Complete charge ${index + 1}, or remove it.`);
        return;
      }
      lineItems.push({ description, quantity, unitPrice });
    }
    if (!lineItems.length) {
      setError("Add at least one charge to the invoice.");
      return;
    }
    setBusy(true);
    try {
      const existingInvoice = editingInvoiceId ? invoices.find((invoice) => invoice.id === editingInvoiceId) : undefined;
      const amount = lineItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
      const discount = Number(invoiceForm.discount || 0);
      const taxRate = Number(invoiceForm.taxRate || 0);
      const subtotal = amount;
      const taxAmount = (subtotal - discount) * (taxRate / 100);
      const account = accounts.find((record) => record.id === invoiceForm.accountId);
      const selectedClient = clients.find((client) => client.id === invoiceForm.clientId);
      const existingClient = existingInvoice?.clientId ? clients.find((client) => client.id === existingInvoice.clientId) : undefined;
      const accountClient = selectedClient || existingClient || (!editingInvoiceId ? clients.find((client) => client.accountId === invoiceForm.accountId) : undefined);
      const recipientName = accountClient?.name || accountClient?.email || "";
      const invoiceData = {
        accountId: invoiceForm.accountId, accountName: account?.name || "", clientId: accountClient?.id || null,
        recipientName, recipientEmail: accountClient?.email || "", projectId: invoiceForm.projectId || null,
        number: invoiceForm.number.trim() || `INV-${Date.now().toString().slice(-6)}`, description: invoiceForm.description.trim(),
        lineItems,
        subtotal, discount, taxRate, taxAmount, total: subtotal - discount + taxAmount, currency: "ZAR", dueDate: invoiceForm.dueDate,
        status: invoiceForm.status,
        clientVisible: invoiceForm.status !== "draft",
        paidAt: invoiceForm.status === "paid" ? existingInvoice?.paidAt || serverTimestamp() : null,
        ...(editingInvoiceId ? { updatedAt: serverTimestamp() } : { createdBy: user.uid, createdAt: serverTimestamp() }),
      };
      if (editingInvoiceId) {
        await updateDoc(doc(db, "invoices", editingInvoiceId), invoiceData);
        await addActivity(invoiceForm.accountId, "invoice_updated", `Invoice ${invoiceForm.number || editingInvoiceId.slice(0, 8)} was updated.`, invoiceForm.status !== "draft", invoiceForm.projectId);
      } else {
        await addDoc(collection(db, "invoices"), invoiceData);
        await addActivity(invoiceForm.accountId, "invoice_created", `A new ${invoiceForm.status} invoice was created.`, invoiceForm.status !== "draft", invoiceForm.projectId);
      }
      setInvoiceForm(newInvoiceForm());
      setEditingInvoiceId("");
      setMessage(editingInvoiceId ? "Invoice updated." : "Invoice created.");
      resetAndClose();
      await loadWorkspace();
    } catch {
      setError("The invoice could not be saved. Check your Firestore rules.");
      setBusy(false);
    }
  }

  async function updateTaskStatus(task: TaskRecord, status: NonNullable<TaskRecord["status"]>) {
    try {
      await updateDoc(doc(db, "tasks", task.id), { status, completedAt: status === "done" ? serverTimestamp() : null });
      await addActivity(task.accountId, "task_updated", `${task.title} is now ${status.replace("_", " ")}.`, task.clientVisible, task.projectId);
      await loadWorkspace();
    } catch {
      setError("The task status could not be updated.");
    }
  }

  async function updateInvoiceStatus(invoice: InvoiceRecord, status: string) {
    try {
      if (status === "void" && !window.confirm(`Void invoice ${invoice.number || invoice.id.slice(0, 8)}? This cannot be undone from the client portal.`)) return;
      const clientVisible = status !== "draft";
      await updateDoc(doc(db, "invoices", invoice.id), { status, clientVisible, paidAt: status === "paid" ? serverTimestamp() : null, updatedAt: serverTimestamp() });
      if (invoice.accountId) await addActivity(invoice.accountId, "invoice_updated", `Invoice ${invoice.number || invoice.id.slice(0, 8)} marked ${status.replace("_", " ")}.`, clientVisible, invoice.projectId);
      await loadWorkspace();
    } catch {
      setError("The invoice status could not be updated.");
    }
  }

  function editInvoice(invoice: InvoiceRecord) {
    setEditingInvoiceId(invoice.id);
    setInvoiceForm({
      accountId: invoice.accountId || "", clientId: invoice.clientId || "", projectId: invoice.projectId || "", number: invoice.number || "", description: invoice.description || "",
      dueDate: invoice.dueDate || "", taxRate: String(invoice.taxRate || 0), discount: String(invoice.discount || 0),
      status: (invoice.status || "draft") as InvoiceStatus,
      lineItems: invoice.lineItems?.length
        ? invoice.lineItems.map((item) => ({ description: item.description, quantity: String(item.quantity), unitPrice: String(item.unitPrice) }))
        : [{ description: invoice.description || "Professional services", quantity: "1", unitPrice: String(invoice.subtotal || invoice.amount || invoiceTotal(invoice)) }],
    });
    setModal("invoice");
  }

  function createInvoice() {
    setEditingInvoiceId("");
    setInvoiceForm(newInvoiceForm());
    setModal("invoice");
  }

  function createProject() {
    setEditingProjectId("");
    setProjectForm(newProjectForm());
    setModal("project");
  }

  function editProject(project: ProjectRecord) {
    setEditingProjectId(project.id);
    setProjectForm({
      accountId: project.accountId || "",
      name: project.name || "",
      type: project.type || "Website",
      status: project.status || "Discovery",
      progress: String(project.progress || 0),
      dueDate: project.dueDate || project.due || "",
      milestones: (project.milestones || []).map((milestone) => `${milestone.title}${milestone.dueDate ? ` | ${milestone.dueDate}` : ""}`).join("\n"),
      notes: project.notes || "",
      teamMembers: (project.teamMembers || []).join(", "),
    });
    setModal("project");
  }

  async function saveCommunication(event: FormEvent) {
    event.preventDefault();
    if (!communicationForm.accountId || !communicationForm.message.trim()) return;
    setBusy(true);
    try {
      await addActivity(communicationForm.accountId, "client_communication", communicationForm.message.trim(), communicationForm.clientVisible);
      setCommunicationForm({ accountId: "", message: "", clientVisible: false });
      setMessage("Communication history updated.");
      resetAndClose();
      await loadWorkspace();
    } catch {
      setError("The communication note could not be saved.");
      setBusy(false);
    }
  }

  const visibleAccounts = useMemo(() => accounts.filter((account) => includesSearch(search, account.name, account.industry, account.primaryEmail)), [accounts, search]);
  const visibleProjects = useMemo(() => projects.filter((project) => includesSearch(search, project.name, project.type, project.status)), [projects, search]);
  const visibleTasks = useMemo(() => tasks.filter((task) => includesSearch(search, task.title, task.status, task.dueDate)), [tasks, search]);
  const visibleDocuments = useMemo(() => documents.filter((record) => includesSearch(search, record.name, record.status)), [documents, search]);
  const visibleInvoices = useMemo(() => invoices.filter((invoice) => includesSearch(search, invoice.number, invoice.description, invoice.status)), [invoices, search]);
  const selectedAccount = accounts.find((account) => account.id === selectedAccountId);
  const currentAccountActivities = activities.filter((activity) => activity.accountId === selectedAccountId);
  const activeProjects = projects.filter((project) => !["completed", "archived"].includes((project.status || "").toLowerCase()));
  const openInvoices = invoices.filter((invoice) => !["paid", "void"].includes((invoice.status || "").toLowerCase()));

  if (loading) return <LoadingScreen label="Checking internal access…" />;
  if (!user) return <PortalAuth />;
  if (!authorized) return <AccessDenied onSignOut={() => signOut(auth)} />;

  return (
    <div className="min-h-screen bg-[#f6f5f1] text-[#1a1a17]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-stone-200 bg-[#1b211d] px-4 py-5 text-stone-200 lg:flex">
        <Link href="/" className="px-3 font-serif text-2xl font-bold tracking-[-0.04em] text-white">VIRTUO<span className="text-orange-400">.</span></Link>
        <div className="mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Operations CRM</div>
        <nav className="mt-3 space-y-1">
          {views.map(({ label, icon: Icon }) => <button key={label} onClick={() => setView(label)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition ${view === label ? "bg-[#d96b22] text-white shadow-sm" : "text-stone-300 hover:bg-white/8 hover:text-white"}`}><Icon size={17} />{label}</button>)}
        </nav>
        <div className="mt-auto rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-xs font-semibold text-white">{user.email}</div>
          <div className="mt-1 text-[11px] text-stone-400">Internal workspace</div>
          <button onClick={() => signOut(auth)} className="mt-3 flex items-center gap-2 text-xs font-bold text-orange-300 hover:text-orange-200"><LogOut size={14} /> Sign out</button>
        </div>
      </aside>

      <main className="min-h-screen lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-stone-200 bg-[#f6f5f1]/95 px-5 py-4 backdrop-blur sm:px-8">
          <div className="mx-auto flex max-w-7xl items-center gap-4">
            <Link href="/" className="font-serif text-xl font-bold lg:hidden">VIRTUO<span className="text-orange-600">.</span></Link>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-stone-400" size={17} />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search accounts, projects, documents, invoices…" className="h-11 w-full rounded-lg border border-stone-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-orange-500" />
            </div>
            <button onClick={() => void loadWorkspace()} className="crm-icon-button shrink-0" aria-label="Refresh records"><RefreshCw size={17} /></button>
            <button className="crm-icon-button relative shrink-0" aria-label="Notifications"><Bell size={17} /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-orange-500" /></button>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:py-9">
          <div className="mb-6 flex gap-2 overflow-x-auto pb-1 lg:hidden">{views.map(({ label }) => <button key={label} onClick={() => setView(label)} className={`min-h-10 shrink-0 rounded-full px-3.5 py-2 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${view === label ? "bg-[#1b211d] text-white shadow-sm" : "border border-stone-200 bg-white text-stone-600 shadow-sm shadow-stone-900/5 hover:border-stone-300 hover:bg-stone-50"}`}>{label}</button>)}</div>
          {error && <Banner tone="error" text={error} onDismiss={() => setError("")} />}
          {message && <Banner tone="success" text={message} onDismiss={() => setMessage("")} />}

          {view === "Overview" && <Overview accounts={accounts} projects={activeProjects} tasks={tasks} invoices={invoices} activities={activities} onCreate={setModal} onView={setView} />}
          {view === "Accounts" && <AccountsView accounts={visibleAccounts} clients={clients} selected={selectedAccount} activities={currentAccountActivities} projects={projects} canLinkClients={authorized} onCreate={() => setModal("account")} onSelect={setSelectedAccountId} onLink={() => setModal("contact")} onLogCommunication={() => setModal("communication" as ModalKind)} />}
          {view === "Projects" && <ProjectsView projects={visibleProjects} accounts={accounts} documents={documents} onCreate={createProject} onEdit={editProject} onShare={(project) => void createProjectShare(project)} onDisableShare={(project) => void disableProjectShare(project)} onAddDocument={addProjectDocument} />}
          {view === "Tasks" && <TasksView tasks={visibleTasks} projects={projects} accounts={accounts} onCreate={() => setModal("task")} onUpdate={updateTaskStatus} />}
          {view === "Documents" && <DocumentsView documents={visibleDocuments} accounts={accounts} projects={projects} onCreate={() => setModal("document")} onDownload={downloadDocument} onShare={shareDocument} onDisableShare={disableDocumentShare} />}
          {view === "Invoices" && <InvoicesView invoices={visibleInvoices} accounts={accounts} clients={clients} onCreate={createInvoice} onStatus={updateInvoiceStatus} onEdit={editInvoice} />}
          {view === "Quiz enquiries" && <QuizLeadsPanel />}
          {view === "Settings" && <SettingsView clients={clients} accounts={accounts} />}
        </div>
      </main>

      {modal === "account" && <Modal title="Create an account" onClose={resetAndClose}><form onSubmit={saveAccount} className="space-y-3"><Input value={accountForm.name} onChange={(value) => setAccountForm({ ...accountForm, name: value })} placeholder="Company or account name" required /><Input value={accountForm.industry} onChange={(value) => setAccountForm({ ...accountForm, industry: value })} placeholder="Industry" /><Input type="email" value={accountForm.email} onChange={(value) => setAccountForm({ ...accountForm, email: value })} placeholder="Primary email" /><Input value={accountForm.phone} onChange={(value) => setAccountForm({ ...accountForm, phone: value })} placeholder="Primary phone" /><Submit busy={busy} label="Create account" /></form></Modal>}
      {modal === "contact" && <Modal title="Link a client contact" onClose={resetAndClose}><form onSubmit={saveContact} className="space-y-3"><Select value={contactForm.accountId} onChange={(value) => setContactForm({ ...contactForm, accountId: value })} options={accounts.map((account) => ({ value: account.id, label: account.name }))} placeholder="Choose account" required /><Select value={contactForm.existingClientId} onChange={(value) => setContactForm({ ...contactForm, existingClientId: value })} options={clients.filter((client) => !client.accountId).map((client) => ({ value: client.id, label: client.name || client.email || client.id }))} placeholder="Link an existing login (optional)" /><Select value={contactForm.accessRole} onChange={(value) => setContactForm({ ...contactForm, accessRole: value })} options={[{ value: "client", label: "Client contact" }, { value: "project_contact", label: "Project contact" }, { value: "billing_contact", label: "Billing contact" }]} />{!contactForm.existingClientId && <><Input value={contactForm.name} onChange={(value) => setContactForm({ ...contactForm, name: value })} placeholder="Contact name" /><Input type="email" value={contactForm.email} onChange={(value) => setContactForm({ ...contactForm, email: value })} placeholder="Contact email" /><Input value={contactForm.phone} onChange={(value) => setContactForm({ ...contactForm, phone: value })} placeholder="Phone number" /><p className="rounded-lg bg-orange-50 p-3 text-xs leading-5 text-orange-800">We’ll email this client a secure link to create their own portal password. You will not need to handle their password.</p></>}<p className="text-xs leading-5 text-stone-500">Client contacts have portal-only access to their account’s client-visible records. Internal staff access is managed by administrator-assigned staff profiles.</p><Submit busy={busy} label={contactForm.existingClientId ? "Link contact" : "Create and send invite"} /></form></Modal>}
      {modal === "project" && <Modal title={editingProjectId ? "Edit project" : "Create a project"} onClose={resetAndClose}><form onSubmit={saveProject} className="space-y-3"><Select value={projectForm.accountId} onChange={(value) => setProjectForm({ ...projectForm, accountId: value })} options={accounts.map((account) => ({ value: account.id, label: account.name }))} placeholder="Choose account" required disabled={Boolean(editingProjectId)} /><Input value={projectForm.name} onChange={(value) => setProjectForm({ ...projectForm, name: value })} placeholder="Project name" required /><Select value={projectForm.type} onChange={(value) => setProjectForm({ ...projectForm, type: value })} options={["Website", "Brand identity", "SEO", "Campaign", "Consulting", "Other"].map((value) => ({ value, label: value }))} /><Select value={projectForm.status} onChange={(value) => setProjectForm({ ...projectForm, status: value })} options={["Discovery", "Design", "In progress", "In build", "Review", "On hold", "Completed", "Archived"].map((value) => ({ value, label: value }))} /><div className="grid grid-cols-2 gap-3"><Input type="number" min="0" max="100" value={projectForm.progress} onChange={(value) => setProjectForm({ ...projectForm, progress: value })} placeholder="Progress %" /><Input type="date" value={projectForm.dueDate} onChange={(value) => setProjectForm({ ...projectForm, dueDate: value })} /></div><Textarea value={projectForm.milestones} onChange={(value) => setProjectForm({ ...projectForm, milestones: value })} placeholder="Milestones — one per line: Title | YYYY-MM-DD" /><Textarea value={projectForm.teamMembers} onChange={(value) => setProjectForm({ ...projectForm, teamMembers: value })} placeholder="Assigned team members (comma-separated)" /><Textarea value={projectForm.notes} onChange={(value) => setProjectForm({ ...projectForm, notes: value })} placeholder="Internal project notes" /><Submit busy={busy} label={editingProjectId ? "Save project changes" : "Create project"} /></form></Modal>}
      {modal === "task" && <Modal title="Add a delivery task" onClose={resetAndClose}><form onSubmit={saveTask} className="space-y-3"><Select value={taskForm.accountId} onChange={(value) => setTaskForm({ ...taskForm, accountId: value, projectId: "" })} options={accounts.map((account) => ({ value: account.id, label: account.name }))} placeholder="Choose account" required /><Select value={taskForm.projectId} onChange={(value) => setTaskForm({ ...taskForm, projectId: value })} options={projects.filter((project) => project.accountId === taskForm.accountId).map((project) => ({ value: project.id, label: project.name }))} placeholder="Linked project (optional)" /><Input value={taskForm.title} onChange={(value) => setTaskForm({ ...taskForm, title: value })} placeholder="Task title" required /><Input type="date" value={taskForm.dueDate} onChange={(value) => setTaskForm({ ...taskForm, dueDate: value })} /><label className="flex items-center gap-2 rounded-lg bg-stone-50 p-3 text-xs font-semibold text-stone-600"><input type="checkbox" checked={taskForm.clientVisible} onChange={(event) => setTaskForm({ ...taskForm, clientVisible: event.target.checked })} />Show this task in the client portal</label><Submit busy={busy} label="Add task" /></form></Modal>}
      {modal === "document" && (
        <Modal title="Share a document" onClose={resetAndClose}>
          <form onSubmit={saveDocument} className="space-y-3">
            <Select value={documentForm.accountId} onChange={(value) => setDocumentForm({ ...documentForm, accountId: value, projectId: "", recipientId: "", versionOfId: "" })} options={accounts.map((account) => ({ value: account.id, label: account.name }))} placeholder="Choose account" required />
            <Select value={documentForm.projectId} onChange={(value) => setDocumentForm({ ...documentForm, projectId: value })} options={projects.filter((project) => project.accountId === documentForm.accountId).map((project) => ({ value: project.id, label: project.name }))} placeholder="Project link access (recommended)" />
            <Select value={documentForm.recipientId} onChange={(value) => setDocumentForm({ ...documentForm, recipientId: value })} options={clients.filter((client) => client.accountId === documentForm.accountId).map((client) => ({ value: client.id, label: client.name || client.email || client.id }))} placeholder="Legacy client login (optional)" />
            <Select value={documentForm.versionOfId} onChange={(value) => setDocumentForm({ ...documentForm, versionOfId: value })} options={documents.filter((record) => record.accountId === documentForm.accountId).map((record) => ({ value: record.id, label: `${record.name} · v${record.version || 1}` }))} placeholder="New document (or select one to replace)" />
            <Input value={documentForm.name} onChange={(value) => setDocumentForm({ ...documentForm, name: value })} placeholder="Document title" />
            <Input type="date" value={documentForm.expiresOn} onChange={(value) => setDocumentForm({ ...documentForm, expiresOn: value })} placeholder="Signature expiry (optional)" />
            <label className="block cursor-pointer rounded-lg border-2 border-dashed border-stone-200 bg-stone-50 p-6 text-center text-xs font-bold text-stone-600"><CloudUpload className="mx-auto mb-2 text-orange-600" size={22} />{documentForm.file ? documentForm.file.name : "Choose a PDF, DOCX, or XLSX (max 20 MB)"}<input className="sr-only" type="file" accept=".pdf,.docx,.xlsx" onChange={(event) => void prepareDocumentFile(event.target.files?.[0] || null)} /></label>
            {documentForm.file && documentPreviewUrl && <SignaturePlacement fileUrl={documentPreviewUrl} page={Number(documentForm.signaturePage)} pageCount={documentPageCount} pageSize={documentPageSize} x={Number(documentForm.signatureX)} y={Number(documentForm.signatureY)} onPageChange={(page) => void selectDocumentPage(String(page))} onPositionChange={({ x, y }) => setDocumentForm((current) => ({ ...current, signatureX: String(Math.round(x)), signatureY: String(Math.round(y)) }))} />}
            <label className="flex items-start gap-2 rounded-lg border border-stone-200 bg-stone-50 p-3 text-xs font-semibold text-stone-700"><input type="checkbox" checked={documentForm.clientVisible} onChange={(event) => setDocumentForm({ ...documentForm, clientVisible: event.target.checked })} /><span><strong>Show in the shared project</strong><br />Leave unchecked to keep this document internal. PIN visitors can only open client-visible documents.</span></label>
            <label className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 text-xs font-semibold text-orange-800"><input type="checkbox" checked={documentForm.needsSignature} onChange={(event) => setDocumentForm({ ...documentForm, needsSignature: event.target.checked })} />Request an in-platform signature (PDF only)</label>
            <Submit busy={busy} label={documentForm.needsSignature ? "Share for signature" : "Save document"} />
          </form>
        </Modal>
      )}
      {modal === "invoice" && (
        <Modal title={editingInvoiceId ? "Edit invoice" : "Create an invoice"} onClose={resetAndClose}>
          <form onSubmit={saveInvoice} className="space-y-3">
            <Select value={invoiceForm.accountId} onChange={(value) => setInvoiceForm({ ...invoiceForm, accountId: value, clientId: "", projectId: "" })} options={accounts.map((account) => ({ value: account.id, label: account.name }))} placeholder="Company / account" required />
            <Select value={invoiceForm.clientId} onChange={(value) => setInvoiceForm({ ...invoiceForm, clientId: value })} options={clients.filter((client) => client.accountId === invoiceForm.accountId).map((client) => ({ value: client.id, label: client.name || client.email || client.id }))} placeholder="Sent to person (optional)" />
            <p className="-mt-1 text-[11px] leading-5 text-stone-500">The selected company and contact will appear on the invoice and branded PDF.</p>
            <Select value={invoiceForm.projectId} onChange={(value) => setInvoiceForm({ ...invoiceForm, projectId: value })} options={projects.filter((project) => project.accountId === invoiceForm.accountId).map((project) => ({ value: project.id, label: project.name }))} placeholder="Linked project (optional)" />
            <Input value={invoiceForm.number} onChange={(value) => setInvoiceForm({ ...invoiceForm, number: value })} placeholder="Invoice number (auto-generated if blank)" />
            <Input value={invoiceForm.description} onChange={(value) => setInvoiceForm({ ...invoiceForm, description: value })} placeholder="Invoice summary (optional)" />
            <Select value={invoiceForm.status} onChange={(value) => setInvoiceForm({ ...invoiceForm, status: value as InvoiceStatus })} options={[{ value: "draft", label: "Draft" }, { value: "sent", label: "Sent" }, { value: "viewed", label: "Viewed" }, { value: "partially_paid", label: "Partially paid" }, { value: "paid", label: "Paid" }, { value: "overdue", label: "Overdue" }, { value: "void", label: "Void" }]} />

            <section className="rounded-lg border border-stone-200 bg-stone-50 p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-stone-800">Invoice charges</h3>
                  <p className="mt-1 text-[11px] leading-5 text-stone-500">Add one required charge, then include optional items such as hosting or maintenance.</p>
                </div>
                <span className="shrink-0 rounded-full bg-orange-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-orange-800">1 required</span>
              </div>
              <div className="mt-3 space-y-3">
                {invoiceForm.lineItems.map((item, index) => (
                  <div key={index} className="rounded-lg border border-stone-200 bg-white p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[.15em] text-stone-400">{index === 0 ? "Required charge" : `Optional charge ${index}`}</span>
                      {index > 0 && <button type="button" onClick={() => setInvoiceForm((current) => ({ ...current, lineItems: current.lineItems.filter((_, itemIndex) => itemIndex !== index) }))} className="inline-flex min-h-8 items-center rounded-md px-2 text-[11px] font-bold text-red-600 transition hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400">Remove</button>}
                    </div>
                    <div className="mt-2 grid gap-2 sm:grid-cols-[1fr_76px_120px]">
                      <Input value={item.description} onChange={(value) => setInvoiceForm((current) => ({ ...current, lineItems: current.lineItems.map((line, itemIndex) => itemIndex === index ? { ...line, description: value } : line) }))} placeholder={index === 0 ? "e.g. Website design" : "e.g. Hosting"} required={index === 0} />
                      <Input type="number" min="0.01" step="0.01" value={item.quantity} onChange={(value) => setInvoiceForm((current) => ({ ...current, lineItems: current.lineItems.map((line, itemIndex) => itemIndex === index ? { ...line, quantity: value } : line) }))} placeholder="Qty" required={index === 0} />
                      <Input type="number" min="0" step="0.01" value={item.unitPrice} onChange={(value) => setInvoiceForm((current) => ({ ...current, lineItems: current.lineItems.map((line, itemIndex) => itemIndex === index ? { ...line, unitPrice: value } : line) }))} placeholder="Amount (R)" required={index === 0} />
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => setInvoiceForm((current) => ({ ...current, lineItems: [...current.lineItems, newInvoiceLineItem()] }))} className="secondary mt-3 w-full justify-center"><Plus size={14} />Add another charge</button>
              <p className="mt-3 text-right text-xs font-bold text-stone-700">Subtotal: {formatMoney(invoiceForm.lineItems.reduce((sum, item) => sum + (Number(item.quantity) || 0) * (Number(item.unitPrice) || 0), 0))}</p>
            </section>

            <Input type="date" value={invoiceForm.dueDate} onChange={(value) => setInvoiceForm({ ...invoiceForm, dueDate: value })} />
            <div className="grid grid-cols-2 gap-3">
              <Input type="number" min="0" step="0.01" value={invoiceForm.taxRate} onChange={(value) => setInvoiceForm({ ...invoiceForm, taxRate: value })} placeholder="Tax %" />
              <Input type="number" min="0" step="0.01" value={invoiceForm.discount} onChange={(value) => setInvoiceForm({ ...invoiceForm, discount: value })} placeholder="Discount (R)" />
            </div>
            <Submit busy={busy} label={editingInvoiceId ? "Save invoice changes" : "Save invoice"} />
          </form>
        </Modal>
      )}
      {modal === "communication" && <Modal title="Log client communication" onClose={resetAndClose}><form onSubmit={saveCommunication} className="space-y-3"><Select value={communicationForm.accountId} onChange={(value) => setCommunicationForm({ ...communicationForm, accountId: value })} options={accounts.map((account) => ({ value: account.id, label: account.name }))} placeholder="Choose account" required /><Textarea value={communicationForm.message} onChange={(value) => setCommunicationForm({ ...communicationForm, message: value })} placeholder="Call, email, meeting, or decision summary" required /><label className="flex items-center gap-2 rounded-lg bg-stone-50 p-3 text-xs font-semibold text-stone-600"><input type="checkbox" checked={communicationForm.clientVisible} onChange={(event) => setCommunicationForm({ ...communicationForm, clientVisible: event.target.checked })} />Show this note in the client portal</label><Submit busy={busy} label="Save communication" /></form></Modal>}
      {modal === "share" && shareCredentials && <Modal title="Private project link ready" onClose={resetAndClose}><div className="space-y-4"><p className="text-sm leading-6 text-stone-600"><strong>{shareCredentials.projectName}</strong> can now be opened without a client login. Share both values manually. The PIN is shown only now; rotating it will invalidate earlier visitor sessions.</p><div className="rounded-lg bg-stone-50 p-3"><div className="text-[10px] font-bold uppercase tracking-[.15em] text-stone-500">Project link</div><div className="mt-1 break-all font-mono text-xs text-stone-800">{`${window.location.origin}/project/${shareCredentials.shareId}`}</div><button onClick={() => void copyText(`${window.location.origin}/project/${shareCredentials.shareId}`, "Project link")} className="mt-3 secondary">Copy project link</button></div><div className="rounded-lg border border-orange-200 bg-orange-50 p-3"><div className="text-[10px] font-bold uppercase tracking-[.15em] text-orange-800">Project PIN</div><div className="mt-1 font-mono text-xl font-bold tracking-[.16em] text-orange-950">{shareCredentials.pin}</div><button onClick={() => void copyText(shareCredentials.pin, "Project PIN")} className="mt-3 secondary">Copy PIN</button></div><p className="text-xs leading-5 text-stone-500">Anyone with both values can view this project’s client-visible updates and signable documents.</p></div></Modal>}
      {modal === "documentShare" && documentShareCredentials && <Modal title="Document signing link ready" onClose={resetAndClose}><div className="space-y-4"><p className="text-sm leading-6 text-stone-600"><strong>{documentShareCredentials.documentName}</strong> can be reviewed and signed without a client account. Share both values manually. The PIN is shown only now; creating a new PIN invalidates earlier access.</p><div className="rounded-lg bg-stone-50 p-3"><div className="text-[10px] font-bold uppercase tracking-[.15em] text-stone-500">Signing link</div><div className="mt-1 break-all font-mono text-xs text-stone-800">{`${window.location.origin}/sign/${documentShareCredentials.shareId}`}</div><button onClick={() => void copyText(`${window.location.origin}/sign/${documentShareCredentials.shareId}`, "Signing link")} className="mt-3 secondary">Copy signing link</button></div><div className="rounded-lg border border-orange-200 bg-orange-50 p-3"><div className="text-[10px] font-bold uppercase tracking-[.15em] text-orange-800">Document PIN</div><div className="mt-1 font-mono text-xl font-bold tracking-[.16em] text-orange-950">{documentShareCredentials.pin}</div><button onClick={() => void copyText(documentShareCredentials.pin, "Document PIN")} className="mt-3 secondary">Copy PIN</button></div><p className="text-xs leading-5 text-stone-500">The link does not grant access on its own. Disable or replace it at any time from the document list.</p></div></Modal>}
    </div>
  );
}

function Overview({ accounts, projects, tasks, invoices, activities, onCreate, onView }: { accounts: AccountRecord[]; projects: ProjectRecord[]; tasks: TaskRecord[]; invoices: InvoiceRecord[]; activities: ActivityRecord[]; onCreate: (value: ModalKind) => void; onView: (value: View) => void }) {
  const overdue = tasks.filter((task) => task.status !== "done" && isPastDue(task.dueDate));
  const openInvoices = invoices.filter((invoice) => !["paid", "void"].includes((invoice.status || "").toLowerCase()));
  const paidInvoices = invoices.filter((invoice) => (invoice.status || "").toLowerCase() === "paid");
  const voidInvoices = invoices.filter((invoice) => (invoice.status || "").toLowerCase() === "void");
  const outstanding = openInvoices.reduce((sum, invoice) => sum + invoiceTotal(invoice), 0);
  return <div className="space-y-7"><PageTitle eyebrow="Operations command center" title="Everything moving, in one place." detail="Stay ahead of client work, approvals, and billing without leaving the workspace." action={<button onClick={() => onCreate("account")} className="primary w-full sm:w-auto"><Plus size={16} />New account</button>} /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6"><Metric label="Active accounts" value={String(accounts.length)} detail="Across the CRM" icon={Building2} /><Metric label="Live projects" value={String(projects.length)} detail="Client-visible delivery" icon={FolderKanban} /><Metric label="Tasks needing care" value={String(overdue.length)} detail={overdue.length ? "Past their due date" : "Nothing overdue"} icon={ClipboardList} tone={overdue.length ? "orange" : "green"} /><Metric label="Open billing" value={formatMoney(outstanding)} detail={`${openInvoices.length} invoice${openInvoices.length === 1 ? "" : "s"} in progress`} icon={CircleDollarSign} tone="orange" /><Metric label="Paid invoices" value={String(paidInvoices.length)} detail="Marked paid" icon={CheckCircle2} tone="green" /><Metric label="Voided invoices" value={String(voidInvoices.length)} detail="Excluded from active billing" icon={Ban} /></div><div className="grid gap-5 xl:grid-cols-[1.25fr_.75fr]"><section className="rounded-xl border border-stone-200 bg-white p-5"><div className="flex items-center justify-between"><div><h2 className="font-serif text-2xl font-bold">Today’s operating picture</h2><p className="mt-1 text-xs text-stone-500">Choose the workstream you need next.</p></div></div><div className="mt-5 grid gap-3 sm:grid-cols-2"><ActionCard icon={FolderKanban} title="Plan delivery" detail="Create projects, milestones, and client-visible tasks." action="View projects" onClick={() => onView("Projects")} /><ActionCard icon={FileCheck2} title="Get approvals" detail="Share a document, request signatures, and follow its audit trail." action="Manage documents" onClick={() => onView("Documents")} /><ActionCard icon={CircleDollarSign} title="Prepare billing" detail="Draft invoices linked to projects and account history." action="Open invoices" onClick={() => onView("Invoices")} /><ActionCard icon={Users} title="Link a stakeholder" detail="Connect a client login to an account and control its access." action="View accounts" onClick={() => onView("Accounts")} /></div></section><section className="rounded-xl border border-[#cbd8cf] bg-[#eaf2eb] p-5"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-emerald-800"><CheckCircle2 size={15} />Secure by design</div><h2 className="mt-4 font-serif text-3xl font-bold leading-tight">Client visibility is deliberate.</h2><p className="mt-3 text-sm leading-6 text-stone-600">Internal notes, drafts, and controls stay inside the CRM. Clients only receive account-scoped records you explicitly share.</p><div className="mt-6 rounded-lg bg-white/80 p-3 text-xs font-semibold text-emerald-900">Permissions are enforced by the included Firebase rules.</div></section></div><section className="rounded-xl border border-stone-200 bg-white"><div className="flex items-center justify-between border-b border-stone-100 p-5"><div><h2 className="font-serif text-2xl font-bold">Recent activity</h2><p className="mt-1 text-xs text-stone-500">Audit-friendly events across all accounts.</p></div></div><div className="divide-y divide-stone-100">{activities.length ? activities.slice(0, 8).map((activity) => <ActivityRow key={activity.id} activity={activity} />) : <Empty label="Activity will appear as your team creates accounts, projects, documents, and invoices." />}</div></section></div>;
}

function AccountsView({ accounts, clients, selected, activities, projects, canLinkClients, onCreate, onSelect, onLink, onLogCommunication }: { accounts: AccountRecord[]; clients: ClientRecord[]; selected?: AccountRecord; activities: ActivityRecord[]; projects: ProjectRecord[]; canLinkClients: boolean; onCreate: () => void; onSelect: (id: string) => void; onLink: () => void; onLogCommunication: () => void }) {
  return <div className="space-y-6"><PageTitle eyebrow="Relationship management" title="Accounts and stakeholders" detail="Every project, document, invoice, and client login is linked to an account." action={<div className="flex w-full flex-wrap gap-2 sm:w-auto sm:justify-end"><button onClick={onLogCommunication} className="secondary flex-1 sm:flex-none"><Bell size={15} />Log note</button>{canLinkClients && <button onClick={onLink} className="secondary flex-1 sm:flex-none"><Link2 size={15} />Link client</button>}<button onClick={onCreate} className="primary flex-1 sm:flex-none"><Plus size={16} />New account</button></div>} /><div className="grid gap-5 xl:grid-cols-[.95fr_1.05fr]"><section className="overflow-hidden rounded-xl border border-stone-200 bg-white"><div className="border-b border-stone-100 p-4 text-sm font-bold">{accounts.length} accounts</div><div className="divide-y divide-stone-100">{accounts.length ? accounts.map((account) => <button onClick={() => onSelect(account.id)} key={account.id} className={`block w-full p-4 text-left transition hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500 ${selected?.id === account.id ? "bg-orange-50" : ""}`}><div className="flex items-center justify-between"><strong className="text-sm">{account.name}</strong><Status status={account.status || "active"} /></div><p className="mt-1 text-xs text-stone-500">{account.industry || "General account"} · {account.primaryEmail || "No primary email"}</p><div className="mt-3 text-[11px] font-semibold text-stone-500">{clients.filter((client) => client.accountId === account.id).length} linked contact(s) · {projects.filter((project) => project.accountId === account.id).length} project(s)</div></button>) : <Empty label="Create your first account to begin building the CRM." />}</div></section><section className="rounded-xl border border-stone-200 bg-white p-5">{selected ? <><div className="flex items-start justify-between"><div><div className="text-[10px] font-bold uppercase tracking-[.18em] text-orange-700">Account record</div><h2 className="mt-2 font-serif text-3xl font-bold">{selected.name}</h2><p className="mt-1 text-sm text-stone-500">{selected.industry || "No industry recorded"}</p></div><Status status={selected.status || "active"} /></div><div className="mt-6 grid gap-3 sm:grid-cols-2"><Detail label="Primary email" value={selected.primaryEmail || "Not set"} /><Detail label="Primary phone" value={selected.primaryPhone || "Not set"} /><Detail label="Contacts" value={`${clients.filter((client) => client.accountId === selected.id).length} linked login(s)`} /><Detail label="Projects" value={`${projects.filter((project) => project.accountId === selected.id).length} linked project(s)`} /></div><div className="mt-6"><h3 className="font-serif text-xl font-bold">Contacts and access</h3><div className="mt-3 space-y-2">{clients.filter((client) => client.accountId === selected.id).map((client) => <div key={client.id} className="flex items-center justify-between rounded-lg bg-stone-50 p-3 text-xs"><span><strong>{client.name || client.email || client.id}</strong>{client.email ? ` · ${client.email}` : ""}</span><Status status={client.accountAccessRole || "client"} /></div>) || <Empty label="No contacts linked." />}</div></div><div className="mt-7 border-t border-stone-100 pt-5"><h3 className="font-serif text-xl font-bold">Account timeline</h3><div className="mt-3 divide-y divide-stone-100">{activities.length ? activities.slice(0, 6).map((activity) => <ActivityRow key={activity.id} activity={activity} />) : <Empty label="Activity for this account will appear here." />}</div></div></> : <Empty label="Select an account to view its contacts, linked projects, and timeline." />}</section></div></div>;
}

function ProjectsView({ projects, accounts, documents, onCreate, onEdit, onShare, onDisableShare, onAddDocument }: { projects: ProjectRecord[]; accounts: AccountRecord[]; documents: DocumentRecord[]; onCreate: () => void; onEdit: (project: ProjectRecord) => void; onShare: (project: ProjectRecord) => void; onDisableShare: (project: ProjectRecord) => void; onAddDocument: (project: ProjectRecord) => void }) {
  return <div className="space-y-6"><PageTitle eyebrow="Delivery management" title="Projects with context" detail="Create a private project link, attach documents, and share only what your client needs to see." action={<button onClick={onCreate} className="primary w-full sm:w-auto"><Plus size={16} />New project</button>} /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{projects.length ? projects.map((project) => <article key={project.id} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-lg hover:shadow-stone-200/40"><div className="flex items-start justify-between"><Status status={project.status || "Discovery"} /><span className="rounded-full bg-stone-50 px-2 py-1 text-xs font-bold text-stone-500">{project.progress || 0}% complete</span></div><h2 className="mt-6 font-serif text-2xl font-bold tracking-[-.02em]">{project.name}</h2><p className="mt-1 text-sm text-stone-500">{project.type || "Project"} · {accountName(accounts, project.accountId)}</p><div className="mt-7 h-2 overflow-hidden rounded-full bg-stone-100"><div className="h-full rounded-full bg-orange-500 transition-[width]" style={{ width: `${Math.min(project.progress || 0, 100)}%` }} /></div><div className="mt-4 flex justify-between text-xs text-stone-500"><span>Target date</span><strong className="text-stone-800">{project.dueDate || project.due || "Not scheduled"}</strong></div>{project.milestones?.length ? <div className="mt-4 border-t border-stone-100 pt-3"><div className="text-[10px] font-bold uppercase tracking-wide text-stone-400">Milestones</div>{project.milestones.slice(0, 3).map((milestone, index) => <div key={`${milestone.title}-${index}`} className="mt-2 text-xs text-stone-600">• {milestone.title}{milestone.dueDate ? ` · ${milestone.dueDate}` : ""}</div>)}</div> : null}<div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-4"><span className="inline-flex min-w-0 items-center gap-1.5 text-xs font-semibold text-stone-500"><FileText size={14} className="shrink-0 text-stone-400" />{documents.filter((document) => document.projectId === project.id).length} linked file(s)</span><ProjectActions project={project} onEdit={onEdit} onShare={onShare} onDisableShare={onDisableShare} onAddDocument={onAddDocument} /></div></article>) : <Empty label="No projects match this view. Create a project from an account to start delivery." />}</div></div>;
}

function ProjectActions({ project, onEdit, onShare, onDisableShare, onAddDocument }: { project: ProjectRecord; onEdit: (project: ProjectRecord) => void; onShare: (project: ProjectRecord) => void; onDisableShare: (project: ProjectRecord) => void; onAddDocument: (project: ProjectRecord) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <div className="flex min-w-0 flex-wrap items-center justify-end gap-1.5"><button onClick={() => onAddDocument(project)} className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg bg-orange-600 px-3 py-2 text-xs font-bold text-white shadow-sm shadow-orange-600/20 transition hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 active:translate-y-px"><CloudUpload size={14} /> <span className="hidden sm:inline">Add document</span><span className="sm:hidden">Add</span></button><button onClick={() => onEdit(project)} className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-2.5 py-2 text-xs font-bold text-stone-700 transition hover:border-stone-300 hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 active:translate-y-px" aria-label={`Edit ${project.name}`}><Pencil size={14} /><span className="hidden sm:inline">Edit</span></button><div className="relative shrink-0"><button onClick={() => setMenuOpen((open) => !open)} className={`inline-flex size-9 items-center justify-center rounded-lg border bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 ${menuOpen ? "border-stone-400 text-stone-900 shadow-sm" : "border-stone-200 text-stone-500 hover:border-stone-300 hover:bg-stone-50 hover:text-stone-900"}`} aria-label={`More actions for ${project.name}`} aria-expanded={menuOpen} aria-haspopup="menu"><MoreHorizontal size={17} /></button>{menuOpen && <div className="absolute bottom-11 right-0 z-10 w-44 overflow-hidden rounded-xl border border-stone-200 bg-white p-1.5 shadow-xl shadow-stone-900/10" role="menu"><button onClick={() => { closeMenu(); onShare(project); }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-bold text-stone-700 transition hover:bg-stone-50" role="menuitem"><Link2 size={14} className="text-orange-600" />{project.shareEnabled ? "Rotate PIN" : "Create link"}</button>{project.shareEnabled && <button onClick={() => { closeMenu(); onDisableShare(project); }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-bold text-red-700 transition hover:bg-red-50" role="menuitem"><Lock size={14} />Disable sharing</button>}</div>}</div></div>;
}

function TasksView({ tasks, projects, accounts, onCreate, onUpdate }: { tasks: TaskRecord[]; projects: ProjectRecord[]; accounts: AccountRecord[]; onCreate: () => void; onUpdate: (task: TaskRecord, status: NonNullable<TaskRecord["status"]>) => void }) {
  return <div className="space-y-6"><PageTitle eyebrow="Delivery control" title="Tasks that do not disappear" detail="Keep delivery work, due dates, visibility, and ownership in the same client context." action={<button onClick={onCreate} className="primary w-full sm:w-auto"><Plus size={16} />Add task</button>} /><section className="overflow-hidden rounded-xl border border-stone-200 bg-white"><div className="hidden grid-cols-[1.6fr_.8fr_.8fr_auto] gap-3 border-b border-stone-100 bg-stone-50 px-5 py-3 text-[10px] font-bold uppercase tracking-[.16em] text-stone-500 sm:grid"><span>Task</span><span>Account</span><span>Due</span><span /></div>{tasks.length ? tasks.map((task) => <div key={task.id} className="grid gap-3 border-b border-stone-100 px-5 py-4 last:border-0 sm:grid-cols-[1.6fr_.8fr_.8fr_auto] sm:items-center"><div><div className="flex items-center gap-2"><strong className="text-sm">{task.title}</strong>{task.clientVisible && <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-emerald-700">Client</span>}</div><p className="mt-1 text-xs text-stone-500">{projects.find((project) => project.id === task.projectId)?.name || "Unassigned project"}</p></div><span className="hidden text-xs text-stone-500 sm:block">{accountName(accounts, task.accountId)}</span><div className="flex items-center justify-between gap-3 sm:contents"><span className={`text-xs font-semibold ${task.status !== "done" && isPastDue(task.dueDate) ? "text-red-600" : "text-stone-600"}`}>{task.dueDate || "No date"}</span><select aria-label={`Update status for ${task.title}`} value={task.status || "todo"} onChange={(event) => onUpdate(task, event.target.value as NonNullable<TaskRecord["status"]>)} className="min-h-10 rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-stone-700 focus:border-orange-500 focus:outline-none"><option value="todo">To do</option><option value="in_progress">In progress</option><option value="blocked">Blocked</option><option value="done">Done</option></select></div></div>) : <Empty label="No tasks match this view." />}</section></div>;
}

function DocumentsView({ documents, accounts, projects, onCreate, onDownload, onShare, onDisableShare }: { documents: DocumentRecord[]; accounts: AccountRecord[]; projects: ProjectRecord[]; onCreate: () => void; onDownload: (record: DocumentRecord) => void; onShare: (record: DocumentRecord) => void; onDisableShare: (record: DocumentRecord) => void }) {
  const [projectFilter, setProjectFilter] = useState("all");
  const filteredDocuments = projectFilter === "all" ? documents : projectFilter === "unlinked" ? documents.filter((record) => !record.projectId) : documents.filter((record) => record.projectId === projectFilter);
  const projectName = (projectId?: string) => projects.find((project) => project.id === projectId)?.name || "No linked project";
  return <div className="space-y-6"><PageTitle eyebrow="Approvals and files" title="Documents with a real trail" detail="Filter files by project, control client visibility, request signatures, and keep versions together." action={<button onClick={onCreate} className="primary w-full sm:w-auto"><CloudUpload size={16} />Share document</button>} /><section className="overflow-hidden rounded-xl border border-stone-200 bg-white"><div className="flex flex-col gap-3 border-b border-stone-100 bg-stone-50 p-4 sm:flex-row sm:items-center sm:justify-between"><div><strong className="text-sm">Project documents</strong><p className="mt-1 text-xs text-stone-500">Client-visible PDF signature requests can use a private link and PIN without a portal login.</p></div><select value={projectFilter} onChange={(event) => setProjectFilter(event.target.value)} className="min-h-10 rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-stone-700 focus:border-orange-500 focus:outline-none"><option value="all">All projects</option><option value="unlinked">No linked project</option>{projects.map((project) => <option key={project.id} value={project.id}>{project.name}</option>)}</select></div><div className="hidden grid-cols-[1.4fr_.8fr_.7fr_auto] gap-3 border-b border-stone-100 bg-stone-50 px-5 py-3 text-[10px] font-bold uppercase tracking-[.16em] text-stone-500 sm:grid"><span>Document</span><span>Project</span><span>Status</span><span /></div>{filteredDocuments.length ? filteredDocuments.map((record) => { const canCreateSigningLink = record.needsSignature && record.clientVisible && record.status === "awaiting_signature"; return <div key={record.id} className="grid gap-3 border-b border-stone-100 px-5 py-4 last:border-0 sm:grid-cols-[1.4fr_.8fr_.7fr_auto] sm:items-center"><div className="flex min-w-0 items-center gap-3"><div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-700"><FileText size={17} /></div><div className="min-w-0"><strong className="block truncate text-sm">{record.name}</strong><p className="mt-1 text-xs text-stone-500">{record.needsSignature ? "Signature workflow" : "Shared file"} · {record.clientVisible ? "Client-visible" : "Internal only"} · v{record.version || 1}{record.versionHistory?.length ? ` · ${record.versionHistory.length + 1} versions` : ""}</p>{record.versionHistory?.map((version) => <button key={version.version} onClick={() => onDownload({ ...record, name: `v${version.version}-${version.name}`, storagePath: version.storagePath, signedStoragePath: undefined })} className="mt-1 mr-2 rounded px-1 text-[10px] font-bold text-orange-700 hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">Download v{version.version}</button>)}</div></div><span className="hidden text-xs text-stone-500 sm:block">{projectName(record.projectId)}</span><Status status={record.status || "draft"} /><div className="flex flex-wrap items-center gap-2">{canCreateSigningLink && <button onClick={() => onShare(record)} className="secondary min-h-9 px-3 py-2 text-xs">{record.signingShareEnabled ? "New PIN" : "Create link & PIN"}</button>}{record.signingShareEnabled && <button onClick={() => onDisableShare(record)} className="secondary min-h-9 px-3 py-2 text-xs text-red-700">Disable link</button>}<button onClick={() => onDownload(record)} className="secondary min-h-9 px-3 py-2 text-xs">Download</button></div></div>; }) : <Empty label="No documents match this project filter." />}</section></div>;
}

function SignaturePlacement({ fileUrl, page, pageCount, pageSize, x, y, onPageChange, onPositionChange }: { fileUrl: string; page: number; pageCount: number; pageSize: { width: number; height: number }; x: number; y: number; onPageChange: (page: number) => void; onPositionChange: (position: { x: number; y: number }) => void }) {
  const fieldWidth = Math.min(260, Math.max(130, pageSize.width - 24));
  const fieldHeight = 54;
  function place(event: React.MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextX = Math.max(12, Math.min(pageSize.width - fieldWidth - 12, ((event.clientX - bounds.left) / bounds.width) * pageSize.width - fieldWidth / 2));
    const nextY = Math.max(12, Math.min(pageSize.height - fieldHeight - 12, pageSize.height - ((event.clientY - bounds.top) / bounds.height) * pageSize.height - fieldHeight / 2));
    onPositionChange({ x: nextX, y: nextY });
  }
  return <div className="rounded-lg border border-stone-200 bg-stone-50 p-3"><div className="flex items-center justify-between gap-3"><div><div className="text-[10px] font-bold uppercase tracking-[.16em] text-stone-500">Signature placement</div><p className="mt-1 text-xs text-stone-500">Click on the PDF where the signature should appear.</p></div>{pageCount > 1 && <label className="flex items-center gap-2 text-xs font-semibold text-stone-600">Page <select value={page} onChange={(event) => onPageChange(Number(event.target.value))} className="rounded border border-stone-200 bg-white px-2 py-1"><option value={0}>1</option>{Array.from({ length: pageCount - 1 }, (_, index) => <option key={index + 1} value={index + 1}>{index + 2}</option>)}</select></label>}</div><div className="relative mx-auto mt-3 w-full max-w-[360px] overflow-hidden rounded border border-stone-300 bg-white shadow-sm" style={{ aspectRatio: `${pageSize.width} / ${pageSize.height}` }} onClick={place}><iframe src={`${fileUrl}#page=${page + 1}`} title="PDF signature placement preview" className="pointer-events-none absolute inset-0 h-full w-full border-0" /><div className="pointer-events-none absolute rounded border-2 border-orange-600 bg-orange-100/75 p-2 text-center text-[10px] font-bold text-orange-900" style={{ left: `${(x / pageSize.width) * 100}%`, bottom: `${(y / pageSize.height) * 100}%`, width: `${(fieldWidth / pageSize.width) * 100}%`, height: `${(fieldHeight / pageSize.height) * 100}%` }}>Signature field</div></div></div>;
}

function InvoicesView({ invoices, accounts, clients, onCreate, onStatus, onEdit }: { invoices: InvoiceRecord[]; accounts: AccountRecord[]; clients: ClientRecord[]; onCreate: () => void; onStatus: (invoice: InvoiceRecord, status: string) => void; onEdit: (invoice: InvoiceRecord) => void }) {
  function recipientName(invoice: InvoiceRecord) {
    const client = clients.find((record) => record.id === invoice.clientId);
    return invoice.recipientName || client?.name || client?.email || "";
  }
  return <div className="space-y-6"><PageTitle eyebrow="Billing operations" title="Invoices with delivery context" detail="Prepare, edit, share, track, and download invoices linked to the work they cover." action={<button onClick={onCreate} className="primary w-full sm:w-auto"><Plus size={16} />Create invoice</button>} /><section className="overflow-hidden rounded-xl border border-stone-200 bg-white"><div className="hidden grid-cols-[1.2fr_.8fr_.8fr_auto] gap-3 border-b border-stone-100 bg-stone-50 px-5 py-3 text-[10px] font-bold uppercase tracking-[.16em] text-stone-500 sm:grid"><span>Invoice</span><span>Company</span><span>Total</span><span /></div>{invoices.length ? invoices.map((invoice) => { const companyName = invoice.accountName || accountName(accounts, invoice.accountId); const personName = recipientName(invoice); return <div key={invoice.id} className="grid gap-3 border-b border-stone-100 px-5 py-4 last:border-0 sm:grid-cols-[1.2fr_.8fr_.8fr_auto] sm:items-center"><div><strong className="text-sm">{invoice.number || `INV-${invoice.id.slice(0, 6).toUpperCase()}`}</strong><p className="mt-1 text-xs text-stone-500">{invoice.description || "Professional services"} · {invoice.lineItems?.length || 1} charge(s) · due {invoice.dueDate || "on receipt"}</p><p className="mt-1 text-[11px] font-semibold text-stone-600">Sent to: {personName || "Contact not selected"}</p></div><span className="hidden text-xs text-stone-500 sm:block">{companyName}</span><div><strong className="text-sm">{formatMoney(invoiceTotal(invoice), invoice.currency || "ZAR")}</strong><div className="mt-1"><Status status={invoice.status || "draft"} /></div></div><div className="flex flex-wrap items-center gap-2 sm:justify-end"><button onClick={() => onEdit(invoice)} className="secondary min-h-9 px-3 py-2 text-xs">Edit</button><button onClick={() => downloadInvoicePdf(invoice, companyName, personName, invoice.recipientEmail)} className="secondary min-h-9 px-3 py-2 text-xs">PDF</button>{!["paid", "void"].includes(invoice.status || "draft") && <button onClick={() => onStatus(invoice, "paid")} className="inline-flex min-h-9 items-center rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">Mark paid</button>}<select aria-label={`Update status for ${invoice.number || invoice.id}`} value={invoice.status || "draft"} onChange={(event) => onStatus(invoice, event.target.value)} className="min-h-9 rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-stone-700 focus:border-orange-500 focus:outline-none"><option value="draft">Draft</option><option value="sent">Sent</option><option value="viewed">Viewed</option><option value="partially_paid">Partially paid</option><option value="paid">Paid</option><option value="overdue">Overdue</option><option value="void">Void</option></select></div></div>; }) : <Empty label="No invoices match this view. Create a draft when the project is ready to bill." />}</section></div>;
}

function SettingsView({ clients, accounts }: { clients: ClientRecord[]; accounts: AccountRecord[] }) {
  return <div className="space-y-6"><PageTitle eyebrow="Workspace controls" title="Access and rollout" detail="Keep account visibility intentional as you move existing records into the new CRM model." /><div className="grid gap-5 lg:grid-cols-2"><section className="rounded-xl border border-stone-200 bg-white p-5"><h2 className="font-serif text-2xl font-bold">Account migration checklist</h2><ul className="mt-5 space-y-3 text-sm text-stone-600"><li className="flex gap-3"><CheckCircle2 className="shrink-0 text-emerald-600" size={18} />Create an account for each active client organization.</li><li className="flex gap-3"><CheckCircle2 className="shrink-0 text-emerald-600" size={18} />Link each existing client login to the correct account.</li><li className="flex gap-3"><CheckCircle2 className="shrink-0 text-emerald-600" size={18} />Create new projects under the account; legacy records remain usable.</li><li className="flex gap-3"><CheckCircle2 className="shrink-0 text-emerald-600" size={18} />Deploy the included Firebase rules before using client-facing CRM records.</li></ul></section><section className="rounded-xl border border-stone-200 bg-[#fff6ed] p-5"><h2 className="font-serif text-2xl font-bold">Current rollout</h2><div className="mt-5 grid grid-cols-2 gap-3"><Detail label="CRM accounts" value={String(accounts.length)} /><Detail label="Linked client logins" value={String(clients.filter((client) => client.accountId).length)} /><Detail label="Unlinked client logins" value={String(clients.filter((client) => !client.accountId).length)} /><Detail label="Payment collection" value="Provider-ready" /></div><p className="mt-5 text-xs leading-5 text-stone-600">Invoice tracking is fully operational inside the CRM. Choose a payment provider later to add live collection and reconciliation.</p></section></div></div>;
}

function PageTitle({ eyebrow, title, detail, action }: { eyebrow: string; title: string; detail: string; action?: React.ReactNode }) { return <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="text-[10px] font-bold uppercase tracking-[.2em] text-orange-700">{eyebrow}</div><h1 className="mt-2 font-serif text-4xl font-bold tracking-[-.045em] sm:text-5xl">{title}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-stone-500">{detail}</p></div>{action && <div className="w-full shrink-0 sm:w-auto">{action}</div>}</div>; }
function Metric({ label, value, detail, icon: Icon, tone = "stone" }: { label: string; value: string; detail: string; icon: typeof Building2; tone?: "stone" | "orange" | "green" }) { const styles = tone === "orange" ? "bg-orange-50 text-orange-700" : tone === "green" ? "bg-emerald-50 text-emerald-700" : "bg-stone-100 text-stone-600"; return <div className="rounded-xl border border-stone-200 bg-white p-5"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-stone-500">{label}</span><span className={`flex size-9 items-center justify-center rounded-lg ${styles}`}><Icon size={17} /></span></div><div className="mt-5 font-serif text-3xl font-bold tracking-[-.04em]">{value}</div><p className="mt-1 text-xs text-stone-500">{detail}</p></div>; }
function ActionCard({ icon: Icon, title, detail, action, onClick }: { icon: typeof Building2; title: string; detail: string; action: string; onClick: () => void }) { return <button onClick={onClick} className="rounded-xl border border-stone-200 p-4 text-left transition hover:border-orange-300 hover:bg-orange-50"><Icon className="text-orange-700" size={20} /><h3 className="mt-4 font-serif text-xl font-bold">{title}</h3><p className="mt-1 text-xs leading-5 text-stone-500">{detail}</p><span className="mt-4 inline-block text-xs font-bold text-orange-700">{action} →</span></button>; }
function Status({ status }: { status: string }) { const tone = statusTone(status); const styles = tone === "success" ? "bg-emerald-50 text-emerald-700 ring-emerald-200" : tone === "danger" ? "bg-red-50 text-red-700 ring-red-200" : tone === "warning" ? "bg-orange-50 text-orange-700 ring-orange-200" : "bg-stone-100 text-stone-600 ring-stone-200"; return <span className={`inline-flex rounded-full px-2 py-1 text-[10px] font-bold capitalize ring-1 ring-inset ${styles}`}>{status.replaceAll("_", " ")}</span>; }
function ActivityRow({ activity }: { activity: ActivityRecord }) { return <div className="flex items-start gap-3 p-4"><div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-500"><BriefcaseBusiness size={14} /></div><div className="min-w-0 flex-1"><p className="text-sm font-medium text-stone-700">{activity.message}</p><p className="mt-1 text-xs text-stone-400">{activity.actorName || "Virtuo team"} · {timestampLabel(activity.createdAt)} {activity.clientVisible ? "· Client visible" : "· Internal"}</p></div></div>; }
function Detail({ label, value }: { label: string; value: string }) { return <div className="rounded-lg bg-stone-50 p-3"><div className="text-[10px] font-bold uppercase tracking-[.16em] text-stone-400">{label}</div><div className="mt-1 text-sm font-semibold text-stone-700">{value}</div></div>; }
function Empty({ label }: { label: string }) { return <div className="p-10 text-center text-sm leading-6 text-stone-500">{label}</div>; }
function Banner({ tone, text, onDismiss }: { tone: "success" | "error"; text: string; onDismiss: () => void }) { return <div className={`mb-5 flex items-start justify-between gap-3 rounded-lg border p-3 text-xs font-semibold ${tone === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-800"}`}><span>{text}</span><button onClick={onDismiss} aria-label="Dismiss message" className="crm-icon-button size-7 shrink-0 border-transparent bg-transparent p-0 shadow-none hover:bg-white/60"><X size={15} /></button></div>; }
function Input({ value, onChange, placeholder = "", type = "text", required = false, min, max, step }: { value: string; onChange: (value: string) => void; placeholder?: string; type?: string; required?: boolean; min?: string; max?: string; step?: string }) { return <input required={required} type={type} min={min} max={max} step={step} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-11 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm outline-none focus:border-orange-500" />; }
function Textarea({ value, onChange, placeholder = "", required = false }: { value: string; onChange: (value: string) => void; placeholder?: string; required?: boolean }) { return <textarea required={required} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="min-h-20 w-full rounded-lg border border-stone-200 bg-stone-50 p-3 text-sm outline-none focus:border-orange-500" />; }
function Select({ value, onChange, options, placeholder, required = false, disabled = false }: { value: string; onChange: (value: string) => void; options: { value: string; label: string }[]; placeholder?: string; required?: boolean; disabled?: boolean }) { return <select required={required} disabled={disabled} value={value} onChange={(event) => onChange(event.target.value)} className="h-11 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 text-sm outline-none focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60">{placeholder && <option value="">{placeholder}</option>}{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select>; }
function Submit({ busy, label }: { busy: boolean; label: string }) { return <button disabled={busy} className="primary mt-2 w-full justify-center disabled:opacity-60">{busy && <LoaderCircle className="animate-spin" size={16} />}{busy ? "Saving…" : label}</button>; }
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) { return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"><div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-6"><div className="flex items-center justify-between gap-4"><h2 className="font-serif text-2xl font-bold">{title}</h2><button onClick={onClose} aria-label="Close dialog" className="crm-icon-button size-9 shrink-0 border-transparent bg-stone-50 p-0 shadow-none"><X size={18} /></button></div><div className="mt-5">{children}</div></div></div>; }
function LoadingScreen({ label }: { label: string }) { return <div className="flex min-h-screen items-center justify-center bg-[#f6f5f1] text-sm font-semibold text-stone-500"><LoaderCircle className="mr-2 animate-spin" size={17} />{label}</div>; }
function AccessDenied({ onSignOut }: { onSignOut: () => Promise<void> }) { return <div className="flex min-h-screen items-center justify-center bg-[#f6f5f1] p-5"><div className="max-w-md rounded-xl border border-stone-200 bg-white p-8 text-center"><ShieldAlert className="mx-auto text-orange-600" size={32} /><h1 className="mt-4 font-serif text-3xl font-bold">Internal access only</h1><p className="mt-2 text-sm leading-6 text-stone-500">This login does not have an internal CRM role. Ask an administrator to assign an admin or staff profile.</p><button onClick={() => void onSignOut()} className="primary mx-auto mt-6">Sign out</button></div></div>; }
function accountName(accounts: AccountRecord[], accountId?: string) { return accounts.find((account) => account.id === accountId)?.name || "Legacy client"; }
function includesSearch(term: string, ...values: (string | undefined)[]) { const query = term.trim().toLowerCase(); return !query || values.some((value) => value?.toLowerCase().includes(query)); }
function splitValues(value: string) { return value.split(",").map((item) => item.trim()).filter(Boolean); }
function parseMilestones(value: string) {
  return value.split("\n").map((line) => line.trim()).filter(Boolean).map((line) => {
    const [title, dueDate] = line.split("|").map((item) => item.trim());
    return dueDate ? { title, dueDate } : { title };
  });
}