// // Constants
import { POSTS_API_BASE_URL } from "@/constants";

// // Types
import { ArticleResponse } from "@/types";

// =====================================================================================================
// =====================================================================================================
// Article Fetching
// =====================================================================================================
// =====================================================================================================

/**
 * Fetches articles associated with a specific brand ID.
 * @param {string} brandId - The unique identifier of the brand for which articles are to be fetched.
 * @returns {Promise<ArticleResponse>} A promise that resolves to the response containing the articles for the specified brand.
 * @throws {Error} If the fetch operation fails or if the POSTS_API_BASE_URL is not defined.
 */
export async function fetchArticlesByBrand(brandId: string): Promise<ArticleResponse> {
  if (!POSTS_API_BASE_URL) {
    throw new Error("POSTS_API_BASE_URL is not defined. Please define it as an environment variable.");
  }

  const response = await fetch(`${POSTS_API_BASE_URL}/api/articles?where[brandId][equals]=${brandId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 1800,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.statusText}`);
  }

  return response.json();
}

// =====================================================================================================
// =====================================================================================================

/**
 * Fetches a single article based on its slug.
 * @param {string} slug - The unique slug of the article to be fetched.
 * @returns {Promise<ArticleResponse>} A promise that resolves to the fetched article.
 * @throws {Error} If the fetch operation fails or if the POSTS_API_BASE_URL is not defined.
 */
export async function fetchArticleBySlug(slug: string): Promise<ArticleResponse> {
  if (!POSTS_API_BASE_URL) {
    throw new Error("POSTS_API_BASE_URL is not defined. Please define it as an environment variable.");
  }

  const response = await fetch(`${POSTS_API_BASE_URL}/api/articles?where[slug][equals]=${slug}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch article: ${response.statusText}`);
  }


  return response.json();
}

// =====================================================================================================
// =====================================================================================================

