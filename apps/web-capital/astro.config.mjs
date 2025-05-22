import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import lit from "@astrojs/lit";
import icon from "astro-icon";

const VERCEL_PREVIEW_SITE =
  process.env.VERCEL_ENV !== 'production' &&
  process.env.VERCEL_URL &&
  `https://${process.env.VERCEL_URL}`;

const siteURL = VERCEL_PREVIEW_SITE || 'https://srf.capital/';

// https://astro.build/config
export default defineConfig({
  site: siteURL,
  redirects: {
    '/measure': '/whealth+',
    '/strategize': '/strategy',
  },
  sitemap: false,
  // Generate sitemap (set to "false" to disable)
  integrations: [
    sitemap(),
    mdx(),
    lit(),
    icon({
      iconDir: 'src/icons',
    }),
  ],
});