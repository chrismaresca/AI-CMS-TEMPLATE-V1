// Types
import { GetAllResponse, GetSingleResponse } from "@/types/response.types";

// ================================================================================
// ================================================================================
// CMS Object Types
// ================================================================================
// ================================================================================

export enum EnumPublishStatus {
  PUBLISHED = "published",
  DRAFT = "draft",
}

export type Author = {
  firstName: string;
  lastName: string;
  title: string;
  bio: string;
  isHuman: boolean;
  location: string;
  dateCreated: Date;
};

export type Tag = {
  name: string;
  slug: string;
};

export type Article = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishStatus: EnumPublishStatus;
  slug: string;
  authorId: string;
  brandId: string;
  dateCreated: Date;
  dateUpdated: Date;
  author: Author;
  tags: {
    articleId: string;
    tagId: string;
    tag: Tag;
  }[];
};

// ================================================================================
// ================================================================================
// CMS Response Types
// ================================================================================
// ================================================================================

export type ArticleResponse = GetAllResponse<Article>;
export type ArticleSingleResponse = GetSingleResponse<Article>;

export type TagResponse = GetAllResponse<Tag>;
export type TagSingleResponse = GetSingleResponse<Tag>;
