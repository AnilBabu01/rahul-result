// app/sitemap.ts

import { games } from "@/data/games";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rahul-result.vercel.app";

  // Remove duplicate routes
  const uniqueGames = [...new Set(games)];

  const gameUrls = uniqueGames.map((game) => ({
    url: `${baseUrl}/${game}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    ...gameUrls,
  ];
}