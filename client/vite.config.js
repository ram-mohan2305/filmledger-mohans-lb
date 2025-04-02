import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
      target: 'http://localhost:3000',
      secure: false,
      },
    },
  },
  plugins: [react(), flowbiteReact()],
})