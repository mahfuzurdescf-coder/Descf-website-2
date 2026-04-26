import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { RichText } from "@/components/rich-text";
import { programmes } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";
import { getProgrammeBySlug, getProgrammeSlugs } from "@/lib/sanity/fetchers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const cmsSlugs = await getProgrammeSlugs();
  if (cmsSlugs?.length) return cmsSlugs;
  return programmes.map((programme) => ({ slug: programme.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cmsProgramme = await getProgrammeBySlug(slug);
  const fallback = programmes.find((item) => item.slug === slug);
  const programme = cmsProgramme || fallback;

  if (!programme) return { title: "Programme not found" };

  return buildMetadata({
    title: programme.title,
    description: programme.summary,
    path: `/programmes/${slug}`,
    seo: "seo" in programme ? programme.seo : undefined
  });
}

export default async function ProgrammeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cmsProgramme = await getProgrammeBySlug(slug);
  const fallback = programmes.find((item) => item.slug === slug);
  const programme = cmsProgramme || fallback;

  if (!programme) notFound();

  const hasBody = "body" in programme && Boolean(programme.body?.length);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-4xl">
          {programme.status ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-earth-300">{programme.status}</p> : null}
          <h1 className="text-4xl font-black tracking-tight text-cream sm:text-6xl">{programme.title}</h1>
          <p className="mt-6 text-lg leading-9 text-cream/75">{programme.summary}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <Card>
            <h2 className="text-2xl font-bold text-cream">Programme overview</h2>
            {hasBody ? (
              <RichText value={"body" in programme ? programme.body : undefined} />
            ) : (
              <p className="mt-4 text-sm leading-8 text-cream/70">
                Add this programme's verified objectives, target audience, field methods, outputs, and related evidence in Sanity. Do not publish vague claims.
              </p>
            )}
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-cream">CMS status</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-cream/70">
              <li>• Programme fields are available in Sanity.</li>
              <li>• Related posts and resources are supported.</li>
              <li>• SEO metadata can be edited per programme.</li>
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
