import { POSTS_API_BASE_URL, BRAND_ID } from "@/constants";
import { TagResponse } from "@/types";

// =====================================================================================================
// =====================================================================================================
// Tag Fetching
// =====================================================================================================
// =====================================================================================================

/**
 * Fetches tags associated with the specified brand ID.
 * @returns {Promise<TagResponse>} A promise that resolves to the tags for the brand.
 * @throws {Error} If the environment variables are not defined or the fetch operation fails.
 */
export async function fetchTagsByBrand(brandId: string): Promise<TagResponse> {
  if (!POSTS_API_BASE_URL || !brandId) {
    throw new Error("Environment variables POSTS_API_BASE_URL and BRAND_ID must be defined.");
  }

  const tags = await fetch(`${POSTS_API_BASE_URL}/api/tags?where[brandId][equals]=${BRAND_ID}`, {
    next: {
      revalidate: 1800,
    },
  });

  if (!tags.ok) {
    throw new Error(`Failed to fetch tags: ${tags.statusText}`);
  }

  return tags.json();
}

// =====================================================================================================
// =====================================================================================================




