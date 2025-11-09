import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/lit-demo/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        guide: resolve(__dirname, 'shadow-dom-guide.html'),
      },
    },
  }
});
