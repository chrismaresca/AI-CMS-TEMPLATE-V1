// Next and React
import React from "react";
import Link from "next/link";

// Format Date
import { formatDate } from "@/lib/formatDate";

// Shadcn UI
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type ArticleCardProps = {
  title: string;
  slug: string;
  tagName: string;
  dateUpdated: Date;
  authorId: string;
  delay?: number;
};

export default function ArticleCard({ title, slug, tagName, dateUpdated, authorId, delay }: ArticleCardProps) {

  const authorImage = "";
  console.log(authorId);
  // const authorImage = authorId === "060b3929-0ac8-4630-a0a4-0eb22d2dc237" ? "/headshot-edit.jpg" : "/headshot-edit.jpg";

  return (
    <Link href={`/articles/${slug}`} className={`w-full rounded-xl flex justify-between px-4 py-6 items-center hover:bg-neutral-800/50 hover:cursor-pointer group intersect-once intersect:motion-preset-slide-up intersect:motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth motion-delay-[${delay}ms]`}>
      <div className="flex flex-col w-[18rem] md:w-[25rem] lg:w-[34rem]">
        <div className="line-clamp-2 flex-grow text-balance">
          <span className="text-white text-sm md:text-base tracking-tight">{title}</span>
        </div>
        <div className="block mt-2 lg:hidden text-muted-foreground text-xs tracking-tighter">{tagName}</div>
      </div>
      <div className="hidden lg:block text-muted-foreground text-xs lg:flex-shrink-0 lg:text-center tracking-tighter">{tagName}</div>
      <div className="flex flex-col lg:flex-row items-end lg:items-center gap-2 ml-4 flex-shrink-0">
        <div className="text-muted-foreground text-xs whitespace-nowrap tracking-tighter lg:hidden">{formatDate(dateUpdated)}</div>
        <Avatar className="w-6 h-6 grayscale">
          <AvatarImage alt="Author" src={authorImage} className="w-6 h-6" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
    </Link>
  );
}
