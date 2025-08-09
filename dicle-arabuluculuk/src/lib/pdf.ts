"use client";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function exportElementToPdf(options: {
  element: HTMLElement;
  fileName: string;
  title?: string;
  logoUrl?: string;
}) {
  const { element, fileName, title, logoUrl } = options;
  const canvas = await html2canvas(element, { scale: 2, backgroundColor: "#ffffff" });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // Header
  if (title || logoUrl) {
    if (logoUrl) {
      // Images must be same-origin or data URL
      try {
        // This assumes a data URL or same-origin public path
        pdf.addImage(logoUrl, "PNG", 40, 28, 32, 32);
      } catch {}
    }
    if (title) {
      pdf.setFontSize(14);
      pdf.text(title, 80, 48, { maxWidth: pageWidth - 160 });
    }
    pdf.setDrawColor(230);
    pdf.line(40, 70, pageWidth - 40, 70);
  }

  // Content image
  const contentY = 90;
  const contentWidth = pageWidth - 80;
  const ratio = canvas.height / canvas.width;
  const contentHeight = contentWidth * ratio;
  pdf.addImage(imgData, "PNG", 40, contentY, contentWidth, contentHeight);

  // Footer date
  const date = new Date().toLocaleString();
  pdf.setFontSize(9);
  pdf.text(`Oluşturma Tarihi: ${date}`, 40, pageHeight - 30);

  pdf.save(fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`);
}

export function printElement(element: HTMLElement) {
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;
  const html = `<!doctype html><html><head><title>Yazdır</title><style>body{font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;} .container{padding:24px;}</style></head><body><div class="container">${element.outerHTML}</div></body></html>`;
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}