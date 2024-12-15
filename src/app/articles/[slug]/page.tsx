// Types
import { NextParams, ArticleResponse } from "@/types";

// Article Components
import {
  ArticleTags,
  ArticleHeader,
  ArticleAuthor,
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

export default async function BlogPost({ params: paramsPromise }: NextParams) {
  const { slug = "" } = await paramsPromise;
  const postObject: ArticleResponse | null = await fetchArticleBySlug(slug);

  const post = postObject.docs[0];

  // TODO: Redirect to 404 if post is not found

  if (!post) {
    throw new Error("Post not found");
  }

  const mainTagName = post.tags?.[0]?.tag?.name ?? "No tags found";

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
      <div className="flex justify-between px-8 lg:px-4 2xl:px-0 mx-auto max-w-screen-xl ">
        {/* Start Article */}
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert font-mono">
          {/* Start Article Header */}
          <ArticleHeader title={post.title} author={post.author} date={post.dateUpdated} mainTagName={mainTagName} />
          {/* End Article Header */}

          {/* Start Article Share */}
          {/* <ArticleShare /> */}
          {/* End Article Share */}

          {/* Start Article Content */}
          <CustomMDX source={post.content} />
          {/* End Article Content */}
        </article>
        {/* End Article */}

        {/* Start Sidebar */}
        <aside className="hidden lg:block lg:w-[300px] xl:w-[400px]" aria-labelledby="sidebar-label">
          <div className="sticky top-6">
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

            {/* Replace the Tags section with the new component */}
            <ArticleTags />
          </div>
        </aside>
        {/* End Sidebar */}
      </div>
    </main>
  );
}
