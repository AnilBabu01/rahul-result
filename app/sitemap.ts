// app/sitemap.ts

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

type MarketItem = {
  id: number;
  name: string;
  result: string;
  date: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\[.*?\]/g, "") // remove [main]
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sattamatkadpb.net/";

  // STATIC PAGES
  const staticGames = [
    "panel-chart/kalyan-morning-panel-chart",
    "panel-chart/kalyan-night-panel-chart",
    "madhur-night-chart",
    "rajdhani-day-chart",
    "panel-chart/asha-bazar-panel-chart",
    "main-bazar-chart",
    "satta-matka-guessing-forum",
    "open-to-close",
    "weekly-jodi-panna",
    "fatafat/rajdhani-fatafat",
    "satta-matka-chart",
    "all-panna-record",
    "about-us",
    "contact",
    "disclaimer",
    "privacy-policy",
  ];

  // FETCH MARKET LIST API
  let marketGames: string[] = [];

  try {
    const res = await fetch(
      "https://sattamatkadpbos.com//apis/client_cron_market.php?action=get_market_list",
      {
        next: { revalidate: 3600 }, // 1 hour cache
      },
    );

    const json = await res.json();

    if (json?.status && Array.isArray(json.data)) {
      marketGames = json.data.flatMap((item: MarketItem) => {
        const slug = slugify(item.name);

        return [`jodi-chart/${slug}-chart`, `panel-chart/${slug}-panel-chart`];
      });
    }
  } catch (error) {
    console.error("Sitemap API Error:", error);
  }

  // MERGE + REMOVE DUPLICATES
  const uniqueGames = [...new Set([...staticGames, ...marketGames])];

  // GENERATE URLS
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
