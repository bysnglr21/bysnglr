"use client";

import { useMemo, useRef, useState } from "react";
import { z } from "zod";
import { simpleInterestInputSchema, calculateSimpleInterest } from "@/lib/calculations/simpleInterest";
import { exportElementToPdf, printElement } from "@/lib/pdf";
import JsonLd from "@/components/JsonLd";

const formSchema = simpleInterestInputSchema.extend({});

type FormState = z.infer<typeof formSchema>;

export default function BasitFaizPage() {
  const [form, setForm] = useState<FormState>({ principal: 10000, rateAnnualPercent: 18, days: 30, basis: "actual/365" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const result = useMemo(() => {
    try {
      setErrors({});
      return calculateSimpleInterest(form);
    } catch (e) {
      const zerr = e as z.ZodError;
      const fieldErrors: Record<string, string> = {};
      zerr?.issues?.forEach((issue) => {
        const path = issue.path.join(".");
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return undefined;
    }
  }, [form]);

  const resultRef = useRef<HTMLDivElement>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Basit Faiz Hesaplayıcı",
    applicationCategory: "BusinessApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
  };

  return (
    <div className="container py-10">
      <JsonLd data={jsonLd} />
      <h1 className="text-3xl font-semibold">Basit Faiz Hesaplayıcı</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Anapara, yıllık oran ve gün sayısına göre faiz tutarını hesaplayın.</p>

      <div className="grid gap-6 mt-6 md:grid-cols-[1fr_1fr]">
        <form className="card p-5 space-y-4" onSubmit={(e) => e.preventDefault()} aria-describedby="form-help">
          <div>
            <label className="block text-sm font-medium" htmlFor="principal">Anapara (TRY)</label>
            <input id="principal" type="number" inputMode="decimal" className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-white" value={form.principal} onChange={(e) => setForm((s) => ({ ...s, principal: Number(e.target.value) }))} />
            {errors.principal && <p className="text-red-600 text-xs mt-1">{errors.principal}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="rate">Yıllık Oran (%)</label>
            <input id="rate" type="number" inputMode="decimal" className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-white" value={form.rateAnnualPercent} onChange={(e) => setForm((s) => ({ ...s, rateAnnualPercent: Number(e.target.value) }))} />
            {errors.rateAnnualPercent && <p className="text-red-600 text-xs mt-1">{errors.rateAnnualPercent}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="days">Gün Sayısı</label>
            <input id="days" type="number" inputMode="numeric" className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-white" value={form.days} onChange={(e) => setForm((s) => ({ ...s, days: Number(e.target.value) }))} />
            {errors.days && <p className="text-red-600 text-xs mt-1">{errors.days}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="basis">Gün Bazı</label>
            <select id="basis" className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-white" value={form.basis} onChange={(e) => setForm((s) => ({ ...s, basis: e.target.value as FormState["basis"] }))}>
              <option value="actual/365">Actual/365</option>
              <option value="actual/360">Actual/360</option>
              <option value="30/360">30/360</option>
            </select>
          </div>
          <p id="form-help" className="text-xs text-gray-500">Girdiğiniz değerler cihazınızda kalır, sunucuya gönderilmez.</p>
        </form>

        <div className="space-y-4">
          <div ref={resultRef} className="card p-5 bg-white">
            <h2 className="font-medium">Sonuç</h2>
            {result ? (
              <div className="mt-2 text-sm">
                <div className="flex justify-between py-1"><span>Günlük Oran:</span><span>{(result.dailyRate * 100).toFixed(5)}%</span></div>
                <div className="flex justify-between py-1"><span>Faiz Tutarı:</span><span>{result.interest.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}</span></div>
                <div className="flex justify-between py-1 font-medium"><span>Toplam Tutar:</span><span>{result.total.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}</span></div>
              </div>
            ) : (
              <p className="text-gray-500">Lütfen geçerli değerler girin.</p>
            )}
          </div>
          <div className="flex gap-2">
            <button className="btn" onClick={() => resultRef.current && printElement(resultRef.current)}>Yazdır</button>
            <button className="btn btn-primary" onClick={() => resultRef.current && exportElementToPdf({ element: resultRef.current, fileName: "basit-faiz-sonuc", title: "Basit Faiz Hesaplayıcı Sonucu" })}>PDF Olarak Dışa Aktar</button>
          </div>
        </div>
      </div>
    </div>
  );
}