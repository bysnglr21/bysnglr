import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="container py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-brand" aria-hidden />
            <span className="font-semibold">Dicle Arabuluculuk Merkezi</span>
          </div>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Uyuşmazlık çözümünde güvenilir, şeffaf ve etkili hizmet.
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Bağlantılar</h3>
          <ul className="space-y-1">
            <li><Link href="/akademi" className="hover:underline">Akademi</Link></li>
            <li><Link href="/akademi/hesaplama-araclari" className="hover:underline">Hesaplama Araçları</Link></li>
            <li><Link href="/gizlilik" className="hover:underline">Gizlilik</Link></li>
            <li><Link href="/cerezler" className="hover:underline">Çerezler</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">İletişim</h3>
          <p>E-posta: info@diclearabuluculuk.com</p>
          <p>Telefon: +90 000 000 00 00</p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Dicle Arabuluculuk Merkezi. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}