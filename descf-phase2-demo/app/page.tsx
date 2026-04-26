import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PostCard } from "@/components/post-card";
import { ProgrammeCard } from "@/components/programme-card";
import { SectionHeader } from "@/components/section-header";
import { newsPosts, programmes } from "@/data/site";
import { getFeaturedPosts, getFeaturedProgrammes } from "@/lib/sanity/fetchers";

const focusAreas = [
  "Snake conservation and coexistence",
  "Herpetofauna learning and documentation",
  "Sound-based nature education",
  "Climate-responsive conservation",
  "Conservation-linked green enterprise"
];

export default async function HomePage() {
  const cmsProgrammes = await getFeaturedProgrammes();
  const cmsPosts = await getFeaturedPosts();
  const programmeItems = cmsProgrammes?.length ? cmsProgrammes : programmes.slice(0, 3);
  const postItems = cmsPosts?.length ? cmsPosts : newsPosts;

  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-earth-300">
              Bangladesh-based conservation organisation
            </p>
            <h1 className="text-4xl font-black tracking-tight text-cream sm:text-6xl lg:text-7xl">
              Conservation that connects science, field learning, and coexistence.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-cream/75">
              DESCF needs a credible institutional platform: programme pages, newsroom publishing, resource archives, and CMS control. This Phase 2 demo connects the architecture to Sanity-ready content models.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/programmes">Explore programmes</ButtonLink>
              <ButtonLink href="/newsroom" variant="secondary">
                Visit newsroom
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Institutional focus"
            title="A stronger structure for DESCF's conservation work"
            description="These focus areas are displayed as strategic placeholders. Replace the copy with verified DESCF content before public launch."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {focusAreas.map((area) => (
              <div key={area} className="rounded-3xl border border-cream/10 bg-cream/[0.05] p-5 text-sm font-semibold leading-6 text-cream/85">
                {area}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Programmes"
              title="CMS-ready programme architecture"
              description="When Sanity is configured and content exists, these cards will come from CMS. Until then, safe placeholder data is shown."
            />
            <ButtonLink href="/programmes" variant="secondary">
              View all programmes
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programmeItems.map((programme) => (
              <ProgrammeCard key={programme.slug} programme={programme} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Newsroom"
              title="Publishing system preview"
              description="The newsroom now has Sanity schemas, GROQ queries, authors, categories, tags, SEO fields, and Open Graph planning."
            />
            <ButtonLink href="/newsroom" variant="secondary">
              Open newsroom
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {postItems.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
