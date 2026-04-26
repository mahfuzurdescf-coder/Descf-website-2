import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Event Detail"
};

export default function EventDetailPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-earth-300">Event</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-cream sm:text-6xl">Event detail placeholder</h1>
          <Card className="mt-10">
            <p className="text-base leading-8 text-cream/75">This is a generic Phase 1 placeholder. Phase 2 can replace it with Sanity-powered event data.</p>
          </Card>
        </div>
        <div className="mt-10">
          <ButtonLink href="/events" variant="secondary">Back to events</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
