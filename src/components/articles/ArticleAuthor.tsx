// React
import React from "react";

// Next.js
import Link from "next/link";

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Lucide Icons
import { Author } from "@/types";

// // Social Icons
// import Linkedin from "@/components/social-icons/Linkedin";
// import X from "@/components/social-icons/X";

// Constants


export function ArticleAuthor({ author }: { author: Author }) {
  // TODO: Fix this
  const LINKEDIN_URL = ""

  // TODO: Fix this
  // const authorImage = author.lastName === "Maresca" ? "/headshot-edit.jpg" : "/headshot-edit.jpg";

  const authorImage = "";

  return (
    <Card className="px-2 py-4 mb-6 rounded-xl bg-card border dark:border-gray-700">
      <CardHeader className="pb-4">
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-12 mb-4">
          <Link href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center">
            <div className="mr-3 shrink-0">
              <Avatar className="w-10 h-10 grayscale-[50%] mt-1">
                <AvatarImage alt="Author" src={authorImage} className="w-10 h-10" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </div>
            <div className="mr-3">
              <CardTitle className="text-gray-900 dark:text-white">
                <div className="font-bold mt-3 ml-1">
                  {author.firstName} {author.lastName}
                </div>
              </CardTitle>
              <span className="text-sm text-nowrap ml-1">{author.title}</span>
            </div>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="pb-0 space-y-6">
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{author.bio}</p>
        <dl className="mb-5">
          <dt className="mb-2 text-sm font-bold text-gray-900 uppercase dark:text-white">Location</dt>
          <dd className="mb-3 text-sm text-gray-500 dark:text-gray-400">{author.location}</dd>
          {!author.isHuman && (
            <>
              <dt className="mb-2 text-sm font-bold text-gray-900 uppercase dark:text-white">I Was Created On:</dt>
              <dd className="text-sm text-gray-500 dark:text-gray-400">{new Date(author.dateCreated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</dd>
            </>
          )}
        </dl>
      </CardContent>
    </Card>
  );
}

export default ArticleAuthor;
