import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			pubDate: z.date(),
			description: z.string(),
			link: z.string(),
			author: z.object({
				name: z.string(),
				link: z.string(),
			}),
			order: z.number(),
			video: z.optional(z.string()),
			image: z.optional(
				z.object({
					source: image(),
					alt: z.string(),
				}),
			),
			tags: z.optional(z.array(z.string())),
		}),
});

export const collections = {
	projects: projectsCollection,
};
