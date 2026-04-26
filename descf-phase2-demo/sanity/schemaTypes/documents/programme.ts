import { defineField, defineType } from "sanity";

export const programme = defineType({
  name: "programme",
  title: "Programme",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "summary",
      title: "Short Summary",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().max(240)
    }),
    defineField({
      name: "status",
      title: "Programme Status",
      type: "string",
      options: {
        list: [
          { title: "Current", value: "Current" },
          { title: "In development", value: "In development" },
          { title: "Planned", value: "Planned" }
        ],
        layout: "radio"
      },
      initialValue: "Current"
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 10
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alternative text", type: "string" })
      ]
    }),
    defineField({
      name: "body",
      title: "Programme Body",
      type: "portableText"
    }),
    defineField({
      name: "relatedPosts",
      title: "Related Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }]
    }),
    defineField({
      name: "relatedResources",
      title: "Related Resources",
      type: "array",
      of: [{ type: "reference", to: [{ type: "resource" }] }]
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo"
    })
  ],
  preview: {
    select: { title: "title", subtitle: "status", media: "featuredImage" }
  }
});
