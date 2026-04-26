import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { newsPosts } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function NewsroomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <article className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-earth-300">{post.category}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-cream sm:text-6xl">{post.title}</h1>
          <p className="mt-4 text-sm text-cream/55">Placeholder date: {post.date}</p>
          <Card className="mt-10">
            <p className="text-base leading-8 text-cream/75">
              {post.excerpt} This is a local placeholder article. In Phase 2, this page will render Sanity Portable Text, author data, related programme references, tags, and SEO metadata.
            </p>
          </Card>
        </article>
        <div className="mt-10">
          <ButtonLink href="/newsroom" variant="secondary">Back to newsroom</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
