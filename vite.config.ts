// https://vite.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    // Add PurgeCSS plugin here to safely parse your final build output
    htmlPurge({
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}'
      ],
      safelist: {
        standard: [
          'show',
          'active',
          'fade',
          'collapsing',
          'disabled',
          'modal-open',
          'was-validated'
        ],
        greedy: [
          /^modal/,
          /^dropdown/,
          /^carousel/,
          /^offcanvas/,
          /^tooltip/,
          /^popover/
        ]
      }
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin',
        ],
      },
    },
  },
});