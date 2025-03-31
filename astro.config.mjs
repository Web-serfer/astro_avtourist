// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://avtourist-surgut.ru",
  integrations: [mdx(), tailwind(), icon(), partytown()],
  markdown: {
    syntaxHighlight: "shiki",
  },
  output: "server",
  adapter: vercel(),
});
