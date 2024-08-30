import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
// import node from "@astrojs/node";


// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [],
  adapter: vercel(),
  root: ".",
  srcDir: "./src",
  publicDir: "./public",
  compressHTML: true,
  trailingSlash: "ignore",
  // server: {
  //   port: 8080,
  //   host: "0.0.0.0"
  // },
  devToolbar: {
    enabled: false
  }
});
