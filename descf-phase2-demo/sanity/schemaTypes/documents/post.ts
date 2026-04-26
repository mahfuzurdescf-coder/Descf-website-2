import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(240)
    }),
    defineField({
      name: "workflowStatus",
      title: "Editorial Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Review", value: "review" },
          { title: "Published", value: "published" }
        ],
        layout: "radio"
      },
      initialValue: "draft"
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Bengali", value: "bn" },
          { title: "Bilingual", value: "bilingual" }
        ],
        layout: "radio"
      },
      initialValue: "en"
    }),
    defineField({ name: "publishedAt", title: "Published Date", type: "datetime" }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "category", title: "Category", type: "reference", to: [{ type: "category" }] }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "reference", to: [{ type: "tag" }] }] }),
    defineField({ name: "relatedProgramme", title: "Related Programme", type: "reference", to: [{ type: "programme" }] }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alternative text", type: "string" })]
    }),
    defineField({ name: "body", title: "Body", type: "portableText" }),
    defineField({ name: "seo", title: "SEO", type: "seo" })
  ],
  preview: {
    select: { title: "title", subtitle: "workflowStatus", media: "featuredImage" }
  }
});
