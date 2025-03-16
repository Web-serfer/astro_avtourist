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
    faq: z
      .array(
        z.object({
          question: z.string(), // Вопрос
          answer: z.string(), // Ответ
        })
      )
      .optional(), // Поле faq необязательное
  }),
});

// Экспорт коллекций
export const collections = {
  blog: blogCollection,
};
