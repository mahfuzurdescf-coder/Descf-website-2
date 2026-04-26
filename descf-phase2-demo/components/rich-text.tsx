import { PortableText, type PortableTextBlock, type PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="mt-10 text-2xl font-bold tracking-tight text-cream">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 text-xl font-bold tracking-tight text-cream">{children}</h3>,
    normal: ({ children }) => <p className="mt-5 text-base leading-8 text-cream/75">{children}</p>,
    blockquote: ({ children }) => <blockquote className="mt-6 border-l-4 border-earth-300 pl-5 text-base italic leading-8 text-cream/80">{children}</blockquote>
  },
  list: {
    bullet: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-8 text-cream/75">{children}</ul>,
    number: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-base leading-8 text-cream/75">{children}</ol>
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const isExternal = href.startsWith("http");
      return (
        <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className="font-semibold text-earth-300 underline decoration-earth-300/40 underline-offset-4 hover:text-cream">
          {children}
        </a>
      );
    }
  }
};

export function RichText({ value }: { value?: PortableTextBlock[] }) {
  if (!value?.length) return null;
  return <PortableText value={value} components={components} />;
}
