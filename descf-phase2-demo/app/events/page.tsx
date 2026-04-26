import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { getEvents } from "@/lib/sanity/fetchers";

export const metadata: Metadata = {
  title: "Events"
};

const fallbackEvents = [
  {
    title: "Sample Seminar Placeholder",
    slug: "sample-seminar-placeholder",
    eventType: "Seminar",
    eventDate: "Replace with real date"
  },
  {
    title: "Sample Nature Talk Placeholder",
    slug: "sample-nature-talk-placeholder",
    eventType: "Talk",
    eventDate: "Replace with real date"
  }
];

export default async function EventsPage() {
  const cmsEvents = await getEvents();
  const events = cmsEvents?.length ? cmsEvents : fallbackEvents;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Events"
          title="Events, seminars, and talks"
          description="Events are now supported as Sanity documents. Add real event records only when dates, speakers, and locations are verified."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <Card key={event.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth-300">{event.eventType || "Event"}</p>
              <h2 className="mt-4 text-xl font-bold text-cream">{event.title}</h2>
              <p className="mt-3 text-sm text-cream/60">{event.eventDate || "Date to be confirmed"}</p>
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
