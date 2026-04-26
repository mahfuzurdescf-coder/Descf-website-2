import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProgrammeCard } from "@/components/programme-card";
import { SectionHeader } from "@/components/section-header";
import { programmes } from "@/data/site";
import { getProgrammes } from "@/lib/sanity/fetchers";

export const metadata: Metadata = {
  title: "Programmes",
  description: "Programme listing page for the DESCF website demo."
};

export default async function ProgrammesPage() {
  const cmsProgrammes = await getProgrammes();
  const items = cmsProgrammes?.length ? cmsProgrammes : programmes;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Programmes"
          title="Programme architecture connected to Sanity CMS"
          description="Add real programme documents in Sanity to replace the safe placeholder data. Keep claims evidence-based and avoid inflated impact language."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} />
          ))}
        </div>
      </Container>
    </section>
  );
}
