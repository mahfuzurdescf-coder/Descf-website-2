import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Media"
};

export default function MediaPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Media"
          title="Media page placeholder"
          description="This page can later host press mentions, statements, media kits, public commentary, and contact instructions for journalists."
        />
        <Card className="mt-10 max-w-3xl">
          <h2 className="text-xl font-bold text-cream">Do not fake media credibility</h2>
          <p className="mt-3 text-sm leading-7 text-cream/70">Only add verified press coverage, statements, photos, and media resources. Empty but honest is better than inflated.</p>
        </Card>
      </Container>
    </section>
  );
}
