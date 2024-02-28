import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // if we add proxy, now it we will not have cors issues as api will think we are calling it from the localhost:3000
  // now when we call an api from "/api", it will add that localhost:3000 link in the front
  server:{
    proxy: {
      "/api" : "http://localhost:3000",
    }
  },
  plugins: [react()],
})
