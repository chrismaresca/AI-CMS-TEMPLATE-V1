// components/mdx-remote.tsx
import React, { FC } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";

// Components
import { Test } from "@/components/articles/blocks";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & { children?: React.ReactNode };
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & { children?: React.ReactNode };
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { children?: React.ReactNode };
type ListProps = React.HTMLAttributes<HTMLUListElement | HTMLOListElement> & { children?: React.ReactNode };
type ListItemProps = React.LiHTMLAttributes<HTMLLIElement> & { children?: React.ReactNode };
type BlockquoteProps = React.BlockquoteHTMLAttributes<HTMLQuoteElement> & { children?: React.ReactNode };
type CodeProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };
type PreProps = React.HTMLAttributes<HTMLPreElement> & { children?: React.ReactNode };
type TableProps = React.TableHTMLAttributes<HTMLTableElement> & { children?: React.ReactNode };
type TableSectionProps = React.HTMLAttributes<HTMLTableSectionElement> & { children?: React.ReactNode };
type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & { children?: React.ReactNode };
type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & { children?: React.ReactNode };
type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
type HrProps = React.HTMLAttributes<HTMLHRElement>;
type EmProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };
type StrongProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };
type DelProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };
type InlineCodeProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };
type FigureProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };
type FigcaptionProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };
type SupProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };
type SubProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };
type KbdProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };

interface TestComponentProps {
  text: string;
}

// We will create an extensive, modern, and visually striking Tailwind-based styling.
// No custom CSS classes, only Tailwind classes. Modern look: gradients, subtle dark mode support, spacing, and readable typography.

// Headings: Big, bold, gradient text
const H1: FC<HeadingProps> = ({ children, ...props }) => (
  <h1
    {...props}
    className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mt-8 mb-4"
  >
    {children}
  </h1>
);

const H2: FC<HeadingProps> = ({ children, ...props }) => (
  <h2
    {...props}
    className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mt-6 mb-3"
  >
    {children}
  </h2>
);

const H3: FC<HeadingProps> = ({ children, ...props }) => (
  <h3
    {...props}
    className="text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-5 mb-2"
  >
    {children}
  </h3>
);

const H4: FC<HeadingProps> = ({ children, ...props }) => (
  <h4 {...props} className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
    {children}
  </h4>
);

const H5: FC<HeadingProps> = ({ children, ...props }) => (
  <h5 {...props} className="text-lg font-medium text-gray-800 dark:text-gray-200 mt-4 mb-2">
    {children}
  </h5>
);

const H6: FC<HeadingProps> = ({ children, ...props }) => (
  <h6 {...props} className="text-base font-medium text-gray-800 dark:text-gray-200 mt-4 mb-2 uppercase tracking-wide">
    {children}
  </h6>
);

const P: FC<ParagraphProps> = ({ children, ...props }) => (
  <p {...props} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 my-4">
    {children}
  </p>
);

const A: FC<AnchorProps> = ({ children, ...props }) => (
  <a {...props} className="text-blue-600 dark:text-blue-400 hover:underline decoration-2">
    {children}
  </a>
);

const UL: FC<ListProps> = ({ children, ...props }) => (
  <ul {...props} className="list-disc list-inside ml-4 my-4 text-gray-700 dark:text-gray-300">
    {children}
  </ul>
);

const OL: FC<ListProps> = ({ children, ...props }) => (
  <ol {...props} className="list-decimal list-inside ml-6 my-4 text-gray-700 dark:text-gray-300">
    {children}
  </ol>
);

const LI: FC<ListItemProps> = ({ children, ...props }) => (
  <li {...props} className="my-0">
    {children}
  </li>
);

const BLOCKQUOTE: FC<BlockquoteProps> = ({ children, ...props }) => (
  <blockquote {...props} className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 my-6">
    {children}
  </blockquote>
);

const HR: FC<HrProps> = (props) => <hr {...props} className="my-8 border-t-2 border-gray-300 dark:border-gray-700" />;

const CODE: FC<CodeProps> = ({ children, ...props }) => (
  <code
    {...props}
    className="bg-gray-100 dark:bg-gray-800 text-sm font-mono px-1 py-0.5 rounded text-red-600 dark:text-red-400"
  >
    {children}
  </code>
);

