export const siteConfig = {
  name: "Deep Ecology and Snake Conservation Foundation",
  shortName: "DESCF",
  url: "https://www.descf.org",
  description:
    "A Bangladesh-based wildlife conservation organisation focused on herpetofauna conservation, coexistence, public awareness, documentation, and climate-responsive conservation.",
  email: "contact@example.org",
  navItems: [
    { label: "About", href: "/about" },
    { label: "Programmes", href: "/programmes" },
    { label: "Resources", href: "/resources" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" }
  ]
};

export type Programme = {
  title: string;
  slug: string;
  summary: string;
  status: "Current" | "In development" | "Planned";
};

export const programmes: Programme[] = [
  {
    title: "Herpetofauna Conservation",
    slug: "herpetofauna-conservation",
    summary: "CMS-ready placeholder for DESCF's work on reptiles, amphibians, habitat learning, and conservation education.",
    status: "Current"
  },
  {
    title: "Snake Conservation & Coexistence",
    slug: "snake-conservation-coexistence",
    summary: "CMS-ready placeholder for awareness, coexistence education, conflict reduction, and snake conservation work.",
    status: "Current"
  },
  {
    title: "Walk With Nature by Sound",
    slug: "walk-with-nature-by-sound",
    summary: "CMS-ready placeholder for sound-based nature learning, listening practice, and environmental education.",
    status: "In development"
  },
  {
    title: "Passive Acoustic Monitoring",
    slug: "passive-acoustic-monitoring",
    summary: "CMS-ready placeholder for future field monitoring, bioacoustics, and soundscape documentation.",
    status: "In development"
  },
  {
    title: "Climate-Responsive Conservation",
    slug: "climate-responsive-conservation",
    summary: "CMS-ready placeholder for conservation work connected with climate stress, habitat change, and community resilience.",
    status: "Planned"
  }
];

export type NewsPost = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
};

export const newsPosts: NewsPost[] = [
  {
    title: "Sample Field Note: Replace with a verified DESCF update",
    slug: "sample-field-note",
    category: "Field Notes",
    excerpt: "This placeholder demonstrates the newsroom card style. Replace it with real field documentation from DESCF.",
    date: "2026-01-01"
  },
  {
    title: "Sample Conservation Explainer: Replace before launch",
    slug: "sample-conservation-explainer",
    category: "Conservation Explainers",
    excerpt: "This placeholder demonstrates how an explainer article will appear once Sanity is connected.",
    date: "2026-01-01"
  }
];

export type Resource = {
  title: string;
  slug: string;
  type: string;
  summary: string;
};

export const resources: Resource[] = [
  {
    title: "Sample Report Placeholder",
    slug: "sample-report-placeholder",
    type: "Report",
    summary: "Replace this with a verified DESCF report, publication, learning note, or external resource."
  },
  {
    title: "Sample Awareness Brief Placeholder",
    slug: "sample-awareness-brief-placeholder",
    type: "Brief",
    summary: "This card exists only to test the resource listing layout before Sanity integration."
  }
];
