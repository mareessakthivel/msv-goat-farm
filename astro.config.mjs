import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Confirmed Cloudflare Pages production domain
  site: 'https://msvgoatfarm.pages.dev',
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
