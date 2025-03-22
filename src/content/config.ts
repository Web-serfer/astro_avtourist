import { defineCollection, z } from "astro:content";

// Коллекция для блога
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
  }),
});

// Коллекция для документов
const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    pubDate: z.date(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

// Экспорт коллекций
export const collections = {
  blog: blogCollection,
  docs: docsCollection,
};
