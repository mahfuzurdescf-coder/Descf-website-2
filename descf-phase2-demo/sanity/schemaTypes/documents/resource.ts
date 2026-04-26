import { defineField, defineType } from "sanity";

export const resource = defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3, validation: (Rule) => Rule.required().max(260) }),
    defineField({
      name: "resourceType",
      title: "Resource Type",
      type: "string",
      options: {
        list: [
          { title: "Report", value: "Report" },
          { title: "Brief", value: "Brief" },
          { title: "Publication", value: "Publication" },
          { title: "Learning Note", value: "Learning Note" },
          { title: "Media Kit", value: "Media Kit" }
        ]
      },
      initialValue: "Report"
    }),
    defineField({ name: "publicationDate", title: "Publication Date", type: "date" }),
    defineField({ name: "contributors", title: "Contributors", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "file", title: "File Upload", type: "file" }),
    defineField({ name: "externalLink", title: "External Link", type: "url" }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alternative text", type: "string" })]
    }),
    defineField({ name: "relatedProgramme", title: "Related Programme", type: "reference", to: [{ type: "programme" }] }),
    defineField({ name: "body", title: "Body", type: "portableText" }),
    defineField({ name: "seo", title: "SEO", type: "seo" })
  ],
  preview: {
    select: { title: "title", subtitle: "resourceType", media: "coverImage" }
  }
});
