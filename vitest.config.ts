// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/renderer/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', 'out', 'src/main/**/*'],
    alias: {
      '@': resolve(__dirname, './src/renderer')
    },
    setupFiles: './vitest.setup.ts',

    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/main/**/*', '**/*.d.ts', '**/*.test.*']
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/renderer')
    }
  }
})
