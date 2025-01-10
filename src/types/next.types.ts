export type NextParams = {
  params: Promise<{
    slug?: string;
  }>;
};

export type NextParamsAndSearchParams = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
};