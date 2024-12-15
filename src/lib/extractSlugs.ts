import { Article } from "@/types";

/**
 * Extracts slugs from the given articles response.
 * @param {Article[]} articles - The response containing articles.
 * @returns {Array<{ slug: string }>} An array of slugs.
 */
export function extractSlugs(articles: Article[]): Array<{ slug: string }> {
  if (!articles) {
    return [];
  }

  return articles.map((article) => ({
    slug: article.slug,
  }));
}
