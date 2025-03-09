// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  build: {
    assetsPrefix: './',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://greezybob.github.io',
});
