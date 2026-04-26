import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { label: "Mission, Vision & Values", href: "/about/mission-vision-values" },
  { label: "Leadership & Governance", href: "/about/leadership-governance" },
  { label: "Strategic Priorities", href: "/strategic-priorities" },
  { label: "Reports & Publications", href: "/reports-publications" },
  { label: "Media", href: "/media" },
  { label: "Sanity Studio", href: "/studio" }
];

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-charcoal/80 py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-lg font-bold text-cream">{siteConfig.shortName}</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-cream/65">
              {siteConfig.description} Replace this footer copy with verified institutional language before launch.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring rounded-xl text-sm text-cream/70 hover:text-earth-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-cream/10 pt-6 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Deep Ecology and Snake Conservation Foundation. Phase 1 demo build.</p>
        </div>
      </Container>
    </footer>
  );
}
