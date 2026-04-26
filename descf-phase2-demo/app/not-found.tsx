import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-earth-300">404</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-cream sm:text-6xl">Page not found</h1>
          <p className="mt-6 text-base leading-8 text-cream/70">The page does not exist in this Phase 1 demo.</p>
          <Link href="/" className="focus-ring mt-8 inline-flex rounded-full bg-earth-300 px-5 py-3 text-sm font-bold text-forest-900 hover:bg-cream">
            Back to home
          </Link>
        </div>
      </Container>
    </section>
  );
}
