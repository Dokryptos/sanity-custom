import { ArchiveIcon } from "@sanity/icons";
import { orderRankOrdering } from "@sanity/orderable-document-list";
import { defineField, defineType, defineArrayMember } from "sanity";

export const tribuneType = defineType({
  name: "tribune",
  title: "Tribunes",
  type: "document",
  icon: ArchiveIcon,
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: "titre",
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
      name: "gallery",
      title: "gallery",
      type: "array",
      description:
        "Select all the image you want to render, in Webp for keep the place on the CMS and keep the CMS available with the free version (Obligation) with 1 image",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      of: [
        defineArrayMember({
          type: "image",
          name: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    defineField({
      name: "Auteur",
      title: "auteur",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: "l'auteur de la tribune est obligatoire (Obligation)",
    }),
    defineField({
      name: "infoauteur",
      title: "Infoauteur",
      type: "text",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: "l'info auteur pour la tribune est obligatoire (Obligation)",
    }),
    defineField({
      name: "tempsDeLecture",
      title: "Temps de lecture",
      type: "number",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description:
        "Temps de lecture pour la tribune est obligatoire (Obligation)",
    }),
    defineField({
      name: "texte",
      title: "Texte",
      type: "text",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      description: "Le texte pour la tribune est obligatoire (Obligation)",
    }),
    defineField({
      name: "chapeau",
      title: "Chapeau",
      type: "text",
      description: "Le chapeau pour la tribune",
    }),
    defineField({
      name: "citation",
      title: "Citaton",
      type: "text",
      description: "La citation pour la tribune",
    }),
    defineField({
      name: "intertitre",
      title: "Intertitre",
      type: "text",
      description: "L'intertitre pour la tribune",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
