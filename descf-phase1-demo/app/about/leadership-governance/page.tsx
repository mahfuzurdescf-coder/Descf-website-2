import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Leadership & Governance"
};

export default function LeadershipGovernancePage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Governance"
          title="Leadership & Governance"
          description="Add only real leadership, advisory, governance, and team information. This page should become CMS-driven in Phase 2 or Phase 3."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-cream">Leadership structure</h2>
            <p className="mt-3 text-sm leading-7 text-cream/70">Placeholder for verified leadership and governance information.</p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-cream">Advisory and team model</h2>
            <p className="mt-3 text-sm leading-7 text-cream/70">Placeholder for advisors, researchers, volunteers, and contributors once confirmed.</p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
