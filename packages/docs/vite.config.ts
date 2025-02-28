/// <reference types="vite/client" />

import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx({
    // Adicione esta configuração
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [],
    rehypePlugins: [],
  })],
  base: process.env.NODE_ENV === 'production'
    ? '/learning-design-system/'
    : '/',
})
