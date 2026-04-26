import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { RichText } from "@/components/rich-text";
import { buildMetadata } from "@/lib/metadata";
import { getEventBySlug, getEventSlugs } from "@/lib/sanity/fetchers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const fallbackEvents = [
  {
    title: "Sample Seminar Placeholder",
    slug: "sample-seminar-placeholder",
    eventType: "Seminar",
    eventDate: "Replace with real date",
    summary: "Placeholder event. Replace with a verified seminar, workshop, or talk."
  },
  {
    title: "Sample Nature Talk Placeholder",
    slug: "sample-nature-talk-placeholder",
    eventType: "Talk",
    eventDate: "Replace with real date",
    summary: "Placeholder event. Replace with a verified seminar, workshop, or talk."
  }
];

export async function generateStaticParams() {
  const cmsSlugs = await getEventSlugs();
  if (cmsSlugs?.length) return cmsSlugs;
  return fallbackEvents.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cmsEvent = await getEventBySlug(slug);
  const fallback = fallbackEvents.find((item) => item.slug === slug);
  const event = cmsEvent || fallback;

  if (!event) return { title: "Event not found" };

  return buildMetadata({
    title: event.title,
    description: event.summary,
    path: `/events/${slug}`,
    seo: "seo" in event ? event.seo : undefined
  });
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cmsEvent = await getEventBySlug(slug);
  const fallback = fallbackEvents.find((item) => item.slug === slug);
  const event = cmsEvent || fallback;

  if (!event) notFound();

  const hasBody = "body" in event && Boolean(event.body?.length);
  const eventDate = event.eventDate && !event.eventDate.includes("Replace") ? new Date(event.eventDate).toLocaleDateString("en-GB", { dateStyle: "full" }) : event.eventDate || "Date to be confirmed";

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-earth-300">{event.eventType || "Event"}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-cream sm:text-6xl">{event.title}</h1>
          <p className="mt-5 text-base text-cream/65">{eventDate}</p>
          {event.location ? <p className="mt-2 text-base text-cream/65">{event.location}</p> : null}
          <Card className="mt-10">
            {hasBody ? (
              <RichText value={"body" in event ? event.body : undefined} />
            ) : (
              <p className="text-base leading-8 text-cream/75">
                {event.summary || "Add verified event description in Sanity before public launch."}
              </p>
            )}
            {"registrationLink" in event && event.registrationLink ? (
              <a href={event.registrationLink} className="focus-ring mt-6 inline-flex rounded-full bg-earth-300 px-5 py-3 text-sm font-bold text-forest-900 hover:bg-earth-100">
                Registration link
              </a>
            ) : null}
          </Card>
        </div>
        <div className="mt-10">
          <ButtonLink href="/events" variant="secondary">Back to events</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
