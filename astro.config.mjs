import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://khod.net',
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'poimandres' } }
});
