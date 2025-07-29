// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'ReactMFEComponent',
      filename: 'remoteEntry.js',
      exposes: {
        './ReactMFEComponent': './src/ReactMFEComponent.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 4500
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
