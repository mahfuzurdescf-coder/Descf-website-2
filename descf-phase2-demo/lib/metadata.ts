import type { Metadata } from "next";
import { siteUrl } from "@/lib/sanity/env";
import type { SeoFields } from "@/lib/sanity/types";

const fallbackTitle = "Deep Ecology and Snake Conservation Foundation";
const fallbackDescription =
  "Bangladesh-based wildlife conservation organisation focused on herpetofauna conservation, coexistence, public awareness, documentation, and climate-responsive conservation.";

export function buildMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
  seo?: SeoFields;
}): Metadata {
  const title = options.seo?.title || options.title || fallbackTitle;
  const description = options.seo?.description || options.description || fallbackDescription;
  const url = new URL(options.path || "/", siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: fallbackTitle,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
