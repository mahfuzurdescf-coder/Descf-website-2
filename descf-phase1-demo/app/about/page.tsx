import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "About DESCF",
  description: "Institutional overview page for DESCF's Phase 1 website demo."
};

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="About DESCF"
          title="A conservation organisation needs clarity before decoration."
          description="This page is a structured placeholder. Replace it with verified institutional history, legal identity, founding context, and operating model."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card>
            <h2 className="text-xl font-bold text-cream">Institutional identity</h2>
            <p className="mt-3 text-sm leading-7 text-cream/70">Add verified information about DESCF's registration, founding background, governance structure, and operational scope.</p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-cream">Conservation scope</h2>
            <p className="mt-3 text-sm leading-7 text-cream/70">Describe the organisation's focus on herpetofauna, snake conservation, awareness, documentation, and learning.</p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-cream">Public credibility</h2>
            <p className="mt-3 text-sm leading-7 text-cream/70">Do not add claims unless they are verifiable. Evidence, reports, and field notes should support the public narrative.</p>
          </Card>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/about/mission-vision-values">Mission and values</ButtonLink>
          <ButtonLink href="/about/leadership-governance" variant="secondary">Leadership and governance</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
