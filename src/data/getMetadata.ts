// // Constants
import { POSTS_API_BASE_URL } from "@/constants";
import { Metadata } from "next";

// Types
import { BrandMetadata, TagMetadata } from "@/types";

/**
 * Fetches brand metadata based on the provided brand ID.
 * @param {string} brandId - The unique identifier for the brand.
 * @returns {Promise<Metadata>} A promise that resolves to the metadata for the brand.
 */
export async function getBrandMetadata(brandId: string): Promise<Metadata> {
  const metadataObject: BrandMetadata = await fetch(`${POSTS_API_BASE_URL}/api/metadata/brands/${brandId}`).then((response) => response.json());

  const keywords = metadataObject.tags?.map((tag: { tag: { name: string } }) => tag.tag.name);

  const ogImageUrl = metadataObject.ogImageUrl ? metadataObject.ogImageUrl : undefined;

  const ogImages = ogImageUrl ? [{ url: ogImageUrl, alt: metadataObject.name, width: 1200, height: 630 }] : undefined;

  const brandMetadata: Metadata = {
    metadataBase: new URL(metadataObject.websiteUrl),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
      },
    },
    title: {
      default: metadataObject.name,
      template: `%s | ${metadataObject.name}`,
    },
    description: metadataObject.description,
    applicationName: metadataObject.name,
    authors: [{ name: metadataObject.founder }],
    creator: metadataObject.founder,
    keywords: keywords || null,
    publisher: metadataObject.name,
    openGraph: {
      title: metadataObject.name,
      description: metadataObject.description,
      images: ogImages,
      url: metadataObject.websiteUrl,
      siteName: metadataObject.name,
      type: "website",
      locale: "en_US",
      countryName: "United States",
    },
    twitter: {
      card: "summary",
      title: metadataObject.name,
      description: metadataObject.description,
      images: ogImages,
      site: `@${metadataObject.twitterHandle}`,
      creator: metadataObject.founder,
    },
  };

  return brandMetadata;
}

// =====================================================================================================
// =====================================================================================================

/**
 * Fetches metadata for a tag based on its slug.
 * @param {string} slug - The unique slug of the tag.
 * @returns {Promise<Metadata>} A promise that resolves to the metadata for the tag.
 */
export async function getTagMetadataBySlug(slug: string): Promise<Metadata> {
  const metadataObject: TagMetadata = await fetch(`${POSTS_API_BASE_URL}/api/metadata/tags/${slug}`).then((response) => response.json());

  const tagMetadata: Metadata = {
    title: metadataObject.name,
    description: metadataObject.description,
    openGraph: {
      title: metadataObject.name,
      description: metadataObject.description,
    },
    twitter: {
      title: metadataObject.name,
      description: metadataObject.description,
    },
    alternates: {
      canonical: `/articles?tag=${slug}`,
    },
  };

  return tagMetadata;
}

// =====================================================================================================
// =====================================================================================================
