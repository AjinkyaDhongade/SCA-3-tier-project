import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig({
//   server: {
//     host: '172.16.22.122',
//     port: 30400,
//   },
export default defineConfig({
  plugins: [react()],
  hot: true,
  open: true,
  server: {
    port: 3000,
    open: false,
    host: '0.0.0.0',
  },
  plugins: [],
})
