// Sort Posts by Date

import { Article } from "@/types";

/**
 * Sorts an array of articles in descending order based on their date.
 *
 * @param articles - An array of articles to be sorted.
 * @returns A new array of articles sorted by date.
 */
export function sortArticles(articles: Article[]): Article[] {
  return articles.sort((a, b) => {
    return new Date(b.dateUpdated).getTime() - new Date(a.dateUpdated).getTime();
  });
}
