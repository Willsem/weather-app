import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import suidPlugin from '@suid/vite-plugin';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [solidPlugin(), suidPlugin(), eslint()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
