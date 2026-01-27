import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'unplugin-auto-import/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      imports: ['vue'], // auto-import ref, computed, etc.
      dirs: ['src/utils'], // auto-import anything exported from utils
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    })
  ],
  resolve: {
    alias: {
      // Map "@" to the project root's src directory for cleaner imports.
      // Ref for resolve.alias: https://vite.dev/config/shared-options.html#resolve-alias
      // Ref for fileURLToPath: https://nodejs.org/api/url.html#fileurltopathurl
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
