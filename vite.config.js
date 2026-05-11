import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Linha-do-tempo-das-moedas-do-Brasil/'
})