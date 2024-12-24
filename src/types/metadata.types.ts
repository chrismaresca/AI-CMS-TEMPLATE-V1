export type BrandMetadata = {
  name: string;
  description: string;
  image: string | null;
  websiteUrl: string;
  twitterHandle: string;
  founder: string;
  tags: { tag: { name: string } }[];
};

export type TagMetadata = {
  name: string;
  description: string;
  image: string | null;
  slug: string;
};

