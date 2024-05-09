import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import lit from "@astrojs/lit";
import icon from "astro-icon";

const VERCEL_PREVIEW_SITE = process.env.VERCEL_ENV !== 'production' && process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`;
const siteURL = VERCEL_PREVIEW_SITE || 'https://srfimpact.org/';

export default defineConfig({
  site: siteURL,
  sitemap: true,
  // Generate sitemap (set to "false" to disable)
  integrations: [
    sitemap(),
    mdx(),
    lit(),
    icon(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    }
  },
});