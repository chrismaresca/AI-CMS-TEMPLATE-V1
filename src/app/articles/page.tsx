// React Imports
import React from "react";

// Next Imports
import Link from "next/link";
import { Metadata } from "next";
// import Image from "next/image";

// Constants
import { BRAND_ID } from "@/constants";

// Data
import { fetchArticlesByBrand } from "@/data/getPosts";

// Types
import { Article, ArticleResponse } from "@/types";
import { getTagMetadataBySlug } from "@/data/getMetadata";

export type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = await props.searchParams;
  let tagName = searchParams.tag || null;

  if (Array.isArray(tagName)) {
    tagName = tagName[0];
  }

  if (tagName) {
    const tagMetadata = await getTagMetadataBySlug(tagName);
    return tagMetadata;
  } else {
    return {
      title: "Articles",
      description: "Articles",
    };
  }
}

// read route params ge

function ArticleCard({ post }: { post: Article }) {
  return (
    <article className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 ease-in-out">
      {/* {post.image && (
        <Link href={`/${post.slug}`} className="block">
          <Image src={post.image} alt={post.title} className="w-full h-auto object-cover aspect-[16/9]" />
        </Link> */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          <Link href={`/articles/${post.slug}`} className="text-gray-900 hover:underline">
            {post.title}
          </Link>
        </h2>
        {post.excerpt && <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>}
        {post.dateUpdated && (
          <time className="text-sm text-gray-500">Published on {new Date(post.dateUpdated).toLocaleDateString()}</time>
        )}
      </div>
    </article>
  );
}

export default async function Page() {
  if (!BRAND_ID) {
    throw new Error("BRAND_ID is not defined. Please define it as an environment variable.");
  }

  const postObjects: ArticleResponse = await fetchArticlesByBrand(BRAND_ID);
  const posts = postObjects?.docs ?? [];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest Articles</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
