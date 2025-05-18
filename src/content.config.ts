import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/courses";
// export const BLOG_PATH = "src/data/content";

// schema for .yaml files (data-collection i.e. directories)
const list = defineCollection({
  loader: glob({ pattern: "**/_index.yaml", base: `./${BLOG_PATH}` }),
  schema: z.object({
    title: z.string(),
    metadata_title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});

// schema for .md files (content collection i.e. posts)
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author).optional().nullable(),
      pubDatetime: z.date(),
      modDatetime: z.date(),
      title: z.string(),
      metadata_title: z.string(),
      featured: z.boolean().optional().default(false),
      draft: z.boolean().optional().default(false),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      order: z.number().optional(),
      hidden: z.boolean().optional().default(false),
    }),
});

// export const collections = { blog };

// const entries = {
//   courses: {
//     glob: `${BLOG_PATH}/**/_index.yaml`,
//   },
// };

// export const collections = {
//   blog,
//   directoryConfig,
// };

// export { entries };

export const collections = { list, blog };
