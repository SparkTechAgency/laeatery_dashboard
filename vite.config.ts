import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 

export default defineConfig({
  plugins: [react()],
  server: {
    host: '10.0.60.41',
    port: 5173,  
  },
})
