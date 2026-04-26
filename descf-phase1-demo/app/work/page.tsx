import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { ProgrammeCard } from "@/components/programme-card";
import { programmes } from "@/data/site";

export const metadata: Metadata = {
  title: "Current Work"
};

export default function CurrentWorkPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Current Work"
          title="Current work should be evidence-backed"
          description="This page should later show active programmes, recent field notes, current projects, and verified outputs."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programmes.filter((programme) => programme.status === "Current").map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} />
          ))}
        </div>
      </Container>
    </section>
  );
}
