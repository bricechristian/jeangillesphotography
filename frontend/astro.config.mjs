import { defineConfig } from 'astro/config';
// import vercel from '@astrojs/vercel/serverless';
import vercel from '@astrojs/vercel/edge';
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
    integrations: [sanity({
        projectId: 'h890ay2m',
        dataset: 'production',
        apiVersion: '2023-02-08',
        useCdn: false,
      })],
      output: 'server',
      adapter: vercel()
});