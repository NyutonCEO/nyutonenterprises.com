import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        vending: './vending/index.html',
        itCybersecurity: './it-cybersecurity/index.html',
        managedItServices: './Managed-IT-Services/index.html',
        managedIt: './managed-it/index.html',
        digitalSolutions: './digital-solutions/index.html',
        raleighVending: './raleigh-vending/index.html',
        garnerVending: './garner-vending/index.html',
        caryVending: './cary-vending/index.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
