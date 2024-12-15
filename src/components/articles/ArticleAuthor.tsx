// React
import React from "react";

// Next.js
import Image from "next/image";

// UI Components
import { Button } from "@/components/ui/button";

// Lucide Icons
import { Plus } from "lucide-react";
import { Author } from "@/types";

export function ArticleAuthor({ author }: { author: Author }) {
  // Mock data for the author profile


  return (
    <div className="px-6 py-4 mb-6 rounded-lg bg-card border dark:border-gray-700">
      <div className="flex flex-col xl:flex-row xl:items-center xl:gap-12 mb-4">
        <a href="#" className="flex items-center">
          <div className="mr-3 shrink-0">
            <Image className="mt-1 w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt={author.firstName} width={32} height={32} />
          </div>
          <div className="mr-3">
            <span className="block font-medium text-gray-900 dark:text-white">{author.firstName} {author.lastName}</span>
            <span className="text-sm text-nowrap">{author.title}</span>
          </div>
        </a>
        {/* <div className="hidden xl:block">
          <Button variant="default" className="text-sm font-medium xl:w-full">
            <Plus />
            Follow
          </Button>
        </div> */}
      </div>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{author.bio}</p>
      <dl className="mb-5">
        <dt className="mb-2 text-sm font-bold text-gray-900 uppercase dark:text-white">Location</dt>
        <dd className="mb-3 text-sm text-gray-500 dark:text-gray-400">{author.location}</dd>
        <dt className="mb-2 text-sm font-bold text-gray-900 uppercase dark:text-white">I Was Created On:</dt>
        <dd className="text-sm text-gray-500 dark:text-gray-400">{new Date(author.dateCreated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</dd>
      </dl>
      <div className="block">
        <Button className="w-full text-sm font-medium">
          <Plus />
          Follow
        </Button>
      </div>
    </div>
  );
}

export default ArticleAuthor;
