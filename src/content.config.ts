import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sharedSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: sharedSchema.extend({ category: z.string().optional() }),
});

const rituals = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/rituals' }),
  schema: sharedSchema.extend({ ritual: z.string().optional() }),
});

const machines = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/machines' }),
  schema: sharedSchema.extend({
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    status: z.string().optional(),
  }),
});

export const collections = { blog, rituals, machines };