const PRE: FC<PreProps> = ({ children, ...props }) => (
  <pre {...props} className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto my-4 font-mono text-sm">
    {children}
  </pre>
);

const INLINECODE: FC<InlineCodeProps> = ({ children, ...props }) => (
  <code
    {...props}
    className="bg-gray-200 dark:bg-gray-800 text-sm font-mono px-1 py-0.5 rounded text-purple-600 dark:text-purple-300"
  >
    {children}
  </code>
);

const EM: FC<EmProps> = ({ children, ...props }) => (
  <em {...props} className="italic">
    {children}
  </em>
);

const STRONG: FC<StrongProps> = ({ children, ...props }) => (
  <strong {...props} className="font-semibold text-gray-800 dark:text-gray-200">
    {children}
  </strong>
);

const DEL: FC<DelProps> = ({ children, ...props }) => (
  <del {...props} className="line-through text-gray-500 dark:text-gray-400">
    {children}
  </del>
);

const FIGURE: FC<FigureProps> = ({ children, ...props }) => (
  <figure {...props} className="my-6 flex flex-col items-center justify-center">
    {children}
  </figure>
);

const FIGCAPTION: FC<FigcaptionProps> = ({ children, ...props }) => (
  <figcaption {...props} className="text-sm text-gray-500 dark:text-gray-400 mt-2">
    {children}
  </figcaption>
);

const SUP: FC<SupProps> = ({ children, ...props }) => (
  <sup {...props} className="align-super text-xs">
    {children}
  </sup>
);

const SUB: FC<SubProps> = ({ children, ...props }) => (
  <sub {...props} className="align-sub text-xs">
    {children}
  </sub>
);

const KBD: FC<KbdProps> = ({ children, ...props }) => (
  <kbd
    {...props}
    className="border border-gray-300 dark:border-gray-600 rounded px-1 text-xs font-mono bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
  >
    {children}
  </kbd>
);

const TABLE: FC<TableProps> = ({ children, ...props }) => (
  <table {...props} className="w-full border-collapse my-6 overflow-x-auto">
    {children}
  </table>
);

const THEAD: FC<TableSectionProps> = ({ children, ...props }) => (
  <thead {...props} className="bg-gray-200 dark:bg-gray-800">
    {children}
  </thead>
);

const TBODY: FC<TableSectionProps> = ({ children, ...props }) => (
  <tbody {...props} className="divide-y divide-gray-200 dark:divide-gray-700">
    {children}
  </tbody>
);

const TR: FC<TableRowProps> = ({ children, ...props }) => (
  <tr {...props} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
    {children}
  </tr>
);

const TH: FC<TableCellProps> = ({ children, ...props }) => (
  <th {...props} className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold">
    {children}
  </th>
);

const TD: FC<TableCellProps> = ({ children, ...props }) => (
  <td {...props} className="px-4 py-2 text-gray-700 dark:text-gray-300">
    {children}
  </td>
);

const IMG: FC<ImageProps> = ({ alt, src, ...props }) => (
  <Image
    {...props}
    alt={alt || ""}
    src={src || ""}
    width={800}
    height={400}
    className="max-w-full h-auto rounded my-4"
  />
);

// Custom components
const TEST: FC<TestComponentProps> = (props) => <Test {...props} />;

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  a: A,
  ul: UL,
  ol: OL,
  li: LI,
  blockquote: BLOCKQUOTE,
  hr: HR,
  code: CODE,
  pre: PRE,
  inlineCode: INLINECODE,
  em: EM,
  strong: STRONG,
  del: DEL,
  figure: FIGURE,
  figcaption: FIGCAPTION,
  sup: SUP,
  sub: SUB,
  kbd: KBD,
  table: TABLE,
  thead: THEAD,
  tbody: TBODY,
  tr: TR,
  th: TH,
  td: TD,
  img: IMG,
  Test: TEST,
};

interface CustomMDXProps extends Omit<MDXRemoteProps, "components"> {
  components?: MDXRemoteProps["components"];
}

export function CustomMDX({ components: userComponents, ...props }: CustomMDXProps) {
  return <MDXRemote {...props} components={{ ...components, ...(userComponents || {}) }} />;
}
