import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Hesaplama Araçları",
  description: "Arabuluculuk süreçlerinde ihtiyaç duyabileceğiniz hesaplayıcılar.",
};

export default function CalculatorsIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Hesaplama Araçları",
    hasPart: [
      { "@type": "SoftwareApplication", name: "Basit Faiz Hesaplayıcı", applicationCategory: "BusinessApplication", url: "/akademi/hesaplama-araclari/basit-faiz" },
    ],
  };

  return (
    <div className="container py-10">
      <JsonLd data={jsonLd} />
      <h1 className="text-3xl font-semibold">Hesaplama Araçları</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Arabuluculuk süreçlerinde sık kullanılan hesaplamaları kolayca yapın.</p>
      <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/akademi/hesaplama-araclari/basit-faiz" className="card p-5 hover:shadow transition-shadow">
          <h2 className="font-medium">Basit Faiz Hesaplayıcı</h2>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">Anapara, oran ve gün sayısına göre faiz ve toplam tutarı hesaplayın.</p>
        </Link>
      </div>
    </div>
  );
}