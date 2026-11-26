import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/products' }),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    name: z.string(),
    tamilName: z.string().optional(),
    categoryLabel: z.string().optional(),
    locationLabel: z.string().optional(),
    slug: z.string(),
    href: z.string(),
    shortDescription: z.string(),
    summaryIntro: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    exploreLabel: z.string().optional(),
    enquiryLabel: z.string(),
    whatsappMessage: z.string(),
    image: z.object({
      src: z.string().optional(),
      alt: z.string(),
      placeholderLabel: z.string().optional(),
      isGenerated: z.boolean().default(true),
    }),
  }),
});

const breeds = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/breeds' }),
  schema: z.object({
    name: z.string(),
    tamilName: z.string().optional(),
    slug: z.string(),
    confirmed: z.boolean().default(false),
    summary: z.string(),
    characteristics: z.string().optional(),
    appearance: z.string().optional(),
    commonPurpose: z.string().optional(),
    generalInfo: z.string().optional(),
    availabilityStatus: z.string().optional(),
    whatsappMessage: z.string().optional(),
    image: z.string().optional(),
  }),
});

const goats = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/goats' }),
  schema: z.object({
    name: z.string(),
    confirmed: z.boolean().default(false),
    notes: z.string(),
    image: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    confirmed: z.boolean().default(false),
    summary: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/settings' }),
  schema: z.object({
    businessName: z.string(),
    locationShort: z.string(),
    locationFull: z.string(),
    contact: z.object({
      phoneDisplay: z.string(),
      phoneConfirmed: z.boolean(),
      whatsappNumber: z.string(),
      whatsappConfirmed: z.boolean(),
      email: z.string(),
      emailConfirmed: z.boolean(),
      addressNote: z.string(),
      addressConfirmed: z.boolean(),
      googleMapsUrl: z.string().optional(),
      googleMapsConfirmed: z.boolean().default(false),
      hoursNote: z.string(),
      hoursConfirmed: z.boolean(),
    }),
    navLinks: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
        requiresConfirmation: z.boolean().optional(),
      })
    ),
    footerProductLinks: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    ),
    footerLegalLinks: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    ),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

export const collections = {
  products,
  breeds,
  goats,
  services,
  blog,
  settings,
};
