import { defineQuery } from "next-sanity";

const seoProjection = `
  seo{
    title,
    description,
    ogImage
  }
`;

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    title,
    shortTitle,
    description,
    email,
    phone,
    address,
    socialLinks[]{label, url},
    footerText,
    defaultOgImage,
    ${seoProjection}
  }
`);

export const programmesQuery = defineQuery(`
  *[_type == "programme" && defined(slug.current)] | order(order asc, title asc){
    _id,
    title,
    "slug": slug.current,
    summary,
    status,
    order,
    featuredImage,
    ${seoProjection}
  }
`);

export const featuredProgrammesQuery = defineQuery(`
  *[_type == "programme" && defined(slug.current)] | order(order asc, title asc)[0...3]{
    _id,
    title,
    "slug": slug.current,
    summary,
    status,
    order,
    featuredImage,
    ${seoProjection}
  }
`);

export const programmeBySlugQuery = defineQuery(`
  *[_type == "programme" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    summary,
    status,
    body,
    featuredImage,
    relatedPosts[]->{
      _id,
      title,
      "slug": slug.current,
      excerpt
    },
    relatedResources[]->{
      _id,
      title,
      "slug": slug.current,
      summary,
      resourceType
    },
    ${seoProjection}
  }
`);

export const programmeSlugsQuery = defineQuery(`
  *[_type == "programme" && defined(slug.current)][]{
    "slug": slug.current
  }
`);

export const postsQuery = defineQuery(`
  *[_type == "post" && workflowStatus == "published" && defined(slug.current)] | order(publishedAt desc)[0...12]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    language,
    category->{title, "slug": slug.current},
    author->{name, role},
    relatedProgramme->{title, "slug": slug.current},
    ${seoProjection}
  }
`);

export const featuredPostsQuery = defineQuery(`
  *[_type == "post" && workflowStatus == "published" && defined(slug.current)] | order(publishedAt desc)[0...2]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    language,
    category->{title, "slug": slug.current},
    author->{name, role},
    ${seoProjection}
  }
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    publishedAt,
    language,
    featuredImage,
    category->{title, "slug": slug.current},
    tags[]->{title, "slug": slug.current},
    author->{name, role, bio, photo},
    relatedProgramme->{title, "slug": slug.current},
    ${seoProjection}
  }
`);

export const postSlugsQuery = defineQuery(`
  *[_type == "post" && workflowStatus == "published" && defined(slug.current)][]{
    "slug": slug.current
  }
`);

export const resourcesQuery = defineQuery(`
  *[_type == "resource" && defined(slug.current)] | order(publicationDate desc, title asc){
    _id,
    title,
    "slug": slug.current,
    summary,
    resourceType,
    publicationDate,
    externalLink,
    file{asset->{url, originalFilename}},
    relatedProgramme->{title, "slug": slug.current},
    ${seoProjection}
  }
`);

export const resourceBySlugQuery = defineQuery(`
  *[_type == "resource" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    summary,
    body,
    resourceType,
    publicationDate,
    externalLink,
    file{asset->{url, originalFilename}},
    coverImage,
    relatedProgramme->{title, "slug": slug.current},
    contributors,
    ${seoProjection}
  }
`);

export const resourceSlugsQuery = defineQuery(`
  *[_type == "resource" && defined(slug.current)][]{
    "slug": slug.current
  }
`);

export const eventsQuery = defineQuery(`
  *[_type == "event" && defined(slug.current)] | order(eventDate desc)[0...12]{
    _id,
    title,
    "slug": slug.current,
    summary,
    eventDate,
    location,
    eventType,
    status,
    ${seoProjection}
  }
`);

export const eventBySlugQuery = defineQuery(`
  *[_type == "event" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    summary,
    eventDate,
    location,
    eventType,
    status,
    registrationLink,
    relatedProgramme->{title, "slug": slug.current},
    body,
    ${seoProjection}
  }
`);

export const eventSlugsQuery = defineQuery(`
  *[_type == "event" && defined(slug.current)][]{
    "slug": slug.current
  }
`);
