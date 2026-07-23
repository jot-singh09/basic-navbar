import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks(id) {  // ← THIS MUST BE A FUNCTION
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
})