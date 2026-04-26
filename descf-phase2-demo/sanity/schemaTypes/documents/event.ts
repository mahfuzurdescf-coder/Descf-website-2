import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "eventDate", title: "Event Date", type: "datetime" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "Seminar", value: "Seminar" },
          { title: "Talk", value: "Talk" },
          { title: "Workshop", value: "Workshop" },
          { title: "Field Event", value: "Field Event" }
        ]
      }
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Upcoming", value: "Upcoming" },
          { title: "Completed", value: "Completed" }
        ],
        layout: "radio"
      },
      initialValue: "Upcoming"
    }),
    defineField({ name: "registrationLink", title: "Registration Link", type: "url" }),
    defineField({ name: "relatedProgramme", title: "Related Programme", type: "reference", to: [{ type: "programme" }] }),
    defineField({ name: "body", title: "Body", type: "portableText" }),
    defineField({ name: "seo", title: "SEO", type: "seo" })
  ],
  preview: {
    select: { title: "title", subtitle: "eventDate" }
  }
});
