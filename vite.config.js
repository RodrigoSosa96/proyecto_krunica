import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  //set root directory
  root: './',
  build: {
    target: "esnext"
    
  }
})
