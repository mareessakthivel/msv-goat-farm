import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Confirmed live Cloudflare Workers production domain
  site: 'https://msv-goat-farm.websitedesign.workers.dev',
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  image: {
    service: passthroughImageService(),
  },
});
