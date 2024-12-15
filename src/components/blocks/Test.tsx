import React from "react";

export function Test({ text }: { text: string }) {
  return <p className="text-red-500 text-2xl font-bold">{text}</p>;
}
