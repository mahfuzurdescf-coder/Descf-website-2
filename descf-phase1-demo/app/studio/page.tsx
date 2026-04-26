import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Sanity Studio Placeholder"
};

export default function StudioPlaceholderPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Phase 2"
          title="Sanity Studio will be connected here"
          description="This placeholder prevents confusion during Phase 1. Do not expect CMS editing until Phase 2 files are added."
        />
        <Card className="mt-10 max-w-3xl">
          <h2 className="text-xl font-bold text-cream">Next implementation step</h2>
          <p className="mt-3 text-sm leading-7 text-cream/70">
            Phase 2 will install next-sanity, create Sanity schemas, add GROQ queries, and replace local placeholder data with CMS-driven content.
          </p>
        </Card>
      </Container>
    </section>
  );
}
