type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-earth-300">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-cream/75">{description}</p> : null}
    </div>
  );
}
