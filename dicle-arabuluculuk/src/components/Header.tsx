"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" aria-label="Dicle Arabuluculuk Merkezi ana sayfa" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand" aria-hidden />
          <span className="font-semibold tracking-tight">Dicle Arabuluculuk Merkezi</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/hakkimizda" className="hover:underline">Hakkımızda</Link>
          <Link href="/akademi" className="hover:underline">Akademi</Link>
          <Link href="/akademi/hesaplama-araclari" className="hover:underline">Hesaplama Araçları</Link>
          <Link href="/iletisim" className="hover:underline">İletişim</Link>
        </nav>
      </div>
    </header>
  );
}