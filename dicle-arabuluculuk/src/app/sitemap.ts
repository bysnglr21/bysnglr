import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.diclearabuluculuk.com";
  const routes = [
    "",
    "/akademi",
    "/akademi/hesaplama-araclari",
    "/akademi/hesaplama-araclari/basit-faiz",
    "/hakkimizda",
    "/iletisim",
    "/gizlilik",
    "/cerezler",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}