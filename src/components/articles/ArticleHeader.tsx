// Next and React
import React from "react";
import Link from "next/link";

// Types
import { Author } from "@/types";

// Create Query String
import { createQueryString } from "@/lib/createQueryString";

type ArticleHeaderProps = {
  title: string;
  author: Author;
  date: Date;
  mainTagName: string;
  mainTagSlug: string;
};

export function ArticleHeader({ title, author, date, mainTagName, mainTagSlug }: ArticleHeaderProps) {

  return (
    <header className="mb-2 lg:mb-6 not-format ">
      <h1 className="mb-6 text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900 lg:mb-8 lg:text-5xl dark:text-white motion-ease-in">
        {title}
      </h1>
      <div className="flex items-center space-x-4 lg:space-x-3 text-base text-gray-600 dark:text-gray-400 motion-ease-in">
        <address className="inline font-medium">
          <a rel="author" className="ml-1 text-primary-600 no-underline hover:underline dark:text-primary-500" href="#">
            {author.firstName} {author.lastName}
          </a>
        </address>
        <span className="hidden lg:inline">•</span>
        <Link href={`/articles?${createQueryString(new URLSearchParams(), 'tags', mainTagSlug)}`} className="hidden lg:inline font-medium text-nowrap text-ellipsis overflow-hidden text-primary-600 no-underline hover:underline dark:text-primary-500">
          {mainTagName}
        </Link>
        <span>•</span>
        <time
          className="font-medium"
          dateTime={new Date(date).toISOString()}
          title={new Date(date).toLocaleDateString()}
        >
          {new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </div>
    </header>
  );
}
