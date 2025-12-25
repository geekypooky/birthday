import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Important for Vercel
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
