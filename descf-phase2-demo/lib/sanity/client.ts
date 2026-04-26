import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "@/lib/sanity/env";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published"
    })
  : null;

type SanityFetchOptions = {
  query: string;
  params?: QueryParams;
  tags?: string[];
  revalidate?: number;
};

export async function sanityFetch<T>({ query, params = {}, tags = [], revalidate = 60 }: SanityFetchOptions): Promise<T | null> {
  if (!client) return null;

  try {
    return await client.fetch<T>(query, params, {
      next: {
        revalidate,
        tags
      }
    });
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}
