import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@jay.kou/slate': path.resolve(__dirname, '../slate/src/index.ts'),
      '@jay.kou/slate-react': path.resolve(
        __dirname,
        '../slate-react/src/index.ts'
      ),
    },
  },
  build: {
    emptyOutDir: false,
    lib: {
      alias: {
        '@jay.kou/slate': path.resolve(__dirname, '../slate/src/index.ts'),
        '@jay.kou/slate-react': path.resolve(
          __dirname,
          '../slate-react/src/index.ts'
        ),
      },
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'tomatoEditor',
      fileName: (format) => `tomato-editor.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
    },
  },
})
