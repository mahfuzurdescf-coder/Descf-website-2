import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "shortTitle",
      title: "Short Title",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Default Description",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default Open Graph Image",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "address", title: "Address", type: "text", rows: 3 }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" })
          ]
        })
      ]
    }),
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "seo",
      title: "Default SEO",
      type: "seo"
    })
  ],
  preview: {
    select: { title: "title", subtitle: "description" }
  }
});
