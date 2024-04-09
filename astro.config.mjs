import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sveltiaCms from "astro-sveltia-cms";
import vercel from "@astrojs/vercel/serverless";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    svelte(),
    sveltiaCms(),
  ],
  output: "server",
  adapter: vercel(),
});
