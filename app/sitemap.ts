import { games } from "@/data/games";

export default function sitemap() {

  const baseUrl = "https://yourdomain.com";

  const urls = games.map((game) => ({
    url: `${baseUrl}/chart/${game}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    ...urls,
  ];
}