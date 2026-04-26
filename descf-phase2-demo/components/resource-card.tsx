import Link from "next/link";
import { Card } from "@/components/card";

type ResourceCardData = {
  title: string;
  slug: string;
  summary: string;
  type?: string;
  resourceType?: string;
};

export function ResourceCard({ resource }: { resource: ResourceCardData }) {
  return (
    <Card className="h-full">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth-300">{resource.resourceType || resource.type || "Resource"}</p>
      <h3 className="mt-4 text-xl font-bold text-cream">{resource.title}</h3>
      <p className="mt-3 text-sm leading-7 text-cream/70">{resource.summary}</p>
      <Link href={`/resources/${resource.slug}`} className="focus-ring mt-6 inline-flex rounded-full text-sm font-semibold text-earth-300 hover:text-cream">
        View resource →
      </Link>
    </Card>
  );
}
