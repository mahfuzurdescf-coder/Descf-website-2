import Link from "next/link";
import { Card } from "@/components/card";
import type { Resource } from "@/data/site";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="h-full">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth-300">{resource.type}</p>
      <h3 className="mt-4 text-xl font-bold text-cream">{resource.title}</h3>
      <p className="mt-3 text-sm leading-7 text-cream/70">{resource.summary}</p>
      <Link href={`/resources/${resource.slug}`} className="focus-ring mt-6 inline-flex rounded-full text-sm font-semibold text-earth-300 hover:text-cream">
        View resource →
      </Link>
    </Card>
  );
}
