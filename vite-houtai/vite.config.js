import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/api/,'')
      }
    },
    host:'0.0.0.0',
    port: 80,
    open: true
  },
  // server:{
  //   host:'0.0.0.0',
  //   port: 80,
  //   open: true
  // }
})
