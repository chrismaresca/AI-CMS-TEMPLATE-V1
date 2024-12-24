import { MetadataRoute } from "next";
import { fetchArticlesByBrand } from "@/data/getPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!process.env.BRAND_ID) {
    throw new Error("BRAND_ID is not defined. Please define it as an environment variable.");
  }

  const articles = await fetchArticlesByBrand(process.env.BRAND_ID);

  const baseURL = process.env.NEXT_PUBLIC_URL;

  if (!baseURL) {
    throw new Error("NEXT_PUBLIC_URL is not defined. Please define it as an environment variable.");
  }

  return [
    {
      url: `${baseURL}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseURL}/articles`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    ...articles.docs.map((article) => ({
      url: `${baseURL}/articles/${article.slug}`,
      lastModified: new Date(article.dateUpdated || article.dateCreated).toISOString(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),

    // Add more URLs as needed
  ];
}
