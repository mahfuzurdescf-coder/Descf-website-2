import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Mission, Vision & Values"
};

const items = ["Mission", "Vision", "Values"];

export default function MissionVisionValuesPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Institutional foundation"
          title="Mission, vision, and values"
          description="Use this page to define DESCF's public promise. Keep it specific, evidence-based, and free from generic NGO language."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item}>
              <h2 className="text-xl font-bold text-cream">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-cream/70">Placeholder: add the approved DESCF {item.toLowerCase()} statement here.</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
