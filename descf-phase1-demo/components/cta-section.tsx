import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="cta-heading">
      <Container>
        <div className="rounded-[2rem] border border-earth-300/30 bg-gradient-to-br from-earth-300/20 via-cream/[0.06] to-forest-700/70 p-8 shadow-soft sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-earth-300">Work with DESCF</p>
            <h2 id="cta-heading" className="text-3xl font-bold text-cream sm:text-4xl">
              Build a stronger conservation platform before adding unnecessary complexity.
            </h2>
            <p className="mt-4 text-base leading-8 text-cream/75">
              This demo is designed to prove layout, routing, accessibility, and deployment first. CMS integration comes in Phase 2.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/partner-with-us">Partner with us</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact DESCF
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
