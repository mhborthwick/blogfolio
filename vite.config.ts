import glob from "glob";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "src", "pages");
const outDir = resolve(__dirname, "dist");
const blogPosts = Object.fromEntries(
  glob
    .sync("src/pages/blog/posts/**/*.html")
    .map((file) => [
      relative("src", file.slice(0, file.length - extname(file).length)),
      fileURLToPath(new URL(file, import.meta.url)),
    ])
);

export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        portfolio: resolve(root, "portfolio", "index.html"),
        ...blogPosts,
      },
    },
  },
});
