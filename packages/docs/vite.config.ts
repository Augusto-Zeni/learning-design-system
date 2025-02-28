/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/learning-design-system/',
  build: {
    outDir: 'storybook-static',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1600,
  },
})
