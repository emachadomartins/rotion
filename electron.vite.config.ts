import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    publicDir: resolve('resources')
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    define: {
      'process.platform': JSON.stringify(process.platform)
    },
    css: {
      postcss: {
        plugins: [tailwindcss({ config: './tailwind.config.js' })]
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
