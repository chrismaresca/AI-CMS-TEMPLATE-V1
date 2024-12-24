"use client";
import React from "react";

// Types
import { Tag } from "@/types";

// Next
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

// Components
import { Badge } from "@/components/ui/badge";

// Functions
import { createQueryString } from "@/lib/createQueryString";

function TagLink({ tag }: { tag: Tag }) {
  const pathname = usePathname();
  const currentParams = useSearchParams();

  // Strip everything after /articles/ from the pathname
  const basePath = pathname.split("/")[0] + "/articles";


  const queryString = createQueryString(currentParams, "tag", tag.slug);

  return (
    <Link key={tag.slug} href={`${basePath}?${queryString}`} passHref>
      <Badge className="cursor-pointer hover:bg-primary-200 hover:text-primary-900 dark:hover:bg-primary-300 dark:hover:text-primary-800 text-xs font-medium mr-3 px-2.5 py-0.5 mb-3">
        {tag.name}
      </Badge>
    </Link>
  );
}

export default TagLink;
