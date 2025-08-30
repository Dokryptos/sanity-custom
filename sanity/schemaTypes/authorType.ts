import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "titre",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: `The slug is the url path of the project, Can use Generate button but try to keep it clean Without ponctuation(, . ; : ! ?) and Without (&é"'(-è_çà)=) (Obligation)`,
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
