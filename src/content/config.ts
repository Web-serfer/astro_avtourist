import { defineCollection, z } from "astro:content";

// Определение коллекции blog
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    pubDate: z.date(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

// Экспорт коллекций
export const collections = {
  blog: blogCollection,
};
