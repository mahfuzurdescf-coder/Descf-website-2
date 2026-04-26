import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ResourceCard } from "@/components/resource-card";
import { SectionHeader } from "@/components/section-header";
import { resources } from "@/data/site";

export const metadata: Metadata = {
  title: "Reports & Publications"
};

export default function ReportsPublicationsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Reports & Publications"
          title="A future home for verified institutional outputs"
          description="For now this page reuses resource placeholders. Phase 2 can filter Sanity resources by type."
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
