import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// const URL = process.env.NODE_ENV === "production"? "https://mern-connection-server.vercel.app":"http://localhost:5000"

export default defineConfig({
  plugins: [react()],
})
