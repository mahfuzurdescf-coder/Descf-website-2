import Link from "next/link";
import { Card } from "@/components/card";

type ProgrammeCardData = {
  title: string;
  slug: string;
  summary: string;
  status?: string;
};

export function ProgrammeCard({ programme }: { programme: ProgrammeCardData }) {
  return (
    <Card className="flex h-full flex-col">
      {programme.status ? (
        <div className="mb-5 inline-flex w-fit rounded-full border border-earth-300/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-earth-300">
          {programme.status}
        </div>
      ) : null}
      <h3 className="text-xl font-bold text-cream">{programme.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-cream/70">{programme.summary}</p>
      <Link href={`/programmes/${programme.slug}`} className="focus-ring mt-6 inline-flex rounded-full text-sm font-semibold text-earth-300 hover:text-cream">
        View programme →
      </Link>
    </Card>
  );
}
