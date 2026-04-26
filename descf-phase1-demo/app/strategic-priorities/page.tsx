import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Strategic Priorities"
};

const priorities = [
  "Evidence-led conservation communication",
  "Human-wildlife coexistence education",
  "Herpetofauna learning and documentation",
  "Bioacoustics and sound-based nature learning",
  "Climate-responsive local conservation"
];

export default function StrategicPrioritiesPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Strategic Priorities"
          title="Priorities should guide content, not just decorate the website"
          description="Use this page to explain what DESCF will focus on over the next strategic period."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {priorities.map((priority) => (
            <Card key={priority}>
              <h2 className="text-xl font-bold text-cream">{priority}</h2>
              <p className="mt-3 text-sm leading-7 text-cream/70">Placeholder: add specific objectives, evidence, and implementation logic.</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
