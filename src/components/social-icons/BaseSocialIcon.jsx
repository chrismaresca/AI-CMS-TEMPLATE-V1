import React from "react";


export default function BaseSocialIcon({ path, viewBox = "0 0 24 24", className = "h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" }) {
  return (
    <svg viewBox={viewBox} aria-hidden="true" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d={path}></path>
    </svg>
  );
}
