import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/shared/components'),
      '@views': path.resolve(__dirname, './src/views'),
      '@router': path.resolve(__dirname, './src/router'),
      '@common': path.resolve(__dirname, './src/common'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
  plugins: [vue()],
});
