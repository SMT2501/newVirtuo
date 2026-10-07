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

export async function downloadInvoicePdf(invoice: InvoiceRecord, accountName: string, recipientName = "", recipientEmail = "") {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595, 842]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const total = invoiceTotal(invoice);
  const invoiceNumber = invoice.number || invoice.id.slice(0, 8).toUpperCase();
  const lineItems = invoice.lineItems?.length ? invoice.lineItems : [{ description: invoice.description || "Professional services", quantity: 1, unitPrice: total }];

  page.drawText("VIRTUO DESIGNS", { x: 124, y: 797, size: 15, font: bold, color: rgb(0.07, 0.07, 0.07) });
  page.drawText("Web Design, Development & Digital Consulting", { x: 124, y: 780, size: 8, font, color: rgb(0.42, 0.42, 0.42) });
  page.drawText("Cape Town, South Africa | CIPC Reg. 2025/014412/07", { x: 124, y: 766, size: 7.2, font, color: rgb(0.42, 0.42, 0.42) });
  try {
    const logoResponse = await fetch("/virtuo-designs-letterhead-logo.png");
    if (!logoResponse.ok) throw new Error("Letterhead logo is unavailable.");
    const logo = await pdf.embedPng(await logoResponse.arrayBuffer());
    page.drawImage(logo, { x: 52, y: 758, width: 58, height: 58 });
  } catch {
    page.drawText("VD", { x: 60, y: 777, size: 22, font: bold, color: rgb(0.07, 0.07, 0.07) });
  }
  page.drawLine({ start: { x: 52, y: 744 }, end: { x: 543, y: 744 }, thickness: 1.25, color: rgb(0.87, 0.39, 0.05) });

  page.drawText("INVOICE", { x: 52, y: 706, size: 10, font: bold, color: rgb(0.87, 0.39, 0.05) });
  page.drawText(`Invoice ${invoiceNumber}`, { x: 52, y: 676, size: 20, font: bold, color: rgb(0.07, 0.07, 0.07) });
  page.drawText(`Bill to: ${invoice.accountName || accountName}`, { x: 52, y: 640, size: 11, font });
  if (invoice.recipientName || recipientName) page.drawText(`Sent to: ${invoice.recipientName || recipientName}`, { x: 52, y: 622, size: 10, font, color: rgb(0.25, 0.25, 0.23) });
  if (invoice.recipientEmail || recipientEmail) page.drawText(`Email: ${invoice.recipientEmail || recipientEmail}`, { x: 52, y: 606, size: 9, font, color: rgb(0.42, 0.42, 0.42) });
  page.drawText(`Due: ${invoice.dueDate || "On receipt"}`, { x: 52, y: invoice.recipientName || recipientName || invoice.recipientEmail || recipientEmail ? 588 : 622, size: 10, font, color: rgb(0.42, 0.42, 0.42) });

  let y = 548;
  page.drawRectangle({ x: 52, y: y - 12, width: 491, height: 28, color: rgb(0.97, 0.96, 0.94) });
  page.drawText("Description", { x: 64, y, size: 10, font: bold });
  page.drawText("Qty", { x: 396, y, size: 10, font: bold });
  page.drawText("Amount", { x: 468, y, size: 10, font: bold });
  y -= 30;
  for (const item of lineItems) {
    page.drawText(item.description, { x: 52, y, size: 10, font });
    page.drawText(String(item.quantity), { x: 400, y, size: 10, font });
    page.drawText(formatMoney(item.quantity * item.unitPrice, invoice.currency || "ZAR"), { x: 468, y, size: 10, font });
    page.drawLine({ start: { x: 52, y: y - 9 }, end: { x: 543, y: y - 9 }, thickness: 0.5, color: rgb(0.9, 0.89, 0.86) });
    y -= 26;
  }

  const subtotal = invoice.subtotal ?? total - (invoice.taxAmount || 0) + (invoice.discount || 0);
  page.drawText(`Subtotal: ${formatMoney(subtotal, invoice.currency || "ZAR")}`, { x: 350, y: 180, size: 10, font });
  if (invoice.discount) page.drawText(`Discount: -${formatMoney(invoice.discount, invoice.currency || "ZAR")}`, { x: 350, y: 162, size: 10, font });
  if (invoice.taxAmount) page.drawText(`Tax: ${formatMoney(invoice.taxAmount, invoice.currency || "ZAR")}`, { x: 350, y: 144, size: 10, font });
  page.drawText(`Total: ${formatMoney(total, invoice.currency || "ZAR")}`, { x: 350, y: 116, size: 16, font: bold, color: rgb(0.07, 0.07, 0.07) });
  page.drawText(`Status: ${invoice.status || "draft"}`, { x: 350, y: 96, size: 9, font, color: rgb(0.42, 0.42, 0.42) });

  page.drawRectangle({ x: 52, y: 96, width: 280, height: 116, color: rgb(0.97, 0.96, 0.94), borderColor: rgb(0.9, 0.89, 0.86), borderWidth: 0.75 });
  page.drawText("BANKING DETAILS", { x: 64, y: 194, size: 9, font: bold, color: rgb(0.07, 0.07, 0.07) });
  const bankingDetails = [
    "Bank Branch Name: Standard Bank",
    "Account Holder: Virtuo Designs (Pty) Ltd",
    "Account Number: 10 23 986 724 4",
    `Payment Reference: ${invoiceNumber}`,
    "Branch Code: 1110",
    "Type: Current",
  ];
  bankingDetails.forEach((detail, index) => {
    page.drawText(detail, { x: 64, y: 178 - index * 15, size: 7.5, font, color: rgb(0.25, 0.25, 0.23) });
  });

  page.drawLine({ start: { x: 52, y: 72 }, end: { x: 543, y: 72 }, thickness: 1.25, color: rgb(0.87, 0.39, 0.05) });
  const companyLine = "Virtuo Designs (Pty) Ltd  |  CIPC Reg. 2025/014412/07  |  Firlands Minor Rd, Admirals Park, Cape Town, 7135";
  const contactLine = "virtuodesigns.co.za  |  hello@virtuodesigns.co.za  |  +27 69 771 4283";
  page.drawText(companyLine, { x: (595 - font.widthOfTextAtSize(companyLine, 7.2)) / 2, y: 55, size: 7.2, font, color: rgb(0.42, 0.42, 0.42) });
  page.drawText(contactLine, { x: (595 - font.widthOfTextAtSize(contactLine, 7.2)) / 2, y: 41, size: 7.2, font, color: rgb(0.42, 0.42, 0.42) });

  download(await pdf.save(), `invoice-${invoiceNumber}.pdf`);
}