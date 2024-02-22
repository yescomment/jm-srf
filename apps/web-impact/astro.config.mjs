import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import lit from "@astrojs/lit";

const VERCEL_PREVIEW_SITE =
  process.env.VERCEL_ENV !== 'production' &&
  process.env.VERCEL_URL &&
  `https://${process.env.VERCEL_URL}`;

const siteURL = VERCEL_PREVIEW_SITE || 'https://srfimpact.org/';

// https://astro.build/config
export default defineConfig({
  site: siteURL,
  sitemap: true,
  // Generate sitemap (set to "false" to disable)
  integrations: [
    sitemap(),
    mdx(),
    lit(),
    compress({
      css: false,
    }),
  ], // Add renderers to the config
  // This is for the astro-icon package. You can find more about the package here: https://www.npmjs.com/package/astro-icon
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});