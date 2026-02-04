import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPaths({ projects: ['./tsconfig.app.json'] })],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
  build: {
    target: 'esnext',
    sourcemap: mode !== 'production',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
          return undefined;
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
}));
