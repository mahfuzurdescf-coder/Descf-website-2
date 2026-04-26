import type { PortableTextBlock } from "@portabletext/react";

export type SeoFields = {
  title?: string;
  description?: string;
  ogImage?: unknown;
};

export type CategoryRef = {
  title: string;
  slug?: string;
};

export type AuthorRef = {
  name: string;
  role?: string;
  bio?: string;
  photo?: unknown;
};

export type ProgrammePreview = {
  _id?: string;
  title: string;
  slug: string;
  summary: string;
  status?: string;
  seo?: SeoFields;
};

export type ProgrammeDetail = ProgrammePreview & {
  body?: PortableTextBlock[];
  relatedPosts?: Array<{ title: string; slug: string; excerpt?: string }>;
  relatedResources?: Array<{ title: string; slug: string; summary?: string; resourceType?: string }>;
};

export type PostPreview = {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt?: string;
  date?: string;
  language?: string;
  category?: CategoryRef | string;
  author?: AuthorRef;
  seo?: SeoFields;
};

export type PostDetail = PostPreview & {
  body?: PortableTextBlock[];
  tags?: CategoryRef[];
  relatedProgramme?: CategoryRef;
};

export type ResourcePreview = {
  _id?: string;
  title: string;
  slug: string;
  summary: string;
  type?: string;
  resourceType?: string;
  publicationDate?: string;
  externalLink?: string;
  file?: { asset?: { url?: string; originalFilename?: string } };
  seo?: SeoFields;
};

export type ResourceDetail = ResourcePreview & {
  body?: PortableTextBlock[];
  contributors?: string[];
  relatedProgramme?: CategoryRef;
};

export type EventPreview = {
  _id?: string;
  title: string;
  slug: string;
  summary?: string;
  eventDate?: string;
  location?: string;
  eventType?: string;
  status?: string;
  seo?: SeoFields;
};

export type EventDetail = EventPreview & {
  body?: PortableTextBlock[];
  registrationLink?: string;
  relatedProgramme?: CategoryRef;
};
