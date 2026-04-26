import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProgrammeCard } from "@/components/programme-card";
import { SectionHeader } from "@/components/section-header";
import { programmes } from "@/data/site";

export const metadata: Metadata = {
  title: "Programmes",
  description: "Programme listing page for the DESCF Phase 1 demo."
};

export default function ProgrammesPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Programmes"
          title="Programme architecture ready for Sanity CMS"
          description="These programme cards currently use local placeholder data. Phase 2 will replace this with Sanity documents and GROQ queries."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} />
          ))}
        </div>
      </Container>
    </section>
  );
}
