import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center font-mono">
      <div className="text-center p-8 bg-card rounded-lg shadow-lg">
        <h2 className="text-7xl font-bold text-red-600 dark:text-red-400 mb-4">Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Could not find requested resource. Return to the <Link href="/">home page</Link>.
        </p>
      </div>
    </div>
  );
}