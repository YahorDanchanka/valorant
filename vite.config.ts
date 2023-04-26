import { defineConfig } from 'vite'
import path from 'path'
import postcssSortMediaQueries from 'postcss-sort-media-queries'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [postcssSortMediaQueries({ sort: 'desktop-first' })],
    },
  },
})
