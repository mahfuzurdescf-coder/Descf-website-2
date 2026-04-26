"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-cream/10 bg-forest-900/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-earth-300/40 bg-earth-300/15 text-sm font-bold text-earth-300">
            D
          </span>
          <span>
            <span className="block text-sm font-bold tracking-wide text-cream">{siteConfig.shortName}</span>
            <span className="hidden text-xs text-cream/60 sm:block">Deep Ecology and Snake Conservation Foundation</span>
          </span>
        </Link>

        <button
          type="button"
          className="focus-ring rounded-full border border-cream/15 px-4 py-2 text-sm font-semibold text-cream lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition ${
                  active ? "bg-cream text-forest-900" : "text-cream/75 hover:bg-cream/10 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/donate"
            className="focus-ring ml-2 rounded-full bg-earth-300 px-4 py-2 text-sm font-bold text-forest-900 transition hover:bg-cream"
          >
            Support
          </Link>
        </div>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-cream/10 bg-forest-900 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-cream/80 hover:bg-cream/10 hover:text-cream"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="focus-ring rounded-2xl bg-earth-300 px-4 py-3 text-sm font-bold text-forest-900"
              onClick={() => setIsOpen(false)}
            >
              Support DESCF
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
