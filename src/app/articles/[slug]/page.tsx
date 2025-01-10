// Types
import { NextParams, ArticleResponse } from "@/types";

// Next Navigation
import { notFound } from "next/navigation";

// Article Components
import {
  ArticleTags,
  ArticleHeader,
  ArticleAuthor,
  FollowSocials,
  // ArticleReactions,
  // ArticleShare
} from "@/components/articles";

// Custom MDX
import { CustomMDX } from "@/components/mdx-components";

// Constants
import { BRAND_ID } from "@/constants";

// Utilities
import { extractSlugs } from "@/lib/extractSlugs";
import { fetchArticlesByBrand, fetchArticleBySlug } from "@/data/getPosts";

// Revalidate every hour (3600 seconds)
export const revalidate = 3600;

// Allow dynamic paths that aren't generated statically
// export const dynamicParams = true;

/**
 * Generates static parameters for the dynamic blog post pages.
 * @returns {Array<{ slug: string }>} An array of slugs.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  if (!BRAND_ID) {
    throw new Error("BRAND_ID is not defined. Please define it as an environment variable.");
  }

  try {
    const posts = await fetchArticlesByBrand(BRAND_ID);
    return extractSlugs(posts.docs);
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// export const experimental_ppr = true;

export async function generateMetadata({ params: paramsPromise }: NextParams) {
  const { slug = "" } = await paramsPromise;

  const postObject = await fetchArticleBySlug(slug);
  const post = postObject.docs[0];

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/articles/${post.slug}`,
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/articles/${post.slug}`,
    },
  };
}

export default async function BlogPost({ params: paramsPromise }: NextParams) {
  const { slug } = await paramsPromise;

  if (!slug) {
    notFound();
  }

  const postObject: ArticleResponse | null = await fetchArticleBySlug(slug);

  const post = postObject.docs[0];


  if (!post) {
    notFound();
  }

  const mainTag = post.tags?.[0]?.tag ?? { name: "No tags found", slug: "no-tags-found" };

  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24">
      <div className="flex justify-between px-10 lg:px-4 2xl:px-0 mx-auto max-w-screen-xl motion-preset-slide-up-sm motion-duration-[2s] motion-ease-spring-smooth">
        {/* Start Article */}
        <article className="mx-auto w-full max-w-[48rem] format format-sm sm:format-base lg:format-lg format-blue dark:format-invert font-sans">
          {/* Start Article Header */}
          <ArticleHeader title={post.title} author={post.author} date={post.dateUpdated} mainTagName={mainTag.name} mainTagSlug={mainTag.slug} />
          {/* End Article Header */}

          {/* Start Article Share */}
          {/* <ArticleShare /> */}
          {/* End Article Share */}

          {/* Start Article Content */}
          <div className="motion-ease-in">
            <CustomMDX source={post.content} />
          </div>

          {/* Start Article Tags */}
          {/* <div className="xl:hidden pt-12"> */}
          <div className="pt-16">
            <ArticleTags />
          </div>
          {/* </div> */}
          {/* End Article Tags */}

          {/* End Article Content */}
        </article>

        {/* End Article */}

        {/* Start Sidebar */}
        <aside className="hidden xl:block xl:w-[400px]" aria-labelledby="sidebar-label">
          <div className="sticky top-24">
            <h3 id="sidebar-label" className="sr-only">
              Sidebar
            </h3>

            {/* Start Reactions */}
            {/* <Suspense fallback={<div>Loading...</div>}>
              <ArticleReactions />
            </Suspense> */}
            {/* End Reactions */}

            {/* Start Author */}
            <ArticleAuthor author={post.author} />
            {/* End Author */}

            {/* Start Follow Socials */}
            <FollowSocials />
            {/* End Follow Socials */}

            {/* Replace the Tags section with the new component */}
            {/* <ArticleTags /> */}
          </div>
        </aside>
        {/* End Sidebar */}
      </div>
    </div>
  );
}
