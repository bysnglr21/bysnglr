import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Dicle Arabuluculuk Merkezi</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Uyuşmazlıkları hızlı, adil ve etkin bir şekilde çözmek için buradayız. Akademi içeriklerimiz ve özgün hesaplama araçlarımızla yanınızdayız.</p>
            <div className="mt-8 flex gap-3">
              <Link href="/akademi/hesaplama-araclari" className="btn btn-primary">Hesaplama Araçları</Link>
              <Link href="/akademi" className="btn">Akademi</Link>
            </div>
          </div>
          <div className="card p-8 bg-gradient-to-br from-white to-muted">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-white border border-border">
                <div className="h-6 w-6 rounded bg-brand mb-2" />
                <p className="font-medium">Güvenilir Hesaplamalar</p>
                <p className="text-gray-600">Formüller şeffaf ve testlerle doğrulanmış.</p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-border">
                <div className="h-6 w-6 rounded bg-brand mb-2" />
                <p className="font-medium">Mobil Performans</p>
                <p className="text-gray-600">Lighthouse 90+ hedefiyle optimize edildi.</p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-border">
                <div className="h-6 w-6 rounded bg-brand mb-2" />
                <p className="font-medium">Erişilebilirlik</p>
                <p className="text-gray-600">WCAG odaklı tasarım ve etkileşim.</p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-border">
                <div className="h-6 w-6 rounded bg-brand mb-2" />
                <p className="font-medium">PDF & Yazdırma</p>
                <p className="text-gray-600">Sonuçları kolayca dışa aktarın.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
