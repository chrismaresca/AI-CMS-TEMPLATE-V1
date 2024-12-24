import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Articles`,
  alternates: {
    canonical: "/articles",
    languages: {
      "en-US": "/articles",
    },
  },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
