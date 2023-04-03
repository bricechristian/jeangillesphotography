import { defineConfig } from 'astro/config';
// import vercel from '@astrojs/vercel/serverless';
import vercel from '@astrojs/vercel/edge';
import sanity from "astro-sanity";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jeangillesphotography.vercel.app',
  integrations: [sanity({
    projectId: 'h890ay2m',
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: false
  }), sitemap()],
  output: 'server',
  adapter: vercel()
});