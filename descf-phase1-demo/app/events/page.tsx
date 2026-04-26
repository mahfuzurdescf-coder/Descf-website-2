import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Events"
};

const events = [
  {
    title: "Sample Seminar Placeholder",
    slug: "sample-seminar-placeholder",
    type: "Seminar",
    date: "Replace with real date"
  },
  {
    title: "Sample Nature Talk Placeholder",
    slug: "sample-nature-talk-placeholder",
    type: "Talk",
    date: "Replace with real date"
  }
];

export default function EventsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Events"
          title="Events, seminars, and talks"
          description="Phase 1 includes a static event preview. Phase 2 can turn events into Sanity documents."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <Card key={event.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth-300">{event.type}</p>
              <h2 className="mt-4 text-xl font-bold text-cream">{event.title}</h2>
              <p className="mt-3 text-sm text-cream/60">{event.date}</p>
              <Link href={`/events/${event.slug}`} className="focus-ring mt-6 inline-flex rounded-full text-sm font-semibold text-earth-300 hover:text-cream">
                View event →
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
