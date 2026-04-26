import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { RichText } from "@/components/rich-text";
import { newsPosts } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";
import { getPostBySlug, getPostSlugs } from "@/lib/sanity/fetchers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function categoryLabel(category?: string | { title: string }) {
  if (!category) return "Newsroom";
  return typeof category === "string" ? category : category.title;
}

export async function generateStaticParams() {
  const cmsSlugs = await getPostSlugs();
  if (cmsSlugs?.length) return cmsSlugs;
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cmsPost = await getPostBySlug(slug);
  const fallback = newsPosts.find((item) => item.slug === slug);
  const post = cmsPost || fallback;

  if (!post) return { title: "Post not found" };

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/newsroom/${slug}`,
    seo: "seo" in post ? post.seo : undefined
  });
}

export default async function NewsroomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cmsPost = await getPostBySlug(slug);
  const fallback = newsPosts.find((item) => item.slug === slug);
  const post = cmsPost || fallback;

  if (!post) notFound();

  const hasBody = "body" in post && Boolean(post.body?.length);
  const date = "publishedAt" in post && post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-GB", { dateStyle: "medium" }) : "Placeholder date";

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <article className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-earth-300">{categoryLabel(post.category)}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-cream sm:text-6xl">{post.title}</h1>
          <p className="mt-4 text-sm text-cream/55">{date}</p>
          {"author" in post && post.author?.name ? <p className="mt-2 text-sm text-cream/55">By {post.author.name}</p> : null}
          <Card className="mt-10">
            {hasBody ? (
              <RichText value={"body" in post ? post.body : undefined} />
            ) : (
              <p className="text-base leading-8 text-cream/75">
                {post.excerpt} Add full verified article content in Sanity. Keep field notes specific, evidence-based, and free from inflated claims.
              </p>
            )}
          </Card>
        </article>
        <div className="mt-10">
          <ButtonLink href="/newsroom" variant="secondary">Back to newsroom</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
