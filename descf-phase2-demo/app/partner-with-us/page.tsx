import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Partner With Us"
};

export default function PartnerWithUsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Partnership"
          title="Partnership should be specific, not vague"
          description="Use this page to explain what kinds of institutions, researchers, schools, donors, and communities DESCF wants to work with."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            "Research and documentation",
            "Education and awareness",
            "Conservation-linked enterprise"
          ].map((item) => (
            <Card key={item}>
              <h2 className="text-xl font-bold text-cream">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-cream/70">Placeholder: define the partnership offer, requirements, and expected outcomes.</p>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/contact">Start a conversation</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
