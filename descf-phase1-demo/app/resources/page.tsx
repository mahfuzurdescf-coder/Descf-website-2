import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ResourceCard } from "@/components/resource-card";
import { SectionHeader } from "@/components/section-header";
import { resources } from "@/data/site";

export const metadata: Metadata = {
  title: "Evidence & Resources",
  description: "Resource archive preview for reports, publications, briefs, and learning materials."
};

export default function ResourcesPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Evidence & Resources"
          title="A structured resource archive"
          description="Use this area for verified reports, publications, briefs, field learning notes, and downloadable resources."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </Container>
    </section>
  );
}
