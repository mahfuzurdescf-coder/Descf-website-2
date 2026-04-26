import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Donate / Support Us"
};

export default function DonatePage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Support"
          title="Support page placeholder"
          description="Do not add payment buttons until the legal, financial, and operational setup is ready. Start with clear support instructions only."
        />
        <Card className="mt-10 max-w-3xl">
          <h2 className="text-xl font-bold text-cream">Phase 1 recommendation</h2>
          <p className="mt-3 text-sm leading-7 text-cream/70">
            Keep this page informational for now. Add verified donation methods, banking details, or payment gateway integration only when DESCF is ready to manage financial reporting transparently.
          </p>
        </Card>
      </Container>
    </section>
  );
}
