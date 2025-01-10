"use client";
// Error boundaries must be Client Components

import Link from "next/link";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  console.log(error);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-card rounded-lg shadow-lg">
        <h2 className="text-7xl font-bold text-red-600 dark:text-red-400 mb-4">Oops!</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Couldn&apos;t find exactly what you&apos;re looking for. Return to the <Link href="/">home page</Link>.
        </p>
      </div>
    </div>
  );
}
