"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

// Sort Articles
import { sortArticles } from "@/lib/sortArticles";

// Create Query String
import { createQueryString } from "@/lib/createQueryString";

// Shadcn Components
import { Separator } from "@/components/ui/separator";

// Components
import ArticleCard from "@/components/articles-nav/ArticleCard";
import InfiniteScroll from "@/components/articles-nav/InfiniteScroll";
import TagBadges from "@/components/articles-nav/ArticleTags";

// Types
import { Article, EnumPublishStatus, Tag } from "@/types";

const POSTS_PER_PAGE = 10;

type ArticleListClientProps = {
  articles: Article[];
  tags: Tag[];
};

export default function ArticleListClient({ articles, tags }: ArticleListClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayPosts, setDisplayPosts] = useState<Article[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  // 1) Memoize sortedPosts
  const sortedPosts = useMemo(
    () =>
      sortArticles(
        articles.filter(
          (article) =>
            article.publishStatus === EnumPublishStatus.DRAFT ||
            article.publishStatus === EnumPublishStatus.PUBLISHED
        )
      ),
    [articles]
  );

  // 2) On mount, read any tags from query params
  useEffect(() => {
    // e.g. ?tags=design,web-dev => ["design","web-dev"]
    const tagsFromUrl = searchParams.get("tags")?.split(",") ?? [];

    if (tagsFromUrl.length > 0) {
      // Find matching Tag objects from the `tags` prop
      const matchedTags: Tag[] = tagsFromUrl
        .map((tagSlug) => tags.find((t) => t.slug === tagSlug))
        .filter((t): t is Tag => !!t);

      setSelectedTags(matchedTags);
      setCurrentPage(1); // Reset to page 1 when reading from URL
    }
  }, [searchParams, tags]);

  // 3) Function to build updated query params
  const createTagsQueryString = useCallback(
    (selectedTagSlugs: string[]) => {
      if (selectedTagSlugs.length > 0) {
        // Set the tags query param as a comma-separated string
        return createQueryString(searchParams, "tags", selectedTagSlugs.join(","));
      } else {
        // If no tags are selected, return empty string
        const params = new URLSearchParams(searchParams.toString());
        params.delete("tags");
        return params.toString();
      }
    },
    [searchParams]
  );

  // 4) Update selectedTags in both state and URL
  const handleTagClick = (tagId: string) => {
    const clickedTag = tags.find((t) => t.slug === tagId);
    if (!clickedTag) return;

    let newSelectedTags: Tag[];
    if (selectedTags.some((t) => t.slug === tagId)) {
      // if selected, remove it
      newSelectedTags = selectedTags.filter((t) => t.slug !== tagId);
    } else {
      // if not selected, add it
      newSelectedTags = [...selectedTags, clickedTag];
    }

    setSelectedTags(newSelectedTags);
    setCurrentPage(1);

    // Push the updated searchParams to the router
    const newQueryString = createTagsQueryString(newSelectedTags.map((t) => t.slug));
    router.replace(`${pathname}?${newQueryString}`, { scroll: false });
  };

  // 5) Memoize filteredPosts
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) {
      return sortedPosts;
    }
    return sortedPosts.filter((post) =>
      // This logic is up to you. Here, we're only checking the first tag
      selectedTags.some((tag) => post.tags?.[0]?.tag.slug === tag.slug)
    );
  }, [selectedTags, sortedPosts]);

  // 6) Pagination
  useEffect(() => {
    const paginatedPosts = filteredPosts.slice(0, POSTS_PER_PAGE * currentPage);
    setDisplayPosts(paginatedPosts);
  }, [currentPage, filteredPosts]);

  // 7) Load more
  const handleNextPage = useCallback(() => {
    setTimeout(() => {
      setCurrentPage((prevPage) => prevPage + 1);
    }, 500);
  }, []);

  return (
    <div className="flex flex-col w-full pt-12">
      {/* Tags */}
      <TagBadges
        allTags={tags}
        handleTagSelection={handleTagClick}
        selectedTags={selectedTags}
      />
      <Separator />

      {/* Articles */}
      <div className="flex flex-col gap-2 pt-4">
        {displayPosts.length > 0 ? (
          displayPosts.map((post, index) => (
            <ArticleCard
              key={post.slug}
              title={post.title}
              tagName={post.tags?.[0]?.tag.name}
              slug={post.slug}
              dateUpdated={post.dateUpdated}
              authorId={post.authorId}
              delay={index * 100}
            />
          ))
        ) : (
          <p className="text-white motion-preset-typewriter-[13] motion-loop-[0.5] motion-ease-in-out cursor-default w-fit">Coming Soon...</p>
        )}
      </div>

      {/* Infinite scroll button */}
      {displayPosts.length < filteredPosts.length && (
        <InfiniteScroll currentPage={currentPage} handleNextPage={handleNextPage} />
      )}
    </div>
  );
}
