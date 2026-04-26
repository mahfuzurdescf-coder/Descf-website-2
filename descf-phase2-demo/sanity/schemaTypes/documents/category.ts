import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "kind",
      title: "Category Kind",
      type: "string",
      options: {
        list: [
          { title: "Newsroom", value: "newsroom" },
          { title: "Resource", value: "resource" },
          { title: "Programme", value: "programme" }
        ],
        layout: "radio"
      },
      initialValue: "newsroom"
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 })
  ],
  preview: {
    select: { title: "title", subtitle: "kind" }
  }
});
