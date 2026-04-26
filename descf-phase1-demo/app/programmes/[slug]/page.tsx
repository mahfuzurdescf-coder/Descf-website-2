import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { programmes } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return programmes.map((programme) => ({ slug: programme.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const programme = programmes.find((item) => item.slug === slug);

  if (!programme) {
    return { title: "Programme not found" };
  }

  return {
    title: programme.title,
    description: programme.summary
  };
}

export default async function ProgrammeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const programme = programmes.find((item) => item.slug === slug);

  if (!programme) {
    notFound();
  }

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-earth-300">{programme.status}</p>
          <h1 className="text-4xl font-black tracking-tight text-cream sm:text-6xl">{programme.title}</h1>
          <p className="mt-6 text-lg leading-9 text-cream/75">{programme.summary}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <Card>
            <h2 className="text-2xl font-bold text-cream">Programme overview</h2>
            <p className="mt-4 text-sm leading-8 text-cream/70">
              Placeholder body copy. In Phase 2, this content will come from Sanity CMS. Add real objectives, target audience, field methods, outputs, and related evidence only after verification.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-cream">CMS fields planned</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-cream/70">
              <li>• Short description</li>
              <li>• Full body content</li>
              <li>• Related posts</li>
              <li>• Related resources</li>
              <li>• SEO metadata</li>
            </ul>
          </Card>
        </div>

        <div className="mt-10">
          <ButtonLink href="/programmes" variant="secondary">Back to programmes</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
