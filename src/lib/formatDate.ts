/**
 * Formats a Date object into a string with the format "Month Day, Year".
 * 
 * @param {Date} input - The date to format.
 * @returns {string} The formatted date string.
 */
export function formatDate(input: Date | string): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
