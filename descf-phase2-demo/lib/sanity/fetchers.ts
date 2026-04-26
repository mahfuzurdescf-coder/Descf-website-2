import { sanityFetch } from "@/lib/sanity/client";
import {
  eventBySlugQuery,
  eventSlugsQuery,
  eventsQuery,
  featuredPostsQuery,
  featuredProgrammesQuery,
  postBySlugQuery,
  postsQuery,
  postSlugsQuery,
  programmeBySlugQuery,
  programmeSlugsQuery,
  programmesQuery,
  resourceBySlugQuery,
  resourceSlugsQuery,
  resourcesQuery
} from "@/lib/sanity/queries";
import type { EventDetail, EventPreview, PostDetail, PostPreview, ProgrammeDetail, ProgrammePreview, ResourceDetail, ResourcePreview } from "@/lib/sanity/types";

export async function getProgrammes() {
  return sanityFetch<ProgrammePreview[]>({ query: programmesQuery, tags: ["programme"] });
}

export async function getFeaturedProgrammes() {
  return sanityFetch<ProgrammePreview[]>({ query: featuredProgrammesQuery, tags: ["programme"] });
}

export async function getProgrammeBySlug(slug: string) {
  return sanityFetch<ProgrammeDetail>({ query: programmeBySlugQuery, params: { slug }, tags: ["programme"] });
}

export async function getProgrammeSlugs() {
  return sanityFetch<Array<{ slug: string }>>({ query: programmeSlugsQuery, tags: ["programme"] });
}

export async function getPosts() {
  return sanityFetch<PostPreview[]>({ query: postsQuery, tags: ["post"] });
}

export async function getFeaturedPosts() {
  return sanityFetch<PostPreview[]>({ query: featuredPostsQuery, tags: ["post"] });
}

export async function getPostBySlug(slug: string) {
  return sanityFetch<PostDetail>({ query: postBySlugQuery, params: { slug }, tags: ["post"] });
}

export async function getPostSlugs() {
  return sanityFetch<Array<{ slug: string }>>({ query: postSlugsQuery, tags: ["post"] });
}

export async function getResources() {
  return sanityFetch<ResourcePreview[]>({ query: resourcesQuery, tags: ["resource"] });
}

export async function getResourceBySlug(slug: string) {
  return sanityFetch<ResourceDetail>({ query: resourceBySlugQuery, params: { slug }, tags: ["resource"] });
}

export async function getResourceSlugs() {
  return sanityFetch<Array<{ slug: string }>>({ query: resourceSlugsQuery, tags: ["resource"] });
}

export async function getEvents() {
  return sanityFetch<EventPreview[]>({ query: eventsQuery, tags: ["event"] });
}

export async function getEventBySlug(slug: string) {
  return sanityFetch<EventDetail>({ query: eventBySlugQuery, params: { slug }, tags: ["event"] });
}

export async function getEventSlugs() {
  return sanityFetch<Array<{ slug: string }>>({ query: eventSlugsQuery, tags: ["event"] });
}
