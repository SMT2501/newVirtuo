import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import type { InvoiceRecord } from "@/lib/crm";
import { formatMoney, invoiceTotal } from "@/lib/crm";

function download(bytes: Uint8Array, filename: string, type = "application/pdf") {
  const blob = pdfBlob(bytes, type);
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function pdfBlob(bytes: Uint8Array, type = "application/pdf") {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  return new Blob([copy.buffer], { type });
}

export async function getPdfPageSize(source: ArrayBuffer, pageNumber = 0) {
  const pdf = await PDFDocument.load(source);
  const page = pdf.getPages()[Math.min(Math.max(pageNumber, 0), pdf.getPageCount() - 1)];
  const { width, height } = page.getSize();
  return { width, height, pageCount: pdf.getPageCount() };
}

export async function stampSignature(
  source: ArrayBuffer,
  signerName: string,
  field: { page?: number; x?: number; y?: number } = {},
) {
  const pdf = await PDFDocument.load(source);
  const pages = pdf.getPages();
  const page = pages[Math.min(Math.max(field.page || 0, 0), pages.length - 1)];
  const { width, height } = page.getSize();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const x = field.x ?? 52;
  const y = field.y ?? 58;

  page.drawRectangle({
    x,
    y,
    width: Math.min(260, width - x - 24),
    height: 54,
    color: rgb(0.98, 0.95, 0.9),
    borderColor: rgb(0.78, 0.38, 0.08),
    borderWidth: 1,
  });
  page.drawText(`Signed electronically by ${signerName}`, { x: x + 10, y: y + 31, size: 12, font, color: rgb(0.12, 0.1, 0.08) });
  page.drawText(`Virtuo client portal · ${new Date().toLocaleString("en-ZA")}`, { x: x + 10, y: y + 14, size: 8, font, color: rgb(0.35, 0.32, 0.28) });
  return pdf.save();
}

export async function downloadInvoicePdf(invoice: InvoiceRecord, accountName: string) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595, 842]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const total = invoiceTotal(invoice);
  const lineItems = invoice.lineItems?.length ? invoice.lineItems : [{ description: invoice.description || "Professional services", quantity: 1, unitPrice: total }];

  page.drawText("VIRTUO.", { x: 52, y: 786, size: 26, font: bold, color: rgb(0.1, 0.1, 0.08) });
  page.drawText("INVOICE", { x: 52, y: 742, size: 11, font: bold, color: rgb(0.75, 0.28, 0.03) });
  page.drawText(`Invoice ${invoice.number || invoice.id.slice(0, 8).toUpperCase()}`, { x: 52, y: 715, size: 20, font: bold });
  page.drawText(`Bill to: ${accountName}`, { x: 52, y: 680, size: 11, font });
  page.drawText(`Due: ${invoice.dueDate || "On receipt"}`, { x: 52, y: 662, size: 10, font, color: rgb(0.35, 0.32, 0.28) });

  let y = 610;
  page.drawText("Description", { x: 52, y, size: 10, font: bold });
  page.drawText("Qty", { x: 396, y, size: 10, font: bold });
  page.drawText("Amount", { x: 468, y, size: 10, font: bold });
  y -= 22;
  for (const item of lineItems) {
    page.drawText(item.description, { x: 52, y, size: 10, font });
    page.drawText(String(item.quantity), { x: 400, y, size: 10, font });
    page.drawText(formatMoney(item.quantity * item.unitPrice, invoice.currency || "ZAR"), { x: 468, y, size: 10, font });
    y -= 26;
  }

  const subtotal = invoice.subtotal ?? total - (invoice.taxAmount || 0) + (invoice.discount || 0);
  page.drawText(`Subtotal: ${formatMoney(subtotal, invoice.currency || "ZAR")}`, { x: 350, y: 180, size: 10, font });
  if (invoice.discount) page.drawText(`Discount: -${formatMoney(invoice.discount, invoice.currency || "ZAR")}`, { x: 350, y: 162, size: 10, font });
  if (invoice.taxAmount) page.drawText(`Tax: ${formatMoney(invoice.taxAmount, invoice.currency || "ZAR")}`, { x: 350, y: 144, size: 10, font });
  page.drawText(`Total: ${formatMoney(total, invoice.currency || "ZAR")}`, { x: 350, y: 108, size: 16, font: bold });
  page.drawText(`Status: ${invoice.status || "draft"}`, { x: 52, y: 72, size: 9, font, color: rgb(0.35, 0.32, 0.28) });

  download(await pdf.save(), `invoice-${invoice.number || invoice.id}.pdf`);
}