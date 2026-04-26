import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({
      name: "governanceCategory",
      title: "Governance Category",
      type: "string",
      options: {
        list: [
          { title: "Leadership", value: "Leadership" },
          { title: "Governance", value: "Governance" },
          { title: "Advisor", value: "Advisor" },
          { title: "Team", value: "Team" },
          { title: "Volunteer", value: "Volunteer" }
        ]
      },
      initialValue: "Team"
    }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alternative text", type: "string" })]
    }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 10 })
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "image" }
  }
});
