import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Contact DESCF"
          description="Replace placeholders with verified contact email, office address, phone number, and social links."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-cream">General contact</h2>
            <p className="mt-3 text-sm leading-7 text-cream/70">Email: replace-with-real-email@example.org</p>
            <p className="mt-2 text-sm leading-7 text-cream/70">Phone: replace with verified phone number</p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-cream">Contact form</h2>
            <p className="mt-3 text-sm leading-7 text-cream/70">Phase 1 does not include a working form. Add a form only after choosing email delivery, spam protection, and data handling rules.</p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
