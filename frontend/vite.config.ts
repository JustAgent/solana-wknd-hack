import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext' // you can also use 'es2020' here
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext' // you can also use 'es2020' here
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  define: {
    'process.env.ANCHOR_BROWSER': true
  },
})
