import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/D-liChez/', // 👈 Add this line
  plugins: [react()],
})
