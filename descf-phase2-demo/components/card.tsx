import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <article className={`rounded-3xl border border-cream/10 bg-cream/[0.06] p-6 shadow-soft backdrop-blur ${className}`}>
      {children}
    </article>
  );
}
