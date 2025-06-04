import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import { remarkInjectTimestamps } from "./src/utils/remark-inject-timestamps.mjs";
import { SITE } from "./src/config";
import mdx from "@astrojs/mdx";
import playformCompress from "@playform/compress";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
    mdx(),
    playformCompress({
      CSS: false,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false,
        },
      },
      Image: true,
      JavaScript: true,
      SVG: false,
    }),
    compressor({
      fileExtensions: [".html", ".css", ".js", ".cjs", ".mjs", ".svg", ".xml"],
      gzip: true,
      brotli: true,
    }),
  ],
  prefetch: {
    // Automatically prefetch all links once the page loads.
    // (If you prefer hover-only, set this to false and add data-astro-prefetch on each <a>.)
    prefetchAll: false,

    // Optionally override the default strategy for links without an explicit value.
    // defaultStrategy: 'viewport',
  },
  markdown: {
    remarkPlugins: [
      remarkInjectTimestamps,
      remarkToc,
      [remarkCollapse, { test: "Table of contents" }],
    ],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: {
        light: "github-light",
        dark: "github-dark",
        // light: "everforest-light",
        // dark: "one-dark-pro",
      },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    // experimentalLayout: "responsive",
  },
  experimental: {
    // svg: true,
    responsiveImages: true,
    preserveScriptOrder: true,
  },
  trailingSlash: "always", // Ensure URLs always have a trailing slash
  output: "static",
  build: {
    assets: "resources",
  },
});
