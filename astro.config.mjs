// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://Pascal9000/github.io",
  base: "/navbar-test/",
  integrations: [tailwind()],
});