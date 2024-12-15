import { Suspense } from "react";

// Data
import { getBrandTags } from "@/data/getTags";

// Components
import TagLink from "./TagLink";

async function TagsList() {
  const tags = await getBrandTags();

  return (
    <div className="flex flex-wrap">
      {tags.docs.map((tag) => (
        <TagLink key={tag.slug} tag={tag} />
      ))}
    </div>
  );
}

export async function ArticleTags() {
  return (
    <div className="px-6 py-4 mb-6 rounded-lg bg-card border dark:border-gray-700">
      <h4 className="mb-6 font-bold text-gray-900 uppercase dark:text-white">Recommended topics</h4>
      <Suspense fallback={<div>Loading...</div>}>
        <TagsList />
      </Suspense>
    </div>
  );
}
