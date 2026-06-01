import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: false, // এটি দিলে VS Code অটোমেটিক ব্রাউজার খুলবে না
  },
})