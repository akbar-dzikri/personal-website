// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    post_img: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    editedAt: z.date(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    project_img: z.string(),
    repoUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    description: z.string(),
    isWip: z.boolean().default(true),
    publishedAt: z.date(),
    editedAt: z.date(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
