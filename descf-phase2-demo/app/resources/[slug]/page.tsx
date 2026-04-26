import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { RichText } from "@/components/rich-text";
import { resources } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";
import { getResourceBySlug, getResourceSlugs } from "@/lib/sanity/fetchers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const cmsSlugs = await getResourceSlugs();
  if (cmsSlugs?.length) return cmsSlugs;
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cmsResource = await getResourceBySlug(slug);
  const fallback = resources.find((item) => item.slug === slug);
  const resource = cmsResource || fallback;

  if (!resource) return { title: "Resource not found" };

  return buildMetadata({
    title: resource.title,
    description: resource.summary,
    path: `/resources/${slug}`,
    seo: "seo" in resource ? resource.seo : undefined
  });
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cmsResource = await getResourceBySlug(slug);
  const fallback = resources.find((item) => item.slug === slug);
  const resource = cmsResource || fallback;

  if (!resource) notFound();

  const hasBody = "body" in resource && Boolean(resource.body?.length);
  const resourceType = "resourceType" in resource ? resource.resourceType : resource.type;
  const fileUrl = "file" in resource ? resource.file?.asset?.url : undefined;
  const externalLink = "externalLink" in resource ? resource.externalLink : undefined;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-earth-300">{resourceType || "Resource"}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-cream sm:text-6xl">{resource.title}</h1>
          <Card className="mt-10">
            {hasBody ? (
              <RichText value={"body" in resource ? resource.body : undefined} />
            ) : (
              <p className="text-base leading-8 text-cream/75">
                {resource.summary} Add body details, file upload, publication date, contributors, and related programme in Sanity.
              </p>
            )}
            {fileUrl ? (
              <a href={fileUrl} className="focus-ring mt-6 inline-flex rounded-full bg-earth-300 px-5 py-3 text-sm font-bold text-forest-900 hover:bg-earth-100">
                Download file
              </a>
            ) : null}
            {externalLink ? (
              <a href={externalLink} className="focus-ring mt-6 inline-flex rounded-full border border-cream/15 px-5 py-3 text-sm font-bold text-cream hover:bg-cream/10">
                Open external link
              </a>
            ) : null}
          </Card>
        </div>
        <div className="mt-10">
          <ButtonLink href="/resources" variant="secondary">Back to resources</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
