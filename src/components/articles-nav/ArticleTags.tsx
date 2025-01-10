// Next and React
import React from "react";

// Shadcn
import { Badge } from "@/components/ui/badge";

// Tailwind Merge
import { cn } from "@/lib/utils";

// Types
import { Tag } from "@/types";

type TagBadgesProps = {
  allTags: Tag[];
  selectedTags: Tag[];
  handleTagSelection: (tagId: string) => void;
};

const TagBadges = ({ allTags, selectedTags, handleTagSelection }: TagBadgesProps) => {
  return (
    <div className="hidden md:flex gap-2 overflow-x-scroll pb-4 motion-ease-in motion-delay-[0ms] motion-duration-[500ms] motion-blur-in-sm">
      {allTags.map((tag, index) => (
        <Badge variant={`${selectedTags.some((selectedTag) => selectedTag.slug === tag.slug) ? "default" : "outline"}`} key={index} className={cn(`px-4 py-2 hover:cursor-pointer text-nowrap`)} onClick={() => handleTagSelection(tag.slug)}>
          {tag.name}
        </Badge>
      ))}
    </div>
  );
};

export default TagBadges;
