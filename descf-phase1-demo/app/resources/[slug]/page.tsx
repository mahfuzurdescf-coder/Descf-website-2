import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { resources } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    return { title: "Resource not found" };
  }

  return {
    title: resource.title,
    description: resource.summary
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-earth-300">{resource.type}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-cream sm:text-6xl">{resource.title}</h1>
          <Card className="mt-10">
            <p className="text-base leading-8 text-cream/75">
              {resource.summary} In Phase 2, resources will support file upload, external links, cover images, publication dates, related programmes, and SEO metadata.
            </p>
          </Card>
        </div>
        <div className="mt-10">
          <ButtonLink href="/resources" variant="secondary">Back to resources</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
