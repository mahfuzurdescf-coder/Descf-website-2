import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alternative text", type: "string" })]
    }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "profileUrl", title: "Profile URL", type: "url" })
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" }
  }
});
