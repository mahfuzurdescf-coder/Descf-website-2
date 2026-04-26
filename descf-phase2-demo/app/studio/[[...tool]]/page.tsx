import type { Metadata } from "next";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { isSanityConfigured } from "@/lib/sanity/env";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "DESCF CMS Studio"
};

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <section className="py-20 sm:py-28">
        <Container>
          <Card className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-earth-300">Sanity setup required</p>
            <h1 className="mt-4 text-3xl font-bold text-cream">Connect a real Sanity project before opening Studio.</h1>
            <p className="mt-4 text-sm leading-7 text-cream/70">
              Add NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and NEXT_PUBLIC_SANITY_API_VERSION to .env.local. Then restart the development server.
            </p>
          </Card>
        </Container>
      </section>
    );
  }

  return <NextStudio config={config} />;
}
