import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://puno-tech.vercel.app/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://puno-tech.vercel.app/privacidad",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
