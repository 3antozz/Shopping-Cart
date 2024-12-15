import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  server: {
    historyApiFallback: true, // Enable fallback routing
    watch: {
      usePolling: true, // Useful for fixing HMR issues
    },
  },
})
