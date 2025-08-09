import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.diclearabuluculuk.com"),
  title: {
    default: "Dicle Arabuluculuk Merkezi",
    template: "%s | Dicle Arabuluculuk Merkezi",
  },
  description:
    "Dicle Arabuluculuk Merkezi: Uyuşmazlıkların hızlı, şeffaf ve etkin çözümü. Akademi içerikleri ve hesaplama araçları ile yanınızdayız.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Dicle Arabuluculuk Merkezi",
    description:
      "Uyuşmazlık çözümünde güvenilir adres. Akademi ve hesaplama araçları ile hizmetinizde.",
    siteName: "Dicle Arabuluculuk Merkezi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dicle Arabuluculuk Merkezi",
    description:
      "Uyuşmazlık çözümünde güvenilir adres. Akademi ve hesaplama araçları ile hizmetinizde.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Dicle Arabuluculuk Merkezi",
  category: "Legal Services",
  creator: "Dicle Arabuluculuk Merkezi",
  colorScheme: "light",
  themeColor: "#0f766e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="min-h-full bg-background text-foreground">
      <body className={`${manrope.variable} ${mono.variable} antialiased min-h-screen flex flex-col`}> 
        {/* Skip to content link for accessibility */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-brand text-white px-3 py-2 rounded">İçeriğe geç</a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
