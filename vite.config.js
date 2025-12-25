import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // ensures relative paths in build
  plugins: [react()],
  build: {
    outDir: 'docs', // Vercel will serve from this folder
    emptyOutDir: true,
  },
})
