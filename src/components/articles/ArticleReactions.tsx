"use client";

import React, { useEffect, useState } from "react";

// Article SVG Components
import { Fire } from "@/components/articles/svg/Fire";
import { Medal } from "@/components/articles/svg/Medal";

// Utility function to generate random numbers
const fetchReactionCount = (): number => {
  return Math.floor(Math.random() * 100);
};

export function ArticleReactions() {
  const [reactions, setReactions] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    // Simulate fetching reaction counts
    const newReactions = [fetchReactionCount(), fetchReactionCount(), fetchReactionCount(), fetchReactionCount()];
    setReactions(newReactions);
  }, []);

  return (
    <div className="flex items-center justify-center gap-5 py-4 px-6">
      <button type="button" className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
        <Fire />
        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{reactions[0]}</span>
      </button>
      <button type="button" className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
        <Medal />
        <span className="text-gray-500 text-sm font-medium dark:text-gray-400">{reactions[1]}</span>
      </button>
      <button type="button" className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
        <Fire />
        <span className="text-gray-500 text-sm font-medium dark:text-gray-400">{reactions[2]}</span>
      </button>
      <button type="button" className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
        <Medal />
        <span className="text-gray-500 text-sm font-medium dark:text-gray-400">{reactions[3]}</span>
      </button>
    </div>
  );
}
