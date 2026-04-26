import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PostCard } from "@/components/post-card";
import { SectionHeader } from "@/components/section-header";
import { newsPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Newsroom",
  description: "DESCF newsroom preview for updates, explainers, field notes, and media commentary."
};

const categories = [
  "Field Notes",
  "Conservation Explainers",
  "Snake Awareness",
  "Amphibian & Reptile Notes",
  "Climate & Biodiversity",
  "DESCF Updates",
  "Reports & Briefs",
  "Media Commentary",
  "Youth & Education"
];

export default function NewsroomPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Newsroom"
          title="A CMS-driven publishing platform, not a random blog"
          description="Phase 1 uses local placeholder posts. Phase 2 will connect posts, authors, categories, tags, SEO, and Open Graph fields through Sanity."
        />
        <div className="mt-8 flex flex-wrap gap-3" aria-label="Planned newsroom categories">
          {categories.map((category) => (
            <span key={category} className="rounded-full border border-cream/10 bg-cream/[0.05] px-4 py-2 text-xs font-semibold text-cream/75">
              {category}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {newsPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
